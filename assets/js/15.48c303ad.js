(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{622:function(e,t,o){},681:function(e,t,o){"use strict";o(622)},703:function(e,t,o){"use strict";o.r(t);var i={name:"VideoPlayer",props:{src:{type:String,required:!0,default:""},poster:{type:String,default:""},second:{type:Number,default:.5},width:{type:Number,default:800},height:{type:Number,default:450},autoplay:{type:Boolean,default:!1},controls:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},preload:{type:String,default:"auto"},showPlay:{type:Boolean,default:!0},playWidth:{type:Number,default:96},zoom:{type:String,default:"contain"}},data(){return{veoPoster:this.poster,originPlay:!0,hidden:!1}},mounted(){this.autoplay&&(this.hidden=!0,this.originPlay=!1)},methods:{getPoster(){this.$refs.veo.currentTime=this.second;const e=document.createElement("canvas"),t=e.getContext("2d");e.width=this.$refs.veo.videoWidth,e.height=this.$refs.veo.videoHeight,t.drawImage(this.$refs.veo,0,0,e.width,e.height),this.veoPoster=e.toDataURL("image/png")},onPlay(){this.originPlay&&(this.$refs.veo.currentTime=0,this.originPlay=!1),this.autoplay?this.$refs.veo.pause():(this.hidden=!0,this.$refs.veo.play())},onPause(){this.hidden=!1},onPlaying(){this.hidden=!0}}},a=(o(681),o(3)),s=Object(a.a)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"m-video",class:{"u-video-hover":!e.hidden},style:`width: ${e.width}px; height: ${e.height}px;`},[t("video",e._b({ref:"veo",style:`object-fit: ${e.zoom};`,attrs:{src:e.src,poster:e.veoPoster,width:e.width,height:e.height,autoplay:e.autoplay,controls:!e.originPlay&&e.controls,loop:e.loop,preload:e.preload,crossorigin:"anonymous"},domProps:{muted:e.autoplay||e.muted},on:{loadeddata:function(t){e.poster||e.getPoster()},pause:function(t){e.showPlay&&e.onPause()},playing:function(t){e.showPlay&&e.onPlaying()},"~click":function(t){return t.preventDefault(),e.onPlay.apply(null,arguments)}}},"video",e.$attrs,!1),[e._v("\n    您的浏览器不支持video标签。\n  ")]),e._v(" "),t("svg",{directives:[{name:"show",rawName:"v-show",value:e.originPlay||e.showPlay,expression:"originPlay || showPlay"}],staticClass:"u-play",class:{hidden:e.hidden},style:`width: ${e.playWidth}px; height: ${e.playWidth}px;`,attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"}}),e._v(" "),t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15.25 12L9.75 8.75V15.25L15.25 12Z"}})])])}),[],!1,null,"c9ebbe80",null);t.default=s.exports}}]);