---
title: Enable two-factor authentication for user accounts
order: 1
---

# Enable two-factor authentication for user accounts

This functionality allows CMS users to enable two-factor authentication for user accounts, which adds an extra layer of protection against unauthorized access and helps prevent various forms of cyberattacks, such as phishing and password theft.

**Condition**:

- The user account is **Disable** for two-factor authentication
- The user has installed and has an account of the authentication app (Authentication App)

**Step 1**: In the sidebar, users click on gmail account to log in. The system displays the **User Information** screen, the user presses the switch to the 'Settings' tab

**Step 2**: The user performs **Enable** two-factor authentication. The system displays a pop-up **Set up through a third-party authenticator** that includes:

![Authentication pop-up](/images/streaming-platform/2-factor-authen/pop-up-verify-config.png)

- **QR code**: the purpose for users to scan the code with an authenticator application
- **Code**: the purpose for users to enter the code into the authentication application
- **Enter verification code**: the user enters the authentication code (found on the authentication app) in this field to complete the configuration
- **Cancel** button: cancel the action execution, return to the previous screen
- Button **Finish**: Confirm completion of the configuration step

**Step 3**: Users use their authenticator app to scan the QR code\*\* or enter the code (in the pop-up)\*\*

**Step 4**: Once completed, at the authentication app display 'Authentication Code'

Users use this 'Authentication Code' to enter in the **Enter verification code** section in the popup

! [Confirmation pop-up] (/images/streaming-platform/2-factor-authen/pop-up-enter-verify-code.png)

**Step 5**: After the import is completed, the user presses the **"Finish" button**

The system will check the correctness of the confirmation code with the authenticator application

If the authentication code check is correct, the system will display the message **Congratulations! You have enabled two-factor authentication!** and display a **Recovery code** pop-up for user accounts

! [Activation Successful] (/images/streaming-platform/2-factor-authen/enable-2FA-user-successful.png)

With the main information:

- The list of recovery codes includes 10 recovery codes. Each 1 code performs the copy action
- Button **Copy code**: make a copy of the entire list of recovery codes
- **Regenerate recovery codes**: create a new list of recovery codes

<u>Notes</u>: After successfully enabling two-factor authentication, the system will ask users for two-factor authentication to be able to successfully log in at logins.
