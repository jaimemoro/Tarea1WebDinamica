function addRow(){
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td></td><td></td><td></td><td></td>`
    document.getElementById("tableObjective").appendChild(newRow);    
  }
  document.getElementById("target").addEventListener("click", addRow);