const express = require('express')
const app = express()
const port = 3000
let booklog = {} // variable name should be multiple but as a test it'singular

app.use(express.json())

app.post('/booklog', (req, res) => {
	booklog = req.body

	if (!(booklog.name && booklog.text)) {
		return res.json({
			"OK": false,
			"error": "invalid parameter"
		})
	}

	res.json({
		"OK": true,
		"booklog": booklog
	})
})

app.get("/booklog", (req, res) => {
	res.json({
		"OK": true,
		"booklog": [
			booklog
		]
	})
})

app.listen(port, () => {
	console.log('App Listening at http://localhost:${port}')
})
