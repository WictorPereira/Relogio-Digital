
var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')


const relogio = setInterval(function time() {

var data = new Date()
var  h = data.getHours()
var  m = data.getMinutes()
var  s = data.getSeconds()

if(s < 10 ){
    s = `0${s}` 
     
}

if(h < 10 ){
    h = `0${h}` 
     
}

if(m < 10 ){
    m = `0${m}` 
     
}

horas.innerHTML= h
minutos.innerHTML = m
segundos.innerHTML = s

})