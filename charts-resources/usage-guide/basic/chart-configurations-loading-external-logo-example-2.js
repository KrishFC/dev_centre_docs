{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Monthly Revenue",
            "subCaption": "Last year",
            "xAxisName": "Month",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            //External image url path for logo
            "logoURL": "https://static.fusioncharts.com/sampledata/images/Logo-HM-72x72.png",
            //Changing logo alpha
            "logoAlpha": "40",
            //Scaling logo image
            "logoScale": "80",
            //Setting logo position
            "logoPosition": "TR"
        },

        "data": [{
            "label": "Jan",
            "value": "420000"
        }, {
            "label": "Feb",
            "value": "810000"
        }, {
            "label": "Mar",
            "value": "720000"
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000"
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
            "label": "Oct",
            "value": "490000"
        }, {
            "label": "Nov",
            "value": "900000"
        }, {
            "label": "Dec",
            "value": "730000"
        }]
    }
}
