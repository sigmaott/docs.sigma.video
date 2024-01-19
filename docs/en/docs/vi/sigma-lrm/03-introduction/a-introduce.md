---
id: doc-guideline-General-LRM
title: Giới thiệu
order: 1
---

# Giới thiệu về giải pháp quản lý sóng trực tuyến

Hệ thống quản lý quản lý sóng trực tuyến (Linear Rights Management System) là một phần mềm hoặc hệ thống tự động giúp quản lý và kiểm soát quyền sở hữu, phân phối, và sử dụng các tài sản kỹ thuật số như video, âm thanh. Hệ thống này giúp đảm bảo tính toàn vẹn và bảo mật cho các tài sản số, đồng thời cho phép tổ chức kiểm soát quyền truy cập và sử dụng chúng một cách hiệu quả. Hỗ trợ kiểm soát nội dung trực tiếp hoặc Video On Demand (VOD) đến từng đối tượng khách hàng trong các tình huống như **mất tín hiệu, mất nội dung** và **hạn chế thiết bị**.

Hệ thống Linear Rights Management đóng vai trò quan trọng trong việc bảo vệ tài sản kỹ thuật số của tổ chức, đồng thời quản lý quyền truy cập và sử dụng chúng một cách hiệu quả để đảm bảo tính toàn vẹn và giá trị của tài sản này.

Không chỉ đảm bảo rằng nội dung được **truyền tải đến đúng đối tượng** vào đúng thời điểm, nó hoạt động để làm rõ các sự kiện và quy trình làm việc của bạn:

- Cung cấp các công cụ rõ ràng,
- Đơn giản có thể điều chỉnh lịch trình,
- Hẹn lịch xuất bản cho các nhu cầu riêng của từng người xem và từng thiết bị.

## Mục đích

Tài liệu này được tạo ra với mục đích hướng dẫn chi tiết về cách sử dụng các chức năng trong phần mềm. Nội dung của tài liệu được trình bày một cách ngắn gọn, theo trình tự các chức năng và cung cấp hướng dẫn từng bước, giúp người dùng dễ dàng thực hiện các thao tác trong chương trình thông qua tài liệu này.

Hệ thống này được phát triển để hỗ trợ các biên tập viên trong việc:

- Biên tập các kênh và quản lý danh sách kênh.
- Biên tập và theo dõi sự kiện diễn ra, cấu hình thay thế nội dung timeshift.
- Lên lịch hẹn giờ xuất bản và thay đổi nội dung trong luồng trực tiếp.

Bản cập nhật mới nhất, CMS đã được cải tiến để tăng tính dễ sử dụng và tính trực quan.

### Môi trường

Trình duyệt web có thể được sử dụng để biên tập trên desktop, bao gồm các trình duyệt phổ biến như Chrome, Cốc Cốc, Firefox, Opera, Microsoft Edge, và Safari.

Tuy nhiên, chúng tôi khuyến khích sử dụng trình duyệt Chrome để có trải nghiệm tốt nhất.

### Phạm vi sử dụng

Người sử dụng: Là người thao tác trực tiếp trên hệ thống.

## Cách giải pháp quản lý sóng trực tuyến hoạt động

Dựa trên **Thay thế 1 nội dung timeshift** theo quy trình lịch phát sóng( EPG- Electronic Program Guide) hoặc **theo thời gian định sẵn** với các nội dung hình ảnh, video.

### Phương thức

Hệ thống hỗ trợ 2 phương thức kiểm soát nội dung bao gồm:

- Quản lý **theo kênh**: Hỗ trợ các Transcoder và Packager tích hợp giao thức ESAM
- Quản lý **theo người dùng**: Khi sử dụng cùng bộ giải pháp Sigma DAI (Dynamic Ads Insert)

### Quy trình

Tín hiệu kênh được nhận vào từ hệ thống của Thudo JSC, đóng vai trò là một nguồn cấp dữ liệu tuyến tính IP cho API Linear Rights Management (LRM). Người lập trình và người vận hành có thể sử dụng nhiều định dạng khác nhau được hỗ trợ thông qua dịch vụ nhập dữ liệu LRM, và sau đó dữ liệu được chuẩn hóa thành định dạng SCTE 224, lưu trữ tại cục bộ.

Tiếp theo, dữ liệu được phân phối đến nhiều điểm cuối của các đối tác phân phối, và sau đó hiển thị cho người xem (đầu ra) thông qua:

- **Định dạng**: UDP/ HLS
- **Profiles** chất lượng: 1080p, 720p, 480p, 360p,
- **Watermark**: Logo theo từng đối tác.
