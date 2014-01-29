function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
	window.plugins.childBrowser.showWebPage('http://google.co.in', { showLocationBar: true });
}