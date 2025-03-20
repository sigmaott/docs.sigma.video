---
title: Glossary
order: 2
---

# Thuật ngữ

Tại đây, bạn có thể tìm hiểu về các thuật ngữ và khái niệm xuất hiện trong tài liệu của Sigma Media Server.

## Phát trực tuyến với bitrate thích ứng

Bitrate thích ứng là một phương pháp phát trực tuyến video qua HTTP, trong đó nội dung nguồn được mã hóa ở nhiều bitrate khác nhau.

## Khử xen kẽ (Deinterlacing)

Khử xen kẽ là quá trình chuyển đổi video xen kẽ thành video quét liên tục.

Video xen kẽ hiển thị các dòng quét chẵn và lẻ thành hai trường riêng biệt. Đầu tiên, các dòng chẵn xuất hiện trên màn hình, sau đó các dòng lẻ xuất hiện. Hai trường quét xen kẽ này tạo thành một khung hình video. Video xen kẽ rất hữu ích cho phát sóng vì hình ảnh video có thể được xử lý trên màn hình với băng thông rất thấp. Tuy nhiên, nhược điểm là khi có chuyển động nhanh, hình ảnh có thể bị mờ vì chỉ có một nửa hình ảnh được ghi lại tại một thời điểm, gây ra hiện tượng nhòe chuyển động.

Video quét liên tục hiển thị toàn bộ khung hình cùng một lúc.  
Khử xen kẽ cần thiết để xem video từ TV đời cũ trên máy tính hoặc thiết bị di động một cách thoải mái.

## DVR

Một tập hợp các tính năng của Sigma liên quan đến việc ghi lại luồng video vào kho lưu trữ và sau đó phát lại thông qua nhiều giao thức khác nhau hoặc xuất một phần video thành tệp MP4.

## Khung hình (Frame)

Trong video, một khung hình là một trong nhiều hình ảnh tĩnh tạo nên một video chuyển động hoàn chỉnh. Đây là đơn vị nhỏ nhất trong một video. Mỗi khung hình có thời gian bắt đầu và thời lượng riêng.

## Thời lượng khung hình

Trong một video, đây là khoảng thời gian giữa thời điểm bắt đầu của một khung hình và khung hình tiếp theo.

Thông số này rất quan trọng đối với một số giao thức. Thông thường, thời lượng khung hình là sự chênh lệch giữa dấu thời gian của hai khung hình liên tiếp. Tuy nhiên, trong một số trường hợp (khi kết nối bị gián đoạn), có thể xảy ra hiện tượng ngắt quãng video, khiến khoảng thời gian giữa hai khung hình không bằng thời lượng khung hình. Hiện tượng này gọi là "khoảng trống khung hình" và được xử lý khác nhau theo từng giao thức.

## GOP (Nhóm khung hình - Group of Pictures)

GOP là một nhóm khung hình liên tiếp trong luồng video được mã hóa MPEG. Các khung hình được nhóm lại để nén giữa các khung hình, giúp giảm kích thước dữ liệu video khi truyền qua mạng.

Luồng video nén bao gồm một chuỗi GOP. Ở phía nhận, bộ giải mã sẽ lấy toàn bộ khung hình trong một GOP để tái tạo hình ảnh.

Một GOP bao gồm các khung hình sau:

- **I-frame (khung chính)**: Là khung đầu tiên trong một GOP. Nó là một hình ảnh đầy đủ, được mã hóa độc lập với các khung khác.
- **P-frame, B-frame**: Các khung tiếp theo trong một GOP.  
  - **P-frame** chứa dữ liệu khác biệt giữa khung trước đó và khung hiện tại.  
  - **B-frame** liên kết với cả I-frame và P-frame trước hoặc sau nó, giúp tua nhanh dễ dàng hơn.

## Kích thước GOP

Kích thước GOP là số khung hình giữa hai khung chính liên tiếp trong một luồng video. Số này có thể cố định hoặc thay đổi tùy theo luồng video. Khi Sigma chuyển mã video, nó tạo ra các GOP có kích thước cố định.

## Multicast

Multicast là phương thức phân phối video trong mạng nội bộ. Đây là một tập hợp các gói UDP được truyền từ một nguồn duy nhất đến một nhóm người dùng cùng lúc bằng một địa chỉ IP multicast đặc biệt.

Tìm hiểu thêm trong tài liệu Sigma.

## Prepush

Prepush là phương pháp giúp phát lại mượt mà hơn cho các luồng video HTTP MPEG-TS, RTMP hoặc RTSP truyền qua TCP.

Với prepush, máy chủ lưu trữ từng GOP trong bộ đệm trước khi gửi đến người xem. Khi người xem kết nối, máy chủ sẽ gửi GOP đầu tiên từ bộ đệm, sau đó phát luồng video với độ trễ tương đương với kích thước một GOP tính theo giây. Nếu kết nối bị gián đoạn, máy khách có thể phát GOP từ bộ đệm, giúp video phát lại ổn định hơn.

## Phát video (Publishing)

Phát video là quá trình truyền video đến Sigma Media Server từ các hệ thống và thiết bị bên ngoài. Sigma là bên nhận kết nối.

Các trường hợp được coi là phát video đến Sigma:

- Truyền video từ thiết bị di động đến Sigma.
- Truyền video từ OBS hoặc vMix đến Sigma.
- Truyền video từ trang web đến Sigma qua WebRTC.

Những trường hợp **không** được coi là phát video:

- Nhận luồng multicast.
- Lấy luồng video từ nguồn khác (trong trường hợp này, Sigma là bên khởi tạo kết nối).

## Phân đoạn (Segments)

Các giao thức DASH và HLS chia luồng video thành các phân đoạn hoặc đoạn nhỏ có thời lượng cố định (tính bằng giây). Mỗi phân đoạn có thể chứa nhiều GOP, và phải có độ dài chia hết cho GOP.

Máy chủ DASH hoặc HLS gửi video theo từng phân đoạn và cung cấp danh sách các phân đoạn (playlist). Trước khi bắt đầu phát, trình phát tải một số phân đoạn vào bộ đệm. Nếu kết nối bị gián đoạn, trình phát sẽ phát video từ bộ đệm để đảm bảo trải nghiệm xem mượt mà. Thông thường, trình phát sẽ tải trước ba phân đoạn trước khi bắt đầu phát video.

## Bộ chuyển mã (Transcoder)

Bộ chuyển mã là một thành phần thực hiện chuyển đổi trực tiếp dữ liệu video kỹ thuật số để tạo ra luồng đa bitrate, thay đổi thông số video (codec, kích thước, bitrate), hoặc chèn logo vào luồng video.

## Bộ giải mã video (Video codecs)

Bộ giải mã video là công nghệ nén video thô để đóng gói vào một tệp chứa (container), từ đó sử dụng để truyền tải qua một giao thức phát trực tuyến cụ thể.

## Tệp chứa video (Video container)

Tệp chứa (container) là định dạng dùng để đóng gói dữ liệu đã mã hóa thành tệp hoặc luồng video để truyền qua mạng. Các gói dữ liệu âm thanh và video được truyền ở tầng giao vận theo mô hình OSI.

Định dạng container không phụ thuộc vào giao thức truyền tải, nghĩa là bạn có thể đóng gói dữ liệu và phát nó trên máy tính mà không cần truyền qua mạng.

## Giao thức phát trực tuyến (Video streaming protocol)

Giao thức phát trực tuyến là tập hợp các quy tắc trao đổi dữ liệu, lệnh và phản hồi giữa hai bên trong quá trình truyền phát video (máy chủ - máy khách hoặc ngang hàng).

Khi chuẩn bị dữ liệu để truyền tải qua mạng:

1. Dữ liệu video và âm thanh phải được nén.
2. Sau đó, chúng phải được đóng gói vào một container để truyền qua một giao thức cụ thể.