$(document).ready(function () {

  let termsBox = $("#termsCheck");
  let placeOrderBtn = $("#placeOrderBtn");

  placeOrderBtn.prop("disabled", true); 

  termsBox.on("change", function () {
    if (this.checked) {
      placeOrderBtn.prop("disabled", false);
    } else {
      placeOrderBtn.prop("disabled", true);
    }
  });

  $("#checkoutForm").on("submit", function (event) {
    event.preventDefault(); 
    let formOk = true;

    $(".form-control, .form-select").removeClass("is-invalid is-valid");

    let name = $("#fullname").val().trim();
    if (name.length < 3) {
      $("#fullname").addClass("is-invalid");
      formOk = false;
    } else {
      $("#fullname").addClass("is-valid");
    }

    let email = $("#email").val().trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      $("#email").addClass("is-invalid");
      formOk = false;
    } else {
      $("#email").addClass("is-valid");
    }

    let phone = $("#phone").val().trim();
    if (!/^[0-9]{10,}$/.test(phone)) {
      $("#phone").addClass("is-invalid");
      formOk = false;
    } else {
      $("#phone").addClass("is-valid");
    }

    
    if ($("#address").val().trim() === "") {
      $("#address").addClass("is-invalid");
      formOk = false;
    } else {
      $("#address").addClass("is-valid");
    }

    if ($("#city").val().trim() === "") {
      $("#city").addClass("is-invalid");
      formOk = false;
    } else {
      $("#city").addClass("is-valid");
    }

    let postal = $("#postal").val().trim();
    if (!/^[0-9]{4,6}$/.test(postal)) {
      $("#postal").addClass("is-invalid");
      formOk = false;
    } else {
      $("#postal").addClass("is-valid");
    }

  
    if ($("#country").val() === "") {
      $("#country").addClass("is-invalid");
      formOk = false;
    } else {
      $("#country").addClass("is-valid");
    }

    let payment = $("input[name='payment']:checked").attr("id");
    if (!payment) {
      alert("Please select a payment method.");
      formOk = false;
    }

    if (payment === "card") {
      let cardName = $("#cardName").val().trim();
      let cardNumber = $("#cardNumber").val().trim();

      if (cardName === "") {
        $("#cardName").addClass("is-invalid");
        formOk = false;
      } else {
        $("#cardName").addClass("is-valid");
      }

      if (!/^[0-9]{16}$/.test(cardNumber)) {
        $("#cardNumber").addClass("is-invalid");
        formOk = false;
      } else {
        $("#cardNumber").addClass("is-valid");
      }
    }

    if (!termsBox.is(":checked")) {
      alert("You must agree to the terms and conditions first.");
      formOk = false;
      placeOrderBtn.prop("disabled", true);
    }


    if (!formOk) {
      $("html, body").animate(
        { scrollTop: $(".is-invalid:first").offset().top - 60 },
        500
      );
      return false;
    }

    alert("✅ Order placed successfully!");
    $("#checkoutForm")[0].reset();          
    $(".form-control, .form-select").removeClass("is-valid");
    placeOrderBtn.prop("disabled", true);   
  });

  $(".form-control, .form-select").on("input change", function () {
    $(this).removeClass("is-invalid");
  });
});
