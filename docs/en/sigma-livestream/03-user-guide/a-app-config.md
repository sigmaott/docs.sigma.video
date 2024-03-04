---
id: docs-guideline-livestream
title: Application configuration
order: 1
---

## Application configuration

Users access the Sigma Livestream service for the first time, displaying the default application configuration page that requires general configuration settings for all channels in the Sigma Livestream system.

**Step 1:** The configuration page displays the following information:

![config app default](/images/livestream/config-app-default.png)

- **Warning**: Making changes to the application configuration will affect link play (viewers will not be able to access the video or will have to use a new play link) and transcode machine (change channel configurations: live stream link, rtmp push link, select transcode machine) when performing livestream.
- **Title**: Machine
- **Select machine type**
  - Sigma_machine: single machine
  - Sigma_machine_cluster: Cluster
  - Sigma_component_cluster: Cluster
- **Select the machine**: The specific machine suitable for performing the task
  - Show only 'running' status machines
  - Allows adding new machines. When clicked, a pop-up will appear directing the user to the corresponding machine type configuration page.

**Step 2:** The user selects the appropriate machine and presses the 'Save' button to save the information.

**Step 3:** The system saves information and displays tabs: Dashboard, channel, session, profile, allowing users to easily continue to manage and perform activities on the Sigma Livestream platform.

Note\*\*\*: When creating a livestream channel, users can configure each machine according to the channel. In case the user does not configure the machine according to the channel, the default channel uses the machine in the application configuration.

### Add your own machine

Users can add machines for use in the system.

**Step 1:** When the user clicks the 'Add' button to add a machine, a confirmation window will appear in the middle of the screen with

- Single machine: perform additional machines according to the instructions
- Cluster machine: The window displays: "Do you want to navigate to [corresponding machine type]?".

![add server](/images/livestream/add-server.png)

**Step 2:** The user selects 'Yes', a new tab will be opened to display the [corresponding machine type] list page. At the same time, the confirmation window will be closed on the current tab.

After the user has configured the new machine, and the machine is in a 'running' state, the name and information of the new machine will be displayed in the machine selection list. This makes it easy for users to choose and use the right machine for tasks in the system.

## Update application configuration

After the period of use, users who want to change the machine, follow these instructions:

**Step 1:** Go to the application configuration page, the current configuration and fixed alerts are displayed.

**Step 2:** The user clicks on the field (this will be considered a modification, even if the user has changed nothing), and displays a 'Save' and 'Remove' buttons to allow the user to edit the configuration.

In case the machine has been selected but the machine is in a 'DEAD', 'FREEZE' or **deleted** state, the machine ID will be displayed.

![server dead](/images/livestream/server-dead.png)

When the user clicks on the field, the hostname is no longer in the list, the user will be forced to select another machine.

**Step 3:** Press the 'Save' button to save the information, the system only saves changes to the newly set profiles with the channels created later or channels in the remaining state. **No changes** to Live and Ended sessions. This helps ensure that the new configuration is applied to the new channels and does not affect sessions in the 'Live' and 'Ended' states.
