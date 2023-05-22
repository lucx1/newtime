window.setInterval(cktd, 1);
setlang(navigator.language);
var usewords = false;
function cktd() {
	var d = new Date();
	var newTime = new Array();
	var newtimecalc = (d.getMilliseconds() + (d.getSeconds()*1000) + (d.getMinutes()*60000) + (d.getHours()*3600000))/(347 + 2/9);
	if (d.getMonth() == 0) {
		var newdatecalc = 0;
	} else if (d.getMonth() == 1) {
		var newdatecalc = 31;
	} else if (d.getMonth() == 2) {
		var newdatecalc = 59;
	} else if (d.getMonth() == 3) {
		var newdatecalc = 90;
	} else if (d.getMonth() == 4) {
		var newdatecalc = 120;
	} else if (d.getMonth() == 5) {
		var newdatecalc = 151;
	} else if (d.getMonth() == 6) {
		var newdatecalc = 181;
	} else if (d.getMonth() == 7) {
		var newdatecalc = 212;
	} else if (d.getMonth() == 8) {
		var newdatecalc = 243;
	} else if (d.getMonth() == 9) {
		var newdatecalc = 273;
	} else if (d.getMonth() == 10) {
		var newdatecalc = 304;
	} else if (d.getMonth() == 11) {
		var newdatecalc = 334;
	}
	newdatecalc = newdatecalc + d.getDate() - 152;
	if (newdatecalc < 0) {
		newdatecalc = newdatecalc + 365;
	}
	var newyear = d.getFullYear();
	if (d.getMonth() <= 4) {
		newyear = newyear - 2018;
	} else {
		newyear = newyear - 2017;
	}
	var totalday = (newyear - 1)*365 + newdatecalc;
	var twelvetotal = convertToTwelve(parseInt(newtimecalc));
	while (twelvetotal.length < 6) {
		twelvetotal = "0" + twelvetotal;
	}
	var twelvehour = twelvetotal[1];
	var twelvemin = twelvetotal[2] + twelvetotal[3];
	var twelvesec = twelvetotal[4] + twelvetotal[5];
	var twelveyear = convertToTwelve(newyear);
	var twelvedayofyear = convertToTwelve(newdatecalc);
	var twelveday = convertToTwelve(totalday);
	if (setlanguage.includes("kalestia") && !usewords) {
		twelveyear = twelveyear + "'m";
		twelvedayofyear = twelvedayofyear + "'m";
		twelveday = twelveday + "'m";
	}
	if (!usewords) {
		var twelvetime = twelvehour + ":" + twelvemin + ":" + twelvesec;
	} else {
		twelveyear = initiatewords(twelveyear);
		twelvedayofyear = initiatewords(twelvedayofyear);
		twelveday = initiatewords(twelveday);
		var twelvetime = "";
		if (twelvehour == "0") {
			twelvetime = twelvetime + "zero ";
		} else {
			twelvetime = twelvetime + initiatewords("00000" + twelvehour);
		}
		if (twelvemin == "00") {
			twelvetime = twelvetime + "o'clock";
		} else {
			twelvetime = twelvetime + initiatewords("0000" + twelvemin);
		}
		if (twelvesec == "01") {
			twelvetime = twelvetime + "and " + initiatewords("0000" + twelvesec) + " second"
		} else if (twelvesec != "00") {
			twelvetime = twelvetime + "and " + initiatewords("0000" + twelvesec) + " seconds"
		}
	}
	writep(twelveyear,twelvedayofyear,twelveday,twelvetime);
}
function convertToTwelve(x) {
	var decimalTwelve = [0, 0, 0, 0, 0, 0];
	while (x >= 248832) {
		decimalTwelve[0]++;
		x = x - 248832;
	}
	while (x >= 20736) {
		decimalTwelve[1]++;
		x = x - 20736;
	}
	while (x >= 1728) {
		decimalTwelve[2]++;
		x = x - 1728;
	}
	while (x >= 144) {
		decimalTwelve[3]++;
		x = x - 144;
	}
	while (x >= 12) {
		decimalTwelve[4]++;
		x = x - 12;
	}
	while (x >= 1) {
		decimalTwelve[5]++;
		x--;
	}
	var twelve = "";
	var i = 0;
	while (i <= 5) {
		if (!(twelve == "" && decimalTwelve[i] == 0) || usewords) {
			if (decimalTwelve[i] <= 9) {
				twelve = twelve + decimalTwelve[i];
			} else if (decimalTwelve[i] == 10) {
				twelve = twelve + "A";
			} else if (decimalTwelve[i] == 11) {
				twelve = twelve + "B";
			}
		}
		i++;
	}
	return(twelve);
}
function initiatewords(twelve) {
	var twelveword = "";
	if (setlanguage.includes("de")) {

	} else if (setlanguage.includes("kalestia")) {

	} else {
		if (!(twelve[0] == "0" && twelve[1] == "0" && twelve[2] == "0")) {
			twelveword = twelveword + enthreedigits(twelve[0] + twelve[1] + twelve[2]) + " thousand ";
		}
		twelveword = twelveword + enthreedigits(twelve[3] + twelve[4] + twelve[5]);
	}
	return(twelveword);
}
function enthreedigits(x) {
	var outputword = "";
	if (x[0] != "0") {
		outputword = outputword + endigitword(x[0]) + " hundred ";
	}
	if (x[1] != "0" && x[1] != "1") {
		outputword = outputword + entyword(x[1]);
		if (x[2] == "0") {
			outputword = outputword + " ";
		} else {
			outputword = outputword + "-"
		}
	}
	if (x[1] == "1") {
		outputword = outputword + enteenword(x[1] + x[2]) + " ";
	} else if (x[2] != "0") {
		outputword = outputword + endigitword(x[2]) + " ";
	}
	return(outputword);
}
function endigitword(x) {
	if (x == "1") {
		return "one";
	} else if (x == "2") {
		return "two";
	} else if (x == "3") {
		return "three";
	} else if (x == "4") {
		return "four";
	} else if (x == "5") {
		return "five";
	} else if (x == "6") {
		return "six";
	} else if (x == "7") {
		return "seven";
	} else if (x == "8") {
		return "eight";
	} else if (x == "9") {
		return "nine";
	} else if (x == "A") {
		return "ten";
	} else if (x == "B") {
		return "eleven";
	}
}
function entyword(x) {
	if (x == "2") {
		return "twenty";
	} else if (x == "3") {
		return "thirty";
	} else if (x == "4") {
		return "fourty";
	} else if (x == "5") {
		return "fifty";
	} else if (x == "6") {
		return "sixty";
	} else if (x == "7") {
		return "seventy";
	} else if (x == "8") {
		return "eighty";
	} else if (x == "9") {
		return "ninety";
	} else if (x == "A") {
		return "tenty";
	} else if (x == "B") {
		return "eleventy";
	}
}
function enteenword(x) {
	if (x == "10") {
		return "twelve";
	} else if (x == "11") {
		return "oneteen";
	} else if (x == "12") {
		return "twoteen";
	} else if (x == "13") {
		return "thirteen";
	} else if (x == "14") {
		return "fourteen";
	} else if (x == "15") {
		return "fifteen";
	} else if (x == "16") {
		return "sixteen";
	} else if (x == "17") {
		return "seventeen";
	} else if (x == "18") {
		return "eighteen";
	} else if (x == "19") {
		return "nineteen";
	} else if (x == "1A") {
		return "tenteen";
	} else if (x == "1B") {
		return "eleventeen";
	}
}
function writep(twelveyear,twelvedayofyear,twelveday,twelvetime) {
	var languagestring = new Array();
	if (setlanguage.includes("ko")) {
		languagestring[0] = "오늘은 <b>" + twelveyear + "</b>년 <b>" + twelvedayofyear + "</b>일입니다.";
		languagestring[1] = "전체로 오늘은 <b>" + twelveday + "</b>일입니다.";
		languagestring[2] = "지금 시간은 <b>" + twelvetime + "</b>입니다.";
	} else if (setlanguage.includes("de")) {
		languagestring[0] = "Heute ist Tag <b>" + twelvedayofyear + "</b> im Jahr <b>" + twelveyear + "</b>.";
		languagestring[1] = "Insgesamt ist heute Tag <b>" + twelveday + "</b>.";
		languagestring[2] = "Es ist <b>" + twelvetime + "</b> Uhr.";
	} else if (setlanguage.includes("kalestia")) {
		languagestring[0] = "Mujun ase <b>" + twelveyear + "</b> nelieli <b>" + twelvedayofyear + "</b> jun.";
		languagestring[1] = "Onraonem mujun ase <b>" + twelveday + "</b> jun.";
		languagestring[2] = "Nim lezia ase <b>" + twelvetime + "</b>.";
	} else {
		languagestring[0] = "Today is day <b>" + twelvedayofyear + "</b> of year <b>" + twelveyear + "</b>.";
		languagestring[1] = "In total today is day <b>" + twelveday + "</b>.";
		languagestring[2] = "Current time is <b>" + twelvetime + "</b>.";
	}
	document.getElementById("newtimeh1").innerHTML = "<p>" + languagestring[0] + "</p><p>" + languagestring[1] + "</p><p>" + languagestring[2] + "</p>";
}
function setlang(x) {
	setlanguage = x;
	document.getElementById("kooptions").style.display = "none"
	document.getElementById("deoptions").style.display = "none"
	document.getElementById("kalestiaoptions").style.display = "none"
	document.getElementById("enoptions").style.display = "none"
	document.getElementById("setko").disabled = false;
	document.getElementById("setde").disabled = false;
	document.getElementById("setkalestia").disabled = false;
	document.getElementById("seten").disabled = false;
	if (setlanguage.includes("ko")) {
		document.getElementById("kooptions").style.display = "block";
		document.getElementById("setko").disabled = true;
		switchwriting(false);
	} else if (setlanguage.includes("de")) {
		document.getElementById("deoptions").style.display = "block";
		document.getElementById("setde").disabled = true;
	} else if (setlanguage.includes("kalestia")) {
		document.getElementById("kalestiaoptions").style.display = "block";
		document.getElementById("setkalestia").disabled = true;
	} else {
		document.getElementById("enoptions").style.display = "block";
		document.getElementById("seten").disabled = true;
	}
}
function switchwriting(x) {
	usewords = x;
	document.getElementById("denumbers").disabled = !x;
	document.getElementById("kalestianumbers").disabled = !x;
	document.getElementById("ennumbers").disabled = !x;
	document.getElementById("dewords").disabled = x;
	document.getElementById("kalestiawords").disabled = x;
	document.getElementById("enwords").disabled = x;
}
