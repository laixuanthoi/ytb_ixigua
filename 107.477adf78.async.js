(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[107],{57254:function(ge,q,u){"use strict";u.d(q,{Z:function(){return se}});var z=u(63804),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},t=x,v=u(27029),Q=function(le,$){return z.createElement(v.Z,Object.assign({},le,{ref:$,icon:t}))};Q.displayName="DownOutlined";var se=z.forwardRef(Q)},49101:function(ge,q,u){"use strict";u.d(q,{Z:function(){return se}});var z=u(63804),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},t=x,v=u(27029),Q=function(le,$){return z.createElement(v.Z,Object.assign({},le,{ref:$,icon:t}))};Q.displayName="PlusOutlined";var se=z.forwardRef(Q)},3749:function(){},51752:function(ge,q,u){"use strict";u.d(q,{Z:function(){return ta}});var z=u(22122),x=u(96156),t=u(63804),v=u(28481),Q=u(90484),se=u(81253),V=u(28991),le=u(94184),$=u.n(le),It=u(50344),Nt=u(31131),He=u(21770),ze=u(85061),ce=u(75164),je=u(4084);function Ve(e){var i=(0,t.useRef)(),n=(0,t.useRef)(!1);function r(){for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];n.current||(ce.Z.cancel(i.current),i.current=(0,ce.Z)(function(){e.apply(void 0,o)}))}return(0,t.useEffect)(function(){return function(){n.current=!0,ce.Z.cancel(i.current)}},[]),r}function wt(e){var i=(0,t.useRef)([]),n=(0,t.useState)({}),r=(0,v.Z)(n,2),a=r[1],o=(0,t.useRef)(typeof e=="function"?e():e),c=Ve(function(){var s=o.current;i.current.forEach(function(g){s=g(s)}),i.current=[],o.current=s,a({})});function d(s){i.current.push(s),c()}return[o.current,d]}var X=u(15105);function kt(e,i){var n,r=e.prefixCls,a=e.id,o=e.active,c=e.rtl,d=e.tab,s=d.key,g=d.tab,f=d.disabled,b=d.closeIcon,S=e.tabBarGutter,w=e.tabPosition,I=e.closable,h=e.renderWrapper,D=e.removeAriaLabel,O=e.editable,k=e.onClick,E=e.onRemove,T=e.onFocus,M="".concat(r,"-tab");t.useEffect(function(){return E},[]);var P={};w==="top"||w==="bottom"?P[c?"marginRight":"marginLeft"]=S:P.marginTop=S;var j=O&&I!==!1&&!f;function A(p){f||k(p)}function Z(p){p.preventDefault(),p.stopPropagation(),O.onEdit("remove",{key:s,event:p})}var C=t.createElement("div",{key:s,ref:i,className:$()(M,(n={},(0,x.Z)(n,"".concat(M,"-with-remove"),j),(0,x.Z)(n,"".concat(M,"-active"),o),(0,x.Z)(n,"".concat(M,"-disabled"),f),n)),style:P,onClick:A},t.createElement("div",{role:"tab","aria-selected":o,id:a&&"".concat(a,"-tab-").concat(s),className:"".concat(M,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(s),"aria-disabled":f,tabIndex:f?null:0,onClick:function(l){l.stopPropagation(),A(l)},onKeyDown:function(l){[X.Z.SPACE,X.Z.ENTER].includes(l.which)&&(l.preventDefault(),A(l))},onFocus:T},g),j&&t.createElement("button",{type:"button","aria-label":D||"remove",tabIndex:0,className:"".concat(M,"-remove"),onClick:function(l){l.stopPropagation(),Z(l)}},b||O.removeIcon||"\xD7"));return h&&(C=h(C)),C}var Mt=t.forwardRef(kt),Fe={width:0,height:0,left:0,top:0};function Ot(e,i,n){return(0,t.useMemo)(function(){for(var r,a=new Map,o=i.get((r=e[0])===null||r===void 0?void 0:r.key)||Fe,c=o.left+o.width,d=0;d<e.length;d+=1){var s=e[d].key,g=i.get(s);if(!g){var f;g=i.get((f=e[d-1])===null||f===void 0?void 0:f.key)||Fe}var b=a.get(s)||(0,V.Z)({},g);b.right=c-b.left-b.width,a.set(s,b)}return a},[e.map(function(r){return r.key}).join("_"),i,n])}var Ge={width:0,height:0,left:0,top:0,right:0};function At(e,i,n,r,a){var o=a.tabs,c=a.tabPosition,d=a.rtl,s,g,f;["top","bottom"].includes(c)?(s="width",g=d?"right":"left",f=Math.abs(i.left)):(s="height",g="top",f=-i.top);var b=i[s],S=n[s],w=r[s],I=b;return S+w>b&&(I=b-w),(0,t.useMemo)(function(){if(!o.length)return[0,0];for(var h=o.length,D=h,O=0;O<h;O+=1){var k=e.get(o[O].key)||Ge;if(k[g]+k[s]>f+I){D=O-1;break}}for(var E=0,T=h-1;T>=0;T-=1){var M=e.get(o[T].key)||Ge;if(M[g]<f){E=T+1;break}}return[E,D]},[e,f,I,c,o.map(function(h){return h.key}).join("_"),d])}var Ue=u(10985),Lt=u(70271);function Bt(e,i){var n=e.prefixCls,r=e.editable,a=e.locale,o=e.style;return!r||r.showAdd===!1?null:t.createElement("button",{ref:i,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(a==null?void 0:a.addAriaLabel)||"Add tab",onClick:function(d){r.onEdit("add",{event:d})}},r.addIcon||"+")}var Ye=t.forwardRef(Bt);function Wt(e,i){var n=e.prefixCls,r=e.id,a=e.tabs,o=e.locale,c=e.mobile,d=e.moreIcon,s=d===void 0?"More":d,g=e.moreTransitionName,f=e.style,b=e.className,S=e.editable,w=e.tabBarGutter,I=e.rtl,h=e.onTabClick,D=(0,t.useState)(!1),O=(0,v.Z)(D,2),k=O[0],E=O[1],T=(0,t.useState)(null),M=(0,v.Z)(T,2),P=M[0],j=M[1],A="".concat(r,"-more-popup"),Z="".concat(n,"-dropdown"),C=P!==null?"".concat(A,"-").concat(P):null,p=o==null?void 0:o.dropdownAriaLabel,l=t.createElement(Ue.ZP,{onClick:function(W){var F=W.key,G=W.domEvent;h(F,G),E(!1)},id:A,tabIndex:-1,role:"listbox","aria-activedescendant":C,selectedKeys:[P],"aria-label":p!==void 0?p:"expanded dropdown"},a.map(function(N){return t.createElement(Ue.sN,{key:N.key,id:"".concat(A,"-").concat(N.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(N.key),disabled:N.disabled},N.tab)}));function R(N){for(var W=a.filter(function(te){return!te.disabled}),F=W.findIndex(function(te){return te.key===P})||0,G=W.length,ee=0;ee<G;ee+=1){F=(F+N+G)%G;var U=W[F];if(!U.disabled){j(U.key);return}}}function L(N){var W=N.which;if(!k){[X.Z.DOWN,X.Z.SPACE,X.Z.ENTER].includes(W)&&(E(!0),N.preventDefault());return}switch(W){case X.Z.UP:R(-1),N.preventDefault();break;case X.Z.DOWN:R(1),N.preventDefault();break;case X.Z.ESC:E(!1);break;case X.Z.SPACE:case X.Z.ENTER:P!==null&&h(P,N);break}}(0,t.useEffect)(function(){var N=document.getElementById(C);N&&N.scrollIntoView&&N.scrollIntoView(!1)},[P]),(0,t.useEffect)(function(){k||j(null)},[k]);var B=(0,x.Z)({},I?"marginRight":"marginLeft",w);a.length||(B.visibility="hidden",B.order=1);var _=$()((0,x.Z)({},"".concat(Z,"-rtl"),I)),ne=c?null:t.createElement(Lt.Z,{prefixCls:Z,overlay:l,trigger:["hover"],visible:k,transitionName:g,onVisibleChange:E,overlayClassName:_,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:B,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":A,id:"".concat(r,"-more"),"aria-expanded":k,onKeyDown:L},s));return t.createElement("div",{className:$()("".concat(n,"-nav-operations"),b),style:f,ref:i},ne,t.createElement(Ye,{prefixCls:n,locale:o,editable:S}))}var Dt=t.forwardRef(Wt),Ne=(0,t.createContext)(null),Kt=.1,Xe=.01,Se=20,Je=Math.pow(.995,Se);function $t(e,i){var n=(0,t.useState)(),r=(0,v.Z)(n,2),a=r[0],o=r[1],c=(0,t.useState)(0),d=(0,v.Z)(c,2),s=d[0],g=d[1],f=(0,t.useState)(0),b=(0,v.Z)(f,2),S=b[0],w=b[1],I=(0,t.useState)(),h=(0,v.Z)(I,2),D=h[0],O=h[1],k=(0,t.useRef)();function E(Z){var C=Z.touches[0],p=C.screenX,l=C.screenY;o({x:p,y:l}),window.clearInterval(k.current)}function T(Z){if(!!a){Z.preventDefault();var C=Z.touches[0],p=C.screenX,l=C.screenY;o({x:p,y:l});var R=p-a.x,L=l-a.y;i(R,L);var B=Date.now();g(B),w(B-s),O({x:R,y:L})}}function M(){if(!!a&&(o(null),O(null),D)){var Z=D.x/S,C=D.y/S,p=Math.abs(Z),l=Math.abs(C);if(Math.max(p,l)<Kt)return;var R=Z,L=C;k.current=window.setInterval(function(){if(Math.abs(R)<Xe&&Math.abs(L)<Xe){window.clearInterval(k.current);return}R*=Je,L*=Je,i(R*Se,L*Se)},Se)}}var P=(0,t.useRef)();function j(Z){var C=Z.deltaX,p=Z.deltaY,l=0,R=Math.abs(C),L=Math.abs(p);R===L?l=P.current==="x"?C:p:R>L?(l=C,P.current="x"):(l=p,P.current="y"),i(-l,-l)&&Z.preventDefault()}var A=(0,t.useRef)(null);A.current={onTouchStart:E,onTouchMove:T,onTouchEnd:M,onWheel:j},t.useEffect(function(){function Z(R){A.current.onTouchStart(R)}function C(R){A.current.onTouchMove(R)}function p(R){A.current.onTouchEnd(R)}function l(R){A.current.onWheel(R)}return document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",p,{passive:!1}),e.current.addEventListener("touchstart",Z,{passive:!1}),e.current.addEventListener("wheel",l),function(){document.removeEventListener("touchmove",C),document.removeEventListener("touchend",p)}},[])}function Ht(){var e=(0,t.useRef)(new Map);function i(r){return e.current.has(r)||e.current.set(r,t.createRef()),e.current.get(r)}function n(r){e.current.delete(r)}return[i,n]}function Qe(e,i){var n=t.useRef(e),r=t.useState({}),a=(0,v.Z)(r,2),o=a[1];function c(d){var s=typeof d=="function"?d(n.current):d;s!==n.current&&i(s,n.current),n.current=s,o({})}return[n.current,c]}var qe=function(i){var n=i.position,r=i.prefixCls,a=i.extra;if(!a)return null;var o,c=a;return n==="right"&&(o=c.right||!c.left&&c||null),n==="left"&&(o=c.left||null),o?t.createElement("div",{className:"".concat(r,"-extra-content")},o):null};function zt(e,i){var n,r=t.useContext(Ne),a=r.prefixCls,o=r.tabs,c=e.className,d=e.style,s=e.id,g=e.animated,f=e.activeKey,b=e.rtl,S=e.extra,w=e.editable,I=e.locale,h=e.tabPosition,D=e.tabBarGutter,O=e.children,k=e.onTabClick,E=e.onTabScroll,T=(0,t.useRef)(),M=(0,t.useRef)(),P=(0,t.useRef)(),j=(0,t.useRef)(),A=Ht(),Z=(0,v.Z)(A,2),C=Z[0],p=Z[1],l=h==="top"||h==="bottom",R=Qe(0,function(y,m){l&&E&&E({direction:y>m?"left":"right"})}),L=(0,v.Z)(R,2),B=L[0],_=L[1],ne=Qe(0,function(y,m){!l&&E&&E({direction:y>m?"top":"bottom"})}),N=(0,v.Z)(ne,2),W=N[0],F=N[1],G=(0,t.useState)(0),ee=(0,v.Z)(G,2),U=ee[0],te=ee[1],Ee=(0,t.useState)(0),xe=(0,v.Z)(Ee,2),ue=xe[0],Ce=xe[1],we=(0,t.useState)(0),Te=(0,v.Z)(we,2),de=Te[0],ke=Te[1],Ze=(0,t.useState)(0),oe=(0,v.Z)(Ze,2),Re=oe[0],K=oe[1],re=(0,t.useState)(null),Pe=(0,v.Z)(re,2),J=Pe[0],aa=Pe[1],na=(0,t.useState)(null),rt=(0,v.Z)(na,2),ie=rt[0],ra=rt[1],oa=(0,t.useState)(0),ot=(0,v.Z)(oa,2),ia=ot[0],sa=ot[1],la=(0,t.useState)(0),it=(0,v.Z)(la,2),ca=it[0],ua=it[1],da=wt(new Map),st=(0,v.Z)(da,2),va=st[0],fa=st[1],Ie=Ot(o,va,U),lt="".concat(a,"-nav-operations-hidden"),ve=0,fe=0;l?b?(ve=0,fe=Math.max(0,U-J)):(ve=Math.min(0,J-U),fe=0):(ve=Math.min(0,ie-ue),fe=0);function Me(y){return y<ve?ve:y>fe?fe:y}var ct=(0,t.useRef)(),ma=(0,t.useState)(),ut=(0,v.Z)(ma,2),Oe=ut[0],dt=ut[1];function Ae(){dt(Date.now())}function Le(){window.clearTimeout(ct.current)}$t(T,function(y,m){function H(Y,be){Y(function(he){var pe=Me(he+be);return pe})}if(l){if(J>=U)return!1;H(_,y)}else{if(ie>=ue)return!1;H(F,m)}return Le(),Ae(),!0}),(0,t.useEffect)(function(){return Le(),Oe&&(ct.current=window.setTimeout(function(){dt(0)},100)),Le},[Oe]);function vt(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:f,m=Ie.get(y)||{width:0,height:0,left:0,right:0,top:0};if(l){var H=B;b?m.right<B?H=m.right:m.right+m.width>B+J&&(H=m.right+m.width-J):m.left<-B?H=-m.left:m.left+m.width>-B+J&&(H=-(m.left+m.width-J)),F(0),_(Me(H))}else{var Y=W;m.top<-W?Y=-m.top:m.top+m.height>-W+ie&&(Y=-(m.top+m.height-ie)),_(0),F(Me(Y))}}var ba=At(Ie,{width:J,height:ie,left:B,top:W},{width:de,height:Re},{width:ia,height:ca},(0,V.Z)((0,V.Z)({},e),{},{tabs:o})),ft=(0,v.Z)(ba,2),ha=ft[0],pa=ft[1],ya=o.map(function(y){var m=y.key;return t.createElement(Mt,{id:s,prefixCls:a,key:m,rtl:b,tab:y,closable:y.closable,editable:w,active:m===f,tabPosition:h,tabBarGutter:D,renderWrapper:O,removeAriaLabel:I==null?void 0:I.removeAriaLabel,ref:C(m),onClick:function(Y){k(m,Y)},onRemove:function(){p(m)},onFocus:function(){vt(m),Ae(),b||(T.current.scrollLeft=0),T.current.scrollTop=0}})}),Be=Ve(function(){var y,m,H,Y,be,he,pe,Ke,$e,Ta=((y=T.current)===null||y===void 0?void 0:y.offsetWidth)||0,Za=((m=T.current)===null||m===void 0?void 0:m.offsetHeight)||0,Et=((H=j.current)===null||H===void 0?void 0:H.offsetWidth)||0,xt=((Y=j.current)===null||Y===void 0?void 0:Y.offsetHeight)||0,Ra=((be=P.current)===null||be===void 0?void 0:be.offsetWidth)||0,Pa=((he=P.current)===null||he===void 0?void 0:he.offsetHeight)||0;aa(Ta),ra(Za),sa(Et),ua(xt);var Ct=(((pe=M.current)===null||pe===void 0?void 0:pe.offsetWidth)||0)-Et,Tt=(((Ke=M.current)===null||Ke===void 0?void 0:Ke.offsetHeight)||0)-xt;te(Ct),Ce(Tt);var Zt=($e=P.current)===null||$e===void 0?void 0:$e.className.includes(lt);ke(Ct-(Zt?0:Ra)),K(Tt-(Zt?0:Pa)),fa(function(){var Rt=new Map;return o.forEach(function(Ia){var Pt=Ia.key,ye=C(Pt).current;ye&&Rt.set(Pt,{width:ye.offsetWidth,height:ye.offsetHeight,left:ye.offsetLeft,top:ye.offsetTop})}),Rt})}),ga=o.slice(0,ha),Sa=o.slice(pa+1),mt=[].concat((0,ze.Z)(ga),(0,ze.Z)(Sa)),Ea=(0,t.useState)(),bt=(0,v.Z)(Ea,2),xa=bt[0],Ca=bt[1],ae=Ie.get(f),ht=(0,t.useRef)();function pt(){ce.Z.cancel(ht.current)}(0,t.useEffect)(function(){var y={};return ae&&(l?(b?y.right=ae.right:y.left=ae.left,y.width=ae.width):(y.top=ae.top,y.height=ae.height)),pt(),ht.current=(0,ce.Z)(function(){Ca(y)}),pt},[ae,l,b]),(0,t.useEffect)(function(){vt()},[f,ae,Ie,l]),(0,t.useEffect)(function(){Be()},[b,D,f,o.map(function(y){return y.key}).join("_")]);var yt=!!mt.length,me="".concat(a,"-nav-wrap"),We,De,gt,St;return l?b?(De=B>0,We=B+J<U):(We=B<0,De=-B+J<U):(gt=W<0,St=-W+ie<ue),t.createElement("div",{ref:i,role:"tablist",className:$()("".concat(a,"-nav"),c),style:d,onKeyDown:function(){Ae()}},t.createElement(qe,{position:"left",extra:S,prefixCls:a}),t.createElement(je.Z,{onResize:Be},t.createElement("div",{className:$()(me,(n={},(0,x.Z)(n,"".concat(me,"-ping-left"),We),(0,x.Z)(n,"".concat(me,"-ping-right"),De),(0,x.Z)(n,"".concat(me,"-ping-top"),gt),(0,x.Z)(n,"".concat(me,"-ping-bottom"),St),n)),ref:T},t.createElement(je.Z,{onResize:Be},t.createElement("div",{ref:M,className:"".concat(a,"-nav-list"),style:{transform:"translate(".concat(B,"px, ").concat(W,"px)"),transition:Oe?"none":void 0}},ya,t.createElement(Ye,{ref:j,prefixCls:a,locale:I,editable:w,style:{visibility:yt?"hidden":null}}),t.createElement("div",{className:$()("".concat(a,"-ink-bar"),(0,x.Z)({},"".concat(a,"-ink-bar-animated"),g.inkBar)),style:xa}))))),t.createElement(Dt,(0,z.Z)({},e,{ref:P,prefixCls:a,tabs:mt,className:!yt&&lt})),t.createElement(qe,{position:"right",extra:S,prefixCls:a}))}var _e=t.forwardRef(zt);function jt(e){var i=e.id,n=e.activeKey,r=e.animated,a=e.tabPosition,o=e.rtl,c=e.destroyInactiveTabPane,d=t.useContext(Ne),s=d.prefixCls,g=d.tabs,f=r.tabPane,b=g.findIndex(function(S){return S.key===n});return t.createElement("div",{className:$()("".concat(s,"-content-holder"))},t.createElement("div",{className:$()("".concat(s,"-content"),"".concat(s,"-content-").concat(a),(0,x.Z)({},"".concat(s,"-content-animated"),f)),style:b&&f?(0,x.Z)({},o?"marginRight":"marginLeft","-".concat(b,"00%")):null},g.map(function(S){return t.cloneElement(S.node,{key:S.key,prefixCls:s,tabKey:S.key,id:i,animated:f,active:S.key===n,destroyInactiveTabPane:c})})))}function et(e){var i=e.prefixCls,n=e.forceRender,r=e.className,a=e.style,o=e.id,c=e.active,d=e.animated,s=e.destroyInactiveTabPane,g=e.tabKey,f=e.children,b=t.useState(n),S=(0,v.Z)(b,2),w=S[0],I=S[1];t.useEffect(function(){c?I(!0):s&&I(!1)},[c,s]);var h={};return c||(d?(h.visibility="hidden",h.height=0,h.overflowY="hidden"):h.display="none"),t.createElement("div",{id:o&&"".concat(o,"-panel-").concat(g),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(g),"aria-hidden":!c,style:(0,V.Z)((0,V.Z)({},h),a),className:$()("".concat(i,"-tabpane"),c&&"".concat(i,"-tabpane-active"),r)},(c||w||n)&&f)}var tt=0;function Vt(e){return(0,It.Z)(e).map(function(i){if(t.isValidElement(i)){var n=i.key!==void 0?String(i.key):void 0;return(0,V.Z)((0,V.Z)({key:n},i.props),{},{node:i})}return null}).filter(function(i){return i})}function Ft(e,i){var n,r=e.id,a=e.prefixCls,o=a===void 0?"rc-tabs":a,c=e.className,d=e.children,s=e.direction,g=e.activeKey,f=e.defaultActiveKey,b=e.editable,S=e.animated,w=S===void 0?{inkBar:!0,tabPane:!1}:S,I=e.tabPosition,h=I===void 0?"top":I,D=e.tabBarGutter,O=e.tabBarStyle,k=e.tabBarExtraContent,E=e.locale,T=e.moreIcon,M=e.moreTransitionName,P=e.destroyInactiveTabPane,j=e.renderTabBar,A=e.onChange,Z=e.onTabClick,C=e.onTabScroll,p=(0,se.Z)(e,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),l=Vt(d),R=s==="rtl",L;w===!1?L={inkBar:!1,tabPane:!1}:w===!0?L={inkBar:!0,tabPane:!0}:L=(0,V.Z)({inkBar:!0,tabPane:!1},(0,Q.Z)(w)==="object"?w:{});var B=(0,t.useState)(!1),_=(0,v.Z)(B,2),ne=_[0],N=_[1];(0,t.useEffect)(function(){N((0,Nt.Z)())},[]);var W=(0,He.Z)(function(){var K;return(K=l[0])===null||K===void 0?void 0:K.key},{value:g,defaultValue:f}),F=(0,v.Z)(W,2),G=F[0],ee=F[1],U=(0,t.useState)(function(){return l.findIndex(function(K){return K.key===G})}),te=(0,v.Z)(U,2),Ee=te[0],xe=te[1];(0,t.useEffect)(function(){var K=l.findIndex(function(Pe){return Pe.key===G});if(K===-1){var re;K=Math.max(0,Math.min(Ee,l.length-1)),ee((re=l[K])===null||re===void 0?void 0:re.key)}xe(K)},[l.map(function(K){return K.key}).join("_"),G,Ee]);var ue=(0,He.Z)(null,{value:r}),Ce=(0,v.Z)(ue,2),we=Ce[0],Te=Ce[1],de=h;ne&&!["left","right"].includes(h)&&(de="top"),(0,t.useEffect)(function(){r||(Te("rc-tabs-".concat(tt)),tt+=1)},[]);function ke(K,re){Z==null||Z(K,re),ee(K),A==null||A(K)}var Ze={id:we,activeKey:G,animated:L,tabPosition:de,rtl:R,mobile:ne},oe,Re=(0,V.Z)((0,V.Z)({},Ze),{},{editable:b,locale:E,moreIcon:T,moreTransitionName:M,tabBarGutter:D,onTabClick:ke,onTabScroll:C,extra:k,style:O,panes:d});return j?oe=j(Re,_e):oe=t.createElement(_e,Re),t.createElement(Ne.Provider,{value:{tabs:l,prefixCls:o}},t.createElement("div",(0,z.Z)({ref:i,id:r,className:$()(o,"".concat(o,"-").concat(de),(n={},(0,x.Z)(n,"".concat(o,"-mobile"),ne),(0,x.Z)(n,"".concat(o,"-editable"),b),(0,x.Z)(n,"".concat(o,"-rtl"),R),n),c)},p),oe,t.createElement(jt,(0,z.Z)({destroyInactiveTabPane:P},Ze,{animated:L}))))}var at=t.forwardRef(Ft);at.TabPane=et;var Gt=at,Ut=Gt,Yt=u(44545),Xt=u(49101),Jt=u(54549),Qt=u(21687),qt=u(65632),_t=u(97647),ea=function(e,i){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)i.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function nt(e){var i=e.type,n=e.className,r=e.size,a=e.onEdit,o=e.hideAdd,c=e.centered,d=e.addIcon,s=ea(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),g=s.prefixCls,f=s.moreIcon,b=f===void 0?t.createElement(Yt.Z,null):f,S=t.useContext(qt.E_),w=S.getPrefixCls,I=S.direction,h=w("tabs",g),D;i==="editable-card"&&(D={onEdit:function(E,T){var M=T.key,P=T.event;a==null||a(E==="add"?P:M,E)},removeIcon:t.createElement(Jt.Z,null),addIcon:d||t.createElement(Xt.Z,null),showAdd:o!==!0});var O=w();return(0,Qt.Z)(!("onPrevClick"in s)&&!("onNextClick"in s),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),t.createElement(_t.Z.Consumer,null,function(k){var E,T=r!==void 0?r:k;return t.createElement(Ut,(0,z.Z)({direction:I,moreTransitionName:"".concat(O,"-slide-up")},s,{className:$()((E={},(0,x.Z)(E,"".concat(h,"-").concat(T),T),(0,x.Z)(E,"".concat(h,"-card"),["card","editable-card"].includes(i)),(0,x.Z)(E,"".concat(h,"-editable-card"),i==="editable-card"),(0,x.Z)(E,"".concat(h,"-centered"),c),E),n),editable:D,moreIcon:b,prefixCls:h}))})}nt.TabPane=et;var ta=nt},18106:function(ge,q,u){"use strict";var z=u(43673),x=u.n(z),t=u(3749),v=u.n(t)},97435:function(ge,q){"use strict";function u(z,x){for(var t=Object.assign({},z),v=0;v<x.length;v+=1){var Q=x[v];delete t[Q]}return t}q.Z=u}}]);
