
# Management System

User-managed administration system, api access token to the system

## Basic authentication

Manage the system to use on the system.

### List of basic authentications
![List of token](./images/um-basic-auth/list.png)

Each token value will include the basic parameters:

- Name.
- Right.

  To better understand the rights, access section **Decline**.

---

**\ * NOTE**

A token will be assigned one or more rights.

---

### Create token

1. Nhấp chuột vào nút ![Add button](./images/um-member/btn-add.png).
2. Enter the token information in form.

    ![Add Form](./images/um-basic-auth/form-add.png)

    When performing an assignment to the token, it is possible to select the permissions available in the list of groups. Then, the token will inherit all the rights of the selected group. It is possible to edit (add sur/delete) the inherited rights to the appropriate.

    Nhấp nút ![Add perm button](./images/um-basic-auth/btn-add-perm.png) để hiển thị thêm danh sách các quyền.

    ![Add Form](./images/um-basic-auth/form-add-2.png)

3. Lưu token  bằng cách nhấp vào nút ![Submit button](./images/um-member/btn-submit.png).

  Token new execution system:
  - If successful token information is created: ![Info token](./images/um-basic-auth/info.png)

    Nhấp chuột vào các biểu tượng ![Icon copy password](./images/um-member/icon-copy.png) sao chép Token ID và Token Secret. The Token Secret value will be deleted soon after.

  - If the failure will show the error message.

### Edit token

Nhấp chuột vào nút ![Edit button](./images/um-action-btns/edit.png) để thay đổi tên, quyền của token.

![Edit token](./images/um-basic-auth/form-edit.png)


## Group

Manage User Groups

### Group List
![List of groups](./images/um-group/list.png)


Each group will consist of two basic parameters:

- Name (column **Name** in the above table).
- List of rights (column **Permissions** in the above table).

  To better understand the rights, access section **Decline**.

---

**\ * NOTE**

A group consists of one or several rights. The accounts in the group are inherited all of that group.

---

### Create Group

1. Nhấp chuột vào nút ![Add button](./images/um-member/btn-add.png).
2. Enter the account information in form.

    ![Add Form](./images/um-group/form-add.png)

    The information to import includes:
    - Name.
    - Password.
    - The powers.
3. Lưu nhóm bằng cách nhấp vào nút ![Submit button](./images/um-member/btn-submit.png).

  Group new execution system:
  - If successful display success is successful.
  - If the failed display failure

### Edit account rights

Nhấp chuột vào nút ![Edit button](./images/um-action-btns/edit.png) để chỉnh sửa thông tin tên và quyền của nhóm.


## Member

Manage the list of user accounts on the system.

### Account List
![List of member](./images/um-member/list.png)


Each account will include a few basic parameters:

- Login name (column **User** in the above table).
- The group/rights to which the account is assigned (column **Group** in the above table).

Move the mouse into the group to show the copyright details.

  ![Permissions of group](./images/um-member/permission.png)

  To better understand the rights, access section **Decline**.

---

**\ * NOTE**

An account will be a member of one and only one group.

---

### Create Account

1. Nhấp chuột vào nút ![Add button](./images/um-member/btn-add.png).
2. Enter the account information in form.

    ![Add Form](./images/um-member/form-add.png)

    The information to import includes:
    - Login name.
    - Password.
    - The group will empower.

      The selected group will display the blue tick ![Selected group](./images/um-member/group-selected.png)
3. Lưu tài khoản  bằng cách nhấp vào nút ![Submit button](./images/um-member/btn-submit.png).

  The new implementation execution system:
  - If the successful display of account information is generated including the login name and password: .![Account info](./images/um-member/account-info.png)

    Nhấp chuột vào các biểu tượng ![Icon show password](./images/um-member/icon-eye.png), ![Icon copy password](./images/um-member/icon-copy.png)  để hiển thị và sao chép mật khẩu.

  - If the failure will show the error message.

### Edit account rights

Nhấp chuột vào nút ![Edit button](./images/um-action-btns/edit.png) để thay đổi quyền của tài khoản bằng cách gán tài khoản vào một nhóm khác.

![Edit account](./images/um-member/form-edit.png)


## Permission

An account is created and granted a certain number of powers and is only executed by the right to be executed.

### Devolve Rules

On the system will be divided into various rights, each of which will include two basic information:

- Identifier: in order to refer to the object, the entity in which the right will impact.

  For example, the power `Sigma Livestream` represents the object in which the right effect is `Livestream`.
- Action: the expression of actions allowed on the entity to assign to the right. It &apos; s the answer to the *question, what can be done with the A?*

  The system defines two actions to work with the right:
  - READ: The user can only view the entity information.
  - FULL: The user can view and edit the entity information.

    When establishing the right, it is only possible to select one of the two actions.

For example, the interface displays a right on the system

  ![Permission](./images/um-permission/general.png)
