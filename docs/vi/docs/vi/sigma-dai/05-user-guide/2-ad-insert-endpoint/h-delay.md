---
title: Delay ad
order: 8
---

# Delay quảng cáo là gì?
Tín hiệu SCT35 sẽ đến trước 1 khoảng thời gian, thời điểm chèn đúng mong muốn với thời điểm cấu hình delay,  khi tạo mới kênh hoặc chèn quảng cáo, người dùng sẽ được cấu hình để xác định khoảng thời gian delay mong muốn ở pop-up tạo mới kênh  với Actor CMS User thông qua nền tảng Web.

Tín hiệu SCTE-35 (Society of Cable and Telecommunications Engineers 35) là một phần của tiêu chuẩn SCTE và được sử dụng trong hệ thống truyền hình và truyền hình cáp để chèn và quản lý quảng cáo. Tính năng delay tín hiệu SCTE-35 được sử dụng để đảm bảo rằng tín hiệu SCTE-35 sẽ đến trước một khoảng thời gian nhất định so với thời điểm chèn quảng cáo mong muốn. Điều này có thể làm cho việc chèn quảng cáo trở nên chính xác hơn và đảm bảo rằng quảng cáo không bị cắt ngang hoặc kéo dài quá mức.

Tính năng delay tín hiệu SCTE-35 giúp đảm bảo rằng quảng cáo sẽ xuất hiện đúng lúc và không gây xung đột với nội dung video chính. Điều này làm tăng trải nghiệm của người xem và giúp quảng cáo được hiển thị theo cách hiệu quả nhất trên các hệ thống truyền hình và truyền hình cáp.
## Cấu hình delay ad
Là một trường trong tạo mới kênh, luồng tạo mới ad insert endpoint.

Các rule hiển thị trên giao diện:

* Nhập input >60 → auto hiển thị về 60

* Nút **"-"/"+"**: Click để tăng/giảm 1 giá trị

* Tự động xóa ký tự đặc biệt, chữ và dấu cách →  trả về giá trị mặc định khi chuyển focus ra ngoài textbox.

## Yêu cầu đầu ra
Delay **chính xác** thời điểm chèn quảng cáo phải trễ so với thời điểm ban đầu đã gắn kèm trong tín hiệu SCTE-35 theo khoảng thời gian đã đặt.

Kiểm tra play link HLS/ DASH có cấu hình Advertisement Insertion Delay.

1. CMS thực hiện:
```
Set Advertisement Insertion Delay= 0
```

→ Player thực hiện:

* Phát quảng cáo nhanh, sau khi chạy hết tín hiệu SCTE-35 (0s).

* User sẽ không nhìn thấy tín hiệu SCTE-35.


2. CMS thực hiện:
```
Set Advertisement Insertion Delay > 0
```

→ Player thực hiện:

* Phát quảng cáo chậm, sau khi chạy hết tín hiệu SCTE-35 theo thời gian đã cấu hình (vd: 20s).

* User sẽ không nhìn thấy tín hiệu SCTE-35.

3. Kiểm tra tín hiệu của quảng cáo khi có tín hiệu SCTE-35

→ Kết quả:

* Thời lượng của quảng cáo không bị cắt.

* Luồng quảng cáo không có lỗi phát sinh khác.

