const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3002;
const mongoose = require("mongoose");
const cors = require("cors");
const house = require("./models/house");

// const URL = `mongodb+srv://${process.env.UID}:${process.env.PASSWORD}@cluster0.vpid4.mongodb.net/?retryWrites=true&w=majority`;

const URL = `mongodb+srv://houserent:houserent@cluster0.vpid4.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(
	URL,
	() => console.log("connected"),
	(err) => console.log(err),
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Listining at port ${PORT}`));

app.get("/", async (req, res) => {
	res.json("Welcome to the Blogs api 🔥");
});

async function createHouseData(data) {
	try {
		const res = await house.create(data);
		console.log(res);
		return [null, res];
	} catch (error) {
		console.log(error.message);
		return [error.message, null];
	}
}
// app.get("/house/list", async (req, res) => {
// 	const result = await house.find({});
// 	return res.status(200).json(result);
// });

app.get("/house/list", async (req, res) => {
	try {
		const result = await house.find({}).sort({ _id: -1 });
		return res.status(200).json(result);
	} catch (error) {
		return res
			.status(500)
			.json({ error: "An error occurred while retrieving the house list." });
	}
});


app.get("/house/:id", async (req, res) => {
	var result = await house.findById(req.params.id);
	res.status(200).json(result);
});

app.post("/house", (req, res) => {
	console.log(req.body);
	createHouseData(req.body);
	return res.status(200).json(req.body);
});

app.post("/house/:id", async (req, res) => {
	const { id } = req.params;
	const updateData = req.body;

	try {
		const updatedHouse = await house.findByIdAndUpdate(id, updateData, {
			new: true,
		});

		if (!updatedHouse) {
			return res.status(404).json({ error: "House not found." });
		}

		return res.status(200).json(updatedHouse);
	} catch (error) {
		return res
			.status(500)
			.json({ error: "An error occurred while updating the house." });
	}
});