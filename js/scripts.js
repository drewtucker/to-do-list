

//BUSINESS LOGIC

function resetField() {
  $("input#newItem").val("");
}

//USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#userItem").submit(function(event){

    event.preventDefault();

    var inputtedItem = $("input#newItem").val();

    $("ul#items").append("<li>" + inputtedItem + "</li>");
    resetField();

    $("ul#items li").last().click(function() {
      $(this).remove();
    })
  });
});
