// Highcharts.chart('projbypartnercontainer', {
//     chart: {
//         type: 'bar',
//         style: {
//             fontFamily: 'BrandonGrotesqueWeb-Medium',
//             fontSize:'15px'
//         }
//     },
//     title: {
//         text: ''
//     },
//     credits: {
//         enabled:false
//     },
//     exporting: {
//         enabled:false
//     },
//     tooltip: {
//         enabled:false
//     },
//     subtitle: {
//         text: ''
//     },
//     xAxis: {
//         categories: ['Ad-hoc Advisory Group', 'Communications Team', 'BCR CEO Roundtable', 'Event', 'PATH','WHF'],
//         title: {
//             text: null
//         },
//         labels: {
//       style: {
//         fontSize: '15px'
//       }
//     }
//     },
//     yAxis: {
//         min: 0,

//         title: {
//             text: 'No. of tasks',

//             align: 'middle'
//         },
//         labels: {
//             overflow: 'justify',
//             style: {
//         fontSize: '15px'
//       }
//         }
//     },
   
//     plotOptions: {
//         bar: {
//             dataLabels: {
//                 enabled: false
//             }
//         }
//     },
//     legend: {
//       enabled: false  
//     },
//     credits: {
//         enabled: false
//     },
//     series: [{
//         name: 'Year 1800',
//         colorByPoint:true,
//         colors:['#F26333','#F26333','#F26333','#F26333','#A5247A','#D2342A'],
//         data: [3,9,44,10,45,22]
//     }]
// });
Highcharts.setOptions({
    lang: {
        drillUpText: '<< Back'
    }
});
// Create the chart
Highcharts.chart('projbypartnercontainer', {
    chart: {
        type: 'bar',
        style: {
            fontFamily: 'BrandonGrotesqueWeb-Medium',
            fontSize:'15px'
        }
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    credits:{
    enabled:false
    },
    exporting:{
    enabled:false
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category',
         labels: {
      style: {
        fontSize: '15px'
      }
    }
    },
     yAxis: {
        min: 0,

        title: {
            text: 'No. of tasks',

            align: 'middle'
        },
        labels: {
            overflow: 'justify',
            style: {
        fontSize: '15px'
      }
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: false,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        enabled:false,
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
    },

    series: [
        {
            name: "Projects by Group",
            colorByPoint: true,
            data: [
                {
                    name: "Ad-hoc Advisory Group",
                    y: 3,
                    color:'#F26333',
                    drilldown: null
                },
                {
                    name: "Communications Team",
                    y: 39,
                    color:'#F26333',
                    drilldown: "Communications Team"
                },
                {
                    name: "BCR CEO Roundtable",
                    y: 8,
                    color:'#F26333',
                    drilldown: null
                },
                {
                    name: "Event",
                    y: 7,
                    color:'#F26333',
                    drilldown: "Event"
                },
                {
                    name: "PATH",
                    y: 40,
                    color:'#A5247A',
                    drilldown: "PATH"
                },
                {
                    name: "WHF",
                    y: 21,
                    color:'#D2342A',
                    drilldown: null
                }
            ]
        }
    ],
    drilldown: {
        drillUpButton: {
            relativeTo: 'spacingBox',
            position: {
                y: 0,
                x: 0
            },
            theme: {
                fill: '#F26333',
                'stroke-width': 1,
                stroke: 'silver',
                r: 5,
                states: {
                    hover: {
                        fill: '#514d4c'
                    },
                    select: {
                        stroke: '#039',
                        fill: '#fff'
                    }
                }
            }

        },
        series: [
           
            {
                name: "Communications Team",
                id: "Communications Team",
                data: [
                    [
                        "2020 Communications Plan",
                        3
                    ],
                    [
                        "Key Event Support",
                        15
                    ],
                    [
                        "Member Company Communications",
                        11
                    ],
                    [
                        "Steering Committee Meetings",
                        10
                    ]
                ]
            },
            {
                name: "Event",
                id: "Event",
                data: [
                    [
                        "UNGA",
                        3
                    ],
                    [
                        "WHA",
                        4
                    ]
                    
                ]
            },
            {
                name: "PATH",
                id: "PATH",
                data: [
                    [
                        "Ghana",
                        16
                    ],
                    [
                        "Kenya",
                        15
                    ],
                    [
                        "Vietnam",
                        9
                    ]  
                ]
            }
        ]
    }
});

Highcharts.chart('projectsbystrategycontainer', {
    chart: {
        type: 'bar',
         style: {
            fontFamily: 'BrandonGrotesqueWeb-Medium',
            fontSize:'15px'
        }
    },
    title: {
        text: ''
    },
    credits:{
    enabled:false
    },
     tooltip: {
        enabled:false
    },
     exporting:{
    enabled:false
    },
    xAxis: {
        labels: {
      style: {
        fontSize: '15px'
      }
    },
        categories: ['Strategy 1', 'Strategy 2', 'Strategy 3']
    },
    yAxis: {
        min: 0,
         labels: {
      style: {
        fontSize: '15px'
      }
    },
       title: {
            text: 'No. of tasks',
            align: 'middle'
        },
        labels: {
            overflow: 'justify',
            style: {
        fontSize: '15px'
      }
        }
    },
    legend: {
        reversed: false,
         labels: {
      style: {
        fontSize: '15px'
      }
    }
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'AA Committee teams',
        color:'#F26333',
        data: [null,null,null]
    }, 
    {
        name: 'WHF',
        color:'#D2342A',
        data: [21,null,null]
    },
    {
        name: 'PATH',
        color:'#A5247A',
        data: [37,23,26]
    }]
});


var data = [{
    id: '0.0',
    color:'#D9D6CF',
    parent: '',
    name: 'PARTNER'
}, {
    id: '1.3',
    color:'#A5247A',
    parent: '0.0',
    name: 'PATH'
}, {
    id: 'w1.1',
    color:'#D2342A',
    parent: '0.0',
    name: 'WHF'
},
{
    id: '1.1',
    color:'#D2342A',
    parent: 'w1.1',
    name: 'Kenya'
},
/* Africa */
{
    id: '2.1',
    parent: '1.1',
    name: 'CVD Guideline dissemination'
},

{
    id: '3.1',
    parent: '2.1',
    name: 'Conduct end line survey for year 1',
    value: 92
}, {
    id: '3.2',
    parent: '2.1',
    name: 'Monitor uptake and utilization of digital tools and data collection tools',
    value: 92
}, {
    id: '3.3',
    parent: '2.1',
    name: 'Ongoing work with the community support groups',
    value: 92
}, {
    id: '3.4',
    parent: '2.1',
    name: 'Set up (patient) community support groups',
    value: 92
}, {
    id: '3.5',
    parent: '2.1',
    name: 'Conduct training & guideline dissemination in 20-30 facilities per county',
    value: 92
}, {
    id: '3.6',
    parent: '2.1',
    name: 'Show case best practices from county level at the KCS Annual Scientific Congress',
    value: 92
}, {
    id: '3.7',
    parent: '2.1',
    name: 'Distribute guidelines, Job AIDs and data collection tools',
    value: 92
}, {
    id: '3.8',
    parent: '2.1',
    name: 'Prepare & disseminate seminar reports',
    value: 92
}, {
    id: '3.9',
    parent: '2.1',
    name: 'Conduct 3 off-site dissemination sessions using the ECHO platform',
    value: 92
}, {
    id: '3.10',
    parent: '2.1',
    name: 'At county-level, conduct 2 on-site training seminars per county',
    value: 92
}, {
    id: '3.11',
    parent: '2.1',
    name: 'Conduct baseline',
    value: 92
}, {
    id: '3.12',
    parent: '2.1',
    name: 'Engage county and sub-country teams for the county-level trainings',
    value: 91
}, {
    id: '3.13',
    parent: '2.1',
    name: 'Conduct training & share training report',
    value: 91
}, {
    id: '3.14',
    parent: '2.1',
    name: 'Develop training content & digital support tools',
    value: 91
}, {
    id: '3.15',
    parent: '2.1',
    name: 'Identity Train the Trainers (ToT) workshop participants and facilitators',
    value: 91
}, {
    id: '3.16',
    parent: '2.1',
    name: 'Print CVD guidelines, Job AIDs, handbooks and MOH data collection tools',
    value: 91
}, {
    id: '3.17',
    parent: '2.1',
    name: 'Consultative discussions with HIV programme team on use of the ECHO training platform (remote learning platform)',
    value: 91
}, {
    id: '3.18',
    parent: '2.1',
    name: 'County engagement and needs assessment',
    value: 91
}, {
    id: '3.19',
    parent: '2.1',
    name: 'County selection & consultation with MoH at national and county level',
    value: 91
}, {
    id: '3.20',
    parent: '2.1',
    name: 'Renewal of MOU (WHF-KCS)',
    value: 91
},

/***********/



/* Asia */


{
    id: '2.11',
    parent: '1.3',
    name: 'KENYA'
},

{
    id: '3.117',
    parent: '2.11',
    name: 'Create enabling policy environments/Kenya',
    value: 362
},

{
    id: 'k1.1',
    parent: '3.117',
    name: 'PATH staff seconded to MoH; Routine TWG meetings for priority NCDs held quarterly',
    value: 91
},

{
    id: 'k1.2',
    parent: '3.117',
    name: 'NCD Navigator informs national and county TWG decisions',
    value: 91
},

{
    id: 'k1.3',
    parent: '3.117',
    name: 'One digital innovation grant awarded; NCD Strategy complete',
    value: 92
},

{
    id: 'k1.4',
    parent: '3.117',
    name: 'County dissemination of National NCD Strategy',
    value: 92
},

 {
    id: '3.118',
    parent: '2.11',
    name: 'Enable data driven decision-making/Kenya',
    value: 640
},
{
    id: 'k2.1',
    parent: '3.118',
    name: 'Data Quality',
    value: 366
},
{
    id: 'k2.1.1',
    parent: 'k2.1',
    name: 'Tools disseminated in all counties',
    value: 91
},
{
    id: 'k2.1.2',
    parent: 'k2.1',
    name: 'Training and mentoring of NCD Focal Persons',
    value: 91
},
{
    id: 'k2.1.3',
    parent: 'k2.1',
    name: 'Data review meetings established',
    value: 92
},
{
    id: 'k2.1.4',
    parent: 'k2.1',
    name: 'Data quality assurance process established',
    value: 92
},
{
    id: 'k2.2',
    parent: '3.118',
    name: 'NCD Navigator',
    value: 274
},
{
    id: 'k2.2.1',
    parent: 'k2.2',
    name: 'NCD Navigator adopted by National and County MoH',
    value: 91
},
{
    id: 'k2.2.2',
    parent: 'k2.2',
    name: 'NCD Navigator informs multi-company investments and grant submissions',
    value: 91
},
{
    id: 'k2.2.3',
    parent: 'k2.2',
    name: 'NCD Navigator informs New NCD Strategy and TWG workplans and company investments',
    value: 92
},

{
    id: '2.13',
    parent: '1.3',
    name: 'GHANA'
},

{
    id: '3.136',
    parent: '2.13',
    name: 'Create enabling policy environments /Ghana',
    value: 366
}, 
{
    id: '4.1',
    parent: '3.136',
    name: 'PATH staff seconded to MoH; Routine TWG established to report into Steering Committee',
    value: 91
},
{
    id: '4.2',
    parent: '3.136',
    name: 'Planning initiated for National NCD Conference; National dissemination of Ghana NCD Strategy',
    value: 91
},
{
    id: '4.3',
    parent: '3.136',
    name: 'National NCD webpage launched; Awareness campaigns activated',
    value: 92
},
{
    id: '4.4',
    parent: '3.136',
    name: 'NCD Navigator informs national NCD Steering Committee and technical working group decisions',
    value: 92
},

{
    id: '3.137',
    parent: '2.13',
    name: 'Enable data driven decision-making/Ghana',
    value: 762
},
{
    id: 'g1.1',
    parent: '3.137',
    name: 'Data Quality',
    value: 396
},
{
    id: 'g1.1.1',
    parent: 'g1.1',
    name: 'Service delivery data quality assessed',
    value: 91
},
{
    id: 'g1.1.2',
    parent: 'g1.1',
    name: 'DQA tools developed to support data collection',
    value: 91
},
{
    id: 'g1.1.3',
    parent: 'g1.1',
    name: 'Data review meetings established',
    value: 92
},
{
    id: 'g1.1.4',
    parent: 'g1.1',
    name: 'NCD e-tracker piloted',
    value: 122
},
{
    id: 'g1.2',
    parent: '3.137',
    name: 'NCD Navigator',
    value: 366
},
{
    id: 'g1.2.1',
    parent: 'g1.2',
    name: 'NCD Navigator adopted by GHS/MoH',
    value: 91
},
{
    id: 'g1.2.2',
    parent: 'g1.2',
    name: 'Data collection complete',
    value: 91
},
{
    id: 'g1.2.3',
    parent: 'g1.2',
    name: 'Results and recommendations for update disseminated data',
    value: 92
},
{
    id: 'g1.2.4',
    parent: 'g1.2',
    name: 'NCD Navigator informs multi-company investments and grant submissions',
    value: 92
},

{
    id: '2.12',
    parent: '1.3',
    name: 'VIETNAM'
},

{
    id: '3.125',
    parent: '2.12',
    name: 'Create enabling policy environments/Vietnam',
    value: 275
},
{
    id: 'v1.1',
    parent: '3.125',
    name: 'TWG meeting conducted to review NCD efforts and planning',
    value: 91
},
{
    id: 'v1.2',
    parent: '3.125',
    name: 'Policy/mechanisms on private sector engagement developed',
    value: 92
},
{
    id: 'v1.3',
    parent: '3.125',
    name: 'National standardised training packages available on the GDPM and Healthy Vietnam websites',
    value: 92
},
{
    id: '3.126',
    parent: '2.12',
    name: 'Enable data driven decision making/Vietnam',
    value: 366
},
{
    id: 'v2.1',
    parent: '3.126',
    name: 'Regulation for data sharing between curative and preventive medicines systems developed',
    value: 91
},
{
    id: 'v2.2',
    parent: '3.126',
    name: 'Regulation for data sharing between curative and preventive medicines systems finalized',
    value: 91
},
{
    id: 'v2.3',
    parent: '3.126',
    name: 'Regulation for data sharing between curative and preventive medicines systems disseminated',
    value: 92
},
{
    id: 'v2.4',
    parent: '3.126',
    name: 'Reporting indicators for the NCD HIS finalized',
    value: 92
}
/***********/
];

// Splice in transparent for the center circle
Highcharts.getOptions().colors.splice(0, 0, 'transparent');


Highcharts.chart('projbylocation', {

    chart: {
        // height: '80%'
        // height: (9 / 16 * 100) + '%' // 16:9 ratio
        height:'705',
        style: {
            fontFamily: 'BrandonGrotesqueWeb-Medium',
            fontSize:'15px'
        }
    },
    
    exporting:{
    enabled:false
    },
    
    credits:{
    enabled:false
    },

    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    series: [{
        type: "sunburst",
        // colorByPoint:true,
        // colors:['#F26333','#005B9A','#237F58','#A5247A','#D2342A','#25A0C3'],
        data: data,
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
            format: '{point.name}',
            filter: {
                property: 'innerArcLength',
                operator: '>',
                value: 16
            }
        },
        levels: [{
            level: 1,
            levelIsConstant: false,
            dataLabels: {
                filter: {
                    property: 'outerArcLength',
                    operator: '>',
                    value: 64
                }
            }
        }, {
            level: 2,
            colorByPoint: true
        },
        {
            level: 3,
            colorVariation: {
                key: 'brightness',
                to: -0.5
            }
        }, {
            level: 4,
            colorVariation: {
                key: 'brightness',
                to: 0.5
            }
        }]

    }],
    tooltip: {
            enabled:false,
        headerFormat: "",
        pointFormat: 'The population of <b>{point.name}</b> is <b>{point.value}</b>'
    }
});






function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

Highcharts.chart('projectheatmapcontainer', {

    chart: {
        type: 'heatmap',
        style: {
            fontFamily: 'BrandonGrotesqueWeb-Medium',
            fontSize: '15px'
        },
        marginTop: 10,
        marginBottom: 50,
        plotBorderWidth: 1
    },
    credits:{
  enabled:false
  },
  
  exporting:{
  enabled:false
  },


    title: {
        text: ''
    },

    xAxis: {
         labels: {
            rotation: 0,
             style: {
        fontSize: '15px'
      }
            
        },

        categories: ['2019 <br/>Q2', '2019<br/> Q3', '2019<br/> Q4', '2020<br/> Q1', '2020<br/> Q2', '2020<br/> Q3', '2020<br/> Q4']
    },

    yAxis: { 
        labels: {
            rotation: 0,
              style: {
        fontSize: '15px'
      }
         
        },
        categories: ['Ad-hoc<br/> Advisory Group', 'Communications<br/> Team', 'BCR CEO<br/> Roundtable', 'Event', 'PATH','WHF','Total'],
        title: null,
        reversed: true
    },

    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var ix = point.index + 1,
                    xName = getPointCategoryName(point, 'x'),
                    yName = getPointCategoryName(point, 'y'),
                    val = point.value;
                return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
            }
        }
    },
    
   

    colorAxis: {
        reversed: false,
        min: 0,
        max:35,
         labels: {
            rotation: 0,
              style: {
        fontSize: '15px'
      }
         
        },
        tickInterval: 5,
        stops: [
            [0, '#C0EAA6'],
            [0.25,'#A8E380'],
            [0.5, '#0089E5'],
            [1, '#A5247A']
        ],
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        title:{
        text:'No.of active<br/> projects'
        },
        margin: 0,

        verticalAlign: 'top',
        y: -20,
        symbolHeight: 312
    },

    tooltip: {
            enabled:false,
        formatter: function () {
            return '<b>' + getPointCategoryName(this.point, 'x') + '</b> sold <br><b>' +
                this.point.value + '</b> items on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
        }
    },

    series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        borderColor:'#fff',
        data: [
        {x: 0, y: 0, value: 4, color: '#E8F8DE'},
{x: 0, y: 1, value: 8, color: '#A2DF83'}, 
{x: 0, y: 2, value: 15, color: '#E8F8DE'}, 
{x: 0, y: 3, value: 30, color: '#E8F8DE'}, 
{x: 0, y: 4, value: 16, color: '#E8F8DE'},
{x: 0, y: 5, value: 26, color: '#E8F8DE'},
{x: 0, y: 6, value: 26, color: '#A2DF83'},

{x: 1, y: 0, value: 4, color: '#E8F8DE'},
{x: 1, y: 1, value: 8, color: '#A2DF83'}, 
{x: 1, y: 2, value: 15, color: '#E8F8DE'}, 
{x: 1, y: 3, value: 30, color: '#E8F8DE'}, 
{x: 1, y: 4, value: 16, color: '#E8F8DE'},
{x: 1, y: 5, value: 26, color: '#E8F8DE'},
{x: 1, y: 6, value: 26, color: '#8FD58E'},

{x: 2, y: 0, value: 4, color: '#E8F8DE'},
{x: 2, y: 1, value: 8, color: '#A2DF83'}, 
{x: 2, y: 2, value: 15, color: '#E8F8DE'}, 
{x: 2, y: 3, value: 30, color: '#E8F8DE'}, 
{x: 2, y: 4, value: 16, color: '#E8F8DE'},
{x: 2, y: 5, value: 26, color: '#E8F8DE'},
{x: 2, y: 6, value: 46, color: '#8FD58E'},

{x: 3, y: 0, value: 4, color: '#A2DF83'},
{x: 3, y: 1, value: 8, color: '#209AD1'}, 
{x: 3, y: 2, value: 15, color: '#E8F8DE'}, 
{x: 3, y: 3, value: 30, color: '#8FD58E'}, 
{x: 3, y: 4, value: 16, color: '#5dbaac'},
{x: 3, y: 5, value: 26, color: '#77c89d'},
{x: 3, y: 6, value: 26, color: '#107eda'},

{x: 4, y: 0, value: 4, color: '#A2DF83'},
{x: 4, y: 1, value: 8, color: '#4FB3B5'}, 
{x: 4, y: 2, value: 15, color: '#66C0A7'}, 
{x: 4, y: 3, value: 30, color: '#78C99C'}, 
{x: 4, y: 4, value: 16, color: '#5DBAAC'},
{x: 4, y: 5, value: 26, color: '#78C99C'},
{x: 4, y: 6, value: 26, color: '#992B81'},

{x: 5, y: 0, value: 4, color: '#E8F8DE'},
{x: 5, y: 1, value: 8, color: '#78C99C'}, 
{x: 5, y: 2, value: 15, color: '#E8F8DE'}, 
{x: 5, y: 3, value: 30, color: '#8FD58E'}, 
{x: 5, y: 4, value: 16, color: '#4FB3B5'},
{x: 5, y: 5, value: 26, color: '#6DC3A3'},
{x: 5, y: 6, value: 26, color: '#1E76D1'}, 

{x: 6, y: 0, value: 4, color: '#E8F8DE'},
{x: 6, y: 1, value: 8, color: '#78C99C'}, 
{x: 6, y: 2, value: 15, color: '#A2DF83'}, 
{x: 6, y: 3, value: 30, color: '#E8F8DE'}, 
{x: 6, y: 4, value: 16, color: '#66C0A7'},
{x: 6, y: 5, value: 26, color: '#78C99C'},
{x: 6, y: 6, value: 26, color: '#0B8FDD'}  
 
        ],
        dataLabels: {
            enabled: false,
            color: '#000000'
        }
    }],

  

});


Highcharts.chart('projbypartnercontainersecond', {
    chart: {
        type: 'bar',
        style: {
            fontFamily: 'BrandonGrotesqueWeb-Medium'
        }
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['External Advisory Group', 'M & R team', 'Steering Committee meetings'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of projects',
            align: 'middle'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions',
        enabled: false
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        enabled:false
    },
    exporting: {
        enabled:false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 1800',
        color:'#005B9A',
        data: [5, 19, 10]
    }]
});