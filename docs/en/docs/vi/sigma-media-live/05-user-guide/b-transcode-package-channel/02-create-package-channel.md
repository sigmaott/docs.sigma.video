---
title: 'Create a packaging channel'
order: 2
---

# {{ $frontmatter.title }}


The packaging channel performs the preparation and protection of your video to distribute through the Internet via multimedia content data transmission formats via the http (HTTP Adaptive Stream) protocol such as HLS, DASH.

To create a manual packaging channel, we do basic channel creation. Please choose to follow instructions.

- **Manual** => **Package** => **Next**

The interface view for the configuration of the packaging channel is now as follows:

![Create the manual package channel](../../images/um-create-channel/um-create-package-channel-1.png)



In which the right bar menu will have the following items:

1. **Config**: Basic configuration of the channel
2. **Inputs**: Configure the input stream
3. **Profiles**: List of Profile uses
4. **Targets**: Configuration list of desired outputs (HLS/DASH ... )



::: tip
* For the system packaging channel automatically configured **Profile** corresponding to **Input** is added. Vì vậy bạn chỉ việc thêm các giá trị **Input** các giá trị **Profile** sẽ được tự động thêm vào và bạn không có quyền thay đổi các giá trị này
:::

## B1. General Configuration

In the basic packaging channel configuration that is divided into the following items:
- **Information**:
    - **Name**: The name of the channel used to differentiate and search the channel on the channel list
    - **Description**: Channel description
    - **Tags**: List of tags
- **Name modifier**: The replacement of the channel must be unique across the entire system, serving the query of the manifest file briefly.

::: tip
Example: if the replacement name is **VTV1**: link access the manifest will be: *http://origin/com/manifest/VTV1/manifest_name*
:::

- **Options**: Advanced configuration of channel

## B2. Configure the channel input

Select the Plus button to add input to the channel. Danh sách đầu vào cho kênh Package đã liệt kê sẵn sẽ hiện ra. Please select input for the desired channel

Với mỗi phần tử trong input list của đầu vào hệ thống sẽ tạo tự động 1 profile tương ứng, với tên thay thế được cài đặt khi tạo đầu vào

::: info
This alternate name helps the system define the desired profile name for the ABR file. For example with **1080p** you should name a replacement profile of **1080p**, this alternate name will have in the path of the manifest file with a profile of
:::


## B3. Configure the channel's packaging output

Chọn phím `Cộng` ở mục `Target` để thêm 1 đầu ra mong muốn. Popup displays the desired output. The system supports output as follows:

* **HLS**: Apple Http Live Streaming
* **DASH**: DASH
* **UDP**: multicast or unicast mpeg transport stream
* **RTMP**: Realtime Message Protocol

After you've created a desired output. The configuration of the output will appear as follows. In it:

* **Data**: Basic configuration of output
    * **Name**: Name of the output
    * **Replaced name**: The name adds to the end of the source manifest file, which must be unique to different outputs of the same HLS or DASH, which serves the creation of a single path for HLS or DASH manifest files, which should be started with "_" or "-". Possible to be empty "" if you want to keep the source manifest file name
        * For example: If you are empty, the HLS Source manifest file will be named **master.m3u8** with Dash as **master.mpd**
        * Example: If you are to be "**-tv360**, the original HLS manifest file will be **master-tv360.m3u8** with Dash as **master.mpd**
    * **Format**: Name of the output type
    * **Description**: First description
* **Manifest**: Configuration file **manifest** and **segment**
    * **Container**: file format **segment**. The value is **mpeg-ts** or **fmp4**. The default is **mpeg-ts**
    * **TS**: The length of 1 file **segment**. The default is six seconds.
    * **Counter**: Number of Segment Files filed in file **manifest**
    * **Time**: shortcut tag: **Progreaming-date-time**  used with the output of HLS
* **DRM**: DRM coding configuration
    * **Enable**: DRM shortcut configuration
    * **Key provider**: Method of using key encryption, static or taken from a key encryption key server
        * **static**: key encryption key
        * **sigma-drm**: Sigma Drm coding system
        * **Sigma-drm-v1**: Sigma DRM V1 coding system
        * **Sigma-multi-drm**: Multi-DRM coding system supporting Widevine, PlayReady, FairPlay deployed by Sigma drm
        * **drmtoday**: Multi-DRM coding system supporting Widevine, PlayReady, FairPlay deployed by castlab
    * Thiết lập `DRM Credential` nếu có đối với `Sigma Multi DRM` `DRMtoday`

* **Low Latency**: Low latency television configuration
* **Catchup**: Configuration of Catchup-timeshift

    * **Storage**: Enable catchup-timeshift storage mode
    * **Cache Time**: Configuration time configuration is calculated by now.
    * **Trickplay**: Turn off Trickplay mode with catchup

* **Startover**: Bật tắt chế độ lưu trữ `Startover`

* **Preset**: Configuration of the profile packed into this output


### Configure configuration **preset** with output:

1. chọn ![select profile](../../images/um-create-channel/um-select-profile.png){ width=100px } để lựa chọn các profile sẽ được đóng gói trong đầu ra này. The profile list will be shown
2. integrate into squares to select **profile** you want to add to output => pressing **submit** to complete the operation
3. The list of selected profiles will appear, you can manipulate the desired tasks for this list as added, delete, edit, and edit.


## B4. `Submit` Lưu kênh

Sau khi lưu kênh, hệ thống sẽ tự động `start` kênh và các đầu ra của kênh tương ứng với từng target

