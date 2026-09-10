import json
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "server"))

import main


def main_generate():
    config = main.load_config()
    recent_days = config.get("recent_days", 1)
    sources = main.build_source_list(config)
    seen_posts = main.remove_excluded_posts(main.load_seen_posts(), config.get("excluded_keywords", []))
    seen_posts = main.remove_inactive_sources(seen_posts, sources)
    seen_posts = main.remove_invalid_seen_posts(seen_posts, sources)
    main.fetch_new_items(seen_posts, sources, recent_days)
    main.save_seen_posts(seen_posts)

    items = sorted(
        (
            item for item in seen_posts.values()
            if main.is_recent_timestamp(item.get("published_at"), recent_days)
        ),
        key=lambda item: item.get("seen_at", ""),
        reverse=True,
    )[:50]

    output_path = os.path.join(os.path.dirname(__file__), "..", "public", "news.json")
    with open(output_path, "w", encoding="utf-8") as output_file:
        json.dump({"items": items}, output_file, ensure_ascii=False)
    print(f"Wrote {len(items)} news item(s) to {output_path}")


if __name__ == "__main__":
    main_generate()