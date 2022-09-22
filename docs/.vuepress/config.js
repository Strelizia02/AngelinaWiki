module.exports = {
	title: 'AngelinaBot',
	head: [
        [
            'link', { rel: 'icon', href: '/angelina.jpg' }
		]
	],
	themeConfig: {
		logo: '/angelina.jpg',
		nav: [
			{ text: 'Home', link: '/' },
			{
				text: '功能描述',
				items: [
				  { text: '基础功能', link: '/Function/基础功能' },
				  { text: '模拟抽卡', link: '/Function/模拟抽卡' },
				  { text: '游戏数据', link: '/Function/游戏数据' },
				  { text: 'B站推送', link: '/Function/B站推送' },
				  { text: '附加功能', link: '/Function/附加功能' },
				  { text: '定时任务', link: '/Function/定时任务' },
				]
			},
			{ text: '搭建部署',
				items: [
					{ text: '部署前言', link: '/Build/部署前言' },
					{ text: '登录配置', link: '/Build/登录配置' },
					{ text: '闲聊配置', link: '/Build/闲聊配置' },
					{ text: '数据更新', link: '/Build/数据更新' },
					{ text: '常见错误', link: '/Build/常见错误' },
				]
			},
			{ 
				text: '框架开发',
				items: [
					{ text: '开发须知', link: '/Frame/开发须知' },
					{ text: '框架服务', link: '/Frame/框架服务' },
					{ text: '如何开发', link: '/Frame/如何开发' }
				]
			},	  
			{ text: '关于', link: '/About' },
			{ text: '洁哥源码', link: 'https://github.com/Strelizia02/AngelinaBot' },
			{ text: '框架源码', link: 'https://github.com/Strelizia02/AngelinaFrame' },
		],
	sidebar: 'auto',
    searchMaxSuggestions: 10,
	markdown: {
		lineNumbers: true
	}
  }
}