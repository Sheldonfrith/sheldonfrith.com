export const getTechStackIconAndLink =(techName)=>{
    switch(techName){
        case 'React':
            return ['React-icon.svg','https://reactjs.org'];
        case 'AWS':
            return ['Amazon_Web_Services_Logo.svg','https://aws.amazon.com'];
        case 'Bootstrap':
            return ['Bootstrap_logo.svg','https:getbootstrap.com'];
        case 'CSS':
            return ['CSS3_logo.svg','https://www.w3.org/Style/CSS/Overview.en.html'];
        case 'Digital Ocean':
            return ['DigitalOcean_logo.svg','https://digitalocean.com'];
        case 'Elementor':
            return ['Elementor-logo.svg','https://elementor.com'];
        case 'Express':
            return ['express-js-logo.svg','https://expressjs.com'];
        case 'Firebase':
            return ['Firebase_Logo.svg','https://firebase.google.com'];
        case 'HTML':
            return ['HTML5_logo.svg','https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'];
        case 'Javascript':
            return ['JavaScript_logo.svg','https://javascript.com'];
        case 'Laravel':
            return ['Laravel.svg','https://laravel.com'];
        case 'Netlify':
            return ['Netlify_logo.svg','https://netlify.com'];
        case 'Node':
            return ['Node.js_logo.svg','https://nodejs.org'];
        case 'PHP':
            return ['PHP-logo.svg','https://php.net'];
        case 'Styled Components':
            return ['styled-components.svg','https://styled-components.com'];
        case 'Typescript':
            return ['typescript-icon.svg','https://typescriptlang.org'];
        case 'Woo Commerce':
            return ['WooCommerce_logo.svg','https://woocommerce.com'];
        case 'Wordpress':
            return ['Wordpress-Logo.svg','https://wordpress.org'];
        default:
            console.log('techstackicon not found');
            return null;
    }
    
}