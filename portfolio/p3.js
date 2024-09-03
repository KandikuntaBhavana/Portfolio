var tabLinks=document.getElementsByClassName("tabLinks");
var tabContents=document.getElementsByClassName("tabContents");

function openTab(tabname){
    for(tablink of tabLinks){
        tablink.classList.remove("activeLink")
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("activeTab")
    }
    event.currentTarget.classList.add("activeLink")
    document.getElementById(tabname).classList.add("activeTab")
}
var sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closeMenu(){
    sidemenu.style.right="-200px";
}
