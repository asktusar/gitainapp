function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
	window.plugins.childBrowser.showWebPage('http://www.google.com', { showLocationBar: true });
}