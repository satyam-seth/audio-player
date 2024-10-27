!function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,(function(e){return o(t[a][1][e]||e)}),l,l.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";var r=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=u(0),a.throw=u(1),a.return=u(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(s){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}};Object.defineProperty(n,"__esModule",{value:!0}),n.AudioPlayer=void 0;var i=function(){function e(e){void 0===e&&(e="default"),this.namespace=e}return e.prototype.configure=function(e,t){void 0===t&&(t=!0),this.setSource(e),this.setLoopStatus(t)},e.prototype.skeleton=function(){var e=document.createElement("audio");return e.id=this.id,e.setAttribute("preload","metadata"),e},e.prototype.isPaused=function(){return this.element.paused},e.prototype.play=function(){return r(this,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:if(!1===this.isPaused())return console.log("The audio is already playing."),[2];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.element.play()];case 2:return t.sent(),[3,4];case 3:return e=t.sent(),console.error(e),[3,4];case 4:return[2]}}))}))},e.prototype.pause=function(){if(!0!==this.isPaused())try{this.element.pause()}catch(e){console.error(e)}else console.log("The audio is already paused.")},e.prototype.setSource=function(e){this.element.src=e,this.element.load()},e.prototype.setLoopStatus=function(e){this.element.loop=e},e.prototype.toggleLoopStatus=function(){var e=this.element.loop;this.setLoopStatus(!e)},e.prototype.forward=function(e){void 0===e&&(e=5),this.element.currentTime+=e},e.prototype.backward=function(e){void 0===e&&(e=5),this.element.currentTime-=e},e.prototype.seekTo=function(e){this.element.currentTime=e},e.prototype.getCurrentTime=function(){var e=this.element.currentTime;return Math.floor(e)},e.prototype.getDuration=function(){var e=this.element.duration;return Math.floor(e)},e.prototype.getSeekPosition=function(){var e=this.getDuration(),t=this.getCurrentTime();return Math.floor(t/e*100)},e.prototype.getTimeString=function(e){var t=Math.floor(e/60),n=Math.floor(e%60),r=n<10?"0".concat(n):n;return"".concat(t,":").concat(r)},e.prototype.getCurrentTimeString=function(){return this.getTimeString(this.getCurrentTime())},e.prototype.getDurationString=function(){return this.getTimeString(this.getDuration())},e.prototype.getBufferedAmountPercentage=function(){var e=0,t=this.element.duration,n=this.element.buffered.length;return n>0&&(e=this.element.buffered.end(n-1)),100*Math.floor(e/t)},Object.defineProperty(e.prototype,"id",{get:function(){return"".concat(this.namespace,"-audio-player")},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"element",{get:function(){return document.getElementById(this.id)},enumerable:!1,configurable:!0}),e.prototype.build=function(e){e.appendChild(this.skeleton())},e}();n.AudioPlayer=i},{}],2:[function(e,t,n){"use strict";var r=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},o=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(n,"__esModule",{value:!0}),n.AudioPlayerWidget=void 0;var i=function(){function e(e){this.onPlay=this.hidePlayIcon.bind(this),this.onPause=this.showPlayIcon.bind(this),this.onTimeUpdate=this.timeUpdateHandler.bind(this),this.onProgress=this.updateBufferedAmount.bind(this),this.onLoadedMetaData=this.loadedMetaDataHandler.bind(this),this.config=e}return e.prototype.destroy=function(){var e;this.removeAudioEventListeners(),null===(e=this.element)||void 0===e||e.remove()},e.prototype.showPlayIcon=function(){this.element.querySelector(".controls-container").classList.remove("controls-container--playing")},e.prototype.hidePlayIcon=function(){this.element.querySelector(".controls-container").classList.add("controls-container--playing")},e.prototype.updateDuration=function(){this.element.querySelector(".total-duration").innerHTML=this.config.audioPlayer.getDurationString()},e.prototype.updateCurrentTime=function(){this.element.querySelector(".current-time").innerHTML=this.config.audioPlayer.getCurrentTimeString()},e.prototype.updateBufferedAmount=function(){var e=this.config.audioPlayer.getBufferedAmountPercentage();this.element.style.setProperty("--buffered-width","".concat(e,"%"))},e.prototype.updateSeekSliderMax=function(){this.element.querySelector("input.seek-slider").max="".concat(this.config.audioPlayer.getDuration())},e.prototype.updateSeekSlider=function(){var e=this.config.audioPlayer.getCurrentTime();this.element.querySelector("input.seek-slider").value=e.toString(),this.element.style.setProperty("--seek-before-width","".concat(this.config.audioPlayer.getSeekPosition(),"%"))},e.prototype.loadedMetaDataHandler=function(){this.updateDuration(),this.updateSeekSliderMax(),this.updateBufferedAmount()},e.prototype.timeUpdateHandler=function(){this.updateCurrentTime(),this.updateSeekSlider()},e.prototype.skeleton=function(){var e=document.createElement("div");return e.id=this.id,e.className="audio-player-widget",e.appendChild(this.progressContainer),e.appendChild(this.controlsContainer),e},e.prototype.addAudioEventListeners=function(){this.config.audioPlayer.element.readyState>0?this.loadedMetaDataHandler():this.config.audioPlayer.element.addEventListener("loadedmetadata",this.onLoadedMetaData),this.config.audioPlayer.element.addEventListener("play",this.onPlay),this.config.audioPlayer.element.addEventListener("pause",this.onPause),this.config.audioPlayer.element.addEventListener("timeupdate",this.onTimeUpdate),this.config.audioPlayer.element.addEventListener("progress",this.onProgress)},e.prototype.removeAudioEventListeners=function(){this.config.audioPlayer.element.removeEventListener("loadedmetadata",this.onLoadedMetaData),this.config.audioPlayer.element.removeEventListener("play",this.onPlay),this.config.audioPlayer.element.removeEventListener("pause",this.onPause),this.config.audioPlayer.element.removeEventListener("timeupdate",this.onTimeUpdate),this.config.audioPlayer.element.removeEventListener("progress",this.onProgress)},Object.defineProperty(e.prototype,"progressContainer",{get:function(){var e=document.createElement("div");return e.className="progress-container",e.appendChild(this.seekSlider),e.appendChild(this.timeContainer),e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"seekSlider",{get:function(){var e=this,t=document.createElement("input");return t.className="seek-slider",t.setAttribute("type","range"),t.setAttribute("min","0"),t.setAttribute("max","100"),t.setAttribute("value","0"),t.addEventListener("input",(function(){var n=t.value;e.config.audioPlayer.seekTo(parseInt(n,10))})),t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"timeContainer",{get:function(){var e=document.createElement("div");return e.className="time-container",e.appendChild(this.currentTimeSpan),e.appendChild(this.totalDurationSpan),e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentTimeSpan",{get:function(){var e=document.createElement("span");return e.className="current-time",e.innerText="00:00",e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"totalDurationSpan",{get:function(){var e=document.createElement("span");return e.className="total-duration",e.innerText="00:00",e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"controlsContainer",{get:function(){var e=document.createElement("div");return e.className="controls-container",e.appendChild(this.backwardIcon),e.appendChild(this.playIcon),e.appendChild(this.pauseIcon),e.appendChild(this.forwardIcon),e},enumerable:!1,configurable:!0}),e.prototype.getImageElement=function(e,t,n,i,a){var u,s=document.createElement("img");return s.src=e,s.alt=t,(u=s.classList).add.apply(u,o([],r(n),!1)),s.setAttribute("title",i),s.addEventListener("click",(function(e){e.stopPropagation(),a()})),s},Object.defineProperty(e.prototype,"playIcon",{get:function(){var e=this;return this.getImageElement(this.config.playIconUrl,"play",["control-icon","play"],"play",(function(){return e.config.audioPlayer.play()}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pauseIcon",{get:function(){var e=this;return this.getImageElement(this.config.pauseIconUrl,"pause",["control-icon","pause"],"pause",(function(){return e.config.audioPlayer.pause()}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"forwardIcon",{get:function(){var e=this;return this.getImageElement(this.config.forwardIconUrl,"forward",["control-icon","forward"],"forward",(function(){return e.config.audioPlayer.forward(e.config.seekSec)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"backwardIcon",{get:function(){var e=this;return this.getImageElement(this.config.backwardIconUrl,"backward",["control-icon","backward"],"backward",(function(){return e.config.audioPlayer.backward(e.config.seekSec)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return"".concat(this.config.namespace,"-audio-player-widget")},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"element",{get:function(){return document.getElementById(this.id)},enumerable:!1,configurable:!0}),e.prototype.build=function(e){e.appendChild(this.skeleton()),this.addAudioEventListeners()},e}();n.AudioPlayerWidget=i},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./components/player"),o=e("./components/widget");window.onload=function(){var e=document.querySelector("section.example"),t=new r.AudioPlayer;t.build(e),t.setSource("https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"),new o.AudioPlayerWidget({namespace:"example",audioPlayer:t,seekSec:15,playIconUrl:"./assets/play.svg",pauseIconUrl:"./assets/pause.svg",forwardIconUrl:"./assets/forward.svg",backwardIconUrl:"./assets/backward.svg"}).build(e)}},{"./components/player":1,"./components/widget":2}]},{},[3]);
//# sourceMappingURL=maps/bundle.js.map
