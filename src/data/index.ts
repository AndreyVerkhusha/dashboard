import moment from "moment/moment";
import { Board, DashboardCard, Order, UserData } from "@/types";
import { EventInput } from "@fullcalendar/core";


export const data = {
    dashboardData(): DashboardCard[] {
        return [
            {
                title: "Revenue",
                change: Math.floor(Math.random() * 250),
                amount: Math.floor(Math.random() * 42222),
            },
            {
                title: "Orders",
                change: Math.floor(Math.random() * 250),
                amount: Math.floor(Math.random() * 42222),
            },
            {
                title: "Expenses",
                change: Math.floor(Math.random() * 250),
                amount: Math.floor(Math.random() * 42222),
            },
            {
                title: "Profit",
                change: Math.floor(Math.random() * 250),
                amount: Math.floor(Math.random() * 42222),
            },
        ];
    },
    ordersData(): Order[] {
        return (
            [
                {
                    name: "Skatebnoard",
                    type: "Illustration",
                    items: 58,
                    change: 110,
                },
                {
                    name: "Language courses",
                    type: "Illustration",
                    items: 12,
                    change: 72
                },
                {
                    name: "Office Collaboration",
                    type: "Illustration",
                    items: 7,
                    change: 70
                },
                {
                    name: "Robot",
                    type: "Illustration",
                    items: 21,
                    change: 35
                }
            ]
        );
    },
    groupNumber(number: number) {
        return parseFloat(number.toFixed(2))
            .toLocaleString("ru", {
                useGrouping: true,
            });
    },
    boardData(): Board {
        return {
            columns: [
                {
                    id: 1,
                    title: "Backlog",
                    cards: [
                        {
                            id: 2,
                            title: "Database Setup",
                            description: "Firebase Integration"
                        },
                        {
                            id: 3,
                            title: "Data Flow",
                            description: "Setup Diagram with other developers"
                        },
                    ]
                },
                {
                    id: 4,
                    title: "TODO",
                    cards: [
                        {
                            id: 5,
                            title: "Data Table Page",
                            description: "Server side Pagination",
                        }
                    ]
                },
                {
                    id: 6,
                    title: "Doing",
                    cards: [
                        {
                            id: 7,
                            title: "Full Calendar Extension",
                            description: "Make new events and store in global states"
                        },
                        {
                            id: 8,
                            title: "Custom Kanban Board",
                            description: "Setup react-kanban dep within Dashboard as seperate page"
                        }
                    ]
                },
                {
                    id: 9,
                    title: "Completed",
                    cards: [
                        {
                            id: 10,
                            title: "Vite Server Setup",
                            description: "Configure required modules and starters"
                        },
                        {
                            id: 11,
                            title: "Modular structre",
                            description: "Write css in form of modules to reduce the naming conflicts"
                        }
                    ]
                }
            ]
        };
    },
    createEventId(): string {
        return String(eventGuid++);
    }
};

let eventGuid = 0;
const todayStr = moment().format("YYYY-MM-DD");
export const INITIAL_EVENTS: EventInput[] = [
    {
        id: data.createEventId(),
        title: 'Lunch Pary',
        start: todayStr,
    },
    {
        id: data.createEventId(),
        title: 'Timed event',
        start: moment(todayStr).add(1, "days").format("YYYY-MM-DD")
    },
    {
        id: data.createEventId(),
        title: "Head Meetup",
        start: moment(todayStr).add(2, "days").format("YYYY-MM-DD")
    },
    {
        id: data.createEventId(),
        title: "VC Meeting",
        start: moment(todayStr).add(3, "days").format("YYYY-MM-DD")
    },
    {
        id: data.createEventId(),
        title: "Payment Shedules",
        start: moment(todayStr).add(5, "days").format("YYYY-MM-DD")
    },
    {
        id: data.createEventId(),
        title: "VC Meeting",
        start: moment(todayStr).add(6, "days").format("YYYY-MM-DD")
    },
];
export const userData: UserData[] = [
    {
        name: {
            firstName: 'John',
            lastName: 'Doe',
        },
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        name: {
            firstName: 'Jane',
            lastName: 'Doe',
        },
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: 'Joe',
            lastName: 'Doe',
        },
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Vandy',
        },
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina',
    }, {
        name: {
            firstName: 'Jane',
            lastName: 'Doe',
        },
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: 'Joe',
            lastName: 'Doe',
        },
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Vandy',
        },
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina',
    },
];