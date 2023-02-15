---
title: View channel editor interface
order: 1
---

# View channel editor interface
This function displays a list of channels and allows CMS User to search the desired channel.

 At the main screen selecting **List of channels**

![](../image/sidebar-channel-list.png)

Màn hình chính hệ thống hiển thị:

![](../image/ui-channel-list-1.png)

* The information is displayed in the interface:


| Column Name          | Function                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**               | After the user creates a new channel, the system generates its own ID for the channel with the purpose of identification.                                                                                                                                                                                                             |
| **Name**             | Because CMS users configure the channel name                                                                                                                                                                                                                                                                                          |
| **HLS RTS**          | Due to the birth system after the channel configuration, can click to copy the link                                                                                                                                                                                                                                                   |
| **DASH rebroadcast** | Due to the birth system after the channel configuration, can click to copy the link                                                                                                                                                                                                                                                   |
| **Ad server**        | A server provides the specifications of the advertising point based on criteria including current advertising campaigns and viewer preferences, which can click to copy the link.                                                                                                                                                     |
| **Update**           | (default arrangement) displays to the top of the page with the latest updated channel                                                                                                                                                                                                                                                 |
| **Action**           | Statistics: The navigation of the statistical views associated with the filtr the corresponding channel name. <br /> Edit: Allow users to edit channel information. <br />Delete: Allow CMS users to perform delete channels. <br /> Create a copy: Creating a single copy with the required mandatory information. |

* Other buttons

| Button Name           | Function                                                                                                                                      |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Synchronised icon** | Góc phải bên dưới giao diện, luôn thực hiện đồng bộ hệ thống liên tục trong 10s | ![](../../image/icon_sync.png)                              |
| **Footer-Footer**     | 2022 @ By Sigma Streaming                                                                                                                     |
| Icon **Segal**        | Includes information: Total page numbers, selection of items/1 page (default 10 items/1 page), current page, jump to the desired page seeking |
| **Quick filter**      | Quick filter supports search for information including: Name and card                                                                         |
| Button **Filter**     | Make filtering of more detailed information                                                                                                   |

## Xem chi tiết kênh

**Bước 1:** Tại giao diện Danh sách Kênh

→ Click vào **Tên trường** mong muốn xem thông tin chi tiết kênh.

**Bước 2:** Hiển thị giao diện chi tiết kênh với các thông tin sau:

* Tên kênh: Tên kênh vừa chọn
* Thẻ
* Icon **back** → Click quay trở lại giao diện Danh sách kênh.
* Bảng hiển thị:
    * **Playback Endpoint Prefixes**  Sau khi người dùng cấu hình kênh, SSAI trả về các link: HLS playback prefix/ DASH playback prefix/ **link Session initalization playback prefix( link khởi tạo).**
    * **Cài đặt bắt buộc:** Máy chủ quảng cáo (Ad decision server)/ Video content source.
    * **Cài đặt nâng cao:** Phân đoạn nội dung CDN/ Phân đoạn quảng cáo CDN/ Giữ lại đánh dấu quảng cáo/ Bumpers start/ Bumpers end/ ad slate.

*icon copy kế bên mỗi link.* 

