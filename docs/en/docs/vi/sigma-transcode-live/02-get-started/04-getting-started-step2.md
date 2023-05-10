---
title: 'B2: Create new input'
order: 4
---

# {{ $frontmatter.title }}

You have to create a \'s input. The input specifies the media data flow that the Sigma Transcode Live system uses to transfer code or close the package \.

The Sigma Streaming Platform system supports the following standards:
- MPEG-TS over multicast UDP
- RTMP push
- RTMP pull
- RTP
- RTCP
- SRT push
- SRT pull

**Ví dụ về tạo 1 đầu vào UDP multi cast**

1. Đăng nhập vào Sigma Streaming portal và mở Transcode Live

2. Press **Add** in menu **Input** in section **Transcode**. The Input launch interface will appear

3. Enter the necessary information
   1. **Name** of input
   2. **Redundancy** select **single**
   3. **Type** select **UDP**
   4. **Primary Source** filling out the flow information prepared at 1 [Install the input stream at](03-getting-started-step1.md)
   5. **Primary Interface Network** please select 1 card that receives this udp multicast ignore.


![Create Input](../images/um-create-input.png)

::: tip Note

Nếu không điền thông tin về card mạng thì hệ thống sẽ tự lấy ở card mạng mặc định của máy

:::