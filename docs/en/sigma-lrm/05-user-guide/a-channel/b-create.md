---
title: Create a new LRM channel
order: 2
---

# Create a new LRM channel

The process of updating and synchronizing broadcast schedule information between different data sources, ensuring that information about the broadcast schedule of online TV channels or radio stations is accurate and on schedule.

After preparing the source, program code, and API key to use to configure your own channel. You can create a new channel using these instructions:

## Step 1: Create a channel

At the Channel List main screen interface, users click on the button **Add channel**

Display system **Pop-up add new channel** between interfaces:

![](/images/lrm/pop-up/create-channel.png)

The information displayed:

| School name             | Describe                                                                                                                                                                                | Compulsory | Data type     | Placeholder                          | Rule                                                                                                                                    |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Name                    | Channel name to contain event programs, distinguishing purposes.                                                                                                                        | Have       | Textbox       | Please enter a channel name          | Allows entering valid characters: A-Z, a-z, 0-9 and "-", "_"                                                       |
| Describe                | The description is visible to CMS users, not to viewers for awareness purposes. Please enter an easy-to-understand, concise description of your channel's main content and easy search. | Not        | Textbox       | Please enter a channel description   | Support all languages, characters, numbers, spaces, spaces and all special characters.                                                  |
| Live media channels     | As the list of live media channels available in the system, the list changes in real time.                                                                                              | Have       | Select        | Choose at least 1 live media channel | Allows selecting all channels in the system                                                                                             |
| Time zone               | According to UTC time zone standards.                                                                                                                                                   | Have       | Single select | Default: time zone by user account   | According to regulatory standards.                                                                                                      |
| Channel synchronization | Channel sync configuration                                                                                                                                                              | Not        | Switch        | Default: On                          | **Enable**: displays the groups below respectively <br />**Disable:** disable buttons and related information after creating a channel. |

### Enable channel sync profiles

Maintaining a synchronized broadcast schedule is critical to providing the best viewing experience for viewers. We recommend that you enable channel sync profiles so that you can proactively sync as needed.
See [proactive sync] instructions(.. /b-detail-channel/2-epg/2.7-manual-sync.md)

Enable synchronous configuration, displaying fields:

| School name | Describe                                          | Compulsory | Data type | Placeholder                       | Rule                                                                        |
| ----------- | ------------------------------------------------- | ---------- | --------- | --------------------------------- | --------------------------------------------------------------------------- |
| Source      | Data source to get the broadcast schedule         | Have       | Textbox   | Default: VTV                      | Don't allow corrections                                                     |
| Endpoint    | Data source address to get the broadcast schedule | Not        | Textbox   | http\://example-endpoint.com      | Support for special characters, accents,…<br />Required in the right format |
| Program ID  | Program ID to get the broadcast schedule          | Have       | Textbox   | Please enter the configuration ID | N/A<br />( Provided by vtv)                              |
| API Key     | Tokens to access                                  | Have       | Textbox   | Please enter the API key          | N/A<br />( Provided by vtv)                              |

### Turn on auto-sync profiles

Proactive synchronization can take up user time. Therefore, we recommend that you enable auto-sync time frame configuration to optimize your time.

Turn on auto-sync, which displays fields:

| School name             | Describe                                                                                                                        | Compulsory | Data type | Placeholder   | Rule                                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Time synced             | Timelines automatically sync throughout the day to get broadcast schedules.                                                     | Have       | Select    | Choose a time | Maximum limit of 10 timelines.                                                                                               |
| **Number of sync days** | Is the number of days the system will proceed to synchronize the broadcast schedule from the time of automatic synchronization. | Not        | Textbox   | Default: 3    | Enter an integer<br />Minimum value = 1 (only the date the synchronization was performed) and maximum =14 |

### Buttons

- **"Cancel" button**: Do not perform a new creation, return to the main screen interface.

- **"Save" button**: Save the newly created information, return to the main screen interface.

## Step 2: Save the configuration

The user enters valid credentials.

Click the **Confirm** button at the bottom of the Pop-up.

The system creates a new channel with the newly entered information, displaying a Pop-up notification **Create new successfully** at the top of the interface.

- The channel turns on synchronous configuration.

- Display all relevant information in channel details.

- Allows synchronous active operations.

## Step 3: Auto-sync

**Condition**: The channel has been enabled for auto-sync and up to the timestamp is configured to sync automatically.

1. The system automatically synchronizes the broadcast schedule.
2. After synchronization

- Show new broadcast schedules on the timeline and program list
- Change the last and next sync information (if applicable).
