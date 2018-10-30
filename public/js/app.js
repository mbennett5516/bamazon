const getShopData = function () {
    $.ajax({
        url: '/api/shop',
        method: "GET"
    }).then(function (data) {
        if (data !== error) {
            let info = '';
            for (let i = 0; i < data.length; i++) {
                info += `<div class="row card">
            <div class ="card-body>
                <div class="col-auto name"><a href="/api/product/${data[i].id}">${data[i].product_name}</a></div>
                <div class=" price">$${data[i].price}</div>
            </div>
        </div>`
            }
            $('#shop-info').html(info);
        }
    })
}


const getProductdata = function (id) {
    $.ajax({
        url: `/api/product/${id}`,
        method: "GET"
    }).then(function (data) {
        if (data !== error){
            
        }
    })
}