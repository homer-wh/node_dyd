exports.index = async function() {
    await this.bindDefault();

    /**
   * 其实你还可以这么写proxy:
	  await this.proxy({
	  	repoInfo: 'github:repos/xiongwilee/koa-grace'
	  })
   * 然后在 this.backData.repoInfo 中就可以拿到返回参数
   */
    await this.proxy({
        cos_area: 'dyd:main/arearanking?subareaId=104003'
    });

    console.log(this.backData);

    await this.render('index', {
        title: 'Hello ,Index dyd!',
        index_areas: [
            {
                num: 1,
                type: 'normal',
                name: '动漫',
                posts: [
                    {
                        title: '这是一个动漫帖的title',
                        counts: 999
                    },
                    {
                        title: '这是一个动漫帖的title',
                        counts: 888
                    },
                ]
            },
            {
                num: 2,
                type: 'media',
                name: '视频',
                posts: [
                    {
                        title: '这是一个视频帖的title',
                        counts: 999
                    },
                    {
                        title: '这是一个视频帖的title',
                        counts: 888
                    },
                ]
            },
            {
                num: 3,
                type: 'normal',
                name: '交友',
                posts: [
                    {
                        title: '这是一个交友帖的title',
                        counts: 999
                    },
                    {
                        title: '这是一个交友帖的title',
                        counts: 888
                    },
                ]
            },
            {
                num: 4,
                type: 'media',
                name: '番剧',
                posts: [
                    {
                        title: '这是一个番剧帖的title',
                        counts: 999
                    },
                    {
                        title: '这是一个番剧帖的title',
                        counts: 888
                    },
                ]
            }
        ],
        cos_area: [
            {
                num: 1,
                type: 'normal',
                name: 'cos',
                posts: [
                    {
                        title: '这是一个COS帖的title',
                        counts: 999
                    },
                    {
                        title: '这是一个COS帖的title',
                        counts: 888
                    },
                ]
            }
        ]
    });
}
