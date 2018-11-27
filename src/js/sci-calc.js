function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function addFunction(input, openParenFunc) {
	if(input.value == null || input.value == "0")
		input.value = openParenFunc
	else
		input.value += openParenFunc
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}


function compute(form) {
	var str = form.display.value

	str = str.replace(/e\^/g, 'Math.exp')
	str = str.replace(/ln/g, 'Math.log')
	str = str.replace(/sqrt/g, 'Math.sqrt')
	str = str.replace(/\^/g, '**')
	str = str.replace(/cos/g, 'Math.cos')
	str = str.replace(/sin/g, 'Math.sin')
	str = str.replace(/tan/g, 'Math.tan')

	form.display.value = eval(str)
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.substring(i, i+1)
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "^" && ch != "e") {

				if (str.substring(i, i+1+2) == 'exp' || str.substring(i, i+1+2) == 'cos'
 					|| str.substring(i, i+1+2) == 'sin' || str.substring(i, i+1+2) == 'tan') {
					i += 3
				}
				else if (str.substring(i, i+1+3) == 'sqrt') {
					i += 4
				}
				else if (str.substring(i, i+1+1) == 'ln') {
					i += 2
				}
				else {
					alert("invalid entry!")
					return false
				}
			}
		}
	}
	return true
}
