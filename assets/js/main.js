var icon = document.getElementById("nav-toggle");

// Mengecek apakah ada preferensi tema yang disimpan di localStorage
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light"); // Jika tidak, tetapkan tema default ke light
}

// Mengambil preferensi tema yang disimpan di localStorage
let localData = localStorage.getItem("theme");

// Berdasarkan preferensi tema, set tema dan ikon sesuai
if (localData == "light") {
    // Tema light
    icon.innerHTML = '<i class="fas fa-sun"></i>'; // Menggunakan kelas fas untuk Font Awesome Solid
    document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
    // Tema dark
    icon.innerHTML = '<i class="fas fa-moon"></i>'; // Menggunakan kelas fas untuk Font Awesome Solid
    document.body.classList.add("dark-theme");
}

// Menangani perubahan tema saat ikon di klik
icon.onclick = function () {
    // Mengganti tema dan ikon sesuai dengan kondisi saat ini
    if (document.body.classList.contains("dark-theme")) {
        // Jika saat ini tema adalah dark, maka ganti ke light
        icon.innerHTML = '<i class="fas fa-moon"></i>'; // Menggunakan kelas fas untuk Font Awesome Solid
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
    } else {
        // Jika saat ini tema adalah light, maka ganti ke dark
        icon.innerHTML = '<i class="fas fa-sun"></i>'; // Menggunakan kelas fas untuk Font Awesome Solid
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
    }
}
