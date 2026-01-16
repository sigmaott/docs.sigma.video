# Tài liệu cài đặt máy chủ VPU
## Cài đặt driver VPU
- Cài đặt các điều kiện tiên quyết
```
sudo apt-get install nasm yasm -y
```
- Tải xuống phiên bản mới nhất của Quadra SDK và giải nén vào thư mục /root/ của máy chủ Linode tăng tốc của bạn .
```
https://docs.netint.com/vpu/quadra/
```
- Cài đặt phần mềm và firmware cần thiết:

  - Điều hướng đến thư mục chứa các tệp đã giải nén và chạy lệnh.

    ```
    cd Quadra_V5.5.0/
    bash quadra_quick_installer.sh
    ```

  - Nhập ' **Y** ' và nhấn Enter để xác nhận rằng bạn muốn sử dụng các gói phát hành được liệt kê.

  - Hãy hoàn thành mỗi câu hỏi sau bằng cách nhập số tương ứng và nhấn Enter:

    - Thiết lập các biến môi trường ( **1** )
    - Cài đặt các thư viện phần mềm cần thiết cho hệ điều hành của bạn ( **3** )
    - Cài đặt công cụ NVMe CLI ( **4** )
      (Bạn có thể nhận được thông báo lỗi nếu đang sử dụng phiên bản Ubuntu mới hơn. Nếu vậy, hãy bỏ qua và tiếp tục bước tiếp theo.)
    - Cài đặt Libxcoder ( **5** )
    - Cài đặt phiên bản FFmpeg bạn ưa thích ( **7-15** )

- Quit và nhấn enter để thoát khỏi menu kịch bản

- Lệnh chạy test xem đã hoạt động chưa

  ```
  ni_rsrc_mon
  ```

  

- Kết quả mong muốn

  ```
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
  Num scalers: 1
  INDEX LOAD MODEL_LOAD INST MEM  SHARE_MEM P2P_MEM DEVICE        
  0     0    0          0    0    0         0       /dev/nvme0n1  
  Num AIs: 1
  INDEX LOAD MODEL_LOAD INST MEM  SHARE_MEM P2P_MEM DEVICE        
  0     0    0          0    0    0         0       /dev/nvme0n1
  ```


- Reboot server để hoàn toàn nhận driver

  ``` 
  reboot
  ```

  

## Cài đặt sigma-media-server

```
wget https://repo.sigma.video/debian/sigma-media-server.list -O /etc/apt/sources.list.d/sigma-media-server.list
apt-get update
apt install sigma-media-server
systemctl start sigma-media-server
systemctl enable sigma-media-server
```

- Đăng ký máy

  ```
  https://ip:8019
  ```

  
## Thêm đầu vào RTMP cục bộ

- Download file mp4 về máy nội bộ

  ```
  Ex:
  /root/rtmp/input.mp4
  ```

  

- Tạo input rtmp

  ```
  cd rtmp/
  ```

  ```
  ffmpeg -stream_loop -1 -re -i input.mp4 \
    -c:v h264_ni_quadra_enc \
    -pix_fmt yuv420p \
    -g 60 -keyint_min 60 -sc_threshold 0 \
    -bf 0 \
    -c:a aac -b:a 128k \
    -f flv rtmp://localhost:1935/live/12345
  
  ```

  
