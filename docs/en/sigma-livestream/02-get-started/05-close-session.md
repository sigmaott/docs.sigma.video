---
title: Close session
order: 5
---

Sessions are created continuously, depending on the update of the channel. After the session reaches an 'ended' state, the session cannot run again, using the new session. The session can be closed in 2 ways:

## Automatically stop sessions

The channel stops automatically when the timeout or because the user actively stops the channel (earlier than the runtime).

### Proactively stop sessions

**Condition**: The channel is in an 'Active' state.

**Step 1** :

At the session list interface, the session is not in an 'ended' state. The system will display the **End session** when moving the mouse on the 'stop' icon in the action column.

The user clicks on the 'stop' icon, the system will open a warning pop-up window in the center of the screen.

![end of session](/images/livestream/stop-session.png)

_Session end pop-up_

- Subject: Are you sure to end the session?
- Cancel button: Make no changes, return to the Session List screen.
- Agree button: Execute the command.

**Step 2** :

The user clicks the **OK** button to confirm the end of the session. The system will display a notification pop-up window at the top of the screen.

_Session end notification successful!_

The session that has just been stopped is displayed with an 'ended' status, hiding the 'stop' icon. Simultaneously displayed with the corresponding duration.
