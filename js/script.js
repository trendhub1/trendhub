// Витягуємо різні елементи, щоб з ними працювати
const boxCatalog = document.querySelector("#catalog-products");

// Виводимо товари в html
function viewProducts() {
   // Приймаємо проміс і працюємо з ним далі
   fetch(
      "https://api.sheety.co/c3bd33e8f18f29817ac3ec3bcd42ed1f/toysAmazon2/sheetName"
   )
      .then((response) => response.json())
      .then((products) => {

         // Змінюємо струтуру відповіді
         products = products.sheetName;

         // Перебираємо товари
         if (products.length === 0) {
            // Виводимо текст, якщо результат пустий
            boxCatalog.innerHTML = `<div class="no-result">Немає товарів</div>`;
         } else {
            // Наповнюємо змінну масивом в вигляді html
            const productsHtml = products.map((product) => {
               return `<div class="card-product">
                        <a href="${product.productLink}" target="_blank" class="card-product__img-hold" aria-label="link to the product image
                        ">
                           <img src="${product.image}" alt="" class="card-product__img">
                        </a>
                        <div class="card-product__text-hold">
                           <a href="${product.productLink}" target="_blank" class="card-product__title-link">${product.title}</a>
                           <span class="card-product__price">${product.price}</span>
                        </div>
                     </div>`;
            });

            // Виводимо одним махом
            boxCatalog.innerHTML = productsHtml.join("");
         }
      });
}

// При завантаженні сторінки виводимо товари
viewProducts();
