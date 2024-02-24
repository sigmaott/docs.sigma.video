---
title: Product overview
order: 1
---

# What is an online TV solution?

Livestream services are designed to create a live channel on the internet, allowing users to transmit their video content to a large number of viewers in the simplest and most effective way in real time. This means that users have the ability to broadcast and share live video, allowing viewers to experience the event or content while it's happening.

Livestreaming is not only limited to live video broadcasting, but also provides the possibility of replaying live content that has ended. This allows users to re-leverage their content and provide a high-quality, pre-edited video viewing experience.

Building a great live streaming experience for your audience requires a large technical project, high cost, and great risk. With live streams, any minor incident is likely to end up on a live stream. Therefore, we prioritize ensuring that content is delivered smoothly to users with no incidents is of the utmost importance.

The software facilitates individuals or businesses to create and manage their online channels, providing flexible platforms and utilities for communicating and interacting with audiences through online television platforms.

# How the online TV system works

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
