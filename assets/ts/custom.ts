console.log('custom.ts');

declare function Tags(config: any): void;  // 声明Tags函数，因为它可能在其他脚本中定义

// 下面的代码可以保持大致不变
const config = {
    style: {
        fn: Style1,
        title: '是小菜啊',
        animation: 0,
        scale: 0.48,
        randomScoreIfNoSetting: 1
    },
    text:  `
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
  `,  // 省略了具体的文本内容，你可以将其复制过来
    rootDOM: document.getElementById('test')
};

Tags(config);
