$(document).ready(function(){
  $("#detailsSubmitButton button").click(function(event){
    var firstName = $("input#firstName").val();
    var secondName= $("input#secondName").val();
    var shippingAddress = $("#shippingAddress").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var contact = $("input#emailAddress").val();

    $("li.firstName").text(firstName);
    $("li.secondName").text(secondName);
    $("li.shippingAddress").text(shippingAddress);
    $("li.gender").text(gender);
    $("li.emailAddress").text(contact);

    event.preventDefault();
    $("#customerDetails").show();
  });

  $("button#checkOutButton").click(function(event){
    var selected = [];
    $("input:checkbox[name=itemsForSale]:checked").each(function(){
      selected.push($(this).val());
    });

    event.preventDefault();
    $("#customerItems").show();
  });
});
