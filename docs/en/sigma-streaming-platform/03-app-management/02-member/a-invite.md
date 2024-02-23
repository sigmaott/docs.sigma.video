---
title: Invite members
order: 1
---

# Member Management

In order to enhance management, information security and optimize the work process as well as ensure that all members comply with their rights and responsibilities, the feature of decentralizing and inviting more members becomes an important element of the Sigma streaming service. This brings benefits such as:

- **Effective work management**:

  - Security: Restrict access, prevent interference from unauthorized persons.
  - Effective management: Clearly divide roles and authority, making work management flexible and easy.
- **Division of responsibilities**: assign tasks corresponding to responsibilities to each member accurately and effectively.
- **Quality control**: Prevent editing, ensure content quality and expand the team flexibly.

## Prepare

Before starting, using the Sigma Streaming service requires members to have an access account. If you do not have an account, please refer to the instructions for creating a new account [Create new account](.. /.. /02-user-management/a-sign-up.md#sign-account).

## Add members

**Condition**: Account with access to application management

On the member list display interface, administrators can invite more members by following these steps:

**Step 1**: Click the 'Add' button on the member list.

Displays a Pop-up member invitation with the following sections:

! [Member Invite] (/images/streaming-platform/app-management/02-member/pop-up/create.png)

- Enter your email:
  - Does not support accented languages, does not contain spaces, type in 'local-part\@domainname' format
  - To improve accuracy, users need to comply with the following regulations:
    - Don't enter your email
    - Do not enter the email of the member who joined the application (email already exists in the system)

- Default Group- when creating an app, there will automatically be 3 default groups:
  - **Media-hub distributor**: distributor, delegate to VTVhub application
  - **Administration**: Full permissions on all 3 components (The default app creation account has administrative rights).
  - **Editor**: Has all permission to perform actions except application management.
  - **Visitor**: Only have permission to view all applications except application management.

**Step 2**:
The user provides an email address to send invitations to members.

_Multiple people can be invited at once, up to 10 members._

Members group permissions and click the 'Invite Members' button.

**Step 3**:
The system checks account information in the system:

- [Account already exists] (a-invite#account-existed)
- [Account does not exist] (./a-invite#member-account-non-existent)

## Member Account already exists

If the email **already exists** in the system, the system will automatically add the email to the application as a member.

After returning to the member list interface, a success message will appear above the screen:

! [Add member successfully] (/images/streaming-platform/app-management/02-member/message/create.png)

_Announcement: Added member successfully!_

The information of the newly invited member will be displayed at the top of the list, including the following details:

- **Email**: The email address entered.
- **Status**: 'Joined'.
- **Time**: The time when the member was added.

_In case the member returns to the email, click confirm participation. The path is no longer valid_

### Membership confirmation

After the user account is successfully invited, the system will send a **BECAME MEMBER** notification to the email address entered.

When a user clicks on the notification email, the member will be redirected to the app dashboard. Depending on the login status of the browser and account, two scenarios occur on the destination screen:

1. If your browser is signed in and has the Sigma site open:

   Automatic redirection to the Sigma application dashboard.

2. If your browser isn't signed in:

   Open the sign-in request page.
   After successful login, automatically redirect to the Sigma application dashboard.

Also, if the Opera browser is logged in but the link redirects to the Chrome browser, the user will be asked to sign in again.

If the user clicks the 'Home' button under the email, the member will be redirected directly to the Sigma website.

## Member Account does not exist

If the email does not exist in the system, the system will **automatically send an invitation** through the email address entered.

At the member list interface, the information of the newly invited member will be displayed at the top of the list with the following details:

- **Email**: The email address entered.
- **Status**: 'Invited'.
- **Time**: The time when sending an email inviting more members.

### Membership Registration

Users will receive an invitation email and simply click on 'Access App'

Members will be redirected to SSP| Sign up for an account, using the email account that was invited. At this point, they will not have the right to edit the information and will be asked to set a password.

To go through the application process, please see detailed instructions [here]. /.. /02-user-management/a-sign-up.md#sign-account).

After completing the registration process, the system will open the Application Overview interface for the user.
