---
title: Dừng Job
order: 2
---

# Dừng Job

Dừng một job đang chạy.

:::info
Trường **name** khi khởi tạo **Job** sẽ đóng vai trò là một định danh khi dừng Job
:::

## Yêu cầu

```json
{
  "type": "stop",
  "name": "VTV3"
}
```

Phản hồi

```json
{
  "ec": 0,
  "result": {"VTV3": "OK"},
  "dt": 4,
  "msg": "Dừng 1 tác vụ(s)\"vtv3\""
}
```
