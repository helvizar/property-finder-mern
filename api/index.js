import express from "express";
import mongoose from "mongoose";

mongoose.connect(
	"mongodb+srv://helvizar:helvizar@property-finder-mern.fura2.mongodb.net/?retryWrites=true&w=majority&appName=property-finder-mern"
);

const app = express();

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
