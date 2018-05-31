    if(window.innerWidth > 768){
        var screen = document.getElementById("screen");
        var holder = document.getElementById("holder2");
        var imageNames = ["afb_1.png",
                 "afb_2.png",
                 "afb_3.png",
                 "afb_4.png",
                 "afb_5.png"];
screen.src = "big/" + imageNames[3];
for (let i = 0; i < imageNames.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", "small/" + imageNames[i]);
    holder.appendChild(img);
    img.addEventListener('click', () => {
        screen.src = ("big/" + imageNames[i])
    });
}
        function pageScroll() {
    	window.scrollBy(0,-480);
    	scrolldelay = setTimeout('Scroll()')
}
    }
    
     else{
        
       var screen = document.getElementById("screen");
var holder = document.getElementById("holder");
var imageNames = ["afb_1.png",
                 "afb_2.png",
                 "afb_3.png",
                 "afb_4.png",
                 "afb_5.png"];
screen.src = "big/" + imageNames[3];
for (let i = 0; i < imageNames.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", "small2/" + imageNames[i]);
    holder.appendChild(img);
    img.addEventListener('click', () => {
        screen.src = ("big/" + imageNames[i])
        });
    }
     }