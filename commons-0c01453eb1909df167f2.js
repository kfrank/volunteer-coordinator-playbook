(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/uZM":function(e,t,n){e.exports={header:"layout-module--header--379cn",contain:"layout-module--contain--2uo80",title:"layout-module--title--17zAf",content:"layout-module--content--3nIku"}},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var o=n("q1tI"),i=r(o),a=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function f(){s=e(l.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var c=o.prototype;return c.shouldComponentUpdate=function(e){return!a(e,this.props)},c.componentWillMount=function(){l.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},c.render=function(){return i.createElement(r,this.props)},o}(o.Component);return c(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(d,"canUseDOM",u),d}}},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),a=n("KbXL"),c=n("dJj+"),u=n.n(c),s=function(){var e=a.data,t=e.parent.edges,n=e.child.edges;return o.a.createElement("nav",{className:u.a.root},t.map((function(e){var t=e.node,r=t.frontmatter.title||t.fields.slug,a=t.frontmatter.section;return o.a.createElement("li",null,o.a.createElement(i.Link,{to:t.fields.slug,className:u.a.parentLink,activeClassName:"active",partiallyActive:!0},o.a.createElement("svg",{width:"5",height:"8",className:u.a.svg},o.a.createElement("path",{d:"M.5.598L3.902 4 .5 7.402",stroke:"currentColor","stroke-width":"1.2",fill:"none","fill-rule":"evenodd"})),r),o.a.createElement("div",null,o.a.createElement("ol",null,n.map((function(e){var t=e.node;if(t.frontmatter.section===a){var n=t.frontmatter.title||t.fields.slug,r=t.frontmatter.sequence;return o.a.createElement("li",null,o.a.createElement(i.Link,{to:t.fields.slug,className:u.a.childLink,activeClassName:"active"},r,". ",n))}})))))})))},l=n("/uZM"),f=n.n(l);t.a=function(e){var t=e.title,n=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:f.a.header},o.a.createElement("div",{className:f.a.contain},o.a.createElement("h1",{className:f.a.title},o.a.createElement(i.Link,{to:"/"},t)))),o.a.createElement("div",{className:f.a.contain},o.a.createElement(s,null),o.a.createElement("main",{className:f.a.content},n)),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))}},C9fy:function(e,t,n){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("IYdN")(r,"toString",(function(){var e=i.call(this);return e==e?o.call(this):"Invalid Date"}))},Gytx:function(e,t,n){n("n7j8"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var s=i[u];if(!c(s))return!1;var l=e[s],f=t[s];if(!1===(o=n?n.call(r,l,f,s):void 0)||void 0===o&&l!==f)return!1}return!0}},IUVq:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Volunteer Coordinator Playbook","description":"A starter blog demonstrating what Gatsby can do.","social":{"twitter":"klare"}}}}}')},KbXL:function(e){e.exports=JSON.parse('{"data":{"parent":{"edges":[{"node":{"frontmatter":{"sequence":"1","title":"Intro","section":"Intro"},"fields":{"slug":"/intro/"}}},{"node":{"frontmatter":{"sequence":"2","title":"Annual & Recurring Events","section":"Recurring Events"},"fields":{"slug":"/recurring-events/"}}},{"node":{"frontmatter":{"sequence":"3","title":"New Event Origination","section":"New Idea Origination"},"fields":{"slug":"/new-idea-origination/"}}},{"node":{"frontmatter":{"sequence":"4","title":"Planning","section":"Planning"},"fields":{"slug":"/planning/"}}},{"node":{"frontmatter":{"sequence":"5","title":"Recruiting","section":"Recruiting"},"fields":{"slug":"/recruiting/"}}},{"node":{"frontmatter":{"sequence":"6","title":"Day of Event","section":"Day of Event"},"fields":{"slug":"/day-of-event/"}}},{"node":{"frontmatter":{"sequence":"7","title":"Break Down & Wrap Up","section":"Wrap Up"},"fields":{"slug":"/wrap-up/"}}}]},"child":{"edges":[{"node":{"frontmatter":{"sequence":"1","title":"Communicate Next Steps","type":"child","section":"Wrap Up"},"fields":{"slug":"/wrap-up/01-communicate-next-steps/"}}},{"node":{"frontmatter":{"sequence":"1","title":"Event Calendar","type":"child","section":"Recurring Events"},"fields":{"slug":"/recurring-events/01-event-calendar/"}}},{"node":{"frontmatter":{"sequence":"1","title":"Audience","type":"child","section":"Intro"},"fields":{"slug":"/intro/01-audience/"}}},{"node":{"frontmatter":{"sequence":"1","title":"Getting Your Idea Approved","type":"child","section":"New Idea Origination"},"fields":{"slug":"/new-idea-origination/01-getting-your-idea-approved/"}}},{"node":{"frontmatter":{"sequence":"1","title":"Establish Your Coordinator Team","type":"child","section":"Planning"},"fields":{"slug":"/planning/01-establish-coordinator-team/"}}},{"node":{"frontmatter":{"sequence":"1","title":"Review Open Volunteer Roles","type":"child","section":"Recruiting"},"fields":{"slug":"/recruiting/01-review-volunteer-roles/"}}},{"node":{"frontmatter":{"sequence":"1","title":"Don’t Assume Everyone Knows You","type":"child","section":"Day of Event"},"fields":{"slug":"/day-of-event/01-dont-assume-everyone-knows-you/"}}},{"node":{"frontmatter":{"sequence":"2","title":"Hold a Retrospective Meeting","type":"child","section":"Wrap Up"},"fields":{"slug":"/wrap-up/02-hold-a-retrospective/"}}},{"node":{"frontmatter":{"sequence":"2","title":"Open Volunteer Leadership Roles Listing","type":"child","section":"Recurring Events"},"fields":{"slug":"/recurring-events/02-roles/"}}},{"node":{"frontmatter":{"sequence":"2","title":"Identify the Correct Contact(s)","type":"child","section":"New Idea Origination"},"fields":{"slug":"/new-idea-origination/02-identify-contacts/"}}},{"node":{"frontmatter":{"sequence":"2","title":"Hold a Team Kickoff Meeting","type":"child","section":"Planning"},"fields":{"slug":"/planning/02-kickoff-meeting/"}}},{"node":{"frontmatter":{"sequence":"2","title":"Prepare Your Signup Sheets","type":"child","section":"Recruiting"},"fields":{"slug":"/recruiting/02-prepare-signup/"}}},{"node":{"frontmatter":{"sequence":"2","title":"Keep Your Volunteers Happy","type":"child","section":"Day of Event"},"fields":{"slug":"/day-of-event/02-keep-your-volunteers-happy/"}}},{"node":{"frontmatter":{"sequence":"3","title":"Update Your Documentation and Processes","type":"child","section":"Wrap Up"},"fields":{"slug":"/wrap-up/03-update-your-documentation/"}}},{"node":{"frontmatter":{"sequence":"3","title":"Success Metrics","type":"child","section":"Recurring Events"},"fields":{"slug":"/recurring-events/03-success-metrics/"}}},{"node":{"frontmatter":{"sequence":"3","title":"Prepare to Present Your Idea to the Board","type":"child","section":"New Idea Origination"},"fields":{"slug":"/new-idea-origination/03-prepare-to-present/"}}},{"node":{"frontmatter":{"sequence":"3","title":"Setup your Documentation and Shared Processes","type":"child","section":"Planning"},"fields":{"slug":"/planning/03-setup-documentation/"}}},{"node":{"frontmatter":{"sequence":"3","title":"Communicate Roles","type":"child","section":"Recruiting"},"fields":{"slug":"/recruiting/03-communicate-roles/"}}},{"node":{"frontmatter":{"sequence":"3","title":"Have a Clear Start and End Time","type":"child","section":"Day of Event"},"fields":{"slug":"/day-of-event/03-clear-start-and-end/"}}},{"node":{"frontmatter":{"sequence":"4","title":"Plan for the Unexpected","type":"child","section":"Day of Event"},"fields":{"slug":"/day-of-event/04-plan-for-unexpected/"}}},{"node":{"frontmatter":{"sequence":"4","title":"Provide Advance Notice","type":"child","section":"New Idea Origination"},"fields":{"slug":"/new-idea-origination/04-provide-advance-notice/"}}},{"node":{"frontmatter":{"sequence":"4","title":"Before the event: Orient Your Volunteers","type":"child","section":"Recruiting"},"fields":{"slug":"/recruiting/04-orient-volunteers/"}}},{"node":{"frontmatter":{"sequence":"5","title":"Success Metrics","type":"child","section":"Recruiting"},"fields":{"slug":"/recruiting/05-success-metrics/"}}},{"node":{"frontmatter":{"sequence":"5","title":"Empower Others","type":"child","section":"Day of Event"},"fields":{"slug":"/day-of-event/05-empower-others/"}}},{"node":{"frontmatter":{"sequence":"5","title":"Present Your Idea","type":"child","section":"New Idea Origination"},"fields":{"slug":"/new-idea-origination/05-present/"}}}]}}}')},R48M:function(e,t,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},TJpk:function(e,t,n){n("MIFh"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),n("LagC"),n("pS08"),n("sc67"),n("R48M"),n("E5k/"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n("q1tI")),a=f(n("17x9")),c=f(n("8+s/")),u=f(n("bmMU")),s=n("v1p5"),l=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,m,A,h=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(E=h,A=m=function(e){function t(){return p(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,c=e.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=c,t.titleAttributes=r({},a),t));case l.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case l.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=d(o,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=d(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(E,o)},o(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(i.default.Component),m.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=E.peek,m.rewind=function(){var e=E.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},A);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},bmMU:function(e,t,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,s,l=r(t),f=r(n);if(l&&f){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=f)return!1;var d=t instanceof Date,p=n instanceof Date;if(d!=p)return!1;if(d&&p)return t.getTime()==n.getTime();var T=t instanceof RegExp,E=n instanceof RegExp;if(T!=E)return!1;if(T&&E)return t.toString()==n.toString();var m=o(t);if((u=m.length)!==o(n).length)return!1;for(c=u;0!=c--;)if(!i.call(n,m[c]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(s=m[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"dJj+":function(e,t,n){e.exports={root:"nav-module--root--2McOQ",contain:"nav-module--contain--1_eTN",link:"nav-module--link--tjRYz",parentLink:"nav-module--parentLink--3PcSA",childLink:"nav-module--childLink--tUedH",svg:"nav-module--svg--ON7iz"}},"hFT/":function(e,t,n){n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},klQ5:function(e,t,n){var r=n("emib"),o=n("TUPI"),i=n("rjfK").f,a=n("chL8").f,c=n("mhTz"),u=n("lb9j"),s=r.RegExp,l=s,f=s.prototype,d=/a/g,p=/a/g,T=new s(d)!==d;if(n("QPJK")&&(!T||n("96qb")((function(){return p[n("sOol")("match")]=!1,s(d)!=d||s(p)==p||"/a/i"!=s(d,"i")})))){s=function(e,t){var n=this instanceof s,r=c(e),i=void 0===t;return!n&&r&&e.constructor===s&&i?e:o(T?new l(r&&!i?e.source:e,t):l((r=e instanceof s)?e.source:e,r&&i?u.call(e):t),n?this:f,s)};for(var E=function(e){e in s||i(s,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},m=a(l),A=0;m.length>A;)E(m[A++]);f.constructor=s,s.prototype=f,n("IYdN")(r,"RegExp",s)}n("to/b")("RegExp")},v1p5:function(e,t,n){(function(e){n("wZFJ"),n("HQhv"),n("1dPr"),n("JHok"),n("MIFh"),n("sc67"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("OeI1"),n("AqHK"),n("U6Bt"),n("sC2a"),n("E5k/"),n("m210"),n("4DPX"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=u(n("q1tI")),a=u(n("MgzW")),c=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var s,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=m(e,c.TAG_NAMES.TITLE),n=m(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=m(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return m(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},E=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],s=u.toLowerCase();-1===t.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),u=0;u<i.length;u++){var s=i[u],l=(0,a.default)({},o[s],r[s]);o[s]=l}return e}),[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){A(e)}),0)}),h=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,b=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;P(c.TAG_NAMES.BODY,r),P(c.TAG_NAMES.HTML,o),_(d,p);var T={baseTag:O(c.TAG_NAMES.BASE,n),linkTags:O(c.TAG_NAMES.LINK,i),metaTags:O(c.TAG_NAMES.META,a),noscriptTags:O(c.TAG_NAMES.NOSCRIPT,u),scriptTags:O(c.TAG_NAMES.SCRIPT,l),styleTags:O(c.TAG_NAMES.STYLE,f)},E={},m={};Object.keys(T).forEach((function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(m[e]=T[e].oldTags)})),t&&t(),s(e,E,m)},R=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=R(e)),P(c.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var s=a[u],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var f=i.indexOf(s);-1!==f&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},O=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},w=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},I=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,o=M(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=w(n),i=R(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&g(S),e.defer?S=y((function(){b(e,(function(){S=null}))})):(b(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,s=e.scriptTags,l=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:I(c.TAG_NAMES.BASE,t,r),bodyAttributes:I(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:I(c.ATTRIBUTE_NAMES.HTML,o,r),link:I(c.TAG_NAMES.LINK,i,r),meta:I(c.TAG_NAMES.META,a,r),noscript:I(c.TAG_NAMES.NOSCRIPT,u,r),script:I(c.TAG_NAMES.SCRIPT,s,r),style:I(c.TAG_NAMES.STYLE,l,r),title:I(c.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,e),defer:m(e,c.HELMET_PROPS.DEFER),encode:m(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,e),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=v}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("IUVq"),o=n("q1tI"),i=n.n(o),a=n("TJpk"),c=n.n(a),u=function(e){var t=e.description,n=e.lang,o=e.meta,a=e.title,u=r.data.site,s=t||u.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:a,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:a},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.social.twitter},{name:"twitter:title",content:a},{name:"twitter:description",content:s}].concat(o)})};u.defaultProps={lang:"en",meta:[],description:""},t.a=u},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-0c01453eb1909df167f2.js.map