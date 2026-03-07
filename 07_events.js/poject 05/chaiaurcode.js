let hex = '0123456789ABCDEF';
const changingColor = () => {   
    let color = '#';
    for (let index = 0; index < 6; index++) {
        color+= hex[Math.floor(Math.random()*16)]  
    }
    return color;
}

let intervalId;
function startChanging(){
 if (!intervalId){    intervalId = setInterval(changeBg , 1000)
    function changeBg(){
        document.body.style.backgroundColor = changingColor()
    }
    
    console.log('started Changing');
}
}
function stopChanging(){
    clearInterval(intervalId)
    console.log('stopped Changing');
    intervalId == null
}


document.querySelector('#start').addEventListener('click',startChanging)
document.querySelector('#stop').addEventListener('click',stopChanging)