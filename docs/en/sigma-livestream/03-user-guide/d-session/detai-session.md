---
title: View session list
order: 2
---

## Session details

The displayed information is configured according to the channel, the task of the session ensures that the live streaming channel is always maintained, so many sessions use the same link play, assigned with 1 corresponding channel. Any channel changes will affect session information.

## To view session details

There are two methods to view session details:

### Real-time

Users can follow the livestream channel with Active status in channel details. To view session details, users simply click on the assigned session name.

### Review

**Step 1:** Access the session list on the interface.

**Step 2:** Click on the name of the session you want to review.

The system will display the details of the session including:

![detail session](/images/livestream/session-detail.png)

1. Chart

- X-axis: A Bitrate axis, showing the average speed of bits per 1 second.

- Y-axis: Displays the recording time of the session's data request.

- Z-axis: Is the Speed/FPS axis, showing the number of frames displayed per second.

- Hover into the chart will display the tooltip containing 1-point data on the chart.

- Horizontal scrollbar: Allows left/right scrolling to view the chart.

- Chart Graph Legend:

  - Bitrate send: Blue curve.
  - Bitrate receive: Yellow line.
  - FPS: Purple representation.

- Display the tooltip containing the data of 1 chart point
  - Request time: Format yyyy-mm-dd HH:MM.
  - Bitrate send: Represents the rate at which srs sends data with token x to other devices (e.g. transcoders).
  - Bitrate receive: Denotes the rate at which srs receives data from the push stream to token x (from the user).
  - FPS: Denotes the number of frames displayed on the play link. The higher the FPS, the smoother the display quality of the monitor will be and less lag.

2. Session information

- Client:
  - Channel ID: channel identifier
  - Client ID: client-side identifier
  - Stream ID: the identifier of the data stream.
  - IP: the IP address of the client.
- Ingest: types of media
  - Video
  - Audio
  - Data
- Output: Information
  - Live stream URL: The path to the live stream.
  - Catchup URL: The path to review when the stream ends. Display a "[download catch]" link so that users can open and download the videos inside.
  - Record URL: The path to the recorded file in mp4 format. Show mp4 download link as [link1, link2,...,linkn] - depending on the source, if there are multiple links, it will scroll to display.

3. Transcode information is unique, including:

![session-transcode](.. /.. /.. /.. /public/images/livestream/session-transcode.png)

- ID_task: Format **livestream_[tasktype]_[livestreamId]**
- Speed: Transcode speed, Unit: %
- Status:
  - PREPARE
  - STARTING
  - STARTED
  - ERROR
  - STOP
  - FINISHED
  - INIT_FAILED
- Life: Duration format.

4. Package Information: up to 10 items. Each item displays the following information:

! [session-package] (/images/livestream/session-package.png)

- ID_task: Format **livestream_[tasktype]_[livestreamId]**
- Speed: Package Speed, Unit: %
- Status:
  - PREPARE
  - STARTING
  - STARTED
  - ERROR
  - STOP
  - FINISHED
  - INIT_FAILED
- Life: Duration format.

5. Event Information: displays the latest time-bound channel action statuses to the top of the list.

! [event] (/images/livestream/session-event.png)

- Init: Initialize.
- Published: The user pushes the stream in.
- Process: Processing.
- Stable: Stable channel.
- Unpublished: The user lost connection.
- Unstable: The channel is unstable due to transmission or wave errors.
- Republished: The user pushes the thread again.
- Ended: End (displays information about the impact actor: timeout time or user actively closes the channel).
