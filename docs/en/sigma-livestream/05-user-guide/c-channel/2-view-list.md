---
title: List of Livestream channels
order: 2
---

# List of Livestream channels

To manage the channel and display the basic information of the channel, the system is displayed in the form of a list to help users filter information, search for the desired channel and allow other operations to be performed.

At the main screen, select **List of channels**

The system main screen displays:

<!-- ![Danh sách kênh]() -->

The information is displayed in the interface:

- - **ID**: After the user creates a new channel, the system generates a unique ID for the channel for the purpose of identification.
- **Name**: Click on the name, show detail page
- **Tag**: Optional information, configured by CMS users that briefly describes the characteristics of the channel.
- **Condition**:
  - IDLE: channel initiation state - no session is running (in case session state 'ended' -> channel to 'IDLE').
  - Active: Using the session
  - Stop: the user actively stops the channel

Order: IDLE → Active -> Stop

- **Type**: user-configured
- **Creation time**: the time the system recognizes new channel creation, YYYY/MM/DD HH:mm:ss format.
- **Update time**: default sort- latest initialized/updated channel displayed at the top of the page.
- **Action**:
  - Open the list of sessions\*\*: navigate to the list, displaying sessions with the channel ID of your choice.
  - **Edit**: Edit the channel information.
  - **Delete**: delete unnecessary channels.
  - **Start**: start channel playback
  - **Stop**: actively stop the channel before the timeout.
