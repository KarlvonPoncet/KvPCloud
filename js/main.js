const plans = {
  free: { label: "Free", price: 0, text: "0 EUR / Monat" },
  team: { label: "Team", price: 22.8, text: "22,80 EUR / Monat" },
  business: { label: "Business", price: 58.8, text: "58,80 EUR / Monat" },
  enterprise: { label: "Enterprise", price: null, text: "Preis auf Anfrage" }
};

function updateSummary() {
  const select = document.querySelector("#plan");
  if (!select) return;

  const selected = plans[select.value] || plans.team;
  const summaryPlan = document.querySelector("[data-summary='plan']");
  const summaryPrice = document.querySelector("[data-summary='price']");
  const summaryTax = document.querySelector("[data-summary='tax']");
  const summaryTotal = document.querySelector("[data-summary='total']");

  const tax = selected.price === null ? "nach Angebot" : `${(selected.price - (selected.price / 1.2)).toFixed(2).replace(".", ",")} EUR / Monat`;

  if (summaryPlan) summaryPlan.textContent = selected.label;
  if (summaryPrice) summaryPrice.textContent = selected.text;
  if (summaryTax) summaryTax.textContent = tax;
  if (summaryTotal) {
    summaryTotal.textContent = selected.price === null ? "Demo-Gesamt: nach Angebot" : `Demo-Gesamt: ${selected.price.toFixed(2).replace(".", ",")} EUR / Monat`;
  }
}

const planSelect = document.querySelector("#plan");
if (planSelect) {
  const selectedPlan = new URLSearchParams(window.location.search).get("plan");
  if (selectedPlan && plans[selectedPlan]) {
    planSelect.value = selectedPlan;
  }
  planSelect.addEventListener("change", updateSummary);
}

document.querySelectorAll("form[data-enhanced]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    if (status) {
      status.textContent = form.dataset.successMessage || "Ihre Anfrage wurde erfasst. Unser Team meldet sich unter der angegebenen E-Mail-Adresse.";
      status.classList.add("is-visible");
      status.focus();
    }
  });
});

updateSummary();
