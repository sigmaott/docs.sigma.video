---
id: doc-guideline-General-LRM
title: Event
order: 1
---

## Prerequisites

To create an event, make sure that there is already a channel containing events.

## Channel detail interface

The default screen in the channel list interface

When moving the mouse on the calendar icon, the system will display the line **details**.

CMS users can click the Details icon in the action column.

After that, the system will open the event interface with the title **channel name being selected**.

In case of channel synchronization configuration, an active sync button will be displayed.

The interface consists of two parts:

- The tab displays a list of programs and events.
- The tab provides channel insights.

## Event timeline

Displays the default hub view of channel details. Starting from 00:00:00 to 23:59:59 displays all programs, types of events of the day.

### Condition

Each event, as soon as it is created, will be categorized into 4 different statuses: Prepared, Ready, Complete, and Faulty. These states are determined based on a comparison between the time of the event and the real-time.

- **Prepare**: The current time is **previous** of the event's start time.
- **Ready:** The event is in runtime. Display multimedia content
- **Complete:** The current time is **after** the end time of the event.
- **Error:** During the system check the event encountered a problem (signal loss, interruption,...).

_Where the event type is VOD, the new event is always available._

### Button

First, you need to select a date as a search filter, assist users in the search process and provide an overview.

_Note: All programs performed are limited to the date range you selected._

Each button performs a distinct task, please see how each button performs its function.

- [Import program](./2-epg/2.5-import-epg.md)

- [Export program](./2-epg/2.6-export-epg.md)

- [Create program](./2-epg/2.1-create-epg.md)

- [Add event](./3-event/1-create-event.md)

### Display

After creating a new event, information about the event including **Event Name** and **duration** respectively will appear on the timeline.

Divided into 2 types:

1. Program

Original shows run throughout the day. The end time of the preceding program is the start time of the next program.

- Show hidden tags with programs that have been hidden.
- Clicking on the program displays the [program information] window(2-epg/2.2-epg-list.md#view-info-per-program).

2. Event
   Show more media content
   Three types of events: SCTE35, Live, VOD

- Display **rich media content** with event type \*\*Live \*\* and event type **VOD**|form **alternate content**.
- Display a **clock** icon (hover to view Event Calendar) for events with scheduling publishing type.

<!-- - Hiển thị biểu tượng **đồng bộ** (hover để xem Đã đồng bộ) cho những sự kiện đã được đồng bộ. -->

- Clicking the event displays the [update event] window(./3-event/3-event/3.2-edit.md).

Other elements in the interface:

- **Slider** runs from 00:00 to 24:00 of 1 day and 6 hours apart, users can perform time sliding operations to help filter information on the event line.
- **Time Segment** starts from 00:00 to 24:00 in a day, is evenly divided into 1-hour time segments that display timestamp markers on the timeline and users can perform sliding operations on the timeline.
- **Move to current**: **Use only with current date**, click the icon and the timeline will move to the current timeline.
- **Zoom in**: Provides a zoom level of 50% to 200% for an even period of time to drill down into events. 100% default.
- **Real-time axis**: is a dash on the interface, always fluctuating in real time.
- **Horizontal scrollbar**

## List

The three lists in the last section, by default, show the program list.

- [Program List](./2-epg/2.2-epg-list.md)

- [List of events](./3-event/3-event/3.1-view\.md)

- [List of scheduling events](./3-event/2-event-echedule/2.1-view\.md)
