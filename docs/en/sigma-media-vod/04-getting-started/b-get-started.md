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

For
