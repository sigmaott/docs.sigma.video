---
title: 'Config Event Channel with VPU' 
order: 11 
---

# {{ $frontmatter.title }}

## 1. Initialize Channel

1.  From the **Dashboard**, go to the menu and select **Channels** > **Event Channels**.
2.  In the Event Channel page click the **+ Add** button (blue) in the top right corner.


## 2. Setting Information and Schedule (Main Event)

* **Information**: Enter the **Name**.
* **Main - Event**:
    * Set the start time (**Start Main**) and end time (**End Main**).
    * In the **Inputs** field, select **INPUT**.
    * Click the **+ Add** button to add a signal source.

## 3. Configuring Input

When the **Add Input** window appears, proceed as follows:

* **Create New Input**: Enter details and select **Server** as **VPU**.
* **Select Existing Input**: Choose an input from the list (running on a VPU server).

::: warning Configuration Requirements
After selecting the Input, set the following parameters for both cases:
* **Encoder mode**: MANUAL
* **Video Encoder**: QuadraT1U#0
:::

**Confirmation**: When the **Encoder Sync?** popup appears, click **Confirm** to synchronize the configuration for profiles.

## 4. Advanced Configuration (Optional)

The system automatically creates default **Profiles/Targets/AI config**.

* Click **Advanced** if you want to edit details.
* Leave as is to use the default configuration.

## 5. Completion and Verification

1.  Click the **Submit** button in the bottom right corner to create the channel.
2.  Return to the **Event Channels** list and find the newly created channel.

> **Success Result**: The **Status** column displays **Live** (green) and the **State** column displays **Main** (or the corresponding real-time state).