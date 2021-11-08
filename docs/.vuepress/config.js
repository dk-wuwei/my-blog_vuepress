module.exports = {
    title: '如意如意随心所欲',
    description: 'This is my blog',
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    theme: 'meteorlxy',
    themeConfig: {
        lang: 'zh-CN',
        personalInfo: {
            nickname: 'Aiden',
            description: 'Aiden 一个00后带专前端CV工程师',
            email: '2496675826@qq.com',
            location: '郑州',
            avatar: '/image/avatar.jpg',
            // 社交平台帐号信息
            sns: {
                // Github 帐号和链接
                github: {
                    account: 'Aiden',
                    link: 'https://github.com/Adeng-00',
                },

                // 掘金 帐号和链接
                juejin: {
                    account: 'Aiden',
                    link: 'https://juejin.cn/user/536217407720958',
                },
            },
        },
        // 上方 header 的相关设置 (可选)
        header: {
            // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
            background: {
                // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
                url: '/image/home_img.jpg',
                // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
                // useGeo: true,
            },
            // 是否在 header 显示标题
            showTitle: true,
        },
        // 底部 footer 的相关设置 (可选)
        footer: {
            // 是否显示 Powered by VuePress
            poweredBy: false,
            // 是否显示使用的主题
            poweredByTheme: false,
            // 添加自定义 footer (支持 HTML)
            // Copyright   & copy;
            custom: '以上皆为 <a href = "javascript:;">如意如意随我心意</a> 文章发布平台<br /> <span> Copyright &copy; 2021-2024</span><a href="https://github.com/Adeng-00" target="_blank">@Aiden</a>',
        },
        // 是否显示文章的最近更新时间
        lastUpdated: true,
        // 顶部导航栏内容
        nav: [
            { text: '首页', link: '/', exact: true },
            { text: '文章', link: '/posts/', exact: false },
        ],
        // 是否开启平滑滚动
        smoothScroll: true,
        // vuepress-plugin-zooming 的配置项
        zooming: {
            // @see https://vuepress.github.io/en/plugins/zooming
        },
        // 分页配置 (可选)
        pagination: {
            perPage: 6,
        },
        // 默认页面（可选，默认全为 true）
        defaultPages: {
            // 是否允许主题自动添加 Home 页面 (url: /)
            home: true,
            // 是否允许主题自动添加 Posts 页面 (url: /posts/)
            posts: true,
        },
        // 禁用评论功能
        comments: false,
    },
    // markdown配置
    markdown: {
        lineNumbers: true//代码显示行号
    },
    // 添加复制代码块功能 yarn add vuepress-plugin-code-copy
    plugins: [['vuepress-plugin-code-copy', true]]
    // plugins: [
    //         ['vuepress-plugin-good-copycode', {
    //         copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
    //         copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
    //         duration: 300, // prompt message display time.
    //         showInMobile: false, // whether to display on the mobile side, default: false.
    //         copyTitle: "复制代码",
    //         copyName: "复制"
    //     }],
    //     // ['vuepress-plugin-code-copy',
    //     //     {
    //     //         // selector: 'div[class*="language-"] pre',
    //     //         // align: 'bottom', //对其 top bottom
    //     //         color: '#fc2222',//颜色
    //     //         backgroundTransition: true,//背景转换 当用户按下复制按钮时，启用附加代码块的背景过渡动画
    //     //         backgroundColor: '#f63d3d',//背景颜色
    //     //         successText: '已复制到剪切板！',//复制成功时 提示信息
    //     //         staticIcon: true // false 时 “复制图标” 鼠标悬停可见，true时始终可见
    //     //     }
    //     // ]
    // ]
}