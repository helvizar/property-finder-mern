import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			require: true,
			unique: true,
		},
		email: {
			type: String,
			require: true,
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

// called default export so i can change the name when import it
export default User;
