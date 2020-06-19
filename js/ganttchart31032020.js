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
            uniqueNames: false,
            labels: {
                useHTML: true,
                style:{
                    width: '250px',
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
            selected: 4
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
                    // Communications team group
                    {
                        name: 'Communications team',
                        color: '#005B9A',
                        id: 'communications_team',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                    },
                    // Key Event Support
                    {
                        name: 'Key Event Support',
                        color: '#005B9A',
                        id: 'key_event_support',
                        owner: 'AA Committee teams',
                        parent: 'communications_team',
                    },
                    {
                        name: 'BCR',
                        color: '#005B9A',
                        id: 'bcr',
                        owner: 'AA Committee teams',
                        parent: 'key_event_support',
                    },
                   
                    {
                        name: 'BCR: May 25-26',
                        color: '#005B9A',
                        id: 'bcr_may_25_26',
                        parent: 'bcr',
                        owner: 'key_event_support',
                        start: Date.UTC(2020, 4, 25),
                        end: Date.UTC(2020, 4, 26),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Devex World 2020',
                        color: '#005B9A',
                        id: 'devex_world_2020',
                        owner: 'AA Committee teams',
                        parent: 'key_event_support',
                    },
                   
                    {
                        name: 'Develop concept note of the event',
                        color: '#005B9A',
                        id: 'develop_concept_note_of_the_event',
                        parent: 'devex_world_2020',
                        owner: 'key_event_support',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Event date',
                        color: '#005B9A',
                        id: 'event_date',
                        parent: 'devex_world_2020',
                        owner: 'key_event_support',
                        start: Date.UTC(2020, 5, 8),
                        end: Date.UTC(2020, 5, 8),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'UNGA Side Event',
                        color: '#005B9A',
                        id: 'unga_side_event',
                        owner: 'AA Committee teams',
                        parent: 'key_event_support',
                    },
                   
                    {
                        name: 'Event week of Sep. 21',
                        color: '#005B9A',
                        id: 'event_week_sep21',
                        parent: 'unga_side_event',
                        owner: 'key_event_support',
                        start: Date.UTC(2020, 8, 21),
                        end: Date.UTC(2020, 8, 25),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Planning',
                        color: '#005B9A',
                        id: 'planning',
                        parent: 'unga_side_event',
                        owner: 'key_event_support',
                        start: Date.UTC(2020, 11, 20),
                        end: Date.UTC(2020, 6, 17),
                        completed: {
                            amount: 0
                        },
                    },
                    // Member Company Communications
                    {
                        name: 'Member Company Communications',
                        color: '#005B9A',
                        id: 'member_company_communications',
                        owner: 'AA Committee teams',
                        parent: 'communications_team',
                    },
                    {
                        name: 'Bi-Annual Analytics Call (KPI updates)',
                        color: '#005B9A',
                        id: 'bi_annual_analytics',
                        owner: 'AA Committee teams',
                        parent: 'member_company_communications',
                    },
                    {
                        name: '2 (TBC)',
                        color: '#005B9A',
                        id: 'tbc_2',
                        parent: 'bi_annual_analytics',
                        owner: 'member_company_communications',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 9, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: '1 (TBC)',
                        color: '#005B9A',
                        id: 'tbc_1',
                        parent: 'bi_annual_analytics',
                        owner: 'member_company_communications',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 1, 28),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Monthly Email Update (Media analysis and social tools)',
                        color: '#005B9A',
                        id: 'monthly_email_update',
                        owner: 'AA Committee teams',
                        parent: 'member_company_communications',
                    },
                    {
                        name: 'Send first week of each month',
                        color: '#005B9A',
                        id: 'send_first_week_of_each_month',
                        parent: 'monthly_email_update',
                        owner: 'member_company_communications',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Quarterly Comms Leads Call',
                        color: '#005B9A',
                        id: 'quarterly_comms_leads_call',
                        owner: 'AA Committee teams',
                        parent: 'member_company_communications',
                    },
                    {
                        name: 'End of year comms leads call',
                        color: '#005B9A',
                        id: 'end_of_year_comms_leads_call',
                        parent: 'quarterly_comms_leads_call',
                        owner: 'member_company_communications',
                        start: Date.UTC(2020, 11, 3),
                        end: Date.UTC(2020, 11, 3),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Q4',
                        color: '#005B9A',
                        id: 'q4',
                        parent: 'quarterly_comms_leads_call',
                        owner: 'member_company_communications',
                        start: Date.UTC(2020, 8, 29),
                        end: Date.UTC(2020, 8, 29),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Q3',
                        color: '#005B9A',
                        id: 'q3',
                        parent: 'quarterly_comms_leads_call',
                        owner: 'member_company_communications',
                        start: Date.UTC(2020, 5, 25),
                        end: Date.UTC(2020, 5, 25),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Q2',
                        color: '#005B9A',
                        id: 'q2',
                        parent: 'quarterly_comms_leads_call',
                        owner: 'member_company_communications',
                        start: Date.UTC(2020, 3, 30),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Q1 Jan 29',
                        color: '#005B9A',
                        id: 'q1',
                        parent: 'quarterly_comms_leads_call',
                        owner: 'member_company_communications',
                        start: Date.UTC(2020, 0, 29),
                        end: Date.UTC(2020, 0, 29),
                        completed: {
                            amount: 0
                        },
                    },
                    // Narrative & Key Messages & Communications Collateral
                    {
                        name: 'Narrative & Key Messages & Communications Collateral',
                        color: '#005B9A',
                        id: 'nkmcomm_collateral',
                        owner: 'AA Committee teams',
                        parent: 'communications_team',
                    },
                    {
                        name: 'Measurement Report',
                        color: '#005B9A',
                        id: 'measurement_report',
                        owner: 'AA Committee teams',
                        parent: 'nkmcomm_collateral',
                    },
                    {
                        name: 'WS meeting CCAN for the communications strategy',
                        color: '#005B9A',
                        id: 'ws_meeting_ccan',
                        parent: 'measurement_report',
                        owner: 'nkmcomm_collateral',
                        start: Date.UTC(2020, 2, 11),
                        end: Date.UTC(2020, 2, 11),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Development of March analytics report at the conclusion of February',
                        color: '#005B9A',
                        id: 'devp_march_ana_rep_feb',
                        parent: 'measurement_report',
                        owner: 'nkmcomm_collateral',
                        start: Date.UTC(2020, 2, 9),
                        end: Date.UTC(2020, 2, 9),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'WS to send survey to collect narrative and website feedback to all member companies',
                        color: '#005B9A',
                        id: 'ws_survey_mem_companies',
                        owner: 'AA Committee teams',
                        parent: 'nkmcomm_collateral',
                        start: Date.UTC(2020, 1, 11),
                        end: Date.UTC(2020, 1, 21),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Update AA comms materials with refined key messages',
                        color: '#005B9A',
                        id: 'update_aa_key_msg',
                        owner: 'AA Committee teams',
                        parent: 'nkmcomm_collateral',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Narrative validation (internal & external)',
                        color: '#005B9A',
                        id: 'narrative_validation',
                        owner: 'AA Committee teams',
                        parent: 'nkmcomm_collateral',
                        start: Date.UTC(2020, 1, 10),
                        end: Date.UTC(2020, 1, 17),
                        completed: {
                            amount: 0
                        },
                    },
                    // Paid Media Partnerships
                    {
                        name: 'Paid Media Partnerships',
                        color: '#005B9A',
                        id: 'paid_media_partnerships',
                        owner: 'AA Committee teams',
                        parent: 'communications_team',
                    },
                    {
                        name: 'BBC Mini-Documentaries',
                        color: '#005B9A',
                        id: 'bbc_Mini_documentaries',
                        owner: 'AA Committee teams',
                        parent: 'paid_media_partnerships',
                    },
                    {
                        name: 'Social Promotion',
                        color: '#005B9A',
                        id: 'social_promotion',
                        owner: 'AA Committee teams',
                        parent: 'bbc_Mini_documentaries',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Films released at NCD Alliance Global Forum Feb 9-12',
                        color: '#005B9A',
                        id: 'films_rel_ncd',
                        owner: 'AA Committee teams',
                        parent: 'bbc_Mini_documentaries',
                        start: Date.UTC(2020, 1, 10),
                        end: Date.UTC(2020, 1, 12),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Filming in Kenya, Ghana & Vietnam',
                        color: '#005B9A',
                        id: 'filming_kenya',
                        owner: 'AA Committee teams',
                        parent: 'bbc_Mini_documentaries',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 0, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    // Social & Digital Media
                    {
                        name: 'Social & Digital Media',
                        color: '#005B9A',
                        id: 'social_digi_media',
                        owner: 'AA Committee teams',
                        parent: 'communications_team',
                    },
                    {
                        name: 'Access Today Newsletter',
                        color: '#005B9A',
                        id: 'access_today_newsletter',
                        owner: 'AA Committee teams',
                        parent: 'social_digi_media',
                    },
                    {
                        name: 'Published last week of month',
                        color: '#005B9A',
                        id: 'published_last_week_month',
                        owner: 'social_digi_media',
                        parent: 'access_today_newsletter',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Media Landscape and Owned Content Reporting',
                        color: '#005B9A',
                        id: 'media_landscape',
                        owner: 'AA Committee teams',
                        parent: 'social_digi_media',
                    },
                    {
                        name: 'Next report to be shared',
                        color: '#005B9A',
                        id: 'next_report',
                        owner: 'social_digi_media',
                        parent: 'media_landscape',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 2, 6),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Podcast',
                        color: '#005B9A',
                        id: 'podcast',
                        owner: 'AA Committee teams',
                        parent: 'social_digi_media',
                    },
                    {
                        name: "WS to share a project brief for the Secrateriat's review that outlines the approach, format, and next steps for the podcast project.",
                        color: '#005B9A',
                        id: 'ws_project_brief',
                        owner: 'social_digi_media',
                        parent: 'podcast',
                        start: Date.UTC(2020, 2, 23),
                        end: Date.UTC(2020, 2, 23),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: "WS to research top global health and member company podcasts; develop backgrounders on potential host options",
                        color: '#005B9A',
                        id: 'ws_project_research',
                        owner: 'social_digi_media',
                        parent: 'podcast',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 1, 28),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'PodcastSocial strategy & development of Social Playbook',
                        color: '#005B9A',
                        id: 'podcastSocial',
                        owner: 'AA Committee teams',
                        parent: 'social_digi_media',
                    },
                    {
                        name: 'Playbook finalised end of month',
                        color: '#005B9A',
                        id: 'playbook_finalised_end_month',
                        owner: 'social_digi_media',
                        parent: 'podcastSocial',
                        start: Date.UTC(2020, 0, 16),
                        end: Date.UTC(2020, 1, 28),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Weekly editorial calendar',
                        color: '#005B9A',
                        id: 'weekly_editorial_calendar',
                        owner: 'AA Committee teams',
                        parent: 'social_digi_media',
                    },
                    {
                        name: 'Updated each week (internal)',
                        color: '#005B9A',
                        id: 'internal',
                        owner: 'social_digi_media',
                        parent: 'weekly_editorial_calendar',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Media tool kit to be sent every month',
                        color: '#005B9A',
                        id: 'media_tool_kit',
                        owner: 'social_digi_media',
                        parent: 'weekly_editorial_calendar',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    // Website Refresh
                    {
                        name: 'Website Refresh',
                        color: '#005B9A',
                        id: 'website_refresh',
                        owner: 'AA Committee teams',
                        parent: 'communications_team',
                    },
                    {
                        name: 'End of month, updated site live',
                        color: '#005B9A',
                        id: 'eom_update_site_live',
                        owner: 'website_refresh',
                        parent: 'website_refresh',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    // Year 3 Report
                    {
                        name: 'Year 3 Report',
                        color: '#005B9A',
                        id: 'year_report3',
                        owner: 'AA Committee teams',
                        parent: 'communications_team',
                    },
                    {
                        name: 'Report design',
                        color: '#005B9A',
                        id: 'report_design',
                        owner: 'year_report3',
                        parent: 'year_report3',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Designed & Published- completed by April 24',
                        color: '#005B9A',
                        id: 'designed_published_apr24',
                        owner: 'year_report3',
                        parent: 'year_report3',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 3, 24),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Content in development',
                        color: '#005B9A',
                        id: 'content_development',
                        owner: 'year_report3',
                        parent: 'year_report3',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 5),
                        completed: {
                            amount: 0
                        },
                    },

                    // newgroup
                    // External Advisory Group
                    {
                        name: 'External Advisory Group',
                        color: '#005B9A',
                        id: 'external_advisory_group',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                    },
                    {
                        name: 'Find professional for ToR finalization',
                        color: '#005B9A',
                        id: 'ToR finalization',
                        owner: 'external_advisory_group',
                        parent: 'external_advisory_group',
                        start: Date.UTC(2020, 5, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'In person EAG meeting 2',
                        color: '#005B9A',
                        id: 'eag_meeting2',
                        owner: 'external_advisory_group',
                        parent: 'external_advisory_group',
                        start: Date.UTC(2020, 11, 2),
                        end: Date.UTC(2020, 11, 2),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'In person EAG meeting',
                        color: '#005B9A',
                        id: 'eag_meeting',
                        owner: 'external_advisory_group',
                        parent: 'external_advisory_group',
                        start: Date.UTC(2020, 4, 26),
                        end: Date.UTC(2020, 4, 26),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Candidate interviews and selection',
                        color: '#005B9A',
                        id: 'candi_interviews_selection',
                        owner: 'external_advisory_group',
                        parent: 'external_advisory_group',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 2, 20),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Candidate identification',
                        color: '#005B9A',
                        id: 'candidate_identification',
                        owner: 'external_advisory_group',
                        parent: 'external_advisory_group',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 1, 28),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Share ToR with SC for feedback',
                        color: '#005B9A',
                        id: 'tor_sc_feedback',
                        owner: 'external_advisory_group',
                        parent: 'external_advisory_group',
                        start: Date.UTC(2020, 0, 27),
                        end: Date.UTC(2020, 0, 31),
                        completed: {
                            amount: 0
                        },
                    },
                     // newgroup
                    // M&R team
                    {
                        name: 'M&R team',
                        color: '#005B9A',
                        id: 'mr_team',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                    },
                    {
                        name: 'BU team SOW3 timeline',
                        color: '#005B9A',
                        id: 'bu_sow3',
                        owner: 'mr_team',
                        parent: 'mr_team',
                    },
                    {
                        name: 'Support transition to new AA metrics partner',
                        color: '#005B9A',
                        id: 'aa_metrics_partner',
                        owner: 'external_advisory_group',
                        parent: 'bu_sow3',
                        start: Date.UTC(2020, 7, 3),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Publish program reports on accessobservatory.org; publish and disseminate annual report',
                        color: '#005B9A',
                        id: 'accessobservatory_report',
                        owner: 'external_advisory_group',
                        parent: 'bu_sow3',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 6, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Finalize program reports; finalize annual report',
                        color: '#005B9A',
                        id: 'finalize_annual_report',
                        owner: 'external_advisory_group',
                        parent: 'bu_sow3',
                        start: Date.UTC(2020, 4, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Review and finalize data submissions; draft program reports; draft annual report',
                        color: '#005B9A',
                        id: 'draft_annual_report',
                        owner: 'external_advisory_group',
                        parent: 'bu_sow3',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Review and finalize program submissions',
                        color: '#005B9A',
                        id: 'finalize_program_submissions',
                        owner: 'external_advisory_group',
                        parent: 'bu_sow3',
                        start: Date.UTC(2020, 0, 6),
                        end: Date.UTC(2020, 2, 28),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Year 3 report published',
                        color: '#005B9A',
                        id: 'Year_report_published3',
                        owner: 'mr_team',
                        parent: 'mr_team',
                        start: Date.UTC(2020, 5, 30),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'BU SOW3 contract finishes',
                        color: '#005B9A',
                        id: 'SOW3_contract_finishes',
                        owner: 'mr_team',
                        parent: 'mr_team',
                        start: Date.UTC(2019, 9, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    // newgroup
                    // Steering Committee meetings
                    {
                        name: 'Steering Committee meetings',
                        color: '#005B9A',
                        id: 'steering_committee_meetings',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                    },
                    {
                        name: 'Steering Committee in person meeting (TBC)',
                        color: '#005B9A',
                        id: 'SteeringCommittee(TBC)',
                        owner: 'steering_committee_meetings',
                        parent: 'steering_committee_meetings',
                        start: Date.UTC(2020, 10, 18),
                        end: Date.UTC(2020, 10, 19),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Steering Committee call/in person meeting (UNGA TBC)',
                        color: '#005B9A',
                        id: 'SteeringCommittee(UNGA_TBC)',
                        owner: 'steering_committee_meetings',
                        parent: 'steering_committee_meetings',
                        start: Date.UTC(2020, 8, 22),
                        end: Date.UTC(2020, 8, 22),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Steering Committee in person meeting',
                        color: '#005B9A',
                        id: 'SteeringCommitteemeeting',
                        owner: 'steering_committee_meetings',
                        parent: 'steering_committee_meetings',
                        start: Date.UTC(2020, 5, 16),
                        end: Date.UTC(2020, 5, 16),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Steering Committee call for BCR prep',
                        color: '#005B9A',
                        id: 'SteeringCommitteeBCR_prep',
                        owner: 'steering_committee_meetings',
                        parent: 'steering_committee_meetings',
                        start: Date.UTC(2020, 3, 28),
                        end: Date.UTC(2020, 3, 28),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Steering Committee call',
                        color: '#005B9A',
                        id: 'SteeringCommittee_call',
                        owner: 'steering_committee_meetings',
                        parent: 'steering_committee_meetings',
                        start: Date.UTC(2020, 2, 3),
                        end: Date.UTC(2020, 2, 3),
                        completed: {
                            amount: 0
                        },
                    },
                    // newgroup
                    // Supply Chain Team
                    {
                        name: 'Supply Chain Team',
                        color: '#005B9A',
                        id: 'supplyChainTeam',
                        owner: 'AA Committee teams',
                        parent: 'aa_committee_teams',
                    },
                    {
                        name: 'First working session',
                        color: '#005B9A',
                        id: 'firstworkingsession',
                        owner: 'Supply Chain Team',
                        parent: 'supplyChainTeam',
                        start: Date.UTC(2020, 3, 15),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Expressions of interest for the MCC opportunities in Kenya, Ghana and Vietnam',
                        color: '#005B9A',
                        id: 'MCC_opportunities_Kenya',
                        owner: 'Supply Chain Team',
                        parent: 'supplyChainTeam',
                        start: Date.UTC(2020, 2, 9),
                        end: Date.UTC(2020, 2, 27),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Nominations of members',
                        color: '#005B9A',
                        id: 'nominations_members',
                        owner: 'Supply Chain Team',
                        parent: 'supplyChainTeam',
                        start: Date.UTC(2020, 2, 9),
                        end: Date.UTC(2020, 2, 13),
                        completed: {
                            amount: 0
                        },
                    }

                    
                    
                    
                ],
            },

            //AA Measurement
            {
                name: 'AA Measurement',
                color: '#005B9A',
                data: [
                    {
                        name: 'AA Measurement',
                        color: '#005B9A',
                        id: 'aa_Measurement',
                        owner: 'AA Measurement',
                    },
                    {
                        name: 'Collection of relevant data from partners',
                        color: '#005B9A',
                        id: 'collection_relevant_data_from_partners',
                        owner: 'AA Measurement',
                        parent: 'aa_Measurement',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 3, 6),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Processing of full data set',
                        color: '#005B9A',
                        id: 'processing_full_data_set',
                        owner: 'AA Measurement',
                        parent: 'aa_Measurement',
                        start: Date.UTC(2020, 2, 23),
                        end: Date.UTC(2020, 3, 6),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Outreach to companies for missing data',
                        color: '#005B9A',
                        id: 'companies_missing_data',
                        owner: 'AA Measurement',
                        parent: 'aa_Measurement',
                        start: Date.UTC(2020, 1, 17),
                        end: Date.UTC(2020, 2, 8),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Processing of first data badge',
                        color: '#005B9A',
                        id: 'processing_first_data_badge',
                        owner: 'AA Measurement',
                        parent: 'aa_Measurement',
                        start: Date.UTC(2020, 1, 17),
                        end: Date.UTC(2020, 1, 24),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Finalisation of full AA Phase II strategic plan for external publication',
                        color: '#005B9A',
                        id: 'finalisation_aa_phase',
                        owner: 'AA Measurement',
                        parent: 'aa_Measurement',
                        start: Date.UTC(2020, 4, 25),
                        end: Date.UTC(2020, 6, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Refinement of Phase II strategy narrative for BCR (patient impact measurement)',
                        color: '#005B9A',
                        id: 'patient_impact_measurement',
                        owner: 'AA Measurement',
                        parent: 'aa_Measurement',
                        start: Date.UTC(2020, 0, 13),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                    },
                ],
            },

            //BCR CEO Roundtable
            {
                name: 'BCR CEO Roundtable',
                color: '#005B9A',
                data: [
                    {
                        name: 'BCR CEO Roundtable',
                        color: '#005B9A',
                        id: 'BCR_CEO_Roundtable',
                        owner: 'BCR CEO Roundtable',
                    },
                    {
                        name: 'FSG to send partners report template',
                        color: '#005B9A',
                        id: 'FSG',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 2, 13),
                        end: Date.UTC(2020, 2, 13),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Partners report received',
                        color: '#005B9A',
                        id: 'partners_report_received',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 3, 3),
                        end: Date.UTC(2020, 3, 3),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Draft BCR memo outline shared with the Steering Committee',
                        color: '#005B9A',
                        id: 'BCR_memo',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 2, 16),
                        end: Date.UTC(2020, 2, 16),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Share BCR doc with Advisory group',
                        color: '#005B9A',
                        id: 'BCR_doc',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 3, 13),
                        end: Date.UTC(2020, 3, 13),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'BCR doc delivered to Thomas',
                        color: '#005B9A',
                        id: 'BCR_doc_deliver_thomas',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 4, 4),
                        end: Date.UTC(2020, 4, 4),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Share the BCR doc with SC',
                        color: '#005B9A',
                        id: 'BCR_doc_sc',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 3, 17),
                        end: Date.UTC(2020, 3, 17),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'BCR meeting in Brussel',
                        color: '#005B9A',
                        id: 'BCR_Brussel',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 4, 25),
                        end: Date.UTC(2020, 4, 26),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'BCR doc delivered to sherpas',
                        color: '#005B9A',
                        id: 'BCR_sherpas',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 4, 11),
                        end: Date.UTC(2020, 4, 11),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Secretariat prepare BCR doc and slides',
                        color: '#005B9A',
                        id: 'Secretariat_prepare_BCR',
                        owner: 'BCR CEO Roundtable',
                        parent: 'BCR_CEO_Roundtable',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 3, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    
                ],
            },

            //Event
            {
                name: 'Event',
                color: '#005B9A',
                data: [
                    {
                        name: 'Event',
                        color: '#005B9A',
                        id: 'event',
                        owner: 'Event',
                    },
                    {
                        name: 'UNGA',
                        color: '#005B9A',
                        id: 'unga',
                        owner: 'Event',
                        parent: 'event',
                    },
                    {
                        name: 'WS and Secretariat to draft concept note and share with Comms team',
                        color: '#005B9A',
                        id: 'WS_Secretariat',
                        owner: 'Event',
                        parent: 'unga',
                        start: Date.UTC(2020, 5, 1),
                        end: Date.UTC(2020, 7, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'WS looking for venue and speakers',
                        color: '#005B9A',
                        id: 'WS_venu_speaker',
                        owner: 'Event',
                        parent: 'unga',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 5, 1),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Event date',
                        color: '#005B9A',
                        id: 'event_date',
                        owner: 'Event',
                        parent: 'unga',
                        start: Date.UTC(2020, 8, 21),
                        end: Date.UTC(2020, 8, 21),
                        completed: {
                            amount: 0
                        },
                    },
                    
                    
                ],
            },

            //IFPMA
            {
                name: 'IFPMA',
                color: '#005B9A',
                data: [
                    {
                        name: 'IFPMA',
                        color: '#005B9A',
                        id: 'ifpma',
                        owner: 'IFPMA',
                    },
                    
                    {
                        name: 'IFPMA Council 2',
                        color: '#005B9A',
                        id: 'IFPMA_Council2',
                        owner: 'IFPMA',
                        parent: 'ifpma',
                        start: Date.UTC(2020, 10, 17),
                        end: Date.UTC(2020, 10, 18),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Multi-Company Collaboration',
                        color: '#005B9A',
                        id: 'm-c_coll',
                        owner: 'IFPMA',
                        parent: 'ifpma',
                        start: Date.UTC(2020, 5, 17),
                        end: Date.UTC(2020, 5, 18),
                        completed: {
                            amount: 0
                        },
                    },
                    
                    
                ],
            },

            //Multi-Company Collaboration
            {
                name: 'Multi-Company Collaboration',
                color: '#005B9A',
                data: [
                    {
                        name: 'Multi-Company Collaboration',
                        color: '#005B9A',
                        id: 'multi-companyCollaboration',
                        owner: 'Multi-Company Collaboration',
                    },
                    {
                        name: 'Digital Health',
                        color: '#005B9A',
                        id: 'digitalHealth',
                        owner: 'Multi-Company Collaboration',
                        parent: 'multi-companyCollaboration',
                    },
                    
                    {
                        name: 'Desk research and interview with stakeholders',
                        color: '#005B9A',
                        id: 'desk_stakeholders',
                        owner: 'Multi-Company Collaboration',
                        parent: 'digitalHealth',
                        start: Date.UTC(2020, 1, 10),
                        end: Date.UTC(2020, 2, 6),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Ghana',
                        color: '#005B9A',
                        id: 'ghana',
                        owner: 'Multi-Company Collaboration',
                        parent: 'multi-companyCollaboration',
                    },
                    {
                        name: 'PharmAccess',
                        color: '#005B9A',
                        id: 'pharmAccess',
                        owner: 'Multi-Company Collaboration',
                        parent: 'ghana',
                    },
                    
                    {
                        name: 'Follow up stakeholder consultation (innovation workshop)',
                        color: '#005B9A',
                        id: 'innovation_workshop',
                        owner: 'Ghana',
                        parent: 'pharmAccess',
                        start: Date.UTC(2020, 3, 13),
                        end: Date.UTC(2020, 3, 13),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Challenge Workshop',
                        color: '#005B9A',
                        id: 'challengeWorkshop',
                        owner: 'Ghana',
                        parent: 'pharmAccess',
                        start: Date.UTC(2020, 2, 31),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Kenya',
                        color: '#005B9A',
                        id: 'kenya',
                        owner: 'Multi-Company Collaboration',
                        parent: 'multi-companyCollaboration',
                    },
                   
                    
                    {
                        name: 'Consortium to share proposal',
                        color: '#005B9A',
                        id: 'consortium_proposal',
                        owner: 'Multi-Company Collaboration',
                        parent: 'kenya',
                        start: Date.UTC(2020, 2, 13),
                        end: Date.UTC(2020, 2, 13),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Engagement call with PATH',
                        color: '#005B9A',
                        id: 'engagement_PATH',
                        owner: 'Multi-Company Collaboration',
                        parent: 'kenya',
                        start: Date.UTC(2020, 1, 5),
                        end: Date.UTC(2020, 1, 5),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Overall',
                        color: '#005B9A',
                        id: 'overall',
                        owner: 'Multi-Company Collaboration',
                        parent: 'multi-companyCollaboration',
                    },
                   
                    
                    {
                        name: 'Secretariat to organise a Webinar with each MCC partners',
                        color: '#005B9A',
                        id: 'mcc_partners',
                        owner: 'Multi-Company Collaboration',
                        parent: 'overall',
                        start: Date.UTC(2020, 2, 23),
                        end: Date.UTC(2020, 3, 3),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: "Secretariat to send the partners' scoping note to SC",
                        color: '#005B9A',
                        id: 'scoping_note_to_SC',
                        owner: 'Multi-Company Collaboration',
                        parent: 'overall',
                        start: Date.UTC(2020, 2, 4),
                        end: Date.UTC(2020, 2, 6),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Vietnam',
                        color: '#005B9A',
                        id: 'vietnam',
                        owner: 'Multi-Company Collaboration',
                        parent: 'multi-companyCollaboration',
                    },
                   
                    
                    {
                        name: 'Scoping and co-creation of opportunities with interested comapnies',
                        color: '#005B9A',
                        id: 'scoping_co-creation',
                        owner: 'Multi-Company Collaboration',
                        parent: 'vietnam',
                        start: Date.UTC(2020, 0, 13),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },
                   
                    
                    
                ],
            },

            //Partners
            {
                name: 'Partners',
                color: '#005B9A',
                data: [
                    {
                        name: 'Partners',
                        color: '#005B9A',
                        id: 'partners',
                        owner: 'Partners',
                    },

                    {
                        name: 'CCAN 2025',
                        color: '#005B9A',
                        id: 'ccan_2025',
                        owner: 'Partners',
                        parent: 'partners',
                    },

                    {
                        name: 'CHFL support for Challenge Cities',
                        color: '#005B9A',
                        id: 'chfl_cities',
                        owner: 'Partners',
                        parent: 'ccan_2025',
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
                    },
                    

                    {
                        name: 'City Cancer Challenge Foundation Awareness',
                        color: '#005B9A',
                        id: 'cityCancerChallenge',
                        owner: 'Partners',
                        parent: 'ccan_2025',
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
                    },

                    {
                        name: 'City Network',
                        color: '#005B9A',
                        id: 'cityNetwork',
                        owner: 'Partners',
                        parent: 'ccan_2025',
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
                    },

                    {
                        name: 'City Network',
                        color: '#005B9A',
                        id: 'cityNetwork',
                        owner: 'Partners',
                        parent: 'ccan_2025',
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
                    },
                    
                    {
                        name: 'City Project Plans and Technical Assistance and Capacity Building',
                        color: '#005B9A',
                        id: 'technicalAssistanceCapacity',
                        owner: 'Partners',
                        parent: 'ccan_2025',
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
                    },

                    {
                        name: 'Document learnings and best practices from the Key Learning Cities related to the city process',
                        color: '#005B9A',
                        id: 'cityProcess',
                        owner: 'Partners',
                        parent: 'ccan_2025',
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
                    },

                    {
                        name: 'Emerging trends and actionable insights map and develop strategy',
                        color: '#005B9A',
                        id: 'map_trends',
                        owner: 'Partners',
                        parent: 'ccan_2025',
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
                    },

                    {
                        name: 'Key events',
                        color: '#005B9A',
                        id: 'keyevents',
                        owner: 'Partners',
                        parent: 'ccan_2025',
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
                    },

                    {
                        name: 'Kumasi - Webinar in March',
                        color: '#005B9A',
                        id: 'kumasi-march',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 3, 2),
                        end: Date.UTC(2020, 3, 2),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Kigali - Partners meeting in Kigali',
                        color: '#005B9A',
                        id: 'kigali',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 2, 12),
                        end: Date.UTC(2020, 2, 12),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Partner Webinar - 2020 priorities',
                        color: '#005B9A',
                        id: 'partnerWebinar2020priorities',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 0, 20),
                        end: Date.UTC(2020, 0, 20),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'A call for applictaion',
                        color: '#005B9A',
                        id: 'call_applictaion',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 9, 20),
                        end: Date.UTC(2020, 9, 22),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'WCC - City to City event',
                        color: '#005B9A',
                        id: 'wcc_city_event',
                        owner: 'CCAN 2025',
                        parent: 'keyevents',
                        start: Date.UTC(2020, 9, 22),
                        end: Date.UTC(2020, 9, 22),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Partner engagement',
                        color: '#005B9A',
                        id: 'partnerEngagement',
                        owner: 'Partners',
                        parent: 'ccan_2025',
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
                    },

                    {
                        name: 'Scale up implementation of M&E and Learning (MEL) framework',
                        color: '#005B9A',
                        id: 'mel_framework',
                        owner: 'Partners',
                        parent: 'ccan_2025',
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
                    },

                    {
                        name: 'Sustainability strategy in the 4 Key Learning Cities',
                        color: '#005B9A',
                        id: '4KeyLearningcities',
                        owner: 'Partners',
                        parent: 'ccan_2025',
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
                    },

                    {
                        name: 'Technical assistance (TA) packages',
                        color: '#005B9A',
                        id: 'ta_packages',
                        owner: 'Partners',
                        parent: 'ccan_2025',
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
                    },

                    {
                        name: 'NCD Alliance',
                        color: '#005B9A',
                        id: 'ncdAlliance',
                        owner: 'Partners',
                        parent: 'partners',
                    },

                    {
                        name: 'Amplify Views and Voices of PLWNCDs',
                        color: '#005B9A',
                        id: 'amplify_ViewsVoices_PLWNCDs',
                        owner: 'Partners',
                        parent: 'ncdAlliance',
                    },
                    {
                        name: 'Global Week for Action on NCDs and grant awards to alliances',
                        color: '#005B9A',
                        id: 'gw_action_ncds',
                        owner: 'NCD Alliance',
                        parent: 'amplify_ViewsVoices_PLWNCDs',
                    },
                    {
                        name: 'Event date, 7-13 September 2020, Global',
                        color: '#005B9A',
                        id: 'ed_7_13_sept',
                        owner: 'NCD Alliance',
                        parent: 'gw_action_ncds',
                        start: Date.UTC(2020, 8, 7),
                        end: Date.UTC(2020, 8, 13),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Planning ongoing',
                        color: '#005B9A',
                        id: 'planning_ongoing',
                        owner: 'NCD Alliance',
                        parent: 'gw_action_ncds',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Our Views Our Voices global knowledge exchange platform',
                        color: '#005B9A',
                        id: 'globalknowledgeexchangeplatform',
                        owner: 'NCD Alliance',
                        parent: 'amplify_ViewsVoices_PLWNCDs',
                    },
                    {
                        name: 'Platform development',
                        color: '#005B9A',
                        id: 'platformdevelopment',
                        owner: 'NCD Alliance',
                        parent: 'globalknowledgeexchangeplatform',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Platform development planning',
                        color: '#005B9A',
                        id: 'platformdevelopmentplanning',
                        owner: 'NCD Alliance',
                        parent: 'globalknowledgeexchangeplatform',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Global side events/leveraging advocacy opportunities (e.g, UNGA)',
                        color: '#005B9A',
                        id: 'global_siide_el',
                        owner: 'NCD Alliance',
                        parent: 'amplify_ViewsVoices_PLWNCDs',
                        start: Date.UTC(2020, 8, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'People living with NCDs attendance at key advocacy milestones',
                        color: '#005B9A',
                        id: 'milestones',
                        owner: 'NCD Alliance',
                        parent: 'amplify_ViewsVoices_PLWNCDs',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Our Views Our Voices event at the Global NCD Alliance Forum (9-11 Feb)',
                        color: '#005B9A',
                        id: 'NCD_AllianceForum',
                        owner: 'NCD Alliance',
                        parent: 'amplify_ViewsVoices_PLWNCDs',
                        start: Date.UTC(2020, 1, 9),
                        end: Date.UTC(2020, 1, 9),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Country Action to involve PLWNCDs',
                        color: '#005B9A',
                        id: 'countryAction_PLWNCDs',
                        owner: 'NCD Alliance',
                        parent: 'ncdAlliance',
                    },

                    {
                        name: 'NCDs & UHC Advocacy Institute Accelerator Training Programme',
                        color: '#005B9A',
                        id: 'ATP',
                        owner: 'NCD Alliance',
                        parent: 'countryAction_PLWNCDs',
                    },
                    {
                        name: 'July 2020 (margins of the HLPF, NY)',
                        color: '#005B9A',
                        id: 'july2020',
                        owner: 'NCD Alliance',
                        parent: 'ATP',
                        start: Date.UTC(2020, 3, 13),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Seed grant and technical assistance to Ghana NCDA',
                        color: '#005B9A',
                        id: 'ghana_ncda',
                        owner: 'NCD Alliance',
                        parent: 'countryAction_PLWNCDs',
                    },
                    {
                        name: 'Community mobilisation forums & Our Views Our Voices training + 2020 grants to be awarded',
                        color: '#005B9A',
                        id: 'communityMobilisationForums',
                        owner: 'NCD Alliance',
                        parent: 'ghana_ncda',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: '2019  partnership grants ongoing',
                        color: '#005B9A',
                        id: 'communitymobilisationforums',
                        owner: 'NCD Alliance',
                        parent: 'ghana_ncda',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 5),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Seed grant and technical assistance to Healthy India Alliance',
                        color: '#005B9A',
                        id: 'healthy_india_alliance',
                        owner: 'NCD Alliance',
                        parent: 'countryAction_PLWNCDs',
                    },
                    {
                        name: '2020 grants to be awarded',
                        color: '#005B9A',
                        id: 'awarded_grants',
                        owner: 'NCD Alliance',
                        parent: 'healthy_india_alliance',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Induction',
                        color: '#005B9A',
                        id: 'induction',
                        owner: 'NCD Alliance',
                        parent: 'healthy_india_alliance',
                        start: Date.UTC(2020, 1, 17),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Seed grant and technical assistance to Malaysia NCDA',
                        color: '#005B9A',
                        id: 'technicalassistanceMalaysiaNCDA',
                        owner: 'NCD Alliance',
                        parent: 'countryAction_PLWNCDs',
                    },
                    {
                        name: '2020 grants to be awarded',
                        color: '#005B9A',
                        id: 'awarded_grants2',
                        owner: 'NCD Alliance',
                        parent: 'technicalassistanceMalaysiaNCDA',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Induction',
                        color: '#005B9A',
                        id: 'induction2',
                        owner: 'NCD Alliance',
                        parent: 'technicalassistanceMalaysiaNCDA',
                        start: Date.UTC(2020, 1, 17),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Seed grant and technical assistance to NCDA Kenya',
                        color: '#005B9A',
                        id: 'seed_grant_ncda_kenya',
                        owner: 'NCD Alliance',
                        parent: 'countryAction_PLWNCDs',
                    },
                    {
                        name: 'NCDAK Advocacy priorities launch; non-health stakeholder engagement; NCD Symposium (Q2/3 TBC) + 2020 grants to be awarded',
                        color: '#005B9A',
                        id: 'ncdak',
                        owner: 'NCD Alliance',
                        parent: 'seed_grant_ncda_kenya',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: '2019 Partnership grants ongoing',
                        color: '#005B9A',
                        id: 'partnership_grants_ongoing',
                        owner: 'NCD Alliance',
                        parent: 'seed_grant_ncda_kenya',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Seed grant and technical assistance to Vietnam NCDA',
                        color: '#005B9A',
                        id: 'seed_grant_ncda_vietnam',
                        owner: 'NCD Alliance',
                        parent: 'countryAction_PLWNCDs',
                    },
                    {
                        name: '2020 grants to be awarded',
                        color: '#005B9A',
                        id: 'grants_awarded',
                        owner: 'NCD Alliance',
                        parent: 'seed_grant_ncda_vietnam',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: '2019 partnership grants ongoing',
                        color: '#005B9A',
                        id: 'grants_ongoing',
                        owner: 'NCD Alliance',
                        parent: 'seed_grant_ncda_vietnam',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 5),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Pan-Africa Our Views Our Voices Regional Summit',
                        color: '#005B9A',
                        id: 'PAOViews',
                        owner: 'NCD Alliance',
                        parent: 'ncdAlliance',
                    },
                    {
                        name: 'Our Views Our Voices Regional Summit Report',
                        color: '#005B9A',
                        id: 'VoicesRegionalSummitReport',
                        owner: 'NCD Alliance',
                        parent: 'PAOViews',
                        start: Date.UTC(2020, 10, 2),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: '3-7 November 2020, Lomé, Togo',
                        color: '#005B9A',
                        id: 'nov_lome_togo',
                        owner: 'NCD Alliance',
                        parent: 'PAOViews',
                        start: Date.UTC(2020, 10, 3),
                        end: Date.UTC(2020, 10, 7),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Prog/ Logistics',
                        color: '#005B9A',
                        id: 'prog_logistics',
                        owner: 'NCD Alliance',
                        parent: 'PAOViews',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Planning/ outreach',
                        color: '#005B9A',
                        id: 'planning_outreach',
                        owner: 'NCD Alliance',
                        parent: 'PAOViews',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Planning ongoing',
                        color: '#005B9A',
                        id: 'planningongoing',
                        owner: 'NCD Alliance',
                        parent: 'PAOViews',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'High-level media strategy for regional summit (3-7 November, Lomé, Togo)',
                        color: '#005B9A',
                        id: 'highLevel_media_strategy',
                        owner: 'NCD Alliance',
                        parent: 'PAOViews',
                        start: Date.UTC(2020, 2, 2),
                        end: Date.UTC(2020, 10, 7),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Our Views Our Voices Regional Consultation with PLWNCDs (Africa)',
                        color: '#005B9A',
                        id: 'VoicesRegionalAfrica',
                        owner: 'NCD Alliance',
                        parent: 'PAOViews',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                   
                    
                ],
            },


            //Path newgroup started

            {
                name: 'PATH',
                color: '#005B9A',
                data: [
                    {
                        name: 'PATH',
                        color: '#005B9A',
                        id: 'path',
                        owner: 'PATH',
                    },
                    {
                        name: '2020',
                        color: '#005B9A',
                        id: 'y_2020',
                        owner: 'PATH',
                        parent: 'path',
                    },
            
                    {
                        name: 'Ghana',
                        color: '#005B9A',
                        id: 'y_2020_ghana',
                        owner: '2020',
                        parent: 'y_2020',
                    },
                    {
                        name: 'Create enabling policy environments',
                        color: '#005B9A',
                        id: 'createenablingpolicy_environments',
                        owner: '2020',
                        parent: 'y_2020_ghana',
                    },
                    

                    {
                        name: 'PATH staff seconded to MoH; Routine TWG established to report into Steering Committee',
                        color: '#005B9A',
                        id: 'pathStaffsecondtoMHO',
                        owner: 'Ghana',
                        parent: 'createenablingpolicy_environments',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Planning initiated for National NCD Conference; National dissemination of Ghana NCD Strategy',
                        color: '#005B9A',
                        id: 'ghana_NCD_Strategy',
                        owner: 'Ghana',
                        parent: 'createenablingpolicy_environments',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    
                    {
                        name: 'National NCD webpage launched; Awareness campaigns activated',
                        color: '#005B9A',
                        id: 'national_NCD_webpage',
                        owner: 'Ghana',
                        parent: 'createenablingpolicy_environments',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    
                    {
                        name: 'NCD Navigator informs national NCD Steering Committee and technical working group decisions',
                        color: '#005B9A',
                        id: 'NCD_navigator',
                        owner: 'Ghana',
                        parent: 'createenablingpolicy_environments',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },
                   
                    {
                        name: 'Enable data driven decision-making',
                        color: '#005B9A',
                        id: 'enable_data_drivendecision-making',
                        owner: '2020',
                        parent: 'y_2020_ghana',
                    },

                    {
                        name: 'Data Quality',
                        color: '#005B9A',
                        id: 'data_quality',
                        owner: '2020',
                        parent: 'enable_data_drivendecision-making',
                    },

                    {
                        name: 'Service delivery data quality assessed',
                        color: '#005B9A',
                        id: 'delivery_data_quality_assessed',
                        owner: 'Ghana',
                        parent: 'data_quality',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    
                    {
                        name: 'DQA tools developed to support data collection',
                        color: '#005B9A',
                        id: 'dqa_tools',
                        owner: 'Ghana',
                        parent: 'data_quality',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Data review meetings established',
                        color: '#005B9A',
                        id: 'data_review_meetings_established',
                        owner: 'Ghana',
                        parent: 'data_quality',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'NCD e-tracker piloted',
                        color: '#005B9A',
                        id: 'NCD_e-tracker_piloted',
                        owner: 'Ghana',
                        parent: 'data_quality',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },


                    {
                        name: 'NCD Navigator',
                        color: '#005B9A',
                        id: 'NCDNavigator',
                        owner: '2020',
                        parent: 'enable_data_drivendecision-making',
                    },

                    {
                        name: 'NCD Navigator adopted by GHS/MoH',
                        color: '#005B9A',
                        id: 'NCDNavigatoradopted-GHS/MoH',
                        owner: 'Ghana',
                        parent: 'NCDNavigator',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Data collection complete',
                        color: '#005B9A',
                        id: 'data_collection_complete',
                        owner: 'Ghana',
                        parent: 'NCDNavigator',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Results and recommendations for update disseminated data',
                        color: '#005B9A',
                        id: 'resultsrecommendationsdisseminateddata',
                        owner: 'Ghana',
                        parent: 'NCDNavigator',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'NCD Navigator informs multi-company investments and grant submissions',
                        color: '#005B9A',
                        id: 'NCDNavigatormulti_company',
                        owner: 'Ghana',
                        parent: 'NCDNavigator',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Strengthen PHC systems',
                        color: '#005B9A',
                        id: 'strengthenPHCsystems',
                        owner: '2020',
                        parent: 'y_2020_ghana',
                    },

                    {
                        name: 'Health worker and facility needs assessment completed',
                        color: '#005B9A',
                        id: 'facility_needs_assessment_completed',
                        owner: 'Ghana',
                        parent: 'strengthenPHCsystems',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Small grants award program established',
                        color: '#005B9A',
                        id: 'smallgrantsawardprogramestablished',
                        owner: 'Ghana',
                        parent: 'strengthenPHCsystems',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },


                    {
                        name: 'NCD Navigator informs coordination of PHC strenghening efforts; Grants awarded',
                        color: '#005B9A',
                        id: 'grants_awarded',
                        owner: 'Ghana',
                        parent: 'strengthenPHCsystems',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    

                    {
                        name: 'E-learning program tested',
                        color: '#005B9A',
                        id: 'E-learning_program_tested',
                        owner: 'Ghana',
                        parent: 'strengthenPHCsystems',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },


                    {
                        name: 'Strengthen supply chains',
                        color: '#005B9A',
                        id: 'strengthensupplychains',
                        owner: '2020',
                        parent: 'y_2020_ghana',
                    },

                    {
                        name: 'Supply assessment completed',
                        color: '#005B9A',
                        id: 'supply_assessment_completed',
                        owner: 'Ghana',
                        parent: 'strengthensupplychains',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },


                    {
                        name: 'Results disseminated and roadmap verified; Multi-company activation of supply chain strengthening roadmap',
                        color: '#005B9A',
                        id: 'supply_chain_strengthening_roadmap',
                        owner: 'Ghana',
                        parent: 'strengthensupplychains',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Forecasting model introduced to Ghana and tested in one district',
                        color: '#005B9A',
                        id: 'forecasting_model_introducedGhana',
                        owner: 'Ghana',
                        parent: 'strengthensupplychains',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Forecasting model adapted for Ghana and assessed for adoption by GHS',
                        color: '#005B9A',
                        id: 'forecasting_model_adaptedGhana',
                        owner: 'Ghana',
                        parent: 'strengthensupplychains',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Kenya',
                        color: '#005B9A',
                        id: 'kenya-2020-path',
                        owner: '2020',
                        parent: 'y_2020',
                    },
                    {
                        name: 'Create enabling policy environments',
                        color: '#005B9A',
                        id: 'create_enabling_policy_environments',
                        owner: '2020',
                        parent: 'kenya-2020-path',
                    },

                    {
                        name: 'PATH staff seconded to MoH; Routine TWG meetings for priority NCDs held quarterly',
                        color: '#005B9A',
                        id: 'path_staff_second_2',
                        owner: 'Ghana',
                        parent: 'create_enabling_policy_environments',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'NCD Navigator informs national and county TWG decisions',
                        color: '#005B9A',
                        id: 'NCDNavigatorTWGdecisions',
                        owner: 'Ghana',
                        parent: 'create_enabling_policy_environments',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'One digital innovation grant awarded; NCD Strategy complete',
                        color: '#005B9A',
                        id: 'one_digital_innovation_grant_awarded',
                        owner: 'Ghana',
                        parent: 'create_enabling_policy_environments',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'County dissemination of National NCD Strategy',
                        color: '#005B9A',
                        id: 'county_disseminationNationalNCDStrategy',
                        owner: 'Ghana',
                        parent: 'create_enabling_policy_environments',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Enable data driven decision-making',
                        color: '#005B9A',
                        id: 'enable-data-driven-decision-making',
                        owner: '2020',
                        parent: 'kenya-2020-path',
                    },

                    {
                        name: 'Data Quality',
                        color: '#005B9A',
                        id: 'dataQualitykenya-2020-path',
                        owner: '2020',
                        parent: 'enable-data-driven-decision-making',
                    },

                    {
                        name: 'Tools disseminated in all counties',
                        color: '#005B9A',
                        id: 'tools-disseminated-counties',
                        owner: 'Ghana',
                        parent: 'dataQualitykenya-2020-path',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Training and mentoring of NCD Focal Persons',
                        color: '#005B9A',
                        id: 'training-mentoring-NCD-Focal',
                        owner: 'Ghana',
                        parent: 'dataQualitykenya-2020-path',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Data review meetings established',
                        color: '#005B9A',
                        id: 'data-review-meetings-established',
                        owner: 'Ghana',
                        parent: 'dataQualitykenya-2020-path',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Data quality assurance process established',
                        color: '#005B9A',
                        id: 'data-quality-assurance-process-established',
                        owner: 'Ghana',
                        parent: 'dataQualitykenya-2020-path',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'NCD Navigator',
                        color: '#005B9A',
                        id: 'NCD-Navigatorkenya-2020-path',
                        owner: '2020',
                        parent: 'enable-data-driven-decision-making',
                    },

                    {
                        name: 'NCD Navigator adopted by National and County MoH',
                        color: '#005B9A',
                        id: 'NCDNavigator-National-CountyMoH',
                        owner: 'Ghana',
                        parent: 'NCD-Navigatorkenya-2020-path',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'NCD Navigator informs multi-company investments and grant submissions',
                        color: '#005B9A',
                        id: 'NCDNavigator-grantsubmissions',
                        owner: 'Ghana',
                        parent: 'NCD-Navigatorkenya-2020-path',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'NCD Navigator informs New NCD Strategy and TWG workplans and company investments',
                        color: '#005B9A',
                        id: 'NCDNavigator-newNCDStrategy',
                        owner: 'Ghana',
                        parent: 'NCD-Navigatorkenya-2020-path',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Strengthen PHC systems',
                        color: '#005B9A',
                        id: 'strengthen-PHCsystems',
                        owner: '2020',
                        parent: 'enable-data-driven-decision-making',
                    },

                    {
                        name: 'Health worker training for 100 health workers initiated; Mentors trained',
                        color: '#005B9A',
                        id: 'phc-Mentorstrained',
                        owner: 'Ghana',
                        parent: 'strengthen-PHCsystems',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Regular HW supervision and on the job training; Grants Award Program established',
                        color: '#005B9A',
                        id: 'phc-RegularHW-supervision',
                        owner: 'Ghana',
                        parent: 'strengthen-PHCsystems',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'NCD Navigator informs coordination of PHC strengthening efforts; Grants awarded',
                        color: '#005B9A',
                        id: 'phc-Grantsawarded',
                        owner: 'Ghana',
                        parent: 'strengthen-PHCsystems',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Best practice forum initiated; EMR data informs this; data use and data quality increases',
                        color: '#005B9A',
                        id: 'phc-data_quality_increases',
                        owner: 'Ghana',
                        parent: 'strengthen-PHCsystems',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Strengthen supply chains',
                        color: '#005B9A',
                        id: 'strengthen-supplychains',
                        owner: '2020',
                        parent: 'enable-data-driven-decision-making',
                    },

                    {
                        name: 'Supply security roadmap verified and adopted',
                        color: '#005B9A',
                        id: 'supplychains-roadmap_verified_adopted',
                        owner: 'Ghana',
                        parent: 'strengthen-supplychains',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Multi-company activation of supply chain strengthening roadmap',
                        color: '#005B9A',
                        id: 'supplychains-chain-strengtheningroadmap',
                        owner: 'Ghana',
                        parent: 'strengthen-supplychains',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Forecasting model piloted in 6 counties',
                        color: '#005B9A',
                        id: 'supplychains-Forecastingmodelpiloted',
                        owner: 'Ghana',
                        parent: 'strengthen-supplychains',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Assessment of cost escalators post-procurement',
                        color: '#005B9A',
                        id: 'supplychains-post-procurement',
                        owner: 'Ghana',
                        parent: 'strengthen-supplychains',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },


                    {
                        name: 'Vietnam',
                        color: '#005B9A',
                        id: 'vietnam-2020-path',
                        owner: '2020',
                        parent: 'y_2020',
                    },
                    {
                        name: 'Create enabling policy environments',
                        color: '#005B9A',
                        id: 'create_enabling_policy_environments_vietnam',
                        owner: '2020',
                        parent: 'vietnam-2020-path',
                    },

                    {
                        name: 'TWG meeting conducted to review NCD efforts and planning',
                        color: '#005B9A',
                        id: 'vietnam-planning-efforts-ncd',
                        owner: 'Ghana',
                        parent: 'create_enabling_policy_environments_vietnam',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Policy/mechanisms on private sector engagement developed',
                        color: '#005B9A',
                        id: 'vietnam-policy-mechanisms',
                        owner: 'Ghana',
                        parent: 'create_enabling_policy_environments_vietnam',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },


                    {
                        name: 'National standardised training packages available on the GDPM and Healthy Vietnam websites',
                        color: '#005B9A',
                        id: 'vietnam-healthyVietnamwebsites',
                        owner: 'Ghana',
                        parent: 'create_enabling_policy_environments_vietnam',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Enable data driven decision making',
                        color: '#005B9A',
                        id: 'enable-data-driven-decision-making_vietnam',
                        owner: '2020',
                        parent: 'vietnam-2020-path',
                    },

                    {
                        name: 'Regulation for data sharing between curative and preventive medicines systems developed',
                        color: '#005B9A',
                        id: 'vietnam-preventive-medicines-systems-developed',
                        owner: 'Ghana',
                        parent: 'enable-data-driven-decision-making_vietnam',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Regulation for data sharing between curative and preventive medicines systems finalized',
                        color: '#005B9A',
                        id: 'vietnam-preventive-medicines-systems-developed-finalized',
                        owner: 'Ghana',
                        parent: 'enable-data-driven-decision-making_vietnam',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Regulation for data sharing between curative and preventive medicines systems disseminated',
                        color: '#005B9A',
                        id: 'vietnam-preventive-medicines-systems-developed-disseminated',
                        owner: 'Ghana',
                        parent: 'enable-data-driven-decision-making_vietnam',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Reporting indicators for the NCD HIS finalized',
                        color: '#005B9A',
                        id: 'vietnam-preventive-NCD-HIS',
                        owner: 'Ghana',
                        parent: 'enable-data-driven-decision-making_vietnam',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Strengthen PHC systems',
                        color: '#005B9A',
                        id: 'phc-2020-system-Strengthen',
                        owner: '2020',
                        parent: 'vietnam-2020-path',
                    },
                    {
                        name: 'Sub-agreements signed with GDPM',
                        color: '#005B9A',
                        id: 'phc-2020-system-StrengthenSub-agreements',
                        owner: 'Ghana',
                        parent: 'phc-2020-system-Strengthen',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Project launching workshop with GDPM and three provinces conducted',
                        color: '#005B9A',
                        id: 'phc-2020-system-Strengthenworkshop',
                        owner: 'Ghana',
                        parent: 'phc-2020-system-Strengthen',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Refined community-based care model for hypertension and diabetes demonstrated in target districts in HCMC, Khanh Hoa, and Hanoi',
                        color: '#005B9A',
                        id: 'phc-2020-system-hanoi',
                        owner: 'Ghana',
                        parent: 'phc-2020-system-Strengthen',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    
                    {
                        name: 'HCMC, Hanoi and Khanh Hoa have annual plans for sustaining the model; these plans have been shared with other provinces; a national and regional NCD TA network provides support for NCD service providers',
                        color: '#005B9A',
                        id: 'phc-2020-system-hcmc',
                        owner: 'Ghana',
                        parent: 'phc-2020-system-Strengthen',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Strengthen supply chains',
                        color: '#005B9A',
                        id: 'vei-Strengthensupplychains',
                        owner: '2020',
                        parent: 'vietnam-2020-path',
                    },
                    {
                        name: 'Supply chain assessment protocol developed',
                        color: '#005B9A',
                        id: 'vei-Strengthensupplychains1',
                        owner: 'Ghana',
                        parent: 'vei-Strengthensupplychains',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Supply chain assessment conducted',
                        color: '#005B9A',
                        id: 'vei-Strengthensupplychains2',
                        owner: 'Ghana',
                        parent: 'vei-Strengthensupplychains',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },


                    {
                        name: 'Supply chain assessment conducted',
                        color: '#005B9A',
                        id: 'vei-Strengthensupplychains3',
                        owner: 'Ghana',
                        parent: 'vei-Strengthensupplychains',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },


                ],
            },
            //WHF newgroup starts
            {
                name: 'WHF',
                color: '#005B9A',
                data: [
                    {
                        name: 'WHF',
                        color: '#005B9A',
                        id: 'whf',
                        owner: 'WHF',
                    },
                    {
                        name: '2020',
                        color: '#005B9A',
                        id: 'whf-2020',
                        owner: 'WHF',
                        parent: 'whf'
                    },
                    {
                        name: '5th Global Summit',
                        color: '#005B9A',
                        id: 'globalSummit5th',
                        owner: 'WHF',
                        parent: 'whf-2020'
                    },

                    {
                        name: 'Confirm venue for 2021 Summit',
                        color: '#005B9A',
                        id: 'whf-summit2021-venue',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Confirm theme of 2021 Summit',
                        color: '#005B9A',
                        id: 'whf-summit2021-theme',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Start researching and writing the Summit position paper to be launched at the 2021 Summit',
                        color: '#005B9A',
                        id: 'whf-summit2021-position-paper',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Internal project report',
                        color: '#005B9A',
                        id: 'whf-summit2021-int-proj-rep',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Follow-up continued (reimbursements, payments)',
                        color: '#005B9A',
                        id: 'whf-summit2021-reim-payments',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Follow-up (wrap-up blog posts, thank you letters, social media)',
                        color: '#005B9A',
                        id: 'whf-summit2021-wrap-up',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Launch of Summit 2019 outcome publication',
                        color: '#005B9A',
                        id: 'whf-summit2021-outcome-publication-launch',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },
                   
                    {
                        name: 'Hold Summit, including live tweeting & Facebook',
                        color: '#005B9A',
                        id: 'whf-summit2021-hold-tweeting',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Regular promotional event activities (social media, newsletters, website)',
                        color: '#005B9A',
                        id: 'whf-summit2021-regular-promotional',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },


                    {
                        name: 'Ongoing partner engagement',
                        color: '#005B9A',
                        id: 'whf-summit2021-ongoing-partner-eng',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    
                    {
                        name: 'Prepare speaker and session guidelines',
                        color: '#005B9A',
                        id: 'whf-summit2021-session-guidelines',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Communication activities to prospective participants (mailers)',
                        color: '#005B9A',
                        id: 'whf-summit2021-mailers',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Regular Summit governance meetings',
                        color: '#005B9A',
                        id: 'whf-summit2021-governancemeetings',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Ongoing engagement with partners',
                        color: '#005B9A',
                        id: 'whf-summit2021-Ongoingengagementpartners',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Ongoing speaker invitations',
                        color: '#005B9A',
                        id: 'whf-summit2021-Ongoingspeakerinvitations',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Ongoing refinement of the programme',
                        color: '#005B9A',
                        id: 'whf-summit2021-refinementprogramme',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Select travel grantees',
                        color: '#005B9A',
                        id: 'whf-summit2021-Selecttravelgrantees',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Launch call for travel grant applications',
                        color: '#005B9A',
                        id: 'whf-summit2021-travelgrant-applications',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Send invitations to attendees',
                        color: '#005B9A',
                        id: 'whf-summit2021-attendees',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Send first batches of speaker invitations',
                        color: '#005B9A',
                        id: 'whf-summit2021-first-batches',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Engage with partners',
                        color: '#005B9A',
                        id: 'whf-summit2021-first-batches',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Create webpage, registration forms, travel registration infrastructure',
                        color: '#005B9A',
                        id: 'whf-summit2021-webpage-travel',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Confirm event venues and logistics',
                        color: '#005B9A',
                        id: 'whf-summit2021-logistics',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },


                    {
                        name: 'Hold weekly Summit governance calls & meetings',
                        color: '#005B9A',
                        id: 'whf-summit2021-calls-meeting',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Draft skeleton programme & circulate to internal and external stakeholders for comments',
                        color: '#005B9A',
                        id: 'whf-summit2021-skeleton',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Convene Summit governance structure (Chair, Co-Chair, Executive Planning Committee, Expert Advisory Committee)',
                        color: '#005B9A',
                        id: 'whf-summit2021-co-chair',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Global Summit on Circulatory Health, Rethinking the Future of the Cardiovascular Workforce, Washington DC, USA',
                        color: '#005B9A',
                        id: 'whf-summit2021-usa',
                        owner: 'WHF',
                        parent: 'globalSummit5th',
                        start: Date.UTC(2020, 5, 15),
                        end: Date.UTC(2020, 5, 17),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Community management of hypertension program in Colombia',
                        color: '#005B9A',
                        id: 'cmhpc',
                        owner: 'WHF',
                        parent: 'whf-2020'
                    },

                    {
                        name: 'Implementation phase continued',
                        color: '#005B9A',
                        id: 'cmhpc-ipc',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Detailed activities pending further input from WHF members in Colombia (timeline to be provided during 2020)',
                        color: '#005B9A',
                        id: 'cmhpc-activities',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Start implementation',
                        color: '#005B9A',
                        id: 'cmhpc-startimplementation',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Identify target region and communities',
                        color: '#005B9A',
                        id: 'cmhpc-identifytarget',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Finalize project design together with WHF members in Colombia',
                        color: '#005B9A',
                        id: 'cmhpc-Finalizeprojectdesign',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Convene planning meeting with WHF members in Colombia to decide on key action areas from:•	Implementing the National Registry of Hypertension •	Standardize the manual  •	Develop a strategy for community education  •	Implement a national campaign to reduce consumption of salt-rich foods  •	Develop a national strategy for early detection of hypertension  •	Develop national strategy for access to health digital technologies to control hypertension',
                        color: '#005B9A',
                        id: 'cmhpc-convene',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Review roundtable report and existing health system appraisal & adjust project design to address barriers to hypertension control',
                        color: '#005B9A',
                        id: 'cmhpc-hypertension',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Convened roundtable on tackling hypertension in Colombia (28 January 2020)',
                        color: '#005B9A',
                        id: 'cmhpc-hypertensionColombia',
                        owner: 'WHF',
                        parent: 'cmhpc',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Update WHF’s Roadmap on Hypertension',
                        color: '#005B9A',
                        id: 'urh',
                        owner: 'WHF',
                        parent: 'whf-2020'
                    },

                    {
                        name: 'Convene stakeholder meeting discussion at AHA Scientific Sessions 14-16 November 2020',
                        color: '#005B9A',
                        id: 'urh-sci-sess',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 9, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Define pathway of care, roadblocks and solutions (wider group of experts through members and consultations with authors)',
                        color: '#005B9A',
                        id: 'urh-roadblocks-solu',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Convene face-to-face writing sessions & group meetings',
                        color: '#005B9A',
                        id: 'urh-face-to-face',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Follow-up on and review author input',
                        color: '#005B9A',
                        id: 'urh-Follow-up',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 6, 1),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Conduct consultation & consensus process',
                        color: '#005B9A',
                        id: 'urh-consensus',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Convene first meeting',
                        color: '#005B9A',
                        id: 'urh-meeting',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 5, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Identify wider experts and stakeholders',
                        color: '#005B9A',
                        id: 'urh-widerexperts',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Invite group members',
                        color: '#005B9A',
                        id: 'urh-groupmembers',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Call for nominations from WHF members',
                        color: '#005B9A',
                        id: 'urh-nominations-whf',
                        owner: 'WHF',
                        parent: 'urh',
                        start: Date.UTC(2020, 0, 1),
                        end: Date.UTC(2020, 2, 31),
                        completed: {
                            amount: 0
                        },
                    },




                ],
            },
            
            //world bank newgroup starts

            {
                name: 'World Bank',
                color: '#005B9A',
                data: [
                    {
                        name: 'World Bank',
                        color: '#005B9A',
                        id: 'worldBank',
                        owner: 'World Bank',
                    },
                    {
                        name: 'China',
                        color: '#005B9A',
                        id: 'worldBank-China',
                        owner: 'World Bank',
                        parent: 'worldBank'
                    },
                    {
                        name: 'Building People Centered Integrated Care (PCIC) System Workshop',
                        color: '#005B9A',
                        id: 'worldBank-China-pcic',
                        owner: 'World Bank',
                        parent: 'worldBank-China',
                        start: Date.UTC(2020, 8, 18),
                        end: Date.UTC(2020, 8, 20),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Colombia',
                        color: '#005B9A',
                        id: 'worldBank-Colombia',
                        owner: 'World Bank',
                        parent: 'worldBank'
                    },
                    {
                        name: 'Development of an analytical study',
                        color: '#005B9A',
                        id: 'worldBank-Colombia-ana-study',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia'
                        
                    },

                    {
                        name: 'Approved in system',
                        color: '#005B9A',
                        id: 'worldBank-Colombia-app-sys',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia-ana-study'
                        
                    },

                    {
                        name: 'Study delivered',
                        color: '#005B9A',
                        id: 'worldBank-Colombia-Studydelivered',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia-ana-study'
                        
                    },
                    {
                        name: 'Data analysis',
                        color: '#005B9A',
                        id: 'worldBank-Colombia-Dataanalysis',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia-ana-study'
                        
                    },
                    {
                        name: 'Submitted Report- Shared the work with AA partners in 8-Nov-2018',
                        color: '#005B9A',
                        id: 'worldBank-Colombia-shared-report',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia-ana-study'
                        
                    },

                    {
                        name: 'New operation',
                        color: '#005B9A',
                        id: 'worldBank-Colombia-Newoperation',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia'
                        
                    },

                    {
                        name: 'Preparation started',
                        color: '#005B9A',
                        id: 'worldBank-Colombia-prep-start',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia-Newoperation'
                        
                    },

                    {
                        name: 'Study shared at workshop with MoH',
                        color: '#005B9A',
                        id: 'worldBank-Colombia-study-shared-moh',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia'
                        
                    },

                    {
                        name: 'Date fixed',
                        color: '#005B9A',
                        id: 'worldBank-Colombia-Datefixed',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia-study-shared-moh'
                        
                    },
                    {
                        name: 'Organized workshop',
                        color: '#005B9A',
                        id: 'worldBank-Colombia-Organizedworkshop',
                        owner: 'World Bank',
                        parent: 'worldBank-Colombia-study-shared-moh',
                        start: Date.UTC(2020, 5, 1),
                        end: Date.UTC(2020, 5, 1),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: 'El Salvador',
                        color: '#005B9A',
                        id: 'worldBank-es',
                        owner: 'World Bank',
                        parent: 'worldBank'
                    },
                    {
                        name: 'Country Pilot (RETF)',
                        color: '#005B9A',
                        id: 'worldBank-es-retf',
                        owner: 'World Bank',
                        parent: 'worldBank-es'
                        
                    },
                    {
                        name: 'Approved in system',
                        color: '#005B9A',
                        id: 'worldBank-es-approve-sys',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf',
                        start: Date.UTC(2018, 8, 13),
                        end: Date.UTC(2018, 8, 13),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: 'First disbursement',
                        color: '#005B9A',
                        id: 'worldBank-es-Firstdisbursement',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf',
                        start: Date.UTC(2019, 6, 8),
                        end: Date.UTC(2019, 6, 8),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: 'Screening 86,400 women for cervical cancer',
                        color: '#005B9A',
                        id: 'worldBank-es-screening',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf',
                        start: Date.UTC(2019, 4, 8),
                        end: Date.UTC(2019, 4, 8),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: 'HPV vaccination for 14,286 girls',
                        color: '#005B9A',
                        id: 'worldBank-es-screening',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf',
                        start: Date.UTC(2019, 4, 8),
                        end: Date.UTC(2019, 4, 8),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: 'Held workshop',
                        color: '#005B9A',
                        id: 'worldBank-es-held_workshop',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf',
                        start: Date.UTC(2019, 6, 23),
                        end: Date.UTC(2019, 7, 24),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: "National workshop to discuss the relevance of NCDs in the country's economy",
                        color: '#005B9A',
                        id: 'worldBank-es-national_workshop',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf',
                        start: Date.UTC(2019, 9, 15),
                        end: Date.UTC(2019, 9, 15),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: "Full time data in and project closed",
                        color: '#005B9A',
                        id: 'worldBank-es-full-time',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf'
                        
                        
                    },
                    {
                        name: 'Haf time data in',
                        color: '#005B9A',
                        id: 'worldBank-es-haf-time',
                        owner: 'World Bank',
                        parent: 'worldBank-es-retf'
                        
                        
                    },

                    {
                        name: 'Pilot Preparation (BETF)',
                        color: '#005B9A',
                        id: 'worldBank-es-betf',
                        owner: 'World Bank',
                        parent: 'worldBank-es'
                        
                    },

                    {
                        name: "Approved in system",
                        color: '#005B9A',
                        id: 'worldBank-es-Appsysbetf',
                        owner: 'World Bank',
                        parent: 'worldBank-es-betf',
                        start: Date.UTC(2019, 7, 2),
                        end: Date.UTC(2019, 7, 2),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: "Started project preparation",
                        color: '#005B9A',
                        id: 'worldBank-es-ppbetf',
                        owner: 'World Bank',
                        parent: 'worldBank-es-betf'
                        
                    },

                    {
                        name: "Preparation completed – Baseline survey submitted",
                        color: '#005B9A',
                        id: 'worldBank-es-ssbbetf',
                        owner: 'World Bank',
                        parent: 'worldBank-es-betf',
                        start: Date.UTC(2020, 7, 10),
                        end: Date.UTC(2020, 7, 10),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: 'General',
                        color: '#005B9A',
                        id: 'worldBank-General',
                        owner: 'World Bank',
                        parent: 'worldBank'
                    },
                    {
                        name: 'Recruit internal WB story teller to be liaised with WS and FSG',
                        color: '#005B9A',
                        id: 'worldBank-General-recruit-wb',
                        owner: 'World Bank',
                        parent: 'worldBank-General',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 1, 14),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: 'WB to share revised proposal',
                        color: '#005B9A',
                        id: 'worldBank-General-revised_prop',
                        owner: 'World Bank',
                        parent: 'worldBank-General',
                        start: Date.UTC(2020, 1, 28),
                        end: Date.UTC(2020, 1, 28),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: 'WB narrative to be developed and shared with SC',
                        color: '#005B9A',
                        id: 'worldBank-General-wb_narrative-sc',
                        owner: 'World Bank',
                        parent: 'worldBank-General',
                        start: Date.UTC(2020, 3, 13),
                        end: Date.UTC(2020, 3, 13),
                        completed: {
                            amount: 0
                        },
                        
                    },
                    {
                        name: 'Ghana',
                        color: '#005B9A',
                        id: 'worldBank-Ghana',
                        owner: 'World Bank',
                        parent: 'worldBank'
                    },

                    {
                        name: 'STEP Survey 1',
                        color: '#005B9A',
                        id: 'worldBank-step-survey1',
                        owner: 'World Bank',
                        parent: 'worldBank-Ghana'
                    },
                    {
                        name: 'Approved in system',
                        color: '#005B9A',
                        id: 'worldBank-app_syste',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey1'
                    },

                    {
                        name: 'NCD policy drafted',
                        color: '#005B9A',
                        id: 'worldBank-ncd_policy_drafted',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey1'
                    },

                    {
                        name: 'Protocol and survey tool drafted',
                        color: '#005B9A',
                        id: 'worldBank-tool-survey',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey1'
                    },

                    {
                        name: 'NCD policy finalised and multi-stakeholder validation held',
                        color: '#005B9A',
                        id: 'worldBank-finalized',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey1'
                    },

                    {
                        name: 'Finalization of survey instrument, protocol and draft proposal for national ethical review',
                        color: '#005B9A',
                        id: 'worldBank-finalized-ethical-review',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey1'
                    },

                    {
                        name: 'STEP Survey 2',
                        color: '#005B9A',
                        id: 'worldBank-step-survey2',
                        owner: 'World Bank',
                        parent: 'worldBank-Ghana'
                    },
                    {
                        name: 'AIN approved in system',
                        color: '#005B9A',
                        id: 'worldBank-app_syste',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey2'
                    },
                    {
                        name: 'CN, GFR approved in system',
                        color: '#005B9A',
                        id: 'worldBank-app_gfr',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey2'
                    },
                    {
                        name: 'Survey report provided',
                        color: '#005B9A',
                        id: 'worldBank-srp',
                        owner: 'World Bank',
                        parent: 'worldBank-step-survey2'
                    },
                    {
                        name: 'Human Capital Project',
                        color: '#005B9A',
                        id: 'worldBank-hcp',
                        owner: 'World Bank',
                        parent: 'worldBank'
                    },

                    {
                        name: 'Approved in system',
                        color: '#005B9A',
                        id: 'worldBank-hcp-appSys',
                        owner: 'World Bank',
                        parent: 'worldBank-hcp',
                        start: Date.UTC(2019, 2, 1),
                        end: Date.UTC(2019, 2, 18),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: '3 studies commissioned',
                        color: '#005B9A',
                        id: 'worldBank-hcp-studies_comm3',
                        owner: 'World Bank',
                        parent: 'worldBank-hcp',
                        start: Date.UTC(2019, 4, 7),
                        end: Date.UTC(2019, 5, 28),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: '1 study completed',
                        color: '#005B9A',
                        id: 'worldBank-hcp-studies_comp1',
                        owner: 'World Bank',
                        parent: 'worldBank-hcp',
                        start: Date.UTC(2019, 8, 30),
                        end: Date.UTC(2019, 8, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: '3 studies completed',
                        color: '#005B9A',
                        id: 'worldBank-hcp-studies_comp3',
                        owner: 'World Bank',
                        parent: 'worldBank-hcp',
                        start: Date.UTC(2019, 11, 31),
                        end: Date.UTC(2019, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: 'Studies shared',
                        color: '#005B9A',
                        id: 'worldBank-hcp-studies_shared',
                        owner: 'World Bank',
                        parent: 'worldBank-hcp',
                        start: Date.UTC(2019, 11, 31),
                        end: Date.UTC(2019, 11, 31),
                        completed: {
                            amount: 0
                        },
                    },


                    {
                        name: 'Joint Learning Network',
                        color: '#005B9A',
                        id: 'worldBank-jln',
                        owner: 'World Bank',
                        parent: 'worldBank'
                    },

                    {
                        name: 'Approved by JLN Steering Group',
                        color: '#005B9A',
                        id: 'worldBank-JLNSteering',
                        owner: 'World Bank',
                        parent: 'worldBank-jln',
                        start: Date.UTC(2019, 7, 30),
                        end: Date.UTC(2019, 7, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Learning event planned',
                        color: '#005B9A',
                        id: 'worldBank-event_planning',
                        owner: 'World Bank',
                        parent: 'worldBank-jln',
                        start: Date.UTC(2019, 7, 30),
                        end: Date.UTC(2019, 7, 30),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Event held',
                        color: '#005B9A',
                        id: 'worldBank-event_held',
                        owner: 'World Bank',
                        parent: 'worldBank-jln',
                        start: Date.UTC(2019, 11, 4),
                        end: Date.UTC(2019, 11, 5),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Report submitted',
                        color: '#005B9A',
                        id: 'worldBank-report_submitted',
                        owner: 'World Bank',
                        parent: 'worldBank-jln'
                    },

                    {
                        name: 'Proposal shared with AA',
                        color: '#005B9A',
                        id: 'worldBank-shared_aa',
                        owner: 'World Bank',
                        parent: 'worldBank-jln'
                    },

                    {
                        name: 'Kenya',
                        color: '#005B9A',
                        id: 'worldBank-kenya',
                        owner: 'World Bank',
                        parent: 'worldBank'
                    },

                    {
                        name: 'Country Pilot',
                        color: '#005B9A',
                        id: 'worldBank-country_pilot',
                        owner: 'World Bank',
                        parent: 'worldBank-kenya'
                    },

                    {
                        name: 'Project effective',
                        color: '#005B9A',
                        id: 'worldBank-project_effective',
                        owner: 'World Bank',
                        parent: 'worldBank-country_pilot',
                        start: Date.UTC(2018, 1, 28),
                        end: Date.UTC(2018, 1, 28),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'Project approved',
                        color: '#005B9A',
                        id: 'worldBank-project_approved',
                        owner: 'World Bank',
                        parent: 'worldBank-country_pilot',
                        start: Date.UTC(2017, 7, 22),
                        end: Date.UTC(2017, 7, 22),
                        completed: {
                            amount: 0
                        },
                    },

                    {
                        name: 'First disbursement',
                        color: '#005B9A',
                        id: 'worldBank-First-disbursement',
                        owner: 'World Bank',
                        parent: 'worldBank-country_pilot'
                    },

                    {
                        name: 'Half time data in',
                        color: '#005B9A',
                        id: 'worldBank-halfTime',
                        owner: 'World Bank',
                        parent: 'worldBank-country_pilot'
                    },

                    {
                        name: 'Full time data in and project closed',
                        color: '#005B9A',
                        id: 'worldBank-fullTime',
                        owner: 'World Bank',
                        parent: 'worldBank-country_pilot'
                    },

                    {
                        name: 'Kenya Learning',
                        color: '#005B9A',
                        id: 'worldBank-KenyaLearning',
                        owner: 'World Bank',
                        parent: 'worldBank-kenya'
                    },

                    {
                        name: 'Launch workshop',
                        color: '#005B9A',
                        id: 'worldBank-Launchworkshop',
                        owner: 'World Bank',
                        parent: 'worldBank-KenyaLearning',
                        start: Date.UTC(2018, 2, 30),
                        end: Date.UTC(2018, 2, 30),
                        completed: {
                            amount: 0
                        },
                    },
                    {
                        name: '2 learning events in year 1',
                        color: '#005B9A',
                        id: 'worldBank-learning2events',
                        owner: 'World Bank',
                        parent: 'worldBank-KenyaLearning'
                    },
                    {
                        name: 'Study on socioeconomic impact of cancer on household/family',
                        color: '#005B9A',
                        id: 'worldBank-socioeconomic',
                        owner: 'World Bank',
                        parent: 'worldBank-KenyaLearning'
                    },
                    {
                        name: 'Working paper summarising all results from the county pilot',
                        color: '#005B9A',
                        id: 'worldBank-pilot',
                        owner: 'World Bank',
                        parent: 'worldBank-KenyaLearning'
                    },

                    {
                        name: 'MSH',
                        color: '#005B9A',
                        id: 'worldBank-MSH',
                        owner: 'World Bank',
                        parent: 'worldBank'
                    },
                    {
                        name: '3 country or regional workshops planned',
                        color: '#005B9A',
                        id: 'worldBank-MSH-cr',
                        owner: 'World Bank',
                        parent: 'worldBank-MSH',
                        
                        end: Date.UTC(2018, 5, 28),
                        completed: {
                            amount: 0
                        },

                    },

                    {
                        name: 'Extension of contract with MSH completed',
                        color: '#005B9A',
                        id: 'worldBank-MSH-ecc',
                        owner: 'World Bank',
                        parent: 'worldBank-MSH'

                    },

                    {
                        name: 'Compendium, 3 workshops and webinar delivered (year 1)',
                        color: '#005B9A',
                        id: 'worldBank-MSH-cwwd',
                        owner: 'World Bank',
                        parent: 'worldBank-MSH',
                        start: Date.UTC(2018, 10, 8),
                        end: Date.UTC(2018, 10, 8),
                        completed: {
                            amount: 0
                        },

                    },

                    {
                        name: '3 workshops completed and 3 more planned',
                        color: '#005B9A',
                        id: 'worldBank-MSH-wcp',
                        owner: 'World Bank',
                        parent: 'worldBank-MSH',
                        start: Date.UTC(2019, 5, 28),
                        end: Date.UTC(2019, 9, 31),
                        completed: {
                            amount: 0
                        },

                    },

                    {
                        name: 'All workshops completed and updated compendium delivered',
                        color: '#005B9A',
                        id: 'worldBank-MSH-wccd',
                        owner: 'World Bank',
                        parent: 'worldBank-MSH'

                    },
                    {
                        name: 'Regulation',
                        color: '#005B9A',
                        id: 'worldBank-Regulation',
                        owner: 'World Bank',
                        parent: 'worldBank'
                    },
                    {
                        name: 'GS1 Conference Lagos',
                        color: '#005B9A',
                        id: 'worldBank-Regulation-lagos',
                        owner: 'World Bank',
                        parent: 'worldBank-Regulation'
                    },

                    {
                        name: 'Report submitted',
                        color: '#005B9A',
                        id: 'worldBank-Regulation-lagos-rs',
                        owner: 'World Bank',
                        parent: 'worldBank-Regulation-lagos',
                        start: Date.UTC(2019, 11, 31),
                        end: Date.UTC(2019, 11, 31),
                        completed: {
                            amount: 0
                        },

                    },

                    {
                        name: 'Conference held',
                        color: '#005B9A',
                        id: 'worldBank-Regulation-lagos-ch',
                        owner: 'World Bank',
                        parent: 'worldBank-Regulation-lagos',
                        start: Date.UTC(2019, 8, 19),
                        end: Date.UTC(2019, 8, 19),
                        completed: {
                            amount: 0
                        },

                    },
                    {
                        name: 'Grant to GS1 processed',
                        color: '#005B9A',
                        id: 'worldBank-Regulation-lagos-gs1',
                        owner: 'World Bank',
                        parent: 'worldBank-Regulation-lagos'

                    },
                    {
                        name: 'Approved in system',
                        color: '#005B9A',
                        id: 'worldBank-Regulation-lagos-asys',
                        owner: 'World Bank',
                        parent: 'worldBank-Regulation-lagos',
                        start: Date.UTC(2019, 1, 1),
                        end: Date.UTC(2019, 2, 18),
                        completed: {
                            amount: 0
                        },

                    },

                    {
                        name: 'PAC E-learning',
                        color: '#005B9A',
                        id: 'worldBank-PAC_E-learning',
                        owner: 'World Bank',
                        parent: 'worldBank-Regulation'
                    },

                    {
                        name: 'developed curricura',
                        color: '#005B9A',
                        id: 'worldBank-PAC_E-learning-dcur',
                        owner: 'World Bank',
                        parent: 'worldBank-PAC_E-learning',
                        start: Date.UTC(2019, 3, 30),
                        end: Date.UTC(2019, 1, 15),
                        completed: {
                            amount: 0
                        },

                    },
                    {
                        name: 'Work commissioned',
                        color: '#005B9A',
                        id: 'worldBank-PAC_E-learning-wcom',
                        owner: 'World Bank',
                        parent: 'worldBank-PAC_E-learning',
                        start: Date.UTC(2019, 2, 18),
                        end: Date.UTC(2019, 3, 30),
                        completed: {
                            amount: 0
                        },

                    },

                    {
                        name: 'Approved in system',
                        color: '#005B9A',
                        id: 'worldBank-PAC_E-learning-a_system',
                        owner: 'World Bank',
                        parent: 'worldBank-PAC_E-learning',
                        start: Date.UTC(2019, 1, 1),
                        end: Date.UTC(2019, 2, 18),
                        completed: {
                            amount: 0
                        },

                    },

                    {
                        name: 'SC review',
                        color: '#005B9A',
                        id: 'worldBank-PAC_E-learning-sc-review',
                        owner: 'World Bank',
                        parent: 'worldBank-PAC_E-learning'

                    },
                    {
                        name: 'e-curricula launched',
                        color: '#005B9A',
                        id: 'worldBank-PAC_E-learning-e-curr',
                        owner: 'World Bank',
                        parent: 'worldBank-PAC_E-learning'

                    },
                    {
                        name: 'Vietnam',
                        color: '#005B9A',
                        id: 'worldBank-Vietnam',
                        owner: 'World Bank',
                        parent: 'worldBank'
                    },

                    {
                        name: 'Loan co-financing grant (RETF) of US$3mn',
                        color: '#005B9A',
                        id: 'worldBank-Vietnam-lcfg',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam'
                    },
                    {
                        name: 'Project was approved',
                        color: '#005B9A',
                        id: 'worldBank-Vietnam-pwa',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-lcfg'
                    },

                    {
                        name: 'Expect project signed',
                        color: '#005B9A',
                        id: 'worldBank-Vietnam-exps',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-lcfg'
                    },
                    {
                        name: 'End of first year ISR rates project as MS or S on grant-financed activities',
                        color: '#005B9A',
                        id: 'worldBank-Vietnam-isr1',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-lcfg'
                    },

                    {
                        name: 'End of second year ISR rates project as MS or S on grant-financed activities',
                        color: '#005B9A',
                        id: 'worldBank-Vietnam-isr2',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-lcfg'
                    },
                    {
                        name: 'End of third year ISR rates project as MS or S on grant-financed activities',
                        color: '#005B9A',
                        id: 'worldBank-Vietnam-isr3',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-lcfg'
                    },

                    {
                        name: 'TA to clinical decision support app for NCDs',
                        color: '#005B9A',
                        id: 'worldBank-Vietnam-tcds',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam'
                    },

                    {
                        name: 'Activity initiated in portal',
                        color: '#005B9A',
                        id: 'worldBank-Vietnam-aips',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-tcds',
                        start: Date.UTC(2020, 1, 18),
                        end: Date.UTC(2020, 2, 30),
                        completed: {
                            amount: 0
                        },

                    },

                    {
                        name: 'App developed',
                        color: '#005B9A',
                        id: 'worldBank-Vietnam-appDevop',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-tcds',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 9, 30),
                        completed: {
                            amount: 0
                        },

                    },
                    {
                        name: 'App tested in field',
                        color: '#005B9A',
                        id: 'worldBank-Vietnam-apptestfield',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-tcds',
                        start: Date.UTC(2020, 10, 2),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },

                    },
                    {
                        name: 'Implementation and evaluation plan developed',
                        color: '#005B9A',
                        id: 'worldBank-Vietnam-iepd',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-tcds',
                        start: Date.UTC(2020, 10, 2),
                        end: Date.UTC(2021, 0, 29),
                        completed: {
                            amount: 0
                        },

                    },

                    {
                        name: 'App ready for deployment as a project pilot',
                        color: '#005B9A',
                        id: 'worldBank-Vietnam-ardpp',
                        owner: 'World Bank',
                        parent: 'worldBank-Vietnam-tcds',
                        start: Date.UTC(2021, 1, 26),
                        end: Date.UTC(2021, 1, 26),
                        completed: {
                            amount: 0
                        },

                    },
                    
                ],
            },

            //Research
            {
                name: 'Research',
                color: '#005B9A',
                data: [
                    {
                        name: 'Research',
                        color: '#005B9A',
                        id: 'research',
                        owner: 'Research',
                    },
                    {
                        name: 'Best Practices for in kind contributions in public health publication',
                        color: '#005B9A',
                        id: 'research-bpkcphp',
                        owner: 'Research',
                        parent: 'research',
                        start: Date.UTC(2020, 3, 1),
                        end: Date.UTC(2020, 11, 31),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: 'Evidence based papers',
                        color: '#005B9A',
                        id: 'research-ebp',
                        owner: 'Research',
                        parent: 'research'
                        
                    },

                    {
                        name: '6th paper to be delivered',
                        color: '#005B9A',
                        id: 'research-p6bd',
                        owner: 'Research',
                        parent: 'research-ebp',
                        start: Date.UTC(2020, 10, 30),
                        end: Date.UTC(2020, 10, 30),
                        completed: {
                            amount: 0
                        },
                        
                    },
                    {
                        name: '5th paper to be delivered',
                        color: '#005B9A',
                        id: 'research-p5bd',
                        owner: 'Research',
                        parent: 'research-ebp',
                        start: Date.UTC(2020, 8, 30),
                        end: Date.UTC(2020, 8, 30),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: '4th paper to be delivered',
                        color: '#005B9A',
                        id: 'research-p4bd',
                        owner: 'Research',
                        parent: 'research-ebp',
                        start: Date.UTC(2020, 6, 31),
                        end: Date.UTC(2020, 6, 31),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: 'Second and third papers: To be delivered',
                        color: '#005B9A',
                        id: 'research-p2bd',
                        owner: 'Research',
                        parent: 'research-ebp',
                        start: Date.UTC(2020, 1, 3),
                        end: Date.UTC(2020, 4, 15),
                        completed: {
                            amount: 0
                        },
                        
                    },

                    {
                        name: 'First Paper: To be delivered',
                        color: '#005B9A',
                        id: 'research-p1bd',
                        owner: 'Research',
                        parent: 'research-ebp',
                        start: Date.UTC(2020, 1, 28),
                        end: Date.UTC(2020, 1, 28),
                        completed: {
                            amount: 0
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