export default function PortfolioItems() {

    const mainObject = {
        '001': {
            title: 'T-Y-P-E Demo',
            status: 'Demo',
            summary: 'Simple demo of a hardcore typing speed trainer made for programmers. Built from scratch using React.',
            image: '/images/t-y-p-e-demo.png',
            link: 'https://t-y-p-e.com',
            github: 'https://github.com/Sheldonfrith/t-y-p-e-demo',
        },
        '002': {
            title: 'Simple Secured API Example',
            status: 'Functional',
            summary: 'Simple backend with secure endpoints requiring login to access. Demo of functionality. Built using Node>Express>Loopback 4>Passport, hosted on AWS EC2 instance. UI is SSR using pug/jade hosted on the same server as the backend.',
            image: '',
            link: 'http://18.188.240.246/',
            github: 'https://github.com/Sheldonfrith/SimpleAuthDemo',
        },
        '003': {
            title: 'AR Service Dashboard and Backend',
            status: 'Coming Soon',
            summary: 'Cannot reveal too much information about this yet. I will be working with an AR startup to develop a client dashboard, analytics, and basic backend architecture.',
            image: '/images/modelviewer.png',
            link: '',
            github: '',
        },
        '004': {
            title: 'Full T-Y-P-E Web App',
            status: 'Coming Soon',
            summary: 'Based on the T-Y-P-E Demo. The full app will have a backend with user accounts. It will include new features like custom and premade training modes (ex. Java, C++, HTML specific typing training), as well as detailed lifetime stats for each user, and more.',
            image: '',
            link: 'https://t-y-p-e.com',
            github: '',
        },
        '005': {
            title: 'Simple Android Calculator App',
            status: 'Coming Eventually',
            summary: 'A simple test app to work out the kinks of developing native mobile apps. Larger projects planned for the future.',
            image: '',
            link: '',
            github: '',
        },
        '006': {
            title: 'The Place For Me - API',
            status: 'Coming Eventually',
            summary: 'An API designed to tell you where in the world you should live, based on a detailed questionaire taking into account a large number of factors. Building the database for this one will take me a while.',
            image: '/images/earth.jpg',
            link: 'https://theplacefor.me',
            github: 'https://github.com/Sheldonfrith/whereshouldilive',
        },
    }


    return mainObject;
}