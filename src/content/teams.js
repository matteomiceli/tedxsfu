// image imports to avoid StaticImage limitations
import leads from '../static/images/teams/leads.jpg'
import creative from '../static/images/teams/creative.jpg'
import content from '../static/images/teams/content.jpg'
import events from '../static/images/teams/events.jpg'
import internal from '../static/images/teams/internal.jpg'
import marketing from '../static/images/teams/marketing.jpg'
import pr from '../static/images/teams/pr.jpg'

const teams = [
    {
        i: 1,
        team: 'Project Leads',
        img: leads,
        members: [
            {
                name: 'Sara Milosavic',
                role: 'Project Lead',
                pro: 'She/Her'
            },
            {
                name: 'Vivian Wong',
                role: 'Project Lead',
                pro: 'She/Her'
            }
        ]
    },
    {
        i: 2,
        team: 'Events',
        img: events,
        members: [
            {
                name: 'Palak Jain',
                role: 'Director',
                pro: 'She/Her'
            },
            {
                name: 'Rohina Gandhi',
                role: 'Coordinator',
                pro: 'She/Her'
            },
            {
                name: 'Teresa Li',
                role: 'Coordinator',
                pro: 'She/Her'
            }
        ]
    },
    {
        i: 3,
        team: 'Content',
        img: content,
        members: [
            {
                name: 'Naghmi Shireen',
                role: 'Director',
                pro: 'She/Her'
            },
            {
                name: 'Bomin Keum',
                role: 'Coordinator',
                pro: 'She/Her'
            },
            {
                name: 'Nimra Askari',
                role: 'Coordinator',
                pro: 'She/Her'
            }
        ]
    },
    {
        i: 4,
        team: 'Creative',
        img: creative,
        members: [
            {
                name: 'Alvin Leung',
                role: 'Director',
                pro: 'He/Him'
            },
            {
                name: 'Lauren Mok',
                role: 'Coordinator',
                pro: 'She/They'
            },
            {
                name: 'Sneha Shah',
                role: 'Coordinator',
                pro: 'She/They'
            },
            {
                name: 'Gracie Gu',
                role: 'Coordinator',
                pro: 'She/They'
            },
            {
                name: 'Matteo Miceli',
                role: 'Web Developer',
                pro: 'He/Him'
            }
        ]
    },
    {
        i: 5,
        team: 'Marketing',
        img: marketing,
        members: [
            {
                name: 'Diana Kulikova',
                role: 'Director',
                pro: 'She/Her'
            },
            {
                name: 'Manreet Mahal',
                role: 'Coordinator',
                pro: 'She/Her'
            },
            {
                name: 'Carlos Lopez Sandoval',
                role: 'Coordinator',
                pro: 'He/Him'
            }
        ]
    },
    {
        i: 6,
        team: 'Partner Relations',
        img: pr,
        members: [
            {
                name: 'Shabnam Raufi',
                role: 'Director',
                pro: 'She/Her'
            },
            {
                name: 'Isaac Maulana',
                role: 'Coordinator',
                pro: 'He/Him'
            },
            {
                name: 'Ivy Lu',
                role: 'Coordinator',
                pro: 'She/Her'
            }
        ]
    },
    {
        i: 7,
        team: 'Internal Relations',
        img: internal,
        members: [
            {
                name: 'Christina Walker',
                role: 'Director',
                pro: 'She/Her'
            },
            {
                name: 'Angela Sheenmar',
                role: 'Coordinator',
                pro: 'She/Her'
            },
            {
                name: 'Ronak Salamat',
                role: 'Coordinator',
                pro: 'She/Her'
            }
        ]
    }
]

export default teams;
