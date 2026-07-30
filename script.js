const form = document.getElementById("calculatorForm");
const resetButton = document.getElementById("resetButton");
const errorSummary = document.getElementById("errorSummary");

const fields = {
  monthlyKm: document.getElementById("monthlyKm"),
  fuelPrice: document.getElementById("fuelPrice"),
  efficiency: document.getElementById("efficiency"),
  insurance: document.getElementById("insurance"),
  roadTax: document.getElementById("roadTax"),
  maintenanceYear: document.getElementById("maintenanceYear"),
  depreciationYear: document.getElementById("depreciationYear"),
  otherMonthly: document.getElementById("otherMonthly")
};

const output = {
  costPerKm: document.getElementById("costPerKm"),
  fuelMonthly: document.getElementById("fuelMonthly"),
  fixedMonthly: document.getElementById("fixedMonthly"),
  totalMonthly: document.getElementById("totalMonthly"),
  totalYearly: document.getElementById("totalYearly"),
  fuelPercentage: document.getElementById("fuelPercentage"),
  otherPercentage: document.getElementById("otherPercentage"),
  fuelBar: document.getElementById("fuelBar"),
  otherBar: document.getElementById("otherBar")
};

const euro = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR"
});

function parseValue(input) {
  const value = Number.parseFloat(input.value.replace(",", "."));
  return Number.isFinite(value) ? value : 0;
}

function clearValidation() {
  errorSummary.hidden = true;
  errorSummary.textContent = "";

  Object.values(fields).forEach((input) => {
    input.closest(".input-wrap").classList.remove("invalid");
  });
}

function validate(values) {
  const errors = [];

  if (values.monthlyKm <= 0) {
    errors.push("Vul meer dan 0 kilometer per maand in.");
    fields.monthlyKm.closest(".input-wrap").classList.add("invalid");
  }

  if (values.fuelPrice <= 0) {
    errors.push("Vul een geldige brandstofprijs in.");
    fields.fuelPrice.closest(".input-wrap").classList.add("invalid");
  }

  if (values.efficiency <= 0) {
    errors.push("Het verbruik moet hoger zijn dan 0.");
    fields.efficiency.closest(".input-wrap").classList.add("invalid");
  }

  const optionalKeys = [
    "insurance",
    "roadTax",
    "maintenanceYear",
    "depreciationYear",
    "otherMonthly"
  ];

  optionalKeys.forEach((key) => {
    if (values[key] < 0) {
      errors.push("Kosten mogen niet negatief zijn.");
      fields[key].closest(".input-wrap").classList.add("invalid");
    }
  });

  return [...new Set(errors)];
}

function getValues() {
  return Object.fromEntries(
    Object.entries(fields).map(([key, input]) => [key, parseValue(input)])
  );
}

function calculate(values) {
  const fuelLitresMonthly = values.monthlyKm / values.efficiency;
  const fuelMonthly = fuelLitresMonthly * values.fuelPrice;

  const yearlyCostsMonthly =
    (values.maintenanceYear + values.depreciationYear) / 12;

  const fixedMonthly =
    values.insurance +
    values.roadTax +
    values.otherMonthly +
    yearlyCostsMonthly;

  const totalMonthly = fuelMonthly + fixedMonthly;
  const totalYearly = totalMonthly * 12;
  const costPerKm = totalMonthly / values.monthlyKm;

  return {
    fuelMonthly,
    fixedMonthly,
    totalMonthly,
    totalYearly,
    costPerKm
  };
}

function updateResults(results) {
  output.costPerKm.textContent = euro.format(results.costPerKm);
  output.fuelMonthly.textContent = euro.format(results.fuelMonthly);
  output.fixedMonthly.textContent = euro.format(results.fixedMonthly);
  output.totalMonthly.textContent = euro.format(results.totalMonthly);
  output.totalYearly.textContent = euro.format(results.totalYearly);

  const fuelShare =
    results.totalMonthly > 0
      ? (results.fuelMonthly / results.totalMonthly) * 100
      : 0;

  const otherShare = 100 - fuelShare;

  output.fuelPercentage.textContent = `${Math.round(fuelShare)}%`;
  output.otherPercentage.textContent = `${Math.round(otherShare)}%`;
  output.fuelBar.style.width = `${fuelShare}%`;
  output.otherBar.style.width = `${otherShare}%`;
}

function saveValues(values) {
  localStorage.setItem("autokostenValues", JSON.stringify(values));
}

function loadValues() {
  const saved = localStorage.getItem("autokostenValues");

  if (!saved) return;

  try {
    const values = JSON.parse(saved);

    Object.entries(values).forEach(([key, value]) => {
      if (fields[key] && Number.isFinite(value)) {
        fields[key].value = value;
      }
    });
  } catch {
    localStorage.removeItem("autokostenValues");
  }
}

function runCalculation() {
  clearValidation();

  const values = getValues();
  const errors = validate(values);

  if (errors.length > 0) {
    errorSummary.innerHTML = errors.map((error) => `<div>${error}</div>`).join("");
    errorSummary.hidden = false;
    return;
  }

  const results = calculate(values);
  updateResults(results);
  saveValues(values);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  runCalculation();
});

Object.values(fields).forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value !== "") {
      runCalculation();
    }
  });
});

resetButton.addEventListener("click", () => {
  form.reset();
  localStorage.removeItem("autokostenValues");
  clearValidation();

  Object.values(fields).forEach((input) => {
    input.value = "";
  });

  updateResults({
    fuelMonthly: 0,
    fixedMonthly: 0,
    totalMonthly: 0,
    totalYearly: 0,
    costPerKm: 0
  });

  fields.monthlyKm.focus();
});

loadValues();
runCalculation();
