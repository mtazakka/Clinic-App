"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 7232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6882);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Counter = ({
  end,
  decimals
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_0___default()), {
    end: end ? end : 100,
    duration: 1,
    decimals: decimals ? decimals : 0,
    children: ({
      countUpRef,
      start
    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default()), {
      onChange: start,
      delayedCall: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: "counter",
        "data-from": "0",
        "data-to": end,
        ref: countUpRef,
        children: "count"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ }),

/***/ 4084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Py": () => (/* binding */ testimonialOne),
/* harmony export */   "Ri": () => (/* binding */ TestimonialsSliderTwo),
/* harmony export */   "ak": () => (/* binding */ ProductCarouselSlider),
/* harmony export */   "ps": () => (/* binding */ partnerSlider),
/* harmony export */   "rm": () => (/* binding */ heroSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function PrevArrow({
  className,
  onClick,
  icon,
  extraClass
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
    className: `${extraClass ? extraClass : className} slick-arrow`,
    onClick: onClick,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
      className: icon ? icon : "far fa-angle-left"
    })
  });
}

function NextArrow({
  className,
  onClick,
  icon,
  extraClass
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
    className: `${extraClass ? extraClass : className} slick-arrow`,
    onClick: onClick,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
      className: icon ? icon : "far fa-angle-right"
    })
  });
}

const testimonialOne = {
  infinite: true,
  dots: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
};
const heroSlider = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  speed: 500,
  arrows: true,
  fade: false,
  dots: false,
  swipe: true,
  nextArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {
    extraClass: "next-arrow"
  }),
  prevArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {
    extraClass: "prev-arrow"
  }),
  // appendArrows: document && document.querySelector(".hero-slider-arrow"),
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false
    }
  }]
};
const TestimonialsSliderTwo = {
  infinite: true,
  dots: false,
  arrows: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  nextArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {
    extraClass: "next-arrow"
  }),
  prevArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {
    extraClass: "prev-arrow"
  }),
  // appendArrows: document && document.querySelector(".hero-slider-arrow"),
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 1
    }
  }]
};
const partnerSlider = {
  infinite: true,
  dots: false,
  arrows: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 425,
    settings: {
      slidesToShow: 1
    }
  }]
};
const ProductCarouselSlider = {
  infinite: true,
  dots: true,
  arrows: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  // nextArrow:
  //   '<button className="slick-arrow next-arrow"><i className="far fa-angle-right"></i></button>',
  // prevArrow:
  //   '<button className="slick-arrow prev-arrow"><i className="far fa-angle-left"></i></button>',
  // appendArrows: sliderArrow,
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 576,
    settings: {
      slidesToShow: 1
    }
  }]
};

/***/ })

};
;