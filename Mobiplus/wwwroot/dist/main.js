/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/AboutUs.js":
/*!******************************!*\
  !*** ./assets/js/AboutUs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$('#carousel-3').owlCarousel({\n  margin: 10,\n  dots: true,\n  responsive: {\n    0: {\n      items: 2\n    },\n    600: {\n      items: 3\n    },\n    1000: {\n      items: 4\n    }\n  }\n});\n$(\".owl-item\").hover(function () {\n  $(this).find(\".mw-100\").attr('src', '/image/AboutUs/Customer1-1.png');\n}, function () {\n  $(this).find(\".mw-100\").attr('src', '/image/AboutUs/Customer1.png');\n});\n$(\".item-hover\").hover(function () {\n  $(this).find(\".card-title-2\").css('color', \"#0C5ADB\");\n  $(this).find(\".box-shadow\").css('box-shadow', \"0 0.25rem 0.75rem rgb(0 0 0 / 15%)\");\n  $(this).find(\".text-more\").css('color', \"#0C5ADB\");\n  $(this).find(\".blog-them\").css('box-shadow', \"0 0.25rem 0.75rem rgb(0 0 0 / 15%)\");\n  $(this).find(\".blog-them\").css('float', \"right\");\n}, function () {\n  $(this).find(\".card-title-2\").css('color', \"#343a40\");\n  $(this).find(\".text-more\").css('color', \"#343a40\");\n  $(this).find(\".box-shadow\").css('box-shadow', \"0 0.25rem 0.75rem rgb(0 0 0 / 5%)\");\n  $(this).find(\".blog-them\").css('float', \"left\");\n});\n\n//# sourceURL=webpack:///./assets/js/AboutUs.js?");

/***/ }),

/***/ "./assets/js/blog.js":
/*!***************************!*\
  !*** ./assets/js/blog.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*const searchFocus = document.getElementById('search-focus');\r\nconst keys = [\r\n    { keyCode: 'AltLeft', isTriggered: false },\r\n    { keyCode: 'ControlLeft', isTriggered: false },\r\n];\r\n\r\nwindow.addEventListener('keydown', (e) => {\r\n    keys.forEach((obj) => {\r\n        if (obj.keyCode === e.code) {\r\n            obj.isTriggered = true;\r\n        }\r\n    });\r\n\r\n    const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;\r\n\r\n    if (shortcutTriggered) {\r\n        searchFocus.focus();\r\n    }\r\n});\r\n*/\n\n/*var mobiplusBlog = function () {\r\n};\r\n$(document).ready(function () {\r\n    if ($(\".mobiplus-blog\").length) {\r\n        mobiplusBlog();\r\n    }\r\n});*/\n$(document).ready(e => {\n  $('#blog-tab-item .tab-pane.active').load('/blog/LoadTabItem', {\n    keyTab: $('#blog-tab-item .tab-pane.active').attr('id'),\n    num: 0\n  });\n  console.log(1);\n  $('.blog-load-more-btn').on('click', e => {\n    debugger;\n    var ele = $(e.currentTarget);\n    var num = parseInt(ele.attr('num')) + 3;\n    ele.attr('num', num);\n    $('#blog-tab-item .tab-pane.active').load('/blog/LoadTabItem', {\n      keyTab: $('#blog-tab-item .tab-pane.active').attr('id'),\n      num: num\n    });\n  });\n  $('#blog-tab-nav a[data-toggle=\"tab\"]').on('shown.bs.tab', function (e) {\n    debugger;\n    var id = $(e.target).attr('aria-controls');\n\n    if (id == \"blog-app\") {\n      $('.blog-load-more-btn').attr('num', 9);\n      $('#' + id).load('/blog/LoadTabItem', {\n        keyTab: id,\n        num: 9\n      });\n    } else if (id == \"blog-web\") {\n      $.ajax({\n        url: '/blog/TabItem1',\n        method: 'GET'\n      }).done(function (data) {\n        $('#blog-web').empty();\n        $('#blog-web').append(data);\n        console.log(data);\n      }).fail(function (data) {});\n    } else if (id == \"blog-all\" && $('#blog-all').children().length < 2) {\n      $('.blog-load-more-btn').attr('num', 9);\n      $('#' + id).load('/blog/LoadTabItem', {\n        keyTab: id,\n        num: 9\n      });\n      $.ajax({\n        url: '/blog/TabItem1',\n        method: 'GET'\n      }).done(function (data) {\n        $('#blog-all').append(data);\n        console.log(data);\n      }).fail(function (data) {});\n    }\n  });\n  $('#blog-tab-item').on('click', '.tab_item_container', e => {\n    var uuid = $(e.currentTarget).children('.tab_item').attr('uuid');\n    $(`#tab_item_container_${uuid}`).attr('style', 'z-index:1;');\n    goBig(uuid, [0, 10], 500, 0);\n    setTimeout(e => {\n      console.log(ádas);\n      location.href = `/blog/Detail/${uuid}`;\n    }, 200);\n  }); //$('#tag_2').on('click', function () {\n  //    debugger\n  //    $.ajax({\n  //        url: '/blog/TabItem_1',\n  //        method: 'GET',\n  //    })\n  //        .done(function (data) {\n  //            $('#blog-web').empty();\n  //            $('#blog-web').append(data);\n  //            console.log(data)\n  //        })\n  //        .fail(function (data) {\n  //        });\n  //})\n\n  function goBig(id, scale, duration, delay) {\n    anime.timeline({\n      targets: `#tab_item_container_${id}`,\n      delay: delay,\n      duration: duration\n    }).add({\n      scale: scale,\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }, 0).add({\n      opacity: [1, 0.2],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }, 0);\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/blog.js?");

/***/ }),

/***/ "./assets/js/contractUs.js":
/*!*********************************!*\
  !*** ./assets/js/contractUs.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(e => {\n  var vn = {\n    lat: 21.0227387,\n    lng: 105.8194541\n  };\n\n  if (document.getElementById(\"map\")) {\n    var map = new google.maps.Map(document.getElementById(\"map\"), {\n      zoom: 4,\n      center: vn\n    });\n    var marker = new google.maps.Marker({\n      position: vn,\n      map: map\n    });\n  }\n\n  var animeContactUs = function () {\n    var contactUsAnime = {};\n    showInRight('.contract_us .contact_us_img .cu_img_1', 1000, 500);\n    showInRight('.contract_us .contact_us_img .cu_img_2', 1000, 1500);\n    showInLeft('.contract_us .contact_us_img .cu_img_6', 1000, 1500); //chat box\n\n    showInCustom('.contract_us .contact_us_img .cu_img_4', [2, 0], [1, 0], 1000, 2000);\n    showInCustom('.contract_us .contact_us_img .cu_img_9', [2, 0], [1, 0], 1000, 2000);\n    showInCustom('.contract_us .contact_us_img .cu_img_5', [-0.5, 0], [-1, 0], 1000, 3000);\n    showInCustom('.contract_us .contact_us_img .cu_img_7', [-0.5, 0], [-1, 0], 1000, 3000);\n    showInCustom('.contract_us .contact_us_img .cu_img_3', [-0.5, 0], [2, 0], 1000, 4000);\n    showInCustom('.contract_us .contact_us_img .cu_img_8', [-0.5, 0], [2, 0], 1000, 4000);\n    shake('cu_img_3', '.contract_us .contact_us_img .cu_img_3', 2000, [0, -15], [0, 0]);\n    shake('cu_img_4', '.contract_us .contact_us_img .cu_img_4', 2500, [0, 15], [0, -15]);\n    shake('cu_img_5', '.contract_us .contact_us_img .cu_img_5', 3000, [0, -15], [0, -15]);\n    setTimeout(e => {\n      contactUsAnime.cu_img_3.play();\n      contactUsAnime.cu_img_4.play();\n      contactUsAnime.cu_img_5.play();\n    }, 5000); //show in\n\n    function showInCustom(id, X, Y, duration, delay) {\n      anime.timeline({\n        targets: id,\n        delay: delay,\n        duration: duration\n      }).add({\n        translateX: function (el, i, l) {\n          return [$(el).width() * X[0], $(el).width() * X[1]];\n        },\n        translateY: function (el, i, l) {\n          return [$(el).height() * Y[0], $(el).height() * Y[1]];\n        },\n        duration: duration,\n        easing: 'spring(1, 80, 10, 0)'\n      }).add({\n        opacity: [0, 1],\n        duration: duration,\n        easing: 'spring(1, 80, 10, 0)'\n      }, 0);\n    }\n\n    function showInLeft(id, duration, delay) {\n      var time = anime.timeline({\n        targets: id,\n        delay: delay,\n        duration: duration\n      }).add({\n        translateX: [-50, 0],\n        duration: duration,\n        easing: 'spring(1, 80, 10, 0)'\n      }).add({\n        opacity: [0, 1],\n        duration: duration,\n        easing: 'spring(1, 80, 10, 0)'\n      }, 0);\n    }\n\n    function showInRight(id, duration, delay) {\n      var time = anime.timeline({\n        targets: id,\n        delay: delay,\n        duration: duration\n      }).add({\n        translateX: [50, 0],\n        duration: duration,\n        easing: 'spring(1, 80, 10, 0)'\n      }).add({\n        opacity: [0, 1],\n        duration: duration,\n        easing: 'spring(1, 80, 10, 0)'\n      }, 0);\n    } // shake\n\n\n    function shake(key, id, duration, X, Y) {\n      contactUsAnime[key] = anime({\n        targets: id,\n        duration: duration,\n        loop: true,\n        translateX: X,\n        translateY: Y,\n        direction: 'alternate',\n        easing: 'easeInQuad',\n        autoplay: false\n      }); //contactUsAnime1.play;\n      //setTimeout(e => {\n      //}, delay);\n    }\n  }();\n});\n\n//# sourceURL=webpack:///./assets/js/contractUs.js?");

/***/ }),

/***/ "./assets/js/home.js":
/*!***************************!*\
  !*** ./assets/js/home.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var mobiplusHome = function () {\n  var initPagination = function () {\n    if ($('body').outerWidth() < 739) {\n      $(\".row.h-100\").removeClass(\"h-100\").addClass(\"mt-4\");\n    }\n\n    $(\".page-pre\").on('click', function () {\n      var pageClick = $(\".page-pre\").attr(\"data-id\");\n\n      if (pageClick > 1) {\n        $(\".page-pre\").attr(\"href\", `#page-${--pageClick}`).attr('data-id', `${--pageClick}`);\n        $(\".page-next\").attr(\"href\", `#page-${++pageClick}`);\n      }\n\n      if (pageClick == 1) {\n        $(\".page-pre\").attr(\"href\", `#page-1`).attr('data-id', `1`);\n        $(\".page-next\").attr(\"href\", `#page-2`);\n      }\n    });\n    $(\".page-next\").on('click', function () {\n      var pageClick = $(\".page-pre\").attr(\"data-id\");\n\n      if (pageClick < 9) {\n        $(\".page-pre\").attr(\"href\", `#page-${--pageClick}`).attr('data-id', `${++pageClick}`);\n        $(\".page-next\").attr(\"href\", `#page-${++pageClick}`);\n      }\n\n      if (pageClick == 9) {\n        $(\".page-pre\").attr(\"href\", `#page-8`).attr('data-id', `8`);\n        $(\".page-next\").attr(\"href\", `#page-9`);\n      }\n    });\n    $(window).scroll(function () {\n      var wH = $(window).height(),\n          wS = $(this).scrollTop();\n      var page = Math.floor((wS + wH / 2) / wH + 1);\n\n      if (page > 1 && page <= 9) {\n        $(\".page-pre\").attr(\"href\", `#page-${--page}`).attr('data-id', `${++page}`);\n        $(\".page-next\").attr(\"href\", `#page-${++page}`);\n      }\n    });\n  };\n\n  var talentRecruitment = function () {\n    $('#carousel-1').owlCarousel({\n      margin: 10,\n      nav: true,\n      navContainer: '#customNav',\n      navText: [`<i class=\"fas fa-chevron-circle-left\"></i>`, `<i class=\"fas fa-chevron-circle-right\"></i>`],\n      responsive: {\n        0: {\n          items: 1\n        },\n        600: {\n          items: 3\n        },\n        1000: {\n          items: 3\n        }\n      }\n    });\n    $('#carousel-customer').owlCarousel({\n      margin: 50,\n      nav: true,\n      navContainer: '#customNav-1',\n      navText: [`<i class=\"fas fa-chevron-circle-left\"></i>`, `<i class=\"fas fa-chevron-circle-right\"></i>`],\n      responsive: {\n        0: {\n          items: 1\n        },\n        600: {\n          items: 1\n        },\n        1000: {\n          items: 3\n        }\n      },\n      loop: true,\n      touchDrag: false,\n      mouseDrag: false\n    });\n    $('#carousel-2').owlCarousel({\n      margin: 5,\n      dots: true,\n      responsive: {\n        0: {\n          items: 2\n        },\n        600: {\n          items: 3\n        },\n        1000: {\n          items: 4\n        }\n      }\n    });\n    $(\".owl-item\").hover(function () {\n      $(this).find(\".mw-100\").attr('src', '/image/AboutUs/Customer1-1.png');\n    }, function () {\n      $(this).find(\".mw-100\").attr('src', '/image/AboutUs/Customer1.png');\n    });\n    $(\".item-hover\").hover(function () {\n      $(this).find(\".card-title-2\").css('color', \"#0C5ADB\");\n      $(this).find(\".box-shadow\").css('box-shadow', \"0 0.25rem 0.75rem rgb(0 0 0 / 15%)\");\n      $(this).find(\".text-more\").css('color', \"#0C5ADB\");\n      $(this).find(\".blog-them\").css('box-shadow', \"0 0.25rem 0.75rem rgb(0 0 0 / 15%)\");\n      $(this).find(\".blog-them\").css('float', \"right\");\n    }, function () {\n      $(this).find(\".card-title-2\").css('color', \"#343a40\");\n      $(this).find(\".text-more\").css('color', \"#343a40\");\n      $(this).find(\".box-shadow\").css('box-shadow', \"0 0.25rem 0.75rem rgb(0 0 0 / 5%)\");\n      $(this).find(\".blog-them\").css('float', \"left\");\n    });\n    $(document).ready(function () {\n      if ($('body').outerWidth() > 739) {\n        $(\".owl-dot\").hide();\n      } else {\n        $(\".owl-prev\").hide();\n        $(\".owl-next\").hide();\n      }\n\n      $(\".owl-prev\").addClass(\"btn btn-light rounded-circle box-shadow icon-pre\");\n      $(\".owl-next\").addClass(\"btn btn-light rounded-circle box-shadow icon-next\");\n    });\n  };\n\n  var pageSmooth = function () {\n    $(\".page-pre\").on('click', function (event) {\n      if (this.hash !== \"\") {\n        event.preventDefault();\n        var hash = this.hash;\n        $('html, body').animate({\n          scrollTop: $(hash).offset().top\n        }, 800, function () {\n          window.location.hash = hash;\n        });\n      }\n    });\n    $(\".page-next\").on('click', function (event) {\n      if (this.hash !== \"\") {\n        event.preventDefault();\n        var hash = this.hash;\n        $('html, body').animate({\n          scrollTop: $(hash).offset().top\n        }, 800, function () {\n          window.location.hash = hash;\n        });\n      }\n    });\n  }; //var animeMOTION = function () {\n  //    var path = anime.path('.motion-path-demo path');\n  //    anime({\n  //        targets: '.motion-path-demo .planes',\n  //        translateX: path('x'),\n  //        translateY: path('y'),\n  //        rotate: path('angle'),\n  //        easing: 'easeInOutQuad',\n  //        duration: 8000,\n  //        scale: 2.5\n  //    });\n  //}\n  //$(\".card\").hover(\n  //    function () {\n  //        var $this = $(this).parent().find(\".img-size-icon\").attr(\"id\");\n  //        RotateY($this, 500, [180, 0]);\n  //    }\n  //)\n\n\n  var animation_CT = function () {\n    var $this_img_flash = $(\".img-slide\").find(\".img-flash\").attr(\"id\");\n    var $this_img_scale = $(\".img-slide\").find(\".img-scale\").attr(\"id\");\n    var $this_img = $(\".img-slide\").find(\".img-ball\").attr(\"id\");\n    var $this2_img = $(\".img-slide\").find(\".img-coin\").attr(\"id\");\n    var $this3_img = $(\".img-slide\").find(\".img-people\").attr(\"id\");\n    var $this_billy = $(\".billy-left\").attr(\"id\");\n    var $this2_billy = $(\".billy-right\").attr(\"id\");\n    var $this3_billy = $(\".billy-circle\").attr(\"id\");\n    var $this4_billy = $(\".billy-title\").attr(\"id\");\n    var $this5_billy = $(\".billy-lightning\").attr(\"id\");\n    var $this6_billy = $(\".billy-bag\").attr(\"id\");\n    Rotate($this_img, 5000, 360);\n    Scale($this_img_flash, 5000, 1000, -50, [1.5, 1]);\n    Scale($this_img_scale, 5000, 1500, 0, [1.5, 1]);\n    RotateY($this2_img, 3000, [180, 0]);\n    translateXY($this3_img, 5000, -100, 100);\n    translateX($this_billy, 5000, 800, -100);\n    translateX($this2_billy, 5000, 800, 100);\n    translateX($this4_billy, 5000, 1200, 100);\n    translateX($this6_billy, 5000, 800, 100);\n    Rotate($this3_billy, 5000, 360);\n    translateXandScale($this5_billy, 5000, 1000, -100, [1.5, 1]);\n  };\n\n  function Rotate(targets, duration, rotate) {\n    anime.timeline({\n      targets: `#${targets}`,\n      duration: duration,\n      // Can be inherited\n      easing: 'easeInOutExpo',\n      // Can be inherited\n      loop: true\n    }).add({\n      rotate: rotate\n    });\n  }\n\n  function RotateY(targets, duration, rotateY) {\n    anime.timeline({\n      targets: `#${targets}`,\n      duration: duration,\n      // Can be inherited\n      easing: 'easeOutExpo',\n      // Can be inherited\n      loop: true\n    }).add({\n      rotateY: rotateY[0]\n    }).add({\n      rotateY: rotateY[1]\n    });\n  }\n\n  function translateXY(targets, duration, translateX, translateY) {\n    anime.timeline({\n      targets: `#${targets}`,\n      delay: 800,\n      duration: duration\n    }).add({\n      translateX: [translateX, 0],\n      translateY: [translateY, 0],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }).add({\n      opacity: [0, 1],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }, 0);\n  }\n\n  function translateX(targets, duration, delay, translateX) {\n    anime.timeline({\n      targets: `#${targets}`,\n      delay: delay,\n      duration: duration\n    }).add({\n      translateX: [translateX, 0],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }).add({\n      opacity: [0, 1],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }, 0);\n  }\n\n  function translateXandScale(targets, duration, delay, translateX, scale) {\n    anime.timeline({\n      targets: `#${targets}`,\n      delay: delay,\n      duration: duration,\n      loop: true\n    }).add({\n      translateX: [translateX, 0],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }).add({\n      opacity: [0, 1],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }, 0).add({\n      scale: scale[0],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }).add({\n      scale: scale[1],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    });\n  }\n\n  function Scale(targets, duration, delay, rotate, scale) {\n    anime.timeline({\n      targets: `#${targets}`,\n      delay: delay,\n      duration: duration,\n      loop: true\n    }).add({\n      rotate: rotate,\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }).add({\n      opacity: [0, 1],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }, 0).add({\n      scale: scale[0],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }).add({\n      scale: scale[1],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    });\n  }\n\n  function translateXandRotate(targets, duration, delay, translateX, rotate) {\n    anime.timeline({\n      targets: `#${targets}`,\n      delay: delay,\n      duration: duration,\n      loop: true\n    }).add({\n      translateX: [translateX, 0],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }).add({\n      opacity: [0, 1],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }, 0).add({\n      rotate: rotate[0],\n      duration: duration,\n      easing: 'easeInOutExpo'\n    }).add({\n      rotate: rotate[1],\n      duration: duration,\n      easing: 'easeInOutExpo'\n    });\n  }\n\n  return {\n    // Public functions\n    init: function () {\n      initPagination();\n      talentRecruitment();\n      pageSmooth();\n      animation_CT();\n      $('#customNav-1').on('click', function (event) {\n        if ($(event.target).closest('.owl-prev').length == 1 || $(event.target).closest('.owl-next').length == 1) {\n          var arrayElement = [];\n          $('#carousel-customer').children().children().find('.owl-item').each(function (index, item) {\n            if ($(item).hasClass('active') == true) arrayElement.push($(item));\n          });\n\n          if (arrayElement.length == 1) {\n            arrayElement[0].find('img').css('opacity', 1).css('width', 100).css('margin-top', 0);\n            var class_img = arrayElement[0].find('img').attr('class');\n            $('.get-title-customer').find('.customer-title').each(function (index, item) {\n              if ($(item).attr('class').includes(class_img) == true) {\n                $(item).show();\n              } else {\n                $(item).show().hide();\n              }\n            });\n          } else {\n            arrayElement[0].find('img').css('width', 60).css('margin-top', 25).css('opacity', 0.5);\n            arrayElement[1].find('img').css('width', 100).css('margin-top', 0).css('opacity', 1);\n            arrayElement[1].find('img').parent().css('padding', '0').css('margin-left', '-5');\n            arrayElement[2].find('img').css('width', 60).css('margin-top', 25).css('opacity', 0.5);\n            var class_img = arrayElement[1].find('img').attr('class');\n            debugger;\n            $('.get-title-customer').find('.customer-title').each(function (index, item) {\n              if ($(item).attr('class').includes(class_img) == true) {\n                $(item).show();\n              } else {\n                $(item).show().hide();\n              }\n            });\n          }\n        }\n      });\n    }\n  };\n}();\n\n$(document).ready(function () {\n  if ($(\".mobiplus-home\").length) {\n    mobiplusHome.init();\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/home.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./home */ \"./assets/js/home.js\");\n\n__webpack_require__(/*! ./blog */ \"./assets/js/blog.js\");\n\n__webpack_require__(/*! ./AboutUs */ \"./assets/js/AboutUs.js\");\n\n__webpack_require__(/*! ./requiment */ \"./assets/js/requiment.js\");\n\n__webpack_require__(/*! ./title */ \"./assets/js/title.js\");\n\n__webpack_require__(/*! ./project */ \"./assets/js/project.js\");\n\n__webpack_require__(/*! ./contractUs */ \"./assets/js/contractUs.js\");\n\n__webpack_require__(/*! ./scrollup */ \"./assets/js/scrollup.js\");\n\n__webpack_require__(/*! ./search */ \"./assets/js/search.js\");\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/project.js":
/*!******************************!*\
  !*** ./assets/js/project.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(e => {\n  $('#project-tab-item .tab-pane.active').load('/Project/LoadTabItem', {\n    keyTab: $('#project-tab-item .tab-pane.active').attr('id'),\n    num: 9\n  });\n  $('.project-load-more-btn').on('click', e => {\n    var ele = $(e.currentTarget);\n    var num = parseInt(ele.attr('num')) + 3;\n    ele.attr('num', num);\n    $('#project-tab-item .tab-pane.active').load('/Project/LoadTabItem', {\n      keyTab: $('#project-tab-item .tab-pane.active').attr('id'),\n      num: num\n    });\n  });\n  $('#project-tab-nav a[data-toggle=\"tab\"]').on('shown.bs.tab', function (e) {\n    var id = $(e.target).attr('aria-controls');\n    $('.project-load-more-btn').attr('num', 9);\n    $('#' + id).load('/Project/LoadTabItem', {\n      keyTab: id,\n      num: 9\n    });\n  });\n  $('#project-tab-item').on('click', '.tab_item_container', e => {\n    var uuid = $(e.currentTarget).children('.tab_item').attr('uuid'); //$(`#tab_item_container_${uuid}`).attr('style', 'z-index:1;')\n    //goBig(uuid, [0, 10], 500, 0);\n\n    setTimeout(e => {\n      location.href = `/Project/Detail/${uuid}`;\n    }, 200);\n  });\n\n  function goBig(id, scale, duration, delay) {\n    anime.timeline({\n      targets: `#tab_item_container_${id}`,\n      delay: delay,\n      duration: duration\n    }).add({\n      scale: scale,\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }, 0).add({\n      opacity: [1, 0.2],\n      duration: duration,\n      easing: 'spring(1, 80, 10, 0)'\n    }, 0);\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/project.js?");

/***/ }),

/***/ "./assets/js/requiment.js":
/*!********************************!*\
  !*** ./assets/js/requiment.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(" // Class definition\n\nvar intRequiment = function () {\n  return {\n    init: function () {\n      $(\"a.Requiment\").addClass(\"active\");\n      $('#requimen_zzz').load('/requiment/LoadTabItem', {\n        keyTab: $('#requimen_zzz').attr('id')\n      });\n      /*  $('.requiment-load-more-btn').on('click', e => {\r\n            var ele = $(e.currentTarget);\r\n            var num = parseInt(ele.attr('num')) + 3;\r\n            ele.attr('num', num);\r\n            $('#requimen_zzz').load('/requiment/LoadTabItem', { keyTab: $('#requimen_zzz').attr('id'), num: num });\r\n        });*/\n\n      /* $(\".custom-file-input\").on(\"change\", function () {\r\n           var fileName = $(this).val().split(\"\\\\\").pop();\r\n           $(this).siblings(\".custom-file-label\").addClass(\"selected\").html(fileName);\r\n       });*/\n\n      $('#tuyendung').on('show.bs.modal', function (e) {\n        $('body').addClass(\"example-open\");\n      }).on('hide.bs.modal', function (e) {\n        $('body').removeClass(\"example-open\");\n      });\n    }\n  };\n}();\n\n$(document).ready(function () {\n  if ($('.mobiplus-requiment').length) {\n    intRequiment.init();\n    $('.btn__xemthem').click(function () {\n      var uuid = $(this).attr('data-id');\n      console.log(uuid);\n      location.href = `/Requiment/Detail/${uuid}`;\n    });\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/requiment.js?");

/***/ }),

/***/ "./assets/js/scrollup.js":
/*!*******************************!*\
  !*** ./assets/js/scrollup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  $('#back-to-top').click(function () {\n    $('body,html').animate({\n      scrollTop: 0\n    }, 800);\n    return false;\n  });\n});\n\n//# sourceURL=webpack:///./assets/js/scrollup.js?");

/***/ }),

/***/ "./assets/js/search.js":
/*!*****************************!*\
  !*** ./assets/js/search.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("jQuery(document).ready(function ($) {\n  var wHeight = window.innerHeight; //search bar middle alignment\n\n  $('#mk-fullscreen-searchform').css('top', wHeight / 2); //reform search bar\n\n  jQuery(window).resize(function () {\n    wHeight = window.innerHeight;\n    $('#mk-fullscreen-searchform').css('top', wHeight / 2);\n  }); // Search\n\n  $('#search-button').click(function () {\n    console.log(\"Open Search, Search Centered\");\n    $(\".overlay\").css(\"display\", \"block\");\n    $(\".mk-fullscreen-search-overlay\").css(\"display\", \"block\");\n  });\n  $(\"a.mk-fullscreen-close\").click(function () {\n    console.log(\"Closed Search\");\n    $(\".overlay\").css(\"display\", \"none\");\n    $(\".mk-fullscreen-search-overlay\").css(\"display\", \"none\");\n  }); // open and close silde bar mobi\n\n  $(\"#open__silde\").click(function () {\n    $(\".mk-fullscreen-search-overlay\").css(\"display\", \"block\");\n  });\n  $(\"#close__silde\").click(function () {\n    $(\".mk-fullscreen-search-overlay\").css(\"display\", \"none\");\n  }); // list search\n\n  $('.live-search-list li').each(function () {\n    $(this).attr('data-search-term', $(this).text().toLowerCase());\n  });\n  $(document).keydown(function (e) {\n    if (e.keyCode == 27) {\n      $(\".overlay\").css(\"display\", \"none\");\n      $(\".mk-fullscreen-search-overlay\").css(\"display\", \"none\");\n    }\n  });\n  $('#mk-fullscreen-search-input').on('keyup', function () {\n    /* $(\".live-search-list\").css(\"opacity\", \"1\");*/\n    var searchTerm = $(this).val().toLowerCase();\n\n    if (searchTerm.length != 0) {\n      $(\".live-search-list\").css(\"display\", \"block\");\n      $('.live-search-list li').each(function () {\n        if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {\n          $(this).show();\n        } else {\n          $(this).hide();\n        }\n      });\n    } else {\n      $(\".live-search-list\").css(\"display\", \"none\");\n    }\n  });\n});\n\n//# sourceURL=webpack:///./assets/js/search.js?");

/***/ }),

/***/ "./assets/js/title.js":
/*!****************************!*\
  !*** ./assets/js/title.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var animeOpacity01 = {\n  value: [0, 1],\n  duration: 2000,\n  easing: 'easeInOutSine',\n  direction: 'alternate'\n};\nvar animeOpacity10 = {\n  value: [1, 0],\n  duration: 2000,\n  easing: 'easeInOutSine',\n  direction: 'alternate'\n};\nvar animeRotate2 = {\n  value: [180, -180],\n  duration: 5000,\n  easing: 'easeInOutSine',\n  direction: 'alternate'\n};\nanime({\n  targets: \".title_container .icon:not(.title_tree_container)\",\n  rotate: {\n    value: [360, -360],\n    duration: 6000,\n    easing: 'easeInOutSine',\n    direction: 'alternate'\n  },\n  direction: 'alternate',\n  loop: true\n});\nanime({\n  targets: \".title_container .icon.title_tree_container .title_star:not(.title_star_2)\",\n  rotate: animeRotate2,\n  direction: 'alternate',\n  loop: true\n});\nvar animeStar1 = anime.timeline({\n  easing: 'easeOutExpo',\n  duration: 4000,\n  direction: 'alternate',\n  loop: true\n});\nanimeStar1.add({\n  targets: '.title_container .icon.title_tree_container .title_star:not(.title_star_2)',\n  opacity: animeOpacity01\n}).add({\n  targets: '.title_container .icon.title_tree_container .title_star:not(.title_star_2)',\n  opacity: animeOpacity10\n});\nanime({\n  targets: \".title_container .icon.title_tree_container .title_star.title_star_2\",\n  rotate: animeRotate2,\n  direction: 'alternate',\n  loop: true\n});\nvar animeStar2 = anime.timeline({\n  easing: 'easeOutExpo',\n  duration: 4000,\n  direction: 'alternate',\n  loop: true\n});\nanimeStar2.add({\n  targets: '.title_container .icon.title_tree_container .title_star.title_star_2',\n  opacity: animeOpacity10\n}).add({\n  targets: '.title_container .icon.title_tree_container .title_star.title_star_2',\n  opacity: animeOpacity01\n});\n\n//# sourceURL=webpack:///./assets/js/title.js?");

/***/ })

/******/ });