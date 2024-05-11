document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".login-btn");
    const productCard1 = document.getElementById("product1_card");
    const productCard2 = document.getElementById("product2_card");
    const productCard3 = document.getElementById("product3_card");
    const productCard4 = document.getElementById("product4_card");
    const cartButton = document.querySelector(".add-to-cart");;

    loginButton.addEventListener("click", function() {
        window.location.href = "login.html";
    });
    
    productCard1.addEventListener("click", function() {
        window.location.href = "product1_homepage.html";
    });
    
    productCard2.addEventListener("click", function() {
        window.location.href = "product2_homepage.html"; 
    });

    productCard3.addEventListener("click", function() {
        window.location.href = "product3_homepage.html";
    });

    productCard4.addEventListener("click", function() {
        window.location.href = "product4_homepage.html";
    });

    cartButton.addEventListener("click", function() { 
        window.location.href = "cart.html";
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const logoImg = document.querySelector(".logo-img");

    logoImg.addEventListener("click", function() {
        window.location.href = "/";
    });
});


document.getElementById("aksesuari-btn").addEventListener("click", function() {
    window.location.href = "aksesuari.html"; 
});

document.getElementById("spoles-btn").addEventListener("click", function() {
    window.location.href = "spoles.html"; 
});

document.getElementById("makskeres-btn").addEventListener("click", function() {
    window.location.href = "makskeres.html"; 
});

// Define function to filter products based on search query
function filterProducts() {
    var input, filter, productContainer, productCards, productName, i, txtValue;
    input = document.getElementById('search-bar');
    filter = input.value.toUpperCase();
    productContainer = document.querySelector('.product-container');
    productCards = productContainer.getElementsByClassName('product-card');

    for (i = 0; i < productCards.length; i++) {
        productName = productCards[i].getAttribute('data-name');
        txtValue = productName.toUpperCase();
        if (txtValue.indexOf(filter) > -1) {
            productCards[i].style.display = "";
        } else {
            productCards[i].style.display = "none";
        }
    }
}


document.getElementById('search-bar').addEventListener('keyup', filterProducts);
