// Слайдер
(function() {
  var $slides = document.querySelectorAll('.slide');
  var $controls = document.querySelectorAll('.slider__control');
  var numOfSlides = $slides.length;
  var slidingAT = 1300; // sync this with scss variable
  var slidingBlocked = false;

  [].slice.call($slides).forEach(function($el, index) {
    var i = index + 1;
    $el.classList.add('slide-' + i);
    $el.dataset.slide = i;
  });

  [].slice.call($controls).forEach(function($el) {
    $el.addEventListener('click', controlClickHandler);
  });

  function controlClickHandler() {
    if (slidingBlocked) return;
    slidingBlocked = true;

    var $control = this;
    var isRight = $control.classList.contains('m--right');
    var $curActive = document.querySelector('.slide.s--active');
    var index = +$curActive.dataset.slide;
    (isRight) ? index++ : index--;
    if (index < 1) index = numOfSlides;
    if (index > numOfSlides) index = 1;
    var $newActive = document.querySelector('.slide-' + index);

    $control.classList.add('a--rotation');
    $curActive.classList.remove('s--active', 's--active-prev');
    document.querySelector('.slide.s--prev').classList.remove('s--prev');
    
    $newActive.classList.add('s--active');
    if (!isRight) $newActive.classList.add('s--active-prev');
    

    var prevIndex = index - 1;
    if (prevIndex < 1) prevIndex = numOfSlides;

    document.querySelector('.slide-' + prevIndex).classList.add('s--prev');

    setTimeout(function() {
      $control.classList.remove('a--rotation');
      slidingBlocked = false;
    }, slidingAT*0.75);
  };
}());

// Обробка подій при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
  let bill_buy = 0;
  let bill_buys = document.querySelector(".bill_buys");
  let add_to_bill_buys = document.querySelectorAll(".mn_product_buy");

  bill_buy = Number(localStorage.getItem('bill_buy')) || 0;
  bill_buys.textContent = bill_buy < 10 ? '0' + bill_buy : bill_buy;

  function plusOneBill_buys() {
    bill_buy += 1;
    bill_buys.textContent = bill_buy < 10 ? '0' + bill_buy : bill_buy;
    localStorage.setItem('bill_buy', bill_buy);
  }

  add_to_bill_buys.forEach(button => button.addEventListener('click', plusOneBill_buys));

  // Обробка кнопок додавання/зменшення кількості товарів у кошику (на сторінці cart.html)
  const plusButtons = document.querySelectorAll(".ca_pl_bills");
  const minusButtons = document.querySelectorAll(".ca_min_bills");
  const billElements = document.querySelectorAll(".ca_bills");

  // Функція для оновлення загальної суми та загальної суми на сторінці кошика
  function updateTotalPriceOnCart() {
    const wearCars = document.querySelectorAll('.ca_wear_cars');
    let totalPriceOnCart = 0;
    wearCars.forEach(car => {
        const priceElement = car.querySelector('.ca_car_inf h2:nth-child(2)');
        const quantityElement = car.querySelector('.ca_bills');
        const price = parseFloat(priceElement.textContent.replace(/[^\d.]/g, ''));
        const quantity = parseInt(quantityElement.textContent);
        totalPriceOnCart += price * quantity;
    });
    document.querySelector('.ca_total_price').textContent = `Total: $${totalPriceOnCart.toFixed(2)}`;
  }

  // Функція для збільшення кількості товару
  function incrementQuantity(event) {
    const billElement = event.target.nextElementSibling;
    let quantity = Number(billElement.textContent);
    quantity += 1;
    billElement.textContent = quantity;
    updateTotalPriceOnCart();
  }

  // Функція для зменшення кількості товару
  function decrementQuantity(event) {
    const billElement = event.target.previousElementSibling;
    let quantity = Number(billElement.textContent);
    if (quantity > 0) {
        quantity -= 1;
        billElement.textContent = quantity;
        updateTotalPriceOnCart();
    }
  }

  // Додаємо обробники на кожну кнопку "+"
  plusButtons.forEach(button => button.addEventListener('click', incrementQuantity));

  // Додаємо обробники на кожну кнопку "-"
  minusButtons.forEach(button => button.addEventListener('click', decrementQuantity));

  // Оновлення загальної суми та загальної суми на сторінці кошика при завантаженні сторінки
  updateTotalPriceOnCart();
});


let block = document.querySelector('.mn_wear_product')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 20 * dx / window.innerWidth / 2
    let angleY = 20 * dy / window.innerHeight / 2
    block.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})