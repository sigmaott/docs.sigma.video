---
id: sigma-media-server-getting-started-installation-ubuntu
title: Cài đặt:Ubuntu
order: 3
---

# Cài đặt Sigma Media Server trên Ubuntu

Đầu tiên, chúng ta sẽ cài đặt Sigma Media Server. Đây là một ứng dụng phần mềm mạnh mẽ cho phép bạn truyền phát video và âm thanh qua mạng.

## Tải file cấu hình kho phần mềm

Để cài đặt Sigma Media Server, trước tiên hãy thêm kho phần mềm chính thức vào hệ thống của bạn

```bash
wget https://repo.sigma.video/debian/sigma-media-server.list -O /etc/apt/sources.list.d/sigma-media-server.list
```

**Lưu ý:** Đảm bảo máy chủ của bạn đã được kết nối Internet.

## Cập nhật danh sách gói

Sau khi thêm kho phần mềm, hãy cập nhật danh sách gói:

```bash
sudo apt-get update
```

## Cài đặt Sigma Media Server

Cài đặt Sigma Media Server

Bạn có thể cài đặt phiên bản mới nhất hoặc một phiên bản cụ thể:

### Cài đặt phiên bản mới nhất

```bash
sudo apt-get install sigma-media-server
```

### Cài đặt một phiên bản cụ thể

1. Kiểm tra các phiên bản có sẵn:

```bash
  apt list -a sigma-media-server
```

2. Cài đặt phiên bản mong muốn (ví dụ: `3.0.8`):

```bash
  sudo apt-get install sigma-media-server=3.0.8
```

## Khởi động dịch vụ

Sau khi cài đặt thành công, bạn cần khởi động dịch vụ Sigma Media Server:

```bash
sudo systemctl start sigma-media-server
```

## Đăng ký Máy chủ

Cuối cùng, bạn cần đăng ký máy chủ của mình với Sigma. Bạn có thể làm điều này bằng cách làm theo hướng dẫn tại đây [đăng ký](../05-register.md)

Chúc bạn may mắn trong việc cài đặt và sử dụng Sigma Media Server! Nếu bạn gặp bất kỳ vấn đề gì, đừng ngần ngại liên hệ với chúng tôi để được hỗ trợ. Chúng tôi luôn sẵn lòng giúp bạn.
