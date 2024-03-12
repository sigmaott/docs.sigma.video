---
title: 'Supervisor.'
order: 2
---

# {{ $frontmatter.title }}

## Channel supervisor

For each channel on the system there will be 1 or more **job** that execute the transfer code or close the channel. The state of the channel will be a total state of **job** applications with corresponding channel

* The number of Job of the channel will correspond to the corresponding output of the channel, next to which if the output has a catchup feature, the timeshift, then the system will create 1 **job catchup** corresponding to this output (this job separation helps the system to stabilize when one of the job can meet the problem).
* When creating a new channel, the system automatically generates the job needed for the ::: warning  
  The change of the channel configuration can change the channel's number job and may result in the loss of job needed
:::

### Channel Status

The channel system has states as follows:

*   **live**: the channel is on
*   **stop**: Channel is off
*   **error**: Channel is error
    *   The channel can be met with an error state when a job execs in the channel is in error

### Job State

For every Job in the channel it will be a separate running service on different regulated servers, receiving input and output at the request of job. Then Job will have the same types as follows:

1. **Transcode**: this is the job that makes the transfer of the channel crib to the transcode channel. With every transfer channel there will be only job.
2. **Package**: Job packaging, number corresponding to the number of installed output
3. **Catchup**: Job packaging for catchup content, timeshift, quantity corresponding to the number of installed output numbers


With each Job we will have the status of job as follows:

| Status        | Description                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Starting**  | Job's in the initial launch process.                                                                                |
| **Preparing** | Job is in the process of preparing resources such as taking the input from the input, taking output information ... |
| **Started**   | Job started to work.                                                                                                |
| **An error**  | Job's guilty. Please see the job code below to detect the cause.                                                    |
| **stop**      | Job was stopped.                                                                                                    |


The operation with job systems provides enough **action** as **start**, **stop**, **reset**, are made through the **action**.

* You can work with Job from the outside of the **Jobs** or in the channel monitoring page.

### Channel supervisor

From the list of the **click** on the name of the channel detailed channel present

![Channel Details Information](/images/media-live/um-channel-detail.png)

The monitoring commonent included:

* **Thumbnail**: The channel's thumbnail image is periodically extracted during processing.
* **job Speed**: Schedule graph by time denograph speed of **job**
    * The speed of **job** is calculated at 100%.
        * With values that are less than 90% job is having problems during the processing as the input source, head to problem.
* **INPUTS**: The channel input list
* **TranSCODE**: Information on the Transcode Processing System (Transcode)
    * Includes: details on Job transcode
    * Profile Transcode Information
* **PACKAGES**: The channel's packaging output information
    * List of outputs with the attachment job
    * For each output list there will be a maximum of 2 job consisting of **package job** and **catchup job**


### Job monitoring

![The Job Board.](/images/media-live/um-job-detail/um-job-detail.png){width =400px}

Job monitoring board includes

* ![Status](/images/media-live/um-job-detail/1.png){height=17px}  **st
