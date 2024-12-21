exports.id = 470;
exports.ids = [470];
exports.modules = {

/***/ 399:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "Home_page__0ydta",
	"title": "Home_title__T09hD",
	"subtitle": "Home_subtitle__j4GMd",
	"content": "Home_content__Zy02X",
	"button": "Home_button__Zs7A2",
	"showcaseCard": "Home_showcaseCard__6Kc70",
	"showcaseCardClicked": "Home_showcaseCardClicked___bKmJ",
	"animationDark": "Home_animationDark__kotpp",
	"showcaseCardImageAndLabel": "Home_showcaseCardImageAndLabel__k7___",
	"showcaseCardTitle": "Home_showcaseCardTitle__5egLq",
	"showcaseCardSubtitle": "Home_showcaseCardSubtitle__wUcJp",
	"showcaseCardImage": "Home_showcaseCardImage__SwKe3",
	"contactFooter": "Home_contactFooter__MNq9p",
	"contactFooterFlash": "Home_contactFooterFlash__7fTJf",
	"contactFooterTitle": "Home_contactFooterTitle__Jfs__",
	"contactFooterEmail": "Home_contactFooterEmail__u_QTa",
	"blink-1": "Home_blink-1__kqLyh",
	"contactFooterSocialIcon": "Home_contactFooterSocialIcon__cONzB",
	"topBar": "Home_topBar__e8y18",
	"topBarButton": "Home_topBarButton__e6jh6",
	"animationLight": "Home_animationLight__QLp6P"
};


/***/ }),

/***/ 470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ContactFooter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(105);
;// CONCATENATED MODULE: ./public/images/stack-overflow.svg
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgStackOverflow = function SvgStackOverflow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    fill: "current",
    width: 24,
    height: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.24 19.399v-4.804h1.6V21H4.381v-6.405h1.598v4.804H17.24zM7.582 17.8h8.055v-1.604H7.582V17.8zm.195-3.64 7.859 1.641.34-1.552-7.861-1.642-.338 1.553zm1.018-3.794 7.281 3.398.678-1.463-7.281-3.399-.678 1.454v.01zm2.037-3.589 6.166 5.142 1.018-1.216-6.162-5.14-1.016 1.213-.006.001zm3.982-3.778-1.311.969 4.803 6.454 1.313-.971-4.807-6.452h.002z"
  })));
};

/* harmony default export */ const stack_overflow = (SvgStackOverflow);
;// CONCATENATED MODULE: ./components/ContactFooter.tsx





const ContactFooter = ({ triggerFlash ,  })=>{
    //debugging
    (0,external_react_.useEffect)(()=>{
    //console.log("triggerFlash", triggerFlash);
    }, [
        triggerFlash
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: triggerFlash ? (Home_module_default()).contactFooterFlash : (Home_module_default()).contactFooter,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (Home_module_default()).contactFooterTitle,
                children: "Contact Me:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Home_module_default()).contactFooterEmail,
                children: "SheldonFrith@outlook.com"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "horizontal-flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icons_.LinkedIn, {
                        onClick: ()=>window ? window.open("https://www.linkedin.com/in/sheldon-frith/") : null
                        ,
                        className: (Home_module_default()).contactFooterSocialIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(icons_.GitHub, {
                        onClick: ()=>window ? window.open("https://github.com/SheldonFrith") : null
                        ,
                        className: (Home_module_default()).contactFooterSocialIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(stack_overflow, {
                        // fill={'white'}
                        onClick: ()=>window ? window.open("https://stackoverflow.com/users/4205839/sheldonfrith") : null
                        ,
                        className: (Home_module_default()).contactFooterSocialIcon
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ContactFooter = (ContactFooter);


/***/ })

};
;