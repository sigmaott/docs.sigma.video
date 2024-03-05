---
title: Create a Livestream channel
order: 2
---

# Get started with Sigma Livestream

## Set up a Livestream channel

To set up a Livestream channel, you need to prepare the following tasks:

- Prepare the server.
- Create a Livestream channel configuration.
- Use the generated Livestream channel path to push the data stream from 3rd parties.
- Collect, monitor the necessary parameters.

When you're done, you'll be able to submit a replay request to Sigma Livestream for personalized channel content in your stream.

## Prepare

Before you start, you need to prepare the following tasks:

- Have an account that accesses the management system of **Sigma Streaming Platform**\* 'https\://portal.sigmaott.com'
- Accounts with authorized app access with Sigma Livestream.

## Step 1: Access the Sigma Livestream system

To use Sigma Livestream, you need to have an account and access to, view and perform allowed actions.

1. Visit the 'https\://portal.sigmaott.com/app' link
2. Display App List, select which apps have access.
3. Display by default to the **App Overview.**
4. Select **go to Livestream.**
5. Display interface **Application configuration** requires server configuration to execute tasks for subsequent broadcast channels.

## Step 2: To create a new livestream channel

1. In the channel list section, click the Add channel button
2. Pop-up Display System Create a channel.
3. The user enters the required information.
4. Make a new creation.

Configuration example:

- **Basic configuration**
- **Advanced configuration**:
  - Type: 'Transcode'
  - How it works: 'Normal'
  - Output format: 'HLS'
  - Transcode profile: '480p', '720p'
  - Timeout: '300'

When finished, open a browser with the **HLS player - m3u8 streaming utility**, enter your Livestream URL and view the stream of browser playback.

## Step 3: Check the configuration

Test the stream using the URL in the appropriate format for your streaming protocol.

### To view livestream channel details

1. At the livestream channel list interface, users click on **livestream channel name** to view detailed information.
2. The system displays livestream channel details.
3. Users view the livestream channel details and can **use URLs** to run the desired livestream channel.

_After the user configures the livestream channel, sigma livestream returns setting information including:_

- Link Stream ID example: channel identifier

```
1E89FBF6-C64E-4477-B1ba-10CAA7FAB3B3
```

- Stream token: is the token to run

```
A85E8-463282BAFD2B28F1FC7D-08B26
```

- Stream URL: link URI, rtmp for users to push the stream live

```
rtmp://192.168.80.2:1935/live/livestream
```

- Livestream URL: http link for users to view the stream. The configuration output format is 'HLS' so livestream URLs ending **.m3u8**

```
http://192.168.80.2:8080/manifest/a85e8b80-7a3c-46d4-bbd0-4c0bfbe08b26/master.m3u8
```

## Step 4: Clean up (Delete livestream channel)

Once you have created and launched the livestream channel, then it is time for the channel to automatically stop working. In case you need to delete the channel unnecessarily, you can perform the operation of deleting the livestream channel as follows:

1. On the livestream channel list interface, select the channel you want to delete, and click the **Delete.** icon
2. A confirmation dialog box will appear. Select the **Delete** button to continue.
3. The system will delete the livestream channel, delete all videos, content, sessions and information in this channel. The interface returns to the Livestream Channel List interface and displays a successful deletion message.
