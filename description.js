var theme = localStorage.Theme;
if(!theme) {
	theme = "style-light";
	localStorage.setItem('Theme', theme);
}
$('head').append('<link rel="stylesheet" href="'+theme+'.css" type="text/css" />');
function toogleTheme()
{
	var themeNew = "style-light";
	if(localStorage.Theme === themeNew) {
		themeNew = "style-dark";
	}
	localStorage.setItem('Theme', themeNew);
	window.location.reload(false);
}
