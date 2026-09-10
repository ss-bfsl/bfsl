import { useEffect, useRef, useState } from 'react';

// Points at your news-alerts Python service (main.py). Override by setting
// VITE_NEWS_WS_URL in a .env file. Static production builds do not try to
// connect to localhost because GitHub Pages cannot host the socket service.
const configuredWsUrl = import.meta.env.VITE_NEWS_WS_URL?.trim();
const isLoopbackUrl = configuredWsUrl && /^(wss?:\/\/)(localhost|127\.0\.0\.1)(?::\d+)?(?:\/|$)/i.test(configuredWsUrl);
const WS_URL = import.meta.env.DEV
  ? configuredWsUrl || 'ws://localhost:8765'
  : configuredWsUrl && !isLoopbackUrl
    ? configuredWsUrl
    : '';

function normalize(raw) {
  // "initial" items look like {source, title, link, published_at, seen_at, eligible}
  // "new_item" items look like {source, title, link, summary}
  const company = (raw.source || '').replace(/^News:\s*/, '').replace(/\s*Blog$/, '');
  return {
    id: raw.link || `${raw.source}:${raw.title}`,
    title: raw.title || '(no title)',
    company,
    summary: raw.summary || '',
    date: raw.published_at || raw.seen_at || new Date().toISOString(),
    sourceUrl: raw.link || '#',
  };
}

export function useNewsSocket() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(WS_URL ? 'connecting' : 'unavailable'); // connecting | open | closed | unavailable
  const socketRef = useRef(null);
  const [reconnectNonce, setReconnectNonce] = useState(0);

  useEffect(() => {
    let cancelled = false;
    if (!WS_URL) {
      setStatus('unavailable');
      return () => {
        cancelled = true;
      };
    }

    setStatus('connecting');
    const ws = new WebSocket(WS_URL);
    socketRef.current = ws;

    ws.onopen = () => !cancelled && setStatus('open');
    ws.onclose = () => !cancelled && setStatus('closed');
    ws.onerror = () => !cancelled && setStatus('closed');

    ws.onmessage = (event) => {
      if (cancelled) return;
      try {
        const msg = JSON.parse(event.data);
        if (msg.type === 'initial') {
          setItems(msg.items.map(normalize));
        } else if (msg.type === 'new_item') {
          setItems((prev) => [normalize(msg.data), ...prev]);
        }
      } catch (e) {
        console.error('Bad message from news socket:', e);
      }
    };

    return () => {
      cancelled = true;
      ws.close();
    };
  }, [reconnectNonce]);

  const reconnect = () => setReconnectNonce((n) => n + 1);

  return { items, status, reconnect };
}