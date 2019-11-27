import mysql from "mysql"

export class Database {
	private connected: Boolean = false
	private dbConnect?: mysql.Connection;
	/// 创建数据库连接
	public open(): void {
		let mysql_param = require('../../config/database.json')
		/// 创建数据库连接
		this.dbConnect = mysql.createConnection(mysql_param)
		/// 连接
		this.dbConnect.connect((err) => {
			if (err) {
				console.log('数据库连接失败')
				return;
			}
			this.connected = true
		})
	}

	public close(): void {
		/// 如果没有连接或者没有创建数据库连接，返回出本函数
		if (!this.connected || this.dbConnect == null) return
		/// 否则结束连接
		this.connected = false
		this.dbConnect.end()
	}

	public query<T>(sql: any, args?: Array<string | number | Array<string>>): Promise<T> {
		return new Promise<T>((resolve: (value: T) => void, reject) => {
			if (this.dbConnect == null) return
			this.dbConnect.query(sql, args, (error, results, fields) => {
				error ? reject(error) : resolve(results)
			});
		})
	}

}