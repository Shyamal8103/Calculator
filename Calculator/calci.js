function run(a){
    let display = document.getElementById('display')
    display.value+=a
}

function blank(){
    let  display = document.getElementById('display')
    display.value=''
}

function ob(){
    let display = document.getElementById('display')
    display.value = display.value.slice(0,-1)
}

function cal(a){
    let  display = document.getElementById('display')
    let x = display.value
    let lastchar = x.charAt(x.length-1)
    if(lastchar!=a){
        display.value+=a
    }   

}