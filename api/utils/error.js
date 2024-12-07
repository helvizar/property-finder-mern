export const errorHandler = (statusCode, message) => {
	//using javascript error constructor
	const error = new Error();
	error.statusCode = statusCode;
	error.message = message;
	return error;
};
