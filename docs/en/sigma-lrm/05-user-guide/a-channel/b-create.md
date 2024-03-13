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
See [proactive sync] instructions(../b-detail-channel/2-epg/2.7-manual-sync.md)

Enable synchronous configuration, displaying fields:

| School name | Describe                                          | Compulsory | Data type | P
