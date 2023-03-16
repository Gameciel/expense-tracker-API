export const getExpensesWithParam = (
	datas,
	requestParameter,
	request,
	response
) => {
	if (requestParameter.includes("id")) {
		const indexAt = getMeIndex(datas, request.query.id);

		indexAt < 0
			? response.status(404).send(`Not found`)
			: response.status(200).send(datas[indexAt]);
	} else if (requestParameter.includes("category")) {
		response
			.status(200)
			.send(datas.filter(data => data.category === request.query.category));
	} else if (
		requestParameter.includes("date-start") &&
		requestParameter.includes("date-end")
	) {
		const dateStart = new Date(request.query["date-start"]);
		const dateEnd = new Date(request.query["date-end"]);

		response.status(200).send(
			datas.filter(data => {
				return (
					new Date(data.date) >= dateStart && new Date(data.date) <= dateEnd
				);
			})
		);
	}
};
