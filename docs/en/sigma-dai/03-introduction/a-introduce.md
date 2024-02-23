---
title: Product overview
order: 1
---

# What is the Server-Side Ads Insertion solution?

System-specific server-side ad insertion (SSAI) solution to manage and run TV, Online Events and VOD campaigns - enables scalable ad insertion and ad insertion, ad merging and ad monetization on any cloud-based video platform.

With SSAI, you can serve ad content targeted to viewers and create linear streams while maintaining broadcast quality in superior video (OTT) applications. SSAI ad insertion **supports handling with a large number of users** and Sigma DAI allows one-to-one replacement and insertion of HTTP Direct Streaming (HLS) and MPEG over HTTP Dynamic Adaptive Streaming (DASH) ads for video on demand (VOD) and live streams.

Server-side ad insertion is a combination of manipulating the manifest, communicating with the ad server, and normalizing the ad bitrate and resolution, all of which happens on the server side before the manifest is rendered to the client. Server-side ad insertion can also be called dynamic ad insertion or ad stitching.

## Control methods

Server-side ad insertion (SSAI) systems are a way to insert ads into video content before it's sent to viewers, rather than inserting ads directly within the video. This allows you to control ads and content based on multiple methods, including ad insert endpoint management, per-user management, and per-ad management.

Here's how to implement management using these methods:

- Manage by ad insert endpoint

  - Identify the specific ad inserts endpoints or categories of content to which you want to apply ads.
  - Use the SSAI system to associate these ads with the corresponding ad insert endpoint or category.
  - When a user accesses content from that ad insert endpoint or category, the SSAI system automatically inserts relevant ads into the video.

- Management by user: The user transmits the alternate param that appears in the URL link. The appearance of Param makes it easy for the system to distinguish, get viewer data to perform retrievals, reports, statistics,…

- Manage by each ad
  - Each ad can have specific parameters such as vastID, duration, time it first appeared.
  - Use the SSAI system to determine how to insert each ad based on these parameters.

# How SSAI works

SSAI ad insert endpoint assembly makes it easy to monetize your ad insert endpoint by inserting ad breakpoints into your stream without having to conditionalize that ad insert endpoint with SCTE-35 markers. You can use ad insert endpoint assembly with SSAI ad insertion or other server-side ad insertion service.
SSAI interacts between a content delivery network (CDN), origin server, and ad server (ADS) so that the advertising process is personalized into live and video of the requested content. Here's an overview of how SSAI ad insertion works:

- Signal conditioning marker:
  - Filter/Delete unwanted SCTE35 indexes.
  - Authenticate, add information for markers.
  - Add or edit SCTE 35 markers based on the program's scheduling.
  - Adjust the parameters of the SCTE 35 Marker.
- How to manipulate the Manifest file.
  - Replace unwanted content.
  - Blackout.
