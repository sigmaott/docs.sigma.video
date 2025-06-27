---
id: sigma-media-server-user-guide-server-management
title: Quản lý Máy chủ
order: 2
---

## Quản lý Máy chủ

Hệ thống Sigma Streaming cung cấp một giao diện thân thiện, tiện lợi để người dùng quản lý danh sách máy chủ. Trong thanh bên, nhấp vào **Máy chủ** để truy cập quản lý máy chủ theo loại.

Mỗi loại máy chủ sẽ được quản lý trên một giao diện riêng. Ngoài ra, hệ thống cũng cung cấp cho người dùng một giao diện để quản lý toàn bộ giấy phép của ứng dụng và mục Giám sát Hiệu suất của toàn bộ máy chủ.

### Cấu trúc tổ chức quản lý máy chủ

![Cấu trúc Quản lý Máy chủ](/images/media-server/getstarted/structure-manage-server.png)

Cấu trúc tổ chức của quản lý máy chủ được chia thành các mục và được phân chia như sau:

1.  **Sigma Live Server**: Quản lý các loại máy chủ Live Server, bao gồm
    1.  Loại máy chủ Live Server (phiên bản thường)
    2.  Loại máy chủ Live Server Community
    3.  Cluster Server (cụm)
2.  **Sigma VOD Server**: Quản lý các loại máy chủ VOD Server, bao gồm
    1.  Loại VOD Server (phiên bản thường)
    2.  Loại máy chủ VOD Server Community (bản cộng đồng)
    3.  Cluster Server (cụm)
3.  **Component Server**: Quản lý các loại máy chủ Component Server
    1.  Danh sách máy: bao gồm 5 loại máy
        1.  Transcoder Live
        2.  Transcoder VOD
        3.  Packager Live
        4.  Packager Start Over
        5.  Packager Catchup
    2.  Cluster Server (cụm)
4.  **Monitor**: Giám sát hiệu suất của máy trong Ứng dụng
5.  **License**: Quản lý giấy phép trong App

### Các hành động với máy

Với quản lý máy chủ, người dùng có khả năng thực hiện các hành động trên mỗi máy chủ với các hành động như:

-   **Thêm Giấy phép**: Hành động được cho phép đối với các máy mới được cài đặt thành công trên hệ thống chưa được kích hoạt, người dùng có thể thực hiện hành động này để gán giấy phép cho máy để máy có thể xử lý công việc.

-   **Cấu hình Tuyến đường (Config Route)**: Một hành động cho phép người dùng định cấu hình một tuyến đường thông qua hệ thống để dễ dàng định tuyến máy nhằm hỗ trợ quá trình điều phối bộ xử lý Công việc

-   **Drain Job**: Hành động cho phép hệ thống đẩy ra tất cả các công việc đang được xử lý bởi máy đó

-   **Tạm dừng/Tiếp tục (Pause/Resume)**: Hành động cho phép hệ thống Tạm dừng/Khôi phục khả năng hoạt động của máy

-   **Xóa**: Một hành động cho phép người dùng thực hiện xóa trong trạng thái DEAD/FREEZE

Đối với Cluster Server, sau khi người dùng đã tạo cụm, các hành động sau sẽ được cho phép:

-   **Chỉnh sửa Cụm (Edit Cluster)**: Một hành động cho phép người dùng chỉnh sửa cấu hình / thay đổi các thành phần máy trong Cụm
-   **Xem Nhật ký (View Logs)**: Các hành động cho phép người dùng xem nhật ký hoạt động của cụm
-   **Xóa**: Một hành động cho phép người dùng xóa cụm
