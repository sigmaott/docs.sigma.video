---
title: Cập nhật Job trực tiếp
order: 1
---

# Cập nhật Job trực tiếp

Function được sử dụng để cập nhật các Job **Live** đang chạy

* ***name***: tên kênh 
* ***filter***: overlay, volume, drm, header
  - ***overlay***: điều khiển bằng id trong config
  - ***volume***: điều khiển bằng id của profile
  - ***drm***, ***header***: điều khiển bằng id là key của object 'changed'

## Request


```json
{
  "type": "update",
  "name": "vtv3",
  "filter": "overlay",
  "id": "0",
  "changed": {
    "x": 300,
    "enable": 1
  }
}
```


## Response

```json
{
  "ec": 0,
  "result": {},
  "dt": 1
}
```

