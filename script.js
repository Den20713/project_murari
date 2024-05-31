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


//кнопка для перекидування з card на main 
let ca_back_btn = document.querySelector(".ca_back_btn");
  ca_back_btn.addEventListener('click', function() {
    window.location.href = 'main.html';
  });














let bill_buy=0
let bill_buys=document.querySelector(".bill_buys")
let add_to_bill_buys=document.querySelectorAll(".mn_product_buy") 
bill_buy = Number(localStorage.getItem('bill_buy'));

bill_buys.textContent=bill_buy

localStorage.setItem('bill_buy', bill_buy);

function plusOneBill_buys() {
    bill_buy=bill_buy+1
    bill_buys.textContent=bill_buy
    console.log(bill_buys);
    localStorage.setItem('bill_buy', bill_buy);
}

add_to_bill_buys.forEach(button => button.addEventListener('click', plusOneBill_buys));



//очищення кошика
let ca_clear_all= document.querySelector(".ca_clear_all")
function clearCart() {
  history.go(0);
  console.log("clear")
  localStorage.clear();
}
ca_clear_all.addEventListener('click', clearCart)







/*let bill_cars = [];
let ca_wear_cars = document.querySelectorAll(".ca_wear_cars");
let bills = document.querySelectorAll(".ca_bills");
let pl_bills = document.querySelectorAll(".ca_pl_bills");
let min_bills = document.querySelectorAll(".ca_min_bills");

for (let i = 0; i <= 6; i++) {
    if (localStorage.getItem('bills[i]')){
       bills[i]=Number(localStorage.getItem('bills[i]'))
       console.log(bills[i])
      }
    else{bills[i] = 0}
    
    bill_cars[i] = document.querySelector(`.bill_car${i}`);
    ca_wear_cars[i] = document.querySelector(`.ca_wear_car${i}`);
*/

let ca_wear_cars = document.querySelector(".ca_wear_cars");
let bill_cars = document.querySelector(".ca_bill_car");
let add_to_cart = document.querySelector(".add_to_cart");
let pl_bills = document.querySelector(".ca_pl_bills");
let min_bills = document.querySelector(".ca_min_bills");

pl_bills.addEventListener('click', function() {
  bill_cars+=1
  bill_cars.textContent=bill_cars
  localStorage.setItem('bill_cars', bill_cars)
})
min_bills.addEventListener('click', function() {
  bill_cars-=1
  bill_cars.textContent=bill_cars
  localStorage.setItem('bill_cars', bill_cars);
})








