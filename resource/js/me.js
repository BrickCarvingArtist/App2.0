!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(22);r.init()},function(e,t){e.exports=React},function(e,t){"use strict";var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"mobile":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{5}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(e){var t=window.location.search.substr(1).match(new RegExp("(^|&)"+e+"=([^&]*)(&|$)"));return null===t?null:unescape(t[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){var t=this;this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[t.name]=JSON.stringify(e),localStorage[t.name+"_v"]=t.version,t.callback(e)}})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(e){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){e()}},setData:function(e,t){var n=this;return e&&!this.getData()?$.ajax({url:e,success:function(e){n.data=e,t(e)}}):t(this.getData()),this},getData:function(){return this.data}}};e.exports=n},function(e,t){e.exports=ReactDOM},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Dialog=void 0;var l=n(1),c=r(l),s=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={html:e.html},n}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;this.state.html&&(document.querySelector(".shadow").style.display="block");var t=document.querySelector(".shadow");t.onclick=function(){e.props.enableClose&&(t.style.display="none")}}},{key:"componentReceiveProps",value:function(e){this.setState({html:e.html})}},{key:"render",value:function(){return c["default"].createElement("div",{className:"dialog"},this.state.html)}}]),t}(c["default"].Component);s.defaultProps={html:""},t.Dialog=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Menu=void 0;var l=n(1),c=r(l),s=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={currentIndex:e.option.currentIndex,index:e.option.index,href:e.option.href,text:e.option.text},n}return u(t,e),i(t,[{key:"render",value:function(){var e=this.state;return c["default"].createElement("a",{className:e.currentIndex===e.index?"current":"",href:e.href},c["default"].createElement("i",null),c["default"].createElement("span",null,e.text))}}]),t}(c["default"].Component),f=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={href:e.option.href,text:e.option.text},n}return u(t,e),i(t,[{key:"render",value:function(){var e=this.state;return c["default"].createElement("a",{href:e.href},c["default"].createElement("i",null),c["default"].createElement("span",null,e.text))}}]),t}(c["default"].Component),p=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={href:e.option.href,name:e.option.name,value:e.option.value},n}return u(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({href:e.option.href,name:e.option.name,value:e.option.value})}},{key:"render",value:function(){var e=this.state;return c["default"].createElement("a",{href:e.href},c["default"].createElement("h1",null,e.name),c["default"].createElement("h2",null,e.value))}}]),t}(c["default"].Component),d=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={currentIndex:e.currentIndex,menu:function(){var t=void 0;switch(e.type){case 1:t=e.menu1;break;case 2:t=e.menu2;break;case 3:t=e.menu3;break;case 4:t=e.menu4}return t}()},n.getListType=function(e,t){var r=void 0;switch(n.props.type){case 1:r=c["default"].createElement(s,{option:{currentIndex:n.state.currentIndex,index:t,href:e.href,text:e.text}});break;case 2:r=c["default"].createElement(f,{option:{href:e.href,text:e.text}});break;case 3:case 4:r=c["default"].createElement(p,{option:{href:e.href,name:e.name,value:e.value}})}return r},n}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;(3===this.props.type||4===this.props.type)&&$.ajax({type:"post",url:"/api/getinvest",success:function(t){e.setState({menu:{className:e.state.menu.className,option:3===e.props.type?[{href:"/asset",name:"我的资产",value:(t.money+t.investment||0).toFixed(2)},{href:"",name:"预期收益",value:(t.investment||0).toFixed(2)},{href:"/asset?all=1",name:"历史收益",value:(t.allInvestment||0).toFixed(2)}]:[{href:"/asset",name:"我的资产",value:(t.money+t.investment||0).toFixed(2)},{href:"",name:"预期收益",value:(t.investment||0).toFixed(2)}]}})}})}},{key:"render",value:function(){var e=this,t=[],n=this.state.menu;return n.option.forEach(function(n,r){t.push(e.getListType(n,r))}),c["default"].createElement("menu",{className:n.className},t)}}]),t}(c["default"].Component);d.defaultProps={menu1:{className:"footer",option:[{href:"/",text:"首页"},{href:"/product",text:"理财产品"},{href:"/me",text:"我的账户"},{href:"/more",text:"更多"}]},menu2:{className:"menu_3col_anchor",option:[{href:"/bonus",text:"推荐送红包"},{href:"/activity",text:"活动中心"},{href:"/score?sign=1",text:"马上签到"}]},menu3:{className:"menu_3col_infoAnchor",option:[{href:"/asset",name:"我的资产",value:"0.00"},{href:"",name:"预期收益",value:"0.00"},{href:"/asset?all=1",name:"历史收益",value:"0.00"}]},menu4:{className:"menu_2col_infoAnchor",option:[{href:"/asset",name:"我的资产",value:"0.00"},{href:"",name:"预期收益",value:"0.00"}]}},t.Menu=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Info=void 0;var l=n(1),c=r(l),s=n(5),f=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={vip:"普通会员",name:"***"},n}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;$.ajax({url:"/api/getauth",success:function(t){200===t.code?$.ajax({type:"post",url:"/api/getauth",success:function(t){e.setState({vip:t.vip,name:t.name})}}):ReactDOM.render(c["default"].createElement(s.Dialog,{html:c["default"].createElement("a",{className:"longBtn",href:"/signin"},"登录/注册")}),document.querySelector(".shadow"))}})}},{key:"render",value:function(){return c["default"].createElement("div",{className:"info common"},""+this.state.vip+this.state.name+",你好!")}}]),t}(c["default"].Component);f.defaultProps={setting:[{name:"common",value:"普通会员"},{name:"jadeite",value:"翡翠会员"},{name:"platinum",value:"铂金会员"},{name:"diamond",value:"钻石会员"}]},t.Info=f},,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var l=n(1),c=r(l),s=n(3),f=r(s),p=n(2),d=n(6),m=n(5),h=n(7),y=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("a",{className:"option "+this.props.data.className,href:this.props.data.value},c["default"].createElement("i",null),c["default"].createElement("span",null,this.props.data.name))}}]),t}(c["default"].Component),v=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){var e=[],t=this.props.setting;return t.forEach(function(t){e.push(c["default"].createElement(y,{data:t}))}),c["default"].createElement("div",{className:"entrance"},e)}}]),t}(c["default"].Component);v.defaultProps={setting:[{name:"个人信息",className:"account",value:"/basic"},{name:"交易记录",className:"record",value:"/record"},{name:"我的积分",className:"score",value:"/score"},{name:"我的红包",className:"bonus",value:"/bonus"},{name:"我的加息",className:"ticket",value:"/interest"},{name:"我的邀请",className:"invitation",value:"/invite"},{name:"安全中心",className:"safty",value:"/reset"},{name:"消息中心",className:"infoCenter",value:"/infocenter"}]};var g=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("body",null,c["default"].createElement(h.Info,null),c["default"].createElement(d.Menu,{type:3}),c["default"].createElement(v,null),c["default"].createElement(d.Menu,{type:1,currentIndex:2}),c["default"].createElement("div",{className:"shadow"},c["default"].createElement(m.Dialog,null)))}}]),t}(c["default"].Component),b=function w(){p.PageData.setData(null,function(){f["default"].render(c["default"].createElement(g,null),document.body)}).render(w)};t.init=b}]);