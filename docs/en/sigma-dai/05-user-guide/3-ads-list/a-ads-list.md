---
title: View List of ads
order: 1
---

# View List of ads

**Condition**:

- There is already an ad insert endpoint created and containing it.
- At least 1 ad has been created.

The information displayed here helps users keep track of the ads that have been configured, displayed on the online stream.

_The default view displayed is in Dashboard._

In the sidebar, select Ad list.

The system displays the Ad List interface with the following information:

![](/images/dai/list-ad-default-off.png)

<center>

_Figure 1: Default ad list_

</center>

- **Title**: List of ads.
- **Moderation by app**: disabled by default.
- **Quick search filter button**: title ( ALl) / vastID ( All) / status ( All).
- **Data refresh icon**: by default automatically update data with a duration of 10 seconds, users can click refresh **manual**.
- **Pagination**

### Ad dashboards

| Column names         | Function                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------ |
| **ID**               | An advertising identifier (adID) that identifies                                    |
| **Preview**          | A full-length MP4 video of the ad is displayed to viewers, users can perform a preview operation here. |
| **Headline**         | Ad name                                                                                                |
| **VastID**           | An advertising identifier (adID) in the returned vast file.\*\*                     |
| **Duration**         | The duration of your ad's impression                                                                   |
| **Condition**        | There are 2 types of statuses: available and unavailable                                               |
| **First appearance** | The first cue-tone on an online stream.                                                                |

## Quick filter (Optional)

Users perform quick searches using the quick filter.

Quick filter: Filters are displayed right on the interface to support users to search quickly, at the interface The list of ads includes:

- Title: **Displays all values containing keywords in any position.**
- VastID
- Status: Available/Unavailable.

## Preview(Optional)

Users perform ad previews

At the Ad List interface, users click on preview.

The system displays **mp4 video of the ad**.

Actions shown:

| Column names                              | Function                                                                                     |
| ----------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Play icon**                             | Display when you just access, click to play the video.                                       |
| **Playback icon**                         | Display after the video has finished running, click to play it back if the viewer needs.     |
| **Content segment:**                      | The maximum is the duration of the ad.                                                       |
| **Playback rate**                         | 0.5x/ 0.75x/ 1x(default)/ 1.5x/ 2x.                                       |
| **Player playing in picture-in-picture:** | Play dynamic videos out of the current Tab. Press Back to Tab to return to the SSAI website. |
