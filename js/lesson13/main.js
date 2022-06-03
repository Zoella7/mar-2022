
function newDay(isDayproductive){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(isDayproductive) {
                resolve(15);
            }else{
                reject('Okay, one urget')
            }
        }, 500)
    });
}

function workingDay(completedTicktes){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(completedTicktes > 10){
                resolve('yaeh, you may take a couple new')
            }else{
                console.log('just one urgent')
                reject (completedTicktes < 10);
            }
        }, 320)
    })
}

function goTogym(weather){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
       if(weather){
         resolve('Go to gym!!!')  
       }else{
           reject('start your home exersice')
          }
      },445)  
    })
}

function goForAwalk(mood) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mood) {
                resolve('Spend a few hours a small walk')
            } else {
                reject('ok, need some power')
            }
        }, 100)
    })

}

function goshoping(tickets) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tickets > 10) {
                resolve('you may buy snth')
            } else {
                reject('not today, working more')
            }
        }, 100)
    })

}


newDay(true)
    .then(tickets => {
    console.log('I have completed about',tickets, 'ticktes');
    return workingDay(tickets);
})
    .then(dayprogress => {
    console.log('It was a good working day');

    return goTogym(true)
})

    .then(mood => {
    console.log(mood);

    return goForAwalk (mood)
})
    .then(lastpower =>{
    console.log(lastpower);

   return goshoping(11)

})

    .then(tickets => {
    console.log('You closed a lot of tickets. You may buy smth');
})

.catch( reason => {
    console.log('Okay,not today')
})