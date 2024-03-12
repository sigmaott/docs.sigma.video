---
title: Create a new ad insert endpoint
order: 2
---

# Create a new ad insert endpoint

This functionality allows CMS to create new ad insert endpoints to run and contain ads

**Step 1**: At the main screen interface List of ad insert endpoints, users click on the button **Create ad insert endpoint**

Pop-up display system Add new ad insert endpoint on the right side of the interface

![](/images/dai/pop-up-create-endpoint.png)

<center>

_Figure 1: Pop-up creating a new endpoint_

</center>

With the main information:

- Required installation:

| Name                     | Function                                                                      |
| ------------------------ | ----------------------------------------------------------------------------- |
| **Name**                 | The name of the ad insert endpoint is self-configured by the user.            |
| **Tag**                  | A tag that distinguishes and easily searches ad insert endpoints when needed. |
| **Video content source** | Original Origin Link.                                                         |
| **AdDecisionServer**     | is 1 vastID link provided by the advertiser.                                  |

- Advanced settings (optional): for viewers, it is not possible to request directly to origin, **to view ads, additional CDN links are required** (CDN can be considered 3rd party), use CDN to send playback requests to SSAI, where CDN will convert the link to be able to call Origin to users.

_2 This CDN link differs between segments
→ The extension is assigned to the link to view user-configured ads._

| Name                                                                                                                                          | Function                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **CDN content segment prefix**                                                                                                                | The original link has been converted.                                                           |
| **CDN ad segment prefix**                                                                                                                     | The original link has been converted.                                                           |
| **Ad martket passthrough**                                                                                                                    | Disallow (remove) / Allow (keep) the ad insertion marker. |
| [Bumpers pre-inserted ad](../2-ad-insert-endpoint/f-bumper-ad.md)    | Bumpers inserted before the ad.                                                                 |
| [Bumpers inserted after ads](../2-ad-insert-endpoint/f-bumper-ad.md) | Bumpers inserted after the ad.                                                                  |
| [Ad slate](../2-ad-insert-endpoint/g-ad-slate.md)                    | Media content inserted into the ad is replaced in case of errors.                               |
| [Delay ad](../2-ad-insert-endpoint/h-delay.md)                       | Configure the timeout for insertion after an ad insertion signal.                               |

- **Cancel button**: Cancel the new creation process and return to the main screen interface.
- **Save button**: The system will create a new channel and save the entered information.

**Step 2**: The user provides the necessary information.

**Step 3**: Once done, click the Save button at the bottom of the pop-up window.

The system creates a new ad insert endpoint with saving the newly entered information, displaying a pop-up message **Create ad insert endpoint successful** in the middle of the screen to notify that the channel creation process has been successfully performed.

<center>

![](/images/d
