const input = document.getElementById('input');
const convert = document.getElementById('convert');
const convertTemperature = () => {
	const convertedTemperature1 = document.getElementById('convertedTemperature1');
	const convertedTemperature2 = document.getElementById('convertedTemperature2');
	const json = document.getElementById('convertedTemperature3');
	const select = document.getElementById('select');
	
	switch (select.value) {
		case 'celsius': 
			convertedTemperature1.innerHTML = Math.round(9/5 * (parseInt(input.value)) + 32) + 'F';
			convertedTemperature2.innerHTML = Math.round(parseInt(input.value) + 273.15) + 'K';
			const celsiusObject = {
				F: Math.round(9/5 * (parseInt(input.value)) + 32) + 'F',
				K: Math.round(parseInt(input.value) + 273.15) + 'K'
			}
			json.innerHTML = JSON.stringify(celsiusObject);

		break;
		case 'fahrenheit': 
			convertedTemperature1.innerHTML = Math.round(5/9 * (parseInt(input.value) - 32)) + 'C';
			convertedTemperature2.innerHTML = Math.round(5/9 * (parseInt(input.value) - 32) + 273.15) + 'K';
			const fahrenheitObject = {
				C: Math.round(5/9 * (parseInt(input.value) - 32)) + 'C',
				K: Math.round(5/9 * (parseInt(input.value) - 32) + 273.15) + 'K'
			}
			json.innerHTML = JSON.stringify(fahrenheitObject);
		break;
		case 'kelvin': 
			convertedTemperature1.innerHTML = Math.round(parseInt(input.value) - 273.15) + 'C';
			convertedTemperature2.innerHTML = Math.round(9/5 * (parseInt(input.value) - 273.15) + 32) + 'F';
			const kelvinObject = {
				C: Math.round(parseInt(input.value) - 273.15) + 'C',
				K: Math.round(9/5 * (parseInt(input.value) - 273.15) + 32) + 'F'
			}
			json.innerHTML = JSON.stringify(kelvinObject);
		break;
	} 
};

const checkIfInputIsValid = (inputValue) => {
	return inputValue === '' || inputValue === ' ';
};
convert.addEventListener('click', function() {
	if (checkIfInputIsValid(input.value)) {
		alert('value is empty');
	} else {
		convertTemperature();
	}
}, false);

input.addEventListener('keypress', function(event) {
  	if (event.which === 13) {
  		if (checkIfInputIsValid(input.value)) {
   			alert('value is empty');
 		} else {
    		convertTemperature();
 		}
	}
}, false);