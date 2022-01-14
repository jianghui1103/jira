/*
 * @Author: your name
 * @Date: 2022-01-05 00:16:23
 * @LastEditTime: 2022-01-13 13:03:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/__json_server_mock__/middleware.js
 */
module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "jack" && req.body.password === "123456") {
      console.log(req);
      return res.status(200).json({
        user: {
          token: "123",
          name: "jack",
        },
      });
    } else {
      return res.status(400).json({
        message: "用户名密码错误",
      });
    }
  }
  if (req.method === "GET" && req.path === "/me") {
    return res.status(200).json({
      user: {
        token: "123",
        name: "jack",
      },
    });
  }
  next();
};
