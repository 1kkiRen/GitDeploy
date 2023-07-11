import{d as te}from"../chunks/environment.9aa685ef.js";import{s as z,f as ne,n as T,o as ae}from"../chunks/scheduler.63274e7e.js";import{S as R,i as X,g as M,s as S,h as x,j as I,x as A,c as D,f as P,k as b,a as $,y as p,r as Y,B as re,u as B,v as V,d as J,t as U,w as Q}from"../chunks/index.2d693c5a.js";import{i as oe}from"../chunks/image2.12b9ba98.js";const ie=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,se=te,le=!0,wt=Object.freeze(Object.defineProperty({__proto__:null,csr:se,prerender:le},Symbol.toStringTag,{value:"Module"}));function ue(t){let e,n,a="Something went wrong, sorry!",r,s,o,d,i,c,m,l,f,u=`.requested-content {
			width: 100%;
			height: 100vh;
			padding: 3.5rem 9rem;
			display: none;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: #1c2333;
			transition: all 1s ease-in-out;
		}

		.requested-content.show {
			display: flex;
		}

		.requested-content h2 {
			font-size: 3rem;
			color: #fff6ec;
			margin-bottom: 1rem;
			transition: all 0.3s ease-in-out;
		}

		.requested-content img {
			width: 40%;
			height: 40%;
			/* border-radius: 50%; */
			object-fit: scale-down;
			margin-bottom: 1rem;
			transition: all 0.3s ease-in-out;
		}

		.requested-content p {
			font-size: 1.5rem;
			color: #fff6ec;
			transition: all 0.3s ease-in-out;
		}`;return{c(){e=M("div"),n=M("h2"),n.textContent=a,r=S(),s=M("img"),d=S(),i=M("p"),c=S(),m=M("p"),l=S(),f=M("style"),f.textContent=u,this.h()},l(g){e=x(g,"DIV",{id:!0,class:!0});var h=I(e);n=x(h,"H2",{id:!0,"data-svelte-h":!0}),A(n)!=="svelte-1sj44h5"&&(n.textContent=a),r=D(h),s=x(h,"IMG",{id:!0,src:!0,alt:!0}),d=D(h),i=x(h,"P",{id:!0}),I(i).forEach(P),c=D(h),m=x(h,"P",{id:!0}),I(m).forEach(P),l=D(h),f=x(h,"STYLE",{"data-svelte-h":!0}),A(f)!=="svelte-1fdq2n2"&&(f.textContent=u),h.forEach(P),this.h()},h(){b(n,"id","title"),b(s,"id","image"),ne(s.src,o=oe)||b(s,"src",o),b(s,"alt","Something went wrong, sorry!"),b(i,"id","date"),b(m,"id","date-from-publish"),b(e,"id","requested-content"),b(e,"class","requested-content")},m(g,h){$(g,e,h),p(e,n),p(e,r),p(e,s),p(e,d),p(e,i),p(e,c),p(e,m),p(e,l),p(e,f)},p:T,i:T,o:T,d(g){g&&P(e)}}}class de extends R{constructor(e){super(),X(this,e,null,ue,z,{})}}function ce(t){let e,n=`<div class="main-title" id="main-title"><div class="dropdown" id="dropdown"><a href="/APIWorker">API Worker</a> <div class="arrow" id="arrow"></div></div> <ul class="dropdown-content" id="dropdown-content"><li><a href="/">Portfolio</a></li></ul></div> <div class="request-sender" id="request-sender"><p class="request-sender-p" id="request-sender-p">Enter your email:</p> <input type="text" id="email"/> <button id="submit">Submit</button></div> <style>header {
			width: 100%;
			height: 100vh;
			padding: 3.5rem 9rem;
			display: flex;
			justify-content: space-around;
			align-items: center;
			background-color: #1c2333;
			border-bottom: 2px solid #151a25;
			transition: all 1s ease-in-out;
		}

		header.shrink {
			position: fixed;
			height: 50px;
			transition: all 1s ease-in-out;
		}

		header .dropdown {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: baseline;
			transition: all 0.3s ease-in-out;
		}

		header .dropdown-content {
			opacity: 0;
			height: 0;
			overflow: hidden;
			transition: all 0.5s ease-in-out;
		}

		.dropdown-content.show {
			opacity: 1;
			height: 3rem;
		}

		header .dropdown-content li {
			list-style: none;
			transition: all 0.3s ease-in-out;
		}

		header .dropdown-content li a {
			text-decoration: none;
			color: #fff6ec;
			font-size: 1.5rem;
			transition: all 0.3s ease-in-out;
		}

		header .dropdown-content li:hover {
			border-bottom: 2px solid #fff6ec;
		}

		header .main-title .dropdown .arrow {
			width: 0;
			height: 0;
			border-left: 5px solid transparent;
			border-right: 5px solid transparent;
			border-top: 5px solid #fff6ec;
			transition: all 0.3s ease-in-out;
		}

		header .main-title:hover .arrow {
			border-top: 5px solid #1c2333;
			transition: all 0.3s ease-in-out;
		}

		header .main-title {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			transition: all 0.3s ease-in-out;
		}

		header .main-title a {
			font-size: 3rem;
			color: #fff6ec;
			text-decoration: none;
			transition: all 0.3s ease-in-out;
		}

		header .request-sender {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			opacity: 1;
			transition: all 0.3s ease-in-out;
		}

		.request-sender.hide {
			display: inline-block;
			overflow: hidden;
			transition: all 0.3s ease-in-out;
		}

		header .request-sender p {
			font-size: 1.5rem;
			color: #fff6ec;
			margin-bottom: 1rem;
			transition: all 0.3s ease-in-out;
		}

		header .request-sender input {
			width: 20rem;
			height: 3rem;
			border: 2px solid #fff6ec;
			border-radius: 5px;
			padding: 0 1rem;
			margin-bottom: 1rem;
			font-size: 1rem;

			transition: all 0.3s ease-in-out;
		}

		header .request-sender button {
			width: 10rem;
			height: 3rem;
			border: 2px solid #fff6ec;
			border-radius: 5px;
			background-color: #1c2333;
			font-size: 1rem;
			color: #fff6ec;
			transition: all 0.3s ease-in-out;
		}

		header .request-sender button:hover {
			background-color: #fff6ec;
			color: #1c2333;
			transition: all 0.3s ease-in-out;
		}</style>`;return{c(){e=M("header"),e.innerHTML=n,this.h()},l(a){e=x(a,"HEADER",{id:!0,"data-svelte-h":!0}),A(e)!=="svelte-i1ed9g"&&(e.innerHTML=n),this.h()},h(){b(e,"id","header")},m(a,r){$(a,e,r)},p:T,i:T,o:T,d(a){a&&P(e)}}}class me extends R{constructor(e){super(),X(this,e,null,ce,z,{})}}function F(t){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(t)}function y(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function v(t){y(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||F(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var fe={};function he(){return fe}function G(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function q(t,e){y(2,arguments);var n=v(t),a=v(e),r=n.getTime()-a.getTime();return r<0?-1:r>0?1:r}function ve(t,e){y(2,arguments);var n=v(t),a=v(e),r=n.getFullYear()-a.getFullYear(),s=n.getMonth()-a.getMonth();return r*12+s}function ge(t,e){return y(2,arguments),v(t).getTime()-v(e).getTime()}var K={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},pe="trunc";function be(t){return t?K[t]:K[pe]}function ye(t){y(1,arguments);var e=v(t);return e.setHours(23,59,59,999),e}function we(t){y(1,arguments);var e=v(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function Me(t){y(1,arguments);var e=v(t);return ye(e).getTime()===we(e).getTime()}function xe(t,e){y(2,arguments);var n=v(t),a=v(e),r=q(n,a),s=Math.abs(ve(n,a)),o;if(s<1)o=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-r*s);var d=q(n,a)===-r;Me(v(t))&&s===1&&q(t,a)===1&&(d=!1),o=r*(s-Number(d))}return o===0?0:o}function Pe(t,e,n){y(2,arguments);var a=ge(t,e)/1e3;return be(n==null?void 0:n.roundingMethod)(a)}var Se={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},De=function(e,n,a){var r,s=Se[e];return typeof s=="string"?r=s:n===1?r=s.one:r=s.other.replace("{{count}}",n.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+r:r+" ago":r};const Te=De;function O(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var _e={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ee={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},We={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ce={date:O({formats:_e,defaultWidth:"full"}),time:O({formats:Ee,defaultWidth:"full"}),dateTime:O({formats:We,defaultWidth:"full"})};const ke=Ce;var Ie={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},qe=function(e,n,a,r){return Ie[e]};const Ae=qe;function E(t){return function(e,n){var a=n!=null&&n.context?String(n.context):"standalone",r;if(a==="formatting"&&t.formattingValues){var s=t.defaultFormattingWidth||t.defaultWidth,o=n!=null&&n.width?String(n.width):s;r=t.formattingValues[o]||t.formattingValues[s]}else{var d=t.defaultWidth,i=n!=null&&n.width?String(n.width):t.defaultWidth;r=t.values[i]||t.values[d]}var c=t.argumentCallback?t.argumentCallback(e):e;return r[c]}}var $e={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ne={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Oe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},je={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Le={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Fe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ze=function(e,n){var a=Number(e),r=a%100;if(r>20||r<10)switch(r%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},Re={ordinalNumber:ze,era:E({values:$e,defaultWidth:"wide"}),quarter:E({values:Ne,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:E({values:Oe,defaultWidth:"wide"}),day:E({values:je,defaultWidth:"wide"}),dayPeriod:E({values:Le,defaultWidth:"wide",formattingValues:Fe,defaultFormattingWidth:"wide"})};const Xe=Re;function W(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],s=e.match(r);if(!s)return null;var o=s[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],i=Array.isArray(d)?Ye(d,function(l){return l.test(o)}):He(d,function(l){return l.test(o)}),c;c=t.valueCallback?t.valueCallback(i):i,c=n.valueCallback?n.valueCallback(c):c;var m=e.slice(o.length);return{value:c,rest:m}}}function He(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function Ye(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function Be(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.match(t.matchPattern);if(!a)return null;var r=a[0],s=e.match(t.parsePattern);if(!s)return null;var o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var d=e.slice(r.length);return{value:o,rest:d}}}var Ve=/^(\d+)(th|st|nd|rd)?/i,Je=/\d+/i,Ue={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Qe={any:[/^b/i,/^(a|c)/i]},Ge={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ke={any:[/1/i,/2/i,/3/i,/4/i]},Ze={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},et={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},tt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},nt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},at={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},rt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ot={ordinalNumber:Be({matchPattern:Ve,parsePattern:Je,valueCallback:function(e){return parseInt(e,10)}}),era:W({matchPatterns:Ue,defaultMatchWidth:"wide",parsePatterns:Qe,defaultParseWidth:"any"}),quarter:W({matchPatterns:Ge,defaultMatchWidth:"wide",parsePatterns:Ke,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:W({matchPatterns:Ze,defaultMatchWidth:"wide",parsePatterns:et,defaultParseWidth:"any"}),day:W({matchPatterns:tt,defaultMatchWidth:"wide",parsePatterns:nt,defaultParseWidth:"any"}),dayPeriod:W({matchPatterns:at,defaultMatchWidth:"any",parsePatterns:rt,defaultParseWidth:"any"})};const it=ot;var st={code:"en-US",formatDistance:Te,formatLong:ke,formatRelative:Ae,localize:Xe,match:it,options:{weekStartsOn:0,firstWeekContainsDate:1}};const lt=st;function ee(t,e){if(t==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function ut(t){return ee({},t)}var Z=1440,dt=2520,j=43200,ct=86400;function mt(t,e,n){var a,r;y(2,arguments);var s=he(),o=(a=(r=n==null?void 0:n.locale)!==null&&r!==void 0?r:s.locale)!==null&&a!==void 0?a:lt;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var d=q(t,e);if(isNaN(d))throw new RangeError("Invalid time value");var i=ee(ut(n),{addSuffix:!!(n!=null&&n.addSuffix),comparison:d}),c,m;d>0?(c=v(e),m=v(t)):(c=v(t),m=v(e));var l=Pe(m,c),f=(G(m)-G(c))/1e3,u=Math.round((l-f)/60),g;if(u<2)return n!=null&&n.includeSeconds?l<5?o.formatDistance("lessThanXSeconds",5,i):l<10?o.formatDistance("lessThanXSeconds",10,i):l<20?o.formatDistance("lessThanXSeconds",20,i):l<40?o.formatDistance("halfAMinute",0,i):l<60?o.formatDistance("lessThanXMinutes",1,i):o.formatDistance("xMinutes",1,i):u===0?o.formatDistance("lessThanXMinutes",1,i):o.formatDistance("xMinutes",u,i);if(u<45)return o.formatDistance("xMinutes",u,i);if(u<90)return o.formatDistance("aboutXHours",1,i);if(u<Z){var h=Math.round(u/60);return o.formatDistance("aboutXHours",h,i)}else{if(u<dt)return o.formatDistance("xDays",1,i);if(u<j){var H=Math.round(u/Z);return o.formatDistance("xDays",H,i)}else if(u<ct)return g=Math.round(u/j),o.formatDistance("aboutXMonths",g,i)}if(g=xe(m,c),g<12){var _=Math.round(u/j);return o.formatDistance("xMonths",_,i)}else{var C=g%12,k=Math.floor(g/12);return C<3?o.formatDistance("aboutXYears",k,i):C<9?o.formatDistance("overXYears",k,i):o.formatDistance("almostXYears",k+1,i)}}function ft(t,e){return y(1,arguments),mt(t,Date.now(),e)}const{document:L}=ie;function ht(t){let e,n,a,r,s,o,d,i,c="",m;return r=new me({}),o=new de({}),{c(){e=M("meta"),n=S(),a=M("section"),Y(r.$$.fragment),s=S(),Y(o.$$.fragment),d=S(),i=M("script"),i.innerHTML=c,this.h()},l(l){const f=re("svelte-rfttkf",L.head);e=x(f,"META",{name:!0,content:!0}),f.forEach(P),n=D(l),a=x(l,"SECTION",{});var u=I(a);B(r.$$.fragment,u),s=D(u),B(o.$$.fragment,u),d=D(u),i=x(u,"SCRIPT",{lang:!0,"data-svelte-h":!0}),A(i)!=="svelte-1gh3gv0"&&(i.innerHTML=c),u.forEach(P),this.h()},h(){L.title="API Worker",b(e,"name","description"),b(e,"content","API Worker"),b(i,"lang","ts")},m(l,f){p(L.head,e),$(l,n,f),$(l,a,f),V(r,a,null),p(a,s),V(o,a,null),p(a,d),p(a,i),m=!0},p:T,i(l){m||(J(r.$$.fragment,l),J(o.$$.fragment,l),m=!0)},o(l){U(r.$$.fragment,l),U(o.$$.fragment,l),m=!1},d(l){l&&(P(n),P(a)),P(e),Q(r),Q(o)}}}function vt(t){return ae(()=>{const e=document.getElementById("email"),n=document.getElementById("submit"),a=document.getElementById("title"),r=document.getElementById("image"),s=document.getElementById("date"),o=document.getElementById("date-from-publish"),d=document.getElementById("header"),i=document.getElementById("requested-content"),c=document.getElementById("request-sender"),m=document.getElementById("main-title"),l=document.getElementById("dropdown-content");function f(){l.classList.toggle("show")}m.addEventListener("mouseover",f,!0),m.addEventListener("mouseout",f,!1),n.addEventListener("click",()=>{if(!g())return;const h=new URLSearchParams;h.append("email",e.value),fetch(`https://fwd.innopolis.university/api/hw2?${h.toString()}`).then(_=>{_.json().then(C=>{fetch(`https://fwd.innopolis.university/api/comic?id=${C}`).then(N=>{N.json().then(w=>{console.log(w),a.textContent=w.safe_title,r.src=w.img,r.alt=w.alt,s.textContent=new Date(w.year,w.month,w.day).toLocaleDateString(),o.textContent=ft(new Date(w.year,w.month,w.day),{addSuffix:!0})})}).catch(N=>{console.log(N)})})}).catch(_=>{console.log(_)}),d.classList.add("shrink"),i.classList.add("show"),c.classList.add("hide"),i.scrollIntoView({behavior:"smooth"})});const u="@innopolis.university";function g(){return e.value.endsWith(u)?!0:(alert("Please enter your @innopolis.university email"),!1)}}),[]}class Mt extends R{constructor(e){super(),X(this,e,vt,ht,z,{})}}export{Mt as component,wt as universal};
