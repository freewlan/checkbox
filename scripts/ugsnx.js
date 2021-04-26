const rules = {
  name: "【ug爱好者】： ",
  type: 2, //签到类型 2 需要formhash
  op: "签到",
  url1: "http://www.ugsnx.com/forum.php?mod=guide&view=newthread&mobile=2", //用于获取formhash的链接
  cookie: config.ugsnx.cookie,
  charset:"gb2312",
  reg1: 'formhash=(.+?)"', //formhash正则
  verify: "有你更精彩！", //验证cookie状态
  signmethod: "get", //签到请求方式 get/post
  signurl: "http://www.ugsnx.com/plugin.php?id=dsu_amupper&ppersubmit=true&nogoto=1&formhash=@formhash&mobile=2&inajax=1", //签到链接
  reg2: "签到完毕", //重复签到判断
  reg3: "签到成功", //签到成功判断
  info: "p>由于您累计签到\\d+次，连续签到\\d+次，特奖励：G币 \\d+", //签到成功返回信息
};

async function ugsnx(){
const template = require("../Template");
return rules.name+await template(rules)
}
module.exports=ugsnx