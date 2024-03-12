---
title: Sigma Live Server
order: 2
---

With the Sigma Live Server type, the type of machine that helps handle the Live channel stream. Users can create and configure with three types of machines:

[TEST]

## Máy Sigma Live Server:

Fully functional version machine, users have the ability to use with all the features provided by us with this type of machine.

Actions users can perform include:

### 1. Add Server

Users can add new machines, following these steps:

1. At the Sigma Live machine list screen, click **Add Server**

   ![add sever](/images/media-server/user-guide/add-server-1.png)

2. Perform to get the token to install the machine

   [Get token](/en/sigma-media-server/03-getting-started/04-install-new-machine#lay-code-token-to-implement-install-machine)

3. Server settings

   [Install Server](../03-getting-started/04-install-new-machine#implement-set-machine)

***

### 2. Drain Job

The function gives the user the ability to perform the **Drain Job** action, when the machine is asked to perform **Drain Job** the machine will eject all the Jobs being processed in that machine. Users can perform Drain Job in simple steps:

1. At the machine management screen, click **Drain Job** at the machine in the operating state (Running/ Paused)

   ! 

2. Click Confirm action execution

   ! 

The system will handle pushing all the jobs being done in the machine out

***

### 3. Pause/ Resume

Allows users to perform Pause/Restore machine operation. The user performs the steps:

1. At the machine management screen, click **Pause** at the machine in Running state

   ! 

2. Click Confirm action execution

   ! 

The machine will return to the "Paused" state

With the machine in the **Pause** state, the user wants to perform **Resume** to restore the operation of the machine. Follow the same steps:

1. At the machine management screen, click **Resume** at the machine in Paused status

   ! 

2. Click Confirm action execution

   ! 

The machine will return to the "Running" state

***

### 4. Config Route

The Config Route feature allows users to configure URI addresses so that the system can route and connect to Ingest and Origin addresses.

The system provides an interface that allows users to configure routing, including information:

- Ingest Configuration: Users can configure RTMP Public URI, SRT Public URI, Web RTC Public URI addresses
- Origin Configuration: Users can configure the HTTP Public URI address

To implement the Config Route, the user performs the following steps:

1. At the server list screen, click the **Config Route** action
   ! 

2. Configure the required information into the configuration form
   ! 

***

### 5. Add license

When the installation of the machine is successful, the user needs to assign a license to the machine to activate the operation.

With adding licenses users can do it in 2 ways:

##### Method 1: Go to Manage licenses

Perform the manipulations:

1. Click "Add license".

! 

2. Select the license type (Note: The activation usage license for the machine must be of the same type as the machine)
   ! 

3. Check the license information
   ! 

4. Make payment of the first bill of the license
   ! 

   ::: warning

   The license is usable when paid in advance.

5. Payment confirmation

6. System successfully billed license will be available

7. Click the "Use" action
   ! 

8. Select the machine to activate the operation
   ! 

9. Confirm license usage
   ! 

The license has now been successfully assigned to the machine, the machine is ready to receive jobs for processing.
:::Tip
If you already have a license in an "Available" status, you can perform "Use" the license immediately (Done from step 7).

##### Method 2: Access the Server Management section

Users can perform "Add License" directly to the server by following the steps:

1. For newly installed machines that have not been assigned a license, click the "Add License" action
   ! 

2. Users can do:

   ! 

   - **Select available license**: In case the application already has a license of the same type as the machine in the
