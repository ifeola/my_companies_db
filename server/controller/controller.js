import database from "../database/database.js";

const getCustomers = (request, response) => {
	database.query("SELECT * FROM customers", (error, result) => {
		if (error) return response.staus(500).json({ message: error.message });
		return response
			.status(200)
			.json({ customers: result, length: result.length });
	});
};

const getCustomer = (request, response) => {
	let customerID = request.params.id;

	if (customerID !== Number) customerID = Number(customerID);

	database.query(
		"SELECT * FROM customers WHERE CustomerID = ?",
		[customerID],
		(error, result) => {
			if (error) return response.staus(500).json({ message: error.message });
			return response
				.status(200)
				.json({ customers: result, length: result.length });
		}
	);
};

export { getCustomers, getCustomer };
