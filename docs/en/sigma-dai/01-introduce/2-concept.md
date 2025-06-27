---
title: Concepts
order: 2
---
# SSAI Concept

SSAI (Server Side Ads Insertion) is a technology for inserting advertisements on the server side, allowing ads to be integrated directly into video or audio streams before they reach the viewer. Instead of letting the client player load and play ads separately, SSAI merges content and ads on the server, creating a seamless stream that combines both main content and advertisements.

## Advantages of SSAI
- **Smooth user experience**: Ads are played seamlessly, without interruptions or being easily blocked by client-side ad blockers.
- **Optimized ad delivery**: Enables ad personalization based on location, device, or user behavior without affecting playback experience.
- **Ad-block resistance**: Since ads are stitched into the content stream, ad blockers cannot easily detect or remove them.

## Applications of SSAI
SSAI is commonly used in OTT platforms, livestreams, VOD (video on demand), and internet TV, helping content providers maximize ad revenue while maintaining viewer experience.

## Basic workflow
1. The user requests to play content.
2. The SSAI server fetches the original content and requests ads (usually via VAST/VMAP standards) from the ad system (ADS).
3. The SSAI server stitches ads into predefined positions in the content stream.
4. The ad-stitched content stream is delivered to the viewer as a single stream.
