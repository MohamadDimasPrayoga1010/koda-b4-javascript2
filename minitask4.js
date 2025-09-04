
 
function fahrenheit(c){
    let  konvert = c * (9 / 5) + 32;
    return konvert
}



const reamur = function(c){
    let konvertReamur = (5/4) * c;
    return konvertReamur
}


const kelvin = (c) =>{
    let konvertKelvin = c + 273.15
    return konvertKelvin
}



function output(c){
    console.log("Hasil Konvert suhu Celcius ke Farenheit adalah " + fahrenheit(c));
    console.log("Hasil konvert suhu Celcius ke Reamur adalah " + reamur(c));
    console.log("Hasil konvert suhu Celcius ke Kelvin adalah " + kelvin(c))
}

output(40)

