---
title: Register Server on Marketplace
order: 5
---

# Register Sigma Media Server on Cloud Marketplace

Allow users to easily register existing servers onto the Sigma Server system based on the Web Browser Registrator through Cloud Marketplace platforms such as AWS, Google Cloud, Azure, and DigitalOcean.

The Marketplace provides 2 machine versions for users to register:

- **Sigma Media Server Free**: Free version
- **Sigma Media Server Pro**: Pro version

> [!NOTE]
> **No limit on the number of machines registered**




## Flow

To register a Sigma Media Server on the Marketplace, users need to follow these steps:

![Register-server-flow](/images/media-server/register-server-on-M/flow-register-server.png)

## Pre-condition

- Perform [Sign up](../../sigma-streaming-platform/02-user-management/a-sign-up.md) or [sign in](../../sigma-streaming-platform/02-user-management/c-sign-in.md) to access the management system of the ***Sigma Streaming Platform*** at `https://portal.sigma.video`.
- The user has **completed** the onboarding process: [collected information], [product tour], [checklist onboarding]

## Access the server registration page

User will be redirected from the Marketplace page or can actively access it through the URL link `http://{{VM_IP}}:4000`


with **VM_IP:** The IP address of the Sigma Media Server


The system displays the Server Registration screen with relevant information such as **server information (Server Info), license information (License Info)**, and **server registration information (Registration Info)**.

![dashboard-none-register](/images/media-server/register-server-on-M/registration-none-1.png)

With the following details:

- **Button "Register Server"**: Perform server registration

| **Server Info**      | **Description**                             |
| -------------------- | ------------------------------------------- |
| **Type**             | Type of server - **Sigma Media Server Pro** |
| **Status**           | Server status                               |
| **Operating System** | Operating system of the local machine       |
| **IP Address**       | Server IP address                           |
| **Port**             | Server port                                 |
| **Ram Usage**        | Server RAM Usage                            |
| **CPU Usage**        | Server CPU Usage                            |
| **GPU Usage**        | Server GPU Usage                            |
| **Version**          | Server version                              |

| **License info**   | **Description**                              |
| ------------------ | -------------------------------------------- |
| **License Code**   | License activation code for server usage     |
| **License Status** | Status of the license assigned to the server |

| **Registration Info** | **Description**                  |
| --------------------- | -------------------------------- |
| **Name**              | Server name                      |
| **App ID**            | ID of the registered application |
| **Ingest App**        | Configure the Ingest app         |
| **Origin App**        | Configure the Origin App         |


- **Advanced Settings** includes: **Storage**, **Metrics** and **Log**

| Storage               | **Description**                                              |
| --------------------- | ------------------------------------------------------------ |
| **Data Dir**          | Storage path information for the Live stream                 |
| **Expire (s)**        | Storage time information for the Live stream (seconds)       |
| **Scanning time (s)** | Regular storage drive scan time (seconds) for Live stream    |
| **Catchup Dir**       | Storage path information for the Catchup stream              |
| **Expire (s)**        | Storage time information for the Catchup stream (seconds)    |
| **Scanning time (s)** | Regular storage drive scan time (seconds) for Catchup stream |

| Metrics               | **Description**                                    |
| --------------------- | -------------------------------------------------- |
| **Storage Data Path** | Information about the storage path of data metrics |
| **Retention (day)**   | Storage time for data metrics                      |

| **Log**           | **Description**             |
| ----------------- | --------------------------- |
| **Log Path**      | Server log path information |
| **Expire (day)**  | Log storage time (days)     |
| **Rotation file** | Number of rotation files    |
| **Size (MB)**     | File size                   |

##  Select application

To set up the server, user can select app from the application list (if an application already exists) or [create a new application](../04-getting-started/02-create-application.md) (if no application exists).



**Step 1**: On the [server registration page](#access-the-server-registration-page), click button “**Register server**”

![alt text](/images/media-server/register-server-on-M/triggle-register.png)

The system displays the application list screen.

![The application list screen](/images/media-server/register-server-on-M/select-app-1.png)

**Step 2:**  User proceeds to select an application for server setup

The system **automatically** proceeds to the Set up server.



##  **Set up server**

Configure the options to deploy the server onto the Sigma Media system with the selected application.


**Step 1:** After [selecting the application](#select-application) or [create a new application](../04-getting-started/02-create-application.md), the system navigates to the Set up server screen

![Set-up-server](/images/media-server/register-server-on-M/set-up-server.png)

With the following detailed information:

- **Server Type:** Default registration for Sigma Media Server Pro.
- **Server Name:** Required entry, does not support accented characters, does not contain spaces
- **Network Configuration**: Enter or select field IP addres/ domain name, the system automatically generates data for ***RTMP Public URI, SRT Public URI, Web RTC Public URI, HTTP Public URI***
- **Advanced Settings** includes:
  - **Ingest App:** Default is ***enabled***, allows users to enable/disable Ingest app configuration
  - **Origin App:** Default is ***enabled***, allows users to enable/disable Origin app configuration
  - **Log path:** Allows input or select (click button "Pick"), default value: `/var/log/sigma-machine`
    - **Expire (day)**: default value: 7, min-max value: 1-360
    - **Rotation File**: default value: 10, min-max value: 1-100
    - **Size (MB)**: default value: 50, min-max value: 10-1024
  - **Data Dir:** Allows input or select (click button "Pick"), default value: `/data/transcode`
    - **Expire (s)**: default value: 604 800, min-max value: 10-31104000
    - **Scanning time (s)**: default value: 360, min-max value: 10-31104000
  - **Catchup Dir:** Allows input or select (click button "Pick"), default value: `/data/transcode`
    - **Expire (s)**: default value: 604 800, min-max value: 10-31104000
    - **Scanning time (s)**: default value: 360, min-max value: 10-31104000
  - **Storage Data Path**: Allows input or select (click button "Pick"), default value: `/etc/sigma-machine/apps/victoria-metrics/victoria-metrics-data`
    - **Retention (day)**: default value: 7, min-max value: 1-90
- **Button “Submit”:** Confirm server deployment

**Step 2:** User fills in mandatory information and adjusts server configuration settings.

**Step 3:** After completion, the user click button **“Submit"**. The system displays a confirmation pop-up, asking to confirm server deployment

![Pop-up-confirm](/images/media-server/register-server-on-M/pop-up-cf.png)

**Step 4:** User confirms the deployment by click button "Yes”.

The system displays a notification screen indicating successful deployment.

![sucessful-register](/images/media-server/register-server-on-M/sucessful-register.png)

- **Button “Done”:** The system navigates to the [Dashboard](#view-information-on-the-dashboard) screen with the successfully registered information.

- **Text button “Go to Sigma Portal”:** The system opens the [Server management](#view-server-information-on-the-cms) screen (CMS) with the newly registered application.

## Manage information on the Dashboard 

After successfully deploying the server, users can manage registration information at the Dashboard Web UI.



### View information on the Dashboard

Continuing from step 4 of the [Set up server](#set-up-server), user clicks button **“Done”** or can access via the URL link `http://{{VM_IP}}:4000/`

The system displays the Sigma Registration screen with with the successfully registered information such as **Server Info, License Info, Registration Info.**

![Dashboard-web-ui](/images/media-server/register-server-on-M/dashboard-web-ui.png)

With the following detailed information:

- **Server Info** includes Type, Status, Operating System, IPAddress, Port, Ram Usage, CPU Usage, GPU Usage and Version [(see more details)](#access-the-server-registration-page)

- **License info**  includes License Code and License Status [(see more details)](#access-the-server-registration-page)
- **Registration Info** includes Name, App ID, Ingest App and Origin App [(see more details)](#access-the-server-registration-page)
- **Advanced Settings** includes Storage, Metrics, Log [(see more details)](#access-the-server-registration-page)
- **Button “Edit”**: To perform the action of [updating server configuration](#update-server-configuration).
- **Button “Re-Register Server”**: To re-register the server.
- **Button “App Editor”**: The system opens the Sigma Portal screen with the newly registered application. [(see more details)](#manage-information-on-the-cms)




### Update server configuration

> [!NOTE]
> When performing this action, jobs may experience interruptions or cease operation

**Step 1:** On the Dashboard of successful server registration page, user clicks button **“Edit”**

![triggle-edit](/images/media-server/register-server-on-M/triggle-edit.png)

The system displays editable fields for information modification [(see more details)](#set-up-server)

![Update-information](/images/media-server/register-server-on-M/edit-info.png)

**Step 2:** User input mandatory information.

**Step 3:** After completion, the user clicks button **“Save”**. 

The system saves the new information for the server configuration, displaying the updated information on the screen.




## Manage information on the CMS

After successfully deploying the server, user can manage information related to the newly registered server such as server details, server license, etc

### View server information on the CMS

Continuing from **step 4** of the [Set up server](#set-up-server), user clicks button “Go to Sigma Portal” or clicks button “App Editor” on the [Dashboard](#view-information-on-the-dashboard)

The system displays the Server list screen of the application (CMS) with information about servers registered from the marketplace marked with the following details:

![server-info](/images/media-server/register-server-on-M/server-list.png)

- **Server type:** Pro
- **Server status:** Running



### **View license information on the CMS**

Continuing from **step 4** of the [Set up server](#set-up-server), user clicks button “Go to Sigma Portal” or clicks button “App Editor” on the [Dashboard](#view-information-on-the-dashboard)


The system displays the Server list screen of the application (CMS), choose **License tab**


The system displays the License List screen of the application, with information about servers registered from the marketplace marked with the following details:

![license-info](/images/media-server/register-server-on-M/license-list (2).png>)

- **License type:** Marketplace Server
- **Status:** Used
- **Server use:** corresponding server
- **Expiration date:** unlimited
- **And does not allow performing actions for Marketplace server licenses.**