!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(8),a=(r.main,r.init);a()},function(e,t){e.exports=React},function(e,t){"use strict";var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"tel":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{6}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},Adaptor:function(e,t){var n;switch(e){case"complexNav":n={supList:[]},t.forEach(function(e,t){1===e.level?(e.subList=[],n.supList.push(e)):n.supList[e.type-1].subList.push(e)})}return n},QueryString:function(e){var t=window.location.search.substr(1).match(new RegExp("(^|&)"+e+"=([^&]*)(&|$)"));return null===t?null:unescape(t[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[this.name]=JSON.stringify(e),localStorage[this.name+"_v"]=this.version,this.callback(e)}.bind(this)})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(e){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){e()}},setData:function(e,t){return e&&!this.getData()?$.ajax({url:e,success:function(e){this.data=e,t(e)}.bind(this)}):t(this.getData()),this},getData:function(){return this.data}}};e.exports=n},function(e,t,n){"use strict";var r=n(1),a=r.createClass({displayName:"Case",getInitialState:function(){return{index:this.props.index,href:this.props.href,backgroundImage:this.props.backgroundImage}},render:function(){return r.createElement("a",{href:this.state.href,style:{backgroundImage:"url("+this.state.backgroundImage+")"}})}}),i=r.createClass({displayName:"Banner",getInitialState:function(){return{index:0,data:this.props.data}},render:function(){var e=[],t=this.state.data;return t.forEach(function(t,n){e.push(r.createElement(a,{index:n,href:t.href,backgroundImage:t.imgSrc}))}),e.push(r.createElement(a,{index:0,href:t[0].href,backgroundImage:t[0].imgSrc})),r.createElement("header",null,r.createElement("div",{className:"container"},e))}});e.exports=i},function(e,t,n){"use strict";var r=n(1),a=r.createClass({displayName:"List1",getInitialState:function(){var e=this.props.option;return{currentIndex:e.currentIndex,index:e.index,href:e.href,text:e.text}},render:function(){var e=this.state;return r.createElement("a",{className:e.currentIndex===e.index?"current":"",href:e.href},r.createElement("i",null),r.createElement("span",null,e.text))}}),i=r.createClass({displayName:"List2",getInitialState:function(){var e=this.props.option;return{href:e.href,text:e.text}},render:function(){var e=this.state;return r.createElement("a",{href:e.href},r.createElement("i",null),r.createElement("span",null,e.text))}}),s=(r.createClass({displayName:"List3",getInitialState:function(){return{}},render:function(){return r.createElement("a",null)}}),r.createClass({displayName:"MenuBar",getClassType:function(e){var t;switch(this.state.type){case 1:t="footer";break;case 2:t="menu_3col_anchor";break;case 3:t="menu_3col"}return t},getListType:function(e,t){var n;switch(this.state.type){case 1:n=r.createElement(a,{option:{currentIndex:this.state.currentIndex,index:t,href:e.href,text:e.text}});break;case 2:n=r.createElement(i,{option:{href:e.href,text:e.text}});break;case 3:}return n},getInitialState:function(){return{currentIndex:this.props.currentIndex,type:this.props.type,option:this.props.option}},render:function(){var e=[],t=this.state.option;return t.forEach(function(t,n){e.push(this.getListType(t,n))}.bind(this)),r.createElement("menu",{className:this.getClassType()},e)}}));e.exports=s},function(e,t,n){"use strict";e.exports={Banner:n(3),Menu:n(4)}},,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.init=t.main=void 0;var c=n(1),u=r(c),l=n(11),p=r(l),f=n(2),m=r(f),h=n(5),d=function(e){function t(e){a(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.state={vip:"普通会员",name:"＊＊＊",setting:[{name:"common",value:"普通会员"},{name:"jadeite",value:"翡翠会员"},{name:"platinum",value:"铂金会员"},{name:"diamond",value:"钻石会员"}]},n}return s(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this;$.ajax({url:"/api/getauth",success:function(t){400!==t.code&&e.setState({vip:t.vip,name:t.name})}})}},{key:"render",value:function(){return u["default"].createElement("div",{className:"info common"},""+this.state.vip+this.state.name+",你好!")}}]),t}(u["default"].Component),g=function(e){function t(){return a(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),o(t,[{key:"render",value:function(){return u["default"].createElement("div",{className:"asset"})}}]),t}(u["default"].Component),v=function(e){function t(){return a(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this;p["default"].findDOMNode(this).onclick=function(){p["default"].render(u["default"].createElement(e.props.data.value,null),document.body)}}},{key:"render",value:function(){return u["default"].createElement("div",{className:"option "+this.props.data.className},u["default"].createElement("i",null),u["default"].createElement("span",null,this.props.data.name))}}]),t}(u["default"].Component),y=function(e){function t(){return a(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),o(t,[{key:"render",value:function(){var e=[],t=this.props.setting;return t.forEach(function(t){e.push(u["default"].createElement(v,{data:t}))}),u["default"].createElement("div",{className:"entrance"},e)}}]),t}(u["default"].Component);y.defaultProps={setting:[{name:"个人信息",className:"account",value:""},{name:"交易记录",className:"record",value:""},{name:"我的积分",className:"score",value:""},{name:"我的红包",className:"bonus",value:""},{name:"我的加息",className:"ticket",value:""},{name:"我的邀请",className:"invitation",value:""},{name:"安全中心",className:"safty",value:""},{name:"消息中心",className:"infoCenter",value:""}]};var x=function(e){function t(){return a(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),o(t,[{key:"render",value:function(){return u["default"].createElement("body",null,u["default"].createElement(d,null),u["default"].createElement(g,null),u["default"].createElement(y,null),u["default"].createElement(h.Menu,{type:1,option:[{href:"/",text:"首页"},{href:"/product",text:"理财产品"},{href:"/me",text:"我的账户"},{href:"/more",text:"更多"}],currentIndex:2}))}}]),t}(u["default"].Component),b=function(e){m["default"].PageData.setData(null,function(){p["default"].render(u["default"].createElement(x,null),document.body)}).render(e)};t.main=x,t.init=b},,,function(e,t){e.exports=ReactDOM}]);