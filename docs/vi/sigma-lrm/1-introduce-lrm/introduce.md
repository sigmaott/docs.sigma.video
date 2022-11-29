---
id: doc-guideline-General-LRM
title: Giới thiệu
order: 1
---

# Giới thiệu về giải pháp LRM

Với sự phổ biến của các thiết bị hỗ trợ IP, người tiêu dùng có thể truy cập nội dung bất cứ đâu, bất cứ lúc nào và nhu cầu này ngày càng tăng. Chính vì vậy, người lập trình TV và Dịch vụ TV, các nhà phân phối đang cố gắng phát triển hơn nhằm cung cấp đầy đủ video được cá nhân hóa, phân phối qua nhiều các kênh đến các nhà khai thác, **cung cấp tiềm năng kiếm tiền tối đa** nhưng vẫn **đảm bảo tuân thủ phân phối quyền** và các quy định của địa phương (nhà phân phối truyền hình). Để giải quyết thách thức này chúng tôi cho ra đời giải pháp Quản lý sóng trực tuyến (LRM- Sigma Linear Right Management). Hệ thống Sigma LRM **cung cấp 1 giải pháp** toàn diện hỗ trợ việc **kiểm soát các nội dung trực tiếp hoặc VOD** đến từng đối tượng khách hàng trong các trường hợp **mất tín hiệu, mất nội dung** và **hạn chế thiết bị**.
 

## Phần mềm quản lý sóng trực tuyến là gì

Quản lý sóng trực tuyến là một Phần mềm  **giúp giải quyết sự phức tạp** ngày càng tăng của việc **phân phối chính xác**, quyền và nội dung thể hiện thông qua hệ thống của màn hình di động và chương trình phát sóng đa kênh trực tiếp.

Không chỉ đảm bảo rằng nội dung được **truyền tải đến đúng đối tượng** vào đúng thời điểm, nó hoạt động để làm rõ các sự kiện và quy trình làm việc của bạn:
 * Cung cấp các công cụ rõ ràng,
 * Đơn giản có thể điều chỉnh lịch trình, 
 * Hẹn lịch xuất bản cho các nhu cầu riêng của từng người xem và từng thiết bị.

Hệ thống hỗ trợ 2 phương thức kiểm soát nội dung bao gồm:
- Quản lý **theo kênh**: Hỗ trợ các Transcoder và Packager tích hợp giao thức ESAM
- Quản lý **theo người dùng**: Khi sử dụng cùng bộ giải pháp Sigma DAI (Dynamic Ads Insert)

## Cách LRM hoạt động
Dựa trên **Thay thế 1 nội dung timeshift** theo quy trình làm việc hướng dẫn lập trình điện tử( EPG- Electronic Program Guide) hoặc **theo thời gian định sẵn** với các nội dung hình ảnh, video.

## Quy trình
Luồng đầu vào tín hiệu kênh được ingest từ hệ thống của Thudo JSC, cung cấp một nguồn cấp dữ liệu dữ liệu IP tuyến tính cho API LRM thông qua nhiều định dạng được hỗ trợ cho cả người lập trình và người vận hành thông qua dịch vụ LRM nhập dữ liệu và chuẩn hóa nó thành định dạng SCTE 224 được lưu trữ cục bộ. Sau đó, nó được phân phối tới nhiều điểm cuối của đối tác phân phối và dữ liệu được hiển thị tới người xem( đầu ra) dưới:
* Định dạng **UDP/ HLS**,
* **Profiles**: 1080p, 720p, 480p, 360p, 
* **Watermark**: Logo theo từng đối tác.

## Lợi ích
Giải pháp LRM không phải giải pháp hoàn toàn mới, đã được phát triển ở nước ngoài như PRISMA- MediaKind,  COMCAST TECHNOLOGY SOLUTIONS. Nhưng ở Việt Nam có các quy định của địa phương và cần tuân thủ phân phối quyền khác nhau, **là đơn vị đầu tiên và duy nhất ở Việt Nam** phát triển giải pháp LRM, chính vì thế giải pháp của chúng tôi phù hợp hơn hết.
 Việc phát triển 1 giải pháp luôn mang lại cho người sử dụng các lợi ích:

* Cung cấp các tùy chọn nội dung thay thế trong các trường hợp mất tín hiệu, mất nội dung và hạn chế thiết bị.
* Đảm bảo rằng nội dung thay thế được truyền tải đến đúng đối tượng vào đúng thời điểm.
* LRM hoạt động để làm rõ các sự kiện và quy trình làm việc của bạn - cung cấp các công cụ rõ ràng, đơn giản có thể điều chỉnh lịch trình, hẹn lịch xuất bản cho các biên tập viên, nhu cầu riêng của từng người xem và từng thiết bị. 
* Người dùng sử dụng bảng điều khiển LRM để xem tất cả dữ liệu sự kiện, xác định khoảng trống chương trình, tuỳ chọn nội dung nhằm chỉnh sửa/ mở rộng sự kiện trong thời gian thực và xác minh nội dung thay thế thích hợp.
* Tự động điều khiển lịch trình thành quy trình làm việc hướng dẫn lập trình điện tử (EPG) của người vận hành.
* Cung cấp một nguồn cấp dữ liệu duy nhất về quản lý dữ liệu cho cả người lập trình và người vận hành thông qua tổng hợp các sự kiện SCTE 224.

## Mục đích

* Tài liệu này được xây dựng phục vụ cho công việc hướng dẫn sử dụng chi tiết thao tác các chức năng phần mềm.
* Nội dung trình bày trong tài liệu ngắn gọn, theo trình tự các chức năng và hướng dẫn thực hiện từng bước một. Vì vậy, người dùng dễ dàng sử dụng chương trình thông qua tài liệu này.

Hệ thống này được xây dựng nhằm hỗ trợ biên tập viên:

* Biên tập các kênh, quản lý tập kênh

* Biên tập và theo dõi các sự kiện diễn ra, cấu hình thay thế nội dung timeshift,

* Hẹn giờ xuất bản, lập lịch thây thế nội dung luồng Live.

CMS được xây dựng tính năng biên tập kênh diễn ra trên ứng dụng VTVcab ON. Trong phiên bản cập nhật, CMS được cải tiến để dễ sử dụng, trực quan hơn

* Các trình duyệt có thể dùng để biên tập **Web desktop**: Bao gồm các trình duyệt phổ biến như Chrome, Cốc cốc, Fire fox, Opera, Microsoft Edge, Safari . Tuy nhiên, chúng tôi đề xuất dùng trình duyệt **Chrome.** 

*Một số tác vụ khác:*
 * Quản lý tập kênh phân phối cho đối tác 
 * Lập lịch thay thế nội dung luồng live 
 * Cấu hình thay thế nội dung timeshift 
 * Ingest kênh được phân phối cho mình
 * Pull các nội dung timeshift của mình 
 * Có các chức năng cơ bản của chương trình: login, logout, thay đổi mật khẩu, xử lý các quy trình nghiệp vụ.

## Phạm vi sử dụng

Người sử dụng: Là người thao tác trực tiếp trên hệ thống.







