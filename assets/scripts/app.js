class Product {
  //   title = "DEFAULT";
  //   imageURL;
  //   description;
  //   price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageURL = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductList {
  products = [
    new Product(
      "A pillow",
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1573576982-amazonbasics-soft-pillow-2-pack-1573576934.jpg",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A carpet",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShvIv8paIKbRhohHuPR2Dg0wSvXCtsgXRH0uc9Ny9wc0T9Bw0T&usqp=CAU",
      "A carpet which you might like - or not.",
      89.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    // eslint-disable-next-line no-restricted-syntax
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
            <img src="${prod.imageURL}" alt="${prod.title}">
            <div class="product-item__content">
                <h2>${prod.title}</h2>
                <h3>\$${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
