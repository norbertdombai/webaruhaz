
$(function(){
    

    $.ajax(
        {url: "termekek.json", 
        success: function (result) {
                console.log(result);
                
                termekTomb = result;
                
                termekMegjelenit();
    
             
            }});


   
    function termekMegjelenit(termekekTomb){
      
          let txt="";
          termekTomb.forEach((value)=>{
              txt+="<div>"+"<h3>"+value.nev+"</h3>"+"<br>"+value.kep+"<br>"+value.leiras+"<br>"+value.ar+"</div>";
            
          });
     
          $("article").append(txt);
      }
          

});

