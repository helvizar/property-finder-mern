import User from "../models/user.model.js";
import bcryptjs from "bcrypt";

export const signup = async (req, res, next) => {
	//destructure
	const { username, email, password } = req.body;

	//hash the password to make it excrypted (hashSync is wait for the hash)
	const hashedPassword = bcryptjs.hashSync(password, 10); //10 = salt => number to be combine with password
	//save inside the database
	const newUser = new User({ username, email, password: hashedPassword });
	//send error to the users
	try {
		await newUser.save();
		//create a respond
		res.status(201).json("user created successfully.");
	} catch (error) {
		next(error);
	}
	//prevent error using "await" so the code stay in this line until it finished
};
