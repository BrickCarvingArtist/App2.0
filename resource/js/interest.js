!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var a=n(20);a.init()},function(e,t){e.exports=React},function(e,t){"use strict";var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"mobile":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{5}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(e){var t=window.location.search.substr(1).match(new RegExp("(^|&)"+e+"=([^&]*)(&|$)"));return null===t?null:unescape(t[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){var t=this;this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[t.name]=JSON.stringify(e),localStorage[t.name+"_v"]=t.version,t.callback(e)}})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(e){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){e()}},setData:function(e,t){var n=this;return e&&!this.getData()?$.ajax({url:e,success:function(e){n.data=e,t(e)}}):t(this.getData()),this},getData:function(){return this.data}}};e.exports=n},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Warning=void 0;var i=n(1),c=a(i),s=function(e){function t(e){r(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={message:e.message},n}return u(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({message:e.message})}},{key:"shouldComponentUpdate",value:function(e,t){return e.message!==this.props.message||t.message!==this.state.message}},{key:"render",value:function(){return c["default"].createElement("p",{className:"message"},this.state.message)}}]),t}(c["default"].Component);s.defaultProps={message:""},t.Warning=s},,,,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Tab=void 0;var i=n(1),c=a(i),s=n(3),f=a(s),p=n(2),d=function(e){function t(){r(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.getData=function(t){$.ajax({url:e.props.href,success:function(n){t.setState({currentIndex:e.props.index}),parseInt(p.QueryString("status"))!==e.props.index&&window.history.pushState({},document.title,"/profit?status="+e.props.index),t.props.callback(n,e.props.status)}})},e}return u(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.userClass;f["default"].findDOMNode(this).onclick=function(){e.props.index!==t.state.currentIndex&&e.getData(t)}}},{key:"render",value:function(){var e=this.props.userClass;return this.props.value+0?c["default"].createElement("a",{className:this.props.index===e.state.currentIndex?"current":""},c["default"].createElement("h1",null,this.props.name),c["default"].createElement("h2",null,(this.props.value||0).toFixed(2))):c["default"].createElement("a",{className:this.props.index===e.state.currentIndex?"current":""},this.props.name)}}]),t}(c["default"].Component),m=function(e){function t(e){r(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={currentIndex:e.currentIndex},n}return u(t,e),l(t,[{key:"componentDidMount",value:function(){f["default"].findDOMNode(this.refs["list"+p.QueryString("status")]).click()}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.currentIndex!==t.currentIndex}},{key:"render",value:function(){var e=this,t=[],n=this.props.setting;return n.forEach(function(n,a){t.push(c["default"].createElement(d,{userClass:e,ref:"list"+(a+1),index:a+1,name:n.name,value:n.value,href:n.href,status:a}))}),c["default"].createElement("menu",{className:"tab"},t)}}]),t}(c["default"].Component);m.defaultProps={currentIndex:0},t.Tab=m},,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Content=void 0;var i=n(1),c=a(i),s=function(e){function t(){r(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.getStatus=function(){var t="";switch(e.props.status){case 0:t=e.props.expirationDate+"到期";break;case 1:t="已使用";break;case 2:t="已过期"}return t},e}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props;return c["default"].createElement("section",null,c["default"].createElement("b",null,e.money),c["default"].createElement("p",null,e.name),c["default"].createElement("p",null,c["default"].createElement("span",null,"单笔投资≥"+e.condition+"元"),c["default"].createElement("em",null,this.getStatus())))}}]),t}(c["default"].Component),f=function(e){function t(e){r(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:e.data},n.getClassName=function(){var e="";switch(n.state.status){case 0:e=" available";break;case 1:case 2:e=" unavailable";break;default:e=""}return e},n}return u(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=[],t=this.state.data;return t.length?t.forEach(function(t){e.push(c["default"].createElement(s,{money:t.money,name:t.name,condition:t.conditions,expirationDate:t.expirationDate.split(" ")[0],status:t.status}))}):e[0]=c["default"].createElement("div",{className:"default"}),c["default"].createElement("div",{className:"content "+this.props.type+this.getClassName()},e)}}]),t}(c["default"].Component);t.Content=f},,,,,,,,,,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var i=n(1),c=a(i),s=n(3),f=a(s),p=n(2),d=n(8),m=n(10),h=n(4),v=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return c["default"].createElement("body",null,c["default"].createElement("img",{src:"../images/interestrule.png"}))}}]),t}(c["default"].Component),y=function(e){function t(){r(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.state={data:[]},e}return u(t,e),l(t,[{key:"componentDidMount",value:function(){this.refs.rule.onclick=function(){p.QueryString("rule")||(document.title="加息规则",window.history.pushState({},document.title,"?rule=1")),f["default"].render(c["default"].createElement(v,null),document.body)},p.QueryString("rule")&&this.refs.rule.click()}},{key:"render",value:function(){var e=this;return c["default"].createElement("body",null,c["default"].createElement("div",{className:"warning"},c["default"].createElement(h.Warning,null)),c["default"].createElement("a",{ref:"rule",className:"rule interest"}),c["default"].createElement(d.Tab,{setting:p.QueryString("rule")?[]:[{name:"未使用",href:"/api/getbonus/0"},{name:"已使用",href:"/api/getbonus/1"},{name:"已过期",href:"/api/getbonus/2"}],callback:function(t,n){if(200===t.code)e.setState({data:t.data,status:n});else{var a=document.querySelector(".warning");a&&!function(){f["default"].render(c["default"].createElement(h.Warning,{message:t.message}),a);var e=setTimeout(function(){clearTimeout(e),window.location.href="/signin"},1e3)}()}}}),c["default"].createElement(m.Content,{data:this.state.data,type:"interest",status:this.state.status}))}}]),t}(c["default"].Component),g=function b(){p.PageData.setData(null,function(){f["default"].render(c["default"].createElement(y,null),document.body)}).render(b)};t.init=g}]);