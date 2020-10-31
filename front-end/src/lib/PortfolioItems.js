export default function PortfolioItems() {

    const mainObject = {
        't-y-p-e-demo': {
            title: 'T-Y-P-E',
            status: 'Demo',
            summary: 'Simple demo of a hardcore typing speed trainer made for programmers.',
            image: '/images/t-y-p-e-demo.png',
            showImage: true,
            link: 'https://t-y-p-e.com',
            github: 'https://github.com/Sheldonfrith/t-y-p-e-demo',
            icon: '/images/t-y-p-e-icon.svg',
            techStack: ['React','CSS','Netlify'],
        },
        'sharp-ar': {
            title: 'Sharp Augmented Reality',
            status: 'Live Beta',
            summary: 'A recently finished  project for an Augmented Reality startup to develop a client dashboard, analytics, and basic backend architecture/security. Reference available upon request.',
            image: '/images/modelviewer.png',
            showImage: true,
            link: 'https://sharpar.io',
            github: '',
            icon: '/images/a-r-icon.svg',
            techStack: ['React','Javascript','Firebase','Express']
        },
        'the-place-for-me-api':{
            title: 'Public API',
            status: 'Beta',
            summary: 'The backend that powers my other project "theplacefor.me", built with a LAMP stack. Anyone can use this API to build an app similar to "theplacefor.me" which ranks all the countries in the world based on a wide variety of custom criteria. Visit api.theplacefor.me to read the API Docs and Statistical Methodology. Im still in the process of adding datasets.',
            image: '',
            showImage: true,
            link: 'https://api.theplacefor.me',
            github: 'https://github.com/Sheldonfrith/theplaceforme-backend',
            icon: '/images/world-icon.svg',
            techStack: ['Laravel','MySQL','Digital Ocean','PHP']
        },
        'the-place-for-me': {
            title: 'The Place For Me',
            status: 'Under Construction',
            summary: 'Web app consuming my public api (api.theplacefor.me) designed to tell you where you should live based on a detailed questionaire taking into account a large number of global datasets.',
            image: '/images/World-Countries.jpg',
            showImage: true,
            link: 'https://theplacefor.me',
            github: 'https://github.com/Sheldonfrith/whereshouldilive',
            icon: '/images/world-icon.svg',
            techStack: ['React','Typescript','Netlify', 'Styled Components']
        },
        'simple-auth-demo': {
            title: 'Simple Authorization',
            status: 'Demo',
            summary: 'Simple backend with secure endpoints requiring login to access. Demo of functionality.',
            image: '/images/simple-auth-demo.png',
            showImage: true,
            link: 'https://simple-auth-demo.sheldonfrith.com/',
            github: 'https://github.com/Sheldonfrith/SimpleAuthDemo',
            icon: '/images/security-icon.svg',
            techStack: ['React','Bootstrap', 'Express','AWS'],
        },
        'simple-mobile-calculator': {
            title: 'Simple Mobile Calculator',
            status: 'Demo',
            summary: 'A simple test app to work out the kinks of developing native mobile apps. Larger projects planned for the future.',
            image: '/images/mobile-calculator.png',
            showImage: true,
            link: 'https://simple-mobile-calculator.sheldonfrith.com',
            github: 'https://github.com/Sheldonfrith/simple-mobile-calculator',
            icon: '/images/calculator-icon.svg',
            techStack: ['React'],
        },
        'fazenda-meats' : {
            title: 'Fazenda Meats',
            status: 'Live',
            summary: 'A simple homepage and online store for my goat farming business.',
            image: '/images/fazendameats.png',
            showImage: true,
            link: 'http://fazendameats.com',
            github: '',
            icon: '/images/goat-icon.svg',
            techStack: ['Wordpress','WooCommerce', 'Elementor'],
        },
        't-y-p-e': {
            title: 'T-Y-P-E Full App',
            status: 'Coming Soon',
            summary: 'Based on the T-Y-P-E Demo. The full app will have a backend with user accounts. It will include new features like custom and premade training modes (ex. Java, C++, HTML specific typing training), as well as detailed lifetime stats for each user, and more.',
            image: '',
            showImage: false,
            link: 'https://t-y-p-e.com',
            github: '',
            icon: '/images/t-y-p-e-icon.svg',
            techStack: ['React','Express','CSS']
        },
    }


    return mainObject;
}