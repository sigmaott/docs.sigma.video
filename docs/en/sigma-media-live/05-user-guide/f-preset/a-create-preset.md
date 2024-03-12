---
title: Create a new preset
order: 1
---

# Create a new preset

This function allows CMS users to create new presets to save time when creating profiles

**Step 1**: To access the Media Live product, the user moves the mouse cursor to **Channel templates** and selects the tab **Presets**

The system displays the interface of the existing preset list

**Step 2**: At the preset list screen interface, users click the **Add** button

The system displays a new pop-up preset in the middle of the screen. With general information:

![Create new preset](/images/media-live/preset/create-preset.png)

- **Name**: Name of the preset (required, maximum 50 characters)
- **Description**: Preset description (optional, maximum 200 characters)
- **Type**: There are 3 types: _**Video, Audio**_ and _**Data**_
- **"Remove" button**: Do not perform new creation, return to the main screen interface.
- **"Confirm" button**: Save the newly created information, return to the main screen interface.

When the user selects the type as **Video** (only maximum _**1 video**_ is allowed), the system displays the information:

| **Column name**          | **Describe**                                                                                         | **Request**                                                                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Codec**                | Use to compress and decompress audio or video data to reduce size and increase transmission capacity | Force entry, allow choices: <br/>- **h264** (_display default_)<br/>- **HEVC<br/>- copy** (no editing of other configurations allowed) |
| **Video rate**           | Measure the data transfer speed of video or audio                                                    | Input is not required, the system displays the default value _**4000000**_ (allow values in the range _**64000 <= birate <= 60000000**_)                  |
| **FPS**                  | Number of frames displayed per second                                                                | Input is not required, the system displays the default value _**25**_ (allow values in the range \*\*\* 10 <= FPS <= 60\*\*\*)                            |
| **Width**                | The width of the video frame                                                                         | Input is not required, the system displays the default value _**1920**_ (allows values in the range _**0 <= Width <=7680**_)                              |
| **Height**               | The height of the video frame                                                                        | Input is not required, the system displays the default value _**1080**_ (allow values within _**0 range <= Height <= 4320**_)                             |
| **Hdr**                  | Allows the screen to display clear images, especially details in floating and shadow areas           | Optional import, options allowed: **Copy, none, HDR10, HLG10, PQ10**                                                                                                         |
| **Bframe**               | Use to optimize video compression and quality                                                        | Not required, allow values within _**0.0 <= Bframe <= 3.0**_                                                                                                                 |
| **Pixel format**         | The way in which the color information of each pixel is represented in a digital image               | Optional entry, choices allowed: **yuv420p, yuv444p, yuv420p10le, yuv444p10le**                                                                                              |
| **Scale Type**          
