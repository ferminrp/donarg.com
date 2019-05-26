url = 'https://api.sheety.co/b407ab6d-dda1-4661-8be4-78e1fbcec78d'

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
      $(".featured").append('<div class="ngo-card"> <a href="'+ paginaWeb +'" target="_blank" rel="noopener"><div id="featured-two" class="img-container" style="background-image:url('+imagen+')!important"></div> </a><p>'+ong+'</p><div class="icon-list"> <span><a href="'+paginaWeb+'" target="_blank" rel="noopener"><i class="fas fa-globe"></i></a></span> <span><a href="'+instagram+'" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a></span> <span><a href="'+twitter+'" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a></span></div></div>')
   });
  });

/*  <div class="ngo-card">
      <a href="https://conin.org.ar/" target="_blank" rel="noopener">
          <div id="featured-two" class="img-container">
          </div>
      </a>
      <p>CONIN</p>
      <div class="icon-list">
          <span><a href="https://conin.org.ar/" target="_blank" rel="noopener"><i class="fas fa-globe"></i></a></span>
          <span><a href="https://www.instagram.com/coninargentina/" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a></span>
          <span><a href="https://twitter.com/conin_argentina" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a></span>
      </div>
  </div>*/
