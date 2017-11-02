exports.home = async function() {
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

    this.body = "这里是用户 详情 页面 ---" + this.params.id + "用户"

}
exports.home.__regular__ = '/:id';

exports.post = async function() {
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

    this.body = "这里是用户 帖子 列表 ---" + this.params.id + "用户"

}

exports.post.__regular__ = '/:id';

exports.collect = async function() {
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

    this.body = "这里是用户 收藏 帖子 列表 ---" + this.params.id + "用户"

}

exports.collect.__regular__ = '/:id';

exports.area = async function() {
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

    this.body = "这里是用户 关注 专区 列表 ---" + this.params.id + "用户"

}

exports.area.__regular__ = '/:id';

exports.msgboard = async function() {
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

    this.body = "这里是用户 留言板 ---" + this.params.id + "用户"

}

exports.msgboard.__regular__ = '/:id';