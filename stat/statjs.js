function Addition() {

	var options = document.getElementById("options").value;
	console.log(options);
	if (options === "ODI") {
		odi();
	}
	else if (options === "T20") {
		t20();
	}
	else if (options === "WTC") {
		wtc();
	}



}


function odi() {

	var inputyear = document.getElementById("syear").value;
	switch (inputyear) {

		case "1975": location.href = "yearrecords/1975.html";

			break;

		case "1979": location.href = "yearrecords/1979.html"

			break;

		case "1983": location.href = "yearrecords/1983.html"

			break;

		case "1987": location.href = "yearrecords/1987.html"

			break;

		case "1992": location.href = "yearrecords/1992.html"

			break;

		case "1996": location.href = "yearrecords/1996.html"

			break;


		case "1999": location.href = "yearrecords/1999.html"

			break;

		case "2003": location.href = "yearrecords/2003.html"

			break;

		case "2007": location.href = "yearrecords/2007.html"

			break;

		case "2011": location.href = "yearrecords/2011.html"

			break;

		case "2015": location.href = "yearrecords/2015.html"

			break;

		case "2019": location.href = "yearrecords/2019.html"

			break;

		case "2023": location.href = "yearrecords/2023.html"

			break;


		default: alert("ENTER THE CORRECTYEAR");
	}
}

function t20() {

	var inputyear = document.getElementById("syear").value;
	switch (inputyear) {

		case "2008": location.href = "yearrecords/2008.html"

			break;

		case "2009": location.href = "yearrecords/2009.html"

			break;

		case "2010": location.href = "yearrecords/2010.html"

			break;

		case "2012": location.href = "yearrecords/2012.html"

			break;

		case "2014": location.href = "yearrecords/2014.html"

			break;

		case "2016": location.href = "yearrecords/2016.html"

			break;

		case "2021": location.href = "yearrecords/2021.html"

			break;


		case "2022": location.href = "yearrecords/2022.html"

			break;

		case "2024": location.href = "yearrecords/2024.html"

			break;

		default: alert("enter the correct year");
	}
}


function wtc() {

	var inputyear = document.getElementById("syear").value;
	switch (inputyear) {

		case "2021": location.href = "yearrecords/2019-21.html"

			break;

		case "2023": location.href = "yearrecords/2021-23.html"

			break;

		default: alert("enter the correct year  ");
		// alert("like (2019.21,2021.23)");
	}
}