
 
function fahrenheit(c){
    let  konvert = c * (9 / 5) + 32 
    return konvert
}



const reamur = function(c){
    let konvertReamur = (5/4) * c
    return konvertReamur
}


const kelvin = (c) =>{
    let konvertKelvin = c + 273.15
    return konvertKelvin
}



// function output(c){
//     console.log("Hasil Konvert suhu Celcius" + c + " ke Farenheit adalah " + fahrenheit(c));
//     console.log(
//       "Hasil konvert suhu Celcius " + c + " ke Reamur adalah " + reamur(c)
//     );
//     console.log("Hasil konvert suhu Celcius "+ c +" ke Kelvin adalah " + kelvin(c))
// }

// output(40)

const hasil = (c, cb1, cb2, cb3) =>{
console.log(`Celcius ${c} konversi  Farenheit  ${cb1(c)}`)
console.log(`Celcius ${c} konversi  Reamur  ${cb2(c)}`)
console.log(`Celcius ${c} konversi  Kelvin  ${cb3(c)}`)

}

hasil(5, fahrenheit, reamur, kelvin)
