  //para contagem regressiva minutos = 1440 = 24 horas
  var data = new Date(),
  minutos = 1440;

data.setMinutes(data.getMinutes() + minutos);  

document.getElementById('disp2').value = "Até " + data.toLocaleString();

function atualizaContador() {
var hoje = new Date();
var ss = parseInt((data-hoje) / 1000);

var mm = parseInt(ss / 60);
var hh = parseInt(mm / 60);
var dd = parseInt(hh / 24);
 ss = ss - (mm * 60);
mm = mm - (hh * 60);
hh = hh - (dd * 24);
 var faltam = '';
faltam += (dd && dd > 1) ? dd+' dias, ' : (dd==1 ? '1 dia, ' : '');
faltam += (toString(hh).length) ? hh+' hr, ' : '';
faltam += (toString(mm).length) ? mm+' min e ' : '';
faltam += ss+' seg';
  if (dd+hh+mm+ss > 0)  {
       document.getElementById('contador').value = faltam;
       setTimeout(atualizaContador,1000);
  } else {
       document.getElementById('contador').value = 'Acabou a Contagem!!!';
       alert("Acabou a Contagem!!!");
  }
}
atualizaContador();

//para o relogio
  var Elem = document.getElementById("Clock");
  function Horario(){
      var Hoje = new Date();
      var Horas = Hoje.getHours();
      if(Horas < 10){
          Horas = "0"+Horas;
      }
      var Minutos = Hoje.getMinutes();
      if(Minutos < 10){
          Minutos = "0"+Minutos;
      }
      var Segundos = Hoje.getSeconds();
      if(Segundos < 10){
          Segundos = "0"+Segundos;
      }
      Elem.innerHTML = Horas+":"+Minutos+":"+Segundos;
  }
  window.setInterval("Horario()",1000);