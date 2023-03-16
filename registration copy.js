var i = 0;

function calculate(){
    var nameSurname = document.getElementById("name").value;
    var midterm = document.getElementById("midterm").value;
    var final = document.getElementById("final").value;

    var result = (midterm * 0.4) + (final * 0.6);
    var status = result<50 ? "Failed" : "Passed";

    var list = document.getElementById("list");

    i++;
    
    // list.innerHTML += `
    //                     <tr>
    //                         <td>${i}</td>
    //                         <td>${nameSurname}</td>
    //                         <td>${midterm}</td>
    //                         <td>${final}</td>
    //                         <td>${result}</td>
    //                         <td class='text-${status === "Failed"?"danger":"success"}'>${status}</td>
    //                     </tr>
    //                 `;

    const tr=document.createElement("tr");

    const numberTd = document.createElement("td");
    numberTd.textContent=i;

    const nameTd = document.createElement("td");
    nameTd.textContent = nameSurname;

    const midtermTd = document.createElement("td");
    midtermTd.textContent = midterm;

    const finalTd = document.createElement("td");
    finalTd.textContent = final;

    const resultTd = document.createElement("td");
    resultTd.textContent = result;

    const statusTd = document.createElement("td");
    statusTd.textContent = status;
    statusTd.className = status==="Failed"?"text-danger":"text-success";

    tr.appendChild(numberTd);
    tr.appendChild(nameTd);
    tr.appendChild(midtermTd);
    tr.appendChild(finalTd);
    tr.appendChild(resultTd);
    tr.appendChild(statusTd);

    list.appendChild(tr);

}

