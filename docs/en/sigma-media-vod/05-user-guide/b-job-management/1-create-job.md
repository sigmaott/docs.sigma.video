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

! [Step2] (/images/media-vod/job-management/create-step-2.png)

Supported input options include:

! [input-machine] (/images/media-vod/job-management/input-machine.png)

- Select files from the client (local): display a pop-up of files in the client (local) when clicking on the selection
  - Displays relevant information about the file such as file name, format, size, and time last created or modified.
  - No file size limit.
  - Choose only 1 file with popular formats such as audio file (MP3) or video file (MP4). And mark the selected file.

! [input-library] (/images/media-vod/job-management/input-library.png)

- Select assets from the library: displays the asset selection window from the system's library.
  - **Type of asset**: audio and video
  - **Basic information**: name, format, duration and avatar are displayed.
  - Searchable and filterable
  - Users can preview the asset before selecting it as input which helps users ensure that they choose the right asset that suits their needs.

! [input-video-url] (/images/media-vod/job-management/input-video-url.png)

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

! [Step3] (/images/media-vod/job-management/create-step-3.png)

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

After the user has selected the output, the system returns to the new creation screen to perform the next steps. Output type marking system. Allow editing or deleting selections.

## Step 4: Configure the job

Next, the user will be directed to the final step in the process, configuring the job information.

The default display is a list of profiles with the status of no templates applied. The Create job button cannot be used.

! [default] (/images/media-vod/job-management/config-default.png)

- General profile configuration: No data yet.
- Per-Title Encoding: Off, the feature reduces file size by optimizing each frame without sacrificing video quality, which improves loading times by 70% as well as reduces storage and bandwidth costs.
- Button ''default configuration'': delete the data configured by the user's profile, display the default prodile
- The default profile list includes: 1080, 720, 480, 360, 240, 144
  ( allow editing, deleting.)
- Target configuration

### Choose a sample configuration

To save time, users can choose one of the available configuration templates. This makes it easier and more efficient to optimize processes and create tasks or tasks.

1. Click the 'apply with template' button
2. Show sample list:

! [template list] (/images/media-vod/job-management/template-list-create.png)

3. After applying the template, the template name display and the current configuration will be replaced with the sample data. Only get information from the template, users can still customize the configuration.

! [choose template] (/images/media-vod/job-management/select-template.png)

At the same time, the system displays the Create job step

- 'Create job' button: complete job creation process
- ''Save template'' button: Save the configuration as a new template.

### Custom configuration

Users expect the ability to customize and create new information for themselves. Perform the configurations in the following order:

1. Enable Per-title encoding: This way, information about the default video type bitrate profile displays "optimized", which optimizes the video quality and file size of each specific video.

2. Proper use of profiles: Users can create and manage up to 10 profiles:

- Use the sample profiles available.
- Edit the sample profile: By clicking on the 'edit'' icon in the action column and proceed with editing according to [profile editing instructions](.. /.. /.. /sigma-media-live/05-user-guide/h-profile/3-edit-profile.md).
- Create a new profile as you like: By clicking on the "add profile" button and follow the steps according to [profile creation guide](.. /.. /.. /sigma-media-live/05-user-guide/h-profile/1-create-profile.md).
- Delete unnecessary profiles: By clicking on the "delete" icon in the action column and proceed with the deletion according to [profile deletion instructions](.. /.. /.. /sigma-media-live/05-user-guide/h-profile/5-delete.md).

```
**profile and watermark**
Each profile can contain up to 10 audio and 1 video, up to 11 watermarks.

The process of running the job uses a profile, 1 watermark is displayed 1 video or 1 audio respectively. 
```

3. Goal configuration: Users are allowed to select up to 5 goals.

When clicking the "Add Goal" button, a mandatory window appears asking the user to select the desired format including: **DASH, HLS, Multiple-mp4, Mp4, Mp3**.

! [target output] (/images/media-vod/job-management/target-output.png)

After selecting the format, open a new window that further configures the objectives including:

! [target-hls] (/images/media-vod/job-management/target-hls.png)

- Information:
  - **Name**: displays [selection format]-[random character system] to optimize user experience, users can modify the name to suit their wishes.
  - **Format**: displayed by user selection, no editing allowed
- Manifest:
  - **Container**: Segment file format, select **mpeg-ts** or **fmp4**.
  - **Counter**: The number of segments kept in the playlist file, default value **=4**. Enter the value **from 1 to 50.**
  - TS: The length of the segment in seconds, default value **=2**. Enter the value **from 2 to 10.**
  - **Time**: Inserts timestamp into playlist, disabled by default.
  - **Playlist**: Inserts timestamp into playlist, disabled by default.

! [multiple-mp4] (/images/media-vod/job-management/target-multiple-mp4.png)

```
The manifest configuration with multiple-mp4 and mp4 formats is not displayed.
```

- DRM: enable DRM mode, allowing Key provider to be configured.
  - **Key provider**: The method of providing the encryption key, static or obtained from the server containing the encryption key, options: **static, sigma-drm-v1, sigma-drm, sigma-multi-drm, drmtoday, CPIX.**
  - Each key provider selection displays the corresponding information.

! [target-mp4] (/images/media-vod/job-management/target-mp4.png)

```
Does not display DRM profiles with mp4 and mp3 formats.
```

- Trick play: on trick play mode, users are allowed to configure the information to display thumbnails:
  - **Width**: default value **=50**. Enter a value **from 50 to 600.**
  - **Delay**: unit = seconds, default value **=2**. Enter the value **from 2 to 120.**
  - **Col( column)**: default value **=2**. Enter the value **from 1 to 50.**
  - **Row**: default value **=2**. Enter the value **from 1 to 50.**

! [target-mp3] (.. /.. /.. /.. /public/images/media-vod/job-management/target-mp3.png)

```
Do not display trick play profiles with mp3 format.
```

- **Subtitle**: are pairs of **ISO 639.3 language codes and subtitle paths**, up to 10 subtitles. After configuration, the job displays the output with a vtt file containing text.

```
Do not display trick play profiles with mp3 format.
```

- Select a profile: select the profile in the list of configured profiles. After creating the job, the output displays the profile corresponding to each target.

```
Only choose 1 profile with mp4, mp3 format. Displays the default first profile in the list.
```

### Global profile settings (optional)

This is an optional operation, limited to 5 Watermarks added at the general profile and configuration per profile.

Select the general profile profile at the top of the section, displaying the window:

! [general-profile-config] (/images/media-vod/job-management/general-profile-config.png)

- **configure Watermark** (required item)
- **configure Audio Watermark** (optional)

After setting the general configuration of the profile, each profile selected by the user **default** will apply the general configuration that has been set.

- For each profile, users **Enable watermark**, when creating a job, the system will record processing **[general profile + profile's own profile]**
- In case the user disables watermark in the configuration of each profile, when creating a job, the system will only record **the general profile of the profile**

## Step 5: Create a job

Once the previous steps have been configured, the user clicks on the "Create job" button. The system will proceed to create the job and then display the user back to the list of jobs. The newly created job will be displayed at the top of the page for easy tracking and management.

<!-- Ngoài ra, người dùng có thể lưu lại mẫu để sử dụng cho các job khác theo hướng dẫn. -->
