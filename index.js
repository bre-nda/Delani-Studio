$(document).ready(function() {
    $("#development-image").click(function() {
        $("#development-image").slideToggle('1500');
        $("#development").slideToggle('1500');
    });
    $("#development").click(function() {
        $("#development").slideToggle('1500');
        $("#development-image").slideToggle('1500');
    });
});
$(document).ready(function() {
    $("#product-image").click(function() {
        $("#product-image").slideToggle('1500');
        $("#product").slideToggle('1500');
    });
    $("#product").click(function() {
        $("#product").slideToggle('1500');
        $("#product-image").slideToggle('1500');
    });
});
$(document).ready(function() {
    $("#design-image").click(function() {
        $("#design-image").slideToggle('1500');
        $("#design").slideToggle('1500');
    });
    $("#design").click(function() {
        $("#design").slideToggle('1500');
        $("#design-image").slideToggle('1500');
    });
});
$(document).ready(function() {
    $("form#form34A").submit(function(event) {
        var name = $("input#NAME").val();
        var email = $("input#EMAIL").val();
        var message = $("textarea#comment").val();
        if ($("input#NAME").val() && $("input#EMAIL").val()) {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        } else {
            alert("Please enter your name and email!");
        }

    });

});
$('.col-md-3').hover(function() {
    $('.text', this).slideToggle('slow');
}, function() {
    $('.text', this).slideToggle('slow');
});