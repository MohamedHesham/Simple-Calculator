(function() {
  document.getElementById('result').addEventListener("click", function() {
    var answer = document.getElementById('answer').value;
    var el_answer = document.getElementById('answer');
    if(!answer) {
      el_answer.value = 0;
    } else {
      el_answer.value = eval(el_answer.value);
    }
  });
})();
