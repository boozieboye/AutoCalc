Exit code: 0
Wall time: 0.7 seconds
Output:
const form = document.getElementById("calculatorForm");
const resetButton = document.getElementById("resetButton");
const errorSummary = document.getElementById("errorSummary");

const requiredFields = [
  { id: "monthlyKm", label: "kilometers per maand" },
  { id: "fuelPrice", label: "brandstofprijs per liter" },
  { id: "efficiency", label: "verbruik" }
];

const resultIds = [
  "costPerKm", "fuelMonthly", "fixedMonthly", "totalMonthly",
  "totalYearly", "fuelPercentage", "otherPercentage"
];

const euro = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2
});

function numberValue(id) {
  const value = document.getElementById(id).value.trim().replace(",", ".");
  return value === "" ? 0 : Number(value);
}

function clearErrors() {
  errorSummary.hidden = true;
  errorSummary.textContent = "";
  document.querySelectorAll(".input-wrap.invalid").forEach((element) => {
    element.classList.remove("invalid");
  });
}

function clearResults() {
  resultIds.forEach((id) => {
    document.getElementById(id).textContent = "â€”";
  });
  document.getElementById("fuelBar").style.width = "0";
  document.getElementById("otherBar").style.width = "0";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  const missing = requiredFields.filter(({ id }) => numberValue(id) <= 0);
  if (missing.length) {
    missing.forEach(({ id }) => {
      document.getElementById(id).closest(".input-wrap").classList.add("invalid");
    });
    errorSummary.textContent = `Vul een geldige waarde in voor ${missing.map(({ label }) => label).join(", ")}.`;
    errorSummary.hidden = false;
    document.getElementById(missing[0].id).focus();
    return;
  }

  const monthlyKm = numberValue("monthlyKm");
  const fuelPrice = numberValue("fuelPrice");
  const efficiency = numberValue("efficiency");
  const insurance = numberValue("insurance");
  const roadTax = numberValue("roadTax");
  const maintenanceMonthly = numberValue("maintenanceYear") / 12;
  const depreciationMonthly = numberValue("depreciationYear") / 12;
  const otherMonthly = numberValue("otherMonthly");

  const fuelMonthly = monthlyKm / efficiency * fuelPrice;
  const fixedMonthly = insurance + roadTax + maintenanceMonthly + depreciationMonthly + otherMonthly;
  const totalMonthly = fuelMonthly + fixedMonthly;
  const totalYearly = totalMonthly * 12;
  const costPerKm = totalMonthly / monthlyKm;
  const fuelPercentage = totalMonthly ? fuelMonthly / totalMonthly * 100 : 0;
  const otherPercentage = 100 - fuelPercentage;

  document.getElementById("costPerKm").textContent = euro.format(costPerKm);
  document.getElementById("fuelMonthly").textContent = euro.format(fuelMonthly);
  document.getElementById("fixedMonthly").textContent = euro.format(fixedMonthly);
  document.getElementById("totalMonthly").textContent = euro.format(totalMonthly);
  document.getElementById("totalYearly").textContent = euro.format(totalYearly);
  document.getElementById("fuelPercentage").textContent = `${Math.round(fuelPercentage)}%`;
  document.getElementById("otherPercentage").textContent = `${Math.round(otherPercentage)}%`;
  document.getElementById("fuelBar").style.width = `${fuelPercentage}%`;
  document.getElementById("otherBar").style.width = `${otherPercentage}%`;
});

resetButton.addEventListener("click", () => {
  form.reset();
  clearErrors();
  clearResults();
  document.getElementById("monthlyKm").focus();
});

clearResults();

