const billAmount=document.querySelector('#bill-amount')
const cashGiven=document.querySelector('#cash-given')
const table=document.querySelector('.table')
const billError=document.querySelector('.bill-error')
const cashError=document.querySelector('.cash-error')
const cashDiv=document.querySelector('.cash')
const tableElements=document.querySelectorAll('.table-output')
const next=document.querySelector('.next')

cashDiv.style.display='none'
table.style.display='none'

var changeAvailable=[2000,500,100,20,10,5,1]

next.addEventListener("click",()=>
    {
        billError.style.display='none'
        var billAmt=Number(billAmount.value)

        if(billAmt<=0){
            billError.innerText='Bill amount should be greater than 0'
            billError.style.display='block'
        }
        else{
            cashDiv.style.display='';
            next.style.display='none'
        }
    })
document.querySelector('.check').addEventListener('click',()=>{

    cashError.style.display='none'
    var cashReceived=Number(cashGiven.value)
    var billAmt=Number(billAmount.value)
    
    if(cashReceived<billAmt){
        cashError.innerText='More cash needed to be paid..'
        cashError.style.display='block'
        table.style.display='none'
    }
    else if(cashReceived==billAmt){
        cashError.innerText='No change is needed to be returned'
        cashError.style.display='block'
        table.style.display='none'
    }
    else{
        var returnAmount=cashReceived-billAmt

        for(let i=0;i<changeAvailable.length;i++){
            tableElements[i].innerText=Math.floor(returnAmount/changeAvailable[i])
            returnAmount%=changeAvailable[i]
        }
        table.style.display='block'
    }

})