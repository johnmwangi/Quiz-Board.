$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    var qtn1 = parseInt($("input:radio[name=1]:checked").val());
    var qtn2 = parseInt($("input:radio[name=2]:checked").val());
    var qtn3 = parseInt($("input:radio[name=3]:checked").val());
    var qtn4 = parseInt($("input:radio[name=4]:checked").val());
    var qtn5 = parseInt($("input:radio[name=5]:checked").val());
    var total = qtn1 + qtn2 + qtn3 + qtn4 + qtn5;
    // $("#score").text(qtn1+qtn2+qtn3+qtn4+qtn5);

    if (total >= 80) {
      $("#result").show();
      $("#score").text("Excellent " + total);
    } else if (total <= 79 && total >= 70) {
      $("#result").show();

      $("#score").text("Great job! Your Score is " + total);
    } else if (total <= 70 && total >= 60) {
      $("#result").show();
      $("#score").text("Above average! Your Score is " + total);
    } else if (total < 60 && total >= 40) {
      $("#result").show();
      $("#score").text("Below average! Your Score is " + total)
    } else {
      $("#result").show();
      $("#score").text("Put more effort Your Score is" + " " + total)
    };


  });
});
