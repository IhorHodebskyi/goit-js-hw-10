!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var e=new URLSearchParams({fields:"name,capital,population,flags,languages,"}),o={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),p=Object.prototype.toString,v=Math.max,b=Math.min,m=function(){return d.Date.now()};function y(t){var e=void 0===t?"undefined":n(r)(t);return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(r)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||c.test(t)?f(t.slice(2),o?2:8):u.test(t)?NaN:+t}o=function(t,n,e){var o,r,i,u,a,c,f=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(n){var e=o,i=r;return o=r=void 0,f=n,u=t.apply(i,e)}function h(t){return f=t,a=setTimeout(w,n),l?p(t):u}function j(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-f>=i}function w(){var t=m();if(j(t))return T(t);a=setTimeout(w,function(t){var e=n-(t-c);return s?b(e,i-(t-f)):e}(t))}function T(t){return a=void 0,d&&o?p(t):(o=r=void 0,u)}function O(){var t=m(),e=j(t);if(o=arguments,r=this,c=t,e){if(void 0===a)return h(c);if(s)return a=setTimeout(w,n),p(c)}return void 0===a&&(a=setTimeout(w,n)),u}return n=g(n)||0,y(e)&&(l=!!e.leading,i=(s="maxWait"in e)?v(g(e.maxWait)||0,n):i,d="trailing"in e?!!e.trailing:d),O.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=c=r=a=void 0},O.flush=function(){return void 0===a?u:T(m())},O};var h=document.getElementById("search-box"),j=document.querySelector(".country-list");document.querySelector(".country-info");function w(t){var n=w.map((function(t){var n=t.name,e=t.capital,o=t.population,r=t.flags,i=t.languages;return'\n            \n              <img src="'.concat(r.svg,'" alt="').concat(n.official,' width="320" height="auto"">\n              <p><b>capital</b>: ').concat(e,"</p>\n              <p><b>population</b>: ").concat(o,"</p>\n              <p><b>languages</b>: ").concat(i,"</p>\n            \n        ")})).join("");return j.innerHTML=n}h.addEventListener("input",o((function(t){t.preventDefault();var n=h.value.trim();console.log(n),(o=n,fetch("".concat("https://restcountries.com/v3.1/name/").concat(o,"?").concat(e)).then((function(t){if(404===t.status)throw new Error(t.status);return t.json()}))).then(w).catch((function(t){console.log(t)}));var o}),300))}();
//# sourceMappingURL=index.c67615c4.js.map
