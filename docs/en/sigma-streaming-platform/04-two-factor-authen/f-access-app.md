---
title: Access the app when it turns on two-factor authentication
order: 6
---

# Access the app when it turns on two-factor authentication

This function allows CMS users to access the application when the application has two-factor authentication enabled, the purpose **Requires all members accessing the application to enable 2-factor authentication of the user account**, to add an extra layer of protection against unauthorized access and help prevent various forms of cyberattacks,  like phishing and password theft.

**Condition**:

- Users who have an account and have access to the app
- Apps that want to access 2-factor authentication ON

**Step 1**: At the app list screen, users select the application (\*_**with two-factor authentication enabled**_) to access

**Step 2**: The system checks user accounts for two-factor authentication

- **<u>Case 1</u>**: If the user _**enable two-factor authentication**_, go to **step 5**
- **<u>Case 2</u>**: If the user is disabling two-factor authentication, the system displays an access denial message and asks the user to enable two-factor authentication of the user account:

! [Deny access] (/images/streaming-platform/2-factor-authen/deny-access.png)

With the following information

- Title: Application Access Failed

- Content: Your account doesn't currently have two-factor authentication enabled. You should enable two-factor authentication to access the app

- Button **"Enable two-factor authentication"**: when the user clicks this button, the system will switch to the two-factor authentication configuration screen of the user account.

**Step 3**: The user presses the **"Enable two-factor authentication" button**, the system will switch to the two-factor authentication configuration screen of the user account.

**Step 4**: The user successfully enables two-factor authentication, then does it again **Step 1**

**Step 5**: Access the application successfully, display the application overview screen
