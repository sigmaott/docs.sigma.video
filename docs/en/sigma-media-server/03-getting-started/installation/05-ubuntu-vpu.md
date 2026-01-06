---
id: sigma-media-server-getting-started-installation-ubuntu-vpu
title: Installation: Ubuntu with VPU
order: 5
---

# Installing Sigma Media Server on Ubuntu with Netint VPU

This document provides detailed instructions for installing Sigma Media Server on an Ubuntu server equipped with a Netint Video Processing Unit (VPU).

## 1. Install VPU Driver

Before installing Sigma Media Server, you need to install the drivers and supporting software for the Netint VPU.

### 1.1. Install Prerequisites

Install the necessary `nasm` and `yasm` packages:

```bash
sudo apt-get install nasm yasm -y
```

### 1.2. Download and Install Quadra SDK

1.  Download the latest version of the Quadra SDK from the Netint documentation and extract it to the `/root/` directory of your server.
    
    Reference link: [https://docs.netint.com/vpu/quadra/](https://docs.netint.com/vpu/quadra/)

2.  Navigate to the directory containing the extracted files (e.g., `Quadra_V5.5.0`) and run the installer script:

    ```bash
    cd Quadra_V5.5.0/
    bash quadra_quick_installer.sh
    ```

3.  During the installation process, perform the following steps:
    *   Type **`Y`** and press **Enter** to confirm using the listed release packages.
    *   Complete the installation questions by entering the corresponding number and pressing **Enter**:
        1.  Set up environment variables: Enter **`1`**.
        2.  Install required software libraries for your OS: Enter **`3`**.
        3.  Install NVMe CLI tool: Enter **`4`**.
            *(Note: If you encounter an error message on newer Ubuntu versions, skip this and proceed to the next step).*
        4.  Install Libxcoder: Enter **`5`**.
        5.  Install your preferred FFmpeg version: Enter **`7`** to **`15`** (depending on version).

4.  Once completed, select **Quit** and press **Enter** to exit the script menu.

### 1.3. Verify Driver Installation

Run the following command to check if the system has recognized the VPU device:

```bash
ni_rsrc_mon
```

**Expected Output:**
You should see information about the devices (decoders, encoders, scalers, AIs) similar to the following:

```text
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
...
```

### 1.4. Reboot Server

Reboot the server to fully apply the drivers:

```bash
reboot
```

## 2. Install Sigma Media Server

After successfully installing the VPU driver, proceed to install Sigma Media Server.

### 2.1. Add Repository and Install

1.  Add the `sigma-media-server` source to the `apt` source list:

    ```bash
    wget https://repo.sigma.video/debian/sigma-media-server.list -O /etc/apt/sources.list.d/sigma-media-server.list
    ```

2.  Update the package list and install:

    ```bash
    apt-get update
    apt install sigma-media-server
    ```

3.  Start and enable the service:

    ```bash
    systemctl start sigma-media-server
    systemctl enable sigma-media-server
    ```

### 2.2. Register Server

Access the following address in your browser to register the server:

```
https://<SERVER_IP>:8019
```

Replace `<SERVER_IP>` with the actual IP address of your server.

## 3. Verify Operation (Optional)

You can test the system's processing capability by creating a local RTMP stream using hardware encoding.

### 3.1. Prepare Input File

Download a sample video file (mp4) to the server, for example at `/root/rtmp/input.mp4`.

### 3.2. Create RTMP Stream

Use the installed `ffmpeg` (which supports VPU) to push the stream:

```bash
cd rtmp/
ffmpeg -stream_loop -1 -re -i input.mp4 \
  -c:v h264_ni_quadra_enc \
  -pix_fmt yuv420p \
  -g 60 -keyint_min 60 -sc_threshold 0 \
  -bf 0 \
  -c:a aac -b:a 128k \
  -f flv rtmp://localhost:1935/live/12345
```

The command above uses the `h264_ni_quadra_enc` hardware encoder from Netint. If the command runs successfully without errors, the system is ready to operate with the VPU.
