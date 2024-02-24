---
title: View the ad insert endpoint editor interface
order: 1
---

# View the ad insert endpoint editor interface

The ad insert endpoint list interface containing ads is an important part of the online advertising system, which is available and contains ads. The interface in the list includes basic information about ad insert endpoints such as ID, name, output link,... and allows search to help ad managers have an overview of each ad insert endpoint.

Display by default in the Dashboard interface.

On the main screen of the system, the user selects the list of ad insert endpoints in the header tab.

The system main screen displays:

![](/images/dai/list-endpoint.png)

In the main screen of the system, you will see the information displayed on the interface including:

| Column names      | Function                                                                                                                                                                                                                                                                                                                                                  |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**            | After the user creates a new ad insert endpoint, the system generates a unique ID for the ad insert endpoint for the purpose of identification.                                                                                                                                                                                                           |
| **Name**          | Because the CMS user configures the name of the ad insert endpoint, there is a detailed view task.                                                                                                                                                                                                                                                        |
| **HLS Replay**    | Because the system generates after configuring the ad insert endpoint, you can click to copy the link                                                                                                                                                                                                                                                     |
| **DASH Playback** | Since the system generates after configuring the ad insert endpoint, you can click to copy the link.                                                                                                                                                                                                                                                      |
| **Ad Server**     | A server that provides ad score specifications based on criteria including current ad campaigns and viewer interests, can click to copy the link.                                                                                                                                                                                                         |
| **Update**        | (default sorting) displays to the top of the page with the latest updated ad insert endpoint.                                                                                                                                                                                                                                          |
| **Action**        | Statistics: Navigate to the related statistics view options with the corresponding ad insert endpoint name filter. <br /> Edit: Allows users to edit the information of the ad insert endpoint. <br />Delete: Allows CMS users to perform ad insert endpoint deletion. <br /> Make a copy: Quickly create 1 copy with required information preconfigured. |

- Other buttons

| Button name         | Function                                                                                                                                                                     |    |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| **Sync icon**       | Right corner below the interface, always perform continuous system synchronization for 10 seconds                                                                            | !  |
| **Footer- footer**  | 2022@ By Sigma Streaming                                                                                                                                                     |    |
| Icon **Pagination** | Include information: Total number of pages, selection of number of items/1 page (default 10 items/1 page), current page, jump to the desired search page. |    |
| **Quick filter**    | Quick filters support searching for information including: Name and tags.                                                                                                    |    |
| Button **Filter**   | Perform filtering of more detailed information.                                                                                                                              |    |

## View ad insert endpoint details

**Step 1:** At the interface List ad insert endpoint

→ Click on **[Ad insert endpoint name]** to view ad insert endpoint details.

**Step 2:** Displays the ad insert endpoint detailed interface with the following information:

- Name ad insert endpoint: The name of the ad insert endpoint just selected
- Tag
- Icon **back** → Click back to interface List ad insert endpoint.
- Display panel:
  - **Playback Endpoint Prefixes** After the user configures the ad insert endpoint, SSAI returns the links: HLS playback prefix/ DASH playback prefix/ **link Session initalization playback prefix.**
  - \*\*Required settings: \*\* Ad decision server / Video content source.
  - **Advanced settings:** CDN content segmentation/ CDN ad segmentation/ Ad markup retention/ Bumpers start/ Bumpers end/ ad slate.

_icon copy next to each link._
