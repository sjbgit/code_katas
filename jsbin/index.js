



function divideBy2(decNumber) {
	var remStack = [], rem, binaryString = '';

	while (decNumber > 0) {
		rem = Math.floor(decNumber % 2); //remainder of dividing by 2
		remStack.push(rem); //push on to stack
		decNumber = Math.floor(decNumber / 2); //
	}

	return remStack.reverse().join('');

}

console.log(divideBy2(13));



var x = [];

x.unshift(1);
x.unshift(2);

console.log(x);

console.log(x.pop())

console.log(x);