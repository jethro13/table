const ready = function() {


  const pepole = [
  {firstname: "sam", surname: "marsa"},
  {firstname: "sammy", surname: "morse"},
  {firstname: "samantha", surname: "mircy"},
  {firstname: "samolo", surname: "bolo"},
  {firstname: "samfaischier", surname: "pt1"}
  ];
  const tbody = document.querySelector("tbody");

  for (i=0;i<pepole.length;i++){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td2 = document.createElement("td");
    let firstname = document.createTextNode(pepole[i].firstname);
    let surname = document.createTextNode(pepole[i].surname);
    td.appendChild(firstname);
    td2.appendChild(surname);
    tr.appendChild(td);
    tr.appendChild(td2);
    tbody.appendChild(tr);
  }
  const thead = document.querySelector("thead").querySelector("tr");
  let th = document.createElement("th");
  let name = document.createTextNode("Nom");
  th.appendChild(name);
  thead.appendChild(th);














}
document.addEventListener("DOMContentLoaded", ready);
