# WAVE-0 project page

Self-contained static page at `/release/wave0/`. No build step or JavaScript framework is required. For local preview, use a server with HTTP Range support so the video timeline can seek before the entire file has downloaded.

Run from the personal-site repository root, then open `http://localhost:8765/release/wave0/`:

```bash
python -m pip install RangeHTTPServer==1.4.0
python -m RangeHTTPServer 8765 --bind 127.0.0.1
```

Python's built-in `http.server` does not support byte-range requests and can prevent video seeking in local previews.

## Introduction video

The introduction is `assets/videos/wave_0_video.mp4`, embedded in `#intro-video` in `index.html`. Its cover, `assets/intro-poster.jpg`, is a title frame extracted from the video. To replace the video, update the player's source and fallback links in `index.html` and provide a matching cover.

The native player preserves the original aspect ratio and audio, with user-controlled playback and no autoplay. It works without JavaScript; when JavaScript is enabled, a failed load displays the cover with an unavailable message and a direct video link. Add a captions `<track>` to `#intro-video` when subtitles are available.

## Content and assets

- `index.html`: paper title, resource links, method, results, and acknowledgements. Results are static HTML; benchmark tabs add progressive interaction. The paper link and author list are pending; do not infer them from the anonymous manuscript.
- `style.css`: responsive layout, keyboard focus, and reduced-motion support.
- `app.js`: video error fallback, accessible tabs, figure enlargement, and copy command.
- `assets/method.webp`: Figure 2, cropped from the manuscript.
- `assets/paradigms.webp`: Figure 1, cropped from the manuscript.
- `assets/books.webp`, `usb.webp`, `keyboard.webp`, `hero-poster.webp`: original images embedded in Figure 3, not generated demonstrations.
- `assets/mark.svg`: a small vector wave mark created for this page.
- `assets/videos/book-organization.mp4`, `usb-storage.mp4`, `keyboard-pushback.mp4`: supplied WAVE-0 successful real-world rollouts, displayed with native video controls. The original paper frames serve as posters.

Numbers follow Tables 1–3 and Section 4.4 of the WAVE-0 manuscript. Benchmark tables show selected comparisons and label them as such. The full anonymous manuscript is not included. No authors, affiliations, acceptance status, arXiv identifier, or BibTeX entry are invented.

Before publishing, confirm the author list and paper link, and ensure the linked model collection is accessible to the intended audience. This page does not change model-repository visibility.
