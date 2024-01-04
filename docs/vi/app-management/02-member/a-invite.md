---
title: Mời thành viên
order: 1
---

# Quản lý thành viên

Để tăng cường quản lý, bảo mật thông tin và tối ưu hóa quá trình làm việc cũng như đảm bảo mọi thành viên tuân thủ quyền và trách nhiệm của mình, tính năng phân quyền và mời thêm thành viên trở thành yếu tố quan trọng trong dịch vụ Sigma streaming. Điều này mang lại những lợi ích như:

- **Quản lý công việc hiệu quả**:

    - Bảo mật: Hạn chế quyền truy cập, ngăn chặn sự can thiệp từ người không có quyền.
    - Quản lý hiệu quả: Phân chia rõ ràng vai trò và quyền hạn, giúp quản lý công việc một cách linh hoạt và dễ dàng.
- **Phân chia trách nhiệm**: phân công công việc tương ứng với trách nhiệm vào từng thành viên chính xác và hiệu quả.
- **Kiểm soát chất lượng**: Ngăn chặn việc chỉnh sửa, đảm bảo chất lượng nội dung và mở rộng đội ngũ một cách linh hoạt.

## Chuẩn bị
Trước khi bắt đầu, việc sử dụng dịch vụ Sigma Streaming yêu cầu các thành viên phải có tài khoản truy cập. Nếu bạn chưa có tài khoản, hãy tham khảo hướng dẫn để tạo tài khoản mới [Tạo tài khoản mới]().

## Thêm thành viên

**Điều kiện**: Tại khoản có quyền truy cập vào quản lí ứng dụng

Trên giao diện hiển thị danh sách thành viên, người quản trị có thể mời thêm thành viên theo các bước sau:

**Bước 1**: Nhấp vào nút `Thêm` trên danh sách thành viên.

Hiển thị một Pop-up mời thành viên với các phần sau:

- Nhập email:
    - Không hỗ trợ ngôn ngữ có dấu, không chứa dấu cách, nhập theo định dạng `local-part@domainname`

- Group mặc định- khi tạo ứng dụng, sẽ tự động có 3 nhóm mặc định:
    - **Media-hub distributor**: nhà phân phối, phân quyền vào application VTVhub
    - **Administration**: Full quyền trên cả 3 thành phần (Tài khoản tạo ứng dụng mặc định có quyền quản trị).
    - **Editor**: Có tất cả quyền thực hiện hành động ngoại trừ quản lý ứng dụng.
    - **Visitor**: Chỉ có quyền xem tất cả các ứng dụng ngoại trừ quản lý ứng dụng.

**Bước 2**: 
Người dùng cung cấp địa chỉ email để gửi lời mời đến thành viên.

*Cho phép mời nhiều người cùng lúc, tối đa 10 thành viên.*

Cthành viênn nhóm quyền và nhấn nút `Mời Thành Viên`.

**Bước 3**: 
Hệ thống kiểm tra thông tin tài khoản trong hệ thống:
- [Tài khoản đã tồn tại](a-invite#tài-khoản-đã-tồn-tại)
- [Tài khoản không tồn tại](./a-invite#tài-khoản-thành-viên-không-tồn-tại)

## Tài khoản thành viên đã tồn tại

Nếu email **đã tồn tại** trong hệ thống, hệ thống sẽ tự động thêm email vào ứng dụng với tư cách thành viên.

Sau khi quay lại giao diện danh sách thành viên, thông báo thành công sẽ xuất hiện phía trên màn hình:

<!-- []() -->

Thông tin của thành viên mới mời sẽ được hiển thị đầu danh sách, bao gồm các chi tiết sau:

- Email: Địa chỉ email được nhập.
- Trạng thái: Joined.
- Thời gian: Thời gian khi thành viên được thêm vào.

### Xác nhận thành viên
Sau khi tài khoản người dùng được mời thành công, hệ thống sẽ gửi thông báo "ĐÃ TRỞ THÀNH THÀNH VIÊN" đến địa chỉ email đã được nhập.

Khi người dùng nhấp vào email thông báo, thành viên sẽ được chuyển hướng đến trang tổng quan ứng dụng. Tùy thuộc vào trạng thái đăng nhập của trình duyệt và tài khoản, có hai trường hợp xảy ra trên màn hình đích:

1. Nếu trình duyệt đã đăng nhập và đang mở trang Sigma:

    Tự động chuyển hướng đến trang tổng quan ứng dụng Sigma.

2. Nếu trình duyệt chưa đăng nhập:

    Mở trang yêu cầu đăng nhập.
    Sau khi đăng nhập thành công, tự động chuyển hướng đến trang tổng quan ứng dụng Sigma.

Ngoài ra, nếu trình duyệt Opera đang đăng nhập nhưng liên kết chuyển hướng tới trình duyệt Chrome, người dùng sẽ được yêu cầu đăng nhập lại.

Nếu người dùng nhấp vào nút `Home` dưới email, thành viên sẽ được chuyển hướng trực tiếp tới trang web Sigma.

## Tài khoản thành viên không tồn tại

Nếu email không tồn tại trong hệ thống, hệ thống sẽ **tự động gửi lời mời** thông qua địa chỉ email được nhập.

Tại giao diện danh sách thành viên, thông tin của thành viên vừa được mời sẽ được hiển thị đầu danh sách với các chi tiết sau:

- Email: Địa chỉ email đã được nhập.
- Trạng thái: Invited.
- Thời gian: Thời điểm khi gửi mail mời thêm thành viên.

### Đăng ký thành viên

Tài khoản nhận được mail mời tham gia, nhấp vào `Truy cập vào app`
