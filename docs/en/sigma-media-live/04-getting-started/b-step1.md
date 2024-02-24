---
title: "S1: Signal flow settings"
order: 3
---

## How to access

1. Connect to Sigma Media Live's editorial interface system
2. On the Sidebar Menu, select Media live, and then select Transcode Channel. The channel list interface opens
3. Click **Add** to open the new channel creation interface. In the channel creation options interface, please select **manual** => **package** to enter the packaged channel creation screen
4. At the packaging channel configuration screen. Configure the desired input (**Input**) to encapsulate. You have 1 or more more desired inputs
5. Select the output (**Target**) you want to encapsulate and configure the basic parameters
6. Create a channel and run the desired channel

## Step 1: Set up the signal flow

An input system is a system that transmits multimedia content to a Sigma Machine. You must do some setup of your input signal system before you start working with Sigma Media Live.

There are 2 input signal transmission methods:

- Propulsion method
- Drag method

In this tutorial, we will for example setting the input signal to MPEG-TS\*\* transmitted over the **multicast UDP protocol**.

With the protocol for retrieving the signal from UDP multicast, it is necessary to have ready the signal stream that can be pulled from the prepared package (Sigma Packager) for this signal through a predetermined network card.

Make a note of the IP addresses of the UDP stream and the network card containing that signal so that it can be set up in the next step.
