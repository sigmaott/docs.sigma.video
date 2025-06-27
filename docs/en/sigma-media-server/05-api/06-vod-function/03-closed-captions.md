---
id: sigma-media-server-api-vod-function-closed-caption
title: Closed Caption
order: 3
---

# Closed Caption

- **Transcoder**: set option.cc = 1 to copying closed captions embed in video
- **Packager**: enable config in target

```
    "cc": {
        "name": "Test name",
        "type": 608,
        "id": 1,
        "Lang": "Eng"
    }
```

- **Name**: Display in HLS Master Playlist
- **type**: 608 or 708
- **ID**: Service ID of Closed caption, CEA-608: 1 to 4, CEA-708: 1 to 63
- **lang**: language for showing on player config, 3 characters, ex: eng, vie
