function appendNumbers(num){
    bar = document.getElementById("inputBar")
    let inputVal = [...bar.value]
    let operators = ['+', '*', '/', '−']

    if (bar.value == ['0'] && num >= '0' && num <= '9'){
        bar.value = `${num}`
    } else if(bar.value == ['0'] && num == '('){
        bar.value = `${num}`
    }else if(bar.value == 'Err' || bar.value == 'Infinity'){
        deleteOne()
        appendNumbers(num)
    } else if (operators.includes(inputVal[inputVal.length-1]) && operators.includes(num)){
        deleteOne()
        bar.value += `${num}` 
    } else if (inputVal[inputVal.length-1] == '.' && (operators.includes(num) || num == '.')){
        deleteOne()
        bar.value += `${num}` 
    } else{
        bar.value += `${num}`
    }

    makeTempAns()
}

function allClear(){
    let bar = document.getElementById("inputBar")
    bar.value = "0"
    makeTempAns()
}

function deleteOne(){
    let bar = document.getElementById("inputBar")
    if (bar.value.length == 1){
        bar.value = 0
    } else if(bar.value == 'Err' || bar.value == 'Infinity'){
        bar.value = 0
    } else{
        bar.value = bar.value.slice(0, -1)
    }
    makeTempAns()
   
}

function calculate(){
    let ans = document.getElementById("tempAns")
    ans.style.animation="calculate 0.2s ease-out"
    
    let bar = document.getElementById("inputBar")
    let payload = bar.value.replace('−', '-')
    let newVal = eval(payload)
    if (isNaN(newVal)){
        newVal = 'Err'
    }else{
        newVal = Math.round(newVal*1000000000)/1000000000
    }

    

    

    bar.value = ``
    setTimeout(() => {
        ans.innerHTML=""
        bar.value = `${newVal}`
        ans.style.animation=""
        makeTempAns()

    }, 192)
    
    
}

function makeTempAns(){
    let el = document.getElementById("tempAns")
    let bar = document.getElementById("inputBar")
    let payload = bar.value.replace('−', '-')
    try{
        newVal = eval(payload)
        if (isNaN(newVal)){
            newVal = 'Err'
        }else{
            newVal = Math.round(newVal*1000000000)/1000000000
        }
        if (newVal != bar.value){
            el.innerHTML = newVal
        } else{
            el.innerHTML = ""
        }
    } catch(err){
        el.innerHTML = ""
    } 
    
}