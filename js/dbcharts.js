Highcharts.chart('taskcontainer', {
    title: {
        text: ''
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    xAxis: {
        labels: {
            rotation: 270,
            useHTML: true,
                formatter: function() {
                    return '<span class="hc-label">' + this.value + '</span>';
                }
        },
        categories: ['Ghana', 'Kenya', 'Vietnam', 'Global', 'Others']
    },
    plotOptions: {
        series: {
            lineWidth: 0,
             states: {
                hover: {
                    enabled: false
                }
            }
        }
    },
    yAxis:{
    min:1,
    max:30,
    title: {
        text: ''
    },
    tickInterval: 1
    },
    labels: {
        items: []
    },
    series: [{
        type: 'bar',
        name: 'Jane',
        color:'#A5247A',
        data: [28, 2, 1, null, 26]
    }, {
        type: 'bar',
        name: 'John',
        color:'#D2342A',
        data: [12, 22, 17, null, null]
    }, {
        type: 'bar',
        name: 'Joe',
        color:'#25A0C3',
        data: [26, 3, 24, null, null]
    }, {
        type: 'spline',
        name: '',
        data: [28, 24, 20, null, null],
        marker: {
            lineWidth: 2,
            symbol: 'diamond',
            lineColor: '#237F58',
            fillColor: '#237F58'
        }
    }]
});


Highcharts.chart('aatimelinecontainer', {
    title: {
        text: ''
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    xAxis: {
        labels: {
            rotation: 270,
            useHTML: true,
                formatter: function() {
                    return '<span class="hc-label">' + this.value + '</span>';
                }
        },
        categories: ['Ghana', 'Kenya', 'Vietnam']
    },
    plotOptions: {
        series: {
            lineWidth: 0,
             states: {
                hover: {
                    enabled: false
                }
            }
        }
    },
    yAxis:{
   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    title: {
        text: ''
    },
   
    },
    labels: {
        items: []
    },
    series: [{
        type: 'bar',
        name: 'Jane',
        color:'#F26333',
        data: [7, null, null]
    }, {
        type: 'bar',
        name: 'John',
        color:'#F26333',
        data: [null, 1,null]
    }, {
        type: 'bar',
        name: 'Joe',
        color:'#25A0C3',
        data: [null, null,null]
    }, {
        type: 'spline',
        name: '',
        data: [8, 2, 4],
        marker: {
            lineWidth: 2,
            symbol: 'diamond',
            lineColor: '#F26333',
            fillColor: '#F26333'
        },

    },
    {
        type: 'spline',
        name: '',
        data: [10, 3, 2],
        marker: {
            lineWidth: 2,
            symbol: 'square',
            lineColor: '#F26333',
            fillColor: '#F26333'
        },

    },
    ]
});




