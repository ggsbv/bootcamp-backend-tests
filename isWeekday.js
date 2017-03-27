module.exports = function (day){
	var isWeekday = !day.startsWith('S');
  return isWeekday;
};
