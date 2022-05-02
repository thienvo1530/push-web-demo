



    // login
    $(document).ready(function(){
        $("#user-toggle").click(function(){
            $("#form-login").toggle();
             $('#form-login').addClass('open');
            if($('#form-login').hasClass('open')) {
                $("#wrapper").attr("class", "blur");
            }
        })
       
        $('.close').click(function(){
            $("#form-login").hide();
            $('#form-login').removeClass('open');
            $("#wrapper").removeClass("blur");
            
             
        });
        
        var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });
});

  



