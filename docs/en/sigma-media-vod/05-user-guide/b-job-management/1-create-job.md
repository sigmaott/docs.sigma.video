---
title: Create a job
order: 1
---

# Create a new VOD job

To create a new VOD video, users need to create a new job by following these steps:

1. Visit the Video on Demand (VOD) dashboard.
2. Displays the default task list page.
3. Click the "Add New" button to start creating the task.
4. Go to the Create New Job page.

## Step 1: Choose a server

Within the scope of using servers and not using cloud services. The user needs to choose a server to do the job.

![Step1](/images/media-vod/job-management/create-step-1.png)

After selecting a server, mark the server selected and show the 2nd step.

## Step 2: Create input

In the video transcoding process of a stream that creates a new job (job) for video processing, the input (VOD video) is the original video source to be processed. The format of the input can be MP4 (MPEG-4), MP3 (MPEG-3), HLS (HTTP Live Streaming) or DASH (Dynamic Adaptive Streaming over HTTP).

![Step2](/images/media-vod/job-management/create-step-2.png)

Supported input options include:

![input-machine](/images/media-vod/job-management/input-machine.png)

- Select files from the client (local): display a pop-up of files in the client (local) when clicking on the selection
  - Displays relevant information about the file such as file name, format, size, and time last created or modified.
  - No file size limit.
  - Choose only 1 file with popular formats such as audio file (MP3) or video file (MP4). And mark the selected file.

![input-library](/images/media-vod/job-management/input-library.png)

- Select assets from the library: displays the asset selection window from the system's library.
  - **Type of asset**: audio and video
  - **Basic information**: name, format, duration and avatar are displayed.
  - Searchable and filterable
  - Users can preview the asset before selecting it as input which helps users ensure that they choose the right asset that suits their needs.

![input-video-url](/images/media-vod/job-management/input-video-url.png)

- Provide a link from a third party: after entering a valid path, display the path, hover displays basic information:
  - **Type**: Video/audio
  - **Media container formats**: MPEG-4 (MP4), QuickTime Movie (MOV),…
  - **Codecs**: H265, H264, AV1, VP9, VP8
  - **Bitrate**: the data rate of an audio or video stream.
  - **Resulotion**: Width x Height
  - **FPS**: the number of frames displayed per second when playing back a video.

- Use the sample video available in the system: default first VOD. The information of the sample video:
  - **Video name**
  - **Resulotion**: Width x Height
  - **FPS**: the number of frames displayed per second when playing back a video.
  - **Codecs**: H265, H264, AV1, VP9, VP8

After the user has selected input, the system returns to the new creation screen to perform the next steps. The system marks the input type, unselected options automatically hide.

## Step 3: Select the output (destination)

Next, the user will be directed to the next step in the process, choosing a destination to store the VOD job.

![Step3](/images/media-vod/job-management/create-step-3.png)

Support output streams:

- Save to server folder
  - Displays information about the folder such as folder name, format, size, and last edited time.
  - Unlimited folder size.

- Save to 3rd party: FTP support, Generic S3
  - Default display in FTP with the following information:
    - **Host**: IP address.
    - **Port**: for machines using multiple services, ports to distinguish them.
    - **Username**: Login account name.
    - **Password**: login password.
  - Switch tabs to Generic S3:
    - **Bucket name**: The name of the bucket containing the files.
    - **Endpoint**: The endpoint URL to access S3.
    - **Access Key ID**: The Access Key ID (user name) that allows access to S3
    - **Secret access key**: The password associated with the Access key ID that allows access to S3.
    - **Region**: data center storage location.
    - **Public permission**.

After the user has selected the output, the system returns to the new creation screen to p
