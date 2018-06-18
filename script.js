function animate(tag, speed) {

      var text = document.getElementsByClassName(tag);

      for (var i = 0; i < text.length; i++) {

        // anima o texto
        text[i].style.left = (text[i].offsetLeft - speed) + "px";

        //instancia novos textos
        var last = text.length - 1;
        //console.log(text[last].offsetLeft + text[last].clientWidth -window.innerWidth);
        if (text[last].offsetLeft + text[last].clientWidth -window.innerWidth < 0) {

          var cln = text[last].cloneNode(true);
          cln.style.left = text[last].offsetLeft + text[last].clientWidth + 20 + 'px';
          document.getElementById('topBar').appendChild(cln);
        }

        //destroi texto
        if (text[i].clientWidth + text[i].offsetLeft < -2000) {
//          console.log(text[i].clientWidth + text[i].offsetLeft);
          document.getElementById('topBar').removeChild(text[i]);
          
        }
      }



      //chama o método novamente
      setTimeout(function() {
        animate(tag, speed);
      }, 100);

    }

    (function init() {

      var msg = document.getElementById('msg');
      
      // configura a posição inicial do texto
      msg.style.width = msg.clientWidth + 'px';
      console.log(msg.clientWidth);
      msg.style.left = window.innerWidth + 'px';

      //realiza animação
      animate('msg', 4);

    })();