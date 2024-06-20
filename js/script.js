// Mendeklarasikan Bahwa Konversi Awal, Adalah Dari Celcius Ke Fahrenheit
var konversiCelsiusToFahrenheit = true;

function konversiMenjadiFahrenheit() {
  // Mendapatkan Nilai Input Dan Dimasukan Kedalam Variabel Input Celcius
  var inputCelcius = document.getElementById("input").value;

  // Kondisi Jika Input Kosong Dan Bukan Angka
  if (inputCelcius === "" || isNaN(inputCelcius)) {
    alert("Input Hanya Bisa Angka!");
    return null;
  }

  // Rumus Konversi Celcius Menjadi Fahrenheit Serta Mempersiapkan Ouput Detail Perhitungan
  var fahrenheit = (inputCelcius * 1.8) + 32;
  var detailPerhitungan = "(" + inputCelcius + "°C * 1.8) + 32 = " + fahrenheit + "°F";

  // Mengembalikan Nilai Fahrenheit dan Detail Perhitungan
  return {
    fahrenheit: fahrenheit,
    detailPerhitungan: detailPerhitungan,
  };
}

function konversiMenjadiCelcius() {
  // Mendapatkan Nilai Input Dan Dimasukan Kedalam Variabel Input Fahrenheit
  var inputFahrenheit = document.getElementById("input").value;

  // Kondisi Jika Input Kosong Dan Bukan Angka
  if (inputFahrenheit === "" || isNaN(inputFahrenheit)) {
    alert("Input Hanya Bisa Angka!");
    return null;
  }

  // Rumus Konversi Fahrenheit Menjadi Celcius Serta Mempersiapkan Ouput Detail Perhitungan
  var celcius = (inputFahrenheit - 32) / 1.8;
  var detailPerhitungan = "(" + inputFahrenheit + "°F - 32) / 1.8 = " + celcius + "°C";

  // Mengembalikan Nilai Ceclius dan Detail Perhitungan
  return {
    celcius: celcius,
    detailPerhitungan: detailPerhitungan,
  };
}

function buttonKonversi() {
  // Mendeklarasikan Variabel
  var hasilKonversi;

  // Kondisi Jika Variabel konversiCelciusToFahrenheit = True / False
  if (konversiCelsiusToFahrenheit) {
    hasilKonversi = konversiMenjadiFahrenheit();
  } else {
    hasilKonversi = konversiMenjadiCelcius();
  }

  // Kondisi Jika Variabel hasilKonversi Tidak Sama Dengan Null, Maka Lanjut
  if (hasilKonversi !== null) {
    
    document.getElementById("output").value = Math.round(hasilKonversi.fahrenheit || hasilKonversi.celcius);
    document.getElementById("kalkulasi").textContent = hasilKonversi.detailPerhitungan;
  }
}

function buttonReset(){
  // Fungsi Button Reset Supaya Value Dan TextContent Kembali Kosong
  document.getElementById("input").value = "";
  document.getElementById("output").value = "";
  document.getElementById("kalkulasi").textContent = "";
}

function buttonReverse() {
  // Mendapatkan Nilai Input Dan Output
  var nilaiInput = document.getElementById("input").value;
  var nilaiOutput = document.getElementById("output").value;

  // Mendapatkan Nilai Dari Label Dan PlaceHolder
  var inputLabel = document.getElementById("inputLabel").textContent;
  var outputLabel = document.getElementById("outputLabel").textContent;
  var placeholderInput = document.getElementById("input").placeholder;
  var placeholderOutput = document.getElementById("output").placeholder;

  // Menukar Antara Nilai Input - Output
  document.getElementById("input").value = nilaiOutput;
  document.getElementById("output").value = nilaiInput;

  // Menukar Antara Nilai Label Input dan Output
  document.getElementById("inputLabel").textContent = outputLabel;
  document.getElementById("outputLabel").textContent = inputLabel;

  // Menukar Antara Nilai Placeholder Input dan Output
  document.getElementById("input").placeholder = placeholderOutput;
  document.getElementById("output").placeholder = placeholderInput;

  // Menukar Fungsi Kondisi Konversi Dari True Ke False
  konversiCelsiusToFahrenheit = !konversiCelsiusToFahrenheit;

  // Kondisi Jika nilaiOutput Tidak Sama Dengan Kosong, Maka Lanjut. Jika Kosong, Maka Tidak Lanjut
  if (nilaiOutput !== "") {
    
    // Kondisi Jika Nilai Variabel konversiCelciusToFahrenheit = True, Maka Ambil Fungsi konversiMenjadiFahrenheit, Jika False Maka Akan Ambil Fungsi konversiMenjadiCelcius
    var hasilKonversi;
    if (konversiCelsiusToFahrenheit) {
      hasilKonversi = konversiMenjadiFahrenheit();
    } else {
      hasilKonversi = konversiMenjadiCelcius();
    }

    // Kondisi Jika Hasil Konversi Tidak Sama Dengan Nill, Maka Lanjut 
    if (hasilKonversi !== null) {
      
      // Mengambil Nilai Dari Fungsi Yang Ada Isinya Antara hasilKonversi.Fahrenheit (Jika Ada) atau hasilKonversi.Celcius (Jika Ada)
      var hasil = Math.round(hasilKonversi.fahrenheit || hasilKonversi.celcius);
      document.getElementById("output").value = hasil;
      document.getElementById("kalkulasi").textContent = hasilKonversi.detailPerhitungan;
    }
  } else {
    // Jika Null Maka Nilai Output Dan Teks Kalkulasi Kosong
    document.getElementById("output").value = "";
    document.getElementById("kalkulasi").textContent = "";
  }
}
