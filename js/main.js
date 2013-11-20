function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
	window.plugins.childBrowser.showWebPage('http://staging.graphemetech.co.in/gita/', { showLocationBar: true });
}