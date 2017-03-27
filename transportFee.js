module.exports = function (shift){
  	switch(shift){
      	case "morning":
        	return "R20";
      	case "afternoon":
        	return "R10";
      	case "night":
        	return "R0";
      	default:
        	return "free"
    };
};
