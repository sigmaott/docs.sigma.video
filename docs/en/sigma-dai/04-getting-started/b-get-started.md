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

For example, 
