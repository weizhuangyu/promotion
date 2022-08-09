function getQueryString(name) {
	var query_string = location.search;
	if (!query_string) return null; // 如果无参，返回null
	var re = /[?&]?([^=]+)=([^&/]*)/g;
	var tokens;
	while (tokens = re.exec(query_string)) {
		if (decodeURIComponent(tokens[1]) === name) {
			return decodeURIComponent(tokens[2]);
		}
	}
	return null;
}

function getUrlQuery(url) {
	const paramsStr = /.+\?(.+)$/.exec(url)[1];
	const paramsArr = paramsStr.split('&');
	let paramsObj = {};

	paramsArr.forEach(param => {
		if (/=/.test(param)) {
			let [key, val] = param.split('=');
			val = decodeURIComponent(val);
			if (paramsObj[key]) {
				paramsObj[key] = Array.isArray(paramsObj[key]) ? paramsObj[key].concat(val) : [paramsObj[key], val];
			} else {
				paramsObj[key] = val;
			}
	} else { // value
		paramsObj[param] = true; }
	})
	return paramsObj;
}

console.log(getUrlQuery('aaa?a=10&b=20&a=30'))
