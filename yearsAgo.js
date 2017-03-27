module.exports = function (year){
  var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
  var yearsDiff = currentYear - year;
  return yearsDiff;
}
