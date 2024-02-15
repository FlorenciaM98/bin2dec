var dec = 0;

function convert(bin) {
    var length = bin.length;
    console.log(length);
    for (var i = 0; i < length; i++) {
        var dig = parseInt(bin.charAt(length - 1 - i));

        if (dig !== 0 && dig !== 1) {
            throw new Error("Only 0 and 1.");
        }

        dec += dig * Math.pow(2, i);
    }
    return dec;
}

function sendBinary() {
    var bin = document.getElementById("binaryInput").value;
    try {
        dec = convert(bin);
        alert("Decimal: " + dec);
    } catch (error) {
        alert("Error: " + error.message);
        console.error(error);
    }
}
