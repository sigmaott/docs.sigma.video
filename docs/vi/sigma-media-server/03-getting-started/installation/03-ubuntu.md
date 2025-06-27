---
id: sigma-media-server-getting-started-installation-ubuntu
title: Cài đặt:Ubuntu
order: 3
---

# Cài đặt Sigma Media Server trên Ubuntu

Đầu tiên, chúng ta sẽ cài đặt Sigma Media Server. Đây là một ứng dụng phần mềm mạnh mẽ cho phép bạn truyền phát video và âm thanh qua mạng.

Ví dụ cài đặt phiên bản **sigma media server** **3.0.8** trên ubuntu

```bash
wget https://minio.sigma.video:9000/debian/sigma-server-live_3.0.8-2_amd64.deb
chmod +x sigma-server-live_3.0.8-2_amd64.deb
sudo apt-get install ./sigma-server-live_3.0.8-2_amd64.deb
```

## Khởi động Dịch vụ

Sau khi cài đặt thành công, bạn cần khởi động dịch vụ Sigma Media Server:

```bash
sudo systemctl start sigma-media-server
```

## Đăng ký Máy chủ

Cuối cùng, bạn cần đăng ký máy chủ của mình với Sigma. Bạn có thể làm điều này bằng cách làm theo hướng dẫn tại đây [đăng ký](../05-register.md)

Chúc bạn may mắn trong việc cài đặt và sử dụng Sigma Media Server! Nếu bạn gặp bất kỳ vấn đề gì, đừng ngần ngại liên hệ với chúng tôi để được hỗ trợ. Chúng tôi luôn sẵn lòng giúp bạn.
