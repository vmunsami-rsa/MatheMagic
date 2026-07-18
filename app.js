const measurementSets = {
  length: {
    label: "Length",
    base: "meter",
    units: {
      millimeter: { label: "Millimeter", symbol: "mm", factor: 0.001 },
      centimeter: { label: "Centimeter", symbol: "cm", factor: 0.01 },
      meter: { label: "Meter", symbol: "m", factor: 1 },
      kilometer: { label: "Kilometer", symbol: "km", factor: 1000 },
      inch: { label: "Inch", symbol: "in", factor: 0.0254 },
      foot: { label: "Foot", symbol: "ft", factor: 0.3048 },
      yard: { label: "Yard", symbol: "yd", factor: 0.9144 },
      mile: { label: "Mile", symbol: "mi", factor: 1609.344 }
    }
  },
  mass: {
    label: "Weight / Mass",
    base: "gram",
    units: {
      milligram: { label: "Milligram", symbol: "mg", factor: 0.001 },
      gram: { label: "Gram", symbol: "g", factor: 1 },
      kilogram: { label: "Kilogram", symbol: "kg", factor: 1000 },
      ounce: { label: "Ounce", symbol: "oz", factor: 28.349523125 },
      pound: { label: "Pound", symbol: "lb", factor: 453.59237 },
      stone: { label: "Stone", symbol: "st", factor: 6350.29318 },
      metricTon: { label: "Metric ton", symbol: "t", factor: 1000000 }
    }
  },
  temperature: {
    label: "Temperature",
    units: {
      celsius: {
        label: "Celsius",
        symbol: "°C",
        toBase: (value) => value,
        fromBase: (value) => value
      },
      fahrenheit: {
        label: "Fahrenheit",
        symbol: "°F",
        toBase: (value) => (value - 32) * 5 / 9,
        fromBase: (value) => value * 9 / 5 + 32
      },
      kelvin: {
        label: "Kelvin",
        symbol: "K",
        toBase: (value) => value - 273.15,
        fromBase: (value) => value + 273.15
      }
    }
  },
  volume: {
    label: "Volume",
    base: "liter",
    units: {
      milliliter: { label: "Milliliter", symbol: "mL", factor: 0.001 },
      liter: { label: "Liter", symbol: "L", factor: 1 },
      cubicMeter: { label: "Cubic meter", symbol: "m³", factor: 1000 },
      teaspoon: { label: "US teaspoon", symbol: "tsp", factor: 0.00492892159375 },
      tablespoon: { label: "US tablespoon", symbol: "tbsp", factor: 0.01478676478125 },
      fluidOunce: { label: "US fluid ounce", symbol: "fl oz", factor: 0.0295735295625 },
      cup: { label: "US cup", symbol: "cup", factor: 0.2365882365 },
      pint: { label: "US pint", symbol: "pt", factor: 0.473176473 },
      quart: { label: "US quart", symbol: "qt", factor: 0.946352946 },
      gallon: { label: "US gallon", symbol: "gal", factor: 3.785411784 }
    }
  },
  area: {
    label: "Area",
    base: "squareMeter",
    units: {
      squareMillimeter: { label: "Square millimeter", symbol: "mm²", factor: 0.000001 },
      squareCentimeter: { label: "Square centimeter", symbol: "cm²", factor: 0.0001 },
      squareMeter: { label: "Square meter", symbol: "m²", factor: 1 },
      hectare: { label: "Hectare", symbol: "ha", factor: 10000 },
      squareKilometer: { label: "Square kilometer", symbol: "km²", factor: 1000000 },
      squareInch: { label: "Square inch", symbol: "in²", factor: 0.00064516 },
      squareFoot: { label: "Square foot", symbol: "ft²", factor: 0.09290304 },
      acre: { label: "Acre", symbol: "acre", factor: 4046.8564224 },
      squareMile: { label: "Square mile", symbol: "mi²", factor: 2589988.110336 }
    }
  },
  speed: {
    label: "Speed",
    base: "meterPerSecond",
    units: {
      meterPerSecond: { label: "Meter per second", symbol: "m/s", factor: 1 },
      kilometerPerHour: { label: "Kilometer per hour", symbol: "km/h", factor: 0.27777777777778 },
      milePerHour: { label: "Mile per hour", symbol: "mph", factor: 0.44704 },
      knot: { label: "Knot", symbol: "kn", factor: 0.51444444444444 },
      footPerSecond: { label: "Foot per second", symbol: "ft/s", factor: 0.3048 }
    }
  },
  pressure: {
    label: "Pressure",
    base: "pascal",
    units: {
      pascal: { label: "Pascal", symbol: "Pa", factor: 1 },
      kilopascal: { label: "Kilopascal", symbol: "kPa", factor: 1000 },
      bar: { label: "Bar", symbol: "bar", factor: 100000 },
      psi: { label: "PSI", symbol: "psi", factor: 6894.757293168 },
      atmosphere: { label: "Atmosphere", symbol: "atm", factor: 101325 },
      millimeterMercury: { label: "Millimeter mercury", symbol: "mmHg", factor: 133.322387415 }
    }
  }
};

const state = {
  category: "length",
  from: "meter",
  to: "foot"
};

const elements = {
  category: document.querySelector("#category"),
  fromUnit: document.querySelector("#from-unit"),
  toUnit: document.querySelector("#to-unit"),
  inputValue: document.querySelector("#input-value"),
  resultValue: document.querySelector("#result-value"),
  resultUnit: document.querySelector("#result-unit"),
  allResults: document.querySelector("#all-results"),
  swapUnits: document.querySelector("#swap-units"),
  tableBase: document.querySelector("#table-base"),
  tableStart: document.querySelector("#table-start"),
  tableStep: document.querySelector("#table-step"),
  tableRows: document.querySelector("#table-rows"),
  tableHead: document.querySelector("#table-head"),
  tableBody: document.querySelector("#table-body"),
  unitCount: document.querySelector("#unit-count")
};

function getUnitKeys(categoryKey = state.category) {
  return Object.keys(measurementSets[categoryKey].units);
}

function getUnit(categoryKey, unitKey) {
  return measurementSets[categoryKey].units[unitKey];
}

function convert(value, fromKey, toKey, categoryKey = state.category) {
  const fromUnit = getUnit(categoryKey, fromKey);
  const toUnit = getUnit(categoryKey, toKey);

  if ("toBase" in fromUnit) {
    return toUnit.fromBase(fromUnit.toBase(value));
  }

  return value * fromUnit.factor / toUnit.factor;
}

function formatNumber(value) {
  if (!Number.isFinite(value)) return "";
  const absolute = Math.abs(value);

  if (absolute !== 0 && (absolute >= 1e9 || absolute < 0.000001)) {
    return value.toExponential(6).replace(/\.?0+e/, "e");
  }

  return new Intl.NumberFormat(undefined, {
    maximumFractionDigits: absolute < 1 ? 8 : 5
  }).format(value);
}

function optionTemplate(key, unit) {
  return `<option value="${key}">${unit.label} (${unit.symbol})</option>`;
}

function renderCategories() {
  elements.category.innerHTML = Object.entries(measurementSets)
    .map(([key, set]) => `<option value="${key}">${set.label}</option>`)
    .join("");

  const count = Object.values(measurementSets)
    .reduce((sum, set) => sum + Object.keys(set.units).length, 0);
  elements.unitCount.textContent = count;
}

function renderUnitSelectors() {
  const set = measurementSets[state.category];
  const unitOptions = Object.entries(set.units)
    .map(([key, unit]) => optionTemplate(key, unit))
    .join("");

  elements.fromUnit.innerHTML = unitOptions;
  elements.toUnit.innerHTML = unitOptions;
  elements.tableBase.innerHTML = unitOptions;
  elements.category.value = state.category;
  elements.fromUnit.value = state.from;
  elements.toUnit.value = state.to;
  elements.tableBase.value = state.from;
}

function setDefaultUnitsForCategory() {
  const defaults = {
    length: ["meter", "foot"],
    mass: ["kilogram", "pound"],
    temperature: ["celsius", "fahrenheit"],
    volume: ["liter", "gallon"],
    area: ["squareMeter", "squareFoot"],
    speed: ["kilometerPerHour", "milePerHour"],
    pressure: ["kilopascal", "psi"]
  };

  [state.from, state.to] = defaults[state.category] || getUnitKeys().slice(0, 2);
}

function updateCalculator() {
  const value = Number(elements.inputValue.value);
  const output = convert(value, state.from, state.to);
  const toUnit = getUnit(state.category, state.to);

  elements.resultValue.textContent = formatNumber(output);
  elements.resultUnit.textContent = toUnit.label;

  elements.allResults.innerHTML = getUnitKeys()
    .filter((unitKey) => unitKey !== state.from)
    .map((unitKey) => {
      const unit = getUnit(state.category, unitKey);
      const converted = convert(value, state.from, unitKey);
      return `
        <article class="mini-result">
          <strong>${formatNumber(converted)}</strong>
          <span>${unit.label} (${unit.symbol})</span>
        </article>
      `;
    })
    .join("");
}

function updateTable() {
  const baseKey = elements.tableBase.value;
  const start = Number(elements.tableStart.value);
  const step = Number(elements.tableStep.value);
  const rows = Math.min(Math.max(Number(elements.tableRows.value) || 1, 1), 50);
  const unitKeys = getUnitKeys();

  elements.tableHead.innerHTML = `
    <tr>
      ${unitKeys.map((unitKey) => {
        const unit = getUnit(state.category, unitKey);
        return `<th>${unit.label}<br>${unit.symbol}</th>`;
      }).join("")}
    </tr>
  `;

  elements.tableBody.innerHTML = Array.from({ length: rows }, (_, index) => {
    const baseValue = start + step * index;
    return `
      <tr>
        ${unitKeys.map((unitKey) => {
          const converted = convert(baseValue, baseKey, unitKey);
          return `<td>${formatNumber(converted)}</td>`;
        }).join("")}
      </tr>
    `;
  }).join("");
}

function syncAll() {
  renderUnitSelectors();
  updateCalculator();
  updateTable();
}

function switchView(view) {
  document.querySelectorAll(".tab").forEach((tab) => {
    const isActive = tab.dataset.view === view;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  document.querySelectorAll(".panel").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === view);
  });
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => switchView(tab.dataset.view));
});

elements.category.addEventListener("change", (event) => {
  state.category = event.target.value;
  setDefaultUnitsForCategory();
  syncAll();
});

elements.fromUnit.addEventListener("change", (event) => {
  state.from = event.target.value;
  elements.tableBase.value = state.from;
  updateCalculator();
  updateTable();
});

elements.toUnit.addEventListener("change", (event) => {
  state.to = event.target.value;
  updateCalculator();
});

elements.inputValue.addEventListener("input", updateCalculator);

elements.swapUnits.addEventListener("click", () => {
  [state.from, state.to] = [state.to, state.from];
  elements.fromUnit.value = state.from;
  elements.toUnit.value = state.to;
  elements.tableBase.value = state.from;
  updateCalculator();
  updateTable();
});

elements.tableBase.addEventListener("change", updateTable);
[elements.tableStart, elements.tableStep, elements.tableRows]
  .forEach((element) => element.addEventListener("input", updateTable));

renderCategories();
syncAll();
