$(document).ready(function () {
    $.ajax({
        url: '/api/shop',
        method: "GET"
    }).then(function (data) {
        let info = '';
        for (let i = 0; i < data.length; i++) {
            info += `<div class="row card">
            <div class ="card-body>
                <div class="col-auto"><a href="/product/${data[i].id}" class="name" id="${data[i].id}">${data[i].product_name}</a></div>
                <div class=" price">$${data[i].price}</div>
            </div>
        </div>`
        }
        $('#shop-info').html(info);
    })
})




const getProductData = function (id) {
    console.log(id);
    $.ajax({
        url: `/api/product/${id}`,
        method: "GET"
    }).then(function (data) {
        // window.location.replace("../product.html")
        console.log(data);
        let info = '';
        info = `<div class="row"><div class="col-8" id="image${id}"><img src="${data.image}"</div></div>`;
        $('#product-info').html(info);
    })

}


$('#shop-info').on('click', 'a.name', function () {
    let id = this.id;
    getProductData(id);
});