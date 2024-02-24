---
title: Input operations
order: 4
---

# Basic configuration guide

View descriptions of data entry operations and data submissions.

## Input operations

There are several caveats and overviews when users interact with adding or editing data in a form:

Each form will consist of multiple data fields, and each data field will have two main parts: **Title** and **Data input/selector**.

The **Title** section displays information about the name of the data field. Here are some general program/system display rules:

- Required data fields will be marked with a red asterisk after them. The data field must not be left blank, the user must enter data before the information can be saved.
- The date and time format will follow the form YYYY/MM/DD HH:mm:ss.

The Data input/selection box allows users to enter or select data according to their wishes.

In addition, some fields will have a **character limit**, and only allow certain characters.

For example, a field can be limited to 0/50, meaning that users cannot enter additional 51st characters and later.

![](/images/dai/limit-text.png)

User data sometimes needs to be validated to ensure validity, when the user data entered is invalid, there will be a red error message displayed just below.

Validation of user data is necessary to ensure validity. In case the user data entered is invalid, the system will display a red \*\*\* error message directly below.

The content of the error message will vary depending on the specific case. Here are examples of some other types of notifications:

![](/images/dai/error-empty.png)

_Figure 1. Field blank error_

![](/images/dai/error-invalid.png)

_Figure 2. Invalid character input error_

![](/images/dai/error-invalid-link.png)

_Figure 3. Misformatted import error_

## Submit data

### Perform the task successfully

When the user confirms to store data in the form by pressing the **Save** button, the system performs the task and then communicates the result to the user.

If the task is performed successfully, a message is displayed at the top of the browser screen with the following characteristics:

- Title: Shows statements and details (optional).
- Background color: green
- Symbol:
  - Green tick icon - front: notification marker.
  - X icon: Click here to close the notification immediately.

Displays within 5 seconds and automatically disappears after **executing command**.

### Task execution failed

If the task fails, a red message with error content will be displayed at the top of the browser screen. The content of the error will vary depending on the specific case of the error.

![](/images/dai/error-500.png)

_Figure 4. System error_

- Title: specify the reason for the invalidity.
- Background color: red
- Symbol:
  - X icon:- ahead: bookmark the notification.
  - X icon: Click here to close the notification immediately.

Displays within 5 seconds and disappears automatically- system **does not execute command**.
