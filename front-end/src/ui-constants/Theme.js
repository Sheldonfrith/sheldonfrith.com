const headerPics = {
  Max:`/images/sheldonfrith-header-max.jpg`,
  '2050': '/images/sheldonfrith-header-2050.jpg',
  '1500': '/images/sheldonfrith-header-1500.jpg',
  '500': '/images/sheldonfrith-header-500.jpg',
  '850': '/images/sheldonfrith-header-850.jpg',
  Blur: '/images/sheldonfrith-header-max-blur.webp',
  Ugly: '/images/sheldonfrith-header-max-ugly.webp',
}

export const getHeaderPicFullSize =  (maxWidth = Infinity)=>{
  switch (true) {
    case (maxWidth<501):
      return headerPics['500'];
    case (maxWidth<851):
      return headerPics['850'];
    case (maxWidth<1501):
      return headerPics['1500'];
    case (maxWidth<2051):
      return headerPics['2050'];
    default:
      return headerPics.Max;
  }
}

export const getHeaderPicBlurry = ()=>{
  return headerPics.Blur;
}
const themeValues = {
        black:`#000000`,
        white:`#ffffff`,
        orange:`#ed4629`,
        lightblue:`#C7D0D8`,
        grey:`#5A6066`,
        aboutPic:`/images/meWithIzzy.png`,
        contactPicLarge:`/images/sheldonfrith-contact-600.jpg`,
        contactPicSmall:'images/sheldonfrith-contact-300.jpg',
        searchBarPic:`/images/Searchbar.svg`,
        arrowGraphicsPic:`/images/ArrowsForAnimation.svg`,
        backgroundTransitionPic:`/images/BackgroundWave.svg`,
        primaryBreakpoint:`500`,
      };


export default function getTheme () {
    return themeValues;
}