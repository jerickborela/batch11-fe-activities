/*Select single element*/
document.getElementById("home");


/*Select multiple Elements*/
document.querySelectorAll("header");

/*modify text*/

document.getElementById("home").innerHTML = "not Home";



document.getElementById("cta-add").addEventListener("click",function(){ document.getElementById("cta-select").innerHTML = "Added to Cart"; });