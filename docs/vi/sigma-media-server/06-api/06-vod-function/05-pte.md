---
title: Per-title encoding
order: 5
---

# Per-title encoding

What does Per-title Encoding do? In short: It introduces an additional step during the encoding process, analyzing the video asset. The findings are used to calculate the optimal bitrate ladder for every single asset and thus achieve higher perceptual quality.

## Usage

Để sử dụng Per-title Encoding, bạn cần khởi tạo Job VOD với tham số **`vmaf`** trong từng profile dạng **`video`** mà bạn muốn sử dụng PTE

::: tip
**`vmaf`** là một tham số dạng số, nó sẽ được sử dụng để tính toán bitrate ladder cho từng profile.

Khuyến khích sử dụng giá trị **`91`** để cho kết quả tốt nhất.

Bạn có thể chỉ cần sử dụng cho các profile cao nhất (1080p, 720p) để giảm thời gian xử lý.
::: 

```json
{
  "type": "vod",
  "name": "vtv3",
  "profiles": [
    {
      "id": "360",
      "type": "video",
      "codec": "h264",
      "width": 640,
      "height": 360,
      "vmaf": 91,  // [!code warning]      
      "pixelFormat": "yuv420p",
    },
    {
      "id": "480",
      "type": "video",
      "codec": "h264",
      "width": 854,
      "height": 480,
      "vmaf": 91,  // [!code warning]      
      "pixelFormat": "yuv420p",
    },
    {
      "id": "720",
      "type": "video",
      "codec": "h264",
      "width": 1280,
      "height": 720,
      "vmaf": 91,  // [!code warning]      
      "pixelFormat": "yuv420p",
    },
    {
      "id": "1080",
      "type": "video",
      "codec": "h264",
      "width": 1920,
      "height": 1080,
      "vmaf": 91,  // [!code warning]      
      "pixelFormat": "yuv420p",
    }
  ],
  ...
}
```