---
title: Service-quota
order: 1
---

# Giới hạn sử dụng

Quota được thiết lập để đảm bảo rằng trang web hoạt động hiệu quả,ngăn chặn truy cập đồng thời của nhiều người dùng hoặc giảm nguy cơ bị quá tải hệ thống máy chủ, và bảo vệ tài nguyên của máy chủ khỏi sự lạm dụng.

Trong một trang web, quota được sử dụng để mô tả giới hạn hoặc hạn chế về việc sử dụng một số lượng cụ thể của tài nguyên. Các tài nguyên này có thể bao gồm lưu trữ, số lượng kênh phát trực tiếp đồng thời, session hoặc bất kỳ tài nguyên nào mà trang web cung cấp cho người dùng.

### Mục đích

Để xác định giới hạn tài nguyên số lượng kênh phát trực tiếp đồng thời trong phạm vi gói mà người dùng được sử dụng. Khi người dùng đạt đến giới hạn tài nguyên, hệ thống sẽ chặn quyền đẩy input vào kênh để bắt đầu phát trực tiếp vào dịch vụ hệ thống, đảm bảo rằng họ không thể tiếp tục sử dụng dịch vụ miễn phí cho đến khi App được nâng cấp hoặc mở rộng giới hạn tài nguyên.

Việc chặn dịch vụ Livestream phải được thực thi bởi hệ thống để đảm bảo người dùng không thể sử dụng sản phẩm dịch vụ vượt quá giới hạn Pro App.

### Phạm vi

Giới hạn tài nguyên là độc lập giữa các app trong cùng 1 tài khoản. Nghĩa là với tài khoản A:

Ứng dụng 1 đạt giới hạn quota → hết tài nguyên sử dụng, update để tiếp tục sử dụng.

Ứng dụng 2 chưa đạt giới hạn quota → tiếp tục sử dụng.
