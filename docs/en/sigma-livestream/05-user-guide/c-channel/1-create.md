---
title: Create a Livestream channel
order: 1
---

# Create a new livestream channel

Allows users to create professional live stream channels from pre-edited videos. By supporting livestreaming from various video sources and live streaming on multiple platforms at the same time, users can expand the audience on e-commerce sites easily and effectively.

After configuring the application, prepare the input. You can create a new channel using these instructions:

### Step 1

At the Channel List main screen interface, users click on the button **Add channel**
Display system **Pop-up add new channel** between interfaces:

<!-- ![]() -->

The information displayed:

| School name          | Describe                                                                                                                     | Compulsory | Value                                                                  | Default                         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------- | ------------------------------- |
| Name                 | Your channel name                                                                                                            | Have       | Textbox                                                                | placeholder "Enter name"        |
| Describe             | The purpose of marking, not showing up the output video, briefly describes the main content of the channel.                  | Not        | Textbox                                                                | placeholder "Enter description" |
| Tag                  | A tag is used for markup, which relates to each other to make it easier for readers to find and follow content.              | Not        | Tag                                                                    | New card                        |
| Type                 | Types of transcoding.                                                                                                        | Have       | Transcode/ Forward/ Hybrid                                             | Transcode                       |
| How it works         | The time interval when a video frame is recorded and displayed for playback.                                                 | Have       | Normal/ Low-latency/ Ultra-low-latency                                 | Normal                          |
| Output format        | A protocol for streaming video across the internet, users can choose the link tail.                                          | Have       | DASH HLS                                                               | HLS                             |
| Select               | Other features further support for users.                                                                                    | Not        | Interaction/ Catchup/ Record                                           | Disable all 3 options           |
| Transcode profile    | The quality of the video is displayed to viewers. In case of selecting **type forward → does not display Transcode profile** | Have       | **select all** 360p 480p 720p 1080p 1440p                              | 480p 720p                       |
| Stop Timeout         | Maximum time for 1 session.                                                                                                  | Have       | Textbox                                                                | 30                              |
| Server configuration | Server setup for channel, user not configured, default system uses server in application configuration.                      | Not        | Show additional machine and server types when configuration is enabled | Turn off                        |

- **"Cancel" button**: Do not perform a new creation, return to the main screen interface.

- **"Save" button**: Save the newly created information, return to the main screen interface.

### Step 2

The user enters valid credentials.

Click the Save button at the bottom of the Pop-up.

The system creates a new channel with the newly entered information, opens the channel details interface and displays a Pop-up notification **Create new successfully** at the top of the interface. At the same time, the newly created canteen displays at the top of the page.
