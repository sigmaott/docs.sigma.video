---
title: Install:Centos
order: 2
---

# How to Install Sigma Media Server on CentOS

First, we will install Sigma Media Server. It is a powerful software application that allows you to stream video and audio over a network.

```bash
sudo wget https://repo.sigma.video/centos/sigma-media-server.repo -O /etc/yum.repos.d/media-server.repo 
# or use curl : curl -s https://repo.sigma.video/centos/sigma-transcoder.repo | sudo tee /etc/yum.repos.d/sigma-transcoder.repo >/dev/null
yum install sigma-media-server
```

## Start the service

After a successful installation, you need to start the Sigma Media Server service:

```bash
sudo systemctl start sigma-media-server
```

## Server registration

Finally, you need to register your server with Sigma. You can do this by following the instructions here [register](./04-register.md)

Good luck in installing and using Sigma Media Server! If you face any problems, do not hesitate to contact us to get assistance. We're always happy to help you.
