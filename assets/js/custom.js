$( document ).ready(function() {
var 
    weight =document.querySelector('#weight'),
    vol = document.querySelector('#vol');

 
$('.minpl,.custom-control-input,.custom-range,.form-control,.form-control').click(function() {
/*Находим input*/
  $input = $(this).parent().find('.mtr');
  var qty = Number($input.val());
  /*Передаем функции подсчета, обновления*/
  if (isNaN(qty)) qty = 0;
  /*
  if ($(this).hasClass('plus')) {
    if (qty == 0) {
      qty = $input.data('min');
    } else {
      qty += $input.data('step');
    }
  } else {
    qty -= $input.data('step');
  }
    var min = $input.data('min');
    if (qty >= min)  {
        $input.val(qty).trigger('input');
    } else {
    $input.val(0).trigger('input');
  }*/
  updateCalc($input);
});
function updateCalc($input) {
  {

 
var sum = Number(weight.value) * Number(vol.value);
      out.innerHTML = sum;
  }
}
  });