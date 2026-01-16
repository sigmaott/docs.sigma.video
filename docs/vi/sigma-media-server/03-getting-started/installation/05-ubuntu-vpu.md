---
id: sigma-media-server-getting-started-installation-ubuntu-vpu
title: Cài đặt Ubuntu với VPU
order: 5
---

# Hướng dẫn Cài đặt Sigma Media Server trên Ubuntu với VPU Netint

Tài liệu này hướng dẫn chi tiết các bước cài đặt Sigma Media Server trên máy chủ Ubuntu được trang bị card tăng tốc xử lý video (VPU) của Netint.

## 1. Cài đặt Driver VPU

Trước khi cài đặt Sigma Media Server, bạn cần cài đặt driver và các phần mềm hỗ trợ cho VPU Netint.

### 1.1. Cài đặt các điều kiện tiên quyết

Cài đặt các gói `nasm` và `yasm` cần thiết:

```bash
sudo apt-get install nasm yasm -y
```

### 1.2. Tải xuống và Cài đặt Quadra SDK

1.  Tải xuống phiên bản mới nhất của Quadra SDK từ trang tài liệu của Netint và giải nén vào thư mục `/root/` của máy chủ.
    
    Link tài liệu tham khảo: [https://docs.netint.com/vpu/quadra/](https://docs.netint.com/vpu/quadra/)

2.  Điều hướng đến thư mục chứa các tệp đã giải nén (ví dụ: `Quadra_V5.5.0`) và chạy script cài đặt:

    ```bash
    cd Quadra_V5.5.0/
    bash quadra_quick_installer.sh
    ```

3.  Trong quá trình cài đặt, thực hiện các bước sau:
    *   Nhập **`Y`** và nhấn **Enter** để xác nhận sử dụng các gói phát hành được liệt kê.
    *   Hoàn thành các câu hỏi cài đặt bằng cách nhập số tương ứng và nhấn **Enter**:
        1.  Thiết lập các biến môi trường: Nhập **`1`**.
        2.  Cài đặt các thư viện phần mềm cần thiết cho hệ điều hành: Nhập **`3`**.
        3.  Cài đặt công cụ NVMe CLI: Nhập **`4`**.
            *(Lưu ý: Nếu bạn gặp thông báo lỗi trên các phiên bản Ubuntu mới, hãy bỏ qua và tiếp tục bước tiếp theo).*
        4.  Cài đặt Libxcoder: Nhập **`5`**.
        5.  Cài đặt phiên bản FFmpeg bạn ưa thích: Nhập **`7`** đến **`15`** (tùy chọn phiên bản).

4.  Sau khi hoàn tất, chọn **Quit** và nhấn **Enter** để thoát khỏi menu script.

### 1.3. Kiểm tra cài đặt Driver

Chạy lệnh sau để kiểm tra xem hệ thống đã nhận diện được thiết bị VPU chưa:

```bash
ni_rsrc_mon
```

**Kết quả mong muốn:**
Bạn sẽ thấy thông tin về các thiết bị (decoders, encoders, scalers, AIs) tương tự như sau:

```text
**************************************************
1 devices retrieved from current pool at start up
Mon Jan  5 06:52:02 2026 up 00:00:00 v5506sQr2
INDEX    TEMP     POWER    FLAVOR   FR       SN       
0        47       6243mW   -        5206s5r1 Q1UA4FA11CC127-1273 
Num decoders: 1
INDEX LOAD MODEL_LOAD INST MEM  SHARE_MEM P2P_MEM DEVICE        
0     0    0          0    0    0         0       /dev/nvme0n1  
Num encoders: 1
INDEX LOAD MODEL_LOAD INST MEM  SHARE_MEM P2P_MEM DEVICE        
0     0    0          0    0    0         0       /dev/nvme0n1  
...
```

### 1.4. Khởi động lại máy chủ

Khởi động lại máy chủ để driver được áp dụng hoàn toàn:

```bash
reboot
```

## 2. Cài đặt Sigma Media Server

Sau khi đã cài đặt xong driver VPU, tiến hành cài đặt Sigma Media Server.

### 2.1. Thêm kho phần mềm và cài đặt

1.  Thêm nguồn `sigma-media-server` vào danh sách nguồn của `apt`:

    ```bash
    wget https://repo.sigma.video/debian/sigma-media-server.list -O /etc/apt/sources.list.d/sigma-media-server.list
    ```

2.  Cập nhật danh sách gói và cài đặt:

    ```bash
    apt-get update
    apt install sigma-media-server
    ```

3.  Khởi động và kích hoạt dịch vụ:

    ```bash
    systemctl start sigma-media-server
    systemctl enable sigma-media-server
    ```

### 2.2. Đăng ký máy chủ

Truy cập vào địa chỉ sau trên trình duyệt để đăng ký máy chủ:

```
https://<IP_MAY_CHU>:8019
```

Thay `<IP_MAY_CHU>` bằng địa chỉ IP thực của máy chủ của bạn.

## 3. Kiểm tra hoạt động (Tùy chọn)

Bạn có thể kiểm tra khả năng xử lý của hệ thống bằng cách tạo một luồng RTMP cục bộ sử dụng khả năng mã hóa phần cứng.

### 3.1. Chuẩn bị file đầu vào

Tải một file video mẫu (mp4) về máy chủ, ví dụ tại `/root/rtmp/input.mp4`.

### 3.2. Tạo luồng RTMP

Sử dụng `ffmpeg` đã được cài đặt (đã hỗ trợ VPU) để đẩy luồng:

```bash
cd rtmp/
ffmpeg -stream_loop -1 -re -i input.mp4 \
  -c:v h264_ni_quadra_enc \
  -pix_fmt yuv420p \
  -g 60 -keyint_min 60 -sc_threshold 0 \
  -bf 0 \
  -c:a aac -b:a 128k \
  -f flv rtmp://localhost:1935/live/12345
```

Lệnh trên sử dụng bộ mã hóa phần cứng `h264_ni_quadra_enc` của Netint. Nếu lệnh chạy thành công và không có lỗi, hệ thống đã sẵn sàng hoạt động với VPU.
