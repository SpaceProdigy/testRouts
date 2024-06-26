import{s as r,B as j,i as f,j as e,T as u,I as g,k as B,P as o,n as D,r as v,o as M,p as T,q as C,t as P,a as w,v as O,w as N,x as _,b as H,y as V,c as G,z as J}from"./index-CempTzmn.js";import{d as q,a as I,M as K}from"./Edit-2CuWadN8.js";import{d as L}from"./Close-DOIleLGP.js";import{T as S,C as R,d as Q,S as X}from"./Delete-GVzB8F8U.js";import{A as Y}from"./AlertComponent-C1qcySiN.js";import{F as Z,I as ee}from"./OutlinedInput-C8RUn6Xu.js";import{B as W}from"./Button-Dr2q17ri.js";const te=r(j)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`,ne=r(f)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
`,A=r(f)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`,se=r(j)`
  display: flex;
  gap: 10px;
  align-items: center;
`;function U({setIsLoginInput:n,loginValue:l,dispatch:c,setLoginValue:h,isLoginInput:s,user:d,isLoading:i}){const m=()=>{n(!0)},b=()=>{n(!1)},x=async()=>{await c(B({displayName:l})),l&&n(!1)},y=p=>{p.length<=30&&h(p)};return e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:["Login:"," ",e.jsx(u,{variant:"subtitle2",component:"span",children:!s&&(d==null?void 0:d.displayName)})]}),!s&&e.jsx(g,{color:"info",onClick:m,disabled:i,children:e.jsx(q,{})}),s&&e.jsxs(se,{children:[e.jsx(S,{value:l,onChange:p=>y(p.target.value),variant:"standard",helperText:"Max 30 characters",style:{minWidth:150}}),l.length>2&&e.jsxs(g,{color:"success",onClick:x,disabled:i,children:[!i&&e.jsx(I,{}),i&&e.jsx(R,{size:"20px"})]}),e.jsx(g,{color:"info",onClick:b,disabled:i,children:e.jsx(L,{})})]})]})}U.propTypes={setIsLoginInput:o.func.isRequired,loginValue:o.string.isRequired,dispatch:o.func.isRequired,setLoginValue:o.func.isRequired,isLoginInput:o.bool.isRequired,user:o.object.isRequired,isLoading:o.bool.isRequired};const ie=r(j)`
  position: relative;
  background-image: ${({src:n})=>`url(${n||D})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-width: 200px;
  min-height: 200px;
  border-radius: 50%;
`,ae=r(j)`
  position: absolute;
  bottom: 0px;
  right: -20px;
`,oe=r(j)`
  position: absolute;
  bottom: 0px;
  right: -65px;
`,re=r("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),le=r(j)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #11111190;
  border-radius: 50%;
  z-index: 10;
`,ce=r(j)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;function F({user:n,language:l,isLoading:c,dispatch:h}){const[s,d]=v.useState(null),[i,m]=v.useState(null),b=async()=>{!s.file||!n.uid||(await h(M({data:s.file,setLoadingProgress:m,id:n.uid})),d(null))},x=()=>{d(null)},y=async p=>{d(null),m(null);const t=p.target.files[0],a=5*1024*1024;if(!t){d(null);return}if((t==null?void 0:t.size)>a){T("info",l==="en"?"The image must not exceed 5 MB":"Зображення має бути не більше 5 Мб");return}const k=URL.createObjectURL(t);d({preview:k,file:t})};return e.jsxs(ie,{src:s!=null&&s.preview?s.preview:n==null?void 0:n.photoURL,children:[e.jsx(ae,{children:!s&&e.jsxs(g,{color:"info",component:"label",disabled:c,children:[e.jsx(q,{}),e.jsx(re,{type:"file",onChange:p=>y(p),accept:".png, .jpg, .jpeg"})]})}),s&&e.jsxs(oe,{children:[e.jsxs(g,{color:"success",type:"button",disabled:c,onClick:b,children:[!c&&e.jsx(I,{}),c&&e.jsx(R,{size:"20px"})]}),e.jsx(g,{color:"info",type:"button",onClick:x,sx:{ml:1},disabled:c,children:e.jsx(L,{})})]}),s&&e.jsxs(le,{children:[e.jsx(R,{variant:"determinate",value:i??0}),e.jsx(ce,{children:e.jsx(u,{variant:"caption",component:"div",color:"text.secondary",children:`${Math.round(i??0)}%`})})]})]})}F.propTypes={user:o.object.isRequired,language:o.string.isRequired,isLoading:o.bool.isRequired,dispatch:o.func.isRequired};const de=r(f)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
`,pe=r(f)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`,ue=r(f)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`,xe=r("form")`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`,he=r(f)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  gap: 20px;
`;function $({dispatch:n,isLoading:l,admins:c,language:h}){const[s,d]=v.useState("superAdmin"),[i,m]=v.useState(""),x=Object.entries(c[0]).filter(([t])=>t!=="id").map(([t,a])=>({key:t,value:a})),y=async(t,a)=>{if(!t||!a)return;const z=[...c[0][t]].filter(E=>E!==a);await n(P({data:{[t]:z},type:"delete"}))},p=t=>{if(t.preventDefault(),!s||!i||i===""||s==="")return;const a=[...c[0][s]];if(a.includes(i.trim())){T("error",h==="en"?"This email address already exists":"Ця електронна адреса вже існує");return}a.push(i.trim()),n(P({data:{[s]:a},type:"add"})),m("")};return e.jsx(e.Fragment,{children:e.jsxs(de,{children:[x&&x.map(t=>e.jsxs(pe,{elevation:2,children:[e.jsx(u,{variant:"h6",color:"#9ACD32",children:t.key.toLocaleUpperCase()}),t.value.length>0?t.value.map(a=>e.jsxs(ue,{elevation:3,children:[e.jsx(u,{children:a}),e.jsx(g,{color:"error",disabled:l,onClick:()=>y(t.key,a),children:e.jsx(Q,{})})]},C())):e.jsx(u,{variant:"subtitle2",color:"#800080",children:h==="en"?" No admins here yet":"Тут ще немає адміністраторів"})]},C())),e.jsx(f,{elevation:2,sx:{p:"20px"},children:e.jsxs(xe,{onSubmit:p,children:[e.jsx(f,{elevation:3,sx:{p:"20px",width:"100%"},children:e.jsx(u,{textAlign:"center",color:"#FFD700",children:"Add Email"})}),e.jsxs(he,{elevation:3,children:[e.jsxs(Z,{fullWidth:!0,children:[e.jsx(ee,{children:"Admins"}),e.jsx(X,{value:s,label:"Admins",onChange:t=>d(t.target.value),children:x.map(t=>e.jsx(K,{value:t.key,children:t.key},C()))})]}),e.jsx(S,{fullWidth:!0,sx:{mt:2},label:"Email",value:i,onChange:t=>m(t.target.value)}),e.jsx(W,{type:"submit",disabled:l,children:"Submit"})]})]})})]})})}$.propTypes={isLoading:o.bool.isRequired,dispatch:o.func.isRequired,admins:o.array.isRequired,language:o.string.isRequired};function we(){const n=w(O),l=w(N),c=w(_),h=w(H),s=w(V),[d,i]=v.useState(!1),[m,b]=v.useState((n==null?void 0:n.displayName)??""),x=G(),p=Object.entries(l).find(a=>{if(a.includes(!0))return a}),t=()=>x(J());return e.jsxs(te,{children:[e.jsx(Y,{}),e.jsx(F,{user:n,language:h,isLoading:s,dispatch:x}),e.jsxs(ne,{children:[e.jsx(A,{elevation:2,children:e.jsx(U,{setIsLoginInput:i,loginValue:m,dispatch:x,setLoginValue:b,isLoginInput:d,user:n,isLoading:s})}),e.jsx(A,{elevation:2,children:e.jsxs(u,{children:["Email:"," ",e.jsx(u,{variant:"subtitle2",component:"span",children:n==null?void 0:n.email})]})}),e.jsx(A,{elevation:2,children:e.jsxs(u,{whiteSpace:"nowrap",children:["User UID:"," ",e.jsx(u,{variant:"subtitle2",component:"span",children:n==null?void 0:n.uid})]})}),p&&e.jsx(A,{elevation:2,children:e.jsxs(u,{children:["Role:"," ",e.jsx(u,{variant:"subtitle2",component:"span",color:"#008000",children:p[0].toLocaleUpperCase()})]})})]}),(l==null?void 0:l.superAdmin)&&e.jsx($,{dispatch:x,isLoading:s,admins:c,language:h}),e.jsx(W,{type:"button",variant:"contained",onClick:t,children:h==="en"?"Log out":"Вийти"})]})}export{we as default};