let app = document.getElementById("mainSPA");
const selectedProductId = localStorage.getItem("productId");

fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((allProducts) => {

        const currentProduct = allProducts.find(p => p.id == selectedProductId);



        const { image, title, price, description, category, rating } = currentProduct;

        const relatedProducts = allProducts.filter(
            (p) => p.category === category && p.id != selectedProductId
        ).slice(0, 3);

        app.innerHTML = `

            <h1 class="container" onclick="window.location.href='/index.html'"><i class="ri-arrow-left-long-line"></i> Back to products</h1>

            <section class="spaFLEX container">
                <div class="img">
                    <img src="${image}" alt="${title}">
                </div>

                <div class="spaText">
                    <button class="btn1">${category}</button>
                    <h1 class="title">${title}</h1>

                    <p class="reting">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        ${rating ? rating.rate : 0} (${rating ? rating.count : 0} reviews)
                    </p>

                    <p class="prices">$${price}</p>

                    <div class="spaBtn">
                        <button>Description</button>
                        <button>Shipping</button>
                        <button>Details</button>
                    </div>

                    <p class="spaBtntext">${description}</p>

                    <div class="quantityBtn">
                        <p>Quantity</p>
                        <button><i class="ri-subtract-line"></i></button>
                        <p>1</p>
                        <button><i class="ri-add-line"></i></button>
                    </div>

                    <div class="btnFlex">
                        <button> <i class="ri-shopping-cart-line"></i> Add to Cart</button>
                        <i class="ri-heart-line"></i>
                    </div>
                </div>
            </section>

            <section class="container" style="margin-top: 60px;">
                <h2 style="margin-bottom: 20px; font-size: 22px;">Related Products</h2>
                
                <div class="related-grid" id="relatedContainer">
                    </div>
            </section>
            `;

        const relatedContainer = document.getElementById("relatedContainer");

        relatedProducts.forEach((prod) => {
            const card = document.createElement("div");
            card.classList.add("related-card");

            card.innerHTML = `
                    <div class="related-img-wrapper">
                        <img src="${prod.image}" alt="${prod.title}">
                    </div>
                    <div class="related-info">
                        <h3>${prod.title.length > 25 ? prod.title.slice(0, 25) + "..." : prod.title}</h3>
                        <p class="related-price">$${prod.price}</p>
                        <button class="related-add-btn">Add to Cart</button>
                    </div>
                `;

            card.addEventListener("click", (e) => {
                if (!e.target.classList.contains("related-add-btn")) {
                    localStorage.setItem("productId", prod.id);
                    window.location.reload();
                }
            });

            relatedContainer.appendChild(card);
        });

    })
