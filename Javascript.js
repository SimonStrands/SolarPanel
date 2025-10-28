var hamburgerDiv = document.getElementById("Hamburger_Div");
var sidebar = document.getElementById("Header_Nav_SideBar");

var hamburgerBar1 = hamburgerDiv.children[0];
var hamburgerBar2 = hamburgerDiv.children[1];
var hamburgerBar3 = hamburgerDiv.children[2];

hamburgerDiv.addEventListener("click", HamburgerAnimation);


var HamburgerClicked = false;
function HamburgerAnimation()
{
    HamburgerClicked = !HamburgerClicked;

    restartAnimation(hamburgerBar1);
    restartAnimation(hamburgerBar2);
    restartAnimation(hamburgerBar3);
    restartAnimation(sidebar);

    hamburgerBar1.style.animation = "HamburgerBar_1Animation ease-in";
    hamburgerBar2.style.animation = "HamburgerBar_2Animation ease-in";
    hamburgerBar3.style.animation = "HamburgerBar_3Animation ease-in";
    sidebar.style.animation = "SideBarAnimation 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards";

    if(HamburgerClicked)
    {
        hamburgerBar1.style.animationDirection = "normal";
        hamburgerBar2.style.animationDirection = "normal";
        hamburgerBar3.style.animationDirection = "normal";
        sidebar.style.animationDirection = "normal";
    }
    else{
        hamburgerBar1.style.animationDirection = "reverse";
        hamburgerBar2.style.animationDirection = "reverse";
        hamburgerBar3.style.animationDirection = "reverse";
        sidebar.style.animationDirection = "reverse";
    }
}

function restartAnimation(element) {
  element.style.animation = "none";   // temporarily remove
  element.offsetHeight;               // force reflow (important!)
  element.style.animation = null;       // reset
}