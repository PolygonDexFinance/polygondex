(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[25],{1327:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));var i,o=n(10),c=n(7),r=n(1),l=n(4),u=n(2),d=n(85),a=n(13),s=n(20),j=n(363),b=n(96),O=n(128),x=n(52),f=n(212),h=n(187),p=n(241),m=n(0),v=Object(l.e)(u.t)(i||(i=Object(c.a)(["\n  background-color: ",";\n"])),(function(t){return t.theme.colors.dropdownDeep}));function k(){var t=Object(s.a)().account,e=Object(a.b)().t,n=Object(x.i)(),i=Object(r.useMemo)((function(){return n.map((function(t){return{liquidityToken:Object(x.a)(t),tokens:t}}))}),[n]),c=Object(r.useMemo)((function(){return i.map((function(t){return t.liquidityToken}))}),[i]),l=Object(b.f)(null!==t&&void 0!==t?t:void 0,c),k=Object(o.a)(l,2),y=k[0],g=k[1],q=Object(r.useMemo)((function(){return i.filter((function(t){var e,n=t.liquidityToken;return null===(e=y[n.address])||void 0===e?void 0:e.greaterThan("0")}))}),[i,y]),w=Object(O.c)(q.map((function(t){return t.tokens}))),A=g||(null===w||void 0===w?void 0:w.length)<q.length||(null===w||void 0===w?void 0:w.some((function(t){return!t}))),S=w.map((function(t){return Object(o.a)(t,2)[1]})).filter((function(t){return Boolean(t)}));return Object(m.jsx)(p.a,{children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(h.b,{title:e("Your Liquidity"),subtitle:e("Remove liquidity to receive tokens back")}),Object(m.jsxs)(v,{children:[t?A?Object(m.jsx)(u.ac,{color:"textSubtle",textAlign:"center",children:Object(m.jsx)(f.a,{children:e("Loading")})}):(null===S||void 0===S?void 0:S.length)>0?S.map((function(t,e){return Object(m.jsx)(j.b,{pair:t,mb:e<S.length-1?"16px":0},t.liquidityToken.address)})):Object(m.jsx)(u.ac,{color:"textSubtle",textAlign:"center",children:e("No liquidity found.")}):Object(m.jsx)(u.ac,{color:"textSubtle",textAlign:"center",children:e("Connect to a wallet to view your liquidity.")}),t&&!A&&Object(m.jsxs)(u.S,{flexDirection:"column",alignItems:"center",mt:"24px",children:[Object(m.jsx)(u.ac,{color:"textSubtle",mb:"8px",children:e("Don't see a pool you joined?")}),Object(m.jsx)(u.o,{id:"import-pool-link",variant:"secondary",scale:"sm",as:d.a,to:"/find",children:e("Find other LP tokens")})]})]}),Object(m.jsx)(u.u,{style:{textAlign:"center"},children:Object(m.jsx)(u.o,{id:"join-pool-button",as:d.a,to:"/add",width:"100%",startIcon:Object(m.jsx)(u.a,{color:"white"}),children:e("Add Liquidity")})})]})})}}}]);
//# sourceMappingURL=25.dd72a691.chunk.js.map