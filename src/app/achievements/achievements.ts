import { Achievement } from "./achievement/achievement.model";

export const ACHIEVEMENTS: Achievement[] = [
    {
        title: "Nanyang Scholarship",
        period: "2013 - Dec 2017",
        image: {
            path: "assets/img/material-placeholder.jpg",
            alt: "placeholder",
            isPadImage: false
        },
        content: []
    },
    {
        title: "Renaissance Engineering Programme",
        period: "2013 - Dec 2017",
        image: {
            path: "assets/img/material-placeholder.jpg",
            alt: "placeholder",
            isPadImage: false
        },
        content: [
            "Premier Scholars Programme",
            "Dual-degree programme that awards a Bachelor of Engineering Science coupled with a Master of Science in Technology Management"
        ]
    },
    {
        title: "Bosch Buildings of Tomorrow Hackathon 2017, 1st place",
        period: "13 – 14 May 2017",
        image: {
            "path": "assets/img/material-placeholder.jpg",
            "alt": "placeholder",
            "isPadImage": false
        },
        content: [
            "Hackathon held by Bosch in collaboration with Microsoft to challenge participants to create an Internet of Things solution that makes buildings smarter, and pitch the solution as a business idea",
            "Lead Android developer for Q-less, an integrated solution to solve the seat reservation problem in food courts and restaurants"
        ]
    },
    {
        title: "HackTech 2016 at California Institute of Technology",
        period: "26 Feb – 03 Mar 2016",
        image: {
            path: "assets/img/material-placeholder.jpg",
            alt: "placeholder",
            isPadImage: false,
        },
        content: [
            "Developed a navigation system for the blind that provides audio instructions and performs image recognition using Python"
        ]
    }
];