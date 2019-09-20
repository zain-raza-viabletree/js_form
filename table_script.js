var obj = [
  {
    Name: "Zain",
    Email: "azar.fisa2001@gmail.com",
    Password: "123agf",
    Gender: "Male",
    Country: "Pakistan"
  },

  {
    Name: "Meesam",
    Email: "meesam@hotmail.com",
    Password: "24416ddrg",
    Gender: "Male",
    Country: "Pakistan"
  },

  {
    Name: "Hussain",
    Email: "hussain@viabletree.com",
    Password: "2548waee",
    Gender: "Male",
    Country: "Pakistan"
  }
];

var form = document.createElement("form");
form.id = "details";
document.body.appendChild(form);

var tableDiv = document.createElement("div");
tableDiv.setAttribute("id", "tabDiv");
form.appendChild(tableDiv);

var table = document.createElement("table");
table.setAttribute("id", "mainTable");
tableDiv.appendChild(table);

var deleteBtn = document.createElement("input");
deleteBtn.type = "button";
deleteBtn.value = "Delete";
deleteBtn.onclick = deleteRow;
form.appendChild(deleteBtn);

var formAdd = document.createElement("div");
formAdd.setAttribute("id", "mainInput");
form.appendChild(formAdd);

var row = document.createElement("tr");
var cell = document.createElement("th");
row.appendChild(cell);
cell.innerHTML = "Select";
var cell = document.createElement("th");
row.appendChild(cell);
cell.innerHTML = "Id";
table.appendChild(row);

Object.keys(obj[0]).forEach(function(val) {
  var cell = document.createElement("th");
  row.appendChild(cell);
  cell.innerHTML = val;
});
// var cell = document.createElement("th");
// row.appendChild(cell);
// cell.innerHTML = "Actions";

for (var i = 0; i < obj.length; i++) {
  // var saveBtn = document.createElement("button");
  // saveBtn.innerHTML = "Save";
  // saveBtn.onclick = saveCell;

  // var editBtn = document.createElement("button");
  // editBtn.innerHTML = "Edit";
  // editBtn.onclick = editCell;

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkBox";

  var row = document.createElement("tr");
  table.appendChild(row);
  var cell = document.createElement("td");
  row.appendChild(cell);
  cell.appendChild(checkbox);
  var cell = document.createElement("td");
  row.appendChild(cell);
  cell.innerHTML = i;

  for (key in obj[i]) {
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = obj[i][key];
    cell.onclick = editCell;
  }
  // var cell = document.createElement("td");
  // row.appendChild(cell);
  // cell.appendChild(editBtn);
  // cell.appendChild(saveBtn);
}

var names = document.createElement("input");
names.type = "text";
names.id = "names";
names.name = "fullname";
names.placeholder = "Name here";
names.required = true;
formAdd.appendChild(names);

var email = document.createElement("input");
email.type = "email";
email.id = "email";
email.name = "emailadd";
email.placeholder = "Email address";
email.required = true;
formAdd.appendChild(email);

var password = document.createElement("input");
password.type = "password";
password.id = "pswd";
password.name = "pwd";
password.placeholder = "Password here";
password.required = true;
formAdd.appendChild(password);

var genderMaleWrap = document.createElement("div");
genderMaleWrap.id = "malestyling";

var genderMale = document.createElement("input");
genderMale.type = "radio";
genderMale.id = "male";
genderMale.name = "gend";
genderMale.checked = true;
genderMale.value = "Male";
genderMaleWrap.appendChild(genderMale);

var genderMaleLabel = document.createElement("label");
genderMaleLabel.innerText = "Male";
genderMaleLabel.setAttribute("for", "male");
genderMaleWrap.appendChild(genderMaleLabel);

formAdd.appendChild(genderMaleWrap);

var genderFemaleWrap = document.createElement("div");
genderFemaleWrap.id = "femalestyling";

var genderFemale = document.createElement("input");
genderFemale.type = "radio";
genderFemale.id = "female";
genderFemale.name = "gend";
genderFemale.checked = true;
genderFemale.value = "Female";
genderFemaleWrap.appendChild(genderFemale);

var genderFemaleLabel = document.createElement("label");
genderFemaleLabel.innerText = "Female";
genderFemaleLabel.setAttribute("for", "female");
genderFemaleWrap.appendChild(genderFemaleLabel);

formAdd.appendChild(genderFemaleWrap);

var country = document.createElement("select");
country.name = "countrySel";
country.id = "country";
formAdd.appendChild(country);

arr = [
  "Australia",
  "Brazil",
  "Canada",
  "Iran",
  "Malaysia",
  "Pakistan",
  "Singapore",
  "Zimbabwe"
];

for (var i = 0; i < arr.length; i++) {
  var option = document.createElement("option"),
    txt = document.createTextNode(arr[i]);
  option.appendChild(txt);
  option.setAttribute("value", arr[i]);
  // select.insertBefore(option,select.lastChild);
  country.appendChild(option);
}

var addTable = function() {
  var saveBtn = document.createElement("button");
  saveBtn.innerHTML = "Save";
  saveBtn.onclick = saveCell;

  var editBtn = document.createElement("input");
  editBtn.type = "button";
  editBtn.value = "Edit";
  editBtn.onclick = editCell;

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkBox";

  var row = document.createElement("tr");
  if (
    names.value != "" &&
    email.value != "" &&
    password.value != "" &&
    genderMale.value != "" &&
    genderFemale.value != "" &&
    country.value != ""
  ) {
    table.appendChild(row);
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.appendChild(checkbox);

    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = i++;

    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = names.value;

    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = email.value;

    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = password.value;

    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = genderMale.value;
    cell.innerHTML = genderFemale.value;

    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = country.value;

    // var cell = document.createElement("td");
    // row.appendChild(cell);
    // cell.appendChild(editBtn);
    // cell.appendChild(saveBtn);
    document.getElementById("details").reset();
  } else {
    alert("Fill the form first");
  }
};

var clickBtn = document.createElement("input");
clickBtn.type = "submit";
clickBtn.value = "Update";
clickBtn.onclick = addTable;
formAdd.appendChild(clickBtn);

function deleteRow() {
  var tabDel = document.getElementById("mainTable");
  var rowCount = tabDel.rows.length;
  for (var i = 0; i < rowCount; i++) {
    var row = tabDel.rows[i];
    var chkbox = row.cells[0].childNodes[0];
    if (chkbox.checked) {
      tabDel.deleteRow(i);
      rowCount--;
      i--;
    }
  }
}

function editCell(event, event2) {
  debugger;
  var txt = parseInt(document.getElementById("tabDiv").value);
  alert(txt);
  var tr = document.getElementById("mainTable").getElementsByTagName("tr");
  tr[txt].getElementsByTagName("td")[0].innerHTML = "change me";
}

// function saveCell() {
//   if (curr != undefined) {
//     var inputs = curr.getElementsByTagName("td");
//     for (var i = 2; i < inputs.length - 1; i++) {
//       currInput = inputs[i].getElementsByTagName("input");
//       currInput[0].parentElement.innerHTML = currInput[0].value;
//     }
//     curr = undefined;
//   }
// }
