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

### Job Sup
