// Invitacion Adrián & Andrea
// Apertura del sobre, acceso al contenido y cuenta atras hasta la ceremonia.

const envelope = document.getElementById("envelope");
const seal = document.getElementById("seal");
const scene = document.getElementById("scene");
const instruction = document.getElementById("instruction");
const continueButton = document.getElementById("continueButton");
const details = document.getElementById("details");

let opened = false;

function openEnvelope() {
  if (opened) return;

  opened = true;
  scene.classList.add("is-opening");
  envelope.classList.add("is-open");
  envelope.setAttribute("aria-expanded", "true");
  instruction.textContent = "Con mucho cariño";

  window.setTimeout(() => {
    continueButton.hidden = false;
  }, 1250);
}

function showDetails() {
  details.hidden = false;
  details.setAttribute("aria-hidden", "false");
  continueButton.hidden = true;
  // Al continuar, eliminamos el espacio sobrante de la portada antes del contenido.
  scene.classList.add("show-details");

  window.setTimeout(() => {
    details.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}

function updateCountdown() {
  // 6 de marzo de 2027, 12:30, horario peninsular de España (CET).
  const weddingDate = new Date("2027-03-06T12:30:00+01:00");
  const remaining = Math.max(0, weddingDate.getTime() - Date.now());

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = String(days).padStart(3, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

seal.addEventListener("click", openEnvelope);
continueButton.addEventListener("click", showDetails);

updateCountdown();
window.setInterval(updateCountdown, 1000);
