var newTime = new Array();
window.setInterval(cktd, 1);
function cktd() {
	var d = new Date();
	var newtimecalc = (d.getMilliseconds() + (d.getSeconds()*1000) + (d.getMinutes()*60000) + (d.getHours()*3600000))/86.4;
	newTime[0] = parseInt(newtimecalc/1000);
	newTime[1] = parseInt(newtimecalc - (newTime[0]*1000));
	document.getElementById("newtimeh1").innerHTML = "<p>It is " + newTime[0] + "ks " + newTime[1] + "s.</p>";
}
