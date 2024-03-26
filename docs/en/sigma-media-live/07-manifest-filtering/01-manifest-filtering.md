---
title: Manifest Filtering
order: 1
---

# Manifest filtering

An Apple HLS filter query might look like this:

- Method: Get

http\://localhost:3000/prefix/master.m3u8?manifestfilter=video_bitrate:0-2147483647|video_codec:H265|audio_language:fr,en,de

The query syntax is listed in the following table.

| Query string component | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| ?                      | A restricted character that marks the beginning of a query.                                                                                                                                                                                                                                                                                                                                                                                                         |                                                         |
| manifestfilter=        | The base query, which is followed by parameters constructed of name and value pairs. For a list of all of the available parameters, see Manifest filter query parameters.                                                                                                                                                                                                                                                                                           |                                                         |
| :                      | Used to associate the parameter name with a value. For example, parameter_name:value.                                                                                                                                                                                                                                                                                                                                                          |                                                         |
| \|                     | Separates parameters in a query that contains multiple parameters. For example, parameter1_name:value                                                                                                                                                                                                                                                                                                                                          | parameter2_name:minValue-maxValue. |
| ,                      | Separates a list of values. For example, parameter_name:value1,value2,value3. Comma-separated values in a list imply an OR relationship.                                                                                                                                                                                                                                                                                                       |                                                         |
| -                      | Used to define a parameter's minimum - maximum value range. For example,
