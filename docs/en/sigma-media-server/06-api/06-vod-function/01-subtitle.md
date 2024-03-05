---
title: Subtitle
order: 1
---

# Subtitle

- Supported\*\*\*: transcode only
  - DVBTeletext(Text) -> webvtt(hls, dash), ttml-text(dash), select teletext page by _**profile.page**_(ex: 778) or _**profile.language**_(ex: eng)
  - DVBSubtitle(Image) -> ttml-image(dash)
- Format webvtt\*\*\*: in player css

```
       video::cue {
          background: transparent;
          color: white;
          text-shadow: black 0px 0px 1px;
       }
```

- Format ttml-text\*\*\*: print _**profile.cfg**_ object
  - font\*\*\*: font family, default: sansSerif
  - size\*\*\*: font size, default: 80%
  - color\*\*\*: font color, default: white
  - outSize\*\*\*: text outline size, default: 5%
  - outColor\*\*\*: text outline color, default: black
  - bgr\*\*\*: background color, default: transparent
