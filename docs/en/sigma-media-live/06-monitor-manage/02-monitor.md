---
title: Supervise
order: 2
---

# {{ $frontmatter.title }}

## Channel Monitoring

For each channel on the system, there will be 1 or more **jobs** that perform channel transcoding or encapsulation. The status of the channel will be the sum of the status of the **job** corresponding to the corresponding channel

- The number of jobs of the channel will correspond to the corresponding output of the channel, besides, if the output has the catchup and timeshift feature enabled, the system will create 1 more **job catchup** corresponding to this output (splitting this job helps the system operate stably when 1 of the jobs may have problems)
- When configuring to create a new channel, the system will automatically create the necessary jobs for the channel
  ::: warning
  Changing the channel configuration can change the number of jobs in the channel and may result in the loss of necessary jobs
  :::

### Channel status

The channel system has the following statuses

- **live**: channel is on
- **stop**: The channel is being turned off
- **error**: Channel is failing
  - The channel may encounter an error status when there is 1 job executing the task in the channel that is experiencing the error

### Status of job

For each Job in the channel, there will be 1 service running separately on different specified servers, receiving inputs and outputs according to the requirements of the job. In which Job will have the corresponding types as follows:

1. **Transcode**: This is the job that performs the transcoding of channel content for the transcode channel. For each transcoding channel, there will only be this job.
2. **Package**: Job packing, quantity corresponding to the number of output installed
3. **Catchup**: Job packing for catchup content, timeshift, quantity corresponding to the number of output settings

For each job, we will have the following job statuses:

| Condition     | Depict                                                                                                                |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| **starting**  | Job is in the process of initial launch                                                                               |
| **preparing** | Job is in the process of preparing resources such as obtaining information of input, obtaining output information ... |
| **started**   | Job successfully launched                                                                                             |
| **error**     | Job is faulty. Please see the job error code below to detect the cause                                                |
| **Stop**      | Job has been stopped                                                                                                  |

The operation with the system job provides pushing all \*\*\*\* actions such as **start**, **stop**, **reset**, done through the **action** list of the job

- You can manipulate Jobs from outside of the channel list under Jobs or from the channel monitoring page

### Channel Monitoring

From the list of channels, clicking \*\*\*\* on the name of the channel, the detailed channel interface will appear:

![Channel Insights](/images/media-live/um-channel-detail.png)

Monitoring components include:

- **Thumbnail**: The channel thumbnail image is periodically extracted during processing
- **job Speed**: A timed string chart showing the speed of the **job**
  - The speed of **job** is calculated according to the 100% mark
    - With values less than 90% of jobs are having problems in processing such as input source, output problem
- **INPUTS**: Channel input list
- **TRANSCODE**: Information about Transcode Processing System (Transcode)
  - Includes: details about Job transcode
  - Transcode Profile Information
- **PACKAGES**: Channel's packaged output information
  - List of outputs along with job attachments
  - For each output list, there will be up to 2 jobs including **package job** and **catchup job**

### Job Supervisor

! [Job Monitoring Panel] (/images/media-live/um-job-detail/um-job-detail.png) { width=400px }

Job Monitoring Panel Includes

- ! [status] (/images/media-live/um-job-detail/1.png) { height=17px } **status**: The status of the job

- ! [status] (/images/media-live/um-job-detail/2.png) { height=17px } **Speed**: The current speed of the job

- ! [status] (/images/media-live/um-job-detail/3.png) { height=17px } **Lifetime**: The job time that ran from the last time it was retried because of an error or restart

- ! [status] (/images/media-live/um-job-detail/4.png) { height=17px } **created**: job time created (utc time)

- ! [status] (/images/media-live/um-job-detail/5.png) { height=17px } **outputs**: Job output

- ! [status] (/images/media-live/um-job-detail/6.png) { height=17px } **action**: Job buttons

- ! [status] (/images/media-live/um-job-detail/7.png) { height=17px } **Errors**: job error log (get the last 3 errors)

- Note:
  - **Job** monitoring panel can be tracked in the channel list or in the channel detail page

Job error log structure

```
[05-26 02:32:55] Input timeout (code: INPUT_TIMEOUT)
```

Where:

- **[05-26 02:32:55]**: Time value, in UTC
- **Input timeout** : Error message
- **(code: INPUT_TIMEOUT)** : Error code

A few common error codes and accompanying annotations

| Code                                                                                    | description                                                                                                                   |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| TIMEOUT                                                                                 | Job is timed out (The input source loses video waves)                                                      |
| **PACKET_QUEUE_IS_FULL** | Packets in the queue cannot be processed in time (lack of resources)                                       |
| MEMORY_IS_FULL                                | Out of Ram memory                                                                                                             |
| **INPUT_TIMEOUT**                                                  | Input Timeout (loss of input wave)                                                                         |
| **OUTPUT_TIMEOUT**                                                 | Output Timeout (depends on each output stream)                                                             |
| **TRANSCODE_TIMEOUT**                                              | The Processing Server encountered a problem                                                                                   |
| GOP_INVALID                                                        | GOP cache error of input                                                                                                      |
| ASYNC_STREAM                                                       | Asynchronous input streams (ABR streaming)                                                                 |
| **ASYNC_PROFILE**                                                  | ABR streaming                                                                                                                 |
| INPUT_OUTPUT_ERROR                            | Input and output streams crash                                                                                                |
| IO_ERROR                                                           | Errors during read and write                                                                                                  |
| **CONNECTION_REFUSED**                                             | The connection has a failed output (An error usually occurs when the manifest service cannot be connected) |
| CONNECTION_TIMEOUT                                                 | Connect timeout output                                                                                                        |
| CANNOT_OPEN_CONNECTION                        | Failed to create connection                                                                                                   |
| URL_READ_ERROR                                | URL data reading errors                                                                                                       |
| OPTION_NOTFOUND'\*'                                                | Incorrect upload configuration                                                                                                |
| PROTOCOL_NOTFOUND'\*'                                              | Protocol Not Found                                                                                                            |
| STREAM_NOT_FOUND'\*'                          | Input stream not found                                                                                                        |
| UNABLE_TO_OPEN_RESOURCE  | Unable to initialize resource                                                                                                 |
| NO_ROUTE_TO_HOST'\*'     | Failed to open connection                                                                                                     |
| INVALID_ARGUMENT \*\*\*\*\*                                        | Wrong parameter                                                                                                               |
| INITIALIZING_OUTPUT_STREAM'\*'                | Error Initializing output stream                                                                                              |
| CONNECTION_RESET_BY_PEER | Connection reset                                                                                                              |
| BROKEN_PIPE                                                        | Broken pipe                                                                                                                   |
| NO_AUDIO_DATA'\*'                             | Initialization flow without AUDIO data                                                                                        |
| NO_VIDEO_DATA'\*'                             | Initialization flow without VIDEO data                                                                                        |

- Bold errors are more likely to occur when **job** has run successfully than other errors
- With errors related to output: check the
- Errors '\*\*' only occur when creating new **job**
- When encountering an error, the system will automatically retry the faulty **job** until the error is resolved
  - For errors that occur when initializing the job, it will be necessary to restart the job to handle it
