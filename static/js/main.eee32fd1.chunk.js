(this["webpackJsonpfood-recipe"]=this["webpackJsonpfood-recipe"]||[]).push([[0],{21:function(e,t,c){},23:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var r=c(0),s=c.n(r),a=c(14),i=c.n(a),n=(c(21),c(7)),l=c(2),o=c(1);var h=e=>{let{onSearchChange:t,recipeName:c,handleSubmit:r}=e;return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-10 mx-auto col-md-6 col-lg-4",children:Object(o.jsxs)("form",{onSubmit:r,children:[Object(o.jsx)("input",{type:"text",name:"recipeName",value:c,placeholder:"search your items",onChange:t,className:"recipeSearch_input"}),Object(o.jsx)("button",{className:"recipeSearch_button",children:"search"})]})})})})})};c(23);var d=e=>{let{id:t,publisher:c,title:r,img_url:a,source_url:i,ingredients:l}=e;return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsx)("div",{className:"col-10 mx-auto col-md-6  col-lg-4 my-3",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{className:"card-img-top",src:a,alt:r,style:{height:"15rem"}}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:r.length<20?"".concat(r):"".concat(r.substring(0,25),"...")}),Object(o.jsxs)("p",{className:" card-text text-warning",children:["Publisher:",c]}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-danger mx-2 text-capitalize",children:Object(o.jsxs)(n.b,{style:{textDecoration:"none"},to:{pathname:"/recipedetails/".concat(t),state:{publisher:c,title:r,img_url:a,source_url:i,ingredients:l}},children:[" ","Recipe Details"]})}),Object(o.jsx)("a",{href:i,className:"btn btn-outline-success mx-2 text-capitalize my-2",target:"_blank",rel:"noopener noreferrer",children:"Source url"})]})]})})})},j=c(30);var m=e=>{let{recipes:t,error:c}=e;return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)("div",{className:"row",children:c?Object(o.jsx)("h2",{className:" text-danger text-center",children:c}):t&&t.map(((e,t)=>Object(o.jsx)(d,{id:Object(j.a)(),title:e.recipe.label,publisher:e.recipe.source,img_url:e.recipe.image,source_url:e.recipe.url,ingredients:e.recipe.ingredients},Object(j.a)())))})})})};class p extends r.Component{constructor(){super(...arguments),this.state={recipes:[],recipeName:"Chicken",error:""},this.onSearchChange=e=>{const t=e.target.value;this.setState({recipeName:t})},this.handleSubmit=async e=>{e.preventDefault();try{const{recipeName:e}=this.state;if(e.length>0){const t=await fetch("https://api.edamam.com/search?q=".concat(e,"&app_id=").concat("6a637ce4","&app_key=").concat("27249071e0f0ee19e348260bd7fed8ad","&from=0&to=30")),c=await t.json();0!==c.hits.length?this.setState({recipes:c.hits,recipeName:"",error:""}):this.setState({error:"Sorry! Please enter a valid recipeName",recipeName:""})}}catch(t){console.log(t)}}}componentDidUpdate(){const e=JSON.stringify(this.state.recipes);localStorage.setItem("recipes",e)}componentDidMount(){const e=localStorage.getItem("recipes"),t=JSON.parse(e);this.setState({recipes:t})}render(){return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)("h1",{className:"App-title ",children:"Recipe Search"})}),Object(o.jsx)(h,{recipeName:this.state.recipeName,onSearchChange:this.onSearchChange,handleSubmit:this.handleSubmit}),Object(o.jsx)(m,{recipes:this.state.recipes,error:this.state.error})]})})}}var b=p;class x extends r.Component{constructor(){super(...arguments),this.state={recipe:[]}}render(){const{img_url:e,source_url:t,title:c,ingredients:r}=this.props.location.state;return console.log("ing",r),Object(o.jsx)(s.a.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-10 mx-auto col-md-6 my-3",children:[Object(o.jsx)("h3",{className:"text-info",children:"Recipe Details"}),Object(o.jsx)("img",{className:"d-block w-100",src:e,alt:c}),Object(o.jsxs)("h4",{className:"text_uppercase text-danger my-3",children:["Title:",c]}),r.map((e=>Object(o.jsx)("ul",{className:"ingredient_list",children:Object(o.jsx)("li",{className:"ingredient_text",children:e.text})},Object(j.a)()))),Object(o.jsxs)("p",{children:["Website:",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:t,className:" mx-4 my-2",target:"_blank",rel:"noopener noreferrer",children:t})})]}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-danger text-capitalize",children:Object(o.jsx)(n.b,{style:{textDecoration:"none"},to:{pathname:"/"},children:"go home"})})]})})})})}}var u=x;var g=()=>Object(o.jsx)(s.a.Fragment,{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:b}),Object(o.jsx)(l.a,{exact:!0,path:"/recipedetails/:id",component:u})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(o.jsx)(n.a,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.eee32fd1.chunk.js.map