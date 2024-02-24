---
title: Install:Ubuntu
order: 3
---

# Install Sigma Media Server on Ubuntu

First, we will install Sigma Media Server. It is a powerful software application that allows you to stream video and audio over a network.

Example installation of version **sigma media server** **3.0.8** on ubuntu

```bash
wget https://minio.sigma.video:9000/debian/sigma-server-live_3.0.8-2_amd64.deb
chmod +x sigma-server-live_3.0.8-2_amd64.deb
sudo apt-get install ./sigma-server-live_3.0.8-2_amd64.deb
```

## Start Service

After a successful installation, you need to start the Sigma Media Server service:

```bash
sudo systemctl start sigma-server.service
```

## Register Server

Finally, you need to register your server with Sigma. You can do this by following the instructions here [register](./04-register.md)

Good luck in installing and using Sigma Media Server! If you face any problems, do not hesitate to contact us to get assistance. We're always happy to help you.
