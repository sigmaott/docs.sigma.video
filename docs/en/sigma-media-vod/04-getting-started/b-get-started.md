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
http://test.com/manifest
https://example.com/test
```

### Sample video available on the system

In addition to the above options, the system provides you with sample videos, displaying information related to the video (such as video title, resolution, duration, ,...) so that you may be able to make an easier and more appropriate choice.

## Step 4: Determine the destination of the output stream

After processing input stream (video) transcoding, you should define a destination to store the output stream (video already transcoded), the system supports the output stream destination:

- Save in a folder at your computer
- Save at the system's Library
- Save at 3rd party

### Save in a folder at your computer

After processing the input stream (video) transcoding, you can save it in a folder on your machine.

### Save at System Library

The system supports after video transcoding processing, you can save directly at the system's library, helping you to better manage the application library

### Save at 3rd party

3rd party storage support systems such as **FTP(S)** and **Generic S3**

For 3rd party **FPT(S)**, you should prepare relevant information such as:

- Host\*\*\*: IP address
- Port\*\*\*: for machines using many services, port to distinguish.
- Username\*\*\*: Login account name
- Password\*\*\*: login password

For third party **Generic S3**, you should prepare relevant information such as:

- Bucket name\*\*\*: The name of the bucket containing the files.
- Endpoint\*\*\*: URL endpoint to access S3
- Access key ID\*\*\*: The Access Key ID (user name) that allows access to S3
- Secret access key\*\*\*: The password associated with the Access key ID that allows access to S3
- Public permission\*\*\* (optional)

## Step 5: Set up job configuration

You can choose from the available configuration template, or customize the configuration. You need to prepare the following information to be able to complete the job configuration step more quickly and easily

- Information related to the profile
- Target-related information

### Information related to the profile

The system displays 6 profiles by default including **1080, 720, 480, 360, 240, 144**

You can add a profile by selecting the \*\*\*"Add profile" button, the system will display a popup with information for you to set up the profile including: technical information about **Video, Audio, Watermark**

**Note** when setting up profile information:

- The maximum total in 1 job is 10 profiles

- 1 profile - 1 video

- 1 profile -10 audio

- Video 1-1 watermark

- Audio 1-1 watermark

### Target-related information

The system supports output format: **MP3, MP4, Multi MP4, HLS, DASH**

With output format **HLS, DASH, MultiMP4** for select **manifest, DRM and MULTIPLE profile**.

With output format **MP4, MP3** for selecting **ONE profile**.

When creating a job, a maximum of 5 targets are selected\*\*\*

Where the user chooses the output as a library, the output format is only MP3 and MP4.

## Step 6: Create a job

After completing the above steps, you can select the "Create job" button for the system to transcode your video. Besides, Sigma Media VOD also supports you to save Templates\*\* including job configuration information, so that you can save time for next time.
