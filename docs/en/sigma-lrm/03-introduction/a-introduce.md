---
id: doc-guideline-General-LRM
title: Introduce
order: 1
---

# About online wave management solutions

A Linear Rights Management System is an automated software or system that helps manage and control the ownership, distribution, and use of digital assets such as video and audio. This system helps ensure the integrity and security of digital assets, and allows the organization to control their access and use effectively. Support live content control or Video On Demand (VOD) to each customer in situations such as **loss of signal, loss of content** and **device restrictions**.

The Linear Rights Management system plays an important role in protecting an organization's digital assets, while managing access and using them effectively to ensure the integrity and value of these assets.

Not only does it ensure that content is delivered to the right audience at the right time, it works to clarify your events and workflow:

- Provide clear tools,
- Simple adjustable schedule,
- Schedule publishing for the unique needs of each viewer and each device.

## Purpose

This document was created for the purpose of detailed instructions on how to use the functions in the software. The content of the document is presented briefly, in sequence of functions and provides step-by-step instructions, which makes it easy for the user to perform operations in the program through this document.

This system was developed to assist editors in:

- Editorial channels and channel list management.
- Edit and track events that take place, configure timeshift content replacement.
- Schedule a publishing timer and change content in your live stream.

The latest update, CMS has been improved to increase ease of use and intuitiveness.

### Environment

Web browsers can be used for desktop editing, including popular browsers such as Chrome, Coc Coc, Firefox, Opera, Microsoft Edge, and Safari.

However, we recommend using the Chrome browser for the best experience.

### Scope of use

User: A person who manipulates directly on the system.

## How an online wave management solution works

Based on **Replace 1 timeshift content** according to the broadcast schedule process (EPG - Electronic Program Guide) or **according to a preset time** with image and video content.

### Procedure

The system supports 2 content control methods including:

- Management **by channel**: Support Transcoders and Packagers integrating ESAM protocol
- Management **by user**: When using the same Sigma DAI (Dynamic Ads Insert) solution suite

### Process

The channel signal is received from Thudo JSC's system, which serves as an IP linear feed for the Linear Rights Management (LRM) API. Programmers and operators can use a variety of formats supported through the LRM data entry service, and then the data is normalized into SCTE 224 format, stored locally.

Next, the data is distributed to multiple endpoints of the distribution partners, and then displayed to the viewer (output) through:

- **Format**: UDP/ HLS
- **Profiles** quality: 1080p, 720p, 480p, 360p,
- **Watermark**: Logo by partner.
