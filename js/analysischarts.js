
Highcharts.setOptions({
    lang: {
        drillUpText: '<< Back'
    }
});
// Create the chart

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
    series: [
    // {
    //     name: 'AA Committee teams',
    //     color:'#F26333',
    //     data: [null,null,null]
    // }, 
    {
        name: 'WHF',
        color:'#D2342A',
        data: [29,8,27]
    },
    {
        name: 'PATH',
        color:'#A5247A',
        data: [53,54,47]
    },
    {
        name: 'C/CAN',
        color:'#005B9A',
        data: [23,31,30]
    },
    {
        name: 'NCD Alliance',
        color:'#237F58',
        data: [25,25,25]
    },
    {
        name: 'World Bank',
        color:'#25a0c3',
        data: [null,null,null]
    }]
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
            rotation: -45,
             style: {
        fontSize: '12px'
      }
            
        },

        // categories: ['2019 Q1', '2019<br/> Q2', '2019<br/> Q3', '2019<br/> Q4', '2020<br/> Q1', '2020<br/> Q2', '2020<br/> Q3', '2020<br/> Q4','2021<br/> Q1']

        categories: ['2019 Q1', '2019 Q2', '2019 Q3', '2019 Q4', '2020 Q1', '2020 Q2', '2020 Q3', '2020 Q4','2021 Q1']
    },

    yAxis: { 
        labels: {
            rotation: 0,
              style: {
        fontSize: '15px'
      }
         
        },
        categories: ['Communications<br/> Team','Access Accelerated<br/> Measurement', 'BCR CEO<br/> Roundtable', 'Event','IFPMA','Multi-Company<br/> Collaboration','CCAN 2025','NCD Alliance', 'PATH','WHF',
        'World Bank','Research','Total'],
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
        symbolHeight: 457
    },

    tooltip: {
            enabled:false,
        formatter: function () {
            return '<b>Quarter: </b>' + getPointCategoryName(this.point, 'x') + '<br><b>No. of active projects: </b> ' +
                this.point.value + '<br><b>Group: </b>' + getPointCategoryName(this.point, 'y') + '';
        }
    },

    series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        borderColor:'#fff',
        data: [
{x: 0, y: 0, value: 0, color: '#C0EAA6'},
{x: 0, y: 1, value: 0, color: '#C0EAA6'}, 
{x: 0, y: 2, value: 0, color: '#C0EAA6'}, 
{x: 0, y: 3, value: 0, color: '#C0EAA6'}, 
{x: 0, y: 4, value: 0, color: '#C0EAA6'},
{x: 0, y: 5, value: 0, color: '#C0EAA6'},
{x: 0, y: 6, value: 0, color: '#C0EAA6'},
{x: 0, y: 7, value: 0, color: '#C0EAA6'},
{x: 0, y: 8, value: 0, color: '#C0EAA6'},
{x: 0, y: 9, value: 0, color: '#C0EAA6'},
{x: 0, y: 10, value: 4, color: '#A8E380'},
{x: 0, y: 11, value: 0, color: '#C0EAA6'},
{x: 0, y: 12, value: 4, color: '#A8E380'},

{x: 1, y: 0, value: 0, color: '#C0EAA6'},
{x: 1, y: 1, value: 0, color: '#C0EAA6'}, 
{x: 1, y: 2, value: 0, color: '#C0EAA6'}, 
{x: 1, y: 3, value: 0, color: '#C0EAA6'}, 
{x: 1, y: 4, value: 0, color: '#C0EAA6'},
{x: 1, y: 5, value: 0, color: '#C0EAA6'},
{x: 1, y: 6, value: 0, color: '#C0EAA6'},
{x: 1, y: 7, value: 0, color: '#C0EAA6'},
{x: 1, y: 8, value: 0, color: '#C0EAA6'},
{x: 1, y: 9, value: 0, color: '#C0EAA6'},
{x: 1, y: 10, value: 6, color: '#A2DF83'},
{x: 1, y: 11, value: 0, color: '#C0EAA6'},
{x: 1, y: 12, value: 6, color: '#A2DF83'},

{x: 2, y: 0, value: 0, color: '#C0EAA6'},
{x: 2, y: 1, value: 0, color: '#C0EAA6'}, 
{x: 2, y: 2, value: 0, color: '#C0EAA6'}, 
{x: 2, y: 3, value: 0, color: '#C0EAA6'}, 
{x: 2, y: 4, value: 0, color: '#C0EAA6'},
{x: 2, y: 5, value: 0, color: '#C0EAA6'},
{x: 2, y: 6, value: 0, color: '#C0EAA6'},
{x: 2, y: 7, value: 0, color: '#C0EAA6'},
{x: 2, y: 8, value: 0, color: '#C0EAA6'},
{x: 2, y: 9, value: 0, color: '#C0EAA6'},
{x: 2, y: 10, value: 9, color: '#9CDD87'},
{x: 2, y: 11, value: 0, color: '#C0EAA6'},
{x: 2, y: 12, value: 9, color: '#9CDD87'},

{x: 3, y: 0, value: 2, color: '#BAE89D'},
{x: 3, y: 1, value: 0, color: '#C0EAA6'}, 
{x: 3, y: 2, value: 0, color: '#C0EAA6'}, 
{x: 3, y: 3, value: 0, color: '#C0EAA6'}, 
{x: 3, y: 4, value: 0, color: '#C0EAA6'},
{x: 3, y: 5, value: 0, color: '#C0EAA6'},
{x: 3, y: 6, value: 0, color: '#C0EAA6'},
{x: 3, y: 7, value: 0, color: '#C0EAA6'},
{x: 3, y: 8, value: 0, color: '#C0EAA6'},
{x: 3, y: 9, value: 0, color: '#C0EAA6'},
{x: 3, y: 10, value: 7, color: '#AEE589'},
{x: 3, y: 11, value: 0, color: '#C0EAA6'},
{x: 3, y: 12, value: 9, color: '#A2DF83'},

{x: 4, y: 0, value: 33, color: '#942F85'},
{x: 4, y: 1, value: 5, color: '#B4E793'}, 
{x: 4, y: 2, value: 2, color: '#BAE89D'}, 
{x: 4, y: 3, value: 1, color: '#BAE89D'}, 
{x: 4, y: 4, value: 0, color: '#C0EAA6'},
{x: 4, y: 5, value: 7, color: '#AEE589'},
{x: 4, y: 6, value: 15, color: '#37A6C4'},
{x: 4, y: 7, value: 8, color: '#AAE483'},
{x: 4, y: 8, value: 13, color: '#4CB2B7'},
{x: 4, y: 9, value: 20, color: '#46AEBB'},
{x: 4, y: 10, value: 4, color: '#A8E380'},
{x: 4, y: 11, value: 2, color: '#BAE89D'},
{x: 4, y: 12, value: 110, color: '#A5247A'},

{x: 5, y: 0, value: 22, color: '#2573CE'},
{x: 5, y: 1, value: 4, color: '#E8F8DE'}, 
{x: 5, y: 2, value: 7, color: '#AEE589'}, 
{x: 5, y: 3, value: 2, color: '#BAE89D'}, 
{x: 5, y: 4, value: 1, color: '#BAE89D'},
{x: 5, y: 5, value: 2, color: '#BAE89D'},
{x: 5, y: 6, value: 21, color: '#1F76D1'},
{x: 5, y: 7, value: 12, color: '#77C99D'},
{x: 5, y: 8, value: 13, color: '#4CB2B7'},
{x: 5, y: 9, value: 21, color: '#1F76D1'},
{x: 5, y: 10, value: 3, color: '#B9E89B'},
{x: 5, y: 11, value: 2, color: '#BAE89D'},
{x: 5, y: 12, value: 110, color: '#A5247A'},

{x: 6, y: 0, value: 12, color: '#77C99D'},
{x: 6, y: 1, value: 1, color: '#BAE89D'}, 
{x: 6, y: 2, value: 0, color: '#C0EAA6'},
{x: 6, y: 3, value: 2, color: '#BAE89D'}, 
{x: 6, y: 4, value: 0, color: '#C0EAA6'},
{x: 6, y: 5, value: 0, color: '#C0EAA6'},
{x: 6, y: 6, value: 13, color: '#4CB2B7'},
{x: 6, y: 7, value: 8, color: '#AAE483'},
{x: 6, y: 8, value: 15, color: '#37A6C4'},
{x: 6, y: 9, value: 13, color: '#4CB2B7'},
{x: 6, y: 10, value: 2, color: '#BAE89D'},
{x: 6, y: 11, value: 3, color: '#B9E89B'},
{x: 6, y: 12, value: 69, color: '#A5247A'},

{x: 7, y: 0, value: 8, color: '#AAE483'},
{x: 7, y: 1, value: 0, color: '#C0EAA6'}, 
{x: 7, y: 2, value: 0, color: '#C0EAA6'},
{x: 7, y: 3, value: 0, color: '#C0EAA6'}, 
{x: 7, y: 4, value: 1, color: '#BAE89D'},
{x: 7, y: 5, value: 0, color: '#C0EAA6'},
{x: 7, y: 6, value: 9, color: '#9CDD87'},
{x: 7, y: 7, value: 4, color: '#A8E380'},
{x: 7, y: 8, value: 13, color: '#4CB2B7'},
{x: 7, y: 9, value: 10, color: '#B5E795'},
{x: 7, y: 10, value: 2, color: '#BAE89D'},
{x: 7, y: 11, value: 2, color: '#BAE89D'},
{x: 7, y: 12, value: 49, color: '#A5247A'},

{x: 8, y: 0, value: 0, color: '#C0EAA6'},
{x: 8, y: 1, value: 0, color: '#C0EAA6'}, 
{x: 8, y: 2, value: 0, color: '#C0EAA6'},
{x: 8, y: 3, value: 0, color: '#C0EAA6'}, 
{x: 8, y: 4, value: 0, color: '#C0EAA6'},
{x: 8, y: 5, value: 0, color: '#C0EAA6'},
{x: 8, y: 6, value: 0, color: '#C0EAA6'},
{x: 8, y: 7, value: 0, color: '#C0EAA6'},
{x: 8, y: 8, value: 0, color: '#C0EAA6'},
{x: 8, y: 9, value: 0, color: '#C0EAA6'},
{x: 8, y: 10, value: 1, color: '#BAE89D'},
{x: 8, y: 11, value: 0, color: '#C0EAA6'},
{x: 8, y: 12, value: 1, color: '#BAE89D'}

        ],
        dataLabels: {
            enabled: false,
            color: '#000000'
        }
    }],

  

});
// var data = [{
//     name: 'Done',
//     y: 76.1,
//     color: "#ff6666",
//     dataLabels: {
//         enabled: false
//     }
// },
// {
//     name: 'To do',
//     y: 23.9,
//     color: "#dddddd",
//     dataLabels: {
//         enabled: false
//     }
// }
// ];

var data = [{
    name: 'New Tasks',
    y: 64.32,
    z: 211,
    color: "#FAA73F",
    dataLabels: {
        enabled: false
    }
},
{
    name: 'Total Tasks',
    y: 35.68,
    z: 328,
    color: "#dddddd",
    dataLabels: {
        enabled: false
    }
}
];

Highcharts.chart('progressbar1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
    },
    credits:{
        enabled:false
    
    },
    title: {
        text: '64.3%',
        align: 'center',
        verticalAlign: 'middle',
        y: 40,
        style: {
            fontFamily:'BrandonGrotesqueWeb-Medium',
            color: '#FAA73F'
        }
    },
    tooltip: {
        enabled:true,
        pointFormat: '<span style="font-size:10px;"><b>{point.z}</b></span>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '125%'
        }
    },
    series: [{
        type: 'pie',
        name: '',
        innerSize: '70%',
        data: data
    }],
    exporting: {
        enabled: false
      }
});



var data2 = [{
    name: 'Ongoing Tasks',
    y: 17.37,
    z: 57,
    color: "#25a0c3",
    dataLabels: {
        enabled: false
    }
},
{
    name: 'Total Tasks',
    y: 82.63,
    z: 328,
    color: "#dddddd",
    dataLabels: {
        enabled: false
    }
}
];

Highcharts.chart('progressbar2', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    credits:{
        enabled:false
    
    },
    title: {
        text: '17.4%',
        align: 'center',
        verticalAlign: 'middle',
        y: 40,
        style: {
            fontFamily:'BrandonGrotesqueWeb-Medium',
            color: '#25a0c3'
        }
    },
    tooltip: {
        enabled:true,
        pointFormat: '<span style="font-size:10px;"><b>{point.z}</b></span>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '125%'
        }
    },
    series: [{
        type: 'pie',
        name: '',
        innerSize: '70%',
        data: data2
    }],
    exporting: {
        enabled: false
      }
});



var data3 = [{
    name: 'Completed Tasks',
    y: 18.29,
    z: 60,
    color: "#237f58",
    dataLabels: {
        enabled: false
    }
},
{
    name: 'Total Tasks',
    y: 81.71,
    z: 328,
    color: "#dddddd",
    dataLabels: {
        enabled: false
    }
}
];

Highcharts.chart('progressbar3', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    credits:{
        enabled:false
    
    },
    title: {
        text: '18.3%',
        align: 'center',
        verticalAlign: 'middle',
        y: 40,
        style: {
            fontFamily:'BrandonGrotesqueWeb-Medium',
            color: '#237f58'
        }
    },
    tooltip: {
        enabled:true,
        pointFormat: '<span style="font-size:10px;"><b>{point.z}</b></span>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '125%'
        }
    },
    series: [{
        type: 'pie',
        name: '',
        innerSize: '70%',
        data: data3
    }],
    exporting: {
        enabled: false
      }
});



