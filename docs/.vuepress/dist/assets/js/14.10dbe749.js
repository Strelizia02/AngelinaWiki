(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{280:function(t,v,_){"use strict";_.r(v);var o=_(13),r=Object(o.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"开发准则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开发准则"}},[t._v("#")]),t._v(" 开发准则")]),t._v(" "),v("h2",{attrs:{id:"责任声明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#责任声明"}},[t._v("#")]),t._v(" 责任声明")]),t._v(" "),v("p",[t._v("AngelinaFrame（以下简称为"),v("strong",[t._v("本项目")]),t._v("）为基于SpringBoot，简化Java开发QQBot的框架，"),v("strong",[t._v("本项目")]),t._v("并不提供任何QQ协议。本质上可以集成任何一款QQBot框架，通过QQBot框架提供的QQ协议，进行自动化的接受、回复消息功能。")]),t._v(" "),v("hr"),t._v(" "),v("div",{staticClass:"custom-block danger"},[v("p",{staticClass:"custom-block-title"},[t._v("再次强调，使用本项目请务必遵守当地法律法规，禁止使用本项目进行任何违法违规活动，包括但不限于：")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://www.baidu.com/s?ie=UTF-8&wd=%E4%BC%A0%E6%92%AD%E5%9E%83%E5%9C%BE%E4%BF%A1%E6%81%AF%E5%88%A4%E5%87%A0%E5%B9%B4",target:"_blank",rel:"noopener noreferrer"}},[t._v("传播垃圾广告"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.baidu.com/s?ie=UTF-8&wd=%E4%BC%A0%E6%92%AD%E6%B7%AB%E7%A7%BD%E4%BF%A1%E6%81%AF%E5%88%A4%E5%87%A0%E5%B9%B4",target:"_blank",rel:"noopener noreferrer"}},[t._v("传播违禁资源"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.baidu.com/s?ie=UTF-8&wd=%E4%BC%A0%E9%94%80%E6%9C%80%E9%AB%98%E5%88%A4%E5%87%A0%E5%B9%B4",target:"_blank",rel:"noopener noreferrer"}},[t._v("运营非法活动"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.baidu.com/s?ie=UTF-8&wd=%E7%94%B5%E4%BF%A1%E8%AF%88%E9%AA%97%E6%9C%80%E9%AB%98%E5%88%A4%E5%87%A0%E5%B9%B4",target:"_blank",rel:"noopener noreferrer"}},[t._v("电信诈骗"),v("OutboundLink")],1)])])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[v("strong",[t._v("本项目")]),t._v("中需要明文配置QQ账号密码，有极高的密码泄露风险，请勿使用高价值QQ账号进行开发、调试、运营。")])]),t._v(" "),v("p",[t._v('QQ账号存在调用发送消息接口成功，但是实际发送失败的情况。这种情况我们一般称为"风控"。')]),t._v(" "),v("p",[t._v('"'),v("strong",[t._v("风控")]),t._v('"原因分为几种：')]),t._v(" "),v("ul",[v("li",[v("p",[t._v('新注册账号 新注册账号有可能会被长时间"'),v("strong",[t._v("风控")]),t._v('"，建议注册账号后，经常使用账号聊天提高活跃度，再进行开发、测试。')])]),t._v(" "),v("li",[v("p",[t._v("第一次使用某QQ协议 例如"),v("strong",[t._v("本项目")]),t._v('中默认使用的MiraiQQ框架，第一次登录时必定会出现"'),v("strong",[t._v("风控")]),t._v('"。请使用该协议保持在线状态一段时间，约1~3天自动解除。')])]),t._v(" "),v("li",[v("p",[t._v('账号被封禁 账号因违反用户协议被封禁/冻结等，解封后会有1-3天的"'),v("strong",[t._v("风控")]),t._v('"期。')])]),t._v(" "),v("li",[v("p",[t._v('切换设备登录 Mirai框架本质上会根据你的物理设备信息生成一个模拟的登录设备信息，当你切换运行环境，极大可能会经历滑块验证码/常用设备验证/"'),v("strong",[t._v("风控")]),t._v('"等。')])]),t._v(" "),v("li",[v("p",[t._v('其他框架的"'),v("strong",[t._v("风控")]),t._v('"原因与上述原因类似，多数情况均可通过"使用该框架保持登录状态1-3天"的方式解决。')])])]),t._v(" "),v("hr"),t._v(" "),v("p",[v("strong",[t._v("本项目")]),t._v("原则上不会保存"),v("strong",[t._v("聊天记录")]),t._v("，但"),v("strong",[t._v("聊天记录")]),t._v("会打印成日志。因此有可能出现"),v("strong",[t._v("用户隐私泄露")]),t._v("的情况（闪照依然会被记录在日志中），请各位开发者务必通知用户有关"),v("strong",[t._v("隐私保护")]),t._v("的内容。")]),t._v(" "),v("h2",{attrs:{id:"开源协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开源协议"}},[t._v("#")]),t._v(" 开源协议")]),t._v(" "),v("p",[v("strong",[t._v("本项目")]),t._v("使用AGPLv3.0协议开源，原则上引用或间接引用"),v("strong",[t._v("本项目")]),t._v("的代码都应开源。")]),t._v(" "),v("p",[v("strong",[t._v("本项目")]),t._v("开发目的为学习、讨论，请各位开发者尽可能避免商业用途。")]),t._v(" "),v("h2",{attrs:{id:"开发规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[t._v("#")]),t._v(" 开发规范")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("以下开发规范仅为"),v("strong",[t._v("个人建议")]),t._v("，希望各位开发者在使用"),v("strong",[t._v("本项目")]),t._v("开发QQBot的过程中，能够遵循以下开发规范")])]),t._v(" "),v("h3",{attrs:{id:"bot与账号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bot与账号"}},[t._v("#")]),t._v(" Bot与账号")]),t._v(" "),v("p",[t._v("Bot为一个服务主体，一个Bot有可能由多个QQ账号组合而成。而用户无需关心具体的QQ账号，仅需在QQ群聊/私聊，输入Bot的命令，即可收到1条来自Bot的回复。")]),t._v(" "),v("h3",{attrs:{id:"bot的唤起"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bot的唤起"}},[t._v("#")]),t._v(" Bot的唤起")]),t._v(" "),v("p",[t._v("每个Bot都应该拥有一个属于自己的名字，并且在实际的唤起Bot的方法中，必须使用该名称进行唤起。")]),t._v(" "),v("p",[t._v("我认为，作为一个合格的Bot开发者，首要考虑的并不是你的Bot功能应该做到多么丰富，而是需要保证在用户不想使用的情况下，不要让Bot打扰用户的正常聊天。\n同时Bot命名也可以降低多个Bot包含同样触发条件时，循环触发导致死循环的风险。")]),t._v(" "),v("p",[t._v("因此将你的Bot进行命名，并且开发者使用的时候必须键入Bot的名称，否则一切业务逻辑(除定时任务)都不会触发。")]),t._v(" "),v("p",[t._v("例如：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("【洁哥天气】——触发名为洁哥Bot的查看天气功能 √")])]),t._v(" "),v("li",[v("p",[t._v("【天气】——触发查看天气功能 "),v("strong",[t._v("×")])])])]),t._v(" "),v("p",[t._v("原因：用户正常聊天中，某些词属于高频触发，例如当用户在发送")]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("玩亚索又是0-7，今天气死我了")]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("本质上没有主观唤起bot，却因为包含某些字样触发了Bot。")]),t._v(" "),v("ul",[v("li",[t._v("【早安】——触发早安回复功能 "),v("strong",[t._v("×")])])]),t._v(" "),v("p",[t._v("用户输入早安后，因为群内包含多个Bot，导致连续触发")]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("用户：早安")]),t._v(" "),v("p",[t._v("Bot1：早安，用户")]),t._v(" "),v("p",[t._v("Bot2：早安，用户")]),t._v(" "),v("p",[t._v("Bot2：早安，Bot1")]),t._v(" "),v("p",[t._v("Bot1：早安，Bot2")]),t._v(" "),v("p",[t._v("...")]),t._v(" "),v("hr"),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("本项目中强制要求开发者配置botNames信息")])]),t._v(" "),v("h3",{attrs:{id:"bot定时任务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bot定时任务"}},[t._v("#")]),t._v(" Bot定时任务")]),t._v(" "),v("p",[t._v('部分Bot业务中可能会包含定时任务的功能，例如"早安问候"，"生日提醒"等。')]),t._v(" "),v("p",[t._v('在安排定时任务时，应遵循"低频率"的原则，不要让Bot的定时任务不断的刷屏影响用户正常使用。')]),t._v(" "),v("h3",{attrs:{id:"bot速率限制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bot速率限制"}},[t._v("#")]),t._v(" Bot速率限制")]),t._v(" "),v("p",[t._v("鉴于多个Bot之间循环发送的情况较多，Bot的开发者最好在Bot代码中限制单人的回复速率，防止多个Bot之间死循环。")]),t._v(" "),v("p",[v("strong",[t._v("本项目")]),t._v("中已包含速率限制，单人10s内超过3条消息，会提示效率过快，超过5条消息会停止回复该用户，直到最近10s内消息总数小于3条恢复正常。（正常单人连续聊天速率约为1条/3秒）")]),t._v(" "),v("h3",{attrs:{id:"用户输入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用户输入"}},[t._v("#")]),t._v(" 用户输入")]),t._v(" "),v("p",[t._v("应让用户去学习你的Bot使用方式，而不是让你的Bot很轻易就可以被用户输入唤起。一定要对用户的输入做校验。")]),t._v(" "),v("p",[t._v('作为一个专业的开发者，永远不要相信你的用户输入，尽可能减少直接输出用户的输入内容。用户的输入具有多样化的特性，经典"用户点了一碗炒饭"的问题，尤其是部分恶意用户会利用你的系统漏洞作出攻击，简单的攻击比如有一个复读机功能，用户让你的Bot复读一个违禁语句，然后举报，这会导致你的Bot封号。')]),t._v(" "),v("p",[t._v('网络安全中，多数的系统漏洞都是因为相信用户输入而造成"用户点了一碗炒饭，酒吧炸了"的情况，无论是从你的账号安全角度，还是从Bot的运行稳定性角度，都尽可能的不去相信用户输入，减少各种意外风险。')]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("漏洞案例：相信用户输入导致的漏洞，java史上最大漏洞，log4j的jndi注入。")]),t._v(" "),v("hr")])}),[],!1,null,null,null);v.default=r.exports}}]);