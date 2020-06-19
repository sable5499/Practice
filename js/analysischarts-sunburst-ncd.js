var data = [

{
    id: 'ccan',
    color:'#237f58',
    parent: '',
    name: 'NCDA'
},


/**** CCAN 2025 Starts ******/

{
    id: 'ccansg1',
    color:'#237f58',
    parent: 'ccan',
    name: 'Amplify Views and Voices of PLWNCDs'
},
{
    id: 'ccansg2',
    color:'#237f58',
    parent: 'ccan',
    name: 'Country Action to involve PLWNCDs'
},
{
    id: 'ccansg3',
    color:'#237f58',
    parent: 'ccan',
    name: 'Pan-Africa Our Views Our Voices Regional Summit'
},
{
    id: 'ccansg1t1',
    parent: 'ccansg1',
    name: 'Global Week for Action on NCDs and grant awards to alliances',
    value: 92
},
{
    id: 'ccansg1t1sp1',
    parent: 'ccansg1t1',
    name: 'Event date, 7-13 September 2020, Global',
    value: 92
},
{
    id: 'ccansg1t1sp2',
    parent: 'ccansg1t1',
    name: 'Planning  ongoing',
    value: 92
},
{
    id: 'ccansg1t2',
    parent: 'ccansg1',
    name: 'Our Views Our Voices global knowledge exchange platform',
    value: 92
},
{
    id: 'ccansg1t2sp1',
    parent: 'ccansg1t2',
    name: 'Platform development',
    value: 92
},
{
    id: 'ccansg1t2sp2',
    parent: 'ccansg1t2',
    name: 'Platform development planning',
    value: 92
},
{
    id: 'ccansg1t2sp3',
    parent: 'ccansg1t2',
    name: 'Global side events/leveraging advocacy opportunities (e.g, UNGA)',
    value: 92
},
{
    id: 'ccansg1t2sp4',
    parent: 'ccansg1t2',
    name: 'People living with NCDs attendance at key advocacy milestones',
    value: 92
},
{
    id: 'ccansg1t2sp5',
    parent: 'ccansg1t2',
    name: 'Our Views Our Voices event at the Global NCD Alliance Forum (9-11 Feb)',
    value: 92
},
{
    id: 'ccansg2t1',
    parent: 'ccansg2',
    name: 'NCDs & UHC Advocacy Institute Accelerator Training Programme',
    value: 92
},
{
    id: 'ccansg2t1sp1',
    parent: 'ccansg2t1',
    name: 'July 2020 (margins of the HLPF, NY)',
    value: 92
},
{
    id: 'ccansg2t2',
    parent: 'ccansg2',
    name: 'Seed grant and technical assistance to Ghana NCDA',
    value: 92
},
{
    id: 'ccansg2t2sp1',
    parent: 'ccansg2t2',
    name: 'Community mobilisation forums & Our Views Our Voices training + 2020 grants to be awarded',
    value: 92
},
{
    id: 'ccansg2t2sp2',
    parent: 'ccansg2t2',
    name: '2019  partnership grants ongoing',
    value: 92
},
{
    id: 'ccansg2t3',
    parent: 'ccansg2',
    name: 'Seed grant and technical assistance to Healthy India Alliance',
    value: 92
},
{
    id: 'ccansg2t3sp1',
    parent: 'ccansg2t3',
    name: '2020 grants to be awarded',
    value: 92
},
{
    id: 'ccansg2t3sp2',
    parent: 'ccansg2t3',
    name: 'Induction',
    value: 92
},
{
    id: 'ccansg2t4',
    parent: 'ccansg2',
    name: 'Seed grant and technical assistance to Malaysia NCDA',
    value: 92
},
{
    id: 'ccansg2t4sp1',
    parent: 'ccansg2t4',
    name: '2020 grants to be awarded',
    value: 92
},
{
    id: 'ccansg2t4sp2',
    parent: 'ccansg2t4',
    name: 'Induction',
    value: 92
},
{
    id: 'ccansg2t5',
    parent: 'ccansg2',
    name: 'Seed grant and technical assistance to NCDA Kenya',
    value: 92
},
{
    id: 'ccansg2t5sp1',
    parent: 'ccansg2t5',
    name: 'NCDAK Advocacy priorities launch; non-health stakeholder engagement; NCD Symposium (Q2/3 TBC) + 2020 grants to be awarded',
    value: 92
},
{
    id: 'ccansg2t5sp2',
    parent: 'ccansg2t5',
    name: '2019 Partnership grants ongoing',
    value: 92
},
{
    id: 'ccansg2t6',
    parent: 'ccansg2',
    name: 'Seed grant and technical assistance to Vietnam NCDA',
    value: 92
},
{
    id: 'ccansg2t6sp1',
    parent: 'ccansg2t6',
    name: '2020 grants to be awarded',
    value: 92
},
{
    id: 'ccansg2t6sp2',
    parent: 'ccansg2t6',
    name: '2019 Partnership grants ongoing',
    value: 92
},

{
    id: 'ccansg3t1',
    parent: 'ccansg3',
    name: 'Our Views Our Voices Regional Summit Report',
    value: 92
},
{
    id: 'ccansg3t2',
    parent: 'ccansg3',
    name: '3-7 November 2020, Lomé, Togo',
    value: 92
},
{
    id: 'ccansg3t3',
    parent: 'ccansg3',
    name: 'Prog/ Logistics',
    value: 92
},
{
    id: 'ccansg3t4',
    parent: 'ccansg3',
    name: 'Planning/ outreach',
    value: 92
},
{
    id: 'ccansg3t5',
    parent: 'ccansg3',
    name: 'Planning ongoing',
    value: 92
},
{
    id: 'ccansg3t6',
    parent: 'ccansg3',
    name: 'High-level media strategy for regional summit (3-7 November, Lomé, Togo)',
    value: 92
},
{
    id: 'ccansg3t7',
    parent: 'ccansg3',
    name: 'Our Views Our Voices Regional Consultation with PLWNCDs (Africa)',
    value: 92
}


];

// Splice in transparent for the center circle
Highcharts.getOptions().colors.splice(0, 0, 'transparent');


Highcharts.chart('ncdsunburst', {

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