---
id: docs-guideline-livestream
title: View session list
order: 1
---

## What is a session?

After the channel is initialized, the user can push the input stream and the session is automatically assigned to the init state, ending when the session runs at the end of its duration (timeout) or the user actively stops the channel. Keeping sessions running continuously can help create continuity in the viewing experience and keep your audience constantly interested in the content and avoid overload.

A livestream channel has multiple sessions assigned. Changes to each session's channel information may vary, depending on the channel's edit update history.

## Channel initialization

Do not actively create new sessions in the Livestream system, users use 3rd parties.

**Step 1:** At 3rd party software, copy/paste the channel details to use → push the input stream.

**Step 2:** Return to the livestream system, the system receives information with input stream pushed into the channel. Create a session assigned to the channel with an 'init' state.

→ The channel switches the channel status from 'IDLE' to 'Active', displaying the associated session name at the channel details.

## List of sessions

A list of all available sessions in the Sigma Livestream system, each session is assigned with the corresponding play link and channel, which can be clicked to navigate to other related pages more quickly.

After initializing the channel, users can view the desired list of sessions.

### Method 1: View assigned sessions by channel

At the Livestream channel list, users click on the 'open session list' icon in the desired channel action column

The system navigates to the list, displaying sessions with the channel ID of your choice.

### Method 2: View the session list

To view the list of sessions, you need to perform the following two steps:

Step 1: Switch to the "Session" tab.
Step 2: Display the session list interface with the following information:

- SessionID
- Session Name: Click to open the session details page.
- Channel: Click navigate to the details of the channel on which the session performs the task.
- Status:
  - Init: initialization status
  - Processing: automatic channel transfer
  - Preparing: appears when the transmission line is unstable
  - Error: unstable cases, unable to tune in, or process error handling
  - Live: stable channel
  - Ended: channel stops broadcasting
- Action:
  - Stop session - disable this feature when the status of the session is 'Ended'.
  - Session deletion: Only 'Ended' status session is allowed

This makes it convenient to manage and adjust sessions, and makes it easy for users to track the status and progress of each session.
