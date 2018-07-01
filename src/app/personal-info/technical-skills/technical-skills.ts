import { TechnicalSkill } from "./technical-skill.model";

export const TECHNICAL_SKILLS: TechnicalSkill[] = [{
    title: 'Languages',
    image: {
        path: 'assets/img/languages.jpg',
        alt: 'languages',
        isPadImage: false
    },
    content: [
        'Java (Intermediate)',
        'JavaScript/TypeScript (Intermediate)',
        'HTML (Intermediate)',
        'CSS (Intermediate)'
    ]
}, {
    title: 'Tools',
    image: {
        path: 'assets/img/tools.jpg',
        alt: 'tools',
        isPadImage: false
    },
    content: [
        'Android Studio (Intermediate)',
        'Git (Intermediate)'
    ]
}, {
    title: 'Frameworks',
    image: {
        path: 'assets/img/frameworks.jpg',
        alt: 'frameworks',
        isPadImage: false
    },
    content: [
        'Angular (Intermediate)',
        'Android (Intermediate)',
        'Node.js (Intermediate)',
    ]
}, {
    title: 'Certifications',
    image: {
        path: 'assets/img/certifications.jpg',
        alt: 'certifications',
        isPadImage: false
    },
    content: [
        'Udacity\'s "Developing Android Apps" course'
    ]
}
];