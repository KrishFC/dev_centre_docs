{
    type: 'maps/usa',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart Distribution Network",
            "subcaption": "Average shipping volume (last quarter)",
            "captionFontSize": "14",
            "subCaptionFontSize": "14",
            "theme": "fusion",
            "showLabels": "1",
            "showMarkerLabels": "0",
            "connectorColor": "#90e501",
            "connectorThickness": "2",
            "formatNumber": "1",
            "connectorToolText": "<b>From</b>: $fromLabel <br> <b>To</b>: $toLabel <br> <b>Daily shipments (avg)</b>: $label Units"
        },
        "markers": {
            "shapes": [{
                    "id": "myCustomShape",
                    "type": "circle",
                    "fillcolor": "#f8bd19",
                    "showborder": "0",
            }],
            "items": [{
          "shapeid": "myCustomShape",
          "id": "WA",
          "x": "54.5",
          "y": "44.8",
          "label": "Washington",
          "radius": "1"
        }, {
          "shapeid": "myCustomShape",
          "id": "OR",
          "x": "58.3",
          "y": "101.7",
          "radius": "1",
          "label": "Oregon"
        }, {
          "shapeid": "myCustomShape",
          "id": "ID",
          "x": "132.8",
          "y": "110.7",
          "radius": "1",
          "label": "Idaho"
        }, {
          "shapeid": "myCustomShape",
          "id": "MT",
          "x": "188.8",
          "y": "45.1",
          "radius": "1",
          "label": "Montana"
        }, {
          "shapeid": "myCustomShape",
          "id": "WY",
          "x": "220",
          "y": "121",
          "radius": "1",
          "label": "Wyoming"
        }, {
          "shapeid": "myCustomShape",
          "id": "AZ",
          "x": "165",
          "y": "261",
          "radius": "1",
          "label": "Arizona"
        }, {
          "shapeid": "myCustomShape",
          "id": "UT",
          "x": "170",
          "y": "178",
          "radius": "1",
          "label": "Utah"
        }, {
          "shapeid": "myCustomShape",
          "id": "NV",
          "x": "101",
          "y": "193",
          "radius": "1",
          "label": "Nevada"
        }, {
          "shapeid": "myCustomShape",
          "id": "LA",
          "x": "406",
          "y": "300",
          "radius": "1",
          "label": "Louisiana"
        }, {
          "shapeid": "myCustomShape",
          "id": "OK",
          "x": "347",
          "y": "245",
          "radius": "1",
          "label": "Oklahoma"
        }, {
          "shapeid": "myCustomShape",
          "id": "NM",
          "x": "238",
          "y": "263",
          "radius": "1",
          "label": "New Mexico"
        }, {
          "shapeid": "myCustomShape",
          "id": "CO",
          "x": "246.72",
          "y": "179.01",
          "radius": "1",
          "label": "Colorado"
        }, {
          "shapeid": "myCustomShape",
          "id": "KS",
          "x": "335",
          "y": "195",
          "radius": "1",
          "label": "Kansas"
        }, {
          "shapeid": "myCustomShape",
          "id": "MO",
          "x": "408",
          "y": "197",
          "radius": "1",
          "label": "Missouri"
        }, {
          "shapeid": "myCustomShape",
          "id": "AR",
          "x": "413",
          "y": "253",
          "radius": "1",
          "label": "Arkansas"
        }, {
          "shapeid": "myCustomShape",
          "id": "MS",
          "x": "442",
          "y": "277",
          "radius": "1",
          "label": "Mississippi"
        }, {
          "shapeid": "myCustomShape",
          "id": "NE",
          "x": "318",
          "y": "146",
          "radius": "1",
          "label": "Nebraska"
        }, {
          "shapeid": "myCustomShape",
          "id": "SD",
          "x": "311",
          "y": "99",
          "radius": "1",
          "label": "South Dakota"
        }, {
          "shapeid": "myCustomShape",
          "id": "ND",
          "x": "310",
          "y": "42",
          "radius": "1",
          "label": "North Dakota"
        }, {
          "shapeid": "myCustomShape",
          "id": "MN",
          "x": "382",
          "y": "61",
          "radius": "1",
          "label": "Minnesota"
        }, {
          "shapeid": "myCustomShape",
          "id": "WI",
          "x": "439",
          "y": "91",
          "radius": "1",
          "label": "Wisconsin"
        }, {
          "shapeid": "myCustomShape",
          "id": "IA",
          "x": "396",
          "y": "139",
          "radius": "1",
          "label": "Iowa"
        }, {
          "shapeid": "myCustomShape",
          "id": "IL",
          "x": "445",
          "y": "174",
          "radius": "1",
          "label": "Illinois"
        }, {
          "shapeid": "myCustomShape",
          "id": "MI",
          "x": "502",
          "y": "114",
          "radius": "1",
          "label": "Michigan"
        }, {
          "shapeid": "myCustomShape",
          "id": "IN",
          "x": "483",
          "y": "174",
          "radius": "1",
          "label": "Indiana"
        }, {
          "shapeid": "myCustomShape",
          "id": "OH",
          "x": "530",
          "y": "168",
          "radius": "1",
          "label": "Ohio"
        }, {
          "shapeid": "myCustomShape",
          "id": "KY",
          "x": "501",
          "y": "210",
          "radius": "1",
          "label": "Kentucky"
        }, {
          "shapeid": "myCustomShape",
          "id": "WV",
          "x": "544",
          "y": "199",
          "radius": "1",
          "label": "West Virginia"
        }, {
          "shapeid": "myCustomShape",
          "id": "PA",
          "x": "593",
          "y": "155",
          "radius": "1",
          "label": "Pennsylvania"
        }, {
          "shapeid": "myCustomShape",
          "id": "VA",
          "x": "580",
          "y": "210",
          "radius": "1",
          "label": "Virginia"
        }, {
          "shapeid": "myCustomShape",
          "id": "NY",
          "x": "620",
          "y": "120",
          "radius": "1",
          "label": "New York"
        }, {
          "shapeid": "myCustomShape",
          "id": "VT",
          "x": "654",
          "y": "95",
          "radius": "1",
          "label": "Vermont"
        }, {
          "shapeid": "myCustomShape",
          "id": "ME",
          "x": "700",
          "y": "82",
          "radius": "1",
          "label": "Maine"
        }, {
          "shapeid": "myCustomShape",
          "id": "NH",
          "x": "666",
          "y": "114",
          "radius": "1",
          "label": "New Hampshire"
        }, {
          "shapeid": "myCustomShape",
          "id": "MA",
          "x": "655",
          "y": "132",
          "radius": "1",
          "label": "Massachusetts"
        }, {
          "shapeid": "myCustomShape",
          "id": "CT",
          "x": "654",
          "y": "146",
          "radius": "1",
          "label": "Connecticut"
        }, {
          "shapeid": "myCustomShape",
          "id": "TN",
          "x": "490",
          "y": "237",
          "radius": "1",
          "label": "Tennessee"
        }, {
          "shapeid": "myCustomShape",
          "id": "GA",
          "x": "522",
          "y": "283",
          "radius": "1",
          "label": "Georgia"
        }, {
          "shapeid": "myCustomShape",
          "id": "AL",
          "x": "489",
          "y": "279",
          "radius": "1",
          "label": "Alabama"
        }, {
          "shapeid": "myCustomShape",
          "id": "FL",
          "x": "539",
          "y": "350",
          "radius": "1",
          "label": "Florida"
        }, {
          "shapeid": "myCustomShape",
          "id": "TX",
          "x": "333",
          "y": "304",
          "label": "Texas",
          "radius": "10"
        }, {
          "shapeid": "myCustomShape",
          "id": "NC",
          "x": "576",
          "y": "240",
          "label": "North Carolina",
          "radius": "10"
        }, {
          "shapeid": "myCustomShape",
          "id": "CA",
          "x": "68",
          "y": "225",
          "label": "California",
          "radius": "10"
        }],
        "connectors": [{
            "from": "CA",
            "to": "WA",
            "label": "20,540"
          }, {
            "from": "CA",
            "to": "ID",
            "label": "17,400"
          }, {
            "from": "CA",
            "to": "MT",
            "label": "15,600"
          }, {
            "from": "CA",
            "to": "WY",
            "label": "18,400"
          }, {
            "from": "CA",
            "to": "NV",
            "label": "19,300"
          }, {
            "from": "CA",
            "to": "UT",
            "label": "16,500"
          }, {
            "from": "CA",
            "to": "AZ",
            "label": "18,400"
          }, {
            "from": "TX",
            "to": "NM",
            "label": "21,300"
          }, {
            "from": "TX",
            "to": "LA",
            "label": "15,440"
          }, {
            "from": "TX",
            "to": "OK",
            "label": "16,800"
          }, {
            "from": "TX",
            "to": "CO",
            "label": "17,200"
          }, {
            "from": "TX",
            "to": "KS",
            "label": "13,670"
          }, {
            "from": "TX",
            "to": "MO",
            "label": "12,560"
          }, {
            "from": "TX",
            "to": "AR",
            "label": "19,200"
          }, {
            "from": "TX",
            "to": "MS",
            "label": "18,760"
          }, {
            "from": "TX",
            "to": "NE",
            "label": "16870"
          }, {
            "from": "TX",
            "to": "SD",
            "label": "17300"
          }, {
            "from": "TX",
            "to": "ND",
            "label": "19,900"
          }, {
            "from": "TX",
            "to": "MN",
            "label": "16,100"
          }, {
            "from": "TX",
            "to": "WI",
            "label": "14,890"
          }, {
            "from": "TX",
            "to": "IA",
            "label": "15,600"
          }, {
            "from": "TX",
            "to": "IL",
            "label": "17,650"
          }, {
            "from": "NC",
            "to": "IN",
            "label": "14,700"
          }, {
            "from": "NC",
            "to": "MI",
            "label": "18,200"
          }, {
            "from": "NC",
            "to": "OH",
            "label": "16,540"
          }, {
            "from": "NC",
            "to": "KY",
            "label": "15,850"
          }, {
            "from": "NC",
            "to": "WV",
            "label": "16,430"
          }, {
            "from": "NC",
            "to": "PA",
            "label": "15,600"
          }, {
            "from": "NC",
            "to": "VT",
            "label": "18,400"
          }, {
            "from": "NC",
            "to": "NH",
            "label": "16,900"
          }, {
            "from": "NC",
            "to": "MA",
            "label": "16,590"
          }, {
            "from": "NC",
            "to": "CT",
            "label": "18,340"
          }, {
            "from": "NC",
            "to": "ME",
            "label": "14,680"
          }, {
            "from": "NC",
            "to": "NY",
            "label": "23,600"
          }, {
            "from": "NC",
            "to": "TN",
            "label": "19,800"
          }, {
            "from": "NC",
            "to": "AL",
            "label": "13,400"
          }, {
            "from": "NC",
            "to": "VA",
            "label": "17,260"
          }, {
            "from": "NC",
            "to": "GA",
            "label": "17,400"
          }, {
            "from": "NC",
            "to": "SC",
            "label": "16,230"
          }, {
            "from": "NC",
            "to": "FL",
            "label": "21,200"
          }]

        }
    }
}
