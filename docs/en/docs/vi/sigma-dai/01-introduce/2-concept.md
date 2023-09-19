---
title: Concepts
order: 2
---

# Related concepts

Dưới đây là tổng quan về các khái niệm được sử dụng trong suốt Hướng dẫn sử dụng SSAI

## Advertising insert concept
The following is the overview of the concepts related to the inserts.

### Advertising Server (ADS)
A server provides the specifications of the advertising point based on criteria including current advertising campaigns and viewer preferences.

### Configure (Configuration)
An object in the SSAI you interact with. The configuration contains location information about the original server and the advertising decision server (ADS). The configuration also contains endpoints that provide access points in and out of the SSAI.

### Dynamic transcoding
A process matching process and advertising format with the main video content when content is required. The transfer code helps reduce the storage requirement and ensure that the rebroadcast process will be seamless between advertising and video content.

### Index manifold (Manifest)
The process of rewriting the index files from the root server so that the manifest files references the appropriate content and advertising sections. The ad is determined by VAST feedback from the ad server (ADS). When the process is rebroadcast, the SSAI performs an ad inserts or promotional replacement into the content stream.

### VAST
Mẫu phân phối quảng cáo video (VAST)  là các phản hồi XML mà máy chủ quyết định quảng cáo gửi đến các yêu cầu quảng cáo từ SSAI. The answers indicate the ads that SSAI inserted into the manifest file. For more information about the logic behind the inserts of the SSAI advert, see Learn about the behavior of SSAI's advertising inserts. Để biết thêm thông tin về cách SSAI hoạt động với VAST, hãy xem các yêu cầu VAST cho máy chủ quảng cáo.
## Channel configuration concept
The following is the overview of the concepts related to the channel configuration.

### Channel (Channels)
A channel that sets your source index into a linear stream. Each channel has one or more outputs containing the rebroadcast URLs that the player accusers. The channel output corresponds to the package configuration settings that you create for your VOD sources. A scheduled channel that determines the time the VOD sources will stream in the channel's flow.

### Source locations
The source location represents the root server where your contents are stored. Nó có thể là máy chủ HTTP, mạng phân phối nội dung hoặc cơ sở hạ tầng đóng gói.

### VOD source (VOD sources)
The VOD source represents part of the content, such as the film or episode of the television show. You link VOD sources with programs to add them to the linear flow of the channel.