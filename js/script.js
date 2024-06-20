

function konversiMenjadiFahrenheit() {
  //Variabel input
  var inputSuhu = document.getElementById("input").value

  if (isNaN(inputSuhu))
    {
      alert("Input Hanya Bisa Angka!");
      return null;
    }

  //Rumus perhitungan menjadi fahrenheit
  var fahrenheit = (inputSuhu * 1.8) + 32;
  var detailPerhitungan = "(" + inputSuhu + "°C * 1.8) + 32 = " + fahrenheit + "°F";

  //Mengembalikan nilai dari variabel
  return{
    fahrenheit: fahrenheit,
    detailPerhitungan: detailPerhitungan,
  } 
}

function buttonKonversi(){
  var hasilKonversi = konversiMenjadiFahrenheit();
  //Pengecekan jika hasilKonversi tidak sama dengan null, maka lanjut proses
  if (hasilKonversi !== null) { 
    //Memunculkan hasilKonversi pada id "output" dan "kalkulasi"
    document.getElementById("output").value = hasilKonversi.fahrenheit;
    document.getElementById("kalkulasi").textContent = hasilKonversi.detailPerhitungan;
  }
}