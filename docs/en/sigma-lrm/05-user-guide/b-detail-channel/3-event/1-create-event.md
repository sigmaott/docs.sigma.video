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
    <th class="tg-0pky" style="f
