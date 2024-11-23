(self["webpackChunkv_slide_vue"]=self["webpackChunkv_slide_vue"]||[]).push([[571],{1945:function(e,t,n){"use strict";n(1703);var o=n(3545),a={"text/plain":"Text","text/html":"Url",default:"Text"},r="Copy to clipboard: #{key}, Enter";function i(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function s(e,t){var n,s,l,c,u,d,p=!1;t||(t={}),n=t.debug||!1;try{l=o(),c=document.createRange(),u=document.getSelection(),d=document.createElement("span"),d.textContent=e,d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=a[t.format]||a["default"];window.clipboardData.setData(r,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(d),c.selectNodeContents(d),u.addRange(c);var h=document.execCommand("copy");if(!h)throw new Error("copy command was unsuccessful");p=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),s=i("message"in t?t.message:r),window.prompt(s,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(c):u.removeAllRanges()),d&&document.body.removeChild(d),l()}return p}e.exports=s},5743:function(e){!function(t,n){e.exports=n()}(0,(function(){"use strict";var e=1e3,t=6e4,n=36e5,o="millisecond",a="second",r="minute",i="hour",s="day",l="week",c="month",u="quarter",d="year",p="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(e,t,n){var o=String(e);return!o||o.length>=t?e:""+Array(t+1-o.length).join(n)+e},g={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),o=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+v(o,2,"0")+":"+v(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var o=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(o,c),r=n-a<0,i=t.clone().add(o+(r?-1:1),c);return+(-(o+(n-a)/(r?a-i:i-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:p,h:i,m:r,s:a,ms:o,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",_={};_[b]=y;var w=function(e){return e instanceof D},k=function e(t,n,o){var a;if(!t)return b;if("string"==typeof t){var r=t.toLowerCase();_[r]&&(a=r),n&&(_[r]=n,a=r);var i=t.split("-");if(!a&&i.length>1)return e(i[0])}else{var s=t.name;_[s]=t,a=s}return!o&&a&&(b=a),a||!o&&b},C=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},x=g;x.l=k,x.i=w,x.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function y(e){this.$L=k(e.locale,null,!0),this.parse(e)}var v=y.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var o=t.match(f);if(o){var a=o[2]-1||0,r=(o[7]||"0").substring(0,3);return n?new Date(Date.UTC(o[1],a,o[3]||1,o[4]||0,o[5]||0,o[6]||0,r)):new Date(o[1],a,o[3]||1,o[4]||0,o[5]||0,o[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return x},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=C(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return C(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<C(e)},v.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,o=!!x.u(t)||t,u=x.p(e),h=function(e,t){var a=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return o?a:a.endOf(s)},f=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,y=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(u){case d:return o?h(1,0):h(31,11);case c:return o?h(1,y):h(0,y+1);case l:var b=this.$locale().weekStart||0,_=(m<b?m+7:m)-b;return h(o?v-_:v+(6-_),y);case s:case p:return f(g+"Hours",0);case i:return f(g+"Minutes",1);case r:return f(g+"Seconds",2);case a:return f(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,l=x.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[p]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[i]=u+"Hours",n[r]=u+"Minutes",n[a]=u+"Seconds",n[o]=u+"Milliseconds",n)[l],f=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(p,1);m.$d[h](f),m.init(),this.$d=m.set(p,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[x.p(e)]()},v.add=function(o,u){var p,h=this;o=Number(o);var f=x.p(u),m=function(e){var t=C(h);return x.w(t.date(t.date()+Math.round(e*o)),h)};if(f===c)return this.set(c,this.$M+o);if(f===d)return this.set(d,this.$y+o);if(f===s)return m(1);if(f===l)return m(7);var y=(p={},p[r]=t,p[i]=n,p[a]=e,p)[f]||1,v=this.$d.getTime()+o*y;return x.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var o=e||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),r=this.$H,i=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,a,r){return e&&(e[n]||e(t,o))||a[n].slice(0,r)},d=function(e){return x.s(r%12||12,e,"0")},p=n.meridiem||function(e,t,n){var o=e<12?"AM":"PM";return n?o.toLowerCase():o},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:x.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:x.s(r,2,"0"),h:d(1),hh:d(2),a:p(r,i,!0),A:p(r,i,!1),m:String(i),mm:x.s(i,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:a};return o.replace(m,(function(e,t){return t||f[e]||a.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(o,p,h){var f,m=x.p(p),y=C(o),v=(y.utcOffset()-this.utcOffset())*t,g=this-y,b=x.m(this,y);return b=(f={},f[d]=b/12,f[c]=b,f[u]=b/3,f[l]=(g-v)/6048e5,f[s]=(g-v)/864e5,f[i]=g/n,f[r]=g/t,f[a]=g/e,f)[m]||g,h?b:x.a(b)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return _[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),o=k(e,t,!0);return o&&(n.$L=o),n},v.clone=function(){return x.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},y}(),O=D.prototype;return C.prototype=O,[["$ms",o],["$s",a],["$m",r],["$H",i],["$W",s],["$M",c],["$y",d],["$D",p]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,D,C),e.$i=!0),C},C.locale=k,C.isDayjs=w,C.unix=function(e){return C(1e3*e)},C.en=_[b],C.Ls=_,C.p={},C}))},3432:function(e,t,n){!function(t,o){e.exports=o(n(5743))}(0,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),o={name:"zh",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e,t){return"W"===t?e+"周":e+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s后",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(e,t){var n=100*e+t;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};return n.default.locale(o,null,!0),o}))},893:function(e){!function(t,n){e.exports=n()}(0,(function(){"use strict";return function(e,t,n){e=e||{};var o=t.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function r(e,t,n,a){return o.fromToBase(e,t,n,a)}n.en.relativeTime=a,o.fromToBase=function(t,o,r,i,s){for(var l,c,u,d=r.$locale().relativeTime||a,p=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=p.length,f=0;f<h;f+=1){var m=p[f];m.d&&(l=i?n(t).diff(r,m.d,!0):r.diff(t,m.d,!0));var y=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,y<=m.r||!m.r){y<=1&&f>0&&(m=p[f-1]);var v=d[m.l];s&&(y=s(""+y)),c="string"==typeof v?v.replace("%d",y):v(y,o,m.l,u);break}}if(o)return c;var g=u?d.future:d.past;return"function"==typeof g?g(c):g.replace("%s",c)},o.to=function(e,t){return r(e,t,this,!0)},o.from=function(e,t){return r(e,t,this)};var i=function(e){return e.$u?n.utc():n()};o.toNow=function(e){return this.to(i(this),e)},o.fromNow=function(e){return this.from(i(this),e)}}}))},6154:function(e,t,n){var o,a,r;(function(n,i){a=[],o=i,r="function"===typeof o?o.apply(t,a):o,void 0===r||(e.exports=r)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){l(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,s=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,n){var s=i.URL||i.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?r(l):a(l.href)?o(e,t,n):r(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(a(e))o(e,n,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,t,n,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var r="application/octet-stream"===e.type,l=/constructor/i.test(i.HTMLElement)||i.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||r&&l||s)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},u.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,p=d.createObjectURL(e);a?a.location=p:location.href=p,a=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});i.saveAs=l.saveAs=l,e.exports=l}))},3545:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},5713:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(311),vue__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__),vuex__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7139),_UserInput_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5873);__webpack_exports__["Z"]={name:"Editor",props:{obj:Object,prefix:String,editorOptionKey:String},components:{UserInput:_UserInput_vue__WEBPACK_IMPORTED_MODULE_1__.Z},computed:{...(0,vuex__WEBPACK_IMPORTED_MODULE_2__.rn)(["editorOption"]),labels(){return this.editorOption[this.editorOptionKey].labels||{}},specialLabels(){return this.editorOption[this.editorOptionKey].specialLabels||[]},selectOptions(){return this.editorOption[this.editorOptionKey].selectOptions||{}},special(){return this.editorOption[this.editorOptionKey].special||[]},plain(){var plain=[];return Object.keys(this.obj).forEach((key=>{if("object"!=typeof this.obj[key]){var id=/^\d/.test(key)?this.prefix+"["+key+"]":this.prefix+"."+key,type="",options=null,label=this.labels[key]?this.labels[key]:key,tip="";switch(0!=Object.keys(this.specialLabels).length&&Object.keys(this.specialLabels).forEach((key=>{var regStr="/"+key+"/",reg=eval(regStr);-1!=id.search(reg)&&(label=this.specialLabels[key])})),typeof this.obj[key]){case"boolean":type="switch";break;case"number":type="number";break;case"string":type="text",-1!=id.search(/color/i)&&(type="color"),-1!=Object.keys(this.selectOptions).indexOf(key)&&(type="select",options=this.selectOptions[key]);break}0!=Object.keys(this.special).length&&Object.keys(this.special).forEach((key=>{var regStr="/"+key+"/",reg=eval(regStr);-1!=id.search(reg)&&(type=this.special[key].type,options=this.special[key].options||[],tip=this.special[key].tip||"")})),plain.push({id:id,type:type,options:options,value:this.obj[key],label:label,tip:tip})}})),plain},complex(){var complex=[];return Object.keys(this.obj).forEach((key=>{if("object"===typeof this.obj[key]){var prefix=/^\d/.test(key)?this.prefix+"["+key+"]":this.prefix+"."+key,label=this.labels[key]?this.labels[key]:key;0!=Object.keys(this.specialLabels).length&&Object.keys(this.specialLabels).forEach((key=>{var regStr="/"+key+"/",reg=eval(regStr);-1!=prefix.search(reg)&&(label=this.specialLabels[key])})),complex.push({prefix:prefix,label:label,obj:this.obj[key]})}})),complex}}}},3972:function(e,t,n){"use strict";const o=n(5743);n(3432),o.locale("zh");var a=n(893);o.extend(a),t["Z"]=o},6161:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var o=n(311);function a(e,t,n,a,r,i){const s=(0,o.resolveComponent)("editor"),l=(0,o.resolveComponent)("n-tab-pane"),c=(0,o.resolveComponent)("n-tabs"),u=(0,o.resolveComponent)("n-drawer-content"),d=(0,o.resolveComponent)("n-drawer");return(0,o.openBlock)(),(0,o.createBlock)(d,{show:r.show,"onUpdate:show":t[0]||(t[0]=e=>r.show=e),"mask-closable":!0,width:"400",height:"400",placement:"right","show-mask":"transparent"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(u,{"header-style":"margin:0 auto"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{type:"card"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(a.config,((e,t)=>((0,o.openBlock)(),(0,o.createBlock)(l,{key:t,name:e.name,tab:e.tab,"display-directive":"show"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(s,{obj:e.obj,prefix:e.name,editorOptionKey:a.atomContent.atomName},null,8,["obj","prefix","editorOptionKey"])])),_:2},1032,["name","tab"])))),128))])),_:1})])),_:1})])),_:1},8,["show"])}var r=n(7878),i={components:{Editor:r.Z},props:{atomContent:Object},data(){return{show:!0}},mounted(){},setup(e){var t=(0,o.toRaw)(e.atomContent),n=[],a={simpleBar:"柱条",simpleLine:"折线",simplePie:"饼图",simpleFunnel:"漏斗图",simpleRadar:"雷达图",simpleSankey:"桑基图",simpleMap:"地图",simpleScatter:"散点图",wordCloud:"词云图",popPyramid:"人口金字塔",reg:"回归",dataZoom:"缩放条",timeline:"时间轴",visualMapC:"视觉映射",visualMapP:"视觉映射",palette:"调色板",title:"标题",grid:"网格",xAxis:"X轴",yAxis:"Y轴",yAxis1:"Y轴2",itemStyle:"样式",label:"标签",emphasis:"强调样式",legend:"图例",backgroundPalette:"背景色"},r=t.detail;return Object.keys(r).forEach((e=>{"object"==typeof r[e]&-1!=Object.keys(a).indexOf(e)&&n.push({name:"atomContent.detail."+e,tab:a[e],obj:r[e]})})),{config:n,atomContent:t}}},s=n(89);const l=(0,s.Z)(i,[["render",a]]);var c=l;function u(e,t,n,a,r,i){const s=(0,o.resolveComponent)("editor"),l=(0,o.resolveComponent)("n-tab-pane"),c=(0,o.resolveComponent)("n-tabs"),u=(0,o.resolveComponent)("n-drawer-content"),d=(0,o.resolveComponent)("n-drawer");return(0,o.openBlock)(),(0,o.createBlock)(d,{show:r.show,"onUpdate:show":t[0]||(t[0]=e=>r.show=e),"mask-closable":!0,width:"400",height:"400",placement:"right","show-mask":"transparent"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(u,{"header-style":"margin:0 auto"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{type:"card"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(a.config,((e,t)=>((0,o.openBlock)(),(0,o.createBlock)(l,{key:t,name:e.name,tab:e.tab,"display-directive":"show"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(s,{obj:e.obj,prefix:e.name,editorOptionKey:n.atomContent.atomName},null,8,["obj","prefix","editorOptionKey"])])),_:2},1032,["name","tab"])))),128))])),_:1})])),_:1})])),_:1},8,["show"])}var d={components:{Editor:r.Z},props:{atomContent:Object},data(){return{show:!0}},mounted(){},setup(e){var t=(0,o.toRaw)(e.atomContent),n=t.detail,a=[];return a.push({name:"atomContent.detail",tab:"样式",obj:n}),{config:a}}};const p=(0,s.Z)(d,[["render",u]]);var h=p;function f(e,t,n,a,r,i){const s=(0,o.resolveComponent)("editor"),l=(0,o.resolveComponent)("n-tab-pane"),c=(0,o.resolveComponent)("n-tabs"),u=(0,o.resolveComponent)("n-drawer-content"),d=(0,o.resolveComponent)("n-drawer");return(0,o.openBlock)(),(0,o.createBlock)(d,{show:r.show,"onUpdate:show":t[0]||(t[0]=e=>r.show=e),"mask-closable":!0,width:"400",height:"400",placement:"right","show-mask":"transparent"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(u,{"header-style":"margin:0 auto"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{type:"card"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(a.config,((e,t)=>((0,o.openBlock)(),(0,o.createBlock)(l,{key:t,name:e.name,tab:e.tab,"display-directive":"show"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(s,{obj:e.obj,prefix:e.name,editorOptionKey:n.atomContent.atomName},null,8,["obj","prefix","editorOptionKey"])])),_:2},1032,["name","tab"])))),128))])),_:1})])),_:1})])),_:1},8,["show"])}var m={components:{Editor:r.Z},props:{atomContent:Object},data(){return{show:!0}},mounted(){},setup(e){var t=(0,o.toRaw)(e.atomContent),n=t.detail,a=[];return a.push({name:"atomContent.detail",tab:"图片",obj:n}),{config:a}}};const y=(0,s.Z)(m,[["render",f]]);var v=y,g={name:"Atom",props:{initAtom:Object},components:{Echart:c,Text:h,Images:v},setup(e,{slots:t,attrs:n,emit:a}){if(e.initAtom.atomType){const t=(0,o.resolveComponent)(e.initAtom.atomType);return()=>[(0,o.h)(t,{atomContent:(0,o.toRaw)(e.initAtom.atomContent)})]}}};const b=g;var _=b},7878:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(311);const a={style:{width:"100%","text-align":"center","background-color":"#fafafa"}};function r(e,t,n,r,i,s){const l=(0,o.resolveComponent)("user-input"),c=(0,o.resolveComponent)("n-space"),u=(0,o.resolveComponent)("n-card"),d=(0,o.resolveComponent)("editor",!0),p=(0,o.resolveComponent)("n-blockquote");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(u,{bordered:!1,"content-style":"padding:5px 0px"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{vertical:"",size:"small"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(s.plain,((e,t)=>((0,o.openBlock)(),(0,o.createBlock)(l,{key:t,info:e},null,8,["info"])))),128))])),_:1})])),_:1}),s.complex?((0,o.openBlock)(),(0,o.createBlock)(u,{key:0,bordered:!1,"content-style":"padding:0px 0px"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(s.complex,((e,t)=>((0,o.openBlock)(),(0,o.createBlock)(p,{key:t},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("h3",a,(0,o.toDisplayString)(e.label),1),(0,o.createVNode)(d,{obj:e.obj,prefix:e.prefix,editorOptionKey:n.editorOptionKey},null,8,["obj","prefix","editorOptionKey"])])),_:2},1024)))),128))])),_:1})):(0,o.createCommentVNode)("",!0)],64)}var i=n(5713),s=n(89);const l=(0,s.Z)(i.Z,[["render",r]]);var c=l},3860:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(311);function a(e,t,n,a,r,i){const s=(0,o.resolveComponent)("hot-table"),l=(0,o.resolveComponent)("n-drawer-content"),c=(0,o.resolveComponent)("n-drawer");return(0,o.openBlock)(),(0,o.createBlock)(c,{show:r.show,"onUpdate:show":t[0]||(t[0]=e=>r.show=e),"mask-closable":!0,width:"600",height:"400",placement:"right"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(l,{"header-style":"margin:0 auto"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(s,{language:"zh-CN",settings:r.hotSettings,ref:"hottable"},null,8,["settings"])])),_:1})])),_:1},8,["show"])}var r=n(7139),i=n(6156),s={setup(){const e=(0,o.inject)("menuValue"),t=(0,i.Z)();return{...t,menuValue:e}},props:{initAtom:Object},components:{HotTable:Handsontable.vue.HotTable},data(){return{show:!0,data:null,formalData:null,nr:null,nc:null,key:1,hotSettings:{rowHeaders:!0,colHeaders:!0,height:"auto",manualRowResize:!0,manualColumnResize:!0,columnSorting:!1,filters:!0,dropdownMenu:!1,contextMenu:!0,customBorders:[],fixedRowsTop:1,minSpareRows:5,minSpareCols:3,licenseKey:"non-commercial-and-evaluation",afterChange:this.rawDataChange,afterRemoveCol:this.rawDataChange,afterRemoveRow:this.rawDataChange}}},computed:{...(0,r.rn)(["gallery","account"])},methods:{rawDataChange:function(){var e=this.$refs.hottable.hotInstance.countRows()-this.$refs.hottable.hotInstance.countEmptyRows(!0),t=this.$refs.hottable.hotInstance.countCols()-this.$refs.hottable.hotInstance.countEmptyCols(!0),n=JSON.parse(JSON.stringify(this.$refs.hottable.hotInstance.getData(0,0,e-1,t-1)));e+t!=0&&this.changeSheetData({sheetData:n,nr:e,nc:t,menuValue:this.menuValue})},...(0,r.OI)(["changeSheetData"])},watch:{formalData:{deep:!0,handle(){}}},mounted(){let e;switch(this.menuValue){case"template-layout":e=this.gallery.templateLayout[0].slideContent[this.gallery.activeIndex].atomContent.detail.sheetData;break;case"local-layout":e=this.gallery.localLayout[0].slideContent[this.gallery.activeIndex].atomContent.detail.sheetData;break;case"layout":e=this.initAtom.atomContent.detail.sheetData}this.$refs.hottable.hotInstance.loadData(JSON.parse(JSON.stringify(e)))}},l=n(89);const c=(0,l.Z)(s,[["render",a]]);var u=c},5873:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(311);const a={key:2,style:{width:"100%",height:"34px","box-sizing":"border-box",border:"1px solid #eaeaee","text-align":"left","line-height":"34px",margin:"0 auto"}};function r(e,t,n,r,i,s){const l=(0,o.resolveComponent)("n-grid-item"),c=(0,o.resolveComponent)("n-input"),u=(0,o.resolveComponent)("n-input-number"),d=(0,o.resolveComponent)("n-switch"),p=(0,o.resolveComponent)("n-color-picker"),h=(0,o.resolveComponent)("n-select"),f=(0,o.resolveComponent)("n-button"),m=(0,o.resolveComponent)("n-input-group"),y=(0,o.resolveComponent)("n-grid");return(0,o.openBlock)(),(0,o.createBlock)(y,{cols:7,style:{height:"34px"}},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(l,{span:"3",style:{"background-color":"rgb(250, 250, 250)","font-weight":"bold",width:"100%",height:"34px","box-sizing":"border-box",border:"1px solid #eaeaee","text-align":"center","line-height":"34px",margin:"0 auto"}},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(n.info.label)+": ",1)])),_:1}),(0,o.createVNode)(l,{span:"4",style:{height:"34px"}},{default:(0,o.withCtx)((()=>["text"===n.info.type?((0,o.openBlock)(),(0,o.createBlock)(c,{key:0,"default-value":n.info.value,placeholder:"请输入","onUpdate:value":t[0]||(t[0]=e=>s.change(e,n.info.id))},null,8,["default-value"])):(0,o.createCommentVNode)("",!0),"number"===n.info.type?((0,o.openBlock)(),(0,o.createBlock)(u,{key:1,"default-value":n.info.value,placeholder:"请输入","onUpdate:value":t[1]||(t[1]=e=>s.change(e,n.info.id))},null,8,["default-value"])):(0,o.createCommentVNode)("",!0),"switch"===n.info.type?((0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createVNode)(d,{"default-value":n.info.value,style:{height:"100%",padding:"0px 10px"},"onUpdate:value":t[2]||(t[2]=e=>s.change(e,n.info.id))},null,8,["default-value"])])):(0,o.createCommentVNode)("",!0),"color"===n.info.type?((0,o.openBlock)(),(0,o.createBlock)(p,{key:3,"default-value":n.info.value,"onUpdate:value":t[3]||(t[3]=e=>s.change(e,n.info.id))},null,8,["default-value"])):(0,o.createCommentVNode)("",!0),"select"===n.info.type?((0,o.openBlock)(),(0,o.createBlock)(h,{key:4,"default-value":n.info.value,options:n.info.options,"onUpdate:value":t[4]||(t[4]=e=>s.change(e,n.info.id))},null,8,["default-value","options"])):(0,o.createCommentVNode)("",!0),"image"===n.info.type?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:5},[(0,o.createVNode)(m,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{style:{width:"80%"},"default-value":n.info.value,"onUpdate:value":t[5]||(t[5]=e=>s.change(e,n.info.id))},null,8,["default-value"]),(0,o.createVNode)(f,{onClick:t[6]||(t[6]=e=>this.$refs.upload.click())},{default:(0,o.withCtx)((()=>t[8]||(t[8]=[(0,o.createTextVNode)("本地图片")]))),_:1})])),_:1}),(0,o.createElementVNode)("input",{ref:"upload",style:{display:"none"},type:"file",onChange:t[7]||(t[7]=e=>s.changeImage(n.info.id)),class:"upload",accept:".jpeg,.jpg,.png"},null,544)],64)):(0,o.createCommentVNode)("",!0)])),_:1})])),_:1})}var i=n(7139),s={setup(){const e=(0,o.inject)("menuValue","layout");return{menuValue:e}},props:{info:Object},components:{},methods:{...(0,i.OI)(["changeAtom"]),change(e,t){this.changeAtom({key:t,value:e,menuValue:this.menuValue})},changeImage(e){const t=this.$refs.upload.files[0],n=new FileReader;t&&n.readAsDataURL(t),n.addEventListener("load",(()=>{var t=n.result;this.changeAtom({key:e,value:t,menuValue:this.menuValue})}),!1)}}},l=n(89);const c=(0,l.Z)(s,[["render",r]]);var u=c}}]);