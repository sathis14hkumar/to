exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 8926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ NormalButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Button: The Common Re-usable Button across website.
 * @return {JSX.Element} The JSX Code for Button
 */ function NormalButton({ children, innerRef, className, ...restProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: `${className}`,
        ...restProps,
        ref: innerRef,
        children: children
    });
}
NormalButton.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
    variant: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
NormalButton.defaultProps = {
    children: "Submit",
    variant: "primary",
    className: ""
};


/***/ }),

/***/ 4865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const config = {
    development: {
        baseUrl: "",
        api: {
            baseUrl: ""
        }
    },
    staging: {
        baseUrl: "",
        api: {
            baseUrl: "api-baseurl"
        }
    },
    production: {
        baseUrl: "",
        api: {
            baseUrl: "api-baseurl"
        }
    }
};
let configBasedOnEnv = {};
const env = process.env.NEXT_PUBLIC_ENV_VARIABLE;
configBasedOnEnv = config[env] ? config[env] : config.development;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configBasedOnEnv);


/***/ }),

/***/ 8458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_Inputs_NormalButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8926);




class ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
        // Define a state variable to track whether is an error or not
        this.state = {
            hasError: false,
            error: {}
        };
    }
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI
        return {
            hasError: true
        };
    }
    componentDidCatch(error) {
        // You can use your own error logging service here
        this.setState({
            error
        });
    }
    render() {
        const { hasError, error } = this.state;
        const { children, router } = this.props;
        const { dev } = router.query || {};
        // Check if the error is thrown
        if (hasError) {
            // You can render any custom fallback UI
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex flex-column align-items-center justify-content-center py-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-center fw-600",
                                children: "Something went wrong :("
                            })
                        }),
                        dev === "true" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                            children: error?.message
                        }),
                        dev === "true" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                            children: error?.stack
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "action-btn w-100 mt-4 size-md mx-auto",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Inputs_NormalButton__WEBPACK_IMPORTED_MODULE_3__/* .NormalButton */ .U, {
                                className: "w-100 fw-600",
                                onClick: ()=>this.setState({
                                        hasError: false
                                    }),
                                children: "Try again?"
                            })
                        })
                    ]
                })
            });
        }
        return children;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(ErrorBoundary));


/***/ }),

/***/ 7474:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ wrapper)
/* harmony export */ });
/* unused harmony export initStore */
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8417);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3760);
/* harmony import */ var _service_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4993);
/* harmony import */ var _redux_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_service_api__WEBPACK_IMPORTED_MODULE_3__, _service_toast__WEBPACK_IMPORTED_MODULE_4__]);
([_service_api__WEBPACK_IMPORTED_MODULE_3__, _service_toast__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const initStore = ()=>{
    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_redux_reducer__WEBPACK_IMPORTED_MODULE_5__/* .reducers */ .l, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default().withExtraArgument({
        api: _service_api__WEBPACK_IMPORTED_MODULE_3__/* .api */ .h,
        Toast: _service_toast__WEBPACK_IMPORTED_MODULE_4__/* .Toast */ .F
    })));
};
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(initStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4865);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    openGraph: {
        type: "website",
        url: config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.baseUrl,
        site_name: "Toshniwal"
    }
});


/***/ }),

/***/ 5879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_seo_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1359);
/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7474);
/* harmony import */ var _helpers_ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8458);
/* harmony import */ var styles_nprogress_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5527);
/* harmony import */ var styles_nprogress_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styles_nprogress_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_scss_vendor_notification_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5961);
/* harmony import */ var assets_scss_vendor_notification_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_scss_vendor_notification_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5903);
/* harmony import */ var assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, helpers__WEBPACK_IMPORTED_MODULE_8__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, helpers__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/no-danger */ /**
 *   Library imports
 */ 





// SEO CONFIGS


/**
 *   Custom component/function imports
 */ 

/**
 *   Required styles import
 */ 


nprogress__WEBPACK_IMPORTED_MODULE_4___default().configure({
    showSpinner: false
});
const MyApp = ({ Component, pageProps })=>{
    const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    /**
   *   PAGE TRANSISTION
   *   @description - While Page transition displaying loading bar
   */ (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleStart = ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();
        const handleComplete = ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();
        //  (url !== router.asPath) --> for disabling transition for same path
        Router.events.on("routeChangeStart", handleStart);
        Router.events.on("routeChangeComplete", handleComplete);
        Router.events.on("routeChangeError", handleComplete);
        return ()=>{
            Router.events.off("routeChangeStart", handleStart);
            Router.events.off("routeChangeComplete", handleComplete);
            Router.events.off("routeChangeError", handleComplete);
        };
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "manifest",
                        href: "/manifest.json"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "shortcut icon",
                        href: "/images/favicon.svg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        href: "/images/favicon.svg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        href: "/images/favicon.svg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#fff"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/images/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preload",
                        fetchpriority: "high",
                        as: "image",
                        href: "/images/svg/Home/home-device.webp",
                        type: "image/webp"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width,initial-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_6__.DefaultSeo, {
                ...next_seo_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_helpers_ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {
                        position: "bottom-right",
                        gutter: 8,
                        reverseOrder: true,
                        containerClassName: "custom-toast",
                        containerStyle: {
                            right: "40px",
                            bottom: "50px"
                        },
                        children: (t)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.ToastBar, {
                                toast: t,
                                style: {
                                    padding: 0,
                                    overflow: "hidden"
                                },
                                children: ({ icon, message })=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `custom-toast-${t.type} d-flex align-items-center custom-toast-item`,
                                        children: [
                                            icon,
                                            message
                                        ]
                                    });
                                }
                            })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helpers__WEBPACK_IMPORTED_MODULE_8__/* .wrapper */ .Y.withRedux(MyApp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ reducers)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
;// CONCATENATED MODULE: ./redux/actionType/actionType.js
const adminDetails = {
    sourceOptions: "SOURCE_OPTIONS"
};

;// CONCATENATED MODULE: ./redux/reducer/adminDetails.js

const initialState = {
    sourceOptions: [],
    geographyOptions: [],
    statusOptions: [],
    accessDetails: []
};
/* harmony default export */ const reducer_adminDetails = ((state = {
    ...initialState
}, { type, payload })=>{
    switch(type){
        case adminDetails.sourceOptions:
            return {
                ...state,
                sourceOptions: payload
            };
        case adminDetails.geographyOptions:
            return {
                ...state,
                geographyOptions: payload
            };
        case adminDetails.statusOptions:
            return {
                ...state,
                statusOptions: payload
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducer/index.js



const combinedReducer = (0,external_redux_.combineReducers)({
    adminDetails: reducer_adminDetails
});
const reducers = (state, action)=>{
    if (action.type === external_next_redux_wrapper_.HYDRATE) {
        // REMOVING INITAL DATAS (inital Data from the redux store has "init" as a value)
        const incomingNewData = {
            ...action.payload
        };
        const cachedData = {
            ...state
        };
        Object.keys(incomingNewData).forEach((data)=>Object.keys(incomingNewData[data]).forEach((rData)=>{
                if (incomingNewData[data][rData] === "init") {
                    incomingNewData[data][rData] = cachedData[data][rData];
                }
            }));
        return {
            ...cachedData,
            ...incomingNewData
        };
    }
    return combinedReducer(state, action);
};


/***/ }),

/***/ 3760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2004);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utilities__WEBPACK_IMPORTED_MODULE_0__]);
_utilities__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 *  Customized axios function for api calls.
 * @returns {Promise} that contains the api data's response
 */ const api = async function({ method = "get", api: apiURL, body, status = false, baseURL = "user", configObj = {} }) {
    const tempConfigObj = {
        ...configObj
    };
    tempConfigObj.cancelToken = _utilities__WEBPACK_IMPORTED_MODULE_0__/* .cancelTokenSource */ .Tc.token;
    let userDetails = JSON.parse(localStorage.getItem("loginDetails"));
    return await new Promise((resolve, reject)=>{
        if (userDetails?.token) {
            _utilities__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .be.defaults.headers.common.Authorization = userDetails.token;
        }
        _utilities__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance */ .be[method](`${(0,_utilities__WEBPACK_IMPORTED_MODULE_0__/* .getServiceUrl */ .qQ)(baseURL)}${apiURL}`, body || "", tempConfigObj).then((data)=>resolve((0,_utilities__WEBPACK_IMPORTED_MODULE_0__/* .statusHelper */ .qi)(status, data))).catch((error)=>{
            try {
                if (error.response) {
                    reject((0,_utilities__WEBPACK_IMPORTED_MODULE_0__/* .statusHelper */ .qi)(status, error.response));
                } else {
                    reject(error);
                }
            } catch (err) {
                reject(err);
            }
        });
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_0__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// Toast
const Toast = ({ type = "success", message, duration = 4000 })=>{
    if (Array.isArray(message)) {
        let item;
        for (item of message){
            react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"][type](item.message, {
                duration
            });
        }
    } else {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"][type](message, {
            duration
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tc: () => (/* binding */ cancelTokenSource),
/* harmony export */   be: () => (/* binding */ axiosInstance),
/* harmony export */   qQ: () => (/* binding */ getServiceUrl),
/* harmony export */   qi: () => (/* binding */ statusHelper)
/* harmony export */ });
/* unused harmony export logout */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4865);
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _toast__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _toast__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    headers: {}
});
const cancelTokenSource = axios__WEBPACK_IMPORTED_MODULE_0__["default"].CancelToken.source();
const logout = ()=>{
    localStorage.clear();
    window.location.href = "/";
};
const getServiceUrl = ()=>{
    return _config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.api.baseUrl;
};
const statusHelper = (status, data)=>{
    if (data.status === 401) cancelTokenSource.cancel();
    if (data.status === 401 || data.status === 403) {
        (0,_toast__WEBPACK_IMPORTED_MODULE_2__/* .Toast */ .F)({
            type: "error",
            message: data.statusText
        });
        setTimeout(()=>logout(), 1000);
    }
    if (status) {
        return {
            status: data.status,
            ...data.data
        };
    }
    return data.data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5903:
/***/ (() => {



/***/ }),

/***/ 5961:
/***/ (() => {



/***/ }),

/***/ 5527:
/***/ (() => {



/***/ })

};
;