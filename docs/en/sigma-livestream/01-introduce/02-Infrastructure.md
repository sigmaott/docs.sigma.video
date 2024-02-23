---
title: System architecture
order: 2
---

# Infrastructure of Sigma Live Streaming System

! [about-2] (/images/livestream/livestream-about-2.png)

## Broadcaster

Sigma live stream platform has SDK support for platforms such as android, ios with important features:

- AAC audio encoding, H.264 video encoding (supports soft/hard editing, supports baseline/main/high profile)

- Multi-resolution encoding support

- Camera control (heading, flash, front and rear camera)

- Adaptively adjust the bit rate of the video according to the network bandwidth, the network adaptive mode can be configured

- Support RTMP protocol live streaming

- Support encode video in low latency mode

## Viewer playback

On mobile devices using android and ios operating systems, Sigma live stream platform supports player playback:

- Plugin SDK for Exoplayer (required version 2.6 or above)

- Plugin SDK for AVPlayer

- Support Low Latency HLS

- Preview thumbnail in livestream

- Support livestream DVR

- Support ABR (Adaptive bitrate) for Low Latency HLS

  - **Setting a suitable initial start position**: Choose the desired start time to get the lowest latency compared to the live stream. For example, in ultra low latency mode, the system starts the stream at a delay of 3 seconds compared to live

  - **Adjusting the playback speed**: The speed of the stream is adjusted between 0.8-1.2 so that the viewer does not detect the change. The purpose is to stretch the buffer of the broadcast stream to the desired latency

## RTMP Server

The RTMP Server system is divided by region to connect to the broadcast as quickly as possible, with the auto-scaling feature, the system can handle thousands of connections

## Sigma Live Server

The media data processing server includes the following features:

- Support transmux & transcode live stream channels with low latency, high performance

- Transcode resolution up to UltraHD (4K)

- Full Resolution Control: resize, crop, letterbox, and more

- Adjustable aspect ratio of the output video

- Video Filters: Rotate, Denoise, Deinterlace, sharpen, autolevel, deblock, flip, mirror

- Audio Controls: Normalize, Gain, Equalize, Fade-in, Fade-out, Karaoke, Advanced Audio Levels Control

- Advanced Audio Resampling

- Conditional Outputs (min/max size and duration)

- Support mode zero latency for optimize encoding time

## Api Server

The Api Server system provides API to communicate with App Server live stream:

- Manage livestream events (create, update, remove ...)
- Manage livestream assets (DVR, catchup, thumbnail... )
- Webhook livestream event

## Monitor

- Monitor the system through critical parameters
- Alerts when the system crashes

## Streaming flow using Sigma Live Streaming platform

! [livestream/about-3] (/images/livestream/livestream-about-3.png)

- **Data stream from the broadcaster**:

  1. Log in to the system and request to create a broadcast

  2. The system generates and returns **RTMP Server** (corresponding to the location of the source) and **token** authenticates the source

  3. Start live streaming to **RTMP Server**

  4. **RTMP Server** token-based source authentication updates metadata to channel list

  5. Engage with viewers

- **Viewer Data Stream**:

  1. Log in to the system and list the appropriate currently playing or played channels (based on geographical location, channel priority, preferred channels …)

  2. Select the channel you want to watch

  3. The system returns the right Edge server (CDN) for the viewer

  4. Watch channels and interact (chat, send gifts …)
