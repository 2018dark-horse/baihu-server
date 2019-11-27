import express from "express"
import bodyParser from "body-parser"
import { userRoute } from "./routes/user"

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))/// 获取表单数据
app.use(bodyParser.json())/// 获取json类型数据
app.use('/user',userRoute)
/// 没找到路由
app.use((req, res, next) => next())
/// 发生错误
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
	if (res.headersSent) {
		return next(err)
	}
	res.status(500)
	res.render('error', { error: err })
	/// 出现错误，关闭数据库
	var db = req['db'];
	if (db) db.close()
})
/// 监听端口
app.listen(9931)
// app.bind("0.0.0.0")
console.log('http://localhost:9931')
