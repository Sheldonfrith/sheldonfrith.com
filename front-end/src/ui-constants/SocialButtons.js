import getTheme from './Theme';

    const getButtonSize =(customSize)=>{
        return customSize || 50;
    }
    const getButtonColor = ()=>{
        return getTheme().orange;
    }
    const getOnClick = (url) =>{
        return ()=>{window.open(url);};
    }

    const linkedInButton = 
        {
            icon:"LinkedIn",
            iconColor:getButtonColor(),
            iconSize:getButtonSize(60),
            onClick:getOnClick("https://linkedin.com/in/sheldon-frith")
          };
    const githubButton = 
        {
            icon:"GitHub",
            iconColor:getButtonColor(),
            iconSize: getButtonSize(),
            onClick:getOnClick("https://github.com/Sheldonfrith"),
          };
    const upworkButton = 
        {
          icon:"UpWork",
          iconColor:getButtonColor(),
          iconSize:getButtonSize(60),
          onClick:getOnClick("https://www.upwork.com/freelancers/~010124a92748d11439?viewMode=1"),
          isNotMaterialUI:true,
        };
    const stackoverflowButton = null;

    const activeButtonsByName =  {
        linkedInButton :linkedInButton,
        githubButton: githubButton,
        upworkButton: upworkButton,
    }
    export default function getSocialButtonProps (name = 'all') {
        if (name === 'all'){
            return [linkedInButton, githubButton, upworkButton];
        } else {
            return activeButtonsByName[name];
        }
    }