---
title: Quản lý máy chủ
order: 6
---

## Quản lý máy chủ

Hệ thống Sigma Streaming cung cấp giao diện thân thiện, thuận tiện cho người dùng quản lý danh sách máy chủ. Tại siderbar, nhấp chọn **Server** để truy cập vào phần quản lý máy chủ theo từng loại. 

Mỗi loại máy chủ sẽ được quản lý trên một giao diện riêng biệt. Ngoài ra, hệ thống cũng cung cấp cho người dùng giao diện để quản lý toàn bộ giấy phép của ứng dụng và phần Giám sát hiệu suất hoạt động của toàn bộ máy chủ.

### Cấu trúc tổ chức quản lý máy chủ

![Structure Manage Server](/images/media-server/getstarted/structure-manage-server.png)

Cấu trúc tổ chức quản lý máy chủ được chia thành các phần và phân ra như sau:

1. Sigma Live Server: Quản lý loại máy Live Server, bao gồm
   1. Loại máy Live Server (bản thường)
   2. Loại máy Live Server Community (bản cộng đồng)
   3. Cluster Server (cụm máy)
2. Sigma VOD Server: Quản lý loại máy VOD Server, bao gồm
   1. Loại máy VOD Server (bản thường)
   2. Loại máy VOD Server Community (bản cộng đồng)
   3. Cluster Server (cụm máy)
3. Component Server: Quản lý loại máy Component Server
   1. Danh sách máy: gồm 5 loại máy 
      1. Transcoder Live
      2. Transcoder VOD 
      3. Packager Live
      4. Packager Start Over
      5. Packager Catchup
   2. Cluster Server (cụm máy)
4.  Monitor: Giám sát hiệu suất hoạt động cua máy trong Ứng dụng
5. License: Quản lý giấy phép trong Ứng dụng 

### Các hành động với máy

Với việc quản lý máy chủ, người dùng có khả năng thực hiện các hành động lên từng máy chủ với các hành động như:

- Add License: Hành động được phép đối với các máy mới được cài đặt thành công lên hệ thống mà chưa được kích hoạt hoạt động, người dùng có thể thực hiện hành động này để gán giấy phép cho máy để máy có thể hoạt động xử lý job. Các bước thực hiện

  [Add License]: 

  

- Config Route: Hành động cho phép người dùng cấu hình route giúp qua hệ thống có thể định tuyến máy một cách dễ dàng hỗ trợ cho quá trình điều phối máy xử lý Job

- Drain Job: Hành động cho phép hệ thống đẩy toàn bộ Job đang được xử lý bởi máy đó ra ngoài

- Pause/ Resume: Hành động cho phép hệ thống Tạm dừng/ Khôi phục khả năng hoạt động của máy

- Delete: Hành động cho phép người dùng thực hiện xóa máy ở trạng thái DEAD/ FREEZE

  

Đối với **Cluster Server**, khi người dùng đã tạo cụm máy sẽ được phép thực hiện các hành động sau:

- Edit Cluster: Hành động cho phép người dùng chỉnh sửa cấu hình/ thay đổi thành phần máy trong Cluster
- View Logs: Hành động cho phép người dùng xem nhật ký hoạt động của Cluster
- Delete: Hành động cho phép người dùng thực hiện xóa Cluster