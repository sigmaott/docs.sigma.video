---
title: Introduce
order: 1
---

# Sigma Live Streaming

## What is an online TV solution?

Live Streaming service where anyone with an internet connection can create and bring multimedia content directly to a large audience in the simplest and most effective way. Building a great live streaming experience for your audience requires a large technical project, high cost, and great risk. With live streams, any minor incident is likely to end up on a live stream. Therefore, we prioritize ensuring that content is delivered smoothly to users with no incidents is of the utmost importance.

Livestreaming is not only limited to live video broadcasting, but also provides the possibility of replaying live content that has ended. This allows users to re-leverage their content and provide a high-quality, pre-edited video viewing experience.

Sigma Live Stream Platform provides a comprehensive service that brings the job of transmitting content from broadcaster to viewers as simple as a button.

- **64% viewer** have watched a live online video in the past year.

- **78% viewers** are already watching live video on Facebook live.

- **82% viewer** prefer live video from a brand to social posts.

_"I think it takes more than three seconds to build your brand, and consumers are willing to spend the time if your content is compelling, relevant, and valuable." – [Momentology](http://www.momentology.com/8936-video-marketing-trends-2016/)_

## What make a live stream successful ?

What guarantees the success of a live stream?

For a live stream, the hallmark of success is that the content the provider creates is aimed at the widest audience. Growth in viewership simultaneously corresponds to the success of your live stream. To ensure that success, in addition to broadcasters offering unique content focused on viewers, the live streaming technology platform also plays a very important role.

_62% of consumers are more likely to have a negative perception of a brand with a low-quality video experience_. - [KZO](https://kzoinnovations.com/video-quality-influence-brand-perception)

The quality of service when broadcasting plays a very important role in the emotions of viewers. Besides, the broadcaster's channels interact with users (example: Q\&A, playing games with viewers ...) are always the top channels on online services. For direct interaction with users, the latency of the content transmission system to the viewer affects

\*Since we started providing our player for apps 15 years ago, video streaming on mobile devices has drastically increased. Many people now expect to access the same content on multiple devices with broadcast quality, whether they are at home or on the go." \*

\*"Having a multiscreen low latency solution is a top requirement for customers and opens the door for fascinating interactive use cases, leveraging the best end-to-end technology and synchronization of the stream among all end users." \*

_Carlos Lucas, General Manager of NexPlayer at_ _NexStreaming_

## Key drivers of low latency for video streaming

Early streaming formats, mainly developed for SVOD, focused on avoiding re-buffering when displaying video on the player. But for that feature to work anywhere on any device, caching must be used in the workflow, especially in the player. This contributes to the success of OTT but also creates end-to-end latency.

For example, Apple's original HTTP Live Streaming (HLS) protocol, released in 2009, recommended the use of 10-second segments and specified that players should not buffer fewer than three. This explains why many OTT services have typical latency of 40 seconds or even more. Apple later revised its recommendation to six-second segments, but this still equates to an 18-second delay only on the customer side to comply with HLS.

With a delay of 20-40 seconds or more, it is not a problem for users to watch VOD. But for live streams, parking too high will affect the interaction between viewers and broadcasters. The image below shows the effects of latency and the components that create latency when transmitting content

! [about-1] (/images/livestream/livestream-about-1.png)

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
