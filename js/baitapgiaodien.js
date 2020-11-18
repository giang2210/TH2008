
var products = [
    {
        name:"Special Fruit & Fresh Produce",
        name2:"New",
        image:"4.png",
        price: 27,
        price2:32,
        star:3.5
    },
    {
        name:"Special Fruit & Fresh Produce",
        name2:"New",
        image:"4.png",
        price: 12,
        price2:27,
        star:4
    },
    {
        name:"Special Fruit & Fresh Produce",
        name2:"New",
        image:"4.png",
        price: 52,
        price2:64,
        star:5
    },
    {
        name:"Special Fruit & Fresh Produce",
        name2:"New",
        image:"4.png",
        price: 21,
        price2:28,
        star:2.5
    },
    {
        name:"Special Fruit & Fresh Produce",
        name2:"New",
        image:"4.png",
        price: 10,
        price2:14,
        star:3
    },
    {
        name:"Special Fruit & Fresh Produce",
        name2:"New",
        image:"4.png",
        price: 53,
        price2:95,
        star:4.5
    },

]
function gridProduct() {
    var g_html = "";
    for (var i=0;i<products.length;i++){
        g_html += " <div class=\"col-md-3\">\n" +
            "            <div class=\"itemain\">\n" +
            "                <img class=\"product-image\" src=\"img/mgmg.jpg\"/>\n" +
            "                <div class=\"star\">\n" +
            "                    <div class=\"star-box\">\n" +
            "                        <div class=\"star-rate\" style=\"width: 80%\"></div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <p class=\"price\">$27.000 <b style=\"color: #cdcdcd\">&emsp;<strike>$30.00 </b></strike></p>\n" +
            "                <a href=\"#\" class=\"add-to-cart text-uppercase text-center\">Add</a>\n" +
            "            </div>\n" +
            "        </div>";
    }

    return g_html;
}
var grid = document.getElementById("nav");
grid.innerHTML = gridProduct();