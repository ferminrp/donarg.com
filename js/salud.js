url = 'https://api.sheety.co/e0f7bcd7-6717-4ebf-aa9e-396a222b989a'


//connecting to spreadsheet and then parsing the data
  $.getJSON(url, function(data) {
    //var obj = data.feed.entry;
    var obj = data;
    $(obj).each(function(){
      var ong = this.ong
      var imagen = this.imagen
      var paginaWeb = this.paginaWeb
      var instagram = this.instagram
      var twitter = this.twitter
      var linkDonaciones = this.linkDonaciones

      console.log(this.title)
      $(".featured").append('<div class="ngo-card grow"> <a href="'+ paginaWeb +'" target="_blank" rel="noopener"><div id="featured-two" class="img-container" style="background-image:url('+imagen+')!important"></div> </a><p>'+ong+'</p><div class="icon-list"> <span><a href="'+paginaWeb+'" target="_blank" rel="noopener"><i class="fas fa-globe"></i></a></span> <span><a href="'+instagram+'" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a></span> <span><a href="'+twitter+'" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a></span></div></div>')
   });
  });
