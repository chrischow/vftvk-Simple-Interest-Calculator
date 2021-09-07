// Function to compute interest gained and end year
function compute()
{
    // Extract variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // Compute interest and end year
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    
    // Check principal for positive values
    if (principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    // Display text in span "result"
    document.getElementById("result").innerHTML = "If you deposit \<mark\>" + principal + "\</mark\>,\<br\>" +
        "at an interest rate of \<mark\>" + rate + "%\</mark\>\<br\>" +
        "You will receive an amount of \<mark\>" + interest + "\</mark\>,\<br\>" +
        "in the year \<mark\>" + year + "\</mark\>."
}

// Function to retrieve rate and display it in target span
function updateRate(){
    // Get rate value
    var rateval = document.getElementById("rate").value;

    // Display rate in span "rate_val"
    document.getElementById("rate_val").innerText = rateval + "%";
}
