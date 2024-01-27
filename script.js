function converter(num) {
    let dec = parseInt(num)
    let bin = dec.toString(2)
    document.getElementById('res').innerText = bin;
    
};

// just one function to converter decimal numbers to binary numbers