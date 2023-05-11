---
title: 'Service Management'
order: 1
---

# {{ $frontmatter.title }}


## Operations with service

For a list of content, the application allows the user to interact with each element in the list through a group of functional buttons (See the illustration below). These buttons will show at the final column of the list table.

![Action Buttons](/images/media-live/manager-list-action.png)

---

::: info
Do mỗi phần nội dung trên ứng dụng có những tính năng và nghiệp vụ khác nhau, do đó, phần giao diện hiển thị các nút chức năng có thể khác nhau đôi chút.
:::

---

### Detailed description

- `Start`: Bắt đầu kênh.
- `Stop`: Dừng kênh
- `Reset`: Dừng và bắt đầu lại kênh
- `Clone` tạo một đối tượng mới có dữ liệu giống hệt với đối tượng ban đầu, đồng thời cũng có thể tùy chỉnh một vài thông số của đối tượng mới để phù hợp.
- `Delete` xóa đối tượng được chọn. Before the implementation of the application will require the user to authenticate again.


## Auto Refresh

![Auto Refresh](../images/um-auto-refresh.jpg)

Allow shortcuts to automatically update the data after a certain amount of time.

There are five values to choose: *Turn* and intervals *Time 5s*, *Time 10s*, *Time 15s*, *Time 20s* corresponds to the time values of 5 seconds, 10 seconds, 15 seconds and 20 seconds will automatically update the new data for the user.


## Filter

In the contents of the table list, there is filter feature support, search for elements in one or a few specific conditions. The filter is displayed above each table.

After the completion of the filter/filtration, the valid elements are displayed on the interface.


### Channel Filter

![Channel Filter](../images/um-filter/channel.png)

The channel filter allows users to search for data according to the data fields as follows (from left to right on the description):

- `Status` The channel state, consisting of four options: `All`, `Live`, `Stated`, `Error`.
- `Type` types of channels, including 2 options `Package`, `Transcode`.

  ![Channel Type](../images/um-filter/type-channel.jpg)

- `Tag` tag assigned to the channel, user input tag.
- `Name` locating the channel, the user name entry requires a search.

## Page

![Patination](../images/um-pagination/main.png)

Perform the cataract correction actions with a list of lists that are listed in the list.

The page interface consists of four main components:

- Total number of available elements.

  ![Counter Pagination](../images/um-pagination/counter.png)

- The option of the number of elements displayed on a page.<!-- !\[Fontsize Menu\](../images/um-pagination/page-size.png) -->![Page Size](../images/um-pagination/page-size-selection.jpg)

  It is possible to choose `5`, `10`, `15`, `20`, `50`, `100` elements display on a page by selecting the corresponding values in the page menu, the default value is `10`.

- The current order.

  ![Page Select](../images/um-pagination/page-selection.png)

  - List existing pages.
  - The current page is highlighted in blue ![Active Page](../images/um-pagination/actived-page.png){height=17px}.
  - Move to the previous page/next page by selecting the ![Previous](../images/um-pagination/previous.png)symbol {height=17px} and ![Next](../images/um-pagination/next.png){height=17px}.

- Move to any page.

  ![Next](../images/um-pagination/jump-to.jpg)

  It can be moved to any page by entering the order number of the page in the picture above.

