// Initialize the chart
var chart = Highcharts.mapChart('map', {



    title: {
        text: ''
    },

    legend: {
        // align: 'left',
        // layout: 'vertical',
        // floating: true
        itemStyle: {
            color: '#ffffff',
            fontWeight: 'normal',
            fontSize:'11px'
        }
    },

    credits:{
        enabled:false
    },

    exporting:{
        enabled:false
    },

    mapNavigation: {
        enabled: true,
           buttonOptions: {
               
                theme: {
                    fill: '#6e6969',
                    'stroke-width': 1,
                    stroke: '#aaaaaa',
                    r: 0,
                    states: {
                        hover: {
                            fill: '#6e6969'
                        },
                        select: {
                            stroke: '#aaaaaa',
                            fill: '#6e6969'
                        }
                    }
                },
                 verticalAlign: 'bottom',
                 
                 align: 'right',
                 


                
            }
    },

    // tooltip: {
    //     formatter: function () {
    //         return this.point.id + (
    //             this.point.lat ?
    //                 '<br>Lat: ' + this.point.lat + ' Lon: ' + this.point.lon : ''
    //         );
    //     }
    // },

    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>' +
            '<tr><th>Address:</th><td>{point.address}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        series: {
            marker: {
                fillColor: '#FFFFFF',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1]
            }
        }
    },

    series: [{
        // Use the gb-all map with no data as a basemap
        mapData: Highcharts.maps['custom/world'],
        name: 'Basemap',
        borderColor: '#707070',
        nullColor: '#6E6969',
        showInLegend: false
    }, {
        name: 'Separators',
        type: 'mapline',
        data: Highcharts.geojson(Highcharts.maps['custom/world'], 'mapline'),
        color: '#707070',
        showInLegend: false,
        enableMouseTracking: false
    }, 
    {
        // Specify cities using lat/lon
        type: 'mappoint',
        name: 'AA Members',
        dataLabels: {
            format: '{point.id}'
        },
        // Use id instead of name to allow for referencing points later using
        // chart.get
        data: [{
            id: 'TAKEDA',
        //      marker: {
        //      width:50,
        //      height:50,
        //     symbol: 'url(../img/aamembers/grey/TAKEDA.png)'
        // },
            address:'1-1, Nihonbashi-Honcho 2-chome, Chuo-ku, Tokyo 103-8668, Japan',
            lat: 35.676192,
            lon: 139.650311
        }, {
            id: 'SHIONOGI',
            address:'1-8, Doshomachi 3-chome, Chuo-ku, Osaka 541-0045, Japan',
            lat: 34.690469,
            lon: 135.511293,
            dataLabels: {
                align: 'bottom',
                x: -25,
                y:12,
                verticalAlign: 'middle'
            }
        }, {
            id: 'PFIZER',
            address:'235 East 42nd Street New York, NY 10017, United States',
            lat: 40.712775,
            lon: -74.005973
        }, {
            id: 'ASTELLAS',
            address:'2-5-1, Nihonbashi-Honcho, Chūō-ku, Tokyo 103-8411, Japan',
             lat: 35.687234,
            lon: 139.776274,
            dataLabels: {
                align: 'bottom',
                x: -20,
                verticalAlign: 'middle'
            }
        }, {
            id: 'NOVARTIS',
            address:'4057 Basel, Switzerland',
            lat: 47.559599,
            lon: 7.588576
        }, {
            id: 'BRISTOL-MYERS SQUIBB',
            address:'430 East 29th Street, New York, New York, United States',
            lat: 40.740191,
            lon: -73.974859
        }, {
            id: 'SANOFI',
            address:'54, rue La Boétie, 75008 Paris, France',
            lat: 48.873619,
            lon: 2.312913
        }, {
            id: 'CELGENE CORPORATION',
            address:'Summit, NJ, (Corporate Headquarters), 86 Morris Ave, Summit, NJ 07901, United States',
            lat: 40.709019,
            lon: -74.345269
        }, {
            id: 'MERCK',
            address:'Frankfurter Str. 250, 64293 Darmstadt, Germany',
            lat: 49.895468,
            lon: 8.653609,
            dataLabels: {
                align: 'left',
                x: 5,
                verticalAlign: 'middle'
            }
        },
        {
            id: 'ROCHE',
            address:'Grenzacherstrasse 124, 4058 Basel, Switzerland',
            lat: 47.557866,
            lon: 7.606225
        },
        {
            id: 'MSD',
            address:'Kenilworth, New Jersey, United States',
            lat: 40.676491,
            lon: -74.290703
        },
        {
            id: 'JOHNSON &JOHNSON',
            address:'New Brunswick, New Jersey, United States',
            lat: 40.486216,
            lon: -74.451819
        },
        {
            id: 'CHUGAI',
            address:'Chuo-ku, Tokyo, Japan',
            lat: 35.670639,
            lon: 139.771989
        },
        {
            id: 'Daiichi Sankyo',
            address:'Chuo-ku, Tokyo, Japan',
            lat: 35.670639,
            lon: 139.771989
        },
        {
            id: 'Eisai',
            address:'Bunkyo-ku, Tokyo, Japan',
            lat: 35.707869,
            lon: 139.752437
        },
        {
            id: 'Eli Lilly and Company',
            address:'Indianapolis, Indiana, United States of America',
            lat: 39.768403,
            lon: -86.158068
        },
        {
            id: 'Pfizer Foundation',
            address:'New York city, New York, United States',
            lat: 40.712775,
            lon: -74.005973
        },
        {
            id: 'BAYER',
            address:'Bayer AG 51368 Leverkusen, Germany',
            lat: 51.013602,
            lon: 6.982817
        },
        {
            id: 'ALMIRALL',
            address:'Ronda General Mitre, 151 08022 Barcelona – Spain',
            lat: 41.403405,
            lon: 2.138440
        },
        {
            id: 'CHIESI',
            address:'Via Palermo, 26 A (entrance Via G. Chiesi 1) 43122 Parma - Italy',
            lat: 44.809491,
            lon: 10.334499
        },
        {
            id: 'IPSEN',
            address:'Ipsen Pharma, 65 Quai Georges Gorse, 92100 Boulogne-Billancourt, France',
            lat: 48.826071,
            lon: 2.233375
        },
         {
            id: 'MENARINI GROUP',
            address:'A. Menarini Industrie Farmaceutiche Riunite Srl, Via Dei Sette Santi 1/3 50131 Firenze, Italia',
            lat: 43.780197,
            lon: 11.276093
        },
        {
            id: 'SERVIER',
            address:'200 Pier Four Boulevard, Boston, United States',
            lat: 42.352020,
            lon: -71.042830
        },
        {
            id: 'Sumitomo Dainippon Pharma',
            address:'Chuo-ku, Osaka, Japan',
            lat: 34.684257,
            lon: 135.511053
        }

        
        ]
    },
    {
        // Specify cities using lat/lon
        type: 'mappoint',
        name: 'Countries',
        tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
        dataLabels: {
            format: '{point.id}'
        },
        // Use id instead of name to allow for referencing points later using
        // chart.get
        data: [

        // Country Names Starts

        {
            id: 'Kenya',
            lat: -0.023559,
            lon: 37.906193
        },
         {
            id: 'Rwanda',
            lat: -1.940278,
            lon: 29.873888
        },
        {
            id: 'Tanzania',
            lat: -6.369028,
            lon: 34.888822
        },
        {
            id: 'Uganda',
            lat: 1.373333,
            lon: 32.290275
        },
        {
            id: 'Ukraine',
            lat: 44.874119,
            lon: 33.151245
        },
        {
            id: 'China',
            lat: 35.861660,
            lon: 104.195397
        },
        {
            id: 'Ethiopia',
            lat: 9.145000,
            lon: 40.489673
        },
        {
            id: 'India',
            lat: 20.593684,
            lon: 78.962880
        },
        {
            id: 'Albania',
            lat: 41.153332,
            lon: 20.168331
        },
        {
            id: 'Belarus',
            lat: 53.709807,
            lon: 27.953389
        },
        {
            id: 'Bosnia and Herzegovina',
            lat: 43.915886,
            lon: 17.679076
        },
        {
            id: 'Egypt',
            lat: 26.820553,
            lon: 30.802498
        },
        {
            id: 'Jordan',
            lat: 30.585164,
            lon: 36.238414
        },
        {
            id: 'Morocco',
            lat: 31.791702,
            lon: -7.092620
        },
        {
            id: 'Pakistan',
            lat: 30.375321,
            lon: 69.345116
        },
        {
            id: 'Paraguay',
            lat: -23.442503,
            lon: -58.443832
        },
        {
            id: 'Sudan',
            lat: 12.862807,
            lon: 30.217636
        },
        {
            id: 'Tunisia',
            lat: 33.886917,
            lon: 9.537499
        },
        {
            id: 'Brazil',
            lat: -14.235004,
            lon: -51.925280
        },
        {
            id: 'Lebanon',
            lat: 33.854721,
            lon: 35.862285
        },
        {
            id: 'Malaysia',
            lat: 4.210484,
            lon: 101.975766
        },
        {
            id: 'Philippines',
            lat: 12.879721,
            lon: 121.774017
        },
        {
            id: 'Thailand',
            lat: 15.870032,
            lon: 100.992541
        },
        {
            id: 'United Arab Emirates',
            lat: 23.424076,
            lon: 53.847818
        },
        {
            id: 'Ghana',
            lat: 7.946527,
            lon: -1.023194
        },
        {
            id: 'Kazakhstan',
            lat: 48.019573,
            lon: 66.923684
        },
        {
            id: 'Nepal',
            lat: 28.394857,
            lon: 84.124008
        },
        {
            id: 'Niger',
            lat: 17.607789,
            lon: 8.081666
        },
        {
            id: 'Senegal',
            lat: 14.497401,
            lon: -14.452362
        },
        {
            id: 'Seychelles',
            lat: -4.679574,
            lon: 55.491977
        },
        {
            id: 'Bolivia',
            lat: -16.290154,
            lon: -63.588653
        },
        {
            id: 'Colombia',
            lat: 4.570868,
            lon: -74.297333
        },
        {
            id: 'Mozambique',
            lat: -18.665695,
            lon: 35.529562
        },
        {
            id: 'Zimbabwe',
            lat: -19.015438,
            lon: 29.154857
        },
        {
            id: 'Nigeria',
            lat: 9.081999,
            lon: 8.675277
        },
        {
            id: 'Argentina',
            lat: -38.416097,
            lon: -63.616672
        },
        {
            id: 'Armenia',
            lat: 40.069099,
            lon: 45.038189
        },
        {
            id: 'Azerbaijan',
            lat: 40.143105,
            lon: 47.576927
        },
        {
            id: 'Bahamas',
            lat: 25.034280,
            lon: -77.396280
        },
        {
            id: 'Bangladesh',
            lat: 23.684994,
            lon: 90.356331
        },
        {
            id: 'Benin',
            lat: 9.307690,
            lon: 2.315834
        },
        {
            id: 'Bhutan',
            lat: 27.514162,
            lon: 90.433601
        },
        {
            id: 'Burkina Faso',
            lat: 12.238333,
            lon: -1.561593
        },
        {
            id: 'Cambodia',
            lat: 12.565679,
            lon: 104.990963
        },
        {
            id: 'Cameroon',
            lat: 7.369722,
            lon: 12.354722
        },
        {
            id: 'Central African Republic',
            lat: 6.611111,
            lon: 20.939444
        },
        {
            id: 'Chile',
            lat: -45.293437,
            lon: -73.828125
        },
        {
            id: 'Congo',
            lat: -4.038333,
            lon: 21.758664
        },
        {
            id: 'Dominican Republic',
            lat: -4.038333,
            lon: 21.758664
        },
        {
            id: 'Ecuador',
            lat: -1.831239,
            lon: -78.183406
        },
        {
            id: 'El Salvador',
            lat: 13.794185,
            lon: -88.896530
        },
        {
            id: 'Fiji',
            lat: -17.713371,
            lon: 178.065032
        },
        {
            id: 'Gabon',
            lat: -0.803689,
            lon: 11.609444
        },
        {
            id: 'Georgia',
            lat: 32.165622,
            lon: -82.900075
        },
        {
            id: 'Haiti',
            lat: 18.971187,
            lon: -72.285215
        },
        {
            id: 'Honduras',
            lat: 15.199999,
            lon: -86.241905
        },
        {
            id: 'Indonesia',
            lat: -0.789275,
            lon: 113.921327
        },
        {
            id: 'Jamaica',
            lat: 18.109581,
            lon: -77.297508
        },
        {
            id: 'Kyrgyzstan',
            lat: 41.204380,
            lon: 74.766098
        },
        {
            id: 'Madagascar',
            lat: -18.766947,
            lon: 46.869107
        },
        {
            id: 'Malawi',
            lat: -13.254308,
            lon: 34.301525
        },
        {
            id: 'Mali',
            lat: 17.570692,
            lon: -3.996166
        },
        {
            id: 'Mauritania',
            lat: 21.007890,
            lon: -10.940835
        },
        {
            id: 'Mauritius',
            lat: -20.348404,
            lon: 57.552152
        },
        {
            id: 'Mexico',
            lat: 23.634501,
            lon: -102.552784
        },
        {
            id: 'Moldova',
            lat: 47.411631,
            lon: 28.369885
        },
        {
            id: 'Mongolia',
            lat: 46.862496,
            lon: 103.846656
        },
        {
            id: 'Nicaragua',
            lat: 12.865416,
            lon: -85.207229
        },
        {
            id: 'Papua New Guinea',
            lat: -6.314993,
            lon: 143.955550
        },
        {
            id: 'Peru',
            lat: -9.189967,
            lon: -75.015152
        },
        {
            id: 'Sierra Leone',
            lat: 8.460555,
            lon: -11.779889
        },
        {
            id: 'Solomon Islands',
            lat: -9.645710,
            lon: 160.156194
        },
        {
            id: 'South Sudan',
            lat: 6.876992,
            lon: 31.306979
        },
        {
            id: 'Sudan',
            lat: 12.862807,
            lon: 30.217636
        },
        {
            id: 'Suriname',
            lat: 3.919305,
            lon: -56.027783
        },
        {
            id: 'Tajikistan',
            lat: 38.861034,
            lon: 71.276093
        },
        {
            id: 'Timor-Leste',
            lat: -8.874217,
            lon: 125.727539
        },
        {
            id: 'Togo',
            lat: 8.619543,
            lon: 0.824782
        },
        {
            id: 'Vietnam',
            lat: 16.812913,
            lon: 107.108177
        },
        {
            id: 'Zambia',
            lat: -13.133897,
            lon: 27.849332
        },
        {
            id: 'Angola',
            lat: -11.202692,
            lon: 17.873887
        },
        {
            id: 'Cote D Ivoire',
            lat: 7.539989,
            lon: -5.547080
        },
        {
            id: 'Cuba',
            lat: 21.521757,
            lon: -77.781167
        },
         {
            id: 'Panama',
            lat: 8.537981,
            lon: -80.782127
        },
        {
            id: 'Saint Lucia',
            lat: 13.909444,
            lon: -60.978893
        },
        {
            id: 'South Africa',
            lat: -30.559482,
            lon: 22.937506
        },
        {
            id: 'Sri Lanka',
            lat: 7.873054,
            lon: 80.771797
        },
        {
            id: 'Uruguay',
            lat: -32.522779,
            lon: -55.765835
        },
        {
            id: 'Uzbekistan',
            lat: 41.377491,
            lon: 64.585262
        },
        {
            id: 'Botswana',
            lat: -22.328474,
            lon: 24.684866
        },
        {
            id: 'Swaziland',
            lat: -26.522503,
            lon: 31.465866
        },
        {
            id: 'Myanmar',
            lat: 21.916221,
            lon: 95.955974
        },
        {
            id: 'Guatemala',
            lat: 15.783471,
            lon: -90.230759
        },
        {
            id: 'Guyana',
            lat: 4.860416,
            lon: -58.930180
        },
        {
            id: 'Lao PDR',
            lat: 19.856270,
            lon: 102.495496
        },
        {
            id: 'Liberia',
            lat: 6.428055,
            lon: -9.429499
        },
        {
            id: 'Sao Tome and Principe',
            lat: 0.186360,
            lon: 6.613081
        },
        {
            id: 'The Gambia',
            lat: 13.443182,
            lon: -15.310139
        },
        {
            id: 'Equatorial Guinea',
            lat: 1.650801,
            lon: 10.267895
        },
         {
            id: 'Burundi',
            lat: -3.373056,
            lon: 29.918886
        },
         {
            id: 'Namibia',
            lat: -22.957640,
            lon: 18.490410
        },
        {
            id: 'Australia',
            lat: -33.868857,
            lon: 151.206079
        },
        {
            id: 'Austria',
            lat: 47.516231,
            lon: 14.550072
        },
        {
            id: 'Belgium',
            lat: 50.503887,
            lon: 4.469936
        },
        {
            id: 'Germany',
            lat: 51.165691,
            lon: 10.451526
        },
        {
            id: 'Greece',
            lat: 39.074208,
            lon: 21.824312
        },
        {
            id: 'Ireland',
            lat: 53.412910,
            lon: -8.243890
        },
        {
            id: 'Oman',
            lat: 21.473533,
            lon: 55.975413
        },
        {
            id: 'Russia',
            lat: 61.524010,
            lon: 105.318756
        },
        {
            id: 'Singapore',
            lat: 1.352083,
            lon: 103.819836
        },
        {
            id: 'Sweden',
            lat: 60.128161,
            lon: 18.643501
        },
        {
            id: 'Switzerland',
            lat: 46.818188,
            lon: 8.227512
        },
        {
            id: 'Taiwan',
            lat: 23.697810,
            lon: 120.960515
        },
        {
            id: 'Hong Kong',
            lat: 22.396428,
            lon: 114.109497
        },
        {
            id: 'Republic of Korea',
            lat: 35.907757,
            lon: 127.766922
        },
        {
            id: 'United States of America',
            lat: 37.090240,
            lon: -95.712891
        },
        ]
    }]
});

// Function to return an SVG path between two points, with an arc
function pointsToPath(from, to, invertArc) {
    var arcPointX = (from.x + to.x) / (invertArc ? 2.4 : 1.6),
        arcPointY = (from.y + to.y) / (invertArc ? 2.4 : 1.6);
    return 'M' + from.x + ',' + from.y + 'Q' + arcPointX + ' ' + arcPointY +
            ',' + to.x + ' ' + to.y;
}

var londonPoint = chart.get('London'),
    lerwickPoint = chart.get('Lerwick');
    takedaPoint = chart.get('TAKEDA');
    shionogiPoint = chart.get('SHIONOGI');
    pfizerPoint = chart.get('PFIZER');
    astellasPoint = chart.get('ASTELLAS');
    novartisPoint = chart.get('NOVARTIS');
    bristolPoint = chart.get('BRISTOL-MYERS SQUIBB');
    sanofiPoint = chart.get('SANOFI');
    celgenePoint = chart.get('CELGENE CORPORATION');
    merckPoint = chart.get('MERCK');
    rochePoint = chart.get('ROCHE');
    johnsonPoint = chart.get('JOHNSON &JOHNSON');
    chugaiPoint = chart.get('CHUGAI');
    daiichiPoint = chart.get('Daiichi Sankyo');
    eisaiPoint = chart.get('Eisai');
    elilillyPoint = chart.get('Eli Lilly and Company');
    pfizerfoundationPoint = chart.get('Pfizer Foundation');
    
    

    
    
    
    

// Add a series of lines for London
chart.addSeries({
    name: 'TAKEDA',
    type: 'mapline',
    lineWidth: 1,
    color: '#F01928',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'Kenya',
        path: pointsToPath(takedaPoint, chart.get('Kenya'))
    },
    {
        id: 'Rwanda',
        path: pointsToPath(takedaPoint, chart.get('Rwanda'))
    },
    {
        id: 'Tanzania',
        path: pointsToPath(takedaPoint, chart.get('Tanzania'))
    },
    {
        id: 'Uganda',
        path: pointsToPath(takedaPoint, chart.get('Uganda'))
    },
    {
        id: 'Ukraine',
        path: pointsToPath(takedaPoint, chart.get('Ukraine'))
    },
    {
        id: 'China',
        path: pointsToPath(takedaPoint, chart.get('China'))
    },
    {
        id: 'Ethiopia',
        path: pointsToPath(takedaPoint, chart.get('Ethiopia'))
    },
    {
        id: 'India',
        path: pointsToPath(takedaPoint, chart.get('India'))
    },
    {
        id: 'Albania',
        path: pointsToPath(takedaPoint, chart.get('Albania'))
    },
    {
        id: 'Belarus',
        path: pointsToPath(takedaPoint, chart.get('Belarus'))
    },
    {
        id: 'Bosnia and Herzegovina',
        path: pointsToPath(takedaPoint, chart.get('Bosnia and Herzegovina'))
    },
    {
        id: 'Egypt',
        path: pointsToPath(takedaPoint, chart.get('Egypt'))
    },
    {
        id: 'Jordan',
        path: pointsToPath(takedaPoint, chart.get('Jordan'))
    },
    {
        id: 'Morocco',
        path: pointsToPath(takedaPoint, chart.get('Morocco'))
    },
    {
        id: 'Pakistan',
        path: pointsToPath(takedaPoint, chart.get('Pakistan'))
    },
    {
        id: 'Paraguay',
        path: pointsToPath(takedaPoint, chart.get('Paraguay'))
    },
    {
        id: 'Sudan',
        path: pointsToPath(takedaPoint, chart.get('Sudan'))
    },
    {
        id: 'Tunisia',
        path: pointsToPath(takedaPoint, chart.get('Tunisia'))
    },
    {
        id: 'Brazil',
        path: pointsToPath(takedaPoint, chart.get('Brazil'))
    },
    {
        id: 'Lebanon',
        path: pointsToPath(takedaPoint, chart.get('Lebanon'))
    },
    {
        id: 'Malaysia',
        path: pointsToPath(takedaPoint, chart.get('Malaysia'))
    },
    {
        id: 'Philippines',
        path: pointsToPath(takedaPoint, chart.get('Philippines'))
    },
    {
        id: 'Thailand',
        path: pointsToPath(takedaPoint, chart.get('Thailand'))
    },
    {
        id: 'United Arab Emirates',
        path: pointsToPath(takedaPoint, chart.get('United Arab Emirates'))
    },
    {
        id: 'Ghana',
        path: pointsToPath(takedaPoint, chart.get('Ghana'))
    },
    {
        id: 'Kazakhstan',
        path: pointsToPath(takedaPoint, chart.get('Kazakhstan'))
    },
    {
        id: 'Nepal',
        path: pointsToPath(takedaPoint, chart.get('Nepal'))
    },
    {
        id: 'Niger',
        path: pointsToPath(takedaPoint, chart.get('Niger'))
    },
    {
        id: 'Senegal',
        path: pointsToPath(takedaPoint, chart.get('Senegal'))
    },
    {
        id: 'Seychelles',
        path: pointsToPath(takedaPoint, chart.get('Seychelles'))
    }
    ]
});

// Add a series of lines for Lerwick
chart.addSeries({
    name: 'SHIONOGI',
    type: 'mapline',
    lineWidth: 1,
    color: '#d02f26',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'Kenya',
        path: pointsToPath(shionogiPoint, chart.get('Kenya'))
    }]
});


chart.addSeries({
    name: 'PFIZER',
    type: 'mapline',
    lineWidth: 1,
    color: '#007CC2',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'Kenya',
        path: pointsToPath(pfizerPoint, chart.get('Kenya'))
    },
    {
        id: 'Bolivia',
        path: pointsToPath(pfizerPoint, chart.get('Bolivia'))
    },
    {
        id: 'Colombia',
        path: pointsToPath(pfizerPoint, chart.get('Colombia'))
    },
    {
        id: 'Ethiopia',
        path: pointsToPath(pfizerPoint, chart.get('Ethiopia'))
    },
     {
        id: 'India',
        path: pointsToPath(pfizerPoint, chart.get('India'))
    },
    {
        id: 'Mozambique',
        path: pointsToPath(pfizerPoint, chart.get('Mozambique'))
    },
    {
        id: 'Philippines',
        path: pointsToPath(pfizerPoint, chart.get('Philippines'))
    },
    {
        id: 'Uganda',
        path: pointsToPath(pfizerPoint, chart.get('Uganda'))
    },
    {
        id: 'Tanzania',
        path: pointsToPath(pfizerPoint, chart.get('Tanzania'))
    },
    {
        id: 'Zimbabwe',
        path: pointsToPath(pfizerPoint, chart.get('Zimbabwe'))
    },
    {
        id: 'Nigeria',
        path: pointsToPath(pfizerPoint, chart.get('Nigeria'))
    },
    {
        id: 'Rwanda',
        path: pointsToPath(pfizerPoint, chart.get('Rwanda'))
    }
    
    ]
});

chart.addSeries({
    name: 'ASTELLAS',
    type: 'mapline',
    lineWidth: 1,
    color: '#d91e48',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'Kenya',
        path: pointsToPath(astellasPoint, chart.get('Kenya'))
    },
    {
        id: 'India',
        path: pointsToPath(astellasPoint, chart.get('India'))
    }
    ]
});

chart.addSeries({
    name: 'NOVARTIS',
    type: 'mapline',
    lineWidth: 1,
    color: '#fab123',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'Kenya',
        path: pointsToPath(novartisPoint, chart.get('Kenya'))
    },
    {
        id: 'India',
        path: pointsToPath(novartisPoint, chart.get('India'))
    },
    {
        id: 'Brazil',
        path: pointsToPath(novartisPoint, chart.get('Brazil'))
    },
     {
        id: 'Senegal',
        path: pointsToPath(novartisPoint, chart.get('Senegal'))
    },
    {
        id: 'Belarus',
        path: pointsToPath(novartisPoint, chart.get('Belarus'))
    },
     {
        id: 'China',
        path: pointsToPath(novartisPoint, chart.get('China'))
    },
    {
        id: 'Ethiopia',
        path: pointsToPath(novartisPoint, chart.get('Ethiopia'))
    },
    {
        id: 'Lebanon',
        path: pointsToPath(novartisPoint, chart.get('Lebanon'))
    },
    {
        id: 'Ghana',
        path: pointsToPath(novartisPoint, chart.get('Ghana'))
    },
    {
        id: 'Nepal',
        path: pointsToPath(novartisPoint, chart.get('Nepal'))
    },
    {
        id: 'Pakistan',
        path: pointsToPath(novartisPoint, chart.get('Pakistan'))
    },
    {
        id: 'Niger',
        path: pointsToPath(novartisPoint, chart.get('Niger'))
    },
    {
        id: 'Malaysia',
        path: pointsToPath(novartisPoint, chart.get('Malaysia'))
    },
    {
        id: 'Seychelles',
        path: pointsToPath(novartisPoint, chart.get('Seychelles'))
    },
    {
        id: 'Rwanda',
        path: pointsToPath(novartisPoint, chart.get('Rwanda'))
    },
    {
        id: 'Nigeria',
        path: pointsToPath(novartisPoint, chart.get('Nigeria'))
    },
    {
        id: 'Zimbabwe',
        path: pointsToPath(novartisPoint, chart.get('Zimbabwe'))
    },
    {
        id: 'Mozambique',
        path: pointsToPath(novartisPoint, chart.get('Mozambique'))
    },
    {
        id: 'Tanzania',
        path: pointsToPath(novartisPoint, chart.get('Tanzania'))
    },
    {
        id: 'Ukraine',
        path: pointsToPath(novartisPoint, chart.get('Ukraine'))
    },
    {
        id: 'Bolivia',
        path: pointsToPath(novartisPoint, chart.get('Bolivia'))
    },
     {
        id: 'Egypt',
        path: pointsToPath(novartisPoint, chart.get('Egypt'))
    },
    {
        id: 'Uganda',
        path: pointsToPath(novartisPoint, chart.get('Uganda'))
    },
    {
        id: 'Paraguay',
        path: pointsToPath(novartisPoint, chart.get('Paraguay'))
    },
    {
        id: 'Philippines',
        path: pointsToPath(novartisPoint, chart.get('Philippines'))
    },
    {
        id: 'Thailand',
        path: pointsToPath(novartisPoint, chart.get('Thailand'))
    },
    {
        id: 'Argentina',
        path: pointsToPath(novartisPoint, chart.get('Argentina'))
    },
    {
        id: 'Armenia',
        path: pointsToPath(novartisPoint, chart.get('Armenia'))
    },
    {
        id: 'Azerbaijan',
        path: pointsToPath(novartisPoint, chart.get('Azerbaijan'))
    },
    {
        id: 'Bahamas',
        path: pointsToPath(novartisPoint, chart.get('Bahamas'))
    },
    {
        id: 'Bangladesh',
        path: pointsToPath(novartisPoint, chart.get('Bangladesh'))
    },
    {
        id: 'Benin',
        path: pointsToPath(novartisPoint, chart.get('Benin'))
    },
    {
        id: 'Bhutan',
        path: pointsToPath(novartisPoint, chart.get('Bhutan'))
    },
    {
        id: 'Burkina Faso',
        path: pointsToPath(novartisPoint, chart.get('Burkina Faso'))
    },
    {
        id: 'Cambodia',
        path: pointsToPath(novartisPoint, chart.get('Cambodia'))
    },
    {
        id: 'Cameroon',
        path: pointsToPath(novartisPoint, chart.get('Cameroon'))
    },
    {
        id: 'Central African Republic',
        path: pointsToPath(novartisPoint, chart.get('Central African Republic'))
    },
    {
        id: 'Chile',
        path: pointsToPath(novartisPoint, chart.get('Chile'))
    },
    {
        id: 'Congo',
        path: pointsToPath(novartisPoint, chart.get('Congo'))
    },
    {
        id: 'Dominican Republic',
        path: pointsToPath(novartisPoint, chart.get('Dominican Republic'))
    },
    {
        id: 'Ecuador',
        path: pointsToPath(novartisPoint, chart.get('Ecuador'))
    },
    {
        id: 'El Salvador',
        path: pointsToPath(novartisPoint, chart.get('El Salvador'))
    },
    {
        id: 'Fiji',
        path: pointsToPath(novartisPoint, chart.get('Fiji'))
    },
    {
        id: 'Gabon',
        path: pointsToPath(novartisPoint, chart.get('Gabon'))
    },
    {
        id: 'Georgia',
        path: pointsToPath(novartisPoint, chart.get('Georgia'))
    },
    {
        id: 'Haiti',
        path: pointsToPath(novartisPoint, chart.get('Haiti'))
    },
    {
        id: 'Honduras',
        path: pointsToPath(novartisPoint, chart.get('Honduras'))
    },
    {
        id: 'Indonesia',
        path: pointsToPath(novartisPoint, chart.get('Indonesia'))
    },
    {
        id: 'Jamaica',
        path: pointsToPath(novartisPoint, chart.get('Jamaica'))
    },
     {
        id: 'Kazakhstan',
        path: pointsToPath(novartisPoint, chart.get('Kazakhstan'))
    },
     {
        id: 'Kyrgyzstan',
        path: pointsToPath(novartisPoint, chart.get('Kyrgyzstan'))
    },
     {
        id: 'Madagascar',
        path: pointsToPath(novartisPoint, chart.get('Madagascar'))
    },
     {
        id: 'Malawi',
        path: pointsToPath(novartisPoint, chart.get('Malawi'))
    },
     {
        id: 'Mali',
        path: pointsToPath(novartisPoint, chart.get('Mali'))
    },
     {
        id: 'Mauritania',
        path: pointsToPath(novartisPoint, chart.get('Mauritania'))
    },
    {
        id: 'Mauritius',
        path: pointsToPath(novartisPoint, chart.get('Mauritius'))
    },
    {
        id: 'Mexico',
        path: pointsToPath(novartisPoint, chart.get('Mexico'))
    },
    {
        id: 'Moldova',
        path: pointsToPath(novartisPoint, chart.get('Moldova'))
    },
    {
        id: 'Mongolia',
        path: pointsToPath(novartisPoint, chart.get('Mongolia'))
    },
     {
        id: 'Morocco',
        path: pointsToPath(novartisPoint, chart.get('Morocco'))
    },
     {
        id: 'Nicaragua',
        path: pointsToPath(novartisPoint, chart.get('Nicaragua'))
    },
    {
        id: 'Papua New Guinea',
        path: pointsToPath(novartisPoint, chart.get('Papua New Guinea'))
    },
    {
        id: 'Peru',
        path: pointsToPath(novartisPoint, chart.get('Peru'))
    },
    {
        id: 'Sierra Leone',
        path: pointsToPath(novartisPoint, chart.get('Sierra Leone'))
    },
    {
        id: 'Solomon Islands',
        path: pointsToPath(novartisPoint, chart.get('Solomon Islands'))
    },
    {
        id: 'South Sudan',
        path: pointsToPath(novartisPoint, chart.get('South Sudan'))
    },
    {
        id: 'Sudan',
        path: pointsToPath(novartisPoint, chart.get('Sudan'))
    },
    {
        id: 'Suriname',
        path: pointsToPath(novartisPoint, chart.get('Suriname'))
    },
    {
        id: 'Tajikistan',
        path: pointsToPath(novartisPoint, chart.get('Tajikistan'))
    },
    {
        id: 'Timor-Leste',
        path: pointsToPath(novartisPoint, chart.get('Timor-Leste'))
    },
    {
        id: 'Togo',
        path: pointsToPath(novartisPoint, chart.get('Togo'))
    },
    {
        id: 'Vietnam',
        path: pointsToPath(novartisPoint, chart.get('Vietnam'))
    },
    {
        id: 'Zambia',
        path: pointsToPath(novartisPoint, chart.get('Zambia'))
    },
    {
        id: 'Angola',
        path: pointsToPath(novartisPoint, chart.get('Angola'))
    },
    {
        id: 'Cote D Ivoire',
        path: pointsToPath(novartisPoint, chart.get('Cote D Ivoire'))
    },
    {
        id: 'Cuba',
        path: pointsToPath(novartisPoint, chart.get('Cuba'))
    },
    {
        id: 'Panama',
        path: pointsToPath(novartisPoint, chart.get('Panama'))
    },
    {
        id: 'Saint Lucia',
        path: pointsToPath(novartisPoint, chart.get('Saint Lucia'))
    },
    {
        id: 'South Africa',
        path: pointsToPath(novartisPoint, chart.get('South Africa'))
    },
    {
        id: 'Sri Lanka',
        path: pointsToPath(novartisPoint, chart.get('Sri Lanka'))
    },
    {
        id: 'Tunisia',
        path: pointsToPath(novartisPoint, chart.get('Tunisia'))
    },
    {
        id: 'Uruguay',
        path: pointsToPath(novartisPoint, chart.get('Uruguay'))
    },
    {
        id: 'Uzbekistan',
        path: pointsToPath(novartisPoint, chart.get('Uzbekistan'))
    }
    ]
});

chart.addSeries({
    name: 'BRISTOL-MYERS SQUIBB',
    type: 'mapline',
    lineWidth: 1,
    color: '#06578f',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'Botswana',
        path: pointsToPath(bristolPoint, chart.get('Botswana'))
    },
    {
        id: 'Malawi',
        path: pointsToPath(bristolPoint, chart.get('Malawi'))
    },
    {
        id: 'Ethiopia',
        path: pointsToPath(bristolPoint, chart.get('Ethiopia'))
    },
    {
        id: 'Tanzania',
        path: pointsToPath(bristolPoint, chart.get('Tanzania'))
    },
    {
        id: 'Kenya',
        path: pointsToPath(bristolPoint, chart.get('Kenya'))
    },
    {
        id: 'Uganda',
        path: pointsToPath(bristolPoint, chart.get('Uganda'))
    },
    {
        id: 'South Africa',
        path: pointsToPath(bristolPoint, chart.get('South Africa'))
    },
    {
        id: 'Swaziland',
        path: pointsToPath(bristolPoint, chart.get('Swaziland'))
    },
    {
        id: 'Senegal',
        path: pointsToPath(bristolPoint, chart.get('Senegal'))
    }
    
    ]
});


chart.addSeries({
    name: 'SANOFI',
    type: 'mapline',
    lineWidth: 1,
    color: '#bbbb1b',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'Brazil',
        path: pointsToPath(sanofiPoint, chart.get('Brazil'))
    },
    {
        id: 'India',
        path: pointsToPath(sanofiPoint, chart.get('India'))
    },
    {
        id: 'Pakistan',
        path: pointsToPath(sanofiPoint, chart.get('Pakistan'))
    },
    {
        id: 'United Arab Emirates',
        path: pointsToPath(sanofiPoint, chart.get('United Arab Emirates'))
    },
    {
        id: 'Egypt',
        path: pointsToPath(sanofiPoint, chart.get('Egypt'))
    },
    {
        id: 'Paraguay',
        path: pointsToPath(sanofiPoint, chart.get('Paraguay'))
    },
    {
        id: 'Cote D Ivoire',
        path: pointsToPath(sanofiPoint, chart.get('Cote D Ivoire'))
    },
    {
        id: 'Congo',
        path: pointsToPath(sanofiPoint, chart.get('Congo'))
    },
    {
        id: 'Madagascar',
        path: pointsToPath(sanofiPoint, chart.get('Madagascar'))
    },
    {
        id: 'Benin',
        path: pointsToPath(sanofiPoint, chart.get('Benin'))
    },
    {
        id: 'Burkina Faso',
        path: pointsToPath(sanofiPoint, chart.get('Burkina Faso'))
    },
    {
        id: 'Cameroon',
        path: pointsToPath(sanofiPoint, chart.get('Cameroon'))
    },
    {
        id: 'Mali',
        path: pointsToPath(sanofiPoint, chart.get('Mali'))
    },
    {
        id: 'Niger',
        path: pointsToPath(sanofiPoint, chart.get('Niger'))
    },
    {
        id: 'Senegal',
        path: pointsToPath(sanofiPoint, chart.get('Senegal'))
    },
    {
        id: 'Thailand',
        path: pointsToPath(sanofiPoint, chart.get('Thailand'))
    },
    {
        id: 'Kenya',
        path: pointsToPath(sanofiPoint, chart.get('Kenya'))
    },
    {
        id: 'Armenia',
        path: pointsToPath(sanofiPoint, chart.get('Armenia'))
    },
    {
        id: 'Morocco',
        path: pointsToPath(sanofiPoint, chart.get('Morocco'))
    },
    {
        id: 'Myanmar',
        path: pointsToPath(sanofiPoint, chart.get('Myanmar'))
    },
    {
        id: 'Guatemala',
        path: pointsToPath(sanofiPoint, chart.get('Guatemala'))
    }
    
    ]
});


chart.addSeries({
    name: 'CELGENE CORPORATION',
    type: 'mapline',
    lineWidth: 1,
    color: '#0b2476',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'Bangladesh',
        path: pointsToPath(celgenePoint, chart.get('Bangladesh'))
    },
    {
        id: 'Botswana',
        path: pointsToPath(celgenePoint, chart.get('Botswana'))
    },
    {
        id: 'Brazil',
        path: pointsToPath(celgenePoint, chart.get('Brazil'))
    },
    {
        id: 'Ghana',
        path: pointsToPath(celgenePoint, chart.get('Ghana'))
    },
    {
        id: 'Guatemala',
        path: pointsToPath(celgenePoint, chart.get('Guatemala'))
    },
    {
        id: 'Haiti',
        path: pointsToPath(celgenePoint, chart.get('Haiti'))
    },
    {
        id: 'Malawi',
        path: pointsToPath(celgenePoint, chart.get('Malawi'))
    },
    {
        id: 'Nepal',
        path: pointsToPath(celgenePoint, chart.get('Nepal'))
    },
    {
        id: 'Uganda',
        path: pointsToPath(celgenePoint, chart.get('Uganda'))
    },
    {
        id: 'Tanzania',
        path: pointsToPath(celgenePoint, chart.get('Tanzania'))
    }
    
    ]
});


chart.addSeries({
    name: 'MERCK',
    type: 'mapline',
    lineWidth: 1,
    color: '#009899',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'Armenia',
        path: pointsToPath(merckPoint, chart.get('Armenia'))
    },
    {
        id: 'Bolivia',
        path: pointsToPath(merckPoint, chart.get('Bolivia'))
    },
    {
        id: 'Cote D Ivoire',
        path: pointsToPath(merckPoint, chart.get('Cote D Ivoire'))
    },
    {
        id: 'Ghana',
        path: pointsToPath(merckPoint, chart.get('Ghana'))
    },
    {
        id: 'Guyana',
        path: pointsToPath(merckPoint, chart.get('Guyana'))
    },
    {
        id: 'Honduras',
        path: pointsToPath(merckPoint, chart.get('Honduras'))
    },
    {
        id: 'Kenya',
        path: pointsToPath(merckPoint, chart.get('Kenya'))
    },
    {
        id: 'Lao PDR',
        path: pointsToPath(merckPoint, chart.get('Lao PDR'))
    },
    {
        id: 'Liberia',
        path: pointsToPath(merckPoint, chart.get('Liberia'))
    },
    {
        id: 'Madagascar',
        path: pointsToPath(merckPoint, chart.get('Madagascar'))
    },
    {
        id: 'Malawi',
        path: pointsToPath(merckPoint, chart.get('Malawi'))
    },{
        id: 'Rwanda',
        path: pointsToPath(merckPoint, chart.get('Rwanda'))
    },
    {
        id: 'Sao Tome and Principe',
        path: pointsToPath(merckPoint, chart.get('Sao Tome and Principe'))
    },
    {
        id: 'Senegal',
        path: pointsToPath(merckPoint, chart.get('Senegal'))
    },
    {
        id: 'Sierra Leone',
        path: pointsToPath(merckPoint, chart.get('Sierra Leone'))
    },
    {
        id: 'Solomon Islands',
        path: pointsToPath(merckPoint, chart.get('Solomon Islands'))
    },
    {
        id: 'Tanzania',
        path: pointsToPath(merckPoint, chart.get('Tanzania'))
    },
    {
        id: 'The Gambia',
        path: pointsToPath(merckPoint, chart.get('The Gambia'))
    },
    {
    id: 'Togo',
    path: pointsToPath(merckPoint, chart.get('Togo'))
},
{
    id: 'Uganda',
    path: pointsToPath(merckPoint, chart.get('Uganda'))
},
{
    id: 'Uzbekistan',
    path: pointsToPath(merckPoint, chart.get('Uzbekistan'))
},
{
    id: 'Zimbabwe',
    path: pointsToPath(merckPoint, chart.get('Zimbabwe'))
},
{
    id: 'Peru',
    path: pointsToPath(merckPoint, chart.get('Peru'))
},
{
    id: 'Philippines',
    path: pointsToPath(merckPoint, chart.get('Philippines'))
},
{
    id: 'Egypt',
    path: pointsToPath(merckPoint, chart.get('Egypt'))
},
{
    id: 'India',
    path: pointsToPath(merckPoint, chart.get('India'))
},
{
    id: 'Botswana',
    path: pointsToPath(merckPoint, chart.get('Botswana'))
},
{
    id: 'Ethiopia',
    path: pointsToPath(merckPoint, chart.get('Ethiopia'))
},
{
    id: 'South Africa',
    path: pointsToPath(merckPoint, chart.get('South Africa'))
},
{
    id: 'Zambia',
    path: pointsToPath(merckPoint, chart.get('Zambia'))
},
{
    id: 'Angola',
    path: pointsToPath(merckPoint, chart.get('Angola'))
},
{
    id: 'Bangladesh',
    path: pointsToPath(merckPoint, chart.get('Bangladesh'))
},
{
    id: 'Cambodia',
    path: pointsToPath(merckPoint, chart.get('Cambodia'))
},
{
    id: 'Cameroon',
    path: pointsToPath(merckPoint, chart.get('Cameroon'))
},
{
    id: 'Central African Republic',
    path: pointsToPath(merckPoint, chart.get('Central African Republic'))
},
{
    id: 'Mali',
    path: pointsToPath(merckPoint, chart.get('Mali'))
},
{
    id: 'Nepal',
    path: pointsToPath(merckPoint, chart.get('Nepal'))
},
{
    id: 'Burkina Faso',
    path: pointsToPath(merckPoint, chart.get('Burkina Faso'))
},
{
    id: 'Benin',
    path: pointsToPath(merckPoint, chart.get('Benin'))
},
{
    id: 'Nigeria',
    path: pointsToPath(merckPoint, chart.get('Nigeria'))
},
{
    id: 'Sri Lanka',
    path: pointsToPath(merckPoint, chart.get('Sri Lanka'))
},
{
    id: 'Myanmar',
    path: pointsToPath(merckPoint, chart.get('Myanmar'))
},
{
    id: 'Mexico',
    path: pointsToPath(merckPoint, chart.get('Mexico'))
},
{
    id: 'United Arab Emirates',
    path: pointsToPath(merckPoint, chart.get('United Arab Emirates'))
},
{
    id: 'Brazil',
    path: pointsToPath(merckPoint, chart.get('Brazil'))
},
{
    id: 'Mozambique',
    path: pointsToPath(merckPoint, chart.get('Mozambique'))
},
{
    id: 'Congo',
    path: pointsToPath(merckPoint, chart.get('Congo'))
},
{
    id: 'Gabon',
    path: pointsToPath(merckPoint, chart.get('Gabon'))
},
{
    id: 'Morocco',
    path: pointsToPath(merckPoint, chart.get('Morocco'))
},
{
    id: 'Namibia',
    path: pointsToPath(merckPoint, chart.get('Namibia'))
},
{
    id: 'Niger',
    path: pointsToPath(merckPoint, chart.get('Niger'))
},
{
    id: 'Burundi',
    path: pointsToPath(merckPoint, chart.get('Burundi'))
},
{
    id: 'Thailand',
    path: pointsToPath(merckPoint, chart.get('Thailand'))
},
{
    id: 'Vietnam',
    path: pointsToPath(merckPoint, chart.get('Vietnam'))
},
{
    id: 'Australia',
    path: pointsToPath(merckPoint, chart.get('Australia'))
},
{
    id: 'Austria',
    path: pointsToPath(merckPoint, chart.get('Austria'))
},
{
    id: 'Belgium',
    path: pointsToPath(merckPoint, chart.get('Belgium'))
},
{
    id: 'Germany',
    path: pointsToPath(merckPoint, chart.get('Germany'))
},
{
    id: 'Greece',
    path: pointsToPath(merckPoint, chart.get('Greece'))
},
{
    id: 'Indonesia',
    path: pointsToPath(merckPoint, chart.get('Indonesia'))
},
{
    id: 'Ireland',
    path: pointsToPath(merckPoint, chart.get('Ireland'))
},
{
    id: 'Malaysia',
    path: pointsToPath(merckPoint, chart.get('Malaysia'))
},
{
    id: 'Oman',
    path: pointsToPath(merckPoint, chart.get('Oman'))
},
{
    id: 'Russia',
    path: pointsToPath(merckPoint, chart.get('Russia'))
},
{
    id: 'Singapore',
    path: pointsToPath(merckPoint, chart.get('Singapore'))
},
{
    id: 'Sweden',
    path: pointsToPath(merckPoint, chart.get('Sweden'))
},
{
    id: 'Switzerland',
    path: pointsToPath(merckPoint, chart.get('Switzerland'))
},
{
    id: 'Taiwan',
    path: pointsToPath(merckPoint, chart.get('Taiwan'))
}
    
    ]
});



chart.addSeries({
    name: 'ROCHE',
    type: 'mapline',
    lineWidth: 1,
    color: '#0078c1',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'Kenya',
        path: pointsToPath(rochePoint, chart.get('Kenya'))
    },
    {
        id: 'China',
        path: pointsToPath(rochePoint, chart.get('China'))
    },
    {
        id: 'Egypt',
        path: pointsToPath(rochePoint, chart.get('Egypt'))
    },
    {
        id: 'India',
        path: pointsToPath(rochePoint, chart.get('India'))
    },
    {
        id: 'Pakistan',
        path: pointsToPath(rochePoint, chart.get('Pakistan'))
    },
    {
        id: 'Bangladesh',
        path: pointsToPath(rochePoint, chart.get('Bangladesh'))
    },
    {
        id: 'Hong Kong',
        path: pointsToPath(rochePoint, chart.get('Hong Kong'))
    },
    {
        id: 'Indonesia',
        path: pointsToPath(rochePoint, chart.get('Indonesia'))
    },
    {
        id: 'Malaysia',
        path: pointsToPath(rochePoint, chart.get('Malaysia'))
    },
    {
        id: 'Myanmar',
        path: pointsToPath(rochePoint, chart.get('Myanmar'))
    },
    {
        id: 'Philippines',
        path: pointsToPath(rochePoint, chart.get('Philippines'))
    },{
        id: 'Republic of Korea',
        path: pointsToPath(rochePoint, chart.get('Republic of Korea'))
    },
    {
        id: 'Taiwan',
        path: pointsToPath(rochePoint, chart.get('Taiwan'))
    },
    {
        id: 'Thailand',
        path: pointsToPath(rochePoint, chart.get('Thailand'))
    },
    {
        id: 'Vietnam',
        path: pointsToPath(rochePoint, chart.get('Vietnam'))
    }
    ]
});

chart.addSeries({
    name: 'JOHNSON &JOHNSON',
    type: 'mapline',
    lineWidth: 1,
    color: '#c8202f',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'Bangladesh',
        path: pointsToPath(johnsonPoint, chart.get('Bangladesh'))
    },
    {
        id: 'Ethiopia',
        path: pointsToPath(johnsonPoint, chart.get('Ethiopia'))
    },
    {
        id: 'Mali',
        path: pointsToPath(johnsonPoint, chart.get('Mali'))
    },
    {
        id: 'Kenya',
        path: pointsToPath(johnsonPoint, chart.get('Kenya'))
    },
    {
        id: 'Nigeria',
        path: pointsToPath(johnsonPoint, chart.get('Nigeria'))
    },
    {
        id: 'Rwanda',
        path: pointsToPath(johnsonPoint, chart.get('Rwanda'))
    },
    {
        id: 'Uganda',
        path: pointsToPath(johnsonPoint, chart.get('Uganda'))
    },
    {
        id: 'Tanzania',
        path: pointsToPath(johnsonPoint, chart.get('Tanzania'))
    }
    ]
});

chart.addSeries({
    name: 'CHUGAI',
    type: 'mapline',
    lineWidth: 1,
    color: '#0a50a1',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'Myanmar',
        path: pointsToPath(chugaiPoint, chart.get('Myanmar'))
    }
    ]
});

chart.addSeries({
    name: 'Daiichi Sankyo',
    type: 'mapline',
    lineWidth: 1,
    color: '#fdec0b',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'China',
        path: pointsToPath(daiichiPoint, chart.get('China'))
    },
    {
        id: 'Tanzania',
        path: pointsToPath(daiichiPoint, chart.get('Tanzania'))
    }
    ]
});

chart.addSeries({
    name: 'Eisai',
    type: 'mapline',
    lineWidth: 1,
    color: '#f412ac',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'China',
        path: pointsToPath(eisaiPoint, chart.get('China'))
    }
    ]
});


chart.addSeries({
    name: 'Eli Lilly and Company',
    type: 'mapline',
    lineWidth: 1,
    color: '#ed1d24',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'Brazil',
        path: pointsToPath(elilillyPoint, chart.get('Brazil'))
    },
    {
        id: 'China',
        path: pointsToPath(elilillyPoint, chart.get('China'))
    },
    {
        id: 'India',
        path: pointsToPath(elilillyPoint, chart.get('India'))
    },
    {
        id: 'Mexico',
        path: pointsToPath(elilillyPoint, chart.get('Mexico'))
    },
    {
        id: 'Russia',
        path: pointsToPath(elilillyPoint, chart.get('Russia'))
    },
    {
        id: 'South Africa',
        path: pointsToPath(elilillyPoint, chart.get('South Africa'))
    },
    {
        id: 'United States of America',
        path: pointsToPath(elilillyPoint, chart.get('United States of America'))
    }
    ]
});


chart.addSeries({
    name: 'Pfizer Foundation',
    type: 'mapline',
    lineWidth: 1,
    color: '#007CC2',
    tooltip: {
        style: {
            //fontWeight: 'bold',
            fontFamily:'BrandonGrotesqueWeb-Medium'
        },
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h6 style="margin-bottom:0px;">{point.id}</h6></th></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    data: [{
        id: 'Vietnam',
        path: pointsToPath(pfizerfoundationPoint, chart.get('Vietnam'))
    },
    {
        id: 'Peru',
        path: pointsToPath(pfizerfoundationPoint, chart.get('Peru'))
    },
    {
        id: 'Brazil',
        path: pointsToPath(pfizerfoundationPoint, chart.get('Brazil'))
    },
    {
        id: 'Indonesia',
        path: pointsToPath(pfizerfoundationPoint, chart.get('Indonesia'))
    },
    {
        id: 'India',
        path: pointsToPath(pfizerfoundationPoint, chart.get('India'))
    }
    ]
});