const mongoose = require("mongoose");
const houseScheme = new mongoose.Schema({
	category: {
		type: String,
	},
	description: String,
	houseName: String,
	buildingArea: String,
	address: String,
	info: {
		garages: String,
		bed: String,
		bathroom: String,
	},
	monthlyCost: {
		total: String,
		principal: String,
		tax: String,
		insurance: String,
	},
	owner: {
		name: String,
		rating: String,
	},
	images: [String],
	updatedAt: {
		type: Date,
		default: () => new Date(),
	},
	createdAt: {
		type: Date,
		immutable: true,
		default: () => new Date(),
	},
});
module.exports = mongoose.model("house", houseScheme);

// {
// 		id: "n1",
// 		category: "House",
// 		houseName: "Ram Villa",
// 		address: "Mayur Vihar South Delhi",
// 		buildingArea: 3212,
// 		info: {
// 			garages: 2,
// 			bed: 2,
// 			bathroom: 1,
// 		},
// 		monthlyCost: {
// 			total: 1120,
// 			principal: 840,
// 			tax: 224,
// 			insurance: 56,
// 		},
// 		owner: {
// 			name: "Andrew Cano",
// 			rating: 4.8,
// 		},
// 		images: [
// 			"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
// 			"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1775&q=80",
// 			"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
// 			"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
// 			"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1775&q=80",
// 			"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
// 		],
// 	}
