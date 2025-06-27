---
id: sigma-media-server-api-vod-function-subtitle
title: Phụ đề
order: 1
---

# Phụ đề

- Hỗ trợ: chỉ chuyển mã
  - DVBTeletext(Text) -> webvtt(hls, dash), ttml-text(dash), chọn trang teletext bằng _**profile.page**_(vd: 778) hoặc _**profile.language**_(vd: eng)
  - DVBSubtitle(Image) -> ttml-image(dash)
- Định dạng webvtt: trong css của trình phát

```
       video::cue {
          background: transparent;
          color: white;
          text-shadow: black 0px 0px 1px;
       }
```

- Định dạng ttml-text: in đối tượng _**profile.cfg**_
  - font: họ phông chữ, mặc định: sansSerif
  - size: cỡ chữ, mặc định: 80%
  - color: màu chữ, mặc định: white
  - outSize: kích thước viền văn bản, mặc định: 5%
  - outColor: màu viền văn bản, mặc định: black
  - bgr: màu nền, mặc định: transparent
