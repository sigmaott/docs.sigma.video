---
id: sigma-media-server-api-live-function-live-job-updates
title: Live Job Updates
order: 1
---

# Live Job Updates

Function is used to update running Jobs

- **name**: channel name
- **filter**: overlay, volume, drm, header
  - **Overlay**: Control by ID in config
  - **Volume**: controlled by the ID of the profile
  - **DRM**, **Header**: Control by ID is the key of object 'changed'

## Request

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

## Response

```json
{
  "ec": 0,
  "result": {},
  "Tel": 1
}
```
