!function(a){function b(a,b,e){return 4===arguments.length?c.apply(this,arguments):void d(a,{declarative:!0,deps:b,declare:e})}function c(a,b,c,e){d(a,{declarative:!1,deps:b,executingRequire:c,execute:e})}function d(a,b){b.name=a,a in o||(o[a]=b),b.normalizedDeps=b.deps}function e(a,b){if(b[a.groupIndex]=b[a.groupIndex]||[],-1==p.call(b[a.groupIndex],a)){b[a.groupIndex].push(a);for(var c=0,d=a.normalizedDeps.length;d>c;c++){var f=a.normalizedDeps[c],g=o[f];if(g&&!g.evaluated){var h=a.groupIndex+(g.declarative!=a.declarative);if(void 0===g.groupIndex||g.groupIndex<h){if(void 0!==g.groupIndex&&(b[g.groupIndex].splice(p.call(b[g.groupIndex],g),1),0==b[g.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");g.groupIndex=h}e(g,b)}}}}function f(a){var b=o[a];b.groupIndex=0;var c=[];e(b,c);for(var d=!!b.declarative==c.length%2,f=c.length-1;f>=0;f--){for(var g=c[f],i=0;i<g.length;i++){var k=g[i];d?h(k):j(k)}d=!d}}function g(a){return s[a]||(s[a]={name:a,dependencies:[],exports:{},importers:[]})}function h(b){if(!b.module){var c=b.module=g(b.name),d=b.module.exports,e=b.declare.call(a,function(a,b){if(c.locked=!0,"object"==typeof a)for(var e in a)d[e]=a[e];else d[a]=b;for(var f=0,g=c.importers.length;g>f;f++){var h=c.importers[f];if(!h.locked)for(var i=0;i<h.dependencies.length;++i)h.dependencies[i]===c&&h.setters[i](d)}return c.locked=!1,b},{id:b.name});c.setters=e.setters,c.execute=e.execute;for(var f=0,i=b.normalizedDeps.length;i>f;f++){var j,k=b.normalizedDeps[f],l=o[k],m=s[k];m?j=m.exports:l&&!l.declarative?j=l.esModule:l?(h(l),m=l.module,j=m.exports):j=n(k),m&&m.importers?(m.importers.push(c),c.dependencies.push(m)):c.dependencies.push(null),c.setters[f]&&c.setters[f](j)}}}function i(a){var b,c=o[a];if(c)c.declarative?m(a,[]):c.evaluated||j(c),b=c.module.exports;else if(b=n(a),!b)throw new Error("Unable to load dependency "+a+".");return(!c||c.declarative)&&b&&b.__useDefault?b.default:b}function j(b){if(!b.module){var c={},d=b.module={exports:c,id:b.name};if(!b.executingRequire)for(var e=0,f=b.normalizedDeps.length;f>e;e++){var g=b.normalizedDeps[e],h=o[g];h&&j(h)}b.evaluated=!0;var l=b.execute.call(a,function(a){for(var c=0,d=b.deps.length;d>c;c++)if(b.deps[c]==a)return i(b.normalizedDeps[c]);throw new TypeError("Module "+a+" not declared as a dependency.")},c,d);void 0!==typeof l&&(d.exports=l),c=d.exports,c&&c.__esModule?b.esModule=c:b.esModule=k(c)}}function k(b){var c={};if(("object"==typeof b||"function"==typeof b)&&b!==a)if(q)for(var d in b)"default"!==d&&l(c,b,d);else{var e=b&&b.hasOwnProperty;for(var d in b)"default"===d||e&&!b.hasOwnProperty(d)||(c[d]=b[d])}return c.default=b,r(c,"__useDefault",{value:!0}),c}function l(a,b,c){try{var d;(d=Object.getOwnPropertyDescriptor(b,c))&&r(a,c,d)}catch(d){return a[c]=b[c],!1}}function m(b,c){var d=o[b];if(d&&!d.evaluated&&d.declarative){c.push(b);for(var e=0,f=d.normalizedDeps.length;f>e;e++){var g=d.normalizedDeps[e];-1==p.call(c,g)&&(o[g]?m(g,c):n(g))}d.evaluated||(d.evaluated=!0,d.module.execute.call(a))}}function n(a){if(u[a])return u[a];if("@node/"==a.substr(0,6))return u[a]=k(t(a.substr(6)));var b=o[a];if(!b)throw"Module "+a+" not present.";return f(a),m(a,[]),o[a]=void 0,b.declarative&&r(b.module.exports,"__esModule",{value:!0}),u[a]=b.declarative?b.module.exports:b.esModule}var o={},p=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},q=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(a){q=!1}var r;!function(){try{Object.defineProperty({},"a",{})&&(r=Object.defineProperty)}catch(a){r=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(a){}}}}();var s={},t="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,u={"@empty":{}};return function(a,d,e,f){return function(g){g(function(g){for(var h={_nodeRequire:t,register:b,registerDynamic:c,get:n,set:function(a,b){u[a]=b},newModule:function(a){return a}},i=0;i<d.length;i++)(function(a,b){b&&b.__esModule?u[a]=b:u[a]=k(b)})(d[i],arguments[i]);f(h);var j=n(a[0]);if(a.length>1)for(var i=1;i<a.length;i++)n(a[i]);return e?j.default:j})}}}("undefined"!=typeof self?self:global)(["1"],["4","5","6","11","12","1b","1c","20","21","25","28","2a","2b","2c"],!1,function(a){this.require,this.exports,this.module;!function(b){function c(a,b){for(var c=a.split(".");c.length;)b=b[c.shift()];return b}function d(a){if("string"==typeof a)return c(a,b);if(!(a instanceof Array))throw new Error("Global exports must be a string or array.");for(var d={},e=!0,f=0;f<a.length;f++){var g=c(a[f],b);e&&(d.default=g,e=!1),d[a[f].split(".").pop()]=g}return d}function e(a){if(Object.keys)Object.keys(b).forEach(a);else for(var c in b)i.call(b,c)&&a(c)}function f(a){e(function(c){if(-1==j.call(k,c)){try{var d=b[c]}catch(a){k.push(c)}a(c,d)}})}var g,h=a,i=Object.prototype.hasOwnProperty,j=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},k=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];h.set("@@global-helpers",h.newModule({prepareGlobal:function(a,c,e){var h=b.define;b.define=void 0;var i;if(e){i={};for(var j in e)i[j]=b[j],b[j]=e[j]}return c||(g={},f(function(a,b){g[a]=b})),function(){var a;if(c)a=d(c);else{a={};var e,j;f(function(b,c){g[b]!==c&&"undefined"!=typeof c&&(a[b]=c,"undefined"!=typeof e?j||e===c||(j=!0):e=c)}),a=j?a:e}if(i)for(var k in i)b[k]=i[k];return b.define=h,a}}}))}("undefined"!=typeof self?self:global),a.registerDynamic("2",[],!1,function(b,c,d){var e=a.get("@@global-helpers").prepareGlobal(d.id,null,null);return function(a){}(this),e()}),a.register("3",["4","5","6"],function(a,b){"use strict";function c(a){var b=a.className,c=void 0===b?"":b,d=a.children,g=void 0===d?void 0:d,h=f.default(c.toString(),"c-nav c-nav--inline");return e.createElement("nav",{className:h},g)}function d(a){var b=a.className,c=void 0===b?"":b,d=a.children,h=void 0===d?void 0:d,i=a.href,j=void 0===i?"/":i,k=a.isRight,l=void 0!==k&&k,m=a.isPrimary,n=void 0!==m&&m,o=f.default(c,"c-nav__item",{"c-nav__item--info":n,"c-nav__item--right":l}),p=f.default("c-nav__item--active");return e.createElement(g.Link,{to:j,className:o,activeClassName:p},h)}b&&b.id;a("LayoutTopNav",c),a("LayoutTopNavLink",d);var e,f,g;return{setters:[function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){}}}),a.register("7",["4","5"],function(a,b){"use strict";function c(a){var b=a.className,c=void 0===b?"":b,f=a.children,g=void 0===f?void 0:f,h=e.default(c.toString());return d.createElement("header",{className:h},g)}b&&b.id;a("LayoutHeader",c);var d,e;return{setters:[function(a){d=a},function(a){e=a}],execute:function(){}}}),a.register("8",["4","5"],function(a,b){"use strict";function c(a){var b=a.className,c=void 0===b?"":b,g=a.children,h=void 0===g?void 0:g,i=e.default(c.toString()),j=e.default("o-container o-container--medium");return d.createElement("main",{className:i,style:f.background},d.createElement("div",{className:j},h))}b&&b.id;a("LayoutMain",c);var d,e,f;return{setters:[function(a){d=a},function(a){e=a}],execute:function(){f={background:{backgroundColor:"#f7f7f7"}}}}}),a.register("9",["4","5"],function(a,b){"use strict";function c(a){var b=a.className,c=void 0===b?"":b,g=a.children,h=void 0===g?void 0:g,i=e.default(c.toString(),"u-centered","u-letter-box--medium");return d.createElement("footer",{className:i,style:f.topBorder},h)}b&&b.id;a("LayoutFooter",c);var d,e,f;return{setters:[function(a){d=a},function(a){e=a}],execute:function(){f={topBorder:{borderTop:"1px solid #ddd"}}}}}),a.register("a",["2","4","3","7","8","9"],function(a,b){"use strict";var c,d,e,f,g,h,i=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};b&&b.id;return{setters:[function(a){},function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){h=function(a){function b(){return a.apply(this,arguments)||this}return i(b,a),b.prototype.render=function(){var a=this.props.children;return c.createElement("div",{className:"c-text"},c.createElement(e.LayoutHeader,null,c.createElement(d.LayoutTopNav,null,c.createElement(d.LayoutTopNavLink,{href:"/",isPrimary:!0}," Home "),c.createElement(d.LayoutTopNavLink,{href:"/currency-converter"}," Currency Converter "),c.createElement(d.LayoutTopNavLink,{href:"/css-modules"}," CSS Modules "))),c.createElement(f.LayoutMain,null,a),c.createElement(g.LayoutFooter,null,"2016 © Piotr Witek",c.createElement("br",null),c.createElement("a",{href:"https://github.com/piotrwitek/react-redux-typescript-starter-kit"},"Back to GitHub Repo")))},b}(c.Component),a("MainLayout",h)}}}),a.register("b",["4","6","c","d"],function(a,b){"use strict";function c(){return d.createElement("article",null,d.createElement(g.PageHero,{title:"Welcome to",subtitle:"React / Redux / TypeScript - starter-kit"}),d.createElement(f.PageSection,{className:"o-container o-container--small"},d.createElement("p",null,"Below you can find a few examples created using concepts of this starter-kit:"),d.createElement("ul",null,d.createElement("li",null,d.createElement(e.Link,{to:"/currency-converter"},"Currency Converter App")),d.createElement("li",null,d.createElement(e.Link,{to:"/css-modules"},"CSS Modules Demo"))),d.createElement("br",null),d.createElement("div",{className:"c-alert c-alert--info"},"Note: Open Redux DevTools Inspector")),d.createElement("br",null))}b&&b.id;a("HomeContainer",c);var d,e,f,g;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){}}}),a.register("e",[],function(a,b){"use strict";b&&b.id;return{setters:[],execute:function(){a("default",{textColor:"#111",borderColor:"#222",backgroundColor:"gold",shadowColor:"#000",shadowColorLight:"#888"})}}}),a.register("f",[],function(a,b){"use strict";b&&b.id;return{setters:[],execute:function(){a("default",{tablet:"740px"})}}}),a.register("10",["11","12","e","f"],function(a,b){"use strict";var c,d,e,f,g,h,i,j;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g={cText__glowing:".cText__glowing {\n    color: "+e.default.textColor+";\n    text-shadow: "+e.default.textColor+" 0 0 10px;\n    white-space: nowrap;\n  }",uCentered:".uCentered {\n    text-align: center;\n  }",uBordered:".uBordered {\n    border-radius: 5px;\n    border: 1px solid "+e.default.borderColor+";\n    background-color: "+e.default.backgroundColor+";\n  }",uHideOnTablet:".uHideOnTablet {\n    margin: 0px 30px;\n    opacity: 1;\n    transition:\n      margin 1s 0.5s,\n      opacity 1s 0.5s;\n  }\n  @media (max-width: "+f.default.tablet+") {\n    .uHideOnTablet {\n      margin: 0px 50px;\n      opacity: 0;\n      transition:\n        margin 1s,\n        opacity 1s,\n        box-shadow 0.5s linear;\n    }\n  }",uShowOnTablet:".uShowOnTablet {\n    margin: 0px 50px;\n    opacity: 0;\n    transition:\n      margin 1s,\n      opacity 1s;\n  }\n  @media (max-width: "+f.default.tablet+") {\n    .uShowOnTablet {\n      margin: 0px 30px;\n      opacity: 1;\n      transition:\n        margin 1s 0.5s,\n        opacity 1s 0.5s,\n        box-shadow 0.5s linear;\n    }\n  }",eElevate:".eElevate {\n    box-shadow: none;\n    transition: box-shadow 0.6s ease-out;\n  }\n  .eElevate:hover {\n    box-shadow: 0 6px 20px 0 "+e.default.shadowColor+";\n  }"},h=Object.values(g).reduce(function(a,b){return a+b},""),j=["",""],j.raw=["",""],i=c.default(j,h),d.default(c.default.getCss(i)),a("default",i)}}}),a.register("13",["4","14","c","10"],function(a,b){"use strict";function c(){return d.createElement("article",null,d.createElement(e.PageHeader,null,"Typed CSS-Modules"),d.createElement(f.PageSection,null,d.createElement("p",{style:{textAlign:"justify"}},"Local CSS styles (using ",d.createElement("a",{href:"https://github.com/rtsao/csjs#faq"},"csjs"),"), with capability to leverage TypeScript IntelliSense features in Editor/IDE, for autocompletion and easy refactoring of available class-names.")),d.createElement("br",null),d.createElement(f.PageSection,{className:g.default.uCentered},d.createElement("div",{className:g.default.uHideOnTablet},d.createElement("div",{className:[g.default.uBordered,g.default.eElevate].join(" ")},d.createElement("p",{className:g.default.cText__glowing},d.createElement("br",null),"Hover me!",d.createElement("br",null),d.createElement("small",null,d.createElement("i",null,"(narrow your window)"))))),d.createElement("div",{className:g.default.uShowOnTablet},d.createElement("div",{className:[g.default.uBordered,g.default.eElevate].join(" ")},d.createElement("p",{className:g.default.cText__glowing},"SUPRISE!!!")))),d.createElement("br",null),d.createElement("p",{className:g.default.uCentered},"Source: ",d.createElement("a",{href:"https://github.com/piotrwitek/react-redux-typescript-starter-kit/tree/master/src/containers/css-modules-container"},"Link to GitHub")),d.createElement("br",null))}b&&b.id;a("CssModulesContainer",c);var d,e,f,g;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){}}}),a.register("d",["4","5"],function(a,b){"use strict";function c(a){var b=a.className,c=void 0===b?"":b,f=a.children,g=void 0===f?void 0:f,h=a.title,i=void 0===h?"":h,j=a.subtitle,k=void 0===j?"":j,l=e.default(c.toString(),"u-centered","u-letter-box--super");return d.createElement("section",{className:l},d.createElement("h1",{className:"c-heading u-window-box--none"},i),d.createElement("h3",{className:"c-heading u-window-box--none"},k),d.createElement("div",null,g))}b&&b.id;a("PageHero",c);var d,e;return{setters:[function(a){d=a},function(a){e=a}],execute:function(){}}}),a.register("15",["4","6","c","d"],function(a,b){"use strict";function c(){return d.createElement("article",null,d.createElement(g.PageHero,{title:"404 Not Found",subtitle:"Page not found"}),d.createElement(f.PageSection,{className:"o-container o-container--small u-centered"},d.createElement(e.Link,{to:"/"},"Back to Home")),d.createElement("br",null))}b&&b.id;a("default",c);var d,e,f,g;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){}}}),a.register("14",["4","5"],function(a,b){"use strict";function c(a){var b=a.className,c=void 0===b?"":b,f=a.children,g=void 0===f?void 0:f,h=e.default(c.toString(),"c-heading","u-centered");return d.createElement("h2",{className:h},g)}b&&b.id;a("PageHeader",c);var d,e;return{setters:[function(a){d=a},function(a){e=a}],execute:function(){}}}),a.register("c",["4","5"],function(a,b){"use strict";function c(a){var b=a.className,c=void 0===b?"":b,f=a.children,g=void 0===f?void 0:f,h=e.default(c.toString(),"o-grid"),i=e.default("o-grid__cell");return d.createElement("section",{className:h},d.createElement("div",{className:i},g))}b&&b.id;a("PageSection",c);var d,e;return{setters:[function(a){d=a},function(a){e=a}],execute:function(){}}}),a.register("16",["4"],function(a,b){"use strict";function c(a){var b=a.currencies,c=void 0===b?[]:b,e=a.value,f=a.onChange,g=function(a){f(a.currentTarget.value)};return d.createElement("select",{className:"c-field u-xlarge",value:e,onChange:g},c.map(function(a){return d.createElement("option",{key:a},a)}))}b&&b.id;a("CurrencySelect",c);var d;return{setters:[function(a){d=a}],execute:function(){}}}),a.register("17",["4"],function(a,b){"use strict";function c(a){var b=a.value,c=void 0===b?0:b,e=a.onChange,f=function(a){e(a.currentTarget.value)},g=function(a){e(parseFloat(a.currentTarget.value).toFixed(2))};return d.createElement("input",{className:"c-field u-xlarge",type:"text",value:c,onChange:f,onBlur:g})}b&&b.id;a("CurrencyInput",c);var d;return{setters:[function(a){d=a}],execute:function(){}}}),a.register("18",["4","16","17"],function(a,b){"use strict";function c(a){var b=a.currencies,c=a.currencyType,g=a.currencyValue,h=a.onCurrencyTypeChange,i=a.onCurrencyValueChange;return d.createElement("div",{className:"c-input-group"},d.createElement("div",{className:"o-field o-field--fixed",style:{width:"90px"}},d.createElement(e.CurrencySelect,{currencies:b,value:c,onChange:h})),d.createElement("div",{className:"o-field"},d.createElement(f.CurrencyInput,{value:g,onChange:i})))}var d,e,f,g,h=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};b&&b.id;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=function(a){function b(){return a.apply(this,arguments)||this}return h(b,a),b.prototype.render=function(){var a=this.props,b=a.currencies,e=a.baseCurrency,f=a.targetCurrency,g=a.baseValue,h=a.targetValue,i=a.onBaseCurrencyChange,j=a.onTargetCurrencyChange,k=a.onBaseValueChange,l=a.onTargetValueChange;return d.createElement("div",{className:"o-grid o-grid--xsmall-full o-grid--small-full o-grid--medium-full"},d.createElement("div",{className:"o-grid__cell u-window-box--medium"},d.createElement(c,{currencies:b,currencyType:e,onCurrencyTypeChange:i,currencyValue:g,onCurrencyValueChange:k})),d.createElement("div",{className:"o-grid__cell o-grid__cell--width-10 u-letter-box--xlarge u-centered"},"=>"),d.createElement("div",{className:"o-grid__cell u-window-box--medium"},d.createElement(c,{currencies:b,currencyType:f,onCurrencyTypeChange:j,currencyValue:h,onCurrencyValueChange:l})))},b}(d.Component),a("CurrencyConverter",g)}}}),a.register("19",["4","1b","1c","1a","14","c","18"],function(a,b){"use strict";var c,d,e,f,g,h,i,j,k,l,m,n=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a},function(a){i=a}],execute:function(){j=function(a){return{currencyRates:a.currencyRates,currencyConverter:a.currencyConverter}},k={changeBaseCurrency:f.ActionCreators.ChangeBaseCurrency.create,changeTargetCurrency:f.ActionCreators.ChangeTargetCurrency.create,changeBaseValue:f.ActionCreators.ChangeBaseValue.create,changeTargetValue:f.ActionCreators.ChangeTargetValue.create},l=e.returntypeof(j),m=function(a){function b(){return a.apply(this,arguments)||this}return n(b,a),b.prototype.render=function(){var a=this.props.currencyConverter,b=a.baseCurrency,d=a.targetCurrency,e=a.baseValue,f=a.targetValue,j=this.props.currencyRates,k=j.rates,l=j.base,m=Object.keys(k).concat(l),n=this.props,o=n.changeBaseCurrency,p=n.changeBaseValue,q=n.changeTargetCurrency,r=n.changeTargetValue;return c.createElement("article",null,c.createElement(g.PageHeader,null,"Currency Converter"),c.createElement(h.PageSection,{className:"u-centered"},c.createElement("p",null,"Example application to showcase TypeScript patterns used in React & Redux projects."),c.createElement("p",null,"To learn more about usefull TypeScript Patterns in React & Redux Apps go here:",c.createElement("br",null),c.createElement("a",{href:"https://github.com/piotrwitek/react-redux-typescript-patterns/"},"React / Redux / TypeScript Patterns")),c.createElement("p",null,"Async Flows are handled using ",c.createElement("a",{href:"https://github.com/redux-observable/redux-observable/"},"redux-observable"))),c.createElement("section",{className:"u-letter-box--xlarge"},c.createElement(i.CurrencyConverter,{currencies:m,baseCurrency:b,targetCurrency:d,baseValue:e,targetValue:f,onBaseCurrencyChange:o,onTargetCurrencyChange:q,onBaseValueChange:p,onTargetValueChange:r})))},b}(c.Component),a("default",d.connect(j,k)(m))}}}),a.register("1d",["1c","1e"],function(a,b){"use strict";function c(a,b){void 0===a&&(a=n);var c;switch(b.type){case g:c={isLoading:!0,error:null};break;case i:var e=b.payload,f=e.base,h=e.rates,j=e.date;c={isLoading:!1,lastUpdated:Date.now(),base:f,rates:h,date:j};break;case k:c={isLoading:!1,error:b.payload};break;default:return a}return d({},a,c)}var d=this&&this.__assign||Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++){b=arguments[c];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e])}return a};b&&b.id;a("default",c);var e,f,g,h,i,j,k,l,m,n;return{setters:[function(a){e=a},function(a){f=a}],execute:function(){a("LOAD_CURRENCY_RATES",g="currencyRates/LOAD_CURRENCY_RATES"),a("loadCurrencyRates",h=function(){return{type:g}}),a("LOAD_CURRENCY_RATES_SUCCESS",i="currencyRates/LOAD_CURRENCY_RATES_SUCCESS"),a("loadCurrencyRatesSuccess",j=function(a){return{type:i,payload:a}}),a("LOAD_CURRENCY_RATES_ERROR",k="currencyRates/LOAD_CURRENCY_RATES_ERROR"),a("loadCurrencyRatesError",l=function(a){return{type:k,payload:a}}),m={loadCurrencyRates:e.returntypeof(h),loadCurrencyRatesSuccess:e.returntypeof(j),loadCurrencyRatesError:e.returntypeof(l)},a("initialState",n={isLoading:!1,error:null,lastUpdated:null,base:f.latestResponse.base,rates:f.latestResponse.rates,date:f.latestResponse.date})}}}),a.registerDynamic("1f",["20","21"],!0,function(a,b,c){"use strict";var d=(this||self,a("20")),e=a("21");return d.Observable.prototype.map=e.map,c.exports}),a.register("22",[],function(a,b){"use strict";var c;b&&b.id;return{setters:[],execute:function(){c=function(){function a(a){var b=this;this.create=function(a){return{type:b.type,payload:a}},this.type=a}return a}(),a("ActionCreator",c)}}}),a.register("1e",[],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[],execute:function(){a("latestJson",c='{\n    "base": "EUR",\n    "date": "2017-02-17",\n    "rates": {\n        "AUD": 1.3892,\n        "BGN": 1.9558,\n        "BRL": 3.2928,\n        "CAD": 1.3929,\n        "CHF": 1.0637,\n        "CNY": 7.3134,\n        "CZK": 27.021,\n        "DKK": 7.4334,\n        "GBP": 0.8572,\n        "HKD": 8.2659,\n        "HRK": 7.441,\n        "HUF": 308.32,\n        "IDR": 14199,\n        "ILS": 3.947,\n        "INR": 71.462,\n        "JPY": 120.08,\n        "KRW": 1224.8,\n        "MXN": 21.805,\n        "MYR": 4.7424,\n        "NOK": 8.8645,\n        "NZD": 1.4809,\n        "PHP": 53.309,\n        "PLN": 4.3305,\n        "RON": 4.5223,\n        "RUB": 61.967,\n        "SEK": 9.4478,\n        "SGD": 1.5086,\n        "THB": 37.27,\n        "TRY": 3.9117,\n        "USD": 1.065,\n        "ZAR": 13.936\n    }\n}'),a("latestResponse",d=JSON.parse(c))}}}),a.register("1a",["22","1e"],function(a,b){"use strict";function c(a,b){void 0===a&&(a=j);var c;return b.type===i.ChangeBaseCurrency.type&&(c={baseCurrency:b.payload}),b.type===i.ChangeTargetCurrency.type&&(c={targetCurrency:b.payload}),b.type===i.ChangeBaseValue.type&&(c={baseValue:b.payload}),b.type===i.ChangeTargetValue.type&&(c={targetValue:b.payload}),b.type===i.UpdateCurrencyConverterState.type&&(c=b.payload),null!=c?d({},a,c):a}var d=this&&this.__assign||Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++){b=arguments[c];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e])}return a};b&&b.id;a("default",c);var e,f,g,h,i,j;return{setters:[function(a){e=a},function(a){f=a}],execute:function(){g=f.latestResponse.base,h=Object.entries(f.latestResponse.rates)[0][0],a("ActionCreators",i={ChangeBaseCurrency:new e.ActionCreator("ChangeBaseCurrency"),ChangeTargetCurrency:new e.ActionCreator("ChangeTargetCurrency"),ChangeBaseValue:new e.ActionCreator("ChangeBaseValue"),ChangeTargetValue:new e.ActionCreator("ChangeTargetValue"),UpdateCurrencyConverterState:new e.ActionCreator("UpdateCurrencyConverterState")}),a("initialState",j={baseCurrency:g,targetCurrency:h,baseValue:"100",targetValue:(100*f.latestResponse.rates[h]).toString()})}}}),a.register("23",[],function(a,b){"use strict";function c(a,b,c){var d=parseFloat(a),e=d/b*c;return e.toFixed(2)}b&&b.id;return a("convertValueWithBaseRateToTargetRate",c),{setters:[],execute:function(){}}}),a.register("24",["25"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a}],execute:function(){d=function(a){return a.currencyConverter},a("getBaseValue",e=c.createSelector(d,function(a){return a.baseValue})),a("getTargetValue",f=c.createSelector(d,function(a){return a.targetValue}))}}}),a.register("26",["25"],function(a,b){"use strict";var c,d,e,f,g,h;b&&b.id;return{setters:[function(a){c=a}],execute:function(){d=function(a){return a.currencyConverter},e=function(a){return a.currencyRates},a("getCurrencies",f=c.createSelector(e,function(a){return Object.keys(a.rates).concat(a.base)})),a("getBaseCurrencyRate",g=c.createSelector(d,e,function(a,b){var c=a.baseCurrency;return c===b.base?1:b.rates[c]})),a("getTargetCurrencyRate",h=c.createSelector(d,e,function(a,b){return b.rates[a.targetCurrency]}))}}}),a.register("27",["28","1f","1a","23","24","26"],function(a,b){"use strict";var c,d,e,f,g,h,i,j,k;b&&b.id;return{setters:[function(a){c=a},function(a){},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){h=function(a,b){return a.ofType(d.ActionCreators.ChangeBaseCurrency.type,d.ActionCreators.ChangeTargetCurrency.type).map(function(a){return{type:d.ActionCreators.UpdateCurrencyConverterState.type,payload:{targetValue:e.convertValueWithBaseRateToTargetRate(f.getBaseValue(b.getState()),g.getBaseCurrencyRate(b.getState()),g.getTargetCurrencyRate(b.getState()))}}})},i=function(a,b){return a.ofType(d.ActionCreators.ChangeBaseValue.type).map(function(a){return{type:d.ActionCreators.UpdateCurrencyConverterState.type,payload:{targetValue:e.convertValueWithBaseRateToTargetRate(a.payload,g.getBaseCurrencyRate(b.getState()),g.getTargetCurrencyRate(b.getState()))}}})},j=function(a,b){return a.ofType(d.ActionCreators.ChangeTargetValue.type).map(function(a){return{type:d.ActionCreators.UpdateCurrencyConverterState.type,payload:{baseValue:e.convertValueWithBaseRateToTargetRate(a.payload,g.getTargetCurrencyRate(b.getState()),g.getBaseCurrencyRate(b.getState()))}}})},a("epics",k=c.combineEpics(h,i,j))}}}),a.register("29",["2a","2b","28","1d","1a","27"],function(a,b){"use strict";function c(a){console.log(a.store.getState())}b&&b.id;a("__reload",c);var d,e,f,g,h,i,j,k,l,m,n,o;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a},function(a){i=a}],execute:function(){j=d.combineReducers({routing:e.routerReducer,currencyRates:g.default,currencyConverter:h.default}),k=function(){return{}},l=f.combineEpics(i.epics),m=f.createEpicMiddleware(l),n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.compose,a("store",o=d.createStore(j,k(),n(d.applyMiddleware(m))))}}}),a.register("1",["4","2c","1b","6","2b","a","b","13","15","19","29"],function(a,b){"use strict";function c(){return d.createElement(f.Provider,{store:n.store},d.createElement(g.Router,{history:o},d.createElement(g.Route,{component:i.MainLayout},d.createElement(g.Route,{path:"/",component:j.HomeContainer}),d.createElement(g.Route,{path:"/currency-converter",component:m.default}),d.createElement(g.Route,{path:"/css-modules",component:k.CssModulesContainer}),d.createElement(g.Route,{path:"*",component:l.default}))))}var d,e,f,g,h,i,j,k,l,m,n,o,p;b&&b.id;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a},function(a){i=a},function(a){j=a},function(a){k=a},function(a){l=a},function(a){m=a},function(a){n=a}],execute:function(){o=h.syncHistoryWithStore(g.browserHistory,n.store),a("app",p=e.render(d.createElement(c,null),document.getElementById("app-container")))}}}),function(a){if("undefined"!=typeof document){var b=document,c="appendChild",d=b.createElement("style");d.type="text/css",b.getElementsByTagName("head")[0][c](d),d[c](b.createTextNode(a))}}("\n/*# sourceMappingURL=__.css.map */")})(function(a){if("function"==typeof define&&define.amd)define(["react","classnames","react-router","csjs","insert-css","react-redux","react-redux-typescript","rxjs/Observable.js","rxjs/operator/map.js","reselect","redux-observable","redux","react-router-redux","react-dom"],a);else{if("object"!=typeof module||!module.exports||"function"!=typeof require)throw new Error("Module must be loaded as AMD or CommonJS");module.exports=a(require("react"),require("classnames"),require("react-router"),require("csjs"),require("insert-css"),require("react-redux"),require("react-redux-typescript"),require("rxjs/Observable.js"),require("rxjs/operator/map.js"),require("reselect"),require("redux-observable"),require("redux"),require("react-router-redux"),require("react-dom"))}});