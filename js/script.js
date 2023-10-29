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

// function viewPin() {
//    fetch(
//       "https://script.googleusercontent.com/macros/echo?user_content_key=eZnwFs78OzOiBuZDhy2Pxcw2dB55b3FZwzVUEsCwUbpBR8dPcszbCFESfmgFbTc_oM5rBdITQkHvOgSv3ZmvFtb9_7t2Zk9Gm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEBT8ukp-5TzAJaSobJwXPWJruGMg1_BFGBBuy253xJS48LKRdReWuPkPaDqLMI9Rg&lib=M567Z4gvLRO51cnxxvnujP_tDJ3Q6be74https://script.googleusercontent.com/macros/echo?user_content_key=G525CwGX58kAFqZo1JtTt_U-0Pu16uqeVa6OLt5RKB4ZtrsDCxdZxADVQsPIc-hklsJ65VRlMZGZC_32IKCvg4-en8BN8lTKm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEiO1Evecy43yh_P95V_8QbBLRG5d1yHOPW3QZ-3xOzms49p0sZrLPB-0PBAuRdUbt0dAAJNLExRq1w33gQnEbpZfjcqvmxOng&lib=M567Z4gvLRO51cnxxvnujP_tDJ3Q6be74"
//    )
//       .then((response) => response.json())
//       .then((products) => {

//          // Змінюємо струтуру відповіді
//          products = products.sheetPin;

//          // Перебираємо товари
//          if (products.length === 0) {
//             // Виводимо текст, якщо результат пустий
//             boxPin.innerHTML = `<div class="no-result">Немає товарів</div>`;
//          } else {
//             // Наповнюємо змінну масивом в вигляді html
//             const productsHtml = products.map((product) => {
//                return `<div class="gallery__item">
// 					<a href="${PinIMG}" class="gallery__item-hover-box">
// 						<span class="gallery__item-hash-tag link-hover">#pinterest-link</span>
// 					</a>
// 					<img src="${PinIMG}" alt="" class="gallery__item-img">
// 				</div>`;
//             });

//             // Виводимо одним махом
//             boxPin.innerHTML = productsHtml.join("");
//          }
//       });
// }
// viewPin();

// function viewPin() {
//    fetch(
//       "https://script.google.com/macros/s/AKfycbwAUwdvBYgpRBQ3vczUlgvArjjBIRi0V9HcmZlyd6sSPmyYxMiRlvphTYmayJlUoDut/exec"
//          .then((response) => response.json())
//          .then((data) => {
//             const products = data.sheetPin;
//             if (products.length === 0) {
//                boxPin.innerHTML = `<div class="no-result">Немає товарів</div>`;
//             } else {
//                const productsHtml = products.map((product) => {
//                   return `<div class="gallery__item">
//                      <a href="${product.pinIMG}" class="gallery__item-hover-box">
//                         <span class="gallery__item-hash-tag link-hover">#pinterest-link</span>
//                      </a>
//                      <img src="${product.pinIMG}" alt="" class="gallery__item-img">
//                   </div>`;
//                });
//                boxPin.innerHTML = productsHtml.join("");
//             }
//          })
//          .catch((error) => {
//             console.error("Error fetching data: ", error);
//          })
//    )
// }

// viewPin();

// $.ajax({
//    url: 'https://script.google.com/macros/s/AKfycbwAUwdvBYgpRBQ3vczUlgvArjjBIRi0V9HcmZlyd6sSPmyYxMiRlvphTYmayJlUoDut/exec',
//    method: 'GET',
//    success: function (data) {
//       console.log('Success', data);
//    },
//    error: function (error) {
//       console.log('Error', error);
//    }
// });

// $.ajax({
//    url: 'https://script.google.com/macros/s/AKfycbwAUwdvBYgpRBQ3vczUlgvArjjBIRi0V9HcmZlyd6sSPmyYxMiRlvphTYmayJlUoDut/exec',
//    method: 'GET',
//    success: function (data) {
//       console.log('Success', data);

//       const pinArray = data.pin; // Отримання масиву з об'єктами pin
//       const galleryContainer = document.querySelector('.gallery'); // Отримання контейнера галереї

//       // Перебір об'єктів pin у масиві
//       pinArray.forEach((pin) => {
//          const galleryItem = document.createElement('div'); // Створення нового елементу div
//          galleryItem.classList.add('gallery__item'); // Додавання класу до нового елементу
//          galleryItem.innerHTML = `
//             <a href="${pin.pinIMG}" class="gallery__item-hover-box">
//                <span class="gallery__item-hash-tag link-hover">#pinterest-link</span>
//             </a>
//             <img src="${pin.pinIMG}" alt="" class="gallery__item-img">
//          `; // Додавання HTML-коду до нового елементу
//          galleryContainer.appendChild(galleryItem); // Додавання нового елементу до контейнера галереї
//       });
//    },
//    error: function (error) {
//       console.log('Error', error);
//    }
// });

