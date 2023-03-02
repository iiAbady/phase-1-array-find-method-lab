// code your solution here
function superbowlWin(record) {
	const res = record.find(element => element.result == "W");
	return res ? res.year : undefined;
}