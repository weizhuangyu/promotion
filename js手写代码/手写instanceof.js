function myIncetanceof(target, Fun) {
	let _proto = target.__proto__;
	let prototype = Fun.prototype;
	while (prototype) {
		if (_proto !== prototype) {
			_proto = _proto.__proto__;
		} else {
			return true;
		}
	}
	return false;
}
