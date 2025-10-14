---
id: sigma-media-server-getting-started-installation-ubuntu
title: Install:Ubuntu
order: 3
---

# Install Sigma Media Server on Ubuntu

First, we will install Sigma Media Server. It is a powerful software application that allows you to stream video and audio over a network.

## Download the repository configuration file

To install Sigma Media Server, first add the official repository to your system

```bash
wget https://repo.sigma.video/debian/sigma-media-server.list -O /etc/apt/sources.list.d/sigma-media-server.list
```

**Note:** Make sure your server is connected to the Internet.

## Update package list

After adding the repository, update the package list:

```bash
sudo apt-get update
```

## Install Sigma Media Server

Install Sigma Media Server

You can install the latest version or a specific version:

### Install the latest version

```bash
sudo apt-get install sigma-media-server
```

### Install a specific version

1. Check the available versions:
```bash
  apt list -a sigma-media-server
```
2. Install the desired version (for example: `3.0.8`):
```bash
  sudo apt-get install sigma-media-server=3.0.8
 ```

## Start Service

After a successful installation, you need to start the Sigma Media Server service:

```bash
sudo systemctl start sigma-media-server
```

## Register Server

Finally, you need to register your server with Sigma. You can do this by following the instructions here [register](./04-register.md)

Good luck in installing and using Sigma Media Server! If you face any problems, do not hesitate to contact us to get assistance. We're always happy to help you.
