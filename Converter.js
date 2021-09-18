////The navigations////
///////////////////////
const navSlide = () => {
    const Burger = document.querySelector('.burger');
    const nav = document.querySelector('.List');
    const navList = document.querySelectorAll('.List li');
   
    //make the burger clikable
    Burger.addEventListener('click' , () => {
        nav.classList.toggle('nav-active');
    
    //animate all the li's from my List
        navList.forEach((Link, index) => {
            if(Link.style.animation){
                Link.style.animation='';
            }
            else{
                Link.style.animation = `ListFade 0.5s ease forwards ${index / 7 + 0.5}s`; 
            }
        });
       
    //burger animation
        Burger.classList.toggle('toggle');
    });
}
navSlide();

/////The end of Navigation//////
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function MyBut(params) {
    var tbl = document.getElementById("mytable");
   
    var row = tbl.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    
    var row2 = tbl.insertRow();
    var cell3 = row2.insertCell();
    var cell4 = row2.insertCell();

    cell1.innerHTML = "here is your solution vince: ";
    cell2.innerHTML = "12ASA3gADDFFGDF456HJK";
    cell3.innerHTML = "at least you got it boy!";
    cell4.innerHTML = "11101011010";
}
