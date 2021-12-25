module.exports = function check(str, bracketsConfig) {
	
	arr = bracketsConfig.reduce(function (arr, el) {arr.push(el[0]+el[1]); return arr}, []);

	let nStr, spec = '()[]{}||';
	while (true) {
		nStr = str;
		arr.forEach((el) =>	str = str.replace(new RegExp(((spec.includes(el[0]))?'\\':'')+`${el[0]}`+((spec.includes(el[1]))?'\\':'')+`${el[1]}`, 'gi'), ''));
		if (nStr == str) {break;}
	}

	return str.length == 0;
}
