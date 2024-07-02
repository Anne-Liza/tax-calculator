document.getElementById("salaryForm").addEventListener("submit", function(e)) {
    e.preventDefault();

    //calculate payee

    const payee = document.getElementById("netSalary").value;
    const relief = 2400;

    if (grossSalary<=24000){
        payee = "grossSalary*0.01";
    }
    else if (grossSalary<=32333){
        payee = "relief + (grossSalary * 0.25)";
    }
    else if (grossSalary<=500000){
        payee = "relief + (grossSalary * 0.3)";
    }
    else if (grossSalary<=800000){
        payee = "relief + (grossSalary * 0.325)";
    }
    else if (grossSalary<=1600000){
        payee = "relief + (grossSalary * 0.35)";
    }
   

    //calculate nssf,

    const nssf = document.getElementById("nssf").value;
    const tier1 = (grossSalary*0.06);
    const tier2 = (grossSalary-36000)*0.12;

    if (grossSalary>=7000 && grossSalary<=36000){
        nssf= tier1;
    }
    else (grossSalary>36000 ){
        nssf= tier1 + tier2;
    }

    //calculate nhif

    const nhif = document.getElementById("nhif").value;

    if (grossSalary>=5999){
        nhif = 150;
    }
    else if (grossSalary>=6000 && grade<7999){
        nhif= 300;
    }
    else if (grossSalary>=8000 && grade<11999){
        nhif= 400;
    }
    else if (grossSalary>=12000 && grade<14999){
        nhif= 500;
    }
    else if (grossSalary>=15000 && grade<19999){
        nhif= 600;
    }
    else if (grossSalary>=20000 && grade<24999){
        nhif= 750;
    }
    else if (grossSalary>=25000 && grade<29999){
        nhif= 300;
    }
    else if (grossSalary>=6000 && grade<7999){
        nhif= 850;
    }
    else if (grossSalary>=30000 && grade<34999){
        nhif= 950;
    }
    else if (grossSalary>=40000 && grade<44999){
        nhif= 1000;
    }
    else if (grossSalary>=45000 && grade<49999){
        nhif= 1100;
    }
    else if (grossSalary>=50000 && grade<59999){
        nhif= 1200;
    }
    else if (grossSalary>=60000 && grade<69999){
        nhif= 1300;
    }
    else if (grossSalary>=70000 && grade<79999){
        nhif= 1400;
    }
    else if (grossSalary>=80000 && grade<89999){
        nhif= 1500;
    }
    else if (grossSalary>=90000 && grade<99999){
        nhif= 1200;
    }
    else if (grossSalary>50000){
        nhif= 1700;
    }
    
    

    //calculate netSalary

    const netSalary = document.getElementById("payee").value;
    let netSalary = grossSalary- payee- nhif- nssf;

    
    

   
  document.getElementById("result").innerText = ${grossSalary}`;
  document.getElementById("result").innerText = ${payee}`;
  document.getElementById("result").innerText = ${nhif}`;
  document.getElementById("result").innerText = ${nssf}`;
  document.getElementById("result").innerText = ${netSalary}`;
});

