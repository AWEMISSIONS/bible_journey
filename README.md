# Bible Journey: Match & Discover

An Android-installable, offline-capable Bible matching game.

## Play or install

Open **https://awemissions.github.io/bible_journey/** on an Android phone using Chrome. After it loads, tap Chrome's menu and choose **Install app** or **Add to Home screen**.

## Play locally

The game must be served over HTTP so offline installation works:

```bash
python3 -m http.server 8080 --directory .
```

Then open `http://localhost:8080`.

## Included

- Twelve playable matching boards from Creation through Noah
- Layered, blocked-tile matching rules
- Story and Scripture reveal after each level
- Three-star performance scoring and daily board
- Hint, shuffle, undo, and remove-pair tools
- Collection book, journey map, stats, settings, and local saved progress
- Responsive phone/tablet layout and offline service worker

## Scripture Tiles

The home screen also links to **Scripture Tiles**, a separate Mahjong Solitaire style puzzle using Christian symbols and Scripture references. Match identical open tiles such as the cross, fish, Bible, dove, and John 3:16. It works in the browser and keeps its score on the device.

Scripture excerpts in Bible Journey use KJV/public-domain text. Before a commercial release using ESV text, obtain the appropriate ESV API or publishing permission and add the required attribution.
