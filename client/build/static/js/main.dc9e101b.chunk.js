(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(51),l=a.n(c),i=a(11),o=a(12),s=a(14),u=a(13),m=a(15),p=a(7),h=a.n(p),f=(a(18),a(17)),b=a(16),d=a(52),E=a(2),v=a.n(E),g=a(10),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/articles");case 2:t=e.sent,console.log(t),a.setState({articles:t.data});case 5:case"end":return e.stop()}}),e)}))),a.onClick=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("/api/articles",{data:{id:t.target.name}});case 2:return n=e.sent,e.next=5,h.a.get("/api/articles");case 5:r=e.sent,a.setState({articles:r.data}),console.log(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Current Articles"),r.a.createElement("div",null,this.state?this.state.articles.map((function(t,a){return r.a.createElement("div",{key:t._id},r.a.createElement(f.b,{to:"/client/articles/".concat(t._id)},t.title," || ",t._id),r.a.createElement("button",{name:t._id,onClick:e.onClick},"x"))})):"no articles just yet..."))}}]),t}(n.Component),y=a(25),O=a.n(y),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).axiosData=Object(g.a)(v.a.mark((function e(){var t,n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/articles/".concat(a.props.data));case 2:return t=e.sent,e.next=5,t.data;case 5:n=e.sent,r=n.article,c=n.title,a.setState({article:r,title:c}),console.log(a.state);case 10:case"end":return e.stop()}}),e)}))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props),this.axiosData()}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement("h1",null,this.state?this.state.title||"no title just yet...":"loading title..."),r.a.createElement(O.a,{className:"Article",source:this.state?this.state.article||"no article just yet...":"loading article..."}))}}]),t}(n.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"UWA Motorsports - EV Showcase"),r.a.createElement("nav",null,r.a.createElement(f.b,{to:"/client/"},"Home"),r.a.createElement(f.b,{to:"/client/articles"},"Articles"),r.a.createElement(f.b,{to:"/client/gallery"},"Gallery"),r.a.createElement(f.b,{to:"/client/create"},"Create an Article")),r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/client/"},r.a.createElement("h1",null,"Home")),r.a.createElement(b.a,{exact:!0,path:"/client/articles"},r.a.createElement(j,null)),r.a.createElement(b.a,{path:"/client/gallery"},r.a.createElement("h1",null,"Gallery")),r.a.createElement(b.a,{path:"/client/create"},r.a.createElement(d.a,null)),r.a.createElement(b.a,{path:"/client/articles/:id",render:function(e){var t=e.match;return r.a.createElement(w,{data:t.params.id})}}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,t,a){"use strict";(function(e){var n=a(2),r=a.n(n),c=a(10),l=a(53),i=a(11),o=a(12),s=a(14),u=a(13),m=a(24),p=a(15),h=a(0),f=a.n(h),b=a(25),d=a.n(b),E=a(18),v=a.n(E),g=a(7),j=a.n(g),y=function(t){function a(t){var n;return Object(i.a)(this,a),(n=Object(s.a)(this,Object(u.a)(a).call(this,t))).onChange=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.onSubmit=function(){var t=Object(c.a)(r.a.mark((function t(a){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),console.log(v.a.join(e,"/api/articles")),t.next=4,j.a.post(v.a.join(e,"/api/articles"),n.state);case 4:return t.sent,t.next=7,j.a.get(v.a.join(e,"/api/articles"));case 7:c=t.sent,console.log(c);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.onUploadChange=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({file:t.target.files[0]});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onSubmitFile=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("photo",n.state.file),e.next=5,j.a.post("/api/images",a);case 5:c=e.sent,console.log(c.data.filename),n.setState({recentFilename:c.data.filename});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onChange=n.onChange.bind(Object(m.a)(n)),n.state={article:"no article"},n}return Object(p.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement("h1",null,"Create a New Article"),f.a.createElement("p",null,"Articles need to be written!!! \ud83e\udd2f"),f.a.createElement("br",null),f.a.createElement("p",null,"Submit an Image"),f.a.createElement("form",null,f.a.createElement("input",{name:"photo",onChange:this.onUploadChange,type:"file"}),f.a.createElement("input",{type:"submit",onClick:this.onSubmitFile})),f.a.createElement("p",null,"copy this URL for the last img: /api/images/".concat(this.state.recentFilename)||!1),f.a.createElement("br",null),f.a.createElement("form",null,f.a.createElement("p",null,"Title"),f.a.createElement("input",{name:"title",type:"text",onChange:this.onChange}),f.a.createElement("p",null,"Article"),f.a.createElement("textarea",{name:"article",onChange:this.onChange}),f.a.createElement("br",null),f.a.createElement("button",{onClick:this.onSubmit},"Submit")),f.a.createElement(d.a,{className:"Article",source:this.state.article||"no article present"}))}}]),a}(h.Component);t.a=y}).call(this,"/")},56:function(e,t,a){e.exports=a(162)}},[[56,1,2]]]);
//# sourceMappingURL=main.dc9e101b.chunk.js.map