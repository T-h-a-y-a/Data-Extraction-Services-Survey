// Helper to create a range (e.g. 0–10 + 99)
function range(start, end, extra) {
  const values = [];
  for (let i = start; i <= end; i++) values.push(i);
  if (extra !== undefined) values.push(extra);
  return values;
}

// Define all 136 fields
const fields = [
  { id: "Q90", values: [1, 2, 3, 99] },
  { id: "Q91", values: [1, 2, 3, 99] },
  { id: "Q110", values: [1, 2, 99] },
  { id: "Q13", values: range(0, 10, 99) },
  { id: "Q16", values: range(0, 10, 99) },
  { id: "Q17", values: range(0, 10, 99) },
  { id: "Q14n", values: range(0, 10, 99) },
  { id: "Q15nn", values: range(0, 10, 99) },
  { id: "Q111", values: range(0, 10, 99) },
  { id: "Q21", values: range(0, 10, 99) },
  { id: "Q22", values: range(0, 10, 99) },
  { id: "Q95", values: range(0, 10, 99) },
  { id: "Q24", values: range(0, 10, 99) },
  { id: "Q112", values: range(0, 10, 99) },
  { id: "Q44", values: range(0, 10, 99) },
  { id: "Q46", values: range(0, 10, 99) },
  { id: "Q48n", values: range(0, 10, 99) },
  { id: "Q98", values: range(0, 10, 99) },
  { id: "Q113", values: range(0, 10, 99) },
  { id: "Q114", values: range(0, 10, 99) },
  { id: "Q99", values: range(0, 10, 99) },
  { id: "Q115", values: range(0, 10, 99) },
  { id: "Q35nn", values: range(0, 10, 99) },
  { id: "Q36", values: range(0, 10, 99) },
  { id: "Q36b", values: [1, 2, 99] },
  { id: "Q37", values: range(0, 10, 99) },
  { id: "Q116", values: range(0, 10, 99) },
  { id: "Q38n", values: range(0, 10, 99) },
  { id: "Q39", values: range(0, 10, 99) },
  { id: "Q40n", values: range(0, 10, 99) },
  { id: "Q117", values: range(0, 10, 99) },
  { id: "Q118", values: range(0, 10, 99) },
  ...["1","2","3","4","5","6","7","8","9","10","90","95","99"].map(v => ({ id:`Q119a.${v}`, values:[`${v}`] })),
  { id: "Q7", values: range(0, 10, 99) },
  { id: "Q11", values: range(0, 10, 99) },
  { id: "Q94", values: range(0, 10, 99) },
  { id: "Q12n", values: range(0, 10, 99) },
  { id: "Q120", values: range(0, 10, 99) },
  { id: "Q28", values: range(0, 10, 99) },
  { id: "Q96", values: range(0, 10, 99) },
  { id: "Q30nn", values: range(0, 10, 99) },
  { id: "Q31", values: range(0, 10, 99) },
  { id: "Q33", values: range(0, 10, 99) },
  { id: "Q34", values: range(0, 10, 99) },
  { id: "Q97", values: range(0, 10, 99) },
  { id: "Q3n", values: range(0, 10, 99) },
  { id: "Q4", values: range(0, 10, 99) },
  { id: "Q6", values: range(0, 10, 99) },
  { id: "Q121", values: range(0, 10, 99) },
  { id: "Q57n", values: range(0, 10, 99) },
  { id: "Q122", values: range(0, 10, 99) },
  { id: "Q123", values: range(0, 10, 99) },
  { id: "Q124", values: range(0, 10, 99) },
  { id: "Q125", values: range(0, 10, 99) },
  { id: "Q126", values: range(0, 10, 99) },
  { id: "Q102", values: range(0, 10, 99) },
  { id: "Q128", values: range(0, 10, 99) },
  { id: "Q129", values: range(0, 10, 99) },
  ...["1","2","3","4","5","90","95","99"].map(v => ({ id:`Q130a.${v}`, values:[`${v}`] })),
  { id: "Q59an", values: range(0, 10, 99) },
  { id: "Q131", values: range(0, 10, 99) },
  { id: "Q132", values: range(0, 10, 99) },
  { id: "Q133", values: range(0, 10, 99) },
  { id: "Q134", values: range(0, 10, 99) },
  ...["1","2","3","4","5","6","7","8","9","10","90","95","99"].map(v => ({ id:`Q135a.${v}`, values:[`${v}`] })),
  { id: "Q136", values: range(0, 10, 99) },
  { id: "Q92", values: range(0, 10, 99) },
  { id: "Q137", values: range(0, 10, 99) },
  { id: "Q137a", values: range(0, 10, 99) },
  { id: "Q137b", values: range(0, 10, 99) },
  { id: "Q137c", values: range(0, 10, 99) },
  { id: "Q137d", values: range(0, 10, 99) },
  { id: "Q137e", values: range(0, 10, 99) },
  { id: "Q137f", values: range(0, 10, 99) },
  { id: "Q61n", values: range(0, 10, 99) },
  { id: "Q71", values: range(0, 10, 99) },
  { id: "Q71c", values: range(0, 10, 99) },
  { id: "Q71d", values: range(0, 10, 99) },
  { id: "Q100", values: range(0, 10, 99) },
  { id: "Q70", values: range(0, 10, 99) },
  { id: "Q76", values: range(0, 10, 99) },
  { id: "Q74n", values: range(0, 10, 99) },
  { id: "Q77", values: range(0, 10, 99) },
  { id: "Q84", values: range(0, 10, 99) },
  { id: "Q93", values: range(0, 10, 99) },
  ...["1","2","3","4","5","6","7","8","9","10","11","12","13","14","90","95","99"].map(v => ({ id:`Q139a.${v}`, values:[`${v}`] })),
  { id: "Q103", values: [1, 2] }
];

// === Dynamic UI Rendering ===
function createCheckboxes(field) {
  const group = document.createElement("div");
  group.classList.add("checkbox-group");

  const title = document.createElement("h3");
  title.textContent = field.id;
  group.appendChild(title);

  field.values.forEach(val => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = `${field.id}[]`;
    input.value = val;
    label.appendChild(input);
    label.appendChild(document.createTextNode(` ${val}`));
    group.appendChild(label);
  });

  return group;
}

// Render all fields dynamically
const container = document.getElementById("checkboxContainer");
fields.forEach(field => container.appendChild(createCheckboxes(field)));

// === Buttons ===
const btnContainer = document.createElement("div");
btnContainer.innerHTML = `
  <button type="submit" style="background:#4CAF50;">Submit</button>
  <button type="button" id="exportBtn" style="background:#4CAF50;">Export to Excel</button>
  <button type="button" id="deleteAllBtn" style="background:red;">Delete All</button>
`;
document.getElementById("dataForm").appendChild(btnContainer);

// === Table ===
const table = document.createElement("table");
table.id = "dataTable";
table.border = "1";
table.style.width = "100%";
table.style.marginTop = "20px";
table.innerHTML = `
  <thead>
    <tr>
      <th>#</th><th>File Name</th><th>Page</th><th>CLE</th><th>Responses</th><th>Actions</th>
    </tr>
  </thead>
  <tbody></tbody>
`;
document.body.appendChild(table);

// === Data Management ===
let allEntries = JSON.parse(localStorage.getItem("formEntries") || "[]");
let editIndex = null;

// === Render Table ===
function renderTable() {
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  allEntries.forEach((entry, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${entry.FileName || ""}</td>
      <td>${entry.Page || ""}</td>
      <td>${entry.CLE || ""}</td>
      <td>${
        Object.keys(entry)
          .filter(k => !["FileName", "Page", "CLE"].includes(k))
          .map(k => `${k}: [${(entry[k] || []).join(", ")}]`)
          .join("<br>")
      }</td>
      <td style="text-align:center;">
        <button class="editRow" data-index="${index}" style="background:#2196F3;">Edit</button>
        <button class="deleteRow" data-index="${index}" style="background:#f44336;">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  document.querySelectorAll(".editRow").forEach(btn => btn.addEventListener("click", handleEdit));
  document.querySelectorAll(".deleteRow").forEach(btn => btn.addEventListener("click", handleDelete));
}
renderTable();

// === Submit Form ===
document.getElementById("dataForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const entry = {};

  for (let [key, value] of data.entries()) {
    key = key.replace("[]", ""); // ✅ Normalize checkbox field names

    if (["FileName", "Page", "CLE"].includes(key)) {
      entry[key] = value;
    } else {
      if (!entry[key]) entry[key] = [];
      entry[key].push(value);
    }
  }

  if (editIndex !== null) {
    allEntries[editIndex] = entry;
    editIndex = null;
    alert("✅ Entry updated!");
  } else {
    allEntries.push(entry);
    alert("✅ New entry added!");
  }

  localStorage.setItem("formEntries", JSON.stringify(allEntries));
  e.target.reset();
  renderTable();
});

// === Edit / Delete Functions ===
function handleEdit(e) {
  const index = e.target.dataset.index;
  const data = allEntries[index];
  editIndex = parseInt(index);

  document.getElementById("dataForm").reset();
  document.querySelectorAll("input[type='checkbox']").forEach(cb => (cb.checked = false));

  document.getElementById("fileName").value = data.FileName || "";
  document.getElementById("page").value = data.Page || "";
  document.getElementById("cle").value = data.CLE || "";

  for (let key in data) {
    if (Array.isArray(data[key])) {
      data[key].forEach(val => {
        const input = document.querySelector(`[name='${key}[]'][value='${val}']`);
        if (input) input.checked = true;
      });
    }
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleDelete(e) {
  const index = e.target.dataset.index;
  if (confirm("Delete this entry?")) {
    allEntries.splice(index, 1);
    localStorage.setItem("formEntries", JSON.stringify(allEntries));
    renderTable();
    alert("🗑️ Entry deleted.");
  }
}

document.getElementById("deleteAllBtn").addEventListener("click", () => {
  if (confirm("Delete all entries?")) {
    allEntries = [];
    localStorage.removeItem("formEntries");
    renderTable();
  }
});

// === Export to Excel ===
document.getElementById("exportBtn").addEventListener("click", () => {
  if (allEntries.length === 0) return alert("No data available to export.");

  const allFieldIds = ["FileName", "Page", "CLE", ...fields.map(f => f.id)];

  const rows = allEntries.map((entry, idx) => {
    const row = { No: idx + 1 };

    allFieldIds.forEach(id => {
      const val = entry[id];
      row[id] = Array.isArray(val) ? val.join(", ") : val || "";
    });

    return row;
  });

  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
  XLSX.writeFile(workbook, "form_data.xlsx");
  alert("✅ Excel file exported successfully!");
});

