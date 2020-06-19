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
            scrollbar: {
                enabled: true,
                showFull: false
            },
            max:8,
           
            uniqueNames: false,
            labels: {
                useHTML: true,
                style:{
                    width: '250px'
                    // width: '200px',
                    // height: '18px'
                }
            }
        },
        // tooltip: {
        //     useHTML: true,
        //     headerFormat: '<table>',
        //     pointFormat: 
        //         '<tr><th>Strategies:</th><td>{point.z}%</td></tr>',
        //     footerFormat: '</table>',
        //     followPointer: true
        // },
    

        navigator: {
            enabled: true,
            liveRedraw: true,
            series: {
                type: 'gantt',
                pointPlacement: 0.5,
                pointPadding: 0.25
            },

            scrollbar: {
                enabled: true
            },
            
            yAxis: {
                
                
                min: 0,
                max: 3,
                reversed: true,
                categories: []
            }
        },
        
        
        rangeSelector: {
            enabled: true,
            selected: 4
        },
        tooltip: {
       
            formatter: function (tooltip) {
              var xyArr= tooltip.defaultFormatter.call(this,tooltip);
              console.log(xyArr);
              // return "<div class='tooltip'>" + xyArr +"</div>" + "Strategy: " + this.point.strategy;
              return xyArr.join(',').replace(/,/g,'') + "Strategies: " + this.point.strategy;
    
        },
    
    },

        series: [
            // AA Committee teams
            {
                name: 'AA Committee teams',
                color: '#f26333',
                data: [
                    {
                        name: 'AA Committee teams',
                        color: '#f26333',
                        id: 'aa_committee_teams',
                        owner: 'AA Committee teams',
                        strategy: ' ',
                        
                        
                    },
                    // Communications team group
                    {
                        name: 'Communications team',
                        color: '#f26333',
                        id: 'communications_team',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                        strategy: ' ',
                    },
                    // Key Event Support
                    {
                        name: 'Key Event Support',
                        color: '#f26333',
                        id: 'key_event_support',
                        owner: 'AA Committee teams',
                        parent: 'communications_team',
                        strategy: ' ',
                    },
                    {
                        name: 'BCR',
                        color: '#f26333',
                        id: 'bcr',
                        owner: 'AA Committee teams',
                        parent: 'key_event_support',
                        strategy: ' ',
                    },
                   
                    {
                        name: 'BCR: May 25-26',
                        color: '#f26333',
                        id: 'bcr_may_25_26',
                        parent: 'bcr',
                        owner: 'key_event_support',
                        start: Date.UTC(2020, 4, 25),
                        end: Date.UTC(2020, 4, 26),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Devex World 2020',
                        color: '#f26333',
                        id: 'devex_world_2020',
                        owner: 'AA Committee teams',
                        parent: 'key_event_support',
                        strategy: ' ',
                    },
                   
                    {
                        name: 'Develop concept note of the event',
                        color: '#f26333',
                        id: 'develop_concept_note_of_the_event',
                        parent: 'devex_world_2020',
                        owner: 'key_event_support',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Event date',
                        color: '#f26333',
                        id: 'event_date',
                        parent: 'devex_world_2020',
                        owner: 'key_event_support',
                        start: Date.UTC(2020, 5, 8),
                        end: Date.UTC(2020, 5, 8),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'UNGA Side Event',
                        color: '#f26333',
                        id: 'unga_side_event',
                        owner: 'AA Committee teams',
                        parent: 'key_event_support',
                        strategy: ' ',
                    },
                   
                    {
                        name: 'Event week of Sep. 21',
                        color: '#f26333',
                        id: 'event_week_sep21',
                        parent: 'unga_side_event',
                        owner: 'key_event_support',
                        start: Date.UTC(2020, 8, 21),
                        end: Date.UTC(2020, 8, 25),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Planning',
                        color: '#f26333',
                        id: 'planning',
                        parent: 'unga_side_event',
                        owner: 'key_event_support',
                        start: Date.UTC(2020, 11, 20),
                        end: Date.UTC(2020, 6, 17),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    // Member Company Communications
                    {
                        name: 'Member Company Communications',
                        color: '#f26333',
                        id: 'member_company_communications',
                        owner: 'AA Committee teams',
                        parent: 'communications_team',
                        strategy: ' ',
                    },
                    {
                        name: 'Bi-Annual Analytics Call (KPI updates)',
                        color: '#f26333',
                        id: 'bi_annual_analytics',
                        owner: 'AA Committee teams',
                        parent: 'member_company_communications',
                        strategy: ' ',
                    },
                    {
                        name: '2 (TBC)',
                        color: '#f26333',
                        id: 'tbc_2',
                        parent: 'bi_annual_analytics',
                        owner: 'member_company_communications',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 9, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: '1 (TBC)',
                        color: '#f26333',
                        id: 'tbc_1',
                        parent: 'bi_annual_analytics',
                        owner: 'member_company_communications',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 1, 28),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Monthly Email Update (Media analysis and social tools)',
                        color: '#f26333',
                        id: 'monthly_email_update',
                        owner: 'AA Committee teams',
                        parent: 'member_company_communications',
                        strategy: ' ',
                    },
                    {
                        name: 'Send first week of each month',
                        color: '#f26333',
                        id: 'send_first_week_of_each_month',
                        parent: 'monthly_email_update',
                        owner: 'Monthly Email Update (Media analysis and social tools)',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',

                    },
                    {
                        name: 'Quarterly Comms Leads Call',
                        color: '#f26333',
                        id: 'quarterly_comms_leads_call',
                        owner: 'AA Committee teams',
                        parent: 'member_company_communications',
                        strategy: ' ',
                    },
                    {
                        name: 'End of year comms leads call',
                        color: '#f26333',
                        id: 'end_of_year_comms_leads_call',
                        parent: 'quarterly_comms_leads_call',
                        owner: 'Monthly Email Update (Media analysis and social tools)',
                        start: Date.UTC(2020, 11, 3),
                        end: Date.UTC(2020, 11, 3),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Q4',
                        color: '#f26333',
                        id: 'q4',
                        parent: 'quarterly_comms_leads_call',
                        owner: 'Monthly Email Update (Media analysis and social tools)',
                        start: Date.UTC(2020, 8, 29),
                        end: Date.UTC(2020, 8, 29),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Q3',
                        color: '#f26333',
                        id: 'q3',
                        parent: 'quarterly_comms_leads_call',
                        owner: 'Monthly Email Update (Media analysis and social tools)',
                        start: Date.UTC(2020, 5, 25),
                        end: Date.UTC(2020, 5, 25),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Q2',
                        color: '#f26333',
                        id: 'q2',
                        parent: 'quarterly_comms_leads_call',
                        owner: 'Monthly Email Update (Media analysis and social tools)',
                        start: Date.UTC(2020, 3, 30),
                        end: Date.UTC(2020, 3, 30),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Q1 Jan 29',
                        color: '#f26333',
                        id: 'q1',
                        parent: 'quarterly_comms_leads_call',
                        owner: 'Monthly Email Update (Media analysis and social tools)',
                        start: Date.UTC(2020, 0, 29),
                        end: Date.UTC(2020, 0, 29),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    // Narrative & Key Messages & Communications Collateral
                    {
                        name: 'Narrative & Key Messages & Communications Collateral',
                        color: '#f26333',
                        id: 'nkmcomm_collateral',
                        owner: 'AA Committee teams',
                        parent: 'communications_team',
                        strategy: ' ',
                    },
                    {
                        name: 'Measurement Report',
                        color: '#f26333',
                        id: 'measurement_report',
                        owner: 'AA Committee teams',
                        parent: 'nkmcomm_collateral',
                        strategy: ' ',
                    },
                    {
                        name: 'WS meeting CCAN for the communications strategy',
                        color: '#f26333',
                        id: 'ws_meeting_ccan',
                        parent: 'measurement_report',
                        owner: 'nkmcomm_collateral',
                        start: Date.UTC(2020, 2, 11),
                        end: Date.UTC(2020, 2, 11),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Development of March analytics report at the conclusion of February',
                        color: '#f26333',
                        id: 'devp_march_ana_rep_feb',
                        parent: 'measurement_report',
                        owner: 'nkmcomm_collateral',
                        start: Date.UTC(2020, 2, 9),
                        end: Date.UTC(2020, 2, 9),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'WS to send survey to collect narrative and website feedback to all member companies',
                        color: '#f26333',
                        id: 'ws_survey_mem_companies',
                        owner: 'AA Committee teams',
                        parent: 'nkmcomm_collateral',
                        start: Date.UTC(2020, 1, 11),
                        end: Date.UTC(2020, 1, 21),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Update AA comms materials with refined key messages',
                        color: '#f26333',
                        id: 'update_aa_key_msg',
                        owner: 'AA Committee teams',
                        parent: 'nkmcomm_collateral',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Narrative validation (internal & external)',
                        color: '#f26333',
                        id: 'narrative_validation',
                        owner: 'AA Committee teams',
                        parent: 'nkmcomm_collateral',
                        start: Date.UTC(2020, 1, 10),
                        end: Date.UTC(2020, 1, 17),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    // Paid Media Partnerships
                    {
                        name: 'Paid Media Partnerships',
                        color: '#f26333',
                        id: 'paid_media_partnerships',
                        owner: 'AA Committee teams',
                        parent: 'communications_team',
                        strategy: ' ',
                    },
                    {
                        name: 'BBC Mini-Documentaries',
                        color: '#f26333',
                        id: 'bbc_Mini_documentaries',
                        owner: 'AA Committee teams',
                        parent: 'paid_media_partnerships',
                        strategy: ' ',
                    },
                    {
                        name: 'Social Promotion',
                        color: '#f26333',
                        id: 'social_promotion',
                        owner: 'AA Committee teams',
                        parent: 'bbc_Mini_documentaries',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Films released at NCD Alliance Global Forum Feb 9-12',
                        color: '#f26333',
                        id: 'films_rel_ncd',
                        owner: 'AA Committee teams',
                        parent: 'bbc_Mini_documentaries',
                        start: Date.UTC(2020, 1, 10),
                        end: Date.UTC(2020, 1, 12),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Filming in Kenya, Ghana & Vietnam',
                        color: '#f26333',
                        id: 'filming_kenya',
                        owner: 'AA Committee teams',
                        parent: 'bbc_Mini_documentaries',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 0, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    // Social & Digital Media
                    {
                        name: 'Social & Digital Media',
                        color: '#f26333',
                        id: 'social_digi_media',
                        owner: 'AA Committee teams',
                        parent: 'communications_team',
                        strategy: ' ',
                    },
                    {
                        name: 'Access Today Newsletter',
                        color: '#f26333',
                        id: 'access_today_newsletter',
                        owner: 'AA Committee teams',
                        parent: 'social_digi_media',
                        strategy: ' ',
                    },
                    {
                        name: 'Published last week of month',
                        color: '#f26333',
                        id: 'published_last_week_month',
                        owner: 'social_digi_media',
                        parent: 'access_today_newsletter',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Media Landscape and Owned Content Reporting',
                        color: '#f26333',
                        id: 'media_landscape',
                        owner: 'AA Committee teams',
                        parent: 'social_digi_media',
                        strategy: ' ',
                    },
                    {
                        name: 'Next report to be shared',
                        color: '#f26333',
                        id: 'next_report',
                        owner: 'social_digi_media',
                        parent: 'media_landscape',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 2, 6),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Podcast',
                        color: '#f26333',
                        id: 'podcast',
                        owner: 'AA Committee teams',
                        parent: 'social_digi_media',
                        strategy: ' ',
                    },
                    {
                        name: "WS to share a project brief for the Secrateriat's review that outlines the approach, format, and next steps for the podcast project.",
                        color: '#f26333',
                        id: 'ws_project_brief',
                        owner: 'social_digi_media',
                        parent: 'podcast',
                        start: Date.UTC(2020, 2, 23),
                        end: Date.UTC(2020, 2, 23),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: "WS to research top global health and member company podcasts; develop backgrounders on potential host options",
                        color: '#f26333',
                        id: 'ws_project_research',
                        owner: 'social_digi_media',
                        parent: 'podcast',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 1, 28),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'PodcastSocial strategy & development of Social Playbook',
                        color: '#f26333',
                        id: 'podcastSocial',
                        owner: 'AA Committee teams',
                        parent: 'social_digi_media',
                        strategy: ' ',
                    },
                    {
                        name: 'Playbook finalised end of month',
                        color: '#f26333',
                        id: 'playbook_finalised_end_month',
                        owner: 'social_digi_media',
                        parent: 'podcastSocial',
                        start: Date.UTC(2020, 0, 16),
                        end: Date.UTC(2020, 1, 28),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Weekly editorial calendar',
                        color: '#f26333',
                        id: 'weekly_editorial_calendar',
                        owner: 'AA Committee teams',
                        parent: 'social_digi_media',
                        strategy: ' ',
                    },
                    {
                        name: 'Updated each week (internal)',
                        color: '#f26333',
                        id: 'internal',
                        owner: 'social_digi_media',
                        parent: 'weekly_editorial_calendar',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Media tool kit to be sent every month',
                        color: '#f26333',
                        id: 'media_tool_kit',
                        owner: 'social_digi_media',
                        parent: 'weekly_editorial_calendar',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    // Website Refresh
                    {
                        name: 'Website Refresh',
                        color: '#f26333',
                        id: 'website_refresh',
                        owner: 'AA Committee teams',
                        parent: 'communications_team',
                        strategy: ' ',
                    },
                    {
                        name: 'End of month, updated site live',
                        color: '#f26333',
                        id: 'eom_update_site_live',
                        owner: 'website_refresh',
                        parent: 'website_refresh',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    // Year 3 Report
                    {
                        name: 'Year 3 Report',
                        color: '#f26333',
                        id: 'year_report3',
                        owner: 'AA Committee teams',
                        parent: 'communications_team',
                        strategy: ' ',
                    },
                    {
                        name: 'Report design',
                        color: '#f26333',
                        id: 'report_design',
                        owner: 'year_report3',
                        parent: 'year_report3',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Designed & Published- completed by April 24',
                        color: '#f26333',
                        id: 'designed_published_apr24',
                        owner: 'year_report3',
                        parent: 'year_report3',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 3, 24),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Content in development',
                        color: '#f26333',
                        id: 'content_development',
                        owner: 'year_report3',
                        parent: 'year_report3',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 5),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    // newgroup
                    // External Advisory Group
                    {
                        name: 'External Advisory Group',
                        color: '#f26333',
                        id: 'external_advisory_group',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                        strategy: ' ',
                    },
                    {
                        name: 'Find professional for ToR finalization',
                        color: '#f26333',
                        id: 'ToR finalization',
                        owner: 'external_advisory_group',
                        parent: 'external_advisory_group',
                        start: Date.UTC(2020, 5, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'In person EAG meeting 2',
                        color: '#f26333',
                        id: 'eag_meeting2',
                        owner: 'external_advisory_group',
                        parent: 'external_advisory_group',
                        start: Date.UTC(2020, 11, 2),
                        end: Date.UTC(2020, 11, 2),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'In person EAG meeting',
                        color: '#f26333',
                        id: 'eag_meeting',
                        owner: 'external_advisory_group',
                        parent: 'external_advisory_group',
                        start: Date.UTC(2020, 4, 26),
                        end: Date.UTC(2020, 4, 26),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Candidate interviews and selection',
                        color: '#f26333',
                        id: 'candi_interviews_selection',
                        owner: 'external_advisory_group',
                        parent: 'external_advisory_group',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 2, 20),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Candidate identification',
                        color: '#f26333',
                        id: 'candidate_identification',
                        owner: 'external_advisory_group',
                        parent: 'external_advisory_group',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 1, 28),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Share ToR with SC for feedback',
                        color: '#f26333',
                        id: 'tor_sc_feedback',
                        owner: 'external_advisory_group',
                        parent: 'external_advisory_group',
                        start: Date.UTC(2020, 0, 27),
                        end: Date.UTC(2020, 0, 31),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                     // newgroup
                    // M&R team
                    {
                        name: 'M&R team',
                        color: '#f26333',
                        id: 'mr_team',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                        strategy: ' ',
                    },
                    {
                        name: 'BU team SOW3 timeline',
                        color: '#f26333',
                        id: 'bu_sow3',
                        owner: 'mr_team',
                        parent: 'mr_team',
                        strategy: ' ',
                    },
                    {
                        name: 'Support transition to new AA metrics partner',
                        color: '#f26333',
                        id: 'aa_metrics_partner',
                        owner: 'external_advisory_group',
                        parent: 'bu_sow3',
                        start: Date.UTC(2020, 7, 3),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Publish program reports on accessobservatory.org; publish and disseminate annual report',
                        color: '#f26333',
                        id: 'accessobservatory_report',
                        owner: 'external_advisory_group',
                        parent: 'bu_sow3',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 6, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Finalize program reports; finalize annual report',
                        color: '#f26333',
                        id: 'finalize_annual_report',
                        owner: 'external_advisory_group',
                        parent: 'bu_sow3',
                        start: Date.UTC(2020, 4, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Review and finalize data submissions; draft program reports; draft annual report',
                        color: '#f26333',
                        id: 'draft_annual_report',
                        owner: 'external_advisory_group',
                        parent: 'bu_sow3',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Review and finalize program submissions',
                        color: '#f26333',
                        id: 'finalize_program_submissions',
                        owner: 'external_advisory_group',
                        parent: 'bu_sow3',
                        start: Date.UTC(2020, 0, 6),
                        end: Date.UTC(2020, 2, 28),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Year 3 report published',
                        color: '#f26333',
                        id: 'Year_report_published3',
                        owner: 'mr_team',
                        parent: 'mr_team',
                        start: Date.UTC(2020, 5, 30),
                        end: Date.UTC(2020, 5, 30),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'BU SOW3 contract finishes',
                        color: '#f26333',
                        id: 'SOW3_contract_finishes',
                        owner: 'mr_team',
                        parent: 'mr_team',
                        start: Date.UTC(2019, 9, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    // newgroup
                    // Steering Committee meetings
                    {
                        name: 'Steering Committee meetings',
                        color: '#f26333',
                        id: 'steering_committee_meetings',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                        strategy: ' ',
                    },
                    {
                        name: 'Steering Committee in person meeting (TBC)',
                        color: '#f26333',
                        id: 'SteeringCommittee(TBC)',
                        owner: 'steering_committee_meetings',
                        parent: 'steering_committee_meetings',
                        start: Date.UTC(2020, 10, 18),
                        end: Date.UTC(2020, 10, 19),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Steering Committee call/in person meeting (UNGA TBC)',
                        color: '#f26333',
                        id: 'SteeringCommittee(UNGA_TBC)',
                        owner: 'steering_committee_meetings',
                        parent: 'steering_committee_meetings',
                        start: Date.UTC(2020, 8, 22),
                        end: Date.UTC(2020, 8, 22),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Steering Committee in person meeting',
                        color: '#f26333',
                        id: 'SteeringCommitteemeeting',
                        owner: 'steering_committee_meetings',
                        parent: 'steering_committee_meetings',
                        start: Date.UTC(2020, 5, 16),
                        end: Date.UTC(2020, 5, 16),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Steering Committee call for BCR prep',
                        color: '#f26333',
                        id: 'SteeringCommitteeBCR_prep',
                        owner: 'steering_committee_meetings',
                        parent: 'steering_committee_meetings',
                        start: Date.UTC(2020, 3, 28),
                        end: Date.UTC(2020, 3, 28),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Steering Committee call',
                        color: '#f26333',
                        id: 'SteeringCommittee_call',
                        owner: 'steering_committee_meetings',
                        parent: 'steering_committee_meetings',
                        start: Date.UTC(2020, 2, 3),
                        end: Date.UTC(2020, 2, 3),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    // newgroup
                    // Supply Chain Team
                    {
                        name: 'Supply Chain Team',
                        color: '#f26333',
                        id: 'supplyChainTeam',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                        strategy: ' ',
                    },
                    {
                        name: 'First working session',
                        color: '#f26333',
                        id: 'firstworkingsession',
                        owner: 'Supply Chain Team',
                        parent: 'supplyChainTeam',
                        start: Date.UTC(2020, 3, 15),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Expressions of interest for the MCC opportunities in Kenya, Ghana and Vietnam',
                        color: '#f26333',
                        id: 'MCC_opportunities_Kenya',
                        owner: 'Supply Chain Team',
                        parent: 'supplyChainTeam',
                        start: Date.UTC(2020, 2, 9),
                        end: Date.UTC(2020, 2, 27),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Nominations of members',
                        color: '#f26333',
                        id: 'nominations_members',
                        owner: 'Supply Chain Team',
                        parent: 'supplyChainTeam',
                        start: Date.UTC(2020, 2, 9),
                        end: Date.UTC(2020, 2, 13),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'AA Measurement',
                        color: '#f26333',
                        id: 'aa_Measurement',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                        strategy: ' ',
                    },
                    {
                        name: 'Collection of relevant data from partners',
                        color: '#f26333',
                        id: 'collection_relevant_data_from_partners',
                        owner: 'AA Measurement',
                        parent: 'aa_Measurement',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 3, 6),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Processing of full data set',
                        color: '#f26333',
                        id: 'processing_full_data_set',
                        owner: 'AA Measurement',
                        parent: 'aa_Measurement',
                        start: Date.UTC(2020, 2, 23),
                        end: Date.UTC(2020, 3, 6),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Outreach to companies for missing data',
                        color: '#f26333',
                        id: 'companies_missing_data',
                        owner: 'AA Measurement',
                        parent: 'aa_Measurement',
                        start: Date.UTC(2020, 1, 17),
                        end: Date.UTC(2020, 2, 8),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Processing of first data badge',
                        color: '#f26333',
                        id: 'processing_first_data_badge',
                        owner: 'AA Measurement',
                        parent: 'aa_Measurement',
                        start: Date.UTC(2020, 1, 17),
                        end: Date.UTC(2020, 1, 24),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Finalisation of full AA Phase II strategic plan for external publication',
                        color: '#f26333',
                        id: 'finalisation_aa_phase',
                        owner: 'AA Measurement',
                        parent: 'aa_Measurement',
                        start: Date.UTC(2020, 4, 25),
                        end: Date.UTC(2020, 6, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Refinement of Phase II strategy narrative for BCR (patient impact measurement)',
                        color: '#f26333',
                        id: 'patient_impact_measurement',
                        owner: 'AA Measurement',
                        parent: 'aa_Measurement',
                        start: Date.UTC(2020, 0, 13),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'BCR CEO Roundtable',
                        color: '#faa73f',
                        id: 'BCR_CEO_Roundtable',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                        strategy: ' ',
                    },
                    {
                        name: 'FSG to send partners report template',
                        color: '#faa73f',
                        id: 'FSG',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 2, 13),
                        end: Date.UTC(2020, 2, 13),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Partners report received',
                        color: '#faa73f',
                        id: 'partners_report_received',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 3, 3),
                        end: Date.UTC(2020, 3, 3),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Draft BCR memo outline shared with the Steering Committee',
                        color: '#faa73f',
                        id: 'BCR_memo',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 2, 16),
                        end: Date.UTC(2020, 2, 16),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Share BCR doc with Advisory group',
                        color: '#faa73f',
                        id: 'BCR_doc',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 3, 13),
                        end: Date.UTC(2020, 3, 13),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'BCR doc delivered to Thomas',
                        color: '#faa73f',
                        id: 'BCR_doc_deliver_thomas',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 4, 4),
                        end: Date.UTC(2020, 4, 4),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Share the BCR doc with SC',
                        color: '#faa73f',
                        id: 'BCR_doc_sc',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 3, 17),
                        end: Date.UTC(2020, 3, 17),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'BCR meeting in Brussel',
                        color: '#faa73f',
                        id: 'BCR_Brussel',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 4, 25),
                        end: Date.UTC(2020, 4, 26),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'BCR doc delivered to sherpas',
                        color: '#faa73f',
                        id: 'BCR_sherpas',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 4, 11),
                        end: Date.UTC(2020, 4, 11),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Secretariat prepare BCR doc and slides',
                        color: '#faa73f',
                        id: 'Secretariat_prepare_BCR',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Event',
                        color: '#faa73f',
                        id: 'event',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                        strategy: ' ',
                    },
                    {
                        name: 'UNGA',
                        color: '#faa73f',
                        id: 'unga',
                        owner: 'Event',
                        parent: 'event',
                        strategy: ' ',
                    },
                    {
                        name: 'WS and Secretariat to draft concept note and share with Comms team',
                        color: '#faa73f',
                        id: 'WS_Secretariat',
                        owner: 'Event',
                        parent: 'unga',
                        start: Date.UTC(2020, 5, 1),
                        end: Date.UTC(2020, 7, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'WS looking for venue and speakers',
                        color: '#faa73f',
                        id: 'WS_venu_speaker',
                        owner: 'Event',
                        parent: 'unga',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 5, 1),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Event date',
                        color: '#faa73f',
                        id: 'event_date',
                        owner: 'Event',
                        parent: 'unga',
                        start: Date.UTC(2020, 8, 21),
                        end: Date.UTC(2020, 8, 21),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'IFPMA',
                        color: '#faa73f',
                        id: 'ifpma',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                        strategy: ' ',
                    },
                    
                    {
                        name: 'IFPMA Council 2',
                        color: '#faa73f',
                        id: 'IFPMA_Council2',
                        owner: 'IFPMA',
                        parent: 'ifpma',
                        start: Date.UTC(2020, 10, 17),
                        end: Date.UTC(2020, 10, 18),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'IFPMA Council',
                        color: '#faa73f',
                        id: 'ifpma_council',
                        owner: 'IFPMA',
                        parent: 'ifpma',
                        start: Date.UTC(2020, 5, 17),
                        end: Date.UTC(2020, 5, 18),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Multi-Company Collaboration',
                        color: '#faa73f',
                        id: 'multi-companyCollaboration',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                        strategy: ' ',
                    },
                    {
                        name: 'Digital Health',
                        color: '#faa73f',
                        id: 'digitalHealth',
                        owner: 'Multi-Company Collaboration',
                        parent: 'multi-companyCollaboration',
                        strategy: ' ',
                    },
                    
                    {
                        name: 'Desk research and interview with stakeholders',
                        color: '#faa73f',
                        id: 'desk_stakeholders',
                        owner: 'Multi-Company Collaboration',
                        parent: 'digitalHealth',
                        start: Date.UTC(2020, 1, 10),
                        end: Date.UTC(2020, 2, 6),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Ghana',
                        color: '#faa73f',
                        id: 'ghana',
                        owner: 'Multi-Company Collaboration',
                        parent: 'multi-companyCollaboration',
                        strategy: ' ',
                    },
                    {
                        name: 'PharmAccess',
                        color: '#faa73f',
                        id: 'pharmAccess',
                        owner: 'Multi-Company Collaboration',
                        parent: 'ghana',
                        strategy: ' ',
                    },
                    
                    {
                        name: 'Follow up stakeholder consultation (innovation workshop)',
                        color: '#faa73f',
                        id: 'innovation_workshop',
                        owner: 'Ghana',
                        parent: 'pharmAccess',
                        start: Date.UTC(2020, 3, 13),
                        end: Date.UTC(2020, 3, 13),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Challenge Workshop',
                        color: '#faa73f',
                        id: 'challengeWorkshop',
                        owner: 'Ghana',
                        parent: 'pharmAccess',
                        start: Date.UTC(2020, 2, 31),
                        end: Date.UTC(2020, 2, 31),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Kenya',
                        color: '#faa73f',
                        id: 'kenya',
                        owner: 'Multi-Company Collaboration',
                        parent: 'multi-companyCollaboration',
                        strategy: ' ',
                    },
                   
                    
                    {
                        name: 'Consortium to share proposal',
                        color: '#faa73f',
                        id: 'consortium_proposal',
                        owner: 'Multi-Company Collaboration',
                        parent: 'kenya',
                        start: Date.UTC(2020, 2, 13),
                        end: Date.UTC(2020, 2, 13),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Engagement call with PATH',
                        color: '#faa73f',
                        id: 'engagement_PATH',
                        owner: 'Multi-Company Collaboration',
                        parent: 'kenya',
                        start: Date.UTC(2020, 1, 5),
                        end: Date.UTC(2020, 1, 5),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Overall',
                        color: '#faa73f',
                        id: 'overall',
                        owner: 'Multi-Company Collaboration',
                        parent: 'multi-companyCollaboration',
                        strategy: ' ',
                    },
                   
                    
                    {
                        name: 'Secretariat to organise a Webinar with each MCC partners',
                        color: '#faa73f',
                        id: 'mcc_partners',
                        owner: 'Multi-Company Collaboration',
                        parent: 'overall',
                        start: Date.UTC(2020, 2, 23),
                        end: Date.UTC(2020, 3, 3),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: "Secretariat to send the partners' scoping note to SC",
                        color: '#faa73f',
                        id: 'scoping_note_to_SC',
                        owner: 'Multi-Company Collaboration',
                        parent: 'overall',
                        start: Date.UTC(2020, 2, 4),
                        end: Date.UTC(2020, 2, 6),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Vietnam',
                        color: '#faa73f',
                        id: 'vietnam',
                        owner: 'Multi-Company Collaboration',
                        parent: 'multi-companyCollaboration',
                        strategy: ' ',
                    },
                   
                    
                    {
                        name: 'Scoping and co-creation of opportunities with interested comapnies',
                        color: '#faa73f',
                        id: 'scoping_co-creation',
                        owner: 'Multi-Company Collaboration',
                        parent: 'vietnam',
                        start: Date.UTC(2020, 0, 13),
                        end: Date.UTC(2020, 2, 31),

                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                   
                    


                    
                    
                    
                ],
            },

            

            //Partners
            {
                name: 'Partners',
                color: '#faa73f',
                data: [
                    {
                        name: 'Partners',
                        color: '#faa73f',
                        id: 'partners',
                        owner: 'Partners',
                        strategy: ' ',
                    },

                    {
                        name: 'CCAN 2025',
                        color: '#005B9A',
                        id: 'ccan_2025',
                        owner: 'Partners',
                        parent: 'partners',
                        strategy: ' ',
                    },

                    {
                        // z: 13.8,
                        name: 'CHFL support for Challenge Cities',
                        color: '#005B9A',
                        id: 'chfl_cities',
                        owner: 'Partners',
                        parent: 'ccan_2025',
                        strategy: '1,2,3',
                    },
                    
                    {
                        name: 'Publications of 2 case studies',
                        color: '#005B9A',
                        id: 'case2studies',
                        owner: 'CCAN 2025',
                        parent: 'chfl_cities',
                        start: Date.UTC(2020, 7, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Engage potential investors through IFC',
                        color: '#005B9A',
                        id: 'engage_potential_investors_ifc',
                        owner: 'CCAN 2025',
                        parent: 'chfl_cities',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Analysis of national cancer coverage in Yangon',
                        color: '#005B9A',
                        id: 'analysis_national_cancer_Yangon',
                        owner: 'CCAN 2025',
                        parent: 'chfl_cities',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    

                    {
                        name: 'City Cancer Challenge Foundation Awareness',
                        color: '#005B9A',
                        id: 'cityCancerChallenge',
                        owner: 'Partners',
                        parent: 'ccan_2025',
                        strategy: '1,2,3',
                    },
                    
                    {
                        name: 'Launch of new campaign recruiting new cities',
                        color: '#005B9A',
                        id: 'recruiting_new_cities',
                        owner: 'CCAN 2025',
                        parent: 'cityCancerChallenge',
                        start: Date.UTC(2020, 5, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Launch of new campaign recruiting new cities',
                        color: '#005B9A',
                        id: 'recruiting_new_cities2',
                        owner: 'CCAN 2025',
                        parent: 'cityCancerChallenge',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'City Network',
                        color: '#005B9A',
                        id: 'cityNetwork',
                        owner: 'Partners',
                        parent: 'ccan_2025',
                        strategy: '2,3',
                    },
                    
                    {
                        name: 'Development of a network',
                        color: '#005B9A',
                        id: 'recruiting_new_cities',
                        owner: 'CCAN 2025',
                        parent: 'cityNetwork',
                        start: Date.UTC(2020, 5, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    
                    
                   
                    
                    {
                        name: 'City Project Plans and Technical Assistance and Capacity Building',
                        color: '#005B9A',
                        id: 'technicalAssistanceCapacity',
                        owner: 'Partners',
                        parent: 'ccan_2025',
                        strategy: '2,3',
                    },
                    
                    {
                        name: 'Support Asuncion Sustainble Partners in implementation of prioritized projects',
                        color: '#005B9A',
                        id: 'implementation_prioritizedprojects',
                        owner: 'CCAN 2025',
                        parent: 'technicalAssistanceCapacity',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    
                    {
                        name: 'Support Cali Sustianble Partners in implementation of prioritized projects',
                        color: '#005B9A',
                        id: 'implementation_prioritizedprojects2',
                        owner: 'CCAN 2025',
                        parent: 'technicalAssistanceCapacity',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Support Yangon in implementation of prioritized projects',
                        color: '#005B9A',
                        id: 'project_yangon',
                        owner: 'CCAN 2025',
                        parent: 'technicalAssistanceCapacity',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Support Kumasi in implementation of prioritized projects',
                        color: '#005B9A',
                        id: 'project_kunasi',
                        owner: 'CCAN 2025',
                        parent: 'technicalAssistanceCapacity',
                        start: Date.UTC(2020, 5, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Document learnings and best practices from the Key Learning Cities related to the city process',
                        color: '#005B9A',
                        id: 'cityProcess',
                        owner: 'Partners',
                        parent: 'ccan_2025',
                        strategy: '1,2,3',
                    },
                    
                    {
                        name: '5 sets of documents updated / created',
                        color: '#005B9A',
                        id: 'recruiting_new_cities',
                        owner: 'CCAN 2025',
                        parent: 'cityProcess',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Emerging trends and actionable insights map and develop strategy',
                        color: '#005B9A',
                        id: 'map_trends',
                        owner: 'Partners',
                        parent: 'ccan_2025',
                        strategy: '2,3',
                    },
                    
                    {
                        name: 'Emerging trends mapped and documented',
                        color: '#005B9A',
                        id: 'trendsmapped',
                        owner: 'CCAN 2025',
                        parent: 'map_trends',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Key events',
                        color: '#005B9A',
                        id: 'keyevents',
                        owner: 'Partners',
                        parent: 'ccan_2025',
                        strategy: '1,2,3',
                    },
                    
                    {
                        name: 'Partner Webinar - Partners delivering Technical Assistance in C/Can Cities - September 2020',
                        color: '#005B9A',
                        id: 'pw_sept',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Partner Webinar - C/Can Data Strategy - July 2020',
                        color: '#005B9A',
                        id: 'pw_july',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 8, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Asia Webinar',
                        color: '#005B9A',
                        id: 'asiaWebinar',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Latam webinar',
                        color: '#005B9A',
                        id: 'latamwebinar',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Data event - WHA',
                        color: '#005B9A',
                        id: 'wha_data_event',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Partner Webinar - Common gaps in cancer care delivery across C/Can cities - May',
                        color: '#005B9A',
                        id: 'pw_may',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 4, 1),
                        end: Date.UTC(2020, 4, 29),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Partner Webinar - Cities of Tomorrow - March',
                        color: '#005B9A',
                        id: 'pwMarch',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Kumasi - Webinar in March',
                        color: '#005B9A',
                        id: 'kumasi-march',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 3, 2),
                        end: Date.UTC(2020, 3, 2),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Kigali - Partners meeting in Kigali',
                        color: '#005B9A',
                        id: 'kigali',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 2, 12),
                        end: Date.UTC(2020, 2, 12),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Partner Webinar - 2020 priorities',
                        color: '#005B9A',
                        id: 'partnerWebinar2020priorities',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 0, 20),
                        end: Date.UTC(2020, 0, 20),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'A call for applictaion',
                        color: '#005B9A',
                        id: 'call_applictaion',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 9, 20),
                        end: Date.UTC(2020, 9, 22),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'WCC - City to City event',
                        color: '#005B9A',
                        id: 'wcc_city_event',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 9, 22),
                        end: Date.UTC(2020, 9, 22),
                        milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Partner engagement',
                        color: '#005B9A',
                        id: 'partnerEngagement',
                        owner: 'Partners',
                        parent: 'ccan_2025',
                        strategy: '2,3',
                    },
                    
                    {
                        name: 'C/Can to develop partnerships with NCD Alliance, Path and other NCD organisations',
                        color: '#005B9A',
                        id: 'c/can_develop_partnerships',
                        owner: 'CCAN 2025',
                        parent: 'partnerEngagement',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Scale up implementation of M&E and Learning (MEL) framework',
                        color: '#005B9A',
                        id: 'mel_framework',
                        owner: 'Partners',
                        parent: 'ccan_2025',
                        strategy: '2',
                    },
                    
                    {
                        name: 'Current MEL framework reviewed and documentation updated',
                        color: '#005B9A',
                        id: 'currentMELframework',
                        owner: 'CCAN 2025',
                        parent: 'mel_framework',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Sustainability strategy in the 4 Key Learning Cities',
                        color: '#005B9A',
                        id: '4KeyLearningcities',
                        owner: 'Partners',
                        parent: 'ccan_2025',
                        strategy: '1,2,3',
                    },
                    
                    {
                        name: '1 Lessons learned document developed based on city experience',
                        color: '#005B9A',
                        id: 'lesson-1',
                        owner: 'CCAN 2025',
                        parent: '4KeyLearningcities',
                        start: Date.UTC(2020, 5, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Third and Fourth city sustainability plans developed and approved',
                        color: '#005B9A',
                        id: 'thirdFourthcity',
                        owner: 'CCAN 2025',
                        parent: '4KeyLearningcities',
                        start: Date.UTC(2020, 5, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'First and Second city sustainability plans developed and approved',
                        color: '#005B9A',
                        id: 'firstSecondcity',
                        owner: 'CCAN 2025',
                        parent: '4KeyLearningcities',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Technical assistance (TA) packages',
                        color: '#005B9A',
                        id: 'ta_packages',
                        owner: 'Partners',
                        parent: 'ccan_2025',
                        strategy: '1,2,3',
                    },
                    
                    {
                        name: 'Create roster of TA and capacity building partners',
                        color: '#005B9A',
                        id: 'ta_capacity_building_partners',
                        owner: 'CCAN 2025',
                        parent: 'ta_packages',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Map common TA requirements and trends and identify best practices to address requirements',
                        color: '#005B9A',
                        id: 'map_common_ta_req',
                        owner: 'CCAN 2025',
                        parent: 'ta_packages',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'NCD Alliance',
                        color: '#005B9A',
                        id: 'ncdAlliance',
                        owner: 'Partners',
                        parent: 'partners',
                        strategy: ' ',
                    },

                    {
                        name: 'Amplify Views and Voices of PLWNCDs',
                        color: '#237f58',
                        id: 'amplify_ViewsVoices_PLWNCDs',
                        owner: 'Partners',
                        parent: 'ncdAlliance',
                        strategy: ' ',
                    },
                    {
                        name: 'Global Week for Action on NCDs and grant awards to alliances',
                        color: '#237f58',
                        id: 'gw_action_ncds',
                        owner: 'NCD Alliance',
                        parent: 'amplify_ViewsVoices_PLWNCDs',
                        strategy: '1,2,3',
                    },
                    {
                        name: 'Event date, 7-13 September 2020, Global',
                        color: '#237f58',
                        id: 'ed_7_13_sept',
                        owner: 'NCD Alliance',
                        parent: 'gw_action_ncds',
                        start: Date.UTC(2020, 8, 7),
                        end: Date.UTC(2020, 8, 13),
                        // milestone: true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Planning ongoing',
                        color: '#237f58',
                        id: 'planning_ongoing',
                        owner: 'NCD Alliance',
                        parent: 'gw_action_ncds',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Our Views Our Voices global knowledge exchange platform',
                        color: '#237f58',
                        id: 'globalknowledgeexchangeplatform',
                        owner: 'NCD Alliance',
                        parent: 'amplify_ViewsVoices_PLWNCDs',
                        strategy: '1,2,3',
                    },
                    {
                        name: 'Platform development',
                        color: '#237f58',
                        id: 'platformdevelopment',
                        owner: 'NCD Alliance',
                        parent: 'globalknowledgeexchangeplatform',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Platform development planning',
                        color: '#237f58',
                        id: 'platformdevelopmentplanning',
                        owner: 'NCD Alliance',
                        parent: 'globalknowledgeexchangeplatform',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Global side events/leveraging advocacy opportunities (e.g, UNGA)',
                        color: '#237f58',
                        id: 'global_siide_el',
                        owner: 'NCD Alliance',
                        parent: 'amplify_ViewsVoices_PLWNCDs',
                        start: Date.UTC(2020, 8, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'People living with NCDs attendance at key advocacy milestones',
                        color: '#237f58',
                        id: 'milestones',
                        owner: 'NCD Alliance',
                        parent: 'amplify_ViewsVoices_PLWNCDs',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Our Views Our Voices event at the Global NCD Alliance Forum (9-11 Feb)',
                        color: '#237f58',
                        id: 'NCD_AllianceForum',
                        owner: 'NCD Alliance',
                        parent: 'amplify_ViewsVoices_PLWNCDs',
                        start: Date.UTC(2020, 1, 9),
                        end: Date.UTC(2020, 1, 9),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Country Action to involve PLWNCDs',
                        color: '#237f58',
                        id: 'countryAction_PLWNCDs',
                        owner: 'NCD Alliance',
                        parent: 'ncdAlliance',
                        strategy: ' ',
                    },

                    {
                        name: 'NCDs & UHC Advocacy Institute Accelerator Training Programme',
                        color: '#237f58',
                        id: 'ATP',
                        owner: 'NCD Alliance',
                        parent: 'countryAction_PLWNCDs',
                        strategy: '1,2,3',
                    },
                    {
                        name: 'July 2020 (margins of the HLPF, NY)',
                        color: '#237f58',
                        id: 'july2020',
                        owner: 'NCD Alliance',
                        parent: 'ATP',
                        start: Date.UTC(2020, 3, 13),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Seed grant and technical assistance to Ghana NCDA',
                        color: '#237f58',
                        id: 'ghana_ncda',
                        owner: 'NCD Alliance',
                        parent: 'countryAction_PLWNCDs',
                        strategy: '1,2,3',
                    },
                    {
                        name: 'Community mobilisation forums & Our Views Our Voices training + 2020 grants to be awarded',
                        color: '#237f58',
                        id: 'communityMobilisationForums',
                        owner: 'NCD Alliance',
                        parent: 'ghana_ncda',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: '2019  partnership grants ongoing',
                        color: '#237f58',
                        id: 'communitymobilisationforums',
                        owner: 'NCD Alliance',
                        parent: 'ghana_ncda',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 5),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Seed grant and technical assistance to Healthy India Alliance',
                        color: '#237f58',
                        id: 'healthy_india_alliance',
                        owner: 'NCD Alliance',
                        parent: 'countryAction_PLWNCDs',
                        strategy: '1,2,3',
                    },
                    {
                        name: '2020 grants to be awarded',
                        color: '#237f58',
                        id: 'awarded_grants',
                        owner: 'NCD Alliance',
                        parent: 'healthy_india_alliance',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Induction',
                        color: '#237f58',
                        id: 'induction',
                        owner: 'NCD Alliance',
                        parent: 'healthy_india_alliance',
                        start: Date.UTC(2020, 1, 17),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Seed grant and technical assistance to Malaysia NCDA',
                        color: '#237f58',
                        id: 'technicalassistanceMalaysiaNCDA',
                        owner: 'NCD Alliance',
                        parent: 'countryAction_PLWNCDs',
                        strategy: '1,2,3',
                    },
                    {
                        name: '2020 grants to be awarded',
                        color: '#237f58',
                        id: 'awarded_grants2',
                        owner: 'NCD Alliance',
                        parent: 'technicalassistanceMalaysiaNCDA',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Induction',
                        color: '#237f58',
                        id: 'induction2',
                        owner: 'NCD Alliance',
                        parent: 'technicalassistanceMalaysiaNCDA',
                        start: Date.UTC(2020, 1, 17),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Seed grant and technical assistance to NCDA Kenya',
                        color: '#237f58',
                        id: 'seed_grant_ncda_kenya',
                        owner: 'NCD Alliance',
                        parent: 'countryAction_PLWNCDs',
                        strategy: '1,2,3',
                    },
                    {
                        name: 'NCDAK Advocacy priorities launch; non-health stakeholder engagement; NCD Symposium (Q2/3 TBC) + 2020 grants to be awarded',
                        color: '#237f58',
                        id: 'ncdak',
                        owner: 'NCD Alliance',
                        parent: 'seed_grant_ncda_kenya',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: '2019 Partnership grants ongoing',
                        color: '#237f58',
                        id: 'partnership_grants_ongoing',
                        owner: 'NCD Alliance',
                        parent: 'seed_grant_ncda_kenya',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Seed grant and technical assistance to Vietnam NCDA',
                        color: '#237f58',
                        id: 'seed_grant_ncda_vietnam',
                        owner: 'NCD Alliance',
                        parent: 'countryAction_PLWNCDs',
                        strategy: '1,2,3',
                    },
                    {
                        name: '2020 grants to be awarded',
                        color: '#237f58',
                        id: 'grants_awarded',
                        owner: 'NCD Alliance',
                        parent: 'seed_grant_ncda_vietnam',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: '2019 partnership grants ongoing',
                        color: '#237f58',
                        id: 'grants_ongoing',
                        owner: 'NCD Alliance',
                        parent: 'seed_grant_ncda_vietnam',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 5),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Pan-Africa Our Views Our Voices Regional Summit',
                        color: '#237f58',
                        id: 'PAOViews',
                        owner: 'NCD Alliance',
                        parent: 'ncdAlliance',
                        strategy: '1,2,3',
                    },
                    {
                        name: 'Our Views Our Voices Regional Summit Report',
                        color: '#237f58',
                        id: 'VoicesRegionalSummitReport',
                        owner: 'NCD Alliance',
                        parent: 'PAOViews',
                        start: Date.UTC(2020, 10, 2),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: '3-7 November 2020, Lomé, Togo',
                        color: '#237f58',
                        id: 'nov_lome_togo',
                        owner: 'NCD Alliance',
                        parent: 'PAOViews',
                        start: Date.UTC(2020, 10, 3),
                        end: Date.UTC(2020, 10, 7),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Prog/ Logistics',
                        color: '#237f58',
                        id: 'prog_logistics',
                        owner: 'NCD Alliance',
                        parent: 'PAOViews',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Planning/ outreach',
                        color: '#237f58',
                        id: 'planning_outreach',
                        owner: 'NCD Alliance',
                        parent: 'PAOViews',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Planning ongoing',
                        color: '#237f58',
                        id: 'planningongoing',
                        owner: 'NCD Alliance',
                        parent: 'PAOViews',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'High-level media strategy for regional summit (3-7 November, Lomé, Togo)',
                        color: '#237f58',
                        id: 'highLevel_media_strategy',
                        owner: 'NCD Alliance',
                        parent: 'PAOViews',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 10, 7),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Our Views Our Voices Regional Consultation with PLWNCDs (Africa)',
                        color: '#237f58',
                        id: 'VoicesRegionalAfrica',
                        owner: 'NCD Alliance',
                        parent: 'PAOViews',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'PATH',
                        color: '#a5247a',
                        id: 'path',
                        owner: 'Partners',
                        parent: 'partners',

                        strategy: ' ',
                    },
                    {
                        name: '2020',
                        color: '#a5247a',
                        id: 'y_2020',
                        owner: 'PATH',
                        parent: 'path',
                        strategy: ' ',
                    },
            
                    {
                        name: 'Ghana',
                        color: '#a5247a',
                        id: 'y_2020_ghana',
                        owner: '2020',
                        parent: 'y_2020',
                        strategy: ' ',
                    },
                    {
                        name: 'Create enabling policy environments',
                        color: '#a5247a',
                        id: 'createenablingpolicy_environments',
                        owner: '2020',
                        parent: 'y_2020_ghana',
                        strategy: '1,2,3',
                    },
                    

                    {
                        name: 'PATH staff seconded to MoH; Routine TWG established to report into Steering Committee',
                        color: '#a5247a',
                        id: 'pathStaffsecondtoMHO',
                        owner: 'Ghana',
                        parent: 'createenablingpolicy_environments',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: '1,2,3',
                    },

                    {
                        name: 'Planning initiated for National NCD Conference; National dissemination of Ghana NCD Strategy',
                        color: '#a5247a',
                        id: 'ghana_NCD_Strategy',
                        owner: 'Ghana',
                        parent: 'createenablingpolicy_environments',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: '1,2',
                    },
                    
                    {
                        name: 'National NCD webpage launched; Awareness campaigns activated',
                        color: '#a5247a',
                        id: 'national_NCD_webpage',
                        owner: 'Ghana',
                        parent: 'createenablingpolicy_environments',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: '2',
                    },
                    
                    {
                        name: 'NCD Navigator informs national NCD Steering Committee and technical working group decisions',
                        color: '#a5247a',
                        id: 'NCD_navigator',
                        owner: 'Ghana',
                        parent: 'createenablingpolicy_environments',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: '1,2',
                    },
                   
                    {
                        name: 'Enable data driven decision-making',
                        color: '#a5247a',
                        id: 'enable_data_drivendecision-making',
                        owner: '2020',
                        parent: 'y_2020_ghana',
                        strategy: '1,2,3',
                    },

                    {
                        name: 'Data Quality',
                        color: '#a5247a',
                        id: 'data_quality',
                        owner: '2020',
                        parent: 'enable_data_drivendecision-making',
                        strategy: ' ',
                    },

                    {
                        name: 'Service delivery data quality assessed',
                        color: '#a5247a',
                        id: 'delivery_data_quality_assessed',
                        owner: 'Ghana',
                        parent: 'data_quality',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: '1,2',
                    },
                    
                    {
                        name: 'DQA tools developed to support data collection',
                        color: '#a5247a',
                        id: 'dqa_tools',
                        owner: 'Ghana',
                        parent: 'data_quality',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: '1,2',
                    },

                    {
                        name: 'Data review meetings established',
                        color: '#a5247a',
                        id: 'data_review_meetings_established',
                        owner: 'Ghana',
                        parent: 'data_quality',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: '1,2',
                    },

                    {
                        name: 'NCD e-tracker piloted',
                        color: '#a5247a',
                        id: 'NCD_e-tracker_piloted',
                        owner: 'Ghana',
                        parent: 'data_quality',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: '1,2',
                    },


                    {
                        name: 'NCD Navigator',
                        color: '#a5247a',
                        id: 'NCDNavigator',
                        owner: '2020',
                        parent: 'enable_data_drivendecision-making',
                        strategy: '1,2,3',
                    },

                    {
                        name: 'NCD Navigator adopted by GHS/MoH',
                        color: '#a5247a',
                        id: 'NCDNavigatoradopted-GHS/MoH',
                        owner: 'Ghana',
                        parent: 'NCDNavigator',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Data collection complete',
                        color: '#a5247a',
                        id: 'data_collection_complete',
                        owner: 'Ghana',
                        parent: 'NCDNavigator',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Results and recommendations for update disseminated data',
                        color: '#a5247a',
                        id: 'resultsrecommendationsdisseminateddata',
                        owner: 'Ghana',
                        parent: 'NCDNavigator',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'NCD Navigator informs multi-company investments and grant submissions',
                        color: '#a5247a',
                        id: 'NCDNavigatormulti_company',
                        owner: 'Ghana',
                        parent: 'NCDNavigator',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Strengthen PHC systems',
                        color: '#a5247a',
                        id: 'strengthenPHCsystems',
                        owner: '2020',
                        parent: 'y_2020_ghana',
                        strategy: '1,2,3',
                    },

                    {
                        name: 'Health worker and facility needs assessment completed',
                        color: '#a5247a',
                        id: 'facility_needs_assessment_completed',
                        owner: 'Ghana',
                        parent: 'strengthenPHCsystems',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Small grants award program established',
                        color: '#a5247a',
                        id: 'smallgrantsawardprogramestablished',
                        owner: 'Ghana',
                        parent: 'strengthenPHCsystems',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },


                    {
                        name: 'NCD Navigator informs coordination of PHC strenghening efforts; Grants awarded',
                        color: '#a5247a',
                        id: 'grants_awarded',
                        owner: 'Ghana',
                        parent: 'strengthenPHCsystems',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    

                    {
                        name: 'E-learning program tested',
                        color: '#a5247a',
                        id: 'E-learning_program_tested',
                        owner: 'Ghana',
                        parent: 'strengthenPHCsystems',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },


                    {
                        name: 'Strengthen supply chains',
                        color: '#a5247a',
                        id: 'strengthensupplychains',
                        owner: '2020',
                        parent: 'y_2020_ghana',
                        strategy: '1,2,3',
                    },

                    {
                        name: 'Supply assessment completed',
                        color: '#a5247a',
                        id: 'supply_assessment_completed',
                        owner: 'Ghana',
                        parent: 'strengthensupplychains',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },


                    {
                        name: 'Results disseminated and roadmap verified; Multi-company activation of supply chain strengthening roadmap',
                        color: '#a5247a',
                        id: 'supply_chain_strengthening_roadmap',
                        owner: 'Ghana',
                        parent: 'strengthensupplychains',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Forecasting model introduced to Ghana and tested in one district',
                        color: '#a5247a',
                        id: 'forecasting_model_introducedGhana',
                        owner: 'Ghana',
                        parent: 'strengthensupplychains',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Forecasting model adapted for Ghana and assessed for adoption by GHS',
                        color: '#a5247a',
                        id: 'forecasting_model_adaptedGhana',
                        owner: 'Ghana',
                        parent: 'strengthensupplychains',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Kenya',
                        color: '#a5247a',
                        id: 'kenya-2020-path',
                        owner: '2020',
                        parent: 'y_2020',
                        strategy: ' ',
                    },
                    {
                        name: 'Create enabling policy environments',
                        color: '#a5247a',
                        id: 'create_enabling_policy_environments',
                        owner: '2020',
                        parent: 'kenya-2020-path',
                        strategy: '1,2,3',
                    },

                    {
                        name: 'PATH staff seconded to MoH; Routine TWG meetings for priority NCDs held quarterly',
                        color: '#a5247a',
                        id: 'path_staff_second_2',
                        owner: 'Ghana',
                        parent: 'create_enabling_policy_environments',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'NCD Navigator informs national and county TWG decisions',
                        color: '#a5247a',
                        id: 'NCDNavigatorTWGdecisions',
                        owner: 'Ghana',
                        parent: 'create_enabling_policy_environments',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'One digital innovation grant awarded; NCD Strategy complete',
                        color: '#a5247a',
                        id: 'one_digital_innovation_grant_awarded',
                        owner: 'Ghana',
                        parent: 'create_enabling_policy_environments',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'County dissemination of National NCD Strategy',
                        color: '#a5247a',
                        id: 'county_disseminationNationalNCDStrategy',
                        owner: 'Ghana',
                        parent: 'create_enabling_policy_environments',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Enable data driven decision-making',
                        color: '#a5247a',
                        id: 'enable-data-driven-decision-making',
                        owner: '2020',
                        parent: 'kenya-2020-path',
                        strategy: '1,2,3',
                    },

                    {
                        name: 'Data Quality',
                        color: '#a5247a',
                        id: 'dataQualitykenya-2020-path',
                        owner: '2020',
                        parent: 'enable-data-driven-decision-making',
                        strategy: ' ',
                    },

                    {
                        name: 'Tools disseminated in all counties',
                        color: '#a5247a',
                        id: 'tools-disseminated-counties',
                        owner: 'Ghana',
                        parent: 'dataQualitykenya-2020-path',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Training and mentoring of NCD Focal Persons',
                        color: '#a5247a',
                        id: 'training-mentoring-NCD-Focal',
                        owner: 'Ghana',
                        parent: 'dataQualitykenya-2020-path',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Data review meetings established',
                        color: '#a5247a',
                        id: 'data-review-meetings-established',
                        owner: 'Ghana',
                        parent: 'dataQualitykenya-2020-path',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Data quality assurance process established',
                        color: '#a5247a',
                        id: 'data-quality-assurance-process-established',
                        owner: 'Ghana',
                        parent: 'dataQualitykenya-2020-path',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'NCD Navigator',
                        color: '#a5247a',
                        id: 'NCD-Navigatorkenya-2020-path',
                        owner: '2020',
                        parent: 'enable-data-driven-decision-making',
                        strategy: ' ',
                    },

                    {
                        name: 'NCD Navigator adopted by National and County MoH',
                        color: '#a5247a',
                        id: 'NCDNavigator-National-CountyMoH',
                        owner: 'Ghana',
                        parent: 'NCD-Navigatorkenya-2020-path',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'NCD Navigator informs multi-company investments and grant submissions',
                        color: '#a5247a',
                        id: 'NCDNavigator-grantsubmissions',
                        owner: 'Ghana',
                        parent: 'NCD-Navigatorkenya-2020-path',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'NCD Navigator informs New NCD Strategy and TWG workplans and company investments',
                        color: '#a5247a',
                        id: 'NCDNavigator-newNCDStrategy',
                        owner: 'Ghana',
                        parent: 'NCD-Navigatorkenya-2020-path',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Strengthen PHC systems',
                        color: '#a5247a',
                        id: 'strengthen-PHCsystems',
                        owner: '2020',
                        parent: 'enable-data-driven-decision-making',
                        strategy: '1,2,3',
                    },

                    {
                        name: 'Health worker training for 100 health workers initiated; Mentors trained',
                        color: '#a5247a',
                        id: 'phc-Mentorstrained',
                        owner: 'Ghana',
                        parent: 'strengthen-PHCsystems',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Regular HW supervision and on the job training; Grants Award Program established',
                        color: '#a5247a',
                        id: 'phc-RegularHW-supervision',
                        owner: 'Ghana',
                        parent: 'strengthen-PHCsystems',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'NCD Navigator informs coordination of PHC strengthening efforts; Grants awarded',
                        color: '#a5247a',
                        id: 'phc-Grantsawarded',
                        owner: 'Ghana',
                        parent: 'strengthen-PHCsystems',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Best practice forum initiated; EMR data informs this; data use and data quality increases',
                        color: '#a5247a',
                        id: 'phc-data_quality_increases',
                        owner: 'Ghana',
                        parent: 'strengthen-PHCsystems',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Strengthen supply chains',
                        color: '#a5247a',
                        id: 'strengthen-supplychains',
                        owner: '2020',
                        parent: 'enable-data-driven-decision-making',
                        strategy: '1,2,3',
                    },

                    {
                        name: 'Supply security roadmap verified and adopted',
                        color: '#a5247a',
                        id: 'supplychains-roadmap_verified_adopted',
                        owner: 'Ghana',
                        parent: 'strengthen-supplychains',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Multi-company activation of supply chain strengthening roadmap',
                        color: '#a5247a',
                        id: 'supplychains-chain-strengtheningroadmap',
                        owner: 'Ghana',
                        parent: 'strengthen-supplychains',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Forecasting model piloted in 6 counties',
                        color: '#a5247a',
                        id: 'supplychains-Forecastingmodelpiloted',
                        owner: 'Ghana',
                        parent: 'strengthen-supplychains',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Assessment of cost escalators post-procurement',
                        color: '#a5247a',
                        id: 'supplychains-post-procurement',
                        owner: 'Ghana',
                        parent: 'strengthen-supplychains',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },


                    {
                        name: 'Vietnam',
                        color: '#a5247a',
                        id: 'vietnam-2020-path',
                        owner: '2020',
                        parent: 'y_2020',
                        strategy: ' ',
                    },
                    {
                        name: 'Create enabling policy environments',
                        color: '#a5247a',
                        id: 'create_enabling_policy_environments_vietnam',
                        owner: '2020',
                        parent: 'vietnam-2020-path',
                        strategy: '1,2,3',
                    },

                    {
                        name: 'TWG meeting conducted to review NCD efforts and planning',
                        color: '#a5247a',
                        id: 'vietnam-planning-efforts-ncd',
                        owner: 'Ghana',
                        parent: 'create_enabling_policy_environments_vietnam',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Policy/mechanisms on private sector engagement developed',
                        color: '#a5247a',
                        id: 'vietnam-policy-mechanisms',
                        owner: 'Ghana',
                        parent: 'create_enabling_policy_environments_vietnam',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },


                    {
                        name: 'National standardised training packages available on the GDPM and Healthy Vietnam websites',
                        color: '#a5247a',
                        id: 'vietnam-healthyVietnamwebsites',
                        owner: 'Ghana',
                        parent: 'create_enabling_policy_environments_vietnam',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Enable data driven decision making',
                        color: '#a5247a',
                        id: 'enable-data-driven-decision-making_vietnam',
                        owner: '2020',
                        parent: 'vietnam-2020-path',
                        strategy: '1,2,3',
                    },

                    {
                        name: 'Regulation for data sharing between curative and preventive medicines systems developed',
                        color: '#a5247a',
                        id: 'vietnam-preventive-medicines-systems-developed',
                        owner: 'Ghana',
                        parent: 'enable-data-driven-decision-making_vietnam',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Regulation for data sharing between curative and preventive medicines systems finalized',
                        color: '#a5247a',
                        id: 'vietnam-preventive-medicines-systems-developed-finalized',
                        owner: 'Ghana',
                        parent: 'enable-data-driven-decision-making_vietnam',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Regulation for data sharing between curative and preventive medicines systems disseminated',
                        color: '#a5247a',
                        id: 'vietnam-preventive-medicines-systems-developed-disseminated',
                        owner: 'Ghana',
                        parent: 'enable-data-driven-decision-making_vietnam',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Reporting indicators for the NCD HIS finalized',
                        color: '#a5247a',
                        id: 'vietnam-preventive-NCD-HIS',
                        owner: 'Ghana',
                        parent: 'enable-data-driven-decision-making_vietnam',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Strengthen PHC systems',
                        color: '#a5247a',
                        id: 'phc-2020-system-Strengthen',
                        owner: '2020',
                        parent: 'vietnam-2020-path',
                        strategy: '1,2,3',
                    },
                    {
                        name: 'Sub-agreements signed with GDPM',
                        color: '#a5247a',
                        id: 'phc-2020-system-StrengthenSub-agreements',
                        owner: 'Ghana',
                        parent: 'phc-2020-system-Strengthen',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Project launching workshop with GDPM and three provinces conducted',
                        color: '#a5247a',
                        id: 'phc-2020-system-Strengthenworkshop',
                        owner: 'Ghana',
                        parent: 'phc-2020-system-Strengthen',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Refined community-based care model for hypertension and diabetes demonstrated in target districts in HCMC, Khanh Hoa, and Hanoi',
                        color: '#a5247a',
                        id: 'phc-2020-system-hanoi',
                        owner: 'Ghana',
                        parent: 'phc-2020-system-Strengthen',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    
                    {
                        name: 'HCMC, Hanoi and Khanh Hoa have annual plans for sustaining the model; these plans have been shared with other provinces; a national and regional NCD TA network provides support for NCD service providers',
                        color: '#a5247a',
                        id: 'phc-2020-system-hcmc',
                        owner: 'Ghana',
                        parent: 'phc-2020-system-Strengthen',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Strengthen supply chains',
                        color: '#a5247a',
                        id: 'vei-Strengthensupplychains',
                        owner: '2020',
                        parent: 'vietnam-2020-path',
                        strategy: '1,2,3',
                    },
                    {
                        name: 'Supply chain assessment protocol developed',
                        color: '#a5247a',
                        id: 'vei-Strengthensupplychains1',
                        owner: 'Ghana',
                        parent: 'vei-Strengthensupplychains',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Supply chain assessment conducted',
                        color: '#a5247a',
                        id: 'vei-Strengthensupplychains2',
                        owner: 'Ghana',
                        parent: 'vei-Strengthensupplychains',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },


                    {
                        name: 'Supply chain assessment conducted',
                        color: '#a5247a',
                        id: 'vei-Strengthensupplychains3',
                        owner: 'Ghana',
                        parent: 'vei-Strengthensupplychains',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'WHF',
                        color: '#d2342a',
                        id: 'whf',
                        owner: 'Partners',
                        parent: 'partners',
                        strategy: ' ',
                    },
                    {
                        name: '2020',
                        color: '#d2342a',
                        id: 'whf-2020',
                        owner: 'WHF',
                        parent: 'whf',
                        strategy: ' ',
                    },
                    {
                        name: '5th Global Summit',
                        color: '#d2342a',
                        id: 'globalSummit5th',
                        owner: 'WHF',
                        parent: 'whf-2020',
                        strategy: '3',
                    },

                    {
                        name: 'Confirm venue for 2021 Summit',
                        color: '#d2342a',
                        id: 'whf-summit2021-venue',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Confirm theme of 2021 Summit',
                        color: '#d2342a',
                        id: 'whf-summit2021-theme',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Start researching and writing the Summit position paper to be launched at the 2021 Summit',
                        color: '#d2342a',
                        id: 'whf-summit2021-position-paper',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Internal project report',
                        color: '#d2342a',
                        id: 'whf-summit2021-int-proj-rep',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Follow-up continued (reimbursements, payments)',
                        color: '#d2342a',
                        id: 'whf-summit2021-reim-payments',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Follow-up (wrap-up blog posts, thank you letters, social media)',
                        color: '#d2342a',
                        id: 'whf-summit2021-wrap-up',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Launch of Summit 2019 outcome publication',
                        color: '#d2342a',
                        id: 'whf-summit2021-outcome-publication-launch',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                   
                    {
                        name: 'Hold Summit, including live tweeting & Facebook',
                        color: '#d2342a',
                        id: 'whf-summit2021-hold-tweeting',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Regular promotional event activities (social media, newsletters, website)',
                        color: '#d2342a',
                        id: 'whf-summit2021-regular-promotional',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },


                    {
                        name: 'Ongoing partner engagement',
                        color: '#d2342a',
                        id: 'whf-summit2021-ongoing-partner-eng',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    
                    {
                        name: 'Prepare speaker and session guidelines',
                        color: '#d2342a',
                        id: 'whf-summit2021-session-guidelines',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Communication activities to prospective participants (mailers)',
                        color: '#d2342a',
                        id: 'whf-summit2021-mailers',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Regular Summit governance meetings',
                        color: '#d2342a',
                        id: 'whf-summit2021-governancemeetings',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Ongoing engagement with partners',
                        color: '#d2342a',
                        id: 'whf-summit2021-Ongoingengagementpartners',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Ongoing speaker invitations',
                        color: '#d2342a',
                        id: 'whf-summit2021-Ongoingspeakerinvitations',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Ongoing refinement of the programme',
                        color: '#d2342a',
                        id: 'whf-summit2021-refinementprogramme',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Select travel grantees',
                        color: '#d2342a',
                        id: 'whf-summit2021-Selecttravelgrantees',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Launch call for travel grant applications',
                        color: '#d2342a',
                        id: 'whf-summit2021-travelgrant-applications',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Send invitations to attendees',
                        color: '#d2342a',
                        id: 'whf-summit2021-attendees',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Send first batches of speaker invitations',
                        color: '#d2342a',
                        id: 'whf-summit2021-first-batches',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Engage with partners',
                        color: '#d2342a',
                        id: 'whf-summit2021-first-batches',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Create webpage, registration forms, travel registration infrastructure',
                        color: '#d2342a',
                        id: 'whf-summit2021-webpage-travel',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Confirm event venues and logistics',
                        color: '#d2342a',
                        id: 'whf-summit2021-logistics',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },


                    {
                        name: 'Hold weekly Summit governance calls & meetings',
                        color: '#d2342a',
                        id: 'whf-summit2021-calls-meeting',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Draft skeleton programme & circulate to internal and external stakeholders for comments',
                        color: '#d2342a',
                        id: 'whf-summit2021-skeleton',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Convene Summit governance structure (Chair, Co-Chair, Executive Planning Committee, Expert Advisory Committee)',
                        color: '#d2342a',
                        id: 'whf-summit2021-co-chair',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Global Summit on Circulatory Health, Rethinking the Future of the Cardiovascular Workforce, Washington DC, USA',
                        color: '#d2342a',
                        id: 'whf-summit2021-usa',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 5, 15),
                        end: Date.UTC(2020, 5, 17),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'CVD Guideline dissemination',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis',
                        owner: 'WHF',
                        parent: 'whf-2020',
                        strategy: '1',
                    },
                    {
                        name: 'Conduct end line survey for year 1',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_1',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Monitor uptake and utilization of digital tools and data collection tools',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_2',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Ongoing work with the community support groups',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_3',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Set up (patient) community support groups',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_4',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Conduct training & guideline dissemination in 20-30 facilities per county',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_5',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Show case best practices from county level at the KCS Annual Scientific Congress',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_01',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Distribute guidelines, Job AIDs and data collection tools',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_02',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Prepare & disseminate seminar reports',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_03',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Conduct 3 off-site dissemination sessions using the ECHO platform',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_04',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'At county-level, conduct 2 on-site training seminars per county',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_05',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Conduct baseline',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_06',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Engage county and sub-country teams for the county-level trainings',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_n_1',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Conduct training & share training report',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_n_2',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Develop training content & digital support tools',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_n_3',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Identity Train the Trainers (ToT) workshop participants and facilitators',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_n_4',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Print CVD guidelines, Job AIDs, handbooks and MOH data collection tools',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_n_5',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Consultative discussions with HIV programme team on use of the ECHO training platform (remote learning platform)',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_n_01',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'County engagement and needs assessment',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_n_02',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'County selection & consultation with MoH at national and county level',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_n_03',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Renewal of MOU (WHF-KCS)',
                        color: '#d2342a',
                        id: 'cvd_guidlines_dis_n_04',
                        owner: 'WHF',
                        parent: 'cvd_guidlines_dis',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },


                    {
                        name: 'Community management of hypertension program in Colombia',
                        color: '#d2342a',
                        id: 'cmhpc',
                        owner: 'WHF',
                        parent: 'whf-2020',
                        strategy: '2',
                    },

                    {
                        name: 'Implementation phase continued',
                        color: '#d2342a',
                        id: 'cmhpc-ipc',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Detailed activities pending further input from WHF members in Colombia (timeline to be provided during 2020)',
                        color: '#d2342a',
                        id: 'cmhpc-activities',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Start implementation',
                        color: '#d2342a',
                        id: 'cmhpc-startimplementation',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Identify target region and communities',
                        color: '#d2342a',
                        id: 'cmhpc-identifytarget',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Finalize project design together with WHF members in Colombia',
                        color: '#d2342a',
                        id: 'cmhpc-Finalizeprojectdesign',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Convene planning meeting with WHF members in Colombia to decide on key action areas from:•	Implementing the National Registry of Hypertension •	Standardize the manual  •	Develop a strategy for community education  •	Implement a national campaign to reduce consumption of salt-rich foods  •	Develop a national strategy for early detection of hypertension  •	Develop national strategy for access to health digital technologies to control hypertension',
                        color: '#d2342a',
                        id: 'cmhpc-convene',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: 'Review roundtable report and existing health system appraisal & adjust project design to address barriers to hypertension control',
                        color: '#d2342a',
                        id: 'cmhpc-hypertension',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Convened roundtable on tackling hypertension in Colombia (28 January 2020)',
                        color: '#d2342a',
                        id: 'cmhpc-hypertensionColombia',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Update WHF’s Roadmap on Hypertension',
                        color: '#d2342a',
                        id: 'urh',
                        owner: 'WHF',
                        parent: 'whf-2020',
                        strategy: '1',

                    },

                    {
                        name: 'Convene stakeholder meeting discussion at AHA Scientific Sessions 14-16 November 2020',
                        color: '#d2342a',
                        id: 'urh-sci-sess',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Define pathway of care, roadblocks and solutions (wider group of experts through members and consultations with authors)',
                        color: '#d2342a',
                        id: 'urh-roadblocks-solu',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Convene face-to-face writing sessions & group meetings',
                        color: '#d2342a',
                        id: 'urh-face-to-face',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Follow-up on and review author input',
                        color: '#d2342a',
                        id: 'urh-Follow-up',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Conduct consultation & consensus process',
                        color: '#d2342a',
                        id: 'urh-consensus',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Convene first meeting',
                        color: '#d2342a',
                        id: 'urh-meeting',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Identify wider experts and stakeholders',
                        color: '#d2342a',
                        id: 'urh-widerexperts',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Invite group members',
                        color: '#d2342a',
                        id: 'urh-groupmembers',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Call for nominations from WHF members',
                        color: '#d2342a',
                        id: 'urh-nominations-whf',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },


                    {
                        name: 'World Bank',
                        color: '#25a0c3',
                        id: 'worldBank',
                        owner: 'Partners',
                        parent: 'partners',
                        strategy: ' ',
                    },
                    {
                        name: 'China',
                        color: '#25a0c3',
                        id: 'worldBank-China',
                        owner: 'World Bank',
                        parent: 'worldBank',
                        strategy: ' ',
                    },
                    {
                        name: 'Building People Centered Integrated Care (PCIC) System Workshop',
                        color: '#25a0c3',
                        id: 'worldBank-China-pcic',
                        owner: 'World Bank',
                        parent: 'worldBank-China',
                        start: Date.UTC(2020, 8, 18),
                        end: Date.UTC(2020, 8, 20),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Colombia',
                        color: '#25a0c3',
                        id: 'worldBank-Colombia',
                        owner: 'World Bank',
                        parent: 'worldBank',
                        strategy: ' ',
                    },
                    {
                        name: 'Development of an analytical study',
                        color: '#25a0c3',
                        id: 'worldBank-Colombia-ana-study',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia',
                        strategy: ' ',
                        
                    },

                    {
                        name: 'Approved in system',
                        color: '#25a0c3',
                        id: 'worldBank-Colombia-app-sys',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia-ana-study',
                        strategy: ' ',
                        
                    },

                    {
                        name: 'Study delivered',
                        color: '#25a0c3',
                        id: 'worldBank-Colombia-Studydelivered',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia-ana-study',
                        strategy: ' ',
                        
                    },
                    {
                        name: 'Data analysis',
                        color: '#25a0c3',
                        id: 'worldBank-Colombia-Dataanalysis',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia-ana-study',
                        strategy: ' ',
                        
                    },
                    {
                        name: 'Submitted Report- Shared the work with AA partners in 8-Nov-2018',
                        color: '#25a0c3',
                        id: 'worldBank-Colombia-shared-report',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia-ana-study',
                        strategy: ' ',
                        
                    },

                    {
                        name: 'New operation',
                        color: '#25a0c3',
                        id: 'worldBank-Colombia-Newoperation',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia',
                        strategy: ' ',
                        
                    },

                    {
                        name: 'Preparation started',
                        color: '#25a0c3',
                        id: 'worldBank-Colombia-prep-start',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia-Newoperation',
                        strategy: ' ',
                        
                    },

                    {
                        name: 'Study shared at workshop with MoH',
                        color: '#25a0c3',
                        id: 'worldBank-Colombia-study-shared-moh',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia',
                        strategy: ' ',
                        
                    },

                    {
                        name: 'Date fixed',
                        color: '#25a0c3',
                        id: 'worldBank-Colombia-Datefixed',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia-study-shared-moh',
                        strategy: ' ',
                        
                    },
                    {
                        name: 'Organized workshop',
                        color: '#25a0c3',
                        id: 'worldBank-Colombia-Organizedworkshop',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia-study-shared-moh',
                        start: Date.UTC(2020, 5, 1),
                        end: Date.UTC(2020, 5, 1),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: 'El Salvador',
                        color: '#25a0c3',
                        id: 'worldBank-es',
                        owner: 'World Bank',
                        parent: 'worldBank',
                        strategy: ' ',
                    },
                    {
                        name: 'Country Pilot (RETF)',
                        color: '#25a0c3',
                        id: 'worldBank-es-retf',
                        owner: 'World Bank',
                        parent: 'worldBank-es',
                        strategy: ' ',
                        
                    },
                    {
                        name: 'Approved in system',
                        color: '#25a0c3',
                        id: 'worldBank-es-approve-sys',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf',
                        start: Date.UTC(2018, 8, 13),
                        end: Date.UTC(2018, 8, 13),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: 'First disbursement',
                        color: '#25a0c3',
                        id: 'worldBank-es-Firstdisbursement',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf',
                        start: Date.UTC(2019, 6, 8),
                        end: Date.UTC(2019, 6, 8),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: 'Screening 86,400 women for cervical cancer',
                        color: '#25a0c3',
                        id: 'worldBank-es-screening',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf',
                        start: Date.UTC(2019, 4, 8),
                        end: Date.UTC(2019, 4, 8),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: 'HPV vaccination for 14,286 girls',
                        color: '#25a0c3',
                        id: 'worldBank-es-screening',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf',
                        start: Date.UTC(2019, 4, 8),
                        end: Date.UTC(2019, 4, 8),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: 'Held workshop',
                        color: '#25a0c3',
                        id: 'worldBank-es-held_workshop',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf',
                        start: Date.UTC(2019, 6, 23),
                        end: Date.UTC(2019, 7, 24),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: "National workshop to discuss the relevance of NCDs in the country's economy",
                        color: '#25a0c3',
                        id: 'worldBank-es-national_workshop',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf',
                        start: Date.UTC(2019, 9, 15),
                        end: Date.UTC(2019, 9, 15),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: "Full time data in and project closed",
                        color: '#25a0c3',
                        id: 'worldBank-es-full-time',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf',
                        strategy: ' ',
                        
                        
                    },
                    {
                        name: 'Haf time data in',
                        color: '#25a0c3',
                        id: 'worldBank-es-haf-time',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf',
                        strategy: ' ',
                        
                        
                    },

                    {
                        name: 'Pilot Preparation (BETF)',
                        color: '#25a0c3',
                        id: 'worldBank-es-betf',
                        owner: 'World Bank',
                        parent: 'worldBank-es',
                        strategy: ' ',
                        
                    },

                    {
                        name: "Approved in system",
                        color: '#25a0c3',
                        id: 'worldBank-es-Appsysbetf',
                        owner: 'World Bank',
                        parent: 'worldBank-es-betf',
                        start: Date.UTC(2019, 7, 2),
                        end: Date.UTC(2019, 7, 2),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: "Started project preparation",
                        color: '#25a0c3',
                        id: 'worldBank-es-ppbetf',
                        owner: 'World Bank',
                        parent: 'worldBank-es-betf',
                        strategy: ' ',
                        
                    },

                    {
                        name: "Preparation completed – Baseline survey submitted",
                        color: '#25a0c3',
                        id: 'worldBank-es-ssbbetf',
                        owner: 'World Bank',
                        parent: 'worldBank-es-betf',
                        start: Date.UTC(2020, 7, 10),
                        end: Date.UTC(2020, 7, 10),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: 'General',
                        color: '#25a0c3',
                        id: 'worldBank-General',
                        owner: 'World Bank',
                        parent: 'worldBank',
                        strategy: ' ',
                    },
                    {
                        name: 'Recruit internal WB story teller to be liaised with WS and FSG',
                        color: '#25a0c3',
                        id: 'worldBank-General-recruit-wb',
                        owner: 'World Bank',
                        parent: 'worldBank-General',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 1, 14),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: 'WB to share revised proposal',
                        color: '#25a0c3',
                        id: 'worldBank-General-revised_prop',
                        owner: 'World Bank',
                        parent: 'worldBank-General',
                        start: Date.UTC(2020, 1, 28),
                        end: Date.UTC(2020, 1, 28),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'WB narrative to be developed and shared with SC',
                        color: '#25a0c3',
                        id: 'worldBank-General-wb_narrative-sc',
                        owner: 'World Bank',
                        parent: 'worldBank-General',
                        start: Date.UTC(2020, 3, 13),
                        end: Date.UTC(2020, 3, 13),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Ghana',
                        color: '#25a0c3',
                        id: 'worldBank-Ghana',
                        owner: 'World Bank',
                        parent: 'worldBank',
                        strategy: ' ',
                    },

                    {
                        name: 'STEP Survey 1',
                        color: '#25a0c3',
                        id: 'worldBank-step-survey1',
                        owner: 'World Bank',
                        parent: 'worldBank-Ghana',
                        strategy: ' ',
                    },
                    {
                        name: 'Approved in system',
                        color: '#25a0c3',
                        id: 'worldBank-app_syste',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey1',
                        strategy: ' ',
                    },

                    {
                        name: 'NCD policy drafted',
                        color: '#25a0c3',
                        id: 'worldBank-ncd_policy_drafted',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey1',
                        strategy: ' ',
                    },

                    {
                        name: 'Protocol and survey tool drafted',
                        color: '#25a0c3',
                        id: 'worldBank-tool-survey',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey1',
                        strategy: ' ',
                    },

                    {
                        name: 'NCD policy finalised and multi-stakeholder validation held',
                        color: '#25a0c3',
                        id: 'worldBank-finalized',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey1',
                        strategy: ' ',
                    },

                    {
                        name: 'Finalization of survey instrument, protocol and draft proposal for national ethical review',
                        color: '#25a0c3',
                        id: 'worldBank-finalized-ethical-review',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey1',
                        strategy: ' ',
                    },

                    {
                        name: 'STEP Survey 2',
                        color: '#25a0c3',
                        id: 'worldBank-step-survey2',
                        owner: 'World Bank',
                        parent: 'worldBank-Ghana',
                        strategy: ' ',
                    },
                    {
                        name: 'AIN approved in system',
                        color: '#25a0c3',
                        id: 'worldBank-app_syste',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey2',
                        strategy: ' ',
                    },
                    {
                        name: 'CN, GFR approved in system',
                        color: '#25a0c3',
                        id: 'worldBank-app_gfr',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey2',
                        strategy: ' ',
                    },
                    {
                        name: 'Survey report provided',
                        color: '#25a0c3',
                        id: 'worldBank-srp',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey2',
                        strategy: ' ',
                    },
                    {
                        name: 'Human Capital Project',
                        color: '#25a0c3',
                        id: 'worldBank-hcp',
                        owner: 'World Bank',
                        parent: 'worldBank',
                        strategy: ' ',
                    },

                    {
                        name: 'Approved in system',
                        color: '#25a0c3',
                        id: 'worldBank-hcp-appSys',
                        owner: 'World Bank',
                        parent: 'worldBank-hcp',
                        start: Date.UTC(2019, 2, 1),
                        end: Date.UTC(2019, 2, 18),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: '3 studies commissioned',
                        color: '#25a0c3',
                        id: 'worldBank-hcp-studies_comm3',
                        owner: 'World Bank',
                        parent: 'worldBank-hcp',
                        start: Date.UTC(2019, 4, 7),
                        end: Date.UTC(2019, 5, 28),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: '1 study completed',
                        color: '#25a0c3',
                        id: 'worldBank-hcp-studies_comp1',
                        owner: 'World Bank',
                        parent: 'worldBank-hcp',
                        start: Date.UTC(2019, 8, 30),
                        end: Date.UTC(2019, 8, 30),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: '3 studies completed',
                        color: '#25a0c3',
                        id: 'worldBank-hcp-studies_comp3',
                        owner: 'World Bank',
                        parent: 'worldBank-hcp',
                        start: Date.UTC(2019, 11, 31),
                        end: Date.UTC(2019, 11, 31),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Studies shared',
                        color: '#25a0c3',
                        id: 'worldBank-hcp-studies_shared',
                        owner: 'World Bank',
                        parent: 'worldBank-hcp',
                        start: Date.UTC(2019, 11, 31),
                        end: Date.UTC(2019, 11, 31),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },


                    {
                        name: 'Joint Learning Network',
                        color: '#25a0c3',
                        id: 'worldBank-jln',
                        owner: 'World Bank',
                        parent: 'worldBank',
                        strategy: ' ',
                    },

                    {
                        name: 'Approved by JLN Steering Group',
                        color: '#25a0c3',
                        id: 'worldBank-JLNSteering',
                        owner: 'World Bank',
                        parent: 'worldBank-jln',
                        start: Date.UTC(2019, 7, 30),
                        end: Date.UTC(2019, 7, 30),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Learning event planned',
                        color: '#25a0c3',
                        id: 'worldBank-event_planning',
                        owner: 'World Bank',
                        parent: 'worldBank-jln',
                        start: Date.UTC(2019, 7, 30),
                        end: Date.UTC(2019, 7, 30),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Event held',
                        color: '#25a0c3',
                        id: 'worldBank-event_held',
                        owner: 'World Bank',
                        parent: 'worldBank-jln',
                        start: Date.UTC(2019, 11, 4),
                        end: Date.UTC(2019, 11, 5),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Report submitted',
                        color: '#25a0c3',
                        id: 'worldBank-report_submitted',
                        owner: 'World Bank',
                        parent: 'worldBank-jln',
                        strategy: ' ',
                    },

                    {
                        name: 'Proposal shared with AA',
                        color: '#25a0c3',
                        id: 'worldBank-shared_aa',
                        owner: 'World Bank',
                        parent: 'worldBank-jln',
                        strategy: ' ',strategy: ' ',
                    },

                    {
                        name: 'Kenya',
                        color: '#25a0c3',
                        id: 'worldBank-kenya',
                        owner: 'World Bank',
                        parent: 'worldBank',
                        strategy: ' ',
                    },

                    {
                        name: 'Country Pilot',
                        color: '#25a0c3',
                        id: 'worldBank-country_pilot',
                        owner: 'World Bank',
                        parent: 'worldBank-kenya',
                        strategy: ' ',
                    },

                    {
                        name: 'Project effective',
                        color: '#25a0c3',
                        id: 'worldBank-project_effective',
                        owner: 'World Bank',
                        parent: 'worldBank-country_pilot',
                        start: Date.UTC(2018, 1, 28),
                        end: Date.UTC(2018, 1, 28),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Project approved',
                        color: '#25a0c3',
                        id: 'worldBank-project_approved',
                        owner: 'World Bank',
                        parent: 'worldBank-country_pilot',
                        start: Date.UTC(2017, 7, 22),
                        end: Date.UTC(2017, 7, 22),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'First disbursement',
                        color: '#25a0c3',
                        id: 'worldBank-First-disbursement',
                        owner: 'World Bank',
                        parent: 'worldBank-country_pilot',
                        strategy: ' ',
                    },

                    {
                        name: 'Half time data in',
                        color: '#25a0c3',
                        id: 'worldBank-halfTime',
                        owner: 'World Bank',
                        parent: 'worldBank-country_pilot',
                        strategy: ' ',
                    },

                    {
                        name: 'Full time data in and project closed',
                        color: '#25a0c3',
                        id: 'worldBank-fullTime',
                        owner: 'World Bank',
                        parent: 'worldBank-country_pilot',
                        strategy: ' ',
                    },

                    {
                        name: 'Kenya Learning',
                        color: '#25a0c3',
                        id: 'worldBank-KenyaLearning',
                        owner: 'World Bank',
                        parent: 'worldBank-kenya',
                        strategy: ' ',
                    },

                    {
                        name: 'Launch workshop',
                        color: '#25a0c3',
                        id: 'worldBank-Launchworkshop',
                        owner: 'World Bank',
                        parent: 'worldBank-KenyaLearning',
                        start: Date.UTC(2018, 2, 30),
                        end: Date.UTC(2018, 2, 30),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: '2 learning events in year 1',
                        color: '#25a0c3',
                        id: 'worldBank-learning2events',
                        owner: 'World Bank',
                        parent: 'worldBank-KenyaLearning',
                        strategy: ' ',
                    },
                    {
                        name: 'Study on socioeconomic impact of cancer on household/family',
                        color: '#25a0c3',
                        id: 'worldBank-socioeconomic',
                        owner: 'World Bank',
                        parent: 'worldBank-KenyaLearning',
                        strategy: ' ',
                    },
                    {
                        name: 'Working paper summarising all results from the county pilot',
                        color: '#25a0c3',
                        id: 'worldBank-pilot',
                        owner: 'World Bank',
                        parent: 'worldBank-KenyaLearning',
                        strategy: ' ',
                    },

                    {
                        name: 'MSH',
                        color: '#25a0c3',
                        id: 'worldBank-MSH',
                        owner: 'World Bank',
                        parent: 'worldBank',
                        strategy: ' ',
                    },
                    {
                        name: '3 country or regional workshops planned',
                        color: '#25a0c3',
                        id: 'worldBank-MSH-cr',
                        owner: 'World Bank',
                        parent: 'worldBank-MSH',
                        
                        end: Date.UTC(2018, 5, 28),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',

                    },

                    {
                        name: 'Extension of contract with MSH completed',
                        color: '#25a0c3',
                        id: 'worldBank-MSH-ecc',
                        owner: 'World Bank',
                        parent: 'worldBank-MSH',
                        strategy: ' ',

                    },

                    {
                        name: 'Compendium, 3 workshops and webinar delivered (year 1)',
                        color: '#25a0c3',
                        id: 'worldBank-MSH-cwwd',
                        owner: 'World Bank',
                        parent: 'worldBank-MSH',
                        start: Date.UTC(2018, 10, 8),
                        end: Date.UTC(2018, 10, 8),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',

                    },

                    {
                        name: '3 workshops completed and 3 more planned',
                        color: '#25a0c3',
                        id: 'worldBank-MSH-wcp',
                        owner: 'World Bank',
                        parent: 'worldBank-MSH',
                        start: Date.UTC(2019, 5, 28),
                        end: Date.UTC(2019, 9, 31),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'All workshops completed and updated compendium delivered',
                        color: '#25a0c3',
                        id: 'worldBank-MSH-wccd',
                        owner: 'World Bank',
                        parent: 'worldBank-MSH',
                        strategy: ' ',

                    },
                    {
                        name: 'Regulation',
                        color: '#25a0c3',
                        id: 'worldBank-Regulation',
                        owner: 'World Bank',
                        parent: 'worldBank',
                        strategy: ' ',
                    },
                    {
                        name: 'GS1 Conference Lagos',
                        color: '#25a0c3',
                        id: 'worldBank-Regulation-lagos',
                        owner: 'World Bank',
                        parent: 'worldBank-Regulation',
                        strategy: ' ',
                    },

                    {
                        name: 'Report submitted',
                        color: '#25a0c3',
                        id: 'worldBank-Regulation-lagos-rs',
                        owner: 'World Bank',
                        parent: 'worldBank-Regulation-lagos',
                        start: Date.UTC(2019, 11, 31),
                        end: Date.UTC(2019, 11, 31),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Conference held',
                        color: '#25a0c3',
                        id: 'worldBank-Regulation-lagos-ch',
                        owner: 'World Bank',
                        parent: 'worldBank-Regulation-lagos',
                        start: Date.UTC(2019, 8, 19),
                        end: Date.UTC(2019, 8, 19),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Grant to GS1 processed',
                        color: '#25a0c3',
                        id: 'worldBank-Regulation-lagos-gs1',
                        owner: 'World Bank',
                        parent: 'worldBank-Regulation-lagos',
                        strategy: ' ',

                    },
                    {
                        name: 'Approved in system',
                        color: '#25a0c3',
                        id: 'worldBank-Regulation-lagos-asys',
                        owner: 'World Bank',
                        parent: 'worldBank-Regulation-lagos',
                        start: Date.UTC(2019, 1, 1),
                        end: Date.UTC(2019, 2, 18),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'PAC E-learning',
                        color: '#25a0c3',
                        id: 'worldBank-PAC_E-learning',
                        owner: 'World Bank',
                        parent: 'worldBank-Regulation',
                        strategy: ' ',
                    },

                    {
                        name: 'developed curricura',
                        color: '#25a0c3',
                        id: 'worldBank-PAC_E-learning-dcur',
                        owner: 'World Bank',
                        parent: 'worldBank-PAC_E-learning',
                        start: Date.UTC(2019, 3, 30),
                        end: Date.UTC(2019, 1, 15),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: 'Work commissioned',
                        color: '#25a0c3',
                        id: 'worldBank-PAC_E-learning-wcom',
                        owner: 'World Bank',
                        parent: 'worldBank-PAC_E-learning',
                        start: Date.UTC(2019, 2, 18),
                        end: Date.UTC(2019, 3, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'Approved in system',
                        color: '#25a0c3',
                        id: 'worldBank-PAC_E-learning-a_system',
                        owner: 'World Bank',
                        parent: 'worldBank-PAC_E-learning',
                        start: Date.UTC(2019, 1, 1),
                        end: Date.UTC(2019, 2, 18),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },

                    {
                        name: 'SC review',
                        color: '#25a0c3',
                        id: 'worldBank-PAC_E-learning-sc-review',
                        owner: 'World Bank',
                        parent: 'worldBank-PAC_E-learning',
                        strategy: ' ',

                    },
                    {
                        name: 'e-curricula launched',
                        color: '#25a0c3',
                        id: 'worldBank-PAC_E-learning-e-curr',
                        owner: 'World Bank',
                        parent: 'worldBank-PAC_E-learning',
                        strategy: ' ',

                    },
                    {
                        name: 'Vietnam',
                        color: '#25a0c3',
                        id: 'worldBank-Vietnam',
                        owner: 'World Bank',
                        parent: 'worldBank',
                        strategy: ' ',
                    },

                    {
                        name: 'Loan co-financing grant (RETF) of US$3mn',
                        color: '#25a0c3',
                        id: 'worldBank-Vietnam-lcfg',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam',
                        strategy: ' ',
                    },
                    {
                        name: 'Project was approved',
                        color: '#25a0c3',
                        id: 'worldBank-Vietnam-pwa',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-lcfg',
                        strategy: ' ',
                    },

                    {
                        name: 'Expect project signed',
                        color: '#25a0c3',
                        id: 'worldBank-Vietnam-exps',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-lcfg',
                        strategy: ' ',
                    },
                    {
                        name: 'End of first year ISR rates project as MS or S on grant-financed activities',
                        color: '#25a0c3',
                        id: 'worldBank-Vietnam-isr1',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-lcfg',
                        strategy: ' ',
                    },

                    {
                        name: 'End of second year ISR rates project as MS or S on grant-financed activities',
                        color: '#25a0c3',
                        id: 'worldBank-Vietnam-isr2',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-lcfg',
                        strategy: ' ',
                    },
                    {
                        name: 'End of third year ISR rates project as MS or S on grant-financed activities',
                        color: '#25a0c3',
                        id: 'worldBank-Vietnam-isr3',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-lcfg',
                        strategy: ' ',
                    },

                    {
                        name: 'TA to clinical decision support app for NCDs',
                        color: '#25a0c3',
                        id: 'worldBank-Vietnam-tcds',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam',
                        strategy: ' ',
                    },

                    {
                        name: 'Activity initiated in portal',
                        color: '#25a0c3',
                        id: 'worldBank-Vietnam-aips',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-tcds',
                        start: Date.UTC(2020, 1, 18),
                        end: Date.UTC(2020, 2, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',

                    },

                    {
                        name: 'App developed',
                        color: '#25a0c3',
                        id: 'worldBank-Vietnam-appDevop',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-tcds',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 9, 30),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',

                    },
                    {
                        name: 'App tested in field',
                        color: '#25a0c3',
                        id: 'worldBank-Vietnam-apptestfield',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-tcds',
                        start: Date.UTC(2020, 10, 2),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',

                    },
                    {
                        name: 'Implementation and evaluation plan developed',
                        color: '#25a0c3',
                        id: 'worldBank-Vietnam-iepd',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-tcds',
                        start: Date.UTC(2020, 10, 2),
                        end: Date.UTC(2021, 0, 29),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',

                    },

                    {
                        name: 'App ready for deployment as a project pilot',
                        color: '#25a0c3',
                        id: 'worldBank-Vietnam-ardpp',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-tcds',
                        start: Date.UTC(2021, 1, 26),
                        end: Date.UTC(2021, 1, 26),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',

                    },


                    {
                        name: 'Research',
                        color: '#faa73f',
                        id: 'research',
                        owner: 'Partners',
                        parent: 'partners',
                        strategy: ' ',
                    },
                    {
                        name: 'Best Practices for in kind contributions in public health publication',
                        color: '#faa73f',
                        id: 'research-bpkcphp',
                        owner: 'Research',
                        parent: 'research',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: 'Evidence based papers',
                        color: '#faa73f',
                        id: 'research-ebp',
                        owner: 'Research',
                        parent: 'research',
                        strategy: ' ',
                        
                    },

                    {
                        name: '6th paper to be delivered',
                        color: '#faa73f',
                        id: 'research-p6bd',
                        owner: 'Research',
                        parent: 'research-ebp',
                        start: Date.UTC(2020, 10, 30),
                        end: Date.UTC(2020, 10, 30),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                    },
                    {
                        name: '5th paper to be delivered',
                        color: '#faa73f',
                        id: 'research-p5bd',
                        owner: 'Research',
                        parent: 'research-ebp',
                        start: Date.UTC(2020, 8, 30),
                        end: Date.UTC(2020, 8, 30),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: '4th paper to be delivered',
                        color: '#faa73f',
                        id: 'research-p4bd',
                        owner: 'Research',
                        parent: 'research-ebp',
                        start: Date.UTC(2020, 6, 31),
                        end: Date.UTC(2020, 6, 31),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: 'Second and third papers: To be delivered',
                        color: '#faa73f',
                        id: 'research-p2bd',
                        owner: 'Research',
                        parent: 'research-ebp',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 4, 15),
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },

                    {
                        name: 'First Paper: To be delivered',
                        color: '#faa73f',
                        id: 'research-p1bd',
                        owner: 'Research',
                        parent: 'research-ebp',
                        start: Date.UTC(2020, 1, 28),
                        end: Date.UTC(2020, 1, 28),
                        milestone:true,
                        completed: {
                            amount: 0
                        },
                        strategy: ' ',
                        
                    },


                   
                    
                ],
            },


            

        ],
        // responsive: {
        //     rules: [{
        //         condition: {
        //             width: 250
        //         },
        //         chartOptions: {
                    
        //             yAxis: {
        //                 scrollbar: {
        //                     enabled: true,
        //                     showFull: false
        //                 },
                        
        //                 max:5,
                        
        //             }
                    
        //         }
        //     }]
        // },

        exporting: {
            menuItemDefinitions: {
                // Custom definition
                label: {
                    onclick: function () {
                        this.renderer.label(
                            'You just clicked a custom menu item',
                            100,
                            100
                        )
                            .attr({
                                fill: '#a4edba',
                                r: 5,
                                padding: 10,
                                zIndex: 10
                            })
                            .css({
                                fontSize: '1.5em'
                            })
                            .add();
                    },
                    text: 'Show label'
                }
            },
            buttons: {
                contextButton: {
                    menuItems: ["viewFullscreen"]
                }
            }
        }
        
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