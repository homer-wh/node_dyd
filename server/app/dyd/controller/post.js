exports.all = async function() {
    await this.bindDefault();

    /**
   * 其实你还可以这么写proxy:
	  await this.proxy({
	  	repoInfo: 'github:repos/xiongwilee/koa-grace'
	  })
   * 然后在 this.backData.repoInfo 中就可以拿到返回参数
   */

    /* await this.render('home', {
        title: 'Hello , dyd!'
    }); */

    this.body = "这里是帖子 列表 页面"

}

exports.detail = async function() {
    await this.bindDefault();

    /**
   * 其实你还可以这么写proxy:
	  await this.proxy({
	  	repoInfo: 'github:repos/xiongwilee/koa-grace'
	  })
   * 然后在 this.backData.repoInfo 中就可以拿到返回参数
   */

    /* await this.render('home', {
        title: 'Hello , dyd!'
    }); */

    this.body = "这里是帖子 详情 页面 ---" + this.params.id + "帖"

}

exports.detail.__regular__ = '/:id';