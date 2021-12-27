module.exports = {
    title: '如意如意随我心意',
    description: 'This is dkwuwei blog',
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    theme: 'meteorlxy',
    themeConfig: {
        lang: 'zh-CN',
        personalInfo: {
            nickname: 'dkwuwei',
            description: '一个带专前端CV工程师',
            email: '2496675826@qq.com',
            location: '郑州',
            organization: '',
            avatar: '/image/avatar.jpg',
            // 社交平台帐号信息
            sns: {
                // Github 帐号和链接
                github: {
                    account: 'dkwuwei',
                    link: 'https://github.com/dk-wuwei',
                },
                // 掘金 帐号和链接
                juejin: {
                    account: 'dkwuwei',
                    link: 'https://juejin.cn/user/536217407720958',
                }
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
            custom: '<a href="https://beian.miit.gov.cn/">豫ICP备2021031684号-1</a> <br /> 以上皆为 <a href="javascript:;">&copy; 如意如意随我心意</a> 文章发布平台<br />',
        },
        // 是否显示文章的最近更新时间
        lastUpdated: true,
        // 顶部导航栏内容
        nav: [
            { text: '首页', link: '/', exact: true },
            { text: '文章', link: '/posts/', exact: false },
            { text: '关于我', link: '/about/', exact: false },
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
        // comments: false,
        comments: {
            platform: 'github', // 可选，默认使用 'github'，还可以选择 'gitlab', 'bitbucket'。详情参考 Vssue 文档
            owner: 'dk-wuwei',
            repo: 'my-blog_vuepress',
            clientId: '75168500f80982f42a54',
            clientSecret: '3bc394459fdb3a85386cfc680a685fec12a6a71b',
            autoCreateIssue: process.env.NODE_ENV !== 'development', // 可选，这样设置可以在开发环境下不自动创建 Issue
            prefix: '[Comments] ',
            labels: ['comments']
        }
    },
    // markdown配置
    markdown: {
        lineNumbers: true, //代码显示行号
        toc: {
            includeLevel: [1, 2, 3, 4]
        }
    }
}