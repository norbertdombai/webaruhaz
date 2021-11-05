$(document).ready(function(){
    $.getJSON("termekek.json" , function(data){
        var termekekData = '';
        $.each(data , function(key,value){
            termekekData += '<tr>';
            termekekData += '<td>'+value.nev+'</td>';
            termekekData += '<td>'+value.leiras+'</td>';
            termekekData += '<td>'+value.ar+'</td>';
        });
        $('#termekekTablazat').append(termekekData);

    });

});