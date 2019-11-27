import express from 'express'
import mysql from 'mysql'

declare global {

	//express 扩展
	namespace Express {

		//请求
		export interface Request {
			[p: string]: any
			my: mysql.Connection
		}
	}

}

