---
id: sigma-media-server-api-vod-function-per-title-encoding
title: Mã hóa trên mỗi tiêu đề
order: 5
---

# Mã hóa trên mỗi tiêu đề

Mã hóa trên mỗi tiêu đề làm gì? Tóm lại: Nó giới thiệu một bước bổ sung trong quá trình mã hóa, phân tích tài sản video. Các phát hiện được sử dụng để tính toán thang bitrate tối ưu cho mỗi tài sản và do đó đạt được chất lượng cảm nhận cao hơn.

## Cách sử dụng

Để sử dụng Mã hóa trên mỗi tiêu đề, bạn cần khởi tạo Job VOD với tham số **'vmaf'** trong mỗi cấu hình **'video'** nơi bạn muốn sử dụng PTE

:::Tip
**'vmaf'** là một tham số số sẽ được sử dụng để tính toán thang bitrate cho mỗi cấu hình.

Nên sử dụng giá trị **'91'** để có kết quả tốt nhất.

Bạn có thể chỉ cần sử dụng cho các cấu hình cao nhất (1080p, 720p) để giảm thời gian xử lý.
:::

```json
{
  "type": "VOD",
  "name": "VTV3",
  "profiles": [
    {
      "id": "360",
      "type": "video",
      "codec": "h264",
      "width": 640,
      "height": 360,
      "vmaf": 91, // [!code warning]      
      "pixelFormat": "yuv420p",
    },
    {
      "id": "480",
      "type": "video",
      "codec": "h264",
      "width": 854,
      "height": 480,
      "vmaf": 91, // [!code warning]      
      "pixelFormat": "yuv420p",
    },
    {
      "ID": "720",
      "type": "video",
      "codec": "h264",
      "width": 1280,
      "height": 720,
      "vmaf": 91, // [!code warning]      
      "pixelFormat": "yuv420p",
    },
    {
      "id": "1080",
      "type": "video",
      "codec": "h264",
      "width": 1920,
      "height": 1080,
      "vmaf": 91, // [!code warning]      
      "pixelFormat": "yuv420p",
    }
  ],
  ...
}
```
