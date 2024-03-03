---
id: docs-guideline-livestream
title: View session list
order: 1
---

## What is a session?

After the channel is initialized, the user can push the input stream and the session is automatically assigned with an 'init' state, ending when the session runs at the end of its duration (timeout) or the user actively stops the channel. Keeping sessions running continuously can help create continuity in the viewing experience and keep your audience constantly interested in the content and avoid overload.

A livestream channel has multiple sessions assigned. Changes to each session's channel information may vary, depending on the channel's edit update history.

The session is unique, when the session ends, cannot be reused, the newly born session continues to operate the task.

## Channel initialization

Do not actively create new sessions in the Livestream system, users use 3rd parties according to the instructions [push input data stream](.. /.. /02-get-started/03-push-data)

## List of sessions

A list of all available sessions in the Sigma Livestream system, each session is assigned with the corresponding play link and channel, which can be clicked to navigate to other related pages more quickly.

After initializing the channel, users can view the desired list of sessions.

### Method 1: View assigned sessions by channel

At the Livestream channel list, users click on the 'open session list' icon in the desired channel action column

The system navigates to the list, displaying sessions with the channel ID of your choice.

![filter by channel](/images/livestream/session-filter.png)

### Method 2: View the session list

To view the list of sessions, you need to perform the following two steps:

**Step 1:** Switch to the tab **"Session"**.
**Step 2:** Displays the session list interface with the following information:

! [list session] (/images/livestream/list-session.png)

- SessionID
- Session Name: Click open the session details page.
- Channel: Click navigate to the details of the channel the session performs the action on.
- Status:

! [state diagram] (/images/livestream/state-diagram-session.png)

```
- Init: initialization state
- Processing: automatic channel transfer
- Preparing: occurs when the transmission line is unstable
- Error: unstable cases, unable to catch waves, or error handling
- Live: stable channel
- Ended: channel stops broadcasting
```

- Action:
  - Stop session - disable this feature when the status of the session is 'Ended'.
  - Session deletion: Only 'Ended' status session is allowed

This makes it convenient to manage and adjust sessions, and makes it easy for users to track the status and progress of each session.
