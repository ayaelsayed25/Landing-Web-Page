var ancestor = document.getElementById("main"),
descendents = ancestor.getElementsByTagName('div'),
imgs = ["scrollBarImages/product10.jpg","scrollBarImages/product8.jpg",
        "scrollBarImages/product7.jpg","scrollBarImages/product6.jpg",
        "scrollBarImages/product5.jpg","scrollBarImages/product4.jpg",
        "scrollBarImages/product3.jpg","scrollBarImages/product2.jpg"],
prices = ["$915.00","$165.95","$472.00","$199.00","$199.95","$3,300.95","$78.95","$760.00"]; 

var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    
    if (n > 4) {n = 0;slideIndex = 0;}
    if (n < 0) {n = 4;slideIndex = 4;}

    var x = n;

    for (var i = 0; i < descendents.length; ++i) {
        
        var e = descendents[i];
        e.innerHTML = "<section class =\"image\"><img src = "+ imgs[x] +">" +
        "<button id =\"btn1\" class=\"btn\"><i class=\"material-icons\">add</i></button>" +
        "<button id =\"btn2\" class=\"btn\"><i class=\"material-icons\">search</i></button>" +
        "<button id =\"btn3\" class=\"btn\"><i class=\"material-icons\">favorite</i></button>" +
        "<button id =\"btn4\" class=\"btn\"><i class=\"material-icons\">network_cell</i></button></section>" +
        "<h3>Natural Cosmitek Products</h3>" + 
        "<h4 style=\"color:grey;\">Cosmetics</h4>" + "<h4 class=\"Price\">" + prices[x] + "</h4> ";
        x++;
  
    }

}



