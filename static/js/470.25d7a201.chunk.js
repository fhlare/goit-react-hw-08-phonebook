"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[470],{470:function(n,e,r){r.r(e),r.d(e,{default:function(){return un}});var t,o,i,a,s,c,l,d,p,u,x,f,b,m,h,g,Z,j,v,w,y=r(4420),P=r(168),k=r(7924),z=k.ZP.span(t||(t=(0,P.Z)(["\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  color: black;\n  display: flex;\n  gap: 8px;\n"]))),C=k.ZP.span(o||(o=(0,P.Z)(["\n  font-size: 18px;\n  color: black;\n  display: block;\n"]))),L=k.ZP.button(i||(i=(0,P.Z)(["\n  height: 32px;\n  min-width: 68px;\n  padding: 2px 6px;\n  display: block;\n  background-color: #4d5ae5;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 16px;\n  color: #ffffff;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #404bbf;\n    cursor: pointer;\n  }\n"]))),_=r(3634),F=k.ZP.ul(a||(a=(0,P.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0;\n  margin: 0;\n"]))),I=k.ZP.li(s||(s=(0,P.Z)(["\n  width: 100%;\n  height: 40px;\n  padding: 0px 4px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid #2e2f42;\n  border-radius: 4px;\n"]))),q=r(3553),S=function(n){return n.filter.filter},T=function(n){return n.contacts.items},N=function(n){return n.contacts.isLoading},R=function(n){return n.contacts.error},X=(0,q.P1)([T,S],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),Y=r(184),A=function(){var n=(0,y.v9)(X),e=(0,y.I0)();return(0,Y.jsx)(F,{children:n.map((function(n){return(0,Y.jsxs)(I,{children:[(0,Y.jsxs)(z,{children:[n.name,(0,Y.jsx)(C,{children:n.number})]}),(0,Y.jsx)(L,{onClick:function(){return e((0,_.GK)(n.id))},children:"Delete"})]},n.id)}))})},E=r(2791),K=r(5705),B=r(8007),D=r(71),G=r(203),J=(0,k.ZP)(K.l0)(c||(c=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),Q=k.ZP.strong(l||(l=(0,P.Z)(["\n    display: block;\n    font-weight: 500;\n    text-align: center;\n"]))),V=k.ZP.div(d||(d=(0,P.Z)(["\n  position: relative;\n"]))),$=(0,k.ZP)(D.eTQ)(p||(p=(0,P.Z)(["\n  position: absolute;\n  top: 50%;\n  left: -2%;\n  transform: translateY(-50%) translateX(16px);\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  pointer-events: none;\n"]))),H=(0,k.ZP)(G.I7T)(u||(u=(0,P.Z)(["\n  position: absolute;\n  top: 50%;\n  left: -2%;\n  transform: translateY(-50%) translateX(16px);\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  pointer-events: none;\n"]))),M=(0,k.ZP)(K.gN)(x||(x=(0,P.Z)(["\n  padding: 0px 32px;\n  width: 100%;\n  height: 40px;\n  border: 1px solid rgba(46, 47, 66, 0.4);\n  border-radius: 4px;\n  outline: 2px solid transparent;\n  outline-offset: -2px;\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:focus {\n    outline-color: #4d5ae5;\n  }\n\n  &:focus + "," {\n    color: #4d5ae5;\n  }\n\n  &:focus + "," {\n    color: #4d5ae5;\n  }\n"])),$,H),O=(0,k.ZP)(K.Bc)(f||(f=(0,P.Z)(["\n  font-size: 14px;\n  color: red;\n"]))),U=k.ZP.label(b||(b=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),W=k.ZP.button(m||(m=(0,P.Z)(["\n  display: block;\n  height: 48px;\n  min-width: 168px;\n  border: none;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 16px 32px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 16px;\n  color: #ffffff;\n  background-color: #4d5ae5;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #404bbf;\n    cursor: pointer;\n  }\n"]))),nn=B.Ry().shape({name:B.Z_().min(2,"Too Short!").required("Required"),number:B.Z_().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").required("Required")}),en=function(){var n=(0,y.I0)(),e=(0,y.v9)(T);return(0,Y.jsx)(K.J9,{initialValues:{name:"",number:""},validationSchema:nn,onSubmit:function(r,t){var o;t.resetForm(),o=r,e.some((function(n){return n.name.toLowerCase()===o.name.toLowerCase()}))?alert("".concat(o.name," is alredy contact")):n((0,_.uK)(o))},children:(0,Y.jsxs)(J,{children:[(0,Y.jsx)(Q,{children:"Add your contacts"}),(0,Y.jsxs)(U,{children:["Name",(0,Y.jsxs)(V,{children:[(0,Y.jsx)(M,{type:"name",name:"name"}),(0,Y.jsx)($,{})]}),(0,Y.jsx)(O,{name:"name",component:"span"})]}),(0,Y.jsxs)(U,{children:["Number",(0,Y.jsxs)(V,{children:[(0,Y.jsx)(M,{type:"text",name:"number"}),(0,Y.jsx)(H,{})]}),(0,Y.jsx)(O,{name:"number",component:"span"})]}),(0,Y.jsx)(W,{type:"submit",children:"Add contact"})]})})},rn=r(1634),tn=k.ZP.div(h||(h=(0,P.Z)(["\n  position: relative;\n"]))),on=(0,k.ZP)(D.xue)(g||(g=(0,P.Z)(["\n  position: absolute;\n  top: 50%;\n  left: -1%;\n  transform: translateY(-50%) translateX(16px);\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  pointer-events: none;\n"]))),an=k.ZP.input(Z||(Z=(0,P.Z)(["\n  width: 100%;\n  height: 40px;\n  padding: 0px 32px;\n  border: 1px solid rgba(46, 47, 66, 0.4);\n  border-radius: 4px;\n  outline: 2px solid transparent;\n  outline-offset: -2px;\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:focus {\n    outline-color: #4d5ae5;\n  }\n\n  &:focus + "," {\n    color: #4d5ae5;\n  }\n"])),on),sn=k.ZP.p(j||(j=(0,P.Z)(["\n  width: 100%;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 500;\n\n"]))),cn=function(){var n=(0,y.v9)(S),e=(0,y.I0)();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(sn,{children:"Find contact by name"}),(0,Y.jsxs)(tn,{children:[(0,Y.jsx)(an,{type:"text",name:"filter",placeholder:"Search contacts...",value:n,onChange:function(n){return e((0,rn.T)(n.target.value))}}),(0,Y.jsx)(on,{})]})]})},ln=k.ZP.div(v||(v=(0,P.Z)(["\n  width: 408px;\n  padding: 23px 25px;\n  border: 1px solid gray;\n  border-radius: 4px;\n"]))),dn=k.ZP.div(w||(w=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 408px;\n  padding: 23px 0px;\n"]))),pn=r(393);var un=function(){var n=(0,y.I0)(),e=function(){var n=(0,y.v9)(T),e=(0,y.v9)(N);return{contacts:n,isError:(0,y.v9)(R),isLoading:e}}(),r=e.isLoading,t=e.contacts;return(0,E.useEffect)((function(){n((0,_.yF)())}),[n]),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(ln,{children:(0,Y.jsx)(en,{})}),(0,Y.jsxs)(dn,{children:[t.length>0&&(0,Y.jsx)(cn,{}),r?(0,Y.jsx)(pn.a,{}):(0,Y.jsx)(A,{})]})]})}}}]);
//# sourceMappingURL=470.25d7a201.chunk.js.map