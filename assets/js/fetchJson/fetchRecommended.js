fetch("./assets/json/product-list.json")
    .then(response => response.json())
    .then(data => {
        //console.log(data.responses);
        //$.each(data.responses, function (key, val) {

        let jsonObject = data.responses[0][0].params.recommendedProducts["Size Özel"];
        let text = "";

        for (const key in jsonObject) {
            if (Object.hasOwnProperty.call(jsonObject, key)) {
                const element = jsonObject[key];
                text += '<div class="swiper-slide">'
                    + '<div class="card d-flex align-items-stretch" style="width: 18rem;">'
                    + '<img data-src="'
                    + element.image
                    + '"'
                    + 'style="background-color: rgba(45, 45, 45, 0.05);"'
                    + 'class=" card-img-top swiper-lazy" alt="' + element.name + '">'
                    + '<div class="card-body">'
                    + '<h5 class="card-title product-title">'
                    + element.name
                    + '</h5>'
                    + '<div>'
                    + '<p class="price my-4">'
                    + element.priceText
                    + '</p>';
                if (element.params["shippingFee"] == "FREE") {
                    text += '<i class="fas fa-truck"'
                        + 'style="color:green; display:inline-block;"></i>'
                        + '<ul class="dot" style="display: none;">'
                        + '<li>'
                        + '</li>'
                        + '</ul>'
                        + '<p style="display: inline-block; font-size: 12px; margin-left:10px; margin-top: auto;"> Ücretsiz Kargo </p>';
                }
                text += '</div>'
                    + '<a href="#popup" class="addToCart btn btn-primary" style="display: none;">Sepete Ekle</a>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
                document.getElementById("recommended").innerHTML = text;
            }
        }

        // $.each(data.responses[0][0].params.recommendedProducts["Size Özel"], function (anahtar, deger) {
        //     console.log(deger.name);
        //     text = '<div class="swiper-slide">'
        //         + '<div class="card d-flex align-items-stretch" style="width: 18rem;">'
        //         + '<img data-src="'
        //         + deger.image
        //         + '"'
        //         + 'style="background-color: rgba(45, 45, 45, 0.05);"'
        //         + 'class=" card-img-top swiper-lazy" alt="eşya">'
        //         + '<div class="card-body">'
        //         + '<h5 class="card-title product-title">'
        //         + deger.name
        //         + '</h5>'
        //         + '<div>'
        //         + '<p class="price my-4">'
        //         + deger.priceText
        //         + '</p>';
        //     if (deger.params["shippingFee"] == "FREE") {
        //         text += '<i class="fas fa-truck"'
        //             + 'style="color:green; display:inline-block;"></i>'
        //             + '<p style=" display: inline-block; font-size: 12px; margin-left:10px; margin-top: auto;"> Ücretsiz Kargo </p>';
        //     }
        //     text += '</div>'
        //         + '<a href="#" class="btn btn-primary" style="display:none;">Sepete Ekle</a>'
        //         + '</div>'
        //         + '</div>'
        //         + '</div>';
        //     document.getElementById("recommended").innerHTML = text;
        // })
    })
