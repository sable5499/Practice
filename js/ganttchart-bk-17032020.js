$(document).ready(function() {

    var ganttchartcontainer = Highcharts.ganttChart('ganttchartcontainer', {

        chart: {
            backgroundColor: '#eaeaea',
            style: {
                fontFamily: 'BrandonGrotesqueWeb-Medium'
            },
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


        yAxis: {
            uniqueNames: true,
            labels: {
                useHTML: true,
                style:{
                    width: '150px',
                    // width: '200px',
                    // height: '18px'
                }
            }
        },

        navigator: {
            enabled: true,
            liveRedraw: true,
            series: {
                type: 'gantt',
                pointPlacement: 0.5,
                pointPadding: 0.25
            },
            yAxis: {
                min: 0,
                max: 3,
                reversed: true,
                categories: []
            }
        },
        scrollbar: {
            enabled: true
        },
        rangeSelector: {
            enabled: true,
            selected: 5
        },

        series: [
            // AA Committee teams
            {
                name: 'AA Committee teams',
                color: '#005B9A',
                data: [
                    {
                        name: 'AA Committee teams',
                        color: '#005B9A',
                        id: 'aa_committee_teams',
                        owner: 'AA Committee teams',
                    },
                    // ad-hoc advisory group
                    {
                        name: 'Ad-hoc Advisory Group',
                        color: '#005B9A',
                        id: 'ad-hoc_advisory_group',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                    },
                    {
                        name: 'Call',
                        color: '#005B9A',
                        id: 'ad-hoc_advisory_group_call1',
                        parent: 'ad-hoc_advisory_group',
                        owner: 'Ad-hoc Advisory Group',
                        start: Date.UTC(2020, 3, 20),
                        end: Date.UTC(2020, 3, 20),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Call',
                        color: '#005B9A',
                        id: 'ad-hoc_advisory_group_call2',
                        parent: 'ad-hoc_advisory_group',
                        owner: 'Ad-hoc Advisory Group',
                        start: Date.UTC(2020, 1, 18),
                        end: Date.UTC(2020, 1, 18),
                        completed: {
                            amount: 0
                        },
                    },
                    //Communications team 
                    {
                        name: 'Communications team',
                        color: '#005B9A',
                        id: 'communications_team',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                    },
                    // 2020 Communications Plan
                    {
                        name: '2020 Communications Plan',
                        color: '#005B9A',
                        id: '2020communications_plan',
                        owner: 'Communications team',
                        parent: 'communications_team',
                    },
                    {
                        name: 'Share the Comms strategy with AA comms leads',
                        color: '#005B9A',
                        id: 'plan1',
                        parent: '2020communications_plan',
                        owner: '2020 Communications Plan',
                        start: Date.UTC(2020, 0, 29),
                        end: Date.UTC(2020, 0, 29),
                        completed: {
                            amount: 1
                        },
                    },
                    {
                        name: 'Present comms update to Steering Committee',
                        color: '#005B9A',
                        id: 'plan2',
                        parent: '2020communications_plan',
                        owner: '2020 Communications Plan',
                        start: Date.UTC(2020, 2, 3),
                        end: Date.UTC(2020, 2, 3),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Share communications plan on comms call',
                        color: '#005B9A',
                        id: 'plan3',
                        parent: '2020communications_plan',
                        owner: '2020 Communications Plan',
                        start: Date.UTC(2020, 0, 29),
                        end: Date.UTC(2020, 0, 29),
                        completed: {
                            amount: 1
                        },
                    },
                    // Key Event Support
                    {
                        name: 'Key Event Support',
                        color: '#005B9A',
                        id: 'key_event_support',
                        owner: 'Communications team',
                        parent: 'communications_team',
                    },
                    // 2020 Communications Innovation Summit in Tokyo
                    {
                        name: '2020 Communications Innovation Summit in Tokyo',
                        color: '#005B9A',
                        id: '2020_cis_tokyo',
                        owner: 'Key Event Support',
                        parent: 'key_event_support'
                    },
                    {
                        name: 'WS to determine  agenda and plan for Communications Workshop in Tokyo on margins of SC meeting with Japanese companies',
                        color: '#005B9A',
                        id: '2020_cis_tokyo1',
                        parent: '2020_cis_tokyo',
                        owner: '2020 Communications Innovation Summit in Tokyo',
                        start: Date.UTC(2020, 1, 11),
                        end: Date.UTC(2020, 2, 17),
                        completed: {
                            amount: 0.26
                        },
                    },
                    // BCR 
                    {
                        name: 'BCR',
                        color: '#005B9A',
                        id: 'bcr',
                        owner: 'Key Event Support',
                        parent: 'key_event_support'
                    },
                    {
                        name: 'BCR: May 25-26',
                        color: '#005B9A',
                        id: 'bcr1',
                        parent: 'bcr',
                        owner: 'BCR',
                        start: Date.UTC(2020, 4, 25),
                        end: Date.UTC(2020, 4, 26),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Materials prep',
                        color: '#005B9A',
                        id: 'bcr2',
                        parent: 'bcr',
                        owner: 'BCR',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Speaker outreach; materials prep',
                        color: '#005B9A',
                        id: 'bcr3',
                        parent: 'bcr',
                        owner: 'BCR',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    // Devex World 2020
                    {
                        name: 'Devex World 2020',
                        color: '#005B9A',
                        id: 'devex_2020',
                        owner: 'Key Event Support',
                        parent: 'key_event_support'
                    },
                    {
                        name: 'WS to set up call with WB and Devex to clarify roles and responsibilities',
                        color: '#005B9A',
                        id: 'devex_20201',
                        parent: 'devex_2020',
                        owner: 'Devex World 2020',
                        start: Date.UTC(2020, 1, 11),
                        end: Date.UTC(2020, 1, 14),
                        completed: {
                            amount: 1
                        },
                    },
                    {
                        name: 'WS to shared updated contract with James',
                        color: '#005B9A',
                        id: 'devex_20202',
                        parent: 'devex_2020',
                        owner: 'Devex World 2020',
                        start: Date.UTC(2020, 1, 7),
                        end: Date.UTC(2020, 1, 11),
                        completed: {
                            amount: 1
                        },
                    },
                    {
                        name: 'Develop concept note of the event',
                        color: '#005B9A',
                        id: 'devex_20203',
                        parent: 'devex_2020',
                        owner: 'Devex World 2020',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Search date with WB, Annie',
                        color: '#005B9A',
                        id: 'devex_20204',
                        parent: 'devex_2020',
                        owner: 'Devex World 2020',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 1, 14),
                        completed: {
                            amount: 1
                        },
                    },
                    {
                        name: 'Event date',
                        color: '#005B9A',
                        id: 'devex_20205',
                        parent: 'devex_2020',
                        owner: 'Devex World 2020',
                        start: Date.UTC(2020, 5, 8),
                        end: Date.UTC(2020, 5, 8),
                        completed: {
                            amount: 0
                        },
                    },
                    // UNGA Side Event
                    {
                        name: 'UNGA Side Event',
                        color: '#005B9A',
                        id: 'ungase',
                        owner: 'Key Event Support',
                        parent: 'key_event_support'
                    },
                    {
                        name: 'Event week of Sep. 21',
                        color: '#005B9A',
                        id: 'ungase1',
                        parent: 'ungase',
                        owner: 'UNGA Side Event',
                        start: Date.UTC(2020, 8, 21),
                        end: Date.UTC(2020, 8, 25),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Planning',
                        color: '#005B9A',
                        id: 'ungase2',
                        parent: 'ungase',
                        owner: 'UNGA Side Event',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 7, 31),
                        completed: {
                            amount: 0.08
                        },
                    },
                    // Member Company Communications
                    {
                        name: 'Member Company Communications',
                        color: '#005B9A',
                        id: 'mcc',
                        owner: 'Communications team',
                        parent: 'communications_team',
                    },
                    // Bi-Annual Analytics Call (KPI updates)
                    {
                        name: 'Bi-Annual Analytics Call (KPI updates)',
                        color: '#005B9A',
                        id: 'baac',
                        owner: 'Member Company Communications',
                        parent: 'mcc',
                    },
                    {
                        name: '2 (TBC)',
                        color: '#005B9A',
                        id: 'baac2',
                        parent: 'baac',
                        owner: 'Bi-Annual Analytics Call (KPI updates)',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 9, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: '1 (TBC)',
                        color: '#005B9A',
                        id: 'baac1',
                        parent: 'baac',
                        owner: 'Bi-Annual Analytics Call (KPI updates)',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 1, 28),
                        completed: {
                            amount: 0.68
                        },
                    },
                    //Monthly Email Update (Media analysis and social tools)
                    {
                        name: 'Monthly Email Update (Media analysis and social tools)',
                        color: '#005B9A',
                        id: 'meu',
                        owner: 'Member Company Communications',
                        parent: 'mcc',
                    },
                    {
                        name: 'Send first week of each month',
                        color: '#005B9A',
                        id: 'meu1',
                        parent: 'meu',
                        owner: 'Monthly Email Update (Media analysis and social tools)',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    //Quarterly Comms Leads Call
                    {
                        name: 'Quarterly Comms Leads Call',
                        color: '#005B9A',
                        id: 'qclc',
                        owner: 'Member Company Communications',
                        parent: 'mcc',
                    },
                    {
                        name: 'End of year comms leads call',
                        color: '#005B9A',
                        id: 'qclc1',
                        parent: 'qclc',
                        owner: 'Quarterly Comms Leads Call',
                        start: Date.UTC(2020, 11, 3),
                        end: Date.UTC(2020, 11, 3),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Q4',
                        color: '#005B9A',
                        id: 'qclc2',
                        parent: 'qclc',
                        owner: 'Quarterly Comms Leads Call',
                        start: Date.UTC(2020, 8, 29),
                        end: Date.UTC(2020, 8, 29),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Q3',
                        color: '#005B9A',
                        id: 'qclc3',
                        parent: 'qclc',
                        owner: 'Quarterly Comms Leads Call',
                        start: Date.UTC(2020, 5, 25),
                        end: Date.UTC(2020, 5, 25),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Q2',
                        color: '#005B9A',
                        id: 'qclc4',
                        parent: 'qclc',
                        owner: 'Quarterly Comms Leads Call',
                        start: Date.UTC(2020, 3, 30),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Q1 Jan 29',
                        color: '#005B9A',
                        id: 'qclc5',
                        parent: 'qclc',
                        owner: 'Quarterly Comms Leads Call',
                        start: Date.UTC(2020, 0, 29),
                        end: Date.UTC(2020, 0, 29),
                        completed: {
                            amount: 1
                        },
                    },
                    // Steering Committee meetings
                    {
                        name: 'Steering Committee meetings',
                        color: '#005B9A',
                        id: 'scm',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                    },
                    {
                        name: 'Steering Committee in person meeting (TBC)',
                        color: '#005B9A',
                        id: 'scm1',
                        parent: 'scm',
                        owner: 'Steering Committee meetings',
                        start: Date.UTC(2020, 10, 18),
                        end: Date.UTC(2020, 10, 19),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Steering Committee call/in person meeting (UNGA TBC)',
                        color: '#005B9A',
                        id: 'scm2',
                        parent: 'scm',
                        owner: 'Steering Committee meetings',
                        start: Date.UTC(2020, 8, 22),
                        end: Date.UTC(2020, 8, 22),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Steering Committee in person meeting',
                        color: '#005B9A',
                        id: 'scm3',
                        parent: 'scm',
                        owner: 'Steering Committee meetings',
                        start: Date.UTC(2020, 5, 18),
                        end: Date.UTC(2020, 5, 19),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Steering Committee call for BCR prep',
                        color: '#005B9A',
                        id: 'scm4',
                        parent: 'scm',
                        owner: 'Steering Committee meetings',
                        start: Date.UTC(2020, 3, 28),
                        end: Date.UTC(2020, 3, 28),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Steering Committee call',
                        color: '#005B9A',
                        id: 'scm5',
                        parent: 'scm',
                        owner: 'Steering Committee meetings',
                        start: Date.UTC(2020, 2, 3),
                        end: Date.UTC(2020, 2, 3),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Steering Committee call',
                        color: '#005B9A',
                        id: 'scm6',
                        parent: 'scm',
                        owner: 'Steering Committee meetings',
                        start: Date.UTC(2019, 9, 23),
                        end: Date.UTC(2019, 9, 23),
                        completed: {
                            amount: 1
                        },
                    },
                    {
                        name: 'In-person Steering Committee meeting in Geneva',
                        color: '#005B9A',
                        id: 'scm7',
                        parent: 'scm',
                        owner: 'Steering Committee meetings',
                        start: Date.UTC(2019, 11, 4),
                        end: Date.UTC(2019, 11, 4),
                        completed: {
                            amount: 1
                        },
                    },
                    {
                        name: 'In-person Steering Committee meeting in Tokyo',
                        color: '#005B9A',
                        id: 'scm8',
                        parent: 'scm',
                        owner: 'Steering Committee meetings',
                        start: Date.UTC(2019, 7, 27),
                        end: Date.UTC(2019, 7, 30),
                        completed: {
                            amount: 1
                        },
                    },
                    {
                        name: 'In-person Steering Committee Dinner in NYC',
                        color: '#005B9A',
                        id: 'scm9',
                        parent: 'scm',
                        owner: 'Steering Committee meetings',
                        start: Date.UTC(2019, 8, 26),
                        end: Date.UTC(2019, 8, 26),
                        completed: {
                            amount: 1
                        },
                    },
                    {
                        name: 'Steering Committee call',
                        color: '#005B9A',
                        id: 'scm10',
                        parent: 'scm',
                        owner: 'Steering Committee meetings',
                        start: Date.UTC(2019, 2, 13),
                        end: Date.UTC(2019, 2, 13),
                        completed: {
                            amount: 1
                        },
                    }
                ],
            },

            // BCR CEO Roundtable
            {
                name: 'BCR CEO Roundtable',
                color: '#005B9A',
                data: [
                    {
                        name: 'BCR CEO Roundtable',
                        color: '#005B9A',
                        id: 'bcrceor',
                        owner: 'BCR CEO Roundtable',
                    },
                    {
                        name: 'Share BCR doc with Advisory group',
                        color: '#005B9A',
                        id: 'bcrceor1',
                        parent: 'bcrceor',
                        owner: 'BCR CEO Roundtable',
                        start: Date.UTC(2020, 3, 13),
                        end: Date.UTC(2020, 3, 13),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'BCR doc delivered to Thomas',
                        color: '#005B9A',
                        id: 'bcrceor2',
                        parent: 'bcrceor',
                        owner: 'BCR CEO Roundtable',
                        start: Date.UTC(2020, 4, 4),
                        end: Date.UTC(2020, 4, 4),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Share the BCR doc with SC',
                        color: '#005B9A',
                        id: 'bcrceor3',
                        parent: 'bcrceor',
                        owner: 'BCR CEO Roundtable',
                        start: Date.UTC(2020, 3, 17),
                        end: Date.UTC(2020, 3, 17),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'BCR meeting in Brussel',
                        color: '#005B9A',
                        id: 'bcrceor4',
                        parent: 'bcrceor',
                        owner: 'BCR CEO Roundtable',
                        start: Date.UTC(2020, 4, 25),
                        end: Date.UTC(2020, 4, 26),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'BCR doc delivered to sherpas',
                        color: '#005B9A',
                        id: 'bcrceor5',
                        parent: 'bcrceor',
                        owner: 'BCR CEO Roundtable',
                        start: Date.UTC(2020, 4, 11),
                        end: Date.UTC(2020, 4, 11),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Secretariat prepare BCR doc and slides',
                        color: '#005B9A',
                        id: 'bcrceor6',
                        parent: 'bcrceor',
                        owner: 'BCR CEO Roundtable',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'CEO Roundtable meeting 2nd',
                        color: '#005B9A',
                        id: 'bcrceor7',
                        parent: 'bcrceor',
                        owner: 'BCR CEO Roundtable',
                        start: Date.UTC(2019, 10, 14),
                        end: Date.UTC(2019, 10, 15),
                        completed: {
                            amount: 1
                        },
                    },
                    {
                        name: 'CEO Roundtable meeting 1st',
                        color: '#005B9A',
                        id: 'bcrceor8',
                        parent: 'bcrceor',
                        owner: 'BCR CEO Roundtable',
                        start: Date.UTC(2019, 5, 6),
                        end: Date.UTC(2019, 5, 7),
                        completed: {
                            amount: 1
                        },
                    },

                ]
            },
            // event
            {
                name: 'Event',
                color: '#237F58',
                data: [
                    {
                        name: 'Event',
                        color: '#237F58',
                        id: 'event',
                        owner: 'Event',
                    },
                    // UNGA
                    {
                        name: 'UNGA',
                        color: '#237F58',
                        id: 'unga',
                        owner: 'Event',
                        parent: 'event',
                    },
                    {
                        name: 'WS and Secretariat to draft concept note and share with Comms team',
                        color: '#237F58',
                        id: 'unga1',
                        parent: 'unga',
                        start: Date.UTC(2020,5,1),
                        end: Date.UTC(2020,7,31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'WS looking for venue and speakers',
                        color: '#237F58',
                        id: 'unga2',
                        parent: 'unga',
                        start: Date.UTC(2020,1,3),
                        end: Date.UTC(2020,5,1),
                        completed: {
                            amount: 0.14
                        },
                    },
                    {
                        name: 'Event date',
                        color: '#237F58',
                        id: 'unga3',
                        parent: 'unga',
                        start: Date.UTC(2020,8,21),
                        end: Date.UTC(2020,8,21),
                        completed: {
                            amount: 0
                        },
                    },
                    // WHA 
                    {
                        name: 'WHA',
                        color: '#237F58',
                        id: 'wha',
                        owner: 'Event',
                        parent: 'event',
                    },
                    {
                        name: 'IFPMA WHA event',
                        color: '#237F58',
                        id: 'wha1',
                        parent: 'wha',
                        start: Date.UTC(2020,4,20),
                        end: Date.UTC(2020,4,20),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'IFPMA & AA joint breakfast',
                        color: '#237F58',
                        id: 'wha2',
                        parent: 'wha',
                        start: Date.UTC(2020,4,20),
                        end: Date.UTC(2020,4,20),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Secretariat meeting on WHA event (e.g. dinner? reception?)',
                        color: '#237F58',
                        id: 'wha3',
                        parent: 'wha',
                        start: Date.UTC(2020,2,9),
                        end: Date.UTC(2020,2,9),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Event date',
                        color: '#237F58',
                        id: 'wha4',
                        parent: 'wha',
                        start: Date.UTC(2020,4,18),
                        end: Date.UTC(2020,4,18),
                        completed: {
                            amount: 0
                        },
                    },
                ]
            },

            // Partners
            {
                name: 'Partners',
                color: '#A5247A',
                data: [
                    {
                        name: 'Partners',
                        color: '#A5247A',
                        id: 'partners',
                        owner: 'Partners',
                    },
                    // Partners > Path
                    {
                        name: 'PATH',
                        color: '#A5247A',
                        id: 'path',
                        owner: 'Partners',
                        parent: 'partners',
                    },
                    // Partners > Path > 2020
                    {
                        name: '2020',
                        color: '#A5247A',
                        id: '2020',
                        owner: 'PATH',
                        parent: 'path',
                    }, 
                    // Partners > Path > 2020 > Ghana
                    {
                        name: 'Ghana',
                        color: '#A5247A',
                        id: 'ghana',
                        owner: '2020',
                        parent: '2020',
                    },
                    // Partners > Path > 2020 > Ghana > Create enabling policy environments
                    {
                        name: 'Create enabling policy environments',
                        color: '#A5247A',
                        id: 'cepe',
                        owner: 'Ghana',
                        parent: 'ghana',
                    },
                    {
                        name: 'PATH staff seconded to MoH; Routine TWG established to report into Steering Committee',
                        color: '#A5247A',
                        id: 'cepe1',
                        owner: 'Create enabling policy environments',
                        parent: 'cepe',
                        start: Date.UTC(2020,0,1),
                        end: Date.UTC(2020,2,31),
                        completed: {
                            amount: 0.56
                        },
                    },
                    {
                        name: 'Planning initiated for National NCD Conference; National dissemination of Ghana NCD Strategy',
                        color: '#A5247A',
                        id: 'cepe2',
                        owner: 'Create enabling policy environments',
                        parent: 'cepe',
                        start: Date.UTC(2020,3,1),
                        end: Date.UTC(2020,5,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'National NCD webpage launched; Awareness campaigns activated',
                        color: '#A5247A',
                        id: 'cepe3',
                        owner: 'Create enabling policy environments',
                        parent: 'cepe',
                        start: Date.UTC(2020,6,1),
                        end: Date.UTC(2020,8,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'NCD Navigator informs national NCD Steering Committee and technical working group decisions',
                        color: '#A5247A',
                        id: 'cepe4',
                        owner: 'Create enabling policy environments',
                        parent: 'cepe',
                        start: Date.UTC(2020,9,1),
                        end: Date.UTC(2020,11,31),
                        completed: {
                            amount: 0
                        },
                    },
                    // Partners > Path > 2020 > Ghana > Enable data driven decision-making
                    {
                        name: 'Enable data driven decision-making',
                        color: '#A5247A',
                        id: 'edddm',
                        owner: 'Ghana',
                        parent: 'ghana',
                    },
                    // Partners > Path > 2020 > Ghana > Enable data driven decision-making > Data Quality
                    {
                        name: 'Data Quality',
                        color: '#A5247A',
                        id: 'dq',
                        owner: 'Enable data driven decision-making',
                        parent: 'edddm',
                    },
                    {
                        name: 'Service delivery data quality assessed',
                        color: '#A5247A',
                        id: 'dq1',
                        owner: 'Data Quality',
                        parent: 'dq',
                        start: Date.UTC(2020,0,1),
                        end: Date.UTC(2020,2,31),
                        completed: {
                            amount: 0.56
                        },
                    },
                    {
                        name: 'DQA tools developed to support data collection',
                        color: '#A5247A',
                        id: 'dq2',
                        owner: 'Data Quality',
                        parent: 'dq',
                        start: Date.UTC(2020,3,1),
                        end: Date.UTC(2020,5,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Data review meetings established',
                        color: '#A5247A',
                        id: 'dq3',
                        owner: 'Data Quality',
                        parent: 'dq',
                        start: Date.UTC(2020,6,1),
                        end: Date.UTC(2020,8,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'NCD e-tracker piloted',
                        color: '#A5247A',
                        id: 'dq4',
                        owner: 'Data Quality',
                        parent: 'dq',
                        start: Date.UTC(2020,8,1),
                        end: Date.UTC(2020,11,31),
                        completed: {
                            amount: 0
                        },
                    },
                    // Partners > Path > 2020 > Ghana > Enable data driven decision-making > NCD Navigator
                    {
                        name: 'NCD Navigator',
                        color: '#A5247A',
                        id: 'nn',
                        owner: 'Enable data driven decision-making',
                        parent: 'edddm',
                    },
                    {
                        name: 'NCD Navigator adopted by GHS/MoH',
                        color: '#A5247A',
                        id: 'nn1',
                        owner: 'NCD Navigator',
                        parent: 'nn',
                        start: Date.UTC(2020,0,1),
                        end: Date.UTC(2020,2,31),
                        completed: {
                            amount: 0.56
                        },
                    },
                    {
                        name: 'Data collection complete',
                        color: '#A5247A',
                        id: 'nn2',
                        owner: 'NCD Navigator',
                        parent: 'nn',
                        start: Date.UTC(2020,3,1),
                        end: Date.UTC(2020,5,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Results and recommendations for update disseminated data',
                        color: '#A5247A',
                        id: 'nn3',
                        owner: 'NCD Navigator',
                        parent: 'nn',
                        start: Date.UTC(2020,6,1),
                        end: Date.UTC(2020,8,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'NCD Navigator informs multi-company investments and grant submissions',
                        color: '#A5247A',
                        id: 'nn4',
                        owner: 'NCD Navigator',
                        parent: 'nn',
                        start: Date.UTC(2020,9,1),
                        end: Date.UTC(2020,11,31),
                        completed: {
                            amount: 0
                        },
                    },
                    // Partners > Path > 2020 > Kenya
                    {
                        name: 'Kenya',
                        color: '#A5247A',
                        id: 'kenya',
                        owner: '2020',
                        parent: '2020',
                    },
                    // Partners > Path > 2020 > Kenya > Create enabling policy environments
                    {
                        name: 'Create enabling policy environments',
                        color: '#A5247A',
                        id: 'kenyacepe',
                        owner: 'Kenya',
                        parent: 'kenya',
                    },
                    {
                        name: 'PATH staff seconded to MoH; Routine TWG meetings for priority NCDs held quarterly',
                        color: '#A5247A',
                        id: 'kenyacepe1',
                        owner: 'Create enabling policy environments',
                        parent: 'kenyacepe',
                        start: Date.UTC(2020,0,1),
                        end: Date.UTC(2020,2,31),
                        completed: {
                            amount: 0.56
                        },
                    },
                    {
                        name: 'NCD Navigator informs national and county TWG decisions',
                        color: '#A5247A',
                        id: 'kenyacepe2',
                        owner: 'Create enabling policy environments',
                        parent: 'kenyacepe',
                        start: Date.UTC(2020,3,1),
                        end: Date.UTC(2020,5,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'One digital innovation grant awarded; NCD Strategy complete',
                        color: '#A5247A',
                        id: 'kenyacepe3',
                        owner: 'Create enabling policy environments',
                        parent: 'kenyacepe',
                        start: Date.UTC(2020,6,1),
                        end: Date.UTC(2020,8,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'County dissemination of National NCD Strategy',
                        color: '#A5247A',
                        id: 'kenyacepe4',
                        owner: 'Create enabling policy environments',
                        parent: 'kenyacepe',
                        start: Date.UTC(2020,9,1),
                        end: Date.UTC(2020,11,31),
                        completed: {
                            amount: 0
                        },
                    },
                    // Partners > Path > 2020 > Kenya > Enable data driven decision-making
                    {
                        name: 'Enable data driven decision-making',
                        color: '#A5247A',
                        id: 'kenyaedddm',
                        owner: 'Kenya',
                        parent: 'kenya',
                    },
                    // Partners > Path > 2020 > Kenya > Enable data driven decision-making > Data Quality 
                    {
                        name: 'Data Quality',
                        color: '#A5247A',
                        id: 'kenyadq',
                        owner: 'Enable data driven decision-making',
                        parent: 'kenyaedddm',
                    },
                    {
                        name: 'Tools disseminated in all counties',
                        color: '#A5247A',
                        id: 'kenyadq1',
                        owner: 'Data Quality',
                        parent: 'kenyadq',
                        start: Date.UTC(2020,0,1),
                        end: Date.UTC(2020,2,31),
                        completed: {
                            amount: 0.56
                        },
                    },
                    {
                        name: 'Training and mentoring of NCD Focal Persons',
                        color: '#A5247A',
                        id: 'kenyadq2',
                        owner: 'Data Quality',
                        parent: 'kenyadq',
                        start: Date.UTC(2020,3,1),
                        end: Date.UTC(2020,5,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Data review meetings established',
                        color: '#A5247A',
                        id: 'kenyadq2',
                        owner: 'Data Quality',
                        parent: 'kenyadq',
                        start: Date.UTC(2020,6,1),
                        end: Date.UTC(2020,8,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Data quality assurance process established',
                        color: '#A5247A',
                        id: 'kenyadq2',
                        owner: 'Data Quality',
                        parent: 'kenyadq',
                        start: Date.UTC(2020,10,1),
                        end: Date.UTC(2020,11,31),
                        completed: {
                            amount: 0
                        },
                    },

                    // Partners > Path > 2020 > Kenya > Enable data driven decision-making > NCD Navigator
                    {
                        name: 'NCD Navigator',
                        color: '#A5247A',
                        id: 'kenyann',
                        owner: 'Enable data driven decision-making',
                        parent: 'kenyaedddm',
                    },
                    {
                        name: 'NCD Navigator adopted by National and County MoH',
                        color: '#A5247A',
                        id: 'kenyann1',
                        owner: 'NCD Navigator',
                        parent: 'kenyann',
                        start: Date.UTC(2020,0,1),
                        end: Date.UTC(2020,0,31),
                        completed: {
                            amount: 0.56
                        },
                    },
                    {
                        name: 'NCD Navigator informs multi-company investments and grant submissions',
                        color: '#A5247A',
                        id: 'kenyann2',
                        owner: 'NCD Navigator',
                        parent: 'kenyann',
                        start: Date.UTC(2020,3,1),
                        end: Date.UTC(2020,5,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'NCD Navigator informs New NCD Strategy and TWG workplans and company investments',
                        color: '#A5247A',
                        id: 'kenyann3',
                        owner: 'NCD Navigator',
                        parent: 'kenyann',
                        start: Date.UTC(2020,6,1),
                        end: Date.UTC(2020,9,30),
                        completed: {
                            amount: 0
                        },
                    },
                    // Partners > Path > 2020 > Vietnam
                    {
                        name: 'Vietnam',
                        color: '#A5247A',
                        id: 'vietnam',
                        owner: '2020',
                        parent: '2020',
                    },
                    // Partners > Path > 2020 > Vietnam > Create enabling policy environments
                    {
                        name: 'Create enabling policy environments',
                        color: '#A5247A',
                        id: 'vietnamcepe',
                        owner: 'Vietnam',
                        parent: 'vietnam',
                    },
                    {
                        name: 'TWG meeting conducted to review NCD efforts and planning',
                        color: '#A5247A',
                        id: 'vietnamcepe1',
                        owner: 'Create enabling policy environments',
                        parent: 'vietnamcepe',
                        start: Date.UTC(2020,0,1),
                        end: Date.UTC(2020,2,31),
                        completed: {
                            amount: 0.56
                        },
                    },
                    {
                        name: 'Policy/mechanisms on private sector engagement developed',
                        color: '#A5247A',
                        id: 'vietnamcepe2',
                        owner: 'Create enabling policy environments',
                        parent: 'vietnamcepe',
                        start: Date.UTC(2020,6,1),
                        end: Date.UTC(2020,8,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'National standardised training packages available on the GDPM and Healthy Vietnam websites',
                        color: '#A5247A',
                        id: 'vietnamcepe3',
                        owner: 'Create enabling policy environments',
                        parent: 'vietnamcepe',
                        start: Date.UTC(2020,9,1),
                        end: Date.UTC(2020,11,31),
                        completed: {
                            amount: 0
                        },
                    },
                    // Partners > Path > 2020 > Vietnam > Enable data driven decision making
                    {
                        name: 'Enable data driven decision making',
                        color: '#A5247A',
                        id: 'vietnamedddm',
                        owner: 'Vietnam',
                        parent: 'vietnam',
                    },
                    {
                        name: 'Regulation for data sharing between curative and preventive medicines systems developed',
                        color: '#A5247A',
                        id: 'vietnamedddm1',
                        owner: 'Enable data driven decision making',
                        parent: 'vietnamedddm',
                        start: Date.UTC(2020,0,1),
                        end: Date.UTC(2020,2,31),
                        completed: {
                            amount: 0.56
                        },
                    },
                    {
                        name: 'Regulation for data sharing between curative and preventive medicines systems finalized',
                        color: '#A5247A',
                        id: 'vietnamedddm2',
                        owner: 'Enable data driven decision making',
                        parent: 'vietnamedddm',
                        start: Date.UTC(2020,3,1),
                        end: Date.UTC(2020,5,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Regulation for data sharing between curative and preventive medicines systems disseminated',
                        color: '#A5247A',
                        id: 'vietnamedddm3',
                        owner: 'Enable data driven decision making',
                        parent: 'vietnamedddm',
                        start: Date.UTC(2020,6,1),
                        end: Date.UTC(2020,8,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Reporting indicators for the NCD HIS finalized',
                        color: '#A5247A',
                        id: 'vietnamedddm4',
                        owner: 'Enable data driven decision making',
                        parent: 'vietnamedddm',
                        start: Date.UTC(2020,9,1),
                        end: Date.UTC(2020,11,31),
                        completed: {
                            amount: 0
                        },
                    },
                    // Partners > WHF
                    {
                        name: 'WHF',
                        color: '#A5247A',
                        id: 'whf',
                        owner: 'Partners',
                        parent: 'partners',
                    },
                    // Partners > Path > 2020
                    {
                        name: '2020',
                        color: '#A5247A',
                        id: 'whf2020',
                        owner: 'WHF',
                        parent: 'whf',
                    }, 
                    // Partners > Path > 2020 > CVD Guideline dissemination
                    {
                        name: 'CVD Guideline dissemination',
                        color: '#A5247A',
                        id: 'cvdgd',
                        owner: '2020',
                        parent: 'whf2020',
                    },
                    {
                        name: 'Conduct end line survey for year 1',
                        color: '#A5247A',
                        id: 'cvdgd1',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,9,1),
                        end: Date.UTC(2020,11,31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Monitor uptake and utilization of digital tools and data collection tools',
                        color: '#A5247A',
                        id: 'cvdgd2',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,9,1),
                        end: Date.UTC(2020,11,31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Ongoing work with the community support groups',
                        color: '#A5247A',
                        id: 'cvdgd3',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,9,1),
                        end: Date.UTC(2020,11,31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Set up (patient) community support groups',
                        color: '#A5247A',
                        id: 'cvdgd4',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,9,1),
                        end: Date.UTC(2020,11,31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Conduct training & guideline dissemination in 20-30 facilities per county',
                        color: '#A5247A',
                        id: 'cvdgd5',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,9,1),
                        end: Date.UTC(2020,11,31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Show case best practices from county level at the KCS Annual Scientific Congress',
                        color: '#A5247A',
                        id: 'cvdgd6',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,6,1),
                        end: Date.UTC(2020,8,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Distribute guidelines, Job AIDs and data collection tools',
                        color: '#A5247A',
                        id: 'cvdgd7',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,6,1),
                        end: Date.UTC(2020,8,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Prepare & disseminate seminar reports',
                        color: '#A5247A',
                        id: 'cvdgd7',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,6,1),
                        end: Date.UTC(2020,8,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Conduct 3 off-site dissemination sessions using the ECHO platform',
                        color: '#A5247A',
                        id: 'cvdgd8',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,6,1),
                        end: Date.UTC(2020,8,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'At county-level, conduct 2 on-site training seminars per county',
                        color: '#A5247A',
                        id: 'cvdgd9',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,6,1),
                        end: Date.UTC(2020,8,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Conduct baseline',
                        color: '#A5247A',
                        id: 'cvdgd10',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,6,1),
                        end: Date.UTC(2020,8,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Engage county and sub-country teams for the county-level trainings',
                        color: '#A5247A',
                        id: 'cvdgd11',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,3,1),
                        end: Date.UTC(2020,5,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Conduct training & share training report',
                        color: '#A5247A',
                        id: 'cvdgd12',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,3,1),
                        end: Date.UTC(2020,5,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Develop training content & digital support tools',
                        color: '#A5247A',
                        id: 'cvdgd13',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,3,1),
                        end: Date.UTC(2020,5,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Identity Train the Trainers (ToT) workshop participants and facilitators',
                        color: '#A5247A',
                        id: 'cvdgd14',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,3,1),
                        end: Date.UTC(2020,5,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Print CVD guidelines, Job AIDs, handbooks and MOH data collection tools',
                        color: '#A5247A',
                        id: 'cvdgd15',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,3,1),
                        end: Date.UTC(2020,5,30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Consultative discussions with HIV programme team on use of the ECHO training platform (remote learning platform)',
                        color: '#A5247A',
                        id: 'cvdgd16',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,0,1),
                        end: Date.UTC(2020,2,31),
                        completed: {
                            amount: 0.56
                        },
                    },
                    {
                        name: 'County engagement and needs assessment',
                        color: '#A5247A',
                        id: 'cvdgd17',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,0,1),
                        end: Date.UTC(2020,2,31),
                        completed: {
                            amount: 0.56
                        },
                    },
                    {
                        name: 'County selection & consultation with MoH at national and county level',
                        color: '#A5247A',
                        id: 'cvdgd16',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,0,1),
                        end: Date.UTC(2020,2,31),
                        completed: {
                            amount: 0.56
                        },
                    },
                    {
                        name: 'Renewal of MOU (WHF-KCS)',
                        color: '#A5247A',
                        id: 'cvdgd16',
                        owner: 'CVD Guideline dissemination',
                        parent: 'cvdgd',
                        start: Date.UTC(2020,0,1),
                        end: Date.UTC(2020,2,31),
                        completed: {
                            amount: 0.56
                        },
                    },
                ]
            },

        ]
    });

    $("#toggleganttrows").click(function() {
        console.log(ganttchartcontainer);
        // ganttchartcontainer.yAxis[0].ticks[0.5].toggleCollapse();
        // ganttchartcontainer.yAxis[0].ticks[18.5].toggleCollapse();
        ganttchartcontainer.yAxis[0].ticks[1.5].toggleCollapse();
        ganttchartcontainer.yAxis[0].ticks[181.5].toggleCollapse();
        ganttchartcontainer.yAxis[0].ticks[217.5].toggleCollapse();
        ganttchartcontainer.yAxis[0].ticks[257.5].toggleCollapse();
    });

    $("#toggleganttrowsfull").click(function() {
        console.log(ganttchartcontainer);
        // ganttchartcontainer.yAxis[0].ticks[0.5].toggleCollapse();
        // ganttchartcontainer.yAxis[0].ticks[18.5].toggleCollapse();
        ganttchartcontainer.yAxis[0].ticks[1.5].toggleCollapse();
        ganttchartcontainer.yAxis[0].ticks[181.5].toggleCollapse();
        ganttchartcontainer.yAxis[0].ticks[217.5].toggleCollapse();
        ganttchartcontainer.yAxis[0].ticks[257.5].toggleCollapse();
    });

    $("#togglelabelfull").click(function() {
        $("#ganttchartcontainer .highcharts-data-label text").toggleClass('labelvisiblity');
    });

    $("#togglelabel").click(function() {
        $("#ganttchartcontainer .highcharts-data-label text").toggleClass('labelvisiblity');
    });


});