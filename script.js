/* .js files add interaction to your website */
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}


function generateScript() {

  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

    displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am creating a  cause called the Social Justice Campaign, which will help Americans fight for social justice. As an American, I believe that we shouldn't experience discrimination by others. Everyone should be able to work in jobs and apply for housing. For example, " + learning + ". Please support the Global Justice Campaign for social and economic justice.";
}

var factList = [
  "The study, from the National Community Reinvestment Coalition (NCRC), identified more than 1,000 neighborhoods in 935 cities and towns where gentrification occurred between 2000 and 2013. In 230 of those neighborhoods, rapidly rising rents, property values and taxes forced more than 135,000 residents to move away.", 
  "Seven cities accounted for nearly half of the gentrification nationally: New York City, Los Angeles, Washington, D.C., Philadelphia, Baltimore, San Diego and Chicago.", 
  "The AARP reports that 1 in every 5 workers in the United States is over the age of 55. Nearly 65% of workers say that they have experienced age-based discrimination at work and 58% of those surveyed believe that ageism became apparent starting at age 50.", 
];
 

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
