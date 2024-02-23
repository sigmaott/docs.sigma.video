---
title: Get started with SSAI
order: 2
---

# Get started with SSAI

## Set up ad insert endpoints

To set up an ad insert endpoint you need to prepare the following tasks:

- Prepare your HLS or DASH content stream.
- Prepare an Ads Request path.
- Create an SSAI ad insert endpoint configuration.
- Use the generated SSAI path to configure ad insert endpoints on the application.
- Collect, monitor the necessary parameters.

When you're done, you'll be able to submit a replay request to SSAI for personalized ad content in your stream.

## Prepare

Before you start, you need to prepare the following tasks:

- Have an account that accesses the management system of **Sigma Streaming Platform**\* 'https\://portal.sigmaott.com'
- Accounts with authorized app access with SSAI.

## Step 1: Access the Sigma Dynamic Ads Insert system

To use Sigma Dynamic Ads Insert (DAI), you need an account and permission to access, view, and perform allowed actions.

1. Visit the 'https\://portal.sigmaott.com/app' link
2. Display the App List, **select the app** to access.
3. Display by default to the **App Overview.**
4. In the sidebar, select the DAI product.
5. Display the default page in the Customer Dashboard.

## Step 2: Prepare the flow

### Prepare the HLS stream

The HLS manifest file must meet the following requirements:

- Manifest files must be accessible on the internet
- The manifest must have an 'EXT-X-VERSION' of '3' or higher.

For live content, the HLS manifest must contain markers to describe the ad broadcast schedule. This is optional for VOD content, a VMAP timer can be used instead.

The HLS manifest must have ad slots marked with the following tags:

- '#EXT-X-CUE-OUT' / '#EXT-X-CUE-IN' (more common) with the duration as shown in the following example:

```
#EXT-X-CUE-OUT:60.00
#EXT-X-CUE-IN
```

How you configure ad markers in your manifest affects whether ads are inserted into the stream or replaced with other segments in the stream

The HLS Manifest Master must comply with the definition of HLS. In particular, #EXT-X-STREAM-INF must include fields **RESOLUTION**, **BANDWIDTH** and **CODEC**.

### Prepare your DASH stream

The DASH manifest (mpd) must meet the following requirements:

- The 'DASH manifest' must be accessible on the internet.

- The 'DASH manifest' must be live or video on demand (VOD).

- The following example shows an event specified as an ad broadcast schedule using the 'EventStream' marker. The length for this ad is the length of the event.

```
   <Period start="PT444806.040S" id="123586" duration="PT15.000S">
     <EventStream timescale="90000" schemeIdUri="urn:scte:scte35:2013:xml">
       <Event duration="1350000">
         <scte35:SpliceInfoSection protocolVersion="0" ptsAdjustment="180832" tier="4095">
           <scte35:SpliceInsert spliceEventId="4026531855" spliceEventCancelIndicator="false" outOfNetworkIndicator="true" spliceImmediateFlag="false" uniqueProgramId="1" availNum="1" availsExpected="1">
             <scte35:Program><scte35:SpliceTime ptsTime="5672624400"/></scte35:Program>
             <scte35:BreakDuration autoReturn="true" duration="1350000"/>
           </scte35:SpliceInsert>
         </scte35:SpliceInfoSection>
       </Sự kiện>
     </EventStream>
     <AdaptationSet mimeType="video/mp4"
         ...
     </AdaptationSet>
   </Period>
```

- Ad avails need to have 'AdaptationSet' and 'Representation' configurations that coincide with the original content stream. 'Sigma Dynamic Ads Insert' uses these configurations to be able to transcode the right ad streams.

## Step 3: (Optional) Prepare to configure the URL parameters of the ad server (Ads Request) and query parameters (parameter)

The parameter, often abbreviated as "Param," is a value chosen for each specific case and related to other variables that can be expressed, describing important characteristics used to define a particular problem.

To configure SSAI to pass data from the player to ADS via the ADS template URL, you need to specify variables 'player_params' using '\<query_parameter_name>.\`

For example, if the player sends a query parameter named 'user_id' in its request to SSAI, you can specify 'user_id' in the ADS request by including '[play_params.user_id]' in the ADS URL configuration.

### When to configure param?

In order to be able to transmit information such as **age** and **gender** of the user, we need to identify this information when calling advertisements or when requesting information from the origin.

Example:

CDN content segmentation to CDN ad segmentation.

In case the ad link runs on the CDN in order, if CDN 1 does not work, CDN 2 will replace it.

### Kind

There are two types of parameters (params):

- **play_params**: Is the information that the player sends through the playback path, and the server side will replace based on the parameters that the player transmits.

- **session param**: Available parameters include:

  - 'session.ip' : The IP address of the user's machine.
  - 'session.user_agent': The User Agent of the user's machine.
  - 'stce.duration' : Considered as the access time available, marking the duration available.

**Example URL playback using play_params**

```
http://dai.sigmaott.com/manifest/manipulation/master/xxx/master.m3u8?play_params.devideId=abc&play_params.gender=male

```

Of which 2 **play_params** are transmitted:

- **play_params.devideId**: abc
- **play_params.gender**: male

The client will perform a playback with the above path and the SSAI server will record information about **parameters**

You can use the **parameters** template parameter for your vast ads server path like this example:

```
http://ads.com/tags.xml?gender=[play_params.gender]&did=[play_params.devideId]
```

The SSAI system replaces the above parameters with corresponding values transmitted from the client. We get the following value

```
http://ads.com/tags.xml?gender=male&did=abc
```

Thus, the parameter information will be transmitted from the client to the ads server through the request to retrieve ads.

## Step 4: Create a new SSAI ad insert endpoint configuration

To set up SSAI and connect information between the origin server and the ad, you need to create an ad insert endpoint to help the ad perform its task while controlling the online content to each customer.

### To create a new ad insert endpoint

1. In the ad insert endpoint list, click the button **Create ad insert endpoint**
2. Pop-up display system Create ad insert endpoint.
3. The user enters the required information.
4. Make a new creation.

Configuration example:

- Video Content Source: 'https\://origin.com/manifest'
  - With the above configuration, we can use it for multiple HLS and DASH streams with ad markup initiated by the above prefix such as:
    - 'https\://origin.com/manifest/channel1/master.m3u8'
    - 'https\://origin.com/manifest/channel2/master.m3u8'

- Ad server: 'https\://ads.sdp.com/vast-tag'

- CDN content segmentation: 'https\://example.cdn.net'
  - The segment content files will be replaced by the cdn configured above.

When you're done, you'll be able to open a browser, enter the playback URL for your ad insert endpoint, and view the stream of the ad insert endpoint that contains the ad.

## Step 5: Check the configuration

Users can view a list of ads displayed on ad insert endpoints, with information related to the ads. Test the stream using the URL in the appropriate format for your streaming protocol.

### To view ad insert endpoint details

1. At the ad insert endpoint list interface, display the tooltip **see details** when hover the mouse, users click on the name ad insert endpoint \*\*\* to view detailed information.
2. The system displays detailed information ad insert endpoint.
3. Users view the ad insert endpoint details and can use the URLs to run the desired ad insert endpoint.

_After the user configures the ad insert endpoint, SSAI returns Playback Endpoint Prefixes including:_

1. For example, link Session initalization playback prefix. (**Use when using Client Side Tracking**)

```
http://dai.sigmaott.com/manifest/manipulation/session/0f18d489-6b27-4832-9849-ff9b9e7c35f0
```

2. HLS playback prefix example:

```
http://dai.sigmaott.com/manifest/manipulation/master/0f18d489-6b27-4832-9849-ff9b9e7c35f0
```

3. DASH playback prefix example:

```
http://dai.sigmaott.com/manifest/manipulation/dash/0f18d489-6b27-4832-9849-ff9b9e7c35f0
```

**Where**:

- 'http\://dai.sigmaott.com/manifest/manipulation/' is **playback-endpoint** path to be able to call and run the thread through **Sigma DAI**
- '0f18d489-6b27-4832-9849-ff9b9e7c35f0': Equivalent to the unique identifier of the ad insert endpoint configuration.

**Pair with the actual running stream**

From the above configuration, you can pair with content streams with ads as follows:

- For example, you have 2 HLS and DASH streams from the content source as follows:
  - HLS: 'https\://origin.com/manifest/channel1/master.m3u8'
  - DASH: 'https\://origin.com/manifest/channel1/master.mpd'
- In an ad insert endpoint configuration, you configure the content source as 'https\://origin.com/manifest'
- We will have 2 threads that can be concatenated into the prefix above as follows:
  - HLS: '/channel1/master.m3u8'
  - DASH: '/channel1/master.mpd'
- Grafting into the above prefix configurations we get:
  - HLS:
    `http://dai.sigmaott.com/manifest/manipulation/master/0f18d489-6b27-4832-9849-ff9b9e7c35f0/channel1/master.m3u8`

  - DASH:
    `http://dai.sigmaott.com/manifest/manipulation/dash/0f18d489-6b27-4832-9849-ff9b9e7c35f0/channel1/master.mpd`

## Step 6: Send the required information to the SSAI server

Let's say your sample ADS URL is as follows:

```
https://my.ads.com/ad?output=vast&content_id=12345678&playerSession=[session.id]&cust_params=[play_params.cust_params]
```

Then, specify [**play_params.cust_params**] in the manifest file's request by preserving the key-value pair with the ad.

Example: After **step 5** we have the following HLS and DASH stream URLs:

```
http://dai.sigmaott.com/manifest/manipulation/master/0f18d489-6b27-4832-9849-ff9b9e7c35f0/channel1/master.m3u8?play_params.cust_params=viewerinfo
```

```
http://dai.sigmaott.com/manifest/manipulation/master/0f18d489-6b27-4832-9849-ff9b9e7c35f0/channel1/master.mpd?play_params.cust_params=viewerinfo
```

When the Sigma Dynamic Ads Insert (SDAI) system receives a request from a specific URL, it determines the player's variables based on the information in the URL. When there is a request to insert an ad, a variation of the URL is generated based on these variables as follows:

```
https://my.ads.com/ad?output=vast&content_id=12345678&playerSession=<filled_in_session_id>&cust_params=viewerinfo
```

For more information on how to configure key-value pairs to pass to the Ad Server,

## Step 7: Clean up (Remove ad insert endpoint)

Once you've created and launched an ad insert endpoint, and then, to decommission or close an unnecessary ad insertion connector, you need to remove the ad insert endpoint as follows:

1. On the ad insert endpoint list view, select the ad insertion connection point that you want to delete, and then click the **Delete.** icon
2. A confirmation dialog box will appear. Select the **Confirm** button to continue.
3. The system will delete the ad insert endpoint and you will return to the Ad insert endpoint list interface after completing the deletion process.
