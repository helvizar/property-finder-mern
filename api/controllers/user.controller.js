export const test = (req, res) => {
	//req = request data send from client to server. res = respond feedback from server to client
	res.json({
		message: "API route is working!",
	});
};
