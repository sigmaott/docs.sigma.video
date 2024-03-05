---
title: Trick Play
order: 2
---

# Trick Play

Trick play, or trick mode as it is sometimes called, is a feature that gives viewers visual feedback while they are rewinding or fast-forwarding a stream (i.e., 'scrubbing' through it). Adding this feature to your streams can be done in different ways: by using thumbnails, by using I-frame playlists, or by using both.

## Usage

Sử dụng cấu hình bên dưới  để tạo các thumbnail và i-frame playlist cho video  vod trong lệnh **start**

```json
{
    "type": "start",
    "name": "vod1",
    "thumb": {
            "id": "thumb_id",
            "url": "-",
            "width": 200,
            "delay": 10,
            "col": 3,
            "row": 2
    }
```

- ***Supported***: jpg(dash), i-frames playlist(hls)
     + ***jpg***: use thumb config
    ```
    "thumb": {
        "id": "thumb_id",
        "url": "-",//or target path for image
        "width": 200,
        "delay": 10,
        "col": 3,
        "row": 2
    }
    ```
    and set: target.manifest.thumb = "thumb_id"
    + ***iframes***: set "target.manifest.iframe" = 1
   