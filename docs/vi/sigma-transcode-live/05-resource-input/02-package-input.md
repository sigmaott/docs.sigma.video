---
title: 'Cấu hình Package Input'
order: 2
---

# Tạo mới Input loại Package

Chức năng này cho phép người dùng CMS tạo mới Input loại Package

## **Bước 1**: Mở form **Tạo Input Package**

1. Tại Sidebar người dùng click vào nút **Product** , sau đó click vào **Transcode Live**, sau đó chọn tab **Input**
2. Hệ thống hiển thị giao diện màn hình danh sách Input loại Transcode
3. Người dùng click vào tab **Package** 
4. Hệ thống hiển thị giao diện màn hình danh sách Input loại Package, người dùng click vào nút **Thêm**
5. Hệ thống hiển thị Drawer  **Tạo Input Package** bên phải màn hình:

* Với các thông tin chung:

| Tên                  | Chức năng                                                    |
| -------------------- | ------------------------------------------------------------ |
| **Tên**              | Tên của Input Package                                        |
| **Mô tả**            | Mô tả của Input Package                                      |
| **Based on Machine** | Cho phép/ vô hiệu hóa Based on machine                       |
| **Loại**             | Loại của nguồn đầu vào                                       |
| **Loại máy**         | Loại máy để sử dụng                                          |
| **Máy**              | Máy cụ thể phù hợp để thực hiện nhiệm vụ                     |
| **Redundancy**       | Input Class, Single(1 main input), Redundancy (main input + backup input) |
| **Nguồn**            | Nút **Thêm** cho phép thêm số nguồn mong muốn. Tối thiểu thêm 1 nguồn và tối đa thêm 20 nguồn |
| **Tên nguồn**        | Tên nguồn của nguồn đầu vào, được dùng để hiển thị           |
| **Nguồn chính**      | Thông tin nguồn đầu vào chính                                |
| **Nguồn phụ**        | Thông tin nguồn đầu vào thứ 2                                |

- Các thông tin đối với loại của nguồn đầu vào là UDP (Trường loại = "UDP"):

| Tên                             | Chức năng                                                    |
| ------------------------------- | ------------------------------------------------------------ |
| **Primary Network Interface**   | Network Interface chính đối với nguồn đầu vào loại UDP       |
| **Secondary Network Interface** | Network Interface phụ đối với nguồn đầu vào loại UDP, cho phép nhập khi Input Class là Redundancy |

* Nút **Xóa** tại các nguồn: Cho phép xóa nguồn đã thêm 
* Nút **Hủy**: Hủy bỏ thao tác thêm mới Input Package
* Nút **Cài lại**: Cài lại toàn bộ dữ liệu đã nhập, form trở về mặc định
* Nút **Xác nhận**: Xác nhận lưu cấu hình của Input Package

## **Bước 2**: Nhập thông tin để cho Input Package

1. Người dùng nhập thông tin **Tên** và **Mô tả** (không bắt buộc)
2. Cho phép hoặc vô hiệu hóa **Based on machine**
   - Nếu cho phép  **Based on machine**: Cho phép chọn **Loại máy** và **Máy**
   - Nếu vô hiệu hóa **Based on machine**: Vô hiệu hóa trường chọn  **Loại máy** và **Máy**
3. Chọn **Loại** của Input:
   - Nếu cho phép  **Based on machine**, loại sẽ bao gồm: UDP, RTMP Push, RTMP Pull, SRT Push, SRT Pull
   - Nếu vô hiệu qóa  **Based on machine**, loại sẽ bao gồm: RTMP Push, RTMP Pull, SRT Push, SRT Pull
4. Chọn **Loại máy** và **Máy** nếu cho phép **Based on machine**
5. Chọn **Redundancy** nếu  **Loại** là UDP, RTMP Pull, SRT Pull
6. Chọn dữ liệu **Primary Network Interface** và **Secondary Network Interface** nếu **Loại** là UDP
7. Thêm nguồn:
   - Nếu **Loại** là UDP: 
     - Thông tin của một nguồn sẽ bao gồm: **Tên nguồn**, **Nguồn chính**, **Nguồn phụ** 
   - Nếu **Loại** là RTMP Push/ SRT Push: 
     - Thông tin của một nguồn chỉ gồm **Tên nguồn**
   - Nếu **Loại** là RTMP Pull/ SRT Pull: Thông tin của một nguồn sẽ bao gồm: **Tên nguồn**, **Nguồn chính**, **Nguồn phụ**

