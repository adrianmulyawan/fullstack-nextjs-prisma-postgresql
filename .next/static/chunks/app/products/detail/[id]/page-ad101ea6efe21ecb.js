(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[440],{855:function(e,a,s){Promise.resolve().then(s.bind(s,1814))},1814:function(e,a,s){"use strict";s.r(a);var l=s(9268),r=s(6006);s(6008);var t=s(730),c=s(5846),i=s.n(c);let n=function(){for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];return fetch(...a).then(e=>e.json())},d=e=>{let{params:a}=e,{id:s}=a,[c,d]=(0,r.useState)(""),[o,m]=(0,r.useState)(""),[u,h]=(0,r.useState)(""),[b,f]=(0,r.useState)(""),{data:j,error:p}=(0,t.ZP)("/api/products/".concat(s),n);return(0,r.useEffect)(()=>{j&&!p&&(d(j.title),m(j.price),h(j.category),f(j.Brand.name))},[j,p]),(0,l.jsxs)(l.Fragment,{children:[p&&(0,l.jsx)("h1",{children:"Failed to load product details"}),!j&&(0,l.jsx)("h1",{children:"Data Not Found"}),(0,l.jsxs)("div",{className:"container mt-3",children:[(0,l.jsxs)("h2",{children:["Detail Product: ",c]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:"card p-3",children:[(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{htmlFor:"title",className:"form-label",children:"Product Name"}),(0,l.jsx)("input",{type:"email",className:"form-control",id:"title",value:c,disabled:!0})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{htmlFor:"price",className:"form-label",children:"Product Price"}),(0,l.jsx)("input",{type:"email",className:"form-control",id:"price",value:o,disabled:!0})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{htmlFor:"category",className:"form-label",children:"Product Category"}),(0,l.jsx)("input",{type:"email",className:"form-control",id:"category",value:u,disabled:!0})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{htmlFor:"brand",className:"form-label",children:"Brand"}),(0,l.jsx)("input",{type:"email",className:"form-control",id:"brand",value:b,disabled:!0})]}),(0,l.jsx)(i(),{href:"/products",className:"btn btn-primary",children:"Back to Products"})]})]})]})};a.default=d},6008:function(e,a,s){e.exports=s(167)}},function(e){e.O(0,[710,496,667,139,744],function(){return e(e.s=855)}),_N_E=e.O()}]);