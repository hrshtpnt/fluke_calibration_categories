(this["webpackJsonpfluke-calibration-categories"]=this["webpackJsonpfluke-calibration-categories"]||[]).push([[0],{41:function(e,t,a){e.exports=a(52)},46:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),l=(a(46),a(29)),o=a(30),m=a(33),u=a(32),s=a(27),g=a(86),h=a(91),d=a(95),f=a(94),p=a(90),E=a(92),b=a(96),v=a(93),k=(a(47),[{id:"image_uri",label:"IMAGE",minWidth:170,fontWeight:600,align:"center"},{id:"category_name",label:"CATEGORY NAME",minWidth:170,fontWeight:600,align:"center"},{id:"display_name",label:"DISPLAY NAME",minWidth:170,fontWeight:600,align:"center"},{id:"description",label:"DESCRIPTION",minWidth:270,fontWeight:600,align:"center"}]),y=function(e){var t=e.categoriesData,a=void 0===t?[]:t,n=i.a.useState(0),r=Object(s.a)(n,2),c=r[0],l=r[1],o=i.a.useState(5),m=Object(s.a)(o,2),u=m[0],y=m[1];return i.a.createElement(g.a,{className:"root"},i.a.createElement(p.a,{className:"container"},i.a.createElement(h.a,{stickyHeader:!0,"aria-label":"sticky table"},i.a.createElement(E.a,null,i.a.createElement(v.a,null,k.map((function(e){return i.a.createElement(f.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth,fontWeight:e.fontWeight}},e.label)})))),i.a.createElement(d.a,null,a.slice(c*u,c*u+u).map((function(e){return i.a.createElement(v.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},k.map((function(t){var a=e[t.id];return"image_uri"===t.id&&null===a&&(a="https://react.semantic-ui.com/images/wireframe/image.png"),i.a.createElement(f.a,{key:t.id,align:t.align},"image_uri"===t.id?i.a.createElement("img",{alt:"product_image",className:"product_image",src:a}):a)})))}))))),i.a.createElement(b.a,{rowsPerPageOptions:[5,10,25,100],component:"div",count:a.length,rowsPerPage:u,page:c,onChangePage:function(e,t){l(t)},onChangeRowsPerPage:function(e){y(+e.target.value),l(0)}}))},W=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={categoriesData:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.cubyt.io/data/categories").then((function(e){return e.json()})).then((function(t){return e.setState({categoriesData:t})}))}},{key:"render",value:function(){var e=this.state.categoriesData;return i.a.createElement(y,{categoriesData:e})}}]),a}(n.Component);a(51);var O=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},"FLUKE MULTIFUNCTION CALIBRATORS"),i.a.createElement("section",null,i.a.createElement(W,null)),i.a.createElement("footer",null,i.a.createElement("p",null,"Author: Harshit Pant"),i.a.createElement("p",null,i.a.createElement("a",{href:"mailto:hrshtpnt@gmail.com"},"hrshtpnt@gmail.com"))))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(O,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.5a9a3aa1.chunk.js.map