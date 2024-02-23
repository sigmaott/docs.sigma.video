---
title: Insert ad bumpers
order: 6
---

# Insert ad bumpers

Bumpers ad is a short video, \*\* _non-skippable_\* video inserted into **beginning** or **end** before the end of the ad score **if enough time**.

Bumpers ad are configured in Advanced settings and optional.

## Condition

The following conditions apply to inserting ad bumpers:

- Default asset type **Video**.
- The bumpers ad duration limit is 10 seconds or less.
- Ad bumpers can be inserted into ad breaks or both.
- Bumpers ad **transcoded** to match the source content.

## Kind

There are 2 types of bumpers ads:

- Bumpers ad **start** : Bumpers inserted before the ad.
- Bumpers ad **end** : Bumpers inserted after the ad.

## Configuring Bumpers ad

To use Bumpers ad, users select assets stored on ThudoJSC servers or users upload video files directly to the Sigma system.

Users can configure ad bumpers at the beginning, end, or both.

![](/images/dai/bumper.png)

<center>

_Figure 1: inserting bumper ad_

</center>

**Example:**

Ad break (availDuration/ ad break): 70 seconds

Ad returned(filledDuration): 50 seconds

Bumpers ad start: 10s

Bumpers ad end: 10s

Users who configure Bumpers ad start and Bumpers ad end, in which case will be allowed to insert both 2\*\*.

**How Bumpers ad is configured on**

| **Formula**                                                                                                                                                                   | availDuration | filledDuration | startBumper<br />AssetDuration | endBumper<br />AssetDuration | **Result**                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------- | ------------------------------ | ---------------------------- | --------------------------------- |
| (availDuration - filledDuration) >= **startBumperAssetDuration + endBumperAssetDuration**                                                                  | 60            | 30             | 10                             | 5                            | insert both 2                     |
| (availDuration - filledDuration) >= **startBumperAssetDuration**                                                                                           | 60            | 50             | 10                             | 10                           | insert start bumper video         |
| (availDuration - filledDuration) > **endBumperAssetDuration** and<br /> (availDuration - filledDuration) > **startBumperAssetDuration** | 60            | 55             | 10                             | 10                           | don't insert any                  |
| **startBumperAssetDuration >**(availDuration - filledDuration) **>=** **endBumperAssetDuration**                                                           | 60            | 55             | 10                             | 5                            | Only insert end, not start insert |

## Miscellaneous

1. In case the user selects or Uploads **video more than 10 seconds**, the system still records the video, the insertion of bumpers ad will **be done**\* after the user presses the **Create button.**

2. Bumpers ad **compulsory insertion of the full length of the video**, no trimming allowed.

3. In case the asset is configured but then the asset is deleted from the system at **Details ad insert endpoint** bumpers ad will show **No data** .

## Output requirements

The user creates a new ad insert endpoint and runs the ad insert endpoint successfully, observes the bumpers ad **displayed successfully on the Live stream**, viewers see the bumpers ad.
