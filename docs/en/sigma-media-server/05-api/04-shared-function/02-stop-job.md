---
id: sigma-media-server-api-shared-function-stop-job
title: Stop Job
order: 2
---

# Stop Job

Stop a running job.

:::info
The **name** field when initializing **Job** will serve as an identifier when stopping the Job
:::

## Request

```json
{
  "type": "stop",
  "name": "VTV3"
}
```

Response\*\*\*

```json
{
  "ec": 0,
  "result": {"VTV3": "OK"},
  "dt": 4,
  "msg": "Stop 1 task(s)\"vtv3\""
}
```
