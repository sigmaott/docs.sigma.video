---
title: System Monitoring
order: 5
---

# System Monitoring

Monitor System is the process of monitoring the system, checking for errors, how much load the system can bear\*\*\*…  Related to the **error problem** leading to the failure to display ads successfully, help users check the cause of the error here and find ways to fix it (currently **group by channel and sub-channel**- Group by channel, group by sub-channel)

## To monitor system monitoring metrics

The user selects System Monitoring\*\*.

System Display interface System Monitor:

! 

<center>

_Figure 1: System monitoring interface_

</center>

### The table below explains the information displayed on the interface.

| Name                              | Explain                                                                                                                                                                                                                                                                                                                                                                                               | Data type | Units of calculation | Formula |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------- | ------- |
| Latency                           | Response speed of request                                                                                                                                                                                                                                                                                                                                                                             | Number    | milliseconds         | N/A     |
| Timeout                           | The time that the request setting must respond (user access requests take longer to wait than usual/ dev can configure this timeout) exceeding this time means that your connection has 'timed out', returning timeout information.                                                                                                                                                | Number    | milliseconds         | N/A     |
| AdDecisionServer.Error            | The number of status code responses is not 200, blank responses, and time responses received by SSAI from ads within the specified SSAI time period.                                                                                                                                                                                                                                                  | Number    |                      | Count   |
| AdDecisionServer.Latency          | Average response time to requests made by SSAI for ads.<br />(**Don't count the Bottom Total column because it doesn't make sense**)                                                                                                                                                                                                                                               | Number    | milliseconds         | Avg     |
| AdDecisionServer.Timeout          | The number of time-out requests for ads within the specified SSAI time period.                                                                                                                                                                                                                                                                                                                        | Number    |                      | Count   |
| Origin.Error                      | The number of status code responses is not 200 and the time responses that SSAI receives from the origin server within the specified SSAI interval.                                                                                                                                                                                                                                                   | Number    |                      | Count   |
| Origin.Latency                    | Average response time for requests made by SSAI to the content origin server.<br />\*\*Bottom Total column is not included.                                                                                                                                                                                                                                                                           | Number    | milliseconds         | Avg     |
| Origin.Timeout                    | The number of time-out requests to the origin server within the specified SSAI interval.<br />\*\*Bottom Total column is not included.                                                                                                                                                                                                                                                                | Number    |                      | Count   |
| SkippedReason. DurationExceeded   | The number of ads is not inserted into the original duration (avail.duration) because the ad has returned an ad duration greater than the original duration (avail duration). <br />If this metric is of high value, it can be considered a reason for the discrepancy between avail.ads and addecisionerver.ads.<br />\*\*Bottom Total column is not included. | Number    |                      | Count   |
| SkippedReason. InternalError      | The number of ads ignored due to SSAI's internal error.                                                                                                                                                                                                                                                                                                                                               | Number    |                      | Count   |
| SkippedReason. TranscodeError     | The number of ads skipped due to transcode errors.                                                                                                                                                                                                                                                                                                                                                    | Number    |                      | Count   |
| SkippedReason. TranscodeInProcess | The number of ads that are not inserted into the original source because the ads have not been transcoded. If this metric is of high value, it can be considered a reason for the low overall avail.fillrate.                                                                                                                                                                                         | Number    |                      | Count   |
