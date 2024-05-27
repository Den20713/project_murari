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

















let bill_buy=0
let bill_buys=document.querySelector(".bill_buys")
let add_to_bill_buy=document.querySelectorAll(".mn_product_buy") 

bill_buys.textContent=bill_buy

function plusOneBill_buys() {
    bill_buy=bill_buy+1
    bill_buys.textContent=bill_buy
    console.log(bill_buys);
}

add_to_bill_buy.forEach(button => button.addEventListener('click', plusOneBill_buys));