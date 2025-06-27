---
id: sigma-media-server-api-vod-function-closed-caption
title: Phụ đề chi tiết
order: 3
---

# Phụ đề chi tiết

- Transcoder: đặt option.cc = 1 để sao chép phụ đề chi tiết được nhúng trong video
- Packager: bật cấu hình trong target

```
    "cc": {
        "name": "Tên thử nghiệm",
        "type": 608,
        "id": 1,
        "Lang": "Eng"
    }
```

- Name: Hiển thị trong Danh sách phát chính HLS
- type: 608 hoặc 708
- ID: ID dịch vụ của Phụ đề chi tiết, CEA-608: 1 đến 4, CEA-708: 1 đến 63
- lang: ngôn ngữ để hiển thị trên cấu hình trình phát, 3 ký tự, vd: eng, vie
