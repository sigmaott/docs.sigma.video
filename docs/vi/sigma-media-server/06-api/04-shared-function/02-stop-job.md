---
title: Dừng Job
order: 2
---

# Dừng Job

Dừng một job đang chạy.

::: info
Trường **name** khi khởi tạo **Job** sẽ làm định danh khi dừng Job
:::

## Request

```json
{
  "type": "stop",
  "name": "vtv3"
}
```

***Response***

```json
{
  "ec": 0,
  "result": {"vtv3": "OK"},
  "dt": 4,
  "msg": "Stop 1 task(s) \"vtv3\""
}
```
