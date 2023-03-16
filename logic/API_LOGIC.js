export const autoIncrementID = datas => datas[datas.length - 1].id + 1;

export const getMeIndex = (datas, requestedID) => {
	return datas.findIndex(data => data.id == requestedID);
};
