let BASE_URL = "https://fakestoreapi.com/products";

let cartProducts = document.getElementById("products");
let Input = document.getElementById("input");

let allProducts = [];

fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {

    allProducts = data;

    showProducts(data);

  });

function showProducts(products) {

  cartProducts.innerHTML = "";

  products.forEach((product) => {

    const cart = document.createElement("div");

    const {
      image,
      title,
      price,
      description,
      id
    } = product;

    cart.classList.add("cart");

    cart.innerHTML = `

      <div class="cart">

        <div class="images">

          <img src="${image}" alt="product image">

          <div class="likeIcon">
            <i class="ri-heart-line"></i>
          </div>

          <div class="eyeBnt">
            <i class="ri-eye-line"></i>
            <i class="ri-shopping-cart-line" onclick"window.location.href='../html/cart.html'"></i>
          </div>

        </div>

        <div class="cartText">

          <h1>
            ${title.length > 25
              ? title.slice(0, 25) + "..."
              : title}
          </h1>

          <p>
            ${description.length > 40
              ? description.slice(0, 30) + "..."
              : description}
          </p>

          <p class="textP">
            $${price}
          </p>

          <button>
            Add to Cart
          </button>

        </div>

      </div>
    `;


    let eyeBtn = cart.querySelector(".ri-eye-line");

    eyeBtn.addEventListener("click", () => {

      localStorage.setItem("productId", id);

      window.location.href = "/src/html/spa.html";

    });

    cartProducts.appendChild(cart);

  });

}

Input.addEventListener("input", (e) => {

  let value = e.target.value.toLowerCase();

  let filtered = allProducts.filter((product) => {

    return product.title
      .toLowerCase()
      .includes(value);

  });

  if (filtered.length === 0) {

    cartProducts.innerHTML = `
      <div class="xato">

        <h6>No product found</h6>

        <p>
          Try changing your search or filter criteria
        </p>

      </div>
    `;

    return;
  }

  showProducts(filtered);

});