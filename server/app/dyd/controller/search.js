exports.index = async function() {
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

    this.body = "这里是 搜索 页面"

}