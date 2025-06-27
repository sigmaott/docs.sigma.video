---
title: Cài đặt:Centos
order: 2
---

# Cách cài đặt Sigma Media Server trên CentOS

Đầu tiên, chúng ta sẽ cài đặt Sigma Media Server. Đây là một ứng dụng phần mềm mạnh mẽ cho phép bạn truyền phát video và âm thanh qua mạng.

```bash
sudo wget https://repo.sigma.video/centos/sigma-media-server.repo -O /etc/yum.repos.d/media-server.repo 
# hoặc sử dụng curl : curl -s https://repo.sigma.video/centos/sigma-transcoder.repo | sudo tee /etc/yum.repos.d/sigma-transcoder.repo >/dev/null
yum install sigma-media-server
```

## Khởi động dịch vụ

Sau khi cài đặt thành công, bạn cần khởi động dịch vụ Sigma Media Server:

```bash
sudo systemctl start sigma-media-server
```

## Đăng ký máy chủ

Cuối cùng, bạn cần đăng ký máy chủ của mình với Sigma. Bạn có thể làm điều này bằng cách làm theo hướng dẫn tại đây [đăng ký](../05-register.md)

Chúc bạn may mắn trong việc cài đặt và sử dụng Sigma Media Server! Nếu bạn gặp bất kỳ vấn đề gì, đừng ngần ngại liên hệ với chúng tôi để được hỗ trợ. Chúng tôi luôn sẵn lòng giúp bạn.
