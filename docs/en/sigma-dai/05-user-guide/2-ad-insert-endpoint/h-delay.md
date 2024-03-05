---
title: Delay ad
order: 8
---

# What is an ad delay?

SCT35 signal will come before 1 interval, the desired insertion time With the time of delay configuration, when creating a new channel or inserting ads, the user will be configured to specify the desired delay period in the pop-up to create a new channel with Actor CMS User via the Web platform.

The SCTE-35 (Society of Cable and Telecommunications Engineers 35) signal is part of the SCTE standard and is used in television and cable television systems to insert and manage advertisements. The SCTE-35 signal delay feature is used to ensure that the SCTE-35 signal will arrive a certain amount of time before the desired advertisement insertion time. This can make ad insertion more accurate and ensure that ads aren't cut across or excessively stretched.

The SCTE-35 signal delay feature helps ensure that ads appear in time and do not conflict with the main video content. This enhances the viewer experience and helps ads to be shown in the most effective way on television and cable systems.

## Configure delay ad

As a field in Create a new channel, the flow creates a new ad insert endpoint.

The rules displayed on the interface:

- Enter input >60 → auto displays about 60

- Button **"-"/"+"**: Click to increase/decrease 1 value

- Automatically removes special characters, letters, and spaces → returns default values when moving focus outside the textbox.

## Output requirements

Delay **exactly** the time of ad insertion must be later than the initial time attached in the SCTE-35 signal at set intervals.

Check that the HLS/DASH play link has the Advertisement Insertion Delay configuration.

1. CMS implements:

```
Set Advertisement Insertion Delay= 0
```

→ Player executes:

- Play ads quickly, after running out of SCTE-35 (0s) signals.

- The user will not see the SCTE-35 signal.

2. CMS implements:

```
Set Advertisement Insertion Delay > 0
```

→ Player executes:

- Play ads slowly, after running out of SCTE-35 signals at the configured time (e.g., 20 seconds).

- The user will not see the SCTE-35 signal.

3. Check your ad's signal when SCTE-35 signals are available

→ Results:

- The duration of the ad is not cut.

- The ad stream has no other errors.
