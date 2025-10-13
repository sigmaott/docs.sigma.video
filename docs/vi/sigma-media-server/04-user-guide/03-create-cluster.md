---
id: sigma-media-server-user-guide-create-a-new-cluster
title: Tạo một Cụm mới
order: 3
---

## Tạo một Cụm Máy chủ mới

Việc tạo các cụm máy chủ giúp người dùng nhóm các máy lại với nhau thành một cụm, giúp hỗ trợ lẫn nhau để xử lý các tác vụ giữa các máy dễ dàng hơn. Cụ thể, các máy được kết hợp có thể hỗ trợ lẫn nhau trong trường hợp một máy bị chết hoặc gặp sự cố.

Giúp cải thiện tốc độ và hiệu quả công việc, đồng thời giảm thiểu nguy cơ mất dữ liệu và đảm bảo tính liên tục của các quy trình xử lý công việc.

Người dùng có thể tạo một Cụm Máy chủ mới bằng cách làm theo các bước sau:

1.  Truy cập vào mục quản lý Cụm Máy chủ với loại máy bạn muốn thêm

2.  Nhấp vào "Thêm cụm máy chủ mới"

3.  Trong biểu mẫu cấu hình cụm máy chủ, người dùng thực hiện cấu hình với các thông tin sau:
    ![Tạo Cụm](/images/media-server/getstarted/create-cluster.png)

    1.  Tên cụm.

    2.  Mô tả.

    3.  Cấu hình Ingest: Người dùng có thể nhập các địa chỉ RTMP Public URI/ SRT Public URI / Web RTC Public URI.

    4.  Thêm máy: Người dùng có thể thêm các máy mong muốn vào cụm tại đây.

        Đối với môi trường máy, người dùng cần chọn máy, nhập địa chỉ IP của máy, nhập tiền tố định tuyến.

        :::tip Mỗi máy chỉ có thể thêm vào một Cụm Máy chủ. :::

    5.  Cấu hình Origin: Người dùng nhập địa chỉ HTTP public URI.

4.  Sau khi cấu hình và kiểm tra thông tin, người dùng nhấp vào "Gửi" để thêm Cụm Máy chủ

Thêm thành công, Cụm Máy chủ đã sẵn sàng để người dùng sử dụng.
