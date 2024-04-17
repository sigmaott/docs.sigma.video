---
title: Sigma Media Server 
order: 2
---

Với loại máy Sigma Live Server, loại máy giúp xử lý luồng kênh Live. Người dùng có thể tạo, cấu hình với ba loại máy là:

[TOC]



## Máy Sigma Live Server: 

Loại máy phiên bản đầy đủ chức năng, người dùng có khả năng sử dụng với toàn bộ tính năng do chúng tôi cung cấp với loại máy này.

Với các hành động người dùng có thể thực hiện bao gồm:

### 1. Add Server 

Người dùng có thể thực hiện thêm máy mới, theo các bước:

1. Tại màn hình danh sách máy Sigma Live, nhấp **Thêm máy chủ** 

   ![add sever](/images/media-server/user-guide/add-server-1.png)

2.  Thực hiện lấy mã token để cài đặt máy

      [Lấy mã token](/vi/sigma-media-server/03-getting-started/04-install-new-machine#lay-ma-token-đe-thuc-hien-cai-đat-may)

3. Cài đặt máy chủ

   [Install Server](../03-getting-started/04-install-new-machine#thuc-hien-cai-đat-may)
   
------

### 		2. Drain Job

​		Chức năng giúp người dùng có khả năng thực hiện hành động **Drain Job**, khi máy được yêu cầu thực hiện **Drain Job** máy sẽ thực hiện đẩy toàn bộ Job đang được xử lý trong máy đó ra ngoài. Người dùng có thể thực hiện **Drain Job** theo các bước đơn giản:

   1. Tại màn hình quản lý máy, nhấp chọn **Drain Job** tại máy ở trạng thái hoạt động (Running/ Paused)

      ![](/images/media-server/user-guide/drain-job.png)

   2. Nhấp xác nhận thực hiện hành động
   
      ![](/images/media-server/user-guide/drain-job-confirm.png)

Hệ thống sẽ xử lý việc đẩy toàn bộ job đang được thực hiện trong máy ra ngoài

----
### 3. Pause/ Resume 

Cho phép người dùng thực hiện Tạm dừng/ Khôi phục hoạt động của máy. Người dùng thực hiện các bước:

  1. Tại màn hình quản lý máy, nhấp chọn **Pause** tại máy ở trạng thái Running

        ![](/images/media-server/user-guide/pause.png)
        
  2. Nhấp xác nhận thực hiện hành động

        ![](/images/media-server/user-guide/pause-confirm.png)

Máy sẽ về trạng thái "Paused"

Với máy ở trạng thái **Pause**, người dùng muốn thực hiện **Resume** khôi phục hoạt động của máy. Thực hiện các bước tương tự:
  1. Tại màn hình quản lý máy, nhấp chọn **Resume** tại máy ở trạng thái Paused

        ![](/images/media-server/user-guide/resume.png)
        
  2. Nhấp xác nhận thực hiện hành động

        ![](/images/media-server/user-guide/resume-confirm.png)

Máy sẽ về trạng thái "Running"

------
### 4. Config Route

Chắc năng **Config Route** cho phép người dùng cấu hình địa chỉ URI giúp hệ thống có thể định tuyển và kết nối với máy chỉ Ingest và Origin.

Hệ thống cung cấp giao diện cho phép người dùng cấu hình định tuyến, bao gồm các thông tin:

- Cấu hình Ingest: Người dùng có thể cấu hình địa chỉ RTMP Public URI, SRT Public URI, Web RTC Public URI
- Cấu hình Origin:  Người dùng có thể cấu hình địa chỉ HTTP Public URI

Để thực hiện **Config Route**, người dùng thực hiện các bước sau:
1. Tại màn hình danh sách máy chủ, nhấp hành động **Config Route** 
   ![](/images/media-server/user-guide/config-route.png)

2. Thực hiện cấu hình thông tin cần thiết vào form cấu hình 
   ![](/images/media-server/user-guide/config-route-form.png)

------
### 5. Add license

Khi cài đặt máy thành công, người dùng cần gán giấy phép cho máy để kích hoạt hoạt động. 

Với việc thêm giấy phép người dùng có thể thực hiện bằng 2 cách:

##### Cách 1: Truy cập vào phần Quản lý giấy phép

Thực hiện các thao tác:

1. Nhấp "Thêm giấy phép".

![](/images/media-server/user-guide/license.png)

2. Chọn loại giấy phép (Lưu ý: Giấy phép sử dụng kích hoạt cho máy phải cùng loại với máy)
   ![](/images/media-server/user-guide/license-type.png)

3. Kiểm tra thông tin của giấy phép
   ![](/images/media-server/user-guide/license-review.png)

4. Thực hiện thanh toán hóa đơn đầu tiên của giấy phép 
   ![](/images/media-server/user-guide/license-payment.png)

   ::: warning 

   Giấy phép có khả năng sử dụng khi được thanh toán trước.

5. Xác nhận thanh toán 

6. Hệ thống thanh toán thành công giấy phép sẽ ở trạng thái khả dụng

7. Nhấp hành động "Sử dụng"
   ![](/images/media-server/user-guide/license-use.png)

8. Chọn máy cần kích hoạt hoạt động
![](/images/media-server/user-guide/license-choose-server.png)

9.  Xác nhận sử dụng giấy phép
![](/images/media-server/user-guide/license-use-confirm.png)

Giấy phép lúc này đã gán thành công cho máy, máy sẵn sàng nhận job để xử lý.
      ::: tip
      Nếu bạn đã có giấy phép ở trạng thái "Available" có thể thực hiện "Sử dụng" giấy phép ngay (Thực hiện từ bước 7).

##### Cách 2: Truy cập vào phần Quản lý máy chủ

Người dùng có thể thực hiện "Add License" trược tiếp cho máy chủ theo các bước:

1. Với máy mới cài đặt chưa được gán giấy phép, nhấp hành động "Add License"
    ![](/images/media-server/user-guide/add-license.png)

2. Người dùng có thể thực hiện: 

    ![](/images/media-server/user-guide/add-license-2.png)

   - **Chọn giấy phép có sẵn**: Trong trường hợp ứng dụng đã có giấy phép cùng loại với máy ở trạng thái "Avaiable".
    ![](/images/media-server/user-guide/add-license-choose.png)

   - **Lựa chọn thêm giấy phép mới**: Người dùng thực hiện các bước thêm giấy phép như bước 2, 3, 4, 5, 6 tại **Cách 1**. Sau khi giấy phép được thanh toán thành công, giấy phép sẽ tự động được chọn làm giấy phép để sử dụng kích hoạt máy

      ![](/images/media-server/user-guide/add-license-create.png)
      
      
      
-----
### 6. Config App

Chức năng **Config App** cho phép người dùng thực hiện cấu hình cổng kết nối cho máy chủ Ingest và Origin.

Các bước thực hiện cấu hình ứng dụng:

1. Nhấp chọn **Server Name** để xem thông tin chi tiết máy chủ
![](/images/media-server/user-guide/config-app-1.png)

2. Tại phần thông tin cấu hình App, nhấp chọn **Config**

 ![](/images/media-server/user-guide/config-app-2.png)
3. Thực hiện cấu hình và xác nhận lưu cấu hình
   - Cấu hình Ingest: Người dùng có thể cấu hình cổng kết nối cho RTMP Server, SRT Server, Web RTC Server
      ![](/images/media-server/user-guide/config-app-ingest.png)

   - Cấu hình Origin:  Người dùng có thể cấu hình cổng kết nối cho HTTP Server ![](/images/media-server/user-guide/config-app-origin.png)

------

### 7. Actions to App

Ngoài việc cấu hình App, người dùng có thể thực hiện các hành động **Start/ Stop/ Reset** ứng dụng. Giúp xử lý các trường hợp ứng dụng gặp sự cố hoặc mong muốn của người dùng muốn khởi động lại úng dụng.

Người dùng có thể thực hiện các hành động theo các bước đơn giản sau:

1. Truy cập xem thông tin chi tiết máy chủ, tại phần cấu hình App
2. Nhấp nút hành động **Start/ Stop/ Reset** ứng dụng muốn thực hiện

![](/images/media-server/user-guide/action-app.png)

------

### 8. Delete Server 

Với những máy ở trạng thái **DEAD/ FREEZED** người dùng có thể thực hiện Xóa máy, giúp loại bỏ những máy không còn sử dụng để đảm bảo việc quản lý máy dễ dàng hơn. Người dùng sử dụng nút **Delete** với máy DEAD/ FREEZED
![](/images/media-server/user-guide/delete-server.png)

------

## Máy Sigma Live Server Community

Sigma Live Server Community là một phiên bản máy cộng đồng sử dụng miễn phí, cho phép người dùng sử dụng một số tính năng cơ bản của Sigma Live Server mà không cần trả phí.

Với loại máy cộng đồng, người dùng không cần thực hiện gán giấy phép cho máy. Hệ thống sẽ tự động tạo và gán giấy phép miễn phí cho người dùng sử dụng. 

Người dùng vẫn được phép thực hiện đầy đủ các chức năng khác đổi với loại máy này tương tự loại máy Sigma Live bình thường

### 1. Add Server 
Người dùng có thể thực hiện thêm máy mới, theo các bước:

1. Tại màn hình danh sách máy Sigma Live Community, nhấp **Thêm máy chủ** 

2.  Thực hiện lấy mã token để cài đặt máy

    [Lấy mã token](/vi/sigma-media-server/03-getting-started/04-install-new-machine#lay-ma-token-đe-thuc-hien-cai-đat-may)

3. Cài đặt máy chủ
   [Install Server](/vi/sigma-media-server/03-getting-started/04-install-new-machine#with-server-community)

----

### 2. Drain Job
  Người dùng thực hiện hành động [Drain Job](/vi/sigma-media-server/04-user-guide/02-sigma-live-server#_2-drain-job)

----
### 3. Pause/ Resume 
​    Người dùng thực hiện hành động [Pause/ Resume](/vi/sigma-media-server/04-user-guide/02-sigma-live-server#_3-pause-resume)

----

### 4. Config Route
​    Người dùng thực hiện hành động [Config Route](/vi/sigma-media-server/04-user-guide/02-sigma-live-server#_4-config-route)

------

### 5. Config App
   Người dùng thực hiện hành động [Config App](/vi/sigma-media-server/04-user-guide/02-sigma-live-server#_6-config-app)

-----

### 6. Actions to App
   Người dùng thực hiện hành động  [Action to App](/vi/sigma-media-server/04-user-guide/02-sigma-live-server#_7-actions-to-app)

-----
### 7. Delete Server
  Người dùng thực hiện hành động  [Delete Server](/vi/sigma-media-server/04-user-guide/02-sigma-live-server#_8-delete-server)

 

## Cluster Server

Hệ thống đem đến một giải pháp nhằm giúp người dùng có thể gộp các máy lại với nhau thành một cụm, giúp cho việc hỗ trợ nhau xử lý các task giữa các máy trở nên dễ dàng hơn. Cụ thể, các máy được gộp lại có thể hỗ trợ nhau trong trường hợp có máy bị chết hoặc gặp sự cố.

Giúp cải thiện tốc độ và hiệu suất làm việc, đồng thời giảm thiểu rủi ro mất mát dữ liệu và đảm bảo sự liên tục của các quy trình xử lý Job.

### 1. Add Cluster Server 

Người dùng thực hiện hành động [Add Cluster](/vi/sigma-media-server/03-getting-started/07-create-cluster#tao-moi-cluster-server)


----
### 2. Edit Cluster Server 

Người dùng được phép thực hiện chỉnh sửa cấu hình của cụm máy chủ, thay đổi cấu hình hoặc thay đổi thành phần máy trong cụm

----

### 3. Delete Cluster Server 

Người dùng có thể thực hiện xóa cụm máy không còn nhu cầu sử dụng bằng hành động **Delete** tại phần quản lý Cluster Server 

-----

### 4. View Logs

Hệ thống đem đến cho người dùng chức năng xem nhật lý hoạt động của cụm máy chủ. Mỗi cụm máy chủ sẽ có giao diện hiển thị toàn bộ nhật ký hoạt động của tất cả các máy chủ nằm trong cụm.

Người dùng có thể xem danh sách nhật ký hoạt động của cụm máy chủ bằng cách nhấp hành động **View Logs** tại phần quản lý Cluster Server. 



