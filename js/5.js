(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{622:function(e,n,t){e.exports='<h1 id="图片加载方案代理模式">图片加载方案(代理模式)</h1>\n<h2 id="1-流程图">1. 流程图</h2>\n<p><img src="'+t(623)+'" alt="图片加载方案"></p>\n<h2 id="2-为什么使用代理模式">2. 为什么使用代理模式</h2>\n<p>图片加载无论是监听 scroll 事件还是通过 IntersectionObserver 对象，都是发布订阅模式。但除此之外，我们还需要根据某些条件来判断是否执行订阅者的函数。那么所需要的便是如何执行这个用于判断的函数。即<code>f(x) =&gt; f(g(x))</code>,在这里，<code>g(x)</code>可以被替换。这很适合用代理模式。</p>\n<h2 id="3-总体框架">3. 总体框架</h2>\n<pre><code>// 保存某些必要的数据\nconst container = {\n    attr: &#39;data-img&#39;,\n    intersection: new IntersectionObserver(fn),\n    els: []\n}\nconst client = {\n    observeEls: () =&gt; {},\n    unobserveEls: () =&gt; {}\n}\n\nconst proxy = {\n    receive: () =&gt; {},\n    notice: () =&gt; {\n        loadImages()\n    }\n}\n\nconst loadImages = () =&gt; {}</code></pre><h2 id="3-客户发布者">3. 客户(发布者)</h2>\n<p>IntersectionObserver 对象传入一个函数，当监听的元素出现在可视窗口或从可视窗口移出时，触发的回调函数。<code>isIntersecting</code>属性为布尔值，<code>true</code>表示元素从外部移入可视窗口，<code>false</code>表示从可视窗口移出。</p>\n<pre><code>const intersection = new IntersectionObserver(obs =&gt; {\n    // 可见元素数组\n    const visibleEls = obs.filter(ob =&gt; ob.isIntersecting).map(ob =&gt; obs.target)\n    // 不可见元素数组\n    const invisibleEls = obs.filter(ob =&gt; !(ob.isIntersecting)).map(ob =&gt; obs.target)\n    proxy.receive(visibleEls, invisibleEls)\n})</code></pre><h2 id="4-代理">4. 代理</h2>\n<p>proxy 可以接收客户的信息，并向主体发出加载图片的请求。<br>例如:</p>\n<pre><code>// 如何接收信息\nconst receive = (visibleEls, invisibleEls) =&gt; {\n    // 移除从可视窗口移出的元素\n    invisibleEls.forEach(el =&gt; {\n        const index = container.els.indexOf(el)\n        if (index &gt; -1) {\n            container.els.splice(index, 1)\n        }\n    })\n    // 添加从外部移入可视窗口的元素\n    container.els = Array.from(new Set(container.els.concat(visibleEls)))\n    proxy.notice()\n}\n\n// 如何发送请求,可以通过闭包的方式很轻松地实现节流与防抖\nconst createNotice = () =&gt; {\n    return (els) =&gt; {\n        loadImage(els)\n    }\n}</code></pre><h2 id="5-加载图片">5. 加载图片</h2>\n<pre><code>const loadImages = (els) =&gt; {\n    els.forEach(el =&gt; {\n        const url = el.getAttribute(container.attr);\n        if (url) {\n            el.src = url;\n            el.removeAttribute(at);\n            container.intersection.unobserve(el)\n        }\n    })\n}</code></pre>'},623:function(e,n,t){e.exports=t.p+"img/img_load.17fed3.jpg"},624:function(e,n,t){var r={"./Sylvanas1.jpg":625,"./Sylvanas10.jpg":626,"./Sylvanas2.jpg":627,"./Sylvanas3.jpg":628,"./Sylvanas4.jpg":629,"./Sylvanas5.jpg":630,"./Sylvanas6.jpg":631,"./Sylvanas7.jpg":632,"./Sylvanas8.jpg":633,"./Sylvanas9.jpg":634};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=624},625:function(e,n,t){e.exports=t.p+"img/Sylvanas1.5fc82e.jpg"},626:function(e,n,t){e.exports=t.p+"img/Sylvanas10.a3a72f.jpg"},627:function(e,n,t){e.exports=t.p+"img/Sylvanas2.bee4aa.jpg"},628:function(e,n,t){e.exports=t.p+"img/Sylvanas3.7c0f24.jpg"},629:function(e,n,t){e.exports=t.p+"img/Sylvanas4.f0fd83.jpg"},630:function(e,n,t){e.exports=t.p+"img/Sylvanas5.553fc0.jpg"},631:function(e,n,t){e.exports=t.p+"img/Sylvanas6.8fc18e.jpg"},632:function(e,n,t){e.exports=t.p+"img/Sylvanas7.ddfb13.jpg"},633:function(e,n,t){e.exports=t.p+"img/Sylvanas8.476572.jpg"},634:function(e,n,t){e.exports=t.p+"img/Sylvanas9.aaedbc.jpg"},640:function(e,n,t){"use strict";t.r(n);var r,o,i=t(1),a=t.n(i),c=function(e){return a.a.createElement("div",null,e.imgs.map(function(e,n){return a.a.createElement("img",{style:{display:"block"},key:n,"data-img":e,height:300,width:400})}))},s=(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),l=function(e){var n="function"==typeof Symbol&&e[Symbol.iterator],t=0;return n?n.call(e):{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}};!function(e){e.NOTLOAD="notload",e.WILLLOAD="willload"}(o||(o={}));var u=1,f=t(247),p=t.n(f),g=(t(236),t(246)),d=t(622),y=t.n(d),v=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a};n.default=function(){var e=function(){for(var e=[],n=1;n<11;n++)e.push(t(624)("./Sylvanas"+n+".jpg"));return e}(),n=function(e){var n=function(){var e=u++,n=function(){function e(){this.els=[]}return e.prototype.addEls=function(e){this.els=Array.from(new Set(this.els.concat(e)))},e.prototype.removeEls=function(e){var n,t,r=e.values();try{for(var o=l(r),i=o.next();!i.done;i=o.next()){var a=i.value,c=this.els.indexOf(a);c>-1&&this.els.splice(c,1)}}catch(e){n={error:e}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(n)throw n.error}}},e.prototype.clearEls=function(){this.els=[]},e.prototype.notice=function(){throw new Error("please extends AbstractImageProxy")},e.prototype.relay=function(){p(this.els),this.clearEls()},e}(),t=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return s(n,e),n.prototype.notice=function(){this.relay()},n}(n),r=function(e){function n(n){void 0===n&&(n=300);var t=e.call(this)||this;return t.state=o.NOTLOAD,t.interval=n,t}return s(n,e),n.prototype.notice=function(){var e=this;this.state!==o.WILLLOAD&&(this.state=o.WILLLOAD,setTimeout(function(){e.relay(),e.state=o.NOTLOAD},this.interval))},n}(n),i=function(e){function n(){var n=e.call(this)||this;return n.timer=Date.now(),n.timeId=-1,n.interval=1e3,n}return s(n,e),n.prototype.notice=function(){var e=this,n=Date.now();n-this.timer>this.interval?(this.relay(),this.timeId>-1&&(clearTimeout(this.timeId),this.timeId=-1)):(this.timeId>-1&&clearTimeout(this.timeId),this.timeId=setTimeout(function(){return e.relay()},this.interval)),this.timer=n},n}(n),a=[],c=new t,f=new IntersectionObserver(function(e){c.addEls(e.filter(function(e){return e.isIntersecting}).map(function(e){return e.target})),c.removeEls(e.filter(function(e){return!e.isIntersecting}).map(function(e){return e.target})),c.notice()}),p=function(e){e.forEach(function(e){g(e)})},g=function(e){var n="data-img",t=e.getAttribute(n);t&&(e.src=t,e.removeAttribute(n),d(e))},d=function(e){f.unobserve(e)};return{els:a,observes:function(){a.forEach(function(e){f.observe(e)})},unobserve:d,popularEls:function(){a=Array.from(document.querySelectorAll("[data-img]"))},ImageProxy:t,ThrottlingProxy:r,DebounceProxy:i,AbstractImageProxy:n,changeProxy:function(e){if(!(e instanceof n))throw new Error("please change a proxy extends AbstractImageProxy");c=e},disconnect:function(){f.disconnect()},counter:e}}();return null!==h&&h.disconnect(),setTimeout(function(){n.popularEls();var t=n[e];n.changeProxy(new t),n.observes(),null!==h&&(h.disconnect(),b(n)),b(h)},0),n},r=v(Object(i.useState)("ImageProxy"),2),f=r[0],d=r[1],m=v(Object(i.useState)(null),2),h=m[0],b=m[1];Object(i.useEffect)(function(){var e=n(f);return function(){e.disconnect()}},[f]);return a.a.createElement(p.a,{defaultActiveKey:"ImageProxy",onChange:function(e){return function(e){"code"!==e&&d(e)}(e)}},a.a.createElement(p.a.TabPane,{key:"ImageProxy",tab:"普通懒加载"},a.a.createElement(c,{imgs:e}),";"),a.a.createElement(p.a.TabPane,{key:"ThrottlingProxy",tab:"节流"},a.a.createElement(c,{imgs:e}),";"),a.a.createElement(p.a.TabPane,{key:"DebounceProxy",tab:"防抖"},a.a.createElement(c,{imgs:e}),";"),a.a.createElement(p.a.TabPane,{key:"code",tab:"代码分析"},a.a.createElement(g.a,{name:"lazyLoad",md:y.a})))}}}]);