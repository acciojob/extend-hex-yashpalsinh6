const extendHex = (shortHex) => {
  // write your code here
	let result ="";
	if(shortHex.length ===4){
		let r,g,b;
		r = shortHex[1];
		g = shortHex[2];
		b = shortHex[3];
		let hexcode = "#"+r+r+g+g+b+b;
		result += hexcode;
	}
	if(shortHex.length===3){
		let r,g,b;
		r = shortHex[0];
		g = shortHex[1];
		b = shortHex[2];
		let hexcode = "#"+r+r+g+g+b+b;
		result += hexcode;
	}

	return result;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
