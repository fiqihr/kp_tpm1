// Function untuk convert Fahrenheit ke Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Function untuk convert Celsius ke Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Event listeners untuk tombol conversion
document.getElementById("convertFtoC").addEventListener("click", function () {
  const fahrenheit = document.getElementById("fahrenheit").value;
  const celsius = fahrenheitToCelsius(fahrenheit);
  document.getElementById("celsius").value = celsius.toFixed(2);
});

document.getElementById("convertCtoF").addEventListener("click", function () {
  const celsius = document.getElementById("celsius").value;
  const fahrenheit = celsiusToFahrenheit(celsius);
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
});

document.addEventListener("DOMContentLoaded", function () {
  // Mengubah warna background navbar
  document.querySelector(".navbar").style.backgroundColor = "#212529";

  document.querySelector(".navbar-brand").style.color = "#FFFFFF";
  document.querySelectorAll(".nav-link").forEach(function (element) {
    element.style.color = "#FFFFFF";
  });

  // Mengubah teks jumbotron
  document.querySelector(".display-4").textContent =
    "Hello, My name is John Doe";
  document.querySelector(".lead").textContent =
    "I am a passionate front-end developer with over 5 years of experience.";
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true; // Variable to track validation status

    // Email validation
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailInput.classList.add("is-invalid");
      isValid = false;
    } else {
      emailInput.classList.remove("is-invalid");
      emailInput.classList.add("is-valid");
    }

    // Phone validation
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value;
    const phonePattern = /^\d{12,}$/;
    if (!phonePattern.test(phone)) {
      phoneInput.classList.add("is-invalid");
      isValid = false;
    } else {
      phoneInput.classList.remove("is-invalid");
      phoneInput.classList.add("is-valid");
    }

    // If both inputs are valid, display success message
    if (isValid) {
      document.getElementById("successMessage").classList.remove("d-none");
      // Reset form after successful submission
      document.getElementById("contactForm").reset();
      emailInput.classList.remove("is-valid");
      phoneInput.classList.remove("is-valid");
    }
  });

function updateClock() {
  const now = new Date();
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formattedDate = now.toLocaleDateString("en-GB", options);
  document.getElementById("currentDateTime").textContent = formattedDate;
}

// Panggil fungsi updateClock setiap detik
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Mencegah form submit

//   // Validasi email
//   const emailInput = document.getElementById('email');
//   const email = emailInput.value;
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(email)) {
//       emailInput.classList.add('is-invalid');
//   } else {
//       emailInput.classList.remove('is-invalid');
//       emailInput.classList.add('is-valid');
//   }

//   // Validasi nomor telepon
//   const phoneInput = document.getElementById('phone');
//   const phone = phoneInput.value;
//   const phonePattern = /^\d{12,}$/;
//   if (!phonePattern.test(phone)) {
//       phoneInput.classList.add('is-invalid');
//   } else {
//       phoneInput.classList.remove('is-invalid');
//       phoneInput.classList.add('is-valid');
//   }

//   // Jika kedua input valid, form dapat disubmit
//   if (emailPattern.test(email) && phonePattern.test(phone)) {
//       alert('Form submitted successfully!');

//       // Di sini Anda bisa menambahkan logika untuk mengirim data form
//   }
//   if (isValid) {
//     document.getElementById('successMessage').classList.remove('d-none');
//     alert('Form submitted successfully!'); // Tampilkan pesan sukses
//     // Reset form setelah submit sukses
//     document.getElementById('contactForm').reset();
//     emailInput.classList.remove('is-valid');
//     phoneInput.classList.remove('is-valid');
// }
// });

// const time = {
//   novel: "berapa jam perjalanan",
// };

// console.log(time) ;

// for (let index = 0; index < time.length; index++) {
//   console.log(index);
// }

// if (time.age === 33){
//   console.log(true);
// } else {
//   console.log(false);
// }

// const volume = (alas, lebar, tinggi)=>{
//   return alas * lebar * tinggi
// }

// console.log(volume(10,10,10));

// const doc = document.getElementById("validationTextName");

// console.log(doc);
