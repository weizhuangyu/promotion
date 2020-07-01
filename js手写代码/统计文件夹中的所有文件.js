const testFolder = __dirname
const fs = require('fs')
const path = require('path')

function readFileName(dir) {
	fs.readdir(dir, (err, files) => {
		if (err) {
			console.log(err)
		}
		files.forEach(file => {
			const tempPath = path.join(dir, file)
			fs.stat(tempPath, (error, stats) => {
				if (error) {
					console.log(error)
				}
				if (stats.isFile()) {
					console.log(tempPath)
				} else {
					readFileName(tempPath)
				}
			})
		})
	})
}

readFileName(testFolder)