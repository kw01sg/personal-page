import { Experience } from './experience/experience.model';

export const EXPERIENCES: Experience[] = [
    {
        companyName: 'Asia Risk Transfer Solutions, SG',
        companyRole: 'Technology Analyst',
        companyId: 'arts',
        period: 'Aug 2017 - Present',
        image: {
            path: 'assets/img/arts.png',
            alt: 'asia risk transfer solutions',
            isPadImage: true
        },
        content: [
            'Design, implementation and maintenance for ARTS\' suite of products',
            'Responsible for designing and building automated tests, and working with the software development team to instrument automated testing in their workflow.'
        ]
    },
    {
        companyName: 'Codigo, SG',
        companyRole: 'Intern Android Developer',
        companyId: 'codigo',
        period: 'May - Aug 2017',
        image: {
            path: 'assets/img/fast-fast.jpeg',
            alt: 'fast fast',
            isPadImage: false
        },
        content: [
            'Android Development on FastFast Android version 2. FastFast is an affordable courier for urgent delivery service. Collaborated with UI / UX designers and other developers to implement functional requirements and improve existing functionalities.Java, SQL and XML in Android Studio was used.',
            'Software Architect for FastFast Android version 2. Designed and implemented FastFast Android version 2’s software architecture, which includes refactoring of legacy code and implementing code for new features.',
            'User Acceptance Test for FastFast Web version 2.'
        ]
    },
    {
        companyName: 'MSD, NJ',
        companyRole: 'Intern Web Developer',
        companyId: 'msd',
        period: 'May – Jul 2016',
        image: {
            path: 'assets/img/msd.svg',
            alt: 'msd',
            isPadImage: true
        },
        content: [
            'Front End Web Development on M-code Lookup tool and EDRC/LDRC Document Search Tool. Both are ASP.NET web application for internal Merck use. HTML, CSS, JavaScript and C# in Microsoft Visual Studio were used.',
            'Front End Development for Microsoft SharePoint using HTML, CSS and JavaScript.',
            'Technical evaluation of business proposals for Merck for Mothers initiative.'
        ]
    }
];