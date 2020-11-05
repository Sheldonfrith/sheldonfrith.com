    const defaultIcon = ['React-icon.svg','https://reactjs.org' ];
    const iconObject = {
         'React': [/.*react.*/,'React-icon.svg','https://reactjs.org'],
         'AWS':
         [/.*aws.*/,'Amazon_Web_Services_Logo.svg','https://aws.amazon.com'],
         'Bootstrap':
             [/.*bootstrap.*/,'Bootstrap_logo.svg','https:getbootstrap.com'],
         'CSS':
         [/.*css.*/,'CSS3_logo.svg','https://www.w3.org/Style/CSS/Overview.en.html'],
         'DigitalOcean':
             [/.*digital.*ocean.*/,'DigitalOcean_logo.svg','https://digitalocean.com'],
             'Elementor':
             [/.*elementor.*/,'Elementor-logo.svg','https://elementor.com'],
         'Express':
             [/.*express.*/,'express-js-logo.svg','https://expressjs.com'],
         'Firebase':
             [/.*firebase.*/,'Firebase_Logo.svg','https://firebase.google.com'],
             'HTML':
             [/.*html.*/,'HTML5_logo.svg','https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'],
         'Javascript':
             [/.*javascript.*/,'JavaScript_logo.svg','https://javascript.com'],
         'Laravel':
         [/.*laravel.*/,'Laravel.svg','https://laravel.com'],
         'Netlify':
             [/.*netlify.*/,'Netlify_logo.svg','https://netlify.com'],
         'Node':
         [/.*node.*/,'Node.js_logo.svg','https://nodejs.org'],
         'PHP':
         [/.*php.*/,'PHP-logo.svg','https://php.net'],
         'StyledComponents':
         [/.*styled.*componets.*/,'styled-components.svg','https://styled-components.com'],
         'Typescript':
         [/.*typescript.*/,'typescript-icon.svg','https://typescriptlang.org'],
         'WooCommerce':
         [/.*woo.*commerce.*/,'WooCommerce_logo.svg','https://woocommerce.com'],
         'Wordpress':
         [/.*wordpress.*/,'Wordpress-Logo.svg','https://wordpress.org'],
         'MYSQL':
    [/.*mysql.*/,'mysql-logo.svg','https://mysql.com'],
        }
export const getTechStackIconAndLink =(techName)=>{
    console.log('getting icon by name', techName);
        //gets all regex matcheds for the input string and returns the first one
    //as an array with the file name and the link
    const iconArray =  Object.keys(iconObject).filter(iconName => {
        const regex = RegExp(iconObject[iconName][0], 'i');
        const isMatch = regex.test(techName);
        // console.log('ismatch = ', isMatch,' for ', regex);
        return isMatch;
        })[0];
    
    if (!iconArray) {
        console.log('could not find an icon match for ',techName, iconArray);
        return defaultIcon;
    }
    const returnArray = iconObject[iconArray];
    returnArray.shift();//mutates, removes first item which is the uneccessary regex
    return returnArray;
}