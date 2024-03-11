---
id: doc-guideline-General-LRM
title: Create a new event
order: 2
---

# Create a new event

An event is an activity that gives editors the ability to change the content of a live, catchup, or SCTE 35 signal to manage the airwaves. Try creating a new event.

## Create a new onetime event

There are 2 ways to create a new event.

### Create new events from existing programs

1. At the event timeline, click on the program available on the broadcast schedule.
2. Pop-up display system Program Information
3. Click the Create Event button
4. Display pop-ups adding events with the duration of the broadcast schedule.

### Create a new event

In the Events view, press the **Add Event** button.
A pop-up window will appear in the center of the interface to add new events.

![](/images/lrm/pop-up/create-event.png)

The information displayed:

| School name                      | Describe                                                                                                                                               | Compulsory | Data type | Default                                                     | Rule                                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | --------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Event Name**                   | The name of the event is used to distinguish and search for events in the event list                                                                   | Have       | Textbox   | Placeholder: Please enter an event name                     | Block special characters, support spaces, underscores, strikethrough<br />No Vietnamese language support                                 |
| **Event Type**                   | There are 3 types of events: **SCTE35, Live, VOD**.                                                                                                    | Have       | Select    | SCTE 35                                                     | Vietnamese language is not supported. Depending on the choice, the system will open sub-options as described in the table below.         |
| **Includes live media channels** | User selection list, the choices here are the channel's Sigma channel for the purpose of **only including the channel desired to display** to viewers. | Have       | Radio     | Select all channels                                         | Support spaces, underscores, strikethrough                                                                                               |
| **Publication type**             | There are 2 types of publishing: onetime and scheduling                                                                                                | Have       | Radio     | OneTime                                                     |                                                                                                                                          |
| **Period**                       | Is the length of time the event takes place                                                                                                            | Have       | Date time | Start time: Current time- end time: Current time+10 minutes | Events with duration limit **24 hours** (selected over day) <br />Start date as of 00:00:00 - end date as of 23:59:59 |

_Description of event types_

<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky" style="font-weight:bold" >Event Type</th>
    <th class="tg-0pky" style="font-weight:bold" >Multimedia content</th>
    <th class="tg-0pky" style="font-weight:bold" >Asset</th>
    <th class="tg-0pky" style="font-weight:bold">Form</th>
    <th class="tg-0pky" style="font-weight:bold">Regime</th>
    <th class="tg-0pky" style="font-weight:bold">Describe</th>
    <th class="tg-0pky" style="font-weight:bold">Regulations</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">SCTE35</td>
    <td class="tg-0pky">Not</td>
    <td class="tg-0pky"> Video, image</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">Used to inform all types of events, programs, and promotions in linear transport streams and in advanced ABR delivery formats like HLS and Dash.</td>
    <td class="tg-0pky" rowspan="2" >Only creation is allowed with a StopTime greater than the current time of 1 minute Stop Time > current time + 1 minute</td>
  </tr>
  <tr>
    <td class="tg-0pky">Live</td>
    <td class="tg-0pky">Have</td>
    <td class="tg-0pky">Video, image</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">Online content replacement streams</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="6">VOD</td>
    <td class="tg-0pky" rowspan="6">Have</td>
    <td class="tg-0pky" rowspan="6">Video</td>
    <td class="tg-0pky" colspan="3">The stream replaces video content on demand, replaces sketches, when the stream ends, can replay, make edits, delete events</td>
    <td class="tg-0pky" rowspan="6">Allowed to create events with intervals (Start Date + Start Time), (Stop date + Stop Time) in the past</td>
  </tr>
  <tr>
    <td class="tg-0pky">Cut</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">Delete the original stream, do not select alternate content (the calling user cannot see the original content)</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="4">Alternative content</td>
    <td class="tg-0pky" colspan="2">The alternate video is used to replace part of the paragraph. In the event that the replacement video (15 minutes) is shorter than the one to be replaced (60 minutes), the processing solution is carried out according to each option.</td>
  </tr>
  <tr>
    <td class="tg-0pky">Replace</td>
    <td class="tg-0pky">Replace part of the event (e.g. replace the first 15 minutes) and leave the remaining content (45 minutes) of the original paragraph intact</td>
  </tr>
  <tr>
    <td class="tg-0pky">Repeat</td>
    <td class="tg-0pky">The refill video is adjusted to match the duration of the segment to be replaced and repeated as needed to ensure sufficient length (for example, repeat the replacement video for 15 minutes until the length of the original paragraph is 60 minutes to be replaced).</td>
  </tr>
  <tr>
    <td class="tg-0pky">Substitution and cutting</td>
    <td class="tg-0pky">Adjust to fit the time, the rest of the video is removed (remove the original, existing paragraph). The video only runs for the first 15 minutes, and the remaining 45 minutes of the original segment are not shown.</td>
  </tr>
</tbody>
</table>

## Create a new scheduling event

For cases where you only need to change the content within a specific time period, creating a new event is appropriate. However, in cases where events repeat over multiple days, editing each individual event can be time-consuming and laborious. Therefore, you can choose a scheduling publishing type to make it convenient for CMS users to set time and manage built-in video editors.

### Advantage

Compared to Overlay scheduling, when a user successfully creates an event using the new scheduling function, the event will immediately appear on the timeline with a status of **Preparing** making it easy for users to track and observe.

### Mode of operation

Event scheduling: Consists of one or more events that are configured based on the interval and displayed at configured intervals.

The system supports 2 methods:

- Alternate Content (Blackout) scheduling for all or some pre-installed partners.
- Schedule wave blocking manually or from a pre-marked EPG.

### Configure scheduling events

Editorial content scheduling is important in your channel's event strategy, so curating and scheduling editorials requires care. Watch schedules help plan content on the channel become scientific and effective. By using scheduling, CMS users can maintain accuracy and ensure that editorial content is published at the right time for an audience.

**Step 2**: Select the publishing type as **Scheduling**

The system displays additional fields in a drop-down list.

![](/images/lrm/pop-up/create-event-schedule.png)

_Scheduling event information configurations_

| School name            | Describe                                                                                                                       | Compulsory | Data type | Default      | Rule                                                                                                                                                                                                                                                                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------- | --------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tag**                | Not visible on the client, tags are used for markup, related to each other to help readers easily find and follow the content. | Not        | Tag       | New card     | Supported characters are numbers, letters, underscores ( _ ) and dashes ( - ). No duplication, between 1 and 35 characters, no additional displays from the 36th character<br />The long card case will show "Abc…..”<br />There is no limit to the number of cards generated. |
| **Scheduling type**    | Choose recurrence settings for events, there are three types of scheduling: daily, weekly, and custom.                         | Have       | Select    | Daily        | With the weekly option, you can select specific days of the week.                                                                                                                                                                                                                                                                         |
| **Period**             | About the time the event takes place                                                                                           | Have       | Date      |              | The time of the new event does not coincide with the time of an existing event\*\*( in the same channel, same event type)<br />                                                                                                                                                                                        |
| **Scheduling details** | The list of corresponding publication times selected above, can be deleted with a minus sign.                                  | Have       | Time      | Current time | The total number of events generated **no more than 500 events**.<br /> There are no duplicate times in the list.<br />Click the add scheduling button to add options                                                                                                                                                                     |

- **Cancel button**: Do not make a new creation, return to the main screen interface.
- **Save button**: Save the newly created information, return to the main screen interface.

**Step 3**: After entering the information, click the **Save** button at the bottom of the Pop-up window.

Event creation is done, and a notification appears in the right corner of the screen

_Notifications: successful event creation!_

Also, all events generated from the scheduling publishing type have generic shceduleID\*\*.

_Note: Events are only visible on selected Media live channels when the user is configured._

## Show on timeline

After creating a new event, information about the event including **Event Name** and **duration** respectively will appear on the timeline.

View statuses and display on [timeline](../a-open-detail.md).

## Display on the corresponding list

After creating a new event, all information of the event will be moved to the corresponding Tab.

Subject:

[List of events](../c-event/3-event/3.1-view\.md)

[List of scheduling events](../c-event/2-event-echedule/2.1-view\.md)
