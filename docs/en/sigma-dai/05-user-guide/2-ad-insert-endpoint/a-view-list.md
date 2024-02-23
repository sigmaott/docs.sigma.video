---
title: Xem giao diện biên tập ad insert endpoint
order: 1
---

# Xem giao diện biên tập ad insert endpoint

Giao diện danh sách ad insert endpoint chứa quảng cáo là một phần quan trọng trong hệ thống quảng cáo trực tuyến, có sẵn và chứa quảng cáo. Giao diện trong danh sách bao gồm các thông tin cơ bản về ad insert endpoint như ID, tên, output link,... và cho phép tìm kếm, giúp người quản lý quảng cáo có cái nhìn tổng quan về từng ad insert endpoint.

Hiển thị mặc định ở giao diện Dashboard.

Trên màn hình chính của hệ thống, người dùng lựa chọn Danh sách ad insert endpoint ở tab header.

Màn hình chính hệ thống hiển thị:

![](/images/dai/list-endpoint.png)

Trong màn hình chính của hệ thống, bạn sẽ thấy các thông tin được hiển thị trên giao diện bao gồm:

| Tên cột               | Chức năng                                                                                                                                                                                                                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **ID**                | Sau khi người dùng tạo mới ad insert endpoint, hệ thống sinh ra ID riêng cho ad insert endpoint với mục đích nhận diện.                                                                                                                                                                                                                                |
| **Tên**               | Do người dùng CMS cấu hình tên ad insert endpoint, có tác vụ xem chi tiết.                                                                                                                                                                                                                                                                             |
| **Phát lại HLS**      | Do hệ thống sinh ra sau khi cấu hình ad insert endpoint,có thể click để sao chép link                                                                                                                                                                                                                                                                  |
| **Phát lại DASH**     | Do hệ thống sinh ra sau khi cấu hình ad insert endpoint, có thể click để sao chép link.                                                                                                                                                                                                                                                                |
| **Máy chủ quảng cáo** | Một máy chủ cung cấp thông số kỹ thuật của điểm quảng cáo dựa trên các tiêu chí bao gồm các chiến dịch quảng cáo hiện tại và sở thích của người xem, có thể click để sao chép link.                                                                                                                                                                    |
| **Cập nhật**          | (sắp xếp mặc định) hiển thị lên đầu trang với ad insert endpoint được cập nhật mới nhất.                                                                                                                                                                                                                                            |
| **Hành động**         | Thống kê: Điều hướng tới các lựa chọn xem thống kê liên quan với filter tên ad insert endpoint tương ứng. <br /> Chỉnh sửa: Cho phép người dùng chỉnh sửa các thông tin của ad insert endpoint. <br />Xoá: Cho phép người dùng CMS thực hiện xoá ad insert endpoint. <br /> Tạo bản sao: Tạo nhanh 1 bản sao với thông tin bắt buộc được cấu hình sẵn. |

- Các nút khác

| Tên nút                | Chức năng                                                                                                                                                          |                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| **Icon đồng bộ**       | Góc phải bên dưới giao diện, luôn thực hiện đồng bộ hệ thống liên tục trong 10s                                                                                    | ![](./images/icon_sync.png) |
| **Footer- chân trang** | 2022@ By Sigma Streaming                                                                                                                                           |                             |
| Icon **Phân trang**    | Bao gồm các thông tin: Tổng số trang, lựa chọn số items/1 trang( mặc định 10 items/1 trang), trang hiện tại, nhảy tới trang mong muốn tìm kiếm. |                             |
| **Quick filter**       | Bộ lọc nhanh hỗ trợ tìm kiếm thông tin gồm: Tên và thẻ.                                                                                                            |                             |
| Nút **Lọc**            | Thực hiện lọc các thông tin chi tiết hơn.                                                                                                                          |                             |

## Xem chi tiết ad insert endpoint

**Bước 1:** Tại giao diện Danh sách ad insert endpoint

→ Click vào **[Tên ad insert endpoint]** mong muốn xem thông tin chi tiết ad insert endpoint.

**Bước 2:** Hiển thị giao diện chi tiết ad insert endpoint với các thông tin sau:

- Tên ad insert endpoint: Tên ad insert endpoint vừa chọn
- Thẻ
- Icon **back** → Click quay trở lại giao diện Danh sách ad insert endpoint.
- Bảng hiển thị:
  - **Playback Endpoint Prefixes**  Sau khi người dùng cấu hình ad insert endpoint, SSAI trả về các link: HLS playback prefix/ DASH playback prefix/ **link Session initalization playback prefix( link khởi tạo).**
  - **Cài đặt bắt buộc:** Máy chủ quảng cáo (Ad decision server)/ Video content source.
  - **Cài đặt nâng cao:** Phân đoạn nội dung CDN/ Phân đoạn quảng cáo CDN/ Giữ lại đánh dấu quảng cáo/ Bumpers start/ Bumpers end/ ad slate.

_icon copy kế bên mỗi link._
