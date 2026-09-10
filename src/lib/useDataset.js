import { useCallback, useEffect, useState } from 'react';
import { loadDataset, forceRefresh } from './dataSource';

/**
 * Loads a dataset on mount following its cadence rule, and exposes a
 * `refresh()` function for the manual "Refresh now" button.
 */
export function useDataset(datasetKey, cadence = 'monthly') {
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    loadDataset(datasetKey, { cadence })
      .then((r) => !cancelled && setRecord(r))
      .catch((e) => !cancelled && setError(e))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [datasetKey, cadence]);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const r = await forceRefresh(datasetKey);
      setRecord(r);
      setError(null);
    } catch (e) {
      setError(e);
    } finally {
      setRefreshing(false);
    }
  }, [datasetKey]);

  return {
    data: record?.data ?? null,
    fetchedAt: record?.fetchedAt ?? null,
    trigger: record?.trigger ?? null,
    loading,
    refreshing,
    error,
    refresh,
  };
}
