export default function PortfolioItems() {

    const mainObject = {
        't-y-p-e-demo': {
            title: 'T-Y-P-E',
            status: 'Demo',
            summary: 'Simple demo of a hardcore typing speed trainer made for programmers. Built from scratch using React.',
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
            summary: 'Just finished a project for an Augmented Reality startup to develop a client dashboard, analytics, and basic backend architecture/security. Reference available upon request.',
            image: '/images/modelviewer.png',
            showImage: true,
            link: '',
            github: '',
            icon: '/images/a-r-icon.svg',
            techStack: ['React','Javascript','Firebase','Express']
        },
        'the-place-for-me': {
            title: 'The Place For Me',
            status: 'Under Construction',
            summary: 'Web app designed to tell you where you should live based on a detailed questionaire taking into account a large number of global datasets. Currently populating the database with country data, but you can still currently test out the basic functionality.',
            image: '/images/World-Countries.jpg',
            showImage: true,
            link: 'https://theplacefor.me',
            github: 'https://github.com/Sheldonfrith/whereshouldilive',
            icon: '/images/world-icon.svg',
            techStack: ['React','Express','Netlify','AWS', 'Bootstrap']
        },
        'simple-auth-demo': {
            title: 'Simple Authorization',
            status: 'Demo',
            summary: 'Simple backend with secure endpoints requiring login to access. Demo of functionality. Built using Node>Express>Loopback 4>Passport, hosted on AWS EC2 instance. UI is SSR using pug/jade hosted on the same server as the backend.',
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
            summary: 'A simple wordpress website, with woo-commerce store, elementor theme, for my goat farming business.',
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