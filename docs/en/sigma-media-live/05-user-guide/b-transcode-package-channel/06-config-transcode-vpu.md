---
title: 'Config Transcode Channel with VPU' 
order: 1 
---

# {{ $frontmatter.title }}

## Step 1: Access the System

1.  Log in to the **Sigma Media Live Dashboard**.
2.  On the menu bar, select **Channels** > **Transcode Channels**.

## Step 2: Initialize Channel

1.  Click the **+ Add** button (green) in the top right corner of the screen.
2.  In the **Select Creation Method** section, choose **Manual**.


## Step 3: Configure Information (Config Tab)

In the **Config** tab, fill in the required identification information:

* **Name**: Enter the channel name (e.g., `VPU_Channel`).
* **Name modifier**: Enter a secondary name for distinction (e.g., `VPU`).

## Step 4: Configure Input (Inputs Tab)

Switch to the **Inputs** tab, click **Add input**, and configure according to one of the following two cases:

### Case 1: Create New Input
* Enter **Name** and **Type**.
* For **Server Type**, select **Sigma Media Server**.
* For **Server**, select **VPU**.

### Case 2: Use Existing Input
* Select an **Input** from the list that is currently running on a VPU server.

::: warning Important Note
After selecting or creating the Input (for both cases), you **must** set the following parameters:
* **Encoder mode**: Select **MANUAL**.
* **Video Encoder**: Select **QuadraT1U#0**.
:::


## Step 5: Configure Encoding Profile (Profiles Tab)

1.  Select **+ Add** > **New Profile**.
2.  Enter a **Name** for the profile.
3.  For **Encoder**: Select **NETINT**.

::: tip
The system will automatically update the appropriate **Codec/Preset/Profile** when NETINT is selected.
:::

4.  Click **Submit**.

## Step 6: Configure Output (Targets Tab)

1.  Select **+ Add**, choose the desired output protocol (e.g., Hls, Dash...).
2.  Click **Submit**.
3.  Enter a **Name** for the Target.
4.  In the **Profile** section, check the box for the Profile created in **Step 5**.

## Step 7: Completion and Verification

1.  Click the **Submit** button in the bottom right corner of the screen to save the channel configuration.
2.  Return to the **Transcode Channels** list and locate the newly created channel.

> **Successful Result:** The **Status** column displays **Live** (green).