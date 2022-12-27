---
title: Edit
order: 4
---

# Edit scheduling event
Chỉ cho phép chỉnh sửa sự kiện lập lịch tại Tab Sự kiện.

**Điều kiện:** Sự kiện đã được tạo trước đó.

 **Bước 1:** Hiển thị dòng **Chỉnh sửa** khi di chuyển chuột vào icon **Sửa** tại cột hành động

 **Bước 1:** Người dùng click icon **Chỉnh sửa** Hệ thống hiển thị Pop-up Cập nhật chỉnh sửa sự kiện góc phải màn hình với các thông tin được nhập trước đó ![](../../images/Popup_edit_event_Schedule.png)

* **Unable to edit fields:**

    * Event type
    * Multimedia content (except for the VOD and SCTE3/Live standard status preparation states).
    * Publish Type
    * Calendar Type
    * Time interval
* **Edit content:**

   * Name
   * Description
   * Exclude
   * Tags
   * Time interval (end date)
   * Scheduling details



## Table describing the event editing rules A interval

<table>
<thead>
  <tr>
    <th>Event Type</th>
    <th>Status</th>
    <th>Allowed to edit</th>
    <th>Delete Permission</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="4">SCTE35</td>
    <td>Complete</td>
    <td>No!</td>
    <td>Only Delete Scheduling</td>
  </tr>
  <tr>
    <td>Ready.</td>
    <td>No.</td>
    <td>Only Delete Scheduling</td>
  </tr>
  <tr>
    <td>Error</td>
    <td>N/A</td>
    <td>Do not change</td>
  </tr>
  <tr>
    <td>Get ready!</td>
    <td>Yes.</td>
    <td>Allow modification, delete all</td>
  </tr>
  <tr>
    <td>VOD</td>
    <td>Ready.</td>
    <td>Yes.</td>
    <td>Allow modification, delete all</td>
  </tr>
</tbody>
</table>

## Exceptions (With the Type of Event: SCTE3/Live)

* At the time the user clicks **Editing**, the test system, the start date has run over (Start date < current date) → **disable field date starting**

* At the time the user clicks **Save**, the scheduling check system ran out of schedule (24h00 of stopDate < current date) and moved the completed state → **disables all fields/button Save**

 **Bước 3:** Người dùng CMS thực hiện chỉnh sửa các thông tin phù hợp

→ Press **Save**

 The system does save new information that has just been updated, displaying successful update notifications in the right corner of the screen and automatically closed in 5s.

  ![](../../images/Notice_success_edit_schedule.png)

 * **Title:** Updated event scheduling!
 * Icon Check: Notice.

