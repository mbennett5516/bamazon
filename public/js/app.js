const getShopData = function () {
    $('#shop-info').empty();
    $('#goShopping').addClass('hide');
    $.ajax({
        url: '/api/shop',
        method: "GET"
    }).then(function (data) {
        let info = '';
        for (let i = 0; i < data.length; i++) {
            info += `<div class="row card">
            <div class ="card-body>
                <div class="col-auto"><a href="#" class="name" id="${data[i].id}">${data[i].product_name}</a></div>
                <div class=" price">$${data[i].price}</div>
            </div>
        </div>`
        }
        $('#shop-info').html(info);
    })
}




const getProductData = function (id) {
    // event.preventDefault();
    console.log(id);
    $.ajax({
        url: `/api/product/${id}`,
        method: "GET"
    }).then(function (data) {
        $("#shop-info").empty();
        let info = '';
        info = `<div class="row"><div class="col-8" id="image${data[0].id}"><img src="${data[0].image}"/></div></div>`;
        $('#shop-info').append(info);
    })
}
$('#goShopping').on('click', getShopData);

$('#shop-info').on('click', 'a.name', function () {
    let id = this.id;
    getProductData(id);
});