// Витягуємо різні елементи, щоб з ними працювати
const boxCatalog = document.querySelector("#catalog-products");
// const boxPin = document.querySelector("#item__pin");
// console.log(boxPin);
// Виводимо товари в html
function viewProducts() {
   // Приймаємо проміс і працюємо з ним далі
   fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=G525CwGX58kAFqZo1JtTt_U-0Pu16uqeVa6OLt5RKB4ZtrsDCxdZxADVQsPIc-hklsJ65VRlMZGZC_32IKCvg4-en8BN8lTKm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEiO1Evecy43yh_P95V_8QbBLRG5d1yHOPW3QZ-3xOzms49p0sZrLPB-0PBAuRdUbt0dAAJNLExRq1w33gQnEbpZfjcqvmxOng&lib=M567Z4gvLRO51cnxxvnujP_tDJ3Q6be74"
   )
      .then((response) => response.json())
      .then((products) => {

         // Змінюємо струтуру відповіді
         products = products.sheet;

         // Перебираємо товари
         if (products.length === 0) {
            // Виводимо текст, якщо результат пустий
            boxCatalog.innerHTML = `<div class="no-result">Немає товарів</div>`;
         } else {
            // Наповнюємо змінну масивом в вигляді html
            const productsHtml = products.map((product) => {
               return `<div class="card-product">
                        <a href="${product.Link}" target="_blank" class="card-product__img-hold" aria-label="link to the product picture" >
                           <img src="${product.Image}" alt="" class="card-product__img">
                        </a>
                        <div class="card-product__text-hold">
                           <a href="${product.Link}" target="_blank" class="card-product__title-link">${product.Title}</a>
                           <span class="card-product__price card-color__price">${product.Price}</span>
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


let SHEET_ID = '1G5yhh-zlxyy2YCEJGB6YJpsMyIysZMDjQNQofslES6Q'
let SHEET_TITLE = 'Pinterest';
let SHEET_RANGE = 'A1:B4'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
   .then(res => res.text())
   .then(rep => {
      let data = JSON.parse(rep.substr(47).slice(0, -2));
      // console.log(data.table.rows[0].c[0].v);
   })










