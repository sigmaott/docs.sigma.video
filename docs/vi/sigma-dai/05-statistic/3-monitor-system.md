---
title: Giám sát hệ thống
order: 3
---
# Giám sát hệ thống
Monitor System- Giám sát hệ thống là quá trình **theo dõi hệ thống, kiểm tra lỗi, hệ thống có thể chịu tải bao nhiêu**…  liên quan tới các **vấn đề về lỗi** dẫn đến không hiển thị được quảng cáo thành công, giúp người dùng kiểm tra được nguyên nhân lỗi ở đây và tìm cách khắc phục( hiện tại nhóm theo kênh và kênh phụ- group by channel, group by sub-channel)
Người dùng chọn Giám sát hệ thống
## Các thông tin hiển thị trên giao diện
 
Bảng dưới đây giải thích các thông tin hiển thị trên giao diện.

| Tên                               | Giải thích                                                   | Loại dữ liệu | Đơn vị tính  | Công thức |
| --------------------------------- | ------------------------------------------------------------ | ------------ | ------------ | --------- |
| Latency                           | Tốc độ phản hồi của request                                  | Số           | milliseconds | N/A       |
| Timeout                           | Thời gian mà cài đặt request phải phản hồi( yêu cầu truy cập của người dùng mất nhiều thời gian để chờ hơn so với bình thường/  dev có thể config timeout này) khi vượt quá thời gian này đồng nghĩa kết nối của bạn đã ‘hết thời gian chờ’, trả về thông tin hết hạn timeout . | Số           | milliseconds | N/A       |
| AdDecisionServer.Error            | Số lượng phản hồi mã trạng thái không phải 200, phản hồi trống và các phản hồi thời gian mà SSAI nhận được từ quảng cáo trong khoảng thời gian SSAI đã chỉ định. | Số           |              | Count     |
| AdDecisionServer.Latency          | Thời gian phản hồi trung bình cho các yêu cầu do SSAI đưa ra cho quảng cáo.<br />(**Không tính cột Tổng dưới cùng vì không có ý nghĩa**) | Số           | milliseconds | Avg       |
| AdDecisionServer.Timeout          | Số lượng yêu cầu hết thời gian cho quảng cáo trong khoảng thời gian SSAI đã chỉ định. | Số           |              | Count     |
| Origin.Error                      | Số lượng phản hồi mã trạng thái không phải 200 và các phản hồi thời gian mà SSAI nhận được từ máy chủ gốc trong khoảng thời gian SSAI đã chỉ định. | Số           |              | Count     |
| Origin.Latency                    | Thời gian phản hồi trung bình cho các yêu cầu được SSAI thực hiện cho nguồn nội dung(content origin server).<br />**Không tính cột Tổng dưới cùng. | Số           | milliseconds | Avg       |
| Origin.Timeout                    | Số lượng yêu cầu hết thời gian đến máy chủ gốc trong khoảng thời gian SSAI đã chỉ định.<br />**Không tính cột Tổng dưới cùng. | Số           |              | Count     |
| SkippedReason. DurationExceeded   | Số lượng quảng cáo không được chèn vào thời lượng gốc( avail.duration) vì quảng cáo đã trả về một thời lượng quảng cáo lớn hơn thời lượng gốc (avail duration). <br />Nếu số liệu này có giá trị cao thì có thể coi là một nguyên nhân dẫn tới sự khác biệt giữa số liệu avail.ads và addecisionerver.ads.<br />**Không tính cột Tổng dưới cùng. | Số           |              | Count     |
| SkippedReason. InternalError      | Số lượng quảng cáo bị bỏ qua do lỗi nội bộ của SSAI.         | Số           |              | Count     |
| SkippedReason. TranscodeError     | Số lượng quảng cáo bị bỏ qua do lỗi chuyển mã(transcode error). | Số           |              | Count     |
| SkippedReason. TranscodeInProcess | Số lượng của số lượng quảng cáo không được chèn vào nguồn gốc vì quảng cáo chưa được chuyển mã(transcoded).Nếu số liệu này có giá trị cao thì có thể coi là một nguyên nhân dẫn tới tỉ lệ lập đầy quảng cáo thấp (low overall avail.fillrate). | Số           |              | Count     |





