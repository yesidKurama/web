$('.toggle').click(function () {
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

$('#formu').submit(function (e) {
  //  alert('fffff')
  e.preventDefault();
var name= $('#usuario').val();
var pas= $('#contraseña').val();    
    
    $.ajax({
        type: "POST",
        url: "http://localhost:8084/APIspring/v1/loginU",
        data: {name: name, pass: pas},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            console.log('success',r);
        },
        error: function (r) {
            console.log('error',r);
        },
        failure: function (r) {
            console.log('failure',r);
        }
    });

});

