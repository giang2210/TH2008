function gridProduct(products) {
    var g_html = "";
    for (var i=0;i<products.length;i++){
        g_html += "<div class=\"col-md-4\">\n" +
            "               <div class=\"item text-center\">\n" +
            "                   <h2 class=\"main\">"+products[i].name+"</h2>\n" +
            "                    <img class=\"product-image\" src=\""+products[i].image+"\">\n" +
            "                   <p class=\"main-1\">$"+products[i].price+"</p>\n" +
            "               </div>\n" +
            "           </div>";
    }

    return g_html;
}
function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText; // nhan text/json tu api
            rs = JSON.parse(rs);// chuyen thanh object json
            var products = rs.data.foods;
            // in html ra danh sach
            var grid = document.getElementById("gridproducts");
            grid.innerHTML = gridProduct(products);
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/category/3");
    xhttp.send();
}
loadData();