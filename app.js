let foodCost = document.getElementById('food-cost');
let rentCost = document.getElementById('rent-cost');
let clothsCost = document.getElementById('clothes-cost');
let totalCost = document.getElementById('total-cost');
let income = document.getElementById('income');
let savingAccount = document.getElementById('saving-account');
let parcent = document.getElementById('parcent');
let balance = document.getElementById('balance');
let remainingBalance = document.getElementById('remaining-balance');
let inputs = document.getElementsByClassName('input');
let alert1 = document.getElementById('alert1');
let alert2 = document.getElementById('alert2');


// Common function for both parts

function getTotalCostAndBalance(){
    var totalTotalCost = parseFloat(foodCost.value) + parseFloat(rentCost.value) + parseFloat(clothsCost.value);

    if (parseFloat(income.value) >= 0 && parseFloat(foodCost.value) >= 0 && parseFloat(rentCost.value) >= 0 && parseFloat(clothsCost.value) >= 0 && typeof parseFloat(income.value) == 'number' && typeof parseFloat(foodCost.value) == 'number' && typeof parseFloat(rentCost.value) == 'number' && typeof parseFloat(clothsCost.value) && totalTotalCost < parseFloat(income.value)) {

        totalCost.innerText = totalTotalCost;
        balance.innerText = parseFloat(income.value) - totalTotalCost;
        alert1.style.display = 'none'
        return parseFloat(balance.innerText)
    }

    else {
        alert1.style.display = 'block'
         ;

    }

}
// Total expenses and balance calculation

document.getElementById('calculate').addEventListener('click', function () {
    getTotalCostAndBalance()
})

//Saving account and remaining balance calculation 

document.getElementById('saveButton').addEventListener('click', function () {


    var restBalance = getTotalCostAndBalance()
console.log(restBalance)
    let saveMoney = parseFloat(income.value) * (parseFloat(parcent.value) / 100);
    console.log(saveMoney)
    if (typeof restBalance == 'number' && saveMoney < restBalance && saveMoney > 0 && typeof parseFloat(parcent.value) == 'number') {

        alert2.style.display = 'none'
        savingAccount.innerText = saveMoney;
        remainingBalance.innerText = parseFloat(balance.innerText) - parseFloat(savingAccount.innerText);


    }

   else if ( typeof parseFloat(parcent.value) != 'number') {

    alert2.style.display = 'block'
    alert2.innerText = 'Please give a number value.'

    }
  
   else if ( saveMoney < 0) {

    alert2.style.display = 'block'
    alert2.innerText = 'Please give a positive number.'

    }
    else if ( saveMoney > restBalance) {

        alert2.style.display = 'block'
        alert2.innerText = 'Opps!!! You have no sufficient ballance.'
    
        }
    else {
        alert1.style.display = 'none'
        alert2.style.display = 'block'
        alert2.innerText = 'Sorry!! a wrong is founded in your input value.'


    }

})