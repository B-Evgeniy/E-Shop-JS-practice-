let buttonsContainer = document.querySelector('.page-content');
let cartCounterLabel = document.querySelector('#cart-counter');
let counter = 0;
let price = 0;

function btnClickHandler(el) {
   let target = el.target;

   if (target.classList.contains('item-actions__cart')) {            //функция сработает ТОЛЬКО если выполнится условие (наличие класса 'item-actions__cart')
      counter++;
      cartCounterLabel.innerHTML = counter;

      if (counter === 1) { cartCounterLabel.style.display = 'block'; }

      let btnInner = target.parentElement.previousElementSibling.innerHTML; // запис. в перем. значение внутри -> родительск.элемент -> соседний на его же уровне

      btnInner = +btnInner.replace(/^\$(\d+)\s\D+(\d+).*$/gu,'$1.$2');  // альт_способ очистить содержимое от лишнего текста

      price = parseFloat((price + btnInner).toFixed(2));    //суммируем итог в формате суммы чисел окургленных до 2 знака после запятой
      // price=Math.round((price+btnInner)*100)/100;

      let targetRestore = target.innerHTML;  // записываем в переменную исходное знач. таргетируемой кнопки ДО её изменения

      target.innerHTML = 'ADDED ' + price.toFixed(2) + '$'; // изменяем содержимое таргетируемой кнопки (toFixed(2)) - всегда отображаем с 2-мя знаками после запятой)

      buttonsContainer.removeEventListener('click', btnClickHandler); //отменяем обработчик по клику
      // target.disabled = true;     //альт_Способ отключить таргетируему кнопку после нажатия

      setTimeout(function () {

         target.innerHTML = targetRestore;                              //возвращаем значение таргетируемой кнопки через 2с
         buttonsContainer.addEventListener('click', btnClickHandler);  //возобновляем обработчик по клику через 2с
         // target.disabled = false;     //альт_Способ возобновить таргетируему кнопку спустя 2с.
      }, 2000);
   }

}

buttonsContainer.addEventListener('click', btnClickHandler); //обработчик !!! по клику вызывает функцию btnClickHandler



