!function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){var n=r(1),a=n.createClass({displayName:"Info",getInitialState:function(){return{status:this.props.status,title:this.props.title,summary:this.props.summary,time:this.props.time}},render:function(){return n.createElement("section",{className:this.state.status?"unread":""},n.createElement("h1",null,this.state.title),n.createElement("p",null,this.state.summary),n.createElement("span",null,this.state.time))}}),i=n.createClass({displayName:"Page",getInitialState:function(){return{data:this.props.data}},render:function(){var t=[],e=this.state.data;return e.forEach(function(e){t.push(n.createElement(a,{status:e.status,title:e.title,summary:e.summary,time:e.time}))}),n.createElement("body",null,t)}});n.render(n.createElement(i,{data:[{status:1,title:"标题",summary:"简介",time:"2015-11-05"},{status:0,title:"标题",summary:"简介",time:"2015-11-05"},{status:0,title:"标题",summary:"简介",time:"2015-11-05"},{status:1,title:"标题",summary:"简介",time:"2015-11-05"}]}),document.body)},function(t,e){t.exports=React}]);