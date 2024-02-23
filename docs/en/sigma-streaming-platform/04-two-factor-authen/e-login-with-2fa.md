---
title: System login when two-factor authentication is enabled
order: 5
---

# System login when two-factor authentication is enabled

This function allows CMS users to log into the system when two-factor authentication is enabled. The system adds an additional authentication step after the user correctly logs in to his account and password.

**Condition**:

- Have an account and password to successfully log in
- User account **ENABLE** two-factor authentication

**Step 1**: The user at the login screen of the system includes the following information:

! [Login] (/images/streaming-platform/2-factor-authen/login-1.png)

- Email: The user's email name (required)
- Password: The password of the user account (required)
- **Login** button: The system checks the account and password for matching information to allow users to access the system
- **Forgot password** button: when the user presses this button, the system switches to the **Forgot password** screen
- Create new account button\*\*: when the user does not have an account on the system, click this button, the system switches to the **Create new account** screen

**Step 2**: User enters email and password of the account registered on the system

**Step 3**: The user clicks the **Login** button, the system checks the implementation of the user information just entered

- If the credentials are incorrect, the user needs to perform step 2 again
- If the credentials are correct, skip to step 4

**Step 4**: The system displays the Login Code Confirmation screen

! [Confirm login code] (/images/streaming-platform/2-factor-authen/login-2.png)

Requires the user to enter _**login code**_ for the system to authenticate the account, allowing login

- **Login code:** is an authentication code in the user's authenticator app, or recovery codes can be used (still available)
- Button **Send code**: the system performs an authentication code accuracy check

**Step 5**: User uses authentication code or recovery code to enter

- **Authentication code:** The user checks the login code displayed in the authentication app.
- \*\*Recovery code: \*\* user collected in the recovery code list.

**Step 6**: After completion, the user presses the **Send code** button, the system checks the accuracy of the authentication code.

If true, the system allows the user to access the system, displaying the application list screen.
