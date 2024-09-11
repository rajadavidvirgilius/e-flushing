// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

document.getElementById('add-flush-button').addEventListener('click', function() {
  document.getElementById('flush-form-popup').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', function() {
  document.getElementById('flush-form-popup').style.display = 'none';
});

let binCount = 1;

// Popup Form
document.addEventListener('DOMContentLoaded', function() {
  const flushBtns = document.querySelectorAll('.flush-btn');
  const flushTypeInput = document.getElementById('flush-type');
  const productFields = document.getElementById('product-fields');

  flushBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          flushBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          flushTypeInput.value = this.dataset.value;

          if (this.dataset.value === 'change-product') {
              productFields.style.display = 'block';
          } else {
              productFields.style.display = 'none';
          }
      });
  });


  let binCounter = 1;

// Function to add new Bin dynamically
window.addBin = function () {
    binCounter++;

    const binTemplate = `
    <div class="form-group bin" id="bin-${binCounter}">
        <div class="bin-header">
            <h3>Flushing ${binCounter}</h3>
            <button type="button" class="add-bin" onclick="addBin()">+</button>
        </div>

        <div>
            <label for="initial-quantity-${binCounter}">Head Filling 1</label>
            <input type="number" id="initial-quantity-${binCounter}" name="initial-quantity-${binCounter}">
        </div>

        <div>
            <label for="final-quantity-${binCounter}">Head Filling 2</label>
            <input type="number" id="final-quantity-${binCounter}" name="final-quantity-${binCounter}">
        </div>

        <div>
            <label for="top-up-${binCounter}">Top Up Filling</label>
            <input type="number" id="top-up-${binCounter}" name="top-up-${binCounter}">
        </div>

        <div>
            <label for="disposition-${binCounter}">Disposisi:</label>
            <select name="disposition-${binCounter}" id="disposition-${binCounter}">
                <option value="" disabled selected>Pilih Disposisi</option>
                <option value="Approve">Okay</option>
                <option value="Reflush">Reflush</option>
            </select>
        </div>
    </div>`;

    // Find the 'keterangan' section
    const keteranganSection = document.getElementById('keterangan');
    const flushingContainer = document.createElement('div');
    flushingContainer.innerHTML = binTemplate;

    // Insert the flushing element above the 'keterangan' section
    keteranganSection.parentNode.insertBefore(flushingContainer, keteranganSection);
};

// Submit handler to manage form data
document.getElementById("reworkForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form Submitted!");
});

      
      document.getElementById('bins-container').insertAdjacentHTML('beforeend', binTemplate);
  });

// Flushing Data Statistik
document.getElementById('dashboard').addEventListener('click', function() {
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('flushing-data-content').style.display = 'none';

    // Set active class
    this.classList.add('active');
    document.getElementById('flushing-data-statistics').classList.remove('active');
});

var popup = document.getElementById("popup-form");
var showPopup = document.getElementById("show-popup");
var closeBtn = document.querySelector(".close-btn");

// Ketika bagian yang bisa diklik ditekan, tampilkan popup
showPopup.onclick = function() {
    popup.style.display = "flex";
}

// Ketika tombol close ditekan, sembunyikan popup
closeBtn.onclick = function() {
    popup.style.display = "none";
}

// Jika pengguna mengklik di luar popup, sembunyikan juga popup
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

// Ambil elemen popup dan tombol yang mengaktifkannya
var popup = document.getElementById("popup-form-2");
var showPopup = document.getElementById("show-popup");
var closeBtn = document.querySelector(".close-btn");

// Ketika bagian yang bisa diklik ditekan, tampilkan popup
showPopup.onclick = function() {
    popup.style.display = "flex";
}

// Ketika tombol close ditekan, sembunyikan popup
closeBtn.onclick = function() {
    popup.style.display = "none";
}

// Jika pengguna mengklik di luar popup, sembunyikan juga popup
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}


