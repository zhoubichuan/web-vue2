(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{836:function(t,s,e){"use strict";e.r(s);var a=e(2),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue2-x-全家桶"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x-全家桶"}},[t._v("#")]),t._v(" Vue2.x 全家桶")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("前言")]),t._v(" "),s("p",[t._v("这里将介绍 vue2.x 项目开发所需要的技术选型，以及相关基础知识的介绍")])]),t._v(" "),s("h2",{attrs:{id:"_1-脚手架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-脚手架"}},[t._v("#")]),t._v(" 1.脚手架")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("参考")]),t._v(" "),s("p",[s("strong",[t._v("vue-cli2.x，"),s("a",{attrs:{href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)])])]),t._v(" "),s("ul",[s("li",[t._v("补充一些原理上的知识点，开发自己的项目模板，方便项目技术对齐与管理")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_2-vue2-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue2-x"}},[t._v("#")]),t._v(" 2.vue2.x")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("参考")]),t._v(" "),s("p",[s("strong",[t._v("vue2.x：渐进式 js 框架，"),s("a",{attrs:{href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：为什么修改 input 上双向数据绑定的值后，页面不能更新数据")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("v-model 的数据初始化时没有在 data 里面，是后面直接赋值加入的\n")])])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题二：我需要遍历的数组值更新了,值也赋值了,为什么视图不更新")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("那是因为有局限性啊,官方文档也说的很清楚,只有一些魔改的之后的方法提供跟原生一样的使用姿势(却又可以触发视图更新);\n一般我们更常用(除了魔改方法)的手段是使用:this.$set(obj,item,value);\n其他方式：\n  方式一：数据使用深拷贝\n  方式二：使用数据上相关方法更新数据（splice、pop、push）等\n")])])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题三：v-for 问题")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("使用 index 作为 key 可能导致更新问题，尽量使用不变的 id\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_3-vue-router3-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue-router3-x"}},[t._v("#")]),t._v(" 3.Vue-Router3.x")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("参考")]),t._v(" "),s("p",[s("strong",[t._v("vue-router3.x：vue 官方路由管理器，"),s("a",{attrs:{href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：路由模式改为 history 后,除了首次启动首页没报错,刷新访问路由都报错!")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("必须给对应的服务端配置查询的主页面,也可以认为是主路由入口的引导\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_4-vuex3-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-vuex3-x"}},[t._v("#")]),t._v(" 4.Vuex3.x")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("参考")]),t._v(" "),s("p",[s("strong",[t._v("vuex3.x：vue 状态管理器，"),s("a",{attrs:{href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：XXX")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("XXX\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_5-elementui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-elementui"}},[t._v("#")]),t._v(" 5.ElementUI")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("参考")]),t._v(" "),s("p",[s("strong",[t._v("element ui，饿了么推出的 UI 组件库，"),s("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)])])]),t._v(" "),s("ul",[s("li",[t._v("补充一些 elementui 使用过程中出现的一些常见问题和解决方式")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：时间选择器")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. 表单必填校验失效\n  data 中初始化时将初始值设置为数字 0，在 elementui 内部识别为非空值，导致必填校验失效\n")])])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题二：分页组件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. 可以输入`e`和`.`\n  输入框中可以输入科学记数法`10.1e2`\n")])])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题三：多个弹框默认层级有问题")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. 可以全局调整层级\n")])])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题四：默认文案有需要修改，但文字镶嵌在组件内部动态变化")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. 可以全局配置国际化字段\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_6-工具库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-工具库"}},[t._v("#")]),t._v(" 6.工具库")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("参考")]),t._v(" "),s("p",[s("strong",[t._v("axios，基于 promise 的网络请求库，"),s("a",{attrs:{href:"http://www.axios-js.com/zh-cn/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[t._v("Moment.js，JavaScript 日期处理类库，"),s("a",{attrs:{href:"http://momentjs.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[t._v("lodash，一个一致性、模块化、高性能的 JavaScript 实用工具库，"),s("a",{attrs:{href:"https://www.lodashjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[t._v("vue-devtools，是专门调试 vue 项目的调试工具"),s("a",{attrs:{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看工具"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[t._v("Vue performance Devtool，是专门检查 vue 组件性能的测试工具"),s("a",{attrs:{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看工具"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_7-css-预处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-css-预处理器"}},[t._v("#")]),t._v(" 7.css 预处理器")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("参考")]),t._v(" "),s("p",[s("strong",[t._v("SASS，世界上最成熟、最稳定、最强大的专业级 CSS 扩展语言！，"),s("a",{attrs:{href:"https://www.sass.hk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[t._v("Less，是一门向后兼容的 CSS 扩展语言，"),s("a",{attrs:{href:"https://less.bootcss.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[t._v("Stylus，富于表现力、动态的、健壮的 CSS，"),s("a",{attrs:{href:"https://www.stylus-lang.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v('🏷️ 问题一：在 less, sass, stylus 中，使用 @import "@/style/theme" 的语法引用目录确会报错')]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("解决办法是是在引用路径的字符串最前面添加上 ~\n")])])]),s("ul",[s("li",[s("p",[t._v("代码：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("@"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~@/style/theme.less"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//css module中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~@/assets/xxx.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// css 属性中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("img src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~@/assets/xxx.jpg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//html 标签中")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])])])]),t._v(" "),s("h2",{attrs:{id:"_6-代码规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-代码规范"}},[t._v("#")]),t._v(" 6.代码规范")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("参考")]),t._v(" "),s("p",[s("strong",[t._v("eslint，可组装的 JavaScript 和 JSX 检查工具，"),s("a",{attrs:{href:"https://eslint.bootcss.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[t._v("prettier，可组装的 JavaScript 和 JSX 检查工具，"),s("a",{attrs:{href:"https://eslint.bootcss.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[t._v("vue2 风格指南，官方的 Vue 特有代码的风格指南，"),s("a",{attrs:{href:"https://cn.vuejs.org/v2/style-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);