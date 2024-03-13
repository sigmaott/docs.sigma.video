---
title: Create a new profile
order: 1
---

# Profile

The profile profile information includes some important information for configuring the video conversion process. This information may vary depending on the specific platform, application, or tool the user is using to convert the video, to ensure that the generated video is of good quality and compatible with the viewer's device and network.

### Purpose

Support users to have the ability to choose and customize the profile as desired when creating channels.

### Scope

This profile is used for all features of the media-live service.

# Create a new profile

Create a new profile by following these steps:
**Step 1**: In the profile list, click the '+Add New' button in the right corner of the screen.
The system will display a pop-up **Add new profile**\* in the middle of the screen.

![Create New](/images/media-live/profile/create.png)

- Default display of profile name in the form: 'profile_[number due to random system]' helps users optimize time during the configuration process.
- Preset style selection

**Step 2**:

After clicking on the preset type, display a dropdownlist of 2 options:

- [Existing preset](./1-create-profile#existing-preset)
- [New preset](./1-create-profile#new-preset)

### Presets already exist

For quick configuration, users can select 'existing presets' – presets configured in the system.
The system will display a window.

![Preset already exists](/images/media-live/profile/existing-video.png)

The list of presets includes:

- Title: Add [video/audio/data] respectively
- The list includes:
  - ID
  - Name: the name of the preset
  - Type: [video/ audio/ data] respectively
  - Information: Profile details
  - Describe
- Pagination
- Refresh

**Step 3**: The user selects a preset from the list.

The system will return to the Create new profile pop-up window with updated data from the selected preset.

### New preset

To customize the media profile as desired, the user selects 'New Preset'. The system will display the corresponding media list information.

Names and descriptions are displayed by default in all preset types:

- Preset name: Block special characters, no spaces, support dashes, underscores. Vietnamese language is not supported.
- Preset description: Block special characters, **with spaces**, support dashes, underscores. Vietnamese language is not supported.

Details of each preset:

- [Video](./create-profile#video)
- [Audio](./create-profile#audio)
- [Data](./create-profile#data)

### Video

Only **1 video is allowed**.

The user selects the 'video' item, then displays the following information:

![video](/images/media-live/profile/create-data.png)

| School name          | Describe                                                                                                                                                                     | Compulsory | Data type     | Default   | Rule                                                                                         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------- | --------- | -------------------------------------------------------------------------------------------- |
| Kind                 | Preset type                                                                                                                                                                  | Have       | Textbox       | **Video** | Disable does not allow editing.                                                              |
| Codec                | Use to compress and decompress audio or video data to reduce size and increase transmission capacity.                                                                        | Have       | Single select | h264      | Options: h264, hevc, copy<br />**With copy option not allowed to edit other configurations** |
| Video rate           | Measure the data transfer speed of vi
