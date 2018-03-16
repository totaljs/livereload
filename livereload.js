function TLR(url) {
	var W = window;
	var ws = new WebSocket(url || 'ws://127.0.0.1:35729');
	W.livereload = false;
	ws.onopen = function() {
		W.livereload = true;
	};
	ws.onclose = function() {
		W.livereload = false;
		setTimeout(TLR, 3000, url);
	};
	ws.onmessage = function(e) {
		if (W.liverefresh)
			W.liverefresh();
		else {
			var L = location;
			L.href = L.href;
		}
	};
}
TLR(document.currentScript.getAttribute('data-url'));