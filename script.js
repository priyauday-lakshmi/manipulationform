


let form = document.getElementById("myForm");
let checkBoxes = document.getElementsByClassName("checkbox");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let checkedValue = [];
  for (let i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked === true) {
      checkedValue.push(checkBoxes[i].value);
    }
  }

  let fname = document.querySelector(".firstname").value;
  let lname = document.querySelector(".lastname").value;
  let address = document.querySelector(".address").value;
  let pincode = document.querySelector(".pincode").value;
  let gender = document.querySelector(".gender").value;
  let state = document.querySelector(".state").value;
  let country = document.querySelector(".country").value;

  let newRow = document.createElement("tr");

  let newfname = document.createElement("td");
  newfname.innerText = fname;
  newRow.appendChild(newfname);

  let newlname = document.createElement("td");
  newlname.innerText = lname;
  newRow.appendChild(newlname);

  let newaddress = document.createElement("td");
  newaddress.innerText = address;
  newRow.appendChild(newaddress);

  let newpincode = document.createElement("td");
  newpincode.innerText = pincode;
  newRow.appendChild(newpincode);

  let newgender = document.createElement("td");
  newgender.innerText = gender;
  newRow.appendChild(newgender);


  let newcheckbox = document.createElement("td");
  newcheckbox.innerText = checkedValue.join(",");
  newRow.appendChild(newcheckbox);

  let newstate = document.createElement("td");
  newstate.innerText = state;
  newRow.appendChild(newstate);

  let newcountry = document.createElement("td");
  newcountry.innerText = country;
  newRow.appendChild(newcountry);

  let tbody = document.getElementById("myTable");
  tbody.appendChild(newRow);

  form.reset();
});
