# Bible Journey: Match & Discover

An Android-installable, offline-capable Bible matching game MVP.

## Play or install

Open **https://awemissions.github.io/bible_journey/** on an Android phone using Chrome. After it loads, tap Chrome's menu and choose **Install app** or **Add to Home screen**.

## Play locally

The game must be served over HTTP so offline installation works:

```bash
python3 -m http.server 8080 --directory .
```

Then open `http://localhost:8080`.

## Install on Android

1. Open https://awemissions.github.io/bible_journey/ in Chrome on the Android phone.
2. Tap the browser menu and choose **Install app** or **Add to Home screen**.

It launches full-screen, keeps progress on the device, and works offline after the first visit.

## Included in this MVP

- Twelve playable matching boards from Creation through Noah
- Layered, blocked-tile matching rules
- Story and Scripture reveal after each level
- Three-star performance scoring
- Daily Journey board
- Hint, shuffle, undo, and remove-pair tools
- Collection book, journey map, stats, settings, and local saved progress
- Responsive phone/tablet layout and offline service worker

Scripture excerpts are KJV/public-domain text. Before a commercial release using ESV text, obtain the appropriate ESV API or publishing permission and add the required attribution.
