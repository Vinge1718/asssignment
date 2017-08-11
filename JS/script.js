$(document).ready(function(){
  $("#detailsSubmitButton button").click(function(event){
    var firstName = $("input#firstName").val();
    var secondName= $("input#secondName").val();
    var shippingAddress = $("#shippingAddress").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var contact = $("input#emailAddress").val();
    event.preventDefault();
  });
});
