---
title: Install:Centos
order: 2
---


# Hướng dẫn cài đặt Sigma Media Server trên CentOS

Đầu tiên, chúng ta sẽ cài đặt Sigma Media Server. Đây là một ứng dụng phần mềm mạnh mẽ cho phép bạn phát trực tuyến video và âm thanh qua mạng.

```bash
sudo wget https://repo.sigma.video/centos/sigma-media-server.repo -O /etc/yum.repos.d/media-server.repo 
# or use curl :  curl -s https://repo.sigma.video/centos/sigma-transcoder.repo | sudo tee /etc/yum.repos.d/sigma-transcoder.repo >/dev/null
yum install sigma-media-server
```

## Khởi động dịch vụ

Sau khi cài đặt thành công, bạn cần khởi động dịch vụ Sigma Media Server:

```bash
sudo systemctl start sigma-server
```

## Đăng kí máy chủ

Cuối cùng, bạn cần đăng kí máy chủ của mình với Sigma. Bạn có thể thực hiện việc này bằng cách theo hướng dẫn tại đây [register](./04-register.md)

Chúc bạn thành công trong việc cài đặt và sử dụng Sigma Media Server! Nếu bạn gặp bất kỳ vấn đề nào, đừng ngần ngại liên hệ với chúng tôi để nhận được sự hỗ trợ. Chúng tôi luôn sẵn lòng giúp đỡ bạn.