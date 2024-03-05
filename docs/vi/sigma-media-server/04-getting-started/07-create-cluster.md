---
title: Tạo mới Cluster
order: 7
---

## Tạo mới Cluster Server 

Việc tạo những Cluster Server giúp người dùng có thể gộp các máy lại với nhau thành một cụm, giúp cho việc hỗ trợ nhau xử lý các task giữa các máy trở nên dễ dàng hơn. Cụ thể, các máy được gộp lại có thể hỗ trợ nhau trong trường hợp có máy bị chết hoặc gặp sự cố.

Giúp cải thiện tốc độ và hiệu suất làm việc, đồng thời giảm thiểu rủi ro mất mát dữ liệu và đảm bảo sự liên tục của các quy trình xử lý Job.

Người dùng có thể thực hiện tạo mới Cluster Server theo các bước sau:

1. Truy cập vào phần quản lý Cluster Server với loại máy muốn thêm 

2. Nhấn chọn "Thêm mới cụm máy chủ"

3. Tại form cấu hình cụm máy chủ, người dùng thực hiện cấu hình với những thông tin:
   ![Create Cluster](/images/media-server/getstarted/create-cluster.png) 
   ![](/images/media-server/getstarted/create-cluster-2.png)

   1. Tên cụm.

   2. Mô tả.

   3. Cấu hình Ingest: Người dùng có thể nhập địa chỉ RTMP Public URI/ SRT Public URI/ Web RTC Public URI.

   4. Thêm máy: Người dùng có thể thêm những máy mong muốn gộp thành cụng tại đây.

      Với môi máy người dùng cần chọn máy, nhập địa chỉ IP của máy, nhập tiền tố định tuyến.

      ::: tip Mỗi máy chỉ được thêm vào một Cluster Server. :::

   5. Cấu hình Origin: Người dùng nhập địa chỉ HTTP public URI.

4. Sau khi cấu hình và kiểm tra thông tin, người dùng nhấn chọn "Gửi" để thêm Cluster Server

Thêm thành công, Cluster Server sẵn sàng cho người dùng sử dụng.
