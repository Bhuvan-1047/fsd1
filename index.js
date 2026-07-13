const express = require("express")

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
});

app.get("/",(req, res) => {
    res.send("Hello CSE-A...")
});

app.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT}`); 
})

