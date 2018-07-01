import { Education } from "./education/education.model";

export const EDUCATIONS: Education[] = [{
    title: 'Nanyang Technological University, SG',
    period: '2013 - 2018',
    image: {
        path: 'assets/img/ntu.jpg',
        alt: 'ntu',
        isPadImage: false
    },
    content: [
        'B.EngSc. in Computer Science',
        'M.Sc in Technology Management',
        'Cumulative GPA of 4.69 (out of 5.0)'
    ]
}, {
    title: 'University of California, Berkeley',
    period: '2015 - 2016',
    image: {
        path: 'assets/img/ucb.jpg',
        alt: 'ucb',
        isPadImage: false
    },
    content: [
        '1 year exchange programme as a member of NTU\'s Renaissance Engineering Programme.'
    ]
}];
