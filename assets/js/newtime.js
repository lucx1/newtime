window.setInterval(cktd, 1);
function cktd() {
	var d = new Date();
	var newTime = new Array();
	var newtimecalc = (d.getMilliseconds() + (d.getSeconds()*1000) + (d.getMinutes()*60000) + (d.getHours()*3600000))/86.4;
	newTime[0] = parseInt(newtimecalc/1000);
	newTime[1] = parseInt(newtimecalc - (newTime[0]*1000));
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
	var totalms = (newyear - 1)*365 + newdatecalc;
	var totalms = newyear * newdatecalc;
	var simplehour = parseInt(newtimecalc/100000);
	var simpleks = parseInt(newtimecalc/1000 - simplehour*100);
	var simpledas = parseInt(newtimecalc/10 - simpleks*100 - simplehour*10000);
	var simples = parseInt(newtimecalc - simpledas*10 - simpleks*1000 - simplehour*100000);
	if (simpleks < 10) {
		simpleks = "0" + simpleks;
	}
	if (simpledas < 10) {
		simpledas = "0" + simpledas;
	}
	var languagestring = new Array();
	if (navigator.language.includes("ko") == true) {
		languagestring[0] = "오늘은 " + newyear + "년 " + newdatecalc + "Ms입니다.";
		languagestring[1] = "전체로 오늘은 " + totalms + "Ms입니다.";
		languagestring[2] = "지금 시간은 " + newTime[0] + "ks " + newTime[1] + "s입니다.";
		languagestring[3] = "쉽게 한 시간은 " + simplehour + ":" + simpleks + ":" + simpledas + "'" + simples + "입니다.";
	} else if (navigator.language.includes("de") == true) {
		languagestring[0] = "Heute ist " + newdatecalc + "Ms Jahr " + newdatecalc + ".";
		languagestring[1] = "Insgesamt ist heute " + totalms + "Ms.";
		languagestring[2] = "Es ist " + newTime[0] + "ks " + newTime[1] + " Uhr.";
		languagestring[3] = "Vereinfacht ist es " + simplehour + ":" + simpleks + ":" + simpledas + "'" + simples + " Uhr.";
	} else {
		languagestring[0] = "Today is " + newdatecalc + "Ms of year " + newdatecalc + ".";
		languagestring[1] = "In total today is " + totalms + "Ms.";
		languagestring[2] = "Current time is " + newTime[0] + "ks " + newTime[1] + ".";
		languagestring[3] = "Simplified time is " + simplehour + ":" + simpleks + ":" + simpledas + "'" + simples + ".";
	}
	document.getElementById("newtimeh1").innerHTML = "<p>" + languagestring[0] + "</p><p>" + languagestring[1] + "</p><p>" + languagestring[2] + "</p><p>" + languagestring[3] + "</p>";
}
