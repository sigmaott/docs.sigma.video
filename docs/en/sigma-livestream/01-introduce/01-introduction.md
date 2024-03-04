---
title: Introduce
order: 1
---

# Sigma Livestream

**Livestream** service where anyone with an internet connection can create and bring multimedia content directly to a large number of viewers in the simplest and most effective way. Building a great live streaming experience for your audience requires a large technical project, high cost, and great risk. With live streams, any minor incident is likely to end up on a live stream. Therefore, we prioritize ensuring that content is delivered smoothly to users with no incidents is of the utmost importance.

Livestreaming is not only limited to live video broadcasting, but also provides the possibility of replaying live content that has ended. This allows users to re-leverage their content and provide a high-quality, pre-edited video viewing experience.

Sigma Live Stream Platform provides a comprehensive service that brings the job of transmitting content from broadcaster to viewers as simple as a button.

## Key drivers of low latency for video streaming

Early streaming formats, mainly developed for SVOD, focused on avoiding re-buffering when displaying video on the player. But for that feature to work anywhere on any device, caching must be used in the workflow, especially in the player. This contributes to the success of OTT but also creates end-to-end latency.

For example, Apple's original HTTP Live Streaming (HLS) protocol, released in 2009, recommended the use of 10-second segments and specified that players should not buffer fewer than three. This explains why many OTT services have typical latency of 40 seconds or even more. Apple later revised its recommendation to six-second segments, but this still equates to an 18-second delay only on the customer side to comply with HLS.

With a delay of 20-40 seconds or more, it is not a problem for users to watch VOD. But for live streams, parking too high will affect the interaction between viewers and broadcasters. The image below shows the effects of latency and the components that create latency when transmitting content

![about-1](/images/livestream/livestream-about-1.png)

## Sigma Live Stream Platform

### Introduction Description of system

The Sigma Live Stream platform allows users to deliver content from any device to anywhere desired. The most important point of the project is to create a platform that supports users to manipulate to become the simplest broadcaster. Supports multiple technology solutions for streamers and viewers. Broadcasters can customize the streaming delay to pull closer to the interaction distance with viewers. Viewers won't have to miss a moment during the live stream

### Feature

- Handle large amounts of streams **transmux & transcode** live stream channels
- Manage content during and after the live stream ends
  - **Livestream DVR** (review previously broadcast content right on the live stream)
  - **Source Record**
  - **Catchup** (Host live stream review for viewers)
  - **Thumbnail** (Automatic periodic thumbnail, supports livestream thumbnail preview for both live stream and review)
- Monitor livestream event (Preview, start, stop, restream)
- Implement Low Latency HLS (with Ultra Low Latency mode)
- Choose multiple live stream modes
  - **Normal latency** : reduced viewer playback buffering.
    - Choose "Normal latency" if you don't plan to interact with your audience. This is the highest quality setting for viewers since it has the lowest amount of viewer buffering.
    - latency: \~20-30 seconds
  - **Low latency**: near real-time interactivity
    - Choose this option if you want low latency with minimal viewer buffering. This setting is a good balance between the other two options.
    - latency: \~8-10 seconds
  - **Ultra low latency**: highly interactive live streams with real-time engagement
    - Choose this option if you want to maximize engagement with your audience and don't mind increasing the chances that your viewers may buffer more.
    - Latency: \~2-4 seconds
- Monitor, Alert & Analytic live stream metrics
  - Health check system
  - Alert when system has problem
  - Backup livestream when system fail
  - Analytic live stream metrics:
    - CCU
    - Total view
    - Total Time watch
- The system is highly available, easy to deploy ...
- Optimizing resources and costs
- Simple, easy-to-use API, and integrates with any system
  - Api with secure token
  - Webhook for live stream event

## What is an online TV solution?

Livestream services are designed to create a live channel on the internet, allowing users to transmit their video content to a large number of viewers in the simplest and most effective way in real time. This means that users have the ability to broadcast and share live video, allowing viewers to experience the event or content while it's happening.

Livestreaming is not only limited to live video broadcasting, but also provides the possibility of replaying live content that has ended. This allows users to re-leverage their content and provide a high-quality, pre-edited video viewing experience.

Building a great live streaming experience for your audience requires a large technical project, high cost, and great risk. With live streams, any minor incident is likely to end up on a live stream. Therefore, we prioritize ensuring that content is delivered smoothly to users with no incidents is of the utmost importance.

The software facilitates individuals or businesses to create and manage their online channels, providing flexible platforms and utilities for communicating and interacting with audiences through online television platforms.

## Get started with your channel

After a user creates a new channel, the system automatically generates the channel's information, and the user has the ability to perform actions (e.g. copying tokens,...).

Livestream Channel:

A Livestream channel is a space that users create and manage themselves.

The status of the IDLE initiation channel (free- no sessions)

-> switch to active state when channel is activated

-> switches to the STOP state when the user actively stops the channel.

View status conversion details in

## Channel of operation

Session Initiation Process:

After the channel is initialized, the user transmits the input through a third party. The system automatically generates a session and assigns it to an init state.

Session Status:

A session is a real-time transmission of video data.
The state of the session changes in order: init, procession/error/live, and finally ended.

This session ends (end state) when the maximum duration (timeout) is reached or when the user actively stops the channel.

## The relationship between Livestream Channel and Session:

Each Livestream channel can contain from 1 to more sessions.

Each Livestream channel links to the corresponding playing session in the session list, creating a unified link between the channel and the live content.

The session is unique, when the session ends, cannot be reused, the newly born session continues to operate the task.
