let BASE_URL = "https://fakestoreapi.com/products";
let cartProducts = document.getElementById("products")

fetch(BASE_URL)
    .then(res => {
        return res.json()
    })
    .then(data => {
        data.forEach(product => {
            const cart = document.createElement("div")
            cart.classList.add("cart")

            const { image, title, price, description, id } = product

            cart.innerHTML = `
            <div class="cart">

                <div class="images">

                    <img src="${image}" alt="">
                    
                    <div class="likeIcon">

                        <i class="ri-heart-line"></i>

                    </div>

                    <div class="eyeBnt">

                        <i class="ri-eye-line"></i>

                        <i class="ri-shopping-cart-line"></i>

                    </div>

                </div>

                <div class="cartText">

                    <h1>${title.length > 25 ? title.slice(0, 25) + "..." : title}</h1>

                    <p>${description.length > 40 ? description.slice(0, 30) + "..." : description}</p>

                    <p class="textP">$${price}</p>

                    <button>Add to Cart</button>

                </div>
                
            </div>
            `
            cartProducts.appendChild(cart)
        })
    })