// code your solution here
//The saturday activity is my fun
function saturdayFun(myFun="roller-skate", This='bathe my dog') {
   
    return`This Saturday, I want to ${myFun}!`
    return `This Saturday, I want to ${This}!`
}
saturdayFun(This);
saturdayFun(myFun);


function mondayWork(act_it = 'go to the office'){
   
    console.log(`This Monday, I will ${act_it}.`);
    return `This Monday, I will ${act_it}.`
}

function wrapAdjective(sngl_prt1="*") {
    return function(flair="special"){ 
        return `You are ${sngl_prt1}${flair}${sngl_prt1}!` 
     
    }
}

