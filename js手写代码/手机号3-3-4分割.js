const splitMobile = (mobile, format = '-') => {
	return String(mobile).replace(/\B(?=(\d{4})+$)/g, format)
}

console.log(splitMobile(18818805173))
