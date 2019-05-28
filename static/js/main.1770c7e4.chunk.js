(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports={metoriteLandings:"style_metoriteLandings__2LWV0",tableRow:"style_tableRow__34hWp",orangeBg:"style_orangeBg__1qXL-"}},function(e,t,n){e.exports={searchForm:"style_searchForm__1L62y",searchInput:"style_searchInput__1ARwC",searchButton:"style_searchButton__2qLpC"}},,,function(e,t,n){e.exports={navbar:"style_navbar__190Rv"}},function(e,t,n){e.exports={tableRow:"style_tableRow__fGUKL"}},function(e,t,n){e.exports={loader:"style_loader__3UAw_",load7:"style_load7__3eUuR"}},function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=(n(18),n(1)),u=n.n(o),s=n(4),i=n(3),m=n(2),f=n(9),d=n.n(f);var h=function(e){var t=e.title;return r.a.createElement("div",{className:d.a.navbar},r.a.createElement("h1",null,t))},p=n(10),E=n.n(p);var g=function(e){var t=e.landingInfo,n=t.name,a=t.id,c=t.fall,l=t.mass,o=t.nametype,u=t.recclass,s=t.reclat,i=t.reclong,m=t.year,f=new Date(m).getFullYear()||"N/A";return r.a.createElement("tr",{className:E.a.tableRow},r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,o),r.a.createElement("td",null,u),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,f),r.a.createElement("td",null,s),r.a.createElement("td",null,i))},b=n(5),v=n.n(b);var w=function(e){var t=e.meteoriteLandings.map(function(e){return r.a.createElement(g,{key:e.id,landingInfo:e})});return r.a.createElement("table",{className:v.a.metoriteLandings,cellSpacing:"0",cellPadding:"0"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"".concat(v.a.tableRow," ").concat(v.a.orangeBg)},r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Name Type"),r.a.createElement("th",null,"Rec Class"),r.a.createElement("th",null,"Mass (g)"),r.a.createElement("th",null,"Fall"),r.a.createElement("th",null,"Year"),r.a.createElement("th",null,"Latitude"),r.a.createElement("th",null,"Longitude"))),r.a.createElement("tbody",null,t))},_=n(11),y=n.n(_);var x=function(){return r.a.createElement("div",{className:y.a.loader},"Loading...")};var k=function(e){var t=e.errorMsg;return r.a.createElement("div",null,t)},O=n(6),j=n.n(O);var L=function(e){var t=e.handleSearch,n=Object(a.useState)(""),c=Object(m.a)(n,2),l=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){return e.preventDefault(),t(l)},className:j.a.searchForm},r.a.createElement("input",{onChange:function(e){o(e.target.value)},className:j.a.searchInput,placeholder:"Enter search terms",type:"text"}),r.a.createElement("button",{className:j.a.searchButton},"Search"))};n(20);var S=function(){var e,t=Object(a.useState)({meteoriteStrikes:null,offset:0,loading:!1}),n=Object(m.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(null),f=Object(m.a)(o,2),d=f[0],p=f[1],E=Object(a.useState)(""),g=Object(m.a)(E,2),b=g[0],v=g[1],_="https://data.nasa.gov/resource/gh4g-9sfh.json",y=0,O=function(){var e=Object(i.a)(u.a.mark(function e(){var t,n,a,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight,n=document.body,a=document.documentElement,r=Math.max(n.scrollHeight,n.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight),!(t+window.pageYOffset>=r)){e.next=12;break}return y+=50,l(function(e){return Object(s.a)({},e,{loading:!0})}),e.next=10,j("$limit=50&$offset=".concat(y));case 10:return c=e.sent,e.abrupt("return",l(function(e){return Object(s.a)({},e,{meteoriteStrikes:e.meteoriteStrikes.concat(c),loading:!1})}));case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();function j(e){return S.apply(this,arguments)}function S(){return(S=Object(i.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(_,"?").concat(t)).then(function(e){return e.json()});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function R(){return(R=Object(i.a)(u.a.mark(function e(t){var n,a,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="query=SELECT * WHERE LOWER(name) = LOWER('".concat(t,"')"),e.next=3,j("$".concat(n));case 3:if(a=e.sent,r="Oh! Unfortunately, no results were found.",a.error){e.next=15;break}if(t||a.length){e.next=10;break}c=d,e.next=13;break;case 10:if(a.length){e.next=12;break}return e.abrupt("return",v(r));case 12:c=a;case 13:return v(""),e.abrupt("return",l(function(e){return Object(s.a)({},e,{meteoriteStrikes:c})}));case 15:return e.abrupt("return",v(r));case 16:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(a.useEffect)(function(){function e(){return(e=Object(i.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("$limit=50");case 2:if(!(t=e.sent).error){e.next=5;break}return e.abrupt("return",v(t.message));case 5:return p(t),e.abrupt("return",l(function(e){return Object(s.a)({},e,{meteoriteStrikes:t})}));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}return window.addEventListener("scroll",O),function(){e.apply(this,arguments)}(),function(){window.removeEventListener("scroll",O)}},[]),e=b?r.a.createElement(k,{errorMsg:b}):c.meteoriteStrikes?r.a.createElement(w,{meteoriteLandings:c.meteoriteStrikes}):r.a.createElement(x,null),r.a.createElement("div",{className:"app"},r.a.createElement(h,{title:"Meteorite Explorer"}),r.a.createElement(L,{handleSearch:function(e){return R.apply(this,arguments)}}),e,c.loading&&r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.1770c7e4.chunk.js.map