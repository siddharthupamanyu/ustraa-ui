(this["webpackJsonpustraa-ui"]=this["webpackJsonpustraa-ui"]||[]).push([[0],{32:function(e,a,t){e.exports=t(41)},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),o=t.n(c),i=t(14),l=t.n(i),s=t(17),u=t(76),m=t(26),d=t(68),p=t(74),g=t(77),h=t(75),f=t(2),v=t(72),b=t(69),E=t(70),w=t(4),y=t(28),x=t(71),_=t(73),k=t(67),O=Object(w.a)((function(e){return{root:{color:e.palette.getContrastText("#73da4d"),backgroundColor:"#73da4d"}}}))(k.a),j=Object(d.a)((function(e){return{card:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38},cardMedia:{height:120,maxWidth:120},button:{display:"block",marginTop:5},price:{textDecoration:"line-through",overflow:"wrap",paddingLeft:5,color:"#9e9e9e",fontSize:12},weight:{fontSize:10}}}));function C(e){var a=j(),t=(Object(y.a)(),e.data),n=t.name,c=t.image_urls,o=t.weight,i=t.weight_unit,l=t.price,s=t.final_price,u=(t.rating,t.is_in_stock);Object(f.a)(t,["name","image_urls","weight","weight_unit","price","final_price","rating","is_in_stock"]);return r.a.createElement(b.a,{className:a.card},r.a.createElement(E.a,{className:a.cardMedia,component:"img",alt:"Contemplative Reptile",height:"140",image:c.x120,title:"Contemplative Reptile"}),r.a.createElement("div",{className:a.details},r.a.createElement(x.a,{className:a.content},r.a.createElement(v.a,{component:"h7",variant:"h7"},n),r.a.createElement(v.a,{className:a.weight,color:"textSecondary"},o?"(".concat(o," ").concat(i,")"):""),r.a.createElement(v.a,{component:"h8",variant:"h8"},"\u20b9 ".concat(s)),r.a.createElement(v.a,{className:a.price,component:"h20",variant:"h20"},"\u20b9 ".concat(l)),r.a.createElement(O,{className:a.button,variant:"contained",color:"primary",disabled:!u},u?"ADD TO CART":"OUT OF STOCK")),r.a.createElement("div",{className:a.controls},r.a.createElement(_.a,{"aria-label":"Previous"}),r.a.createElement(_.a,{"aria-label":"Play/pause"}),r.a.createElement(_.a,{"aria-label":"Next"}))),console.log(n,c))}var N=Object(d.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));function T(e){var a=N(),t=r.a.useState({data:{},value:0}),n=Object(s.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",{className:a.root},r.a.createElement(p.a,{position:"static",color:"default"},r.a.createElement(g.a,{value:c.value,onChange:function(e,a){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.currentTarget.tabIndex,console.log(e.currentTarget),n.next=4,l.a.awrap(fetch("https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=".concat(t)));case 4:n.sent.json().then((function(e){console.log(e),o(Object(m.a)({},c,{data:e,value:a}))}));case 6:case"end":return n.stop()}}))},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},e.data.category_list?e.data.category_list.map((function(e){return console.log(e),r.a.createElement(h.a,{key:e.category_id,tabIndex:e.category_id,label:e.category_name,background:e.category_image})})):"")),c.data.products?c.data.products.map((function(e){return r.a.createElement(C,{data:e,key:e.id})})):"")}function S(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{data:e.data}))}var I=function(){var e=r.a.useState({}),a=Object(s.a)(e,2),t=a[0],n=a[1];return r.a.useEffect((function(){l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(fetch("".concat("https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1","?device_type=mob")));case 2:e.sent.json().then((function(e){n(e)}));case 4:case"end":return e.stop()}}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{maxWidth:"sm"},r.a.createElement(S,{data:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.f5226dab.chunk.js.map