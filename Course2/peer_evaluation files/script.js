function compute()
{
    var principal = document.getElementById("principal").value;

    if(principal !== "")
    {
        if (principal <= 0)
        {
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return;
        }
    }
    else
    {
        alert("Enter number Amount: ");
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var dateNow = new Date();
    var year = parseInt(dateNow.getFullYear())+parseInt(years);
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML="<br/>If you deposit " + "<span class='highlight'>" + principal + "</span> USD.<br/>"  + "<br> At an interest Rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br/><br/> You will receive an amount of " + "<span class='highlight'>" + interest + "</span> USD" + " in the year " + "<span class='highlight'>" + year + "</span>";
}
function updateRate() 
{
    var rateval = document.getElementById("rate");
    var output = document.getElementById("rate_val");
    output.innerHTML=rateval.value + "%";

    rateval.oninput = funtion()
    {
        output.innerHTML=this.value + "%";
    }
}
        