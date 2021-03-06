charts-resources/usage-guide/basic/advanced-charting-annotations-real-life-use-cases-example-1.js   000755  000766  000024  00000010003 13252177564 035247  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000                                                                                                                                                                         {
    type: 'column2d',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Comparison of Quarterly Revenue",
            "subCaption": "Last Year",
            "showBorder": "0",
            "xAxisName": "Quarter",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "yAxisMaxValue": "50000",
            "showValues": "0",
            "showTooltip": "0",
            "animation": "0",
            //Theme
            "theme": "fint"
        },
        "data": [{
            "label": "Q1",
            "value": "30400"
        }, {
            "label": "Q2",
            "value": "29800"
        }, {
            "label": "Q3",
            "value": "21800"
        }, {
            "label": "Q4",
            "value": "26800"
        }],
        //All annotations are grouped under this element
        "annotations": {
            "showbelow": "0",
            //Annotations on a chart can be divided across multiple groups for easy management, and manipulation through API
            "groups": [{
                //Each group needs a unique ID
                "id": "Callout",
                //Under each group, you can define multiple items. Each item is a polygon, text or image - with its own set of parameters.
                "items": [{
                        //Each item needs a unique ID
                        "id": "CalloutBase",
                        //This item is of type rectangle
                        "type": "rectangle",
                        "radius": "2",
                        "alpha": "90",
                        "fillColor": "#6baa01"
                    }, {
                        "id": "CalloutTriangle",
                        //Polygon item 
                        "type": "polygon",
                        //With 3 sides, so it is a triangle
                        "sides": "3",
                        "startangle": "270",
                        "alpha": "90",
                        "fillColor": "#6baa01",
                        "radius": "9",
                    }, {
                        "id": "CalloutLabel",
                        //Text annotation item type to add label for callout
                        "type": "Text",
                        "fontSize": "12",
                        "bold": "1",
                        "fillcolor": "#ffffff"
                    }

                ]
            }]
        }
    },
    events: {
        "renderComplete": function(evtObj, argObj) {
            var index = 0,
                chrtDataArr = evtObj.sender.options.dataSource.data,
                maxValue = 0,
                index = 0;
            for (var i = 0; i < chrtDataArr.length; i++) {
                if (parseInt(chrtDataArr[i].value) > maxValue) {
                    maxValue = parseInt(chrtDataArr[i].value);
                    index = i;
                }
            }
            //Setting x and y position based on annotation macros. 
            //Here we're dynamically positioning it w.r.t the column
            //with highest data value
            annotations = evtObj && evtObj.sender.annotations;
            annotations && annotations.update("CalloutBase", {
                "x": ["$dataset.0.set", index, "x-55"].join("."),
                "y": ["$dataset.0.set", index, "starty-12"].join("."),
                "tox": ["$dataset.0.set", index, "x+55"].join("."),
                "toy": ["$dataset.0.set", index, "starty-50"].join(".")
            });
            annotations && annotations.update("CalloutTriangle", {
                "x": ["$dataset.0.set", index, "x"].join("."),
                "y": ["$dataset.0.set", index, "starty-8"].join(".")
            });
            annotations && annotations.update("CalloutLabel", {
                "text": "Highest Revenue{br} $" + maxValue,
                "x": ["$dataset.0.set", index, "x"].join("."),
                "y": ["$dataset.0.set", index, "starty-32"].join(".")
            });
        }

    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             charts-resources/usage-guide/basic/advanced-charting-annotations-real-life-use-cases-example-2.js   000755  000766  000024  00000023370 13252177575 035265  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000                                                                                                                                                                         {
    type: 'msspline',
    renderAt: 'chart-container',
    width: '600',
    height: '450',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga",
            "xAxisName": "Day",
            "yAxisName": "No. of visitors",
            "yAxisNamePadding": "100",
            "showYAxisValues": "0",
            "theme": "fint",
            "showValues": "0",
            "showTooltip": "0"
        },
        "categories": [{
            "category": [{
                "label": "Mon"
            }, {
                "label": "Tue"
            }, {
                "label": "Wed"
            }, {
                "vline": "true",
                "lineposition": "0",
                "color": "#6baa01",
                "labelHAlign": "right",
                "labelPosition": "0",
                "label": "National holiday"
            }, {
                "label": "Thu"
            }, {
                "label": "Fri"
            }, {
                "label": "Sat"
            }, {
                "label": "Sun"
            }]
        }],

        //Using Annotations
        "annotations": {
            "origw": "600",
            "origh": "450",
            "autoscale": "1",
            "groups": [{
                "id": "ds1tips",
                "items": [{
                    "id": "indicator-line",
                    "type": "line",
                    "dashed": "1"
                }, {
                    "id": "tip1_1",
                    "type": "rectangle",
                    "fillcolor": "#6baa01",
                    "x": "$dataset.0.set.0.x + 5",
                    "y": "$dataset.0.set.0.y - 30",
                    "tox": "$dataset.0.set.0.x + 80",
                    "toy": "$dataset.0.set.0.y - 10",
                    "visible": "0"
                }]
            }, {
                // Drawing custom yaxisline using Annotation
                "id": "yaxisline",
                "items": [{
                    "id": "line",
                    "type": "line",
                    "color": "#f8bd19",
                    "x": "$canvasstartx - 5",
                    "y": "$canvasstarty",
                    "tox": "$canvasstartx - 5",
                    "toy": "$canvasendy",
                    "thickness": "3"
                }, {
                    // Drawing custom label bg using Annotation
                    "id": "none-label-bg",
                    "type": "rectangle",
                    "fillcolor": "#f8bd19",
                    "x": "$canvasstartx - 60",
                    "tox": "$canvasstartx - 15",
                    "y": "$canvasendy - 20",
                    "toy": "$canvasendy",
                    "radius": "3"
                }, {
                    // Drawing circles on y-axis using Annotation
                    "id": "none-dot",
                    "type": "circle",
                    "radius": "5",
                    "x": "$canvasstartx - 5",
                    "y": "$canvasendy - 10",
                    "color": "#f8bd19"
                }, {
                    // Drawing text as custom y-axis label using Annotation
                    "id": "none-label",
                    "type": "text",
                    "fillcolor": "#ffffff",
                    "text": "None",
                    "x": "$canvasstartx - 37",
                    "y": "$canvasendy - 12",
                    "fontsize": "12",
                    "bold": "1"
                }, {
                    "id": "few-label-bg",
                    "type": "rectangle",
                    "fillcolor": "#f8bd19",
                    "x": "$canvasstartx - 55",
                    "tox": "$canvasstartx - 15",
                    "y": "$canvasendy - 100",
                    "toy": "$canvasendy - 80",
                    "radius": "3"
                }, {
                    "id": "few-dot",
                    "type": "circle",
                    "radius": "5",
                    "x": "$canvasstartx - 5",
                    "y": "$canvasendy - 90",
                    "color": "#f8bd19"
                }, {
                    "id": "few-label",
                    "type": "text",
                    "fillcolor": "#ffffff",
                    "text": "Few",
                    "x": "$canvasstartx - 35",
                    "y": "$canvasendy - 92",
                    "fontsize": "12",
                    "bold": "1"
                }, {
                    "id": "moderate-label-bg",
                    "type": "rectangle",
                    "fillcolor": "#f8bd19",
                    "x": "$canvasstartx - 85",
                    "tox": "$canvasstartx - 15",
                    "y": "$canvasendy - 180",
                    "toy": "$canvasendy - 160",
                    "radius": "3"
                }, {
                    "id": "moderate-dot",
                    "type": "circle",
                    "radius": "5",
                    "x": "$canvasstartx - 5",
                    "y": "$canvasendy - 170",
                    "color": "#f8bd19"
                }, {
                    "id": "moderate-label",
                    "type": "text",
                    "fillcolor": "#ffffff",
                    "text": "Moderate",
                    "x": "$canvasstartx - 50",
                    "y": "$canvasendy - 172",
                    "fontsize": "12",
                    "bold": "1"
                }, {
                    "id": "maximum-label-bg",
                    "type": "rectangle",
                    "fillcolor": "#f8bd19",
                    "x": "$canvasstartx - 88",
                    "tox": "$canvasstartx - 15",
                    "y": "$canvasendy - 260",
                    "toy": "$canvasendy - 240",
                    "radius": "3"
                }, {
                    "id": "maximum-dot",
                    "type": "circle",
                    "radius": "5",
                    "x": "$canvasstartx - 5",
                    "y": "$canvasendy - 252",
                    "color": "#f8bd19"
                }, {
                    "id": "maximum-label",
                    "type": "text",
                    "fillcolor": "#ffffff",
                    "text": "High",
                    "x": "$canvasstartx - 52",
                    "y": "$canvasendy - 252",
                    "fontsize": "12",
                    "bold": "1"
                }]
            }, {
                "id": "dyn-label-grp",
                "items": [{
                    "id": "dyn-label-bg",
                    "type": "rectangle",
                    "radius": "3"
                }, {
                    "id": "dyn-label",
                    "type": "text",
                    "fillcolor": "#ffffff",
                    "fontsize": "12",
                    "bold": "1"
                }, {
                    "id": "dyn-detail-label",
                    "type": "text",
                    "align": "right",
                    "x": "$canvasendx",
                    "bgcolor": "#ffffff"
                }]
            }]
        },
        "dataset": [{
            "seriesname": "Bakersfield Central",
            "data": [{
                "value": "15123"
            }, {
                "value": "14233"
            }, {
                "value": "25507"
            }, {
                "value": "9110"
            }, {
                "value": "15529"
            }, {
                "value": "20803"
            }, {
                "value": "19202"
            }]
        }, {
            "seriesname": "Los Angeles Topanga",
            "data": [{
                "value": "13400"
            }, {
                "value": "12800"
            }, {
                "value": "22800"
            }, {
                "value": "12400"
            }, {
                "value": "15800"
            }, {
                "value": "19800"
            }, {
                "value": "21800"
            }]
        }]
    },
    "events": {

        "dataplotRollOver": function(evtObj, argObj) {
            var dsIndex = argObj.datasetIndex,
                dsName = argObj.datasetName,
                index = argObj.index,
                value = argObj.value,
                //Applying colors to individual dataset
                color = (dsIndex === 0) ? "#008ee4" : "#6baa01",
                annotations = evtObj.sender.annotations;
            annotations.update("dyn-label-bg", {
                "x": "$canvasstartx - 72",
                "tox": "$canvasstartx - 10",
                "y": ["$dataset", dsIndex, "set", index, "y+10"].join("."),
                "toy": ["$dataset", dsIndex, "set", index, "y-10"].join("."),
                "fillcolor": color
            });
            annotations.update("dyn-label", {
                "text": value,
                "x": "$canvasstartx - 42",
                "y": ["$dataset", dsIndex, "set", index, "y"].join(".")
            });
            annotations.update("indicator-line", {
                x: ["$canvasstartx"],
                tox: ["$canvasendx"],
                y: ["$dataset", dsIndex, "set", index, "y"].join("."),
                toy: ["$dataset", dsIndex, "set", index, "y"].join("."),
                "color": color
            });
            annotations.update("dyn-detail-label", {
                "text": "Total " + value + " vistiors {br} in " + dsName + " strore",
                "color": color,
                "y": ["$dataset", dsIndex, "set", index, "y + 15"].join(".")
            });
        },
        "dataplotRollOut": function(evtObj, argObj) {
            var annotations = evtObj.sender.annotations;
            annotations.hide("indicator-line");
            annotations.hide("dyn-label-bg");
            annotations.hide("dyn-label");
            annotations.hide("dyn-detail-label");
        }
    }
}
                                                                                                                                                                                                                                                                        usage-guide/basic/advanced-charting-real-time-charts-adding-historical-data-example-1.js            000755  000766  000024  00000006326 13252177640 036552  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000  charts-resources                                                                                                                                                       {
    type: 'realtimecolumn',
    renderAt: 'chart-container',
    width: '600',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart - Bakersfield Central",
            "subCaption": "Online Purchase",
            "showrealtimevalue": "1",
            "borderAlpha": "0",
            "yaxismaxvalue": "10",
            "numdisplaysets": "10",
            "usePlotGradientColor": "0",
            "canvasBorderAlpha": "20",
            "labeldisplay": "rotate",
            "slantLabels": "1",
            "showLegend": "0",
            "plotBorderAlpha": "0",
            "bgAlpha": "0",
            "showValues": "0",
            "numbersuffix": " Transactions",
            "showlabels": "1",
            "animation": "0",
            "showRealTimeValue": "0"
        },
        "categories": [{
            "category": [{
                "label": "8 mins ago"
            }, {
                "label": "7 mins ago"
            }, {
                "label": "6 mins ago"
            }, {
                "label": "5 mins ago"
            }, {
                "label": "4 mins ago"
            }, {
                "label": "3 mins ago"
            }, {
                "label": "2 mins ago"
            }, {
                "label": "1 min ago"
            }]
        }],
        "dataset": [{
            "seriesname": "",
            "alpha": "100",
            "data": [{
                "value": "5"
            }, {
                "value": "7"
            }, {
                "value": "1"
            }, {
                "value": "5"
            }, {
                "value": "5"
            }, {
                "value": "2"
            }, {
                "value": "4"
            }, {
                "value": "3"
            }]
        }]
    },
    events: {
        "beforeRender": function(evt, args) {
            var chartRef = evt.sender,
                //Format minutes, seconds by adding 0 prefix accordingly
                formatTime = function(time) {
                    (time < 10) ? (time = "0" + time) : (time = time);
                    return time;
                },
                updateData = function() {

                    //Get reference to the chart using its ID
                    var chartRef = evt.sender;
                    //We need to create a querystring format incremental update, containing
                    //label in hh:mm:ss format
                    //and a value (random).
                    var currDate = new Date(),
                        label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds()),
                        //Get random number between 1 & 4 - rounded
                        transactions = Math.round(Math.random() * 4) + 1,
                        strData = "&label=" + label + "&value=" + transactions;

                    //Feed it to chart.
                    chartRef.feedData(strData);
                };
                chartRef.intervalUpdate = setInterval(function() {
                    updateData();
                }, 5000);
        },
        "disposed": function(evt, args) {
            clearInterval(evt.sender.intervalUpdate);
        }

    }
}
                                                                                                                                                                                                                                                                                                          usage-guide/basic/advanced-charting-real-time-charts-clearing-chart-view-example-1.js               000755  000766  000024  00000004575 13252203050 036076  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000  charts-resources                                                                                                                                                       {
    type: 'realtimecolumn',
    renderAt: 'chart-container',
    width: '600',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart",
            "subCaption": "Online Purchase",
            "yaxismaxvalue": "10",
            "numdisplaysets": "10",
            "labeldisplay": "rotate",
            "slantLabels": "1",
            "showLegend": "0",
            "showValues": "0",
            "numbersuffix": " Transactions",
            "showRealTimeValue": "0",
            "theme": "fint"
        },
        "categories": [{
            "category": [{
                "label": "Start"
            }]
        }],
        "dataset": [{
            "seriesname": "",
            "alpha": "100",
            "data": [{
                "value": "5",
                "toolText": "5 Customers on Start"
            }]
        }]
    },
    events: {
        "beforeRender": function(evt, args) {
            var counter = 1,
                chartRef = evt.sender,
                formatTime = function(time) {
                    (time < 10) ? (time = "0" + time) : (time = time);
                    return time;
                },
                updateData = function() {
                    //We need to create a querystring format incremental update, containing
                    //label in hh:mm:ss format
                    //and a value (random).
                    var currDate = new Date(),
                        label = (formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds())),
                        //Get random number between 1 & 5 - rounded
                        footfall = (Math.round(Math.random() * 4) + 1),
                        strData = "&label=" + label + "&value=" + footfall;
                    //Adding a vLine
                    if ((counter % 10) === 1) {
                        strData += "&clear=1";
                    }
                    //Feed it to chart.
                    chartRef.feedData(strData);
                    //Increasing counter
                    counter += 1;
                };
                evt.sender.chartInterval = setInterval(function() {
                    updateData();
                }, 10000);
        },
        "disposed": function(evt, args) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
                                                                                                                                   charts-resources/usage-guide/basic/gauge-and-widgets-guide-bulb-gauge-configuring-gauge-example-1.js000755  000766  000024  00000003413 13252207340 035614  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000                                                                                                                                                                         {
    type: 'bulb',
    renderAt: 'chart-container',
    width: '300',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature status of deep freezers",
            "upperlimit": "-5",
            "lowerlimit": "-60",
            "captionPadding": "30",
            "showshadow": "0",
            "showvalue": "1",
            "useColorNameAsValue": "1",
            "placeValuesInside": "1",
            "valueFontSize": "16",

            /* Border configuration */
            "showGaugeBorder": "1",
            "gaugeBorderColor": "#666666",
            "gaugeBorderThickness": "3",
            "gaugeBorderAlpha": "100",

            //Theme
            "theme": "fint"


        },
        "colorrange": {
            "color": [{
                "minvalue": "-60",
                "maxvalue": "-35",
                "label": "Mission control,{br}we have a situation!",
                "code": "#ff0000"
            }, {
                "minvalue": "-35",
                "maxvalue": "-25",
                "label": "Something is just  not right!",
                "code": "#ff9900"
            }, {
                "minvalue": "-25",
                "maxvalue": "-5",
                "label": "All well ahoy!",
                "code": "#00ff00"
            }]
        },
        "value": "-5"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
        	var chartRef = evtObj.sender;
            evtObj.sender.chartInterval = setInterval(function() {
                var num = (Math.floor(Math.random() * 55) * -1) - 5;
               	chartRef.feedData("&value=" + num);
            }, 10000);
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
                                                                                                                                                                                                                                                     charts-resources/usage-guide/basic/gauge-and-widgets-guide-bulb-gauge-configuring-gauge-example-3.js000755  000766  000024  00000003340 13252207107 035616  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000                                                                                                                                                                         {
    type: 'bulb',
    renderAt: 'chart-container',
    width: '300',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature status of deep freezers",
            "upperlimit": "-5",
            "lowerlimit": "-60",
            "captionPadding": "30",
            "showshadow": "0",
            "showvalue": "1",
            "useColorNameAsValue": "1",
            "placeValuesInside": "1",
            "valueFontSize": "16",
            //Gauge origin
            "gaugeOriginX": "150",
            "gaugeOriginY": "150",
            //Gauge radius
            "gaugeRadius": "105",

            //Theme
            "theme": "fint"


        },
        "colorrange": {
            "color": [{
                "minvalue": "-60",
                "maxvalue": "-35",
                "label": "Mission control,{br}we have a situation!",
                "code": "#ff0000"
            }, {
                "minvalue": "-35",
                "maxvalue": "-25",
                "label": "Something is just  not right!",
                "code": "#ff9900"
            }, {
                "minvalue": "-25",
                "maxvalue": "-5",
                "label": "All well ahoy!",
                "code": "#00ff00"
            }]
        },
        "value": "-5"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var chartRef = evtObj.sender;
            chartRef.chartInterval = setInterval(function() {
                var num = (Math.floor(Math.random() * 55) * -1) - 5;
                chartRef.feedData("&value=" + num);
            }, 10000);
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
                                                                                                                                                                                                                                                                                                charts-resources/usage-guide/basic/gauge-and-widgets-guide-bulb-gauge-configuring-gauge-example-4.js000755  000766  000024  00000003171 13252207100 035612  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000                                                                                                                                                                         {
    type: 'bulb',
    renderAt: 'chart-container',
    width: '300',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature status of deep freezers",
            "upperlimit": "-5",
            "lowerlimit": "-60",
            "captionPadding": "30",
            "showshadow": "0",
            "showvalue": "1",
            "useColorNameAsValue": "1",
            "placeValuesInside": "1",
            "valueFontSize": "16",

            //2D look n feel
            "is3D": "0",

            //Theme
            "theme": "fint"


        },
        "colorrange": {
            "color": [{
                "minvalue": "-60",
                "maxvalue": "-35",
                "label": "Mission control,{br}we have a situation!",
                "code": "#ff0000"
            }, {
                "minvalue": "-35",
                "maxvalue": "-25",
                "label": "Something is just  not right!",
                "code": "#ff9900"
            }, {
                "minvalue": "-25",
                "maxvalue": "-5",
                "label": "All well ahoy!",
                "code": "#00ff00"
            }]
        },
        "value": "-5"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var chartRef = evtObj.sender;
            chartRef.chartInterval = setInterval(function() {
                var num = (Math.floor(Math.random() * 55) * -1) - 5;
                chartRef.feedData("&value=" + num);
            }, 10000);
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                       charts-resources/usage-guide/basic/gauge-and-widgets-guide-bulb-gauge-configuring-gauge-example-5.js000755  000766  000024  00000003165 13252207562 035632  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000                                                                                                                                                                         {
    type: 'bulb',
    renderAt: 'chart-container',
    width: '300',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature status of deep freezers",
            "upperlimit": "-5",
            "lowerlimit": "-60",
            "captionPadding": "30",
            "numberSuffix": "°C",
            "showshadow": "0",
            "showvalue": "1",

            "valueFontSize": "16",

            //Placing value inside the gauge
            "placeValuesInside": "1",

            //Theme
            "theme": "fint"


        },
        "colorrange": {
            "color": [{
                "minvalue": "-60",
                "maxvalue": "-35",
                "label": "Mission control,{br}we have a situation!",
                "code": "#ff0000"
            }, {
                "minvalue": "-35",
                "maxvalue": "-25",
                "label": "Something is just  not right!",
                "code": "#ff9900"
            }, {
                "minvalue": "-25",
                "maxvalue": "-5",
                "label": "All well ahoy!",
                "code": "#00ff00"
            }]
        },
        "value": "-5"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var chartRef = evtObj.sender;
            chartRef.chartInterval = setInterval(function() {
                var num = (Math.floor(Math.random() * 55) * -1) - 5;
                chartRef.feedData("&value=" + num);
            }, 10000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.chartInterval);
        }
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                           charts-resources/usage-guide/basic/gauge-and-widgets-guide-bulb-gauge-configuring-gauge-example-6.js000755  000766  000024  00000003151 13252207151 035620  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000                                                                                                                                                                         {
    type: 'bulb',
    renderAt: 'chart-container',
    width: '300',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature status of deep freezers",
            "upperlimit": "-5",
            "lowerlimit": "-60",
            "captionPadding": "30",
            "showshadow": "0",
            "showvalue": "1",
            "placeValuesInside": "1",
            "valueFontSize": "16",

            //Use color name as value
            "useColorNameAsValue": "1",

            //Theme
            "theme": "fint"


        },
        "colorrange": {
            "color": [{
                "minvalue": "-60",
                "maxvalue": "-35",
                "label": "Mission control,{br}we have a situation!",
                "code": "#ff0000"
            }, {
                "minvalue": "-35",
                "maxvalue": "-25",
                "label": "Something is just  not right!",
                "code": "#ff9900"
            }, {
                "minvalue": "-25",
                "maxvalue": "-5",
                "label": "All well ahoy!",
                "code": "#00ff00"
            }]
        },
        "value": "-5"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var chartRef = evtObj.sender;
            chartRef.chartInterval = setInterval(function() {
                var num = (Math.floor(Math.random() * 55) * -1) - 5;
                chartRef.feedData("&value=" + num);
            }, 10000);
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                       charts-resources/usage-guide/basic/gauge-and-widgets-guide-bulb-gauge-configuring-gauge-example-7.js000755  000766  000024  00000003166 13252207347 035636  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000                                                                                                                                                                         {
    type: 'bulb',
    renderAt: 'chart-container',
    width: '300',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature status of deep freezers",
            "upperlimit": "-5",
            "lowerlimit": "-60",
            "captionPadding": "30",
            "showshadow": "0",
            "showvalue": "1",
            "useColorNameAsValue": "1",
            "placeValuesInside": "1",
            "valueFontSize": "16",

            //Configure hover effect
            "showHoverEffect": "1",

            "theme": "fint"
        },
        "colorrange": {
            "color": [{
                "minvalue": "-60",
                "maxvalue": "-35",
                "label": "Mission control,{br}we have a situation!",
                "code": "#ff0000"
            }, {
                "minvalue": "-35",
                "maxvalue": "-25",
                "label": "Something is just  not right!",
                "code": "#ff9900"
            }, {
                "minvalue": "-25",
                "maxvalue": "-5",
                "label": "All well ahoy!",
                "code": "#00ff00"
            }]
        },
        "value": "-5"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var chartRef = evtObj.sender;
            chartRef.chartInterval = setInterval(function() {
                var num = (Math.floor(Math.random() * 55) * -1) - 5;
                chartRef.feedData("&value=" + num);
            }, 10000);
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                          charts-resources/usage-guide/basic/gauge-and-widgets-guide-bulb-gauge-introduction-example-1.js     000755  000766  000024  00000003717 13252206375 034753  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000                                                                                                                                                                         {
    type: 'bulb',
    renderAt: 'chart-container',
    id: 'myChart',
    width: '300',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature status of deep freezers",
            "upperlimit": "-5",
            "lowerlimit": "-60",
            "captionPadding": "30",
            "showshadow": "0",
            "showvalue": "1",
            "useColorNameAsValue": "1",
            "placeValuesInside": "1",
            "valueFontSize": "16",
            //Tooltext
            "plottooltext": "<span id='headerdiv' style='font-family:\"Arial\", \"Helvetica\";font-size: 13px;font-weight: bold;'>Current Temperature:</span>{br}<div id='valueDiv' style=' color: #EEEEEE; text-align:center;font-size: 25px; padding: 10px;  margin-top:5px; font-family:\"Arial\", \"Helvetica\"; font-weight: bold;'>$value°C</div>",
            //Theme
            "theme": "fint"


        },
        "colorrange": {
            "color": [{
                "minvalue": "-60",
                "maxvalue": "-35",
                "label": "Mission control, <br> we have a situation!",
                "code": "#ff0000"
            }, {
                "minvalue": "-35",
                "maxvalue": "-25",
                "label": "Something is just  not right!",
                "code": "#ff9900"
            }, {
                "minvalue": "-25",
                "maxvalue": "-5",
                "label": "All well ahoy!",
                "code": "#00ff00"
            }]
        },
        "value": "-5"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
        	var chartRef = evtObj.sender;
        	
            chartRef.chartInterval = setInterval(function() {
                var num = (Math.floor(Math.random() * 55) * -1) - 5;
                chartRef.feedData("&value=" + num);
            }, 10000);
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
                                                 charts-resources/usage-guide/basic/gauge-and-widgets-guide-bulb-gauge-real-time-gauges-example-1.js 000755  000766  000024  00000003225 13252206412 035344  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000                                                                                                                                                                         {
    type: 'bulb',
    renderAt: 'chart-container',
    width: '300',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature status of deep freezers",
            "upperlimit": "-5",
            "lowerlimit": "-60",
            "captionPadding": "30",
            "showshadow": "0",
            "showvalue": "1",
            "useColorNameAsValue": "1",
            "placeValuesInside": "1",
            "valueFontSize": "16",
            //Tooltext
            "plottooltext": "Current Temperature:$value°C",
            //Theme
            "theme": "fint"


        },
        "colorrange": {
            "color": [{
                "minvalue": "-60",
                "maxvalue": "-35",
                "label": "Mission control,{br}we have a situation!",
                "code": "#ff0000"
            }, {
                "minvalue": "-35",
                "maxvalue": "-25",
                "label": "Something is just  not right!",
                "code": "#ff9900"
            }, {
                "minvalue": "-25",
                "maxvalue": "-5",
                "label": "All well ahoy!",
                "code": "#00ff00"
            }]
        },
        "value": "-5"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var chartRef = evtObj.sender;
            chartRef.chartInterval = setInterval(function() {
                var num = (Math.floor(Math.random() * 55) * -1) - 5;
                chartRef.feedData("&value=" + num);
            }, 10000);
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
                                                                                                                                                                                                                                                                                                                                                                           usage-guide/basic/gauge-and-widgets-guide-bulb-gauge-simple-gauge-example-example-1.js              000755  000766  000024  00000003231 13252203520 036137  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000  charts-resources                                                                                                                                                       {
    type: 'bulb',
    renderAt: 'chart-container',
    width: '300',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature status of deep freezers",
            "upperlimit": "-5",
            "lowerlimit": "-60",
            "captionPadding": "30",
            "showshadow": "0",
            "showvalue": "1",
            "useColorNameAsValue": "1",
            "placeValuesInside": "1",
            "valueFontSize": "16",
            //Tooltext
            "plottooltext": "Current Temperature:{br}$value°C",
            //Theme
            "theme": "fint"


        },
        "colorrange": {
            "color": [{
                "minvalue": "-60",
                "maxvalue": "-35",
                "label": "Mission control,{br}we have a situation!",
                "code": "#ff0000"
            }, {
                "minvalue": "-35",
                "maxvalue": "-25",
                "label": "Something is just  not right!",
                "code": "#ff9900"
            }, {
                "minvalue": "-25",
                "maxvalue": "-5",
                "label": "All well ahoy!",
                "code": "#00ff00"
            }]
        },
        "value": "-5"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var chartRef = evtObj.sender;
            chartRef.chartInterval = setInterval(function() {
                var num = (Math.floor(Math.random() * 55) * -1) - 5;
                chartRef.feedData("&value=" + num);
            }, 10000);
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
                                                                                                                                                                                                                                                                                                                                                                       charts-resources/usage-guide/basic/standard-charts-real-time-charts-example-10.js                   000644  000766  000024  00000006150 13252203573 032122  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000                                                                                                                                                                         {
    type: 'realtimecolumn',
    renderAt: 'chart-container',
    width: '600',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart - Bakersfield Central",
            "subCaption": "Online Purchase",
            "showrealtimevalue": "1",
            "borderAlpha": "0",
            "yaxismaxvalue": "10",
            "numdisplaysets": "10",
            "usePlotGradientColor": "0",
            "canvasBorderAlpha": "20",
            "labeldisplay": "rotate",
            "slantLabels": "1",
            "showLegend": "0",
            "plotBorderAlpha": "0",
            "bgAlpha": "0",
            "showValues": "0",
            "numbersuffix": " Transactions",
            "showlabels": "1",
            "animation": "0",
            "showRealTimeValue": "0"
        },
        "categories": [{
            "category": [{
                "label": "8 mins ago"
            }, {
                "label": "7 mins ago"
            }, {
                "label": "6 mins ago"
            }, {
                "label": "5 mins ago"
            }, {
                "label": "4 mins ago"
            }, {
                "label": "3 mins ago"
            }, {
                "label": "2 mins ago"
            }, {
                "label": "1 min ago"
            }]
        }],
        "dataset": [{
            "seriesname": "",
            "alpha": "100",
            "data": [{
                "value": "5"
            }, {
                "value": "7"
            }, {
                "value": "1"
            }, {
                "value": "5"
            }, {
                "value": "5"
            }, {
                "value": "2"
            }, {
                "value": "4"
            }, {
                "value": "3"
            }]
        }]
    },
    events: {
        "beforeRender": function(evt, args) {
            var chartRef = evt.sender,
                //Format minutes, seconds by adding 0 prefix accordingly
                formatTime = function(time) {
                    (time < 10) ? (time = "0" + time) : (time = time);
                    return time;
                },
                updateData = function() {
                    //We need to create a querystring format incremental update, containing
                    //label in hh:mm:ss format
                    //and a value (random).
                    var currDate = new Date(),
                        label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds()),
                        //Get random number between 1 & 4 - rounded
                        transactions = Math.round(Math.random() * 4) + 1,
                        strData = "&label=" + label + "&value=" + transactions;

                    //Feed it to chart.
                    chartRef.feedData(strData);
                };
                chartRef.intervalUpdate = setInterval(function() {
                    updateData();
                }, 5000);
        },
        "disposed": function(evt, args) {
            clearInterval(evt.sender.intervalUpdate);
        }

    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                        charts-resources/usage-guide/basic/standard-charts-real-time-charts-example-4.js                    000644  000766  000024  00000006362 13252207261 032050  0                                                                                                    ustar 00suvradipsaha                    staff                           000000  000000                                                                                                                                                                         {
    type: 'realtimecolumn',
    renderAt: 'chart-container',
    width: '600',
    height: '250',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Online Transactions per 10 seconds",
            "subCaption": "HarrysSupermart.com",
            "showrealtimevalue": "1",
            "yaxismaxvalue": "10",
            "numdisplaysets": "10",

            "labeldisplay": "rotate",
            "slantLabels": "1",
            "showLegend": "0",
            "showValues": "0",
            "numbersuffix": " Transactions",
            "showlabels": "1",
            "showRealTimeValue": "0",

            //Cosmetics
            "paletteColors": "#0075c2,#1aaf5d",
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "showBorder": "0",
            "bgColor": "#ffffff",
            "showShadow": "0",
            "canvasBgColor": "#ffffff",
            "canvasBorderAlpha": "0",
            "divlineAlpha": "100",
            "divlineColor": "#999999",
            "divlineThickness": "1",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
            "usePlotGradientColor": "0",
            "showplotborder": "0",
            "valueFontColor": "#ffffff",
            "placeValuesInside": "1",
            "rotateValues": "1",
            "showXAxisLine": "1",
            "xAxisLineThickness": "1",
            "xAxisLineColor": "#999999",
            "showAlternateHGridColor": "0",
            "legendBgAlpha": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "legendItemFontSize": "10",
            "legendItemFontColor": "#666666"
        },
        "categories": [{
            "category": [{
                "label": "Start"
            }]
        }],
        "dataset": [{
            "seriesname": "",
            "alpha": "100",
            "data": [{
                "value": "3"
            }]
        }]
    },
    "events": {
        "initialized": function(evt, arg) {
			var chartRef = evt.sender;
            //Format minutes, seconds by adding 0 prefix accordingly
            function formatTime(time) {
                (time < 10) ? (time = "0" + time) : (time = time);
                return time;
            }
            //Update Data method
            function updateData() {
                    //We need to create a querystring format incremental update, containing
                    //label in hh:mm:ss format
                    //and a value (random).
                    currDate = new Date(),
                    label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds()),
                    //Get random number between 1 & 5 - rounded
                    transactions = Math.round(Math.random() * 4) + 1,
                    strData = "&label=" + label + "&value=" + transactions;
                //Feed it to chart.
                chartRef.feedData(strData);
            }
            //Interval
            var myVar = setInterval(function() {
                updateData();

            }, 10000);
        }
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              