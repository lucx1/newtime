window.setInterval(cktd, 1);
var setlanguage = navigator.language;
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
	while (twelvetotal.length < 5) {
		twelvetotal = "0" + twelvetotal;
	}
	var twelvehour = twelvetotal[0];
	var twelvemin = twelvetotal[1] + twelvetotal[2];
	var twelvesec = twelvetotal[3] + twelvetotal[4];
	var twelveyear = convertToTwelve(newyear);
	var twelvedayofyear = convertToTwelve(newdatecalc);
	var twelveday = convertToTwelve(totalday);
	writep(twelveyear,twelvedayofyear,twelveday,twelvehour,twelvemin,twelvesec);
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
		if (!(twelve == "" && decimalTwelve[i] == 0)) {
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
function writep(twelveyear,twelvedayofyear,twelveday,twelvehour,twelvemin,twelvesec) {
	var languagestring = new Array();
	if (setlanguage.includes("ko")) {
		languagestring[0] = "오늘은 " + twelveyear + "년 " + twelvedayofyear + "일입니다.";
		languagestring[1] = "전체로 오늘은 " + twelveday + "일입니다.";
		languagestring[2] = "지금 시간은 " + twelvehour + ":" + twelvemin + ":" + twelvesec + "입니다.";
		languagestring[3] = "밑 버튼 클릭하여 언어 설정하세요."
	} else if (setlanguage.includes("de")) {
		languagestring[0] = "Heute ist Tag " + twelvedayofyear + " im Jahr " + twelveyear + ".";
		languagestring[1] = "Insgesamt ist heute Tag " + twelveday + ".";
		languagestring[2] = "Es ist " + twelvehour + ":" + twelvemin + ":" + twelvesec + " Uhr.";
		languagestring[3] = "Klicke unten eine Sprache an, um sie einzustellen."
	} else if (setlanguage.includes("kalestia")) {
		languagestring[0] = "Mujun ase " + twelveyear + "'m nelieli " + twelvedayofyear + "'m jun.";
		languagestring[1] = "Onraonem mujun ase " + twelveday + "'m jun.";
		languagestring[2] = "Nim lezia ase " + twelvehour + ":" + twelvemin + ":" + twelvesec + ".";
		languagestring[3] = "Feze jileaen met moklolan mejuenem."
	} else {
		languagestring[0] = "Today is day " + twelvedayofyear + " of year " + twelveyear + ".";
		languagestring[1] = "In total today is day " + twelveday + ".";
		languagestring[2] = "Current time is " + twelvehour + ":" + twelvemin + ":" + twelvesec + ".";
		languagestring[3] = "Click a language below to change."
	}
	document.getElementById("newtimeh1").innerHTML = "<p>" + languagestring[0] + "</p><p>" + languagestring[1] + "</p><p>" + languagestring[2] + "</p>";
	document.getElementById("languageselect").innerHTML = languagestring[3];
}
function seten() {
	setlanguage = "en-US";
}
function setko() {
	setlanguage = "ko-KR";
}
function setde() {
	setlanguage = "de-DE";
}
function setkalestia() {
	setlanguage = "kalestia";
}
