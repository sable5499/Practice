Highcharts.chart('noprojectscontainer', {

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        min:0,
        max:10,
        tickInterval:5,
        title: {
            text: 'No. of Projects'
        }
    },

    xAxis: {
        
        categories: ['Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2020']
    },

    legend: {   
    },
    
    credits: {
      enabled:false 
    },
    
    exporting: {
      enabled:false 
    },
tooltip: {
      enabled:true 
    },
    plotOptions: {
    line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true
        },
        series: {
            label: {
            enabled: false,
                connectorAllowed: false
            },
            
        }
    },

    series: [{
        name: 'Completed',
        color: '#48CFAD',
        data: [
        {
            name: 'Oct 2019',
            color: '#48CFAD',
             dashStyle: 'ShortDashDot',
            y: 2
        }, {
            name: 'Nov 2019',
            color: '#48CFAD',
             dashStyle: 'ShortDashDot',
            y: 3
        },
        {
            name: 'Dec 2019',
            color: '#48CFAD',
             dashStyle: 'ShortDashDot',

            y: 4
        }
        ]
    }, {
        name: 'Ongoing',
        color:'#3BAFDA',
        data: [
        {
            name: 'Oct 2019',
            color: '#3BAFDA',
             dashStyle: 'ShortDashDot',
            y: 1
        }, {
            name: 'Nov 2019',
            color: '#3BAFDA',
             dashStyle: 'ShortDashDot',
            y: 1
        },
        {
            name: 'Dec 2019',
            color: '#3BAFDA',
             dashStyle: 'ShortDashDot',

            y: 2
        }
        ]
    }, {
        name: 'Upcoming',
        dashStyle: 'ShortDashDot',
        color:'#FFCE54',

        marker: {
                enabled: true,
                symbol: 'triangle'
            },
        data: [null,null,
        {
            name: 'Dec 2019',
            dashStyle: 'ShortDashDot',
            color: '#48CFAD',
            marker: {
                enabled: false
            },
            
            y: 4.1,
            
        }
        ,5,6]
    },
    {
        name: 'Upcoming',
        dashStyle: 'ShortDashDot',
        color:'#FFCE54',
        showInLegend:false,
        marker: {
                enabled: true,
                symbol: 'triangle'
            },
        data: [null,null,
        {
            name: 'Dec 2019',
            dashStyle: 'ShortDashDot',
            color: '#3BAFDA',
            marker: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            y: 2.1
        }
        ,3,4]
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});




Highcharts.chart('noactivitiescontainer', {

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        min:0,
        max:10,
        tickInterval:5,
        title: {
            text: 'No. of Activities'
        }
    },

    xAxis: {
        
        categories: ['Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2020']
    },

    legend: {   
    },
    
    credits: {
      enabled:false 
    },
    
    exporting: {
      enabled:false 
    },
tooltip: {
      enabled:true 
    },
    plotOptions: {
    line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true
        },
        series: {
            label: {
            enabled: false,
                connectorAllowed: false
            },
            
        }
    },

    series: [{
        name: 'Meetings',
        color:'#48CFAD',
        data: [4, 5, 7]
    }, {
        name: 'Workshops',
        color:'#3BAFDA',
        data: [2, 1, 3]
    },
    // }, {
    //     name: 'Upcoming',
    //     dashStyle: 'ShortDashDot',
    //     color:'#FFCE54',
    //     data: ['','' ,'' , 2, 3, 4]
    // }
    {
        name: 'Upcoming',
        dashStyle: 'ShortDashDot',
        color:'#FFCE54',
        marker: {
                enabled: true,
                symbol: 'triangle'
            },
        data: [null,null,
        {
            name: 'Dec 2019',
            dashStyle: 'ShortDashDot',
            color: '#48CFAD',
            marker: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            y: 7.1
        }
        ,9,10]
    },
    {
        name: 'Upcoming',
        dashStyle: 'ShortDashDot',
        color:'#FFCE54',
        showInLegend:false,
        marker: {
                enabled: true,
                symbol: 'triangle'
            },
        data: [null,null,
        {
            name: 'Dec 2019',
            dashStyle: 'ShortDashDot',
            color: '#3BAFDA',
            marker: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            y: 3.1
        }
        ,5,7]
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});



Highcharts.chart('partnerbyprojcontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: true
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Oct 2019',
            'Nov 2019',
            'Dec 2019',
            'Jan 2020',
            'Feb 2020',
            'Mar 2020'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'No. of Projects'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        backgroundColor:"#fff",
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'World Bank',
        data: [4,3,2,1,5,2]

    }, {
        name: 'GHS',
        data: [3,3,2,2,1,2]

    }, {
        name: 'ICC',
        data: [1,1,2,2,3,2]

    }, {
        name: 'MoH',
        data: [4,2,2,1,1,1]

    },
    {
        name: 'GDPM',
        data: [3,3,4,4,1,1]

    },
    {
        name: 'PHD',
        data: [1,1,1,1,1,1]

    },
    {
        name: 'Pan-African Society of Cardiology',
        visible: false,
        data: [1,1,1,1,1,1]

    },
    {
        name: 'WHF members',
        visible: false,
        data: [1,1,1,1,1,1]

    },
    {
        name: 'International Organisations',
        visible: false,
        data: [1,1,1,1,1,1]

    },
    {
        name: 'National civil society',
        visible: false,
        data: [2,2,3,3,1,1]

    },
    {
        name: 'Private sector',
        visible: false,
        data: [4,1,1,3,3,2]

    },
    {
        name: 'Kenya Cardiac Society',
        visible: false,
        data: [1,1,1,1,1,1]

    },
    {
        name: 'Heart Beat Vietnam',
        visible: false,
        data: [1,1,1,1,1,1]

    },
    {
        name: 'Colombia Society of Cardiology and Cardiovascular Surgery',
        visible: false,
        data: [1,1,1,1,1,1]

    },
    {
        name: 'Colombia Heart Foundation',
        visible: false,
        data: [1,1,1,1,1,1]

    },
    {
        name: 'Asia Pacific Heart Network',
        visible: false,
        data: [4,1,1,3,3,2]

    },
    {
        name: 'Asia Pacific Society of Cardiology',
        visible: false,
        data: [4,1,1,3,3,2]

    },
    {
        name: 'InterAmerican Society of Cardiology',
        visible: false,
        data: [1,1,1,1,1,1]

    }
    ] 
});




Highcharts.chart('projectbycountrycontainer', {
    chart: {
        type: 'packedbubble',
        height: '65%'
    },
    title: {
        text: ''
    },
     credits: {
        enabled: false
    },
     exporting: {
        enabled: false
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '100%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Europe',
        data: []
    }, 
    {
        name: 'Africa',
        data: [{
            name: "Kenya",
            value: 8
        },
        {
            name: "Ghana",
            value: 9
        },
        {
            name: "Ethiopia",
            value: 13
        },
        {
            name: "Uganda",
            value: 14
        },
        {
            name: "Rwanda",
            value: 11
        },
        {
            name: "Tanzania",
            value: 17
        },
        {
            name: "Nigeria",
            value: 24
        },
        {
            name: "Cameroon",
            value: 25
        },
        {
            name: "Sudan",
            value: 50
        },
        {
            name: "South Africa",
            value: 7
        },
        {
            name: "Senegal",
            value: 6
        },
        {
            name: "Namibia",
            value: 8
        },
        {
            name: "Tunisia",
            value: 9
        },
        {
            name: "Egypt",
            value: 9
        },
        {
            name: "Mozambique",
            value: 7
        }, {
            name: "Botswana",
            value: 21
        }, {
            name: "Zambia",
            value: 14
        },
        {
            name: "Mauritania",
            value: 4
        },
        {
            name: "Nairobi",
            value: 4
        },
        {
            name: "Kumasi",
            value: 14
        }]
    }, {
        name: 'Oceania',
        data: []
    }, {
        name: 'North America',
        data: [{
            name: "El Salvador",
            value: 7
        }
        ]
    }, {
        name: 'South America',
        data: [{
            name: "Paraguai",
            value: 2
        },
        {
            name: "Colombia",
            value: 8
        }
        ]
    }, {
        name: 'Asia',
        data: [{
            name: "Myanmar",
            value: 6
        },
        {
            name: "Yangon",
            value: 5
        },
        {
            name: "Kazakhstan",
            value: 4
        },
        {
            name: "Vietnam",
            value: 7
        },
        {
            name: "China",
            value: 9
        }
        ]
    }]
});




Highcharts.chart('projectbystrategiescontainer', {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020', 'Feb 2020','Mar 2020'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'No. of Projects',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' '
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Strategy 1',
        data: [10, 3, 6, 3, 2,6]
    }, {
        name: 'Strategy 2',
        data: [13, 15, 9, 8, 6,2]
    }, {
        name: 'Strategy 3',
        data: [4, 8, 3, 7, 3,5]
    }, {
        name: 'Strategy 4',
        data: [10, 8, 4, 7, 4,3]
    }]
});