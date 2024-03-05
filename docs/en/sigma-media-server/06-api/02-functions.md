---
title: Function list
order: 1
---

# List of API functions provided by Sigma Media Server

We provide ways to interact with Sigma Media Server services. These methods include methods for creating, updating, deleting, and retrieving information of resources. Sigma Media Server's resources include jobs.

:::tip
With system-type functions, you do not need to pass the mode value to the body of the request.
:::

| **Name**       | Description                                                            | **Mode**     | Docs Ref Link |
| -------------- | ---------------------------------------------------------------------- | ------------ | ------------- |
| **info**       | Get input information                                                  | **system**   | [Docs](#)     |
| **Dump**       | Get Sigma Media Server information                                     | **system**   | [Docs](#)     |
| **Apps**       | Run integrated apps (nginx, rtmp, custom app)       | **system**   | [Docs](#)     |
| **Log**        | View system log or app log                                             | **system**   | [Docs](#)     |
| **File**       | Write text file with content                                           | **system**   | [Docs](#)     |
| **read/write** | Read/write file                                                        | **system**   | [Docs](#)     |
| **start**      | Start a Job Task                                                       | **live/VOD** | [Docs](#)     |
| **Stop**       | Stop one or many Job Task                                              | **live/VOD** | [Docs](#)     |
| **Progress**   | Get Progress Info of Job Task                                          | **live/VOD** | [Docs](#)     |
| **awt**        | Audio watermarking                                                     | **live/VOD** | [Docs](#)     |
| **Pin ID3**    | Pin ID3 packet for all segments                                        | **live/VOD** | [Docs](#)     |
| **preload**    | Create content from image(or video) and music       | **live/VOD** | [Docs](#)     |
| **Update**     | Change configuration for volume, overlay, drm, header of Job Task      | **Live**     | [Docs](#)     |
| **event**      | Push event into ID3 stream                                             | **Live**     | [Docs](#)     |
| **ads**        | Display logo + running text ads(marquee) on the fly | **Live**     | [Docs](#)     |
| **scte35**     | Insert ad insertion signal                                             | **Live**     | [Docs](#)     |
| **Mixer**      | Mix input streams                                                      | **Live**     | [Docs](#)     |
| **Stream**     | Play video list                                                        | **Live**     | [Docs](#)     |
| **Queue**      | Concatenate queue of input                                             | **Live**     | [Docs](#)     |
| **decklink**   | API for Decklink devices                                               | **Live**     | [Docs](#)     |
| **Subtitle**   | Transcode subtitle                                                     | **Vod**      | [Docs](#)     |
| **Trick**      | Trick Play mode                                                        | **Vod**      | [Docs](#)     |
| **Cc**         | Closed captions                                                        | **Vod**      | [Docs](#)     |
| **Pte**        | Turn on PTE service                                                    | **Vod**      | [Docs](#)     |
| **join**       | Merge recorded Multi VOD Videos                                        | **Vod**      | [Docs](#)     |
