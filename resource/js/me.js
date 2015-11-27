!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(11);r.init()},function(t,e){t.exports=React},function(t,e){"use strict";var n={isMatch:function(t,e){switch(t){case"name":return e.toString().length>>1;case"tel":return e.toString().match(/^1\d{10}$/)?1:0;case"phone":return e.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return e.toString().match(/^\d{6}$/)?1:0;case"password":return e.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return e.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return e.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(t){var e=window.location.search.substr(1).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)"));return null===e?null:unescape(e[2])},ParamString:function(){var t=window.location.href,e=window.location.search,n=e?t.split(e)[0].substring(t.split(e)[0].lastIndexOf("/")+1):t.split("/")[t.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(t){var e=this;this.name=t.name,this.version=t.version,this.url=t.url,this.callback=t.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(t){localStorage[e.name]=JSON.stringify(t),localStorage[e.name+"_v"]=e.version,e.callback(t)}})},getPage:function(t){var e=(t.react,t.reactDOMServer,t.req,t.main);return e},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(t){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){t()}},setData:function(t,e){var n=this;return t&&!this.getData()?$.ajax({url:t,success:function(t){n.data=t,e(t)}}):e(this.getData()),this},getData:function(){return this.data}}};t.exports=n},function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.Dialog=void 0;var s=n(1),c=r(s),l=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={html:t.html},n}return u(e,t),i(e,[{key:"componentDidMount",value:function(){this.state.html&&(document.querySelector(".shadow").style.display="block")}},{key:"componentReceiveProps",value:function(t){this.setState({html:t.html})}},{key:"render",value:function(){return c["default"].createElement("div",{className:"dialog"},this.state.html)}}]),e}(c["default"].Component);l.defaultProps={html:""},e.Dialog=l},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.Menu=void 0;var s=n(1),c=r(s),l=n(4),p=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={currentIndex:t.option.currentIndex,index:t.option.index,href:t.option.href,text:t.option.text},n}return u(e,t),i(e,[{key:"render",value:function(){var t=this.state;return c["default"].createElement("a",{className:t.currentIndex===t.index?"current":"",href:t.href},c["default"].createElement("i",null),c["default"].createElement("span",null,t.text))}}]),e}(c["default"].Component),f=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={href:t.option.href,text:t.option.text},n}return u(e,t),i(e,[{key:"render",value:function(){var t=this.state;return c["default"].createElement("a",{href:t.href},c["default"].createElement("i",null),c["default"].createElement("span",null,t.text))}}]),e}(c["default"].Component),d=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={href:t.option.href,name:t.option.name,value:t.option.value},n}return u(e,t),i(e,[{key:"render",value:function(){var t=this.state;return c["default"].createElement("a",{href:t.href},c["default"].createElement("h1",null,t.name),c["default"].createElement("h2",null,t.value))}}]),e}(c["default"].Component),h=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={currentIndex:t.currentIndex,menu:function(){var e=void 0;switch(t.type){case 1:e=t.menu1;break;case 2:e=t.menu2;break;case 3:e=t.menu3}return e}()},n.getListType=function(t,e){var r=void 0;switch(n.props.type){case 1:r=c["default"].createElement(p,{option:{currentIndex:n.state.currentIndex,index:e,href:t.href,text:t.text}});break;case 2:r=c["default"].createElement(f,{option:{href:t.href,text:t.text}});break;case 3:r=c["default"].createElement(d,{option:{href:t.href,name:t.name,value:t.value}})}return r},n}return u(e,t),i(e,[{key:"componentDidMount",value:function(){3===this.props.type&&$.ajax({type:"post",url:"/api/getinvest",success:function(t){t.message&&ReactDOM.render(c["default"].createElement(l.Dialog,{html:c["default"].createElement("a",{className:"longBtn",href:"/signin"},"登录/注册")}),document.querySelector(".shadow"))}})}},{key:"render",value:function(){var t=this,e=[],n=this.state.menu;return n.option.forEach(function(n,r){e.push(t.getListType(n,r))}),c["default"].createElement("menu",{className:n.className},e)}}]),e}(c["default"].Component);h.defaultProps={menu1:{className:"footer",option:[{href:"/",text:"首页"},{href:"/product",text:"理财产品"},{href:"/me",text:"我的账户"},{href:"/more",text:"更多"}]},menu2:{className:"menu_3col_anchor",option:[{href:"/bonus",text:"推荐送红包"},{href:"/activity",text:"活动中心"},{href:"/score?sign=1",text:"马上签到"}]},menu3:{className:"menu_3col_infoAnchor",option:[{href:"",name:"我的资产",value:"0.00"},{href:"",name:"预期收益",value:"0.00"},{href:"",name:"历史收益",value:"0.00"}]}},e.Menu=h},,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.init=void 0;var s=n(1),c=r(s),l=n(3),p=r(l),f=n(2),d=n(5),h=n(4),g=function(t){function e(){o(this,e);var t=a(this,Object.getPrototypeOf(e).call(this));return t.state={vip:"普通会员",name:"＊＊＊",setting:[{name:"common",value:"普通会员"},{name:"jadeite",value:"翡翠会员"},{name:"platinum",value:"铂金会员"},{name:"diamond",value:"钻石会员"}]},t}return u(e,t),i(e,[{key:"componentDidMount",value:function(){var t=this;$.ajax({url:"/api/getauth",success:function(e){400!==e.code&&t.setState({vip:e.vip,name:e.name})}})}},{key:"render",value:function(){return c["default"].createElement("div",{className:"info common"},""+this.state.vip+this.state.name+",你好!")}}]),e}(c["default"].Component),m=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return u(e,t),i(e,[{key:"render",value:function(){return c["default"].createElement("a",{className:"option "+this.props.data.className,href:this.props.data.value},c["default"].createElement("i",null),c["default"].createElement("span",null,this.props.data.name))}}]),e}(c["default"].Component),y=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return u(e,t),i(e,[{key:"render",value:function(){var t=[],e=this.props.setting;return e.forEach(function(e){t.push(c["default"].createElement(m,{data:e}))}),c["default"].createElement("div",{className:"entrance"},t)}}]),e}(c["default"].Component);y.defaultProps={setting:[{name:"个人信息",className:"account",value:""},{name:"交易记录",className:"record",value:""},{name:"我的积分",className:"score",value:""},{name:"我的红包",className:"bonus",value:""},{name:"我的加息",className:"ticket",value:""},{name:"我的邀请",className:"invitation",value:""},{name:"安全中心",className:"safty",value:""},{name:"消息中心",className:"infoCenter",value:"/infocenter"}]};var b=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return u(e,t),i(e,[{key:"render",value:function(){return c["default"].createElement("body",null,c["default"].createElement(g,null),c["default"].createElement(d.Menu,{type:3}),c["default"].createElement(y,null),c["default"].createElement(d.Menu,{type:1,currentIndex:2}),c["default"].createElement("div",{className:"shadow"},c["default"].createElement(h.Dialog,null)))}}]),e}(c["default"].Component),v=function w(){f.PageData.setData(null,function(){p["default"].render(c["default"].createElement(b,null),document.body)}).render(w)};e.init=v}]);