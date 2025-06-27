---
id: sigma-media-server-api-vod-function-trick-play
title: Trick Play
order: 2
---

# Trick Play

Trick play, hay còn gọi là chế độ trick mode, là một tính năng cung cấp phản hồi trực quan cho người xem khi họ đang tua lại hoặc tua đi nhanh một luồng (tức là 'lướt' qua nó). Việc thêm tính năng này vào luồng của bạn có thể được thực hiện theo nhiều cách khác nhau: bằng cách sử dụng hình thu nhỏ, bằng cách sử dụng danh sách phát I-frame hoặc bằng cách sử dụng cả hai.

## Cách sử dụng

Sử dụng cấu hình bên dưới để tạo hình thu nhỏ và danh sách phát i-frame cho video vod trong lệnh **start**

```json
{
    "type": "start",
    "name": "vod1",
    "thumb": {
            "id": "thumb_id",
            "URL": "-",
            "width": 200,
            "delay": 10,
            "col": 3,
            "row": 2
    }
}
```

- Hỗ trợ: jpg(dash), danh sách phát i-frames(hls)
  - jpg: sử dụng cấu hình thumb
  ```
  "thumb": {
      "id": "thumb_id",
      "URL": "-",//hoặc đường dẫn đích cho hình ảnh
      "width": 200,
      "delay": 10,
      "col": 3,
      "row": 2
  }
  ```
  và đặt: target.manifest.thumb="thumb_id"
  - iframes: đặt "target.manifest.iframe" = 1
