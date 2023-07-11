import{s as W,f as R,n as V,r as yt}from"../chunks/scheduler.63274e7e.js";import{S as F,i as J,g as s,s as x,h as l,j as g,x as D,c as b,f as c,k as n,a as U,y as e,m as wt,n as kt,l as ot,z as lt,A as at,r as Q,B as Ct,u as X,v as Z,d as tt,t as et,w as nt}from"../chunks/index.2d693c5a.js";import{i as bt}from"../chunks/image2.12b9ba98.js";const $t=!0,te=Object.freeze(Object.defineProperty({__proto__:null,prerender:$t},Symbol.toStringTag,{value:"Module"}));function It(L){let t,a,i='<h2 class="svelte-100q1aq">About Me</h2> <p class="svelte-100q1aq">I was born in Tver, Russia. I&#39;ve been doing programming since 8th grade of school.</p>',$,v,r,o,f,u,I,y='<h2 class="svelte-100q1aq">I&#39;m Dmitrii Kuzmin</h2> <p class="svelte-100q1aq">This is my real photo.</p>';return{c(){t=s("section"),a=s("div"),a.innerHTML=i,$=x(),v=s("div"),r=s("div"),o=s("img"),u=x(),I=s("div"),I.innerHTML=y,this.h()},l(d){t=l(d,"SECTION",{class:!0,id:!0});var h=g(t);a=l(h,"DIV",{class:!0,"data-svelte-h":!0}),D(a)!=="svelte-7piq06"&&(a.innerHTML=i),$=b(h),v=l(h,"DIV",{class:!0});var _=g(v);r=l(_,"DIV",{class:!0});var T=g(r);o=l(T,"IMG",{src:!0,alt:!0,class:!0}),T.forEach(c),u=b(_),I=l(_,"DIV",{class:!0,"data-svelte-h":!0}),D(I)!=="svelte-ctjpe1"&&(I.innerHTML=y),_.forEach(c),h.forEach(c),this.h()},h(){n(a,"class","title svelte-100q1aq"),R(o.src,f=bt)||n(o,"src",f),n(o,"alt","Something went wrong"),n(o,"class","svelte-100q1aq"),n(r,"class","image svelte-100q1aq"),n(I,"class","text svelte-100q1aq"),n(v,"class","content svelte-100q1aq"),n(t,"class","about svelte-100q1aq"),n(t,"id","about-section")},m(d,h){U(d,t,h),e(t,a),e(t,$),e(t,v),e(v,r),e(r,o),e(v,u),e(v,I)},p:V,i:V,o:V,d(d){d&&c(t)}}}class Et extends F{constructor(t){super(),J(this,t,null,It,W,{})}}const Tt="/_app/immutable/assets/image1.743d3ac6.jpg";function qt(L){let t,a,i="<h3>Hello, I&#39;m</h3> <h1>Dmitrii Kuzmin</h1> <p>First year Bachelor Student at Innopolis University.</p>",$,v,r,o,f,u,I=`.home {
			width: 100%;
			height: 100vh;
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 0 9rem;
			background-color: #1c2333;
		}

		.content h3 {
			color: #fff6ec;
			font-size: 1.5rem;
			font-weight: 500;
			text-transform: uppercase;
		}

		.content h1 {
			color: #fff6ec;
			font-size: 4rem;
			font-weight: 600;
			margin: 1rem 0;
		}

		.content p {
			color: #fff6ec;
			font-size: 1.2rem;
			font-weight: 500;
			margin-bottom: 2rem;
		}

		.content .btn {
			display: inline-block;
			padding: 0.8rem 2.5rem;
			border: 2px solid #fff6ec;
			color: #fff6ec;
			font-size: 1.2rem;
			font-weight: 500;
			text-decoration: none;
			text-transform: uppercase;
			transition: all 0.3s ease-in-out;
		}

		.content .btn:hover {
			background-color: #fff6ec;
			color: #1c2333;
		}

		.image {
			width: 50%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.image img {
			width: 75%;
			height: 175%;
			object-fit: scale-down;
		}`;return{c(){t=s("section"),a=s("div"),a.innerHTML=i,$=x(),v=s("div"),r=s("img"),f=x(),u=s("style"),u.textContent=I,this.h()},l(y){t=l(y,"SECTION",{class:!0,id:!0});var d=g(t);a=l(d,"DIV",{class:!0,"data-svelte-h":!0}),D(a)!=="svelte-1rnaysx"&&(a.innerHTML=i),$=b(d),v=l(d,"DIV",{class:!0});var h=g(v);r=l(h,"IMG",{src:!0,alt:!0}),h.forEach(c),f=b(d),u=l(d,"STYLE",{"data-svelte-h":!0}),D(u)!=="svelte-3fe228"&&(u.textContent=I),d.forEach(c),this.h()},h(){n(a,"class","content"),R(r.src,o=Tt)||n(r,"src",o),n(r,"alt","Something went wrong"),n(v,"class","image"),n(t,"class","home"),n(t,"id","home-section")},m(y,d){U(y,t,d),e(t,a),e(t,$),e(t,v),e(v,r),e(t,f),e(t,u)},p:V,i:V,o:V,d(y){y&&c(t)}}}class St extends F{constructor(t){super(),J(this,t,null,qt,W,{})}}const jt="/_app/immutable/assets/image2.8b4a2579.jpg",Lt="/_app/immutable/assets/CV.01e1f143.pdf";function Mt(L){let t,a,i,$="My Skills",v,r,o=`I have knowledge of Python (especially pandas, numpy, sklearn, imblearn, mathplotlib
			libraries)`,f,u,I="C++, JavaScript, Solidity. Now I am studying Machine Learning.",y,d,h,_,T,w,k,E,q,m,C,p;return{c(){t=s("section"),a=s("div"),i=s("h2"),i.textContent=$,v=x(),r=s("p"),r.textContent=o,f=x(),u=s("p"),u.textContent=I,y=x(),d=s("div"),h=s("a"),_=wt("Download CV"),T=x(),w=s("div"),k=s("div"),E=s("img"),m=x(),C=s("img"),this.h()},l(M){t=l(M,"SECTION",{class:!0,id:!0});var z=g(t);a=l(z,"DIV",{class:!0});var S=g(a);i=l(S,"H2",{class:!0,"data-svelte-h":!0}),D(i)!=="svelte-161vk1m"&&(i.textContent=$),v=b(S),r=l(S,"P",{class:!0,"data-svelte-h":!0}),D(r)!=="svelte-l7ik7t"&&(r.textContent=o),f=b(S),u=l(S,"P",{class:!0,"data-svelte-h":!0}),D(u)!=="svelte-1mu4zwy"&&(u.textContent=I),y=b(S),d=l(S,"DIV",{class:!0});var P=g(d);h=l(P,"A",{class:!0,href:!0,download:!0,style:!0});var A=g(h);_=kt(A,"Download CV"),A.forEach(c),P.forEach(c),S.forEach(c),T=b(z),w=l(z,"DIV",{class:!0});var H=g(w);k=l(H,"DIV",{class:!0});var j=g(k);E=l(j,"IMG",{src:!0,alt:!0,class:!0}),m=b(j),C=l(j,"IMG",{src:!0,alt:!0,class:!0}),j.forEach(c),H.forEach(c),z.forEach(c),this.h()},h(){n(i,"class","svelte-kjp6b2"),n(r,"class","svelte-kjp6b2"),n(u,"class","svelte-kjp6b2"),n(h,"class","btn svelte-kjp6b2"),n(h,"href",Lt),n(h,"download","CV Dmitrii Kuzmin"),ot(h,"text-decoration","none"),n(d,"class","CV"),n(a,"class","title svelte-kjp6b2"),R(E.src,q=bt)||n(E,"src",q),n(E,"alt","Something went wrong"),n(E,"class","svelte-kjp6b2"),R(C.src,p=jt)||n(C,"src",p),n(C,"alt","Something went wrong"),n(C,"class","svelte-kjp6b2"),n(k,"class","images svelte-kjp6b2"),n(w,"class","content svelte-kjp6b2"),n(t,"class","skills svelte-kjp6b2"),n(t,"id","skills-section")},m(M,z){U(M,t,z),e(t,a),e(a,i),e(a,v),e(a,r),e(a,f),e(a,u),e(a,y),e(a,d),e(d,h),e(h,_),e(t,T),e(t,w),e(w,k),e(k,E),e(k,m),e(k,C)},p:V,i:V,o:V,d(M){M&&c(t)}}}class zt extends F{constructor(t){super(),J(this,t,null,Mt,W,{})}}const Dt="/_app/immutable/assets/image4.8f196b66.jpg",Vt="/_app/immutable/assets/image5.e61d9adb.jpg",Ht="/_app/immutable/assets/image2.8b4a2579.jpg";function Pt(L){let t,a,i='<h2 class="svelte-1layxqz">My Projects</h2>',$,v,r,o,f,u,I,y,d='<h3 class="svelte-1layxqz">Sentimental Classifier</h3> <p class="svelte-1layxqz">Model that classify review by its tone.</p>',h,_,T,w,k,E,q,m='<h3 class="svelte-1layxqz">RPG game</h3> <p class="svelte-1layxqz">Text RPG game on Blockchain written on Solidity</p>',C,p,M,z,S,P,A='<h3 class="svelte-1layxqz">VibeChecker</h3> <p class="svelte-1layxqz">Parsing comments from YouTube and making Sentimental Analysis.</p>';return{c(){t=s("section"),a=s("div"),a.innerHTML=i,$=x(),v=s("div"),r=s("div"),o=s("a"),f=s("img"),I=x(),y=s("div"),y.innerHTML=d,h=x(),_=s("div"),T=s("a"),w=s("img"),E=x(),q=s("div"),q.innerHTML=m,C=x(),p=s("div"),M=s("img"),S=x(),P=s("div"),P.innerHTML=A,this.h()},l(H){t=l(H,"SECTION",{class:!0,id:!0});var j=g(t);a=l(j,"DIV",{class:!0,"data-svelte-h":!0}),D(a)!=="svelte-16cl3rr"&&(a.innerHTML=i),$=b(j),v=l(j,"DIV",{class:!0});var N=g(v);r=l(N,"DIV",{class:!0});var st=g(r);o=l(st,"A",{href:!0,style:!0});var B=g(o);f=l(B,"IMG",{src:!0,alt:!0,class:!0}),I=b(B),y=l(B,"DIV",{class:!0,"data-svelte-h":!0}),D(y)!=="svelte-1mkhcno"&&(y.innerHTML=d),B.forEach(c),st.forEach(c),h=b(N),_=l(N,"DIV",{class:!0});var it=g(_);T=l(it,"A",{href:!0,style:!0});var Y=g(T);w=l(Y,"IMG",{src:!0,alt:!0,class:!0}),E=b(Y),q=l(Y,"DIV",{class:!0,"data-svelte-h":!0}),D(q)!=="svelte-j2bnxv"&&(q.innerHTML=m),Y.forEach(c),it.forEach(c),C=b(N),p=l(N,"DIV",{class:!0});var O=g(p);M=l(O,"IMG",{src:!0,alt:!0,class:!0}),S=b(O),P=l(O,"DIV",{class:!0,"data-svelte-h":!0}),D(P)!=="svelte-a1c1ch"&&(P.innerHTML=A),O.forEach(c),N.forEach(c),j.forEach(c),this.h()},h(){n(a,"class","title svelte-1layxqz"),R(f.src,u=Dt)||n(f,"src",u),n(f,"alt","Something went wrong"),n(f,"class","svelte-1layxqz"),n(y,"class","desc svelte-1layxqz"),n(o,"href","https://github.com/1kkiRen/Sentimental-Classifier"),ot(o,"text-decoration","none"),n(r,"class","project svelte-1layxqz"),R(w.src,k=Vt)||n(w,"src",k),n(w,"alt","Something went wrong"),n(w,"class","svelte-1layxqz"),n(q,"class","desc svelte-1layxqz"),n(T,"href","https://github.com/1kkiRen/RPG"),ot(T,"text-decoration","none"),n(_,"class","project svelte-1layxqz"),R(M.src,z=Ht)||n(M,"src",z),n(M,"alt","Something went wrong"),n(M,"class","svelte-1layxqz"),n(P,"class","desc svelte-1layxqz"),n(p,"class","project svelte-1layxqz"),n(v,"class","projects-list svelte-1layxqz"),n(t,"class","projects svelte-1layxqz"),n(t,"id","projects-section")},m(H,j){U(H,t,j),e(t,a),e(t,$),e(t,v),e(v,r),e(r,o),e(o,f),e(o,I),e(o,y),e(v,h),e(v,_),e(_,T),e(T,w),e(T,E),e(T,q),e(v,C),e(v,p),e(p,M),e(p,S),e(p,P)},p:V,i:V,o:V,d(H){H&&c(t)}}}class At extends F{constructor(t){super(),J(this,t,null,Pt,W,{})}}function Nt(L){let t,a='<div class="title"><h2 class="svelte-u25pxe">Contact Me</h2> <p class="svelte-u25pxe">You will be able to send me message soon. Now only default client available.</p></div> <div class="content"><div class="col-left svelte-u25pxe"><h2 class="svelte-u25pxe">Send Me a Message</h2> <a class="btn svelte-u25pxe" href="mailto:1kkiren@mail.ru?subject=Portfolio" id="email">Send message</a></div></div>';return{c(){t=s("section"),t.innerHTML=a,this.h()},l(i){t=l(i,"SECTION",{class:!0,id:!0,"data-svelte-h":!0}),D(t)!=="svelte-1xczpi9"&&(t.innerHTML=a),this.h()},h(){n(t,"class","contact svelte-u25pxe"),n(t,"id","contact-section")},m(i,$){U(i,t,$)},p:V,i:V,o:V,d(i){i&&c(t)}}}class Ot extends F{constructor(t){super(),J(this,t,null,Nt,W,{})}}const Gt="/_app/immutable/assets/github.30f38d42.png",Bt="/_app/immutable/assets/telegram.1193bcf1.png",Rt="/_app/immutable/assets/vk.d52a4add.png";function Ut(L){let t,a,i,$='<h2 class="svelte-1f9n6sg">Social Links</h2>',v,r,o,f,u,I,y,d,h,_,T,w,k,E,q,m;return{c(){t=s("section"),a=s("div"),i=s("div"),i.innerHTML=$,v=x(),r=s("ul"),o=s("li"),f=s("a"),u=s("img"),y=x(),d=s("li"),h=s("a"),_=s("img"),w=x(),k=s("li"),E=s("a"),q=s("img"),this.h()},l(C){t=l(C,"SECTION",{class:!0,id:!0});var p=g(t);a=l(p,"DIV",{class:!0});var M=g(a);i=l(M,"DIV",{class:!0,"data-svelte-h":!0}),D(i)!=="svelte-qmr68b"&&(i.innerHTML=$),v=b(M),r=l(M,"UL",{class:!0});var z=g(r);o=l(z,"LI",{class:!0,id:!0});var S=g(o);f=l(S,"A",{href:!0});var P=g(f);u=l(P,"IMG",{src:!0,alt:!0,class:!0}),P.forEach(c),S.forEach(c),y=b(z),d=l(z,"LI",{class:!0,id:!0});var A=g(d);h=l(A,"A",{href:!0});var H=g(h);_=l(H,"IMG",{src:!0,alt:!0,class:!0}),H.forEach(c),A.forEach(c),w=b(z),k=l(z,"LI",{class:!0,id:!0});var j=g(k);E=l(j,"A",{href:!0});var N=g(E);q=l(N,"IMG",{src:!0,alt:!0,class:!0}),N.forEach(c),j.forEach(c),z.forEach(c),M.forEach(c),p.forEach(c),this.h()},h(){n(i,"class","title svelte-1f9n6sg"),R(u.src,I=Gt)||n(u,"src",I),n(u,"alt",""),n(u,"class","svelte-1f9n6sg"),n(f,"href","https://github.com/1kkiRen"),n(o,"class","github svelte-1f9n6sg"),n(o,"id","gh-link"),R(_.src,T=Bt)||n(_,"src",T),n(_,"alt",""),n(_,"class","svelte-1f9n6sg"),n(h,"href","https://t.me/ikkiren"),n(d,"class","telegram svelte-1f9n6sg"),n(d,"id","tg-link"),R(q.src,m=Rt)||n(q,"src",m),n(q,"alt",""),n(q,"class","svelte-1f9n6sg"),n(E,"href","https://vk.com/1kkiren"),n(k,"class","vk svelte-1f9n6sg"),n(k,"id","vk-link"),n(r,"class","social-media-links svelte-1f9n6sg"),n(a,"class","content svelte-1f9n6sg"),n(t,"class","social-media svelte-1f9n6sg"),n(t,"id","social-media-section")},m(C,p){U(C,t,p),e(t,a),e(a,i),e(a,v),e(a,r),e(r,o),e(o,f),e(f,u),e(r,y),e(r,d),e(d,h),e(h,_),e(r,w),e(r,k),e(k,E),e(E,q)},p:V,i:V,o:V,d(C){C&&c(t)}}}class Yt extends F{constructor(t){super(),J(this,t,null,Ut,W,{})}}function Kt(L){let t,a,i,$='<div class="dropdown" id="dropdown"><a href="/">Portfolio</a> <div class="arrow" id="arrow"></div></div> <ul class="dropdown-content" id="dropdown-content"><li><a href="/APIWorker">APIWorker</a></li></ul>',v,r,o,f,u,I="Home",y,d,h,_="About",T,w,k,E="Skills",q,m,C,p="Projects",M,z,S,P="Contact",A,H,j,N="Social",st,B,it=`header {
			width: 100%;
			height: 100vh;
			padding: 3.5rem 9rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #1c2333;
			border-bottom: 2px solid #151a25;
			transition: all 0.5s ease-in-out;
		}

		header.shrink {
			position: fixed;
			height: 50px;
			transition: all 1s ease-in-out;
		}

		.navigation_bar {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.main-title {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.main-title a {
			color: #fff6ec;
			font-size: 3rem;
			text-decoration: none;
			transition: all 0.3s ease-in-out;
		}

		.nav ul {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: auto;
			margin-left: 4rem;
			list-style: none;
		}

		.nav ul li {
			margin-left: 2rem;
		}

		.nav ul li:hover {
			padding: 0.5rem 1rem;
			border: 2px solid #fff6ec;
			transform: scale(1.1);
			transition: all 0.3s ease-in-out;
		}

		.nav ul li button {
			color: #fff6ec;
			font-size: 1.2rem;
			font-weight: 500;
			text-decoration: none;
			border: none;
			background-color: transparent;
			cursor: pointer;
		}

		.dropdown {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: baseline;
			transition: all 0.3s ease-in-out;
		}

		.dropdown-content {
			opacity: 0;
			height: 0;
			overflow: hidden;
			transition: all 0.5s ease-in-out;
		}

		.dropdown-content.show {
			opacity: 1;
			height: 3rem;
		}

		.dropdown-content li {
			list-style: none;
			transition: all 0.3s ease-in-out;
		}

		.dropdown-content li a {
			text-decoration: none;
			color: #fff6ec;
			font-size: 1.5rem;
			transition: all 0.3s ease-in-out;
		}

		.dropdown-content li:hover {
			border-bottom: 2px solid #fff6ec;
		}

		.main-title .dropdown .arrow {
			width: 0;
			height: 0;
			border-left: 5px solid transparent;
			border-right: 5px solid transparent;
			border-top: 5px solid #fff6ec;
			transition: all 0.5s ease-in-out;
		}

		.main-title:hover .arrow {
			border-top: 5px solid #1c2333;
			transition: all 0.5s ease-in-out;
		}`,Y,O,ut=`let hasScrolled = false;
const homeSection = document.querySelector("#home-section");
const mainTitle = document.querySelector("#main-title");
const dropdownContent = document.querySelector("#dropdown-content");
function toggleDropdown() {
  dropdownContent.classList.toggle("show");
}
mainTitle.addEventListener("mouseover", toggleDropdown, true);
mainTitle.addEventListener("mouseout", toggleDropdown, false);
window.onscroll = function() {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("shrink");
    scrollToSec("#home-section");
  } else {
    header.classList.remove("shrink");
  }
};`,dt,vt;return{c(){t=s("header"),a=s("div"),i=s("div"),i.innerHTML=$,v=x(),r=s("div"),o=s("ul"),f=s("li"),u=s("button"),u.textContent=I,y=x(),d=s("li"),h=s("button"),h.textContent=_,T=x(),w=s("li"),k=s("button"),k.textContent=E,q=x(),m=s("li"),C=s("button"),C.textContent=p,M=x(),z=s("li"),S=s("button"),S.textContent=P,A=x(),H=s("li"),j=s("button"),j.textContent=N,st=x(),B=s("style"),B.textContent=it,Y=x(),O=s("script"),O.textContent=ut,this.h()},l(rt){t=l(rt,"HEADER",{id:!0});var K=g(t);a=l(K,"DIV",{class:!0});var ct=g(a);i=l(ct,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),D(i)!=="svelte-dh17ev"&&(i.innerHTML=$),v=b(ct),r=l(ct,"DIV",{class:!0});var ht=g(r);o=l(ht,"UL",{});var G=g(o);f=l(G,"LI",{});var ft=g(f);u=l(ft,"BUTTON",{id:!0,"data-svelte-h":!0}),D(u)!=="svelte-1xalyb0"&&(u.textContent=I),ft.forEach(c),y=b(G),d=l(G,"LI",{});var mt=g(d);h=l(mt,"BUTTON",{id:!0,"data-svelte-h":!0}),D(h)!=="svelte-15f2yyq"&&(h.textContent=_),mt.forEach(c),T=b(G),w=l(G,"LI",{});var gt=g(w);k=l(gt,"BUTTON",{id:!0,"data-svelte-h":!0}),D(k)!=="svelte-ev952z"&&(k.textContent=E),gt.forEach(c),q=b(G),m=l(G,"LI",{});var pt=g(m);C=l(pt,"BUTTON",{id:!0,"data-svelte-h":!0}),D(C)!=="svelte-1v6nf6z"&&(C.textContent=p),pt.forEach(c),M=b(G),z=l(G,"LI",{});var _t=g(z);S=l(_t,"BUTTON",{id:!0,"data-svelte-h":!0}),D(S)!=="svelte-medj71"&&(S.textContent=P),_t.forEach(c),A=b(G),H=l(G,"LI",{});var xt=g(H);j=l(xt,"BUTTON",{id:!0,"data-svelte-h":!0}),D(j)!=="svelte-guwtn3"&&(j.textContent=N),xt.forEach(c),G.forEach(c),ht.forEach(c),ct.forEach(c),st=b(K),B=l(K,"STYLE",{"data-svelte-h":!0}),D(B)!=="svelte-1roehxu"&&(B.textContent=it),Y=b(K),O=l(K,"SCRIPT",{lang:!0,"data-svelte-h":!0}),D(O)!=="svelte-63w7ei"&&(O.textContent=ut),K.forEach(c),this.h()},h(){n(i,"class","main-title"),n(i,"id","main-title"),n(u,"id","home"),n(h,"id","about"),n(k,"id","skills"),n(C,"id","projects"),n(S,"id","contact"),n(j,"id","social"),n(r,"class","nav"),n(a,"class","navigation_bar"),n(O,"lang","ts"),n(t,"id","header")},m(rt,K){U(rt,t,K),e(t,a),e(a,i),e(a,v),e(a,r),e(r,o),e(o,f),e(f,u),e(o,y),e(o,d),e(d,h),e(o,T),e(o,w),e(w,k),e(o,q),e(o,m),e(m,C),e(o,M),e(o,z),e(z,S),e(o,A),e(o,H),e(H,j),e(t,st),e(t,B),e(t,Y),e(t,O),dt||(vt=[lt(u,"click",at(L[1])),lt(h,"click",at(L[2])),lt(k,"click",at(L[3])),lt(C,"click",at(L[4])),lt(S,"click",at(L[5])),lt(j,"click",at(L[6]))],dt=!0)},p:V,i:V,o:V,d(rt){rt&&c(t),dt=!1,yt(vt)}}}function Wt(L){const t=f=>{const u=document.querySelector(f);window.scrollY===0&&window.scrollBy(0,1),u.scrollIntoView({behavior:"smooth"})};return[t,()=>t("#home-section"),()=>t("#about-section"),()=>t("#skills-section"),()=>t("#projects-section"),()=>t("#contact-section"),()=>t("#social-media-section")]}class Ft extends F{constructor(t){super(),J(this,t,Wt,Kt,W,{})}}function Jt(L){let t,a,i,$,v,r,o,f,u,I,y,d,h,_,T,w,k,E,q;return $=new Ft({}),f=new St({}),I=new Et({}),d=new zt({}),_=new At({}),w=new Ot({}),E=new Yt({}),{c(){t=s("meta"),a=x(),i=s("section"),Q($.$$.fragment),v=x(),r=s("div"),o=x(),Q(f.$$.fragment),u=x(),Q(I.$$.fragment),y=x(),Q(d.$$.fragment),h=x(),Q(_.$$.fragment),T=x(),Q(w.$$.fragment),k=x(),Q(E.$$.fragment),this.h()},l(m){const C=Ct("svelte-qmmw98",document.head);t=l(C,"META",{name:!0,content:!0}),C.forEach(c),a=b(m),i=l(m,"SECTION",{});var p=g(i);X($.$$.fragment,p),v=b(p),r=l(p,"DIV",{style:!0}),g(r).forEach(c),o=b(p),X(f.$$.fragment,p),u=b(p),X(I.$$.fragment,p),y=b(p),X(d.$$.fragment,p),h=b(p),X(_.$$.fragment,p),T=b(p),X(w.$$.fragment,p),k=b(p),X(E.$$.fragment,p),p.forEach(c),this.h()},h(){document.title="Portfolio",n(t,"name","description"),n(t,"content","Portfolio using SvelteKit"),ot(r,"height","50vh"),ot(r,"background-color","#1c2333")},m(m,C){e(document.head,t),U(m,a,C),U(m,i,C),Z($,i,null),e(i,v),e(i,r),e(i,o),Z(f,i,null),e(i,u),Z(I,i,null),e(i,y),Z(d,i,null),e(i,h),Z(_,i,null),e(i,T),Z(w,i,null),e(i,k),Z(E,i,null),q=!0},p:V,i(m){q||(tt($.$$.fragment,m),tt(f.$$.fragment,m),tt(I.$$.fragment,m),tt(d.$$.fragment,m),tt(_.$$.fragment,m),tt(w.$$.fragment,m),tt(E.$$.fragment,m),q=!0)},o(m){et($.$$.fragment,m),et(f.$$.fragment,m),et(I.$$.fragment,m),et(d.$$.fragment,m),et(_.$$.fragment,m),et(w.$$.fragment,m),et(E.$$.fragment,m),q=!1},d(m){m&&(c(a),c(i)),c(t),nt($),nt(f),nt(I),nt(d),nt(_),nt(w),nt(E)}}}class ee extends F{constructor(t){super(),J(this,t,null,Jt,W,{})}}export{ee as component,te as universal};
