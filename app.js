import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

let currentRole = "";

window.register = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  await createUserWithEmailAndPassword(auth, email, password);
  localStorage.setItem("role", role);

  alert("Register berhasil");
};

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  await signInWithEmailAndPassword(auth, email, password);

  currentRole = localStorage.getItem("role");

  document.getElementById("auth").style.display = "none";
  document.getElementById("dashboard").style.display = "block";

  document.getElementById("userRole").innerText = "Role: " + currentRole;

  showUI();
};

function showUI() {
  if (currentRole === "pelanggan") {
    pelangganUI.classList.remove("hidden");
  } else if (currentRole === "cleaner") {
    cleanerUI.classList.remove("hidden");
    loadJobs();
  } else {
    adminUI.classList.remove("hidden");
  }
}

window.logout = function () {
  signOut(auth);
  location.reload();
};

window.order = function () {
  const alamat = document.getElementById("alamat").value;
  const jam = document.getElementById("jam").value;

  alert("Order dibuat: " + alamat + " (" + jam + " jam)");
};

window.topUp = function () {
  const amount = document.getElementById("topup").value;

  if (amount < 25000) {
    alert("Minimal top up Rp 25.000");
    return;
  }

  alert("Top up berhasil");
};

function loadJobs() {
  const jobs = [
    { nama: "Budi", alamat: "Surabaya" },
    { nama: "Siti", alamat: "Malang" }
  ];

  const list = document.getElementById("jobs");
  list.innerHTML = "";

  jobs.forEach(job => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${job.nama} - ${job.alamat}
      <br>
      <a href="https://maps.google.com?q=${job.alamat}" target="_blank">Navigasi</a>
    `;
    list.appendChild(li);
  });
}

window.updateHarga = function () {
  const harga = document.getElementById("hargaBaru").value;
  alert("Harga diubah jadi: " + harga);
};
