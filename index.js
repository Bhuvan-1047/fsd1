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

app.get('/search', (req, res) => {
	const { keyword, type } = req.query;
	res.send(`Search Query Received - Keyword: ${keyword}, Type: ${type}`); 
});

app.get('/redirect-to-user/:name', (req, res) => {
	const name = req.params.name; // Build a new URL to redirect
	const userProfileURL = `/profile/${name}?details=full`; res.redirect(userProfileURL);
});

app.get('/profile/:name', (req, res) => {
	const name = req.params.name; const details = req.query.details;
	res.send(`Profile Page of ${name} - Details: ${details}`); 
});

app.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT}`); 
})