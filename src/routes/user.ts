import express from "express"
import mysql from 'mysql'/// 数据库操作
import { Database } from '../lib/database'
import { User } from '../model/user'

export const userRoute = express.Router()

var db = new Database()
/// 获取用户信息(单个用户)
userRoute.get('/', async (req, res) => {
	req['db'] = db;
	/// 数据库连接
	db.open()
	//请求头拿到到数据
	// req.headers['token']
	// 获取客户端传过来的参数
	var id = req.query.id;
	if (!id) {
		res.json({ "code": 400, "message": "没有用户ID", "data": {} })
		return;
	}
	// 数据库操作
	try {
		var value = await db.query<[User]>("SELECT * FROM USER WHERE ID=?", [id])
		if (value && value.length > 0) {
			res.json({ "code": 200, "message": "修改成功", "data": value[0] })
		}
	} catch (error) {
		res.json({ "code": 400, "message": "修改失败", "data": null })
	}
	// 数据库关闭(为了安全，每次调用都要重新连接和关闭)
	db.close()
})
/// 修改
userRoute.put('/', async (req, res) => {
	req['db'] = db;
	/// 数据库连接
	db.open()
	//请求头拿到到数据
	// req.headers['token']
	// 获取客户端传过来的参数
	var id = req.body.id;
	if (!id) {
		res.json({ "code": 400, "message": "没有用户ID", "data": {} })
		return;
	}
	var name = req.body.name;
	var age = req.body.age;
	var phone = req.body.phone;
	var grender = req.body.grender;
	
	// 数据库操作
	try {
		await db.query<[User]>("UPDATE USER SET name=?,age=?,phone=?,grender=? WHERE id=?", [name, age, phone, grender, id])
		res.json({ "code": 200, "message": "修改成功", "data": req.body })
	} catch (error) {
		res.json({ "code": 400, "message": "修改失败", "data": null })
	}
	// 数据库关闭(为了安全，每次调用都要重新连接和关闭)
	db.close()
})
/// 删除
userRoute.delete('/', async (req, res) => {
	req['db'] = db;
	/// 数据库连接
	db.open()
	//请求头拿到到数据
	// req.headers['token']
	// 获取客户端传过来的参数
	var id = req.body.id;
	if (!id) {
		res.json({ "code": 400, "message": "没有用户ID", "data": {} })
		return;
	}
	
	// 数据库操作
	try {
		await db.query<[User]>("DELETE FROM USER WHERE id=?", [id])
		res.json({ "code": 200, "message": "删除成功", "data": true })
	} catch (error) {
		res.json({ "code": 400, "message": "删除失败", "data": false })
	}

	// 数据库关闭(为了安全，每次调用都要重新连接和关闭)
	db.close()
})
/// 新增
userRoute.post('/', async (req, res) => {
	req['db'] = db;
	/// 数据库连接
	db.open()
	var name = req.body.name;
	var age = req.body.age;
	var phone = req.body.phone;
	var grender = req.body.grender;
	// 数据库操作
	try {
		await db.query<[User]>("INSERT INTO USER(name,age,phone,grender) VALUES(?,?,?,?)", [name, age, phone, grender])
		var result = await db.query<[User]>("SELECT * FROM USER ORDER BY id DESC limit 1")
		if (result && result.length > 0) {
			res.json({ "code": 200, "message": "新增成功", "data": result[0] })
		}
	} catch (error) {
		res.json({ "code": 400, "message": "新增失败", "data": null })
	}
	// 数据库关闭(为了安全，每次调用都要重新连接和关闭)
	db.close()
})

