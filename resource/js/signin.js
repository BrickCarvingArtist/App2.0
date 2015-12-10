!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";var r=n(32);r.init()},1:function(e,t){e.exports=React},2:function(e,t){e.exports=ReactDOM},3:function(e,t){"use strict";var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"mobile":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{5}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(e){var t=window.location.search.substr(1).match(new RegExp("(^|&)"+e+"=([^&]*)(&|$)"));return null===t?null:unescape(t[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){var t=this;this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[t.name]=JSON.stringify(e),localStorage[t.name+"_v"]=t.version,t.callback(e)}})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(e){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){e()}},setData:function(e,t){var n=this;return console.log(123),e&&!this.getData()?$.ajax({url:e,success:function(e){n.data=e,t(e)}}):t(this.getData()),this},getData:function(){return this.data}}};e.exports=n},4:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Warning=void 0;var s=n(1),c=r(s),l=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={message:e.message,autoHide:e.autoHide},n.autoHide=function(){n.state.autoHide&&!function(){var e=setTimeout(function(){clearTimeout(e),n.setState({message:""})},2500)}()},n}return u(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({message:e.message})}},{key:"componentDidMount",value:function(){this.autoHide()}},{key:"shouldComponentUpdate",value:function(e,t){return e.message!==this.props.message||t.message!==this.state.message}},{key:"componentDidUpdate",value:function(){this.autoHide()}},{key:"render",value:function(){return c["default"].createElement("p",{className:"message"},this.state.message)}}]),t}(c["default"].Component);l.defaultProps={message:""},t.Warning=l},11:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Banner=void 0;var s=n(1),c=r(s),l=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={index:n.props.index,href:n.props.href,backgroundImage:n.props.backgroundImage},n}return u(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("a",{href:this.state.href,style:{backgroundImage:"url("+this.state.backgroundImage+")"}})}}]),t}(c["default"].Component);t.Banner=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={index:0,data:n.props.data},n}return u(t,e),i(t,[{key:"render",value:function(){var e=[],t=this.state.data;return t.forEach(function(t,n){e.push(c["default"].createElement(l,{index:n,href:t.href,backgroundImage:t.imgSrc}))}),e.push(c["default"].createElement(l,{index:0,href:t[0].href,backgroundImage:t[0].imgSrc})),c["default"].createElement("header",null,c["default"].createElement("div",{className:"container"},e))}}]),t}(c["default"].Component)},13:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),c=r(s),l=n(2),f=r(l),p=n(4),d=n(3),m=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.state={matched:0},e.handleCheck=function(){return f["default"].render(c["default"].createElement(p.Warning,{message:e.state.matched?"":e.props.placeholder+"输入错误"}),document.querySelector(".warning")),e.state.matched},e}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=f["default"].findDOMNode(this);t.onchange=t.onblur=function(t){e.setState({matched:d.isMatch(e.props.className.split(" ")[1],t.target.value)})}}},{key:"componentDidUpdate",value:function(){this.handleCheck()}},{key:"render",value:function(){return c["default"].createElement("input",{name:this.props.name,type:this.props.type,className:this.props.className,placeholder:this.props.placeholder,maxLength:this.props.maxLength})}}]),t}(c["default"].Component);t["default"]=m},32:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var s=n(1),c=r(s),l=n(2),f=r(l),p=n(3),d=n(11),m=n(4),h=n(13),y=r(h),v=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.refs,n=f["default"].findDOMNode(t.mobile),r=f["default"].findDOMNode(t.password);f["default"].findDOMNode(t.btnSubmit).onclick=function(){var a=1,o=!0,u=!1,i=void 0;try{for(var s,l=e.props.setting[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){var p=s.value;if(!t[p.ref].handleCheck())return void(a=0)}}catch(d){u=!0,i=d}finally{try{!o&&l["return"]&&l["return"]()}finally{if(u)throw i}}a&&$.ajax({type:"post",url:"/api/signin",data:{mobile:n.value,password:r.value},success:function(e){f["default"].render(c["default"].createElement(m.Warning,{message:e.message}),document.querySelector(".warning")),200===e.code&&!function(){var e=setTimeout(function(){clearTimeout(e),window.location.href="/me"},1e3)}()}})}}},{key:"render",value:function(){var e=[],t=this.props.setting;return t.forEach(function(t){e.push(c["default"].createElement(y["default"],{ref:t.ref,name:t.name,type:t.type,className:t.className,placeholder:t.placeholder,maxLength:t.maxLength}))}),c["default"].createElement("form",null,e,c["default"].createElement("a",{href:"/reset"},"忘记密码?"),c["default"].createElement("input",{ref:"btnSubmit",className:"longBtn",type:"button",value:"确认"}),c["default"].createElement("p",null,c["default"].createElement("span",null,"还没账号?"),c["default"].createElement("a",{href:"/signup"},"立即注册")))}}]),t}(c["default"].Component);v.defaultProps={setting:[{ref:"mobile",name:"mobile",type:"tel",className:"longInput mobile",placeholder:"手机号码",maxLength:"11"},{ref:"password",name:"password",type:"password",className:"longInput password",placeholder:"密码",maxLength:"20"}]};var b=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("body",null,c["default"].createElement("div",{className:"warning"},c["default"].createElement(m.Warning,null)),c["default"].createElement(d.Banner,{data:[{href:"/activity/1",imgSrc:"/images/banner/1.png"},{href:"/activity/2",imgSrc:"/images/banner/2.png"},{href:"/activity/3",imgSrc:"/images/banner/3.png"},{href:"/activity/4",imgSrc:"/images/banner/4.png"},{href:"/activity/5",imgSrc:"/images/banner/5.png"}]}),c["default"].createElement(v,null))}}]),t}(c["default"].Component),g=function w(){p.PageData.setData(null,function(){f["default"].render(c["default"].createElement(b,null),document.body)}).render(w)};t.init=g}});