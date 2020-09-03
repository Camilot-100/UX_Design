var estado = 0;

if(estado == 0){
    $('.boton_atras').hide();
    $('.boton_adelante').hide();
    $('.fo1').hide();
    $('.fo2').hide();
    $('.fo3').hide();
    $('.fo4').hide();
}else{
    $('.boton_empezar').click(function (e) { 
        var estado = 1;
        console.log(estado);
    });
}

$('.boton_empezar').click(function (e) { 
    var estado = 1;
    console.log(estado);
});

$('.boton_adelante').click(function (e) { 
    estado = estado +1;
    console.log(estado);
});
$('.boton_atras').click(function (e) { 
    estado = estado - 1;
    console.log(estado);
});