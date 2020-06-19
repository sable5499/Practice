var data = [

{
    id: 'ccan',
    color:'#faa73f',
    parent: '',
    name: 'Research'
},


/**** CCAN 2025 Starts ******/

{
    id: 'ccansg1',
    color:'#faa73f',
    parent: 'ccan',
    name: 'Best Practices for in kind contributions in public health publication'
},


{
    id: 'ccansg1t1',
    parent: 'ccansg1',
    name: 'Evidence based papers',
    value: 92
},
{
    id: 'ccansg1t1sp1',
    parent: 'ccansg1t1',
    name: '6th paper to be delivered',
    value: 92
},
{
    id: 'ccansg1t1sp2',
    parent: 'ccansg1t1',
    name: '5th paper to be delivered',
    value: 92
},
{
    id: 'ccansg1t1sp3',
    parent: 'ccansg1t1',
    name: '4th paper to be delivered',
    value: 92
},
{
    id: 'ccansg1t1sp4',
    parent: 'ccansg1t1',
    name: 'Second and third papers: To be delivered',
    value: 92
},
{
    id: 'ccansg1t1sp5',
    parent: 'ccansg1t1',
    name: 'First Paper: To be delivered',
    value: 92
},


];

// Splice in transparent for the center circle
Highcharts.getOptions().colors.splice(0, 0, 'transparent');


Highcharts.chart('researchsunburst', {

    chart: {
        // height: '80%'
        // height: (9 / 16 * 100) + '%' // 16:9 ratio
        height:'450',
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
        // colors:['#F26333','#faa73f','#237F58','#A5247A','#D2342A','#25A0C3'],
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
        }, 
        {
            level: 4,
            colorVariation: {
                key: 'brightness',
                to: 0.5
            }
            },

            {
            level: 5,
            colorVariation: {
                key: 'brightness',
                to: 0.5
            }
        }]

    }],
    tooltip: {
        style: {
            backgroundColor: 'white',
            fontWeight: 'bold',
            fontSize:'15px'
        },
            enabled:true,
        headerFormat: "",
        // pointFormat: 'The population of <b>{point.name}</b> is <b>{point.value}</b>'
        pointFormat: '<b>{point.name}</b>'
    }
});






// function getPointCategoryName(point, dimension) {
//     var series = point.series,
//         isY = dimension === 'y',
//         axis = series[isY ? 'yAxis' : 'xAxis'];
//     return axis.categories[point[isY ? 'y' : 'x']];
// }