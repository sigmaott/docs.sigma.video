---
title: Insert slate ads
order: 7
---

# Insert slate ads

_Ad slate is only available for live workflows._

An ad slate is a default MP4 asset inserted into a stream, e.g. a still image or looped video, playing instead of live content.

Slate ad insertion is not required.

## When to insert a slate ad?

Support inserting slate ads (default ads) for the following cases:

- To fill at an incomplete time by an ad replacement (e.g. ad time needs 15 seconds but ADS only returns 10 seconds, slate will fill the remaining 5 seconds).
- If the ad decision server (ADS) responds with an empty VAST or VMAP response.
- For error conditions, such as ADS-ad decision server timeout.
- If the duration of the ad is longer than the ad break.
- If an ad is not available.

## Kind

**Unlike Bumpers ad, ad slate supports 2 types of assets.**

- Video: Video no older than 120 seconds.
- Image

## Configure ad slate

Ad slate is configured in Advanced settings.

To use ad slate, users select pre-configured assets from the ThudoJSC server or users **upload** files **videos/images** directly to the Sigma system.

1. In case the user selects or uploads **video less than or equal to 120s**, the video recording system, the ad slate insertion will be performed after the user presses the **Create button.**

2. Ad slate **requires expiry of video length**, no trimming allowed.

3. In case the ad slate duration is empty more than the ad slate duration, the ad slate will repeat until the fill is full.

   Number of adslate insertions by formula:

   ```
   int((availDuration - filledDuration)/adslateDuration)
   ```

4. **How ad slate is configured on**

   | **Formula**                                                                      | availDuration | filledDuration | Ad slate | **Result**     |
   | :------------------------------------------------------------------------------- | :------------ | :------------- | :------- | :------------- |
   | (availDuration - filledDuration) >= **ad slateAssetDuration** | 60            | 50             | 10       | insert         |
   | 60                                                                               | 40            | 10             | 10       | insert 2 times |
   | (availDuration - filledDuration) < **ad slateAssetDuration**  | 60            | 51             | 10       | No insertion   |
