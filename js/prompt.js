const showAlert = () =>{
    alert('first give me 500 taka then enter')
}
const landMoney = () =>{
    const result = confirm('can you land me 500 taka')
    console.log(result);
    if(result === true){
        alert('you are my true firend')
    }else{
        alert('WTF DGM.........')
    }
}

const getInfo = () => {
    const name = prompt('tell me your name')
    console.log(name);
    if(name === null){
        alert('sorry first give your name')
    }
}