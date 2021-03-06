{
    type: 'boxandwhisker2d',
    renderAt: 'chart-container',
    width: '700',
    height: '450',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Distribution of annual salaries",
            "subcaption": "By Gender",
            "xAxisName": "Pay Grades",
            "YAxisName": "Salaries (In USD)",
            "numberPrefix": "$",
            "theme": "fusion",
            "showMean": "1",
            "meanIconRadius": "5",
            "meanIconSides": "3",
            //"meanIconShape": "triangle",
            "meanIconColor": "ff0000",
            "meanIconAlpha": "70"
        },
        "categories": [{
            "category": [{
                "label": "Grade 1"
            }, {
                "label": "Grade 2"
            }, {
                "label": "Grade 3"
            }]
        }],
        "dataset": [{
            "seriesname": "Male",
            "lowerboxcolor": "#008ee4",
            "upperboxcolor": "#6baa01",
            "data": [{
                "value": "2400,2000,2500,2800,3500,4000, 3700, 3750, 3880, 5000,5500,7500,8000,8200, 8400, 8500, 8550, 8800, 8700, 9000, 14000"
            }, {
                "value": "7500,9000,12000,13000,14000,16500,17000, 18000, 19000, 19500"
            }, {
                "value": "15000,19000,25000,32000,50000,65000"
            }]
        }, {
            "seriesname": "Female",
            "lowerboxcolor": "#e44a00",
            "upperboxcolor": "#f8bd19",
            "data": [{
                "value": "1900,2100,2300,2350,2400,2550,3000,3500,4000, 6000, 6500, 9000"
            }, {
                "value": "7000,8000,8300,8700,9500,11000,15000, 17000, 21000"
            }, {
                "value": "24000,32000,35000,37000,39000, 58000"
            }]
        }]
    }
}