import{s as E,r as c,a as S,b as N,c as A,e as F,f as O,j as e,T as a,B,N as v,g as L}from"./index-YinQ_5QR.js";import{u as W,o as H,s as J}from"./authShema-DuaYPZpP.js";import{A as T}from"./AlertComponent-BsV7DIGH.js";import{F as u,I as d,O as p,a as m}from"./OutlinedInput-BdixDN7L.js";import{B as D}from"./Button-CY09425M.js";const k=E("form")`
  width: 100%;
  margin: 30px 0;
  max-width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,V=()=>{var h,j,f;const[s,r]=c.useState(JSON.parse(localStorage.getItem("signup"))&&JSON.parse(localStorage.getItem("signup"))),t=S(N),y=A(),g=S(F),x=O();c.useEffect(()=>{g&&x("/")},[g,x]);const{register:i,handleSubmit:b,formState:{errors:o},reset:I}=W({resolver:H(J),mode:"onBlur",defaultValues:s??{login:"",email:"",password:""}}),w=async n=>{await y(L(n)),I(),r(null),localStorage.removeItem("signup")};return c.useEffect(()=>{(JSON.parse(localStorage.getItem("signup"))||s)&&localStorage.setItem("signup",JSON.stringify(s))},[s]),e.jsxs(e.Fragment,{children:[e.jsxs(k,{onSubmit:b(w),children:[e.jsx(a,{variant:"h5",sx:{mb:3},children:t==="en"?"Sign up":"Зареєструватися"}),e.jsxs(u,{variant:"outlined",fullWidth:!0,children:[e.jsx(d,{variant:"outlined",children:t==="en"?"Login":"Логін"}),e.jsx(p,{label:t==="en"?"Login":"Логін",placeholder:t==="en"?"Enter your login or email":"Введіть свій логін або email",onInput:n=>r(l=>({...l,login:n.target.value})),...i("login")}),e.jsx(m,{sx:{minHeight:50},error:!0,children:(h=o.login)==null?void 0:h.message[t]})]}),e.jsxs(u,{variant:"outlined",fullWidth:!0,children:[e.jsx(d,{variant:"outlined",children:t==="en"?"Email":"Електронна пошта"}),e.jsx(p,{label:t==="en"?"Email":"Електронна пошта",type:"email",placeholder:t==="en"?"Enter your email":"Введіть свою електронну адресу",onInput:n=>r(l=>({...l,email:n.target.value})),...i("email")}),e.jsx(m,{sx:{minHeight:50},error:!0,children:(j=o.email)==null?void 0:j.message[t]})]}),e.jsxs(u,{variant:"outlined",fullWidth:!0,children:[e.jsx(d,{variant:"outlined",children:t==="en"?"Password":"Пароль"}),e.jsx(p,{label:t==="en"?"Password":"Пароль",type:"password",placeholder:t==="en"?"Enter your password":"Введіть ваш пароль",...i("password")}),e.jsx(m,{sx:{minHeight:40},error:!0,children:(f=o.password)==null?void 0:f.message[t]})]}),e.jsx(D,{type:"submit",variant:"contained",fullWidth:!0,size:"large",children:t==="en"?"Submit":"Надіслати"}),e.jsx(B,{m:1,textAlign:"center",children:t==="en"?e.jsxs(a,{variant:"caption",children:["Already registered to"," ",e.jsxs(v,{to:"/signin",style:{textDecoration:"none"},children:[" ",e.jsxs(a,{component:"span",variant:"caption",color:"#3498db",children:[" ","sign in"]})]}),"."]}):e.jsxs(a,{variant:"caption",children:["Вже зареєстрований",e.jsxs(v,{to:"/signin",style:{textDecoration:"none"},children:[" ",e.jsxs(a,{component:"span",variant:"caption",color:"#3498db",children:[" ","увійти"," "]})]}),"в обліковий запис."]})})]}),e.jsx(T,{})]})};export{V as default};
