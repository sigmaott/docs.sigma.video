---
title: Ad moderation
order: 2
---

# Censor

After the ad is transcoded and eligible for insertion, the ad is inserted. Wishing to more strictly manage the ad insertion feature, the system supports moderation features, managed according to 2 features:

## App moderation

**Condition**:

- Default when accessing the app for the first time: turning off auto approval.
- There is already an ad insert endpoint created and containing it.
- At least 1 ad has been created.

Function Description:

- Not-approve:

  - Function: Hide the entire switch moderation feature of the ad list.
  - By default, all ads are inserted, independent of moderation.
  - New ads are created → the default initialization status is enabled = approval ( under BE) but hidden ( UI side).

- Approve:
  - Functionality: Allows active moderation of all ads.
  - Ad insertion depends on the app's moderation status.

### To enable per-app moderation

**Default interface** :

![](/images/dai/list-ad-default-off.png)

App moderation is off by default (auto approval)

All ad moderation features are hidden.
**Step 1**: Users enable app-based moderation.

**Step 2**: The system will display a confirmation pop-up window in the center of the screen with the following details:

<center>

![](/images/dai/pop-up-confirm-approval-app.png)

</center>

- Subject: Moderation for Apps?

- Content: Applies to apps, ad insertion depends on moderation status. Take action?

- Button **Cancel**: Do not make changes, stay in the Ad list screen.

- Button **Confirm**: The system performs the action.

**Step 3**: Users press the **Confirm** button to enable the moderation feature by app.

The system remains in the Ad list.

- Enable active moderation of all ads.

- Ad insertion depends on moderation status.

## Censorship by ads

**Condition**: Mandatory implementation of the moderation feature according to the previous app.

Business description:

- New ads are created → the default initialization status is enabled = approval ( under BE) but hidden ( UI side).

- Ads summarize → hide the moderation action of each ad.

- The original ad state is not-approve → the ad allows insertion.

### To enable ad-based moderation

**Default interface** :

![](/images/dai/list-ad-default-off.png)

Default state- app moderation is off.

By default, ads are inserted, independent of moderation features.

**Step 1**: Users enable the moderation feature of each ad.

**Step 2**: The system will display a confirmation pop-up window in the center of the screen with the following details:

<center>

![](/images/dai/pop-up-confirm-approval-ad.png)

_Figure 1: Pop-up confirming ad censorship_

</center>

- Title: Moderation for ads?

- Content: Eligibility for ad insertion. Take action?

- **Cancel** button: Make no changes, return to the Ad list screen.

- Button **Confirm**: The system performs the action.

**Step 3**: Users press the **Confirm** button to enable the moderation feature by app.
The system remains in the Ad list.

![](/images/dai/list-ad-approval.png)

<center>

_Figure 2: Enabling ad-based moderation_

  </center>

- Show switch switch: approve, message successfully transferred.

- Allow ad insertion.
