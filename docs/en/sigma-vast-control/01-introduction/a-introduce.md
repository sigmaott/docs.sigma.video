---
title: Product Overview
order: 1
---

VAST-Control is a comprehensive solution designed to manage and control the video advertising delivery process through the VAST (Video Ad Serving Template) protocol. This solution optimizes ad delivery across digital platforms while ensuring performance, policy compliance, and the best user experience.

## Key Features of VAST-Control
## Ad Delivery Control
* Targeted ad delivery based on geographic location, device, or time.
* Support for various ad formats and placements.
  
## Performance Monitoring
* Measure key metrics such as fill rate, impressions, and View-Through Rate (VTR).
* Track key events such as video start, midpoint, and completion.

## Ad Content Control
* Prevent inappropriate or policy-violating ads.
* Manage VAST tags to deliver ads according to custom sequences or logic.
  
## Integration and Compatibility
* Compatible with ad servers and video players that support the VAST protocol (from version 2.0 to 4.x).
* Support for multiple ad formats including inline, wrapper, skippable, and interactive ads.

## User Experience Optimization
* Reduce ad loading time to avoid content interruption.
* Support for skippable or interactive ads to increase engagement.

## Error Testing and Handling
* Detect and handle VAST errors (e.g., missing resources, timeout).
* Verify ad files and related elements such as tracking pixels and companion banners.

## How VAST-Control Works
## Ad Request
Video player sends an ad request to the ad server via VAST protocol, including information such as device, IP, and content context.

## Request Processing
* VAST-Control selects appropriate ads based on request information, applying rules such as frequency capping and inappropriate content filtering.
* If using Server-Side Ad Insertion (SSAI), ads are integrated into content before being sent back to the player.
 
## VAST XML Response
* The system sends an XML file containing the ad file URL, event tracking URLs, and companion ads information (if any).

## Ad Playback
* The video player loads, decodes, and plays the ad while tracking specified events.

## Tracking and Reporting
* Record data such as impressions, completions, and user interactions.
* Data is aggregated to analyze campaign performance and provide reports to advertisers.

With its comprehensive control capabilities, VAST-Control is the ideal solution for optimizing video advertising effectiveness and delivering the highest value for campaigns. 