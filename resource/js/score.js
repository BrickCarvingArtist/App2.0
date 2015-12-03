!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";var r=n(28);r.init()},1:function(e,t){e.exports=React},2:function(e,t){"use strict";var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"mobile":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{5}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(e){var t=window.location.search.substr(1).match(new RegExp("(^|&)"+e+"=([^&]*)(&|$)"));return null===t?null:unescape(t[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){var t=this;this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[t.name]=JSON.stringify(e),localStorage[t.name+"_v"]=t.version,t.callback(e)}})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(e){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){e()}},setData:function(e,t){var n=this;return e&&!this.getData()?$.ajax({url:e,success:function(e){n.data=e,t(e)}}):t(this.getData()),this},getData:function(){return this.data}}};e.exports=n},3:function(e,t){e.exports=ReactDOM},4:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Warning=void 0;var c=n(1),l=r(c),s=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={message:e.message},n}return u(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({message:e.message})}},{key:"render",value:function(){return l["default"].createElement("p",{className:"message"},this.state.message)}}]),t}(l["default"].Component);s.defaultProps={message:""},t.Warning=s},28:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var c=n(1),l=r(c),s=n(3),f=r(s),p=n(2),d=n(4),h=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.state={score:0},e.getScore=function(e){return e>10?20:2*e},e}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;$.ajax({type:"post",url:"/api/sign",success:function(t){e.setState({score:e.getScore(parseInt(t.message))}),300===t.code&&f["default"].render(l["default"].createElement(d.Warning,{message:"您今日已签到!"}),document.querySelector(".warning"))}})}},{key:"render",value:function(){return l["default"].createElement("body",null,l["default"].createElement("div",{className:"warning"},l["default"].createElement(d.Warning,null)),l["default"].createElement("div",{className:"sign"},l["default"].createElement("b",null,this.state.score)))}}]),t}(l["default"].Component),m=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={vip:e.vip,name:e.name,score:e.score},n}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;this.refs.btnSign.onclick=function(){p.QueryString("sign")||window.history.pushState({},e.state.title,"?sign=1"),f["default"].render(l["default"].createElement(h,null),document.body)}}},{key:"render",value:function(){var e=this.state;return l["default"].createElement("div",{className:"part1"},l["default"].createElement("p",null,""+e.vip+e.name),l["default"].createElement("p",null,l["default"].createElement("span",null,"我的积分:"),l["default"].createElement("b",null,e.score)),l["default"].createElement("i",{className:"btnSign",ref:"btnSign"}))}}]),t}(l["default"].Component);m.defaultProps={vip:"普通会员",name:"***",score:0};var v=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={time:e.time,value:e.value,detail:e.detail},n}return u(t,e),i(t,[{key:"render",value:function(){var e=this.state;return l["default"].createElement("ul",null,l["default"].createElement("li",null,e.time),l["default"].createElement("li",null,e.value),l["default"].createElement("li",null,e.detail))}}]),t}(l["default"].Component),y=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.state={data:[]},e}return u(t,e),i(t,[{key:"render",value:function(){var e=[],t=this.state.data;return t.length?t.forEach(function(t){e.push(l["default"].createElement(v,{time:t.createDate,value:t.points,detail:t.remark}))}):e=l["default"].createElement("i",{className:"default"}),l["default"].createElement("div",{className:"record"},l["default"].createElement("h1",null,"积分纪录"),l["default"].createElement("ul",null,l["default"].createElement("li",null,"发生时间"),l["default"].createElement("li",null,"变更值"),l["default"].createElement("li",null,"变更详情")),e)}}]),t}(l["default"].Component),b=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;p.QueryString("sign")?this.refs.part1.refs.btnSign.click():!function(){var t=e.refs;$.ajax({type:"post",url:"/api/getauth",success:function(e){t.part1.setState({vip:e.vip,name:e.name})}}),$.ajax({url:"/api/getscore",success:function(e){t.part1.setState({score:JSON.parse(e.other).points}),t.record.setState({data:e.data||[]})}})}()}},{key:"render",value:function(){return l["default"].createElement("body",null,l["default"].createElement(m,{ref:"part1"}),l["default"].createElement("a",{className:"entrance",href:"/activity/score"}),l["default"].createElement(y,{ref:"record"}))}}]),t}(l["default"].Component),g=function w(){p.PageData.setData(null,function(){f["default"].render(l["default"].createElement(b,null),document.body)}).render(w)};t.init=g}});