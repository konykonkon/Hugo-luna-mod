---
title: "About"
date: 2017-01-14T06:31:45+00:00
layout: "page"
type: page
comments: true
---
# About me

![](/img/about.gif)

{{< tab-view >}}

{{< tab-panel name="我是谁" checked=true >}}

> 通信工程硕士<del class="text-gray-300">在读</del>，祝我顺利毕业。
>
> 在学习CS相关知识，希望能够从事后端开发。
>
> 热爱播客，喜欢捣鼓，希望获得更多的人生体验。
>
> [🔖我在读些什么](https://shixiaocaia.fun/books/)，[🎞️我在看些什么](https://shixiaocaia.fun/movies/)，[📝我在记些什么](https://note.shixiaocaia.fun/#/)


{{< /tab-panel >}}


{{< tab-panel name="时间线" >}}


{{< timeline "2023-08-28 我想回家种田..." "2022-08-28 我来到了上海" "2022-06-03 梦开始的地方" >}}

{{< /tab-panel >}}

{{< tab-panel name="友链" >}}

欢迎评论添加友链，希望你也是一个热爱生活的人，已建站一段时间、有一定内容，如果才开始希望你能坚持下去，而不是一时兴起~ 

```html
title: `Shixiaocaia `

url: `https://shixiaocaia.fun `

avatar: `https://bu.dusays.com/2022/12/25/63a806f74cf5e.jpg`

description: `去做吧，反正都会后悔。`
```


{{< /tab-panel >}}

{{< /tab-view >}}

<style>
    #test {
        width: auto;
        height: auto;
        overflow: hidden !important; 
      }
    #my-tags mark {
    position: initial!important;
    padding: 1%!important;
    }
</style>
<div id="test"></div>
<script src="/tags-wall.js"></script>
<script>
	Tags({
	style: {
	fn: Style1,
	title: '是小菜啊',
	animation: 0,
	scale: 0.48,
	randomScoreIfNoSetting: 1 // 如果是1，则如果未设置标签大小那么随机设置一个大小；否则使用默认大小5
  },
  text: `
  偶尔读书/10/关于我/https:&#47;&#47;shixiaocaia.fun/books&#47
  有时电影/10/关于我/https:&#47;&#47;shixiaocaia.fun/movies&#47
  静静学习/10/关于我/https:&#47;&#47;note.shixiaocaia.fun&#47
  拜访另一个世界/10/关于我/https:&#47;&#47;storeweb.cn/s/1488
  人生最优体验/8/关于我
  很少运动/8/关于我
  情绪表达者/7/关于我
  盐纠生/6/关于我
  双人成行/5/game
  坂本龙一/7/是爱好
  自行车/7/是爱好
  Hello world/8/是爱好
  Cooking/8/是爱好
  谐星聊天会/8/podcast/
  阿弥晚安/8/podcast
  纵横四海/7/podcast
  肥话连篇/8/podcast
  `,
  rootDOM: document.getElementById('test')
})
</script>
