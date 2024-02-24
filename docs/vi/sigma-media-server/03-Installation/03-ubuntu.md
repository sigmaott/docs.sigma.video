---
title: Install:Ubuntu
order: 3
---


# Install Sigma Media Server on Ubuntu

Đầu tiên, chúng ta sẽ cài đặt Sigma Media Server. Đây là một ứng dụng phần mềm mạnh mẽ cho phép bạn phát trực tuyến video và âm thanh qua mạng.

Ví dụ cài đặt phiên bản **sigma media server** **3.0.8** trên ubuntu

```bash
wget https://minio.sigma.video:9000/debian/sigma-server-live_3.0.8-2_amd64.deb
chmod +x sigma-server-live_3.0.8-2_amd64.deb
sudo apt-get install ./sigma-server-live_3.0.8-2_amd64.deb
```

## Start Service

Sau khi cài đặt thành công, bạn cần khởi động dịch vụ Sigma Media Server:

```bash
sudo systemctl start sigma-media-server
```

## Register Server

Cuối cùng, bạn cần đăng kí máy chủ của mình với Sigma. Bạn có thể thực hiện việc này bằng cách theo hướng dẫn tại đây [register](./04-register.md)

Chúc bạn thành công trong việc cài đặt và sử dụng Sigma Media Server! Nếu bạn gặp bất kỳ vấn đề nào, đừng ngần ngại liên hệ với chúng tôi để nhận được sự hỗ trợ. Chúng tôi luôn sẵn lòng giúp đỡ bạn.