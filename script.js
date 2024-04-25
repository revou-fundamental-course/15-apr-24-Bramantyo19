function celsius_ke_fahrenheit(){
    var bilangan = document.getElementById("angka_input").value;
    try {
        var x = parseFloat(bilangan);
        document.getElementById("angka_input").style.backgroundColor = "#ffffff";
    } catch(err) {
        document.getElementById("angka_input").style.backgroundColor = "#dce4f2";
        return;
    }
    var result = (x * (9.0/5.0) + 32);

    var input_rounded = Math.round(x * 100) / 100;
    var rounded = Math.round(result * 100) / 100;

    var kalkulasi = input_rounded + "°C * (9/5) + 32 = " + rounded + "°F";

    document.getElementById("output").value = rounded;
    document.getElementById("output_kalkulasi").value = kalkulasi;
}

function reverse() {
    var celsius = document.getElementById("angka_input").value;
    var fahrenheit = document.getElementById("output").value;

    // Tukar nilai antara Celsius dan Fahrenheit
    document.getElementById("angka_input").value = fahrenheit;
    document.getElementById("output").value = celsius;
}