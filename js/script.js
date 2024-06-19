

function konversiSuhu() {
  var inputSuhu = document.getElementById("input").value
  
  if (isNaN(inputSuhu))
    {
      alert("Input Hanya Bisa Angka!");
      return null;
    }

  var menjadiFahrenheit = document.getElementById("konversiMenjadiFahrenheit").checked;
  var menjadiCelcius = document.getElementById("konversiMenjadiCelcius").checked;

  if (menjadiFahrenheit){
    var fahrenheit = (inputSuhu * 1.8) + 32;
    var detailPerhitungan = "(" + inputSuhu + "°C * 1.8) + 32 = " + fahrenheit + "°F";
    var hasil = fahrenheit;
  } 
  else if (menjadiCelcius){
    var celcius = 1.8 * (inputSuhu - 32);
    var detailPerhitungan = "1.8 * (" + inputSuhu + "°F" + "- 32) = " + celcius + "°C";
    var hasil = celcius;
  }

  return {fahrenheit: fahrenheit, celcius: celcius, hasil: hasil, detailPerhitungan: detailPerhitungan};

}


function buttonKonversi(){
  var hasilKonversi = konversiSuhu();
  if (hasilKonversi !== null) { 
    document.getElementById("output").value = hasilKonversi.hasil;
    document.getElementById("kalkulasi").textContent = hasilKonversi.detailPerhitungan;
  }
}

function buttonReverse(){
  var inputLabel = document.getElementById("inputLabel");
  var outputLabel = document.getElementById("outputLabel");
  var input = document.getElementById("input").value;
  var output = document.getElementById("output").value;
  var menjadiFahrenheit = document.getElementById("konversiMenjadiFahrenheit").checked;
  var menjadiCelcius = document.getElementById("konversiMenjadiCelcius").checked;

  if (menjadiFahrenheit){
    //Update Label Input dan Output
    inputLabel.textContent = "Masukan Suhu (Celcius):";
    outputLabel.textContent = "Hasil Konversi (Fahrenheit):";
    //Update Ceklis Radio Button
    document.getElementById("konversiMenjadiFahrenheit").checked = true;
    document.getElementById("konversiMenjadiCelcius").checked = false;
    //Menukar Nilai Input dan Value
    document.getElementById("input").value = output;
    document.getElementById("output").value = input;
  } else if (menjadiCelcius) {
    //Update Label Input dan Output
    inputLabel.textContent = document.getElementById("inputLabel");
    outputLabel.textContent = document.getElementById("ouputLabel");
    //Update Ceklis Radio Button
    document.getElementById("konversiMenjadiFahrenheit").checked = false;
    document.getElementById("konversiMenjadiCelcius").checked = true;
    //Menukar Nilai Input dan Value
    document.getElementById("input").value = output;
    document.getElementById("output").value = input;
  }

}

