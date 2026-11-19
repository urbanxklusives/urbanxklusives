# Garrain Full-Interview Embed Swap — PENDING (apply before DNS flip)

**Status (2026-11-18 ~22:15 EST): PENDING — YouTube upload still running.**
The coordinator has not yet written `~/workspace/github-pages-migration/garrain-youtube-id.txt`.
When that file appears with the video ID, apply the patch below, re-verify div
balance (must stay 1307/1307 — this swap changes no divs), and push as a
follow-up commit. **Do NOT flip DNS until this swap is applied:** the local
file is excluded from this repo (570 MB > GitHub's 100 MB file limit), so
until the swap lands, the spotlight embed below 404s on the Pages site.

## What embeds the local file

NOT the `post-garrain-jones` post block — that block embeds only the YouTube
Short (`52mnOvNRGYM`) and is unaffected. The local 570 MB file is embedded in
the **spotlight section `#spotlight-garrain`**, second `watch-feature`
("NEW — FULL INTERVIEW"), `index.html` line 1977 in the pushed snapshot.

## Exact patch (match on the video line, not the line number)

OLD (one line, 12-space indent — copy exactly):
```html
            <video src="assets/vid/garrain-jones-full-interview.mp4" poster="assets/img/garrain-jones-now.jpg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" controls playsinline preload="metadata" title="Garrain Jones — Back to the Future (full interview)"></video>
```

NEW (replace `VIDEO_ID` with the ID from `garrain-youtube-id.txt`; styling
mirrors the sibling Short iframe in the same section — absolute fill,
`border:0`, lazy, fullscreen):
```html
            <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Garrain Jones — Change Your Mindset, Change Your Life (Full Interview) | UrbanXklusives" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allowfullscreen></iframe>
```

## After applying

1. Confirm zero remaining references to `garrain-jones-full-interview.mp4` in
   `index.html` (there is exactly 1 before the swap).
2. Confirm div balance is still 1307/1307.
3. Delete this file in the same commit (it is a working note, not site
   content) — or leave it; it is harmless either way.
4. The fixed 184 MB master lives at
   `~/workspace/your_files/garrain-jones-full-interview-title-card.mp4`
   (local only — never goes in this repo). The 570 MB original stays in
   `~/workspace/uxk-mockup/v3/assets/vid/` (excluded from the snapshot).
