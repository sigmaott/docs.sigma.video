---
title: Get started with Media Video On Demand (Media VOD)
order: 2
---

# Get started with Media Video On Demand (Media VOD)

## Job Setup

To set up a job, you need to prepare the following tasks:

- Set up server operation
- Prepare the input stream
- Determine the destination of the output stream
- Set up job configuration as desired
- Create a job

Once done, you can create a successful job in Sigma Media VOD. Besides, you can save the configuration of the job as **template** to save time for the next time.

## Prepare

Before you start, you need to prepare the following tasks:

- Have an account that accesses the management system of **Sigma Streaming Platform**\* 'https\://portal.sigmaott.com'
- Accounts with authorized app access with Media VOD

## Step 1: Access the Sigma Media VOD system

To use , you need to have an account and permission to access, view, and perform allowed actions.

1. Visit the 'https\://portal.sigmaott.com/app' link
2. Display the App List, **select the app** to access.
3. Display by default to the **App Overview.**
4. In the sidebar, select the Media VOD product.
5. Display the default page in the Dashboard Page (which provides an overview of operational status, statistics, and other important information when using the product).

## Step 2: Prepare the server

Make sure that during your use, the server is in an active state

If you have not enabled the operation of the server, you should perform the installation of the machine on your machine (local)

1. In the sidebar, select Server
2. Select the tab on the header of **Sigma VOD Server**
3. Display VOD server list, **select add server**
4. Display machine installation information, including Registation Token
5. Copy the 'Registation Token' and perform the installation on your machine (local)
6. Successfully installed machines display at the top of the list of machines

## Step 3: Prepare the input stream

The system allows support for input flows, including

- Files from your machine
- On the system's Library
- 3rd party links
- Sample video available on the system

### Input file from your machine

The system allows the selection of input files from your machine, accepted with live media file formats such as 'audio file (MP3)', 'video file (MP4)'' 'HLS (HTTP Live Streaming)' or 'DASH (Dynamic Adaptive Streaming over HTTP)'.

The system displays relevant information about the file such as file name, format, size, and time of last creation or edit.

### On the system's Library

The Library system is available, you can choose from **asset audio and video**

Information about each asset such as name, format, duration and avatar is displayed.

Allows you to preview audio and video assets before selecting them as inputs, helping to ensure that you choose the right asset for your needs.

### 3rd party links

If the input files from your computer or the videos on the system's library do not suit your needs, you can use a video link from a 3rd party.

The system only supports http or http(s)\*\* URLs

Example:

```
http://example.com/video.mp4
```

### Sample video available on the system

In addition to the above options, the system provides you with sample videos, displaying information related to the video (such as video title, resolution, duration, ,...) so that you may be able to make an easier and more appropriate choice.
Example:

```
Pexels-Yaroslav-Shuraev-6985325 (2160p).mp4
Resolution: 3840x2160
Duration: 00:00:14
Type: video
Format: mp4
Codec: h265
FPS: 23.98
```

## Step 4: Determine the destination of the output stream

After processing input stream (video) transcoding, you should define a destination to store the output stream (video already transcoded), the system supports the output stream destination:

- Save in a folder at your computer
- Save at the system's Library
- Save at 3rd party

### Save in a folder at your computer

After processing the input stream (video) transcoding, you can save it in a folder on your machine.

### Save at 3rd party

3rd party storage support systems such as **FTP(S)** and **Generic S3**

For 3rd party **FPT(S)**, you should prepare relevant information such as:

- Host\*\*\*: IP address

Example:

```
192.168.1.100
```

- Port\*\*\*: for machines using many services, port to distinguish.

Example:

```
8080
```

- Username\*\*\*: Login account name

Example:

```
testvod@example.com
```

- Password\*\*\*: login password

Example:

```
1234567890
```

For third party **Generic S3**, you should prepare relevant information such as:

- Bucket name\*\*\*: The name of the bucket containing the files.

Example:

```
default-app
```

- Endpoint\*\*\*: URL endpoint to access S3

Example:

```
http://172.16.20.89:9000
```

- Access key ID\*\*\*: The Access Key ID (user name) that allows access to S3.

Example:

```
jpPANVUDd9
```

- Secret access key\*\*\*: The password associated with the Access key ID that allows access to S3.

Example:

```
GInrJ4Tn9RcD1aHS3zxMsVpqXoP6Jaa0t8Y7Ai3Q
```

- Public permission\*\*\* (optional)

## Step 5: Set up job configuration

You can choose from the available configuration template, or customize the configuration. You need to prepare the following information to be able to complete the job configuration step more quickly and easily

- Information related to the profile: [See more](../../sigma-media-live/05-user-guide/h-profile/1-create-profile.md)

- Target-related information: [See more](../05-user-guide/b-job-management/1-create-job#customize-shape)

### Information related to the profile

The system displays 6 profiles by default including **1080, 720, 480, 360, 240, 144**

You can add a profile by selecting the 'Add profile' button, the system will display a popup with information for you to set up a profile including: technical information about **Video, Audio, Watermark**

See also [relationship between profile and watermark](../05-user-guide/b-job-management/1-create-job#customize-shape).

### Target-related information

1. Select output format: HLS
2. HLS configuration

- Information:
  - **Name**: hls-0p where
    - hls- format
    - 0p-system random characters
  - **Format**: hHLS
  - **Container**: mpeg-ts
  - **Counter**: 4
  - **TS**: 6
  - **Time**: off.
  - **Playlist**: off.

- DRM: enable DRM mode
  - **Key provider**: sigma-drm
  - **Asset ID**:
  - **Environment**: product
  - **DRM Credentials**: select DRM-test

- Trick play: on trick play mode, users are allowed to configure the information to display thumbnails:
  - **Width**: 50
  - **Delay**: 2
  - **Col( column)**: 2
  - **Row**: 2

- **Subtitle**: Not configurable

- Select profiles: select all profiles in the list of configured profiles.

[View target information](../05-user-guide/b-job-management/1-create-job#customize-shape)

## Step 6: Create a job

After completing the above steps, you can select the "Create job" button for the system to transcode your video. Besides, Sigma Media VOD also supports you to save Templates\*\* including job configuration information, so that you can save time for next time.

## Step 7: Delete the job

Once you have created and launched the job. After that, the job is completed (Complete state) or the error process (Error state) to close unnecessary jobs, you need to perform the job deletion operation as follows:

1. On the job list interface, select the job you want to delete, and then click the "Delete" icon.
2. A confirmation dialog box will appear. Select the **Confirm** button to continue.
3. The system will perform job deletion and you will return to the job list interface after completing the deletion process.
