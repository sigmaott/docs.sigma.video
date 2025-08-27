---
title: install-sigma-ai-plugin
order: 1
---


# Installing Sigma AI Plugin Package on Ubuntu


## 1. Add the Sigma Repository

To install Sigma AI, first add the official repository to your system:

```bash
wget https://repo.sigma.video/debian/sigma-media-server.list -O /etc/apt/sources.list.d/sigma-media-server.list
```

> **Note:** Make sure your server is connected to the Internet.

---


## 2. Update Package List

After adding the repository, update the package list:

```bash
sudo apt-get update
```
---

## 3. Install Sigma AI

You can install the latest version or a specific version:

### Install the latest version

```bash
sudo apt-get install sigma-ai
```

### Install a specific version

1. Check available versions:
  ```bash
  apt list -a sigma-ai
  ```
2. Install the desired version (e.g., `5.2.0-2`):
  ```bash
  sudo apt-get install sigma-ai=5.2.0-2
  ```

---


## 4. Verify Installed Version

Check the installed Sigma AI version:

```bash
dpkg -l | grep sigma-ai
```

> If information about `sigma-ai` appears, the installation was successful. If not, please review the steps above.

