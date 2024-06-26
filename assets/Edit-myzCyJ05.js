import{Y as L,Z as D,s as F,ak as N,aC as T,J as n,a8 as d,aD as I,aE as M,aF as _,r as c,X as z,G as q,aG as O,S as w,L as H,j as p,a4 as R,V as U,A as j,C as k}from"./index-YinQ_5QR.js";function A(e){return D("MuiMenuItem",e)}const i=L("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),W=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],h=(e,a)=>{const{ownerState:t}=e;return[a.root,t.dense&&a.dense,t.divider&&a.divider,!t.disableGutters&&a.gutters]},J=e=>{const{disabled:a,dense:t,divider:s,disableGutters:l,selected:u,classes:o}=e,r=U({root:["root",t&&"dense",a&&"disabled",!l&&"gutters",s&&"divider",u&&"selected"]},A,o);return n({},o,r)},X=F(N,{shouldForwardProp:e=>T(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:h})(({theme:e,ownerState:a})=>n({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${i.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${i.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${i.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${i.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${i.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${I.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${I.inset}`]:{marginLeft:52},[`& .${M.root}`]:{marginTop:0,marginBottom:0},[`& .${M.inset}`]:{paddingLeft:36},[`& .${_.root}`]:{minWidth:36}},!a.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&n({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${_.root} svg`]:{fontSize:"1.25rem"}}))),re=c.forwardRef(function(a,t){const s=z({props:a,name:"MuiMenuItem"}),{autoFocus:l=!1,component:u="li",dense:o=!1,divider:m=!1,disableGutters:r=!1,focusVisibleClassName:V,role:E="menuitem",tabIndex:C,className:P}=s,S=q(s,W),y=c.useContext(O),x=c.useMemo(()=>({dense:o||y.dense||!1,disableGutters:r}),[y.dense,o,r]),v=c.useRef(null);w(()=>{l&&v.current&&v.current.focus()},[l]);const B=n({},s,{dense:x.dense,divider:m,disableGutters:r}),f=J(s),G=H(v,t);let $;return s.disabled||($=C!==void 0?C:-1),p.jsx(O.Provider,{value:x,children:p.jsx(X,n({ref:G,role:E,tabIndex:$,component:u,focusVisibleClassName:R(f.focusVisible,V),className:R(f.root,P)},S,{ownerState:B,classes:f}))})});var b={},Y=k;Object.defineProperty(b,"__esModule",{value:!0});var Z=b.default=void 0,K=Y(j()),Q=p;Z=b.default=(0,K.default)((0,Q.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"}),"AddCircle");var g={},ee=k;Object.defineProperty(g,"__esModule",{value:!0});var ae=g.default=void 0,te=ee(j()),se=p;ae=g.default=(0,te.default)((0,se.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");export{re as M,Z as a,ae as d};
