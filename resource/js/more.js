!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(8),a=(r.main,r.init);a()},function(t,e){t.exports=React},function(t,e){"use strict";var n={isMatch:function(t,e){switch(t){case"name":return e.toString().length>>1;case"tel":return e.toString().match(/^1\d{10}$/)?1:0;case"phone":return e.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return e.toString().match(/^\d{6}$/)?1:0;case"password":return e.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return e.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return e.toString().match(/^\d{15,18}$/)?1:0}},Adaptor:function(t,e){var n;switch(t){case"complexNav":n={supList:[]},e.forEach(function(t,e){1===t.level?(t.subList=[],n.supList.push(t)):n.supList[t.type-1].subList.push(t)})}return n},QueryString:function(t){var e=window.location.search.substr(1).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)"));return null===e?null:unescape(e[2])},ParamString:function(){var t=window.location.href,e=window.location.search,n=e?t.split(e)[0].substring(t.split(e)[0].lastIndexOf("/")+1):t.split("/")[t.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(t){this.name=t.name,this.version=t.version,this.url=t.url,this.callback=t.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(t){localStorage[this.name]=JSON.stringify(t),localStorage[this.name+"_v"]=this.version,this.callback(t)}.bind(this)})},getPage:function(t){var e=(t.react,t.reactDOMServer,t.req,t.main);return e},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(t){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){t()}},setData:function(t,e){return t&&!this.getData()?$.ajax({url:t,success:function(t){this.data=t,e(t)}.bind(this)}):e(this.getData()),this},getData:function(){return this.data}}};t.exports=n},function(t,e,n){"use strict";var r=n(1),a=r.createClass({displayName:"Case",getInitialState:function(){return{index:this.props.index,href:this.props.href,backgroundImage:this.props.backgroundImage}},render:function(){return r.createElement("a",{href:this.state.href,style:{backgroundImage:"url("+this.state.backgroundImage+")"}})}}),i=r.createClass({displayName:"Banner",getInitialState:function(){return{index:0,data:this.props.data}},render:function(){var t=[],e=this.state.data;return e.forEach(function(e,n){t.push(r.createElement(a,{index:n,href:e.href,backgroundImage:e.imgSrc}))}),t.push(r.createElement(a,{index:0,href:e[0].href,backgroundImage:e[0].imgSrc})),r.createElement("header",null,r.createElement("div",{className:"container"},t))}});t.exports=i},function(t,e,n){"use strict";var r=n(1),a=r.createClass({displayName:"List1",getInitialState:function(){var t=this.props.option;return{currentIndex:t.currentIndex,index:t.index,href:t.href,text:t.text}},render:function(){var t=this.state;return r.createElement("a",{className:t.currentIndex===t.index?"current":"",href:t.href},r.createElement("i",null),r.createElement("span",null,t.text))}}),i=r.createClass({displayName:"List2",getInitialState:function(){var t=this.props.option;return{href:t.href,text:t.text}},render:function(){var t=this.state;return r.createElement("a",{href:t.href},r.createElement("i",null),r.createElement("span",null,t.text))}}),s=(r.createClass({displayName:"List3",getInitialState:function(){return{}},render:function(){return r.createElement("a",null)}}),r.createClass({displayName:"MenuBar",getClassType:function(t){var e;switch(this.state.type){case 1:e="footer";break;case 2:e="menu_3col_anchor";break;case 3:e="menu_3col"}return e},getListType:function(t,e){var n;switch(this.state.type){case 1:n=r.createElement(a,{option:{currentIndex:this.state.currentIndex,index:e,href:t.href,text:t.text}});break;case 2:n=r.createElement(i,{option:{href:t.href,text:t.text}});break;case 3:}return n},getInitialState:function(){return{currentIndex:this.props.currentIndex,type:this.props.type,option:this.props.option}},render:function(){var t=[],e=this.state.option;return e.forEach(function(e,n){t.push(this.getListType(e,n))}.bind(this)),r.createElement("menu",{className:this.getClassType()},t)}}));t.exports=s},function(t,e,n){"use strict";t.exports={Banner:n(3),Menu:n(4)}},,,function(t,e,n){"use strict";var r=n(1),a=n(2),i=n(5),s=i.Menu,c=r.createClass({displayName:"List",componentDidMount:function(){this.getDOMNode().onclick=function(){$.ajax({url:this.props.data.value,success:function(t){}})}.bind(this)},render:function(){return r.createElement("h1",null,this.props.data.name)}}),o=r.createClass({displayName:"Page",getDefaultProps:function(){return{setting:[{name:"关于喜蓝理财",value:""},{name:"常见问题",value:""},{name:"意见反馈",value:""},{name:"联系客服",value:""}]}},render:function(){var t=[],e=this.props.setting;return e.forEach(function(e){t.push(r.createElement(c,{data:e}))}),r.createElement("body",null,t,r.createElement(s,{type:1,option:[{href:"/",text:"首页"},{href:"/product",text:"理财产品"},{href:"/account",text:"我的账户"},{href:"/more",text:"更多"}],currentIndex:3}))}}),u=function l(){a.PageData.setData(null,function(){document.title="更多",document.body.style.backgroundColor="rgb(244, 244, 244)",r.render(r.createElement(o,null),document.body)}).render(l)};t.exports={main:o,init:u}}]);