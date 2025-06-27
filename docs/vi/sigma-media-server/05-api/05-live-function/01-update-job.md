---
title: Cập nhật Live Job
order: 1
---

# Cập nhật Live Job

Hàm được sử dụng để cập nhật các Job đang chạy

- **name**: tên kênh
- **filter**: overlay, volume, drm, header
  - **Overlay**: Điều khiển bằng ID trong cấu hình
  - **Volume**: được điều khiển bởi ID của profile
  - **DRM**, **Header**: Điều khiển bằng ID là khóa của đối tượng 'changed'

## Yêu cầu

```json
{
  "type": "update",
  "name": "VTV3",
  "filter": "overlay",
  "id": "0",
  "changed": {
    "x": 300,
    "Enable": 1
  }
}
```

## Phản hồi

```json
{
  "ec": 0,
  "result": {},
  "Tel": 1
}
```
