---
title: Server Management
order: 6
---

## Server Management

The Sigma Streaming system provides a friendly, convenient interface for users to manage server lists. In the siderbar, click **Server** to access server management by type.

Each type of server will be managed on a separate interface. In addition, the system also provides users with an interface to manage the entire license of the application and the Performance Monitoring section of the entire server.

### Server management organization structure

![Structure Manage Server](.. /image/getstarted/structure-manage-server.png)

The organizational structure of server management is divided into sections and broken down as follows:

1. Sigma Live Server: Manage types of Live Server machines, including
   1. Live Server machine type (regular version)
   2. Live Server Community machine type
   3. Cluster Server (cluster)
2. Sigma VOD Server: Manage types of VOD Server machines, including
   1. Type of VOD Server (normal version)
   2. VOD Server Community machine type (community edition)
   3. Cluster Server (cluster)
3. Component Server: Manage machine types Component Server
   1. List of machines: including 5 types of machines
      1. Transcoder Live
      2. Transcoder VOD
      3. Packager Live
      4. Packager Start Over
      5. Packager Catchup
   2. Cluster Server (cluster)
4. Monitor: Monitor the performance of the machine in the Application
5. License: Manage licenses in the App

### Actions with the machine

With server management, users have the ability to perform actions on each server with actions such as:

- Add License: The action is allowed for new machines successfully installed on the system that have not been activated, the user can perform this action to assign a license to the machine so that the machine can handle the job. Steps to follow

  [Add License]:

- Config Route: An action that allows users to configure a route through the system to easily route the machine to support the process of coordinating the Job processor

- Drain Job: The action that allows the system to push out all the jobs being processed by that machine

- Pause/ Resume: The action that allows the system to Pause/ Restore machine operability

- Delete: An action that allows users to perform a wipe in a DEAD/FREEZE state

For Cluster Server, once the user has created the cluster, the following actions will be allowed:

- Edit Cluster: An action that allows users to edit the configuration / change machine components in the Cluster
- View Logs: Actions that allow users to view cluster activity logs
- Delete: An action that allows the user to delete the cluster
