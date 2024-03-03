---
title: Push a data stream
order: 3
---

## Push a data stream

Users do not use the Sigma Livestream system to push input data, they can use a third party to do so. Here are instructions on how to create a session using OBS Studio software:
**Step 1:** Install OBS Studio software on PC/laptop device (If not installed).

**Step 2:** Access to file selection menu| Setting| In Stream, set the following information:

- **Service**: select Custom
- **Server**: is the Stream URL link taken from the channel detail interface.
- **Stream Key**: is the Stream token taken from the channel detail interface.

Then, press the 'Apply' and 'OK' buttons to save the settings.

**Step 3:** Click on the Start Streaming menu to start the livestream session.

This allows users using OBS Studio to transfer input data while still using their infrastructure, the system receives information that has the input stream pushed into the channel. Create a session assigned to the channel with an 'init' state.

→ The channel switches the channel status from 'IDLE' to 'Active', displaying the associated session name at the channel details.

View and manage sessions conveniently in the session list.
