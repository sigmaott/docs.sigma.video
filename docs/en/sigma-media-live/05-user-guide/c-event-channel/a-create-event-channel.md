---
title: Create a new event channel
order: 1
---

# Create a new event channel

This function allows CMS to create a new event channel, to create an event channel, we perform the basic funnel creation steps.

## Step 1: Set up the global configuration

At the Event channel main screen interface, users click on the "Create new channel" button

Screen system **Configuration settings for Event Channel**, general configuration settings for Event channel

![General Configuration Settings](/images/media-live/event-channel/create-event-channel-1.png)

[](../d-input-management/d-duplicate-input.md#create-input)

With the main information:

- **Information**:
  - **Name**: The name of the channel used to distinguish and search for channels in the channel list (requires entry, up to 50 characters)
  - **Description**: Channel description (no input required, maximum 200 characters)
  - **Tags**: List of tags (up to 100 tags, each tag entering up to 35 characters)
  - **Create MP4**: toggle button to mark the channel on/off MP4 creation

- **Interactive**: Display configuration at the product **_Tương tác_**

- **Watermark**: Configure enable/disable marking of images to the video screen (watermark position preview supported) Add up to 10 watermarks.

  When users **_Bật watermark_**, there are 2 ways users can use drag / drop on watermark on the preview screen, the parameters of X and Y coordinates will be automatically displayed respectively, and **vice versa** when filling in X and Y coordinates, the watermark will be displayed on the corresponding preview screen

  - **Latency(s)**: Delay of watermark
  - **X**: X coordinates (width of screen)
  - **Y**: Y coordinates (vertical of the screen)

  Add bookmarked images by clicking the dung__Chọn button to upload or pre-select from the system's library

- **Blackout**: when the signal is lost, the screen will display the uploaded content in the configuration (users can choose to turn it on or off)

## Step 2: Set up Input

After the user has filled in the required information, press the "Next" button, the system switches to the Input Setup screen

Users need to configure for 3 event timelines: _**Pre-Event, Main-Event, Post-Event**_

Display event timeline, displayed according to the user's configuration:

- **Start-Pre** (yyyy/mm/dd HH:MM:SS): Displayed in the timeline when the user has finished selecting and Start-Pre is in _**enabled**_

- **Start-Main** (yyyy/mm/dd HH:MM:SS): Always on and always displayed in the time bar when the user is done with the operation

- **End-Main** (yyyy/mm/dd HH:MM:SS): The End-Main moment will automatically be calculated as "Start-Main Moment" + "Total duration of added assets".

- **End-Post** (yyyy/mm/dd HH:MM:SS): calculated using the following formula End-Post = End-Main + Time for Post-Event

In between each event, the system calculates the total amount of time between the two events so that the user has more information.

### Pre-Event Configuration Settings

![Pre-Event Configuration Settings](/images/media-live/event-channel/create-event-channel-pre-event.png)

The user can enable or disable the setting for Pre-Event, if **enabled** the user must provide the following information to complete the setup:

- **Start Pre**: is the start time of the Pre-Event. Allow users to choose the Pre-Event start date and time (Pre-Event must be at least 5 minutes and maximum 7 days)

- **Input**: The user selects the input of photos or videos from the gallery or uploads new content (only select 1 is allowed)

- **Countdown**: countdown events

### Main-Event Configuration Settings

![Main-Event Configuration Settings](/images/media-live/event-channel/create-event-channel-main-event.png)

Mandatory user to configure Main-Event

- **Start Main**: is the start time of the Main-Event (Main-Event must have a minimum duration of 5 minutes and a maximum of 2 days)

- **End Main**: The End-Main time depends on the selection **Input**
  - When the input selection is ASSET\*\*\*: The End-Main time will automatically be calculated as "Start-Main time" + "T
