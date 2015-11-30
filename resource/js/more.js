!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(13);r.init()},function(e,t){e.exports=React},function(e,t){"use strict";var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"mobile":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{5}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(e){var t=window.location.search.substr(1).match(new RegExp("(^|&)"+e+"=([^&]*)(&|$)"));return null===t?null:unescape(t[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){var t=this;this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[t.name]=JSON.stringify(e),localStorage[t.name+"_v"]=t.version,t.callback(e)}})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(e){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){e()}},setData:function(e,t){var n=this;return e&&!this.getData()?$.ajax({url:e,success:function(e){n.data=e,t(e)}}):t(this.getData()),this},getData:function(){return this.data}}};e.exports=n},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Dialog=void 0;var s=n(1),c=r(s),l=t.Dialog=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={html:e.html},n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){this.state.html&&(document.querySelector(".shadow").style.display="block")}},{key:"componentReceiveProps",value:function(e){this.setState({html:e.html})}},{key:"render",value:function(){return c["default"].createElement("div",{className:"dialog"},this.state.html)}}]),t}(c["default"].Component);l.defaultProps={html:""}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Menu=void 0;var s=n(1),c=r(s),l=n(4),p=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={currentIndex:e.option.currentIndex,index:e.option.index,href:e.option.href,text:e.option.text},n}return i(t,e),u(t,[{key:"render",value:function(){var e=this.state;return c["default"].createElement("a",{className:e.currentIndex===e.index?"current":"",href:e.href},c["default"].createElement("i",null),c["default"].createElement("span",null,e.text))}}]),t}(c["default"].Component),f=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={href:e.option.href,text:e.option.text},n}return i(t,e),u(t,[{key:"render",value:function(){var e=this.state;return c["default"].createElement("a",{href:e.href},c["default"].createElement("i",null),c["default"].createElement("span",null,e.text))}}]),t}(c["default"].Component),d=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={href:e.option.href,name:e.option.name,value:e.option.value},n}return i(t,e),u(t,[{key:"render",value:function(){var e=this.state;return c["default"].createElement("a",{href:e.href},c["default"].createElement("h1",null,e.name),c["default"].createElement("h2",null,e.value))}}]),t}(c["default"].Component),h=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={currentIndex:e.currentIndex,menu:function(){var t=void 0;switch(e.type){case 1:t=e.menu1;break;case 2:t=e.menu2;break;case 3:t=e.menu3}return t}()},n.getListType=function(e,t){var r=void 0;switch(n.props.type){case 1:r=c["default"].createElement(p,{option:{currentIndex:n.state.currentIndex,index:t,href:e.href,text:e.text}});break;case 2:r=c["default"].createElement(f,{option:{href:e.href,text:e.text}});break;case 3:r=c["default"].createElement(d,{option:{href:e.href,name:e.name,value:e.value}})}return r},n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){3===this.props.type&&$.ajax({type:"post",url:"/api/getinvest",success:function(e){e.message&&ReactDOM.render(c["default"].createElement(l.Dialog,{html:c["default"].createElement("a",{className:"longBtn",href:"/signin"},"登录/注册")}),document.querySelector(".shadow"))}})}},{key:"render",value:function(){var e=this,t=[],n=this.state.menu;return n.option.forEach(function(n,r){t.push(e.getListType(n,r))}),c["default"].createElement("menu",{className:n.className},t)}}]),t}(c["default"].Component);h.defaultProps={menu1:{className:"footer",option:[{href:"/",text:"首页"},{href:"/product",text:"理财产品"},{href:"/me",text:"我的账户"},{href:"/more",text:"更多"}]},menu2:{className:"menu_3col_anchor",option:[{href:"/bonus",text:"推荐送红包"},{href:"/activity",text:"活动中心"},{href:"/score?sign=1",text:"马上签到"}]},menu3:{className:"menu_3col_infoAnchor",option:[{href:"",name:"我的资产",value:"0.00"},{href:"",name:"预期收益",value:"0.00"},{href:"",name:"历史收益",value:"0.00"}]}},t.Menu=h},,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var s=n(1),c=r(s),l=n(3),p=r(l),f=n(2),d=n(5),h=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("body",null,c["default"].createElement("header",null),c["default"].createElement("div",{className:"description"},c["default"].createElement("h1",null,"公司简介"),c["default"].createElement("pre",null,c["default"].createElement("p",null,this.props.description)),c["default"].createElement("img",{src:this.props.imgSrc})))}}]),t}(c["default"].Component);h.defaultProps={description:"	喜蓝理财互联网金融平台由杭州喜马拉雅电子商务有限公司负责运营。喜马拉雅作为启蓝控股集团旗下的子公司之一，于2014年初正式成立，其经营团队由投资理财、线上交易及风险控制等业界一流的专业人士组成。\n	公司经营的理财平台于2015年4月先后被评为“中国互联网金融服务年度最具竞争力品牌”和“中国互联网金融服务年度最具发展潜力平台”。后于2015年6月，公司被评为“2015最具投资价值互联网金融公司”。公司董事长家族世代经商，2011年入驻上海世博会并获评“最浙江家庭”。喜蓝理财秉持并延续家族诚信经营的商业理念，全力为客户打造安全、稳定、高效的理财体验。",imgSrc:"/images/about.png"};var m=function(e){function t(){o(this,t);var e=a(this,Object.getPrototypeOf(t).call(this));return e.checkMarkup=function(e){return{__html:e}},e}return i(t,e),u(t,[{key:"componentDidMount",value:function(){p["default"].findDOMNode(this).onclick=function(){this.status?($(this).removeClass("current"),this.status=0):($("section").removeClass("current"),$(this).addClass("current"),this.status=1)}}},{key:"render",value:function(){return c["default"].createElement("section",null,c["default"].createElement("h1",null,this.props.data.q),c["default"].createElement("pre",null,c["default"].createElement("p",{dangerouslySetInnerHTML:this.checkMarkup(this.props.data.a)})))}}]),t}(c["default"].Component),g=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=[],t=this.props.data;return t.forEach(function(t,n){e.push(c["default"].createElement(m,{data:t,ref:"q"+(n+1)}))}),c["default"].createElement("body",null,e)}}]),t}(c["default"].Component),y=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.data.name,n=this.props.data.value,r=document.body;p["default"].findDOMNode(this).onclick=function(){"string"==typeof n?$.ajax({url:n,success:function(n){document.title=t,f.QueryString("index")||window.history.pushState({},document.title,"?index="+e.props.index),c["default"].render(c["default"].createElement(g,{data:n.data}),r)}}):(c["default"].render(c["default"].createElement(n,null),r),document.title=t,f.QueryString("index")||window.history.pushState({},document.title,"?index="+e.props.index))}}},{key:"render",value:function(){return c["default"].createElement("h1",null,this.props.data.name)}}]),t}(c["default"].Component),b=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("body",null,c["default"].createElement("form",{method:"post",action:"/api/getsuggestion"},c["default"].createElement("textarea",{name:"suggestion",placeholder:"我们很高兴能收到您反馈的意见！"}),c["default"].createElement("input",{className:"longBtn",type:"submit",value:"确定"})))}}]),t}(c["default"].Component),v=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=[],t=this.props.setting;return t.forEach(function(t){e.push(c["default"].createElement("h1",{className:"withIcon"},c["default"].createElement("i",null),c["default"].createElement("a",{href:t.value},t.name)))}),c["default"].createElement("body",null,c["default"].createElement("header",null),c["default"].createElement("div",{className:"tel"},c["default"].createElement("h2",null,"400-052-5522"),c["default"].createElement("p",null,"客服热线 (09:00-21:00)"),c["default"].createElement("a",{className:"longBtn",href:"tel:4000525522"},"拨打客服热线")),e)}}]),t}(c["default"].Component);v.defaultProps={setting:[{name:"微信订阅号:xmlyjr",value:""},{name:"微信订阅号:hi-lend",value:""},{name:"@喜蓝理财",value:""},{name:"4000525522",value:"mqqwpa://im/chat?chat_type=wpa&uin=4000525522"}]};var w=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"componentDidMount",value:function(){f.QueryString("index")&&p["default"].findDOMNode(this.refs["more"+f.QueryString("index")]).click()}},{key:"render",value:function(){var e=[],t=this.props.setting;return t.forEach(function(t,n){e.push(c["default"].createElement(y,{data:t,index:n+1,ref:"more"+(n+1)}))}),c["default"].createElement("body",null,e,c["default"].createElement(d.Menu,{type:1,currentIndex:3}))}}]),t}(c["default"].Component);w.defaultProps={setting:[{name:"关于喜蓝理财",value:h},{name:"常见问题",value:"/api/gethelp"},{name:"意见反馈",value:b},{name:"联系客服",value:v}]};var O=function E(){f.PageData.setData(null,function(){document.title="更多",document.body.style.backgroundColor="rgb(244, 244, 244)",p["default"].render(c["default"].createElement(w,null),document.body)}).render(E)};t.init=O}]);