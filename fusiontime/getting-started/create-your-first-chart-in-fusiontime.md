---
title: Create your First Chart | FusionCharts
description: This article outlines the steps to be executed for creating your first chart.
heading: Create your First Chart
---

FusionTime, like the name implies, is a product which is used to plot discrete time-series data. FusionTime helps to evaluate patterns and trends in time-series data over a period of time. 

In this article, we'll create a simple time-series line chart showcasing online sales of SuperStore in the US.

The chart is shown below:

{% embed_ftChartData sales-analysis %}

FusionTime uses columns and rows of the in-browser `DataTable` to feed data to the chart. This allows you to apply different data operations on the `DataTable` to transform the data as per your requirement. To create a DataTable you need to provide:

* The `schema` which defines the properties of the columns.  

* The `actual` values for each row and column of the `DataTable` as the data.

Now, let's check how to prepare the schema and the data of the `DataTable`. 

## Create the `schema`

The schema contains an array which has multiple objects created in it. Each object creates a column in the `DataTable`. The schema helps DataTable understand the columns in your data, the data type for each column and input format (in case of date). You've to mandatorily specify the schema for each DataTable for FusionTime to render it.

To define the schema, let's create a `schema.js` file and copy the following code:

Note: It is not mandatory to create the schema in a different .js file. You can also define the schema within the index.html file.

```
[{
    "name": "Country",
    "type": "string"
}, {
    "name": "Time",
    "type": "date",
    "format": "%-m/%-d/%Y"
}, {
    "name": "Sales",
    "type": "number"
}]
```

In the above code:

* `schema` is the variable in which the array is saved.

* The first object creates the first column in the `DataTable`. In the above sample **Country** is the name of the column.

* The second object sets the **date/time** format for the chart. The name of the column has been set to **Time** and the date format has been set to `%-m/%-d/%Y`.

* The last object creates the third column named **Sales, **the values of which will map to the data plots.

Now that we have the columns ready for the `DataTable` let's learn how to put the data values into the `DataTable`.

## Create `data`

In FusionTime, to add values to the `DataTable` you can provide the data in both JSON and 2D array format. In this example, we will use the 2D array format.

To add the data, let's create a data.js file and copy the following code:

```
[
    [
        "United States",
        "1/4/2011",
        16.448
    ],
    [
        "United States",
        "1/5/2011",
        272.736
    ],
    [
        "United States",
        "1/5/2011",
        11.784
    ],
    [
        "United States",
        "1/5/2011",
        3.54
    ],
    [
        "United States",
        "1/6/2011",
        19.536
    ],
    [
        "United States",
        "1/7/2011",
        2573.82
    ],
    [
        "United States",
        "1/7/2011",
        609.98
    ],
    [
        "United States",
        "1/7/2011",
        391.98
    ],
    [
        "United States",
        "1/7/2011",
        755.96
    ],
    [
        "United States",
        "1/7/2011",
        19.44
    ],
    [
        "United States",
        "1/7/2011",
        12.78
    ],
    [
        "United States",
        "1/7/2011",
        31.12
    ],
    [
        "United States",
        "1/7/2011",
        6.54
    ],
    [
        "United States",
        "1/7/2011",
        5.48
    ],
    [
        "United States",
        "1/8/2011",
        76.728
    ],
    [
        "United States",
        "1/8/2011",
        10.43
    ],
    [
        "United States",
        "1/10/2011",
        31.2
    ],
    [
        "United States",
        "1/10/2011",
        9.344
    ],
    [
        "United States",
        "1/11/2011",
        51.94
    ],
    [
        "United States",
        "1/11/2011",
        2.89
    ],
    [
        "United States",
        "1/12/2011",
        9.94
    ],
    [
        "United States",
        "1/14/2011",
        1325.85
    ],
    [
        "United States",
        "1/14/2011",
        572.58
    ],
    [
        "United States",
        "1/14/2011",
        646.74
    ],
    [
        "United States",
        "1/14/2011",
        545.94
    ],
    [
        "United States",
        "1/14/2011",
        333.999
    ],
    [
        "United States",
        "1/14/2011",
        50.94
    ],
    [
        "United States",
        "1/14/2011",
        19.9
    ],
    [
        "United States",
        "1/14/2011",
        11.36
    ],
    [
        "United States",
        "1/14/2011",
        37.408
    ],
    [
        "United States",
        "1/14/2011",
        5.64
    ],
    [
        "United States",
        "1/14/2011",
        3.438
    ],
    [
        "United States",
        "1/15/2011",
        61.96
    ],
    [
        "United States",
        "1/16/2011",
        149.95
    ],
    [
        "United States",
        "1/17/2011",
        127.104
    ],
    [
        "United States",
        "1/17/2011",
        124.2
    ],
    [
        "United States",
        "1/17/2011",
        30.072
    ],
    [
        "United States",
        "1/17/2011",
        18.588
    ],
    [
        "United States",
        "1/19/2011",
        64.864
    ],
    [
        "United States",
        "1/20/2011",
        181.47
    ],
    [
        "United States",
        "1/20/2011",
        56.064
    ],
    [
        "United States",
        "1/20/2011",
        108.72
    ],
    [
        "United States",
        "1/20/2011",
        32.34
    ],
    [
        "United States",
        "1/21/2011",
        1067.94
    ],
    [
        "United States",
        "1/21/2011",
        699.93
    ],
    [
        "United States",
        "1/21/2011",
        272.94
    ],
    [
        "United States",
        "1/21/2011",
        247.716
    ],
    [
        "United States",
        "1/21/2011",
        66.58
    ],
    [
        "United States",
        "1/21/2011",
        43.92
    ],
    [
        "United States",
        "1/21/2011",
        67.194
    ],
    [
        "United States",
        "1/21/2011",
        23.34
    ],
    [
        "United States",
        "1/21/2011",
        38.6
    ],
    [
        "United States",
        "1/21/2011",
        29.7
    ],
    [
        "United States",
        "1/21/2011",
        22.96
    ],
    [
        "United States",
        "1/21/2011",
        19.05
    ],
    [
        "United States",
        "1/21/2011",
        13.98
    ],
    [
        "United States",
        "1/21/2011",
        19.36
    ],
    [
        "United States",
        "1/21/2011",
        14.73
    ],
    [
        "United States",
        "1/21/2011",
        19.3
    ],
    [
        "United States",
        "1/21/2011",
        6.63
    ],
    [
        "United States",
        "1/22/2011",
        25.248
    ],
    [
        "United States",
        "1/24/2011",
        40.08
    ],
    [
        "United States",
        "1/24/2011",
        5.94
    ],
    [
        "United States",
        "1/27/2011",
        141.96
    ],
    [
        "United States",
        "1/27/2011",
        489.92
    ],
    [
        "United States",
        "1/27/2011",
        187.98
    ],
    [
        "United States",
        "1/27/2011",
        155.35
    ],
    [
        "United States",
        "1/27/2011",
        62.82
    ],
    [
        "United States",
        "1/27/2011",
        19.44
    ],
    [
        "United States",
        "1/27/2011",
        10.68
    ],
    [
        "United States",
        "1/27/2011",
        16.68
    ],
    [
        "United States",
        "1/27/2011",
        12.42
    ],
    [
        "United States",
        "1/28/2011",
        333
    ],
    [
        "United States",
        "1/28/2011",
        57.23
    ],
    [
        "United States",
        "1/28/2011",
        36.44
    ],
    [
        "United States",
        "1/29/2011",
        3.928
    ],
    [
        "United States",
        "1/31/2011",
        229.94
    ],
    [
        "United States",
        "1/31/2011",
        10.56
    ],
    [
        "United States",
        "2/1/2011",
        290.666
    ],
    [
        "United States",
        "2/2/2011",
        468.9
    ],
    [
        "United States",
        "2/3/2011",
        180.96
    ],
    [
        "United States",
        "2/3/2011",
        18.336
    ],
    [
        "United States",
        "2/3/2011",
        12.35
    ],
    [
        "United States",
        "2/4/2011",
        83.84
    ],
    [
        "United States",
        "2/4/2011",
        13.272
    ],
    [
        "United States",
        "2/5/2011",
        17.248
    ],
    [
        "United States",
        "2/5/2011",
        34.24
    ],
    [
        "United States",
        "2/5/2011",
        82.896
    ],
    [
        "United States",
        "2/7/2011",
        144.95
    ],
    [
        "United States",
        "2/7/2011",
        161.61
    ],
    [
        "United States",
        "2/7/2011",
        15
    ],
    [
        "United States",
        "2/7/2011",
        8.952
    ],
    [
        "United States",
        "2/8/2011",
        64.96
    ],
    [
        "United States",
        "2/8/2011",
        115.36
    ],
    [
        "United States",
        "2/9/2011",
        14.56
    ],
    [
        "United States",
        "2/12/2011",
        1256.22
    ],
    [
        "United States",
        "2/12/2011",
        234.45
    ],
    [
        "United States",
        "2/12/2011",
        332.94
    ],
    [
        "United States",
        "2/12/2011",
        60.89
    ],
    [
        "United States",
        "2/12/2011",
        64.96
    ],
    [
        "United States",
        "2/12/2011",
        51.9
    ],
    [
        "United States",
        "2/12/2011",
        17.46
    ],
    [
        "United States",
        "2/12/2011",
        14.94
    ],
    [
        "United States",
        "2/12/2011",
        9.64
    ],
    [
        "United States",
        "2/13/2011",
        129.568
    ],
    [
        "United States",
        "2/15/2011",
        238.62
    ],
    [
        "United States",
        "2/15/2011",
        239.97
    ],
    [
        "United States",
        "2/15/2011",
        81.96
    ],
    [
        "United States",
        "2/15/2011",
        16.176
    ],
    [
        "United States",
        "2/16/2011",
        21.36
    ],
    [
        "United States",
        "2/17/2011",
        7.96
    ],
    [
        "United States",
        "2/17/2011",
        1.08
    ],
    [
        "United States",
        "2/18/2011",
        54.208
    ],
    [
        "United States",
        "2/19/2011",
        25.16
    ],
    [
        "United States",
        "2/19/2011",
        12.624
    ],
    [
        "United States",
        "2/21/2011",
        62.31
    ],
    [
        "United States",
        "2/21/2011",
        12.96
    ],
    [
        "United States",
        "2/21/2011",
        20.32
    ],
    [
        "United States",
        "2/22/2011",
        8.85
    ],
    [
        "United States",
        "2/23/2011",
        19.44
    ],
    [
        "United States",
        "2/24/2011",
        6.936
    ],
    [
        "United States",
        "2/24/2011",
        4.428
    ],
    [
        "United States",
        "2/25/2011",
        32.896
    ],
    [
        "United States",
        "2/25/2011",
        22.776
    ],
    [
        "United States",
        "2/28/2011",
        19.456
    ],
    [
        "United States",
        "3/1/2011",
        634.116
    ],
    [
        "United States",
        "3/1/2011",
        457.568
    ],
    [
        "United States",
        "3/1/2011",
        376.509
    ],
    [
        "United States",
        "3/1/2011",
        362.25
    ],
    [
        "United States",
        "3/1/2011",
        137.352
    ],
    [
        "United States",
        "3/1/2011",
        129.552
    ],
    [
        "United States",
        "3/1/2011",
        63.552
    ],
    [
        "United States",
        "3/1/2011",
        18.84
    ],
    [
        "United States",
        "3/1/2011",
        17.472
    ],
    [
        "United States",
        "3/1/2011",
        5.94
    ],
    [
        "United States",
        "3/2/2011",
        151.2
    ],
    [
        "United States",
        "3/2/2011",
        36.4
    ],
    [
        "United States",
        "3/2/2011",
        11.36
    ],
    [
        "United States",
        "3/2/2011",
        3.424
    ],
    [
        "United States",
        "3/3/2011",
        302.45
    ],
    [
        "United States",
        "3/3/2011",
        626.352
    ],
    [
        "United States",
        "3/3/2011",
        125.76
    ],
    [
        "United States",
        "3/3/2011",
        176.772
    ],
    [
        "United States",
        "3/3/2011",
        25.32
    ],
    [
        "United States",
        "3/3/2011",
        44.672
    ],
    [
        "United States",
        "3/3/2011",
        15.12
    ],
    [
        "United States",
        "3/3/2011",
        19.456
    ],
    [
        "United States",
        "3/3/2011",
        9.99
    ],
    [
        "United States",
        "3/4/2011",
        354.9
    ],
    [
        "United States",
        "3/4/2011",
        15.552
    ],
    [
        "United States",
        "3/5/2011",
        479.97
    ],
    [
        "United States",
        "3/5/2011",
        97.82
    ],
    [
        "United States",
        "3/5/2011",
        59.52
    ],
    [
        "United States",
        "3/5/2011",
        49.632
    ],
    [
        "United States",
        "3/5/2011",
        18.62
    ],
    [
        "United States",
        "3/7/2011",
        481.568
    ],
    [
        "United States",
        "3/7/2011",
        436.704
    ],
    [
        "United States",
        "3/7/2011",
        48.712
    ],
    [
        "United States",
        "3/7/2011",
        204.9
    ],
    [
        "United States",
        "3/7/2011",
        107.648
    ],
    [
        "United States",
        "3/7/2011",
        17.94
    ],
    [
        "United States",
        "3/7/2011",
        242.94
    ],
    [
        "United States",
        "3/7/2011",
        20.65
    ],
    [
        "United States",
        "3/10/2011",
        636.408
    ],
    [
        "United States",
        "3/10/2011",
        83.168
    ],
    [
        "United States",
        "3/10/2011",
        22.38
    ],
    [
        "United States",
        "3/11/2011",
        587.97
    ],
    [
        "United States",
        "3/11/2011",
        108.92
    ],
    [
        "United States",
        "3/11/2011",
        146.76
    ],
    [
        "United States",
        "3/11/2011",
        32.96
    ],
    [
        "United States",
        "3/11/2011",
        14.94
    ],
    [
        "United States",
        "3/11/2011",
        10.464
    ],
    [
        "United States",
        "3/11/2011",
        7.98
    ],
    [
        "United States",
        "3/11/2011",
        8.32
    ],
    [
        "United States",
        "3/14/2011",
        574.91
    ],
    [
        "United States",
        "3/14/2011",
        1139.92
    ],
    [
        "United States",
        "3/14/2011",
        82.8
    ],
    [
        "United States",
        "3/14/2011",
        62.048
    ],
    [
        "United States",
        "3/14/2011",
        91.056
    ],
    [
        "United States",
        "3/14/2011",
        80.98
    ],
    [
        "United States",
        "3/14/2011",
        33.088
    ],
    [
        "United States",
        "3/14/2011",
        21.36
    ],
    [
        "United States",
        "3/14/2011",
        8.448
    ],
    [
        "United States",
        "3/14/2011",
        10.56
    ],
    [
        "United States",
        "3/14/2011",
        3.38
    ],
    [
        "United States",
        "3/15/2011",
        131.904
    ],
    [
        "United States",
        "3/15/2011",
        142.776
    ],
    [
        "United States",
        "3/15/2011",
        43.188
    ],
    [
        "United States",
        "3/15/2011",
        45.696
    ],
    [
        "United States",
        "3/15/2011",
        7.218
    ],
    [
        "United States",
        "3/16/2011",
        471.92
    ],
    [
        "United States",
        "3/17/2011",
        1579.746
    ],
    [
        "United States",
        "3/17/2011",
        1071.576
    ],
    [
        "United States",
        "3/17/2011",
        613.908
    ],
    [
        "United States",
        "3/17/2011",
        126.624
    ],
    [
        "United States",
        "3/17/2011",
        93.78
    ],
    [
        "United States",
        "3/17/2011",
        53.4
    ],
    [
        "United States",
        "3/17/2011",
        155.04
    ],
    [
        "United States",
        "3/17/2011",
        34.86
    ],
    [
        "United States",
        "3/17/2011",
        47.18
    ],
    [
        "United States",
        "3/17/2011",
        35.88
    ],
    [
        "United States",
        "3/17/2011",
        30.44
    ],
    [
        "United States",
        "3/17/2011",
        32.67
    ],
    [
        "United States",
        "3/17/2011",
        15.552
    ],
    [
        "United States",
        "3/17/2011",
        4.448
    ],
    [
        "United States",
        "3/17/2011",
        12.96
    ],
    [
        "United States",
        "3/17/2011",
        19.68
    ],
    [
        "United States",
        "3/17/2011",
        16
    ],
    [
        "United States",
        "3/17/2011",
        5.184
    ],
    [
        "United States",
        "3/17/2011",
        11.43
    ],
    [
        "United States",
        "3/18/2011",
        1198.33
    ],
    [
        "United States",
        "3/18/2011",
        1856.19
    ],
    [
        "United States",
        "3/18/2011",
        1279.968
    ],
    [
        "United States",
        "3/18/2011",
        821.3
    ],
    [
        "United States",
        "3/18/2011",
        22638.48
    ],
    [
        "United States",
        "3/18/2011",
        122.352
    ],
    [
        "United States",
        "3/18/2011",
        111
    ],
    [
        "United States",
        "3/18/2011",
        30.768
    ],
    [
        "United States",
        "3/18/2011",
        18.936
    ],
    [
        "United States",
        "3/18/2011",
        21.376
    ],
    [
        "United States",
        "3/18/2011",
        8.016
    ],
    [
        "United States",
        "3/19/2011",
        323.976
    ],
    [
        "United States",
        "3/19/2011",
        170.24
    ],
    [
        "United States",
        "3/19/2011",
        26.16
    ],
    [
        "United States",
        "3/19/2011",
        20.016
    ],
    [
        "United States",
        "3/19/2011",
        11.808
    ],
    [
        "United States",
        "3/19/2011",
        4.992
    ],
    [
        "United States",
        "3/19/2011",
        33.57
    ],
    [
        "United States",
        "3/21/2011",
        3499.93
    ],
    [
        "United States",
        "3/21/2011",
        218.376
    ],
    [
        "United States",
        "3/21/2011",
        59.2
    ],
    [
        "United States",
        "3/21/2011",
        122.94
    ],
    [
        "United States",
        "3/21/2011",
        122.97
    ],
    [
        "United States",
        "3/21/2011",
        32.952
    ],
    [
        "United States",
        "3/21/2011",
        16.272
    ],
    [
        "United States",
        "3/21/2011",
        14.4
    ],
    [
        "United States",
        "3/21/2011",
        7.408
    ],
    [
        "United States",
        "3/21/2011",
        6.048
    ],
    [
        "United States",
        "3/21/2011",
        9.32
    ],
    [
        "United States",
        "3/22/2011",
        314.352
    ],
    [
        "United States",
        "3/22/2011",
        51.465
    ],
    [
        "United States",
        "3/22/2011",
        74.352
    ],
    [
        "United States",
        "3/22/2011",
        16.28
    ],
    [
        "United States",
        "3/22/2011",
        7.644
    ],
    [
        "United States",
        "3/23/2011",
        604.752
    ],
    [
        "United States",
        "3/23/2011",
        330.4
    ],
    [
        "United States",
        "3/23/2011",
        9.912
    ],
    [
        "United States",
        "3/24/2011",
        40.48
    ],
    [
        "United States",
        "3/24/2011",
        24.9
    ],
    [
        "United States",
        "3/25/2011",
        366.786
    ],
    [
        "United States",
        "3/25/2011",
        25.44
    ],
    [
        "United States",
        "3/25/2011",
        45.48
    ],
    [
        "United States",
        "3/25/2011",
        14.88
    ],
    [
        "United States",
        "3/25/2011",
        6.56
    ],
    [
        "United States",
        "3/26/2011",
        66.3
    ],
    [
        "United States",
        "3/26/2011",
        28.784
    ],
    [
        "United States",
        "3/26/2011",
        27.936
    ],
    [
        "United States",
        "3/26/2011",
        18.75
    ],
    [
        "United States",
        "3/26/2011",
        3.36
    ],
    [
        "United States",
        "3/28/2011",
        1184.72
    ],
    [
        "United States",
        "3/28/2011",
        302.376
    ],
    [
        "United States",
        "3/28/2011",
        330.588
    ],
    [
        "United States",
        "3/28/2011",
        6.12
    ],
    [
        "United States",
        "3/29/2011",
        890.841
    ],
    [
        "United States",
        "3/30/2011",
        251.944
    ],
    [
        "United States",
        "3/30/2011",
        127.302
    ],
    [
        "United States",
        "3/30/2011",
        335.72
    ],
    [
        "United States",
        "3/30/2011",
        205.666
    ],
    [
        "United States",
        "3/30/2011",
        129.3
    ],
    [
        "United States",
        "3/30/2011",
        44.4
    ],
    [
        "United States",
        "3/30/2011",
        49.65
    ],
    [
        "United States",
        "3/30/2011",
        10.5
    ],
    [
        "United States",
        "3/30/2011",
        15.84
    ],
    [
        "United States",
        "3/31/2011",
        1125.488
    ],
    [
        "United States",
        "3/31/2011",
        673.568
    ],
    [
        "United States",
        "3/31/2011",
        79.984
    ],
    [
        "United States",
        "3/31/2011",
        12.645
    ],
    [
        "United States",
        "3/31/2011",
        52.98
    ],
    [
        "United States",
        "3/31/2011",
        8.134
    ],
    [
        "United States",
        "3/31/2011",
        4.032
    ],
    [
        "United States",
        "3/31/2011",
        1.869
    ],
    [
        "United States",
        "3/31/2011",
        0.852
    ],
    [
        "United States",
        "4/1/2011",
        29.6
    ],
    [
        "United States",
        "4/1/2011",
        66.96
    ],
    [
        "United States",
        "4/1/2011",
        17.088
    ],
    [
        "United States",
        "4/1/2011",
        6.24
    ],
    [
        "United States",
        "4/2/2011",
        1049.93
    ],
    [
        "United States",
        "4/2/2011",
        154.9
    ],
    [
        "United States",
        "4/2/2011",
        177.68
    ],
    [
        "United States",
        "4/2/2011",
        33.488
    ],
    [
        "United States",
        "4/2/2011",
        15.84
    ],
    [
        "United States",
        "4/2/2011",
        26.72
    ],
    [
        "United States",
        "4/3/2011",
        159.98
    ],
    [
        "United States",
        "4/3/2011",
        62.31
    ],
    [
        "United States",
        "4/3/2011",
        11.16
    ],
    [
        "United States",
        "4/4/2011",
        232.55
    ],
    [
        "United States",
        "4/4/2011",
        99.98
    ],
    [
        "United States",
        "4/4/2011",
        79.36
    ],
    [
        "United States",
        "4/4/2011",
        18.9
    ],
    [
        "United States",
        "4/4/2011",
        19.44
    ],
    [
        "United States",
        "4/4/2011",
        7.184
    ],
    [
        "United States",
        "4/4/2011",
        12.96
    ],
    [
        "United States",
        "4/4/2011",
        5.47
    ],
    [
        "United States",
        "4/5/2011",
        4164.05
    ],
    [
        "United States",
        "4/5/2011",
        689.82
    ],
    [
        "United States",
        "4/5/2011",
        55.48
    ],
    [
        "United States",
        "4/5/2011",
        115.36
    ],
    [
        "United States",
        "4/5/2011",
        52.096
    ],
    [
        "United States",
        "4/5/2011",
        49.632
    ],
    [
        "United States",
        "4/5/2011",
        26.7
    ],
    [
        "United States",
        "4/5/2011",
        40.2
    ],
    [
        "United States",
        "4/5/2011",
        28.99
    ],
    [
        "United States",
        "4/5/2011",
        22.96
    ],
    [
        "United States",
        "4/5/2011",
        22.96
    ],
    [
        "United States",
        "4/5/2011",
        12.96
    ],
    [
        "United States",
        "4/5/2011",
        13.89
    ],
    [
        "United States",
        "4/6/2011",
        653.55
    ],
    [
        "United States",
        "4/6/2011",
        299.97
    ],
    [
        "United States",
        "4/6/2011",
        116.784
    ],
    [
        "United States",
        "4/6/2011",
        154.764
    ],
    [
        "United States",
        "4/6/2011",
        65.568
    ],
    [
        "United States",
        "4/6/2011",
        70.95
    ],
    [
        "United States",
        "4/6/2011",
        44.91
    ],
    [
        "United States",
        "4/6/2011",
        33.9
    ],
    [
        "United States",
        "4/6/2011",
        33.11
    ],
    [
        "United States",
        "4/6/2011",
        10.304
    ],
    [
        "United States",
        "4/6/2011",
        91.96
    ],
    [
        "United States",
        "4/6/2011",
        55.48
    ],
    [
        "United States",
        "4/6/2011",
        19.44
    ],
    [
        "United States",
        "4/7/2011",
        629.95
    ],
    [
        "United States",
        "4/7/2011",
        122.97
    ],
    [
        "United States",
        "4/7/2011",
        58.32
    ],
    [
        "United States",
        "4/7/2011",
        200.97
    ],
    [
        "United States",
        "4/7/2011",
        8.96
    ],
    [
        "United States",
        "4/8/2011",
        1215.92
    ],
    [
        "United States",
        "4/8/2011",
        399.96
    ],
    [
        "United States",
        "4/8/2011",
        172.11
    ],
    [
        "United States",
        "4/8/2011",
        49.792
    ],
    [
        "United States",
        "4/8/2011",
        99.592
    ],
    [
        "United States",
        "4/8/2011",
        19.008
    ],
    [
        "United States",
        "4/8/2011",
        2.368
    ],
    [
        "United States",
        "4/11/2011",
        758.352
    ],
    [
        "United States",
        "4/11/2011",
        383.976
    ],
    [
        "United States",
        "4/11/2011",
        335.944
    ],
    [
        "United States",
        "4/11/2011",
        217.44
    ],
    [
        "United States",
        "4/11/2011",
        105.584
    ],
    [
        "United States",
        "4/11/2011",
        87.08
    ],
    [
        "United States",
        "4/11/2011",
        10.368
    ],
    [
        "United States",
        "4/11/2011",
        6.912
    ],
    [
        "United States",
        "4/11/2011",
        9.584
    ],
    [
        "United States",
        "4/12/2011",
        1075.088
    ],
    [
        "United States",
        "4/12/2011",
        308.499
    ],
    [
        "United States",
        "4/12/2011",
        438.368
    ],
    [
        "United States",
        "4/12/2011",
        39.68
    ],
    [
        "United States",
        "4/12/2011",
        32.4
    ],
    [
        "United States",
        "4/12/2011",
        18.088
    ],
    [
        "United States",
        "4/13/2011",
        509.97
    ],
    [
        "United States",
        "4/13/2011",
        71.928
    ],
    [
        "United States",
        "4/13/2011",
        17.856
    ],
    [
        "United States",
        "4/13/2011",
        7.83
    ],
    [
        "United States",
        "4/13/2011",
        30.992
    ],
    [
        "United States",
        "4/15/2011",
        187.76
    ],
    [
        "United States",
        "4/15/2011",
        106.96
    ],
    [
        "United States",
        "4/16/2011",
        39.072
    ],
    [
        "United States",
        "4/18/2011",
        317.058
    ],
    [
        "United States",
        "4/18/2011",
        287.968
    ],
    [
        "United States",
        "4/18/2011",
        149.352
    ],
    [
        "United States",
        "4/18/2011",
        227.976
    ],
    [
        "United States",
        "4/18/2011",
        10.75
    ],
    [
        "United States",
        "4/18/2011",
        11.62
    ],
    [
        "United States",
        "4/18/2011",
        13.12
    ],
    [
        "United States",
        "4/18/2011",
        2.688
    ],
    [
        "United States",
        "4/19/2011",
        58.05
    ],
    [
        "United States",
        "4/19/2011",
        71.28
    ],
    [
        "United States",
        "4/19/2011",
        76.14
    ],
    [
        "United States",
        "4/20/2011",
        744.1
    ],
    [
        "United States",
        "4/20/2011",
        401.59
    ],
    [
        "United States",
        "4/20/2011",
        44.84
    ],
    [
        "United States",
        "4/20/2011",
        59.92
    ],
    [
        "United States",
        "4/21/2011",
        828.84
    ],
    [
        "United States",
        "4/21/2011",
        16.52
    ],
    [
        "United States",
        "4/22/2011",
        247.84
    ],
    [
        "United States",
        "4/22/2011",
        9.912
    ],
    [
        "United States",
        "4/23/2011",
        281.372
    ],
    [
        "United States",
        "4/23/2011",
        48.91
    ],
    [
        "United States",
        "4/23/2011",
        281.372
    ],
    [
        "United States",
        "4/23/2011",
        22.336
    ],
    [
        "United States",
        "4/23/2011",
        2.502
    ],
    [
        "United States",
        "4/23/2011",
        7.488
    ],
    [
        "United States",
        "4/25/2011",
        1487.04
    ],
    [
        "United States",
        "4/25/2011",
        270.72
    ],
    [
        "United States",
        "4/25/2011",
        302.376
    ],
    [
        "United States",
        "4/25/2011",
        303.25
    ],
    [
        "United States",
        "4/25/2011",
        6.24
    ],
    [
        "United States",
        "4/25/2011",
        10.368
    ],
    [
        "United States",
        "4/26/2011",
        230.28
    ],
    [
        "United States",
        "4/26/2011",
        21.4
    ],
    [
        "United States",
        "4/26/2011",
        12.6
    ],
    [
        "United States",
        "4/26/2011",
        18.288
    ],
    [
        "United States",
        "4/28/2011",
        1679.96
    ],
    [
        "United States",
        "4/28/2011",
        497.61
    ],
    [
        "United States",
        "4/28/2011",
        177.568
    ],
    [
        "United States",
        "4/28/2011",
        159.98
    ],
    [
        "United States",
        "4/28/2011",
        27.096
    ],
    [
        "United States",
        "4/28/2011",
        20.86
    ],
    [
        "United States",
        "4/28/2011",
        5.34
    ],
    [
        "United States",
        "4/28/2011",
        3.15
    ],
    [
        "United States",
        "4/28/2011",
        6.912
    ],
    [
        "United States",
        "4/29/2011",
        561.584
    ],
    [
        "United States",
        "4/29/2011",
        99.92
    ],
    [
        "United States",
        "4/29/2011",
        51.96
    ],
    [
        "United States",
        "4/29/2011",
        19.98
    ],
    [
        "United States",
        "4/29/2011",
        17.94
    ],
    [
        "United States",
        "4/29/2011",
        17.46
    ],
    [
        "United States",
        "4/30/2011",
        826
    ],
    [
        "United States",
        "4/30/2011",
        47.79
    ],
    [
        "United States",
        "4/30/2011",
        174.95
    ],
    [
        "United States",
        "5/2/2011",
        479.984
    ],
    [
        "United States",
        "5/2/2011",
        26.136
    ],
    [
        "United States",
        "5/3/2011",
        40.176
    ],
    [
        "United States",
        "5/3/2011",
        21.56
    ],
    [
        "United States",
        "5/3/2011",
        10.896
    ],
    [
        "United States",
        "5/4/2011",
        37.84
    ],
    [
        "United States",
        "5/4/2011",
        27.46
    ],
    [
        "United States",
        "5/4/2011",
        46.8
    ],
    [
        "United States",
        "5/4/2011",
        12.18
    ],
    [
        "United States",
        "5/4/2011",
        5.472
    ],
    [
        "United States",
        "5/4/2011",
        57.68
    ],
    [
        "United States",
        "5/5/2011",
        127.869
    ],
    [
        "United States",
        "5/5/2011",
        35.44
    ],
    [
        "United States",
        "5/5/2011",
        24.56
    ],
    [
        "United States",
        "5/5/2011",
        11.88
    ],
    [
        "United States",
        "5/5/2011",
        45.248
    ],
    [
        "United States",
        "5/5/2011",
        9.42
    ],
    [
        "United States",
        "5/5/2011",
        6.56
    ],
    [
        "United States",
        "5/6/2011",
        140.736
    ],
    [
        "United States",
        "5/6/2011",
        107.94
    ],
    [
        "United States",
        "5/6/2011",
        5.78
    ],
    [
        "United States",
        "5/7/2011",
        872.32
    ],
    [
        "United States",
        "5/7/2011",
        194.25
    ],
    [
        "United States",
        "5/7/2011",
        16.14
    ],
    [
        "United States",
        "5/7/2011",
        8.64
    ],
    [
        "United States",
        "5/8/2011",
        1799.97
    ],
    [
        "United States",
        "5/9/2011",
        83.25
    ],
    [
        "United States",
        "5/9/2011",
        167.97
    ],
    [
        "United States",
        "5/9/2011",
        67.8
    ],
    [
        "United States",
        "5/9/2011",
        20.65
    ],
    [
        "United States",
        "5/9/2011",
        45.36
    ],
    [
        "United States",
        "5/9/2011",
        9.45
    ],
    [
        "United States",
        "5/10/2011",
        1432
    ],
    [
        "United States",
        "5/10/2011",
        349.965
    ],
    [
        "United States",
        "5/10/2011",
        256.784
    ],
    [
        "United States",
        "5/10/2011",
        158.13
    ],
    [
        "United States",
        "5/10/2011",
        39.96
    ],
    [
        "United States",
        "5/10/2011",
        41.04
    ],
    [
        "United States",
        "5/10/2011",
        22.32
    ],
    [
        "United States",
        "5/10/2011",
        43.6
    ],
    [
        "United States",
        "5/11/2011",
        1212.96
    ],
    [
        "United States",
        "5/11/2011",
        104.58
    ],
    [
        "United States",
        "5/11/2011",
        100.792
    ],
    [
        "United States",
        "5/11/2011",
        46.864
    ],
    [
        "United States",
        "5/11/2011",
        58.112
    ],
    [
        "United States",
        "5/11/2011",
        35.91
    ],
    [
        "United States",
        "5/11/2011",
        66.112
    ],
    [
        "United States",
        "5/11/2011",
        17.472
    ],
    [
        "United States",
        "5/12/2011",
        700.056
    ],
    [
        "United States",
        "5/12/2011",
        34.79
    ],
    [
        "United States",
        "5/13/2011",
        398.352
    ],
    [
        "United States",
        "5/13/2011",
        279.456
    ],
    [
        "United States",
        "5/13/2011",
        149.97
    ],
    [
        "United States",
        "5/13/2011",
        55.5
    ],
    [
        "United States",
        "5/13/2011",
        7.104
    ],
    [
        "United States",
        "5/13/2011",
        8
    ],
    [
        "United States",
        "5/14/2011",
        310.88
    ],
    [
        "United States",
        "5/16/2011",
        232.88
    ],
    [
        "United States",
        "5/16/2011",
        56.4
    ],
    [
        "United States",
        "5/17/2011",
        91.68
    ],
    [
        "United States",
        "5/18/2011",
        779.796
    ],
    [
        "United States",
        "5/18/2011",
        149.232
    ],
    [
        "United States",
        "5/18/2011",
        15.936
    ],
    [
        "United States",
        "5/18/2011",
        3.984
    ],
    [
        "United States",
        "5/19/2011",
        34.2
    ],
    [
        "United States",
        "5/19/2011",
        57.42
    ],
    [
        "United States",
        "5/20/2011",
        139.86
    ],
    [
        "United States",
        "5/20/2011",
        66.96
    ],
    [
        "United States",
        "5/20/2011",
        38.52
    ],
    [
        "United States",
        "5/20/2011",
        33.28
    ],
    [
        "United States",
        "5/20/2011",
        20.784
    ],
    [
        "United States",
        "5/20/2011",
        10.368
    ],
    [
        "United States",
        "5/20/2011",
        10.332
    ],
    [
        "United States",
        "5/21/2011",
        2715.93
    ],
    [
        "United States",
        "5/21/2011",
        617.97
    ],
    [
        "United States",
        "5/21/2011",
        447.86
    ],
    [
        "United States",
        "5/21/2011",
        245.88
    ],
    [
        "United States",
        "5/21/2011",
        107.772
    ],
    [
        "United States",
        "5/21/2011",
        56.064
    ],
    [
        "United States",
        "5/21/2011",
        18.24
    ],
    [
        "United States",
        "5/21/2011",
        31.84
    ],
    [
        "United States",
        "5/21/2011",
        17.94
    ],
    [
        "United States",
        "5/21/2011",
        4.832
    ],
    [
        "United States",
        "5/22/2011",
        135.98
    ],
    [
        "United States",
        "5/22/2011",
        44.95
    ],
    [
        "United States",
        "5/23/2011",
        208.16
    ],
    [
        "United States",
        "5/23/2011",
        55.188
    ],
    [
        "United States",
        "5/23/2011",
        17.96
    ],
    [
        "United States",
        "5/23/2011",
        12.96
    ],
    [
        "United States",
        "5/23/2011",
        21.168
    ],
    [
        "United States",
        "5/23/2011",
        3.282
    ],
    [
        "United States",
        "5/23/2011",
        5.04
    ],
    [
        "United States",
        "5/24/2011",
        116.28
    ],
    [
        "United States",
        "5/25/2011",
        75.6
    ],
    [
        "United States",
        "5/25/2011",
        29.32
    ],
    [
        "United States",
        "5/25/2011",
        14.62
    ],
    [
        "United States",
        "5/26/2011",
        359.772
    ],
    [
        "United States",
        "5/26/2011",
        201.584
    ],
    [
        "United States",
        "5/26/2011",
        290.666
    ],
    [
        "United States",
        "5/26/2011",
        48.4
    ],
    [
        "United States",
        "5/26/2011",
        83.984
    ],
    [
        "United States",
        "5/26/2011",
        225.296
    ],
    [
        "United States",
        "5/26/2011",
        102.624
    ],
    [
        "United States",
        "5/26/2011",
        13.392
    ],
    [
        "United States",
        "5/27/2011",
        1113.504
    ],
    [
        "United States",
        "5/27/2011",
        359.32
    ],
    [
        "United States",
        "5/27/2011",
        567.12
    ],
    [
        "United States",
        "5/27/2011",
        99.99
    ],
    [
        "United States",
        "5/27/2011",
        17.46
    ],
    [
        "United States",
        "5/28/2011",
        136.96
    ],
    [
        "United States",
        "5/28/2011",
        57.408
    ],
    [
        "United States",
        "5/28/2011",
        27.6
    ],
    [
        "United States",
        "5/30/2011",
        464
    ],
    [
        "United States",
        "5/30/2011",
        235.95
    ],
    [
        "United States",
        "5/30/2011",
        719.976
    ],
    [
        "United States",
        "5/30/2011",
        355.455
    ],
    [
        "United States",
        "5/30/2011",
        39.96
    ],
    [
        "United States",
        "5/30/2011",
        70.368
    ],
    [
        "United States",
        "5/30/2011",
        25.584
    ],
    [
        "United States",
        "5/30/2011",
        13.62
    ],
    [
        "United States",
        "5/31/2011",
        659.97
    ],
    [
        "United States",
        "5/31/2011",
        113.73
    ],
    [
        "United States",
        "6/1/2011",
        1503.25
    ],
    [
        "United States",
        "6/1/2011",
        881.93
    ],
    [
        "United States",
        "6/1/2011",
        2001.86
    ],
    [
        "United States",
        "6/1/2011",
        289.2
    ],
    [
        "United States",
        "6/1/2011",
        138.56
    ],
    [
        "United States",
        "6/1/2011",
        166.72
    ],
    [
        "United States",
        "6/1/2011",
        65.52
    ],
    [
        "United States",
        "6/1/2011",
        47.88
    ],
    [
        "United States",
        "6/1/2011",
        22.2
    ],
    [
        "United States",
        "6/1/2011",
        25.92
    ],
    [
        "United States",
        "6/1/2011",
        45.48
    ],
    [
        "United States",
        "6/2/2011",
        356.94
    ],
    [
        "United States",
        "6/2/2011",
        239.97
    ],
    [
        "United States",
        "6/2/2011",
        59.808
    ],
    [
        "United States",
        "6/2/2011",
        73.32
    ],
    [
        "United States",
        "6/2/2011",
        8.56
    ],
    [
        "United States",
        "6/3/2011",
        515.88
    ],
    [
        "United States",
        "6/3/2011",
        132.696
    ],
    [
        "United States",
        "6/3/2011",
        61.544
    ],
    [
        "United States",
        "6/3/2011",
        15.28
    ],
    [
        "United States",
        "6/3/2011",
        15.936
    ],
    [
        "United States",
        "6/4/2011",
        353.568
    ],
    [
        "United States",
        "6/4/2011",
        56.96
    ],
    [
        "United States",
        "6/4/2011",
        13.96
    ],
    [
        "United States",
        "6/4/2011",
        15.56
    ],
    [
        "United States",
        "6/4/2011",
        16.224
    ],
    [
        "United States",
        "6/6/2011",
        991.764
    ],
    [
        "United States",
        "6/6/2011",
        100.24
    ],
    [
        "United States",
        "6/6/2011",
        149.544
    ],
    [
        "United States",
        "6/6/2011",
        62.016
    ],
    [
        "United States",
        "6/6/2011",
        24.588
    ],
    [
        "United States",
        "6/6/2011",
        13.36
    ],
    [
        "United States",
        "6/6/2011",
        17.14
    ],
    [
        "United States",
        "6/6/2011",
        13.984
    ],
    [
        "United States",
        "6/6/2011",
        1.365
    ],
    [
        "United States",
        "6/7/2011",
        268.935
    ],
    [
        "United States",
        "6/7/2011",
        12.462
    ],
    [
        "United States",
        "6/8/2011",
        1676.88
    ],
    [
        "United States",
        "6/8/2011",
        585.552
    ],
    [
        "United States",
        "6/8/2011",
        170.352
    ],
    [
        "United States",
        "6/8/2011",
        68.48
    ],
    [
        "United States",
        "6/9/2011",
        1441.3
    ],
    [
        "United States",
        "6/9/2011",
        911.424
    ],
    [
        "United States",
        "6/9/2011",
        1706.184
    ],
    [
        "United States",
        "6/9/2011",
        907.152
    ],
    [
        "United States",
        "6/9/2011",
        79.14
    ],
    [
        "United States",
        "6/9/2011",
        63.984
    ],
    [
        "United States",
        "6/9/2011",
        114.9
    ],
    [
        "United States",
        "6/9/2011",
        70.368
    ],
    [
        "United States",
        "6/9/2011",
        37.4
    ],
    [
        "United States",
        "6/9/2011",
        48.86
    ],
    [
        "United States",
        "6/9/2011",
        23.1
    ],
    [
        "United States",
        "6/9/2011",
        18.06
    ],
    [
        "United States",
        "6/9/2011",
        18.504
    ],
    [
        "United States",
        "6/9/2011",
        7.36
    ],
    [
        "United States",
        "6/9/2011",
        7.992
    ],
    [
        "United States",
        "6/9/2011",
        7.28
    ],
    [
        "United States",
        "6/10/2011",
        491.55
    ],
    [
        "United States",
        "6/13/2011",
        14.52
    ],
    [
        "United States",
        "6/14/2011",
        212.94
    ],
    [
        "United States",
        "6/15/2011",
        797.944
    ],
    [
        "United States",
        "6/15/2011",
        99.918
    ],
    [
        "United States",
        "6/15/2011",
        36.544
    ],
    [
        "United States",
        "6/15/2011",
        8.568
    ],
    [
        "United States",
        "6/16/2011",
        647.84
    ],
    [
        "United States",
        "6/16/2011",
        41.4
    ],
    [
        "United States",
        "6/16/2011",
        39.552
    ],
    [
        "United States",
        "6/16/2011",
        35
    ],
    [
        "United States",
        "6/17/2011",
        3266.376
    ],
    [
        "United States",
        "6/17/2011",
        62.016
    ],
    [
        "United States",
        "6/17/2011",
        65.97
    ],
    [
        "United States",
        "6/17/2011",
        17.9
    ],
    [
        "United States",
        "6/17/2011",
        6.24
    ],
    [
        "United States",
        "6/18/2011",
        139.8
    ],
    [
        "United States",
        "6/20/2011",
        509.488
    ],
    [
        "United States",
        "6/20/2011",
        471.9
    ],
    [
        "United States",
        "6/20/2011",
        418.8
    ],
    [
        "United States",
        "6/20/2011",
        193.0656
    ],
    [
        "United States",
        "6/20/2011",
        201.584
    ],
    [
        "United States",
        "6/20/2011",
        15.552
    ],
    [
        "United States",
        "6/20/2011",
        11.648
    ],
    [
        "United States",
        "6/20/2011",
        3.52
    ],
    [
        "United States",
        "6/20/2011",
        3.392
    ],
    [
        "United States",
        "6/21/2011",
        1214.85
    ],
    [
        "United States",
        "6/21/2011",
        1322.93
    ],
    [
        "United States",
        "6/21/2011",
        617.97
    ],
    [
        "United States",
        "6/21/2011",
        284.82
    ],
    [
        "United States",
        "6/21/2011",
        206.991
    ],
    [
        "United States",
        "6/21/2011",
        104.01
    ],
    [
        "United States",
        "6/21/2011",
        21.4
    ],
    [
        "United States",
        "6/21/2011",
        19.65
    ],
    [
        "United States",
        "6/21/2011",
        36.84
    ],
    [
        "United States",
        "6/21/2011",
        95.968
    ],
    [
        "United States",
        "6/21/2011",
        59.7
    ],
    [
        "United States",
        "6/21/2011",
        24.896
    ],
    [
        "United States",
        "6/21/2011",
        11.088
    ],
    [
        "United States",
        "6/21/2011",
        25.164
    ],
    [
        "United States",
        "6/21/2011",
        44.416
    ],
    [
        "United States",
        "6/21/2011",
        9.006
    ],
    [
        "United States",
        "6/21/2011",
        3.76
    ],
    [
        "United States",
        "6/21/2011",
        3.984
    ],
    [
        "United States",
        "6/22/2011",
        853.93
    ],
    [
        "United States",
        "6/22/2011",
        501.81
    ],
    [
        "United States",
        "6/22/2011",
        196.752
    ],
    [
        "United States",
        "6/22/2011",
        170.058
    ],
    [
        "United States",
        "6/22/2011",
        161.94
    ],
    [
        "United States",
        "6/22/2011",
        82.782
    ],
    [
        "United States",
        "6/22/2011",
        8.226
    ],
    [
        "United States",
        "6/23/2011",
        86.376
    ],
    [
        "United States",
        "6/23/2011",
        20.016
    ],
    [
        "United States",
        "6/23/2011",
        3.104
    ],
    [
        "United States",
        "6/24/2011",
        4.272
    ],
    [
        "United States",
        "6/25/2011",
        263.96
    ],
    [
        "United States",
        "6/25/2011",
        447.84
    ],
    [
        "United States",
        "6/25/2011",
        71.632
    ],
    [
        "United States",
        "6/25/2011",
        9.328
    ],
    [
        "United States",
        "6/27/2011",
        306.2
    ],
    [
        "United States",
        "6/27/2011",
        223.96
    ],
    [
        "United States",
        "6/27/2011",
        85.98
    ],
    [
        "United States",
        "6/28/2011",
        1228.465
    ],
    [
        "United States",
        "6/28/2011",
        335.52
    ],
    [
        "United States",
        "6/28/2011",
        41.472
    ],
    [
        "United States",
        "6/28/2011",
        31.086
    ],
    [
        "United States",
        "6/28/2011",
        3.168
    ],
    [
        "United States",
        "6/28/2011",
        6.08
    ],
    [
        "United States",
        "6/29/2011",
        32.76
    ],
    [
        "United States",
        "6/29/2011",
        13.92
    ],
    [
        "United States",
        "6/30/2011",
        310.688
    ],
    [
        "United States",
        "6/30/2011",
        334.768
    ],
    [
        "United States",
        "6/30/2011",
        25.92
    ],
    [
        "United States",
        "6/30/2011",
        32.4
    ],
    [
        "United States",
        "6/30/2011",
        21.312
    ],
    [
        "United States",
        "6/30/2011",
        5.248
    ],
    [
        "United States",
        "6/30/2011",
        6.6
    ],
    [
        "United States",
        "6/30/2011",
        2.688
    ],
    [
        "United States",
        "7/1/2011",
        575.92
    ],
    [
        "United States",
        "7/1/2011",
        19.92
    ],
    [
        "United States",
        "7/1/2011",
        5.184
    ],
    [
        "United States",
        "7/2/2011",
        73.98
    ],
    [
        "United States",
        "7/2/2011",
        5.58
    ],
    [
        "United States",
        "7/4/2011",
        177.536
    ],
    [
        "United States",
        "7/4/2011",
        32.432
    ],
    [
        "United States",
        "7/4/2011",
        21.84
    ],
    [
        "United States",
        "7/4/2011",
        15.6
    ],
    [
        "United States",
        "7/5/2011",
        479.97
    ],
    [
        "United States",
        "7/5/2011",
        213.216
    ],
    [
        "United States",
        "7/5/2011",
        220.776
    ],
    [
        "United States",
        "7/5/2011",
        180.96
    ],
    [
        "United States",
        "7/5/2011",
        281.424
    ],
    [
        "United States",
        "7/5/2011",
        19.44
    ],
    [
        "United States",
        "7/5/2011",
        19.52
    ],
    [
        "United States",
        "7/5/2011",
        14.62
    ],
    [
        "United States",
        "7/5/2011",
        9.81
    ],
    [
        "United States",
        "7/5/2011",
        4.368
    ],
    [
        "United States",
        "7/6/2011",
        478.48
    ],
    [
        "United States",
        "7/6/2011",
        559.992
    ],
    [
        "United States",
        "7/7/2011",
        172.186
    ],
    [
        "United States",
        "7/7/2011",
        69.008
    ],
    [
        "United States",
        "7/8/2011",
        502.488
    ],
    [
        "United States",
        "7/8/2011",
        63.882
    ],
    [
        "United States",
        "7/8/2011",
        196.704
    ],
    [
        "United States",
        "7/9/2011",
        119.833
    ],
    [
        "United States",
        "7/9/2011",
        41.904
    ],
    [
        "United States",
        "7/9/2011",
        32.4
    ],
    [
        "United States",
        "7/9/2011",
        23.92
    ],
    [
        "United States",
        "7/9/2011",
        14.352
    ],
    [
        "United States",
        "7/9/2011",
        14.304
    ],
    [
        "United States",
        "7/9/2011",
        2.88
    ],
    [
        "United States",
        "7/9/2011",
        10.368
    ],
    [
        "United States",
        "7/9/2011",
        5.56
    ],
    [
        "United States",
        "7/11/2011",
        575.968
    ],
    [
        "United States",
        "7/11/2011",
        854.94
    ],
    [
        "United States",
        "7/11/2011",
        164.85
    ],
    [
        "United States",
        "7/11/2011",
        177.2
    ],
    [
        "United States",
        "7/11/2011",
        197.97
    ],
    [
        "United States",
        "7/11/2011",
        124.11
    ],
    [
        "United States",
        "7/11/2011",
        49.12
    ],
    [
        "United States",
        "7/11/2011",
        10.368
    ],
    [
        "United States",
        "7/11/2011",
        18.28
    ],
    [
        "United States",
        "7/11/2011",
        14.4
    ],
    [
        "United States",
        "7/12/2011",
        698.352
    ],
    [
        "United States",
        "7/12/2011",
        249.75
    ],
    [
        "United States",
        "7/12/2011",
        255.936
    ],
    [
        "United States",
        "7/12/2011",
        512.358
    ],
    [
        "United States",
        "7/12/2011",
        35.856
    ],
    [
        "United States",
        "7/12/2011",
        123.136
    ],
    [
        "United States",
        "7/12/2011",
        22.288
    ],
    [
        "United States",
        "7/12/2011",
        23.84
    ],
    [
        "United States",
        "7/12/2011",
        7.712
    ],
    [
        "United States",
        "7/12/2011",
        16.032
    ],
    [
        "United States",
        "7/12/2011",
        11.264
    ],
    [
        "United States",
        "7/12/2011",
        3.488
    ],
    [
        "United States",
        "7/13/2011",
        351.216
    ],
    [
        "United States",
        "7/14/2011",
        55.92
    ],
    [
        "United States",
        "7/14/2011",
        39.48
    ],
    [
        "United States",
        "7/14/2011",
        41.584
    ],
    [
        "United States",
        "7/14/2011",
        29.932
    ],
    [
        "United States",
        "7/14/2011",
        38.272
    ],
    [
        "United States",
        "7/14/2011",
        23.988
    ],
    [
        "United States",
        "7/14/2011",
        17.94
    ],
    [
        "United States",
        "7/14/2011",
        31.984
    ],
    [
        "United States",
        "7/14/2011",
        13.494
    ],
    [
        "United States",
        "7/15/2011",
        6.54
    ],
    [
        "United States",
        "7/15/2011",
        2.97
    ],
    [
        "United States",
        "7/18/2011",
        259.136
    ],
    [
        "United States",
        "7/18/2011",
        13.904
    ],
    [
        "United States",
        "7/19/2011",
        359.98
    ],
    [
        "United States",
        "7/19/2011",
        70.56
    ],
    [
        "United States",
        "7/19/2011",
        20.88
    ],
    [
        "United States",
        "7/19/2011",
        6.096
    ],
    [
        "United States",
        "7/19/2011",
        3.81
    ],
    [
        "United States",
        "7/20/2011",
        981.372
    ],
    [
        "United States",
        "7/20/2011",
        342.864
    ],
    [
        "United States",
        "7/20/2011",
        104.85
    ],
    [
        "United States",
        "7/20/2011",
        89.712
    ],
    [
        "United States",
        "7/20/2011",
        535.41
    ],
    [
        "United States",
        "7/20/2011",
        25.984
    ],
    [
        "United States",
        "7/20/2011",
        27.36
    ],
    [
        "United States",
        "7/20/2011",
        43.02
    ],
    [
        "United States",
        "7/20/2011",
        22.83
    ],
    [
        "United States",
        "7/20/2011",
        41.94
    ],
    [
        "United States",
        "7/20/2011",
        19.92
    ],
    [
        "United States",
        "7/20/2011",
        11.96
    ],
    [
        "United States",
        "7/20/2011",
        8.704
    ],
    [
        "United States",
        "7/20/2011",
        16.74
    ],
    [
        "United States",
        "7/20/2011",
        13.12
    ],
    [
        "United States",
        "7/21/2011",
        657.93
    ],
    [
        "United States",
        "7/21/2011",
        801.568
    ],
    [
        "United States",
        "7/21/2011",
        272.848
    ],
    [
        "United States",
        "7/21/2011",
        99.2
    ],
    [
        "United States",
        "7/21/2011",
        87.92
    ],
    [
        "United States",
        "7/21/2011",
        35.98
    ],
    [
        "United States",
        "7/21/2011",
        4.992
    ],
    [
        "United States",
        "7/21/2011",
        1.044
    ],
    [
        "United States",
        "7/22/2011",
        717.72
    ],
    [
        "United States",
        "7/22/2011",
        236.5
    ],
    [
        "United States",
        "7/22/2011",
        159.98
    ],
    [
        "United States",
        "7/22/2011",
        170.352
    ],
    [
        "United States",
        "7/22/2011",
        26.632
    ],
    [
        "United States",
        "7/22/2011",
        11.52
    ],
    [
        "United States",
        "7/22/2011",
        19.68
    ],
    [
        "United States",
        "7/22/2011",
        5.96
    ],
    [
        "United States",
        "7/23/2011",
        479.04
    ],
    [
        "United States",
        "7/23/2011",
        1023.936
    ],
    [
        "United States",
        "7/23/2011",
        604.752
    ],
    [
        "United States",
        "7/23/2011",
        302.376
    ],
    [
        "United States",
        "7/23/2011",
        99.98
    ],
    [
        "United States",
        "7/23/2011",
        40.7
    ],
    [
        "United States",
        "7/23/2011",
        45
    ],
    [
        "United States",
        "7/23/2011",
        8.16
    ],
    [
        "United States",
        "7/23/2011",
        9.24
    ],
    [
        "United States",
        "7/25/2011",
        8187.65
    ],
    [
        "United States",
        "7/25/2011",
        53.72
    ],
    [
        "United States",
        "7/25/2011",
        77.92
    ],
    [
        "United States",
        "7/25/2011",
        15.52
    ],
    [
        "United States",
        "7/25/2011",
        6.48
    ],
    [
        "United States",
        "7/26/2011",
        2177.584
    ],
    [
        "United States",
        "7/26/2011",
        911.984
    ],
    [
        "United States",
        "7/26/2011",
        674.352
    ],
    [
        "United States",
        "7/26/2011",
        431.136
    ],
    [
        "United States",
        "7/26/2011",
        162.89
    ],
    [
        "United States",
        "7/26/2011",
        111.93
    ],
    [
        "United States",
        "7/26/2011",
        134.01
    ],
    [
        "United States",
        "7/26/2011",
        170.97
    ],
    [
        "United States",
        "7/26/2011",
        123.552
    ],
    [
        "United States",
        "7/26/2011",
        67.88
    ],
    [
        "United States",
        "7/26/2011",
        25.71
    ],
    [
        "United States",
        "7/26/2011",
        16.784
    ],
    [
        "United States",
        "7/26/2011",
        17.496
    ],
    [
        "United States",
        "7/26/2011",
        8.88
    ],
    [
        "United States",
        "7/26/2011",
        4.836
    ],
    [
        "United States",
        "7/27/2011",
        238
    ],
    [
        "United States",
        "7/27/2011",
        276.28
    ],
    [
        "United States",
        "7/27/2011",
        65.78
    ],
    [
        "United States",
        "7/28/2011",
        129.888
    ],
    [
        "United States",
        "7/28/2011",
        48.944
    ],
    [
        "United States",
        "7/28/2011",
        14.32
    ],
    [
        "United States",
        "7/30/2011",
        1367.84
    ],
    [
        "United States",
        "8/1/2011",
        78.304
    ],
    [
        "United States",
        "8/1/2011",
        62.92
    ],
    [
        "United States",
        "8/1/2011",
        44.128
    ],
    [
        "United States",
        "8/1/2011",
        19.752
    ],
    [
        "United States",
        "8/1/2011",
        17.544
    ],
    [
        "United States",
        "8/1/2011",
        5.68
    ],
    [
        "United States",
        "8/2/2011",
        838.38
    ],
    [
        "United States",
        "8/2/2011",
        26.7
    ],
    [
        "United States",
        "8/2/2011",
        21.2
    ],
    [
        "United States",
        "8/3/2011",
        218.75
    ],
    [
        "United States",
        "8/3/2011",
        93.024
    ],
    [
        "United States",
        "8/3/2011",
        102.3
    ],
    [
        "United States",
        "8/3/2011",
        39.96
    ],
    [
        "United States",
        "8/3/2011",
        21.36
    ],
    [
        "United States",
        "8/3/2011",
        2.6
    ],
    [
        "United States",
        "8/4/2011",
        1089.75
    ],
    [
        "United States",
        "8/4/2011",
        447.84
    ],
    [
        "United States",
        "8/4/2011",
        399.96
    ],
    [
        "United States",
        "8/4/2011",
        259.74
    ],
    [
        "United States",
        "8/4/2011",
        255.42
    ],
    [
        "United States",
        "8/4/2011",
        158.9
    ],
    [
        "United States",
        "8/4/2011",
        101.96
    ],
    [
        "United States",
        "8/4/2011",
        13.184
    ],
    [
        "United States",
        "8/4/2011",
        16.4
    ],
    [
        "United States",
        "8/5/2011",
        1133.35
    ],
    [
        "United States",
        "8/5/2011",
        489.23
    ],
    [
        "United States",
        "8/5/2011",
        135.99
    ],
    [
        "United States",
        "8/5/2011",
        340.144
    ],
    [
        "United States",
        "8/5/2011",
        79.47
    ],
    [
        "United States",
        "8/5/2011",
        110.96
    ],
    [
        "United States",
        "8/5/2011",
        45.98
    ],
    [
        "United States",
        "8/5/2011",
        20.94
    ],
    [
        "United States",
        "8/5/2011",
        15.96
    ],
    [
        "United States",
        "8/5/2011",
        16.36
    ],
    [
        "United States",
        "8/5/2011",
        4.56
    ],
    [
        "United States",
        "8/5/2011",
        15.78
    ],
    [
        "United States",
        "8/6/2011",
        199.98
    ],
    [
        "United States",
        "8/6/2011",
        62.91
    ],
    [
        "United States",
        "8/8/2011",
        1199.976
    ],
    [
        "United States",
        "8/8/2011",
        549.99
    ],
    [
        "United States",
        "8/8/2011",
        445.96
    ],
    [
        "United States",
        "8/8/2011",
        423.28
    ],
    [
        "United States",
        "8/8/2011",
        299.98
    ],
    [
        "United States",
        "8/8/2011",
        167.535
    ],
    [
        "United States",
        "8/8/2011",
        155.456
    ],
    [
        "United States",
        "8/8/2011",
        327.76
    ],
    [
        "United States",
        "8/8/2011",
        121.376
    ],
    [
        "United States",
        "8/8/2011",
        76.12
    ],
    [
        "United States",
        "8/8/2011",
        95.976
    ],
    [
        "United States",
        "8/8/2011",
        38.34
    ],
    [
        "United States",
        "8/8/2011",
        53.88
    ],
    [
        "United States",
        "8/9/2011",
        2060.744
    ],
    [
        "United States",
        "8/9/2011",
        1091.168
    ],
    [
        "United States",
        "8/9/2011",
        178.384
    ],
    [
        "United States",
        "8/9/2011",
        219.168
    ],
    [
        "United States",
        "8/9/2011",
        15.552
    ],
    [
        "United States",
        "8/9/2011",
        5.98
    ],
    [
        "United States",
        "8/9/2011",
        9.345
    ],
    [
        "United States",
        "8/9/2011",
        20.88
    ],
    [
        "United States",
        "8/9/2011",
        4.464
    ],
    [
        "United States",
        "8/11/2011",
        375.34
    ],
    [
        "United States",
        "8/11/2011",
        22.96
    ],
    [
        "United States",
        "8/11/2011",
        40.97
    ],
    [
        "United States",
        "8/11/2011",
        12.35
    ],
    [
        "United States",
        "8/12/2011",
        806.336
    ],
    [
        "United States",
        "8/12/2011",
        272.61
    ],
    [
        "United States",
        "8/12/2011",
        196.21
    ],
    [
        "United States",
        "8/12/2011",
        211.248
    ],
    [
        "United States",
        "8/12/2011",
        158.928
    ],
    [
        "United States",
        "8/12/2011",
        85.44
    ],
    [
        "United States",
        "8/12/2011",
        47.96
    ],
    [
        "United States",
        "8/12/2011",
        14.04
    ],
    [
        "United States",
        "8/12/2011",
        31.104
    ],
    [
        "United States",
        "8/12/2011",
        5.552
    ],
    [
        "United States",
        "8/12/2011",
        2.952
    ],
    [
        "United States",
        "8/15/2011",
        152.24
    ],
    [
        "United States",
        "8/15/2011",
        152.91
    ],
    [
        "United States",
        "8/15/2011",
        195.136
    ],
    [
        "United States",
        "8/15/2011",
        91.36
    ],
    [
        "United States",
        "8/15/2011",
        62.94
    ],
    [
        "United States",
        "8/15/2011",
        92.94
    ],
    [
        "United States",
        "8/15/2011",
        46.44
    ],
    [
        "United States",
        "8/15/2011",
        17.856
    ],
    [
        "United States",
        "8/15/2011",
        30.96
    ],
    [
        "United States",
        "8/16/2011",
        853.092
    ],
    [
        "United States",
        "8/17/2011",
        339.96
    ],
    [
        "United States",
        "8/17/2011",
        114.2
    ],
    [
        "United States",
        "8/17/2011",
        17.96
    ],
    [
        "United States",
        "8/17/2011",
        15.552
    ],
    [
        "United States",
        "8/17/2011",
        12.67
    ],
    [
        "United States",
        "8/19/2011",
        638.82
    ],
    [
        "United States",
        "8/19/2011",
        289.24
    ],
    [
        "United States",
        "8/19/2011",
        344.91
    ],
    [
        "United States",
        "8/19/2011",
        76.776
    ],
    [
        "United States",
        "8/19/2011",
        69.456
    ],
    [
        "United States",
        "8/19/2011",
        9.184
    ],
    [
        "United States",
        "8/19/2011",
        10.72
    ],
    [
        "United States",
        "8/20/2011",
        421.372
    ],
    [
        "United States",
        "8/20/2011",
        500.24
    ],
    [
        "United States",
        "8/20/2011",
        896.99
    ],
    [
        "United States",
        "8/20/2011",
        20.12
    ],
    [
        "United States",
        "8/22/2011",
        7.632
    ],
    [
        "United States",
        "8/22/2011",
        3.912
    ],
    [
        "United States",
        "8/22/2011",
        11.56
    ],
    [
        "United States",
        "8/23/2011",
        223.056
    ],
    [
        "United States",
        "8/23/2011",
        143.64
    ],
    [
        "United States",
        "8/23/2011",
        45.92
    ],
    [
        "United States",
        "8/23/2011",
        25.92
    ],
    [
        "United States",
        "8/23/2011",
        49.568
    ],
    [
        "United States",
        "8/23/2011",
        31.104
    ],
    [
        "United States",
        "8/23/2011",
        19.44
    ],
    [
        "United States",
        "8/23/2011",
        15.552
    ],
    [
        "United States",
        "8/23/2011",
        6.8
    ],
    [
        "United States",
        "8/23/2011",
        4.224
    ],
    [
        "United States",
        "8/24/2011",
        25.5
    ],
    [
        "United States",
        "8/24/2011",
        12.672
    ],
    [
        "United States",
        "8/24/2011",
        13.28
    ],
    [
        "United States",
        "8/24/2011",
        8.288
    ],
    [
        "United States",
        "8/25/2011",
        1007.944
    ],
    [
        "United States",
        "8/25/2011",
        130.464
    ],
    [
        "United States",
        "8/25/2011",
        95.1
    ],
    [
        "United States",
        "8/25/2011",
        40.096
    ],
    [
        "United States",
        "8/25/2011",
        48.84
    ],
    [
        "United States",
        "8/25/2011",
        23.976
    ],
    [
        "United States",
        "8/25/2011",
        25.92
    ],
    [
        "United States",
        "8/25/2011",
        25.68
    ],
    [
        "United States",
        "8/25/2011",
        20.856
    ],
    [
        "United States",
        "8/25/2011",
        4.72
    ],
    [
        "United States",
        "8/25/2011",
        6.28
    ],
    [
        "United States",
        "8/25/2011",
        12.384
    ],
    [
        "United States",
        "8/25/2011",
        6.528
    ],
    [
        "United States",
        "8/25/2011",
        2.862
    ],
    [
        "United States",
        "8/26/2011",
        149.97
    ],
    [
        "United States",
        "8/26/2011",
        176.8
    ],
    [
        "United States",
        "8/26/2011",
        10.68
    ],
    [
        "United States",
        "8/26/2011",
        8.64
    ],
    [
        "United States",
        "8/26/2011",
        17.34
    ],
    [
        "United States",
        "8/26/2011",
        3.38
    ],
    [
        "United States",
        "8/27/2011",
        1202.94
    ],
    [
        "United States",
        "8/27/2011",
        579.95
    ],
    [
        "United States",
        "8/27/2011",
        213.48
    ],
    [
        "United States",
        "8/27/2011",
        29.12
    ],
    [
        "United States",
        "8/27/2011",
        22.72
    ],
    [
        "United States",
        "8/27/2011",
        8.56
    ],
    [
        "United States",
        "8/27/2011",
        13.36
    ],
    [
        "United States",
        "8/29/2011",
        505.176
    ],
    [
        "United States",
        "8/29/2011",
        174.0585
    ],
    [
        "United States",
        "8/29/2011",
        109.92
    ],
    [
        "United States",
        "8/29/2011",
        29.808
    ],
    [
        "United States",
        "8/29/2011",
        13.36
    ],
    [
        "United States",
        "8/30/2011",
        95.94
    ],
    [
        "United States",
        "8/30/2011",
        25.3
    ],
    [
        "United States",
        "8/31/2011",
        92.52
    ],
    [
        "United States",
        "9/1/2011",
        357
    ],
    [
        "United States",
        "9/1/2011",
        31.104
    ],
    [
        "United States",
        "9/1/2011",
        23.744
    ],
    [
        "United States",
        "9/1/2011",
        53.94
    ],
    [
        "United States",
        "9/1/2011",
        3.648
    ],
    [
        "United States",
        "9/2/2011",
        1793.98
    ],
    [
        "United States",
        "9/2/2011",
        475.944
    ],
    [
        "United States",
        "9/2/2011",
        559.71
    ],
    [
        "United States",
        "9/2/2011",
        57.75
    ],
    [
        "United States",
        "9/2/2011",
        239.976
    ],
    [
        "United States",
        "9/2/2011",
        70.71
    ],
    [
        "United States",
        "9/2/2011",
        14.94
    ],
    [
        "United States",
        "9/2/2011",
        21.24
    ],
    [
        "United States",
        "9/2/2011",
        19.9
    ],
    [
        "United States",
        "9/3/2011",
        14.4
    ],
    [
        "United States",
        "9/3/2011",
        7.68
    ],
    [
        "United States",
        "9/5/2011",
        264.32
    ],
    [
        "United States",
        "9/5/2011",
        31.984
    ],
    [
        "United States",
        "9/6/2011",
        41.88
    ],
    [
        "United States",
        "9/6/2011",
        58.48
    ],
    [
        "United States",
        "9/7/2011",
        821.88
    ],
    [
        "United States",
        "9/7/2011",
        399.54
    ],
    [
        "United States",
        "9/7/2011",
        304.99
    ],
    [
        "United States",
        "9/7/2011",
        429.9
    ],
    [
        "United States",
        "9/7/2011",
        196.776
    ],
    [
        "United States",
        "9/7/2011",
        200.795
    ],
    [
        "United States",
        "9/7/2011",
        104.85
    ],
    [
        "United States",
        "9/7/2011",
        161.96
    ],
    [
        "United States",
        "9/7/2011",
        377.97
    ],
    [
        "United States",
        "9/7/2011",
        42.81
    ],
    [
        "United States",
        "9/7/2011",
        57.69
    ],
    [
        "United States",
        "9/7/2011",
        83.92
    ],
    [
        "United States",
        "9/7/2011",
        42.368
    ],
    [
        "United States",
        "9/7/2011",
        32.06
    ],
    [
        "United States",
        "9/7/2011",
        46.688
    ],
    [
        "United States",
        "9/7/2011",
        32.382
    ],
    [
        "United States",
        "9/7/2011",
        64.784
    ],
    [
        "United States",
        "9/7/2011",
        27.36
    ],
    [
        "United States",
        "9/7/2011",
        13.16
    ],
    [
        "United States",
        "9/7/2011",
        12.96
    ],
    [
        "United States",
        "9/7/2011",
        19.86
    ],
    [
        "United States",
        "9/7/2011",
        21.864
    ],
    [
        "United States",
        "9/7/2011",
        20.56
    ],
    [
        "United States",
        "9/7/2011",
        2.92
    ],
    [
        "United States",
        "9/7/2011",
        3.828
    ],
    [
        "United States",
        "9/8/2011",
        8159.952
    ],
    [
        "United States",
        "9/8/2011",
        975.92
    ],
    [
        "United States",
        "9/8/2011",
        1740.06
    ],
    [
        "United States",
        "9/8/2011",
        303.84
    ],
    [
        "United States",
        "9/8/2011",
        485.88
    ],
    [
        "United States",
        "9/8/2011",
        966.7
    ],
    [
        "United States",
        "9/8/2011",
        209.97
    ],
    [
        "United States",
        "9/8/2011",
        275.928
    ],
    [
        "United States",
        "9/8/2011",
        177.98
    ],
    [
        "United States",
        "9/8/2011",
        83.88
    ],
    [
        "United States",
        "9/8/2011",
        182.112
    ],
    [
        "United States",
        "9/8/2011",
        143.976
    ],
    [
        "United States",
        "9/8/2011",
        172.764
    ],
    [
        "United States",
        "9/8/2011",
        51.184
    ],
    [
        "United States",
        "9/8/2011",
        56.65
    ],
    [
        "United States",
        "9/8/2011",
        45
    ],
    [
        "United States",
        "9/8/2011",
        49.98
    ],
    [
        "United States",
        "9/8/2011",
        17.904
    ],
    [
        "United States",
        "9/8/2011",
        16.78
    ],
    [
        "United States",
        "9/8/2011",
        32.064
    ],
    [
        "United States",
        "9/8/2011",
        14.97
    ],
    [
        "United States",
        "9/8/2011",
        32.97
    ],
    [
        "United States",
        "9/8/2011",
        5.88
    ],
    [
        "United States",
        "9/8/2011",
        9.936
    ],
    [
        "United States",
        "9/8/2011",
        8.608
    ],
    [
        "United States",
        "9/8/2011",
        3.52
    ],
    [
        "United States",
        "9/8/2011",
        4.02
    ],
    [
        "United States",
        "9/9/2011",
        1299.99
    ],
    [
        "United States",
        "9/9/2011",
        785.88
    ],
    [
        "United States",
        "9/9/2011",
        1325.85
    ],
    [
        "United States",
        "9/9/2011",
        166.44
    ],
    [
        "United States",
        "9/9/2011",
        60.672
    ],
    [
        "United States",
        "9/9/2011",
        135.516
    ],
    [
        "United States",
        "9/9/2011",
        30.816
    ],
    [
        "United States",
        "9/9/2011",
        103.6
    ],
    [
        "United States",
        "9/9/2011",
        64.704
    ],
    [
        "United States",
        "9/9/2011",
        26.2
    ],
    [
        "United States",
        "9/9/2011",
        17.472
    ],
    [
        "United States",
        "9/9/2011",
        10.896
    ],
    [
        "United States",
        "9/9/2011",
        15.552
    ],
    [
        "United States",
        "9/10/2011",
        1487.04
    ],
    [
        "United States",
        "9/10/2011",
        254.9
    ],
    [
        "United States",
        "9/10/2011",
        81.92
    ],
    [
        "United States",
        "9/10/2011",
        21.728
    ],
    [
        "United States",
        "9/10/2011",
        9.64
    ],
    [
        "United States",
        "9/11/2011",
        127.95
    ],
    [
        "United States",
        "9/12/2011",
        3785.292
    ],
    [
        "United States",
        "9/12/2011",
        331.96
    ],
    [
        "United States",
        "9/12/2011",
        357.93
    ],
    [
        "United States",
        "9/12/2011",
        166.84
    ],
    [
        "United States",
        "9/12/2011",
        63.924
    ],
    [
        "United States",
        "9/12/2011",
        69.99
    ],
    [
        "United States",
        "9/12/2011",
        57.4
    ],
    [
        "United States",
        "9/12/2011",
        40.56
    ],
    [
        "United States",
        "9/12/2011",
        10.368
    ],
    [
        "United States",
        "9/12/2011",
        15.216
    ],
    [
        "United States",
        "9/12/2011",
        5.18
    ],
    [
        "United States",
        "9/13/2011",
        252
    ],
    [
        "United States",
        "9/13/2011",
        118
    ],
    [
        "United States",
        "9/13/2011",
        144.96
    ],
    [
        "United States",
        "9/13/2011",
        199.98
    ],
    [
        "United States",
        "9/13/2011",
        340.116
    ],
    [
        "United States",
        "9/13/2011",
        79.4
    ],
    [
        "United States",
        "9/13/2011",
        48.94
    ],
    [
        "United States",
        "9/13/2011",
        22.66
    ],
    [
        "United States",
        "9/13/2011",
        14.19
    ],
    [
        "United States",
        "9/13/2011",
        7.3
    ],
    [
        "United States",
        "9/13/2011",
        5.7
    ],
    [
        "United States",
        "9/13/2011",
        18.648
    ],
    [
        "United States",
        "9/13/2011",
        15.552
    ],
    [
        "United States",
        "9/13/2011",
        5.46
    ],
    [
        "United States",
        "9/13/2011",
        2.502
    ],
    [
        "United States",
        "9/14/2011",
        2799.96
    ],
    [
        "United States",
        "9/14/2011",
        601.3
    ],
    [
        "United States",
        "9/14/2011",
        464.292
    ],
    [
        "United States",
        "9/14/2011",
        287.97
    ],
    [
        "United States",
        "9/14/2011",
        449.15
    ],
    [
        "United States",
        "9/14/2011",
        142.4
    ],
    [
        "United States",
        "9/14/2011",
        68.46
    ],
    [
        "United States",
        "9/14/2011",
        44.82
    ],
    [
        "United States",
        "9/14/2011",
        52.448
    ],
    [
        "United States",
        "9/14/2011",
        13
    ],
    [
        "United States",
        "9/14/2011",
        16.99
    ],
    [
        "United States",
        "9/14/2011",
        13.128
    ],
    [
        "United States",
        "9/14/2011",
        20.16
    ],
    [
        "United States",
        "9/14/2011",
        6.848
    ],
    [
        "United States",
        "9/14/2011",
        8.552
    ],
    [
        "United States",
        "9/14/2011",
        6.048
    ],
    [
        "United States",
        "9/14/2011",
        11.07
    ],
    [
        "United States",
        "9/14/2011",
        7.16
    ],
    [
        "United States",
        "9/14/2011",
        9.96
    ],
    [
        "United States",
        "9/15/2011",
        103.936
    ],
    [
        "United States",
        "9/15/2011",
        14.56
    ],
    [
        "United States",
        "9/15/2011",
        14.94
    ],
    [
        "United States",
        "9/16/2011",
        33.552
    ],
    [
        "United States",
        "9/17/2011",
        182.94
    ],
    [
        "United States",
        "9/17/2011",
        137.24
    ],
    [
        "United States",
        "9/17/2011",
        148.704
    ],
    [
        "United States",
        "9/17/2011",
        57.93
    ],
    [
        "United States",
        "9/17/2011",
        55.92
    ],
    [
        "United States",
        "9/17/2011",
        35.34
    ],
    [
        "United States",
        "9/17/2011",
        30.28
    ],
    [
        "United States",
        "9/17/2011",
        29.925
    ],
    [
        "United States",
        "9/17/2011",
        40.24
    ],
    [
        "United States",
        "9/17/2011",
        38.256
    ],
    [
        "United States",
        "9/17/2011",
        47.984
    ],
    [
        "United States",
        "9/17/2011",
        5.892
    ],
    [
        "United States",
        "9/17/2011",
        4.624
    ],
    [
        "United States",
        "9/17/2011",
        5.248
    ],
    [
        "United States",
        "9/19/2011",
        2624.985
    ],
    [
        "United States",
        "9/19/2011",
        3059.982
    ],
    [
        "United States",
        "9/19/2011",
        2519.958
    ],
    [
        "United States",
        "9/19/2011",
        887.103
    ],
    [
        "United States",
        "9/19/2011",
        92.52
    ],
    [
        "United States",
        "9/19/2011",
        67.344
    ],
    [
        "United States",
        "9/19/2011",
        73.915
    ],
    [
        "United States",
        "9/19/2011",
        5.67
    ],
    [
        "United States",
        "9/19/2011",
        7.16
    ],
    [
        "United States",
        "9/20/2011",
        801.568
    ],
    [
        "United States",
        "9/20/2011",
        1349.91
    ],
    [
        "United States",
        "9/20/2011",
        631.782
    ],
    [
        "United States",
        "9/20/2011",
        629.95
    ],
    [
        "United States",
        "9/20/2011",
        493.43
    ],
    [
        "United States",
        "9/20/2011",
        362.94
    ],
    [
        "United States",
        "9/20/2011",
        617.7
    ],
    [
        "United States",
        "9/20/2011",
        164.22
    ],
    [
        "United States",
        "9/20/2011",
        75.18
    ],
    [
        "United States",
        "9/20/2011",
        59.98
    ],
    [
        "United States",
        "9/20/2011",
        30.98
    ],
    [
        "United States",
        "9/20/2011",
        11.12
    ],
    [
        "United States",
        "9/20/2011",
        43.92
    ],
    [
        "United States",
        "9/20/2011",
        20.232
    ],
    [
        "United States",
        "9/20/2011",
        21.72
    ],
    [
        "United States",
        "9/20/2011",
        8.56
    ],
    [
        "United States",
        "9/20/2011",
        2.816
    ],
    [
        "United States",
        "9/20/2011",
        9.96
    ],
    [
        "United States",
        "9/21/2011",
        1799.97
    ],
    [
        "United States",
        "9/21/2011",
        246.384
    ],
    [
        "United States",
        "9/21/2011",
        239.984
    ],
    [
        "United States",
        "9/21/2011",
        36.27
    ],
    [
        "United States",
        "9/21/2011",
        78.35
    ],
    [
        "United States",
        "9/21/2011",
        25.96
    ],
    [
        "United States",
        "9/21/2011",
        59.52
    ],
    [
        "United States",
        "9/21/2011",
        20.808
    ],
    [
        "United States",
        "9/21/2011",
        66.03
    ],
    [
        "United States",
        "9/21/2011",
        38.52
    ],
    [
        "United States",
        "9/21/2011",
        19.35
    ],
    [
        "United States",
        "9/21/2011",
        15.56
    ],
    [
        "United States",
        "9/21/2011",
        6.57
    ],
    [
        "United States",
        "9/21/2011",
        11.352
    ],
    [
        "United States",
        "9/21/2011",
        6.48
    ],
    [
        "United States",
        "9/21/2011",
        8.544
    ],
    [
        "United States",
        "9/22/2011",
        579.528
    ],
    [
        "United States",
        "9/22/2011",
        331.536
    ],
    [
        "United States",
        "9/22/2011",
        169.45
    ],
    [
        "United States",
        "9/22/2011",
        97.44
    ],
    [
        "United States",
        "9/22/2011",
        40.68
    ],
    [
        "United States",
        "9/22/2011",
        4.608
    ],
    [
        "United States",
        "9/22/2011",
        13.04
    ],
    [
        "United States",
        "9/22/2011",
        3.984
    ],
    [
        "United States",
        "9/23/2011",
        9449.95
    ],
    [
        "United States",
        "9/23/2011",
        435.999
    ],
    [
        "United States",
        "9/23/2011",
        404.9
    ],
    [
        "United States",
        "9/23/2011",
        139.44
    ],
    [
        "United States",
        "9/23/2011",
        83.984
    ],
    [
        "United States",
        "9/23/2011",
        34.5
    ],
    [
        "United States",
        "9/23/2011",
        28.8
    ],
    [
        "United States",
        "9/23/2011",
        18.464
    ],
    [
        "United States",
        "9/23/2011",
        32.4
    ],
    [
        "United States",
        "9/23/2011",
        9.84
    ],
    [
        "United States",
        "9/23/2011",
        12.94
    ],
    [
        "United States",
        "9/23/2011",
        11.12
    ],
    [
        "United States",
        "9/24/2011",
        211.96
    ],
    [
        "United States",
        "9/25/2011",
        300.5328
    ],
    [
        "United States",
        "9/25/2011",
        33.792
    ],
    [
        "United States",
        "9/25/2011",
        14.576
    ],
    [
        "United States",
        "9/25/2011",
        3.264
    ],
    [
        "United States",
        "9/25/2011",
        2.724
    ],
    [
        "United States",
        "9/26/2011",
        585.552
    ],
    [
        "United States",
        "9/26/2011",
        310.12
    ],
    [
        "United States",
        "9/26/2011",
        145.568
    ],
    [
        "United States",
        "9/26/2011",
        143.952
    ],
    [
        "United States",
        "9/26/2011",
        153.824
    ],
    [
        "United States",
        "9/26/2011",
        19.44
    ],
    [
        "United States",
        "9/26/2011",
        41.376
    ],
    [
        "United States",
        "9/26/2011",
        21.184
    ],
    [
        "United States",
        "9/26/2011",
        16.704
    ],
    [
        "United States",
        "9/26/2011",
        32.896
    ],
    [
        "United States",
        "9/26/2011",
        5.97
    ],
    [
        "United States",
        "9/26/2011",
        3.152
    ],
    [
        "United States",
        "9/26/2011",
        0.876
    ],
    [
        "United States",
        "9/27/2011",
        603.92
    ],
    [
        "United States",
        "9/27/2011",
        87.54
    ],
    [
        "United States",
        "9/27/2011",
        81.98
    ],
    [
        "United States",
        "9/28/2011",
        337.088
    ],
    [
        "United States",
        "9/28/2011",
        46.26
    ],
    [
        "United States",
        "9/28/2011",
        96.256
    ],
    [
        "United States",
        "9/28/2011",
        10.688
    ],
    [
        "United States",
        "9/29/2011",
        1801.632
    ],
    [
        "United States",
        "9/29/2011",
        2348.82
    ],
    [
        "United States",
        "9/29/2011",
        1395.54
    ],
    [
        "United States",
        "9/29/2011",
        686.32
    ],
    [
        "United States",
        "9/29/2011",
        409.272
    ],
    [
        "United States",
        "9/29/2011",
        807.75
    ],
    [
        "United States",
        "9/29/2011",
        117.36
    ],
    [
        "United States",
        "9/29/2011",
        204.6
    ],
    [
        "United States",
        "9/29/2011",
        77.52
    ],
    [
        "United States",
        "9/29/2011",
        55.44
    ],
    [
        "United States",
        "9/29/2011",
        67.176
    ],
    [
        "United States",
        "9/29/2011",
        62.18
    ],
    [
        "United States",
        "9/29/2011",
        20.928
    ],
    [
        "United States",
        "9/29/2011",
        18.9
    ],
    [
        "United States",
        "9/29/2011",
        6.48
    ],
    [
        "United States",
        "9/29/2011",
        8.72
    ],
    [
        "United States",
        "9/29/2011",
        6.16
    ],
    [
        "United States",
        "9/29/2011",
        10.048
    ],
    [
        "United States",
        "9/29/2011",
        4.224
    ],
    [
        "United States",
        "9/30/2011",
        795.408
    ],
    [
        "United States",
        "9/30/2011",
        48.94
    ],
    [
        "United States",
        "9/30/2011",
        43.176
    ],
    [
        "United States",
        "9/30/2011",
        69.216
    ],
    [
        "United States",
        "9/30/2011",
        15.552
    ],
    [
        "United States",
        "9/30/2011",
        15.24
    ],
    [
        "United States",
        "10/1/2011",
        4.71
    ],
    [
        "United States",
        "10/2/2011",
        318.4
    ],
    [
        "United States",
        "10/2/2011",
        230.376
    ],
    [
        "United States",
        "10/2/2011",
        12.768
    ],
    [
        "United States",
        "10/2/2011",
        15.36
    ],
    [
        "United States",
        "10/2/2011",
        4.672
    ],
    [
        "United States",
        "10/2/2011",
        9.408
    ],
    [
        "United States",
        "10/2/2011",
        7.16
    ],
    [
        "United States",
        "10/3/2011",
        258.279
    ],
    [
        "United States",
        "10/3/2011",
        142.488
    ],
    [
        "United States",
        "10/3/2011",
        143.432
    ],
    [
        "United States",
        "10/3/2011",
        55.984
    ],
    [
        "United States",
        "10/3/2011",
        122.352
    ],
    [
        "United States",
        "10/3/2011",
        61.568
    ],
    [
        "United States",
        "10/3/2011",
        31.776
    ],
    [
        "United States",
        "10/3/2011",
        14.48
    ],
    [
        "United States",
        "10/3/2011",
        15.072
    ],
    [
        "United States",
        "10/3/2011",
        4.928
    ],
    [
        "United States",
        "10/3/2011",
        6.192
    ],
    [
        "United States",
        "10/3/2011",
        4.344
    ],
    [
        "United States",
        "10/3/2011",
        1.788
    ],
    [
        "United States",
        "10/4/2011",
        589.41
    ],
    [
        "United States",
        "10/4/2011",
        95.648
    ],
    [
        "United States",
        "10/4/2011",
        14.45
    ],
    [
        "United States",
        "10/4/2011",
        29.24
    ],
    [
        "United States",
        "10/5/2011",
        99.98
    ],
    [
        "United States",
        "10/5/2011",
        91.92
    ],
    [
        "United States",
        "10/6/2011",
        386.34
    ],
    [
        "United States",
        "10/6/2011",
        83.92
    ],
    [
        "United States",
        "10/6/2011",
        15.36
    ],
    [
        "United States",
        "10/6/2011",
        9.09
    ],
    [
        "United States",
        "10/7/2011",
        129.92
    ],
    [
        "United States",
        "10/7/2011",
        107.44
    ],
    [
        "United States",
        "10/8/2011",
        123.92
    ],
    [
        "United States",
        "10/8/2011",
        23.472
    ],
    [
        "United States",
        "10/9/2011",
        144.6
    ],
    [
        "United States",
        "10/9/2011",
        88.768
    ],
    [
        "United States",
        "10/9/2011",
        15.992
    ],
    [
        "United States",
        "10/10/2011",
        255.85
    ],
    [
        "United States",
        "10/10/2011",
        719.952
    ],
    [
        "United States",
        "10/10/2011",
        755.944
    ],
    [
        "United States",
        "10/10/2011",
        122.352
    ],
    [
        "United States",
        "10/10/2011",
        101.994
    ],
    [
        "United States",
        "10/10/2011",
        46.872
    ],
    [
        "United States",
        "10/10/2011",
        15.28
    ],
    [
        "United States",
        "10/10/2011",
        18.264
    ],
    [
        "United States",
        "10/10/2011",
        11.98
    ],
    [
        "United States",
        "10/10/2011",
        0.898
    ],
    [
        "United States",
        "10/11/2011",
        433.568
    ],
    [
        "United States",
        "10/11/2011",
        345
    ],
    [
        "United States",
        "10/11/2011",
        201.432
    ],
    [
        "United States",
        "10/11/2011",
        281.904
    ],
    [
        "United States",
        "10/11/2011",
        31.92
    ],
    [
        "United States",
        "10/11/2011",
        63.47
    ],
    [
        "United States",
        "10/11/2011",
        7.31
    ],
    [
        "United States",
        "10/11/2011",
        8.92
    ],
    [
        "United States",
        "10/11/2011",
        7.64
    ],
    [
        "United States",
        "10/12/2011",
        21.39
    ],
    [
        "United States",
        "10/12/2011",
        22.24
    ],
    [
        "United States",
        "10/12/2011",
        14.9
    ],
    [
        "United States",
        "10/13/2011",
        1298.55
    ],
    [
        "United States",
        "10/13/2011",
        315.2
    ],
    [
        "United States",
        "10/13/2011",
        213.92
    ],
    [
        "United States",
        "10/13/2011",
        245.98
    ],
    [
        "United States",
        "10/13/2011",
        36.4
    ],
    [
        "United States",
        "10/13/2011",
        22.96
    ],
    [
        "United States",
        "10/13/2011",
        25.78
    ],
    [
        "United States",
        "10/13/2011",
        15.18
    ],
    [
        "United States",
        "10/13/2011",
        18.94
    ],
    [
        "United States",
        "10/13/2011",
        11.52
    ],
    [
        "United States",
        "10/13/2011",
        7.752
    ],
    [
        "United States",
        "10/14/2011",
        1628.82
    ],
    [
        "United States",
        "10/14/2011",
        1999.96
    ],
    [
        "United States",
        "10/14/2011",
        177
    ],
    [
        "United States",
        "10/14/2011",
        269.9
    ],
    [
        "United States",
        "10/14/2011",
        322.192
    ],
    [
        "United States",
        "10/14/2011",
        79.45
    ],
    [
        "United States",
        "10/14/2011",
        22.92
    ],
    [
        "United States",
        "10/14/2011",
        19.136
    ],
    [
        "United States",
        "10/14/2011",
        3.16
    ],
    [
        "United States",
        "10/14/2011",
        2.946
    ],
    [
        "United States",
        "10/15/2011",
        183.372
    ],
    [
        "United States",
        "10/15/2011",
        7.968
    ],
    [
        "United States",
        "10/15/2011",
        15.384
    ],
    [
        "United States",
        "10/16/2011",
        179.97
    ],
    [
        "United States",
        "10/16/2011",
        14.352
    ],
    [
        "United States",
        "10/17/2011",
        119.976
    ],
    [
        "United States",
        "10/17/2011",
        5.312
    ],
    [
        "United States",
        "10/17/2011",
        10.78
    ],
    [
        "United States",
        "10/18/2011",
        1394.95
    ],
    [
        "United States",
        "10/18/2011",
        275.97
    ],
    [
        "United States",
        "10/18/2011",
        605.34
    ],
    [
        "United States",
        "10/18/2011",
        545.88
    ],
    [
        "United States",
        "10/18/2011",
        186.912
    ],
    [
        "United States",
        "10/18/2011",
        61.96
    ],
    [
        "United States",
        "10/18/2011",
        52.512
    ],
    [
        "United States",
        "10/18/2011",
        10.048
    ],
    [
        "United States",
        "10/18/2011",
        1.344
    ],
    [
        "United States",
        "10/19/2011",
        321.552
    ],
    [
        "United States",
        "10/19/2011",
        117.576
    ],
    [
        "United States",
        "10/19/2011",
        146.73
    ],
    [
        "United States",
        "10/19/2011",
        20.064
    ],
    [
        "United States",
        "10/19/2011",
        13.44
    ],
    [
        "United States",
        "10/19/2011",
        18.75
    ],
    [
        "United States",
        "10/19/2011",
        2.992
    ],
    [
        "United States",
        "10/20/2011",
        505.32
    ],
    [
        "United States",
        "10/20/2011",
        319.968
    ],
    [
        "United States",
        "10/20/2011",
        211.96
    ],
    [
        "United States",
        "10/20/2011",
        328.59
    ],
    [
        "United States",
        "10/20/2011",
        98.352
    ],
    [
        "United States",
        "10/20/2011",
        24.424
    ],
    [
        "United States",
        "10/20/2011",
        8.682
    ],
    [
        "United States",
        "10/20/2011",
        3.808
    ],
    [
        "United States",
        "10/21/2011",
        409.59
    ],
    [
        "United States",
        "10/21/2011",
        121.792
    ],
    [
        "United States",
        "10/21/2011",
        591.32
    ],
    [
        "United States",
        "10/21/2011",
        194.7
    ],
    [
        "United States",
        "10/21/2011",
        36.36
    ],
    [
        "United States",
        "10/21/2011",
        2.84
    ],
    [
        "United States",
        "10/22/2011",
        129.92
    ],
    [
        "United States",
        "10/22/2011",
        93.888
    ],
    [
        "United States",
        "10/24/2011",
        11.85
    ],
    [
        "United States",
        "10/24/2011",
        34.272
    ],
    [
        "United States",
        "10/24/2011",
        10.368
    ],
    [
        "United States",
        "10/25/2011",
        49.408
    ],
    [
        "United States",
        "10/25/2011",
        40.776
    ],
    [
        "United States",
        "10/25/2011",
        13.698
    ],
    [
        "United States",
        "10/26/2011",
        383.96
    ],
    [
        "United States",
        "10/26/2011",
        63.92
    ],
    [
        "United States",
        "10/27/2011",
        11.952
    ],
    [
        "United States",
        "10/27/2011",
        10.368
    ],
    [
        "United States",
        "10/28/2011",
        616.998
    ],
    [
        "United States",
        "10/28/2011",
        257.98
    ],
    [
        "United States",
        "10/28/2011",
        480.74
    ],
    [
        "United States",
        "10/28/2011",
        141.4
    ],
    [
        "United States",
        "10/28/2011",
        7.184
    ],
    [
        "United States",
        "10/28/2011",
        6.28
    ],
    [
        "United States",
        "10/29/2011",
        2735.952
    ],
    [
        "United States",
        "10/29/2011",
        75.88
    ],
    [
        "United States",
        "10/29/2011",
        1.98
    ],
    [
        "United States",
        "10/31/2011",
        1604.9
    ],
    [
        "United States",
        "10/31/2011",
        1421.664
    ],
    [
        "United States",
        "10/31/2011",
        742.336
    ],
    [
        "United States",
        "10/31/2011",
        385.686
    ],
    [
        "United States",
        "10/31/2011",
        251.91
    ],
    [
        "United States",
        "10/31/2011",
        73.584
    ],
    [
        "United States",
        "10/31/2011",
        146.352
    ],
    [
        "United States",
        "10/31/2011",
        405.64
    ],
    [
        "United States",
        "10/31/2011",
        80.3
    ],
    [
        "United States",
        "10/31/2011",
        64.74
    ],
    [
        "United States",
        "10/31/2011",
        19.296
    ],
    [
        "United States",
        "10/31/2011",
        14.76
    ],
    [
        "United States",
        "10/31/2011",
        49.25
    ],
    [
        "United States",
        "10/31/2011",
        12.39
    ],
    [
        "United States",
        "10/31/2011",
        17.67
    ],
    [
        "United States",
        "10/31/2011",
        34.08
    ],
    [
        "United States",
        "10/31/2011",
        15.968
    ],
    [
        "United States",
        "10/31/2011",
        11.34
    ],
    [
        "United States",
        "10/31/2011",
        10.16
    ],
    [
        "United States",
        "11/1/2011",
        1983.968
    ],
    [
        "United States",
        "11/1/2011",
        978.84
    ],
    [
        "United States",
        "11/1/2011",
        443.92
    ],
    [
        "United States",
        "11/1/2011",
        533.94
    ],
    [
        "United States",
        "11/1/2011",
        76.12
    ],
    [
        "United States",
        "11/1/2011",
        69.52
    ],
    [
        "United States",
        "11/1/2011",
        68.704
    ],
    [
        "United States",
        "11/1/2011",
        47.808
    ],
    [
        "United States",
        "11/1/2011",
        155.976
    ],
    [
        "United States",
        "11/1/2011",
        167.94
    ],
    [
        "United States",
        "11/1/2011",
        44.4
    ],
    [
        "United States",
        "11/1/2011",
        43.176
    ],
    [
        "United States",
        "11/1/2011",
        31.68
    ],
    [
        "United States",
        "11/1/2011",
        15.696
    ],
    [
        "United States",
        "11/1/2011",
        22.428
    ],
    [
        "United States",
        "11/1/2011",
        10.272
    ],
    [
        "United States",
        "11/1/2011",
        21.4
    ],
    [
        "United States",
        "11/1/2011",
        5.64
    ],
    [
        "United States",
        "11/1/2011",
        7.52
    ],
    [
        "United States",
        "11/1/2011",
        3.132
    ],
    [
        "United States",
        "11/2/2011",
        799.92
    ],
    [
        "United States",
        "11/2/2011",
        539.964
    ],
    [
        "United States",
        "11/2/2011",
        362.92
    ],
    [
        "United States",
        "11/2/2011",
        89.34
    ],
    [
        "United States",
        "11/2/2011",
        46.384
    ],
    [
        "United States",
        "11/2/2011",
        88.776
    ],
    [
        "United States",
        "11/2/2011",
        50.232
    ],
    [
        "United States",
        "11/2/2011",
        52.792
    ],
    [
        "United States",
        "11/2/2011",
        41.94
    ],
    [
        "United States",
        "11/2/2011",
        34.86
    ],
    [
        "United States",
        "11/2/2011",
        19.242
    ],
    [
        "United States",
        "11/3/2011",
        783.96
    ],
    [
        "United States",
        "11/3/2011",
        410.352
    ],
    [
        "United States",
        "11/3/2011",
        945.036
    ],
    [
        "United States",
        "11/3/2011",
        286.344
    ],
    [
        "United States",
        "11/3/2011",
        89.97
    ],
    [
        "United States",
        "11/3/2011",
        143.856
    ],
    [
        "United States",
        "11/3/2011",
        48.896
    ],
    [
        "United States",
        "11/3/2011",
        25.984
    ],
    [
        "United States",
        "11/3/2011",
        6.72
    ],
    [
        "United States",
        "11/3/2011",
        11.64
    ],
    [
        "United States",
        "11/3/2011",
        5.76
    ],
    [
        "United States",
        "11/3/2011",
        14.301
    ],
    [
        "United States",
        "11/3/2011",
        7.856
    ],
    [
        "United States",
        "11/3/2011",
        3.488
    ],
    [
        "United States",
        "11/4/2011",
        3991.98
    ],
    [
        "United States",
        "11/4/2011",
        666.344
    ],
    [
        "United States",
        "11/4/2011",
        275.94
    ],
    [
        "United States",
        "11/4/2011",
        360
    ],
    [
        "United States",
        "11/4/2011",
        447.968
    ],
    [
        "United States",
        "11/4/2011",
        573.728
    ],
    [
        "United States",
        "11/4/2011",
        135.882
    ],
    [
        "United States",
        "11/4/2011",
        35.34
    ],
    [
        "United States",
        "11/4/2011",
        43.57
    ],
    [
        "United States",
        "11/4/2011",
        58.24
    ],
    [
        "United States",
        "11/4/2011",
        52.064
    ],
    [
        "United States",
        "11/4/2011",
        21.936
    ],
    [
        "United States",
        "11/4/2011",
        19.44
    ],
    [
        "United States",
        "11/4/2011",
        8.376
    ],
    [
        "United States",
        "11/4/2011",
        2.94
    ],
    [
        "United States",
        "11/5/2011",
        1080.096
    ],
    [
        "United States",
        "11/5/2011",
        149.9
    ],
    [
        "United States",
        "11/5/2011",
        273.568
    ],
    [
        "United States",
        "11/5/2011",
        47.79
    ],
    [
        "United States",
        "11/5/2011",
        58.416
    ],
    [
        "United States",
        "11/5/2011",
        51.56
    ],
    [
        "United States",
        "11/5/2011",
        20.04
    ],
    [
        "United States",
        "11/5/2011",
        13.194
    ],
    [
        "United States",
        "11/6/2011",
        43.68
    ],
    [
        "United States",
        "11/7/2011",
        683.144
    ],
    [
        "United States",
        "11/7/2011",
        74.352
    ],
    [
        "United States",
        "11/7/2011",
        245.88
    ],
    [
        "United States",
        "11/7/2011",
        120.768
    ],
    [
        "United States",
        "11/7/2011",
        123.144
    ],
    [
        "United States",
        "11/7/2011",
        26.046
    ],
    [
        "United States",
        "11/7/2011",
        25.92
    ],
    [
        "United States",
        "11/7/2011",
        40.712
    ],
    [
        "United States",
        "11/7/2011",
        22.58
    ],
    [
        "United States",
        "11/7/2011",
        36.63
    ],
    [
        "United States",
        "11/7/2011",
        30.18
    ],
    [
        "United States",
        "11/7/2011",
        12.39
    ],
    [
        "United States",
        "11/7/2011",
        5.92
    ],
    [
        "United States",
        "11/7/2011",
        1.476
    ],
    [
        "United States",
        "11/8/2011",
        333.576
    ],
    [
        "United States",
        "11/9/2011",
        703.968
    ],
    [
        "United States",
        "11/9/2011",
        340.92
    ],
    [
        "United States",
        "11/9/2011",
        222.666
    ],
    [
        "United States",
        "11/9/2011",
        94.85
    ],
    [
        "United States",
        "11/9/2011",
        62.65
    ],
    [
        "United States",
        "11/9/2011",
        92.52
    ],
    [
        "United States",
        "11/9/2011",
        56.52
    ],
    [
        "United States",
        "11/10/2011",
        601.536
    ],
    [
        "United States",
        "11/10/2011",
        535.41
    ],
    [
        "United States",
        "11/10/2011",
        563.94
    ],
    [
        "United States",
        "11/10/2011",
        53.2
    ],
    [
        "United States",
        "11/10/2011",
        39.88
    ],
    [
        "United States",
        "11/10/2011",
        62.24
    ],
    [
        "United States",
        "11/10/2011",
        39.84
    ],
    [
        "United States",
        "11/10/2011",
        10.99
    ],
    [
        "United States",
        "11/10/2011",
        62.94
    ],
    [
        "United States",
        "11/10/2011",
        12.84
    ],
    [
        "United States",
        "11/10/2011",
        15.84
    ],
    [
        "United States",
        "11/10/2011",
        3.9
    ],
    [
        "United States",
        "11/11/2011",
        2033.584
    ],
    [
        "United States",
        "11/11/2011",
        575.928
    ],
    [
        "United States",
        "11/11/2011",
        797.944
    ],
    [
        "United States",
        "11/11/2011",
        665.88
    ],
    [
        "United States",
        "11/11/2011",
        603.92
    ],
    [
        "United States",
        "11/11/2011",
        521.96
    ],
    [
        "United States",
        "11/11/2011",
        896.99
    ],
    [
        "United States",
        "11/11/2011",
        262.336
    ],
    [
        "United States",
        "11/11/2011",
        223.92
    ],
    [
        "United States",
        "11/11/2011",
        123.92
    ],
    [
        "United States",
        "11/11/2011",
        559.984
    ],
    [
        "United States",
        "11/11/2011",
        241.176
    ],
    [
        "United States",
        "11/11/2011",
        112.648
    ],
    [
        "United States",
        "11/11/2011",
        102.13
    ],
    [
        "United States",
        "11/11/2011",
        148.48
    ],
    [
        "United States",
        "11/11/2011",
        67.56
    ],
    [
        "United States",
        "11/11/2011",
        30.48
    ],
    [
        "United States",
        "11/11/2011",
        46.35
    ],
    [
        "United States",
        "11/11/2011",
        23.968
    ],
    [
        "United States",
        "11/11/2011",
        22.98
    ],
    [
        "United States",
        "11/11/2011",
        21.72
    ],
    [
        "United States",
        "11/11/2011",
        10.984
    ],
    [
        "United States",
        "11/11/2011",
        7.78
    ],
    [
        "United States",
        "11/11/2011",
        7.3
    ],
    [
        "United States",
        "11/11/2011",
        3.392
    ],
    [
        "United States",
        "11/11/2011",
        1.234
    ],
    [
        "United States",
        "11/12/2011",
        629.064
    ],
    [
        "United States",
        "11/12/2011",
        49.632
    ],
    [
        "United States",
        "11/12/2011",
        127.984
    ],
    [
        "United States",
        "11/12/2011",
        67.9932
    ],
    [
        "United States",
        "11/12/2011",
        79.512
    ],
    [
        "United States",
        "11/12/2011",
        36.288
    ],
    [
        "United States",
        "11/12/2011",
        25.128
    ],
    [
        "United States",
        "11/12/2011",
        16.656
    ],
    [
        "United States",
        "11/12/2011",
        7.872
    ],
    [
        "United States",
        "11/12/2011",
        11.96
    ],
    [
        "United States",
        "11/12/2011",
        2.672
    ],
    [
        "United States",
        "11/14/2011",
        832.93
    ],
    [
        "United States",
        "11/14/2011",
        43.8
    ],
    [
        "United States",
        "11/14/2011",
        69.264
    ],
    [
        "United States",
        "11/14/2011",
        20.736
    ],
    [
        "United States",
        "11/14/2011",
        32.4
    ],
    [
        "United States",
        "11/14/2011",
        11.36
    ],
    [
        "United States",
        "11/14/2011",
        12.72
    ],
    [
        "United States",
        "11/14/2011",
        11.52
    ],
    [
        "United States",
        "11/15/2011",
        772.47
    ],
    [
        "United States",
        "11/15/2011",
        604.656
    ],
    [
        "United States",
        "11/15/2011",
        333.056
    ],
    [
        "United States",
        "11/15/2011",
        20.46
    ],
    [
        "United States",
        "11/15/2011",
        10.95
    ],
    [
        "United States",
        "11/15/2011",
        10.11
    ],
    [
        "United States",
        "11/15/2011",
        24.896
    ],
    [
        "United States",
        "11/15/2011",
        4.224
    ],
    [
        "United States",
        "11/16/2011",
        305.9745
    ],
    [
        "United States",
        "11/16/2011",
        344.91
    ],
    [
        "United States",
        "11/16/2011",
        273.96
    ],
    [
        "United States",
        "11/16/2011",
        79.968
    ],
    [
        "United States",
        "11/16/2011",
        78.35
    ],
    [
        "United States",
        "11/16/2011",
        169.45
    ],
    [
        "United States",
        "11/16/2011",
        37.296
    ],
    [
        "United States",
        "11/16/2011",
        29.12
    ],
    [
        "United States",
        "11/16/2011",
        31.68
    ],
    [
        "United States",
        "11/16/2011",
        5.22
    ],
    [
        "United States",
        "11/17/2011",
        2934.33
    ],
    [
        "United States",
        "11/17/2011",
        2152.776
    ],
    [
        "United States",
        "11/17/2011",
        733.95
    ],
    [
        "United States",
        "11/17/2011",
        4007.84
    ],
    [
        "United States",
        "11/17/2011",
        657.93
    ],
    [
        "United States",
        "11/17/2011",
        479.9
    ],
    [
        "United States",
        "11/17/2011",
        241.44
    ],
    [
        "United States",
        "11/17/2011",
        99.98
    ],
    [
        "United States",
        "11/17/2011",
        124.41
    ],
    [
        "United States",
        "11/17/2011",
        57.75
    ],
    [
        "United States",
        "11/17/2011",
        34.44
    ],
    [
        "United States",
        "11/17/2011",
        12.448
    ],
    [
        "United States",
        "11/17/2011",
        7.08
    ],
    [
        "United States",
        "11/18/2011",
        424.116
    ],
    [
        "United States",
        "11/18/2011",
        730.2
    ],
    [
        "United States",
        "11/18/2011",
        381.72
    ],
    [
        "United States",
        "11/18/2011",
        392.94
    ],
    [
        "United States",
        "11/18/2011",
        539.964
    ],
    [
        "United States",
        "11/18/2011",
        145.98
    ],
    [
        "United States",
        "11/18/2011",
        292.1
    ],
    [
        "United States",
        "11/18/2011",
        137.54
    ],
    [
        "United States",
        "11/18/2011",
        60.312
    ],
    [
        "United States",
        "11/18/2011",
        67.15
    ],
    [
        "United States",
        "11/18/2011",
        76.792
    ],
    [
        "United States",
        "11/18/2011",
        35.808
    ],
    [
        "United States",
        "11/18/2011",
        50.997
    ],
    [
        "United States",
        "11/18/2011",
        21.98
    ],
    [
        "United States",
        "11/18/2011",
        11.808
    ],
    [
        "United States",
        "11/18/2011",
        14.48
    ],
    [
        "United States",
        "11/18/2011",
        9.588
    ],
    [
        "United States",
        "11/18/2011",
        2.892
    ],
    [
        "United States",
        "11/18/2011",
        1.944
    ],
    [
        "United States",
        "11/18/2011",
        8.544
    ],
    [
        "United States",
        "11/19/2011",
        4548.81
    ],
    [
        "United States",
        "11/19/2011",
        1025.88
    ],
    [
        "United States",
        "11/19/2011",
        503.96
    ],
    [
        "United States",
        "11/19/2011",
        281.97
    ],
    [
        "United States",
        "11/19/2011",
        166.44
    ],
    [
        "United States",
        "11/19/2011",
        213.08
    ],
    [
        "United States",
        "11/19/2011",
        221.16
    ],
    [
        "United States",
        "11/19/2011",
        149.95
    ],
    [
        "United States",
        "11/19/2011",
        47.496
    ],
    [
        "United States",
        "11/19/2011",
        22.5
    ],
    [
        "United States",
        "11/19/2011",
        29
    ],
    [
        "United States",
        "11/19/2011",
        5.88
    ],
    [
        "United States",
        "11/19/2011",
        9.96
    ],
    [
        "United States",
        "11/20/2011",
        833.94
    ],
    [
        "United States",
        "11/20/2011",
        34.74
    ],
    [
        "United States",
        "11/20/2011",
        25.92
    ],
    [
        "United States",
        "11/20/2011",
        12.96
    ],
    [
        "United States",
        "11/21/2011",
        267.96
    ],
    [
        "United States",
        "11/21/2011",
        629.1
    ],
    [
        "United States",
        "11/21/2011",
        193.95
    ],
    [
        "United States",
        "11/21/2011",
        94.99
    ],
    [
        "United States",
        "11/21/2011",
        36.99
    ],
    [
        "United States",
        "11/21/2011",
        12.96
    ],
    [
        "United States",
        "11/21/2011",
        1.632
    ],
    [
        "United States",
        "11/21/2011",
        5.46
    ],
    [
        "United States",
        "11/21/2011",
        6.58
    ],
    [
        "United States",
        "11/22/2011",
        675.12
    ],
    [
        "United States",
        "11/22/2011",
        319.9
    ],
    [
        "United States",
        "11/22/2011",
        53.82
    ],
    [
        "United States",
        "11/22/2011",
        6.928
    ],
    [
        "United States",
        "11/22/2011",
        16.23
    ],
    [
        "United States",
        "11/22/2011",
        9.98
    ],
    [
        "United States",
        "11/22/2011",
        11.36
    ],
    [
        "United States",
        "11/22/2011",
        9.96
    ],
    [
        "United States",
        "11/23/2011",
        603.92
    ],
    [
        "United States",
        "11/23/2011",
        381.44
    ],
    [
        "United States",
        "11/23/2011",
        155.372
    ],
    [
        "United States",
        "11/23/2011",
        29.99
    ],
    [
        "United States",
        "11/23/2011",
        62.808
    ],
    [
        "United States",
        "11/23/2011",
        34.176
    ],
    [
        "United States",
        "11/23/2011",
        21.84
    ],
    [
        "United States",
        "11/23/2011",
        23.68
    ],
    [
        "United States",
        "11/23/2011",
        23.472
    ],
    [
        "United States",
        "11/23/2011",
        14.67
    ],
    [
        "United States",
        "11/23/2011",
        6.368
    ],
    [
        "United States",
        "11/23/2011",
        5.544
    ],
    [
        "United States",
        "11/24/2011",
        1049.97
    ],
    [
        "United States",
        "11/24/2011",
        1502.376
    ],
    [
        "United States",
        "11/24/2011",
        646.2
    ],
    [
        "United States",
        "11/24/2011",
        611.058
    ],
    [
        "United States",
        "11/24/2011",
        485.88
    ],
    [
        "United States",
        "11/24/2011",
        151.72
    ],
    [
        "United States",
        "11/24/2011",
        197.58
    ],
    [
        "United States",
        "11/24/2011",
        120.712
    ],
    [
        "United States",
        "11/24/2011",
        144.12
    ],
    [
        "United States",
        "11/24/2011",
        151.92
    ],
    [
        "United States",
        "11/24/2011",
        111.79
    ],
    [
        "United States",
        "11/24/2011",
        111.15
    ],
    [
        "United States",
        "11/24/2011",
        196.62
    ],
    [
        "United States",
        "11/24/2011",
        35.168
    ],
    [
        "United States",
        "11/24/2011",
        25.92
    ],
    [
        "United States",
        "11/24/2011",
        12.096
    ],
    [
        "United States",
        "11/24/2011",
        15.96
    ],
    [
        "United States",
        "11/24/2011",
        2.624
    ],
    [
        "United States",
        "11/24/2011",
        5.742
    ],
    [
        "United States",
        "11/25/2011",
        1117.92
    ],
    [
        "United States",
        "11/25/2011",
        1218.735
    ],
    [
        "United States",
        "11/25/2011",
        725.344
    ],
    [
        "United States",
        "11/25/2011",
        539.92
    ],
    [
        "United States",
        "11/25/2011",
        320.88
    ],
    [
        "United States",
        "11/25/2011",
        275.952
    ],
    [
        "United States",
        "11/25/2011",
        51.016
    ],
    [
        "United States",
        "11/25/2011",
        26.76
    ],
    [
        "United States",
        "11/25/2011",
        52.96
    ],
    [
        "United States",
        "11/25/2011",
        15.696
    ],
    [
        "United States",
        "11/25/2011",
        24.672
    ],
    [
        "United States",
        "11/25/2011",
        23.88
    ],
    [
        "United States",
        "11/25/2011",
        7.44
    ],
    [
        "United States",
        "11/25/2011",
        6.096
    ],
    [
        "United States",
        "11/25/2011",
        5.904
    ],
    [
        "United States",
        "11/25/2011",
        2.52
    ],
    [
        "United States",
        "11/26/2011",
        669.08
    ],
    [
        "United States",
        "11/26/2011",
        438.336
    ],
    [
        "United States",
        "11/26/2011",
        93.15
    ],
    [
        "United States",
        "11/26/2011",
        279.96
    ],
    [
        "United States",
        "11/26/2011",
        17.088
    ],
    [
        "United States",
        "11/26/2011",
        81.98
    ],
    [
        "United States",
        "11/26/2011",
        40.54
    ],
    [
        "United States",
        "11/26/2011",
        11.52
    ],
    [
        "United States",
        "11/26/2011",
        12.912
    ],
    [
        "United States",
        "11/26/2011",
        14.94
    ],
    [
        "United States",
        "11/26/2011",
        15.552
    ],
    [
        "United States",
        "11/26/2011",
        19.3
    ],
    [
        "United States",
        "11/26/2011",
        7.312
    ],
    [
        "United States",
        "11/26/2011",
        4.32
    ],
    [
        "United States",
        "11/27/2011",
        199.9
    ],
    [
        "United States",
        "11/27/2011",
        3.76
    ],
    [
        "United States",
        "11/28/2011",
        397.6
    ],
    [
        "United States",
        "11/28/2011",
        998.85
    ],
    [
        "United States",
        "11/28/2011",
        139.93
    ],
    [
        "United States",
        "11/28/2011",
        85.96
    ],
    [
        "United States",
        "11/28/2011",
        411.332
    ],
    [
        "United States",
        "11/28/2011",
        45.66
    ],
    [
        "United States",
        "11/28/2011",
        13.12
    ],
    [
        "United States",
        "11/28/2011",
        43.68
    ],
    [
        "United States",
        "11/28/2011",
        41.4
    ],
    [
        "United States",
        "11/28/2011",
        64.02
    ],
    [
        "United States",
        "11/28/2011",
        17.248
    ],
    [
        "United States",
        "11/28/2011",
        7.36
    ],
    [
        "United States",
        "11/28/2011",
        14.67
    ],
    [
        "United States",
        "11/29/2011",
        575.92
    ],
    [
        "United States",
        "11/29/2011",
        30.4
    ],
    [
        "United States",
        "11/29/2011",
        25.06
    ],
    [
        "United States",
        "11/29/2011",
        12.624
    ],
    [
        "United States",
        "11/29/2011",
        5.04
    ],
    [
        "United States",
        "11/30/2011",
        102.24
    ],
    [
        "United States",
        "11/30/2011",
        62.28
    ],
    [
        "United States",
        "11/30/2011",
        47.992
    ],
    [
        "United States",
        "11/30/2011",
        6.642
    ],
    [
        "United States",
        "12/1/2011",
        2807.84
    ],
    [
        "United States",
        "12/1/2011",
        909.72
    ],
    [
        "United States",
        "12/1/2011",
        674.058
    ],
    [
        "United States",
        "12/1/2011",
        271.9
    ],
    [
        "United States",
        "12/1/2011",
        659.988
    ],
    [
        "United States",
        "12/1/2011",
        46.64
    ],
    [
        "United States",
        "12/1/2011",
        45.84
    ],
    [
        "United States",
        "12/1/2011",
        58.2
    ],
    [
        "United States",
        "12/1/2011",
        95.968
    ],
    [
        "United States",
        "12/1/2011",
        36.288
    ],
    [
        "United States",
        "12/1/2011",
        9.82
    ],
    [
        "United States",
        "12/1/2011",
        8.128
    ],
    [
        "United States",
        "12/2/2011",
        883.92
    ],
    [
        "United States",
        "12/2/2011",
        239.84
    ],
    [
        "United States",
        "12/2/2011",
        119.96
    ],
    [
        "United States",
        "12/2/2011",
        146.82
    ],
    [
        "United States",
        "12/2/2011",
        119.8
    ],
    [
        "United States",
        "12/2/2011",
        60.72
    ],
    [
        "United States",
        "12/2/2011",
        46.72
    ],
    [
        "United States",
        "12/2/2011",
        58.36
    ],
    [
        "United States",
        "12/2/2011",
        39.96
    ],
    [
        "United States",
        "12/2/2011",
        15.66
    ],
    [
        "United States",
        "12/2/2011",
        16.464
    ],
    [
        "United States",
        "12/2/2011",
        15.24
    ],
    [
        "United States",
        "12/2/2011",
        5.95
    ],
    [
        "United States",
        "12/2/2011",
        2.394
    ],
    [
        "United States",
        "12/3/2011",
        479.96
    ],
    [
        "United States",
        "12/3/2011",
        25.92
    ],
    [
        "United States",
        "12/4/2011",
        129.98
    ],
    [
        "United States",
        "12/5/2011",
        1113.024
    ],
    [
        "United States",
        "12/5/2011",
        348.488
    ],
    [
        "United States",
        "12/5/2011",
        408.744
    ],
    [
        "United States",
        "12/5/2011",
        250.26
    ],
    [
        "United States",
        "12/5/2011",
        172.736
    ],
    [
        "United States",
        "12/5/2011",
        167.968
    ],
    [
        "United States",
        "12/5/2011",
        179.94
    ],
    [
        "United States",
        "12/5/2011",
        98.376
    ],
    [
        "United States",
        "12/5/2011",
        24.816
    ],
    [
        "United States",
        "12/5/2011",
        17.472
    ],
    [
        "United States",
        "12/5/2011",
        36.738
    ],
    [
        "United States",
        "12/5/2011",
        49.12
    ],
    [
        "United States",
        "12/5/2011",
        24.56
    ],
    [
        "United States",
        "12/5/2011",
        26.46
    ],
    [
        "United States",
        "12/5/2011",
        15
    ],
    [
        "United States",
        "12/5/2011",
        29.94
    ],
    [
        "United States",
        "12/6/2011",
        1261.33
    ],
    [
        "United States",
        "12/6/2011",
        275.49
    ],
    [
        "United States",
        "12/6/2011",
        214.95
    ],
    [
        "United States",
        "12/6/2011",
        42.208
    ],
    [
        "United States",
        "12/6/2011",
        35.168
    ],
    [
        "United States",
        "12/6/2011",
        23.976
    ],
    [
        "United States",
        "12/6/2011",
        35.04
    ],
    [
        "United States",
        "12/6/2011",
        53.424
    ],
    [
        "United States",
        "12/6/2011",
        14.016
    ],
    [
        "United States",
        "12/6/2011",
        10.776
    ],
    [
        "United States",
        "12/6/2011",
        4.6
    ],
    [
        "United States",
        "12/7/2011",
        164.88
    ],
    [
        "United States",
        "12/7/2011",
        269.36
    ],
    [
        "United States",
        "12/7/2011",
        105.52
    ],
    [
        "United States",
        "12/7/2011",
        8.64
    ],
    [
        "United States",
        "12/8/2011",
        603.92
    ],
    [
        "United States",
        "12/8/2011",
        45.68
    ],
    [
        "United States",
        "12/8/2011",
        103.92
    ],
    [
        "United States",
        "12/8/2011",
        60.416
    ],
    [
        "United States",
        "12/8/2011",
        79.44
    ],
    [
        "United States",
        "12/8/2011",
        52.68
    ],
    [
        "United States",
        "12/8/2011",
        27.888
    ],
    [
        "United States",
        "12/8/2011",
        39.88
    ],
    [
        "United States",
        "12/8/2011",
        39.072
    ],
    [
        "United States",
        "12/8/2011",
        13.88
    ],
    [
        "United States",
        "12/8/2011",
        6.456
    ],
    [
        "United States",
        "12/8/2011",
        11.52
    ],
    [
        "United States",
        "12/8/2011",
        10.368
    ],
    [
        "United States",
        "12/9/2011",
        1079.976
    ],
    [
        "United States",
        "12/9/2011",
        100.704
    ],
    [
        "United States",
        "12/9/2011",
        34.68
    ],
    [
        "United States",
        "12/9/2011",
        10.688
    ],
    [
        "United States",
        "12/9/2011",
        30.672
    ],
    [
        "United States",
        "12/9/2011",
        20.388
    ],
    [
        "United States",
        "12/9/2011",
        8.448
    ],
    [
        "United States",
        "12/9/2011",
        237.096
    ],
    [
        "United States",
        "12/10/2011",
        338.352
    ],
    [
        "United States",
        "12/10/2011",
        91.36
    ],
    [
        "United States",
        "12/10/2011",
        106.344
    ],
    [
        "United States",
        "12/10/2011",
        25.92
    ],
    [
        "United States",
        "12/10/2011",
        11.36
    ],
    [
        "United States",
        "12/12/2011",
        3610.848
    ],
    [
        "United States",
        "12/12/2011",
        764.688
    ],
    [
        "United States",
        "12/12/2011",
        254.9745
    ],
    [
        "United States",
        "12/12/2011",
        210.392
    ],
    [
        "United States",
        "12/12/2011",
        43.31
    ],
    [
        "United States",
        "12/12/2011",
        23.472
    ],
    [
        "United States",
        "12/12/2011",
        12.54
    ],
    [
        "United States",
        "12/12/2011",
        9.24
    ],
    [
        "United States",
        "12/12/2011",
        8.94
    ],
    [
        "United States",
        "12/13/2011",
        87.96
    ],
    [
        "United States",
        "12/13/2011",
        94.428
    ],
    [
        "United States",
        "12/13/2011",
        90.24
    ],
    [
        "United States",
        "12/13/2011",
        12.39
    ],
    [
        "United States",
        "12/13/2011",
        5.214
    ],
    [
        "United States",
        "12/13/2011",
        2.92
    ],
    [
        "United States",
        "12/14/2011",
        6999.96
    ],
    [
        "United States",
        "12/14/2011",
        263.96
    ],
    [
        "United States",
        "12/14/2011",
        136.53
    ],
    [
        "United States",
        "12/14/2011",
        186.304
    ],
    [
        "United States",
        "12/14/2011",
        35.016
    ],
    [
        "United States",
        "12/14/2011",
        9.264
    ],
    [
        "United States",
        "12/14/2011",
        5.104
    ],
    [
        "United States",
        "12/14/2011",
        2.624
    ],
    [
        "United States",
        "12/14/2011",
        2.896
    ],
    [
        "United States",
        "12/15/2011",
        763.28
    ],
    [
        "United States",
        "12/15/2011",
        445.802
    ],
    [
        "United States",
        "12/15/2011",
        8.544
    ],
    [
        "United States",
        "12/15/2011",
        40.68
    ],
    [
        "United States",
        "12/15/2011",
        6.16
    ],
    [
        "United States",
        "12/16/2011",
        1013.832
    ],
    [
        "United States",
        "12/16/2011",
        627.168
    ],
    [
        "United States",
        "12/16/2011",
        319.968
    ],
    [
        "United States",
        "12/16/2011",
        1403.92
    ],
    [
        "United States",
        "12/16/2011",
        241.568
    ],
    [
        "United States",
        "12/16/2011",
        395
    ],
    [
        "United States",
        "12/16/2011",
        99.98
    ],
    [
        "United States",
        "12/16/2011",
        114.2
    ],
    [
        "United States",
        "12/16/2011",
        44.46
    ],
    [
        "United States",
        "12/16/2011",
        56.568
    ],
    [
        "United States",
        "12/16/2011",
        8.624
    ],
    [
        "United States",
        "12/16/2011",
        36.288
    ],
    [
        "United States",
        "12/16/2011",
        29.46
    ],
    [
        "United States",
        "12/16/2011",
        1.984
    ],
    [
        "United States",
        "12/16/2011",
        1.167
    ],
    [
        "United States",
        "12/17/2011",
        40.05
    ],
    [
        "United States",
        "12/17/2011",
        5.484
    ],
    [
        "United States",
        "12/19/2011",
        1819.86
    ],
    [
        "United States",
        "12/19/2011",
        583.8
    ],
    [
        "United States",
        "12/19/2011",
        211.168
    ],
    [
        "United States",
        "12/19/2011",
        323.976
    ],
    [
        "United States",
        "12/19/2011",
        152.76
    ],
    [
        "United States",
        "12/19/2011",
        247.8
    ],
    [
        "United States",
        "12/19/2011",
        32.592
    ],
    [
        "United States",
        "12/19/2011",
        22.55
    ],
    [
        "United States",
        "12/19/2011",
        7.27
    ],
    [
        "United States",
        "12/19/2011",
        14.62
    ],
    [
        "United States",
        "12/19/2011",
        15.552
    ],
    [
        "United States",
        "12/19/2011",
        4.812
    ],
    [
        "United States",
        "12/20/2011",
        2244.48
    ],
    [
        "United States",
        "12/20/2011",
        447.944
    ],
    [
        "United States",
        "12/20/2011",
        455.1
    ],
    [
        "United States",
        "12/20/2011",
        1103.97
    ],
    [
        "United States",
        "12/20/2011",
        242.352
    ],
    [
        "United States",
        "12/20/2011",
        487.984
    ],
    [
        "United States",
        "12/20/2011",
        221.92
    ],
    [
        "United States",
        "12/20/2011",
        155.12
    ],
    [
        "United States",
        "12/20/2011",
        122.48
    ],
    [
        "United States",
        "12/20/2011",
        192.186
    ],
    [
        "United States",
        "12/20/2011",
        190.848
    ],
    [
        "United States",
        "12/20/2011",
        71.976
    ],
    [
        "United States",
        "12/20/2011",
        51.968
    ],
    [
        "United States",
        "12/20/2011",
        62.31
    ],
    [
        "United States",
        "12/20/2011",
        47.3
    ],
    [
        "United States",
        "12/20/2011",
        43.512
    ],
    [
        "United States",
        "12/20/2011",
        25.92
    ],
    [
        "United States",
        "12/20/2011",
        65.44
    ],
    [
        "United States",
        "12/20/2011",
        19.432
    ],
    [
        "United States",
        "12/20/2011",
        662.88
    ],
    [
        "United States",
        "12/20/2011",
        31.05
    ],
    [
        "United States",
        "12/20/2011",
        4.13
    ],
    [
        "United States",
        "12/20/2011",
        8.448
    ],
    [
        "United States",
        "12/20/2011",
        3.69
    ],
    [
        "United States",
        "12/21/2011",
        1325.76
    ],
    [
        "United States",
        "12/21/2011",
        572.16
    ],
    [
        "United States",
        "12/21/2011",
        18.24
    ],
    [
        "United States",
        "12/21/2011",
        17.28
    ],
    [
        "United States",
        "12/22/2011",
        296.712
    ],
    [
        "United States",
        "12/22/2011",
        216.4
    ],
    [
        "United States",
        "12/22/2011",
        124.032
    ],
    [
        "United States",
        "12/22/2011",
        132.16
    ],
    [
        "United States",
        "12/22/2011",
        11.76
    ],
    [
        "United States",
        "12/22/2011",
        17.904
    ],
    [
        "United States",
        "12/23/2011",
        424.272
    ],
    [
        "United States",
        "12/23/2011",
        207.24
    ],
    [
        "United States",
        "12/23/2011",
        83.92
    ],
    [
        "United States",
        "12/23/2011",
        64.784
    ],
    [
        "United States",
        "12/23/2011",
        45.528
    ],
    [
        "United States",
        "12/23/2011",
        53.316
    ],
    [
        "United States",
        "12/23/2011",
        56.52
    ],
    [
        "United States",
        "12/23/2011",
        5.184
    ],
    [
        "United States",
        "12/23/2011",
        1.344
    ],
    [
        "United States",
        "12/24/2011",
        818.376
    ],
    [
        "United States",
        "12/24/2011",
        361.96
    ],
    [
        "United States",
        "12/24/2011",
        292.272
    ],
    [
        "United States",
        "12/24/2011",
        173.656
    ],
    [
        "United States",
        "12/24/2011",
        142.86
    ],
    [
        "United States",
        "12/24/2011",
        30.36
    ],
    [
        "United States",
        "12/24/2011",
        62.85
    ],
    [
        "United States",
        "12/24/2011",
        23.99
    ],
    [
        "United States",
        "12/24/2011",
        13.97
    ],
    [
        "United States",
        "12/24/2011",
        9.568
    ],
    [
        "United States",
        "12/24/2011",
        20.34
    ],
    [
        "United States",
        "12/26/2011",
        230.352
    ],
    [
        "United States",
        "12/26/2011",
        218.352
    ],
    [
        "United States",
        "12/26/2011",
        600.558
    ],
    [
        "United States",
        "12/26/2011",
        300.416
    ],
    [
        "United States",
        "12/26/2011",
        227.136
    ],
    [
        "United States",
        "12/26/2011",
        78.6
    ],
    [
        "United States",
        "12/26/2011",
        191.88
    ],
    [
        "United States",
        "12/26/2011",
        81.552
    ],
    [
        "United States",
        "12/26/2011",
        27.552
    ],
    [
        "United States",
        "12/26/2011",
        34.656
    ],
    [
        "United States",
        "12/26/2011",
        18.264
    ],
    [
        "United States",
        "12/26/2011",
        8.69
    ],
    [
        "United States",
        "12/26/2011",
        11.91
    ],
    [
        "United States",
        "12/26/2011",
        8.016
    ],
    [
        "United States",
        "12/26/2011",
        3.48
    ],
    [
        "United States",
        "12/27/2011",
        946.764
    ],
    [
        "United States",
        "12/27/2011",
        767.214
    ],
    [
        "United States",
        "12/27/2011",
        498
    ],
    [
        "United States",
        "12/27/2011",
        182.352
    ],
    [
        "United States",
        "12/27/2011",
        230.28
    ],
    [
        "United States",
        "12/27/2011",
        118.16
    ],
    [
        "United States",
        "12/27/2011",
        37.056
    ],
    [
        "United States",
        "12/27/2011",
        23.92
    ],
    [
        "United States",
        "12/27/2011",
        30.016
    ],
    [
        "United States",
        "12/27/2011",
        32.952
    ],
    [
        "United States",
        "12/27/2011",
        11.56
    ],
    [
        "United States",
        "12/27/2011",
        4.984
    ],
    [
        "United States",
        "12/27/2011",
        12.84
    ],
    [
        "United States",
        "12/27/2011",
        10.98
    ],
    [
        "United States",
        "12/27/2011",
        7.86
    ],
    [
        "United States",
        "12/27/2011",
        51.45
    ],
    [
        "United States",
        "12/28/2011",
        1737.18
    ],
    [
        "United States",
        "12/28/2011",
        998.82
    ],
    [
        "United States",
        "12/28/2011",
        704.25
    ],
    [
        "United States",
        "12/28/2011",
        99.136
    ],
    [
        "United States",
        "12/28/2011",
        141.76
    ],
    [
        "United States",
        "12/28/2011",
        51.15
    ],
    [
        "United States",
        "12/29/2011",
        767.952
    ],
    [
        "United States",
        "12/29/2011",
        191.976
    ],
    [
        "United States",
        "12/29/2011",
        319.968
    ],
    [
        "United States",
        "12/29/2011",
        70.56
    ],
    [
        "United States",
        "12/29/2011",
        119.8
    ],
    [
        "United States",
        "12/29/2011",
        88.8
    ],
    [
        "United States",
        "12/29/2011",
        48.36
    ],
    [
        "United States",
        "12/29/2011",
        38.976
    ],
    [
        "United States",
        "12/29/2011",
        33.29
    ],
    [
        "United States",
        "12/29/2011",
        21.12
    ],
    [
        "United States",
        "12/29/2011",
        24.9
    ],
    [
        "United States",
        "12/29/2011",
        14.352
    ],
    [
        "United States",
        "12/29/2011",
        24.56
    ],
    [
        "United States",
        "12/29/2011",
        23.976
    ],
    [
        "United States",
        "12/29/2011",
        8.736
    ],
    [
        "United States",
        "12/29/2011",
        274.77
    ],
    [
        "United States",
        "12/30/2011",
        217.584
    ],
    [
        "United States",
        "12/30/2011",
        328.776
    ],
    [
        "United States",
        "12/30/2011",
        551.985
    ],
    [
        "United States",
        "12/30/2011",
        523.764
    ],
    [
        "United States",
        "12/30/2011",
        251.964
    ],
    [
        "United States",
        "12/30/2011",
        47.984
    ],
    [
        "United States",
        "12/30/2011",
        122.94
    ],
    [
        "United States",
        "12/30/2011",
        39.128
    ],
    [
        "United States",
        "12/30/2011",
        27.968
    ],
    [
        "United States",
        "12/30/2011",
        12.984
    ],
    [
        "United States",
        "12/30/2011",
        35.448
    ],
    [
        "United States",
        "12/30/2011",
        9.84
    ],
    [
        "United States",
        "12/30/2011",
        2.286
    ],
    [
        "United States",
        "12/31/2011",
        1687.8
    ],
    [
        "United States",
        "12/31/2011",
        1573.488
    ],
    [
        "United States",
        "12/31/2011",
        475.944
    ],
    [
        "United States",
        "12/31/2011",
        605.88
    ],
    [
        "United States",
        "12/31/2011",
        113.97
    ],
    [
        "United States",
        "12/31/2011",
        195.64
    ],
    [
        "United States",
        "12/31/2011",
        341.96
    ],
    [
        "United States",
        "12/31/2011",
        34.77
    ],
    [
        "United States",
        "12/31/2011",
        29.68
    ],
    [
        "United States",
        "12/31/2011",
        47.53
    ],
    [
        "United States",
        "12/31/2011",
        49.568
    ],
    [
        "United States",
        "12/31/2011",
        14.94
    ],
    [
        "United States",
        "12/31/2011",
        63.2
    ],
    [
        "United States",
        "12/31/2011",
        18.9
    ],
    [
        "United States",
        "1/2/2012",
        1188
    ],
    [
        "United States",
        "1/2/2012",
        452.45
    ],
    [
        "United States",
        "1/2/2012",
        85.52
    ],
    [
        "United States",
        "1/2/2012",
        62.982
    ],
    [
        "United States",
        "1/2/2012",
        89.584
    ],
    [
        "United States",
        "1/2/2012",
        20.04
    ],
    [
        "United States",
        "1/2/2012",
        9.84
    ],
    [
        "United States",
        "1/2/2012",
        23.68
    ],
    [
        "United States",
        "1/3/2012",
        1352.3976
    ],
    [
        "United States",
        "1/3/2012",
        398.4
    ],
    [
        "United States",
        "1/3/2012",
        10.368
    ],
    [
        "United States",
        "1/3/2012",
        7.056
    ],
    [
        "United States",
        "1/4/2012",
        192.22
    ],
    [
        "United States",
        "1/4/2012",
        32.34
    ],
    [
        "United States",
        "1/4/2012",
        39.9
    ],
    [
        "United States",
        "1/5/2012",
        56.16
    ],
    [
        "United States",
        "1/5/2012",
        87.36
    ],
    [
        "United States",
        "1/5/2012",
        59.52
    ],
    [
        "United States",
        "1/5/2012",
        61.584
    ],
    [
        "United States",
        "1/5/2012",
        13.168
    ],
    [
        "United States",
        "1/5/2012",
        17.48
    ],
    [
        "United States",
        "1/6/2012",
        29.6
    ],
    [
        "United States",
        "1/6/2012",
        1.938
    ],
    [
        "United States",
        "1/9/2012",
        163.44
    ],
    [
        "United States",
        "1/9/2012",
        106.32
    ],
    [
        "United States",
        "1/9/2012",
        51.55
    ],
    [
        "United States",
        "1/9/2012",
        42.76
    ],
    [
        "United States",
        "1/10/2012",
        1018.104
    ],
    [
        "United States",
        "1/12/2012",
        235.188
    ],
    [
        "United States",
        "1/12/2012",
        465.18
    ],
    [
        "United States",
        "1/12/2012",
        107.118
    ],
    [
        "United States",
        "1/12/2012",
        26.376
    ],
    [
        "United States",
        "1/12/2012",
        10.368
    ],
    [
        "United States",
        "1/12/2012",
        10.384
    ],
    [
        "United States",
        "1/13/2012",
        464.85
    ],
    [
        "United States",
        "1/13/2012",
        77.6
    ],
    [
        "United States",
        "1/13/2012",
        70.008
    ],
    [
        "United States",
        "1/13/2012",
        9.82
    ],
    [
        "United States",
        "1/17/2012",
        254.744
    ],
    [
        "United States",
        "1/17/2012",
        88.96
    ],
    [
        "United States",
        "1/17/2012",
        6.68
    ],
    [
        "United States",
        "1/19/2012",
        199.304
    ],
    [
        "United States",
        "1/19/2012",
        102.438
    ],
    [
        "United States",
        "1/23/2012",
        29.04
    ],
    [
        "United States",
        "1/23/2012",
        14.62
    ],
    [
        "United States",
        "1/24/2012",
        13.12
    ],
    [
        "United States",
        "1/26/2012",
        182.72
    ],
    [
        "United States",
        "1/27/2012",
        2803.92
    ],
    [
        "United States",
        "1/27/2012",
        431.976
    ],
    [
        "United States",
        "1/27/2012",
        181.986
    ],
    [
        "United States",
        "1/27/2012",
        155.37
    ],
    [
        "United States",
        "1/28/2012",
        4297.644
    ],
    [
        "United States",
        "1/30/2012",
        1919.976
    ],
    [
        "United States",
        "1/30/2012",
        227.36
    ],
    [
        "United States",
        "1/30/2012",
        14.304
    ],
    [
        "United States",
        "1/31/2012",
        53.34
    ],
    [
        "United States",
        "1/31/2012",
        32.96
    ],
    [
        "United States",
        "1/31/2012",
        12.96
    ],
    [
        "United States",
        "2/3/2012",
        149.97
    ],
    [
        "United States",
        "2/3/2012",
        136.92
    ],
    [
        "United States",
        "2/3/2012",
        28.4
    ],
    [
        "United States",
        "2/3/2012",
        90.882
    ],
    [
        "United States",
        "2/3/2012",
        74.52
    ],
    [
        "United States",
        "2/3/2012",
        12.144
    ],
    [
        "United States",
        "2/6/2012",
        670.752
    ],
    [
        "United States",
        "2/6/2012",
        1268.82
    ],
    [
        "United States",
        "2/6/2012",
        283.92
    ],
    [
        "United States",
        "2/6/2012",
        146.73
    ],
    [
        "United States",
        "2/6/2012",
        29.9
    ],
    [
        "United States",
        "2/6/2012",
        18.528
    ],
    [
        "United States",
        "2/6/2012",
        5.68
    ],
    [
        "United States",
        "2/6/2012",
        2.934
    ],
    [
        "United States",
        "2/6/2012",
        5.28
    ],
    [
        "United States",
        "2/7/2012",
        311.15
    ],
    [
        "United States",
        "2/7/2012",
        12.96
    ],
    [
        "United States",
        "2/8/2012",
        107.982
    ],
    [
        "United States",
        "2/8/2012",
        5.81
    ],
    [
        "United States",
        "2/8/2012",
        9.54
    ],
    [
        "United States",
        "2/8/2012",
        5.76
    ],
    [
        "United States",
        "2/9/2012",
        479.952
    ],
    [
        "United States",
        "2/9/2012",
        40.096
    ],
    [
        "United States",
        "2/9/2012",
        203.92
    ],
    [
        "United States",
        "2/9/2012",
        20.8
    ],
    [
        "United States",
        "2/9/2012",
        40.784
    ],
    [
        "United States",
        "2/10/2012",
        77.24
    ],
    [
        "United States",
        "2/14/2012",
        625.99
    ],
    [
        "United States",
        "2/14/2012",
        323.982
    ],
    [
        "United States",
        "2/14/2012",
        71.976
    ],
    [
        "United States",
        "2/14/2012",
        26.424
    ],
    [
        "United States",
        "2/14/2012",
        14.952
    ],
    [
        "United States",
        "2/14/2012",
        14.352
    ],
    [
        "United States",
        "2/14/2012",
        2.286
    ],
    [
        "United States",
        "2/15/2012",
        699.98
    ],
    [
        "United States",
        "2/15/2012",
        541.44
    ],
    [
        "United States",
        "2/15/2012",
        134.97
    ],
    [
        "United States",
        "2/15/2012",
        139.95
    ],
    [
        "United States",
        "2/15/2012",
        41.72
    ],
    [
        "United States",
        "2/15/2012",
        11.52
    ],
    [
        "United States",
        "2/15/2012",
        13.36
    ],
    [
        "United States",
        "2/15/2012",
        19.44
    ],
    [
        "United States",
        "2/16/2012",
        87.71
    ],
    [
        "United States",
        "2/16/2012",
        36.84
    ],
    [
        "United States",
        "2/16/2012",
        35.88
    ],
    [
        "United States",
        "2/18/2012",
        61.06
    ],
    [
        "United States",
        "2/18/2012",
        35.544
    ],
    [
        "United States",
        "2/18/2012",
        9.24
    ],
    [
        "United States",
        "2/20/2012",
        286.79
    ],
    [
        "United States",
        "2/20/2012",
        29.99
    ],
    [
        "United States",
        "2/21/2012",
        2541.98
    ],
    [
        "United States",
        "2/21/2012",
        49.12
    ],
    [
        "United States",
        "2/22/2012",
        79.36
    ],
    [
        "United States",
        "2/23/2012",
        26.88
    ],
    [
        "United States",
        "2/23/2012",
        10.896
    ],
    [
        "United States",
        "2/25/2012",
        22.72
    ],
    [
        "United States",
        "2/25/2012",
        3.15
    ],
    [
        "United States",
        "2/27/2012",
        493.92
    ],
    [
        "United States",
        "2/27/2012",
        538.92
    ],
    [
        "United States",
        "2/27/2012",
        105.98
    ],
    [
        "United States",
        "2/27/2012",
        4.419
    ],
    [
        "United States",
        "2/27/2012",
        16.032
    ],
    [
        "United States",
        "2/28/2012",
        389.696
    ],
    [
        "United States",
        "2/28/2012",
        161.568
    ],
    [
        "United States",
        "2/29/2012",
        184.752
    ],
    [
        "United States",
        "2/29/2012",
        58.72
    ],
    [
        "United States",
        "2/29/2012",
        15.984
    ],
    [
        "United States",
        "3/1/2012",
        1227.9984
    ],
    [
        "United States",
        "3/1/2012",
        95.84
    ],
    [
        "United States",
        "3/1/2012",
        55.328
    ],
    [
        "United States",
        "3/1/2012",
        3.552
    ],
    [
        "United States",
        "3/2/2012",
        787.53
    ],
    [
        "United States",
        "3/2/2012",
        101.88
    ],
    [
        "United States",
        "3/2/2012",
        10.16
    ],
    [
        "United States",
        "3/5/2012",
        383.607
    ],
    [
        "United States",
        "3/5/2012",
        563.4
    ],
    [
        "United States",
        "3/5/2012",
        466.158
    ],
    [
        "United States",
        "3/5/2012",
        180.98
    ],
    [
        "United States",
        "3/5/2012",
        99.372
    ],
    [
        "United States",
        "3/5/2012",
        60.69
    ],
    [
        "United States",
        "3/5/2012",
        29.34
    ],
    [
        "United States",
        "3/5/2012",
        33.568
    ],
    [
        "United States",
        "3/5/2012",
        60.416
    ],
    [
        "United States",
        "3/5/2012",
        31.92
    ],
    [
        "United States",
        "3/5/2012",
        11.212
    ],
    [
        "United States",
        "3/5/2012",
        23.92
    ],
    [
        "United States",
        "3/5/2012",
        10.312
    ],
    [
        "United States",
        "3/5/2012",
        4.712
    ],
    [
        "United States",
        "3/5/2012",
        7.104
    ],
    [
        "United States",
        "3/5/2012",
        2.556
    ],
    [
        "United States",
        "3/6/2012",
        1119.984
    ],
    [
        "United States",
        "3/6/2012",
        435.26
    ],
    [
        "United States",
        "3/7/2012",
        587.97
    ],
    [
        "United States",
        "3/7/2012",
        119.85
    ],
    [
        "United States",
        "3/7/2012",
        69.28
    ],
    [
        "United States",
        "3/7/2012",
        30.44
    ],
    [
        "United States",
        "3/8/2012",
        373.08
    ],
    [
        "United States",
        "3/8/2012",
        769.95
    ],
    [
        "United States",
        "3/8/2012",
        860.93
    ],
    [
        "United States",
        "3/8/2012",
        512.94
    ],
    [
        "United States",
        "3/8/2012",
        14.98
    ],
    [
        "United States",
        "3/8/2012",
        19.44
    ],
    [
        "United States",
        "3/8/2012",
        8.568
    ],
    [
        "United States",
        "3/8/2012",
        3.408
    ],
    [
        "United States",
        "3/9/2012",
        359.88
    ],
    [
        "United States",
        "3/9/2012",
        113.52
    ],
    [
        "United States",
        "3/9/2012",
        4.608
    ],
    [
        "United States",
        "3/10/2012",
        89.82
    ],
    [
        "United States",
        "3/10/2012",
        1.112
    ],
    [
        "United States",
        "3/12/2012",
        30.88
    ],
    [
        "United States",
        "3/12/2012",
        8.688
    ],
    [
        "United States",
        "3/12/2012",
        6.408
    ],
    [
        "United States",
        "3/12/2012",
        5.04
    ],
    [
        "United States",
        "3/13/2012",
        915.136
    ],
    [
        "United States",
        "3/13/2012",
        327.76
    ],
    [
        "United States",
        "3/13/2012",
        141.96
    ],
    [
        "United States",
        "3/14/2012",
        671.94
    ],
    [
        "United States",
        "3/14/2012",
        19.44
    ],
    [
        "United States",
        "3/14/2012",
        16.52
    ],
    [
        "United States",
        "3/15/2012",
        16.776
    ],
    [
        "United States",
        "3/16/2012",
        6354.95
    ],
    [
        "United States",
        "3/16/2012",
        491.55
    ],
    [
        "United States",
        "3/16/2012",
        171.96
    ],
    [
        "United States",
        "3/16/2012",
        85.9
    ],
    [
        "United States",
        "3/16/2012",
        17.52
    ],
    [
        "United States",
        "3/16/2012",
        43.13
    ],
    [
        "United States",
        "3/16/2012",
        46.74
    ],
    [
        "United States",
        "3/16/2012",
        7.38
    ],
    [
        "United States",
        "3/16/2012",
        8.34
    ],
    [
        "United States",
        "3/16/2012",
        2.74
    ],
    [
        "United States",
        "3/17/2012",
        33.82
    ],
    [
        "United States",
        "3/17/2012",
        15.02
    ],
    [
        "United States",
        "3/19/2012",
        3149.93
    ],
    [
        "United States",
        "3/19/2012",
        383.4656
    ],
    [
        "United States",
        "3/19/2012",
        1247.64
    ],
    [
        "United States",
        "3/19/2012",
        453.576
    ],
    [
        "United States",
        "3/19/2012",
        65.584
    ],
    [
        "United States",
        "3/19/2012",
        209.7
    ],
    [
        "United States",
        "3/19/2012",
        40.14
    ],
    [
        "United States",
        "3/19/2012",
        33.36
    ],
    [
        "United States",
        "3/19/2012",
        10.9
    ],
    [
        "United States",
        "3/19/2012",
        14.62
    ],
    [
        "United States",
        "3/19/2012",
        17.568
    ],
    [
        "United States",
        "3/19/2012",
        11.96
    ],
    [
        "United States",
        "3/19/2012",
        14.496
    ],
    [
        "United States",
        "3/20/2012",
        1087.936
    ],
    [
        "United States",
        "3/20/2012",
        199.98
    ],
    [
        "United States",
        "3/20/2012",
        83.92
    ],
    [
        "United States",
        "3/20/2012",
        49.848
    ],
    [
        "United States",
        "3/20/2012",
        51.84
    ],
    [
        "United States",
        "3/20/2012",
        29.304
    ],
    [
        "United States",
        "3/20/2012",
        23.99
    ],
    [
        "United States",
        "3/20/2012",
        18.864
    ],
    [
        "United States",
        "3/20/2012",
        2.512
    ],
    [
        "United States",
        "3/21/2012",
        962.08
    ],
    [
        "United States",
        "3/21/2012",
        295.456
    ],
    [
        "United States",
        "3/21/2012",
        12.843
    ],
    [
        "United States",
        "3/22/2012",
        1487.976
    ],
    [
        "United States",
        "3/22/2012",
        447.944
    ],
    [
        "United States",
        "3/22/2012",
        150.408
    ],
    [
        "United States",
        "3/22/2012",
        129.568
    ],
    [
        "United States",
        "3/22/2012",
        105.52
    ],
    [
        "United States",
        "3/22/2012",
        91.96
    ],
    [
        "United States",
        "3/22/2012",
        15.984
    ],
    [
        "United States",
        "3/22/2012",
        19.56
    ],
    [
        "United States",
        "3/22/2012",
        18.392
    ],
    [
        "United States",
        "3/22/2012",
        14.112
    ],
    [
        "United States",
        "3/23/2012",
        239.97
    ],
    [
        "United States",
        "3/23/2012",
        192.72
    ],
    [
        "United States",
        "3/23/2012",
        107.772
    ],
    [
        "United States",
        "3/23/2012",
        31.56
    ],
    [
        "United States",
        "3/23/2012",
        27.92
    ],
    [
        "United States",
        "3/23/2012",
        33.36
    ],
    [
        "United States",
        "3/24/2012",
        359.058
    ],
    [
        "United States",
        "3/24/2012",
        46.9
    ],
    [
        "United States",
        "3/24/2012",
        6.992
    ],
    [
        "United States",
        "3/26/2012",
        3393.68
    ],
    [
        "United States",
        "3/26/2012",
        1085.42
    ],
    [
        "United States",
        "3/26/2012",
        74.352
    ],
    [
        "United States",
        "3/26/2012",
        40.032
    ],
    [
        "United States",
        "3/26/2012",
        16.776
    ],
    [
        "United States",
        "3/26/2012",
        13.11
    ],
    [
        "United States",
        "3/27/2012",
        83.7
    ],
    [
        "United States",
        "3/28/2012",
        166.24
    ],
    [
        "United States",
        "3/28/2012",
        22.92
    ],
    [
        "United States",
        "3/28/2012",
        33.4
    ],
    [
        "United States",
        "3/28/2012",
        15.552
    ],
    [
        "United States",
        "3/28/2012",
        5.232
    ],
    [
        "United States",
        "3/29/2012",
        1166.92
    ],
    [
        "United States",
        "3/29/2012",
        212.64
    ],
    [
        "United States",
        "3/29/2012",
        73.28
    ],
    [
        "United States",
        "3/29/2012",
        53.25
    ],
    [
        "United States",
        "3/29/2012",
        9.87
    ],
    [
        "United States",
        "3/29/2012",
        19.92
    ],
    [
        "United States",
        "3/29/2012",
        17.64
    ],
    [
        "United States",
        "3/29/2012",
        5.56
    ],
    [
        "United States",
        "3/30/2012",
        366.744
    ],
    [
        "United States",
        "3/30/2012",
        180.96
    ],
    [
        "United States",
        "3/30/2012",
        23.52
    ],
    [
        "United States",
        "3/31/2012",
        79.96
    ],
    [
        "United States",
        "3/31/2012",
        22.38
    ],
    [
        "United States",
        "3/31/2012",
        98.376
    ],
    [
        "United States",
        "4/2/2012",
        71.976
    ],
    [
        "United States",
        "4/2/2012",
        87.8
    ],
    [
        "United States",
        "4/2/2012",
        47.976
    ],
    [
        "United States",
        "4/2/2012",
        50.12
    ],
    [
        "United States",
        "4/2/2012",
        32.192
    ],
    [
        "United States",
        "4/2/2012",
        9.156
    ],
    [
        "United States",
        "4/4/2012",
        599.98
    ],
    [
        "United States",
        "4/4/2012",
        644.076
    ],
    [
        "United States",
        "4/4/2012",
        108.4
    ],
    [
        "United States",
        "4/4/2012",
        82.344
    ],
    [
        "United States",
        "4/4/2012",
        12.76
    ],
    [
        "United States",
        "4/4/2012",
        10.95
    ],
    [
        "United States",
        "4/4/2012",
        5.84
    ],
    [
        "United States",
        "4/4/2012",
        9.088
    ],
    [
        "United States",
        "4/4/2012",
        11.16
    ],
    [
        "United States",
        "4/5/2012",
        892.224
    ],
    [
        "United States",
        "4/5/2012",
        547.136
    ],
    [
        "United States",
        "4/5/2012",
        239.94
    ],
    [
        "United States",
        "4/5/2012",
        563.808
    ],
    [
        "United States",
        "4/5/2012",
        352.45
    ],
    [
        "United States",
        "4/5/2012",
        157.794
    ],
    [
        "United States",
        "4/5/2012",
        98.112
    ],
    [
        "United States",
        "4/5/2012",
        23.84
    ],
    [
        "United States",
        "4/5/2012",
        41.988
    ],
    [
        "United States",
        "4/5/2012",
        23.904
    ],
    [
        "United States",
        "4/5/2012",
        14.85
    ],
    [
        "United States",
        "4/5/2012",
        7.584
    ],
    [
        "United States",
        "4/5/2012",
        10.428
    ],
    [
        "United States",
        "4/6/2012",
        42.048
    ],
    [
        "United States",
        "4/6/2012",
        25.488
    ],
    [
        "United States",
        "4/6/2012",
        47.952
    ],
    [
        "United States",
        "4/6/2012",
        7.968
    ],
    [
        "United States",
        "4/6/2012",
        9.648
    ],
    [
        "United States",
        "4/6/2012",
        6.9
    ],
    [
        "United States",
        "4/7/2012",
        383.952
    ],
    [
        "United States",
        "4/7/2012",
        463.248
    ],
    [
        "United States",
        "4/7/2012",
        11.736
    ],
    [
        "United States",
        "4/7/2012",
        22.58
    ],
    [
        "United States",
        "4/7/2012",
        25.92
    ],
    [
        "United States",
        "4/9/2012",
        369.912
    ],
    [
        "United States",
        "4/9/2012",
        370.14
    ],
    [
        "United States",
        "4/9/2012",
        17.94
    ],
    [
        "United States",
        "4/10/2012",
        142.04
    ],
    [
        "United States",
        "4/10/2012",
        12.832
    ],
    [
        "United States",
        "4/10/2012",
        14.67
    ],
    [
        "United States",
        "4/11/2012",
        639.968
    ],
    [
        "United States",
        "4/11/2012",
        406.6
    ],
    [
        "United States",
        "4/11/2012",
        85.14
    ],
    [
        "United States",
        "4/11/2012",
        54.528
    ],
    [
        "United States",
        "4/11/2012",
        21.99
    ],
    [
        "United States",
        "4/11/2012",
        52.76
    ],
    [
        "United States",
        "4/11/2012",
        67.36
    ],
    [
        "United States",
        "4/12/2012",
        40.74
    ],
    [
        "United States",
        "4/13/2012",
        710.832
    ],
    [
        "United States",
        "4/13/2012",
        479.92
    ],
    [
        "United States",
        "4/13/2012",
        258.576
    ],
    [
        "United States",
        "4/13/2012",
        241.568
    ],
    [
        "United States",
        "4/13/2012",
        609.98
    ],
    [
        "United States",
        "4/13/2012",
        239.976
    ],
    [
        "United States",
        "4/13/2012",
        199.96
    ],
    [
        "United States",
        "4/13/2012",
        75.84
    ],
    [
        "United States",
        "4/13/2012",
        211.372
    ],
    [
        "United States",
        "4/13/2012",
        54.816
    ],
    [
        "United States",
        "4/13/2012",
        37.68
    ],
    [
        "United States",
        "4/13/2012",
        12.88
    ],
    [
        "United States",
        "4/13/2012",
        31.104
    ],
    [
        "United States",
        "4/13/2012",
        10.744
    ],
    [
        "United States",
        "4/13/2012",
        17.43
    ],
    [
        "United States",
        "4/14/2012",
        35.208
    ],
    [
        "United States",
        "4/16/2012",
        1196.86
    ],
    [
        "United States",
        "4/16/2012",
        1439.968
    ],
    [
        "United States",
        "4/16/2012",
        523.26
    ],
    [
        "United States",
        "4/16/2012",
        118.782
    ],
    [
        "United States",
        "4/16/2012",
        43.56
    ],
    [
        "United States",
        "4/16/2012",
        127.764
    ],
    [
        "United States",
        "4/16/2012",
        45.216
    ],
    [
        "United States",
        "4/16/2012",
        55.47
    ],
    [
        "United States",
        "4/16/2012",
        9.14
    ],
    [
        "United States",
        "4/16/2012",
        569.64
    ],
    [
        "United States",
        "4/16/2012",
        7.872
    ],
    [
        "United States",
        "4/16/2012",
        12.576
    ],
    [
        "United States",
        "4/16/2012",
        10.416
    ],
    [
        "United States",
        "4/16/2012",
        1.448
    ],
    [
        "United States",
        "4/17/2012",
        1447.65
    ],
    [
        "United States",
        "4/17/2012",
        783.96
    ],
    [
        "United States",
        "4/17/2012",
        323.37
    ],
    [
        "United States",
        "4/17/2012",
        99.6
    ],
    [
        "United States",
        "4/17/2012",
        62.296
    ],
    [
        "United States",
        "4/17/2012",
        11.96
    ],
    [
        "United States",
        "4/17/2012",
        10.71
    ],
    [
        "United States",
        "4/17/2012",
        5.56
    ],
    [
        "United States",
        "4/18/2012",
        244.768
    ],
    [
        "United States",
        "4/18/2012",
        115.44
    ],
    [
        "United States",
        "4/18/2012",
        947.17
    ],
    [
        "United States",
        "4/18/2012",
        106.5
    ],
    [
        "United States",
        "4/18/2012",
        97.968
    ],
    [
        "United States",
        "4/18/2012",
        89.99
    ],
    [
        "United States",
        "4/18/2012",
        74.352
    ],
    [
        "United States",
        "4/18/2012",
        61.96
    ],
    [
        "United States",
        "4/18/2012",
        75.18
    ],
    [
        "United States",
        "4/18/2012",
        56.686
    ],
    [
        "United States",
        "4/18/2012",
        38.22
    ],
    [
        "United States",
        "4/18/2012",
        41.424
    ],
    [
        "United States",
        "4/18/2012",
        21.93
    ],
    [
        "United States",
        "4/18/2012",
        15.552
    ],
    [
        "United States",
        "4/18/2012",
        7.872
    ],
    [
        "United States",
        "4/18/2012",
        4.312
    ],
    [
        "United States",
        "4/18/2012",
        6.16
    ],
    [
        "United States",
        "4/18/2012",
        1.476
    ],
    [
        "United States",
        "4/19/2012",
        310.392
    ],
    [
        "United States",
        "4/19/2012",
        19.568
    ],
    [
        "United States",
        "4/20/2012",
        595.38
    ],
    [
        "United States",
        "4/20/2012",
        287.97
    ],
    [
        "United States",
        "4/20/2012",
        180.96
    ],
    [
        "United States",
        "4/20/2012",
        117.456
    ],
    [
        "United States",
        "4/20/2012",
        12.96
    ],
    [
        "United States",
        "4/21/2012",
        469.95
    ],
    [
        "United States",
        "4/21/2012",
        209.88
    ],
    [
        "United States",
        "4/21/2012",
        191.96
    ],
    [
        "United States",
        "4/21/2012",
        21.3
    ],
    [
        "United States",
        "4/22/2012",
        64.14
    ],
    [
        "United States",
        "4/22/2012",
        88.776
    ],
    [
        "United States",
        "4/24/2012",
        25.99
    ],
    [
        "United States",
        "4/25/2012",
        221.024
    ],
    [
        "United States",
        "4/25/2012",
        128.058
    ],
    [
        "United States",
        "4/25/2012",
        272.4
    ],
    [
        "United States",
        "4/25/2012",
        206.43
    ],
    [
        "United States",
        "4/25/2012",
        57.75
    ],
    [
        "United States",
        "4/25/2012",
        21.34
    ],
    [
        "United States",
        "4/25/2012",
        13.944
    ],
    [
        "United States",
        "4/26/2012",
        831.936
    ],
    [
        "United States",
        "4/26/2012",
        408.422
    ],
    [
        "United States",
        "4/26/2012",
        191.5155
    ],
    [
        "United States",
        "4/26/2012",
        311.976
    ],
    [
        "United States",
        "4/26/2012",
        72.784
    ],
    [
        "United States",
        "4/26/2012",
        97.04
    ],
    [
        "United States",
        "4/26/2012",
        63.936
    ],
    [
        "United States",
        "4/26/2012",
        59.52
    ],
    [
        "United States",
        "4/26/2012",
        50.352
    ],
    [
        "United States",
        "4/26/2012",
        2.624
    ],
    [
        "United States",
        "4/27/2012",
        1267.53
    ],
    [
        "United States",
        "4/27/2012",
        1379.92
    ],
    [
        "United States",
        "4/27/2012",
        43.56
    ],
    [
        "United States",
        "4/27/2012",
        22.74
    ],
    [
        "United States",
        "4/27/2012",
        5.84
    ],
    [
        "United States",
        "4/28/2012",
        3812.97
    ],
    [
        "United States",
        "4/28/2012",
        186.732
    ],
    [
        "United States",
        "4/28/2012",
        23.832
    ],
    [
        "United States",
        "4/28/2012",
        12.176
    ],
    [
        "United States",
        "4/28/2012",
        8.652
    ],
    [
        "United States",
        "4/29/2012",
        7.968
    ],
    [
        "United States",
        "4/30/2012",
        1022.97
    ],
    [
        "United States",
        "4/30/2012",
        213.115
    ],
    [
        "United States",
        "4/30/2012",
        209.5
    ],
    [
        "United States",
        "4/30/2012",
        34.65
    ],
    [
        "United States",
        "4/30/2012",
        31.4
    ],
    [
        "United States",
        "4/30/2012",
        24.3
    ],
    [
        "United States",
        "4/30/2012",
        19.8
    ],
    [
        "United States",
        "4/30/2012",
        9.48
    ],
    [
        "United States",
        "4/30/2012",
        6.48
    ],
    [
        "United States",
        "5/1/2012",
        172.704
    ],
    [
        "United States",
        "5/1/2012",
        88.752
    ],
    [
        "United States",
        "5/1/2012",
        35.06
    ],
    [
        "United States",
        "5/1/2012",
        63.552
    ],
    [
        "United States",
        "5/1/2012",
        41.376
    ],
    [
        "United States",
        "5/1/2012",
        37.32
    ],
    [
        "United States",
        "5/1/2012",
        12.176
    ],
    [
        "United States",
        "5/2/2012",
        158.376
    ],
    [
        "United States",
        "5/2/2012",
        8.856
    ],
    [
        "United States",
        "5/3/2012",
        339.96
    ],
    [
        "United States",
        "5/3/2012",
        844.116
    ],
    [
        "United States",
        "5/3/2012",
        665.88
    ],
    [
        "United States",
        "5/3/2012",
        49.568
    ],
    [
        "United States",
        "5/3/2012",
        62.496
    ],
    [
        "United States",
        "5/3/2012",
        59.904
    ],
    [
        "United States",
        "5/3/2012",
        76.752
    ],
    [
        "United States",
        "5/3/2012",
        27.552
    ],
    [
        "United States",
        "5/3/2012",
        18.2
    ],
    [
        "United States",
        "5/3/2012",
        23.696
    ],
    [
        "United States",
        "5/3/2012",
        8.82
    ],
    [
        "United States",
        "5/3/2012",
        13.848
    ],
    [
        "United States",
        "5/3/2012",
        7.968
    ],
    [
        "United States",
        "5/4/2012",
        946.344
    ],
    [
        "United States",
        "5/4/2012",
        125.93
    ],
    [
        "United States",
        "5/4/2012",
        22.288
    ],
    [
        "United States",
        "5/4/2012",
        26.8
    ],
    [
        "United States",
        "5/7/2012",
        244.006
    ],
    [
        "United States",
        "5/7/2012",
        45.68
    ],
    [
        "United States",
        "5/7/2012",
        15.936
    ],
    [
        "United States",
        "5/8/2012",
        2799.944
    ],
    [
        "United States",
        "5/8/2012",
        377.97
    ],
    [
        "United States",
        "5/8/2012",
        357.93
    ],
    [
        "United States",
        "5/8/2012",
        123.96
    ],
    [
        "United States",
        "5/8/2012",
        79.44
    ],
    [
        "United States",
        "5/8/2012",
        43.98
    ],
    [
        "United States",
        "5/8/2012",
        127.764
    ],
    [
        "United States",
        "5/8/2012",
        37.94
    ],
    [
        "United States",
        "5/8/2012",
        19.44
    ],
    [
        "United States",
        "5/8/2012",
        8.352
    ],
    [
        "United States",
        "5/8/2012",
        5.248
    ],
    [
        "United States",
        "5/9/2012",
        48.81
    ],
    [
        "United States",
        "5/10/2012",
        36.784
    ],
    [
        "United States",
        "5/10/2012",
        70.97
    ],
    [
        "United States",
        "5/10/2012",
        46.688
    ],
    [
        "United States",
        "5/11/2012",
        191.968
    ],
    [
        "United States",
        "5/12/2012",
        619.152
    ],
    [
        "United States",
        "5/12/2012",
        201.584
    ],
    [
        "United States",
        "5/12/2012",
        127.904
    ],
    [
        "United States",
        "5/12/2012",
        36.63
    ],
    [
        "United States",
        "5/12/2012",
        12.84
    ],
    [
        "United States",
        "5/12/2012",
        14.592
    ],
    [
        "United States",
        "5/12/2012",
        25.68
    ],
    [
        "United States",
        "5/12/2012",
        21.968
    ],
    [
        "United States",
        "5/13/2012",
        222.384
    ],
    [
        "United States",
        "5/13/2012",
        16
    ],
    [
        "United States",
        "5/14/2012",
        1117.92
    ],
    [
        "United States",
        "5/14/2012",
        509.9575
    ],
    [
        "United States",
        "5/14/2012",
        198.272
    ],
    [
        "United States",
        "5/14/2012",
        722.352
    ],
    [
        "United States",
        "5/14/2012",
        200.984
    ],
    [
        "United States",
        "5/14/2012",
        97.696
    ],
    [
        "United States",
        "5/14/2012",
        97.568
    ],
    [
        "United States",
        "5/14/2012",
        122.91
    ],
    [
        "United States",
        "5/14/2012",
        47.36
    ],
    [
        "United States",
        "5/14/2012",
        18.588
    ],
    [
        "United States",
        "5/14/2012",
        4.896
    ],
    [
        "United States",
        "5/14/2012",
        2.696
    ],
    [
        "United States",
        "5/15/2012",
        51.968
    ],
    [
        "United States",
        "5/15/2012",
        17.94
    ],
    [
        "United States",
        "5/16/2012",
        255.968
    ],
    [
        "United States",
        "5/17/2012",
        33.28
    ],
    [
        "United States",
        "5/17/2012",
        55.6
    ],
    [
        "United States",
        "5/17/2012",
        31.5
    ],
    [
        "United States",
        "5/17/2012",
        14.088
    ],
    [
        "United States",
        "5/18/2012",
        10.86
    ],
    [
        "United States",
        "5/20/2012",
        163.136
    ],
    [
        "United States",
        "5/20/2012",
        6.408
    ],
    [
        "United States",
        "5/21/2012",
        24.588
    ],
    [
        "United States",
        "5/21/2012",
        26.976
    ],
    [
        "United States",
        "5/21/2012",
        20.768
    ],
    [
        "United States",
        "5/22/2012",
        2973.32
    ],
    [
        "United States",
        "5/22/2012",
        775.728
    ],
    [
        "United States",
        "5/22/2012",
        104.79
    ],
    [
        "United States",
        "5/22/2012",
        8.26
    ],
    [
        "United States",
        "5/23/2012",
        850.5
    ],
    [
        "United States",
        "5/23/2012",
        121.792
    ],
    [
        "United States",
        "5/23/2012",
        186.69
    ],
    [
        "United States",
        "5/23/2012",
        51.45
    ],
    [
        "United States",
        "5/23/2012",
        75.33
    ],
    [
        "United States",
        "5/23/2012",
        19.194
    ],
    [
        "United States",
        "5/24/2012",
        602.651
    ],
    [
        "United States",
        "5/24/2012",
        7.656
    ],
    [
        "United States",
        "5/25/2012",
        467.04
    ],
    [
        "United States",
        "5/25/2012",
        845.728
    ],
    [
        "United States",
        "5/25/2012",
        127.96
    ],
    [
        "United States",
        "5/25/2012",
        207.984
    ],
    [
        "United States",
        "5/25/2012",
        32.368
    ],
    [
        "United States",
        "5/25/2012",
        21.24
    ],
    [
        "United States",
        "5/25/2012",
        14.73
    ],
    [
        "United States",
        "5/25/2012",
        22.368
    ],
    [
        "United States",
        "5/26/2012",
        399.54
    ],
    [
        "United States",
        "5/26/2012",
        167.944
    ],
    [
        "United States",
        "5/26/2012",
        153.728
    ],
    [
        "United States",
        "5/26/2012",
        104.93
    ],
    [
        "United States",
        "5/26/2012",
        105.686
    ],
    [
        "United States",
        "5/26/2012",
        12.224
    ],
    [
        "United States",
        "5/26/2012",
        20.24
    ],
    [
        "United States",
        "5/26/2012",
        18.272
    ],
    [
        "United States",
        "5/28/2012",
        535.41
    ],
    [
        "United States",
        "5/28/2012",
        77.55
    ],
    [
        "United States",
        "5/28/2012",
        45.36
    ],
    [
        "United States",
        "5/28/2012",
        47.82
    ],
    [
        "United States",
        "5/28/2012",
        45.99
    ],
    [
        "United States",
        "5/28/2012",
        16.24
    ],
    [
        "United States",
        "5/28/2012",
        13.05
    ],
    [
        "United States",
        "5/28/2012",
        6.63
    ],
    [
        "United States",
        "5/28/2012",
        6.096
    ],
    [
        "United States",
        "5/29/2012",
        317.058
    ],
    [
        "United States",
        "5/29/2012",
        540.57
    ],
    [
        "United States",
        "5/29/2012",
        85.056
    ],
    [
        "United States",
        "5/29/2012",
        167.76
    ],
    [
        "United States",
        "5/29/2012",
        41.568
    ],
    [
        "United States",
        "5/29/2012",
        32.4
    ],
    [
        "United States",
        "5/29/2012",
        8.04
    ],
    [
        "United States",
        "5/29/2012",
        12.39
    ],
    [
        "United States",
        "5/30/2012",
        239.97
    ],
    [
        "United States",
        "5/30/2012",
        160.32
    ],
    [
        "United States",
        "5/30/2012",
        128.85
    ],
    [
        "United States",
        "5/30/2012",
        151.96
    ],
    [
        "United States",
        "5/31/2012",
        1406.86
    ],
    [
        "United States",
        "5/31/2012",
        2567.84
    ],
    [
        "United States",
        "5/31/2012",
        274.8
    ],
    [
        "United States",
        "5/31/2012",
        323.1
    ],
    [
        "United States",
        "5/31/2012",
        173.488
    ],
    [
        "United States",
        "5/31/2012",
        105.52
    ],
    [
        "United States",
        "5/31/2012",
        80.88
    ],
    [
        "United States",
        "5/31/2012",
        62.18
    ],
    [
        "United States",
        "5/31/2012",
        58.38
    ],
    [
        "United States",
        "5/31/2012",
        51.56
    ],
    [
        "United States",
        "5/31/2012",
        10.272
    ],
    [
        "United States",
        "5/31/2012",
        22.2
    ],
    [
        "United States",
        "5/31/2012",
        15.75
    ],
    [
        "United States",
        "5/31/2012",
        8.28
    ],
    [
        "United States",
        "5/31/2012",
        7.56
    ],
    [
        "United States",
        "5/31/2012",
        5.904
    ],
    [
        "United States",
        "5/31/2012",
        3.564
    ],
    [
        "United States",
        "6/1/2012",
        403.68
    ],
    [
        "United States",
        "6/1/2012",
        299.98
    ],
    [
        "United States",
        "6/1/2012",
        42.24
    ],
    [
        "United States",
        "6/1/2012",
        41.9
    ],
    [
        "United States",
        "6/1/2012",
        28.91
    ],
    [
        "United States",
        "6/1/2012",
        11.76
    ],
    [
        "United States",
        "6/1/2012",
        5.728
    ],
    [
        "United States",
        "6/4/2012",
        989.97
    ],
    [
        "United States",
        "6/4/2012",
        119.98
    ],
    [
        "United States",
        "6/4/2012",
        35.28
    ],
    [
        "United States",
        "6/4/2012",
        9.26
    ],
    [
        "United States",
        "6/4/2012",
        7.38
    ],
    [
        "United States",
        "6/4/2012",
        30.44
    ],
    [
        "United States",
        "6/5/2012",
        1522.638
    ],
    [
        "United States",
        "6/5/2012",
        10.56
    ],
    [
        "United States",
        "6/7/2012",
        25.92
    ],
    [
        "United States",
        "6/7/2012",
        18.312
    ],
    [
        "United States",
        "6/7/2012",
        7.52
    ],
    [
        "United States",
        "6/7/2012",
        8.016
    ],
    [
        "United States",
        "6/8/2012",
        516.96
    ],
    [
        "United States",
        "6/8/2012",
        173.488
    ],
    [
        "United States",
        "6/8/2012",
        173.208
    ],
    [
        "United States",
        "6/8/2012",
        42.24
    ],
    [
        "United States",
        "6/8/2012",
        18.264
    ],
    [
        "United States",
        "6/8/2012",
        143.128
    ],
    [
        "United States",
        "6/8/2012",
        9
    ],
    [
        "United States",
        "6/8/2012",
        4.448
    ],
    [
        "United States",
        "6/8/2012",
        2.376
    ],
    [
        "United States",
        "6/9/2012",
        355.36
    ],
    [
        "United States",
        "6/9/2012",
        140.376
    ],
    [
        "United States",
        "6/9/2012",
        113.1
    ],
    [
        "United States",
        "6/9/2012",
        72.6
    ],
    [
        "United States",
        "6/9/2012",
        38.52
    ],
    [
        "United States",
        "6/9/2012",
        64.2
    ],
    [
        "United States",
        "6/9/2012",
        12.96
    ],
    [
        "United States",
        "6/11/2012",
        1123.92
    ],
    [
        "United States",
        "6/11/2012",
        1036.624
    ],
    [
        "United States",
        "6/11/2012",
        563.808
    ],
    [
        "United States",
        "6/11/2012",
        249.584
    ],
    [
        "United States",
        "6/11/2012",
        78.6
    ],
    [
        "United States",
        "6/11/2012",
        60.768
    ],
    [
        "United States",
        "6/11/2012",
        36.26
    ],
    [
        "United States",
        "6/11/2012",
        56.3
    ],
    [
        "United States",
        "6/11/2012",
        53.7
    ],
    [
        "United States",
        "6/11/2012",
        48.672
    ],
    [
        "United States",
        "6/11/2012",
        32.4
    ],
    [
        "United States",
        "6/11/2012",
        29.16
    ],
    [
        "United States",
        "6/11/2012",
        3.768
    ],
    [
        "United States",
        "6/12/2012",
        55.984
    ],
    [
        "United States",
        "6/12/2012",
        43.296
    ],
    [
        "United States",
        "6/12/2012",
        29.9
    ],
    [
        "United States",
        "6/12/2012",
        20.736
    ],
    [
        "United States",
        "6/12/2012",
        24.56
    ],
    [
        "United States",
        "6/13/2012",
        899.97
    ],
    [
        "United States",
        "6/13/2012",
        36.624
    ],
    [
        "United States",
        "6/13/2012",
        67.98
    ],
    [
        "United States",
        "6/13/2012",
        3.424
    ],
    [
        "United States",
        "6/13/2012",
        32.4
    ],
    [
        "United States",
        "6/13/2012",
        24.78
    ],
    [
        "United States",
        "6/13/2012",
        19.14
    ],
    [
        "United States",
        "6/13/2012",
        29.84
    ],
    [
        "United States",
        "6/13/2012",
        6.48
    ],
    [
        "United States",
        "6/13/2012",
        8.26
    ],
    [
        "United States",
        "6/14/2012",
        51.072
    ],
    [
        "United States",
        "6/15/2012",
        364.704
    ],
    [
        "United States",
        "6/15/2012",
        225.576
    ],
    [
        "United States",
        "6/15/2012",
        82.368
    ],
    [
        "United States",
        "6/15/2012",
        40.256
    ],
    [
        "United States",
        "6/15/2012",
        11.672
    ],
    [
        "United States",
        "6/15/2012",
        9.568
    ],
    [
        "United States",
        "6/16/2012",
        3050.376
    ],
    [
        "United States",
        "6/16/2012",
        133.98
    ],
    [
        "United States",
        "6/16/2012",
        197.372
    ],
    [
        "United States",
        "6/16/2012",
        27.216
    ],
    [
        "United States",
        "6/16/2012",
        28.752
    ],
    [
        "United States",
        "6/16/2012",
        6.208
    ],
    [
        "United States",
        "6/18/2012",
        643.136
    ],
    [
        "United States",
        "6/18/2012",
        467.97
    ],
    [
        "United States",
        "6/18/2012",
        450.04
    ],
    [
        "United States",
        "6/18/2012",
        51.98
    ],
    [
        "United States",
        "6/18/2012",
        75.36
    ],
    [
        "United States",
        "6/18/2012",
        60.84
    ],
    [
        "United States",
        "6/18/2012",
        20.736
    ],
    [
        "United States",
        "6/18/2012",
        34.6
    ],
    [
        "United States",
        "6/18/2012",
        13.632
    ],
    [
        "United States",
        "6/18/2012",
        33.02
    ],
    [
        "United States",
        "6/18/2012",
        6.129
    ],
    [
        "United States",
        "6/18/2012",
        9.156
    ],
    [
        "United States",
        "6/18/2012",
        11.952
    ],
    [
        "United States",
        "6/18/2012",
        4.536
    ],
    [
        "United States",
        "6/19/2012",
        228.92
    ],
    [
        "United States",
        "6/19/2012",
        186.69
    ],
    [
        "United States",
        "6/19/2012",
        5.904
    ],
    [
        "United States",
        "6/19/2012",
        6.48
    ],
    [
        "United States",
        "6/19/2012",
        12.56
    ],
    [
        "United States",
        "6/19/2012",
        5.792
    ],
    [
        "United States",
        "6/20/2012",
        319.984
    ],
    [
        "United States",
        "6/20/2012",
        125.976
    ],
    [
        "United States",
        "6/20/2012",
        125.944
    ],
    [
        "United States",
        "6/20/2012",
        257.64
    ],
    [
        "United States",
        "6/21/2012",
        107.976
    ],
    [
        "United States",
        "6/22/2012",
        796.425
    ],
    [
        "United States",
        "6/22/2012",
        1217.568
    ],
    [
        "United States",
        "6/22/2012",
        4.96
    ],
    [
        "United States",
        "6/23/2012",
        201.568
    ],
    [
        "United States",
        "6/23/2012",
        217.584
    ],
    [
        "United States",
        "6/23/2012",
        143.976
    ],
    [
        "United States",
        "6/23/2012",
        165.98
    ],
    [
        "United States",
        "6/23/2012",
        75
    ],
    [
        "United States",
        "6/23/2012",
        27.42
    ],
    [
        "United States",
        "6/23/2012",
        5.43
    ],
    [
        "United States",
        "6/25/2012",
        75.384
    ],
    [
        "United States",
        "6/25/2012",
        304.23
    ],
    [
        "United States",
        "6/25/2012",
        47.952
    ],
    [
        "United States",
        "6/25/2012",
        204.85
    ],
    [
        "United States",
        "6/25/2012",
        78.256
    ],
    [
        "United States",
        "6/25/2012",
        88.752
    ],
    [
        "United States",
        "6/25/2012",
        31.104
    ],
    [
        "United States",
        "6/25/2012",
        20.96
    ],
    [
        "United States",
        "6/25/2012",
        4.608
    ],
    [
        "United States",
        "6/25/2012",
        0.984
    ],
    [
        "United States",
        "6/26/2012",
        971.88
    ],
    [
        "United States",
        "6/26/2012",
        332.94
    ],
    [
        "United States",
        "6/26/2012",
        143.96
    ],
    [
        "United States",
        "6/26/2012",
        41.9
    ],
    [
        "United States",
        "6/26/2012",
        43.056
    ],
    [
        "United States",
        "6/26/2012",
        15.42
    ],
    [
        "United States",
        "6/26/2012",
        43.04
    ],
    [
        "United States",
        "6/28/2012",
        621.76
    ],
    [
        "United States",
        "6/28/2012",
        482.94
    ],
    [
        "United States",
        "6/28/2012",
        140.75
    ],
    [
        "United States",
        "6/28/2012",
        119.56
    ],
    [
        "United States",
        "6/28/2012",
        5.904
    ],
    [
        "United States",
        "6/28/2012",
        15.552
    ],
    [
        "United States",
        "6/29/2012",
        117.882
    ],
    [
        "United States",
        "6/29/2012",
        269.98
    ],
    [
        "United States",
        "6/29/2012",
        24.96
    ],
    [
        "United States",
        "6/29/2012",
        20.104
    ],
    [
        "United States",
        "7/2/2012",
        408.422
    ],
    [
        "United States",
        "7/2/2012",
        382.116
    ],
    [
        "United States",
        "7/2/2012",
        435.504
    ],
    [
        "United States",
        "7/2/2012",
        159.84
    ],
    [
        "United States",
        "7/2/2012",
        74.24
    ],
    [
        "United States",
        "7/2/2012",
        32.784
    ],
    [
        "United States",
        "7/2/2012",
        19.44
    ],
    [
        "United States",
        "7/2/2012",
        68.6
    ],
    [
        "United States",
        "7/2/2012",
        9.392
    ],
    [
        "United States",
        "7/2/2012",
        15.552
    ],
    [
        "United States",
        "7/2/2012",
        11.952
    ],
    [
        "United States",
        "7/2/2012",
        11.168
    ],
    [
        "United States",
        "7/2/2012",
        2.892
    ],
    [
        "United States",
        "7/3/2012",
        168.464
    ],
    [
        "United States",
        "7/3/2012",
        294.93
    ],
    [
        "United States",
        "7/3/2012",
        282.888
    ],
    [
        "United States",
        "7/3/2012",
        70.98
    ],
    [
        "United States",
        "7/3/2012",
        6.72
    ],
    [
        "United States",
        "7/4/2012",
        1099.96
    ],
    [
        "United States",
        "7/4/2012",
        22.848
    ],
    [
        "United States",
        "7/4/2012",
        15.48
    ],
    [
        "United States",
        "7/5/2012",
        19
    ],
    [
        "United States",
        "7/5/2012",
        38.976
    ],
    [
        "United States",
        "7/5/2012",
        34.8
    ],
    [
        "United States",
        "7/5/2012",
        7.23
    ],
    [
        "United States",
        "7/5/2012",
        11.784
    ],
    [
        "United States",
        "7/5/2012",
        4.928
    ],
    [
        "United States",
        "7/5/2012",
        4.928
    ],
    [
        "United States",
        "7/6/2012",
        601.65
    ],
    [
        "United States",
        "7/6/2012",
        301.96
    ],
    [
        "United States",
        "7/6/2012",
        155.82
    ],
    [
        "United States",
        "7/6/2012",
        124.95
    ],
    [
        "United States",
        "7/6/2012",
        170.352
    ],
    [
        "United States",
        "7/6/2012",
        13.96
    ],
    [
        "United States",
        "7/6/2012",
        11.12
    ],
    [
        "United States",
        "7/8/2012",
        21.12
    ],
    [
        "United States",
        "7/9/2012",
        464.97
    ],
    [
        "United States",
        "7/9/2012",
        181.96
    ],
    [
        "United States",
        "7/9/2012",
        153.36
    ],
    [
        "United States",
        "7/9/2012",
        98.21
    ],
    [
        "United States",
        "7/9/2012",
        84.09
    ],
    [
        "United States",
        "7/9/2012",
        79.36
    ],
    [
        "United States",
        "7/9/2012",
        122.94
    ],
    [
        "United States",
        "7/9/2012",
        43.68
    ],
    [
        "United States",
        "7/9/2012",
        48.632
    ],
    [
        "United States",
        "7/9/2012",
        12.39
    ],
    [
        "United States",
        "7/9/2012",
        15.8
    ],
    [
        "United States",
        "7/9/2012",
        5.16
    ],
    [
        "United States",
        "7/9/2012",
        6.58
    ],
    [
        "United States",
        "7/9/2012",
        269.982
    ],
    [
        "United States",
        "7/10/2012",
        39.92
    ],
    [
        "United States",
        "7/10/2012",
        3.366
    ],
    [
        "United States",
        "7/11/2012",
        289.8
    ],
    [
        "United States",
        "7/11/2012",
        716
    ],
    [
        "United States",
        "7/11/2012",
        341.488
    ],
    [
        "United States",
        "7/11/2012",
        221.06
    ],
    [
        "United States",
        "7/11/2012",
        199.836
    ],
    [
        "United States",
        "7/11/2012",
        98.352
    ],
    [
        "United States",
        "7/11/2012",
        29.97
    ],
    [
        "United States",
        "7/11/2012",
        25.344
    ],
    [
        "United States",
        "7/11/2012",
        6.48
    ],
    [
        "United States",
        "7/11/2012",
        2.502
    ],
    [
        "United States",
        "7/11/2012",
        11.12
    ],
    [
        "United States",
        "7/12/2012",
        537.544
    ],
    [
        "United States",
        "7/12/2012",
        659.168
    ],
    [
        "United States",
        "7/12/2012",
        307.168
    ],
    [
        "United States",
        "7/12/2012",
        383.607
    ],
    [
        "United States",
        "7/12/2012",
        148.48
    ],
    [
        "United States",
        "7/12/2012",
        6.912
    ],
    [
        "United States",
        "7/12/2012",
        7.76
    ],
    [
        "United States",
        "7/12/2012",
        1.928
    ],
    [
        "United States",
        "7/13/2012",
        1931.04
    ],
    [
        "United States",
        "7/13/2012",
        41.568
    ],
    [
        "United States",
        "7/13/2012",
        38.88
    ],
    [
        "United States",
        "7/13/2012",
        11.808
    ],
    [
        "United States",
        "7/13/2012",
        9.96
    ],
    [
        "United States",
        "7/14/2012",
        272.736
    ],
    [
        "United States",
        "7/14/2012",
        127.764
    ],
    [
        "United States",
        "7/14/2012",
        441.92
    ],
    [
        "United States",
        "7/14/2012",
        18.496
    ],
    [
        "United States",
        "7/16/2012",
        1348.704
    ],
    [
        "United States",
        "7/16/2012",
        599.9
    ],
    [
        "United States",
        "7/16/2012",
        700.152
    ],
    [
        "United States",
        "7/16/2012",
        150.98
    ],
    [
        "United States",
        "7/16/2012",
        137.25
    ],
    [
        "United States",
        "7/16/2012",
        11.52
    ],
    [
        "United States",
        "7/16/2012",
        80.88
    ],
    [
        "United States",
        "7/17/2012",
        231.92
    ],
    [
        "United States",
        "7/17/2012",
        195.466
    ],
    [
        "United States",
        "7/17/2012",
        14.432
    ],
    [
        "United States",
        "7/17/2012",
        6.264
    ],
    [
        "United States",
        "7/18/2012",
        519.96
    ],
    [
        "United States",
        "7/18/2012",
        135.99
    ],
    [
        "United States",
        "7/18/2012",
        7.38
    ],
    [
        "United States",
        "7/18/2012",
        5.76
    ],
    [
        "United States",
        "7/18/2012",
        3.328
    ],
    [
        "United States",
        "7/19/2012",
        2.025
    ],
    [
        "United States",
        "7/20/2012",
        913.43
    ],
    [
        "United States",
        "7/20/2012",
        831.2
    ],
    [
        "United States",
        "7/20/2012",
        384.944
    ],
    [
        "United States",
        "7/20/2012",
        153.584
    ],
    [
        "United States",
        "7/20/2012",
        97.82
    ],
    [
        "United States",
        "7/20/2012",
        106.75
    ],
    [
        "United States",
        "7/20/2012",
        34.76
    ],
    [
        "United States",
        "7/20/2012",
        141.4
    ],
    [
        "United States",
        "7/20/2012",
        26.4
    ],
    [
        "United States",
        "7/20/2012",
        2.88
    ],
    [
        "United States",
        "7/23/2012",
        128.82
    ],
    [
        "United States",
        "7/23/2012",
        68.94
    ],
    [
        "United States",
        "7/23/2012",
        10.512
    ],
    [
        "United States",
        "7/24/2012",
        279.86
    ],
    [
        "United States",
        "7/24/2012",
        90.06
    ],
    [
        "United States",
        "7/24/2012",
        135.09
    ],
    [
        "United States",
        "7/24/2012",
        20.94
    ],
    [
        "United States",
        "7/25/2012",
        704.9
    ],
    [
        "United States",
        "7/25/2012",
        561.568
    ],
    [
        "United States",
        "7/25/2012",
        623.96
    ],
    [
        "United States",
        "7/25/2012",
        358.58
    ],
    [
        "United States",
        "7/25/2012",
        98.46
    ],
    [
        "United States",
        "7/25/2012",
        12.96
    ],
    [
        "United States",
        "7/25/2012",
        9.42
    ],
    [
        "United States",
        "7/25/2012",
        25.176
    ],
    [
        "United States",
        "7/26/2012",
        393.165
    ],
    [
        "United States",
        "7/26/2012",
        266.352
    ],
    [
        "United States",
        "7/26/2012",
        167.86
    ],
    [
        "United States",
        "7/26/2012",
        99.2
    ],
    [
        "United States",
        "7/26/2012",
        10.368
    ],
    [
        "United States",
        "7/26/2012",
        23.136
    ],
    [
        "United States",
        "7/26/2012",
        9.144
    ],
    [
        "United States",
        "7/27/2012",
        29.97
    ],
    [
        "United States",
        "7/30/2012",
        209.93
    ],
    [
        "United States",
        "7/30/2012",
        61.792
    ],
    [
        "United States",
        "7/30/2012",
        10.92
    ],
    [
        "United States",
        "7/30/2012",
        155.88
    ],
    [
        "United States",
        "7/30/2012",
        5.28
    ],
    [
        "United States",
        "7/31/2012",
        2309.65
    ],
    [
        "United States",
        "7/31/2012",
        1090.782
    ],
    [
        "United States",
        "7/31/2012",
        239.7
    ],
    [
        "United States",
        "7/31/2012",
        19.44
    ],
    [
        "United States",
        "7/31/2012",
        52.59
    ],
    [
        "United States",
        "8/1/2012",
        1004.976
    ],
    [
        "United States",
        "8/1/2012",
        6.72
    ],
    [
        "United States",
        "8/2/2012",
        558.4
    ],
    [
        "United States",
        "8/2/2012",
        277.5
    ],
    [
        "United States",
        "8/2/2012",
        128.85
    ],
    [
        "United States",
        "8/2/2012",
        199.98
    ],
    [
        "United States",
        "8/2/2012",
        110.98
    ],
    [
        "United States",
        "8/2/2012",
        6.368
    ],
    [
        "United States",
        "8/2/2012",
        8.4
    ],
    [
        "United States",
        "8/5/2012",
        23.04
    ],
    [
        "United States",
        "8/5/2012",
        33.488
    ],
    [
        "United States",
        "8/5/2012",
        14.76
    ],
    [
        "United States",
        "8/5/2012",
        1.362
    ],
    [
        "United States",
        "8/6/2012",
        369.1992
    ],
    [
        "United States",
        "8/6/2012",
        27.216
    ],
    [
        "United States",
        "8/6/2012",
        56.704
    ],
    [
        "United States",
        "8/6/2012",
        35.52
    ],
    [
        "United States",
        "8/6/2012",
        6.23
    ],
    [
        "United States",
        "8/7/2012",
        212.94
    ],
    [
        "United States",
        "8/7/2012",
        494.97
    ],
    [
        "United States",
        "8/7/2012",
        77.58
    ],
    [
        "United States",
        "8/7/2012",
        106.8
    ],
    [
        "United States",
        "8/7/2012",
        28.4
    ],
    [
        "United States",
        "8/7/2012",
        25.06
    ],
    [
        "United States",
        "8/7/2012",
        19.152
    ],
    [
        "United States",
        "8/7/2012",
        3.304
    ],
    [
        "United States",
        "8/8/2012",
        447.86
    ],
    [
        "United States",
        "8/8/2012",
        113.92
    ],
    [
        "United States",
        "8/8/2012",
        144.784
    ],
    [
        "United States",
        "8/8/2012",
        39.66
    ],
    [
        "United States",
        "8/8/2012",
        79.99
    ],
    [
        "United States",
        "8/8/2012",
        7.28
    ],
    [
        "United States",
        "8/8/2012",
        6.608
    ],
    [
        "United States",
        "8/9/2012",
        1217.568
    ],
    [
        "United States",
        "8/9/2012",
        979.95
    ],
    [
        "United States",
        "8/9/2012",
        687.4
    ],
    [
        "United States",
        "8/9/2012",
        622.45
    ],
    [
        "United States",
        "8/9/2012",
        307.98
    ],
    [
        "United States",
        "8/9/2012",
        143.7
    ],
    [
        "United States",
        "8/9/2012",
        247.8
    ],
    [
        "United States",
        "8/9/2012",
        382.806
    ],
    [
        "United States",
        "8/9/2012",
        144.12
    ],
    [
        "United States",
        "8/9/2012",
        47.04
    ],
    [
        "United States",
        "8/9/2012",
        41.96
    ],
    [
        "United States",
        "8/9/2012",
        10.65
    ],
    [
        "United States",
        "8/9/2012",
        21.98
    ],
    [
        "United States",
        "8/9/2012",
        10.02
    ],
    [
        "United States",
        "8/9/2012",
        4.608
    ],
    [
        "United States",
        "8/9/2012",
        2.2
    ],
    [
        "United States",
        "8/9/2012",
        6.16
    ],
    [
        "United States",
        "8/10/2012",
        438.368
    ],
    [
        "United States",
        "8/10/2012",
        133.472
    ],
    [
        "United States",
        "8/10/2012",
        139.944
    ],
    [
        "United States",
        "8/10/2012",
        64.75
    ],
    [
        "United States",
        "8/10/2012",
        41.4
    ],
    [
        "United States",
        "8/10/2012",
        29.79
    ],
    [
        "United States",
        "8/10/2012",
        3.75
    ],
    [
        "United States",
        "8/11/2012",
        138
    ],
    [
        "United States",
        "8/11/2012",
        46.152
    ],
    [
        "United States",
        "8/11/2012",
        11.96
    ],
    [
        "United States",
        "8/13/2012",
        422.856
    ],
    [
        "United States",
        "8/13/2012",
        64.68
    ],
    [
        "United States",
        "8/13/2012",
        31.56
    ],
    [
        "United States",
        "8/13/2012",
        50.8
    ],
    [
        "United States",
        "8/13/2012",
        11.36
    ],
    [
        "United States",
        "8/13/2012",
        5.64
    ],
    [
        "United States",
        "8/15/2012",
        323.1
    ],
    [
        "United States",
        "8/15/2012",
        104.23
    ],
    [
        "United States",
        "8/15/2012",
        70.26
    ],
    [
        "United States",
        "8/16/2012",
        1879.96
    ],
    [
        "United States",
        "8/16/2012",
        519.792
    ],
    [
        "United States",
        "8/16/2012",
        254.352
    ],
    [
        "United States",
        "8/16/2012",
        313.024
    ],
    [
        "United States",
        "8/16/2012",
        301.47
    ],
    [
        "United States",
        "8/16/2012",
        31.176
    ],
    [
        "United States",
        "8/16/2012",
        44.688
    ],
    [
        "United States",
        "8/16/2012",
        10.368
    ],
    [
        "United States",
        "8/16/2012",
        10.272
    ],
    [
        "United States",
        "8/16/2012",
        3.762
    ],
    [
        "United States",
        "8/16/2012",
        2.724
    ],
    [
        "United States",
        "8/16/2012",
        5.04
    ],
    [
        "United States",
        "8/16/2012",
        2.304
    ],
    [
        "United States",
        "8/17/2012",
        252.8
    ],
    [
        "United States",
        "8/17/2012",
        52.2
    ],
    [
        "United States",
        "8/17/2012",
        36.288
    ],
    [
        "United States",
        "8/17/2012",
        30.08
    ],
    [
        "United States",
        "8/17/2012",
        10.272
    ],
    [
        "United States",
        "8/21/2012",
        544.008
    ],
    [
        "United States",
        "8/21/2012",
        598.458
    ],
    [
        "United States",
        "8/21/2012",
        663.072
    ],
    [
        "United States",
        "8/21/2012",
        586.398
    ],
    [
        "United States",
        "8/21/2012",
        59.94
    ],
    [
        "United States",
        "8/21/2012",
        99.588
    ],
    [
        "United States",
        "8/21/2012",
        49.568
    ],
    [
        "United States",
        "8/21/2012",
        80.98
    ],
    [
        "United States",
        "8/21/2012",
        23.92
    ],
    [
        "United States",
        "8/21/2012",
        35.76
    ],
    [
        "United States",
        "8/21/2012",
        25.984
    ],
    [
        "United States",
        "8/21/2012",
        12.828
    ],
    [
        "United States",
        "8/21/2012",
        21.728
    ],
    [
        "United States",
        "8/21/2012",
        17.52
    ],
    [
        "United States",
        "8/21/2012",
        4.28
    ],
    [
        "United States",
        "8/21/2012",
        3.488
    ],
    [
        "United States",
        "8/22/2012",
        50.112
    ],
    [
        "United States",
        "8/22/2012",
        16.52
    ],
    [
        "United States",
        "8/23/2012",
        251.91
    ],
    [
        "United States",
        "8/23/2012",
        542.94
    ],
    [
        "United States",
        "8/23/2012",
        97.88
    ],
    [
        "United States",
        "8/23/2012",
        193.8
    ],
    [
        "United States",
        "8/23/2012",
        31.68
    ],
    [
        "United States",
        "8/23/2012",
        12.032
    ],
    [
        "United States",
        "8/23/2012",
        21.4
    ],
    [
        "United States",
        "8/23/2012",
        25.86
    ],
    [
        "United States",
        "8/23/2012",
        10.368
    ],
    [
        "United States",
        "8/23/2012",
        5.768
    ],
    [
        "United States",
        "8/23/2012",
        8.64
    ],
    [
        "United States",
        "8/24/2012",
        3080
    ],
    [
        "United States",
        "8/24/2012",
        724.08
    ],
    [
        "United States",
        "8/24/2012",
        999.432
    ],
    [
        "United States",
        "8/24/2012",
        587.97
    ],
    [
        "United States",
        "8/24/2012",
        435.504
    ],
    [
        "United States",
        "8/24/2012",
        284.364
    ],
    [
        "United States",
        "8/24/2012",
        918.785
    ],
    [
        "United States",
        "8/24/2012",
        79.96
    ],
    [
        "United States",
        "8/24/2012",
        26
    ],
    [
        "United States",
        "8/24/2012",
        26.982
    ],
    [
        "United States",
        "8/24/2012",
        14.91
    ],
    [
        "United States",
        "8/24/2012",
        7.152
    ],
    [
        "United States",
        "8/24/2012",
        6.912
    ],
    [
        "United States",
        "8/24/2012",
        2.724
    ],
    [
        "United States",
        "8/25/2012",
        105.96
    ],
    [
        "United States",
        "8/25/2012",
        40.784
    ],
    [
        "United States",
        "8/25/2012",
        7.88
    ],
    [
        "United States",
        "8/25/2012",
        20.104
    ],
    [
        "United States",
        "8/25/2012",
        3.798
    ],
    [
        "United States",
        "8/27/2012",
        484.65
    ],
    [
        "United States",
        "8/27/2012",
        114.2
    ],
    [
        "United States",
        "8/27/2012",
        32.94
    ],
    [
        "United States",
        "8/27/2012",
        5.104
    ],
    [
        "United States",
        "8/27/2012",
        3.08
    ],
    [
        "United States",
        "8/28/2012",
        2799.96
    ],
    [
        "United States",
        "8/28/2012",
        1099.96
    ],
    [
        "United States",
        "8/28/2012",
        892.35
    ],
    [
        "United States",
        "8/28/2012",
        728.82
    ],
    [
        "United States",
        "8/28/2012",
        470.36
    ],
    [
        "United States",
        "8/28/2012",
        307.666
    ],
    [
        "United States",
        "8/28/2012",
        103.481
    ],
    [
        "United States",
        "8/28/2012",
        41.36
    ],
    [
        "United States",
        "8/28/2012",
        43.176
    ],
    [
        "United States",
        "8/28/2012",
        4.16
    ],
    [
        "United States",
        "8/29/2012",
        131.98
    ],
    [
        "United States",
        "8/29/2012",
        114.52
    ],
    [
        "United States",
        "8/31/2012",
        1552.831
    ],
    [
        "United States",
        "8/31/2012",
        239.976
    ],
    [
        "United States",
        "8/31/2012",
        137.24
    ],
    [
        "United States",
        "8/31/2012",
        555.96
    ],
    [
        "United States",
        "8/31/2012",
        58.32
    ],
    [
        "United States",
        "8/31/2012",
        36.51
    ],
    [
        "United States",
        "8/31/2012",
        20.96
    ],
    [
        "United States",
        "9/1/2012",
        959.984
    ],
    [
        "United States",
        "9/1/2012",
        1088.76
    ],
    [
        "United States",
        "9/1/2012",
        124.36
    ],
    [
        "United States",
        "9/1/2012",
        60.74
    ],
    [
        "United States",
        "9/1/2012",
        14.368
    ],
    [
        "United States",
        "9/1/2012",
        114.6
    ],
    [
        "United States",
        "9/1/2012",
        4.752
    ],
    [
        "United States",
        "9/3/2012",
        666.248
    ],
    [
        "United States",
        "9/3/2012",
        238.152
    ],
    [
        "United States",
        "9/3/2012",
        137.62
    ],
    [
        "United States",
        "9/3/2012",
        100.49
    ],
    [
        "United States",
        "9/3/2012",
        120.33
    ],
    [
        "United States",
        "9/3/2012",
        52.512
    ],
    [
        "United States",
        "9/3/2012",
        129.45
    ],
    [
        "United States",
        "9/3/2012",
        200.984
    ],
    [
        "United States",
        "9/3/2012",
        31.44
    ],
    [
        "United States",
        "9/3/2012",
        129.568
    ],
    [
        "United States",
        "9/3/2012",
        36.336
    ],
    [
        "United States",
        "9/3/2012",
        17.9
    ],
    [
        "United States",
        "9/3/2012",
        6.368
    ],
    [
        "United States",
        "9/3/2012",
        7.5
    ],
    [
        "United States",
        "9/4/2012",
        619.95
    ],
    [
        "United States",
        "9/4/2012",
        279.9
    ],
    [
        "United States",
        "9/4/2012",
        134.376
    ],
    [
        "United States",
        "9/4/2012",
        15.28
    ],
    [
        "United States",
        "9/4/2012",
        4.36
    ],
    [
        "United States",
        "9/4/2012",
        7.656
    ],
    [
        "United States",
        "9/4/2012",
        9.762
    ],
    [
        "United States",
        "9/5/2012",
        411.332
    ],
    [
        "United States",
        "9/5/2012",
        293.199
    ],
    [
        "United States",
        "9/5/2012",
        69.12
    ],
    [
        "United States",
        "9/5/2012",
        67.96
    ],
    [
        "United States",
        "9/5/2012",
        36.84
    ],
    [
        "United States",
        "9/5/2012",
        28.752
    ],
    [
        "United States",
        "9/5/2012",
        16.27
    ],
    [
        "United States",
        "9/5/2012",
        6.16
    ],
    [
        "United States",
        "9/5/2012",
        4.47
    ],
    [
        "United States",
        "9/6/2012",
        271.764
    ],
    [
        "United States",
        "9/6/2012",
        337.98
    ],
    [
        "United States",
        "9/6/2012",
        191.82
    ],
    [
        "United States",
        "9/6/2012",
        46.32
    ],
    [
        "United States",
        "9/6/2012",
        85.98
    ],
    [
        "United States",
        "9/6/2012",
        46.62
    ],
    [
        "United States",
        "9/6/2012",
        3.444
    ],
    [
        "United States",
        "9/6/2012",
        7.24
    ],
    [
        "United States",
        "9/6/2012",
        6.096
    ],
    [
        "United States",
        "9/6/2012",
        8.39
    ],
    [
        "United States",
        "9/7/2012",
        559.93
    ],
    [
        "United States",
        "9/7/2012",
        791.964
    ],
    [
        "United States",
        "9/7/2012",
        671.93
    ],
    [
        "United States",
        "9/7/2012",
        481.176
    ],
    [
        "United States",
        "9/7/2012",
        47.516
    ],
    [
        "United States",
        "9/7/2012",
        140.736
    ],
    [
        "United States",
        "9/7/2012",
        90
    ],
    [
        "United States",
        "9/7/2012",
        70.26
    ],
    [
        "United States",
        "9/7/2012",
        27.414
    ],
    [
        "United States",
        "9/7/2012",
        13.96
    ],
    [
        "United States",
        "9/7/2012",
        9.522
    ],
    [
        "United States",
        "9/7/2012",
        7.24
    ],
    [
        "United States",
        "9/7/2012",
        4.923
    ],
    [
        "United States",
        "9/7/2012",
        6.096
    ],
    [
        "United States",
        "9/8/2012",
        41.88
    ],
    [
        "United States",
        "9/8/2012",
        26.4
    ],
    [
        "United States",
        "9/8/2012",
        21.36
    ],
    [
        "United States",
        "9/10/2012",
        278.82
    ],
    [
        "United States",
        "9/10/2012",
        361.96
    ],
    [
        "United States",
        "9/10/2012",
        353.88
    ],
    [
        "United States",
        "9/10/2012",
        179.886
    ],
    [
        "United States",
        "9/10/2012",
        106.68
    ],
    [
        "United States",
        "9/10/2012",
        51.52
    ],
    [
        "United States",
        "9/10/2012",
        61.96
    ],
    [
        "United States",
        "9/10/2012",
        14.94
    ],
    [
        "United States",
        "9/10/2012",
        6.08
    ],
    [
        "United States",
        "9/11/2012",
        210.68
    ],
    [
        "United States",
        "9/11/2012",
        772.68
    ],
    [
        "United States",
        "9/11/2012",
        265.86
    ],
    [
        "United States",
        "9/11/2012",
        181.35
    ],
    [
        "United States",
        "9/11/2012",
        78.8
    ],
    [
        "United States",
        "9/11/2012",
        209.6
    ],
    [
        "United States",
        "9/11/2012",
        111.04
    ],
    [
        "United States",
        "9/11/2012",
        24.64
    ],
    [
        "United States",
        "9/11/2012",
        31.05
    ],
    [
        "United States",
        "9/11/2012",
        19.99
    ],
    [
        "United States",
        "9/11/2012",
        38.88
    ],
    [
        "United States",
        "9/11/2012",
        8.92
    ],
    [
        "United States",
        "9/11/2012",
        8.64
    ],
    [
        "United States",
        "9/12/2012",
        479.984
    ],
    [
        "United States",
        "9/12/2012",
        105.98
    ],
    [
        "United States",
        "9/12/2012",
        28.9
    ],
    [
        "United States",
        "9/12/2012",
        21.98
    ],
    [
        "United States",
        "9/12/2012",
        27.18
    ],
    [
        "United States",
        "9/12/2012",
        12.6
    ],
    [
        "United States",
        "9/12/2012",
        20.7
    ],
    [
        "United States",
        "9/12/2012",
        9.26
    ],
    [
        "United States",
        "9/12/2012",
        1.24
    ],
    [
        "United States",
        "9/13/2012",
        717.72
    ],
    [
        "United States",
        "9/13/2012",
        1516.2
    ],
    [
        "United States",
        "9/13/2012",
        209.7
    ],
    [
        "United States",
        "9/13/2012",
        131.88
    ],
    [
        "United States",
        "9/13/2012",
        207.35
    ],
    [
        "United States",
        "9/13/2012",
        44.67
    ],
    [
        "United States",
        "9/13/2012",
        170.072
    ],
    [
        "United States",
        "9/13/2012",
        199.96
    ],
    [
        "United States",
        "9/13/2012",
        129.93
    ],
    [
        "United States",
        "9/13/2012",
        25.032
    ],
    [
        "United States",
        "9/13/2012",
        69.93
    ],
    [
        "United States",
        "9/13/2012",
        13.092
    ],
    [
        "United States",
        "9/13/2012",
        7.824
    ],
    [
        "United States",
        "9/13/2012",
        2.412
    ],
    [
        "United States",
        "9/14/2012",
        991.2
    ],
    [
        "United States",
        "9/14/2012",
        912.75
    ],
    [
        "United States",
        "9/14/2012",
        879.984
    ],
    [
        "United States",
        "9/14/2012",
        269.49
    ],
    [
        "United States",
        "9/14/2012",
        170.136
    ],
    [
        "United States",
        "9/14/2012",
        25.9
    ],
    [
        "United States",
        "9/14/2012",
        12.96
    ],
    [
        "United States",
        "9/15/2012",
        1056.86
    ],
    [
        "United States",
        "9/15/2012",
        801.96
    ],
    [
        "United States",
        "9/15/2012",
        79.872
    ],
    [
        "United States",
        "9/15/2012",
        55.968
    ],
    [
        "United States",
        "9/15/2012",
        147.184
    ],
    [
        "United States",
        "9/15/2012",
        15.552
    ],
    [
        "United States",
        "9/15/2012",
        46.384
    ],
    [
        "United States",
        "9/15/2012",
        24.672
    ],
    [
        "United States",
        "9/15/2012",
        24.32
    ],
    [
        "United States",
        "9/15/2012",
        59.97
    ],
    [
        "United States",
        "9/15/2012",
        15.712
    ],
    [
        "United States",
        "9/15/2012",
        12.96
    ],
    [
        "United States",
        "9/15/2012",
        190.86
    ],
    [
        "United States",
        "9/15/2012",
        3.576
    ],
    [
        "United States",
        "9/16/2012",
        31.12
    ],
    [
        "United States",
        "9/17/2012",
        3083.43
    ],
    [
        "United States",
        "9/17/2012",
        2003.92
    ],
    [
        "United States",
        "9/17/2012",
        344.22
    ],
    [
        "United States",
        "9/17/2012",
        199.764
    ],
    [
        "United States",
        "9/17/2012",
        659.9
    ],
    [
        "United States",
        "9/17/2012",
        4228.704
    ],
    [
        "United States",
        "9/17/2012",
        110.96
    ],
    [
        "United States",
        "9/17/2012",
        209.97
    ],
    [
        "United States",
        "9/17/2012",
        124.2
    ],
    [
        "United States",
        "9/17/2012",
        86.304
    ],
    [
        "United States",
        "9/17/2012",
        87.71
    ],
    [
        "United States",
        "9/17/2012",
        87.168
    ],
    [
        "United States",
        "9/17/2012",
        32.4
    ],
    [
        "United States",
        "9/17/2012",
        94.6
    ],
    [
        "United States",
        "9/17/2012",
        25.032
    ],
    [
        "United States",
        "9/17/2012",
        67.8
    ],
    [
        "United States",
        "9/17/2012",
        21.936
    ],
    [
        "United States",
        "9/17/2012",
        15.76
    ],
    [
        "United States",
        "9/17/2012",
        14.9
    ],
    [
        "United States",
        "9/17/2012",
        9.618
    ],
    [
        "United States",
        "9/17/2012",
        6.588
    ],
    [
        "United States",
        "9/17/2012",
        6.858
    ],
    [
        "United States",
        "9/17/2012",
        3.264
    ],
    [
        "United States",
        "9/18/2012",
        717.12
    ],
    [
        "United States",
        "9/18/2012",
        1259.93
    ],
    [
        "United States",
        "9/18/2012",
        499.99
    ],
    [
        "United States",
        "9/18/2012",
        636.86
    ],
    [
        "United States",
        "9/18/2012",
        443.92
    ],
    [
        "United States",
        "9/18/2012",
        160.72
    ],
    [
        "United States",
        "9/18/2012",
        65.08
    ],
    [
        "United States",
        "9/18/2012",
        41.96
    ],
    [
        "United States",
        "9/18/2012",
        19.92
    ],
    [
        "United States",
        "9/18/2012",
        24.4
    ],
    [
        "United States",
        "9/18/2012",
        11.68
    ],
    [
        "United States",
        "9/18/2012",
        16.9
    ],
    [
        "United States",
        "9/18/2012",
        18.54
    ],
    [
        "United States",
        "9/18/2012",
        7.3
    ],
    [
        "United States",
        "9/19/2012",
        279.86
    ],
    [
        "United States",
        "9/19/2012",
        66.36
    ],
    [
        "United States",
        "9/19/2012",
        61.96
    ],
    [
        "United States",
        "9/19/2012",
        22.96
    ],
    [
        "United States",
        "9/19/2012",
        60.84
    ],
    [
        "United States",
        "9/19/2012",
        8.4
    ],
    [
        "United States",
        "9/20/2012",
        294.368
    ],
    [
        "United States",
        "9/20/2012",
        1369.764
    ],
    [
        "United States",
        "9/20/2012",
        37.68
    ],
    [
        "United States",
        "9/20/2012",
        45.584
    ],
    [
        "United States",
        "9/20/2012",
        61.4
    ],
    [
        "United States",
        "9/20/2012",
        24.448
    ],
    [
        "United States",
        "9/20/2012",
        2.808
    ],
    [
        "United States",
        "9/21/2012",
        946.344
    ],
    [
        "United States",
        "9/21/2012",
        1690.04
    ],
    [
        "United States",
        "9/21/2012",
        887.84
    ],
    [
        "United States",
        "9/21/2012",
        542.94
    ],
    [
        "United States",
        "9/21/2012",
        589.9
    ],
    [
        "United States",
        "9/21/2012",
        629.95
    ],
    [
        "United States",
        "9/21/2012",
        601.536
    ],
    [
        "United States",
        "9/21/2012",
        199.74
    ],
    [
        "United States",
        "9/21/2012",
        113.73
    ],
    [
        "United States",
        "9/21/2012",
        85.3
    ],
    [
        "United States",
        "9/21/2012",
        151.2
    ],
    [
        "United States",
        "9/21/2012",
        121.96
    ],
    [
        "United States",
        "9/21/2012",
        85.96
    ],
    [
        "United States",
        "9/21/2012",
        194.32
    ],
    [
        "United States",
        "9/21/2012",
        63.96
    ],
    [
        "United States",
        "9/21/2012",
        7.9
    ],
    [
        "United States",
        "9/21/2012",
        25.99
    ],
    [
        "United States",
        "9/21/2012",
        23.92
    ],
    [
        "United States",
        "9/21/2012",
        4.928
    ],
    [
        "United States",
        "9/21/2012",
        14.6
    ],
    [
        "United States",
        "9/22/2012",
        617.976
    ],
    [
        "United States",
        "9/22/2012",
        204.6
    ],
    [
        "United States",
        "9/22/2012",
        720.064
    ],
    [
        "United States",
        "9/22/2012",
        61.44
    ],
    [
        "United States",
        "9/22/2012",
        55.6
    ],
    [
        "United States",
        "9/22/2012",
        47.98
    ],
    [
        "United States",
        "9/22/2012",
        32.4
    ],
    [
        "United States",
        "9/22/2012",
        25.424
    ],
    [
        "United States",
        "9/22/2012",
        12
    ],
    [
        "United States",
        "9/22/2012",
        2.816
    ],
    [
        "United States",
        "9/22/2012",
        3.204
    ],
    [
        "United States",
        "9/24/2012",
        821.94
    ],
    [
        "United States",
        "9/24/2012",
        1408.1
    ],
    [
        "United States",
        "9/24/2012",
        1158.12
    ],
    [
        "United States",
        "9/24/2012",
        517.5
    ],
    [
        "United States",
        "9/24/2012",
        35.12
    ],
    [
        "United States",
        "9/24/2012",
        35.96
    ],
    [
        "United States",
        "9/24/2012",
        17.12
    ],
    [
        "United States",
        "9/24/2012",
        39.98
    ],
    [
        "United States",
        "9/24/2012",
        24.424
    ],
    [
        "United States",
        "9/24/2012",
        33.568
    ],
    [
        "United States",
        "9/24/2012",
        6.732
    ],
    [
        "United States",
        "9/24/2012",
        14.576
    ],
    [
        "United States",
        "9/24/2012",
        15.24
    ],
    [
        "United States",
        "9/24/2012",
        23.2
    ],
    [
        "United States",
        "9/24/2012",
        16.464
    ],
    [
        "United States",
        "9/24/2012",
        15.84
    ],
    [
        "United States",
        "9/24/2012",
        6.848
    ],
    [
        "United States",
        "9/24/2012",
        14.952
    ],
    [
        "United States",
        "9/24/2012",
        14.91
    ],
    [
        "United States",
        "9/25/2012",
        899.91
    ],
    [
        "United States",
        "9/25/2012",
        1044.63
    ],
    [
        "United States",
        "9/25/2012",
        307.136
    ],
    [
        "United States",
        "9/25/2012",
        102.582
    ],
    [
        "United States",
        "9/25/2012",
        128.744
    ],
    [
        "United States",
        "9/25/2012",
        104.98
    ],
    [
        "United States",
        "9/25/2012",
        159.98
    ],
    [
        "United States",
        "9/25/2012",
        68.62
    ],
    [
        "United States",
        "9/25/2012",
        63.96
    ],
    [
        "United States",
        "9/25/2012",
        45.68
    ],
    [
        "United States",
        "9/25/2012",
        20.04
    ],
    [
        "United States",
        "9/25/2012",
        17.48
    ],
    [
        "United States",
        "9/25/2012",
        10.76
    ],
    [
        "United States",
        "9/25/2012",
        10.48
    ],
    [
        "United States",
        "9/25/2012",
        6.336
    ],
    [
        "United States",
        "9/25/2012",
        14.46
    ],
    [
        "United States",
        "9/25/2012",
        6.7
    ],
    [
        "United States",
        "9/25/2012",
        12.6
    ],
    [
        "United States",
        "9/25/2012",
        2.946
    ],
    [
        "United States",
        "9/25/2012",
        3.264
    ],
    [
        "United States",
        "9/25/2012",
        2.469
    ],
    [
        "United States",
        "9/26/2012",
        1114.4
    ],
    [
        "United States",
        "9/26/2012",
        629.93
    ],
    [
        "United States",
        "9/26/2012",
        363.648
    ],
    [
        "United States",
        "9/26/2012",
        263.96
    ],
    [
        "United States",
        "9/26/2012",
        239.8
    ],
    [
        "United States",
        "9/26/2012",
        119.904
    ],
    [
        "United States",
        "9/26/2012",
        121.104
    ],
    [
        "United States",
        "9/26/2012",
        50
    ],
    [
        "United States",
        "9/26/2012",
        79.056
    ],
    [
        "United States",
        "9/26/2012",
        64.17
    ],
    [
        "United States",
        "9/26/2012",
        141.76
    ],
    [
        "United States",
        "9/26/2012",
        77.031
    ],
    [
        "United States",
        "9/26/2012",
        72.588
    ],
    [
        "United States",
        "9/26/2012",
        86.272
    ],
    [
        "United States",
        "9/26/2012",
        60.672
    ],
    [
        "United States",
        "9/26/2012",
        31.104
    ],
    [
        "United States",
        "9/26/2012",
        124.46
    ],
    [
        "United States",
        "9/26/2012",
        34.44
    ],
    [
        "United States",
        "9/26/2012",
        45.894
    ],
    [
        "United States",
        "9/26/2012",
        2.08
    ],
    [
        "United States",
        "9/27/2012",
        1871.88
    ],
    [
        "United States",
        "9/27/2012",
        146.82
    ],
    [
        "United States",
        "9/27/2012",
        99.2
    ],
    [
        "United States",
        "9/27/2012",
        154.9
    ],
    [
        "United States",
        "9/27/2012",
        25.92
    ],
    [
        "United States",
        "9/27/2012",
        24.288
    ],
    [
        "United States",
        "9/27/2012",
        15.51
    ],
    [
        "United States",
        "9/27/2012",
        16.4
    ],
    [
        "United States",
        "9/27/2012",
        12.96
    ],
    [
        "United States",
        "9/27/2012",
        15.08
    ],
    [
        "United States",
        "9/28/2012",
        293.52
    ],
    [
        "United States",
        "9/28/2012",
        43.56
    ],
    [
        "United States",
        "9/28/2012",
        307.98
    ],
    [
        "United States",
        "9/28/2012",
        186.15
    ],
    [
        "United States",
        "9/28/2012",
        43.26
    ],
    [
        "United States",
        "9/28/2012",
        81.792
    ],
    [
        "United States",
        "9/28/2012",
        47.19
    ],
    [
        "United States",
        "9/28/2012",
        36.784
    ],
    [
        "United States",
        "9/28/2012",
        4.512
    ],
    [
        "United States",
        "9/28/2012",
        12.536
    ],
    [
        "United States",
        "9/28/2012",
        1.08
    ],
    [
        "United States",
        "10/1/2012",
        572.8
    ],
    [
        "United States",
        "10/1/2012",
        311.98
    ],
    [
        "United States",
        "10/1/2012",
        139.424
    ],
    [
        "United States",
        "10/1/2012",
        108.768
    ],
    [
        "United States",
        "10/1/2012",
        22.45
    ],
    [
        "United States",
        "10/1/2012",
        2.992
    ],
    [
        "United States",
        "10/2/2012",
        503.96
    ],
    [
        "United States",
        "10/2/2012",
        270.34
    ],
    [
        "United States",
        "10/2/2012",
        53.04
    ],
    [
        "United States",
        "10/2/2012",
        53.568
    ],
    [
        "United States",
        "10/2/2012",
        94.85
    ],
    [
        "United States",
        "10/2/2012",
        26.9
    ],
    [
        "United States",
        "10/2/2012",
        51.12
    ],
    [
        "United States",
        "10/2/2012",
        57.504
    ],
    [
        "United States",
        "10/2/2012",
        90
    ],
    [
        "United States",
        "10/2/2012",
        10.944
    ],
    [
        "United States",
        "10/2/2012",
        11.032
    ],
    [
        "United States",
        "10/2/2012",
        7.38
    ],
    [
        "United States",
        "10/2/2012",
        11.808
    ],
    [
        "United States",
        "10/2/2012",
        19.44
    ],
    [
        "United States",
        "10/2/2012",
        7.38
    ],
    [
        "United States",
        "10/3/2012",
        120.666
    ],
    [
        "United States",
        "10/3/2012",
        24
    ],
    [
        "United States",
        "10/3/2012",
        47.984
    ],
    [
        "United States",
        "10/3/2012",
        32.07
    ],
    [
        "United States",
        "10/3/2012",
        35.49
    ],
    [
        "United States",
        "10/3/2012",
        15.008
    ],
    [
        "United States",
        "10/4/2012",
        392.94
    ],
    [
        "United States",
        "10/4/2012",
        64.944
    ],
    [
        "United States",
        "10/4/2012",
        26.96
    ],
    [
        "United States",
        "10/4/2012",
        20.736
    ],
    [
        "United States",
        "10/5/2012",
        288
    ],
    [
        "United States",
        "10/5/2012",
        291.168
    ],
    [
        "United States",
        "10/5/2012",
        53.04
    ],
    [
        "United States",
        "10/5/2012",
        66.294
    ],
    [
        "United States",
        "10/5/2012",
        46.2
    ],
    [
        "United States",
        "10/5/2012",
        77.55
    ],
    [
        "United States",
        "10/5/2012",
        28.84
    ],
    [
        "United States",
        "10/8/2012",
        145.9
    ],
    [
        "United States",
        "10/8/2012",
        72.78
    ],
    [
        "United States",
        "10/8/2012",
        3.44
    ],
    [
        "United States",
        "10/9/2012",
        619.95
    ],
    [
        "United States",
        "10/9/2012",
        631.96
    ],
    [
        "United States",
        "10/9/2012",
        389.97
    ],
    [
        "United States",
        "10/9/2012",
        57.96
    ],
    [
        "United States",
        "10/9/2012",
        269.91
    ],
    [
        "United States",
        "10/9/2012",
        29.16
    ],
    [
        "United States",
        "10/9/2012",
        29.403
    ],
    [
        "United States",
        "10/9/2012",
        37.376
    ],
    [
        "United States",
        "10/9/2012",
        23.92
    ],
    [
        "United States",
        "10/9/2012",
        30.84
    ],
    [
        "United States",
        "10/9/2012",
        11.214
    ],
    [
        "United States",
        "10/9/2012",
        1.872
    ],
    [
        "United States",
        "10/10/2012",
        1801.632
    ],
    [
        "United States",
        "10/10/2012",
        362.136
    ],
    [
        "United States",
        "10/10/2012",
        31.05
    ],
    [
        "United States",
        "10/10/2012",
        45.36
    ],
    [
        "United States",
        "10/10/2012",
        8.016
    ],
    [
        "United States",
        "10/11/2012",
        957.5775
    ],
    [
        "United States",
        "10/11/2012",
        31.95
    ],
    [
        "United States",
        "10/11/2012",
        22.368
    ],
    [
        "United States",
        "10/12/2012",
        899.136
    ],
    [
        "United States",
        "10/12/2012",
        626.352
    ],
    [
        "United States",
        "10/12/2012",
        263.96
    ],
    [
        "United States",
        "10/12/2012",
        209.67
    ],
    [
        "United States",
        "10/12/2012",
        71.76
    ],
    [
        "United States",
        "10/12/2012",
        135.72
    ],
    [
        "United States",
        "10/12/2012",
        51.84
    ],
    [
        "United States",
        "10/12/2012",
        19.9
    ],
    [
        "United States",
        "10/12/2012",
        81.96
    ],
    [
        "United States",
        "10/12/2012",
        17.9
    ],
    [
        "United States",
        "10/12/2012",
        12.56
    ],
    [
        "United States",
        "10/13/2012",
        287.94
    ],
    [
        "United States",
        "10/13/2012",
        83.72
    ],
    [
        "United States",
        "10/15/2012",
        2453.43
    ],
    [
        "United States",
        "10/15/2012",
        131.376
    ],
    [
        "United States",
        "10/15/2012",
        339.96
    ],
    [
        "United States",
        "10/15/2012",
        263.88
    ],
    [
        "United States",
        "10/15/2012",
        17.14
    ],
    [
        "United States",
        "10/15/2012",
        5.344
    ],
    [
        "United States",
        "10/15/2012",
        3.96
    ],
    [
        "United States",
        "10/15/2012",
        4.464
    ],
    [
        "United States",
        "10/16/2012",
        824.97
    ],
    [
        "United States",
        "10/17/2012",
        77.88
    ],
    [
        "United States",
        "10/18/2012",
        73.164
    ],
    [
        "United States",
        "10/18/2012",
        27.696
    ],
    [
        "United States",
        "10/18/2012",
        17.94
    ],
    [
        "United States",
        "10/18/2012",
        249.584
    ],
    [
        "United States",
        "10/18/2012",
        10.11
    ],
    [
        "United States",
        "10/19/2012",
        1640.7
    ],
    [
        "United States",
        "10/19/2012",
        270
    ],
    [
        "United States",
        "10/19/2012",
        149.95
    ],
    [
        "United States",
        "10/19/2012",
        34.44
    ],
    [
        "United States",
        "10/19/2012",
        38.28
    ],
    [
        "United States",
        "10/19/2012",
        1.72
    ],
    [
        "United States",
        "10/20/2012",
        364.776
    ],
    [
        "United States",
        "10/20/2012",
        239.97
    ],
    [
        "United States",
        "10/20/2012",
        74.76
    ],
    [
        "United States",
        "10/20/2012",
        24.56
    ],
    [
        "United States",
        "10/20/2012",
        16.02
    ],
    [
        "United States",
        "10/22/2012",
        9.952
    ],
    [
        "United States",
        "10/22/2012",
        5.176
    ],
    [
        "United States",
        "10/23/2012",
        842.352
    ],
    [
        "United States",
        "10/23/2012",
        150.384
    ],
    [
        "United States",
        "10/23/2012",
        191.968
    ],
    [
        "United States",
        "10/23/2012",
        479.976
    ],
    [
        "United States",
        "10/23/2012",
        240.784
    ],
    [
        "United States",
        "10/23/2012",
        148.32
    ],
    [
        "United States",
        "10/23/2012",
        55.944
    ],
    [
        "United States",
        "10/23/2012",
        36.288
    ],
    [
        "United States",
        "10/23/2012",
        11.824
    ],
    [
        "United States",
        "10/23/2012",
        60.736
    ],
    [
        "United States",
        "10/23/2012",
        10.688
    ],
    [
        "United States",
        "10/23/2012",
        11.56
    ],
    [
        "United States",
        "10/23/2012",
        11.8
    ],
    [
        "United States",
        "10/23/2012",
        6.08
    ],
    [
        "United States",
        "10/23/2012",
        3.592
    ],
    [
        "United States",
        "10/24/2012",
        454.272
    ],
    [
        "United States",
        "10/24/2012",
        347.361
    ],
    [
        "United States",
        "10/24/2012",
        15.552
    ],
    [
        "United States",
        "10/24/2012",
        10.368
    ],
    [
        "United States",
        "10/24/2012",
        3.592
    ],
    [
        "United States",
        "10/25/2012",
        582.336
    ],
    [
        "United States",
        "10/25/2012",
        253.176
    ],
    [
        "United States",
        "10/25/2012",
        291.1
    ],
    [
        "United States",
        "10/25/2012",
        79.36
    ],
    [
        "United States",
        "10/25/2012",
        158.99
    ],
    [
        "United States",
        "10/25/2012",
        60.45
    ],
    [
        "United States",
        "10/26/2012",
        718.64
    ],
    [
        "United States",
        "10/26/2012",
        131.904
    ],
    [
        "United States",
        "10/26/2012",
        105.584
    ],
    [
        "United States",
        "10/26/2012",
        203.88
    ],
    [
        "United States",
        "10/26/2012",
        146.544
    ],
    [
        "United States",
        "10/26/2012",
        68.72
    ],
    [
        "United States",
        "10/26/2012",
        14.301
    ],
    [
        "United States",
        "10/26/2012",
        5.76
    ],
    [
        "United States",
        "10/28/2012",
        36.63
    ],
    [
        "United States",
        "10/28/2012",
        33.11
    ],
    [
        "United States",
        "10/28/2012",
        24.1
    ],
    [
        "United States",
        "10/28/2012",
        10.67
    ],
    [
        "United States",
        "10/29/2012",
        210.84
    ],
    [
        "United States",
        "10/29/2012",
        33.4
    ],
    [
        "United States",
        "10/30/2012",
        1035.8
    ],
    [
        "United States",
        "10/30/2012",
        299.9
    ],
    [
        "United States",
        "10/30/2012",
        439.992
    ],
    [
        "United States",
        "10/30/2012",
        182.91
    ],
    [
        "United States",
        "10/30/2012",
        59.994
    ],
    [
        "United States",
        "10/30/2012",
        87.96
    ],
    [
        "United States",
        "10/30/2012",
        15.488
    ],
    [
        "United States",
        "10/31/2012",
        1295.84
    ],
    [
        "United States",
        "10/31/2012",
        425.833
    ],
    [
        "United States",
        "10/31/2012",
        323.136
    ],
    [
        "United States",
        "10/31/2012",
        398.352
    ],
    [
        "United States",
        "10/31/2012",
        427.42
    ],
    [
        "United States",
        "10/31/2012",
        79.96
    ],
    [
        "United States",
        "10/31/2012",
        46.84
    ],
    [
        "United States",
        "10/31/2012",
        29.8
    ],
    [
        "United States",
        "10/31/2012",
        17.45
    ],
    [
        "United States",
        "10/31/2012",
        29.7
    ],
    [
        "United States",
        "10/31/2012",
        19.98
    ],
    [
        "United States",
        "10/31/2012",
        70.12
    ],
    [
        "United States",
        "10/31/2012",
        14.75
    ],
    [
        "United States",
        "10/31/2012",
        14.28
    ],
    [
        "United States",
        "10/31/2012",
        9.728
    ],
    [
        "United States",
        "10/31/2012",
        5.04
    ],
    [
        "United States",
        "10/31/2012",
        2.78
    ],
    [
        "United States",
        "11/1/2012",
        1399.93
    ],
    [
        "United States",
        "11/1/2012",
        503.96
    ],
    [
        "United States",
        "11/1/2012",
        327.564
    ],
    [
        "United States",
        "11/1/2012",
        301.96
    ],
    [
        "United States",
        "11/1/2012",
        259.7
    ],
    [
        "United States",
        "11/1/2012",
        35.36
    ],
    [
        "United States",
        "11/1/2012",
        205.164
    ],
    [
        "United States",
        "11/1/2012",
        42.95
    ],
    [
        "United States",
        "11/1/2012",
        7.88
    ],
    [
        "United States",
        "11/1/2012",
        13.52
    ],
    [
        "United States",
        "11/1/2012",
        3.168
    ],
    [
        "United States",
        "11/1/2012",
        4.95
    ],
    [
        "United States",
        "11/2/2012",
        2621.322
    ],
    [
        "United States",
        "11/2/2012",
        447.93
    ],
    [
        "United States",
        "11/2/2012",
        1038.84
    ],
    [
        "United States",
        "11/2/2012",
        197.72
    ],
    [
        "United States",
        "11/2/2012",
        512.499
    ],
    [
        "United States",
        "11/2/2012",
        117.488
    ],
    [
        "United States",
        "11/2/2012",
        344.704
    ],
    [
        "United States",
        "11/2/2012",
        109.764
    ],
    [
        "United States",
        "11/2/2012",
        96.96
    ],
    [
        "United States",
        "11/2/2012",
        29.372
    ],
    [
        "United States",
        "11/2/2012",
        11.952
    ],
    [
        "United States",
        "11/3/2012",
        1448.82
    ],
    [
        "United States",
        "11/3/2012",
        1212.848
    ],
    [
        "United States",
        "11/3/2012",
        89.97
    ],
    [
        "United States",
        "11/3/2012",
        42.6
    ],
    [
        "United States",
        "11/3/2012",
        6.608
    ],
    [
        "United States",
        "11/5/2012",
        387.136
    ],
    [
        "United States",
        "11/5/2012",
        98.352
    ],
    [
        "United States",
        "11/5/2012",
        207
    ],
    [
        "United States",
        "11/5/2012",
        62.8
    ],
    [
        "United States",
        "11/5/2012",
        27.2
    ],
    [
        "United States",
        "11/5/2012",
        7.218
    ],
    [
        "United States",
        "11/5/2012",
        25.344
    ],
    [
        "United States",
        "11/5/2012",
        19.824
    ],
    [
        "United States",
        "11/6/2012",
        4.401
    ],
    [
        "United States",
        "11/6/2012",
        7.08
    ],
    [
        "United States",
        "11/7/2012",
        715.2
    ],
    [
        "United States",
        "11/7/2012",
        190.72
    ],
    [
        "United States",
        "11/7/2012",
        1345.485
    ],
    [
        "United States",
        "11/7/2012",
        287.91
    ],
    [
        "United States",
        "11/7/2012",
        177.648
    ],
    [
        "United States",
        "11/7/2012",
        76.64
    ],
    [
        "United States",
        "11/7/2012",
        84.784
    ],
    [
        "United States",
        "11/7/2012",
        26.18
    ],
    [
        "United States",
        "11/7/2012",
        64.96
    ],
    [
        "United States",
        "11/7/2012",
        24.4
    ],
    [
        "United States",
        "11/7/2012",
        23.64
    ],
    [
        "United States",
        "11/7/2012",
        16.146
    ],
    [
        "United States",
        "11/7/2012",
        7.3
    ],
    [
        "United States",
        "11/7/2012",
        32.06
    ],
    [
        "United States",
        "11/8/2012",
        4643.8
    ],
    [
        "United States",
        "11/8/2012",
        4404.9
    ],
    [
        "United States",
        "11/8/2012",
        371.97
    ],
    [
        "United States",
        "11/8/2012",
        577.764
    ],
    [
        "United States",
        "11/8/2012",
        549.98
    ],
    [
        "United States",
        "11/8/2012",
        263.96
    ],
    [
        "United States",
        "11/8/2012",
        226.2
    ],
    [
        "United States",
        "11/8/2012",
        186.54
    ],
    [
        "United States",
        "11/8/2012",
        67.15
    ],
    [
        "United States",
        "11/8/2012",
        91.68
    ],
    [
        "United States",
        "11/8/2012",
        44.43
    ],
    [
        "United States",
        "11/8/2012",
        52.272
    ],
    [
        "United States",
        "11/8/2012",
        92.94
    ],
    [
        "United States",
        "11/8/2012",
        265.86
    ],
    [
        "United States",
        "11/8/2012",
        39.879
    ],
    [
        "United States",
        "11/8/2012",
        119.9
    ],
    [
        "United States",
        "11/8/2012",
        66.69
    ],
    [
        "United States",
        "11/8/2012",
        31.504
    ],
    [
        "United States",
        "11/8/2012",
        17.94
    ],
    [
        "United States",
        "11/8/2012",
        27.9
    ],
    [
        "United States",
        "11/8/2012",
        4.712
    ],
    [
        "United States",
        "11/8/2012",
        10.476
    ],
    [
        "United States",
        "11/8/2012",
        11.65
    ],
    [
        "United States",
        "11/8/2012",
        5
    ],
    [
        "United States",
        "11/8/2012",
        5.04
    ],
    [
        "United States",
        "11/8/2012",
        5.04
    ],
    [
        "United States",
        "11/8/2012",
        11.82
    ],
    [
        "United States",
        "11/9/2012",
        2321.9
    ],
    [
        "United States",
        "11/9/2012",
        899.95
    ],
    [
        "United States",
        "11/9/2012",
        1024.38
    ],
    [
        "United States",
        "11/9/2012",
        244.55
    ],
    [
        "United States",
        "11/9/2012",
        12.24
    ],
    [
        "United States",
        "11/9/2012",
        10.74
    ],
    [
        "United States",
        "11/9/2012",
        13.98
    ],
    [
        "United States",
        "11/9/2012",
        26.22
    ],
    [
        "United States",
        "11/9/2012",
        11.352
    ],
    [
        "United States",
        "11/9/2012",
        17.94
    ],
    [
        "United States",
        "11/9/2012",
        17.22
    ],
    [
        "United States",
        "11/9/2012",
        17.34
    ],
    [
        "United States",
        "11/9/2012",
        2.48
    ],
    [
        "United States",
        "11/10/2012",
        715.64
    ],
    [
        "United States",
        "11/10/2012",
        577.584
    ],
    [
        "United States",
        "11/10/2012",
        714.3
    ],
    [
        "United States",
        "11/10/2012",
        795.51
    ],
    [
        "United States",
        "11/10/2012",
        549.99
    ],
    [
        "United States",
        "11/10/2012",
        79.9
    ],
    [
        "United States",
        "11/10/2012",
        29.22
    ],
    [
        "United States",
        "11/10/2012",
        74.76
    ],
    [
        "United States",
        "11/11/2012",
        418.32
    ],
    [
        "United States",
        "11/11/2012",
        123.858
    ],
    [
        "United States",
        "11/12/2012",
        223.888
    ],
    [
        "United States",
        "11/12/2012",
        523.92
    ],
    [
        "United States",
        "11/12/2012",
        64.784
    ],
    [
        "United States",
        "11/12/2012",
        146.136
    ],
    [
        "United States",
        "11/12/2012",
        100.792
    ],
    [
        "United States",
        "11/12/2012",
        15.7
    ],
    [
        "United States",
        "11/12/2012",
        15.56
    ],
    [
        "United States",
        "11/12/2012",
        11.76
    ],
    [
        "United States",
        "11/12/2012",
        15.552
    ],
    [
        "United States",
        "11/12/2012",
        4.662
    ],
    [
        "United States",
        "11/12/2012",
        5.238
    ],
    [
        "United States",
        "11/13/2012",
        613.9992
    ],
    [
        "United States",
        "11/13/2012",
        683.332
    ],
    [
        "United States",
        "11/13/2012",
        339.96
    ],
    [
        "United States",
        "11/13/2012",
        299.97
    ],
    [
        "United States",
        "11/13/2012",
        377.97
    ],
    [
        "United States",
        "11/13/2012",
        115.296
    ],
    [
        "United States",
        "11/13/2012",
        121.104
    ],
    [
        "United States",
        "11/13/2012",
        238.896
    ],
    [
        "United States",
        "11/13/2012",
        84.96
    ],
    [
        "United States",
        "11/13/2012",
        63.98
    ],
    [
        "United States",
        "11/13/2012",
        89.98
    ],
    [
        "United States",
        "11/13/2012",
        102.36
    ],
    [
        "United States",
        "11/13/2012",
        96.08
    ],
    [
        "United States",
        "11/13/2012",
        63.77
    ],
    [
        "United States",
        "11/13/2012",
        50.97
    ],
    [
        "United States",
        "11/13/2012",
        111.96
    ],
    [
        "United States",
        "11/13/2012",
        42.28
    ],
    [
        "United States",
        "11/13/2012",
        29.96
    ],
    [
        "United States",
        "11/13/2012",
        36.882
    ],
    [
        "United States",
        "11/13/2012",
        9.872
    ],
    [
        "United States",
        "11/13/2012",
        17.496
    ],
    [
        "United States",
        "11/14/2012",
        826.11
    ],
    [
        "United States",
        "11/14/2012",
        883.84
    ],
    [
        "United States",
        "11/14/2012",
        159.968
    ],
    [
        "United States",
        "11/14/2012",
        230.352
    ],
    [
        "United States",
        "11/14/2012",
        33.96
    ],
    [
        "United States",
        "11/14/2012",
        91.176
    ],
    [
        "United States",
        "11/14/2012",
        76.14
    ],
    [
        "United States",
        "11/14/2012",
        59.9
    ],
    [
        "United States",
        "11/14/2012",
        37.6
    ],
    [
        "United States",
        "11/14/2012",
        37
    ],
    [
        "United States",
        "11/14/2012",
        19.96
    ],
    [
        "United States",
        "11/14/2012",
        47.984
    ],
    [
        "United States",
        "11/14/2012",
        8.72
    ],
    [
        "United States",
        "11/15/2012",
        119.04
    ],
    [
        "United States",
        "11/15/2012",
        250.272
    ],
    [
        "United States",
        "11/15/2012",
        70.95
    ],
    [
        "United States",
        "11/15/2012",
        166.92
    ],
    [
        "United States",
        "11/15/2012",
        34.944
    ],
    [
        "United States",
        "11/15/2012",
        39.96
    ],
    [
        "United States",
        "11/15/2012",
        8.72
    ],
    [
        "United States",
        "11/15/2012",
        11.364
    ],
    [
        "United States",
        "11/16/2012",
        696.42
    ],
    [
        "United States",
        "11/16/2012",
        523.25
    ],
    [
        "United States",
        "11/16/2012",
        653.55
    ],
    [
        "United States",
        "11/16/2012",
        999.96
    ],
    [
        "United States",
        "11/16/2012",
        185.58
    ],
    [
        "United States",
        "11/16/2012",
        214.11
    ],
    [
        "United States",
        "11/16/2012",
        239.976
    ],
    [
        "United States",
        "11/16/2012",
        179.82
    ],
    [
        "United States",
        "11/16/2012",
        304.776
    ],
    [
        "United States",
        "11/16/2012",
        18.9
    ],
    [
        "United States",
        "11/16/2012",
        34.504
    ],
    [
        "United States",
        "11/16/2012",
        21.488
    ],
    [
        "United States",
        "11/17/2012",
        1323.9
    ],
    [
        "United States",
        "11/17/2012",
        415.968
    ],
    [
        "United States",
        "11/17/2012",
        225.568
    ],
    [
        "United States",
        "11/17/2012",
        777.21
    ],
    [
        "United States",
        "11/17/2012",
        304.9
    ],
    [
        "United States",
        "11/17/2012",
        80.96
    ],
    [
        "United States",
        "11/17/2012",
        541.24
    ],
    [
        "United States",
        "11/17/2012",
        106.32
    ],
    [
        "United States",
        "11/17/2012",
        36.6
    ],
    [
        "United States",
        "11/17/2012",
        32.4
    ],
    [
        "United States",
        "11/17/2012",
        40.92
    ],
    [
        "United States",
        "11/19/2012",
        861.76
    ],
    [
        "United States",
        "11/19/2012",
        141.96
    ],
    [
        "United States",
        "11/19/2012",
        31.08
    ],
    [
        "United States",
        "11/19/2012",
        5.984
    ],
    [
        "United States",
        "11/20/2012",
        479.988
    ],
    [
        "United States",
        "11/20/2012",
        344.372
    ],
    [
        "United States",
        "11/20/2012",
        572.16
    ],
    [
        "United States",
        "11/20/2012",
        290.352
    ],
    [
        "United States",
        "11/20/2012",
        119.04
    ],
    [
        "United States",
        "11/20/2012",
        89.696
    ],
    [
        "United States",
        "11/20/2012",
        186.048
    ],
    [
        "United States",
        "11/20/2012",
        141.552
    ],
    [
        "United States",
        "11/20/2012",
        50.12
    ],
    [
        "United States",
        "11/20/2012",
        62.88
    ],
    [
        "United States",
        "11/20/2012",
        60.45
    ],
    [
        "United States",
        "11/20/2012",
        72.744
    ],
    [
        "United States",
        "11/20/2012",
        63.824
    ],
    [
        "United States",
        "11/20/2012",
        24.192
    ],
    [
        "United States",
        "11/20/2012",
        22.14
    ],
    [
        "United States",
        "11/20/2012",
        17.44
    ],
    [
        "United States",
        "11/20/2012",
        145.764
    ],
    [
        "United States",
        "11/20/2012",
        19.65
    ],
    [
        "United States",
        "11/20/2012",
        7.23
    ],
    [
        "United States",
        "11/20/2012",
        13.98
    ],
    [
        "United States",
        "11/20/2012",
        19.46
    ],
    [
        "United States",
        "11/20/2012",
        32.04
    ],
    [
        "United States",
        "11/20/2012",
        11.52
    ],
    [
        "United States",
        "11/20/2012",
        4.896
    ],
    [
        "United States",
        "11/20/2012",
        9.612
    ],
    [
        "United States",
        "11/21/2012",
        393.54
    ],
    [
        "United States",
        "11/21/2012",
        1252.704
    ],
    [
        "United States",
        "11/21/2012",
        396.802
    ],
    [
        "United States",
        "11/21/2012",
        325.632
    ],
    [
        "United States",
        "11/21/2012",
        439.992
    ],
    [
        "United States",
        "11/21/2012",
        83.9
    ],
    [
        "United States",
        "11/21/2012",
        141.96
    ],
    [
        "United States",
        "11/21/2012",
        66.048
    ],
    [
        "United States",
        "11/21/2012",
        246.1328
    ],
    [
        "United States",
        "11/21/2012",
        110.97
    ],
    [
        "United States",
        "11/21/2012",
        19.75
    ],
    [
        "United States",
        "11/21/2012",
        18.176
    ],
    [
        "United States",
        "11/21/2012",
        16.52
    ],
    [
        "United States",
        "11/21/2012",
        15.88
    ],
    [
        "United States",
        "11/21/2012",
        10.92
    ],
    [
        "United States",
        "11/21/2012",
        23.344
    ],
    [
        "United States",
        "11/21/2012",
        24.588
    ],
    [
        "United States",
        "11/21/2012",
        7.98
    ],
    [
        "United States",
        "11/21/2012",
        5.344
    ],
    [
        "United States",
        "11/21/2012",
        11.696
    ],
    [
        "United States",
        "11/21/2012",
        1.696
    ],
    [
        "United States",
        "11/22/2012",
        59.94
    ],
    [
        "United States",
        "11/22/2012",
        206.962
    ],
    [
        "United States",
        "11/22/2012",
        33.63
    ],
    [
        "United States",
        "11/22/2012",
        42.8
    ],
    [
        "United States",
        "11/22/2012",
        17.12
    ],
    [
        "United States",
        "11/22/2012",
        68.81
    ],
    [
        "United States",
        "11/22/2012",
        37.94
    ],
    [
        "United States",
        "11/22/2012",
        55.104
    ],
    [
        "United States",
        "11/22/2012",
        14.94
    ],
    [
        "United States",
        "11/22/2012",
        32.985
    ],
    [
        "United States",
        "11/22/2012",
        11.61
    ],
    [
        "United States",
        "11/22/2012",
        27.168
    ],
    [
        "United States",
        "11/22/2012",
        2.544
    ],
    [
        "United States",
        "11/22/2012",
        2.946
    ],
    [
        "United States",
        "11/23/2012",
        2625.12
    ],
    [
        "United States",
        "11/23/2012",
        307.98
    ],
    [
        "United States",
        "11/23/2012",
        335.52
    ],
    [
        "United States",
        "11/23/2012",
        38.88
    ],
    [
        "United States",
        "11/23/2012",
        44.1
    ],
    [
        "United States",
        "11/23/2012",
        16.56
    ],
    [
        "United States",
        "11/23/2012",
        13.12
    ],
    [
        "United States",
        "11/23/2012",
        27.056
    ],
    [
        "United States",
        "11/23/2012",
        17.94
    ],
    [
        "United States",
        "11/23/2012",
        23.912
    ],
    [
        "United States",
        "11/24/2012",
        454.86
    ],
    [
        "United States",
        "11/24/2012",
        368.91
    ],
    [
        "United States",
        "11/24/2012",
        91.392
    ],
    [
        "United States",
        "11/24/2012",
        146.73
    ],
    [
        "United States",
        "11/24/2012",
        79.76
    ],
    [
        "United States",
        "11/24/2012",
        19.44
    ],
    [
        "United States",
        "11/24/2012",
        25.824
    ],
    [
        "United States",
        "11/24/2012",
        14.7
    ],
    [
        "United States",
        "11/24/2012",
        13.98
    ],
    [
        "United States",
        "11/24/2012",
        3.168
    ],
    [
        "United States",
        "11/25/2012",
        13.12
    ],
    [
        "United States",
        "11/26/2012",
        692.472
    ],
    [
        "United States",
        "11/26/2012",
        599.99
    ],
    [
        "United States",
        "11/26/2012",
        104.9
    ],
    [
        "United States",
        "11/26/2012",
        61.04
    ],
    [
        "United States",
        "11/26/2012",
        14.73
    ],
    [
        "United States",
        "11/26/2012",
        10.95
    ],
    [
        "United States",
        "11/27/2012",
        748.752
    ],
    [
        "United States",
        "11/27/2012",
        446.068
    ],
    [
        "United States",
        "11/27/2012",
        259.98
    ],
    [
        "United States",
        "11/27/2012",
        283.92
    ],
    [
        "United States",
        "11/27/2012",
        375.4575
    ],
    [
        "United States",
        "11/27/2012",
        170.98
    ],
    [
        "United States",
        "11/27/2012",
        83.97
    ],
    [
        "United States",
        "11/27/2012",
        154.9
    ],
    [
        "United States",
        "11/27/2012",
        104.97
    ],
    [
        "United States",
        "11/27/2012",
        113.82
    ],
    [
        "United States",
        "11/27/2012",
        38.97
    ],
    [
        "United States",
        "11/27/2012",
        83.976
    ],
    [
        "United States",
        "11/27/2012",
        40.08
    ],
    [
        "United States",
        "11/27/2012",
        59.94
    ],
    [
        "United States",
        "11/27/2012",
        107.97
    ],
    [
        "United States",
        "11/27/2012",
        29.79
    ],
    [
        "United States",
        "11/27/2012",
        6.24
    ],
    [
        "United States",
        "11/28/2012",
        647.904
    ],
    [
        "United States",
        "11/28/2012",
        335.52
    ],
    [
        "United States",
        "11/28/2012",
        322.59
    ],
    [
        "United States",
        "11/28/2012",
        151.96
    ],
    [
        "United States",
        "11/28/2012",
        71.12
    ],
    [
        "United States",
        "11/28/2012",
        82.368
    ],
    [
        "United States",
        "11/28/2012",
        62.24
    ],
    [
        "United States",
        "11/28/2012",
        68.16
    ],
    [
        "United States",
        "11/28/2012",
        53.92
    ],
    [
        "United States",
        "11/28/2012",
        12.132
    ],
    [
        "United States",
        "11/28/2012",
        45.28
    ],
    [
        "United States",
        "11/28/2012",
        3.008
    ],
    [
        "United States",
        "11/28/2012",
        8.28
    ],
    [
        "United States",
        "11/29/2012",
        1106.91
    ],
    [
        "United States",
        "11/29/2012",
        523.48
    ],
    [
        "United States",
        "11/29/2012",
        555.21
    ],
    [
        "United States",
        "11/29/2012",
        301.96
    ],
    [
        "United States",
        "11/29/2012",
        161.82
    ],
    [
        "United States",
        "11/29/2012",
        56.3
    ],
    [
        "United States",
        "11/29/2012",
        21.48
    ],
    [
        "United States",
        "11/29/2012",
        8.784
    ],
    [
        "United States",
        "11/29/2012",
        19.92
    ],
    [
        "United States",
        "11/29/2012",
        4.304
    ],
    [
        "United States",
        "11/30/2012",
        335.744
    ],
    [
        "United States",
        "11/30/2012",
        98.352
    ],
    [
        "United States",
        "11/30/2012",
        681.408
    ],
    [
        "United States",
        "11/30/2012",
        71.88
    ],
    [
        "United States",
        "11/30/2012",
        177.48
    ],
    [
        "United States",
        "11/30/2012",
        152.991
    ],
    [
        "United States",
        "11/30/2012",
        80.96
    ],
    [
        "United States",
        "11/30/2012",
        94.92
    ],
    [
        "United States",
        "11/30/2012",
        17.48
    ],
    [
        "United States",
        "11/30/2012",
        25.92
    ],
    [
        "United States",
        "11/30/2012",
        17.088
    ],
    [
        "United States",
        "11/30/2012",
        3.882
    ],
    [
        "United States",
        "11/30/2012",
        10.584
    ],
    [
        "United States",
        "11/30/2012",
        6.048
    ],
    [
        "United States",
        "11/30/2012",
        23.66
    ],
    [
        "United States",
        "12/1/2012",
        1913.4
    ],
    [
        "United States",
        "12/1/2012",
        2003.92
    ],
    [
        "United States",
        "12/1/2012",
        2676.672
    ],
    [
        "United States",
        "12/1/2012",
        146.73
    ],
    [
        "United States",
        "12/1/2012",
        114.2
    ],
    [
        "United States",
        "12/1/2012",
        63.96
    ],
    [
        "United States",
        "12/1/2012",
        61.68
    ],
    [
        "United States",
        "12/1/2012",
        19.44
    ],
    [
        "United States",
        "12/1/2012",
        55.424
    ],
    [
        "United States",
        "12/1/2012",
        32.4
    ],
    [
        "United States",
        "12/1/2012",
        6.688
    ],
    [
        "United States",
        "12/1/2012",
        13.9
    ],
    [
        "United States",
        "12/1/2012",
        18.54
    ],
    [
        "United States",
        "12/1/2012",
        3.64
    ],
    [
        "United States",
        "12/3/2012",
        359.499
    ],
    [
        "United States",
        "12/3/2012",
        590.352
    ],
    [
        "United States",
        "12/3/2012",
        482.34
    ],
    [
        "United States",
        "12/3/2012",
        184.66
    ],
    [
        "United States",
        "12/3/2012",
        95.97
    ],
    [
        "United States",
        "12/3/2012",
        105.584
    ],
    [
        "United States",
        "12/3/2012",
        77.952
    ],
    [
        "United States",
        "12/3/2012",
        36.784
    ],
    [
        "United States",
        "12/3/2012",
        9.344
    ],
    [
        "United States",
        "12/3/2012",
        10.752
    ],
    [
        "United States",
        "12/3/2012",
        16.448
    ],
    [
        "United States",
        "12/3/2012",
        2.96
    ],
    [
        "United States",
        "12/4/2012",
        1598.058
    ],
    [
        "United States",
        "12/4/2012",
        1799.75
    ],
    [
        "United States",
        "12/4/2012",
        364.41
    ],
    [
        "United States",
        "12/4/2012",
        271.44
    ],
    [
        "United States",
        "12/4/2012",
        384.174
    ],
    [
        "United States",
        "12/4/2012",
        361.764
    ],
    [
        "United States",
        "12/4/2012",
        110.352
    ],
    [
        "United States",
        "12/4/2012",
        85.96
    ],
    [
        "United States",
        "12/4/2012",
        36.96
    ],
    [
        "United States",
        "12/4/2012",
        39.96
    ],
    [
        "United States",
        "12/4/2012",
        36.4
    ],
    [
        "United States",
        "12/4/2012",
        17.94
    ],
    [
        "United States",
        "12/4/2012",
        28.44
    ],
    [
        "United States",
        "12/4/2012",
        25.08
    ],
    [
        "United States",
        "12/4/2012",
        8.226
    ],
    [
        "United States",
        "12/4/2012",
        16.9
    ],
    [
        "United States",
        "12/5/2012",
        232.4
    ],
    [
        "United States",
        "12/5/2012",
        152.8
    ],
    [
        "United States",
        "12/5/2012",
        45.04
    ],
    [
        "United States",
        "12/5/2012",
        97.424
    ],
    [
        "United States",
        "12/5/2012",
        164.646
    ],
    [
        "United States",
        "12/5/2012",
        47.984
    ],
    [
        "United States",
        "12/5/2012",
        44.46
    ],
    [
        "United States",
        "12/5/2012",
        26.064
    ],
    [
        "United States",
        "12/5/2012",
        39
    ],
    [
        "United States",
        "12/5/2012",
        12.224
    ],
    [
        "United States",
        "12/5/2012",
        22.68
    ],
    [
        "United States",
        "12/5/2012",
        12.6
    ],
    [
        "United States",
        "12/6/2012",
        999.98
    ],
    [
        "United States",
        "12/6/2012",
        1619.91
    ],
    [
        "United States",
        "12/6/2012",
        1325.85
    ],
    [
        "United States",
        "12/6/2012",
        485.94
    ],
    [
        "United States",
        "12/6/2012",
        247.104
    ],
    [
        "United States",
        "12/6/2012",
        206.112
    ],
    [
        "United States",
        "12/6/2012",
        70.686
    ],
    [
        "United States",
        "12/6/2012",
        198.272
    ],
    [
        "United States",
        "12/6/2012",
        37.376
    ],
    [
        "United States",
        "12/6/2012",
        86.304
    ],
    [
        "United States",
        "12/6/2012",
        173.94
    ],
    [
        "United States",
        "12/6/2012",
        41.86
    ],
    [
        "United States",
        "12/6/2012",
        219.184
    ],
    [
        "United States",
        "12/6/2012",
        113.92
    ],
    [
        "United States",
        "12/6/2012",
        120.15
    ],
    [
        "United States",
        "12/6/2012",
        14.832
    ],
    [
        "United States",
        "12/6/2012",
        19.92
    ],
    [
        "United States",
        "12/6/2012",
        14.94
    ],
    [
        "United States",
        "12/6/2012",
        32.75
    ],
    [
        "United States",
        "12/6/2012",
        8.96
    ],
    [
        "United States",
        "12/6/2012",
        7.78
    ],
    [
        "United States",
        "12/6/2012",
        6.48
    ],
    [
        "United States",
        "12/6/2012",
        6.48
    ],
    [
        "United States",
        "12/6/2012",
        2.772
    ],
    [
        "United States",
        "12/7/2012",
        773.94
    ],
    [
        "United States",
        "12/7/2012",
        152.94
    ],
    [
        "United States",
        "12/7/2012",
        283.92
    ],
    [
        "United States",
        "12/7/2012",
        79.92
    ],
    [
        "United States",
        "12/7/2012",
        21.36
    ],
    [
        "United States",
        "12/7/2012",
        3.96
    ],
    [
        "United States",
        "12/7/2012",
        2.61
    ],
    [
        "United States",
        "12/7/2012",
        6.688
    ],
    [
        "United States",
        "12/7/2012",
        12.96
    ],
    [
        "United States",
        "12/8/2012",
        1718.4
    ],
    [
        "United States",
        "12/8/2012",
        360.712
    ],
    [
        "United States",
        "12/8/2012",
        221.96
    ],
    [
        "United States",
        "12/8/2012",
        236
    ],
    [
        "United States",
        "12/8/2012",
        119.96
    ],
    [
        "United States",
        "12/8/2012",
        15.696
    ],
    [
        "United States",
        "12/9/2012",
        34.02
    ],
    [
        "United States",
        "12/10/2012",
        799.984
    ],
    [
        "United States",
        "12/10/2012",
        801.96
    ],
    [
        "United States",
        "12/10/2012",
        184.66
    ],
    [
        "United States",
        "12/10/2012",
        542.94
    ],
    [
        "United States",
        "12/10/2012",
        191.96
    ],
    [
        "United States",
        "12/10/2012",
        134.99
    ],
    [
        "United States",
        "12/10/2012",
        41.28
    ],
    [
        "United States",
        "12/10/2012",
        53.088
    ],
    [
        "United States",
        "12/10/2012",
        56.3
    ],
    [
        "United States",
        "12/10/2012",
        44.75
    ],
    [
        "United States",
        "12/10/2012",
        101.94
    ],
    [
        "United States",
        "12/10/2012",
        27.36
    ],
    [
        "United States",
        "12/10/2012",
        25.92
    ],
    [
        "United States",
        "12/10/2012",
        26.4
    ],
    [
        "United States",
        "12/10/2012",
        25.488
    ],
    [
        "United States",
        "12/10/2012",
        7.31
    ],
    [
        "United States",
        "12/10/2012",
        3.9
    ],
    [
        "United States",
        "12/10/2012",
        5.76
    ],
    [
        "United States",
        "12/10/2012",
        2.61
    ],
    [
        "United States",
        "12/10/2012",
        1.78
    ],
    [
        "United States",
        "12/11/2012",
        175.23
    ],
    [
        "United States",
        "12/11/2012",
        125.99
    ],
    [
        "United States",
        "12/11/2012",
        196.62
    ],
    [
        "United States",
        "12/11/2012",
        159.984
    ],
    [
        "United States",
        "12/11/2012",
        364.95
    ],
    [
        "United States",
        "12/11/2012",
        110.528
    ],
    [
        "United States",
        "12/11/2012",
        46.344
    ],
    [
        "United States",
        "12/11/2012",
        23
    ],
    [
        "United States",
        "12/11/2012",
        52.416
    ],
    [
        "United States",
        "12/11/2012",
        58.08
    ],
    [
        "United States",
        "12/11/2012",
        85.056
    ],
    [
        "United States",
        "12/11/2012",
        54.92
    ],
    [
        "United States",
        "12/11/2012",
        27.696
    ],
    [
        "United States",
        "12/11/2012",
        69.576
    ],
    [
        "United States",
        "12/11/2012",
        12.828
    ],
    [
        "United States",
        "12/11/2012",
        10.332
    ],
    [
        "United States",
        "12/11/2012",
        13.12
    ],
    [
        "United States",
        "12/11/2012",
        4.224
    ],
    [
        "United States",
        "12/12/2012",
        299.94
    ],
    [
        "United States",
        "12/12/2012",
        360.38
    ],
    [
        "United States",
        "12/12/2012",
        348.928
    ],
    [
        "United States",
        "12/12/2012",
        97.88
    ],
    [
        "United States",
        "12/12/2012",
        166.5
    ],
    [
        "United States",
        "12/12/2012",
        25.76
    ],
    [
        "United States",
        "12/12/2012",
        36.44
    ],
    [
        "United States",
        "12/12/2012",
        32.4
    ],
    [
        "United States",
        "12/12/2012",
        15.52
    ],
    [
        "United States",
        "12/12/2012",
        24.448
    ],
    [
        "United States",
        "12/12/2012",
        22.368
    ],
    [
        "United States",
        "12/12/2012",
        7.86
    ],
    [
        "United States",
        "12/12/2012",
        8.22
    ],
    [
        "United States",
        "12/12/2012",
        2.21
    ],
    [
        "United States",
        "12/13/2012",
        494.376
    ],
    [
        "United States",
        "12/13/2012",
        248.85
    ],
    [
        "United States",
        "12/13/2012",
        134.48
    ],
    [
        "United States",
        "12/13/2012",
        36.24
    ],
    [
        "United States",
        "12/13/2012",
        29.2
    ],
    [
        "United States",
        "12/13/2012",
        37.88
    ],
    [
        "United States",
        "12/13/2012",
        19.44
    ],
    [
        "United States",
        "12/13/2012",
        9.96
    ],
    [
        "United States",
        "12/13/2012",
        12.96
    ],
    [
        "United States",
        "12/14/2012",
        319.968
    ],
    [
        "United States",
        "12/14/2012",
        273.568
    ],
    [
        "United States",
        "12/14/2012",
        56.3
    ],
    [
        "United States",
        "12/14/2012",
        55.264
    ],
    [
        "United States",
        "12/14/2012",
        50
    ],
    [
        "United States",
        "12/14/2012",
        29.22
    ],
    [
        "United States",
        "12/14/2012",
        34.248
    ],
    [
        "United States",
        "12/14/2012",
        6.48
    ],
    [
        "United States",
        "12/14/2012",
        15.24
    ],
    [
        "United States",
        "12/14/2012",
        8.096
    ],
    [
        "United States",
        "12/14/2012",
        6.16
    ],
    [
        "United States",
        "12/14/2012",
        3.76
    ],
    [
        "United States",
        "12/15/2012",
        2025.36
    ],
    [
        "United States",
        "12/15/2012",
        1799.994
    ],
    [
        "United States",
        "12/15/2012",
        899.91
    ],
    [
        "United States",
        "12/15/2012",
        262.864
    ],
    [
        "United States",
        "12/15/2012",
        246.168
    ],
    [
        "United States",
        "12/15/2012",
        103.92
    ],
    [
        "United States",
        "12/15/2012",
        51.312
    ],
    [
        "United States",
        "12/15/2012",
        101.988
    ],
    [
        "United States",
        "12/15/2012",
        3.28
    ],
    [
        "United States",
        "12/16/2012",
        4.98
    ],
    [
        "United States",
        "12/17/2012",
        546.66
    ],
    [
        "United States",
        "12/17/2012",
        204.85
    ],
    [
        "United States",
        "12/17/2012",
        302.94
    ],
    [
        "United States",
        "12/17/2012",
        212.13
    ],
    [
        "United States",
        "12/17/2012",
        142.36
    ],
    [
        "United States",
        "12/17/2012",
        135.984
    ],
    [
        "United States",
        "12/17/2012",
        92.96
    ],
    [
        "United States",
        "12/17/2012",
        180.016
    ],
    [
        "United States",
        "12/17/2012",
        29.52
    ],
    [
        "United States",
        "12/17/2012",
        16.4
    ],
    [
        "United States",
        "12/17/2012",
        41.552
    ],
    [
        "United States",
        "12/17/2012",
        13.12
    ],
    [
        "United States",
        "12/18/2012",
        646.776
    ],
    [
        "United States",
        "12/18/2012",
        166.24
    ],
    [
        "United States",
        "12/18/2012",
        55.936
    ],
    [
        "United States",
        "12/18/2012",
        20.736
    ],
    [
        "United States",
        "12/18/2012",
        20.32
    ],
    [
        "United States",
        "12/18/2012",
        18.432
    ],
    [
        "United States",
        "12/18/2012",
        6.848
    ],
    [
        "United States",
        "12/19/2012",
        2249.91
    ],
    [
        "United States",
        "12/19/2012",
        1053.164
    ],
    [
        "United States",
        "12/19/2012",
        434.352
    ],
    [
        "United States",
        "12/19/2012",
        1265.85
    ],
    [
        "United States",
        "12/19/2012",
        675.96
    ],
    [
        "United States",
        "12/19/2012",
        158.376
    ],
    [
        "United States",
        "12/19/2012",
        116.28
    ],
    [
        "United States",
        "12/19/2012",
        88.832
    ],
    [
        "United States",
        "12/19/2012",
        25.488
    ],
    [
        "United States",
        "12/19/2012",
        29.9
    ],
    [
        "United States",
        "12/19/2012",
        6.912
    ],
    [
        "United States",
        "12/19/2012",
        5.04
    ],
    [
        "United States",
        "12/19/2012",
        7.04
    ],
    [
        "United States",
        "12/19/2012",
        3.552
    ],
    [
        "United States",
        "12/20/2012",
        359.058
    ],
    [
        "United States",
        "12/20/2012",
        100.8
    ],
    [
        "United States",
        "12/20/2012",
        255.968
    ],
    [
        "United States",
        "12/20/2012",
        159.984
    ],
    [
        "United States",
        "12/20/2012",
        55.48
    ],
    [
        "United States",
        "12/20/2012",
        36.27
    ],
    [
        "United States",
        "12/20/2012",
        88.8
    ],
    [
        "United States",
        "12/20/2012",
        17.12
    ],
    [
        "United States",
        "12/20/2012",
        11.696
    ],
    [
        "United States",
        "12/20/2012",
        14.368
    ],
    [
        "United States",
        "12/20/2012",
        7.92
    ],
    [
        "United States",
        "12/21/2012",
        1618.37
    ],
    [
        "United States",
        "12/21/2012",
        600.53
    ],
    [
        "United States",
        "12/21/2012",
        637.44
    ],
    [
        "United States",
        "12/21/2012",
        99.6
    ],
    [
        "United States",
        "12/21/2012",
        47.976
    ],
    [
        "United States",
        "12/21/2012",
        60.984
    ],
    [
        "United States",
        "12/21/2012",
        51.756
    ],
    [
        "United States",
        "12/21/2012",
        50.88
    ],
    [
        "United States",
        "12/21/2012",
        59.904
    ],
    [
        "United States",
        "12/21/2012",
        27.312
    ],
    [
        "United States",
        "12/21/2012",
        3.008
    ],
    [
        "United States",
        "12/22/2012",
        422.625
    ],
    [
        "United States",
        "12/22/2012",
        33.568
    ],
    [
        "United States",
        "12/22/2012",
        17.12
    ],
    [
        "United States",
        "12/23/2012",
        194.32
    ],
    [
        "United States",
        "12/24/2012",
        4899.93
    ],
    [
        "United States",
        "12/24/2012",
        479.988
    ],
    [
        "United States",
        "12/24/2012",
        590.058
    ],
    [
        "United States",
        "12/24/2012",
        883.84
    ],
    [
        "United States",
        "12/24/2012",
        132.79
    ],
    [
        "United States",
        "12/24/2012",
        111.984
    ],
    [
        "United States",
        "12/24/2012",
        106.232
    ],
    [
        "United States",
        "12/24/2012",
        72.704
    ],
    [
        "United States",
        "12/24/2012",
        21.56
    ],
    [
        "United States",
        "12/24/2012",
        22.704
    ],
    [
        "United States",
        "12/24/2012",
        12.96
    ],
    [
        "United States",
        "12/24/2012",
        27.168
    ],
    [
        "United States",
        "12/24/2012",
        19.936
    ],
    [
        "United States",
        "12/24/2012",
        14.04
    ],
    [
        "United States",
        "12/24/2012",
        19.776
    ],
    [
        "United States",
        "12/24/2012",
        7.712
    ],
    [
        "United States",
        "12/24/2012",
        9.68
    ],
    [
        "United States",
        "12/24/2012",
        5.584
    ],
    [
        "United States",
        "12/24/2012",
        45.92
    ],
    [
        "United States",
        "12/25/2012",
        1199.96
    ],
    [
        "United States",
        "12/25/2012",
        547.136
    ],
    [
        "United States",
        "12/25/2012",
        275.88
    ],
    [
        "United States",
        "12/25/2012",
        843.9
    ],
    [
        "United States",
        "12/25/2012",
        414.96
    ],
    [
        "United States",
        "12/25/2012",
        157.9
    ],
    [
        "United States",
        "12/25/2012",
        449.568
    ],
    [
        "United States",
        "12/25/2012",
        160.98
    ],
    [
        "United States",
        "12/25/2012",
        73.98
    ],
    [
        "United States",
        "12/25/2012",
        12.6
    ],
    [
        "United States",
        "12/25/2012",
        17.34
    ],
    [
        "United States",
        "12/25/2012",
        9.216
    ],
    [
        "United States",
        "12/25/2012",
        10.368
    ],
    [
        "United States",
        "12/25/2012",
        3.28
    ],
    [
        "United States",
        "12/25/2012",
        9.96
    ],
    [
        "United States",
        "12/25/2012",
        17.94
    ],
    [
        "United States",
        "12/26/2012",
        212.64
    ],
    [
        "United States",
        "12/26/2012",
        275.058
    ],
    [
        "United States",
        "12/26/2012",
        51.588
    ],
    [
        "United States",
        "12/26/2012",
        22.2
    ],
    [
        "United States",
        "12/27/2012",
        1548.99
    ],
    [
        "United States",
        "12/27/2012",
        668.16
    ],
    [
        "United States",
        "12/27/2012",
        239.9
    ],
    [
        "United States",
        "12/27/2012",
        371.168
    ],
    [
        "United States",
        "12/27/2012",
        195.64
    ],
    [
        "United States",
        "12/27/2012",
        323.1
    ],
    [
        "United States",
        "12/27/2012",
        355.96
    ],
    [
        "United States",
        "12/27/2012",
        212.058
    ],
    [
        "United States",
        "12/27/2012",
        106.96
    ],
    [
        "United States",
        "12/27/2012",
        532.3992
    ],
    [
        "United States",
        "12/27/2012",
        105.42
    ],
    [
        "United States",
        "12/27/2012",
        131.104
    ],
    [
        "United States",
        "12/27/2012",
        72.744
    ],
    [
        "United States",
        "12/27/2012",
        21.56
    ],
    [
        "United States",
        "12/27/2012",
        113.328
    ],
    [
        "United States",
        "12/27/2012",
        53.352
    ],
    [
        "United States",
        "12/27/2012",
        28.9
    ],
    [
        "United States",
        "12/27/2012",
        19.872
    ],
    [
        "United States",
        "12/27/2012",
        7.92
    ],
    [
        "United States",
        "12/27/2012",
        22.512
    ],
    [
        "United States",
        "12/27/2012",
        12.672
    ],
    [
        "United States",
        "12/27/2012",
        4.728
    ],
    [
        "United States",
        "12/28/2012",
        54.384
    ],
    [
        "United States",
        "12/28/2012",
        24.816
    ],
    [
        "United States",
        "12/29/2012",
        6.36
    ],
    [
        "United States",
        "12/30/2012",
        2548.56
    ],
    [
        "United States",
        "12/30/2012",
        287.88
    ],
    [
        "United States",
        "12/30/2012",
        271.44
    ],
    [
        "United States",
        "12/30/2012",
        68.52
    ],
    [
        "United States",
        "12/30/2012",
        74.94
    ],
    [
        "United States",
        "12/31/2012",
        487.984
    ],
    [
        "United States",
        "12/31/2012",
        364.8
    ],
    [
        "United States",
        "12/31/2012",
        152.688
    ],
    [
        "United States",
        "12/31/2012",
        76.3
    ],
    [
        "United States",
        "12/31/2012",
        94.74
    ],
    [
        "United States",
        "12/31/2012",
        116.4
    ],
    [
        "United States",
        "12/31/2012",
        60.64
    ],
    [
        "United States",
        "12/31/2012",
        14.76
    ],
    [
        "United States",
        "12/31/2012",
        5.888
    ],
    [
        "United States",
        "12/31/2012",
        3.656
    ],
    [
        "United States",
        "12/31/2012",
        3.488
    ],
    [
        "United States",
        "1/2/2013",
        231.98
    ],
    [
        "United States",
        "1/2/2013",
        173.94
    ],
    [
        "United States",
        "1/3/2013",
        1592.85
    ],
    [
        "United States",
        "1/3/2013",
        180.96
    ],
    [
        "United States",
        "1/3/2013",
        165.6
    ],
    [
        "United States",
        "1/3/2013",
        114.46
    ],
    [
        "United States",
        "1/3/2013",
        11.88
    ],
    [
        "United States",
        "1/3/2013",
        30.08
    ],
    [
        "United States",
        "1/4/2013",
        959.968
    ],
    [
        "United States",
        "1/4/2013",
        104.58
    ],
    [
        "United States",
        "1/4/2013",
        4.672
    ],
    [
        "United States",
        "1/5/2013",
        191.472
    ],
    [
        "United States",
        "1/5/2013",
        59.184
    ],
    [
        "United States",
        "1/5/2013",
        5.248
    ],
    [
        "United States",
        "1/7/2013",
        34.58
    ],
    [
        "United States",
        "1/7/2013",
        23.076
    ],
    [
        "United States",
        "1/7/2013",
        25.92
    ],
    [
        "United States",
        "1/8/2013",
        1565.88
    ],
    [
        "United States",
        "1/8/2013",
        106.05
    ],
    [
        "United States",
        "1/8/2013",
        47.616
    ],
    [
        "United States",
        "1/8/2013",
        30.828
    ],
    [
        "United States",
        "1/8/2013",
        108.784
    ],
    [
        "United States",
        "1/9/2013",
        377.928
    ],
    [
        "United States",
        "1/9/2013",
        349.95
    ],
    [
        "United States",
        "1/9/2013",
        15.168
    ],
    [
        "United States",
        "1/10/2013",
        69.98
    ],
    [
        "United States",
        "1/10/2013",
        79.92
    ],
    [
        "United States",
        "1/10/2013",
        24.85
    ],
    [
        "United States",
        "1/11/2013",
        63.312
    ],
    [
        "United States",
        "1/11/2013",
        54.992
    ],
    [
        "United States",
        "1/11/2013",
        15.552
    ],
    [
        "United States",
        "1/11/2013",
        15.588
    ],
    [
        "United States",
        "1/14/2013",
        315.776
    ],
    [
        "United States",
        "1/14/2013",
        89.568
    ],
    [
        "United States",
        "1/15/2013",
        181.797
    ],
    [
        "United States",
        "1/15/2013",
        254.97
    ],
    [
        "United States",
        "1/15/2013",
        81.98
    ],
    [
        "United States",
        "1/15/2013",
        52.34
    ],
    [
        "United States",
        "1/15/2013",
        60.12
    ],
    [
        "United States",
        "1/15/2013",
        49.536
    ],
    [
        "United States",
        "1/15/2013",
        16.52
    ],
    [
        "United States",
        "1/15/2013",
        4.66
    ],
    [
        "United States",
        "1/16/2013",
        90.57
    ],
    [
        "United States",
        "1/16/2013",
        11.648
    ],
    [
        "United States",
        "1/17/2013",
        316
    ],
    [
        "United States",
        "1/17/2013",
        371.97
    ],
    [
        "United States",
        "1/17/2013",
        322.59
    ],
    [
        "United States",
        "1/17/2013",
        29.99
    ],
    [
        "United States",
        "1/21/2013",
        1013.488
    ],
    [
        "United States",
        "1/21/2013",
        153.568
    ],
    [
        "United States",
        "1/22/2013",
        451.136
    ],
    [
        "United States",
        "1/22/2013",
        110.376
    ],
    [
        "United States",
        "1/22/2013",
        109.9
    ],
    [
        "United States",
        "1/22/2013",
        55.176
    ],
    [
        "United States",
        "1/22/2013",
        64.864
    ],
    [
        "United States",
        "1/22/2013",
        44.4
    ],
    [
        "United States",
        "1/22/2013",
        26.336
    ],
    [
        "United States",
        "1/22/2013",
        14.272
    ],
    [
        "United States",
        "1/22/2013",
        12.96
    ],
    [
        "United States",
        "1/22/2013",
        7.56
    ],
    [
        "United States",
        "1/22/2013",
        20.65
    ],
    [
        "United States",
        "1/23/2013",
        1564.29
    ],
    [
        "United States",
        "1/23/2013",
        59.99
    ],
    [
        "United States",
        "1/23/2013",
        99.98
    ],
    [
        "United States",
        "1/23/2013",
        8.04
    ],
    [
        "United States",
        "1/24/2013",
        31.36
    ],
    [
        "United States",
        "1/25/2013",
        313.722
    ],
    [
        "United States",
        "1/25/2013",
        428.68
    ],
    [
        "United States",
        "1/25/2013",
        45.98
    ],
    [
        "United States",
        "1/25/2013",
        18
    ],
    [
        "United States",
        "1/25/2013",
        43.12
    ],
    [
        "United States",
        "1/25/2013",
        9.21
    ],
    [
        "United States",
        "1/28/2013",
        39.68
    ],
    [
        "United States",
        "1/30/2013",
        1439.968
    ],
    [
        "United States",
        "1/30/2013",
        435.168
    ],
    [
        "United States",
        "1/30/2013",
        626.1
    ],
    [
        "United States",
        "1/30/2013",
        305.01
    ],
    [
        "United States",
        "1/30/2013",
        48.58
    ],
    [
        "United States",
        "1/30/2013",
        156.512
    ],
    [
        "United States",
        "1/30/2013",
        50.784
    ],
    [
        "United States",
        "1/30/2013",
        26.01
    ],
    [
        "United States",
        "1/30/2013",
        17.456
    ],
    [
        "United States",
        "1/30/2013",
        1.728
    ],
    [
        "United States",
        "1/31/2013",
        1270.99
    ],
    [
        "United States",
        "1/31/2013",
        125.36
    ],
    [
        "United States",
        "1/31/2013",
        109.592
    ],
    [
        "United States",
        "1/31/2013",
        56.7
    ],
    [
        "United States",
        "1/31/2013",
        15.552
    ],
    [
        "United States",
        "1/31/2013",
        23.36
    ],
    [
        "United States",
        "2/1/2013",
        105.52
    ],
    [
        "United States",
        "2/1/2013",
        56.45
    ],
    [
        "United States",
        "2/2/2013",
        8749.95
    ],
    [
        "United States",
        "2/2/2013",
        73.784
    ],
    [
        "United States",
        "2/2/2013",
        36.4
    ],
    [
        "United States",
        "2/2/2013",
        117.96
    ],
    [
        "United States",
        "2/2/2013",
        18.69
    ],
    [
        "United States",
        "2/3/2013",
        866.4
    ],
    [
        "United States",
        "2/4/2013",
        93.02
    ],
    [
        "United States",
        "2/4/2013",
        90.48
    ],
    [
        "United States",
        "2/4/2013",
        14.368
    ],
    [
        "United States",
        "2/5/2013",
        484.83
    ],
    [
        "United States",
        "2/5/2013",
        342.37
    ],
    [
        "United States",
        "2/5/2013",
        167.96
    ],
    [
        "United States",
        "2/5/2013",
        239.98
    ],
    [
        "United States",
        "2/5/2013",
        348.84
    ],
    [
        "United States",
        "2/5/2013",
        557.728
    ],
    [
        "United States",
        "2/5/2013",
        154.44
    ],
    [
        "United States",
        "2/5/2013",
        122.97
    ],
    [
        "United States",
        "2/5/2013",
        104.85
    ],
    [
        "United States",
        "2/5/2013",
        80.98
    ],
    [
        "United States",
        "2/5/2013",
        159.968
    ],
    [
        "United States",
        "2/5/2013",
        186.54
    ],
    [
        "United States",
        "2/5/2013",
        9.45
    ],
    [
        "United States",
        "2/5/2013",
        18.84
    ],
    [
        "United States",
        "2/5/2013",
        14.73
    ],
    [
        "United States",
        "2/6/2013",
        132.224
    ],
    [
        "United States",
        "2/7/2013",
        623.96
    ],
    [
        "United States",
        "2/7/2013",
        100
    ],
    [
        "United States",
        "2/7/2013",
        30.352
    ],
    [
        "United States",
        "2/7/2013",
        7.83
    ],
    [
        "United States",
        "2/8/2013",
        241.5
    ],
    [
        "United States",
        "2/8/2013",
        1127.976
    ],
    [
        "United States",
        "2/9/2013",
        89.97
    ],
    [
        "United States",
        "2/9/2013",
        31.86
    ],
    [
        "United States",
        "2/11/2013",
        69.93
    ],
    [
        "United States",
        "2/12/2013",
        1350.12
    ],
    [
        "United States",
        "2/12/2013",
        15.92
    ],
    [
        "United States",
        "2/13/2013",
        146.82
    ],
    [
        "United States",
        "2/14/2013",
        550.431
    ],
    [
        "United States",
        "2/14/2013",
        264.18
    ],
    [
        "United States",
        "2/14/2013",
        10.56
    ],
    [
        "United States",
        "2/14/2013",
        7.98
    ],
    [
        "United States",
        "2/14/2013",
        4.77
    ],
    [
        "United States",
        "2/15/2013",
        398.352
    ],
    [
        "United States",
        "2/15/2013",
        8.72
    ],
    [
        "United States",
        "2/16/2013",
        227.96
    ],
    [
        "United States",
        "2/16/2013",
        326.646
    ],
    [
        "United States",
        "2/16/2013",
        318.08
    ],
    [
        "United States",
        "2/16/2013",
        89.97
    ],
    [
        "United States",
        "2/16/2013",
        92.064
    ],
    [
        "United States",
        "2/16/2013",
        62.958
    ],
    [
        "United States",
        "2/16/2013",
        5.184
    ],
    [
        "United States",
        "2/16/2013",
        5.8
    ],
    [
        "United States",
        "2/16/2013",
        6.976
    ],
    [
        "United States",
        "2/19/2013",
        242.94
    ],
    [
        "United States",
        "2/19/2013",
        70.88
    ],
    [
        "United States",
        "2/19/2013",
        44.46
    ],
    [
        "United States",
        "2/19/2013",
        25.71
    ],
    [
        "United States",
        "2/19/2013",
        8.67
    ],
    [
        "United States",
        "2/20/2013",
        16.496
    ],
    [
        "United States",
        "2/21/2013",
        432.456
    ],
    [
        "United States",
        "2/21/2013",
        449.15
    ],
    [
        "United States",
        "2/21/2013",
        135.8
    ],
    [
        "United States",
        "2/21/2013",
        296.37
    ],
    [
        "United States",
        "2/21/2013",
        68.95
    ],
    [
        "United States",
        "2/21/2013",
        31.248
    ],
    [
        "United States",
        "2/21/2013",
        39.98
    ],
    [
        "United States",
        "2/21/2013",
        34.86
    ],
    [
        "United States",
        "2/21/2013",
        18.56
    ],
    [
        "United States",
        "2/21/2013",
        12.99
    ],
    [
        "United States",
        "2/21/2013",
        3.762
    ],
    [
        "United States",
        "2/22/2013",
        490.32
    ],
    [
        "United States",
        "2/22/2013",
        445.96
    ],
    [
        "United States",
        "2/22/2013",
        36.24
    ],
    [
        "United States",
        "2/22/2013",
        10.65
    ],
    [
        "United States",
        "2/23/2013",
        57.576
    ],
    [
        "United States",
        "2/25/2013",
        46.72
    ],
    [
        "United States",
        "2/27/2013",
        170.88
    ],
    [
        "United States",
        "2/27/2013",
        56.82
    ],
    [
        "United States",
        "2/27/2013",
        16.192
    ],
    [
        "United States",
        "2/28/2013",
        36.48
    ],
    [
        "United States",
        "3/1/2013",
        111.104
    ],
    [
        "United States",
        "3/2/2013",
        4899.93
    ],
    [
        "United States",
        "3/2/2013",
        836.592
    ],
    [
        "United States",
        "3/2/2013",
        362.92
    ],
    [
        "United States",
        "3/2/2013",
        159.984
    ],
    [
        "United States",
        "3/2/2013",
        26.38
    ],
    [
        "United States",
        "3/4/2013",
        3930.072
    ],
    [
        "United States",
        "3/4/2013",
        431.976
    ],
    [
        "United States",
        "3/4/2013",
        637.896
    ],
    [
        "United States",
        "3/4/2013",
        479.95
    ],
    [
        "United States",
        "3/4/2013",
        447.86
    ],
    [
        "United States",
        "3/4/2013",
        287.91
    ],
    [
        "United States",
        "3/4/2013",
        166.44
    ],
    [
        "United States",
        "3/4/2013",
        563.43
    ],
    [
        "United States",
        "3/4/2013",
        42.784
    ],
    [
        "United States",
        "3/4/2013",
        134.85
    ],
    [
        "United States",
        "3/4/2013",
        35.28
    ],
    [
        "United States",
        "3/4/2013",
        41.72
    ],
    [
        "United States",
        "3/4/2013",
        25.35
    ],
    [
        "United States",
        "3/4/2013",
        36.6
    ],
    [
        "United States",
        "3/4/2013",
        2.304
    ],
    [
        "United States",
        "3/5/2013",
        128.4
    ],
    [
        "United States",
        "3/5/2013",
        159.98
    ],
    [
        "United States",
        "3/5/2013",
        10.08
    ],
    [
        "United States",
        "3/5/2013",
        16.99
    ],
    [
        "United States",
        "3/6/2013",
        149.352
    ],
    [
        "United States",
        "3/6/2013",
        12.992
    ],
    [
        "United States",
        "3/7/2013",
        431.94
    ],
    [
        "United States",
        "3/7/2013",
        145.98
    ],
    [
        "United States",
        "3/7/2013",
        68.238
    ],
    [
        "United States",
        "3/7/2013",
        159.04
    ],
    [
        "United States",
        "3/7/2013",
        1.728
    ],
    [
        "United States",
        "3/7/2013",
        2.334
    ],
    [
        "United States",
        "3/7/2013",
        2.043
    ],
    [
        "United States",
        "3/8/2013",
        21.072
    ],
    [
        "United States",
        "3/9/2013",
        1363.96
    ],
    [
        "United States",
        "3/9/2013",
        113.6
    ],
    [
        "United States",
        "3/9/2013",
        207.144
    ],
    [
        "United States",
        "3/9/2013",
        108.576
    ],
    [
        "United States",
        "3/9/2013",
        69.456
    ],
    [
        "United States",
        "3/9/2013",
        146.352
    ],
    [
        "United States",
        "3/9/2013",
        102.36
    ],
    [
        "United States",
        "3/9/2013",
        13.9
    ],
    [
        "United States",
        "3/9/2013",
        12.96
    ],
    [
        "United States",
        "3/9/2013",
        9.702
    ],
    [
        "United States",
        "3/9/2013",
        27.96
    ],
    [
        "United States",
        "3/9/2013",
        8.856
    ],
    [
        "United States",
        "3/9/2013",
        5.984
    ],
    [
        "United States",
        "3/10/2013",
        199.75
    ],
    [
        "United States",
        "3/10/2013",
        51.8
    ],
    [
        "United States",
        "3/10/2013",
        354.9
    ],
    [
        "United States",
        "3/10/2013",
        17.94
    ],
    [
        "United States",
        "3/10/2013",
        11.21
    ],
    [
        "United States",
        "3/11/2013",
        4158.912
    ],
    [
        "United States",
        "3/11/2013",
        3357.6
    ],
    [
        "United States",
        "3/11/2013",
        176.784
    ],
    [
        "United States",
        "3/11/2013",
        104.696
    ],
    [
        "United States",
        "3/11/2013",
        39.992
    ],
    [
        "United States",
        "3/11/2013",
        14.9
    ],
    [
        "United States",
        "3/11/2013",
        26.85
    ],
    [
        "United States",
        "3/12/2013",
        244.006
    ],
    [
        "United States",
        "3/12/2013",
        481.32
    ],
    [
        "United States",
        "3/12/2013",
        76.92
    ],
    [
        "United States",
        "3/12/2013",
        45.98
    ],
    [
        "United States",
        "3/12/2013",
        30.336
    ],
    [
        "United States",
        "3/12/2013",
        17.46
    ],
    [
        "United States",
        "3/13/2013",
        770.352
    ],
    [
        "United States",
        "3/13/2013",
        676.55
    ],
    [
        "United States",
        "3/13/2013",
        154.9
    ],
    [
        "United States",
        "3/13/2013",
        29.34
    ],
    [
        "United States",
        "3/13/2013",
        30.56
    ],
    [
        "United States",
        "3/13/2013",
        12.96
    ],
    [
        "United States",
        "3/13/2013",
        19.98
    ],
    [
        "United States",
        "3/14/2013",
        552.56
    ],
    [
        "United States",
        "3/14/2013",
        449.1
    ],
    [
        "United States",
        "3/14/2013",
        386.68
    ],
    [
        "United States",
        "3/14/2013",
        379.96
    ],
    [
        "United States",
        "3/14/2013",
        157.92
    ],
    [
        "United States",
        "3/14/2013",
        539.91
    ],
    [
        "United States",
        "3/14/2013",
        4912.59
    ],
    [
        "United States",
        "3/14/2013",
        203.184
    ],
    [
        "United States",
        "3/14/2013",
        557.585
    ],
    [
        "United States",
        "3/14/2013",
        126.08
    ],
    [
        "United States",
        "3/14/2013",
        160.32
    ],
    [
        "United States",
        "3/14/2013",
        51.897
    ],
    [
        "United States",
        "3/14/2013",
        23.16
    ],
    [
        "United States",
        "3/14/2013",
        41.24
    ],
    [
        "United States",
        "3/14/2013",
        51.184
    ],
    [
        "United States",
        "3/14/2013",
        28.28
    ],
    [
        "United States",
        "3/14/2013",
        70.08
    ],
    [
        "United States",
        "3/14/2013",
        127.88
    ],
    [
        "United States",
        "3/14/2013",
        46
    ],
    [
        "United States",
        "3/14/2013",
        1.272
    ],
    [
        "United States",
        "3/15/2013",
        196.784
    ],
    [
        "United States",
        "3/15/2013",
        145.544
    ],
    [
        "United States",
        "3/15/2013",
        241.332
    ],
    [
        "United States",
        "3/15/2013",
        41.904
    ],
    [
        "United States",
        "3/15/2013",
        21.88
    ],
    [
        "United States",
        "3/15/2013",
        5.184
    ],
    [
        "United States",
        "3/15/2013",
        16.74
    ],
    [
        "United States",
        "3/16/2013",
        1352.032
    ],
    [
        "United States",
        "3/16/2013",
        528.43
    ],
    [
        "United States",
        "3/16/2013",
        319.76
    ],
    [
        "United States",
        "3/16/2013",
        83.976
    ],
    [
        "United States",
        "3/16/2013",
        45.68
    ],
    [
        "United States",
        "3/16/2013",
        22.386
    ],
    [
        "United States",
        "3/16/2013",
        4.544
    ],
    [
        "United States",
        "3/18/2013",
        901.95
    ],
    [
        "United States",
        "3/18/2013",
        971.5
    ],
    [
        "United States",
        "3/18/2013",
        199.9
    ],
    [
        "United States",
        "3/18/2013",
        129.98
    ],
    [
        "United States",
        "3/18/2013",
        84.784
    ],
    [
        "United States",
        "3/18/2013",
        32.54
    ],
    [
        "United States",
        "3/18/2013",
        39.68
    ],
    [
        "United States",
        "3/19/2013",
        871.8
    ],
    [
        "United States",
        "3/19/2013",
        189.882
    ],
    [
        "United States",
        "3/20/2013",
        72.294
    ],
    [
        "United States",
        "3/20/2013",
        20.32
    ],
    [
        "United States",
        "3/20/2013",
        31.086
    ],
    [
        "United States",
        "3/20/2013",
        14.98
    ],
    [
        "United States",
        "3/21/2013",
        697.16
    ],
    [
        "United States",
        "3/21/2013",
        84.784
    ],
    [
        "United States",
        "3/21/2013",
        86.45
    ],
    [
        "United States",
        "3/21/2013",
        20.736
    ],
    [
        "United States",
        "3/21/2013",
        11.992
    ],
    [
        "United States",
        "3/21/2013",
        16.821
    ],
    [
        "United States",
        "3/21/2013",
        10.368
    ],
    [
        "United States",
        "3/22/2013",
        528.43
    ],
    [
        "United States",
        "3/22/2013",
        99.372
    ],
    [
        "United States",
        "3/22/2013",
        13.392
    ],
    [
        "United States",
        "3/22/2013",
        3.168
    ],
    [
        "United States",
        "3/22/2013",
        1.344
    ],
    [
        "United States",
        "3/23/2013",
        167.888
    ],
    [
        "United States",
        "3/23/2013",
        58.58
    ],
    [
        "United States",
        "3/25/2013",
        403.168
    ],
    [
        "United States",
        "3/25/2013",
        301.47
    ],
    [
        "United States",
        "3/25/2013",
        22.48
    ],
    [
        "United States",
        "3/25/2013",
        18.656
    ],
    [
        "United States",
        "3/26/2013",
        1287.45
    ],
    [
        "United States",
        "3/26/2013",
        59.52
    ],
    [
        "United States",
        "3/27/2013",
        459.95
    ],
    [
        "United States",
        "3/27/2013",
        119.976
    ],
    [
        "United States",
        "3/27/2013",
        67.64
    ],
    [
        "United States",
        "3/27/2013",
        17.64
    ],
    [
        "United States",
        "3/27/2013",
        17.04
    ],
    [
        "United States",
        "3/28/2013",
        39.92
    ],
    [
        "United States",
        "3/28/2013",
        32.54
    ],
    [
        "United States",
        "3/28/2013",
        20.24
    ],
    [
        "United States",
        "3/29/2013",
        87.92
    ],
    [
        "United States",
        "3/29/2013",
        31.4
    ],
    [
        "United States",
        "3/29/2013",
        5.98
    ],
    [
        "United States",
        "3/30/2013",
        812.736
    ],
    [
        "United States",
        "3/30/2013",
        414
    ],
    [
        "United States",
        "3/30/2013",
        844.116
    ],
    [
        "United States",
        "3/30/2013",
        299.975
    ],
    [
        "United States",
        "3/30/2013",
        158.376
    ],
    [
        "United States",
        "3/30/2013",
        41.328
    ],
    [
        "United States",
        "3/30/2013",
        45.528
    ],
    [
        "United States",
        "3/30/2013",
        29.8
    ],
    [
        "United States",
        "3/30/2013",
        13.48
    ],
    [
        "United States",
        "3/31/2013",
        11.34
    ],
    [
        "United States",
        "4/1/2013",
        280.782
    ],
    [
        "United States",
        "4/1/2013",
        327.996
    ],
    [
        "United States",
        "4/1/2013",
        31.984
    ],
    [
        "United States",
        "4/2/2013",
        1317.492
    ],
    [
        "United States",
        "4/2/2013",
        263.88
    ],
    [
        "United States",
        "4/2/2013",
        161.94
    ],
    [
        "United States",
        "4/2/2013",
        59.52
    ],
    [
        "United States",
        "4/2/2013",
        88.04
    ],
    [
        "United States",
        "4/2/2013",
        35.12
    ],
    [
        "United States",
        "4/2/2013",
        31.56
    ],
    [
        "United States",
        "4/2/2013",
        20.7
    ],
    [
        "United States",
        "4/2/2013",
        30.48
    ],
    [
        "United States",
        "4/2/2013",
        63.84
    ],
    [
        "United States",
        "4/2/2013",
        30.144
    ],
    [
        "United States",
        "4/2/2013",
        10.95
    ],
    [
        "United States",
        "4/2/2013",
        9.84
    ],
    [
        "United States",
        "4/2/2013",
        14.352
    ],
    [
        "United States",
        "4/2/2013",
        12.99
    ],
    [
        "United States",
        "4/2/2013",
        7.04
    ],
    [
        "United States",
        "4/2/2013",
        3.592
    ],
    [
        "United States",
        "4/3/2013",
        1454.9
    ],
    [
        "United States",
        "4/4/2013",
        259.96
    ],
    [
        "United States",
        "4/4/2013",
        71.12
    ],
    [
        "United States",
        "4/4/2013",
        99.846
    ],
    [
        "United States",
        "4/4/2013",
        10.272
    ],
    [
        "United States",
        "4/5/2013",
        588.784
    ],
    [
        "United States",
        "4/5/2013",
        149.97
    ],
    [
        "United States",
        "4/5/2013",
        89.97
    ],
    [
        "United States",
        "4/5/2013",
        82.64
    ],
    [
        "United States",
        "4/5/2013",
        27.81
    ],
    [
        "United States",
        "4/5/2013",
        31.02
    ],
    [
        "United States",
        "4/6/2013",
        769.184
    ],
    [
        "United States",
        "4/6/2013",
        158.368
    ],
    [
        "United States",
        "4/6/2013",
        118.782
    ],
    [
        "United States",
        "4/7/2013",
        1294.75
    ],
    [
        "United States",
        "4/8/2013",
        1199.976
    ],
    [
        "United States",
        "4/8/2013",
        658.746
    ],
    [
        "United States",
        "4/8/2013",
        37.94
    ],
    [
        "United States",
        "4/8/2013",
        36.744
    ],
    [
        "United States",
        "4/8/2013",
        33.528
    ],
    [
        "United States",
        "4/8/2013",
        3.64
    ],
    [
        "United States",
        "4/9/2013",
        1088.792
    ],
    [
        "United States",
        "4/9/2013",
        354.9
    ],
    [
        "United States",
        "4/9/2013",
        431.928
    ],
    [
        "United States",
        "4/9/2013",
        159.92
    ],
    [
        "United States",
        "4/9/2013",
        388.704
    ],
    [
        "United States",
        "4/9/2013",
        95.984
    ],
    [
        "United States",
        "4/9/2013",
        121.104
    ],
    [
        "United States",
        "4/9/2013",
        64.96
    ],
    [
        "United States",
        "4/9/2013",
        25.92
    ],
    [
        "United States",
        "4/9/2013",
        30
    ],
    [
        "United States",
        "4/9/2013",
        20.04
    ],
    [
        "United States",
        "4/9/2013",
        34.4
    ],
    [
        "United States",
        "4/9/2013",
        24.7
    ],
    [
        "United States",
        "4/9/2013",
        12.96
    ],
    [
        "United States",
        "4/9/2013",
        17.04
    ],
    [
        "United States",
        "4/9/2013",
        17.92
    ],
    [
        "United States",
        "4/9/2013",
        8.26
    ],
    [
        "United States",
        "4/9/2013",
        8.872
    ],
    [
        "United States",
        "4/10/2013",
        556.665
    ],
    [
        "United States",
        "4/10/2013",
        517.9
    ],
    [
        "United States",
        "4/10/2013",
        35.352
    ],
    [
        "United States",
        "4/10/2013",
        5.28
    ],
    [
        "United States",
        "4/11/2013",
        579.51
    ],
    [
        "United States",
        "4/11/2013",
        150.66
    ],
    [
        "United States",
        "4/11/2013",
        113.76
    ],
    [
        "United States",
        "4/11/2013",
        8.904
    ],
    [
        "United States",
        "4/11/2013",
        48.032
    ],
    [
        "United States",
        "4/11/2013",
        12.96
    ],
    [
        "United States",
        "4/11/2013",
        23.2
    ],
    [
        "United States",
        "4/11/2013",
        13.568
    ],
    [
        "United States",
        "4/13/2013",
        638.288
    ],
    [
        "United States",
        "4/13/2013",
        343.92
    ],
    [
        "United States",
        "4/13/2013",
        129.552
    ],
    [
        "United States",
        "4/13/2013",
        36.624
    ],
    [
        "United States",
        "4/13/2013",
        40.99
    ],
    [
        "United States",
        "4/13/2013",
        194.352
    ],
    [
        "United States",
        "4/13/2013",
        63.9
    ],
    [
        "United States",
        "4/13/2013",
        19.44
    ],
    [
        "United States",
        "4/13/2013",
        51.984
    ],
    [
        "United States",
        "4/13/2013",
        13.208
    ],
    [
        "United States",
        "4/13/2013",
        10.272
    ],
    [
        "United States",
        "4/14/2013",
        6.12
    ],
    [
        "United States",
        "4/15/2013",
        933.536
    ],
    [
        "United States",
        "4/15/2013",
        383.8
    ],
    [
        "United States",
        "4/15/2013",
        42.976
    ],
    [
        "United States",
        "4/15/2013",
        81.2
    ],
    [
        "United States",
        "4/15/2013",
        25.06
    ],
    [
        "United States",
        "4/16/2013",
        1121.568
    ],
    [
        "United States",
        "4/16/2013",
        408.744
    ],
    [
        "United States",
        "4/16/2013",
        291.96
    ],
    [
        "United States",
        "4/16/2013",
        189.588
    ],
    [
        "United States",
        "4/16/2013",
        143.7
    ],
    [
        "United States",
        "4/16/2013",
        33.488
    ],
    [
        "United States",
        "4/16/2013",
        8.04
    ],
    [
        "United States",
        "4/16/2013",
        4.768
    ],
    [
        "United States",
        "4/17/2013",
        9099.93
    ],
    [
        "United States",
        "4/17/2013",
        123.088
    ],
    [
        "United States",
        "4/17/2013",
        28.8
    ],
    [
        "United States",
        "4/17/2013",
        25.3
    ],
    [
        "United States",
        "4/17/2013",
        12.84
    ],
    [
        "United States",
        "4/17/2013",
        9.96
    ],
    [
        "United States",
        "4/17/2013",
        35.168
    ],
    [
        "United States",
        "4/18/2013",
        257.499
    ],
    [
        "United States",
        "4/18/2013",
        79.12
    ],
    [
        "United States",
        "4/18/2013",
        36.792
    ],
    [
        "United States",
        "4/18/2013",
        29.05
    ],
    [
        "United States",
        "4/18/2013",
        18.624
    ],
    [
        "United States",
        "4/19/2013",
        1554.936
    ],
    [
        "United States",
        "4/19/2013",
        344.372
    ],
    [
        "United States",
        "4/19/2013",
        127.88
    ],
    [
        "United States",
        "4/19/2013",
        203.92
    ],
    [
        "United States",
        "4/19/2013",
        230.376
    ],
    [
        "United States",
        "4/19/2013",
        29.56
    ],
    [
        "United States",
        "4/19/2013",
        9.664
    ],
    [
        "United States",
        "4/19/2013",
        6.84
    ],
    [
        "United States",
        "4/19/2013",
        6.99
    ],
    [
        "United States",
        "4/20/2013",
        459.88
    ],
    [
        "United States",
        "4/20/2013",
        419.4
    ],
    [
        "United States",
        "4/20/2013",
        205.176
    ],
    [
        "United States",
        "4/20/2013",
        73.2
    ],
    [
        "United States",
        "4/20/2013",
        71.96
    ],
    [
        "United States",
        "4/20/2013",
        39.96
    ],
    [
        "United States",
        "4/20/2013",
        22.72
    ],
    [
        "United States",
        "4/20/2013",
        54.9
    ],
    [
        "United States",
        "4/20/2013",
        25.98
    ],
    [
        "United States",
        "4/20/2013",
        9.336
    ],
    [
        "United States",
        "4/20/2013",
        9.28
    ],
    [
        "United States",
        "4/20/2013",
        7.76
    ],
    [
        "United States",
        "4/20/2013",
        5.46
    ],
    [
        "United States",
        "4/20/2013",
        3.28
    ],
    [
        "United States",
        "4/20/2013",
        5.84
    ],
    [
        "United States",
        "4/22/2013",
        102.336
    ],
    [
        "United States",
        "4/22/2013",
        44.848
    ],
    [
        "United States",
        "4/22/2013",
        48.792
    ],
    [
        "United States",
        "4/22/2013",
        51.84
    ],
    [
        "United States",
        "4/22/2013",
        15.48
    ],
    [
        "United States",
        "4/22/2013",
        8.32
    ],
    [
        "United States",
        "4/23/2013",
        1272.63
    ],
    [
        "United States",
        "4/23/2013",
        185.376
    ],
    [
        "United States",
        "4/23/2013",
        78.272
    ],
    [
        "United States",
        "4/23/2013",
        86.62
    ],
    [
        "United States",
        "4/23/2013",
        31.56
    ],
    [
        "United States",
        "4/23/2013",
        28.485
    ],
    [
        "United States",
        "4/23/2013",
        23.952
    ],
    [
        "United States",
        "4/23/2013",
        23.56
    ],
    [
        "United States",
        "4/23/2013",
        32.13
    ],
    [
        "United States",
        "4/23/2013",
        2.88
    ],
    [
        "United States",
        "4/24/2013",
        251.52
    ],
    [
        "United States",
        "4/24/2013",
        78.304
    ],
    [
        "United States",
        "4/24/2013",
        108.336
    ],
    [
        "United States",
        "4/24/2013",
        71.97
    ],
    [
        "United States",
        "4/24/2013",
        55.92
    ],
    [
        "United States",
        "4/24/2013",
        99.99
    ],
    [
        "United States",
        "4/24/2013",
        36.24
    ],
    [
        "United States",
        "4/24/2013",
        18.088
    ],
    [
        "United States",
        "4/25/2013",
        1325.76
    ],
    [
        "United States",
        "4/25/2013",
        258.696
    ],
    [
        "United States",
        "4/25/2013",
        3.984
    ],
    [
        "United States",
        "4/25/2013",
        15.552
    ],
    [
        "United States",
        "4/25/2013",
        3.108
    ],
    [
        "United States",
        "4/26/2013",
        82.8
    ],
    [
        "United States",
        "4/26/2013",
        20.724
    ],
    [
        "United States",
        "4/26/2013",
        4.896
    ],
    [
        "United States",
        "4/27/2013",
        434.646
    ],
    [
        "United States",
        "4/29/2013",
        369.576
    ],
    [
        "United States",
        "4/29/2013",
        41.568
    ],
    [
        "United States",
        "4/29/2013",
        30.344
    ],
    [
        "United States",
        "4/29/2013",
        29.472
    ],
    [
        "United States",
        "4/29/2013",
        15.712
    ],
    [
        "United States",
        "5/1/2013",
        111.888
    ],
    [
        "United States",
        "5/1/2013",
        22.608
    ],
    [
        "United States",
        "5/1/2013",
        7.712
    ],
    [
        "United States",
        "5/2/2013",
        370.62
    ],
    [
        "United States",
        "5/2/2013",
        109.92
    ],
    [
        "United States",
        "5/2/2013",
        11.16
    ],
    [
        "United States",
        "5/2/2013",
        19.44
    ],
    [
        "United States",
        "5/2/2013",
        3.984
    ],
    [
        "United States",
        "5/2/2013",
        2.742
    ],
    [
        "United States",
        "5/3/2013",
        366.744
    ],
    [
        "United States",
        "5/3/2013",
        214.7
    ],
    [
        "United States",
        "5/3/2013",
        187.056
    ],
    [
        "United States",
        "5/3/2013",
        44.94
    ],
    [
        "United States",
        "5/3/2013",
        90.48
    ],
    [
        "United States",
        "5/3/2013",
        45.576
    ],
    [
        "United States",
        "5/3/2013",
        86.352
    ],
    [
        "United States",
        "5/3/2013",
        12.56
    ],
    [
        "United States",
        "5/3/2013",
        18.936
    ],
    [
        "United States",
        "5/3/2013",
        13.08
    ],
    [
        "United States",
        "5/3/2013",
        12.672
    ],
    [
        "United States",
        "5/3/2013",
        5.04
    ],
    [
        "United States",
        "5/4/2013",
        431.976
    ],
    [
        "United States",
        "5/4/2013",
        195.64
    ],
    [
        "United States",
        "5/4/2013",
        224.937
    ],
    [
        "United States",
        "5/4/2013",
        132.52
    ],
    [
        "United States",
        "5/4/2013",
        51.968
    ],
    [
        "United States",
        "5/4/2013",
        6
    ],
    [
        "United States",
        "5/4/2013",
        27.384
    ],
    [
        "United States",
        "5/4/2013",
        26.406
    ],
    [
        "United States",
        "5/4/2013",
        2.182
    ],
    [
        "United States",
        "5/6/2013",
        1685.88
    ],
    [
        "United States",
        "5/6/2013",
        298.776
    ],
    [
        "United States",
        "5/6/2013",
        177.48
    ],
    [
        "United States",
        "5/6/2013",
        246.168
    ],
    [
        "United States",
        "5/6/2013",
        79.14
    ],
    [
        "United States",
        "5/6/2013",
        71.088
    ],
    [
        "United States",
        "5/6/2013",
        93.248
    ],
    [
        "United States",
        "5/6/2013",
        14.352
    ],
    [
        "United States",
        "5/6/2013",
        16.72
    ],
    [
        "United States",
        "5/6/2013",
        5.728
    ],
    [
        "United States",
        "5/6/2013",
        6.72
    ],
    [
        "United States",
        "5/6/2013",
        5.98
    ],
    [
        "United States",
        "5/7/2013",
        41.6
    ],
    [
        "United States",
        "5/7/2013",
        26.176
    ],
    [
        "United States",
        "5/7/2013",
        49.568
    ],
    [
        "United States",
        "5/7/2013",
        54.48
    ],
    [
        "United States",
        "5/7/2013",
        54.712
    ],
    [
        "United States",
        "5/7/2013",
        7.216
    ],
    [
        "United States",
        "5/7/2013",
        3.208
    ],
    [
        "United States",
        "5/8/2013",
        3999.95
    ],
    [
        "United States",
        "5/8/2013",
        442.764
    ],
    [
        "United States",
        "5/8/2013",
        199.95
    ],
    [
        "United States",
        "5/8/2013",
        63.68
    ],
    [
        "United States",
        "5/8/2013",
        85.232
    ],
    [
        "United States",
        "5/8/2013",
        44.4
    ],
    [
        "United States",
        "5/9/2013",
        1006.056
    ],
    [
        "United States",
        "5/9/2013",
        211.96
    ],
    [
        "United States",
        "5/9/2013",
        25.12
    ],
    [
        "United States",
        "5/9/2013",
        58.112
    ],
    [
        "United States",
        "5/9/2013",
        17.94
    ],
    [
        "United States",
        "5/9/2013",
        10.688
    ],
    [
        "United States",
        "5/9/2013",
        10.368
    ],
    [
        "United States",
        "5/10/2013",
        856.656
    ],
    [
        "United States",
        "5/10/2013",
        93.98
    ],
    [
        "United States",
        "5/10/2013",
        79.36
    ],
    [
        "United States",
        "5/10/2013",
        48.784
    ],
    [
        "United States",
        "5/10/2013",
        27.86
    ],
    [
        "United States",
        "5/10/2013",
        76.64
    ],
    [
        "United States",
        "5/10/2013",
        32.04
    ],
    [
        "United States",
        "5/10/2013",
        19.136
    ],
    [
        "United States",
        "5/10/2013",
        13.184
    ],
    [
        "United States",
        "5/10/2013",
        9.344
    ],
    [
        "United States",
        "5/10/2013",
        18.528
    ],
    [
        "United States",
        "5/10/2013",
        8
    ],
    [
        "United States",
        "5/11/2013",
        743.988
    ],
    [
        "United States",
        "5/11/2013",
        11.96
    ],
    [
        "United States",
        "5/11/2013",
        7.072
    ],
    [
        "United States",
        "5/12/2013",
        5.98
    ],
    [
        "United States",
        "5/13/2013",
        631.96
    ],
    [
        "United States",
        "5/13/2013",
        120
    ],
    [
        "United States",
        "5/13/2013",
        82.368
    ],
    [
        "United States",
        "5/13/2013",
        54.9
    ],
    [
        "United States",
        "5/13/2013",
        10.96
    ],
    [
        "United States",
        "5/13/2013",
        10.02
    ],
    [
        "United States",
        "5/13/2013",
        8.67
    ],
    [
        "United States",
        "5/15/2013",
        185.528
    ],
    [
        "United States",
        "5/15/2013",
        79.384
    ],
    [
        "United States",
        "5/15/2013",
        57.582
    ],
    [
        "United States",
        "5/15/2013",
        30.192
    ],
    [
        "United States",
        "5/15/2013",
        43.6
    ],
    [
        "United States",
        "5/15/2013",
        31.104
    ],
    [
        "United States",
        "5/15/2013",
        10.38
    ],
    [
        "United States",
        "5/15/2013",
        13.392
    ],
    [
        "United States",
        "5/15/2013",
        4.768
    ],
    [
        "United States",
        "5/16/2013",
        511.84
    ],
    [
        "United States",
        "5/16/2013",
        91.96
    ],
    [
        "United States",
        "5/16/2013",
        15.232
    ],
    [
        "United States",
        "5/16/2013",
        13.776
    ],
    [
        "United States",
        "5/16/2013",
        8.34
    ],
    [
        "United States",
        "5/16/2013",
        7.764
    ],
    [
        "United States",
        "5/17/2013",
        552.56
    ],
    [
        "United States",
        "5/17/2013",
        282.84
    ],
    [
        "United States",
        "5/17/2013",
        27.72
    ],
    [
        "United States",
        "5/17/2013",
        17.34
    ],
    [
        "United States",
        "5/18/2013",
        173.24
    ],
    [
        "United States",
        "5/18/2013",
        65.17
    ],
    [
        "United States",
        "5/18/2013",
        14.62
    ],
    [
        "United States",
        "5/18/2013",
        30.528
    ],
    [
        "United States",
        "5/18/2013",
        22.608
    ],
    [
        "United States",
        "5/18/2013",
        27.018
    ],
    [
        "United States",
        "5/18/2013",
        7.896
    ],
    [
        "United States",
        "5/18/2013",
        2.952
    ],
    [
        "United States",
        "5/18/2013",
        2.89
    ],
    [
        "United States",
        "5/19/2013",
        104.28
    ],
    [
        "United States",
        "5/19/2013",
        17.94
    ],
    [
        "United States",
        "5/20/2013",
        641.96
    ],
    [
        "United States",
        "5/20/2013",
        242.9
    ],
    [
        "United States",
        "5/20/2013",
        454.9
    ],
    [
        "United States",
        "5/20/2013",
        87.84
    ],
    [
        "United States",
        "5/20/2013",
        35.92
    ],
    [
        "United States",
        "5/20/2013",
        39.76
    ],
    [
        "United States",
        "5/20/2013",
        47.744
    ],
    [
        "United States",
        "5/20/2013",
        21.4
    ],
    [
        "United States",
        "5/20/2013",
        9.584
    ],
    [
        "United States",
        "5/21/2013",
        1363.96
    ],
    [
        "United States",
        "5/21/2013",
        1049.2
    ],
    [
        "United States",
        "5/21/2013",
        40.635
    ],
    [
        "United States",
        "5/21/2013",
        15.424
    ],
    [
        "United States",
        "5/21/2013",
        2.694
    ],
    [
        "United States",
        "5/22/2013",
        2396.4
    ],
    [
        "United States",
        "5/22/2013",
        55.176
    ],
    [
        "United States",
        "5/22/2013",
        111.96
    ],
    [
        "United States",
        "5/22/2013",
        82.656
    ],
    [
        "United States",
        "5/22/2013",
        66.26
    ],
    [
        "United States",
        "5/22/2013",
        3.798
    ],
    [
        "United States",
        "5/22/2013",
        1.964
    ],
    [
        "United States",
        "5/23/2013",
        662.84
    ],
    [
        "United States",
        "5/23/2013",
        222.384
    ],
    [
        "United States",
        "5/23/2013",
        345
    ],
    [
        "United States",
        "5/23/2013",
        257.98
    ],
    [
        "United States",
        "5/23/2013",
        95.1
    ],
    [
        "United States",
        "5/23/2013",
        174.286
    ],
    [
        "United States",
        "5/23/2013",
        26.88
    ],
    [
        "United States",
        "5/23/2013",
        14.73
    ],
    [
        "United States",
        "5/24/2013",
        8399.976
    ],
    [
        "United States",
        "5/24/2013",
        1979.928
    ],
    [
        "United States",
        "5/24/2013",
        122.382
    ],
    [
        "United States",
        "5/24/2013",
        37.05
    ],
    [
        "United States",
        "5/24/2013",
        10.368
    ],
    [
        "United States",
        "5/24/2013",
        4.98
    ],
    [
        "United States",
        "5/24/2013",
        6.294
    ],
    [
        "United States",
        "5/25/2013",
        191.6
    ],
    [
        "United States",
        "5/25/2013",
        69.5
    ],
    [
        "United States",
        "5/25/2013",
        16.656
    ],
    [
        "United States",
        "5/26/2013",
        1267.65
    ],
    [
        "United States",
        "5/26/2013",
        24.96
    ],
    [
        "United States",
        "5/26/2013",
        19.36
    ],
    [
        "United States",
        "5/27/2013",
        388.43
    ],
    [
        "United States",
        "5/27/2013",
        184.704
    ],
    [
        "United States",
        "5/27/2013",
        371.976
    ],
    [
        "United States",
        "5/27/2013",
        211.168
    ],
    [
        "United States",
        "5/27/2013",
        63.992
    ],
    [
        "United States",
        "5/27/2013",
        484.704
    ],
    [
        "United States",
        "5/27/2013",
        47.92
    ],
    [
        "United States",
        "5/27/2013",
        41.37
    ],
    [
        "United States",
        "5/27/2013",
        10.368
    ],
    [
        "United States",
        "5/27/2013",
        34.848
    ],
    [
        "United States",
        "5/27/2013",
        14.352
    ],
    [
        "United States",
        "5/27/2013",
        26.94
    ],
    [
        "United States",
        "5/27/2013",
        45.36
    ],
    [
        "United States",
        "5/27/2013",
        19.44
    ],
    [
        "United States",
        "5/27/2013",
        12.7
    ],
    [
        "United States",
        "5/27/2013",
        9.64
    ],
    [
        "United States",
        "5/27/2013",
        1.504
    ],
    [
        "United States",
        "5/27/2013",
        5.94
    ],
    [
        "United States",
        "5/28/2013",
        3504.9
    ],
    [
        "United States",
        "5/28/2013",
        1297.368
    ],
    [
        "United States",
        "5/28/2013",
        314.55
    ],
    [
        "United States",
        "5/28/2013",
        144.12
    ],
    [
        "United States",
        "5/28/2013",
        25.176
    ],
    [
        "United States",
        "5/28/2013",
        13.38
    ],
    [
        "United States",
        "5/28/2013",
        5.584
    ],
    [
        "United States",
        "5/29/2013",
        558.4
    ],
    [
        "United States",
        "5/29/2013",
        390.272
    ],
    [
        "United States",
        "5/29/2013",
        262.24
    ],
    [
        "United States",
        "5/29/2013",
        286.4
    ],
    [
        "United States",
        "5/29/2013",
        131.6
    ],
    [
        "United States",
        "5/29/2013",
        182.72
    ],
    [
        "United States",
        "5/29/2013",
        185.88
    ],
    [
        "United States",
        "5/29/2013",
        54.9
    ],
    [
        "United States",
        "5/29/2013",
        62.192
    ],
    [
        "United States",
        "5/29/2013",
        22.72
    ],
    [
        "United States",
        "5/30/2013",
        979.95
    ],
    [
        "United States",
        "5/30/2013",
        44.76
    ],
    [
        "United States",
        "5/30/2013",
        22.75
    ],
    [
        "United States",
        "5/30/2013",
        11.277
    ],
    [
        "United States",
        "5/30/2013",
        4.448
    ],
    [
        "United States",
        "5/31/2013",
        839.988
    ],
    [
        "United States",
        "5/31/2013",
        2275.5
    ],
    [
        "United States",
        "5/31/2013",
        801.568
    ],
    [
        "United States",
        "5/31/2013",
        1979.7
    ],
    [
        "United States",
        "5/31/2013",
        364.74
    ],
    [
        "United States",
        "5/31/2013",
        629.1
    ],
    [
        "United States",
        "5/31/2013",
        223.96
    ],
    [
        "United States",
        "5/31/2013",
        111.98
    ],
    [
        "United States",
        "5/31/2013",
        79.96
    ],
    [
        "United States",
        "5/31/2013",
        123.92
    ],
    [
        "United States",
        "5/31/2013",
        125.99
    ],
    [
        "United States",
        "5/31/2013",
        167.84
    ],
    [
        "United States",
        "5/31/2013",
        62.1
    ],
    [
        "United States",
        "5/31/2013",
        47.4
    ],
    [
        "United States",
        "5/31/2013",
        26.55
    ],
    [
        "United States",
        "5/31/2013",
        38.88
    ],
    [
        "United States",
        "5/31/2013",
        49.76
    ],
    [
        "United States",
        "5/31/2013",
        32.792
    ],
    [
        "United States",
        "5/31/2013",
        14.7
    ],
    [
        "United States",
        "5/31/2013",
        45.36
    ],
    [
        "United States",
        "5/31/2013",
        14.952
    ],
    [
        "United States",
        "5/31/2013",
        22.62
    ],
    [
        "United States",
        "5/31/2013",
        3.282
    ],
    [
        "United States",
        "5/31/2013",
        5.56
    ],
    [
        "United States",
        "5/31/2013",
        2.376
    ],
    [
        "United States",
        "6/1/2013",
        191.079
    ],
    [
        "United States",
        "6/1/2013",
        179.7
    ],
    [
        "United States",
        "6/1/2013",
        32.064
    ],
    [
        "United States",
        "6/1/2013",
        18.496
    ],
    [
        "United States",
        "6/1/2013",
        10.368
    ],
    [
        "United States",
        "6/1/2013",
        7.152
    ],
    [
        "United States",
        "6/3/2013",
        64.784
    ],
    [
        "United States",
        "6/3/2013",
        51.648
    ],
    [
        "United States",
        "6/3/2013",
        30.18
    ],
    [
        "United States",
        "6/3/2013",
        11.232
    ],
    [
        "United States",
        "6/4/2013",
        71.088
    ],
    [
        "United States",
        "6/5/2013",
        1349.85
    ],
    [
        "United States",
        "6/5/2013",
        419.68
    ],
    [
        "United States",
        "6/5/2013",
        177.225
    ],
    [
        "United States",
        "6/5/2013",
        75.88
    ],
    [
        "United States",
        "6/5/2013",
        136.784
    ],
    [
        "United States",
        "6/5/2013",
        61.12
    ],
    [
        "United States",
        "6/5/2013",
        4.044
    ],
    [
        "United States",
        "6/5/2013",
        31.984
    ],
    [
        "United States",
        "6/5/2013",
        25.92
    ],
    [
        "United States",
        "6/5/2013",
        14.94
    ],
    [
        "United States",
        "6/5/2013",
        11.688
    ],
    [
        "United States",
        "6/5/2013",
        7.408
    ],
    [
        "United States",
        "6/6/2013",
        360.38
    ],
    [
        "United States",
        "6/6/2013",
        61.38
    ],
    [
        "United States",
        "6/6/2013",
        58.24
    ],
    [
        "United States",
        "6/6/2013",
        124.608
    ],
    [
        "United States",
        "6/6/2013",
        21.552
    ],
    [
        "United States",
        "6/6/2013",
        11.16
    ],
    [
        "United States",
        "6/6/2013",
        14.94
    ],
    [
        "United States",
        "6/6/2013",
        7.56
    ],
    [
        "United States",
        "6/7/2013",
        3023.928
    ],
    [
        "United States",
        "6/7/2013",
        714.3
    ],
    [
        "United States",
        "6/7/2013",
        466.32
    ],
    [
        "United States",
        "6/7/2013",
        323.37
    ],
    [
        "United States",
        "6/7/2013",
        477.6
    ],
    [
        "United States",
        "6/7/2013",
        328.224
    ],
    [
        "United States",
        "6/7/2013",
        179.94
    ],
    [
        "United States",
        "6/7/2013",
        105.52
    ],
    [
        "United States",
        "6/7/2013",
        82.64
    ],
    [
        "United States",
        "6/7/2013",
        59.94
    ],
    [
        "United States",
        "6/7/2013",
        26.85
    ],
    [
        "United States",
        "6/7/2013",
        99.9
    ],
    [
        "United States",
        "6/7/2013",
        64.14
    ],
    [
        "United States",
        "6/7/2013",
        11.67
    ],
    [
        "United States",
        "6/7/2013",
        22.05
    ],
    [
        "United States",
        "6/7/2013",
        26.96
    ],
    [
        "United States",
        "6/7/2013",
        12.96
    ],
    [
        "United States",
        "6/8/2013",
        32.4
    ],
    [
        "United States",
        "6/8/2013",
        9.648
    ],
    [
        "United States",
        "6/8/2013",
        4.784
    ],
    [
        "United States",
        "6/8/2013",
        4.73
    ],
    [
        "United States",
        "6/10/2013",
        695.7
    ],
    [
        "United States",
        "6/10/2013",
        692.94
    ],
    [
        "United States",
        "6/10/2013",
        122.352
    ],
    [
        "United States",
        "6/10/2013",
        177.48
    ],
    [
        "United States",
        "6/11/2013",
        1335.68
    ],
    [
        "United States",
        "6/11/2013",
        23.616
    ],
    [
        "United States",
        "6/11/2013",
        32.4
    ],
    [
        "United States",
        "6/11/2013",
        20.7
    ],
    [
        "United States",
        "6/12/2013",
        902.712
    ],
    [
        "United States",
        "6/12/2013",
        239.97
    ],
    [
        "United States",
        "6/12/2013",
        389.97
    ],
    [
        "United States",
        "6/12/2013",
        53.984
    ],
    [
        "United States",
        "6/12/2013",
        8.272
    ],
    [
        "United States",
        "6/12/2013",
        14.62
    ],
    [
        "United States",
        "6/12/2013",
        12.544
    ],
    [
        "United States",
        "6/12/2013",
        1.344
    ],
    [
        "United States",
        "6/13/2013",
        1007.979
    ],
    [
        "United States",
        "6/13/2013",
        208.16
    ],
    [
        "United States",
        "6/13/2013",
        226.56
    ],
    [
        "United States",
        "6/13/2013",
        313.488
    ],
    [
        "United States",
        "6/13/2013",
        115.02
    ],
    [
        "United States",
        "6/13/2013",
        379.372
    ],
    [
        "United States",
        "6/13/2013",
        185.88
    ],
    [
        "United States",
        "6/13/2013",
        47.04
    ],
    [
        "United States",
        "6/13/2013",
        30.84
    ],
    [
        "United States",
        "6/13/2013",
        68.04
    ],
    [
        "United States",
        "6/13/2013",
        92.94
    ],
    [
        "United States",
        "6/13/2013",
        16.74
    ],
    [
        "United States",
        "6/13/2013",
        52.56
    ],
    [
        "United States",
        "6/13/2013",
        64.384
    ],
    [
        "United States",
        "6/13/2013",
        67.536
    ],
    [
        "United States",
        "6/13/2013",
        23.12
    ],
    [
        "United States",
        "6/13/2013",
        15.552
    ],
    [
        "United States",
        "6/13/2013",
        14.62
    ],
    [
        "United States",
        "6/13/2013",
        12.96
    ],
    [
        "United States",
        "6/13/2013",
        11.264
    ],
    [
        "United States",
        "6/13/2013",
        6.984
    ],
    [
        "United States",
        "6/13/2013",
        1.524
    ],
    [
        "United States",
        "6/14/2013",
        377.97
    ],
    [
        "United States",
        "6/14/2013",
        33.568
    ],
    [
        "United States",
        "6/14/2013",
        18.9
    ],
    [
        "United States",
        "6/15/2013",
        1293.488
    ],
    [
        "United States",
        "6/15/2013",
        1115.17
    ],
    [
        "United States",
        "6/15/2013",
        599.165
    ],
    [
        "United States",
        "6/15/2013",
        337.176
    ],
    [
        "United States",
        "6/15/2013",
        29.29
    ],
    [
        "United States",
        "6/15/2013",
        39.936
    ],
    [
        "United States",
        "6/15/2013",
        8.64
    ],
    [
        "United States",
        "6/15/2013",
        7.04
    ],
    [
        "United States",
        "6/15/2013",
        8.73
    ],
    [
        "United States",
        "6/15/2013",
        18.464
    ],
    [
        "United States",
        "6/16/2013",
        173.488
    ],
    [
        "United States",
        "6/17/2013",
        91.475
    ],
    [
        "United States",
        "6/17/2013",
        46.35
    ],
    [
        "United States",
        "6/17/2013",
        9.45
    ],
    [
        "United States",
        "6/18/2013",
        483.136
    ],
    [
        "United States",
        "6/18/2013",
        219.84
    ],
    [
        "United States",
        "6/18/2013",
        566.97
    ],
    [
        "United States",
        "6/18/2013",
        319.41
    ],
    [
        "United States",
        "6/18/2013",
        239.666
    ],
    [
        "United States",
        "6/18/2013",
        266.352
    ],
    [
        "United States",
        "6/18/2013",
        208.56
    ],
    [
        "United States",
        "6/18/2013",
        376.866
    ],
    [
        "United States",
        "6/18/2013",
        111.96
    ],
    [
        "United States",
        "6/18/2013",
        32.4
    ],
    [
        "United States",
        "6/18/2013",
        48.48
    ],
    [
        "United States",
        "6/18/2013",
        40.74
    ],
    [
        "United States",
        "6/18/2013",
        30
    ],
    [
        "United States",
        "6/18/2013",
        22.5
    ],
    [
        "United States",
        "6/18/2013",
        14.56
    ],
    [
        "United States",
        "6/18/2013",
        9.84
    ],
    [
        "United States",
        "6/18/2013",
        7.96
    ],
    [
        "United States",
        "6/18/2013",
        1.68
    ],
    [
        "United States",
        "6/19/2013",
        453.6
    ],
    [
        "United States",
        "6/19/2013",
        76.864
    ],
    [
        "United States",
        "6/19/2013",
        6.848
    ],
    [
        "United States",
        "6/19/2013",
        4.626
    ],
    [
        "United States",
        "6/20/2013",
        17.12
    ],
    [
        "United States",
        "6/21/2013",
        447.696
    ],
    [
        "United States",
        "6/21/2013",
        161.568
    ],
    [
        "United States",
        "6/21/2013",
        161.94
    ],
    [
        "United States",
        "6/21/2013",
        46.76
    ],
    [
        "United States",
        "6/21/2013",
        95.968
    ],
    [
        "United States",
        "6/21/2013",
        57.69
    ],
    [
        "United States",
        "6/21/2013",
        21.78
    ],
    [
        "United States",
        "6/21/2013",
        17.712
    ],
    [
        "United States",
        "6/21/2013",
        38.88
    ],
    [
        "United States",
        "6/21/2013",
        29.718
    ],
    [
        "United States",
        "6/21/2013",
        45
    ],
    [
        "United States",
        "6/21/2013",
        45.056
    ],
    [
        "United States",
        "6/21/2013",
        21.8
    ],
    [
        "United States",
        "6/21/2013",
        15.552
    ],
    [
        "United States",
        "6/21/2013",
        10.368
    ],
    [
        "United States",
        "6/21/2013",
        5.16
    ],
    [
        "United States",
        "6/21/2013",
        6.9
    ],
    [
        "United States",
        "6/22/2013",
        353.568
    ],
    [
        "United States",
        "6/22/2013",
        186.144
    ],
    [
        "United States",
        "6/22/2013",
        36.56
    ],
    [
        "United States",
        "6/22/2013",
        0.836
    ],
    [
        "United States",
        "6/24/2013",
        862.344
    ],
    [
        "United States",
        "6/24/2013",
        835.17
    ],
    [
        "United States",
        "6/24/2013",
        324.9
    ],
    [
        "United States",
        "6/24/2013",
        93.68
    ],
    [
        "United States",
        "6/24/2013",
        122.12
    ],
    [
        "United States",
        "6/24/2013",
        146.73
    ],
    [
        "United States",
        "6/24/2013",
        21.93
    ],
    [
        "United States",
        "6/24/2013",
        19.98
    ],
    [
        "United States",
        "6/24/2013",
        25.83
    ],
    [
        "United States",
        "6/24/2013",
        18.45
    ],
    [
        "United States",
        "6/24/2013",
        3.96
    ],
    [
        "United States",
        "6/25/2013",
        4476.8
    ],
    [
        "United States",
        "6/25/2013",
        241.44
    ],
    [
        "United States",
        "6/25/2013",
        440.91
    ],
    [
        "United States",
        "6/25/2013",
        104.85
    ],
    [
        "United States",
        "6/25/2013",
        38.24
    ],
    [
        "United States",
        "6/25/2013",
        8.712
    ],
    [
        "United States",
        "6/26/2013",
        254.352
    ],
    [
        "United States",
        "6/26/2013",
        422.058
    ],
    [
        "United States",
        "6/26/2013",
        85.246
    ],
    [
        "United States",
        "6/26/2013",
        32.712
    ],
    [
        "United States",
        "6/26/2013",
        60.81
    ],
    [
        "United States",
        "6/26/2013",
        38.088
    ],
    [
        "United States",
        "6/27/2013",
        368.91
    ],
    [
        "United States",
        "6/27/2013",
        704.25
    ],
    [
        "United States",
        "6/27/2013",
        231.72
    ],
    [
        "United States",
        "6/27/2013",
        171.04
    ],
    [
        "United States",
        "6/27/2013",
        135.95
    ],
    [
        "United States",
        "6/27/2013",
        139.96
    ],
    [
        "United States",
        "6/27/2013",
        17.9
    ],
    [
        "United States",
        "6/27/2013",
        12.48
    ],
    [
        "United States",
        "6/27/2013",
        13.616
    ],
    [
        "United States",
        "6/27/2013",
        37.74
    ],
    [
        "United States",
        "6/27/2013",
        20.97
    ],
    [
        "United States",
        "6/27/2013",
        14.9
    ],
    [
        "United States",
        "6/27/2013",
        14.7
    ],
    [
        "United States",
        "6/27/2013",
        22.14
    ],
    [
        "United States",
        "6/27/2013",
        8.02
    ],
    [
        "United States",
        "6/27/2013",
        5.304
    ],
    [
        "United States",
        "6/28/2013",
        539.658
    ],
    [
        "United States",
        "6/28/2013",
        201.584
    ],
    [
        "United States",
        "6/28/2013",
        37.464
    ],
    [
        "United States",
        "6/29/2013",
        275.24
    ],
    [
        "United States",
        "6/29/2013",
        359.976
    ],
    [
        "United States",
        "6/29/2013",
        121.96
    ],
    [
        "United States",
        "6/29/2013",
        33.568
    ],
    [
        "United States",
        "6/29/2013",
        61.96
    ],
    [
        "United States",
        "6/29/2013",
        7.752
    ],
    [
        "United States",
        "6/29/2013",
        7.96
    ],
    [
        "United States",
        "6/29/2013",
        8.74
    ],
    [
        "United States",
        "6/30/2013",
        191.88
    ],
    [
        "United States",
        "7/1/2013",
        1266.86
    ],
    [
        "United States",
        "7/1/2013",
        35.97
    ],
    [
        "United States",
        "7/1/2013",
        50.12
    ],
    [
        "United States",
        "7/2/2013",
        1499.95
    ],
    [
        "United States",
        "7/2/2013",
        75.06
    ],
    [
        "United States",
        "7/2/2013",
        30.53
    ],
    [
        "United States",
        "7/2/2013",
        58.34
    ],
    [
        "United States",
        "7/2/2013",
        30.84
    ],
    [
        "United States",
        "7/2/2013",
        14.2
    ],
    [
        "United States",
        "7/2/2013",
        12.96
    ],
    [
        "United States",
        "7/2/2013",
        2.496
    ],
    [
        "United States",
        "7/3/2013",
        528.43
    ],
    [
        "United States",
        "7/3/2013",
        195.184
    ],
    [
        "United States",
        "7/3/2013",
        41.472
    ],
    [
        "United States",
        "7/3/2013",
        7.7
    ],
    [
        "United States",
        "7/4/2013",
        706.86
    ],
    [
        "United States",
        "7/4/2013",
        123.92
    ],
    [
        "United States",
        "7/4/2013",
        12.96
    ],
    [
        "United States",
        "7/4/2013",
        3.96
    ],
    [
        "United States",
        "7/5/2013",
        1279.165
    ],
    [
        "United States",
        "7/5/2013",
        177.48
    ],
    [
        "United States",
        "7/5/2013",
        71.976
    ],
    [
        "United States",
        "7/5/2013",
        27.92
    ],
    [
        "United States",
        "7/5/2013",
        43.96
    ],
    [
        "United States",
        "7/5/2013",
        25.4
    ],
    [
        "United States",
        "7/5/2013",
        25.4
    ],
    [
        "United States",
        "7/8/2013",
        287.968
    ],
    [
        "United States",
        "7/8/2013",
        2799.96
    ],
    [
        "United States",
        "7/8/2013",
        215.65
    ],
    [
        "United States",
        "7/8/2013",
        253.372
    ],
    [
        "United States",
        "7/8/2013",
        48.94
    ],
    [
        "United States",
        "7/8/2013",
        59.994
    ],
    [
        "United States",
        "7/8/2013",
        45.584
    ],
    [
        "United States",
        "7/8/2013",
        23.688
    ],
    [
        "United States",
        "7/8/2013",
        60.288
    ],
    [
        "United States",
        "7/8/2013",
        45.98
    ],
    [
        "United States",
        "7/8/2013",
        9.42
    ],
    [
        "United States",
        "7/8/2013",
        10.08
    ],
    [
        "United States",
        "7/8/2013",
        12.96
    ],
    [
        "United States",
        "7/8/2013",
        5.715
    ],
    [
        "United States",
        "7/8/2013",
        2.632
    ],
    [
        "United States",
        "7/9/2013",
        823.96
    ],
    [
        "United States",
        "7/9/2013",
        863.64
    ],
    [
        "United States",
        "7/9/2013",
        662.88
    ],
    [
        "United States",
        "7/9/2013",
        33.488
    ],
    [
        "United States",
        "7/9/2013",
        47.616
    ],
    [
        "United States",
        "7/9/2013",
        19.968
    ],
    [
        "United States",
        "7/9/2013",
        107.984
    ],
    [
        "United States",
        "7/9/2013",
        19.296
    ],
    [
        "United States",
        "7/9/2013",
        15.984
    ],
    [
        "United States",
        "7/9/2013",
        12.96
    ],
    [
        "United States",
        "7/9/2013",
        8.736
    ],
    [
        "United States",
        "7/10/2013",
        408.006
    ],
    [
        "United States",
        "7/10/2013",
        165.28
    ],
    [
        "United States",
        "7/11/2013",
        338.04
    ],
    [
        "United States",
        "7/11/2013",
        341.991
    ],
    [
        "United States",
        "7/11/2013",
        154.24
    ],
    [
        "United States",
        "7/11/2013",
        44.856
    ],
    [
        "United States",
        "7/11/2013",
        16.768
    ],
    [
        "United States",
        "7/13/2013",
        95.76
    ],
    [
        "United States",
        "7/15/2013",
        380.864
    ],
    [
        "United States",
        "7/15/2013",
        419.944
    ],
    [
        "United States",
        "7/15/2013",
        579.136
    ],
    [
        "United States",
        "7/15/2013",
        219.84
    ],
    [
        "United States",
        "7/15/2013",
        151.62
    ],
    [
        "United States",
        "7/15/2013",
        110.376
    ],
    [
        "United States",
        "7/15/2013",
        51.75
    ],
    [
        "United States",
        "7/15/2013",
        41.86
    ],
    [
        "United States",
        "7/15/2013",
        36.4
    ],
    [
        "United States",
        "7/15/2013",
        30.8
    ],
    [
        "United States",
        "7/15/2013",
        29
    ],
    [
        "United States",
        "7/15/2013",
        11.21
    ],
    [
        "United States",
        "7/15/2013",
        14.16
    ],
    [
        "United States",
        "7/15/2013",
        14.07
    ],
    [
        "United States",
        "7/15/2013",
        29.61
    ],
    [
        "United States",
        "7/15/2013",
        9.144
    ],
    [
        "United States",
        "7/15/2013",
        11.632
    ],
    [
        "United States",
        "7/15/2013",
        8.544
    ],
    [
        "United States",
        "7/16/2013",
        230.28
    ],
    [
        "United States",
        "7/16/2013",
        105.52
    ],
    [
        "United States",
        "7/16/2013",
        44.4
    ],
    [
        "United States",
        "7/17/2013",
        494.376
    ],
    [
        "United States",
        "7/17/2013",
        143.982
    ],
    [
        "United States",
        "7/17/2013",
        60.12
    ],
    [
        "United States",
        "7/17/2013",
        75.98
    ],
    [
        "United States",
        "7/17/2013",
        37.224
    ],
    [
        "United States",
        "7/17/2013",
        22.32
    ],
    [
        "United States",
        "7/17/2013",
        20.016
    ],
    [
        "United States",
        "7/17/2013",
        24.1
    ],
    [
        "United States",
        "7/17/2013",
        10.2
    ],
    [
        "United States",
        "7/17/2013",
        6.46
    ],
    [
        "United States",
        "7/17/2013",
        5.84
    ],
    [
        "United States",
        "7/17/2013",
        9.552
    ],
    [
        "United States",
        "7/18/2013",
        597
    ],
    [
        "United States",
        "7/18/2013",
        428.4
    ],
    [
        "United States",
        "7/18/2013",
        265.17
    ],
    [
        "United States",
        "7/18/2013",
        242.94
    ],
    [
        "United States",
        "7/18/2013",
        162.64
    ],
    [
        "United States",
        "7/18/2013",
        51.84
    ],
    [
        "United States",
        "7/18/2013",
        69.52
    ],
    [
        "United States",
        "7/18/2013",
        55.48
    ],
    [
        "United States",
        "7/18/2013",
        87.71
    ],
    [
        "United States",
        "7/18/2013",
        77.88
    ],
    [
        "United States",
        "7/18/2013",
        45.96
    ],
    [
        "United States",
        "7/18/2013",
        20.784
    ],
    [
        "United States",
        "7/18/2013",
        21.93
    ],
    [
        "United States",
        "7/18/2013",
        24.75
    ],
    [
        "United States",
        "7/18/2013",
        12.816
    ],
    [
        "United States",
        "7/18/2013",
        12.42
    ],
    [
        "United States",
        "7/18/2013",
        7.64
    ],
    [
        "United States",
        "7/19/2013",
        854.352
    ],
    [
        "United States",
        "7/19/2013",
        544.008
    ],
    [
        "United States",
        "7/19/2013",
        593.568
    ],
    [
        "United States",
        "7/19/2013",
        284.08
    ],
    [
        "United States",
        "7/19/2013",
        338.04
    ],
    [
        "United States",
        "7/19/2013",
        140.81
    ],
    [
        "United States",
        "7/19/2013",
        55.992
    ],
    [
        "United States",
        "7/19/2013",
        33.8
    ],
    [
        "United States",
        "7/19/2013",
        18.496
    ],
    [
        "United States",
        "7/19/2013",
        15.576
    ],
    [
        "United States",
        "7/19/2013",
        11.264
    ],
    [
        "United States",
        "7/19/2013",
        1.872
    ],
    [
        "United States",
        "7/20/2013",
        504.9
    ],
    [
        "United States",
        "7/20/2013",
        389.97
    ],
    [
        "United States",
        "7/20/2013",
        245.94
    ],
    [
        "United States",
        "7/20/2013",
        185.58
    ],
    [
        "United States",
        "7/20/2013",
        77.56
    ],
    [
        "United States",
        "7/20/2013",
        87.92
    ],
    [
        "United States",
        "7/20/2013",
        35.984
    ],
    [
        "United States",
        "7/20/2013",
        8.6
    ],
    [
        "United States",
        "7/21/2013",
        89.95
    ],
    [
        "United States",
        "7/22/2013",
        419.9
    ],
    [
        "United States",
        "7/22/2013",
        363.92
    ],
    [
        "United States",
        "7/22/2013",
        99.488
    ],
    [
        "United States",
        "7/22/2013",
        66.688
    ],
    [
        "United States",
        "7/22/2013",
        18.656
    ],
    [
        "United States",
        "7/22/2013",
        11.088
    ],
    [
        "United States",
        "7/22/2013",
        6.264
    ],
    [
        "United States",
        "7/22/2013",
        3.15
    ],
    [
        "United States",
        "7/22/2013",
        1.941
    ],
    [
        "United States",
        "7/23/2013",
        86.2
    ],
    [
        "United States",
        "7/23/2013",
        109.95
    ],
    [
        "United States",
        "7/23/2013",
        965.85
    ],
    [
        "United States",
        "7/23/2013",
        51.84
    ],
    [
        "United States",
        "7/23/2013",
        32.4
    ],
    [
        "United States",
        "7/23/2013",
        37.68
    ],
    [
        "United States",
        "7/23/2013",
        6.3
    ],
    [
        "United States",
        "7/23/2013",
        29.2
    ],
    [
        "United States",
        "7/23/2013",
        27.42
    ],
    [
        "United States",
        "7/23/2013",
        11.648
    ],
    [
        "United States",
        "7/23/2013",
        4.16
    ],
    [
        "United States",
        "7/23/2013",
        5.4
    ],
    [
        "United States",
        "7/24/2013",
        265.475
    ],
    [
        "United States",
        "7/24/2013",
        115.136
    ],
    [
        "United States",
        "7/24/2013",
        175.92
    ],
    [
        "United States",
        "7/24/2013",
        35.216
    ],
    [
        "United States",
        "7/24/2013",
        23.696
    ],
    [
        "United States",
        "7/24/2013",
        11.416
    ],
    [
        "United States",
        "7/24/2013",
        13.344
    ],
    [
        "United States",
        "7/24/2013",
        5.184
    ],
    [
        "United States",
        "7/24/2013",
        4.448
    ],
    [
        "United States",
        "7/24/2013",
        4.752
    ],
    [
        "United States",
        "7/25/2013",
        253.764
    ],
    [
        "United States",
        "7/25/2013",
        73.2
    ],
    [
        "United States",
        "7/26/2013",
        1439.976
    ],
    [
        "United States",
        "7/26/2013",
        403.56
    ],
    [
        "United States",
        "7/26/2013",
        2430.08
    ],
    [
        "United States",
        "7/26/2013",
        297.55
    ],
    [
        "United States",
        "7/26/2013",
        124.25
    ],
    [
        "United States",
        "7/26/2013",
        243.88
    ],
    [
        "United States",
        "7/26/2013",
        241.568
    ],
    [
        "United States",
        "7/26/2013",
        95.2
    ],
    [
        "United States",
        "7/26/2013",
        255.76
    ],
    [
        "United States",
        "7/26/2013",
        37.17
    ],
    [
        "United States",
        "7/26/2013",
        119.616
    ],
    [
        "United States",
        "7/26/2013",
        69.3
    ],
    [
        "United States",
        "7/26/2013",
        21.48
    ],
    [
        "United States",
        "7/26/2013",
        65.5
    ],
    [
        "United States",
        "7/26/2013",
        20.62
    ],
    [
        "United States",
        "7/26/2013",
        10.44
    ],
    [
        "United States",
        "7/26/2013",
        15.712
    ],
    [
        "United States",
        "7/26/2013",
        20.936
    ],
    [
        "United States",
        "7/26/2013",
        7.89
    ],
    [
        "United States",
        "7/29/2013",
        1369.764
    ],
    [
        "United States",
        "7/29/2013",
        177.45
    ],
    [
        "United States",
        "7/29/2013",
        302.72
    ],
    [
        "United States",
        "7/29/2013",
        109.92
    ],
    [
        "United States",
        "7/29/2013",
        24.7
    ],
    [
        "United States",
        "7/29/2013",
        9.48
    ],
    [
        "United States",
        "7/29/2013",
        18.9
    ],
    [
        "United States",
        "7/29/2013",
        20.44
    ],
    [
        "United States",
        "7/30/2013",
        704.76
    ],
    [
        "United States",
        "7/30/2013",
        84.784
    ],
    [
        "United States",
        "7/30/2013",
        27.396
    ],
    [
        "United States",
        "7/30/2013",
        2.214
    ],
    [
        "United States",
        "7/31/2013",
        715.64
    ],
    [
        "United States",
        "7/31/2013",
        1036.624
    ],
    [
        "United States",
        "7/31/2013",
        9.248
    ],
    [
        "United States",
        "7/31/2013",
        9.264
    ],
    [
        "United States",
        "8/1/2013",
        863.128
    ],
    [
        "United States",
        "8/1/2013",
        272.94
    ],
    [
        "United States",
        "8/1/2013",
        635.96
    ],
    [
        "United States",
        "8/1/2013",
        283.14
    ],
    [
        "United States",
        "8/1/2013",
        118.99
    ],
    [
        "United States",
        "8/2/2013",
        1039.728
    ],
    [
        "United States",
        "8/2/2013",
        45.96
    ],
    [
        "United States",
        "8/2/2013",
        19.312
    ],
    [
        "United States",
        "8/2/2013",
        19.648
    ],
    [
        "United States",
        "8/3/2013",
        333.576
    ],
    [
        "United States",
        "8/3/2013",
        136.464
    ],
    [
        "United States",
        "8/3/2013",
        12.544
    ],
    [
        "United States",
        "8/4/2013",
        167.28
    ],
    [
        "United States",
        "8/4/2013",
        81.54
    ],
    [
        "United States",
        "8/5/2013",
        109.8
    ],
    [
        "United States",
        "8/5/2013",
        35.06
    ],
    [
        "United States",
        "8/5/2013",
        9.82
    ],
    [
        "United States",
        "8/5/2013",
        11.784
    ],
    [
        "United States",
        "8/5/2013",
        3.98
    ],
    [
        "United States",
        "8/5/2013",
        4.13
    ],
    [
        "United States",
        "8/5/2013",
        20.952
    ],
    [
        "United States",
        "8/5/2013",
        302.384
    ],
    [
        "United States",
        "8/6/2013",
        197.05
    ],
    [
        "United States",
        "8/7/2013",
        211.168
    ],
    [
        "United States",
        "8/7/2013",
        70.88
    ],
    [
        "United States",
        "8/7/2013",
        38.34
    ],
    [
        "United States",
        "8/8/2013",
        179.97
    ],
    [
        "United States",
        "8/9/2013",
        513.024
    ],
    [
        "United States",
        "8/9/2013",
        487.92
    ],
    [
        "United States",
        "8/9/2013",
        53.952
    ],
    [
        "United States",
        "8/9/2013",
        23.34
    ],
    [
        "United States",
        "8/9/2013",
        10.56
    ],
    [
        "United States",
        "8/9/2013",
        15.24
    ],
    [
        "United States",
        "8/9/2013",
        11.168
    ],
    [
        "United States",
        "8/10/2013",
        569.536
    ],
    [
        "United States",
        "8/10/2013",
        30.816
    ],
    [
        "United States",
        "8/10/2013",
        44.784
    ],
    [
        "United States",
        "8/10/2013",
        11.88
    ],
    [
        "United States",
        "8/10/2013",
        4.338
    ],
    [
        "United States",
        "8/12/2013",
        77.56
    ],
    [
        "United States",
        "8/12/2013",
        41.86
    ],
    [
        "United States",
        "8/12/2013",
        32.4
    ],
    [
        "United States",
        "8/13/2013",
        1399.944
    ],
    [
        "United States",
        "8/13/2013",
        1591.02
    ],
    [
        "United States",
        "8/13/2013",
        562.2925
    ],
    [
        "United States",
        "8/13/2013",
        209.148
    ],
    [
        "United States",
        "8/13/2013",
        145.764
    ],
    [
        "United States",
        "8/13/2013",
        37.312
    ],
    [
        "United States",
        "8/13/2013",
        6.48
    ],
    [
        "United States",
        "8/14/2013",
        103.6
    ],
    [
        "United States",
        "8/14/2013",
        71.98
    ],
    [
        "United States",
        "8/14/2013",
        185.376
    ],
    [
        "United States",
        "8/14/2013",
        58.924
    ],
    [
        "United States",
        "8/14/2013",
        241.96
    ],
    [
        "United States",
        "8/14/2013",
        22.32
    ],
    [
        "United States",
        "8/14/2013",
        17.34
    ],
    [
        "United States",
        "8/14/2013",
        10.272
    ],
    [
        "United States",
        "8/14/2013",
        8.52
    ],
    [
        "United States",
        "8/14/2013",
        11.232
    ],
    [
        "United States",
        "8/15/2013",
        259.896
    ],
    [
        "United States",
        "8/15/2013",
        247.188
    ],
    [
        "United States",
        "8/15/2013",
        279.96
    ],
    [
        "United States",
        "8/15/2013",
        105.552
    ],
    [
        "United States",
        "8/15/2013",
        15.552
    ],
    [
        "United States",
        "8/15/2013",
        15.54
    ],
    [
        "United States",
        "8/16/2013",
        705.544
    ],
    [
        "United States",
        "8/16/2013",
        225.296
    ],
    [
        "United States",
        "8/16/2013",
        312.03
    ],
    [
        "United States",
        "8/16/2013",
        165.6
    ],
    [
        "United States",
        "8/16/2013",
        122.328
    ],
    [
        "United States",
        "8/16/2013",
        37.52
    ],
    [
        "United States",
        "8/16/2013",
        17.94
    ],
    [
        "United States",
        "8/16/2013",
        71.976
    ],
    [
        "United States",
        "8/16/2013",
        18.882
    ],
    [
        "United States",
        "8/16/2013",
        3.15
    ],
    [
        "United States",
        "8/17/2013",
        161.28
    ],
    [
        "United States",
        "8/17/2013",
        32.4
    ],
    [
        "United States",
        "8/17/2013",
        10.86
    ],
    [
        "United States",
        "8/18/2013",
        15.712
    ],
    [
        "United States",
        "8/19/2013",
        83.84
    ],
    [
        "United States",
        "8/19/2013",
        355.32
    ],
    [
        "United States",
        "8/19/2013",
        39.99
    ],
    [
        "United States",
        "8/19/2013",
        9.552
    ],
    [
        "United States",
        "8/19/2013",
        5.344
    ],
    [
        "United States",
        "8/19/2013",
        2.068
    ],
    [
        "United States",
        "8/20/2013",
        146.688
    ],
    [
        "United States",
        "8/20/2013",
        276.784
    ],
    [
        "United States",
        "8/20/2013",
        25.32
    ],
    [
        "United States",
        "8/21/2013",
        14.78
    ],
    [
        "United States",
        "8/22/2013",
        2887.056
    ],
    [
        "United States",
        "8/22/2013",
        815.292
    ],
    [
        "United States",
        "8/22/2013",
        573.174
    ],
    [
        "United States",
        "8/22/2013",
        254.97
    ],
    [
        "United States",
        "8/22/2013",
        91.96
    ],
    [
        "United States",
        "8/22/2013",
        33.44
    ],
    [
        "United States",
        "8/22/2013",
        31.984
    ],
    [
        "United States",
        "8/22/2013",
        47.52
    ],
    [
        "United States",
        "8/22/2013",
        28.048
    ],
    [
        "United States",
        "8/22/2013",
        12.96
    ],
    [
        "United States",
        "8/22/2013",
        12.672
    ],
    [
        "United States",
        "8/22/2013",
        9.216
    ],
    [
        "United States",
        "8/23/2013",
        98.328
    ],
    [
        "United States",
        "8/23/2013",
        134.288
    ],
    [
        "United States",
        "8/23/2013",
        113.552
    ],
    [
        "United States",
        "8/23/2013",
        26.352
    ],
    [
        "United States",
        "8/23/2013",
        5.76
    ],
    [
        "United States",
        "8/23/2013",
        19.44
    ],
    [
        "United States",
        "8/23/2013",
        3.318
    ],
    [
        "United States",
        "8/23/2013",
        4.312
    ],
    [
        "United States",
        "8/24/2013",
        727.296
    ],
    [
        "United States",
        "8/24/2013",
        837.6
    ],
    [
        "United States",
        "8/24/2013",
        666.4
    ],
    [
        "United States",
        "8/24/2013",
        1040.8
    ],
    [
        "United States",
        "8/24/2013",
        532.704
    ],
    [
        "United States",
        "8/24/2013",
        135.9
    ],
    [
        "United States",
        "8/24/2013",
        22.608
    ],
    [
        "United States",
        "8/24/2013",
        43.1
    ],
    [
        "United States",
        "8/24/2013",
        34.68
    ],
    [
        "United States",
        "8/24/2013",
        29.34
    ],
    [
        "United States",
        "8/24/2013",
        21.3
    ],
    [
        "United States",
        "8/24/2013",
        37.59
    ],
    [
        "United States",
        "8/24/2013",
        25.2
    ],
    [
        "United States",
        "8/24/2013",
        15.88
    ],
    [
        "United States",
        "8/24/2013",
        14.97
    ],
    [
        "United States",
        "8/24/2013",
        1.98
    ],
    [
        "United States",
        "8/27/2013",
        1603.136
    ],
    [
        "United States",
        "8/27/2013",
        1024.716
    ],
    [
        "United States",
        "8/27/2013",
        447.84
    ],
    [
        "United States",
        "8/27/2013",
        186.54
    ],
    [
        "United States",
        "8/27/2013",
        479.97
    ],
    [
        "United States",
        "8/27/2013",
        146.688
    ],
    [
        "United States",
        "8/27/2013",
        209.97
    ],
    [
        "United States",
        "8/27/2013",
        159.984
    ],
    [
        "United States",
        "8/27/2013",
        249.95
    ],
    [
        "United States",
        "8/27/2013",
        154.9
    ],
    [
        "United States",
        "8/27/2013",
        31.008
    ],
    [
        "United States",
        "8/27/2013",
        47.984
    ],
    [
        "United States",
        "8/27/2013",
        8.26
    ],
    [
        "United States",
        "8/27/2013",
        47.97
    ],
    [
        "United States",
        "8/27/2013",
        33
    ],
    [
        "United States",
        "8/27/2013",
        10.23
    ],
    [
        "United States",
        "8/27/2013",
        5.472
    ],
    [
        "United States",
        "8/27/2013",
        6.48
    ],
    [
        "United States",
        "8/27/2013",
        11.56
    ],
    [
        "United States",
        "8/27/2013",
        8.64
    ],
    [
        "United States",
        "8/28/2013",
        244.615
    ],
    [
        "United States",
        "8/28/2013",
        122.97
    ],
    [
        "United States",
        "8/28/2013",
        79.92
    ],
    [
        "United States",
        "8/28/2013",
        81.54
    ],
    [
        "United States",
        "8/28/2013",
        59.97
    ],
    [
        "United States",
        "8/28/2013",
        51.52
    ],
    [
        "United States",
        "8/28/2013",
        55.168
    ],
    [
        "United States",
        "8/28/2013",
        29
    ],
    [
        "United States",
        "8/28/2013",
        11.68
    ],
    [
        "United States",
        "8/28/2013",
        9.216
    ],
    [
        "United States",
        "8/28/2013",
        14.16
    ],
    [
        "United States",
        "8/28/2013",
        4.624
    ],
    [
        "United States",
        "8/28/2013",
        3.528
    ],
    [
        "United States",
        "8/29/2013",
        156.3728
    ],
    [
        "United States",
        "8/29/2013",
        108.576
    ],
    [
        "United States",
        "8/29/2013",
        18.432
    ],
    [
        "United States",
        "8/29/2013",
        13.14
    ],
    [
        "United States",
        "8/29/2013",
        15.48
    ],
    [
        "United States",
        "8/29/2013",
        10.024
    ],
    [
        "United States",
        "8/30/2013",
        241.92
    ],
    [
        "United States",
        "8/30/2013",
        163.88
    ],
    [
        "United States",
        "8/30/2013",
        95.976
    ],
    [
        "United States",
        "8/30/2013",
        64.624
    ],
    [
        "United States",
        "8/30/2013",
        27.93
    ],
    [
        "United States",
        "8/30/2013",
        22
    ],
    [
        "United States",
        "8/30/2013",
        10.584
    ],
    [
        "United States",
        "8/30/2013",
        1.788
    ],
    [
        "United States",
        "8/30/2013",
        3.486
    ],
    [
        "United States",
        "8/31/2013",
        786.744
    ],
    [
        "United States",
        "8/31/2013",
        290.898
    ],
    [
        "United States",
        "8/31/2013",
        100.24
    ],
    [
        "United States",
        "8/31/2013",
        339.96
    ],
    [
        "United States",
        "8/31/2013",
        54.224
    ],
    [
        "United States",
        "8/31/2013",
        37.764
    ],
    [
        "United States",
        "8/31/2013",
        47.04
    ],
    [
        "United States",
        "9/1/2013",
        23.968
    ],
    [
        "United States",
        "9/2/2013",
        4355.168
    ],
    [
        "United States",
        "9/2/2013",
        468.9
    ],
    [
        "United States",
        "9/2/2013",
        191.82
    ],
    [
        "United States",
        "9/2/2013",
        376.74
    ],
    [
        "United States",
        "9/2/2013",
        24.56
    ],
    [
        "United States",
        "9/2/2013",
        49.12
    ],
    [
        "United States",
        "9/2/2013",
        72.48
    ],
    [
        "United States",
        "9/2/2013",
        26.4
    ],
    [
        "United States",
        "9/2/2013",
        24.1
    ],
    [
        "United States",
        "9/2/2013",
        21.88
    ],
    [
        "United States",
        "9/2/2013",
        29.52
    ],
    [
        "United States",
        "9/2/2013",
        30.48
    ],
    [
        "United States",
        "9/2/2013",
        23.988
    ],
    [
        "United States",
        "9/2/2013",
        12.78
    ],
    [
        "United States",
        "9/2/2013",
        11.96
    ],
    [
        "United States",
        "9/2/2013",
        10.95
    ],
    [
        "United States",
        "9/2/2013",
        8.78
    ],
    [
        "United States",
        "9/2/2013",
        3.048
    ],
    [
        "United States",
        "9/2/2013",
        16.688
    ],
    [
        "United States",
        "9/2/2013",
        6.79
    ],
    [
        "United States",
        "9/3/2013",
        1012.68
    ],
    [
        "United States",
        "9/3/2013",
        1362.9
    ],
    [
        "United States",
        "9/3/2013",
        472.518
    ],
    [
        "United States",
        "9/3/2013",
        999.98
    ],
    [
        "United States",
        "9/3/2013",
        1091.168
    ],
    [
        "United States",
        "9/3/2013",
        309.456
    ],
    [
        "United States",
        "9/3/2013",
        568.728
    ],
    [
        "United States",
        "9/3/2013",
        215.976
    ],
    [
        "United States",
        "9/3/2013",
        159.56
    ],
    [
        "United States",
        "9/3/2013",
        84.272
    ],
    [
        "United States",
        "9/3/2013",
        94.68
    ],
    [
        "United States",
        "9/3/2013",
        75.48
    ],
    [
        "United States",
        "9/3/2013",
        46.53
    ],
    [
        "United States",
        "9/3/2013",
        65.94
    ],
    [
        "United States",
        "9/3/2013",
        39.98
    ],
    [
        "United States",
        "9/3/2013",
        19.456
    ],
    [
        "United States",
        "9/3/2013",
        29.24
    ],
    [
        "United States",
        "9/3/2013",
        35.168
    ],
    [
        "United States",
        "9/3/2013",
        17.22
    ],
    [
        "United States",
        "9/3/2013",
        8.26
    ],
    [
        "United States",
        "9/3/2013",
        18.69
    ],
    [
        "United States",
        "9/3/2013",
        22.911
    ],
    [
        "United States",
        "9/3/2013",
        23.67
    ],
    [
        "United States",
        "9/3/2013",
        8.608
    ],
    [
        "United States",
        "9/3/2013",
        1.81
    ],
    [
        "United States",
        "9/3/2013",
        7.312
    ],
    [
        "United States",
        "9/4/2013",
        1141.47
    ],
    [
        "United States",
        "9/4/2013",
        280.782
    ],
    [
        "United States",
        "9/4/2013",
        87.28
    ],
    [
        "United States",
        "9/4/2013",
        344.94
    ],
    [
        "United States",
        "9/4/2013",
        198.744
    ],
    [
        "United States",
        "9/4/2013",
        48.16
    ],
    [
        "United States",
        "9/4/2013",
        83.952
    ],
    [
        "United States",
        "9/4/2013",
        30.96
    ],
    [
        "United States",
        "9/4/2013",
        54.5
    ],
    [
        "United States",
        "9/4/2013",
        58.48
    ],
    [
        "United States",
        "9/4/2013",
        14.76
    ],
    [
        "United States",
        "9/4/2013",
        12.76
    ],
    [
        "United States",
        "9/4/2013",
        8.808
    ],
    [
        "United States",
        "9/5/2013",
        2799.96
    ],
    [
        "United States",
        "9/5/2013",
        535.41
    ],
    [
        "United States",
        "9/5/2013",
        113.94
    ],
    [
        "United States",
        "9/5/2013",
        279.95
    ],
    [
        "United States",
        "9/5/2013",
        87.168
    ],
    [
        "United States",
        "9/5/2013",
        129.92
    ],
    [
        "United States",
        "9/5/2013",
        63.94
    ],
    [
        "United States",
        "9/5/2013",
        31.744
    ],
    [
        "United States",
        "9/5/2013",
        239.5
    ],
    [
        "United States",
        "9/5/2013",
        60.6
    ],
    [
        "United States",
        "9/5/2013",
        42.6
    ],
    [
        "United States",
        "9/5/2013",
        12.192
    ],
    [
        "United States",
        "9/5/2013",
        24.27
    ],
    [
        "United States",
        "9/5/2013",
        22.72
    ],
    [
        "United States",
        "9/5/2013",
        62.376
    ],
    [
        "United States",
        "9/5/2013",
        16.56
    ],
    [
        "United States",
        "9/5/2013",
        5.28
    ],
    [
        "United States",
        "9/5/2013",
        3.912
    ],
    [
        "United States",
        "9/6/2013",
        1652.94
    ],
    [
        "United States",
        "9/6/2013",
        887.271
    ],
    [
        "United States",
        "9/6/2013",
        108.784
    ],
    [
        "United States",
        "9/6/2013",
        278.4
    ],
    [
        "United States",
        "9/6/2013",
        86.058
    ],
    [
        "United States",
        "9/6/2013",
        107.94
    ],
    [
        "United States",
        "9/6/2013",
        347.802
    ],
    [
        "United States",
        "9/6/2013",
        194.94
    ],
    [
        "United States",
        "9/6/2013",
        242.94
    ],
    [
        "United States",
        "9/6/2013",
        82.8
    ],
    [
        "United States",
        "9/6/2013",
        116
    ],
    [
        "United States",
        "9/6/2013",
        192.16
    ],
    [
        "United States",
        "9/6/2013",
        93.456
    ],
    [
        "United States",
        "9/6/2013",
        96.08
    ],
    [
        "United States",
        "9/6/2013",
        70.95
    ],
    [
        "United States",
        "9/6/2013",
        43.6
    ],
    [
        "United States",
        "9/6/2013",
        91.36
    ],
    [
        "United States",
        "9/6/2013",
        58.248
    ],
    [
        "United States",
        "9/6/2013",
        62.79
    ],
    [
        "United States",
        "9/6/2013",
        85.246
    ],
    [
        "United States",
        "9/6/2013",
        23.472
    ],
    [
        "United States",
        "9/6/2013",
        25.92
    ],
    [
        "United States",
        "9/6/2013",
        25.06
    ],
    [
        "United States",
        "9/6/2013",
        21.204
    ],
    [
        "United States",
        "9/6/2013",
        15.808
    ],
    [
        "United States",
        "9/6/2013",
        10.272
    ],
    [
        "United States",
        "9/6/2013",
        71.246
    ],
    [
        "United States",
        "9/6/2013",
        28.44
    ],
    [
        "United States",
        "9/6/2013",
        4.36
    ],
    [
        "United States",
        "9/6/2013",
        11.68
    ],
    [
        "United States",
        "9/6/2013",
        22.05
    ],
    [
        "United States",
        "9/6/2013",
        10.368
    ],
    [
        "United States",
        "9/6/2013",
        9.555
    ],
    [
        "United States",
        "9/6/2013",
        12.22
    ],
    [
        "United States",
        "9/6/2013",
        8.952
    ],
    [
        "United States",
        "9/6/2013",
        7.872
    ],
    [
        "United States",
        "9/6/2013",
        8.856
    ],
    [
        "United States",
        "9/6/2013",
        9.248
    ],
    [
        "United States",
        "9/7/2013",
        329.584
    ],
    [
        "United States",
        "9/7/2013",
        77.88
    ],
    [
        "United States",
        "9/7/2013",
        95.952
    ],
    [
        "United States",
        "9/7/2013",
        31.86
    ],
    [
        "United States",
        "9/7/2013",
        41.92
    ],
    [
        "United States",
        "9/7/2013",
        722.352
    ],
    [
        "United States",
        "9/7/2013",
        10.784
    ],
    [
        "United States",
        "9/7/2013",
        3.204
    ],
    [
        "United States",
        "9/9/2013",
        2396.2656
    ],
    [
        "United States",
        "9/9/2013",
        601.47
    ],
    [
        "United States",
        "9/9/2013",
        207.48
    ],
    [
        "United States",
        "9/9/2013",
        261.74
    ],
    [
        "United States",
        "9/9/2013",
        131.136
    ],
    [
        "United States",
        "9/9/2013",
        67.136
    ],
    [
        "United States",
        "9/9/2013",
        57.584
    ],
    [
        "United States",
        "9/9/2013",
        35.952
    ],
    [
        "United States",
        "9/9/2013",
        33.024
    ],
    [
        "United States",
        "9/9/2013",
        146.04
    ],
    [
        "United States",
        "9/9/2013",
        173.94
    ],
    [
        "United States",
        "9/9/2013",
        59.96
    ],
    [
        "United States",
        "9/9/2013",
        64.704
    ],
    [
        "United States",
        "9/9/2013",
        70.368
    ],
    [
        "United States",
        "9/9/2013",
        43.13
    ],
    [
        "United States",
        "9/9/2013",
        34.24
    ],
    [
        "United States",
        "9/9/2013",
        35.168
    ],
    [
        "United States",
        "9/9/2013",
        14.76
    ],
    [
        "United States",
        "9/9/2013",
        14.136
    ],
    [
        "United States",
        "9/9/2013",
        14.88
    ],
    [
        "United States",
        "9/9/2013",
        30.87
    ],
    [
        "United States",
        "9/10/2013",
        14.624
    ],
    [
        "United States",
        "9/10/2013",
        55.36
    ],
    [
        "United States",
        "9/10/2013",
        15.008
    ],
    [
        "United States",
        "9/11/2013",
        719.96
    ],
    [
        "United States",
        "9/11/2013",
        519.68
    ],
    [
        "United States",
        "9/11/2013",
        300.93
    ],
    [
        "United States",
        "9/11/2013",
        276.784
    ],
    [
        "United States",
        "9/11/2013",
        81.98
    ],
    [
        "United States",
        "9/11/2013",
        67.56
    ],
    [
        "United States",
        "9/11/2013",
        59.48
    ],
    [
        "United States",
        "9/11/2013",
        39.624
    ],
    [
        "United States",
        "9/11/2013",
        14.256
    ],
    [
        "United States",
        "9/11/2013",
        6.69
    ],
    [
        "United States",
        "9/11/2013",
        7.38
    ],
    [
        "United States",
        "9/12/2013",
        1599.92
    ],
    [
        "United States",
        "9/12/2013",
        728.946
    ],
    [
        "United States",
        "9/12/2013",
        224.75
    ],
    [
        "United States",
        "9/12/2013",
        3347.37
    ],
    [
        "United States",
        "9/12/2013",
        332.94
    ],
    [
        "United States",
        "9/12/2013",
        99.568
    ],
    [
        "United States",
        "9/12/2013",
        39.872
    ],
    [
        "United States",
        "9/12/2013",
        37.52
    ],
    [
        "United States",
        "9/12/2013",
        8.448
    ],
    [
        "United States",
        "9/12/2013",
        22.428
    ],
    [
        "United States",
        "9/12/2013",
        20.736
    ],
    [
        "United States",
        "9/12/2013",
        11.09
    ],
    [
        "United States",
        "9/12/2013",
        9.568
    ],
    [
        "United States",
        "9/12/2013",
        6
    ],
    [
        "United States",
        "9/12/2013",
        7.61
    ],
    [
        "United States",
        "9/12/2013",
        2.912
    ],
    [
        "United States",
        "9/12/2013",
        1.908
    ],
    [
        "United States",
        "9/13/2013",
        1059.12
    ],
    [
        "United States",
        "9/13/2013",
        466.768
    ],
    [
        "United States",
        "9/13/2013",
        146.952
    ],
    [
        "United States",
        "9/13/2013",
        67.9
    ],
    [
        "United States",
        "9/13/2013",
        40.48
    ],
    [
        "United States",
        "9/13/2013",
        68.52
    ],
    [
        "United States",
        "9/13/2013",
        83.136
    ],
    [
        "United States",
        "9/13/2013",
        15.136
    ],
    [
        "United States",
        "9/13/2013",
        20.704
    ],
    [
        "United States",
        "9/13/2013",
        11.34
    ],
    [
        "United States",
        "9/13/2013",
        20.7
    ],
    [
        "United States",
        "9/13/2013",
        6.264
    ],
    [
        "United States",
        "9/13/2013",
        10.47
    ],
    [
        "United States",
        "9/13/2013",
        11.07
    ],
    [
        "United States",
        "9/13/2013",
        15.232
    ],
    [
        "United States",
        "9/14/2013",
        373.08
    ],
    [
        "United States",
        "9/14/2013",
        378
    ],
    [
        "United States",
        "9/14/2013",
        1336.44
    ],
    [
        "United States",
        "9/14/2013",
        149.95
    ],
    [
        "United States",
        "9/14/2013",
        16.9
    ],
    [
        "United States",
        "9/14/2013",
        40.74
    ],
    [
        "United States",
        "9/14/2013",
        17.64
    ],
    [
        "United States",
        "9/14/2013",
        14.4
    ],
    [
        "United States",
        "9/14/2013",
        17.61
    ],
    [
        "United States",
        "9/14/2013",
        29.97
    ],
    [
        "United States",
        "9/15/2013",
        673.568
    ],
    [
        "United States",
        "9/15/2013",
        437.85
    ],
    [
        "United States",
        "9/15/2013",
        25.92
    ],
    [
        "United States",
        "9/16/2013",
        841.568
    ],
    [
        "United States",
        "9/16/2013",
        1128.39
    ],
    [
        "United States",
        "9/16/2013",
        35.4
    ],
    [
        "United States",
        "9/16/2013",
        48.664
    ],
    [
        "United States",
        "9/16/2013",
        21.4
    ],
    [
        "United States",
        "9/16/2013",
        5.344
    ],
    [
        "United States",
        "9/16/2013",
        20.416
    ],
    [
        "United States",
        "9/17/2013",
        273.666
    ],
    [
        "United States",
        "9/17/2013",
        121.78
    ],
    [
        "United States",
        "9/17/2013",
        12.96
    ],
    [
        "United States",
        "9/17/2013",
        17.48
    ],
    [
        "United States",
        "9/18/2013",
        295.4
    ],
    [
        "United States",
        "9/18/2013",
        396
    ],
    [
        "United States",
        "9/18/2013",
        232.4
    ],
    [
        "United States",
        "9/18/2013",
        437.85
    ],
    [
        "United States",
        "9/18/2013",
        191.82
    ],
    [
        "United States",
        "9/18/2013",
        109.48
    ],
    [
        "United States",
        "9/18/2013",
        113.888
    ],
    [
        "United States",
        "9/18/2013",
        105.584
    ],
    [
        "United States",
        "9/18/2013",
        73.584
    ],
    [
        "United States",
        "9/18/2013",
        33.4
    ],
    [
        "United States",
        "9/18/2013",
        20.1
    ],
    [
        "United States",
        "9/18/2013",
        14.82
    ],
    [
        "United States",
        "9/18/2013",
        12.32
    ],
    [
        "United States",
        "9/18/2013",
        6.48
    ],
    [
        "United States",
        "9/19/2013",
        885.528
    ],
    [
        "United States",
        "9/19/2013",
        801.568
    ],
    [
        "United States",
        "9/19/2013",
        900.08
    ],
    [
        "United States",
        "9/19/2013",
        383.438
    ],
    [
        "United States",
        "9/19/2013",
        631.782
    ],
    [
        "United States",
        "9/19/2013",
        239.984
    ],
    [
        "United States",
        "9/19/2013",
        368.91
    ],
    [
        "United States",
        "9/19/2013",
        350.98
    ],
    [
        "United States",
        "9/19/2013",
        99.372
    ],
    [
        "United States",
        "9/19/2013",
        60.72
    ],
    [
        "United States",
        "9/19/2013",
        13.08
    ],
    [
        "United States",
        "9/19/2013",
        5.352
    ],
    [
        "United States",
        "9/19/2013",
        2.672
    ],
    [
        "United States",
        "9/19/2013",
        3
    ],
    [
        "United States",
        "9/19/2013",
        4.616
    ],
    [
        "United States",
        "9/20/2013",
        1606.23
    ],
    [
        "United States",
        "9/20/2013",
        872.32
    ],
    [
        "United States",
        "9/20/2013",
        701.372
    ],
    [
        "United States",
        "9/20/2013",
        159.88
    ],
    [
        "United States",
        "9/20/2013",
        249.95
    ],
    [
        "United States",
        "9/20/2013",
        49.53
    ],
    [
        "United States",
        "9/20/2013",
        69.52
    ],
    [
        "United States",
        "9/20/2013",
        25.632
    ],
    [
        "United States",
        "9/20/2013",
        25.44
    ],
    [
        "United States",
        "9/20/2013",
        17.04
    ],
    [
        "United States",
        "9/20/2013",
        11.952
    ],
    [
        "United States",
        "9/20/2013",
        27.93
    ],
    [
        "United States",
        "9/20/2013",
        8.928
    ],
    [
        "United States",
        "9/20/2013",
        2.308
    ],
    [
        "United States",
        "9/20/2013",
        5.04
    ],
    [
        "United States",
        "9/20/2013",
        6.24
    ],
    [
        "United States",
        "9/21/2013",
        393.25
    ],
    [
        "United States",
        "9/21/2013",
        271.984
    ],
    [
        "United States",
        "9/21/2013",
        163.88
    ],
    [
        "United States",
        "9/21/2013",
        83.7
    ],
    [
        "United States",
        "9/21/2013",
        65.79
    ],
    [
        "United States",
        "9/21/2013",
        48.64
    ],
    [
        "United States",
        "9/21/2013",
        98.392
    ],
    [
        "United States",
        "9/21/2013",
        77.52
    ],
    [
        "United States",
        "9/21/2013",
        11.76
    ],
    [
        "United States",
        "9/21/2013",
        17.088
    ],
    [
        "United States",
        "9/23/2013",
        128.34
    ],
    [
        "United States",
        "9/23/2013",
        63.968
    ],
    [
        "United States",
        "9/23/2013",
        97.98
    ],
    [
        "United States",
        "9/23/2013",
        40.776
    ],
    [
        "United States",
        "9/23/2013",
        63.936
    ],
    [
        "United States",
        "9/23/2013",
        35.56
    ],
    [
        "United States",
        "9/23/2013",
        68.432
    ],
    [
        "United States",
        "9/23/2013",
        16.52
    ],
    [
        "United States",
        "9/23/2013",
        16.56
    ],
    [
        "United States",
        "9/23/2013",
        35.88
    ],
    [
        "United States",
        "9/23/2013",
        18.96
    ],
    [
        "United States",
        "9/23/2013",
        7.506
    ],
    [
        "United States",
        "9/23/2013",
        13.28
    ],
    [
        "United States",
        "9/23/2013",
        7.872
    ],
    [
        "United States",
        "9/24/2013",
        368.97
    ],
    [
        "United States",
        "9/24/2013",
        532.704
    ],
    [
        "United States",
        "9/24/2013",
        184.752
    ],
    [
        "United States",
        "9/24/2013",
        118.25
    ],
    [
        "United States",
        "9/24/2013",
        18.9
    ],
    [
        "United States",
        "9/24/2013",
        13.68
    ],
    [
        "United States",
        "9/24/2013",
        10.528
    ],
    [
        "United States",
        "9/24/2013",
        13.216
    ],
    [
        "United States",
        "9/24/2013",
        4.08
    ],
    [
        "United States",
        "9/24/2013",
        11.952
    ],
    [
        "United States",
        "9/24/2013",
        28
    ],
    [
        "United States",
        "9/24/2013",
        4.912
    ],
    [
        "United States",
        "9/24/2013",
        12.201
    ],
    [
        "United States",
        "9/25/2013",
        442.372
    ],
    [
        "United States",
        "9/25/2013",
        563.24
    ],
    [
        "United States",
        "9/25/2013",
        511.056
    ],
    [
        "United States",
        "9/25/2013",
        304.9
    ],
    [
        "United States",
        "9/25/2013",
        63.2
    ],
    [
        "United States",
        "9/25/2013",
        155.372
    ],
    [
        "United States",
        "9/25/2013",
        127.95
    ],
    [
        "United States",
        "9/25/2013",
        41.7
    ],
    [
        "United States",
        "9/25/2013",
        41.96
    ],
    [
        "United States",
        "9/25/2013",
        21.44
    ],
    [
        "United States",
        "9/25/2013",
        6.48
    ],
    [
        "United States",
        "9/25/2013",
        6.38
    ],
    [
        "United States",
        "9/26/2013",
        499.95
    ],
    [
        "United States",
        "9/26/2013",
        477.666
    ],
    [
        "United States",
        "9/26/2013",
        483.136
    ],
    [
        "United States",
        "9/26/2013",
        331.536
    ],
    [
        "United States",
        "9/26/2013",
        479.976
    ],
    [
        "United States",
        "9/26/2013",
        393.165
    ],
    [
        "United States",
        "9/26/2013",
        201.96
    ],
    [
        "United States",
        "9/26/2013",
        68.64
    ],
    [
        "United States",
        "9/26/2013",
        60.048
    ],
    [
        "United States",
        "9/26/2013",
        286.256
    ],
    [
        "United States",
        "9/26/2013",
        44.736
    ],
    [
        "United States",
        "9/26/2013",
        29.6
    ],
    [
        "United States",
        "9/26/2013",
        24.224
    ],
    [
        "United States",
        "9/26/2013",
        15.936
    ],
    [
        "United States",
        "9/26/2013",
        16.56
    ],
    [
        "United States",
        "9/26/2013",
        10.9
    ],
    [
        "United States",
        "9/26/2013",
        5.022
    ],
    [
        "United States",
        "9/26/2013",
        3.04
    ],
    [
        "United States",
        "9/26/2013",
        4.98
    ],
    [
        "United States",
        "9/26/2013",
        5.76
    ],
    [
        "United States",
        "9/27/2013",
        747.558
    ],
    [
        "United States",
        "9/27/2013",
        424.9575
    ],
    [
        "United States",
        "9/27/2013",
        454.965
    ],
    [
        "United States",
        "9/27/2013",
        431.976
    ],
    [
        "United States",
        "9/27/2013",
        236.88
    ],
    [
        "United States",
        "9/27/2013",
        93.032
    ],
    [
        "United States",
        "9/27/2013",
        100
    ],
    [
        "United States",
        "9/27/2013",
        29.9
    ],
    [
        "United States",
        "9/27/2013",
        51.45
    ],
    [
        "United States",
        "9/27/2013",
        35.4
    ],
    [
        "United States",
        "9/27/2013",
        6.816
    ],
    [
        "United States",
        "9/27/2013",
        29.9
    ],
    [
        "United States",
        "9/27/2013",
        7.83
    ],
    [
        "United States",
        "9/27/2013",
        12.96
    ],
    [
        "United States",
        "9/27/2013",
        8.928
    ],
    [
        "United States",
        "9/27/2013",
        9.99
    ],
    [
        "United States",
        "9/27/2013",
        15.624
    ],
    [
        "United States",
        "9/28/2013",
        1001.584
    ],
    [
        "United States",
        "9/28/2013",
        956.6648
    ],
    [
        "United States",
        "9/28/2013",
        13.89
    ],
    [
        "United States",
        "9/28/2013",
        17.94
    ],
    [
        "United States",
        "9/28/2013",
        2.907
    ],
    [
        "United States",
        "9/29/2013",
        99.136
    ],
    [
        "United States",
        "9/30/2013",
        859.2
    ],
    [
        "United States",
        "9/30/2013",
        209.97
    ],
    [
        "United States",
        "9/30/2013",
        40.88
    ],
    [
        "United States",
        "9/30/2013",
        62.94
    ],
    [
        "United States",
        "9/30/2013",
        25.92
    ],
    [
        "United States",
        "9/30/2013",
        18.97
    ],
    [
        "United States",
        "9/30/2013",
        36.24
    ],
    [
        "United States",
        "9/30/2013",
        10.496
    ],
    [
        "United States",
        "9/30/2013",
        15.936
    ],
    [
        "United States",
        "9/30/2013",
        27.24
    ],
    [
        "United States",
        "10/1/2013",
        523.92
    ],
    [
        "United States",
        "10/1/2013",
        1.964
    ],
    [
        "United States",
        "10/2/2013",
        69.9
    ],
    [
        "United States",
        "10/2/2013",
        330.588
    ],
    [
        "United States",
        "10/2/2013",
        79.512
    ],
    [
        "United States",
        "10/2/2013",
        41.85
    ],
    [
        "United States",
        "10/2/2013",
        30.976
    ],
    [
        "United States",
        "10/2/2013",
        28.352
    ],
    [
        "United States",
        "10/2/2013",
        194.848
    ],
    [
        "United States",
        "10/2/2013",
        5.388
    ],
    [
        "United States",
        "10/3/2013",
        17499.95
    ],
    [
        "United States",
        "10/3/2013",
        735.98
    ],
    [
        "United States",
        "10/3/2013",
        54.792
    ],
    [
        "United States",
        "10/3/2013",
        33.96
    ],
    [
        "United States",
        "10/3/2013",
        32.48
    ],
    [
        "United States",
        "10/3/2013",
        61.44
    ],
    [
        "United States",
        "10/3/2013",
        34.37
    ],
    [
        "United States",
        "10/4/2013",
        915.136
    ],
    [
        "United States",
        "10/4/2013",
        599.292
    ],
    [
        "United States",
        "10/4/2013",
        97.82
    ],
    [
        "United States",
        "10/4/2013",
        38.08
    ],
    [
        "United States",
        "10/4/2013",
        15.648
    ],
    [
        "United States",
        "10/4/2013",
        8.56
    ],
    [
        "United States",
        "10/4/2013",
        6.16
    ],
    [
        "United States",
        "10/5/2013",
        5399.91
    ],
    [
        "United States",
        "10/5/2013",
        239.372
    ],
    [
        "United States",
        "10/5/2013",
        59.752
    ],
    [
        "United States",
        "10/5/2013",
        52.68
    ],
    [
        "United States",
        "10/5/2013",
        30.4
    ],
    [
        "United States",
        "10/5/2013",
        119.1
    ],
    [
        "United States",
        "10/5/2013",
        11.568
    ],
    [
        "United States",
        "10/7/2013",
        703.71
    ],
    [
        "United States",
        "10/7/2013",
        67.96
    ],
    [
        "United States",
        "10/7/2013",
        11.976
    ],
    [
        "United States",
        "10/7/2013",
        17.904
    ],
    [
        "United States",
        "10/7/2013",
        28.85
    ],
    [
        "United States",
        "10/8/2013",
        837.6
    ],
    [
        "United States",
        "10/8/2013",
        93.36
    ],
    [
        "United States",
        "10/8/2013",
        27.264
    ],
    [
        "United States",
        "10/8/2013",
        10.56
    ],
    [
        "United States",
        "10/8/2013",
        4.928
    ],
    [
        "United States",
        "10/9/2013",
        387.72
    ],
    [
        "United States",
        "10/9/2013",
        60.144
    ],
    [
        "United States",
        "10/9/2013",
        51.712
    ],
    [
        "United States",
        "10/9/2013",
        61.96
    ],
    [
        "United States",
        "10/10/2013",
        332.832
    ],
    [
        "United States",
        "10/10/2013",
        169.568
    ],
    [
        "United States",
        "10/10/2013",
        23.976
    ],
    [
        "United States",
        "10/10/2013",
        19.136
    ],
    [
        "United States",
        "10/10/2013",
        1.408
    ],
    [
        "United States",
        "10/11/2013",
        120.784
    ],
    [
        "United States",
        "10/11/2013",
        90.882
    ],
    [
        "United States",
        "10/11/2013",
        14
    ],
    [
        "United States",
        "10/11/2013",
        16.392
    ],
    [
        "United States",
        "10/11/2013",
        20.608
    ],
    [
        "United States",
        "10/11/2013",
        15.992
    ],
    [
        "United States",
        "10/11/2013",
        4.095
    ],
    [
        "United States",
        "10/12/2013",
        27.72
    ],
    [
        "United States",
        "10/12/2013",
        5.344
    ],
    [
        "United States",
        "10/14/2013",
        727.45
    ],
    [
        "United States",
        "10/14/2013",
        191.976
    ],
    [
        "United States",
        "10/14/2013",
        99.87
    ],
    [
        "United States",
        "10/14/2013",
        139.92
    ],
    [
        "United States",
        "10/14/2013",
        34.7
    ],
    [
        "United States",
        "10/14/2013",
        37.94
    ],
    [
        "United States",
        "10/14/2013",
        82.26
    ],
    [
        "United States",
        "10/14/2013",
        76.176
    ],
    [
        "United States",
        "10/14/2013",
        43.12
    ],
    [
        "United States",
        "10/14/2013",
        65.88
    ],
    [
        "United States",
        "10/14/2013",
        24.96
    ],
    [
        "United States",
        "10/14/2013",
        15.872
    ],
    [
        "United States",
        "10/14/2013",
        35.44
    ],
    [
        "United States",
        "10/14/2013",
        24.9
    ],
    [
        "United States",
        "10/14/2013",
        20.04
    ],
    [
        "United States",
        "10/14/2013",
        11.52
    ],
    [
        "United States",
        "10/14/2013",
        8.288
    ],
    [
        "United States",
        "10/14/2013",
        6.286
    ],
    [
        "United States",
        "10/14/2013",
        4.02
    ],
    [
        "United States",
        "10/15/2013",
        1649.75
    ],
    [
        "United States",
        "10/15/2013",
        177
    ],
    [
        "United States",
        "10/15/2013",
        93.024
    ],
    [
        "United States",
        "10/15/2013",
        1091.93
    ],
    [
        "United States",
        "10/15/2013",
        102.592
    ],
    [
        "United States",
        "10/15/2013",
        111.96
    ],
    [
        "United States",
        "10/15/2013",
        35.008
    ],
    [
        "United States",
        "10/15/2013",
        22.704
    ],
    [
        "United States",
        "10/15/2013",
        39.152
    ],
    [
        "United States",
        "10/15/2013",
        12.768
    ],
    [
        "United States",
        "10/16/2013",
        868.59
    ],
    [
        "United States",
        "10/16/2013",
        121.6
    ],
    [
        "United States",
        "10/16/2013",
        232.96
    ],
    [
        "United States",
        "10/16/2013",
        60.12
    ],
    [
        "United States",
        "10/16/2013",
        66.54
    ],
    [
        "United States",
        "10/16/2013",
        45.68
    ],
    [
        "United States",
        "10/16/2013",
        41.72
    ],
    [
        "United States",
        "10/16/2013",
        43.26
    ],
    [
        "United States",
        "10/16/2013",
        29.46
    ],
    [
        "United States",
        "10/16/2013",
        20.16
    ],
    [
        "United States",
        "10/16/2013",
        71.6
    ],
    [
        "United States",
        "10/16/2013",
        12.96
    ],
    [
        "United States",
        "10/16/2013",
        5.5
    ],
    [
        "United States",
        "10/17/2013",
        142.182
    ],
    [
        "United States",
        "10/18/2013",
        1927.59
    ],
    [
        "United States",
        "10/18/2013",
        315.98
    ],
    [
        "United States",
        "10/18/2013",
        449.97
    ],
    [
        "United States",
        "10/18/2013",
        120.98
    ],
    [
        "United States",
        "10/18/2013",
        120.666
    ],
    [
        "United States",
        "10/18/2013",
        18.16
    ],
    [
        "United States",
        "10/19/2013",
        307.92
    ],
    [
        "United States",
        "10/21/2013",
        387.136
    ],
    [
        "United States",
        "10/21/2013",
        191.98
    ],
    [
        "United States",
        "10/21/2013",
        125.7
    ],
    [
        "United States",
        "10/21/2013",
        61.1
    ],
    [
        "United States",
        "10/21/2013",
        56.686
    ],
    [
        "United States",
        "10/21/2013",
        51.016
    ],
    [
        "United States",
        "10/21/2013",
        25.248
    ],
    [
        "United States",
        "10/21/2013",
        20.86
    ],
    [
        "United States",
        "10/21/2013",
        7.152
    ],
    [
        "United States",
        "10/21/2013",
        19.296
    ],
    [
        "United States",
        "10/22/2013",
        4535.976
    ],
    [
        "United States",
        "10/22/2013",
        1043.92
    ],
    [
        "United States",
        "10/22/2013",
        661.176
    ],
    [
        "United States",
        "10/22/2013",
        340.92
    ],
    [
        "United States",
        "10/22/2013",
        104.79
    ],
    [
        "United States",
        "10/22/2013",
        242.136
    ],
    [
        "United States",
        "10/22/2013",
        98.16
    ],
    [
        "United States",
        "10/22/2013",
        235.152
    ],
    [
        "United States",
        "10/22/2013",
        113.22
    ],
    [
        "United States",
        "10/22/2013",
        106.08
    ],
    [
        "United States",
        "10/22/2013",
        154.44
    ],
    [
        "United States",
        "10/22/2013",
        23.2
    ],
    [
        "United States",
        "10/22/2013",
        111.672
    ],
    [
        "United States",
        "10/22/2013",
        35.88
    ],
    [
        "United States",
        "10/22/2013",
        45.568
    ],
    [
        "United States",
        "10/22/2013",
        22.92
    ],
    [
        "United States",
        "10/22/2013",
        7.36
    ],
    [
        "United States",
        "10/22/2013",
        28.752
    ],
    [
        "United States",
        "10/22/2013",
        19.96
    ],
    [
        "United States",
        "10/22/2013",
        7.92
    ],
    [
        "United States",
        "10/22/2013",
        12.39
    ],
    [
        "United States",
        "10/23/2013",
        101.94
    ],
    [
        "United States",
        "10/23/2013",
        31.4
    ],
    [
        "United States",
        "10/23/2013",
        39.92
    ],
    [
        "United States",
        "10/23/2013",
        6.68
    ],
    [
        "United States",
        "10/23/2013",
        8.34
    ],
    [
        "United States",
        "10/24/2013",
        379.4
    ],
    [
        "United States",
        "10/24/2013",
        54.816
    ],
    [
        "United States",
        "10/24/2013",
        16.156
    ],
    [
        "United States",
        "10/24/2013",
        17.05
    ],
    [
        "United States",
        "10/25/2013",
        199.99
    ],
    [
        "United States",
        "10/25/2013",
        450
    ],
    [
        "United States",
        "10/25/2013",
        239.976
    ],
    [
        "United States",
        "10/25/2013",
        359.98
    ],
    [
        "United States",
        "10/25/2013",
        100
    ],
    [
        "United States",
        "10/25/2013",
        15.552
    ],
    [
        "United States",
        "10/26/2013",
        783.96
    ],
    [
        "United States",
        "10/28/2013",
        427.644
    ],
    [
        "United States",
        "10/28/2013",
        290.98
    ],
    [
        "United States",
        "10/28/2013",
        67.136
    ],
    [
        "United States",
        "10/28/2013",
        43.92
    ],
    [
        "United States",
        "10/28/2013",
        40.2
    ],
    [
        "United States",
        "10/28/2013",
        25.032
    ],
    [
        "United States",
        "10/28/2013",
        33.48
    ],
    [
        "United States",
        "10/28/2013",
        40.67
    ],
    [
        "United States",
        "10/28/2013",
        9.728
    ],
    [
        "United States",
        "10/29/2013",
        756.8
    ],
    [
        "United States",
        "10/29/2013",
        1082.48
    ],
    [
        "United States",
        "10/29/2013",
        302.376
    ],
    [
        "United States",
        "10/29/2013",
        165.048
    ],
    [
        "United States",
        "10/29/2013",
        63.968
    ],
    [
        "United States",
        "10/29/2013",
        47.952
    ],
    [
        "United States",
        "10/29/2013",
        49.536
    ],
    [
        "United States",
        "10/29/2013",
        93.06
    ],
    [
        "United States",
        "10/29/2013",
        50.96
    ],
    [
        "United States",
        "10/29/2013",
        37.425
    ],
    [
        "United States",
        "10/29/2013",
        56.91
    ],
    [
        "United States",
        "10/29/2013",
        38.19
    ],
    [
        "United States",
        "10/29/2013",
        77.6
    ],
    [
        "United States",
        "10/29/2013",
        32.4
    ],
    [
        "United States",
        "10/29/2013",
        12.42
    ],
    [
        "United States",
        "10/29/2013",
        17.616
    ],
    [
        "United States",
        "10/29/2013",
        14.28
    ],
    [
        "United States",
        "10/30/2013",
        67
    ],
    [
        "United States",
        "10/30/2013",
        11.744
    ],
    [
        "United States",
        "10/30/2013",
        40.74
    ],
    [
        "United States",
        "10/30/2013",
        11.67
    ],
    [
        "United States",
        "10/31/2013",
        114.95
    ],
    [
        "United States",
        "10/31/2013",
        28.752
    ],
    [
        "United States",
        "10/31/2013",
        11.68
    ],
    [
        "United States",
        "10/31/2013",
        3.62
    ],
    [
        "United States",
        "11/1/2013",
        1403.92
    ],
    [
        "United States",
        "11/1/2013",
        1085.42
    ],
    [
        "United States",
        "11/1/2013",
        492.835
    ],
    [
        "United States",
        "11/1/2013",
        332.94
    ],
    [
        "United States",
        "11/1/2013",
        368.97
    ],
    [
        "United States",
        "11/1/2013",
        32.064
    ],
    [
        "United States",
        "11/1/2013",
        21.96
    ],
    [
        "United States",
        "11/1/2013",
        12.39
    ],
    [
        "United States",
        "11/2/2013",
        251.79
    ],
    [
        "United States",
        "11/2/2013",
        111.672
    ],
    [
        "United States",
        "11/2/2013",
        68.112
    ],
    [
        "United States",
        "11/2/2013",
        21.8
    ],
    [
        "United States",
        "11/4/2013",
        1101.48
    ],
    [
        "United States",
        "11/4/2013",
        842.94
    ],
    [
        "United States",
        "11/4/2013",
        217.584
    ],
    [
        "United States",
        "11/4/2013",
        179.991
    ],
    [
        "United States",
        "11/4/2013",
        82.95
    ],
    [
        "United States",
        "11/4/2013",
        470.155
    ],
    [
        "United States",
        "11/4/2013",
        314.55
    ],
    [
        "United States",
        "11/4/2013",
        87.71
    ],
    [
        "United States",
        "11/4/2013",
        75.96
    ],
    [
        "United States",
        "11/4/2013",
        116.28
    ],
    [
        "United States",
        "11/4/2013",
        72
    ],
    [
        "United States",
        "11/4/2013",
        43.584
    ],
    [
        "United States",
        "11/4/2013",
        43.32
    ],
    [
        "United States",
        "11/4/2013",
        24.1
    ],
    [
        "United States",
        "11/4/2013",
        20
    ],
    [
        "United States",
        "11/4/2013",
        27.24
    ],
    [
        "United States",
        "11/4/2013",
        15.26
    ],
    [
        "United States",
        "11/4/2013",
        19.44
    ],
    [
        "United States",
        "11/4/2013",
        8.75
    ],
    [
        "United States",
        "11/4/2013",
        7.98
    ],
    [
        "United States",
        "11/4/2013",
        8.82
    ],
    [
        "United States",
        "11/4/2013",
        4.158
    ],
    [
        "United States",
        "11/4/2013",
        9.248
    ],
    [
        "United States",
        "11/4/2013",
        9.296
    ],
    [
        "United States",
        "11/5/2013",
        876.3
    ],
    [
        "United States",
        "11/5/2013",
        192.8
    ],
    [
        "United States",
        "11/5/2013",
        686.4
    ],
    [
        "United States",
        "11/5/2013",
        629.184
    ],
    [
        "United States",
        "11/5/2013",
        650.352
    ],
    [
        "United States",
        "11/5/2013",
        209.88
    ],
    [
        "United States",
        "11/5/2013",
        185.376
    ],
    [
        "United States",
        "11/5/2013",
        45.248
    ],
    [
        "United States",
        "11/5/2013",
        38.88
    ],
    [
        "United States",
        "11/5/2013",
        38.29
    ],
    [
        "United States",
        "11/5/2013",
        47.952
    ],
    [
        "United States",
        "11/5/2013",
        50.496
    ],
    [
        "United States",
        "11/5/2013",
        104.784
    ],
    [
        "United States",
        "11/5/2013",
        66.112
    ],
    [
        "United States",
        "11/5/2013",
        17.584
    ],
    [
        "United States",
        "11/5/2013",
        11.376
    ],
    [
        "United States",
        "11/5/2013",
        15.176
    ],
    [
        "United States",
        "11/5/2013",
        7.712
    ],
    [
        "United States",
        "11/5/2013",
        10.74
    ],
    [
        "United States",
        "11/5/2013",
        4.176
    ],
    [
        "United States",
        "11/6/2013",
        863.128
    ],
    [
        "United States",
        "11/6/2013",
        756.8
    ],
    [
        "United States",
        "11/6/2013",
        956.6648
    ],
    [
        "United States",
        "11/6/2013",
        479.72
    ],
    [
        "United States",
        "11/6/2013",
        273.96
    ],
    [
        "United States",
        "11/6/2013",
        89.97
    ],
    [
        "United States",
        "11/6/2013",
        104.9
    ],
    [
        "United States",
        "11/6/2013",
        72
    ],
    [
        "United States",
        "11/6/2013",
        113.888
    ],
    [
        "United States",
        "11/6/2013",
        53.248
    ],
    [
        "United States",
        "11/6/2013",
        158.13
    ],
    [
        "United States",
        "11/6/2013",
        171.96
    ],
    [
        "United States",
        "11/6/2013",
        39.68
    ],
    [
        "United States",
        "11/6/2013",
        51.75
    ],
    [
        "United States",
        "11/6/2013",
        29.12
    ],
    [
        "United States",
        "11/6/2013",
        11.84
    ],
    [
        "United States",
        "11/6/2013",
        12.588
    ],
    [
        "United States",
        "11/6/2013",
        23.988
    ],
    [
        "United States",
        "11/6/2013",
        3.564
    ],
    [
        "United States",
        "11/7/2013",
        207.984
    ],
    [
        "United States",
        "11/7/2013",
        88.768
    ],
    [
        "United States",
        "11/7/2013",
        238.56
    ],
    [
        "United States",
        "11/7/2013",
        35.568
    ],
    [
        "United States",
        "11/7/2013",
        36.112
    ],
    [
        "United States",
        "11/7/2013",
        81.424
    ],
    [
        "United States",
        "11/7/2013",
        84.84
    ],
    [
        "United States",
        "11/8/2013",
        1603.136
    ],
    [
        "United States",
        "11/8/2013",
        359.97
    ],
    [
        "United States",
        "11/8/2013",
        479.97
    ],
    [
        "United States",
        "11/8/2013",
        263.96
    ],
    [
        "United States",
        "11/8/2013",
        276.784
    ],
    [
        "United States",
        "11/8/2013",
        314.088
    ],
    [
        "United States",
        "11/8/2013",
        119.976
    ],
    [
        "United States",
        "11/8/2013",
        116.82
    ],
    [
        "United States",
        "11/8/2013",
        26.976
    ],
    [
        "United States",
        "11/8/2013",
        57.584
    ],
    [
        "United States",
        "11/8/2013",
        27.68
    ],
    [
        "United States",
        "11/8/2013",
        44.46
    ],
    [
        "United States",
        "11/8/2013",
        14.96
    ],
    [
        "United States",
        "11/8/2013",
        37.44
    ],
    [
        "United States",
        "11/8/2013",
        12.96
    ],
    [
        "United States",
        "11/8/2013",
        14.62
    ],
    [
        "United States",
        "11/8/2013",
        11.36
    ],
    [
        "United States",
        "11/8/2013",
        14.82
    ],
    [
        "United States",
        "11/8/2013",
        12.9
    ],
    [
        "United States",
        "11/9/2013",
        731.94
    ],
    [
        "United States",
        "11/9/2013",
        261.96
    ],
    [
        "United States",
        "11/10/2013",
        479.97
    ],
    [
        "United States",
        "11/11/2013",
        720.76
    ],
    [
        "United States",
        "11/11/2013",
        467.46
    ],
    [
        "United States",
        "11/11/2013",
        155.82
    ],
    [
        "United States",
        "11/11/2013",
        881.93
    ],
    [
        "United States",
        "11/11/2013",
        221.98
    ],
    [
        "United States",
        "11/11/2013",
        341.96
    ],
    [
        "United States",
        "11/11/2013",
        334.88
    ],
    [
        "United States",
        "11/11/2013",
        279.944
    ],
    [
        "United States",
        "11/11/2013",
        129.92
    ],
    [
        "United States",
        "11/11/2013",
        67.71
    ],
    [
        "United States",
        "11/11/2013",
        178.92
    ],
    [
        "United States",
        "11/11/2013",
        89.568
    ],
    [
        "United States",
        "11/11/2013",
        61.4
    ],
    [
        "United States",
        "11/11/2013",
        70.008
    ],
    [
        "United States",
        "11/11/2013",
        31.104
    ],
    [
        "United States",
        "11/11/2013",
        29.74
    ],
    [
        "United States",
        "11/11/2013",
        81.96
    ],
    [
        "United States",
        "11/11/2013",
        148.288
    ],
    [
        "United States",
        "11/11/2013",
        69.888
    ],
    [
        "United States",
        "11/11/2013",
        49.848
    ],
    [
        "United States",
        "11/11/2013",
        41.86
    ],
    [
        "United States",
        "11/11/2013",
        37.3
    ],
    [
        "United States",
        "11/11/2013",
        38.976
    ],
    [
        "United States",
        "11/11/2013",
        32.4
    ],
    [
        "United States",
        "11/11/2013",
        41.958
    ],
    [
        "United States",
        "11/11/2013",
        13.216
    ],
    [
        "United States",
        "11/11/2013",
        14.7
    ],
    [
        "United States",
        "11/11/2013",
        22.248
    ],
    [
        "United States",
        "11/11/2013",
        9.98
    ],
    [
        "United States",
        "11/11/2013",
        20.368
    ],
    [
        "United States",
        "11/11/2013",
        14.72
    ],
    [
        "United States",
        "11/11/2013",
        9.216
    ],
    [
        "United States",
        "11/11/2013",
        5.184
    ],
    [
        "United States",
        "11/11/2013",
        4.624
    ],
    [
        "United States",
        "11/11/2013",
        3.64
    ],
    [
        "United States",
        "11/12/2013",
        2678.94
    ],
    [
        "United States",
        "11/12/2013",
        451.152
    ],
    [
        "United States",
        "11/12/2013",
        671.544
    ],
    [
        "United States",
        "11/12/2013",
        257.98
    ],
    [
        "United States",
        "11/12/2013",
        92.94
    ],
    [
        "United States",
        "11/12/2013",
        83.36
    ],
    [
        "United States",
        "11/12/2013",
        95.968
    ],
    [
        "United States",
        "11/12/2013",
        59.97
    ],
    [
        "United States",
        "11/12/2013",
        55.008
    ],
    [
        "United States",
        "11/12/2013",
        245.646
    ],
    [
        "United States",
        "11/12/2013",
        41.96
    ],
    [
        "United States",
        "11/12/2013",
        35.232
    ],
    [
        "United States",
        "11/12/2013",
        47.992
    ],
    [
        "United States",
        "11/12/2013",
        31.504
    ],
    [
        "United States",
        "11/12/2013",
        28.14
    ],
    [
        "United States",
        "11/12/2013",
        36
    ],
    [
        "United States",
        "11/12/2013",
        6.96
    ],
    [
        "United States",
        "11/12/2013",
        9.888
    ],
    [
        "United States",
        "11/12/2013",
        14.112
    ],
    [
        "United States",
        "11/13/2013",
        674.352
    ],
    [
        "United States",
        "11/13/2013",
        1537.074
    ],
    [
        "United States",
        "11/13/2013",
        1474.802
    ],
    [
        "United States",
        "11/13/2013",
        287.52
    ],
    [
        "United States",
        "11/13/2013",
        449.372
    ],
    [
        "United States",
        "11/13/2013",
        110.096
    ],
    [
        "United States",
        "11/13/2013",
        22.752
    ],
    [
        "United States",
        "11/13/2013",
        37.68
    ],
    [
        "United States",
        "11/13/2013",
        20.58
    ],
    [
        "United States",
        "11/13/2013",
        31.984
    ],
    [
        "United States",
        "11/13/2013",
        19.98
    ],
    [
        "United States",
        "11/13/2013",
        16.752
    ],
    [
        "United States",
        "11/13/2013",
        17.38
    ],
    [
        "United States",
        "11/13/2013",
        203.976
    ],
    [
        "United States",
        "11/13/2013",
        4.368
    ],
    [
        "United States",
        "11/13/2013",
        6.27
    ],
    [
        "United States",
        "11/14/2013",
        2279.96
    ],
    [
        "United States",
        "11/14/2013",
        217.056
    ],
    [
        "United States",
        "11/14/2013",
        140.75
    ],
    [
        "United States",
        "11/14/2013",
        52.136
    ],
    [
        "United States",
        "11/14/2013",
        77.55
    ],
    [
        "United States",
        "11/14/2013",
        36.63
    ],
    [
        "United States",
        "11/14/2013",
        30.36
    ],
    [
        "United States",
        "11/14/2013",
        44.02
    ],
    [
        "United States",
        "11/14/2013",
        19.54
    ],
    [
        "United States",
        "11/14/2013",
        24.88
    ],
    [
        "United States",
        "11/14/2013",
        14.94
    ],
    [
        "United States",
        "11/14/2013",
        4.18
    ],
    [
        "United States",
        "11/14/2013",
        3.136
    ],
    [
        "United States",
        "11/15/2013",
        499.98
    ],
    [
        "United States",
        "11/15/2013",
        1199.976
    ],
    [
        "United States",
        "11/15/2013",
        380.058
    ],
    [
        "United States",
        "11/15/2013",
        408.006
    ],
    [
        "United States",
        "11/15/2013",
        89.97
    ],
    [
        "United States",
        "11/15/2013",
        48.576
    ],
    [
        "United States",
        "11/15/2013",
        9.84
    ],
    [
        "United States",
        "11/15/2013",
        19.92
    ],
    [
        "United States",
        "11/15/2013",
        5.28
    ],
    [
        "United States",
        "11/15/2013",
        23.65
    ],
    [
        "United States",
        "11/15/2013",
        8.26
    ],
    [
        "United States",
        "11/15/2013",
        13.98
    ],
    [
        "United States",
        "11/15/2013",
        16.45
    ],
    [
        "United States",
        "11/15/2013",
        40.44
    ],
    [
        "United States",
        "11/15/2013",
        7.38
    ],
    [
        "United States",
        "11/15/2013",
        2.296
    ],
    [
        "United States",
        "11/16/2013",
        1016.792
    ],
    [
        "United States",
        "11/16/2013",
        630.024
    ],
    [
        "United States",
        "11/16/2013",
        361.376
    ],
    [
        "United States",
        "11/16/2013",
        99.39
    ],
    [
        "United States",
        "11/16/2013",
        38.136
    ],
    [
        "United States",
        "11/17/2013",
        28.4
    ],
    [
        "United States",
        "11/17/2013",
        8.32
    ],
    [
        "United States",
        "11/18/2013",
        49.5
    ],
    [
        "United States",
        "11/18/2013",
        67.176
    ],
    [
        "United States",
        "11/18/2013",
        15.232
    ],
    [
        "United States",
        "11/18/2013",
        10.776
    ],
    [
        "United States",
        "11/19/2013",
        1319.96
    ],
    [
        "United States",
        "11/19/2013",
        1117.92
    ],
    [
        "United States",
        "11/19/2013",
        595
    ],
    [
        "United States",
        "11/19/2013",
        255.108
    ],
    [
        "United States",
        "11/19/2013",
        301.96
    ],
    [
        "United States",
        "11/19/2013",
        103.968
    ],
    [
        "United States",
        "11/19/2013",
        61.192
    ],
    [
        "United States",
        "11/19/2013",
        48.848
    ],
    [
        "United States",
        "11/19/2013",
        67.84
    ],
    [
        "United States",
        "11/19/2013",
        61.12
    ],
    [
        "United States",
        "11/19/2013",
        19.648
    ],
    [
        "United States",
        "11/19/2013",
        6.368
    ],
    [
        "United States",
        "11/20/2013",
        54.96
    ],
    [
        "United States",
        "11/20/2013",
        18.48
    ],
    [
        "United States",
        "11/20/2013",
        71.96
    ],
    [
        "United States",
        "11/20/2013",
        31.96
    ],
    [
        "United States",
        "11/20/2013",
        100.704
    ],
    [
        "United States",
        "11/20/2013",
        58.368
    ],
    [
        "United States",
        "11/20/2013",
        68.6
    ],
    [
        "United States",
        "11/20/2013",
        40.968
    ],
    [
        "United States",
        "11/20/2013",
        44.75
    ],
    [
        "United States",
        "11/20/2013",
        64.96
    ],
    [
        "United States",
        "11/20/2013",
        17.712
    ],
    [
        "United States",
        "11/20/2013",
        14.352
    ],
    [
        "United States",
        "11/20/2013",
        17.28
    ],
    [
        "United States",
        "11/20/2013",
        10.78
    ],
    [
        "United States",
        "11/20/2013",
        8.74
    ],
    [
        "United States",
        "11/20/2013",
        10.368
    ],
    [
        "United States",
        "11/20/2013",
        2.328
    ],
    [
        "United States",
        "11/20/2013",
        1.192
    ],
    [
        "United States",
        "11/21/2013",
        944.93
    ],
    [
        "United States",
        "11/21/2013",
        318.43
    ],
    [
        "United States",
        "11/21/2013",
        244.768
    ],
    [
        "United States",
        "11/21/2013",
        314.55
    ],
    [
        "United States",
        "11/21/2013",
        289.568
    ],
    [
        "United States",
        "11/21/2013",
        122.92
    ],
    [
        "United States",
        "11/21/2013",
        151.192
    ],
    [
        "United States",
        "11/21/2013",
        255.984
    ],
    [
        "United States",
        "11/21/2013",
        86.97
    ],
    [
        "United States",
        "11/21/2013",
        27.88
    ],
    [
        "United States",
        "11/21/2013",
        128.4
    ],
    [
        "United States",
        "11/21/2013",
        14.62
    ],
    [
        "United States",
        "11/21/2013",
        39
    ],
    [
        "United States",
        "11/21/2013",
        14.427
    ],
    [
        "United States",
        "11/21/2013",
        39.72
    ],
    [
        "United States",
        "11/21/2013",
        19.096
    ],
    [
        "United States",
        "11/21/2013",
        18.496
    ],
    [
        "United States",
        "11/21/2013",
        7.068
    ],
    [
        "United States",
        "11/21/2013",
        9.08
    ],
    [
        "United States",
        "11/21/2013",
        15.696
    ],
    [
        "United States",
        "11/21/2013",
        2.628
    ],
    [
        "United States",
        "11/21/2013",
        4.91
    ],
    [
        "United States",
        "11/22/2013",
        113.568
    ],
    [
        "United States",
        "11/22/2013",
        404.94
    ],
    [
        "United States",
        "11/22/2013",
        81.576
    ],
    [
        "United States",
        "11/22/2013",
        195.136
    ],
    [
        "United States",
        "11/22/2013",
        127.554
    ],
    [
        "United States",
        "11/22/2013",
        77.952
    ],
    [
        "United States",
        "11/22/2013",
        40.46
    ],
    [
        "United States",
        "11/22/2013",
        38.432
    ],
    [
        "United States",
        "11/22/2013",
        32.4
    ],
    [
        "United States",
        "11/22/2013",
        30.345
    ],
    [
        "United States",
        "11/22/2013",
        21.568
    ],
    [
        "United States",
        "11/22/2013",
        12.96
    ],
    [
        "United States",
        "11/23/2013",
        134.272
    ],
    [
        "United States",
        "11/23/2013",
        49.44
    ],
    [
        "United States",
        "11/23/2013",
        20.82
    ],
    [
        "United States",
        "11/23/2013",
        24.032
    ],
    [
        "United States",
        "11/23/2013",
        39.88
    ],
    [
        "United States",
        "11/23/2013",
        23.616
    ],
    [
        "United States",
        "11/23/2013",
        12.192
    ],
    [
        "United States",
        "11/23/2013",
        4.488
    ],
    [
        "United States",
        "11/23/2013",
        6.216
    ],
    [
        "United States",
        "11/23/2013",
        2.088
    ],
    [
        "United States",
        "11/24/2013",
        70.448
    ],
    [
        "United States",
        "11/24/2013",
        15.8
    ],
    [
        "United States",
        "11/24/2013",
        14.368
    ],
    [
        "United States",
        "11/25/2013",
        1219.96
    ],
    [
        "United States",
        "11/25/2013",
        657.552
    ],
    [
        "United States",
        "11/25/2013",
        297.576
    ],
    [
        "United States",
        "11/25/2013",
        659.9
    ],
    [
        "United States",
        "11/25/2013",
        559.92
    ],
    [
        "United States",
        "11/25/2013",
        1684.752
    ],
    [
        "United States",
        "11/25/2013",
        207.76
    ],
    [
        "United States",
        "11/25/2013",
        139.96
    ],
    [
        "United States",
        "11/25/2013",
        74.352
    ],
    [
        "United States",
        "11/25/2013",
        339.92
    ],
    [
        "United States",
        "11/25/2013",
        88.4
    ],
    [
        "United States",
        "11/25/2013",
        94.992
    ],
    [
        "United States",
        "11/25/2013",
        41.92
    ],
    [
        "United States",
        "11/25/2013",
        17.216
    ],
    [
        "United States",
        "11/25/2013",
        42.384
    ],
    [
        "United States",
        "11/25/2013",
        14.04
    ],
    [
        "United States",
        "11/25/2013",
        33.52
    ],
    [
        "United States",
        "11/25/2013",
        82.26
    ],
    [
        "United States",
        "11/25/2013",
        40.752
    ],
    [
        "United States",
        "11/25/2013",
        11.56
    ],
    [
        "United States",
        "11/25/2013",
        24.784
    ],
    [
        "United States",
        "11/25/2013",
        4.344
    ],
    [
        "United States",
        "11/25/2013",
        25.35
    ],
    [
        "United States",
        "11/25/2013",
        6.48
    ],
    [
        "United States",
        "11/25/2013",
        9.94
    ],
    [
        "United States",
        "11/25/2013",
        10.528
    ],
    [
        "United States",
        "11/25/2013",
        4.416
    ],
    [
        "United States",
        "11/26/2013",
        4499.985
    ],
    [
        "United States",
        "11/26/2013",
        1568.61
    ],
    [
        "United States",
        "11/26/2013",
        563.4
    ],
    [
        "United States",
        "11/26/2013",
        456.588
    ],
    [
        "United States",
        "11/26/2013",
        319.92
    ],
    [
        "United States",
        "11/26/2013",
        194.352
    ],
    [
        "United States",
        "11/26/2013",
        59.98
    ],
    [
        "United States",
        "11/26/2013",
        59.976
    ],
    [
        "United States",
        "11/26/2013",
        73.36
    ],
    [
        "United States",
        "11/26/2013",
        160
    ],
    [
        "United States",
        "11/26/2013",
        17.3
    ],
    [
        "United States",
        "11/26/2013",
        5.08
    ],
    [
        "United States",
        "11/27/2013",
        3406.664
    ],
    [
        "United States",
        "11/27/2013",
        3040
    ],
    [
        "United States",
        "11/27/2013",
        494.982
    ],
    [
        "United States",
        "11/27/2013",
        595.38
    ],
    [
        "United States",
        "11/27/2013",
        313.176
    ],
    [
        "United States",
        "11/27/2013",
        91.68
    ],
    [
        "United States",
        "11/27/2013",
        78.759
    ],
    [
        "United States",
        "11/27/2013",
        70.98
    ],
    [
        "United States",
        "11/27/2013",
        13.36
    ],
    [
        "United States",
        "11/27/2013",
        33.75
    ],
    [
        "United States",
        "11/27/2013",
        64.96
    ],
    [
        "United States",
        "11/27/2013",
        59.97
    ],
    [
        "United States",
        "11/27/2013",
        37.17
    ],
    [
        "United States",
        "11/27/2013",
        17.856
    ],
    [
        "United States",
        "11/27/2013",
        3.744
    ],
    [
        "United States",
        "11/27/2013",
        7.312
    ],
    [
        "United States",
        "11/28/2013",
        152
    ],
    [
        "United States",
        "11/28/2013",
        271.992
    ],
    [
        "United States",
        "11/28/2013",
        204.95
    ],
    [
        "United States",
        "11/28/2013",
        97.984
    ],
    [
        "United States",
        "11/28/2013",
        331.023
    ],
    [
        "United States",
        "11/28/2013",
        62.4
    ],
    [
        "United States",
        "11/28/2013",
        167.292
    ],
    [
        "United States",
        "11/28/2013",
        116.76
    ],
    [
        "United States",
        "11/28/2013",
        34.95
    ],
    [
        "United States",
        "11/28/2013",
        34.65
    ],
    [
        "United States",
        "11/28/2013",
        39.808
    ],
    [
        "United States",
        "11/28/2013",
        25.92
    ],
    [
        "United States",
        "11/28/2013",
        31.56
    ],
    [
        "United States",
        "11/28/2013",
        79.95
    ],
    [
        "United States",
        "11/29/2013",
        1126.02
    ],
    [
        "United States",
        "11/29/2013",
        1263.3
    ],
    [
        "United States",
        "11/29/2013",
        347.802
    ],
    [
        "United States",
        "11/29/2013",
        340.182
    ],
    [
        "United States",
        "11/29/2013",
        101.7
    ],
    [
        "United States",
        "11/29/2013",
        182.67
    ],
    [
        "United States",
        "11/29/2013",
        32.544
    ],
    [
        "United States",
        "11/29/2013",
        7.434
    ],
    [
        "United States",
        "11/29/2013",
        12.672
    ],
    [
        "United States",
        "11/29/2013",
        7.16
    ],
    [
        "United States",
        "11/29/2013",
        6.888
    ],
    [
        "United States",
        "11/30/2013",
        242.176
    ],
    [
        "United States",
        "11/30/2013",
        58.416
    ],
    [
        "United States",
        "12/1/2013",
        496.86
    ],
    [
        "United States",
        "12/1/2013",
        389.97
    ],
    [
        "United States",
        "12/1/2013",
        36.192
    ],
    [
        "United States",
        "12/1/2013",
        33.36
    ],
    [
        "United States",
        "12/1/2013",
        13.76
    ],
    [
        "United States",
        "12/2/2013",
        2104.55
    ],
    [
        "United States",
        "12/2/2013",
        863.928
    ],
    [
        "United States",
        "12/2/2013",
        751.92
    ],
    [
        "United States",
        "12/2/2013",
        901.95
    ],
    [
        "United States",
        "12/2/2013",
        1112.94
    ],
    [
        "United States",
        "12/2/2013",
        366.009
    ],
    [
        "United States",
        "12/2/2013",
        248.43
    ],
    [
        "United States",
        "12/2/2013",
        179.97
    ],
    [
        "United States",
        "12/2/2013",
        172.5
    ],
    [
        "United States",
        "12/2/2013",
        88.08
    ],
    [
        "United States",
        "12/2/2013",
        85.246
    ],
    [
        "United States",
        "12/2/2013",
        137.94
    ],
    [
        "United States",
        "12/2/2013",
        23.92
    ],
    [
        "United States",
        "12/2/2013",
        31.96
    ],
    [
        "United States",
        "12/2/2013",
        111.15
    ],
    [
        "United States",
        "12/2/2013",
        47.9
    ],
    [
        "United States",
        "12/2/2013",
        16.74
    ],
    [
        "United States",
        "12/2/2013",
        11.648
    ],
    [
        "United States",
        "12/2/2013",
        17.31
    ],
    [
        "United States",
        "12/2/2013",
        23.04
    ],
    [
        "United States",
        "12/2/2013",
        4.704
    ],
    [
        "United States",
        "12/2/2013",
        40.7
    ],
    [
        "United States",
        "12/2/2013",
        22.92
    ],
    [
        "United States",
        "12/3/2013",
        2079.4
    ],
    [
        "United States",
        "12/3/2013",
        781.864
    ],
    [
        "United States",
        "12/3/2013",
        629.95
    ],
    [
        "United States",
        "12/3/2013",
        415.176
    ],
    [
        "United States",
        "12/3/2013",
        104.184
    ],
    [
        "United States",
        "12/3/2013",
        115.84
    ],
    [
        "United States",
        "12/3/2013",
        59.7
    ],
    [
        "United States",
        "12/3/2013",
        30.816
    ],
    [
        "United States",
        "12/3/2013",
        72.42
    ],
    [
        "United States",
        "12/3/2013",
        165.6
    ],
    [
        "United States",
        "12/3/2013",
        40.46
    ],
    [
        "United States",
        "12/3/2013",
        54.96
    ],
    [
        "United States",
        "12/3/2013",
        24.704
    ],
    [
        "United States",
        "12/3/2013",
        35.232
    ],
    [
        "United States",
        "12/3/2013",
        33.87
    ],
    [
        "United States",
        "12/3/2013",
        25.92
    ],
    [
        "United States",
        "12/3/2013",
        14.52
    ],
    [
        "United States",
        "12/4/2013",
        1649.95
    ],
    [
        "United States",
        "12/4/2013",
        542.646
    ],
    [
        "United States",
        "12/4/2013",
        581.96
    ],
    [
        "United States",
        "12/4/2013",
        772.68
    ],
    [
        "United States",
        "12/4/2013",
        268.704
    ],
    [
        "United States",
        "12/4/2013",
        205.666
    ],
    [
        "United States",
        "12/4/2013",
        111.9
    ],
    [
        "United States",
        "12/4/2013",
        182.72
    ],
    [
        "United States",
        "12/4/2013",
        400.032
    ],
    [
        "United States",
        "12/4/2013",
        394.816
    ],
    [
        "United States",
        "12/4/2013",
        33.63
    ],
    [
        "United States",
        "12/4/2013",
        48.72
    ],
    [
        "United States",
        "12/4/2013",
        29.98
    ],
    [
        "United States",
        "12/4/2013",
        21.92
    ],
    [
        "United States",
        "12/4/2013",
        18.192
    ],
    [
        "United States",
        "12/4/2013",
        6.3
    ],
    [
        "United States",
        "12/5/2013",
        182.94
    ],
    [
        "United States",
        "12/5/2013",
        78.15
    ],
    [
        "United States",
        "12/5/2013",
        193.86
    ],
    [
        "United States",
        "12/5/2013",
        113.79
    ],
    [
        "United States",
        "12/5/2013",
        212.88
    ],
    [
        "United States",
        "12/5/2013",
        104.85
    ],
    [
        "United States",
        "12/5/2013",
        40.56
    ],
    [
        "United States",
        "12/5/2013",
        15.528
    ],
    [
        "United States",
        "12/5/2013",
        1.728
    ],
    [
        "United States",
        "12/6/2013",
        1951.84
    ],
    [
        "United States",
        "12/6/2013",
        584.82
    ],
    [
        "United States",
        "12/6/2013",
        699.98
    ],
    [
        "United States",
        "12/6/2013",
        191.82
    ],
    [
        "United States",
        "12/6/2013",
        407.976
    ],
    [
        "United States",
        "12/6/2013",
        384.45
    ],
    [
        "United States",
        "12/6/2013",
        465.18
    ],
    [
        "United States",
        "12/6/2013",
        149.97
    ],
    [
        "United States",
        "12/6/2013",
        171.55
    ],
    [
        "United States",
        "12/6/2013",
        109.69
    ],
    [
        "United States",
        "12/6/2013",
        81.94
    ],
    [
        "United States",
        "12/6/2013",
        33.92
    ],
    [
        "United States",
        "12/6/2013",
        11.952
    ],
    [
        "United States",
        "12/6/2013",
        13.4
    ],
    [
        "United States",
        "12/6/2013",
        4.98
    ],
    [
        "United States",
        "12/6/2013",
        3.536
    ],
    [
        "United States",
        "12/7/2013",
        968.744
    ],
    [
        "United States",
        "12/7/2013",
        431.976
    ],
    [
        "United States",
        "12/7/2013",
        437.472
    ],
    [
        "United States",
        "12/7/2013",
        479.984
    ],
    [
        "United States",
        "12/7/2013",
        222.352
    ],
    [
        "United States",
        "12/7/2013",
        271.96
    ],
    [
        "United States",
        "12/7/2013",
        249.584
    ],
    [
        "United States",
        "12/7/2013",
        156.792
    ],
    [
        "United States",
        "12/7/2013",
        189.7
    ],
    [
        "United States",
        "12/7/2013",
        248.08
    ],
    [
        "United States",
        "12/7/2013",
        47.208
    ],
    [
        "United States",
        "12/7/2013",
        19.44
    ],
    [
        "United States",
        "12/7/2013",
        35.89
    ],
    [
        "United States",
        "12/7/2013",
        59.808
    ],
    [
        "United States",
        "12/7/2013",
        18.69
    ],
    [
        "United States",
        "12/7/2013",
        13.86
    ],
    [
        "United States",
        "12/7/2013",
        13.376
    ],
    [
        "United States",
        "12/7/2013",
        13.36
    ],
    [
        "United States",
        "12/9/2013",
        1097.544
    ],
    [
        "United States",
        "12/9/2013",
        1421.664
    ],
    [
        "United States",
        "12/9/2013",
        190.92
    ],
    [
        "United States",
        "12/9/2013",
        680.01
    ],
    [
        "United States",
        "12/9/2013",
        405.86
    ],
    [
        "United States",
        "12/9/2013",
        249.584
    ],
    [
        "United States",
        "12/9/2013",
        352.38
    ],
    [
        "United States",
        "12/9/2013",
        68.112
    ],
    [
        "United States",
        "12/9/2013",
        114.95
    ],
    [
        "United States",
        "12/9/2013",
        34.05
    ],
    [
        "United States",
        "12/9/2013",
        45.36
    ],
    [
        "United States",
        "12/9/2013",
        10.584
    ],
    [
        "United States",
        "12/9/2013",
        16.56
    ],
    [
        "United States",
        "12/9/2013",
        12.957
    ],
    [
        "United States",
        "12/9/2013",
        8.56
    ],
    [
        "United States",
        "12/10/2013",
        1056.86
    ],
    [
        "United States",
        "12/10/2013",
        273.92
    ],
    [
        "United States",
        "12/10/2013",
        122.12
    ],
    [
        "United States",
        "12/10/2013",
        79.974
    ],
    [
        "United States",
        "12/10/2013",
        59.98
    ],
    [
        "United States",
        "12/10/2013",
        61.929
    ],
    [
        "United States",
        "12/10/2013",
        40.68
    ],
    [
        "United States",
        "12/10/2013",
        19.04
    ],
    [
        "United States",
        "12/10/2013",
        9.392
    ],
    [
        "United States",
        "12/10/2013",
        60.34
    ],
    [
        "United States",
        "12/10/2013",
        20.568
    ],
    [
        "United States",
        "12/10/2013",
        9.328
    ],
    [
        "United States",
        "12/10/2013",
        19.46
    ],
    [
        "United States",
        "12/10/2013",
        4.356
    ],
    [
        "United States",
        "12/10/2013",
        3.69
    ],
    [
        "United States",
        "12/10/2013",
        10.9
    ],
    [
        "United States",
        "12/10/2013",
        2.946
    ],
    [
        "United States",
        "12/11/2013",
        1424.9
    ],
    [
        "United States",
        "12/11/2013",
        679.96
    ],
    [
        "United States",
        "12/11/2013",
        321.568
    ],
    [
        "United States",
        "12/11/2013",
        153.552
    ],
    [
        "United States",
        "12/11/2013",
        80.58
    ],
    [
        "United States",
        "12/11/2013",
        123.92
    ],
    [
        "United States",
        "12/11/2013",
        361.92
    ],
    [
        "United States",
        "12/11/2013",
        80.28
    ],
    [
        "United States",
        "12/11/2013",
        65.34
    ],
    [
        "United States",
        "12/11/2013",
        62.82
    ],
    [
        "United States",
        "12/11/2013",
        35.1
    ],
    [
        "United States",
        "12/11/2013",
        44.75
    ],
    [
        "United States",
        "12/11/2013",
        6.48
    ],
    [
        "United States",
        "12/11/2013",
        18.54
    ],
    [
        "United States",
        "12/12/2013",
        892.136
    ],
    [
        "United States",
        "12/12/2013",
        363.92
    ],
    [
        "United States",
        "12/12/2013",
        403.92
    ],
    [
        "United States",
        "12/12/2013",
        328.59
    ],
    [
        "United States",
        "12/12/2013",
        458.43
    ],
    [
        "United States",
        "12/12/2013",
        209.6
    ],
    [
        "United States",
        "12/12/2013",
        387.136
    ],
    [
        "United States",
        "12/12/2013",
        243.384
    ],
    [
        "United States",
        "12/12/2013",
        300.768
    ],
    [
        "United States",
        "12/12/2013",
        119.96
    ],
    [
        "United States",
        "12/12/2013",
        122.688
    ],
    [
        "United States",
        "12/12/2013",
        1029.95
    ],
    [
        "United States",
        "12/12/2013",
        73.536
    ],
    [
        "United States",
        "12/12/2013",
        302.376
    ],
    [
        "United States",
        "12/12/2013",
        316
    ],
    [
        "United States",
        "12/12/2013",
        83.42
    ],
    [
        "United States",
        "12/12/2013",
        64.96
    ],
    [
        "United States",
        "12/12/2013",
        50.22
    ],
    [
        "United States",
        "12/12/2013",
        35.808
    ],
    [
        "United States",
        "12/12/2013",
        119.8
    ],
    [
        "United States",
        "12/12/2013",
        85.224
    ],
    [
        "United States",
        "12/12/2013",
        30.98
    ],
    [
        "United States",
        "12/12/2013",
        23.32
    ],
    [
        "United States",
        "12/12/2013",
        13.52
    ],
    [
        "United States",
        "12/12/2013",
        5.872
    ],
    [
        "United States",
        "12/12/2013",
        14.8
    ],
    [
        "United States",
        "12/12/2013",
        15.26
    ],
    [
        "United States",
        "12/12/2013",
        6.672
    ],
    [
        "United States",
        "12/13/2013",
        383.952
    ],
    [
        "United States",
        "12/13/2013",
        657.93
    ],
    [
        "United States",
        "12/13/2013",
        383.64
    ],
    [
        "United States",
        "12/13/2013",
        249.95
    ],
    [
        "United States",
        "12/13/2013",
        56.52
    ],
    [
        "United States",
        "12/13/2013",
        60.35
    ],
    [
        "United States",
        "12/13/2013",
        49.12
    ],
    [
        "United States",
        "12/13/2013",
        18.693
    ],
    [
        "United States",
        "12/13/2013",
        33.48
    ],
    [
        "United States",
        "12/13/2013",
        35.52
    ],
    [
        "United States",
        "12/13/2013",
        26.86
    ],
    [
        "United States",
        "12/13/2013",
        11.2
    ],
    [
        "United States",
        "12/13/2013",
        13.9
    ],
    [
        "United States",
        "12/14/2013",
        1114.272
    ],
    [
        "United States",
        "12/14/2013",
        63.88
    ],
    [
        "United States",
        "12/14/2013",
        9.84
    ],
    [
        "United States",
        "12/14/2013",
        6.096
    ],
    [
        "United States",
        "12/15/2013",
        396.92
    ],
    [
        "United States",
        "12/15/2013",
        81.424
    ],
    [
        "United States",
        "12/15/2013",
        134.8
    ],
    [
        "United States",
        "12/15/2013",
        133.38
    ],
    [
        "United States",
        "12/15/2013",
        23.12
    ],
    [
        "United States",
        "12/15/2013",
        21.48
    ],
    [
        "United States",
        "12/15/2013",
        14.62
    ],
    [
        "United States",
        "12/15/2013",
        17.15
    ],
    [
        "United States",
        "12/15/2013",
        5.76
    ],
    [
        "United States",
        "12/16/2013",
        564.195
    ],
    [
        "United States",
        "12/16/2013",
        296.37
    ],
    [
        "United States",
        "12/16/2013",
        87.168
    ],
    [
        "United States",
        "12/16/2013",
        1652.94
    ],
    [
        "United States",
        "12/16/2013",
        14.76
    ],
    [
        "United States",
        "12/16/2013",
        19.44
    ],
    [
        "United States",
        "12/16/2013",
        2.214
    ],
    [
        "United States",
        "12/17/2013",
        563.92
    ],
    [
        "United States",
        "12/17/2013",
        34.944
    ],
    [
        "United States",
        "12/17/2013",
        21.21
    ],
    [
        "United States",
        "12/17/2013",
        3.68
    ],
    [
        "United States",
        "12/17/2013",
        4.788
    ],
    [
        "United States",
        "12/18/2013",
        9892.74
    ],
    [
        "United States",
        "12/18/2013",
        2003.52
    ],
    [
        "United States",
        "12/18/2013",
        165.6
    ],
    [
        "United States",
        "12/18/2013",
        51.84
    ],
    [
        "United States",
        "12/18/2013",
        46.53
    ],
    [
        "United States",
        "12/18/2013",
        11.416
    ],
    [
        "United States",
        "12/18/2013",
        13.488
    ],
    [
        "United States",
        "12/19/2013",
        1793.98
    ],
    [
        "United States",
        "12/19/2013",
        900.08
    ],
    [
        "United States",
        "12/19/2013",
        961.48
    ],
    [
        "United States",
        "12/19/2013",
        377.45
    ],
    [
        "United States",
        "12/19/2013",
        579.3
    ],
    [
        "United States",
        "12/19/2013",
        563.94
    ],
    [
        "United States",
        "12/19/2013",
        254.058
    ],
    [
        "United States",
        "12/19/2013",
        194.528
    ],
    [
        "United States",
        "12/19/2013",
        66.976
    ],
    [
        "United States",
        "12/19/2013",
        183.84
    ],
    [
        "United States",
        "12/19/2013",
        45.24
    ],
    [
        "United States",
        "12/19/2013",
        38.88
    ],
    [
        "United States",
        "12/19/2013",
        18.688
    ],
    [
        "United States",
        "12/19/2013",
        28.68
    ],
    [
        "United States",
        "12/19/2013",
        72.64
    ],
    [
        "United States",
        "12/19/2013",
        39.92
    ],
    [
        "United States",
        "12/19/2013",
        112.776
    ],
    [
        "United States",
        "12/19/2013",
        15.936
    ],
    [
        "United States",
        "12/19/2013",
        18.84
    ],
    [
        "United States",
        "12/19/2013",
        11.648
    ],
    [
        "United States",
        "12/19/2013",
        772.47
    ],
    [
        "United States",
        "12/20/2013",
        303.92
    ],
    [
        "United States",
        "12/20/2013",
        455.97
    ],
    [
        "United States",
        "12/20/2013",
        34.248
    ],
    [
        "United States",
        "12/20/2013",
        10.44
    ],
    [
        "United States",
        "12/20/2013",
        5.214
    ],
    [
        "United States",
        "12/20/2013",
        1.8
    ],
    [
        "United States",
        "12/20/2013",
        3.52
    ],
    [
        "United States",
        "12/21/2013",
        33.9
    ],
    [
        "United States",
        "12/21/2013",
        66.3
    ],
    [
        "United States",
        "12/21/2013",
        18.92
    ],
    [
        "United States",
        "12/21/2013",
        15.42
    ],
    [
        "United States",
        "12/23/2013",
        842.72
    ],
    [
        "United States",
        "12/23/2013",
        31.32
    ],
    [
        "United States",
        "12/23/2013",
        55.36
    ],
    [
        "United States",
        "12/23/2013",
        25.584
    ],
    [
        "United States",
        "12/23/2013",
        41.96
    ],
    [
        "United States",
        "12/23/2013",
        22.784
    ],
    [
        "United States",
        "12/23/2013",
        11.56
    ],
    [
        "United States",
        "12/23/2013",
        11.84
    ],
    [
        "United States",
        "12/24/2013",
        1999.96
    ],
    [
        "United States",
        "12/24/2013",
        1117.92
    ],
    [
        "United States",
        "12/24/2013",
        572.76
    ],
    [
        "United States",
        "12/24/2013",
        286.38
    ],
    [
        "United States",
        "12/24/2013",
        453.576
    ],
    [
        "United States",
        "12/24/2013",
        227.28
    ],
    [
        "United States",
        "12/24/2013",
        141.372
    ],
    [
        "United States",
        "12/24/2013",
        1499.97
    ],
    [
        "United States",
        "12/24/2013",
        287.88
    ],
    [
        "United States",
        "12/24/2013",
        131.88
    ],
    [
        "United States",
        "12/24/2013",
        61.96
    ],
    [
        "United States",
        "12/24/2013",
        47.9
    ],
    [
        "United States",
        "12/24/2013",
        37.94
    ],
    [
        "United States",
        "12/24/2013",
        45.36
    ],
    [
        "United States",
        "12/24/2013",
        24.85
    ],
    [
        "United States",
        "12/24/2013",
        8.82
    ],
    [
        "United States",
        "12/24/2013",
        7.968
    ],
    [
        "United States",
        "12/24/2013",
        5.553
    ],
    [
        "United States",
        "12/24/2013",
        4.2
    ],
    [
        "United States",
        "12/24/2013",
        2.328
    ],
    [
        "United States",
        "12/25/2013",
        540.048
    ],
    [
        "United States",
        "12/25/2013",
        799.56
    ],
    [
        "United States",
        "12/25/2013",
        197.97
    ],
    [
        "United States",
        "12/25/2013",
        255.68
    ],
    [
        "United States",
        "12/25/2013",
        39.76
    ],
    [
        "United States",
        "12/25/2013",
        43.96
    ],
    [
        "United States",
        "12/25/2013",
        27.882
    ],
    [
        "United States",
        "12/25/2013",
        33.4
    ],
    [
        "United States",
        "12/26/2013",
        2575.944
    ],
    [
        "United States",
        "12/26/2013",
        2563.056
    ],
    [
        "United States",
        "12/26/2013",
        1747.25
    ],
    [
        "United States",
        "12/26/2013",
        866.646
    ],
    [
        "United States",
        "12/26/2013",
        698.352
    ],
    [
        "United States",
        "12/26/2013",
        399.98
    ],
    [
        "United States",
        "12/26/2013",
        254.24
    ],
    [
        "United States",
        "12/26/2013",
        313.176
    ],
    [
        "United States",
        "12/26/2013",
        269.97
    ],
    [
        "United States",
        "12/26/2013",
        343.85
    ],
    [
        "United States",
        "12/26/2013",
        100.8
    ],
    [
        "United States",
        "12/26/2013",
        106.32
    ],
    [
        "United States",
        "12/26/2013",
        33.568
    ],
    [
        "United States",
        "12/26/2013",
        47.968
    ],
    [
        "United States",
        "12/26/2013",
        45.12
    ],
    [
        "United States",
        "12/26/2013",
        19.89
    ],
    [
        "United States",
        "12/26/2013",
        21.12
    ],
    [
        "United States",
        "12/26/2013",
        45.36
    ],
    [
        "United States",
        "12/26/2013",
        35.445
    ],
    [
        "United States",
        "12/27/2013",
        902.712
    ],
    [
        "United States",
        "12/27/2013",
        302.384
    ],
    [
        "United States",
        "12/27/2013",
        212.94
    ],
    [
        "United States",
        "12/27/2013",
        146.352
    ],
    [
        "United States",
        "12/27/2013",
        89.97
    ],
    [
        "United States",
        "12/27/2013",
        11.328
    ],
    [
        "United States",
        "12/27/2013",
        53.97
    ],
    [
        "United States",
        "12/27/2013",
        33.9
    ],
    [
        "United States",
        "12/27/2013",
        26.49
    ],
    [
        "United States",
        "12/27/2013",
        18.72
    ],
    [
        "United States",
        "12/27/2013",
        17.76
    ],
    [
        "United States",
        "12/27/2013",
        4.992
    ],
    [
        "United States",
        "12/27/2013",
        7.9
    ],
    [
        "United States",
        "12/28/2013",
        845.488
    ],
    [
        "United States",
        "12/28/2013",
        40
    ],
    [
        "United States",
        "12/28/2013",
        20.16
    ],
    [
        "United States",
        "12/28/2013",
        17.184
    ],
    [
        "United States",
        "12/28/2013",
        23.68
    ],
    [
        "United States",
        "12/28/2013",
        10.368
    ],
    [
        "United States",
        "12/28/2013",
        2.61
    ],
    [
        "United States",
        "12/30/2013",
        754.45
    ],
    [
        "United States",
        "12/30/2013",
        186.048
    ],
    [
        "United States",
        "12/30/2013",
        81.96
    ],
    [
        "United States",
        "12/30/2013",
        70.56
    ],
    [
        "United States",
        "12/30/2013",
        27.96
    ],
    [
        "United States",
        "12/30/2013",
        37.408
    ],
    [
        "United States",
        "12/30/2013",
        27.792
    ],
    [
        "United States",
        "12/30/2013",
        25.344
    ],
    [
        "United States",
        "12/30/2013",
        38.088
    ],
    [
        "United States",
        "12/30/2013",
        11.232
    ],
    [
        "United States",
        "12/30/2013",
        14.03
    ],
    [
        "United States",
        "12/30/2013",
        2.808
    ],
    [
        "United States",
        "12/31/2013",
        481.32
    ],
    [
        "United States",
        "12/31/2013",
        170.786
    ],
    [
        "United States",
        "12/31/2013",
        72.224
    ],
    [
        "United States",
        "12/31/2013",
        13.712
    ],
    [
        "United States",
        "12/31/2013",
        6.924
    ],
    [
        "United States",
        "12/31/2013",
        16.52
    ],
    [
        "United States",
        "12/31/2013",
        6.384
    ],
    [
        "United States",
        "12/31/2013",
        5.904
    ],
    [
        "United States",
        "1/1/2014",
        156.512
    ],
    [
        "United States",
        "1/1/2014",
        159.768
    ],
    [
        "United States",
        "1/1/2014",
        302.376
    ],
    [
        "United States",
        "1/1/2014",
        38.376
    ],
    [
        "United States",
        "1/1/2014",
        47.616
    ],
    [
        "United States",
        "1/1/2014",
        23.48
    ],
    [
        "United States",
        "1/1/2014",
        3.64
    ],
    [
        "United States",
        "1/2/2014",
        474.43
    ],
    [
        "United States",
        "1/2/2014",
        310.744
    ],
    [
        "United States",
        "1/2/2014",
        454.56
    ],
    [
        "United States",
        "1/2/2014",
        141.42
    ],
    [
        "United States",
        "1/2/2014",
        12.736
    ],
    [
        "United States",
        "1/2/2014",
        13.748
    ],
    [
        "United States",
        "1/2/2014",
        3.6
    ],
    [
        "United States",
        "1/2/2014",
        48.896
    ],
    [
        "United States",
        "1/2/2014",
        15.224
    ],
    [
        "United States",
        "1/2/2014",
        6.47
    ],
    [
        "United States",
        "1/3/2014",
        695.7
    ],
    [
        "United States",
        "1/3/2014",
        913.43
    ],
    [
        "United States",
        "1/3/2014",
        372.144
    ],
    [
        "United States",
        "1/3/2014",
        28.854
    ],
    [
        "United States",
        "1/3/2014",
        16.59
    ],
    [
        "United States",
        "1/3/2014",
        31.744
    ],
    [
        "United States",
        "1/3/2014",
        15.66
    ],
    [
        "United States",
        "1/3/2014",
        5.432
    ],
    [
        "United States",
        "1/4/2014",
        2022.272
    ],
    [
        "United States",
        "1/4/2014",
        38.88
    ],
    [
        "United States",
        "1/4/2014",
        9.12
    ],
    [
        "United States",
        "1/7/2014",
        33.74
    ],
    [
        "United States",
        "1/8/2014",
        3059.982
    ],
    [
        "United States",
        "1/8/2014",
        153.78
    ],
    [
        "United States",
        "1/8/2014",
        61.02
    ],
    [
        "United States",
        "1/8/2014",
        110.11
    ],
    [
        "United States",
        "1/8/2014",
        7.89
    ],
    [
        "United States",
        "1/8/2014",
        2.808
    ],
    [
        "United States",
        "1/9/2014",
        892.98
    ],
    [
        "United States",
        "1/10/2014",
        274.491
    ],
    [
        "United States",
        "1/13/2014",
        760.98
    ],
    [
        "United States",
        "1/13/2014",
        37.68
    ],
    [
        "United States",
        "1/13/2014",
        40.08
    ],
    [
        "United States",
        "1/13/2014",
        9.78
    ],
    [
        "United States",
        "1/14/2014",
        4164.05
    ],
    [
        "United States",
        "1/14/2014",
        212.94
    ],
    [
        "United States",
        "1/14/2014",
        209.94
    ],
    [
        "United States",
        "1/14/2014",
        32.4
    ],
    [
        "United States",
        "1/15/2014",
        169.064
    ],
    [
        "United States",
        "1/15/2014",
        159.8
    ],
    [
        "United States",
        "1/15/2014",
        111.984
    ],
    [
        "United States",
        "1/15/2014",
        154.9
    ],
    [
        "United States",
        "1/15/2014",
        168.624
    ],
    [
        "United States",
        "1/15/2014",
        67.4
    ],
    [
        "United States",
        "1/15/2014",
        67.8
    ],
    [
        "United States",
        "1/15/2014",
        36.288
    ],
    [
        "United States",
        "1/15/2014",
        18.76
    ],
    [
        "United States",
        "1/15/2014",
        21.744
    ],
    [
        "United States",
        "1/15/2014",
        18.96
    ],
    [
        "United States",
        "1/15/2014",
        18.336
    ],
    [
        "United States",
        "1/15/2014",
        12.12
    ],
    [
        "United States",
        "1/15/2014",
        7.92
    ],
    [
        "United States",
        "1/15/2014",
        5.97
    ],
    [
        "United States",
        "1/15/2014",
        11.34
    ],
    [
        "United States",
        "1/15/2014",
        2.508
    ],
    [
        "United States",
        "1/15/2014",
        2.52
    ],
    [
        "United States",
        "1/16/2014",
        1924.16
    ],
    [
        "United States",
        "1/16/2014",
        62.592
    ],
    [
        "United States",
        "1/16/2014",
        47.984
    ],
    [
        "United States",
        "1/16/2014",
        34.384
    ],
    [
        "United States",
        "1/16/2014",
        21.4
    ],
    [
        "United States",
        "1/16/2014",
        4.276
    ],
    [
        "United States",
        "1/16/2014",
        12.7
    ],
    [
        "United States",
        "1/16/2014",
        32.784
    ],
    [
        "United States",
        "1/17/2014",
        5443.96
    ],
    [
        "United States",
        "1/17/2014",
        399.672
    ],
    [
        "United States",
        "1/17/2014",
        302.67
    ],
    [
        "United States",
        "1/17/2014",
        27.92
    ],
    [
        "United States",
        "1/17/2014",
        56.07
    ],
    [
        "United States",
        "1/20/2014",
        887.271
    ],
    [
        "United States",
        "1/20/2014",
        542.94
    ],
    [
        "United States",
        "1/20/2014",
        429.6
    ],
    [
        "United States",
        "1/20/2014",
        79.92
    ],
    [
        "United States",
        "1/20/2014",
        31.968
    ],
    [
        "United States",
        "1/20/2014",
        21.696
    ],
    [
        "United States",
        "1/20/2014",
        12.28
    ],
    [
        "United States",
        "1/20/2014",
        6
    ],
    [
        "United States",
        "1/20/2014",
        2.04
    ],
    [
        "United States",
        "1/21/2014",
        359.976
    ],
    [
        "United States",
        "1/21/2014",
        207.846
    ],
    [
        "United States",
        "1/21/2014",
        160.776
    ],
    [
        "United States",
        "1/21/2014",
        11.52
    ],
    [
        "United States",
        "1/21/2014",
        24.2
    ],
    [
        "United States",
        "1/21/2014",
        3.52
    ],
    [
        "United States",
        "1/22/2014",
        242.94
    ],
    [
        "United States",
        "1/22/2014",
        268.576
    ],
    [
        "United States",
        "1/22/2014",
        619.95
    ],
    [
        "United States",
        "1/22/2014",
        179.97
    ],
    [
        "United States",
        "1/22/2014",
        348.208
    ],
    [
        "United States",
        "1/22/2014",
        84.98
    ],
    [
        "United States",
        "1/22/2014",
        99.696
    ],
    [
        "United States",
        "1/22/2014",
        164.99
    ],
    [
        "United States",
        "1/22/2014",
        89.52
    ],
    [
        "United States",
        "1/22/2014",
        27.936
    ],
    [
        "United States",
        "1/22/2014",
        35.784
    ],
    [
        "United States",
        "1/22/2014",
        350.973
    ],
    [
        "United States",
        "1/22/2014",
        18.72
    ],
    [
        "United States",
        "1/22/2014",
        14.4
    ],
    [
        "United States",
        "1/23/2014",
        2999.95
    ],
    [
        "United States",
        "1/23/2014",
        1126.02
    ],
    [
        "United States",
        "1/23/2014",
        51.45
    ],
    [
        "United States",
        "1/23/2014",
        11.96
    ],
    [
        "United States",
        "1/23/2014",
        15.12
    ],
    [
        "United States",
        "1/23/2014",
        7.872
    ],
    [
        "United States",
        "1/24/2014",
        210.98
    ],
    [
        "United States",
        "1/24/2014",
        95.984
    ],
    [
        "United States",
        "1/24/2014",
        86.352
    ],
    [
        "United States",
        "1/24/2014",
        25.92
    ],
    [
        "United States",
        "1/24/2014",
        19.68
    ],
    [
        "United States",
        "1/24/2014",
        4.938
    ],
    [
        "United States",
        "1/24/2014",
        6.48
    ],
    [
        "United States",
        "1/25/2014",
        276.784
    ],
    [
        "United States",
        "1/25/2014",
        110.352
    ],
    [
        "United States",
        "1/25/2014",
        25.86
    ],
    [
        "United States",
        "1/25/2014",
        5.67
    ],
    [
        "United States",
        "1/27/2014",
        2939.93
    ],
    [
        "United States",
        "1/27/2014",
        62.72
    ],
    [
        "United States",
        "1/27/2014",
        18.16
    ],
    [
        "United States",
        "1/27/2014",
        15.47
    ],
    [
        "United States",
        "1/27/2014",
        11.84
    ],
    [
        "United States",
        "1/27/2014",
        7.16
    ],
    [
        "United States",
        "1/28/2014",
        107.982
    ],
    [
        "United States",
        "1/28/2014",
        137.94
    ],
    [
        "United States",
        "1/28/2014",
        71.976
    ],
    [
        "United States",
        "1/28/2014",
        14.016
    ],
    [
        "United States",
        "1/29/2014",
        449.91
    ],
    [
        "United States",
        "1/29/2014",
        239.97
    ],
    [
        "United States",
        "1/29/2014",
        279.9
    ],
    [
        "United States",
        "1/29/2014",
        37.74
    ],
    [
        "United States",
        "1/30/2014",
        94.85
    ],
    [
        "United States",
        "1/30/2014",
        119.616
    ],
    [
        "United States",
        "1/30/2014",
        14.91
    ],
    [
        "United States",
        "1/30/2014",
        12.96
    ],
    [
        "United States",
        "1/30/2014",
        13.48
    ],
    [
        "United States",
        "1/30/2014",
        8.34
    ],
    [
        "United States",
        "1/30/2014",
        5.22
    ],
    [
        "United States",
        "1/30/2014",
        12.128
    ],
    [
        "United States",
        "1/30/2014",
        4.768
    ],
    [
        "United States",
        "1/30/2014",
        8.57
    ],
    [
        "United States",
        "1/31/2014",
        2003.168
    ],
    [
        "United States",
        "1/31/2014",
        604.768
    ],
    [
        "United States",
        "1/31/2014",
        419.136
    ],
    [
        "United States",
        "1/31/2014",
        207
    ],
    [
        "United States",
        "1/31/2014",
        120.784
    ],
    [
        "United States",
        "1/31/2014",
        129.3
    ],
    [
        "United States",
        "1/31/2014",
        69.375
    ],
    [
        "United States",
        "1/31/2014",
        34.58
    ],
    [
        "United States",
        "1/31/2014",
        40.3
    ],
    [
        "United States",
        "1/31/2014",
        32.35
    ],
    [
        "United States",
        "1/31/2014",
        31.68
    ],
    [
        "United States",
        "1/31/2014",
        18.28
    ],
    [
        "United States",
        "1/31/2014",
        8.82
    ],
    [
        "United States",
        "1/31/2014",
        12.74
    ],
    [
        "United States",
        "1/31/2014",
        9.344
    ],
    [
        "United States",
        "1/31/2014",
        7.71
    ],
    [
        "United States",
        "2/3/2014",
        210.58
    ],
    [
        "United States",
        "2/3/2014",
        78.304
    ],
    [
        "United States",
        "2/3/2014",
        239.984
    ],
    [
        "United States",
        "2/3/2014",
        139.04
    ],
    [
        "United States",
        "2/3/2014",
        86.26
    ],
    [
        "United States",
        "2/3/2014",
        59.97
    ],
    [
        "United States",
        "2/3/2014",
        46.8
    ],
    [
        "United States",
        "2/3/2014",
        21.456
    ],
    [
        "United States",
        "2/3/2014",
        30.96
    ],
    [
        "United States",
        "2/4/2014",
        419.4
    ],
    [
        "United States",
        "2/4/2014",
        285.552
    ],
    [
        "United States",
        "2/4/2014",
        65.584
    ],
    [
        "United States",
        "2/4/2014",
        115.296
    ],
    [
        "United States",
        "2/4/2014",
        22.2
    ],
    [
        "United States",
        "2/4/2014",
        5.184
    ],
    [
        "United States",
        "2/4/2014",
        5.229
    ],
    [
        "United States",
        "2/4/2014",
        3.882
    ],
    [
        "United States",
        "2/5/2014",
        32.67
    ],
    [
        "United States",
        "2/6/2014",
        1640.7
    ],
    [
        "United States",
        "2/6/2014",
        371.2
    ],
    [
        "United States",
        "2/6/2014",
        243.992
    ],
    [
        "United States",
        "2/6/2014",
        7.12
    ],
    [
        "United States",
        "2/7/2014",
        359.97
    ],
    [
        "United States",
        "2/7/2014",
        240.784
    ],
    [
        "United States",
        "2/7/2014",
        227.46
    ],
    [
        "United States",
        "2/7/2014",
        46.24
    ],
    [
        "United States",
        "2/7/2014",
        29.9
    ],
    [
        "United States",
        "2/10/2014",
        354.9
    ],
    [
        "United States",
        "2/10/2014",
        252.784
    ],
    [
        "United States",
        "2/10/2014",
        127.984
    ],
    [
        "United States",
        "2/10/2014",
        12.992
    ],
    [
        "United States",
        "2/10/2014",
        21.12
    ],
    [
        "United States",
        "2/10/2014",
        3.984
    ],
    [
        "United States",
        "2/11/2014",
        203.983
    ],
    [
        "United States",
        "2/11/2014",
        23.12
    ],
    [
        "United States",
        "2/12/2014",
        963.136
    ],
    [
        "United States",
        "2/12/2014",
        147.568
    ],
    [
        "United States",
        "2/12/2014",
        88.776
    ],
    [
        "United States",
        "2/12/2014",
        20.7
    ],
    [
        "United States",
        "2/12/2014",
        21.336
    ],
    [
        "United States",
        "2/14/2014",
        799.96
    ],
    [
        "United States",
        "2/14/2014",
        90.64
    ],
    [
        "United States",
        "2/14/2014",
        107.53
    ],
    [
        "United States",
        "2/14/2014",
        25.02
    ],
    [
        "United States",
        "2/14/2014",
        17.94
    ],
    [
        "United States",
        "2/14/2014",
        10.71
    ],
    [
        "United States",
        "2/14/2014",
        6.63
    ],
    [
        "United States",
        "2/17/2014",
        600.558
    ],
    [
        "United States",
        "2/17/2014",
        579.51
    ],
    [
        "United States",
        "2/17/2014",
        50.352
    ],
    [
        "United States",
        "2/17/2014",
        37.94
    ],
    [
        "United States",
        "2/17/2014",
        28.032
    ],
    [
        "United States",
        "2/17/2014",
        14.99
    ],
    [
        "United States",
        "2/17/2014",
        18.368
    ],
    [
        "United States",
        "2/17/2014",
        7.692
    ],
    [
        "United States",
        "2/18/2014",
        899.43
    ],
    [
        "United States",
        "2/18/2014",
        480.96
    ],
    [
        "United States",
        "2/18/2014",
        455.97
    ],
    [
        "United States",
        "2/18/2014",
        89.0664
    ],
    [
        "United States",
        "2/18/2014",
        438.336
    ],
    [
        "United States",
        "2/18/2014",
        166.45
    ],
    [
        "United States",
        "2/18/2014",
        175.44
    ],
    [
        "United States",
        "2/18/2014",
        30.144
    ],
    [
        "United States",
        "2/18/2014",
        57.594
    ],
    [
        "United States",
        "2/18/2014",
        124.792
    ],
    [
        "United States",
        "2/18/2014",
        29.16
    ],
    [
        "United States",
        "2/18/2014",
        11.76
    ],
    [
        "United States",
        "2/18/2014",
        5.715
    ],
    [
        "United States",
        "2/19/2014",
        167.976
    ],
    [
        "United States",
        "2/19/2014",
        109.53
    ],
    [
        "United States",
        "2/19/2014",
        9.82
    ],
    [
        "United States",
        "2/20/2014",
        1245.86
    ],
    [
        "United States",
        "2/20/2014",
        44.67
    ],
    [
        "United States",
        "2/20/2014",
        11.22
    ],
    [
        "United States",
        "2/20/2014",
        12.84
    ],
    [
        "United States",
        "2/21/2014",
        215.968
    ],
    [
        "United States",
        "2/21/2014",
        386.91
    ],
    [
        "United States",
        "2/21/2014",
        333.576
    ],
    [
        "United States",
        "2/21/2014",
        68.704
    ],
    [
        "United States",
        "2/21/2014",
        51.168
    ],
    [
        "United States",
        "2/21/2014",
        31.992
    ],
    [
        "United States",
        "2/21/2014",
        22.23
    ],
    [
        "United States",
        "2/21/2014",
        10.64
    ],
    [
        "United States",
        "2/21/2014",
        13.11
    ],
    [
        "United States",
        "2/21/2014",
        9.432
    ],
    [
        "United States",
        "2/21/2014",
        6.56
    ],
    [
        "United States",
        "2/22/2014",
        47.904
    ],
    [
        "United States",
        "2/24/2014",
        71.96
    ],
    [
        "United States",
        "2/24/2014",
        37.44
    ],
    [
        "United States",
        "2/24/2014",
        8.4
    ],
    [
        "United States",
        "2/25/2014",
        1319.8
    ],
    [
        "United States",
        "2/25/2014",
        123.92
    ],
    [
        "United States",
        "2/25/2014",
        4.956
    ],
    [
        "United States",
        "2/26/2014",
        231.92
    ],
    [
        "United States",
        "2/26/2014",
        196.784
    ],
    [
        "United States",
        "2/26/2014",
        1.788
    ],
    [
        "United States",
        "2/27/2014",
        889.536
    ],
    [
        "United States",
        "2/27/2014",
        892.224
    ],
    [
        "United States",
        "2/27/2014",
        356.79
    ],
    [
        "United States",
        "2/27/2014",
        223.92
    ],
    [
        "United States",
        "2/27/2014",
        258.576
    ],
    [
        "United States",
        "2/27/2014",
        81.92
    ],
    [
        "United States",
        "2/27/2014",
        91.96
    ],
    [
        "United States",
        "2/27/2014",
        23.12
    ],
    [
        "United States",
        "2/27/2014",
        29.6
    ],
    [
        "United States",
        "3/1/2014",
        7.78
    ],
    [
        "United States",
        "3/1/2014",
        9.84
    ],
    [
        "United States",
        "3/3/2014",
        441.96
    ],
    [
        "United States",
        "3/3/2014",
        479.94
    ],
    [
        "United States",
        "3/3/2014",
        196.776
    ],
    [
        "United States",
        "3/3/2014",
        57.96
    ],
    [
        "United States",
        "3/3/2014",
        59.52
    ],
    [
        "United States",
        "3/3/2014",
        107.648
    ],
    [
        "United States",
        "3/3/2014",
        68.04
    ],
    [
        "United States",
        "3/3/2014",
        12.222
    ],
    [
        "United States",
        "3/3/2014",
        18.528
    ],
    [
        "United States",
        "3/3/2014",
        6.976
    ],
    [
        "United States",
        "3/3/2014",
        0.556
    ],
    [
        "United States",
        "3/4/2014",
        1049.44
    ],
    [
        "United States",
        "3/4/2014",
        399.672
    ],
    [
        "United States",
        "3/4/2014",
        170.352
    ],
    [
        "United States",
        "3/4/2014",
        180.98
    ],
    [
        "United States",
        "3/4/2014",
        99.98
    ],
    [
        "United States",
        "3/4/2014",
        72.8
    ],
    [
        "United States",
        "3/4/2014",
        26.88
    ],
    [
        "United States",
        "3/5/2014",
        103.5
    ],
    [
        "United States",
        "3/5/2014",
        89.568
    ],
    [
        "United States",
        "3/5/2014",
        15.25
    ],
    [
        "United States",
        "3/5/2014",
        8.72
    ],
    [
        "United States",
        "3/5/2014",
        9.32
    ],
    [
        "United States",
        "3/5/2014",
        2.464
    ],
    [
        "United States",
        "3/6/2014",
        262.24
    ],
    [
        "United States",
        "3/6/2014",
        234.36
    ],
    [
        "United States",
        "3/6/2014",
        127.96
    ],
    [
        "United States",
        "3/6/2014",
        299.97
    ],
    [
        "United States",
        "3/6/2014",
        221.16
    ],
    [
        "United States",
        "3/6/2014",
        42.68
    ],
    [
        "United States",
        "3/6/2014",
        25.06
    ],
    [
        "United States",
        "3/6/2014",
        18.69
    ],
    [
        "United States",
        "3/6/2014",
        7.9
    ],
    [
        "United States",
        "3/7/2014",
        286.93
    ],
    [
        "United States",
        "3/7/2014",
        206.384
    ],
    [
        "United States",
        "3/7/2014",
        71.97
    ],
    [
        "United States",
        "3/7/2014",
        26.38
    ],
    [
        "United States",
        "3/7/2014",
        67.78
    ],
    [
        "United States",
        "3/7/2014",
        63.488
    ],
    [
        "United States",
        "3/7/2014",
        23.88
    ],
    [
        "United States",
        "3/7/2014",
        14.976
    ],
    [
        "United States",
        "3/7/2014",
        11.52
    ],
    [
        "United States",
        "3/7/2014",
        4.928
    ],
    [
        "United States",
        "3/8/2014",
        91.59
    ],
    [
        "United States",
        "3/8/2014",
        49.08
    ],
    [
        "United States",
        "3/8/2014",
        25.92
    ],
    [
        "United States",
        "3/9/2014",
        647.84
    ],
    [
        "United States",
        "3/9/2014",
        171.2
    ],
    [
        "United States",
        "3/9/2014",
        20.7
    ],
    [
        "United States",
        "3/9/2014",
        3.36
    ],
    [
        "United States",
        "3/10/2014",
        479.984
    ],
    [
        "United States",
        "3/10/2014",
        199.98
    ],
    [
        "United States",
        "3/10/2014",
        30.84
    ],
    [
        "United States",
        "3/11/2014",
        933.408
    ],
    [
        "United States",
        "3/11/2014",
        111.96
    ],
    [
        "United States",
        "3/11/2014",
        48.784
    ],
    [
        "United States",
        "3/11/2014",
        35.91
    ],
    [
        "United States",
        "3/11/2014",
        53.982
    ],
    [
        "United States",
        "3/11/2014",
        43.872
    ],
    [
        "United States",
        "3/11/2014",
        6.696
    ],
    [
        "United States",
        "3/11/2014",
        5.248
    ],
    [
        "United States",
        "3/11/2014",
        13.092
    ],
    [
        "United States",
        "3/12/2014",
        895.92
    ],
    [
        "United States",
        "3/12/2014",
        776.85
    ],
    [
        "United States",
        "3/12/2014",
        154.764
    ],
    [
        "United States",
        "3/12/2014",
        63.88
    ],
    [
        "United States",
        "3/12/2014",
        43.28
    ],
    [
        "United States",
        "3/12/2014",
        26.72
    ],
    [
        "United States",
        "3/12/2014",
        12.294
    ],
    [
        "United States",
        "3/13/2014",
        242.94
    ],
    [
        "United States",
        "3/13/2014",
        40.41
    ],
    [
        "United States",
        "3/13/2014",
        69.93
    ],
    [
        "United States",
        "3/14/2014",
        959.984
    ],
    [
        "United States",
        "3/14/2014",
        1332.496
    ],
    [
        "United States",
        "3/14/2014",
        465.16
    ],
    [
        "United States",
        "3/14/2014",
        209.986
    ],
    [
        "United States",
        "3/14/2014",
        299.9
    ],
    [
        "United States",
        "3/14/2014",
        314.55
    ],
    [
        "United States",
        "3/14/2014",
        288.24
    ],
    [
        "United States",
        "3/14/2014",
        89.768
    ],
    [
        "United States",
        "3/14/2014",
        140.736
    ],
    [
        "United States",
        "3/14/2014",
        214.95
    ],
    [
        "United States",
        "3/14/2014",
        34.36
    ],
    [
        "United States",
        "3/14/2014",
        174.3
    ],
    [
        "United States",
        "3/14/2014",
        29.76
    ],
    [
        "United States",
        "3/14/2014",
        90.8
    ],
    [
        "United States",
        "3/14/2014",
        30.88
    ],
    [
        "United States",
        "3/14/2014",
        15.552
    ],
    [
        "United States",
        "3/14/2014",
        19.456
    ],
    [
        "United States",
        "3/14/2014",
        45.36
    ],
    [
        "United States",
        "3/14/2014",
        27.12
    ],
    [
        "United States",
        "3/14/2014",
        7.992
    ],
    [
        "United States",
        "3/15/2014",
        49.616
    ],
    [
        "United States",
        "3/17/2014",
        445.44
    ],
    [
        "United States",
        "3/17/2014",
        659.976
    ],
    [
        "United States",
        "3/17/2014",
        310.12
    ],
    [
        "United States",
        "3/17/2014",
        159.984
    ],
    [
        "United States",
        "3/17/2014",
        140.67
    ],
    [
        "United States",
        "3/17/2014",
        44.376
    ],
    [
        "United States",
        "3/17/2014",
        54.224
    ],
    [
        "United States",
        "3/17/2014",
        70.464
    ],
    [
        "United States",
        "3/17/2014",
        46.51
    ],
    [
        "United States",
        "3/17/2014",
        51.264
    ],
    [
        "United States",
        "3/17/2014",
        19.68
    ],
    [
        "United States",
        "3/17/2014",
        6.48
    ],
    [
        "United States",
        "3/17/2014",
        5.193
    ],
    [
        "United States",
        "3/18/2014",
        107.44
    ],
    [
        "United States",
        "3/18/2014",
        57.06
    ],
    [
        "United States",
        "3/18/2014",
        71.6
    ],
    [
        "United States",
        "3/18/2014",
        119.7
    ],
    [
        "United States",
        "3/18/2014",
        59.1
    ],
    [
        "United States",
        "3/18/2014",
        46.53
    ],
    [
        "United States",
        "3/18/2014",
        17.456
    ],
    [
        "United States",
        "3/18/2014",
        18.75
    ],
    [
        "United States",
        "3/18/2014",
        10.272
    ],
    [
        "United States",
        "3/18/2014",
        13.776
    ],
    [
        "United States",
        "3/18/2014",
        7.31
    ],
    [
        "United States",
        "3/18/2014",
        9.144
    ],
    [
        "United States",
        "3/18/2014",
        4.608
    ],
    [
        "United States",
        "3/19/2014",
        537.544
    ],
    [
        "United States",
        "3/19/2014",
        182.994
    ],
    [
        "United States",
        "3/19/2014",
        82.524
    ],
    [
        "United States",
        "3/19/2014",
        90.86
    ],
    [
        "United States",
        "3/19/2014",
        46.2
    ],
    [
        "United States",
        "3/19/2014",
        27.816
    ],
    [
        "United States",
        "3/19/2014",
        19.4
    ],
    [
        "United States",
        "3/19/2014",
        23.832
    ],
    [
        "United States",
        "3/19/2014",
        2.688
    ],
    [
        "United States",
        "3/19/2014",
        13.9
    ],
    [
        "United States",
        "3/20/2014",
        697.16
    ],
    [
        "United States",
        "3/20/2014",
        99.54
    ],
    [
        "United States",
        "3/20/2014",
        381.36
    ],
    [
        "United States",
        "3/20/2014",
        199.96
    ],
    [
        "United States",
        "3/20/2014",
        30.93
    ],
    [
        "United States",
        "3/20/2014",
        8.94
    ],
    [
        "United States",
        "3/20/2014",
        14.624
    ],
    [
        "United States",
        "3/20/2014",
        27.496
    ],
    [
        "United States",
        "3/20/2014",
        28.91
    ],
    [
        "United States",
        "3/20/2014",
        657.504
    ],
    [
        "United States",
        "3/20/2014",
        19.824
    ],
    [
        "United States",
        "3/21/2014",
        274.064
    ],
    [
        "United States",
        "3/21/2014",
        238
    ],
    [
        "United States",
        "3/21/2014",
        265.93
    ],
    [
        "United States",
        "3/21/2014",
        61.96
    ],
    [
        "United States",
        "3/21/2014",
        56.704
    ],
    [
        "United States",
        "3/21/2014",
        2.91
    ],
    [
        "United States",
        "3/22/2014",
        1805.88
    ],
    [
        "United States",
        "3/22/2014",
        725.84
    ],
    [
        "United States",
        "3/22/2014",
        277.4
    ],
    [
        "United States",
        "3/22/2014",
        359.32
    ],
    [
        "United States",
        "3/22/2014",
        64.384
    ],
    [
        "United States",
        "3/22/2014",
        30.576
    ],
    [
        "United States",
        "3/22/2014",
        10.896
    ],
    [
        "United States",
        "3/22/2014",
        22.14
    ],
    [
        "United States",
        "3/22/2014",
        8.544
    ],
    [
        "United States",
        "3/22/2014",
        8.856
    ],
    [
        "United States",
        "3/22/2014",
        13.02
    ],
    [
        "United States",
        "3/22/2014",
        5.78
    ],
    [
        "United States",
        "3/24/2014",
        347.58
    ],
    [
        "United States",
        "3/24/2014",
        143.728
    ],
    [
        "United States",
        "3/24/2014",
        13999.96
    ],
    [
        "United States",
        "3/24/2014",
        211.84
    ],
    [
        "United States",
        "3/24/2014",
        34.76
    ],
    [
        "United States",
        "3/24/2014",
        25.68
    ],
    [
        "United States",
        "3/24/2014",
        32.48
    ],
    [
        "United States",
        "3/24/2014",
        20.04
    ],
    [
        "United States",
        "3/25/2014",
        469.99
    ],
    [
        "United States",
        "3/25/2014",
        221.92
    ],
    [
        "United States",
        "3/25/2014",
        271.764
    ],
    [
        "United States",
        "3/25/2014",
        207.846
    ],
    [
        "United States",
        "3/25/2014",
        47.01
    ],
    [
        "United States",
        "3/25/2014",
        26
    ],
    [
        "United States",
        "3/25/2014",
        12.768
    ],
    [
        "United States",
        "3/26/2014",
        479.984
    ],
    [
        "United States",
        "3/26/2014",
        1526.56
    ],
    [
        "United States",
        "3/26/2014",
        211.168
    ],
    [
        "United States",
        "3/26/2014",
        176.04
    ],
    [
        "United States",
        "3/26/2014",
        185.92
    ],
    [
        "United States",
        "3/26/2014",
        470.376
    ],
    [
        "United States",
        "3/26/2014",
        368.97
    ],
    [
        "United States",
        "3/26/2014",
        16.02
    ],
    [
        "United States",
        "3/26/2014",
        90.99
    ],
    [
        "United States",
        "3/26/2014",
        11.05
    ],
    [
        "United States",
        "3/26/2014",
        23.1
    ],
    [
        "United States",
        "3/26/2014",
        6.848
    ],
    [
        "United States",
        "3/27/2014",
        2399.96
    ],
    [
        "United States",
        "3/27/2014",
        119.96
    ],
    [
        "United States",
        "3/27/2014",
        257.568
    ],
    [
        "United States",
        "3/27/2014",
        143.96
    ],
    [
        "United States",
        "3/27/2014",
        74.352
    ],
    [
        "United States",
        "3/27/2014",
        87.168
    ],
    [
        "United States",
        "3/27/2014",
        53.25
    ],
    [
        "United States",
        "3/27/2014",
        60.84
    ],
    [
        "United States",
        "3/27/2014",
        19.83
    ],
    [
        "United States",
        "3/27/2014",
        32.232
    ],
    [
        "United States",
        "3/27/2014",
        3.76
    ],
    [
        "United States",
        "3/28/2014",
        1023.332
    ],
    [
        "United States",
        "3/28/2014",
        600.558
    ],
    [
        "United States",
        "3/28/2014",
        292.1
    ],
    [
        "United States",
        "3/28/2014",
        332.94
    ],
    [
        "United States",
        "3/28/2014",
        211.246
    ],
    [
        "United States",
        "3/28/2014",
        206.1
    ],
    [
        "United States",
        "3/28/2014",
        110.96
    ],
    [
        "United States",
        "3/28/2014",
        39.992
    ],
    [
        "United States",
        "3/28/2014",
        45.68
    ],
    [
        "United States",
        "3/28/2014",
        17.64
    ],
    [
        "United States",
        "3/28/2014",
        17.76
    ],
    [
        "United States",
        "3/28/2014",
        15.008
    ],
    [
        "United States",
        "3/28/2014",
        8.26
    ],
    [
        "United States",
        "3/28/2014",
        11.94
    ],
    [
        "United States",
        "3/29/2014",
        795.48
    ],
    [
        "United States",
        "3/29/2014",
        532.72
    ],
    [
        "United States",
        "3/29/2014",
        21.56
    ],
    [
        "United States",
        "3/29/2014",
        20.04
    ],
    [
        "United States",
        "3/29/2014",
        68.742
    ],
    [
        "United States",
        "3/29/2014",
        26.48
    ],
    [
        "United States",
        "3/29/2014",
        12.96
    ],
    [
        "United States",
        "3/29/2014",
        26.72
    ],
    [
        "United States",
        "3/30/2014",
        81.4
    ],
    [
        "United States",
        "3/31/2014",
        325.86
    ],
    [
        "United States",
        "3/31/2014",
        164.792
    ],
    [
        "United States",
        "3/31/2014",
        94.2
    ],
    [
        "United States",
        "3/31/2014",
        59.76
    ],
    [
        "United States",
        "3/31/2014",
        5.715
    ],
    [
        "United States",
        "3/31/2014",
        6.08
    ],
    [
        "United States",
        "4/1/2014",
        2999.95
    ],
    [
        "United States",
        "4/1/2014",
        671.93
    ],
    [
        "United States",
        "4/1/2014",
        677.58
    ],
    [
        "United States",
        "4/1/2014",
        205.3328
    ],
    [
        "United States",
        "4/1/2014",
        64.12
    ],
    [
        "United States",
        "4/1/2014",
        75.04
    ],
    [
        "United States",
        "4/1/2014",
        61
    ],
    [
        "United States",
        "4/1/2014",
        84.95
    ],
    [
        "United States",
        "4/1/2014",
        34.54
    ],
    [
        "United States",
        "4/1/2014",
        33.62
    ],
    [
        "United States",
        "4/1/2014",
        29.78
    ],
    [
        "United States",
        "4/1/2014",
        29.7
    ],
    [
        "United States",
        "4/1/2014",
        13.468
    ],
    [
        "United States",
        "4/2/2014",
        127.95
    ],
    [
        "United States",
        "4/2/2014",
        482.664
    ],
    [
        "United States",
        "4/2/2014",
        94.2
    ],
    [
        "United States",
        "4/2/2014",
        121.68
    ],
    [
        "United States",
        "4/2/2014",
        4799.984
    ],
    [
        "United States",
        "4/2/2014",
        218.352
    ],
    [
        "United States",
        "4/2/2014",
        42.93
    ],
    [
        "United States",
        "4/2/2014",
        28.4
    ],
    [
        "United States",
        "4/2/2014",
        20.808
    ],
    [
        "United States",
        "4/2/2014",
        23.976
    ],
    [
        "United States",
        "4/2/2014",
        6.264
    ],
    [
        "United States",
        "4/2/2014",
        5.78
    ],
    [
        "United States",
        "4/3/2014",
        360
    ],
    [
        "United States",
        "4/3/2014",
        411.8
    ],
    [
        "United States",
        "4/3/2014",
        14.94
    ],
    [
        "United States",
        "4/3/2014",
        11.12
    ],
    [
        "United States",
        "4/3/2014",
        25.11
    ],
    [
        "United States",
        "4/4/2014",
        7.056
    ],
    [
        "United States",
        "4/4/2014",
        25.472
    ],
    [
        "United States",
        "4/5/2014",
        240.37
    ],
    [
        "United States",
        "4/5/2014",
        119.02
    ],
    [
        "United States",
        "4/5/2014",
        383.84
    ],
    [
        "United States",
        "4/5/2014",
        41.22
    ],
    [
        "United States",
        "4/5/2014",
        7.04
    ],
    [
        "United States",
        "4/5/2014",
        16.98
    ],
    [
        "United States",
        "4/7/2014",
        106.32
    ],
    [
        "United States",
        "4/7/2014",
        8.1
    ],
    [
        "United States",
        "4/8/2014",
        620.6145
    ],
    [
        "United States",
        "4/8/2014",
        617.976
    ],
    [
        "United States",
        "4/8/2014",
        219.184
    ],
    [
        "United States",
        "4/8/2014",
        258.072
    ],
    [
        "United States",
        "4/8/2014",
        233.86
    ],
    [
        "United States",
        "4/8/2014",
        16.256
    ],
    [
        "United States",
        "4/8/2014",
        5.328
    ],
    [
        "United States",
        "4/9/2014",
        2690.97
    ],
    [
        "United States",
        "4/9/2014",
        2591.56
    ],
    [
        "United States",
        "4/9/2014",
        306.9
    ],
    [
        "United States",
        "4/9/2014",
        195.76
    ],
    [
        "United States",
        "4/9/2014",
        244.55
    ],
    [
        "United States",
        "4/9/2014",
        273.96
    ],
    [
        "United States",
        "4/9/2014",
        56.28
    ],
    [
        "United States",
        "4/9/2014",
        41.95
    ],
    [
        "United States",
        "4/10/2014",
        478.24
    ],
    [
        "United States",
        "4/10/2014",
        501.81
    ],
    [
        "United States",
        "4/10/2014",
        191.6
    ],
    [
        "United States",
        "4/10/2014",
        251.64
    ],
    [
        "United States",
        "4/10/2014",
        35.97
    ],
    [
        "United States",
        "4/10/2014",
        65.584
    ],
    [
        "United States",
        "4/10/2014",
        15.12
    ],
    [
        "United States",
        "4/10/2014",
        37.896
    ],
    [
        "United States",
        "4/10/2014",
        8.64
    ],
    [
        "United States",
        "4/10/2014",
        9.82
    ],
    [
        "United States",
        "4/10/2014",
        12.96
    ],
    [
        "United States",
        "4/10/2014",
        17.43
    ],
    [
        "United States",
        "4/11/2014",
        286.15
    ],
    [
        "United States",
        "4/11/2014",
        195.104
    ],
    [
        "United States",
        "4/11/2014",
        99.99
    ],
    [
        "United States",
        "4/11/2014",
        95.736
    ],
    [
        "United States",
        "4/11/2014",
        36.672
    ],
    [
        "United States",
        "4/11/2014",
        12.32
    ],
    [
        "United States",
        "4/11/2014",
        10.368
    ],
    [
        "United States",
        "4/11/2014",
        4.419
    ],
    [
        "United States",
        "4/11/2014",
        7.16
    ],
    [
        "United States",
        "4/11/2014",
        7.61
    ],
    [
        "United States",
        "4/12/2014",
        199.95
    ],
    [
        "United States",
        "4/12/2014",
        41.86
    ],
    [
        "United States",
        "4/12/2014",
        20.992
    ],
    [
        "United States",
        "4/12/2014",
        27.12
    ],
    [
        "United States",
        "4/12/2014",
        16.768
    ],
    [
        "United States",
        "4/12/2014",
        11.364
    ],
    [
        "United States",
        "4/12/2014",
        1.752
    ],
    [
        "United States",
        "4/13/2014",
        39.96
    ],
    [
        "United States",
        "4/13/2014",
        29.7
    ],
    [
        "United States",
        "4/14/2014",
        895.92
    ],
    [
        "United States",
        "4/14/2014",
        436.704
    ],
    [
        "United States",
        "4/14/2014",
        5.28
    ],
    [
        "United States",
        "4/14/2014",
        7.92
    ],
    [
        "United States",
        "4/15/2014",
        198.272
    ],
    [
        "United States",
        "4/15/2014",
        242.352
    ],
    [
        "United States",
        "4/15/2014",
        89.856
    ],
    [
        "United States",
        "4/15/2014",
        74.45
    ],
    [
        "United States",
        "4/15/2014",
        8.76
    ],
    [
        "United States",
        "4/15/2014",
        13.872
    ],
    [
        "United States",
        "4/15/2014",
        10.776
    ],
    [
        "United States",
        "4/15/2014",
        14.592
    ],
    [
        "United States",
        "4/16/2014",
        196.45
    ],
    [
        "United States",
        "4/16/2014",
        79.14
    ],
    [
        "United States",
        "4/16/2014",
        15.57
    ],
    [
        "United States",
        "4/16/2014",
        20.736
    ],
    [
        "United States",
        "4/16/2014",
        15.552
    ],
    [
        "United States",
        "4/16/2014",
        4.89
    ],
    [
        "United States",
        "4/17/2014",
        477.24
    ],
    [
        "United States",
        "4/17/2014",
        205.92
    ],
    [
        "United States",
        "4/17/2014",
        102.833
    ],
    [
        "United States",
        "4/17/2014",
        32.544
    ],
    [
        "United States",
        "4/17/2014",
        40.74
    ],
    [
        "United States",
        "4/17/2014",
        25.98
    ],
    [
        "United States",
        "4/17/2014",
        26.046
    ],
    [
        "United States",
        "4/17/2014",
        16.52
    ],
    [
        "United States",
        "4/17/2014",
        13.71
    ],
    [
        "United States",
        "4/17/2014",
        2.896
    ],
    [
        "United States",
        "4/18/2014",
        2549.985
    ],
    [
        "United States",
        "4/18/2014",
        218.352
    ],
    [
        "United States",
        "4/18/2014",
        274.89
    ],
    [
        "United States",
        "4/18/2014",
        195.136
    ],
    [
        "United States",
        "4/18/2014",
        60.312
    ],
    [
        "United States",
        "4/18/2014",
        28.14
    ],
    [
        "United States",
        "4/18/2014",
        21.594
    ],
    [
        "United States",
        "4/18/2014",
        23.04
    ],
    [
        "United States",
        "4/18/2014",
        12.03
    ],
    [
        "United States",
        "4/18/2014",
        20.736
    ],
    [
        "United States",
        "4/18/2014",
        10.9
    ],
    [
        "United States",
        "4/18/2014",
        7.38
    ],
    [
        "United States",
        "4/18/2014",
        8.964
    ],
    [
        "United States",
        "4/21/2014",
        848.544
    ],
    [
        "United States",
        "4/21/2014",
        317.058
    ],
    [
        "United States",
        "4/21/2014",
        122.382
    ],
    [
        "United States",
        "4/21/2014",
        332.704
    ],
    [
        "United States",
        "4/21/2014",
        51.336
    ],
    [
        "United States",
        "4/21/2014",
        42.408
    ],
    [
        "United States",
        "4/21/2014",
        146.86
    ],
    [
        "United States",
        "4/21/2014",
        51.968
    ],
    [
        "United States",
        "4/21/2014",
        36.56
    ],
    [
        "United States",
        "4/21/2014",
        44.4
    ],
    [
        "United States",
        "4/21/2014",
        15.76
    ],
    [
        "United States",
        "4/21/2014",
        14.56
    ],
    [
        "United States",
        "4/21/2014",
        8.7
    ],
    [
        "United States",
        "4/22/2014",
        908.82
    ],
    [
        "United States",
        "4/22/2014",
        162.6
    ],
    [
        "United States",
        "4/22/2014",
        97.264
    ],
    [
        "United States",
        "4/22/2014",
        47.976
    ],
    [
        "United States",
        "4/22/2014",
        11.54
    ],
    [
        "United States",
        "4/22/2014",
        20.736
    ],
    [
        "United States",
        "4/22/2014",
        2.694
    ],
    [
        "United States",
        "4/22/2014",
        2.934
    ],
    [
        "United States",
        "4/23/2014",
        675.06
    ],
    [
        "United States",
        "4/23/2014",
        254.352
    ],
    [
        "United States",
        "4/23/2014",
        18.28
    ],
    [
        "United States",
        "4/24/2014",
        387.136
    ],
    [
        "United States",
        "4/24/2014",
        122.71
    ],
    [
        "United States",
        "4/24/2014",
        54.9
    ],
    [
        "United States",
        "4/24/2014",
        92.88
    ],
    [
        "United States",
        "4/24/2014",
        155.34
    ],
    [
        "United States",
        "4/24/2014",
        121.94
    ],
    [
        "United States",
        "4/24/2014",
        66.36
    ],
    [
        "United States",
        "4/24/2014",
        24.14
    ],
    [
        "United States",
        "4/24/2014",
        45.408
    ],
    [
        "United States",
        "4/24/2014",
        77.952
    ],
    [
        "United States",
        "4/24/2014",
        5.344
    ],
    [
        "United States",
        "4/24/2014",
        18.688
    ],
    [
        "United States",
        "4/24/2014",
        11.76
    ],
    [
        "United States",
        "4/24/2014",
        11.664
    ],
    [
        "United States",
        "4/24/2014",
        3
    ],
    [
        "United States",
        "4/25/2014",
        552
    ],
    [
        "United States",
        "4/25/2014",
        99.28
    ],
    [
        "United States",
        "4/25/2014",
        113.568
    ],
    [
        "United States",
        "4/25/2014",
        72.784
    ],
    [
        "United States",
        "4/25/2014",
        69.98
    ],
    [
        "United States",
        "4/25/2014",
        7.518
    ],
    [
        "United States",
        "4/25/2014",
        10.43
    ],
    [
        "United States",
        "4/25/2014",
        1.188
    ],
    [
        "United States",
        "4/25/2014",
        1.81
    ],
    [
        "United States",
        "4/26/2014",
        344.981
    ],
    [
        "United States",
        "4/26/2014",
        107.97
    ],
    [
        "United States",
        "4/26/2014",
        67.92
    ],
    [
        "United States",
        "4/26/2014",
        73.344
    ],
    [
        "United States",
        "4/26/2014",
        42.048
    ],
    [
        "United States",
        "4/26/2014",
        19.05
    ],
    [
        "United States",
        "4/26/2014",
        8.896
    ],
    [
        "United States",
        "4/26/2014",
        13.904
    ],
    [
        "United States",
        "4/27/2014",
        39.28
    ],
    [
        "United States",
        "4/27/2014",
        20.34
    ],
    [
        "United States",
        "4/27/2014",
        1.988
    ],
    [
        "United States",
        "4/28/2014",
        220.2656
    ],
    [
        "United States",
        "4/28/2014",
        123.92
    ],
    [
        "United States",
        "4/28/2014",
        47.3
    ],
    [
        "United States",
        "4/28/2014",
        139.58
    ],
    [
        "United States",
        "4/28/2014",
        33.12
    ],
    [
        "United States",
        "4/28/2014",
        12.39
    ],
    [
        "United States",
        "4/29/2014",
        751.984
    ],
    [
        "United States",
        "4/29/2014",
        28.08
    ],
    [
        "United States",
        "4/29/2014",
        8.384
    ],
    [
        "United States",
        "4/29/2014",
        6.848
    ],
    [
        "United States",
        "4/30/2014",
        1048.35
    ],
    [
        "United States",
        "4/30/2014",
        4.91
    ],
    [
        "United States",
        "5/1/2014",
        677.58
    ],
    [
        "United States",
        "5/1/2014",
        220.704
    ],
    [
        "United States",
        "5/1/2014",
        64.96
    ],
    [
        "United States",
        "5/1/2014",
        62.96
    ],
    [
        "United States",
        "5/1/2014",
        163.96
    ],
    [
        "United States",
        "5/1/2014",
        30.56
    ],
    [
        "United States",
        "5/1/2014",
        43.372
    ],
    [
        "United States",
        "5/1/2014",
        23.68
    ],
    [
        "United States",
        "5/1/2014",
        23.24
    ],
    [
        "United States",
        "5/1/2014",
        5.76
    ],
    [
        "United States",
        "5/1/2014",
        13.896
    ],
    [
        "United States",
        "5/1/2014",
        15.528
    ],
    [
        "United States",
        "5/1/2014",
        11.952
    ],
    [
        "United States",
        "5/1/2014",
        4.842
    ],
    [
        "United States",
        "5/1/2014",
        10.368
    ],
    [
        "United States",
        "5/1/2014",
        4.608
    ],
    [
        "United States",
        "5/1/2014",
        2.376
    ],
    [
        "United States",
        "5/1/2014",
        9.78
    ],
    [
        "United States",
        "5/2/2014",
        2803.92
    ],
    [
        "United States",
        "5/2/2014",
        314.352
    ],
    [
        "United States",
        "5/2/2014",
        933.262
    ],
    [
        "United States",
        "5/2/2014",
        4.608
    ],
    [
        "United States",
        "5/2/2014",
        48.9
    ],
    [
        "United States",
        "5/2/2014",
        3.328
    ],
    [
        "United States",
        "5/3/2014",
        129.93
    ],
    [
        "United States",
        "5/3/2014",
        159.56
    ],
    [
        "United States",
        "5/3/2014",
        59.52
    ],
    [
        "United States",
        "5/3/2014",
        34.4
    ],
    [
        "United States",
        "5/3/2014",
        15.7
    ],
    [
        "United States",
        "5/4/2014",
        763.44
    ],
    [
        "United States",
        "5/4/2014",
        373.47
    ],
    [
        "United States",
        "5/4/2014",
        69.52
    ],
    [
        "United States",
        "5/4/2014",
        64.2
    ],
    [
        "United States",
        "5/4/2014",
        26.388
    ],
    [
        "United States",
        "5/4/2014",
        25.92
    ],
    [
        "United States",
        "5/4/2014",
        32.448
    ],
    [
        "United States",
        "5/4/2014",
        22.96
    ],
    [
        "United States",
        "5/4/2014",
        8
    ],
    [
        "United States",
        "5/5/2014",
        571.44
    ],
    [
        "United States",
        "5/5/2014",
        243.16
    ],
    [
        "United States",
        "5/5/2014",
        183.96
    ],
    [
        "United States",
        "5/5/2014",
        300.904
    ],
    [
        "United States",
        "5/5/2014",
        32.4
    ],
    [
        "United States",
        "5/5/2014",
        16.91
    ],
    [
        "United States",
        "5/5/2014",
        17.61
    ],
    [
        "United States",
        "5/5/2014",
        9.396
    ],
    [
        "United States",
        "5/5/2014",
        9.11
    ],
    [
        "United States",
        "5/5/2014",
        2.313
    ],
    [
        "United States",
        "5/5/2014",
        2.202
    ],
    [
        "United States",
        "5/6/2014",
        89.991
    ],
    [
        "United States",
        "5/6/2014",
        34.5
    ],
    [
        "United States",
        "5/6/2014",
        23.16
    ],
    [
        "United States",
        "5/6/2014",
        21.24
    ],
    [
        "United States",
        "5/6/2014",
        9.552
    ],
    [
        "United States",
        "5/6/2014",
        6.68
    ],
    [
        "United States",
        "5/7/2014",
        627.168
    ],
    [
        "United States",
        "5/7/2014",
        772.68
    ],
    [
        "United States",
        "5/7/2014",
        623.4648
    ],
    [
        "United States",
        "5/7/2014",
        408.744
    ],
    [
        "United States",
        "5/7/2014",
        152.94
    ],
    [
        "United States",
        "5/7/2014",
        122.12
    ],
    [
        "United States",
        "5/7/2014",
        68.541
    ],
    [
        "United States",
        "5/7/2014",
        191.968
    ],
    [
        "United States",
        "5/7/2014",
        84.416
    ],
    [
        "United States",
        "5/7/2014",
        54.66
    ],
    [
        "United States",
        "5/7/2014",
        59.2
    ],
    [
        "United States",
        "5/7/2014",
        11.06
    ],
    [
        "United States",
        "5/7/2014",
        6.408
    ],
    [
        "United States",
        "5/8/2014",
        1458.65
    ],
    [
        "United States",
        "5/8/2014",
        419.944
    ],
    [
        "United States",
        "5/8/2014",
        476.8
    ],
    [
        "United States",
        "5/8/2014",
        87.444
    ],
    [
        "United States",
        "5/8/2014",
        79.99
    ],
    [
        "United States",
        "5/8/2014",
        26.64
    ],
    [
        "United States",
        "5/9/2014",
        3359.952
    ],
    [
        "United States",
        "5/9/2014",
        128.058
    ],
    [
        "United States",
        "5/9/2014",
        81.08
    ],
    [
        "United States",
        "5/9/2014",
        41.472
    ],
    [
        "United States",
        "5/9/2014",
        47.992
    ],
    [
        "United States",
        "5/10/2014",
        207
    ],
    [
        "United States",
        "5/10/2014",
        286.85
    ],
    [
        "United States",
        "5/10/2014",
        199.98
    ],
    [
        "United States",
        "5/10/2014",
        147.92
    ],
    [
        "United States",
        "5/10/2014",
        104.28
    ],
    [
        "United States",
        "5/10/2014",
        66.96
    ],
    [
        "United States",
        "5/10/2014",
        65.232
    ],
    [
        "United States",
        "5/12/2014",
        209.979
    ],
    [
        "United States",
        "5/12/2014",
        37.44
    ],
    [
        "United States",
        "5/12/2014",
        74.416
    ],
    [
        "United States",
        "5/12/2014",
        43.92
    ],
    [
        "United States",
        "5/12/2014",
        26.032
    ],
    [
        "United States",
        "5/12/2014",
        37.59
    ],
    [
        "United States",
        "5/12/2014",
        7.996
    ],
    [
        "United States",
        "5/12/2014",
        5.248
    ],
    [
        "United States",
        "5/12/2014",
        6.848
    ],
    [
        "United States",
        "5/13/2014",
        285.48
    ],
    [
        "United States",
        "5/13/2014",
        127.92
    ],
    [
        "United States",
        "5/13/2014",
        87.4
    ],
    [
        "United States",
        "5/13/2014",
        87.6
    ],
    [
        "United States",
        "5/13/2014",
        238.62
    ],
    [
        "United States",
        "5/13/2014",
        42.85
    ],
    [
        "United States",
        "5/13/2014",
        34.24
    ],
    [
        "United States",
        "5/13/2014",
        17
    ],
    [
        "United States",
        "5/13/2014",
        19.168
    ],
    [
        "United States",
        "5/13/2014",
        5.904
    ],
    [
        "United States",
        "5/13/2014",
        6.16
    ],
    [
        "United States",
        "5/13/2014",
        7.77
    ],
    [
        "United States",
        "5/13/2014",
        10.272
    ],
    [
        "United States",
        "5/14/2014",
        914.97
    ],
    [
        "United States",
        "5/14/2014",
        587.97
    ],
    [
        "United States",
        "5/14/2014",
        299.52
    ],
    [
        "United States",
        "5/14/2014",
        530.34
    ],
    [
        "United States",
        "5/14/2014",
        458.43
    ],
    [
        "United States",
        "5/14/2014",
        180.96
    ],
    [
        "United States",
        "5/14/2014",
        58.48
    ],
    [
        "United States",
        "5/14/2014",
        20.768
    ],
    [
        "United States",
        "5/14/2014",
        14.94
    ],
    [
        "United States",
        "5/15/2014",
        1399.93
    ],
    [
        "United States",
        "5/15/2014",
        899.43
    ],
    [
        "United States",
        "5/15/2014",
        261.96
    ],
    [
        "United States",
        "5/15/2014",
        440.19
    ],
    [
        "United States",
        "5/15/2014",
        539.97
    ],
    [
        "United States",
        "5/15/2014",
        89.97
    ],
    [
        "United States",
        "5/15/2014",
        46.2
    ],
    [
        "United States",
        "5/15/2014",
        74
    ],
    [
        "United States",
        "5/15/2014",
        76.864
    ],
    [
        "United States",
        "5/15/2014",
        58.17
    ],
    [
        "United States",
        "5/15/2014",
        24.784
    ],
    [
        "United States",
        "5/15/2014",
        22.58
    ],
    [
        "United States",
        "5/15/2014",
        64.4
    ],
    [
        "United States",
        "5/15/2014",
        48.69
    ],
    [
        "United States",
        "5/15/2014",
        37.2
    ],
    [
        "United States",
        "5/15/2014",
        47.952
    ],
    [
        "United States",
        "5/15/2014",
        18.28
    ],
    [
        "United States",
        "5/15/2014",
        14.7
    ],
    [
        "United States",
        "5/15/2014",
        7.992
    ],
    [
        "United States",
        "5/15/2014",
        3.76
    ],
    [
        "United States",
        "5/15/2014",
        5.04
    ],
    [
        "United States",
        "5/16/2014",
        220.96
    ],
    [
        "United States",
        "5/16/2014",
        56.704
    ],
    [
        "United States",
        "5/16/2014",
        39.96
    ],
    [
        "United States",
        "5/16/2014",
        42.624
    ],
    [
        "United States",
        "5/16/2014",
        29.592
    ],
    [
        "United States",
        "5/16/2014",
        15.552
    ],
    [
        "United States",
        "5/16/2014",
        4.752
    ],
    [
        "United States",
        "5/16/2014",
        11.12
    ],
    [
        "United States",
        "5/17/2014",
        221.024
    ],
    [
        "United States",
        "5/19/2014",
        302.94
    ],
    [
        "United States",
        "5/19/2014",
        344.704
    ],
    [
        "United States",
        "5/19/2014",
        706.86
    ],
    [
        "United States",
        "5/19/2014",
        114.95
    ],
    [
        "United States",
        "5/19/2014",
        113.94
    ],
    [
        "United States",
        "5/19/2014",
        55.98
    ],
    [
        "United States",
        "5/19/2014",
        43.19
    ],
    [
        "United States",
        "5/19/2014",
        34.75
    ],
    [
        "United States",
        "5/19/2014",
        36.048
    ],
    [
        "United States",
        "5/19/2014",
        17.24
    ],
    [
        "United States",
        "5/19/2014",
        22.608
    ],
    [
        "United States",
        "5/19/2014",
        8.928
    ],
    [
        "United States",
        "5/19/2014",
        14.56
    ],
    [
        "United States",
        "5/19/2014",
        6.874
    ],
    [
        "United States",
        "5/19/2014",
        3.048
    ],
    [
        "United States",
        "5/19/2014",
        1.996
    ],
    [
        "United States",
        "5/19/2014",
        1.892
    ],
    [
        "United States",
        "5/20/2014",
        681.408
    ],
    [
        "United States",
        "5/20/2014",
        1628.82
    ],
    [
        "United States",
        "5/20/2014",
        299.97
    ],
    [
        "United States",
        "5/20/2014",
        286.93
    ],
    [
        "United States",
        "5/20/2014",
        281.34
    ],
    [
        "United States",
        "5/20/2014",
        307.98
    ],
    [
        "United States",
        "5/20/2014",
        377.97
    ],
    [
        "United States",
        "5/20/2014",
        97.16
    ],
    [
        "United States",
        "5/20/2014",
        195.64
    ],
    [
        "United States",
        "5/20/2014",
        133.12
    ],
    [
        "United States",
        "5/20/2014",
        67.8
    ],
    [
        "United States",
        "5/20/2014",
        314.352
    ],
    [
        "United States",
        "5/20/2014",
        95.992
    ],
    [
        "United States",
        "5/20/2014",
        36.32
    ],
    [
        "United States",
        "5/20/2014",
        38.016
    ],
    [
        "United States",
        "5/20/2014",
        26.16
    ],
    [
        "United States",
        "5/20/2014",
        27.888
    ],
    [
        "United States",
        "5/20/2014",
        5.58
    ],
    [
        "United States",
        "5/20/2014",
        13.216
    ],
    [
        "United States",
        "5/20/2014",
        3.52
    ],
    [
        "United States",
        "5/21/2014",
        704.76
    ],
    [
        "United States",
        "5/21/2014",
        1123.128
    ],
    [
        "United States",
        "5/21/2014",
        518.272
    ],
    [
        "United States",
        "5/21/2014",
        343.2
    ],
    [
        "United States",
        "5/21/2014",
        131.94
    ],
    [
        "United States",
        "5/21/2014",
        41.28
    ],
    [
        "United States",
        "5/21/2014",
        64.9
    ],
    [
        "United States",
        "5/21/2014",
        25.92
    ],
    [
        "United States",
        "5/21/2014",
        21.5
    ],
    [
        "United States",
        "5/21/2014",
        8.288
    ],
    [
        "United States",
        "5/21/2014",
        7.41
    ],
    [
        "United States",
        "5/21/2014",
        6.98
    ],
    [
        "United States",
        "5/22/2014",
        520.05
    ],
    [
        "United States",
        "5/22/2014",
        17.97
    ],
    [
        "United States",
        "5/23/2014",
        181.986
    ],
    [
        "United States",
        "5/23/2014",
        68.46
    ],
    [
        "United States",
        "5/23/2014",
        49.56
    ],
    [
        "United States",
        "5/23/2014",
        22.344
    ],
    [
        "United States",
        "5/23/2014",
        9.84
    ],
    [
        "United States",
        "5/23/2014",
        2.78
    ],
    [
        "United States",
        "5/23/2014",
        1.592
    ],
    [
        "United States",
        "5/24/2014",
        48.816
    ],
    [
        "United States",
        "5/24/2014",
        171.288
    ],
    [
        "United States",
        "5/24/2014",
        18.32
    ],
    [
        "United States",
        "5/24/2014",
        1.824
    ],
    [
        "United States",
        "5/24/2014",
        1.188
    ],
    [
        "United States",
        "5/26/2014",
        663.92
    ],
    [
        "United States",
        "5/26/2014",
        120
    ],
    [
        "United States",
        "5/26/2014",
        18.84
    ],
    [
        "United States",
        "5/26/2014",
        50.136
    ],
    [
        "United States",
        "5/26/2014",
        29.84
    ],
    [
        "United States",
        "5/26/2014",
        3.29
    ],
    [
        "United States",
        "5/27/2014",
        208.44
    ],
    [
        "United States",
        "5/27/2014",
        25.76
    ],
    [
        "United States",
        "5/27/2014",
        23.08
    ],
    [
        "United States",
        "5/27/2014",
        12.96
    ],
    [
        "United States",
        "5/28/2014",
        302.376
    ],
    [
        "United States",
        "5/28/2014",
        539.97
    ],
    [
        "United States",
        "5/28/2014",
        477.15
    ],
    [
        "United States",
        "5/28/2014",
        477.3
    ],
    [
        "United States",
        "5/28/2014",
        35
    ],
    [
        "United States",
        "5/28/2014",
        25.92
    ],
    [
        "United States",
        "5/28/2014",
        98.16
    ],
    [
        "United States",
        "5/28/2014",
        58.34
    ],
    [
        "United States",
        "5/28/2014",
        12.06
    ],
    [
        "United States",
        "5/28/2014",
        31.44
    ],
    [
        "United States",
        "5/28/2014",
        27.192
    ],
    [
        "United States",
        "5/29/2014",
        301.96
    ],
    [
        "United States",
        "5/29/2014",
        195.96
    ],
    [
        "United States",
        "5/29/2014",
        247.44
    ],
    [
        "United States",
        "5/29/2014",
        271.968
    ],
    [
        "United States",
        "5/29/2014",
        106.869
    ],
    [
        "United States",
        "5/29/2014",
        115.96
    ],
    [
        "United States",
        "5/29/2014",
        125.13
    ],
    [
        "United States",
        "5/29/2014",
        54.368
    ],
    [
        "United States",
        "5/29/2014",
        27.46
    ],
    [
        "United States",
        "5/29/2014",
        13.872
    ],
    [
        "United States",
        "5/29/2014",
        15.552
    ],
    [
        "United States",
        "5/29/2014",
        3.564
    ],
    [
        "United States",
        "5/30/2014",
        465.16
    ],
    [
        "United States",
        "5/30/2014",
        53.424
    ],
    [
        "United States",
        "5/30/2014",
        65.424
    ],
    [
        "United States",
        "5/30/2014",
        43.41
    ],
    [
        "United States",
        "5/30/2014",
        25.92
    ],
    [
        "United States",
        "5/30/2014",
        23.55
    ],
    [
        "United States",
        "5/30/2014",
        7.98
    ],
    [
        "United States",
        "5/30/2014",
        6.24
    ],
    [
        "United States",
        "5/31/2014",
        204.6664
    ],
    [
        "United States",
        "5/31/2014",
        156.792
    ],
    [
        "United States",
        "5/31/2014",
        241.96
    ],
    [
        "United States",
        "5/31/2014",
        35.1
    ],
    [
        "United States",
        "5/31/2014",
        35.36
    ],
    [
        "United States",
        "5/31/2014",
        37.52
    ],
    [
        "United States",
        "5/31/2014",
        13.592
    ],
    [
        "United States",
        "5/31/2014",
        8.01
    ],
    [
        "United States",
        "5/31/2014",
        3.89
    ],
    [
        "United States",
        "6/2/2014",
        2405.2
    ],
    [
        "United States",
        "6/2/2014",
        1925.88
    ],
    [
        "United States",
        "6/2/2014",
        324.744
    ],
    [
        "United States",
        "6/2/2014",
        158.376
    ],
    [
        "United States",
        "6/2/2014",
        83.97
    ],
    [
        "United States",
        "6/2/2014",
        27.744
    ],
    [
        "United States",
        "6/2/2014",
        53.9
    ],
    [
        "United States",
        "6/2/2014",
        39.89
    ],
    [
        "United States",
        "6/2/2014",
        17.38
    ],
    [
        "United States",
        "6/2/2014",
        17.48
    ],
    [
        "United States",
        "6/2/2014",
        3.798
    ],
    [
        "United States",
        "6/3/2014",
        27.44
    ],
    [
        "United States",
        "6/3/2014",
        25.344
    ],
    [
        "United States",
        "6/3/2014",
        43.92
    ],
    [
        "United States",
        "6/3/2014",
        25.344
    ],
    [
        "United States",
        "6/3/2014",
        10.688
    ],
    [
        "United States",
        "6/3/2014",
        2.97
    ],
    [
        "United States",
        "6/4/2014",
        1099.5
    ],
    [
        "United States",
        "6/4/2014",
        503.96
    ],
    [
        "United States",
        "6/4/2014",
        205.992
    ],
    [
        "United States",
        "6/4/2014",
        384.768
    ],
    [
        "United States",
        "6/4/2014",
        136.26
    ],
    [
        "United States",
        "6/4/2014",
        110.4
    ],
    [
        "United States",
        "6/4/2014",
        241.568
    ],
    [
        "United States",
        "6/4/2014",
        44.75
    ],
    [
        "United States",
        "6/4/2014",
        78.66
    ],
    [
        "United States",
        "6/4/2014",
        45.36
    ],
    [
        "United States",
        "6/4/2014",
        35.168
    ],
    [
        "United States",
        "6/4/2014",
        24.472
    ],
    [
        "United States",
        "6/4/2014",
        11.96
    ],
    [
        "United States",
        "6/4/2014",
        15.552
    ],
    [
        "United States",
        "6/4/2014",
        3.912
    ],
    [
        "United States",
        "6/4/2014",
        5.2
    ],
    [
        "United States",
        "6/4/2014",
        4.554
    ],
    [
        "United States",
        "6/5/2014",
        108.08
    ],
    [
        "United States",
        "6/5/2014",
        30.336
    ],
    [
        "United States",
        "6/5/2014",
        71.984
    ],
    [
        "United States",
        "6/5/2014",
        9.54
    ],
    [
        "United States",
        "6/5/2014",
        31.984
    ],
    [
        "United States",
        "6/5/2014",
        6.37
    ],
    [
        "United States",
        "6/5/2014",
        12.48
    ],
    [
        "United States",
        "6/5/2014",
        8.64
    ],
    [
        "United States",
        "6/6/2014",
        470.376
    ],
    [
        "United States",
        "6/6/2014",
        20.736
    ],
    [
        "United States",
        "6/7/2014",
        26.4
    ],
    [
        "United States",
        "6/7/2014",
        4.95
    ],
    [
        "United States",
        "6/9/2014",
        1497.666
    ],
    [
        "United States",
        "6/9/2014",
        381.576
    ],
    [
        "United States",
        "6/9/2014",
        85.056
    ],
    [
        "United States",
        "6/9/2014",
        89.544
    ],
    [
        "United States",
        "6/9/2014",
        23.76
    ],
    [
        "United States",
        "6/9/2014",
        72.588
    ],
    [
        "United States",
        "6/9/2014",
        35.168
    ],
    [
        "United States",
        "6/9/2014",
        17.52
    ],
    [
        "United States",
        "6/9/2014",
        12.176
    ],
    [
        "United States",
        "6/9/2014",
        10.36
    ],
    [
        "United States",
        "6/9/2014",
        1.624
    ],
    [
        "United States",
        "6/10/2014",
        720.76
    ],
    [
        "United States",
        "6/10/2014",
        108.925
    ],
    [
        "United States",
        "6/10/2014",
        23.976
    ],
    [
        "United States",
        "6/10/2014",
        36.352
    ],
    [
        "United States",
        "6/10/2014",
        49.12
    ],
    [
        "United States",
        "6/11/2014",
        514.165
    ],
    [
        "United States",
        "6/11/2014",
        1347.52
    ],
    [
        "United States",
        "6/11/2014",
        132.52
    ],
    [
        "United States",
        "6/11/2014",
        88.776
    ],
    [
        "United States",
        "6/11/2014",
        29.6
    ],
    [
        "United States",
        "6/11/2014",
        16.4
    ],
    [
        "United States",
        "6/11/2014",
        14.13
    ],
    [
        "United States",
        "6/11/2014",
        8.4
    ],
    [
        "United States",
        "6/11/2014",
        15.58
    ],
    [
        "United States",
        "6/11/2014",
        11.56
    ],
    [
        "United States",
        "6/11/2014",
        40.032
    ],
    [
        "United States",
        "6/11/2014",
        14.7
    ],
    [
        "United States",
        "6/11/2014",
        279.96
    ],
    [
        "United States",
        "6/12/2014",
        215.592
    ],
    [
        "United States",
        "6/12/2014",
        280.792
    ],
    [
        "United States",
        "6/12/2014",
        385.8
    ],
    [
        "United States",
        "6/12/2014",
        122.97
    ],
    [
        "United States",
        "6/12/2014",
        68.448
    ],
    [
        "United States",
        "6/12/2014",
        174.42
    ],
    [
        "United States",
        "6/12/2014",
        61.44
    ],
    [
        "United States",
        "6/12/2014",
        102.96
    ],
    [
        "United States",
        "6/12/2014",
        88.04
    ],
    [
        "United States",
        "6/12/2014",
        15.872
    ],
    [
        "United States",
        "6/12/2014",
        37.94
    ],
    [
        "United States",
        "6/12/2014",
        18.288
    ],
    [
        "United States",
        "6/12/2014",
        3.76
    ],
    [
        "United States",
        "6/12/2014",
        4.572
    ],
    [
        "United States",
        "6/13/2014",
        452.94
    ],
    [
        "United States",
        "6/13/2014",
        858.24
    ],
    [
        "United States",
        "6/13/2014",
        91.2
    ],
    [
        "United States",
        "6/13/2014",
        63.92
    ],
    [
        "United States",
        "6/13/2014",
        71.976
    ],
    [
        "United States",
        "6/13/2014",
        64.14
    ],
    [
        "United States",
        "6/13/2014",
        17.088
    ],
    [
        "United States",
        "6/13/2014",
        19.44
    ],
    [
        "United States",
        "6/13/2014",
        13.128
    ],
    [
        "United States",
        "6/13/2014",
        19.04
    ],
    [
        "United States",
        "6/13/2014",
        8.856
    ],
    [
        "United States",
        "6/14/2014",
        470.302
    ],
    [
        "United States",
        "6/14/2014",
        164.736
    ],
    [
        "United States",
        "6/14/2014",
        291.136
    ],
    [
        "United States",
        "6/14/2014",
        181.86
    ],
    [
        "United States",
        "6/14/2014",
        47.984
    ],
    [
        "United States",
        "6/16/2014",
        2239.936
    ],
    [
        "United States",
        "6/16/2014",
        698.352
    ],
    [
        "United States",
        "6/16/2014",
        239.976
    ],
    [
        "United States",
        "6/16/2014",
        120.96
    ],
    [
        "United States",
        "6/16/2014",
        84.55
    ],
    [
        "United States",
        "6/16/2014",
        91.36
    ],
    [
        "United States",
        "6/16/2014",
        47.976
    ],
    [
        "United States",
        "6/16/2014",
        142.776
    ],
    [
        "United States",
        "6/16/2014",
        44.4
    ],
    [
        "United States",
        "6/16/2014",
        119.96
    ],
    [
        "United States",
        "6/16/2014",
        77.728
    ],
    [
        "United States",
        "6/16/2014",
        76.608
    ],
    [
        "United States",
        "6/16/2014",
        17.94
    ],
    [
        "United States",
        "6/16/2014",
        31.168
    ],
    [
        "United States",
        "6/16/2014",
        19.56
    ],
    [
        "United States",
        "6/16/2014",
        4.26
    ],
    [
        "United States",
        "6/17/2014",
        1212.96
    ],
    [
        "United States",
        "6/17/2014",
        192.16
    ],
    [
        "United States",
        "6/17/2014",
        479.952
    ],
    [
        "United States",
        "6/17/2014",
        301.96
    ],
    [
        "United States",
        "6/17/2014",
        65.99
    ],
    [
        "United States",
        "6/17/2014",
        180.66
    ],
    [
        "United States",
        "6/17/2014",
        23.92
    ],
    [
        "United States",
        "6/17/2014",
        16.68
    ],
    [
        "United States",
        "6/17/2014",
        19.44
    ],
    [
        "United States",
        "6/17/2014",
        14.016
    ],
    [
        "United States",
        "6/17/2014",
        191.98
    ],
    [
        "United States",
        "6/17/2014",
        5.936
    ],
    [
        "United States",
        "6/17/2014",
        18.54
    ],
    [
        "United States",
        "6/18/2014",
        3404.5
    ],
    [
        "United States",
        "6/18/2014",
        155.25
    ],
    [
        "United States",
        "6/18/2014",
        146.352
    ],
    [
        "United States",
        "6/18/2014",
        101.34
    ],
    [
        "United States",
        "6/18/2014",
        51.312
    ],
    [
        "United States",
        "6/18/2014",
        9.36
    ],
    [
        "United States",
        "6/18/2014",
        14.03
    ],
    [
        "United States",
        "6/18/2014",
        12.224
    ],
    [
        "United States",
        "6/18/2014",
        2.304
    ],
    [
        "United States",
        "6/19/2014",
        917.9235
    ],
    [
        "United States",
        "6/19/2014",
        74.352
    ],
    [
        "United States",
        "6/19/2014",
        38.88
    ],
    [
        "United States",
        "6/20/2014",
        760.116
    ],
    [
        "United States",
        "6/20/2014",
        457.485
    ],
    [
        "United States",
        "6/20/2014",
        122.328
    ],
    [
        "United States",
        "6/20/2014",
        103.12
    ],
    [
        "United States",
        "6/20/2014",
        153.584
    ],
    [
        "United States",
        "6/20/2014",
        146.176
    ],
    [
        "United States",
        "6/20/2014",
        129.3
    ],
    [
        "United States",
        "6/20/2014",
        97.82
    ],
    [
        "United States",
        "6/20/2014",
        38.784
    ],
    [
        "United States",
        "6/20/2014",
        50.32
    ],
    [
        "United States",
        "6/20/2014",
        24.56
    ],
    [
        "United States",
        "6/20/2014",
        11.184
    ],
    [
        "United States",
        "6/20/2014",
        11.568
    ],
    [
        "United States",
        "6/20/2014",
        6.888
    ],
    [
        "United States",
        "6/20/2014",
        2.264
    ],
    [
        "United States",
        "6/20/2014",
        0.444
    ],
    [
        "United States",
        "6/21/2014",
        503.96
    ],
    [
        "United States",
        "6/21/2014",
        239.97
    ],
    [
        "United States",
        "6/21/2014",
        149.95
    ],
    [
        "United States",
        "6/21/2014",
        31.104
    ],
    [
        "United States",
        "6/21/2014",
        51.312
    ],
    [
        "United States",
        "6/21/2014",
        32.4
    ],
    [
        "United States",
        "6/21/2014",
        4.464
    ],
    [
        "United States",
        "6/21/2014",
        5.248
    ],
    [
        "United States",
        "6/21/2014",
        9.82
    ],
    [
        "United States",
        "6/22/2014",
        447.84
    ],
    [
        "United States",
        "6/22/2014",
        82.4
    ],
    [
        "United States",
        "6/22/2014",
        41.256
    ],
    [
        "United States",
        "6/22/2014",
        17.92
    ],
    [
        "United States",
        "6/22/2014",
        6.24
    ],
    [
        "United States",
        "6/23/2014",
        487.96
    ],
    [
        "United States",
        "6/23/2014",
        37.608
    ],
    [
        "United States",
        "6/23/2014",
        31.155
    ],
    [
        "United States",
        "6/23/2014",
        3.036
    ],
    [
        "United States",
        "6/23/2014",
        8.928
    ],
    [
        "United States",
        "6/23/2014",
        10.332
    ],
    [
        "United States",
        "6/25/2014",
        276.69
    ],
    [
        "United States",
        "6/25/2014",
        385.6
    ],
    [
        "United States",
        "6/25/2014",
        172.764
    ],
    [
        "United States",
        "6/25/2014",
        182.994
    ],
    [
        "United States",
        "6/25/2014",
        102.93
    ],
    [
        "United States",
        "6/25/2014",
        95.92
    ],
    [
        "United States",
        "6/25/2014",
        35.82
    ],
    [
        "United States",
        "6/25/2014",
        21.744
    ],
    [
        "United States",
        "6/25/2014",
        2.88
    ],
    [
        "United States",
        "6/25/2014",
        10.272
    ],
    [
        "United States",
        "6/26/2014",
        871.4
    ],
    [
        "United States",
        "6/26/2014",
        400.784
    ],
    [
        "United States",
        "6/26/2014",
        148.48
    ],
    [
        "United States",
        "6/26/2014",
        71.04
    ],
    [
        "United States",
        "6/26/2014",
        11.304
    ],
    [
        "United States",
        "6/26/2014",
        5.344
    ],
    [
        "United States",
        "6/27/2014",
        543.92
    ],
    [
        "United States",
        "6/27/2014",
        545.916
    ],
    [
        "United States",
        "6/27/2014",
        526.45
    ],
    [
        "United States",
        "6/27/2014",
        273.552
    ],
    [
        "United States",
        "6/27/2014",
        713.88
    ],
    [
        "United States",
        "6/27/2014",
        431.928
    ],
    [
        "United States",
        "6/27/2014",
        358.2
    ],
    [
        "United States",
        "6/27/2014",
        272.94
    ],
    [
        "United States",
        "6/27/2014",
        239.97
    ],
    [
        "United States",
        "6/27/2014",
        68.52
    ],
    [
        "United States",
        "6/27/2014",
        102.368
    ],
    [
        "United States",
        "6/27/2014",
        83.76
    ],
    [
        "United States",
        "6/27/2014",
        28.4
    ],
    [
        "United States",
        "6/27/2014",
        15.92
    ],
    [
        "United States",
        "6/27/2014",
        13.872
    ],
    [
        "United States",
        "6/27/2014",
        4.54
    ],
    [
        "United States",
        "6/28/2014",
        1287.45
    ],
    [
        "United States",
        "6/28/2014",
        126.3
    ],
    [
        "United States",
        "6/28/2014",
        191.646
    ],
    [
        "United States",
        "6/28/2014",
        19.44
    ],
    [
        "United States",
        "6/28/2014",
        20.07
    ],
    [
        "United States",
        "6/30/2014",
        895.92
    ],
    [
        "United States",
        "6/30/2014",
        307.314
    ],
    [
        "United States",
        "6/30/2014",
        409.9992
    ],
    [
        "United States",
        "6/30/2014",
        1295.78
    ],
    [
        "United States",
        "6/30/2014",
        130.71
    ],
    [
        "United States",
        "6/30/2014",
        362.94
    ],
    [
        "United States",
        "6/30/2014",
        62.31
    ],
    [
        "United States",
        "6/30/2014",
        638.82
    ],
    [
        "United States",
        "6/30/2014",
        312.552
    ],
    [
        "United States",
        "6/30/2014",
        21.392
    ],
    [
        "United States",
        "6/30/2014",
        25.16
    ],
    [
        "United States",
        "6/30/2014",
        11.68
    ],
    [
        "United States",
        "6/30/2014",
        30.69
    ],
    [
        "United States",
        "6/30/2014",
        11.54
    ],
    [
        "United States",
        "6/30/2014",
        5.184
    ],
    [
        "United States",
        "7/1/2014",
        1044.63
    ],
    [
        "United States",
        "7/1/2014",
        1085.42
    ],
    [
        "United States",
        "7/1/2014",
        1001.584
    ],
    [
        "United States",
        "7/1/2014",
        569.058
    ],
    [
        "United States",
        "7/1/2014",
        435.999
    ],
    [
        "United States",
        "7/1/2014",
        204.95
    ],
    [
        "United States",
        "7/1/2014",
        248.57
    ],
    [
        "United States",
        "7/1/2014",
        75.792
    ],
    [
        "United States",
        "7/1/2014",
        19.52
    ],
    [
        "United States",
        "7/1/2014",
        14.224
    ],
    [
        "United States",
        "7/1/2014",
        22.23
    ],
    [
        "United States",
        "7/2/2014",
        169.99
    ],
    [
        "United States",
        "7/2/2014",
        25.92
    ],
    [
        "United States",
        "7/2/2014",
        443.92
    ],
    [
        "United States",
        "7/3/2014",
        163.96
    ],
    [
        "United States",
        "7/3/2014",
        5.232
    ],
    [
        "United States",
        "7/4/2014",
        2395.2
    ],
    [
        "United States",
        "7/4/2014",
        1687.8
    ],
    [
        "United States",
        "7/4/2014",
        545.85
    ],
    [
        "United States",
        "7/4/2014",
        287.97
    ],
    [
        "United States",
        "7/4/2014",
        597.132
    ],
    [
        "United States",
        "7/4/2014",
        102.3
    ],
    [
        "United States",
        "7/4/2014",
        215.148
    ],
    [
        "United States",
        "7/4/2014",
        273.896
    ],
    [
        "United States",
        "7/4/2014",
        129.39
    ],
    [
        "United States",
        "7/4/2014",
        59.98
    ],
    [
        "United States",
        "7/4/2014",
        167.968
    ],
    [
        "United States",
        "7/4/2014",
        87.92
    ],
    [
        "United States",
        "7/4/2014",
        30.96
    ],
    [
        "United States",
        "7/4/2014",
        258.9
    ],
    [
        "United States",
        "7/4/2014",
        24
    ],
    [
        "United States",
        "7/4/2014",
        32.896
    ],
    [
        "United States",
        "7/4/2014",
        7.992
    ],
    [
        "United States",
        "7/4/2014",
        24.56
    ],
    [
        "United States",
        "7/4/2014",
        23.99
    ],
    [
        "United States",
        "7/4/2014",
        9.552
    ],
    [
        "United States",
        "7/6/2014",
        332.028
    ],
    [
        "United States",
        "7/6/2014",
        79.96
    ],
    [
        "United States",
        "7/6/2014",
        31.104
    ],
    [
        "United States",
        "7/6/2014",
        15.552
    ],
    [
        "United States",
        "7/6/2014",
        11.394
    ],
    [
        "United States",
        "7/6/2014",
        6.316
    ],
    [
        "United States",
        "7/7/2014",
        239.24
    ],
    [
        "United States",
        "7/7/2014",
        122.136
    ],
    [
        "United States",
        "7/7/2014",
        16.056
    ],
    [
        "United States",
        "7/7/2014",
        2.946
    ],
    [
        "United States",
        "7/8/2014",
        683.988
    ],
    [
        "United States",
        "7/8/2014",
        527.92
    ],
    [
        "United States",
        "7/8/2014",
        252
    ],
    [
        "United States",
        "7/8/2014",
        87.21
    ],
    [
        "United States",
        "7/8/2014",
        17.472
    ],
    [
        "United States",
        "7/8/2014",
        13.392
    ],
    [
        "United States",
        "7/8/2014",
        15.552
    ],
    [
        "United States",
        "7/8/2014",
        16.776
    ],
    [
        "United States",
        "7/8/2014",
        5.94
    ],
    [
        "United States",
        "7/9/2014",
        786.48
    ],
    [
        "United States",
        "7/9/2014",
        145.9
    ],
    [
        "United States",
        "7/9/2014",
        75.18
    ],
    [
        "United States",
        "7/9/2014",
        174.95
    ],
    [
        "United States",
        "7/9/2014",
        198.46
    ],
    [
        "United States",
        "7/9/2014",
        141.9
    ],
    [
        "United States",
        "7/9/2014",
        83.92
    ],
    [
        "United States",
        "7/9/2014",
        86.376
    ],
    [
        "United States",
        "7/9/2014",
        50
    ],
    [
        "United States",
        "7/9/2014",
        52.76
    ],
    [
        "United States",
        "7/9/2014",
        39.98
    ],
    [
        "United States",
        "7/9/2014",
        28.91
    ],
    [
        "United States",
        "7/9/2014",
        23.168
    ],
    [
        "United States",
        "7/9/2014",
        18.24
    ],
    [
        "United States",
        "7/9/2014",
        24.56
    ],
    [
        "United States",
        "7/9/2014",
        12.96
    ],
    [
        "United States",
        "7/9/2014",
        13.12
    ],
    [
        "United States",
        "7/9/2014",
        15.84
    ],
    [
        "United States",
        "7/9/2014",
        7.56
    ],
    [
        "United States",
        "7/10/2014",
        526.45
    ],
    [
        "United States",
        "7/10/2014",
        58.464
    ],
    [
        "United States",
        "7/10/2014",
        274.8
    ],
    [
        "United States",
        "7/10/2014",
        257.98
    ],
    [
        "United States",
        "7/10/2014",
        119.04
    ],
    [
        "United States",
        "7/10/2014",
        228.92
    ],
    [
        "United States",
        "7/10/2014",
        195.64
    ],
    [
        "United States",
        "7/10/2014",
        8.84
    ],
    [
        "United States",
        "7/10/2014",
        1.08
    ],
    [
        "United States",
        "7/11/2014",
        298.464
    ],
    [
        "United States",
        "7/11/2014",
        41.91
    ],
    [
        "United States",
        "7/11/2014",
        18.84
    ],
    [
        "United States",
        "7/12/2014",
        1287.45
    ],
    [
        "United States",
        "7/12/2014",
        132.6
    ],
    [
        "United States",
        "7/12/2014",
        168.1
    ],
    [
        "United States",
        "7/12/2014",
        71.952
    ],
    [
        "United States",
        "7/12/2014",
        29.8
    ],
    [
        "United States",
        "7/12/2014",
        8.67
    ],
    [
        "United States",
        "7/12/2014",
        30.32
    ],
    [
        "United States",
        "7/13/2014",
        3.816
    ],
    [
        "United States",
        "7/14/2014",
        360.38
    ],
    [
        "United States",
        "7/14/2014",
        91.008
    ],
    [
        "United States",
        "7/14/2014",
        13.56
    ],
    [
        "United States",
        "7/14/2014",
        39.594
    ],
    [
        "United States",
        "7/15/2014",
        1889.946
    ],
    [
        "United States",
        "7/15/2014",
        470.376
    ],
    [
        "United States",
        "7/15/2014",
        396.92
    ],
    [
        "United States",
        "7/15/2014",
        276.69
    ],
    [
        "United States",
        "7/15/2014",
        239.456
    ],
    [
        "United States",
        "7/15/2014",
        140.97
    ],
    [
        "United States",
        "7/15/2014",
        71.92
    ],
    [
        "United States",
        "7/15/2014",
        62.04
    ],
    [
        "United States",
        "7/15/2014",
        18.84
    ],
    [
        "United States",
        "7/15/2014",
        9.248
    ],
    [
        "United States",
        "7/15/2014",
        13.12
    ],
    [
        "United States",
        "7/15/2014",
        4.96
    ],
    [
        "United States",
        "7/15/2014",
        4.448
    ],
    [
        "United States",
        "7/16/2014",
        872.94
    ],
    [
        "United States",
        "7/16/2014",
        664.146
    ],
    [
        "United States",
        "7/16/2014",
        310.443
    ],
    [
        "United States",
        "7/16/2014",
        179.94
    ],
    [
        "United States",
        "7/16/2014",
        41.9
    ],
    [
        "United States",
        "7/16/2014",
        12.96
    ],
    [
        "United States",
        "7/16/2014",
        26.55
    ],
    [
        "United States",
        "7/16/2014",
        7.83
    ],
    [
        "United States",
        "7/16/2014",
        8.96
    ],
    [
        "United States",
        "7/16/2014",
        6.56
    ],
    [
        "United States",
        "7/17/2014",
        71.372
    ],
    [
        "United States",
        "7/17/2014",
        242.352
    ],
    [
        "United States",
        "7/17/2014",
        2.912
    ],
    [
        "United States",
        "7/18/2014",
        1194.165
    ],
    [
        "United States",
        "7/18/2014",
        269.98
    ],
    [
        "United States",
        "7/18/2014",
        479.984
    ],
    [
        "United States",
        "7/18/2014",
        99.9
    ],
    [
        "United States",
        "7/18/2014",
        32.4
    ],
    [
        "United States",
        "7/18/2014",
        57.9
    ],
    [
        "United States",
        "7/18/2014",
        39.08
    ],
    [
        "United States",
        "7/18/2014",
        10.56
    ],
    [
        "United States",
        "7/18/2014",
        7.904
    ],
    [
        "United States",
        "7/19/2014",
        311.976
    ],
    [
        "United States",
        "7/19/2014",
        801.6
    ],
    [
        "United States",
        "7/19/2014",
        198.744
    ],
    [
        "United States",
        "7/19/2014",
        599.97
    ],
    [
        "United States",
        "7/19/2014",
        161.568
    ],
    [
        "United States",
        "7/19/2014",
        16.096
    ],
    [
        "United States",
        "7/19/2014",
        9.184
    ],
    [
        "United States",
        "7/19/2014",
        7.656
    ],
    [
        "United States",
        "7/21/2014",
        735.98
    ],
    [
        "United States",
        "7/21/2014",
        389.97
    ],
    [
        "United States",
        "7/21/2014",
        416.32
    ],
    [
        "United States",
        "7/21/2014",
        182.94
    ],
    [
        "United States",
        "7/21/2014",
        183.92
    ],
    [
        "United States",
        "7/21/2014",
        163.764
    ],
    [
        "United States",
        "7/21/2014",
        60.83
    ],
    [
        "United States",
        "7/21/2014",
        43
    ],
    [
        "United States",
        "7/21/2014",
        69.712
    ],
    [
        "United States",
        "7/21/2014",
        14.62
    ],
    [
        "United States",
        "7/21/2014",
        8.792
    ],
    [
        "United States",
        "7/21/2014",
        13.36
    ],
    [
        "United States",
        "7/22/2014",
        1626.192
    ],
    [
        "United States",
        "7/22/2014",
        210.564
    ],
    [
        "United States",
        "7/22/2014",
        271.96
    ],
    [
        "United States",
        "7/22/2014",
        71.928
    ],
    [
        "United States",
        "7/22/2014",
        225.296
    ],
    [
        "United States",
        "7/22/2014",
        231.72
    ],
    [
        "United States",
        "7/22/2014",
        302.94
    ],
    [
        "United States",
        "7/22/2014",
        25.99
    ],
    [
        "United States",
        "7/22/2014",
        50.352
    ],
    [
        "United States",
        "7/22/2014",
        222.32
    ],
    [
        "United States",
        "7/22/2014",
        94.192
    ],
    [
        "United States",
        "7/22/2014",
        101.94
    ],
    [
        "United States",
        "7/22/2014",
        124.404
    ],
    [
        "United States",
        "7/22/2014",
        33.93
    ],
    [
        "United States",
        "7/22/2014",
        16.34
    ],
    [
        "United States",
        "7/22/2014",
        19.68
    ],
    [
        "United States",
        "7/22/2014",
        14.94
    ],
    [
        "United States",
        "7/22/2014",
        2.864
    ],
    [
        "United States",
        "7/22/2014",
        6.48
    ],
    [
        "United States",
        "7/22/2014",
        17.48
    ],
    [
        "United States",
        "7/22/2014",
        8.8
    ],
    [
        "United States",
        "7/22/2014",
        2.112
    ],
    [
        "United States",
        "7/22/2014",
        3.52
    ],
    [
        "United States",
        "7/23/2014",
        526.344
    ],
    [
        "United States",
        "7/23/2014",
        29.97
    ],
    [
        "United States",
        "7/24/2014",
        399.95
    ],
    [
        "United States",
        "7/24/2014",
        159.75
    ],
    [
        "United States",
        "7/24/2014",
        121.536
    ],
    [
        "United States",
        "7/24/2014",
        58.32
    ],
    [
        "United States",
        "7/24/2014",
        15.192
    ],
    [
        "United States",
        "7/24/2014",
        41.4
    ],
    [
        "United States",
        "7/24/2014",
        13.128
    ],
    [
        "United States",
        "7/24/2014",
        11.68
    ],
    [
        "United States",
        "7/24/2014",
        63.312
    ],
    [
        "United States",
        "7/24/2014",
        13.92
    ],
    [
        "United States",
        "7/25/2014",
        2399.96
    ],
    [
        "United States",
        "7/26/2014",
        298.116
    ],
    [
        "United States",
        "7/26/2014",
        259.92
    ],
    [
        "United States",
        "7/26/2014",
        138.588
    ],
    [
        "United States",
        "7/26/2014",
        37.752
    ],
    [
        "United States",
        "7/26/2014",
        20.736
    ],
    [
        "United States",
        "7/26/2014",
        20.096
    ],
    [
        "United States",
        "7/26/2014",
        20.23
    ],
    [
        "United States",
        "7/26/2014",
        3.304
    ],
    [
        "United States",
        "7/27/2014",
        1649.95
    ],
    [
        "United States",
        "7/27/2014",
        362.352
    ],
    [
        "United States",
        "7/28/2014",
        543.92
    ],
    [
        "United States",
        "7/28/2014",
        194.848
    ],
    [
        "United States",
        "7/28/2014",
        91.032
    ],
    [
        "United States",
        "7/28/2014",
        23.88
    ],
    [
        "United States",
        "7/28/2014",
        26.2
    ],
    [
        "United States",
        "7/28/2014",
        12.96
    ],
    [
        "United States",
        "7/28/2014",
        14.89
    ],
    [
        "United States",
        "7/28/2014",
        234.95
    ],
    [
        "United States",
        "7/29/2014",
        1145.6
    ],
    [
        "United States",
        "7/29/2014",
        14.98
    ],
    [
        "United States",
        "7/29/2014",
        9.984
    ],
    [
        "United States",
        "7/30/2014",
        302.67
    ],
    [
        "United States",
        "7/30/2014",
        461.97
    ],
    [
        "United States",
        "7/30/2014",
        137.62
    ],
    [
        "United States",
        "7/30/2014",
        60.12
    ],
    [
        "United States",
        "7/30/2014",
        115.96
    ],
    [
        "United States",
        "7/30/2014",
        90.57
    ],
    [
        "United States",
        "7/30/2014",
        34.848
    ],
    [
        "United States",
        "7/30/2014",
        22
    ],
    [
        "United States",
        "7/30/2014",
        124.792
    ],
    [
        "United States",
        "7/30/2014",
        33.48
    ],
    [
        "United States",
        "7/30/2014",
        4.368
    ],
    [
        "United States",
        "7/30/2014",
        2.896
    ],
    [
        "United States",
        "7/31/2014",
        330.4
    ],
    [
        "United States",
        "7/31/2014",
        76.776
    ],
    [
        "United States",
        "7/31/2014",
        89.95
    ],
    [
        "United States",
        "7/31/2014",
        26.25
    ],
    [
        "United States",
        "8/1/2014",
        849.95
    ],
    [
        "United States",
        "8/1/2014",
        285.576
    ],
    [
        "United States",
        "8/1/2014",
        155.88
    ],
    [
        "United States",
        "8/1/2014",
        36.792
    ],
    [
        "United States",
        "8/1/2014",
        56.56
    ],
    [
        "United States",
        "8/1/2014",
        36.96
    ],
    [
        "United States",
        "8/1/2014",
        41.424
    ],
    [
        "United States",
        "8/1/2014",
        54.816
    ],
    [
        "United States",
        "8/1/2014",
        17.52
    ],
    [
        "United States",
        "8/1/2014",
        11.54
    ],
    [
        "United States",
        "8/1/2014",
        11.01
    ],
    [
        "United States",
        "8/2/2014",
        1439.982
    ],
    [
        "United States",
        "8/2/2014",
        271.96
    ],
    [
        "United States",
        "8/2/2014",
        95.984
    ],
    [
        "United States",
        "8/2/2014",
        186.54
    ],
    [
        "United States",
        "8/2/2014",
        54.896
    ],
    [
        "United States",
        "8/2/2014",
        36.288
    ],
    [
        "United States",
        "8/4/2014",
        183.372
    ],
    [
        "United States",
        "8/4/2014",
        123.96
    ],
    [
        "United States",
        "8/4/2014",
        39.816
    ],
    [
        "United States",
        "8/4/2014",
        99.87
    ],
    [
        "United States",
        "8/4/2014",
        16.52
    ],
    [
        "United States",
        "8/4/2014",
        51.75
    ],
    [
        "United States",
        "8/4/2014",
        16.06
    ],
    [
        "United States",
        "8/5/2014",
        8.784
    ],
    [
        "United States",
        "8/5/2014",
        7.968
    ],
    [
        "United States",
        "8/5/2014",
        3.318
    ],
    [
        "United States",
        "8/6/2014",
        151.056
    ],
    [
        "United States",
        "8/6/2014",
        133.2
    ],
    [
        "United States",
        "8/6/2014",
        125.88
    ],
    [
        "United States",
        "8/6/2014",
        79.78
    ],
    [
        "United States",
        "8/6/2014",
        13.76
    ],
    [
        "United States",
        "8/7/2014",
        824.95
    ],
    [
        "United States",
        "8/7/2014",
        227.88
    ],
    [
        "United States",
        "8/7/2014",
        145.74
    ],
    [
        "United States",
        "8/7/2014",
        115.296
    ],
    [
        "United States",
        "8/7/2014",
        70.12
    ],
    [
        "United States",
        "8/7/2014",
        15.4
    ],
    [
        "United States",
        "8/7/2014",
        24.64
    ],
    [
        "United States",
        "8/8/2014",
        1473.1
    ],
    [
        "United States",
        "8/8/2014",
        707.88
    ],
    [
        "United States",
        "8/8/2014",
        207.184
    ],
    [
        "United States",
        "8/8/2014",
        118.16
    ],
    [
        "United States",
        "8/8/2014",
        244.55
    ],
    [
        "United States",
        "8/8/2014",
        119.448
    ],
    [
        "United States",
        "8/8/2014",
        79.992
    ],
    [
        "United States",
        "8/8/2014",
        159.96
    ],
    [
        "United States",
        "8/8/2014",
        104.8
    ],
    [
        "United States",
        "8/8/2014",
        55.76
    ],
    [
        "United States",
        "8/8/2014",
        51.75
    ],
    [
        "United States",
        "8/8/2014",
        31.128
    ],
    [
        "United States",
        "8/8/2014",
        63.96
    ],
    [
        "United States",
        "8/8/2014",
        24.56
    ],
    [
        "United States",
        "8/8/2014",
        11.952
    ],
    [
        "United States",
        "8/8/2014",
        13.76
    ],
    [
        "United States",
        "8/8/2014",
        11.68
    ],
    [
        "United States",
        "8/11/2014",
        1454.49
    ],
    [
        "United States",
        "8/11/2014",
        177.2
    ],
    [
        "United States",
        "8/11/2014",
        121.3
    ],
    [
        "United States",
        "8/11/2014",
        70.08
    ],
    [
        "United States",
        "8/12/2014",
        477.51
    ],
    [
        "United States",
        "8/12/2014",
        153.584
    ],
    [
        "United States",
        "8/12/2014",
        29.664
    ],
    [
        "United States",
        "8/12/2014",
        12.864
    ],
    [
        "United States",
        "8/12/2014",
        25.92
    ],
    [
        "United States",
        "8/12/2014",
        9.184
    ],
    [
        "United States",
        "8/13/2014",
        542.94
    ],
    [
        "United States",
        "8/13/2014",
        192.16
    ],
    [
        "United States",
        "8/13/2014",
        1779.9
    ],
    [
        "United States",
        "8/13/2014",
        219.9
    ],
    [
        "United States",
        "8/13/2014",
        299.99
    ],
    [
        "United States",
        "8/13/2014",
        174.95
    ],
    [
        "United States",
        "8/13/2014",
        242.624
    ],
    [
        "United States",
        "8/13/2014",
        46.74
    ],
    [
        "United States",
        "8/13/2014",
        17.52
    ],
    [
        "United States",
        "8/13/2014",
        100.704
    ],
    [
        "United States",
        "8/13/2014",
        20.736
    ],
    [
        "United States",
        "8/13/2014",
        54.92
    ],
    [
        "United States",
        "8/14/2014",
        1614.582
    ],
    [
        "United States",
        "8/14/2014",
        423.648
    ],
    [
        "United States",
        "8/14/2014",
        272.048
    ],
    [
        "United States",
        "8/14/2014",
        59.52
    ],
    [
        "United States",
        "8/14/2014",
        83.79
    ],
    [
        "United States",
        "8/14/2014",
        31.44
    ],
    [
        "United States",
        "8/14/2014",
        31.92
    ],
    [
        "United States",
        "8/14/2014",
        31.984
    ],
    [
        "United States",
        "8/14/2014",
        24.32
    ],
    [
        "United States",
        "8/14/2014",
        17.544
    ],
    [
        "United States",
        "8/14/2014",
        14.76
    ],
    [
        "United States",
        "8/14/2014",
        36.024
    ],
    [
        "United States",
        "8/14/2014",
        1.584
    ],
    [
        "United States",
        "8/15/2014",
        418.296
    ],
    [
        "United States",
        "8/15/2014",
        16.68
    ],
    [
        "United States",
        "8/15/2014",
        5.76
    ],
    [
        "United States",
        "8/16/2014",
        1801.632
    ],
    [
        "United States",
        "8/16/2014",
        50.4
    ],
    [
        "United States",
        "8/16/2014",
        97.84
    ],
    [
        "United States",
        "8/17/2014",
        67.136
    ],
    [
        "United States",
        "8/17/2014",
        13.428
    ],
    [
        "United States",
        "8/18/2014",
        4416.174
    ],
    [
        "United States",
        "8/18/2014",
        895.92
    ],
    [
        "United States",
        "8/18/2014",
        2518.29
    ],
    [
        "United States",
        "8/18/2014",
        540.57
    ],
    [
        "United States",
        "8/18/2014",
        462.564
    ],
    [
        "United States",
        "8/18/2014",
        221.056
    ],
    [
        "United States",
        "8/18/2014",
        98.16
    ],
    [
        "United States",
        "8/18/2014",
        102.93
    ],
    [
        "United States",
        "8/18/2014",
        71.976
    ],
    [
        "United States",
        "8/18/2014",
        38.864
    ],
    [
        "United States",
        "8/18/2014",
        74.592
    ],
    [
        "United States",
        "8/18/2014",
        23.36
    ],
    [
        "United States",
        "8/18/2014",
        16.784
    ],
    [
        "United States",
        "8/18/2014",
        8.56
    ],
    [
        "United States",
        "8/18/2014",
        5.552
    ],
    [
        "United States",
        "8/18/2014",
        13.92
    ],
    [
        "United States",
        "8/18/2014",
        8.016
    ],
    [
        "United States",
        "8/19/2014",
        2793.528
    ],
    [
        "United States",
        "8/19/2014",
        1496.16
    ],
    [
        "United States",
        "8/19/2014",
        843.9
    ],
    [
        "United States",
        "8/19/2014",
        1000.02
    ],
    [
        "United States",
        "8/19/2014",
        323.1
    ],
    [
        "United States",
        "8/19/2014",
        200.064
    ],
    [
        "United States",
        "8/19/2014",
        107.424
    ],
    [
        "United States",
        "8/19/2014",
        88.02
    ],
    [
        "United States",
        "8/19/2014",
        65.94
    ],
    [
        "United States",
        "8/19/2014",
        37.91
    ],
    [
        "United States",
        "8/19/2014",
        40.48
    ],
    [
        "United States",
        "8/19/2014",
        21.38
    ],
    [
        "United States",
        "8/19/2014",
        23.18
    ],
    [
        "United States",
        "8/19/2014",
        9.912
    ],
    [
        "United States",
        "8/19/2014",
        10.782
    ],
    [
        "United States",
        "8/19/2014",
        9.94
    ],
    [
        "United States",
        "8/19/2014",
        6.744
    ],
    [
        "United States",
        "8/20/2014",
        387.99
    ],
    [
        "United States",
        "8/20/2014",
        102.72
    ],
    [
        "United States",
        "8/20/2014",
        19.44
    ],
    [
        "United States",
        "8/20/2014",
        2.296
    ],
    [
        "United States",
        "8/21/2014",
        239.12
    ],
    [
        "United States",
        "8/21/2014",
        107.88
    ],
    [
        "United States",
        "8/21/2014",
        226.56
    ],
    [
        "United States",
        "8/21/2014",
        40.29
    ],
    [
        "United States",
        "8/21/2014",
        17.22
    ],
    [
        "United States",
        "8/21/2014",
        35.96
    ],
    [
        "United States",
        "8/21/2014",
        25.92
    ],
    [
        "United States",
        "8/22/2014",
        4305.552
    ],
    [
        "United States",
        "8/22/2014",
        568.728
    ],
    [
        "United States",
        "8/22/2014",
        572.58
    ],
    [
        "United States",
        "8/22/2014",
        866.4
    ],
    [
        "United States",
        "8/22/2014",
        431.968
    ],
    [
        "United States",
        "8/22/2014",
        388.704
    ],
    [
        "United States",
        "8/22/2014",
        277.4
    ],
    [
        "United States",
        "8/22/2014",
        129.92
    ],
    [
        "United States",
        "8/22/2014",
        203.52
    ],
    [
        "United States",
        "8/22/2014",
        237.096
    ],
    [
        "United States",
        "8/22/2014",
        83.88
    ],
    [
        "United States",
        "8/22/2014",
        51.75
    ],
    [
        "United States",
        "8/22/2014",
        117.144
    ],
    [
        "United States",
        "8/22/2014",
        91.92
    ],
    [
        "United States",
        "8/22/2014",
        37.24
    ],
    [
        "United States",
        "8/22/2014",
        33.18
    ],
    [
        "United States",
        "8/22/2014",
        17.12
    ],
    [
        "United States",
        "8/22/2014",
        15.28
    ],
    [
        "United States",
        "8/22/2014",
        25.16
    ],
    [
        "United States",
        "8/22/2014",
        35
    ],
    [
        "United States",
        "8/22/2014",
        32.088
    ],
    [
        "United States",
        "8/22/2014",
        22.752
    ],
    [
        "United States",
        "8/22/2014",
        6.672
    ],
    [
        "United States",
        "8/23/2014",
        210.008
    ],
    [
        "United States",
        "8/23/2014",
        314.532
    ],
    [
        "United States",
        "8/24/2014",
        4367.896
    ],
    [
        "United States",
        "8/24/2014",
        161.376
    ],
    [
        "United States",
        "8/24/2014",
        49.568
    ],
    [
        "United States",
        "8/24/2014",
        8.72
    ],
    [
        "United States",
        "8/24/2014",
        2.784
    ],
    [
        "United States",
        "8/25/2014",
        646.272
    ],
    [
        "United States",
        "8/25/2014",
        10.368
    ],
    [
        "United States",
        "8/25/2014",
        24.672
    ],
    [
        "United States",
        "8/25/2014",
        3.744
    ],
    [
        "United States",
        "8/26/2014",
        130.98
    ],
    [
        "United States",
        "8/26/2014",
        192.16
    ],
    [
        "United States",
        "8/26/2014",
        25.696
    ],
    [
        "United States",
        "8/26/2014",
        9.728
    ],
    [
        "United States",
        "8/26/2014",
        3.424
    ],
    [
        "United States",
        "8/27/2014",
        53.72
    ],
    [
        "United States",
        "8/27/2014",
        64.96
    ],
    [
        "United States",
        "8/27/2014",
        71.98
    ],
    [
        "United States",
        "8/28/2014",
        1119.888
    ],
    [
        "United States",
        "8/28/2014",
        1488.424
    ],
    [
        "United States",
        "8/28/2014",
        347.97
    ],
    [
        "United States",
        "8/28/2014",
        879.984
    ],
    [
        "United States",
        "8/28/2014",
        230.28
    ],
    [
        "United States",
        "8/28/2014",
        354.9
    ],
    [
        "United States",
        "8/28/2014",
        841.568
    ],
    [
        "United States",
        "8/28/2014",
        120.576
    ],
    [
        "United States",
        "8/28/2014",
        198.46
    ],
    [
        "United States",
        "8/28/2014",
        63.84
    ],
    [
        "United States",
        "8/28/2014",
        321.92
    ],
    [
        "United States",
        "8/28/2014",
        37.008
    ],
    [
        "United States",
        "8/28/2014",
        12.672
    ],
    [
        "United States",
        "8/28/2014",
        116.28
    ],
    [
        "United States",
        "8/28/2014",
        14.336
    ],
    [
        "United States",
        "8/28/2014",
        28.4
    ],
    [
        "United States",
        "8/28/2014",
        5.952
    ],
    [
        "United States",
        "8/28/2014",
        2.896
    ],
    [
        "United States",
        "8/28/2014",
        5.184
    ],
    [
        "United States",
        "8/29/2014",
        1137.75
    ],
    [
        "United States",
        "8/29/2014",
        99.68
    ],
    [
        "United States",
        "8/29/2014",
        91.6
    ],
    [
        "United States",
        "8/29/2014",
        25.344
    ],
    [
        "United States",
        "8/29/2014",
        26.72
    ],
    [
        "United States",
        "8/29/2014",
        35.168
    ],
    [
        "United States",
        "8/29/2014",
        21.81
    ],
    [
        "United States",
        "8/29/2014",
        5.56
    ],
    [
        "United States",
        "8/30/2014",
        148.02
    ],
    [
        "United States",
        "8/30/2014",
        47.36
    ],
    [
        "United States",
        "8/30/2014",
        27.44
    ],
    [
        "United States",
        "8/30/2014",
        3.24
    ],
    [
        "United States",
        "8/30/2014",
        9.408
    ],
    [
        "United States",
        "9/1/2014",
        569.568
    ],
    [
        "United States",
        "9/1/2014",
        638.73
    ],
    [
        "United States",
        "9/1/2014",
        659.9
    ],
    [
        "United States",
        "9/1/2014",
        689.408
    ],
    [
        "United States",
        "9/1/2014",
        193.95
    ],
    [
        "United States",
        "9/1/2014",
        149.73
    ],
    [
        "United States",
        "9/1/2014",
        229.544
    ],
    [
        "United States",
        "9/1/2014",
        10.744
    ],
    [
        "United States",
        "9/1/2014",
        8.376
    ],
    [
        "United States",
        "9/1/2014",
        6.672
    ],
    [
        "United States",
        "9/1/2014",
        6.208
    ],
    [
        "United States",
        "9/2/2014",
        283.56
    ],
    [
        "United States",
        "9/2/2014",
        314.6
    ],
    [
        "United States",
        "9/2/2014",
        498.26
    ],
    [
        "United States",
        "9/2/2014",
        114.9
    ],
    [
        "United States",
        "9/2/2014",
        19.99
    ],
    [
        "United States",
        "9/2/2014",
        22.92
    ],
    [
        "United States",
        "9/2/2014",
        7.58
    ],
    [
        "United States",
        "9/3/2014",
        1282.41
    ],
    [
        "United States",
        "9/3/2014",
        1199.8
    ],
    [
        "United States",
        "9/3/2014",
        1577.94
    ],
    [
        "United States",
        "9/3/2014",
        1928.78
    ],
    [
        "United States",
        "9/3/2014",
        254.526
    ],
    [
        "United States",
        "9/3/2014",
        215.976
    ],
    [
        "United States",
        "9/3/2014",
        511.5
    ],
    [
        "United States",
        "9/3/2014",
        236.528
    ],
    [
        "United States",
        "9/3/2014",
        238
    ],
    [
        "United States",
        "9/3/2014",
        167.97
    ],
    [
        "United States",
        "9/3/2014",
        201.584
    ],
    [
        "United States",
        "9/3/2014",
        352.38
    ],
    [
        "United States",
        "9/3/2014",
        197.97
    ],
    [
        "United States",
        "9/3/2014",
        147.92
    ],
    [
        "United States",
        "9/3/2014",
        235.92
    ],
    [
        "United States",
        "9/3/2014",
        146.82
    ],
    [
        "United States",
        "9/3/2014",
        79.92
    ],
    [
        "United States",
        "9/3/2014",
        40.68
    ],
    [
        "United States",
        "9/3/2014",
        74
    ],
    [
        "United States",
        "9/3/2014",
        23.1
    ],
    [
        "United States",
        "9/3/2014",
        43.1
    ],
    [
        "United States",
        "9/3/2014",
        18.72
    ],
    [
        "United States",
        "9/3/2014",
        26.432
    ],
    [
        "United States",
        "9/3/2014",
        17.12
    ],
    [
        "United States",
        "9/3/2014",
        11.54
    ],
    [
        "United States",
        "9/3/2014",
        18.9
    ],
    [
        "United States",
        "9/3/2014",
        12.98
    ],
    [
        "United States",
        "9/3/2014",
        12.192
    ],
    [
        "United States",
        "9/3/2014",
        10.9
    ],
    [
        "United States",
        "9/3/2014",
        15.072
    ],
    [
        "United States",
        "9/3/2014",
        9.4
    ],
    [
        "United States",
        "9/3/2014",
        16
    ],
    [
        "United States",
        "9/3/2014",
        4.92
    ],
    [
        "United States",
        "9/3/2014",
        6.57
    ],
    [
        "United States",
        "9/3/2014",
        11.696
    ],
    [
        "United States",
        "9/3/2014",
        5.588
    ],
    [
        "United States",
        "9/4/2014",
        419.4
    ],
    [
        "United States",
        "9/4/2014",
        181.764
    ],
    [
        "United States",
        "9/4/2014",
        284.97
    ],
    [
        "United States",
        "9/4/2014",
        90.801
    ],
    [
        "United States",
        "9/4/2014",
        108.4
    ],
    [
        "United States",
        "9/4/2014",
        42.616
    ],
    [
        "United States",
        "9/4/2014",
        239.666
    ],
    [
        "United States",
        "9/4/2014",
        82.56
    ],
    [
        "United States",
        "9/4/2014",
        100.8
    ],
    [
        "United States",
        "9/4/2014",
        24.448
    ],
    [
        "United States",
        "9/4/2014",
        5.56
    ],
    [
        "United States",
        "9/4/2014",
        8.904
    ],
    [
        "United States",
        "9/4/2014",
        5.96
    ],
    [
        "United States",
        "9/5/2014",
        1478.272
    ],
    [
        "United States",
        "9/5/2014",
        825.174
    ],
    [
        "United States",
        "9/5/2014",
        1322.352
    ],
    [
        "United States",
        "9/5/2014",
        487.984
    ],
    [
        "United States",
        "9/5/2014",
        217.85
    ],
    [
        "United States",
        "9/5/2014",
        88.074
    ],
    [
        "United States",
        "9/5/2014",
        421.1
    ],
    [
        "United States",
        "9/5/2014",
        97.184
    ],
    [
        "United States",
        "9/5/2014",
        91.96
    ],
    [
        "United States",
        "9/5/2014",
        43.176
    ],
    [
        "United States",
        "9/5/2014",
        17.76
    ],
    [
        "United States",
        "9/5/2014",
        54.32
    ],
    [
        "United States",
        "9/5/2014",
        14.82
    ],
    [
        "United States",
        "9/5/2014",
        30.384
    ],
    [
        "United States",
        "9/5/2014",
        19.04
    ],
    [
        "United States",
        "9/5/2014",
        11.808
    ],
    [
        "United States",
        "9/5/2014",
        12.96
    ],
    [
        "United States",
        "9/5/2014",
        25.56
    ],
    [
        "United States",
        "9/5/2014",
        11.52
    ],
    [
        "United States",
        "9/5/2014",
        13.344
    ],
    [
        "United States",
        "9/5/2014",
        13.12
    ],
    [
        "United States",
        "9/5/2014",
        16.784
    ],
    [
        "United States",
        "9/5/2014",
        10.192
    ],
    [
        "United States",
        "9/5/2014",
        8.256
    ],
    [
        "United States",
        "9/5/2014",
        10.368
    ],
    [
        "United States",
        "9/5/2014",
        5.56
    ],
    [
        "United States",
        "9/5/2014",
        6.912
    ],
    [
        "United States",
        "9/5/2014",
        4.368
    ],
    [
        "United States",
        "9/6/2014",
        89.568
    ],
    [
        "United States",
        "9/6/2014",
        147.184
    ],
    [
        "United States",
        "9/6/2014",
        71.96
    ],
    [
        "United States",
        "9/6/2014",
        15.552
    ],
    [
        "United States",
        "9/6/2014",
        2.78
    ],
    [
        "United States",
        "9/8/2014",
        1577.94
    ],
    [
        "United States",
        "9/8/2014",
        455.712
    ],
    [
        "United States",
        "9/8/2014",
        279.944
    ],
    [
        "United States",
        "9/8/2014",
        478.08
    ],
    [
        "United States",
        "9/8/2014",
        126.56
    ],
    [
        "United States",
        "9/8/2014",
        113.52
    ],
    [
        "United States",
        "9/8/2014",
        81.568
    ],
    [
        "United States",
        "9/8/2014",
        135.3
    ],
    [
        "United States",
        "9/8/2014",
        73.008
    ],
    [
        "United States",
        "9/8/2014",
        37.68
    ],
    [
        "United States",
        "9/8/2014",
        29.24
    ],
    [
        "United States",
        "9/8/2014",
        25.16
    ],
    [
        "United States",
        "9/8/2014",
        39.96
    ],
    [
        "United States",
        "9/8/2014",
        161.568
    ],
    [
        "United States",
        "9/8/2014",
        47.94
    ],
    [
        "United States",
        "9/8/2014",
        16.9
    ],
    [
        "United States",
        "9/8/2014",
        25.98
    ],
    [
        "United States",
        "9/8/2014",
        19.76
    ],
    [
        "United States",
        "9/8/2014",
        15.552
    ],
    [
        "United States",
        "9/8/2014",
        7.857
    ],
    [
        "United States",
        "9/8/2014",
        13.48
    ],
    [
        "United States",
        "9/8/2014",
        80.96
    ],
    [
        "United States",
        "9/8/2014",
        4.896
    ],
    [
        "United States",
        "9/9/2014",
        765.625
    ],
    [
        "United States",
        "9/9/2014",
        319.984
    ],
    [
        "United States",
        "9/9/2014",
        213.43
    ],
    [
        "United States",
        "9/9/2014",
        158.376
    ],
    [
        "United States",
        "9/9/2014",
        258.528
    ],
    [
        "United States",
        "9/9/2014",
        116.832
    ],
    [
        "United States",
        "9/9/2014",
        61.68
    ],
    [
        "United States",
        "9/9/2014",
        85.2
    ],
    [
        "United States",
        "9/9/2014",
        65.12
    ],
    [
        "United States",
        "9/9/2014",
        42.616
    ],
    [
        "United States",
        "9/9/2014",
        45.92
    ],
    [
        "United States",
        "9/9/2014",
        21.184
    ],
    [
        "United States",
        "9/9/2014",
        20.736
    ],
    [
        "United States",
        "9/9/2014",
        9.096
    ],
    [
        "United States",
        "9/10/2014",
        1931.958
    ],
    [
        "United States",
        "9/10/2014",
        628.81
    ],
    [
        "United States",
        "9/10/2014",
        243.92
    ],
    [
        "United States",
        "9/10/2014",
        258.696
    ],
    [
        "United States",
        "9/10/2014",
        258.48
    ],
    [
        "United States",
        "9/10/2014",
        141.372
    ],
    [
        "United States",
        "9/10/2014",
        66.112
    ],
    [
        "United States",
        "9/10/2014",
        99.87
    ],
    [
        "United States",
        "9/10/2014",
        177.536
    ],
    [
        "United States",
        "9/10/2014",
        159.96
    ],
    [
        "United States",
        "9/10/2014",
        47.52
    ],
    [
        "United States",
        "9/10/2014",
        95.88
    ],
    [
        "United States",
        "9/10/2014",
        25.92
    ],
    [
        "United States",
        "9/10/2014",
        31.104
    ],
    [
        "United States",
        "9/10/2014",
        56.45
    ],
    [
        "United States",
        "9/10/2014",
        17.712
    ],
    [
        "United States",
        "9/10/2014",
        17.024
    ],
    [
        "United States",
        "9/10/2014",
        4.86
    ],
    [
        "United States",
        "9/10/2014",
        6.258
    ],
    [
        "United States",
        "9/10/2014",
        11.176
    ],
    [
        "United States",
        "9/10/2014",
        17.48
    ],
    [
        "United States",
        "9/10/2014",
        6.368
    ],
    [
        "United States",
        "9/10/2014",
        8.832
    ],
    [
        "United States",
        "9/10/2014",
        4.503
    ],
    [
        "United States",
        "9/10/2014",
        14.136
    ],
    [
        "United States",
        "9/10/2014",
        9.856
    ],
    [
        "United States",
        "9/10/2014",
        4.672
    ],
    [
        "United States",
        "9/10/2014",
        6.56
    ],
    [
        "United States",
        "9/10/2014",
        3.036
    ],
    [
        "United States",
        "9/11/2014",
        762.594
    ],
    [
        "United States",
        "9/11/2014",
        362.352
    ],
    [
        "United States",
        "9/11/2014",
        85.056
    ],
    [
        "United States",
        "9/11/2014",
        286.29
    ],
    [
        "United States",
        "9/11/2014",
        147.168
    ],
    [
        "United States",
        "9/11/2014",
        112.8
    ],
    [
        "United States",
        "9/11/2014",
        296.85
    ],
    [
        "United States",
        "9/11/2014",
        259.896
    ],
    [
        "United States",
        "9/11/2014",
        18.76
    ],
    [
        "United States",
        "9/11/2014",
        33.99
    ],
    [
        "United States",
        "9/11/2014",
        37.056
    ],
    [
        "United States",
        "9/11/2014",
        14.88
    ],
    [
        "United States",
        "9/11/2014",
        24.18
    ],
    [
        "United States",
        "9/11/2014",
        16.2
    ],
    [
        "United States",
        "9/11/2014",
        13.71
    ],
    [
        "United States",
        "9/11/2014",
        24.9
    ],
    [
        "United States",
        "9/11/2014",
        7.184
    ],
    [
        "United States",
        "9/11/2014",
        2.78
    ],
    [
        "United States",
        "9/12/2014",
        2054.272
    ],
    [
        "United States",
        "9/12/2014",
        1471.96
    ],
    [
        "United States",
        "9/12/2014",
        406.6
    ],
    [
        "United States",
        "9/12/2014",
        177.568
    ],
    [
        "United States",
        "9/12/2014",
        143.952
    ],
    [
        "United States",
        "9/12/2014",
        512.19
    ],
    [
        "United States",
        "9/12/2014",
        184.66
    ],
    [
        "United States",
        "9/12/2014",
        79.96
    ],
    [
        "United States",
        "9/12/2014",
        71.28
    ],
    [
        "United States",
        "9/12/2014",
        67.9
    ],
    [
        "United States",
        "9/12/2014",
        34.504
    ],
    [
        "United States",
        "9/12/2014",
        22.18
    ],
    [
        "United States",
        "9/12/2014",
        19.44
    ],
    [
        "United States",
        "9/12/2014",
        195.68
    ],
    [
        "United States",
        "9/12/2014",
        32.36
    ],
    [
        "United States",
        "9/12/2014",
        19.44
    ],
    [
        "United States",
        "9/12/2014",
        20.544
    ],
    [
        "United States",
        "9/12/2014",
        14.2
    ],
    [
        "United States",
        "9/12/2014",
        10.528
    ],
    [
        "United States",
        "9/12/2014",
        10.272
    ],
    [
        "United States",
        "9/12/2014",
        12.96
    ],
    [
        "United States",
        "9/12/2014",
        1.556
    ],
    [
        "United States",
        "9/13/2014",
        45.36
    ],
    [
        "United States",
        "9/13/2014",
        166.44
    ],
    [
        "United States",
        "9/13/2014",
        90.86
    ],
    [
        "United States",
        "9/13/2014",
        45.78
    ],
    [
        "United States",
        "9/13/2014",
        39.9
    ],
    [
        "United States",
        "9/13/2014",
        94.85
    ],
    [
        "United States",
        "9/13/2014",
        8.36
    ],
    [
        "United States",
        "9/14/2014",
        15.92
    ],
    [
        "United States",
        "9/15/2014",
        1079.85
    ],
    [
        "United States",
        "9/15/2014",
        942.784
    ],
    [
        "United States",
        "9/15/2014",
        589.41
    ],
    [
        "United States",
        "9/15/2014",
        241.17
    ],
    [
        "United States",
        "9/15/2014",
        895.944
    ],
    [
        "United States",
        "9/15/2014",
        113.372
    ],
    [
        "United States",
        "9/15/2014",
        70.98
    ],
    [
        "United States",
        "9/15/2014",
        74.352
    ],
    [
        "United States",
        "9/15/2014",
        127.936
    ],
    [
        "United States",
        "9/15/2014",
        70.95
    ],
    [
        "United States",
        "9/15/2014",
        18.312
    ],
    [
        "United States",
        "9/15/2014",
        29.95
    ],
    [
        "United States",
        "9/15/2014",
        12.585
    ],
    [
        "United States",
        "9/15/2014",
        56.7
    ],
    [
        "United States",
        "9/15/2014",
        19.05
    ],
    [
        "United States",
        "9/15/2014",
        8.56
    ],
    [
        "United States",
        "9/15/2014",
        3.882
    ],
    [
        "United States",
        "9/15/2014",
        11.56
    ],
    [
        "United States",
        "9/16/2014",
        2357.488
    ],
    [
        "United States",
        "9/16/2014",
        782.94
    ],
    [
        "United States",
        "9/16/2014",
        512.96
    ],
    [
        "United States",
        "9/16/2014",
        295.056
    ],
    [
        "United States",
        "9/16/2014",
        323.976
    ],
    [
        "United States",
        "9/16/2014",
        529.9
    ],
    [
        "United States",
        "9/16/2014",
        395.94
    ],
    [
        "United States",
        "9/16/2014",
        218.352
    ],
    [
        "United States",
        "9/16/2014",
        369.544
    ],
    [
        "United States",
        "9/16/2014",
        242.48
    ],
    [
        "United States",
        "9/16/2014",
        99.3
    ],
    [
        "United States",
        "9/16/2014",
        108.96
    ],
    [
        "United States",
        "9/16/2014",
        300.904
    ],
    [
        "United States",
        "9/16/2014",
        184.752
    ],
    [
        "United States",
        "9/16/2014",
        81.96
    ],
    [
        "United States",
        "9/16/2014",
        163.96
    ],
    [
        "United States",
        "9/16/2014",
        47.4
    ],
    [
        "United States",
        "9/16/2014",
        39.99
    ],
    [
        "United States",
        "9/16/2014",
        38.62
    ],
    [
        "United States",
        "9/16/2014",
        31.872
    ],
    [
        "United States",
        "9/16/2014",
        59.98
    ],
    [
        "United States",
        "9/16/2014",
        35.56
    ],
    [
        "United States",
        "9/16/2014",
        16.28
    ],
    [
        "United States",
        "9/16/2014",
        12.42
    ],
    [
        "United States",
        "9/16/2014",
        31.744
    ],
    [
        "United States",
        "9/16/2014",
        2.688
    ],
    [
        "United States",
        "9/17/2014",
        538.194
    ],
    [
        "United States",
        "9/17/2014",
        71.976
    ],
    [
        "United States",
        "9/17/2014",
        47.984
    ],
    [
        "United States",
        "9/17/2014",
        55.992
    ],
    [
        "United States",
        "9/17/2014",
        22.512
    ],
    [
        "United States",
        "9/17/2014",
        18
    ],
    [
        "United States",
        "9/17/2014",
        17.568
    ],
    [
        "United States",
        "9/17/2014",
        20.544
    ],
    [
        "United States",
        "9/17/2014",
        17.9
    ],
    [
        "United States",
        "9/17/2014",
        5.98
    ],
    [
        "United States",
        "9/17/2014",
        3.444
    ],
    [
        "United States",
        "9/17/2014",
        20.736
    ],
    [
        "United States",
        "9/17/2014",
        8.82
    ],
    [
        "United States",
        "9/18/2014",
        1415.76
    ],
    [
        "United States",
        "9/18/2014",
        1292.94
    ],
    [
        "United States",
        "9/18/2014",
        723.92
    ],
    [
        "United States",
        "9/18/2014",
        318.43
    ],
    [
        "United States",
        "9/18/2014",
        480
    ],
    [
        "United States",
        "9/18/2014",
        89.97
    ],
    [
        "United States",
        "9/18/2014",
        164.88
    ],
    [
        "United States",
        "9/18/2014",
        106.32
    ],
    [
        "United States",
        "9/18/2014",
        261.74
    ],
    [
        "United States",
        "9/18/2014",
        25.584
    ],
    [
        "United States",
        "9/18/2014",
        34.05
    ],
    [
        "United States",
        "9/18/2014",
        9.912
    ],
    [
        "United States",
        "9/18/2014",
        14.4
    ],
    [
        "United States",
        "9/18/2014",
        12.96
    ],
    [
        "United States",
        "9/18/2014",
        11.784
    ],
    [
        "United States",
        "9/18/2014",
        5.8
    ],
    [
        "United States",
        "9/18/2014",
        10.776
    ],
    [
        "United States",
        "9/19/2014",
        411.98
    ],
    [
        "United States",
        "9/19/2014",
        244.55
    ],
    [
        "United States",
        "9/19/2014",
        143.7
    ],
    [
        "United States",
        "9/19/2014",
        101.34
    ],
    [
        "United States",
        "9/19/2014",
        113.94
    ],
    [
        "United States",
        "9/19/2014",
        47.584
    ],
    [
        "United States",
        "9/19/2014",
        95.68
    ],
    [
        "United States",
        "9/19/2014",
        114.848
    ],
    [
        "United States",
        "9/19/2014",
        50.96
    ],
    [
        "United States",
        "9/19/2014",
        19.44
    ],
    [
        "United States",
        "9/19/2014",
        34.48
    ],
    [
        "United States",
        "9/19/2014",
        22.72
    ],
    [
        "United States",
        "9/19/2014",
        25.92
    ],
    [
        "United States",
        "9/19/2014",
        20.32
    ],
    [
        "United States",
        "9/19/2014",
        9.82
    ],
    [
        "United States",
        "9/19/2014",
        10.86
    ],
    [
        "United States",
        "9/19/2014",
        8.82
    ],
    [
        "United States",
        "9/19/2014",
        10.08
    ],
    [
        "United States",
        "9/19/2014",
        15.96
    ],
    [
        "United States",
        "9/19/2014",
        8.928
    ],
    [
        "United States",
        "9/20/2014",
        409.216
    ],
    [
        "United States",
        "9/20/2014",
        191.976
    ],
    [
        "United States",
        "9/20/2014",
        471.92
    ],
    [
        "United States",
        "9/20/2014",
        89.584
    ],
    [
        "United States",
        "9/20/2014",
        95.616
    ],
    [
        "United States",
        "9/20/2014",
        149.95
    ],
    [
        "United States",
        "9/20/2014",
        72.588
    ],
    [
        "United States",
        "9/20/2014",
        18.18
    ],
    [
        "United States",
        "9/20/2014",
        32.4
    ],
    [
        "United States",
        "9/20/2014",
        35.4
    ],
    [
        "United States",
        "9/20/2014",
        12.624
    ],
    [
        "United States",
        "9/20/2014",
        23.832
    ],
    [
        "United States",
        "9/20/2014",
        23.32
    ],
    [
        "United States",
        "9/20/2014",
        4.842
    ],
    [
        "United States",
        "9/20/2014",
        16.74
    ],
    [
        "United States",
        "9/21/2014",
        2888.127
    ],
    [
        "United States",
        "9/21/2014",
        2254.41
    ],
    [
        "United States",
        "9/21/2014",
        1299.66
    ],
    [
        "United States",
        "9/21/2014",
        272.646
    ],
    [
        "United States",
        "9/21/2014",
        212.8
    ],
    [
        "United States",
        "9/21/2014",
        104.85
    ],
    [
        "United States",
        "9/21/2014",
        80.991
    ],
    [
        "United States",
        "9/21/2014",
        59.97
    ],
    [
        "United States",
        "9/21/2014",
        72.64
    ],
    [
        "United States",
        "9/21/2014",
        45.4
    ],
    [
        "United States",
        "9/21/2014",
        38.52
    ],
    [
        "United States",
        "9/21/2014",
        13.76
    ],
    [
        "United States",
        "9/21/2014",
        11.784
    ],
    [
        "United States",
        "9/21/2014",
        4.36
    ],
    [
        "United States",
        "9/22/2014",
        71.98
    ],
    [
        "United States",
        "9/22/2014",
        80.48
    ],
    [
        "United States",
        "9/22/2014",
        15.51
    ],
    [
        "United States",
        "9/22/2014",
        55.86
    ],
    [
        "United States",
        "9/22/2014",
        79.98
    ],
    [
        "United States",
        "9/22/2014",
        20.16
    ],
    [
        "United States",
        "9/22/2014",
        12.294
    ],
    [
        "United States",
        "9/22/2014",
        1.908
    ],
    [
        "United States",
        "9/23/2014",
        4663.736
    ],
    [
        "United States",
        "9/23/2014",
        1071
    ],
    [
        "United States",
        "9/23/2014",
        391.98
    ],
    [
        "United States",
        "9/23/2014",
        691.96
    ],
    [
        "United States",
        "9/23/2014",
        241.96
    ],
    [
        "United States",
        "9/23/2014",
        219.84
    ],
    [
        "United States",
        "9/23/2014",
        79.984
    ],
    [
        "United States",
        "9/23/2014",
        40.176
    ],
    [
        "United States",
        "9/23/2014",
        98.16
    ],
    [
        "United States",
        "9/23/2014",
        27.72
    ],
    [
        "United States",
        "9/23/2014",
        67.4
    ],
    [
        "United States",
        "9/23/2014",
        34.95
    ],
    [
        "United States",
        "9/23/2014",
        86.97
    ],
    [
        "United States",
        "9/23/2014",
        33.04
    ],
    [
        "United States",
        "9/23/2014",
        13.392
    ],
    [
        "United States",
        "9/23/2014",
        21.96
    ],
    [
        "United States",
        "9/23/2014",
        27.18
    ],
    [
        "United States",
        "9/23/2014",
        12.07
    ],
    [
        "United States",
        "9/23/2014",
        11.228
    ],
    [
        "United States",
        "9/23/2014",
        17.94
    ],
    [
        "United States",
        "9/23/2014",
        12.96
    ],
    [
        "United States",
        "9/23/2014",
        5.607
    ],
    [
        "United States",
        "9/24/2014",
        594.816
    ],
    [
        "United States",
        "9/24/2014",
        199.95
    ],
    [
        "United States",
        "9/24/2014",
        119.96
    ],
    [
        "United States",
        "9/24/2014",
        180.588
    ],
    [
        "United States",
        "9/24/2014",
        291.96
    ],
    [
        "United States",
        "9/24/2014",
        211.04
    ],
    [
        "United States",
        "9/24/2014",
        31.44
    ],
    [
        "United States",
        "9/24/2014",
        160.96
    ],
    [
        "United States",
        "9/24/2014",
        73.176
    ],
    [
        "United States",
        "9/24/2014",
        72.96
    ],
    [
        "United States",
        "9/24/2014",
        47.984
    ],
    [
        "United States",
        "9/24/2014",
        12.96
    ],
    [
        "United States",
        "9/24/2014",
        251.64
    ],
    [
        "United States",
        "9/24/2014",
        39.984
    ],
    [
        "United States",
        "9/24/2014",
        29.328
    ],
    [
        "United States",
        "9/24/2014",
        6.88
    ],
    [
        "United States",
        "9/24/2014",
        9.248
    ],
    [
        "United States",
        "9/24/2014",
        25.824
    ],
    [
        "United States",
        "9/24/2014",
        14.352
    ],
    [
        "United States",
        "9/24/2014",
        20.736
    ],
    [
        "United States",
        "9/25/2014",
        1169.694
    ],
    [
        "United States",
        "9/25/2014",
        520.464
    ],
    [
        "United States",
        "9/25/2014",
        655.9
    ],
    [
        "United States",
        "9/25/2014",
        859.2
    ],
    [
        "United States",
        "9/25/2014",
        383.96
    ],
    [
        "United States",
        "9/25/2014",
        391.98
    ],
    [
        "United States",
        "9/25/2014",
        235.944
    ],
    [
        "United States",
        "9/25/2014",
        603.92
    ],
    [
        "United States",
        "9/25/2014",
        506.28
    ],
    [
        "United States",
        "9/25/2014",
        437.85
    ],
    [
        "United States",
        "9/25/2014",
        199.8
    ],
    [
        "United States",
        "9/25/2014",
        89.9
    ],
    [
        "United States",
        "9/25/2014",
        72
    ],
    [
        "United States",
        "9/25/2014",
        103.056
    ],
    [
        "United States",
        "9/25/2014",
        40.29
    ],
    [
        "United States",
        "9/25/2014",
        38.71
    ],
    [
        "United States",
        "9/25/2014",
        31.08
    ],
    [
        "United States",
        "9/25/2014",
        15.75
    ],
    [
        "United States",
        "9/25/2014",
        17.88
    ],
    [
        "United States",
        "9/25/2014",
        14.28
    ],
    [
        "United States",
        "9/25/2014",
        11.424
    ],
    [
        "United States",
        "9/25/2014",
        15.51
    ],
    [
        "United States",
        "9/25/2014",
        12.72
    ],
    [
        "United States",
        "9/25/2014",
        15.57
    ],
    [
        "United States",
        "9/25/2014",
        7.3
    ],
    [
        "United States",
        "9/26/2014",
        269.97
    ],
    [
        "United States",
        "9/26/2014",
        177.55
    ],
    [
        "United States",
        "9/26/2014",
        488.646
    ],
    [
        "United States",
        "9/26/2014",
        119.96
    ],
    [
        "United States",
        "9/26/2014",
        190.896
    ],
    [
        "United States",
        "9/26/2014",
        39.9
    ],
    [
        "United States",
        "9/26/2014",
        47.12
    ],
    [
        "United States",
        "9/26/2014",
        10.608
    ],
    [
        "United States",
        "9/26/2014",
        8.595
    ],
    [
        "United States",
        "9/26/2014",
        24.448
    ],
    [
        "United States",
        "9/26/2014",
        8.26
    ],
    [
        "United States",
        "9/26/2014",
        20.7
    ],
    [
        "United States",
        "9/26/2014",
        5.56
    ],
    [
        "United States",
        "9/27/2014",
        931.176
    ],
    [
        "United States",
        "9/27/2014",
        419.136
    ],
    [
        "United States",
        "9/27/2014",
        71.88
    ],
    [
        "United States",
        "9/27/2014",
        17.04
    ],
    [
        "United States",
        "9/27/2014",
        9.24
    ],
    [
        "United States",
        "9/27/2014",
        2.224
    ],
    [
        "United States",
        "9/27/2014",
        35.88
    ],
    [
        "United States",
        "9/29/2014",
        209.792
    ],
    [
        "United States",
        "9/29/2014",
        147.184
    ],
    [
        "United States",
        "9/29/2014",
        76.776
    ],
    [
        "United States",
        "9/29/2014",
        32.776
    ],
    [
        "United States",
        "9/29/2014",
        54.384
    ],
    [
        "United States",
        "9/29/2014",
        14.352
    ],
    [
        "United States",
        "9/29/2014",
        10.368
    ],
    [
        "United States",
        "9/29/2014",
        9.24
    ],
    [
        "United States",
        "9/29/2014",
        2.655
    ],
    [
        "United States",
        "9/29/2014",
        1.744
    ],
    [
        "United States",
        "9/30/2014",
        344.22
    ],
    [
        "United States",
        "9/30/2014",
        239.976
    ],
    [
        "United States",
        "9/30/2014",
        72.784
    ],
    [
        "United States",
        "9/30/2014",
        243.92
    ],
    [
        "United States",
        "9/30/2014",
        97.84
    ],
    [
        "United States",
        "9/30/2014",
        51.168
    ],
    [
        "United States",
        "9/30/2014",
        97.3
    ],
    [
        "United States",
        "9/30/2014",
        336.51
    ],
    [
        "United States",
        "9/30/2014",
        63.686
    ],
    [
        "United States",
        "9/30/2014",
        46.672
    ],
    [
        "United States",
        "9/30/2014",
        51.55
    ],
    [
        "United States",
        "9/30/2014",
        99.2
    ],
    [
        "United States",
        "9/30/2014",
        21.248
    ],
    [
        "United States",
        "9/30/2014",
        15.552
    ],
    [
        "United States",
        "9/30/2014",
        8.448
    ],
    [
        "United States",
        "9/30/2014",
        23.34
    ],
    [
        "United States",
        "9/30/2014",
        27.968
    ],
    [
        "United States",
        "9/30/2014",
        7.98
    ],
    [
        "United States",
        "9/30/2014",
        51.75
    ],
    [
        "United States",
        "9/30/2014",
        7.968
    ],
    [
        "United States",
        "9/30/2014",
        35
    ],
    [
        "United States",
        "10/1/2014",
        167.94
    ],
    [
        "United States",
        "10/1/2014",
        164.88
    ],
    [
        "United States",
        "10/1/2014",
        159.98
    ],
    [
        "United States",
        "10/1/2014",
        20.664
    ],
    [
        "United States",
        "10/1/2014",
        11.76
    ],
    [
        "United States",
        "10/1/2014",
        3.89
    ],
    [
        "United States",
        "10/1/2014",
        11.646
    ],
    [
        "United States",
        "10/2/2014",
        1704.89
    ],
    [
        "United States",
        "10/2/2014",
        241.96
    ],
    [
        "United States",
        "10/2/2014",
        451.152
    ],
    [
        "United States",
        "10/2/2014",
        61.776
    ],
    [
        "United States",
        "10/2/2014",
        104.85
    ],
    [
        "United States",
        "10/2/2014",
        104.75
    ],
    [
        "United States",
        "10/2/2014",
        91.84
    ],
    [
        "United States",
        "10/2/2014",
        108.608
    ],
    [
        "United States",
        "10/2/2014",
        81.088
    ],
    [
        "United States",
        "10/2/2014",
        19.44
    ],
    [
        "United States",
        "10/2/2014",
        6.672
    ],
    [
        "United States",
        "10/2/2014",
        1.44
    ],
    [
        "United States",
        "10/3/2014",
        1575.14
    ],
    [
        "United States",
        "10/3/2014",
        2314.116
    ],
    [
        "United States",
        "10/3/2014",
        369.16
    ],
    [
        "United States",
        "10/3/2014",
        112.12
    ],
    [
        "United States",
        "10/3/2014",
        157.74
    ],
    [
        "United States",
        "10/3/2014",
        217.764
    ],
    [
        "United States",
        "10/3/2014",
        95.144
    ],
    [
        "United States",
        "10/3/2014",
        65.99
    ],
    [
        "United States",
        "10/3/2014",
        58.05
    ],
    [
        "United States",
        "10/3/2014",
        49.12
    ],
    [
        "United States",
        "10/3/2014",
        84.784
    ],
    [
        "United States",
        "10/3/2014",
        56.98
    ],
    [
        "United States",
        "10/3/2014",
        34.236
    ],
    [
        "United States",
        "10/3/2014",
        20.736
    ],
    [
        "United States",
        "10/3/2014",
        21.984
    ],
    [
        "United States",
        "10/3/2014",
        39.072
    ],
    [
        "United States",
        "10/3/2014",
        15.224
    ],
    [
        "United States",
        "10/3/2014",
        19.76
    ],
    [
        "United States",
        "10/3/2014",
        9.656
    ],
    [
        "United States",
        "10/3/2014",
        11.808
    ],
    [
        "United States",
        "10/3/2014",
        27.36
    ],
    [
        "United States",
        "10/3/2014",
        17.46
    ],
    [
        "United States",
        "10/3/2014",
        22.638
    ],
    [
        "United States",
        "10/3/2014",
        8.94
    ],
    [
        "United States",
        "10/3/2014",
        2.88
    ],
    [
        "United States",
        "10/3/2014",
        10.16
    ],
    [
        "United States",
        "10/4/2014",
        1793.98
    ],
    [
        "United States",
        "10/4/2014",
        371.97
    ],
    [
        "United States",
        "10/4/2014",
        171.288
    ],
    [
        "United States",
        "10/4/2014",
        83.92
    ],
    [
        "United States",
        "10/4/2014",
        22.58
    ],
    [
        "United States",
        "10/4/2014",
        20.64
    ],
    [
        "United States",
        "10/4/2014",
        15.552
    ],
    [
        "United States",
        "10/4/2014",
        17.92
    ],
    [
        "United States",
        "10/4/2014",
        6.63
    ],
    [
        "United States",
        "10/5/2014",
        19.98
    ],
    [
        "United States",
        "10/6/2014",
        5199.96
    ],
    [
        "United States",
        "10/6/2014",
        160.93
    ],
    [
        "United States",
        "10/6/2014",
        435.168
    ],
    [
        "United States",
        "10/6/2014",
        75.792
    ],
    [
        "United States",
        "10/6/2014",
        221.382
    ],
    [
        "United States",
        "10/6/2014",
        206.352
    ],
    [
        "United States",
        "10/6/2014",
        61.96
    ],
    [
        "United States",
        "10/6/2014",
        39.92
    ],
    [
        "United States",
        "10/6/2014",
        72.9
    ],
    [
        "United States",
        "10/6/2014",
        87.8
    ],
    [
        "United States",
        "10/6/2014",
        19.936
    ],
    [
        "United States",
        "10/6/2014",
        14.9
    ],
    [
        "United States",
        "10/6/2014",
        15.8
    ],
    [
        "United States",
        "10/6/2014",
        7.992
    ],
    [
        "United States",
        "10/6/2014",
        63.824
    ],
    [
        "United States",
        "10/7/2014",
        290.336
    ],
    [
        "United States",
        "10/7/2014",
        344.91
    ],
    [
        "United States",
        "10/7/2014",
        227.84
    ],
    [
        "United States",
        "10/7/2014",
        143.7
    ],
    [
        "United States",
        "10/7/2014",
        319.96
    ],
    [
        "United States",
        "10/7/2014",
        40.99
    ],
    [
        "United States",
        "10/7/2014",
        37.94
    ],
    [
        "United States",
        "10/7/2014",
        19.152
    ],
    [
        "United States",
        "10/7/2014",
        17.04
    ],
    [
        "United States",
        "10/7/2014",
        41.96
    ],
    [
        "United States",
        "10/7/2014",
        9.344
    ],
    [
        "United States",
        "10/7/2014",
        6.48
    ],
    [
        "United States",
        "10/8/2014",
        1115.91
    ],
    [
        "United States",
        "10/8/2014",
        580.672
    ],
    [
        "United States",
        "10/8/2014",
        222.384
    ],
    [
        "United States",
        "10/8/2014",
        307.666
    ],
    [
        "United States",
        "10/8/2014",
        154.764
    ],
    [
        "United States",
        "10/8/2014",
        128.744
    ],
    [
        "United States",
        "10/8/2014",
        50.454
    ],
    [
        "United States",
        "10/8/2014",
        85.52
    ],
    [
        "United States",
        "10/8/2014",
        79.92
    ],
    [
        "United States",
        "10/8/2014",
        18.936
    ],
    [
        "United States",
        "10/8/2014",
        4.24
    ],
    [
        "United States",
        "10/9/2014",
        239.96
    ],
    [
        "United States",
        "10/9/2014",
        42.76
    ],
    [
        "United States",
        "10/9/2014",
        145.764
    ],
    [
        "United States",
        "10/9/2014",
        103.192
    ],
    [
        "United States",
        "10/9/2014",
        36
    ],
    [
        "United States",
        "10/9/2014",
        40.68
    ],
    [
        "United States",
        "10/10/2014",
        652.45
    ],
    [
        "United States",
        "10/10/2014",
        254.058
    ],
    [
        "United States",
        "10/10/2014",
        314.352
    ],
    [
        "United States",
        "10/10/2014",
        45.888
    ],
    [
        "United States",
        "10/10/2014",
        67.144
    ],
    [
        "United States",
        "10/10/2014",
        35.2
    ],
    [
        "United States",
        "10/10/2014",
        66.645
    ],
    [
        "United States",
        "10/10/2014",
        18.98
    ],
    [
        "United States",
        "10/10/2014",
        12.816
    ],
    [
        "United States",
        "10/10/2014",
        10.816
    ],
    [
        "United States",
        "10/10/2014",
        18.24
    ],
    [
        "United States",
        "10/11/2014",
        239.358
    ],
    [
        "United States",
        "10/13/2014",
        2154.9
    ],
    [
        "United States",
        "10/13/2014",
        595
    ],
    [
        "United States",
        "10/13/2014",
        673.344
    ],
    [
        "United States",
        "10/13/2014",
        791.88
    ],
    [
        "United States",
        "10/13/2014",
        435.84
    ],
    [
        "United States",
        "10/13/2014",
        254.604
    ],
    [
        "United States",
        "10/13/2014",
        369.544
    ],
    [
        "United States",
        "10/13/2014",
        101.84
    ],
    [
        "United States",
        "10/13/2014",
        39.984
    ],
    [
        "United States",
        "10/13/2014",
        45
    ],
    [
        "United States",
        "10/13/2014",
        40.48
    ],
    [
        "United States",
        "10/13/2014",
        79.872
    ],
    [
        "United States",
        "10/13/2014",
        17.9
    ],
    [
        "United States",
        "10/13/2014",
        9.96
    ],
    [
        "United States",
        "10/13/2014",
        5.88
    ],
    [
        "United States",
        "10/13/2014",
        7.968
    ],
    [
        "United States",
        "10/13/2014",
        10.368
    ],
    [
        "United States",
        "10/13/2014",
        0.99
    ],
    [
        "United States",
        "10/14/2014",
        5083.96
    ],
    [
        "United States",
        "10/14/2014",
        1504.52
    ],
    [
        "United States",
        "10/14/2014",
        904.9
    ],
    [
        "United States",
        "10/14/2014",
        348.56
    ],
    [
        "United States",
        "10/14/2014",
        63.312
    ],
    [
        "United States",
        "10/14/2014",
        209.94
    ],
    [
        "United States",
        "10/14/2014",
        96.784
    ],
    [
        "United States",
        "10/14/2014",
        31.984
    ],
    [
        "United States",
        "10/14/2014",
        59.712
    ],
    [
        "United States",
        "10/14/2014",
        25.92
    ],
    [
        "United States",
        "10/14/2014",
        10.476
    ],
    [
        "United States",
        "10/14/2014",
        11.07
    ],
    [
        "United States",
        "10/14/2014",
        24.84
    ],
    [
        "United States",
        "10/14/2014",
        18.176
    ],
    [
        "United States",
        "10/14/2014",
        11.648
    ],
    [
        "United States",
        "10/15/2014",
        37.66
    ],
    [
        "United States",
        "10/15/2014",
        9.46
    ],
    [
        "United States",
        "10/15/2014",
        46.36
    ],
    [
        "United States",
        "10/15/2014",
        27.396
    ],
    [
        "United States",
        "10/15/2014",
        13.456
    ],
    [
        "United States",
        "10/16/2014",
        510.24
    ],
    [
        "United States",
        "10/16/2014",
        204.95
    ],
    [
        "United States",
        "10/16/2014",
        152.65
    ],
    [
        "United States",
        "10/16/2014",
        87.92
    ],
    [
        "United States",
        "10/16/2014",
        13.05
    ],
    [
        "United States",
        "10/16/2014",
        22.72
    ],
    [
        "United States",
        "10/16/2014",
        11.68
    ],
    [
        "United States",
        "10/16/2014",
        14.73
    ],
    [
        "United States",
        "10/17/2014",
        307.776
    ],
    [
        "United States",
        "10/17/2014",
        1875.258
    ],
    [
        "United States",
        "10/17/2014",
        547.3
    ],
    [
        "United States",
        "10/17/2014",
        599.985
    ],
    [
        "United States",
        "10/17/2014",
        124.75
    ],
    [
        "United States",
        "10/17/2014",
        18.528
    ],
    [
        "United States",
        "10/18/2014",
        52.792
    ],
    [
        "United States",
        "10/18/2014",
        49.96
    ],
    [
        "United States",
        "10/18/2014",
        12.96
    ],
    [
        "United States",
        "10/18/2014",
        10.64
    ],
    [
        "United States",
        "10/20/2014",
        1633.188
    ],
    [
        "United States",
        "10/20/2014",
        328.3992
    ],
    [
        "United States",
        "10/20/2014",
        309.576
    ],
    [
        "United States",
        "10/20/2014",
        123.256
    ],
    [
        "United States",
        "10/20/2014",
        91.275
    ],
    [
        "United States",
        "10/20/2014",
        56.56
    ],
    [
        "United States",
        "10/20/2014",
        39.624
    ],
    [
        "United States",
        "10/20/2014",
        29.472
    ],
    [
        "United States",
        "10/20/2014",
        30.56
    ],
    [
        "United States",
        "10/20/2014",
        23.68
    ],
    [
        "United States",
        "10/20/2014",
        31.5
    ],
    [
        "United States",
        "10/20/2014",
        32.7
    ],
    [
        "United States",
        "10/20/2014",
        16.68
    ],
    [
        "United States",
        "10/20/2014",
        24.368
    ],
    [
        "United States",
        "10/20/2014",
        8.96
    ],
    [
        "United States",
        "10/20/2014",
        2.072
    ],
    [
        "United States",
        "10/21/2014",
        284.364
    ],
    [
        "United States",
        "10/21/2014",
        43.936
    ],
    [
        "United States",
        "10/21/2014",
        24.55
    ],
    [
        "United States",
        "10/21/2014",
        145.85
    ],
    [
        "United States",
        "10/21/2014",
        45.528
    ],
    [
        "United States",
        "10/21/2014",
        665.408
    ],
    [
        "United States",
        "10/21/2014",
        14.352
    ],
    [
        "United States",
        "10/21/2014",
        20.928
    ],
    [
        "United States",
        "10/21/2014",
        15.984
    ],
    [
        "United States",
        "10/21/2014",
        4.768
    ],
    [
        "United States",
        "10/21/2014",
        39.96
    ],
    [
        "United States",
        "10/21/2014",
        6.672
    ],
    [
        "United States",
        "10/21/2014",
        4.448
    ],
    [
        "United States",
        "10/21/2014",
        13.36
    ],
    [
        "United States",
        "10/21/2014",
        3.75
    ],
    [
        "United States",
        "10/22/2014",
        909.12
    ],
    [
        "United States",
        "10/22/2014",
        1439.92
    ],
    [
        "United States",
        "10/22/2014",
        683.952
    ],
    [
        "United States",
        "10/22/2014",
        478.48
    ],
    [
        "United States",
        "10/22/2014",
        329.988
    ],
    [
        "United States",
        "10/22/2014",
        262.11
    ],
    [
        "United States",
        "10/22/2014",
        161.568
    ],
    [
        "United States",
        "10/22/2014",
        71.376
    ],
    [
        "United States",
        "10/22/2014",
        45.696
    ],
    [
        "United States",
        "10/22/2014",
        28.4
    ],
    [
        "United States",
        "10/22/2014",
        38.82
    ],
    [
        "United States",
        "10/22/2014",
        23.992
    ],
    [
        "United States",
        "10/22/2014",
        21.9
    ],
    [
        "United States",
        "10/22/2014",
        17.856
    ],
    [
        "United States",
        "10/22/2014",
        5.184
    ],
    [
        "United States",
        "10/22/2014",
        8.559
    ],
    [
        "United States",
        "10/22/2014",
        6.216
    ],
    [
        "United States",
        "10/22/2014",
        4.064
    ],
    [
        "United States",
        "10/23/2014",
        2399.6
    ],
    [
        "United States",
        "10/23/2014",
        579.136
    ],
    [
        "United States",
        "10/23/2014",
        333.09
    ],
    [
        "United States",
        "10/23/2014",
        11199.968
    ],
    [
        "United States",
        "10/23/2014",
        248.98
    ],
    [
        "United States",
        "10/23/2014",
        63.9
    ],
    [
        "United States",
        "10/23/2014",
        177.225
    ],
    [
        "United States",
        "10/23/2014",
        52.99
    ],
    [
        "United States",
        "10/23/2014",
        31.68
    ],
    [
        "United States",
        "10/23/2014",
        36.44
    ],
    [
        "United States",
        "10/23/2014",
        32.7
    ],
    [
        "United States",
        "10/23/2014",
        3.168
    ],
    [
        "United States",
        "10/24/2014",
        637.896
    ],
    [
        "United States",
        "10/24/2014",
        823.96
    ],
    [
        "United States",
        "10/24/2014",
        210.68
    ],
    [
        "United States",
        "10/24/2014",
        240.744
    ],
    [
        "United States",
        "10/24/2014",
        863.88
    ],
    [
        "United States",
        "10/24/2014",
        259.136
    ],
    [
        "United States",
        "10/24/2014",
        69.08
    ],
    [
        "United States",
        "10/24/2014",
        35
    ],
    [
        "United States",
        "10/24/2014",
        43.44
    ],
    [
        "United States",
        "10/24/2014",
        55.2
    ],
    [
        "United States",
        "10/24/2014",
        26.4
    ],
    [
        "United States",
        "10/24/2014",
        35.88
    ],
    [
        "United States",
        "10/24/2014",
        11.56
    ],
    [
        "United States",
        "10/24/2014",
        10.272
    ],
    [
        "United States",
        "10/24/2014",
        13.72
    ],
    [
        "United States",
        "10/24/2014",
        9.762
    ],
    [
        "United States",
        "10/24/2014",
        2.22
    ],
    [
        "United States",
        "10/24/2014",
        3.564
    ],
    [
        "United States",
        "10/25/2014",
        517.405
    ],
    [
        "United States",
        "10/25/2014",
        11.68
    ],
    [
        "United States",
        "10/27/2014",
        356.85
    ],
    [
        "United States",
        "10/27/2014",
        251.58
    ],
    [
        "United States",
        "10/27/2014",
        118.65
    ],
    [
        "United States",
        "10/27/2014",
        81.438
    ],
    [
        "United States",
        "10/27/2014",
        61.542
    ],
    [
        "United States",
        "10/27/2014",
        19.99
    ],
    [
        "United States",
        "10/27/2014",
        33.282
    ],
    [
        "United States",
        "10/27/2014",
        55.616
    ],
    [
        "United States",
        "10/27/2014",
        14.76
    ],
    [
        "United States",
        "10/27/2014",
        6.16
    ],
    [
        "United States",
        "10/28/2014",
        556.665
    ],
    [
        "United States",
        "10/28/2014",
        189.576
    ],
    [
        "United States",
        "10/28/2014",
        71.96
    ],
    [
        "United States",
        "10/28/2014",
        44.784
    ],
    [
        "United States",
        "10/28/2014",
        56.784
    ],
    [
        "United States",
        "10/28/2014",
        95.84
    ],
    [
        "United States",
        "10/28/2014",
        15.84
    ],
    [
        "United States",
        "10/28/2014",
        27.184
    ],
    [
        "United States",
        "10/28/2014",
        7.056
    ],
    [
        "United States",
        "10/28/2014",
        6.576
    ],
    [
        "United States",
        "10/28/2014",
        5.607
    ],
    [
        "United States",
        "10/28/2014",
        8.448
    ],
    [
        "United States",
        "10/29/2014",
        147.184
    ],
    [
        "United States",
        "10/29/2014",
        77.952
    ],
    [
        "United States",
        "10/29/2014",
        21.93
    ],
    [
        "United States",
        "10/29/2014",
        47.98
    ],
    [
        "United States",
        "10/29/2014",
        47.952
    ],
    [
        "United States",
        "10/29/2014",
        24
    ],
    [
        "United States",
        "10/29/2014",
        26.176
    ],
    [
        "United States",
        "10/29/2014",
        15.552
    ],
    [
        "United States",
        "10/30/2014",
        46.96
    ],
    [
        "United States",
        "10/31/2014",
        1702.12
    ],
    [
        "United States",
        "10/31/2014",
        614.272
    ],
    [
        "United States",
        "10/31/2014",
        251.006
    ],
    [
        "United States",
        "10/31/2014",
        442.4
    ],
    [
        "United States",
        "10/31/2014",
        105.98
    ],
    [
        "United States",
        "10/31/2014",
        97.568
    ],
    [
        "United States",
        "10/31/2014",
        54.192
    ],
    [
        "United States",
        "10/31/2014",
        199.98
    ],
    [
        "United States",
        "10/31/2014",
        33.94
    ],
    [
        "United States",
        "10/31/2014",
        16.192
    ],
    [
        "United States",
        "10/31/2014",
        30
    ],
    [
        "United States",
        "10/31/2014",
        35.06
    ],
    [
        "United States",
        "10/31/2014",
        88.752
    ],
    [
        "United States",
        "10/31/2014",
        43.86
    ],
    [
        "United States",
        "10/31/2014",
        71.992
    ],
    [
        "United States",
        "10/31/2014",
        20.736
    ],
    [
        "United States",
        "10/31/2014",
        19.9
    ],
    [
        "United States",
        "10/31/2014",
        148.48
    ],
    [
        "United States",
        "10/31/2014",
        7.168
    ],
    [
        "United States",
        "10/31/2014",
        7.42
    ],
    [
        "United States",
        "10/31/2014",
        11.168
    ],
    [
        "United States",
        "10/31/2014",
        13.904
    ],
    [
        "United States",
        "10/31/2014",
        9.64
    ],
    [
        "United States",
        "11/1/2014",
        508.768
    ],
    [
        "United States",
        "11/1/2014",
        9.912
    ],
    [
        "United States",
        "11/1/2014",
        5.248
    ],
    [
        "United States",
        "11/2/2014",
        2665.62
    ],
    [
        "United States",
        "11/2/2014",
        189.7
    ],
    [
        "United States",
        "11/2/2014",
        40.99
    ],
    [
        "United States",
        "11/2/2014",
        25.12
    ],
    [
        "United States",
        "11/3/2014",
        2249.91
    ],
    [
        "United States",
        "11/3/2014",
        975.92
    ],
    [
        "United States",
        "11/3/2014",
        590.352
    ],
    [
        "United States",
        "11/3/2014",
        452.55
    ],
    [
        "United States",
        "11/3/2014",
        859.2
    ],
    [
        "United States",
        "11/3/2014",
        384.592
    ],
    [
        "United States",
        "11/3/2014",
        83.9
    ],
    [
        "United States",
        "11/3/2014",
        59.92
    ],
    [
        "United States",
        "11/3/2014",
        54.336
    ],
    [
        "United States",
        "11/3/2014",
        76.58
    ],
    [
        "United States",
        "11/3/2014",
        155.372
    ],
    [
        "United States",
        "11/3/2014",
        168.1
    ],
    [
        "United States",
        "11/3/2014",
        25.02
    ],
    [
        "United States",
        "11/3/2014",
        8.8
    ],
    [
        "United States",
        "11/3/2014",
        11.76
    ],
    [
        "United States",
        "11/3/2014",
        18.24
    ],
    [
        "United States",
        "11/3/2014",
        19.44
    ],
    [
        "United States",
        "11/3/2014",
        27.78
    ],
    [
        "United States",
        "11/3/2014",
        20.136
    ],
    [
        "United States",
        "11/3/2014",
        5.58
    ],
    [
        "United States",
        "11/3/2014",
        23.85
    ],
    [
        "United States",
        "11/3/2014",
        5.32
    ],
    [
        "United States",
        "11/3/2014",
        8.856
    ],
    [
        "United States",
        "11/3/2014",
        3.312
    ],
    [
        "United States",
        "11/3/2014",
        5.56
    ],
    [
        "United States",
        "11/4/2014",
        1673.184
    ],
    [
        "United States",
        "11/4/2014",
        486.368
    ],
    [
        "United States",
        "11/4/2014",
        959.984
    ],
    [
        "United States",
        "11/4/2014",
        307.136
    ],
    [
        "United States",
        "11/4/2014",
        199.75
    ],
    [
        "United States",
        "11/4/2014",
        43.5
    ],
    [
        "United States",
        "11/4/2014",
        139.86
    ],
    [
        "United States",
        "11/4/2014",
        361.376
    ],
    [
        "United States",
        "11/4/2014",
        52.4
    ],
    [
        "United States",
        "11/4/2014",
        26.4
    ],
    [
        "United States",
        "11/4/2014",
        55.984
    ],
    [
        "United States",
        "11/4/2014",
        40.776
    ],
    [
        "United States",
        "11/4/2014",
        35.88
    ],
    [
        "United States",
        "11/4/2014",
        41.37
    ],
    [
        "United States",
        "11/4/2014",
        15.992
    ],
    [
        "United States",
        "11/4/2014",
        8.56
    ],
    [
        "United States",
        "11/4/2014",
        14.94
    ],
    [
        "United States",
        "11/4/2014",
        18.368
    ],
    [
        "United States",
        "11/4/2014",
        10.688
    ],
    [
        "United States",
        "11/4/2014",
        12.39
    ],
    [
        "United States",
        "11/4/2014",
        11.673
    ],
    [
        "United States",
        "11/4/2014",
        4.086
    ],
    [
        "United States",
        "11/4/2014",
        16.272
    ],
    [
        "United States",
        "11/5/2014",
        7999.98
    ],
    [
        "United States",
        "11/5/2014",
        523.764
    ],
    [
        "United States",
        "11/5/2014",
        1359.96
    ],
    [
        "United States",
        "11/5/2014",
        167.44
    ],
    [
        "United States",
        "11/5/2014",
        194.352
    ],
    [
        "United States",
        "11/5/2014",
        95.976
    ],
    [
        "United States",
        "11/5/2014",
        52.752
    ],
    [
        "United States",
        "11/5/2014",
        143.928
    ],
    [
        "United States",
        "11/5/2014",
        70.72
    ],
    [
        "United States",
        "11/5/2014",
        7.536
    ],
    [
        "United States",
        "11/5/2014",
        23.68
    ],
    [
        "United States",
        "11/5/2014",
        4.144
    ],
    [
        "United States",
        "11/5/2014",
        4.3
    ],
    [
        "United States",
        "11/5/2014",
        9.664
    ],
    [
        "United States",
        "11/5/2014",
        4.928
    ],
    [
        "United States",
        "11/5/2014",
        3.564
    ],
    [
        "United States",
        "11/5/2014",
        1.408
    ],
    [
        "United States",
        "11/6/2014",
        159.99
    ],
    [
        "United States",
        "11/6/2014",
        492.768
    ],
    [
        "United States",
        "11/6/2014",
        390.75
    ],
    [
        "United States",
        "11/6/2014",
        243.992
    ],
    [
        "United States",
        "11/6/2014",
        110.96
    ],
    [
        "United States",
        "11/6/2014",
        128.124
    ],
    [
        "United States",
        "11/6/2014",
        166.5
    ],
    [
        "United States",
        "11/6/2014",
        164.688
    ],
    [
        "United States",
        "11/6/2014",
        67.8
    ],
    [
        "United States",
        "11/6/2014",
        99.98
    ],
    [
        "United States",
        "11/6/2014",
        167.94
    ],
    [
        "United States",
        "11/6/2014",
        16.03
    ],
    [
        "United States",
        "11/6/2014",
        11.424
    ],
    [
        "United States",
        "11/6/2014",
        101.4
    ],
    [
        "United States",
        "11/6/2014",
        12.96
    ],
    [
        "United States",
        "11/6/2014",
        12.96
    ],
    [
        "United States",
        "11/6/2014",
        2.388
    ],
    [
        "United States",
        "11/6/2014",
        4.41
    ],
    [
        "United States",
        "11/7/2014",
        2036.86
    ],
    [
        "United States",
        "11/7/2014",
        499.584
    ],
    [
        "United States",
        "11/7/2014",
        449.568
    ],
    [
        "United States",
        "11/7/2014",
        318.96
    ],
    [
        "United States",
        "11/7/2014",
        259.136
    ],
    [
        "United States",
        "11/7/2014",
        59.94
    ],
    [
        "United States",
        "11/7/2014",
        108.96
    ],
    [
        "United States",
        "11/7/2014",
        41.4
    ],
    [
        "United States",
        "11/7/2014",
        45.36
    ],
    [
        "United States",
        "11/7/2014",
        127.372
    ],
    [
        "United States",
        "11/7/2014",
        26.4
    ],
    [
        "United States",
        "11/7/2014",
        47.952
    ],
    [
        "United States",
        "11/7/2014",
        46.26
    ],
    [
        "United States",
        "11/7/2014",
        31.104
    ],
    [
        "United States",
        "11/7/2014",
        16.95
    ],
    [
        "United States",
        "11/7/2014",
        13.272
    ],
    [
        "United States",
        "11/7/2014",
        13.9
    ],
    [
        "United States",
        "11/7/2014",
        28.272
    ],
    [
        "United States",
        "11/7/2014",
        26.38
    ],
    [
        "United States",
        "11/7/2014",
        30.56
    ],
    [
        "United States",
        "11/7/2014",
        18.16
    ],
    [
        "United States",
        "11/7/2014",
        15.28
    ],
    [
        "United States",
        "11/7/2014",
        5.78
    ],
    [
        "United States",
        "11/7/2014",
        8.73
    ],
    [
        "United States",
        "11/7/2014",
        5.68
    ],
    [
        "United States",
        "11/7/2014",
        5.682
    ],
    [
        "United States",
        "11/7/2014",
        1.248
    ],
    [
        "United States",
        "11/8/2014",
        761.544
    ],
    [
        "United States",
        "11/8/2014",
        272.97
    ],
    [
        "United States",
        "11/8/2014",
        439.8
    ],
    [
        "United States",
        "11/8/2014",
        359.97
    ],
    [
        "United States",
        "11/8/2014",
        350.352
    ],
    [
        "United States",
        "11/8/2014",
        38.16
    ],
    [
        "United States",
        "11/8/2014",
        100.94
    ],
    [
        "United States",
        "11/8/2014",
        59.97
    ],
    [
        "United States",
        "11/8/2014",
        21.792
    ],
    [
        "United States",
        "11/8/2014",
        7.88
    ],
    [
        "United States",
        "11/9/2014",
        274.2
    ],
    [
        "United States",
        "11/9/2014",
        109.9
    ],
    [
        "United States",
        "11/10/2014",
        1633.14
    ],
    [
        "United States",
        "11/10/2014",
        544.38
    ],
    [
        "United States",
        "11/10/2014",
        826.62
    ],
    [
        "United States",
        "11/10/2014",
        215.976
    ],
    [
        "United States",
        "11/10/2014",
        499.168
    ],
    [
        "United States",
        "11/10/2014",
        191.976
    ],
    [
        "United States",
        "11/10/2014",
        523.392
    ],
    [
        "United States",
        "11/10/2014",
        96.53
    ],
    [
        "United States",
        "11/10/2014",
        99.99
    ],
    [
        "United States",
        "11/10/2014",
        63.56
    ],
    [
        "United States",
        "11/10/2014",
        9.64
    ],
    [
        "United States",
        "11/10/2014",
        47.12
    ],
    [
        "United States",
        "11/11/2014",
        899.136
    ],
    [
        "United States",
        "11/11/2014",
        931.176
    ],
    [
        "United States",
        "11/11/2014",
        201.584
    ],
    [
        "United States",
        "11/11/2014",
        239.952
    ],
    [
        "United States",
        "11/11/2014",
        430.88
    ],
    [
        "United States",
        "11/11/2014",
        341.96
    ],
    [
        "United States",
        "11/11/2014",
        400.8
    ],
    [
        "United States",
        "11/11/2014",
        95.994
    ],
    [
        "United States",
        "11/11/2014",
        241.424
    ],
    [
        "United States",
        "11/11/2014",
        111.79
    ],
    [
        "United States",
        "11/11/2014",
        38.388
    ],
    [
        "United States",
        "11/11/2014",
        26.352
    ],
    [
        "United States",
        "11/11/2014",
        28.792
    ],
    [
        "United States",
        "11/11/2014",
        11.52
    ],
    [
        "United States",
        "11/11/2014",
        7.8
    ],
    [
        "United States",
        "11/12/2014",
        1158.12
    ],
    [
        "United States",
        "11/12/2014",
        181.86
    ],
    [
        "United States",
        "11/12/2014",
        88.92
    ],
    [
        "United States",
        "11/12/2014",
        35.184
    ],
    [
        "United States",
        "11/12/2014",
        25.5
    ],
    [
        "United States",
        "11/12/2014",
        18.336
    ],
    [
        "United States",
        "11/12/2014",
        121.6
    ],
    [
        "United States",
        "11/12/2014",
        45.92
    ],
    [
        "United States",
        "11/12/2014",
        10.44
    ],
    [
        "United States",
        "11/12/2014",
        18.24
    ],
    [
        "United States",
        "11/12/2014",
        35.48
    ],
    [
        "United States",
        "11/12/2014",
        34.92
    ],
    [
        "United States",
        "11/12/2014",
        19.44
    ],
    [
        "United States",
        "11/12/2014",
        10.89
    ],
    [
        "United States",
        "11/12/2014",
        10.368
    ],
    [
        "United States",
        "11/13/2014",
        671.984
    ],
    [
        "United States",
        "11/13/2014",
        370.782
    ],
    [
        "United States",
        "11/13/2014",
        540.048
    ],
    [
        "United States",
        "11/13/2014",
        223.056
    ],
    [
        "United States",
        "11/13/2014",
        113.888
    ],
    [
        "United States",
        "11/13/2014",
        113.568
    ],
    [
        "United States",
        "11/13/2014",
        221.024
    ],
    [
        "United States",
        "11/13/2014",
        67.992
    ],
    [
        "United States",
        "11/13/2014",
        62.352
    ],
    [
        "United States",
        "11/13/2014",
        15.92
    ],
    [
        "United States",
        "11/13/2014",
        18.544
    ],
    [
        "United States",
        "11/13/2014",
        76.12
    ],
    [
        "United States",
        "11/13/2014",
        44.784
    ],
    [
        "United States",
        "11/13/2014",
        26.72
    ],
    [
        "United States",
        "11/13/2014",
        77.952
    ],
    [
        "United States",
        "11/13/2014",
        16.056
    ],
    [
        "United States",
        "11/13/2014",
        30.56
    ],
    [
        "United States",
        "11/13/2014",
        23.12
    ],
    [
        "United States",
        "11/13/2014",
        22.848
    ],
    [
        "United States",
        "11/13/2014",
        41.6
    ],
    [
        "United States",
        "11/13/2014",
        11.56
    ],
    [
        "United States",
        "11/13/2014",
        10.848
    ],
    [
        "United States",
        "11/13/2014",
        27.93
    ],
    [
        "United States",
        "11/13/2014",
        7.92
    ],
    [
        "United States",
        "11/13/2014",
        10.56
    ],
    [
        "United States",
        "11/13/2014",
        14.016
    ],
    [
        "United States",
        "11/13/2014",
        12.224
    ],
    [
        "United States",
        "11/13/2014",
        9.96
    ],
    [
        "United States",
        "11/13/2014",
        9.21
    ],
    [
        "United States",
        "11/13/2014",
        18.24
    ],
    [
        "United States",
        "11/14/2014",
        2404.704
    ],
    [
        "United States",
        "11/14/2014",
        720.064
    ],
    [
        "United States",
        "11/14/2014",
        629.95
    ],
    [
        "United States",
        "11/14/2014",
        652.995
    ],
    [
        "United States",
        "11/14/2014",
        230.376
    ],
    [
        "United States",
        "11/14/2014",
        563.024
    ],
    [
        "United States",
        "11/14/2014",
        344.91
    ],
    [
        "United States",
        "11/14/2014",
        239.92
    ],
    [
        "United States",
        "11/14/2014",
        154.95
    ],
    [
        "United States",
        "11/14/2014",
        60.864
    ],
    [
        "United States",
        "11/14/2014",
        205.9992
    ],
    [
        "United States",
        "11/14/2014",
        43.6
    ],
    [
        "United States",
        "11/14/2014",
        82.95
    ],
    [
        "United States",
        "11/14/2014",
        163.96
    ],
    [
        "United States",
        "11/14/2014",
        9.324
    ],
    [
        "United States",
        "11/14/2014",
        8.904
    ],
    [
        "United States",
        "11/14/2014",
        61.792
    ],
    [
        "United States",
        "11/14/2014",
        22
    ],
    [
        "United States",
        "11/14/2014",
        8.64
    ],
    [
        "United States",
        "11/14/2014",
        11.21
    ],
    [
        "United States",
        "11/14/2014",
        2.064
    ],
    [
        "United States",
        "11/14/2014",
        11.22
    ],
    [
        "United States",
        "11/15/2014",
        119.94
    ],
    [
        "United States",
        "11/15/2014",
        96.36
    ],
    [
        "United States",
        "11/15/2014",
        321.568
    ],
    [
        "United States",
        "11/15/2014",
        167.952
    ],
    [
        "United States",
        "11/15/2014",
        21.99
    ],
    [
        "United States",
        "11/15/2014",
        45.04
    ],
    [
        "United States",
        "11/15/2014",
        34.24
    ],
    [
        "United States",
        "11/15/2014",
        3.648
    ],
    [
        "United States",
        "11/15/2014",
        8.64
    ],
    [
        "United States",
        "11/15/2014",
        15.28
    ],
    [
        "United States",
        "11/16/2014",
        339.136
    ],
    [
        "United States",
        "11/16/2014",
        220.064
    ],
    [
        "United States",
        "11/17/2014",
        1919.976
    ],
    [
        "United States",
        "11/17/2014",
        899.982
    ],
    [
        "United States",
        "11/17/2014",
        811.28
    ],
    [
        "United States",
        "11/17/2014",
        119.94
    ],
    [
        "United States",
        "11/17/2014",
        146.82
    ],
    [
        "United States",
        "11/17/2014",
        139.92
    ],
    [
        "United States",
        "11/17/2014",
        86.352
    ],
    [
        "United States",
        "11/17/2014",
        33.29
    ],
    [
        "United States",
        "11/17/2014",
        119.94
    ],
    [
        "United States",
        "11/17/2014",
        139.96
    ],
    [
        "United States",
        "11/17/2014",
        52.44
    ],
    [
        "United States",
        "11/17/2014",
        73.68
    ],
    [
        "United States",
        "11/17/2014",
        48.86
    ],
    [
        "United States",
        "11/17/2014",
        17.31
    ],
    [
        "United States",
        "11/17/2014",
        12.42
    ],
    [
        "United States",
        "11/17/2014",
        23.36
    ],
    [
        "United States",
        "11/17/2014",
        107.88
    ],
    [
        "United States",
        "11/17/2014",
        1.824
    ],
    [
        "United States",
        "11/18/2014",
        10499.97
    ],
    [
        "United States",
        "11/18/2014",
        1247.64
    ],
    [
        "United States",
        "11/18/2014",
        187.76
    ],
    [
        "United States",
        "11/18/2014",
        327.7328
    ],
    [
        "United States",
        "11/18/2014",
        268.24
    ],
    [
        "United States",
        "11/18/2014",
        50.94
    ],
    [
        "United States",
        "11/18/2014",
        206.1
    ],
    [
        "United States",
        "11/18/2014",
        239.96
    ],
    [
        "United States",
        "11/18/2014",
        431.16
    ],
    [
        "United States",
        "11/18/2014",
        79.99
    ],
    [
        "United States",
        "11/18/2014",
        43.8
    ],
    [
        "United States",
        "11/18/2014",
        35.04
    ],
    [
        "United States",
        "11/18/2014",
        38.88
    ],
    [
        "United States",
        "11/18/2014",
        19.608
    ],
    [
        "United States",
        "11/18/2014",
        13.904
    ],
    [
        "United States",
        "11/18/2014",
        4.158
    ],
    [
        "United States",
        "11/19/2014",
        389.056
    ],
    [
        "United States",
        "11/19/2014",
        132.52
    ],
    [
        "United States",
        "11/19/2014",
        92.52
    ],
    [
        "United States",
        "11/19/2014",
        95.94
    ],
    [
        "United States",
        "11/19/2014",
        169.68
    ],
    [
        "United States",
        "11/19/2014",
        37.76
    ],
    [
        "United States",
        "11/19/2014",
        127.386
    ],
    [
        "United States",
        "11/19/2014",
        74.95
    ],
    [
        "United States",
        "11/19/2014",
        81.36
    ],
    [
        "United States",
        "11/19/2014",
        55.584
    ],
    [
        "United States",
        "11/19/2014",
        20.232
    ],
    [
        "United States",
        "11/19/2014",
        8.448
    ],
    [
        "United States",
        "11/19/2014",
        38.864
    ],
    [
        "United States",
        "11/19/2014",
        19.76
    ],
    [
        "United States",
        "11/19/2014",
        44.384
    ],
    [
        "United States",
        "11/19/2014",
        7.38
    ],
    [
        "United States",
        "11/19/2014",
        20.736
    ],
    [
        "United States",
        "11/19/2014",
        2.96
    ],
    [
        "United States",
        "11/19/2014",
        5.82
    ],
    [
        "United States",
        "11/19/2014",
        41.472
    ],
    [
        "United States",
        "11/19/2014",
        2.944
    ],
    [
        "United States",
        "11/20/2014",
        1525.188
    ],
    [
        "United States",
        "11/20/2014",
        2504.74
    ],
    [
        "United States",
        "11/20/2014",
        718.116
    ],
    [
        "United States",
        "11/20/2014",
        821.88
    ],
    [
        "United States",
        "11/20/2014",
        305.312
    ],
    [
        "United States",
        "11/20/2014",
        233.058
    ],
    [
        "United States",
        "11/20/2014",
        305.01
    ],
    [
        "United States",
        "11/20/2014",
        219.075
    ],
    [
        "United States",
        "11/20/2014",
        58.408
    ],
    [
        "United States",
        "11/20/2014",
        41.28
    ],
    [
        "United States",
        "11/20/2014",
        79.974
    ],
    [
        "United States",
        "11/20/2014",
        31.968
    ],
    [
        "United States",
        "11/20/2014",
        31.776
    ],
    [
        "United States",
        "11/20/2014",
        59.913
    ],
    [
        "United States",
        "11/20/2014",
        99.136
    ],
    [
        "United States",
        "11/20/2014",
        13.04
    ],
    [
        "United States",
        "11/20/2014",
        13.36
    ],
    [
        "United States",
        "11/20/2014",
        16.74
    ],
    [
        "United States",
        "11/20/2014",
        191.058
    ],
    [
        "United States",
        "11/20/2014",
        15.992
    ],
    [
        "United States",
        "11/20/2014",
        22.96
    ],
    [
        "United States",
        "11/20/2014",
        25.06
    ],
    [
        "United States",
        "11/20/2014",
        18.7
    ],
    [
        "United States",
        "11/20/2014",
        16.896
    ],
    [
        "United States",
        "11/20/2014",
        6.672
    ],
    [
        "United States",
        "11/20/2014",
        21.96
    ],
    [
        "United States",
        "11/21/2014",
        1259.97
    ],
    [
        "United States",
        "11/21/2014",
        183.968
    ],
    [
        "United States",
        "11/21/2014",
        283.92
    ],
    [
        "United States",
        "11/21/2014",
        209.568
    ],
    [
        "United States",
        "11/21/2014",
        569.99
    ],
    [
        "United States",
        "11/21/2014",
        68.97
    ],
    [
        "United States",
        "11/21/2014",
        46.76
    ],
    [
        "United States",
        "11/21/2014",
        84.056
    ],
    [
        "United States",
        "11/21/2014",
        77.6
    ],
    [
        "United States",
        "11/21/2014",
        23.968
    ],
    [
        "United States",
        "11/21/2014",
        50.97
    ],
    [
        "United States",
        "11/21/2014",
        42.6
    ],
    [
        "United States",
        "11/21/2014",
        22
    ],
    [
        "United States",
        "11/21/2014",
        28.728
    ],
    [
        "United States",
        "11/21/2014",
        27.58
    ],
    [
        "United States",
        "11/21/2014",
        2.97
    ],
    [
        "United States",
        "11/21/2014",
        4.656
    ],
    [
        "United States",
        "11/22/2014",
        1039.992
    ],
    [
        "United States",
        "11/22/2014",
        659.976
    ],
    [
        "United States",
        "11/22/2014",
        150.8
    ],
    [
        "United States",
        "11/22/2014",
        55.176
    ],
    [
        "United States",
        "11/22/2014",
        51.84
    ],
    [
        "United States",
        "11/22/2014",
        70.98
    ],
    [
        "United States",
        "11/22/2014",
        56.56
    ],
    [
        "United States",
        "11/22/2014",
        39.296
    ],
    [
        "United States",
        "11/22/2014",
        40.736
    ],
    [
        "United States",
        "11/22/2014",
        27.42
    ],
    [
        "United States",
        "11/22/2014",
        8.62
    ],
    [
        "United States",
        "11/22/2014",
        11.76
    ],
    [
        "United States",
        "11/22/2014",
        8.448
    ],
    [
        "United States",
        "11/22/2014",
        5.56
    ],
    [
        "United States",
        "11/22/2014",
        9.02
    ],
    [
        "United States",
        "11/23/2014",
        35.712
    ],
    [
        "United States",
        "11/24/2014",
        222.384
    ],
    [
        "United States",
        "11/24/2014",
        287.92
    ],
    [
        "United States",
        "11/24/2014",
        195.96
    ],
    [
        "United States",
        "11/24/2014",
        127.785
    ],
    [
        "United States",
        "11/24/2014",
        78.304
    ],
    [
        "United States",
        "11/24/2014",
        24.048
    ],
    [
        "United States",
        "11/24/2014",
        74.112
    ],
    [
        "United States",
        "11/24/2014",
        36.288
    ],
    [
        "United States",
        "11/24/2014",
        4.36
    ],
    [
        "United States",
        "11/24/2014",
        11.52
    ],
    [
        "United States",
        "11/24/2014",
        28.4
    ],
    [
        "United States",
        "11/24/2014",
        10.688
    ],
    [
        "United States",
        "11/24/2014",
        6.104
    ],
    [
        "United States",
        "11/24/2014",
        27.992
    ],
    [
        "United States",
        "11/24/2014",
        7.476
    ],
    [
        "United States",
        "11/24/2014",
        3.304
    ],
    [
        "United States",
        "11/24/2014",
        6.464
    ],
    [
        "United States",
        "11/25/2014",
        1443.96
    ],
    [
        "United States",
        "11/25/2014",
        977.292
    ],
    [
        "United States",
        "11/25/2014",
        321.568
    ],
    [
        "United States",
        "11/25/2014",
        415.872
    ],
    [
        "United States",
        "11/25/2014",
        364.08
    ],
    [
        "United States",
        "11/25/2014",
        327.84
    ],
    [
        "United States",
        "11/25/2014",
        229.544
    ],
    [
        "United States",
        "11/25/2014",
        167.96
    ],
    [
        "United States",
        "11/25/2014",
        33.29
    ],
    [
        "United States",
        "11/25/2014",
        223.58
    ],
    [
        "United States",
        "11/25/2014",
        27.76
    ],
    [
        "United States",
        "11/25/2014",
        89.988
    ],
    [
        "United States",
        "11/25/2014",
        64.848
    ],
    [
        "United States",
        "11/25/2014",
        79.1
    ],
    [
        "United States",
        "11/25/2014",
        71.088
    ],
    [
        "United States",
        "11/25/2014",
        16.38
    ],
    [
        "United States",
        "11/25/2014",
        11.673
    ],
    [
        "United States",
        "11/25/2014",
        19.008
    ],
    [
        "United States",
        "11/25/2014",
        12.96
    ],
    [
        "United States",
        "11/25/2014",
        10.824
    ],
    [
        "United States",
        "11/25/2014",
        13.762
    ],
    [
        "United States",
        "11/25/2014",
        20.724
    ],
    [
        "United States",
        "11/25/2014",
        7.78
    ],
    [
        "United States",
        "11/25/2014",
        2.88
    ],
    [
        "United States",
        "11/25/2014",
        5.88
    ],
    [
        "United States",
        "11/26/2014",
        723.92
    ],
    [
        "United States",
        "11/26/2014",
        701.96
    ],
    [
        "United States",
        "11/26/2014",
        501.81
    ],
    [
        "United States",
        "11/26/2014",
        853.93
    ],
    [
        "United States",
        "11/26/2014",
        359.499
    ],
    [
        "United States",
        "11/26/2014",
        299.96
    ],
    [
        "United States",
        "11/26/2014",
        67.84
    ],
    [
        "United States",
        "11/26/2014",
        48.87
    ],
    [
        "United States",
        "11/26/2014",
        39.96
    ],
    [
        "United States",
        "11/26/2014",
        34.08
    ],
    [
        "United States",
        "11/26/2014",
        18.688
    ],
    [
        "United States",
        "11/26/2014",
        10.48
    ],
    [
        "United States",
        "11/26/2014",
        5.16
    ],
    [
        "United States",
        "11/27/2014",
        979.95
    ],
    [
        "United States",
        "11/27/2014",
        1879.96
    ],
    [
        "United States",
        "11/27/2014",
        828.6
    ],
    [
        "United States",
        "11/27/2014",
        126.3
    ],
    [
        "United States",
        "11/27/2014",
        135.3
    ],
    [
        "United States",
        "11/27/2014",
        257.94
    ],
    [
        "United States",
        "11/27/2014",
        220.752
    ],
    [
        "United States",
        "11/27/2014",
        213.136
    ],
    [
        "United States",
        "11/27/2014",
        89.98
    ],
    [
        "United States",
        "11/27/2014",
        93.344
    ],
    [
        "United States",
        "11/27/2014",
        52.272
    ],
    [
        "United States",
        "11/27/2014",
        58.73
    ],
    [
        "United States",
        "11/27/2014",
        33.568
    ],
    [
        "United States",
        "11/27/2014",
        38.04
    ],
    [
        "United States",
        "11/27/2014",
        27.46
    ],
    [
        "United States",
        "11/27/2014",
        12.84
    ],
    [
        "United States",
        "11/28/2014",
        497.94
    ],
    [
        "United States",
        "11/28/2014",
        143.73
    ],
    [
        "United States",
        "11/28/2014",
        107.424
    ],
    [
        "United States",
        "11/28/2014",
        158.28
    ],
    [
        "United States",
        "11/28/2014",
        166.16
    ],
    [
        "United States",
        "11/28/2014",
        117.488
    ],
    [
        "United States",
        "11/28/2014",
        244.55
    ],
    [
        "United States",
        "11/28/2014",
        46.94
    ],
    [
        "United States",
        "11/28/2014",
        18.84
    ],
    [
        "United States",
        "11/28/2014",
        43.584
    ],
    [
        "United States",
        "11/28/2014",
        57.568
    ],
    [
        "United States",
        "11/28/2014",
        8.76
    ],
    [
        "United States",
        "11/28/2014",
        6.99
    ],
    [
        "United States",
        "11/29/2014",
        2065.32
    ],
    [
        "United States",
        "11/29/2014",
        1049.2
    ],
    [
        "United States",
        "11/29/2014",
        1007.232
    ],
    [
        "United States",
        "11/29/2014",
        1979.89
    ],
    [
        "United States",
        "11/29/2014",
        516.488
    ],
    [
        "United States",
        "11/29/2014",
        88.768
    ],
    [
        "United States",
        "11/29/2014",
        62.65
    ],
    [
        "United States",
        "11/29/2014",
        79.96
    ],
    [
        "United States",
        "11/29/2014",
        25.344
    ],
    [
        "United States",
        "11/29/2014",
        20.9
    ],
    [
        "United States",
        "11/29/2014",
        15.552
    ],
    [
        "United States",
        "11/29/2014",
        1.64
    ],
    [
        "United States",
        "11/30/2014",
        390.368
    ],
    [
        "United States",
        "11/30/2014",
        101.52
    ],
    [
        "United States",
        "12/1/2014",
        1079.316
    ],
    [
        "United States",
        "12/1/2014",
        663.936
    ],
    [
        "United States",
        "12/1/2014",
        1242.9
    ],
    [
        "United States",
        "12/1/2014",
        1781.682
    ],
    [
        "United States",
        "12/1/2014",
        546.06
    ],
    [
        "United States",
        "12/1/2014",
        269.49
    ],
    [
        "United States",
        "12/1/2014",
        383.976
    ],
    [
        "United States",
        "12/1/2014",
        68.472
    ],
    [
        "United States",
        "12/1/2014",
        155.94
    ],
    [
        "United States",
        "12/1/2014",
        95.976
    ],
    [
        "United States",
        "12/1/2014",
        173.8
    ],
    [
        "United States",
        "12/1/2014",
        25.83
    ],
    [
        "United States",
        "12/1/2014",
        71.976
    ],
    [
        "United States",
        "12/1/2014",
        83.56
    ],
    [
        "United States",
        "12/1/2014",
        2.368
    ],
    [
        "United States",
        "12/2/2014",
        541.24
    ],
    [
        "United States",
        "12/2/2014",
        897.15
    ],
    [
        "United States",
        "12/2/2014",
        317.058
    ],
    [
        "United States",
        "12/2/2014",
        629.64
    ],
    [
        "United States",
        "12/2/2014",
        398.972
    ],
    [
        "United States",
        "12/2/2014",
        406.368
    ],
    [
        "United States",
        "12/2/2014",
        219.8
    ],
    [
        "United States",
        "12/2/2014",
        141.96
    ],
    [
        "United States",
        "12/2/2014",
        79.12
    ],
    [
        "United States",
        "12/2/2014",
        470.376
    ],
    [
        "United States",
        "12/2/2014",
        131.98
    ],
    [
        "United States",
        "12/2/2014",
        104.68
    ],
    [
        "United States",
        "12/2/2014",
        70.68
    ],
    [
        "United States",
        "12/2/2014",
        105.584
    ],
    [
        "United States",
        "12/2/2014",
        37.392
    ],
    [
        "United States",
        "12/2/2014",
        91.99
    ],
    [
        "United States",
        "12/2/2014",
        83.92
    ],
    [
        "United States",
        "12/2/2014",
        41.86
    ],
    [
        "United States",
        "12/2/2014",
        45.36
    ],
    [
        "United States",
        "12/2/2014",
        20.37
    ],
    [
        "United States",
        "12/2/2014",
        31.152
    ],
    [
        "United States",
        "12/2/2014",
        15.92
    ],
    [
        "United States",
        "12/2/2014",
        52.29
    ],
    [
        "United States",
        "12/2/2014",
        15.936
    ],
    [
        "United States",
        "12/2/2014",
        15.92
    ],
    [
        "United States",
        "12/2/2014",
        221.55
    ],
    [
        "United States",
        "12/2/2014",
        10.128
    ],
    [
        "United States",
        "12/2/2014",
        19.44
    ],
    [
        "United States",
        "12/2/2014",
        7.712
    ],
    [
        "United States",
        "12/2/2014",
        62.958
    ],
    [
        "United States",
        "12/2/2014",
        10.368
    ],
    [
        "United States",
        "12/2/2014",
        6.783
    ],
    [
        "United States",
        "12/2/2014",
        8.001
    ],
    [
        "United States",
        "12/2/2014",
        17.52
    ],
    [
        "United States",
        "12/3/2014",
        2479.96
    ],
    [
        "United States",
        "12/3/2014",
        979.95
    ],
    [
        "United States",
        "12/3/2014",
        1159.056
    ],
    [
        "United States",
        "12/3/2014",
        559.62
    ],
    [
        "United States",
        "12/3/2014",
        286.86
    ],
    [
        "United States",
        "12/3/2014",
        631.176
    ],
    [
        "United States",
        "12/3/2014",
        906.68
    ],
    [
        "United States",
        "12/3/2014",
        508.704
    ],
    [
        "United States",
        "12/3/2014",
        294.62
    ],
    [
        "United States",
        "12/3/2014",
        109.92
    ],
    [
        "United States",
        "12/3/2014",
        179.9
    ],
    [
        "United States",
        "12/3/2014",
        242.352
    ],
    [
        "United States",
        "12/3/2014",
        67.86
    ],
    [
        "United States",
        "12/3/2014",
        151.188
    ],
    [
        "United States",
        "12/3/2014",
        701.96
    ],
    [
        "United States",
        "12/3/2014",
        79.47
    ],
    [
        "United States",
        "12/3/2014",
        39.992
    ],
    [
        "United States",
        "12/3/2014",
        114.288
    ],
    [
        "United States",
        "12/3/2014",
        69.456
    ],
    [
        "United States",
        "12/3/2014",
        34.65
    ],
    [
        "United States",
        "12/3/2014",
        57.36
    ],
    [
        "United States",
        "12/3/2014",
        49.616
    ],
    [
        "United States",
        "12/3/2014",
        45.66
    ],
    [
        "United States",
        "12/3/2014",
        47.96
    ],
    [
        "United States",
        "12/3/2014",
        32.776
    ],
    [
        "United States",
        "12/3/2014",
        10.86
    ],
    [
        "United States",
        "12/3/2014",
        4.36
    ],
    [
        "United States",
        "12/3/2014",
        19.728
    ],
    [
        "United States",
        "12/3/2014",
        8.56
    ],
    [
        "United States",
        "12/3/2014",
        36.624
    ],
    [
        "United States",
        "12/3/2014",
        12.16
    ],
    [
        "United States",
        "12/3/2014",
        8.752
    ],
    [
        "United States",
        "12/3/2014",
        9.024
    ],
    [
        "United States",
        "12/3/2014",
        10.08
    ],
    [
        "United States",
        "12/4/2014",
        521.96
    ],
    [
        "United States",
        "12/4/2014",
        166.44
    ],
    [
        "United States",
        "12/4/2014",
        102.336
    ],
    [
        "United States",
        "12/4/2014",
        83.92
    ],
    [
        "United States",
        "12/4/2014",
        47.992
    ],
    [
        "United States",
        "12/4/2014",
        45.216
    ],
    [
        "United States",
        "12/4/2014",
        47.32
    ],
    [
        "United States",
        "12/4/2014",
        23.376
    ],
    [
        "United States",
        "12/4/2014",
        28.782
    ],
    [
        "United States",
        "12/4/2014",
        16.192
    ],
    [
        "United States",
        "12/4/2014",
        24.448
    ],
    [
        "United States",
        "12/4/2014",
        136.99
    ],
    [
        "United States",
        "12/4/2014",
        76.752
    ],
    [
        "United States",
        "12/4/2014",
        16.72
    ],
    [
        "United States",
        "12/4/2014",
        10.32
    ],
    [
        "United States",
        "12/4/2014",
        13.344
    ],
    [
        "United States",
        "12/4/2014",
        10.368
    ],
    [
        "United States",
        "12/4/2014",
        13.592
    ],
    [
        "United States",
        "12/4/2014",
        14.624
    ],
    [
        "United States",
        "12/4/2014",
        3.15
    ],
    [
        "United States",
        "12/5/2014",
        188.552
    ],
    [
        "United States",
        "12/5/2014",
        649
    ],
    [
        "United States",
        "12/5/2014",
        399.95
    ],
    [
        "United States",
        "12/5/2014",
        255.968
    ],
    [
        "United States",
        "12/5/2014",
        302.94
    ],
    [
        "United States",
        "12/5/2014",
        239.96
    ],
    [
        "United States",
        "12/5/2014",
        142.8
    ],
    [
        "United States",
        "12/5/2014",
        182.22
    ],
    [
        "United States",
        "12/5/2014",
        74.352
    ],
    [
        "United States",
        "12/5/2014",
        54.768
    ],
    [
        "United States",
        "12/5/2014",
        61.568
    ],
    [
        "United States",
        "12/5/2014",
        11.76
    ],
    [
        "United States",
        "12/5/2014",
        23.92
    ],
    [
        "United States",
        "12/5/2014",
        13.392
    ],
    [
        "United States",
        "12/5/2014",
        12.99
    ],
    [
        "United States",
        "12/5/2014",
        8.8
    ],
    [
        "United States",
        "12/5/2014",
        11.352
    ],
    [
        "United States",
        "12/5/2014",
        5.346
    ],
    [
        "United States",
        "12/6/2014",
        172.752
    ],
    [
        "United States",
        "12/6/2014",
        199.9
    ],
    [
        "United States",
        "12/6/2014",
        254.9
    ],
    [
        "United States",
        "12/6/2014",
        92.94
    ],
    [
        "United States",
        "12/6/2014",
        61.44
    ],
    [
        "United States",
        "12/6/2014",
        83.92
    ],
    [
        "United States",
        "12/6/2014",
        205.03
    ],
    [
        "United States",
        "12/6/2014",
        31.176
    ],
    [
        "United States",
        "12/6/2014",
        99.39
    ],
    [
        "United States",
        "12/6/2014",
        41.96
    ],
    [
        "United States",
        "12/6/2014",
        58.68
    ],
    [
        "United States",
        "12/6/2014",
        38.9
    ],
    [
        "United States",
        "12/6/2014",
        21.6
    ],
    [
        "United States",
        "12/6/2014",
        9.296
    ],
    [
        "United States",
        "12/6/2014",
        24.816
    ],
    [
        "United States",
        "12/6/2014",
        9.45
    ],
    [
        "United States",
        "12/6/2014",
        11.07
    ],
    [
        "United States",
        "12/6/2014",
        14.976
    ],
    [
        "United States",
        "12/6/2014",
        20.94
    ],
    [
        "United States",
        "12/7/2014",
        10.68
    ],
    [
        "United States",
        "12/8/2014",
        1889.99
    ],
    [
        "United States",
        "12/8/2014",
        320.64
    ],
    [
        "United States",
        "12/8/2014",
        374.376
    ],
    [
        "United States",
        "12/8/2014",
        127.984
    ],
    [
        "United States",
        "12/8/2014",
        52
    ],
    [
        "United States",
        "12/8/2014",
        82.38
    ],
    [
        "United States",
        "12/8/2014",
        50.04
    ],
    [
        "United States",
        "12/8/2014",
        15.552
    ],
    [
        "United States",
        "12/8/2014",
        3.552
    ],
    [
        "United States",
        "12/9/2014",
        1336.829
    ],
    [
        "United States",
        "12/9/2014",
        1004.024
    ],
    [
        "United States",
        "12/9/2014",
        1089.75
    ],
    [
        "United States",
        "12/9/2014",
        459.92
    ],
    [
        "United States",
        "12/9/2014",
        592.74
    ],
    [
        "United States",
        "12/9/2014",
        272.94
    ],
    [
        "United States",
        "12/9/2014",
        215.544
    ],
    [
        "United States",
        "12/9/2014",
        1199.976
    ],
    [
        "United States",
        "12/9/2014",
        60.12
    ],
    [
        "United States",
        "12/9/2014",
        128.9
    ],
    [
        "United States",
        "12/9/2014",
        178.11
    ],
    [
        "United States",
        "12/9/2014",
        69.48
    ],
    [
        "United States",
        "12/9/2014",
        90.48
    ],
    [
        "United States",
        "12/9/2014",
        29.79
    ],
    [
        "United States",
        "12/9/2014",
        179.95
    ],
    [
        "United States",
        "12/9/2014",
        109.48
    ],
    [
        "United States",
        "12/9/2014",
        113.568
    ],
    [
        "United States",
        "12/9/2014",
        83.988
    ],
    [
        "United States",
        "12/9/2014",
        42.76
    ],
    [
        "United States",
        "12/9/2014",
        55.98
    ],
    [
        "United States",
        "12/9/2014",
        31.92
    ],
    [
        "United States",
        "12/9/2014",
        22.424
    ],
    [
        "United States",
        "12/9/2014",
        87.92
    ],
    [
        "United States",
        "12/9/2014",
        13.248
    ],
    [
        "United States",
        "12/9/2014",
        27.15
    ],
    [
        "United States",
        "12/9/2014",
        28.35
    ],
    [
        "United States",
        "12/9/2014",
        27.52
    ],
    [
        "United States",
        "12/9/2014",
        19.44
    ],
    [
        "United States",
        "12/9/2014",
        61.06
    ],
    [
        "United States",
        "12/9/2014",
        9.68
    ],
    [
        "United States",
        "12/10/2014",
        1399.98
    ],
    [
        "United States",
        "12/10/2014",
        872.94
    ],
    [
        "United States",
        "12/10/2014",
        419.4
    ],
    [
        "United States",
        "12/10/2014",
        444.768
    ],
    [
        "United States",
        "12/10/2014",
        214.9
    ],
    [
        "United States",
        "12/10/2014",
        896.328
    ],
    [
        "United States",
        "12/10/2014",
        143.856
    ],
    [
        "United States",
        "12/10/2014",
        148.257
    ],
    [
        "United States",
        "12/10/2014",
        189
    ],
    [
        "United States",
        "12/10/2014",
        146.45
    ],
    [
        "United States",
        "12/10/2014",
        104.88
    ],
    [
        "United States",
        "12/10/2014",
        29.36
    ],
    [
        "United States",
        "12/10/2014",
        57.576
    ],
    [
        "United States",
        "12/10/2014",
        27.24
    ],
    [
        "United States",
        "12/10/2014",
        33.45
    ],
    [
        "United States",
        "12/10/2014",
        15.14
    ],
    [
        "United States",
        "12/10/2014",
        33.72
    ],
    [
        "United States",
        "12/10/2014",
        37.208
    ],
    [
        "United States",
        "12/10/2014",
        34.7
    ],
    [
        "United States",
        "12/10/2014",
        54.9
    ],
    [
        "United States",
        "12/10/2014",
        15.984
    ],
    [
        "United States",
        "12/10/2014",
        15.92
    ],
    [
        "United States",
        "12/10/2014",
        11.16
    ],
    [
        "United States",
        "12/10/2014",
        5.76
    ],
    [
        "United States",
        "12/10/2014",
        12.96
    ],
    [
        "United States",
        "12/10/2014",
        41.54
    ],
    [
        "United States",
        "12/10/2014",
        14.94
    ],
    [
        "United States",
        "12/10/2014",
        9.708
    ],
    [
        "United States",
        "12/10/2014",
        13.005
    ],
    [
        "United States",
        "12/10/2014",
        11.088
    ],
    [
        "United States",
        "12/10/2014",
        10.4
    ],
    [
        "United States",
        "12/10/2014",
        2.624
    ],
    [
        "United States",
        "12/10/2014",
        1.248
    ],
    [
        "United States",
        "12/11/2014",
        1669.6
    ],
    [
        "United States",
        "12/11/2014",
        426.79
    ],
    [
        "United States",
        "12/11/2014",
        310.88
    ],
    [
        "United States",
        "12/11/2014",
        599.97
    ],
    [
        "United States",
        "12/11/2014",
        324.9
    ],
    [
        "United States",
        "12/11/2014",
        87.92
    ],
    [
        "United States",
        "12/11/2014",
        49.08
    ],
    [
        "United States",
        "12/11/2014",
        38.97
    ],
    [
        "United States",
        "12/11/2014",
        34.5
    ],
    [
        "United States",
        "12/11/2014",
        45.84
    ],
    [
        "United States",
        "12/11/2014",
        10.368
    ],
    [
        "United States",
        "12/11/2014",
        95.84
    ],
    [
        "United States",
        "12/11/2014",
        65.568
    ],
    [
        "United States",
        "12/11/2014",
        18.24
    ],
    [
        "United States",
        "12/11/2014",
        10.86
    ],
    [
        "United States",
        "12/11/2014",
        19.936
    ],
    [
        "United States",
        "12/11/2014",
        14.76
    ],
    [
        "United States",
        "12/11/2014",
        3.273
    ],
    [
        "United States",
        "12/11/2014",
        19.104
    ],
    [
        "United States",
        "12/11/2014",
        12.96
    ],
    [
        "United States",
        "12/11/2014",
        14.2
    ],
    [
        "United States",
        "12/12/2014",
        520.464
    ],
    [
        "United States",
        "12/12/2014",
        735.98
    ],
    [
        "United States",
        "12/12/2014",
        721.875
    ],
    [
        "United States",
        "12/12/2014",
        116.312
    ],
    [
        "United States",
        "12/12/2014",
        116.98
    ],
    [
        "United States",
        "12/12/2014",
        128.85
    ],
    [
        "United States",
        "12/12/2014",
        77.72
    ],
    [
        "United States",
        "12/12/2014",
        64.784
    ],
    [
        "United States",
        "12/12/2014",
        39.98
    ],
    [
        "United States",
        "12/12/2014",
        73.568
    ],
    [
        "United States",
        "12/12/2014",
        23.36
    ],
    [
        "United States",
        "12/12/2014",
        63.686
    ],
    [
        "United States",
        "12/12/2014",
        40.2
    ],
    [
        "United States",
        "12/12/2014",
        22.75
    ],
    [
        "United States",
        "12/12/2014",
        17.94
    ],
    [
        "United States",
        "12/12/2014",
        13.584
    ],
    [
        "United States",
        "12/12/2014",
        10.368
    ],
    [
        "United States",
        "12/12/2014",
        14.952
    ],
    [
        "United States",
        "12/12/2014",
        7.28
    ],
    [
        "United States",
        "12/12/2014",
        5.4
    ],
    [
        "United States",
        "12/12/2014",
        6.54
    ],
    [
        "United States",
        "12/12/2014",
        1.392
    ],
    [
        "United States",
        "12/14/2014",
        287.976
    ],
    [
        "United States",
        "12/14/2014",
        201.04
    ],
    [
        "United States",
        "12/14/2014",
        38.88
    ],
    [
        "United States",
        "12/14/2014",
        31.44
    ],
    [
        "United States",
        "12/14/2014",
        12.96
    ],
    [
        "United States",
        "12/14/2014",
        8.64
    ],
    [
        "United States",
        "12/15/2014",
        1199.98
    ],
    [
        "United States",
        "12/15/2014",
        526.582
    ],
    [
        "United States",
        "12/15/2014",
        974.988
    ],
    [
        "United States",
        "12/15/2014",
        266.352
    ],
    [
        "United States",
        "12/15/2014",
        159.8
    ],
    [
        "United States",
        "12/15/2014",
        95.232
    ],
    [
        "United States",
        "12/15/2014",
        73.85
    ],
    [
        "United States",
        "12/15/2014",
        227.976
    ],
    [
        "United States",
        "12/15/2014",
        56.328
    ],
    [
        "United States",
        "12/15/2014",
        43.7
    ],
    [
        "United States",
        "12/15/2014",
        44.75
    ],
    [
        "United States",
        "12/15/2014",
        64.96
    ],
    [
        "United States",
        "12/15/2014",
        26.25
    ],
    [
        "United States",
        "12/15/2014",
        39.264
    ],
    [
        "United States",
        "12/15/2014",
        25.71
    ],
    [
        "United States",
        "12/15/2014",
        17.28
    ],
    [
        "United States",
        "12/15/2014",
        52.68
    ],
    [
        "United States",
        "12/15/2014",
        2.032
    ],
    [
        "United States",
        "12/16/2014",
        196.776
    ],
    [
        "United States",
        "12/16/2014",
        54.32
    ],
    [
        "United States",
        "12/16/2014",
        22.83
    ],
    [
        "United States",
        "12/16/2014",
        22.77
    ],
    [
        "United States",
        "12/16/2014",
        10.192
    ],
    [
        "United States",
        "12/17/2014",
        189.95
    ],
    [
        "United States",
        "12/17/2014",
        158.9
    ],
    [
        "United States",
        "12/17/2014",
        97.184
    ],
    [
        "United States",
        "12/17/2014",
        149.95
    ],
    [
        "United States",
        "12/17/2014",
        44.4
    ],
    [
        "United States",
        "12/17/2014",
        18.96
    ],
    [
        "United States",
        "12/17/2014",
        29.95
    ],
    [
        "United States",
        "12/17/2014",
        81.568
    ],
    [
        "United States",
        "12/17/2014",
        33.376
    ],
    [
        "United States",
        "12/17/2014",
        24.32
    ],
    [
        "United States",
        "12/17/2014",
        13.36
    ],
    [
        "United States",
        "12/17/2014",
        10.8
    ],
    [
        "United States",
        "12/17/2014",
        5.984
    ],
    [
        "United States",
        "12/18/2014",
        481.32
    ],
    [
        "United States",
        "12/18/2014",
        544.38
    ],
    [
        "United States",
        "12/18/2014",
        504.9
    ],
    [
        "United States",
        "12/18/2014",
        166.72
    ],
    [
        "United States",
        "12/18/2014",
        124.36
    ],
    [
        "United States",
        "12/18/2014",
        66.284
    ],
    [
        "United States",
        "12/18/2014",
        32.56
    ],
    [
        "United States",
        "12/18/2014",
        28.16
    ],
    [
        "United States",
        "12/18/2014",
        13.98
    ],
    [
        "United States",
        "12/18/2014",
        13.23
    ],
    [
        "United States",
        "12/18/2014",
        24.816
    ],
    [
        "United States",
        "12/18/2014",
        15.24
    ],
    [
        "United States",
        "12/18/2014",
        11.808
    ],
    [
        "United States",
        "12/19/2014",
        1704.56
    ],
    [
        "United States",
        "12/19/2014",
        1141.938
    ],
    [
        "United States",
        "12/19/2014",
        119.98
    ],
    [
        "United States",
        "12/19/2014",
        119.833
    ],
    [
        "United States",
        "12/19/2014",
        99.95
    ],
    [
        "United States",
        "12/19/2014",
        46.672
    ],
    [
        "United States",
        "12/19/2014",
        91.36
    ],
    [
        "United States",
        "12/19/2014",
        130.112
    ],
    [
        "United States",
        "12/19/2014",
        38.82
    ],
    [
        "United States",
        "12/19/2014",
        12.672
    ],
    [
        "United States",
        "12/19/2014",
        18.704
    ],
    [
        "United States",
        "12/19/2014",
        32.4
    ],
    [
        "United States",
        "12/19/2014",
        6.63
    ],
    [
        "United States",
        "12/19/2014",
        12.96
    ],
    [
        "United States",
        "12/19/2014",
        18.96
    ],
    [
        "United States",
        "12/19/2014",
        29.34
    ],
    [
        "United States",
        "12/19/2014",
        5.76
    ],
    [
        "United States",
        "12/19/2014",
        7.236
    ],
    [
        "United States",
        "12/19/2014",
        4.824
    ],
    [
        "United States",
        "12/19/2014",
        3.2
    ],
    [
        "United States",
        "12/20/2014",
        1665.62
    ],
    [
        "United States",
        "12/20/2014",
        102.018
    ],
    [
        "United States",
        "12/20/2014",
        78.256
    ],
    [
        "United States",
        "12/20/2014",
        36.672
    ],
    [
        "United States",
        "12/20/2014",
        13.36
    ],
    [
        "United States",
        "12/21/2014",
        279.9
    ],
    [
        "United States",
        "12/21/2014",
        34.02
    ],
    [
        "United States",
        "12/21/2014",
        50.352
    ],
    [
        "United States",
        "12/21/2014",
        6.48
    ],
    [
        "United States",
        "12/21/2014",
        6.984
    ],
    [
        "United States",
        "12/22/2014",
        1000.02
    ],
    [
        "United States",
        "12/22/2014",
        281.97
    ],
    [
        "United States",
        "12/22/2014",
        71
    ],
    [
        "United States",
        "12/22/2014",
        166.44
    ],
    [
        "United States",
        "12/22/2014",
        375.34
    ],
    [
        "United States",
        "12/22/2014",
        69.5
    ],
    [
        "United States",
        "12/22/2014",
        124.36
    ],
    [
        "United States",
        "12/22/2014",
        15.92
    ],
    [
        "United States",
        "12/22/2014",
        23.88
    ],
    [
        "United States",
        "12/22/2014",
        5.88
    ],
    [
        "United States",
        "12/22/2014",
        6.63
    ],
    [
        "United States",
        "12/23/2014",
        1586.69
    ],
    [
        "United States",
        "12/23/2014",
        629.958
    ],
    [
        "United States",
        "12/23/2014",
        474.95
    ],
    [
        "United States",
        "12/23/2014",
        839.43
    ],
    [
        "United States",
        "12/23/2014",
        695.16
    ],
    [
        "United States",
        "12/23/2014",
        411.8
    ],
    [
        "United States",
        "12/23/2014",
        607.52
    ],
    [
        "United States",
        "12/23/2014",
        182.55
    ],
    [
        "United States",
        "12/23/2014",
        934.956
    ],
    [
        "United States",
        "12/23/2014",
        84.99
    ],
    [
        "United States",
        "12/23/2014",
        220.98
    ],
    [
        "United States",
        "12/23/2014",
        199.95
    ],
    [
        "United States",
        "12/23/2014",
        141.96
    ],
    [
        "United States",
        "12/23/2014",
        67.04
    ],
    [
        "United States",
        "12/23/2014",
        59.24
    ],
    [
        "United States",
        "12/23/2014",
        46.864
    ],
    [
        "United States",
        "12/23/2014",
        75.88
    ],
    [
        "United States",
        "12/23/2014",
        37.32
    ],
    [
        "United States",
        "12/23/2014",
        25.92
    ],
    [
        "United States",
        "12/23/2014",
        18.45
    ],
    [
        "United States",
        "12/23/2014",
        31.16
    ],
    [
        "United States",
        "12/23/2014",
        26.16
    ],
    [
        "United States",
        "12/23/2014",
        23.128
    ],
    [
        "United States",
        "12/23/2014",
        7.824
    ],
    [
        "United States",
        "12/23/2014",
        1.641
    ],
    [
        "United States",
        "12/23/2014",
        6.33
    ],
    [
        "United States",
        "12/23/2014",
        4.17
    ],
    [
        "United States",
        "12/24/2014",
        494.97
    ],
    [
        "United States",
        "12/24/2014",
        367.96
    ],
    [
        "United States",
        "12/24/2014",
        218.352
    ],
    [
        "United States",
        "12/24/2014",
        182.94
    ],
    [
        "United States",
        "12/24/2014",
        72.704
    ],
    [
        "United States",
        "12/24/2014",
        181.95
    ],
    [
        "United States",
        "12/24/2014",
        29.312
    ],
    [
        "United States",
        "12/24/2014",
        28.672
    ],
    [
        "United States",
        "12/24/2014",
        62.04
    ],
    [
        "United States",
        "12/24/2014",
        13.48
    ],
    [
        "United States",
        "12/24/2014",
        27.46
    ],
    [
        "United States",
        "12/24/2014",
        12.264
    ],
    [
        "United States",
        "12/24/2014",
        44.96
    ],
    [
        "United States",
        "12/24/2014",
        13.84
    ],
    [
        "United States",
        "12/24/2014",
        175.872
    ],
    [
        "United States",
        "12/25/2014",
        2879.952
    ],
    [
        "United States",
        "12/25/2014",
        1003.62
    ],
    [
        "United States",
        "12/25/2014",
        842.376
    ],
    [
        "United States",
        "12/25/2014",
        479.97
    ],
    [
        "United States",
        "12/25/2014",
        264.32
    ],
    [
        "United States",
        "12/25/2014",
        271.764
    ],
    [
        "United States",
        "12/25/2014",
        232.88
    ],
    [
        "United States",
        "12/25/2014",
        90.48
    ],
    [
        "United States",
        "12/25/2014",
        35.91
    ],
    [
        "United States",
        "12/25/2014",
        19.44
    ],
    [
        "United States",
        "12/25/2014",
        37.93
    ],
    [
        "United States",
        "12/25/2014",
        12.3
    ],
    [
        "United States",
        "12/25/2014",
        17.88
    ],
    [
        "United States",
        "12/25/2014",
        21.312
    ],
    [
        "United States",
        "12/25/2014",
        14.376
    ],
    [
        "United States",
        "12/25/2014",
        8.544
    ],
    [
        "United States",
        "12/26/2014",
        629.1
    ],
    [
        "United States",
        "12/26/2014",
        304.45
    ],
    [
        "United States",
        "12/26/2014",
        191.984
    ],
    [
        "United States",
        "12/26/2014",
        270.62
    ],
    [
        "United States",
        "12/26/2014",
        273.06
    ],
    [
        "United States",
        "12/26/2014",
        120
    ],
    [
        "United States",
        "12/26/2014",
        90.48
    ],
    [
        "United States",
        "12/26/2014",
        153.552
    ],
    [
        "United States",
        "12/26/2014",
        158.928
    ],
    [
        "United States",
        "12/26/2014",
        95.94
    ],
    [
        "United States",
        "12/26/2014",
        44.688
    ],
    [
        "United States",
        "12/26/2014",
        41.96
    ],
    [
        "United States",
        "12/26/2014",
        40.98
    ],
    [
        "United States",
        "12/26/2014",
        96.08
    ],
    [
        "United States",
        "12/26/2014",
        39.312
    ],
    [
        "United States",
        "12/26/2014",
        39.582
    ],
    [
        "United States",
        "12/26/2014",
        31.744
    ],
    [
        "United States",
        "12/26/2014",
        21
    ],
    [
        "United States",
        "12/26/2014",
        31.8
    ],
    [
        "United States",
        "12/26/2014",
        13.023
    ],
    [
        "United States",
        "12/26/2014",
        3.62
    ],
    [
        "United States",
        "12/26/2014",
        3.856
    ],
    [
        "United States",
        "12/26/2014",
        3.168
    ],
    [
        "United States",
        "12/27/2014",
        750.68
    ],
    [
        "United States",
        "12/27/2014",
        44.75
    ],
    [
        "United States",
        "12/27/2014",
        16.032
    ],
    [
        "United States",
        "12/27/2014",
        3.132
    ],
    [
        "United States",
        "12/28/2014",
        164.388
    ],
    [
        "United States",
        "12/28/2014",
        13.248
    ],
    [
        "United States",
        "12/29/2014",
        725.84
    ],
    [
        "United States",
        "12/29/2014",
        340.704
    ],
    [
        "United States",
        "12/29/2014",
        113.372
    ],
    [
        "United States",
        "12/29/2014",
        118.25
    ],
    [
        "United States",
        "12/29/2014",
        72.45
    ],
    [
        "United States",
        "12/29/2014",
        64.784
    ],
    [
        "United States",
        "12/29/2014",
        33.264
    ],
    [
        "United States",
        "12/29/2014",
        14.85
    ],
    [
        "United States",
        "12/29/2014",
        25.9
    ],
    [
        "United States",
        "12/29/2014",
        78.8528
    ],
    [
        "United States",
        "12/29/2014",
        27.168
    ],
    [
        "United States",
        "12/29/2014",
        13.96
    ],
    [
        "United States",
        "12/29/2014",
        7.968
    ],
    [
        "United States",
        "12/29/2014",
        7.4
    ],
    [
        "United States",
        "12/29/2014",
        4.28
    ],
    [
        "United States",
        "12/29/2014",
        2.96
    ],
    [
        "United States",
        "12/29/2014",
        1.68
    ],
    [
        "United States",
        "12/29/2014",
        1.188
    ],
    [
        "United States",
        "12/29/2014",
        2.48
    ],
    [
        "United States",
        "12/30/2014",
        1207.84
    ],
    [
        "United States",
        "12/30/2014",
        300.98
    ],
    [
        "United States",
        "12/30/2014",
        302.376
    ],
    [
        "United States",
        "12/30/2014",
        209.7
    ],
    [
        "United States",
        "12/30/2014",
        101.12
    ],
    [
        "United States",
        "12/30/2014",
        68.46
    ],
    [
        "United States",
        "12/30/2014",
        258.75
    ],
    [
        "United States",
        "12/30/2014",
        393.568
    ],
    [
        "United States",
        "12/30/2014",
        34.58
    ],
    [
        "United States",
        "12/30/2014",
        19.6
    ],
    [
        "United States",
        "12/30/2014",
        6.03
    ],
    [
        "United States",
        "12/30/2014",
        12.53
    ],
    [
        "United States",
        "12/31/2014",
        323.136
    ],
    [
        "United States",
        "12/31/2014",
        90.93
    ],
    [
        "United States",
        "12/31/2014",
        209.3
    ],
    [
        "United States",
        "12/31/2014",
        52.776
    ],
    [
        "United States",
        "12/31/2014",
        20.72
    ],
    [
        "United States",
        "12/31/2014",
        13.904
    ],
    [
        "United States",
        "12/31/2014",
        3.024
    ]
]
```

In the above code:

* `data` is the variable in which the data array is saved.

* Each element of the data array has values specific to each row of the `DataTable`. The values in the array represent:

    * The name of the **Country**.

    * **Time** according to the format.

    * **Value** of the data plots, i.e. sales per date.

We are all set with our data to create the chart. Now, let's create the `.html` file to render the above chart.

## Create `index.html` file

Once the schema and data files are ready it is time to create the `DataTable` and render the chart. To do this, create an `index.html` file and copy the following code: 

```
<!DOCTYPE html>
<html lang="en">

<head>
  <style type="text/css">
  #container {
    width: 700px;
  }
  </style>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Create your First Chart</title>
</head>

<body>
  <div id="container"></div>
  <script src="./build/fusioncharts.js"></script>
  <script src="./data.js"></script>
  <script src="./schema.js"></script>
  <script>
    const dataStore = new FusionCharts.DataStore(data, schema);

    new FusionCharts({
      type: 'timeseries',
      renderAt: 'container',
      width: "90%",
      height: 650,
      dataSource: {
        data: dataStore.getDataTable(),
        chart: {
        },
        caption: {
          text: 'Online Sales of a SuperStore in the US'
        }
      }
    }).render()
  </script>
</body>

</html>
```

In the above code:

* Include `fusioncharts.js` file.

* Include `data.js` and `schema.js` files.

* Pass the `schema` and `data` to the Data Store which sets the `DataTable` used to render the chart.

* Sort your data using the `enableIndex` and the `indexBy` properties. 

* Fetch the `DataTable` from the data store using the `FusionCharts.datastore.getdatatable()` method.

* Define the chart configuration in the JSON:

    * Set the type as `timeseries`.

    * Set the chart container as `container`.

    * Set the width and height (in pixels).

    * Set the name of the `DataTable` as the value of the `dataSource` property.

That's it! Your first chart using FusionTime is ready.