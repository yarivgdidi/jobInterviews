const task = time => new Promise((resolve, reject) => setTimeout(()=> resolve(time) , time))

myPromiseAll = taskList => {
  const results = [];
  let completed = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise.then(val => {
         results[index] = val;
         completed +=1;
         if(completed === taskList.length) {
           resolve(results);
         }
      }).catch(val => reject(val))
    })
  })
}

const tasks = [task(1000), task(5000), task(3000)]
myPromiseAll(tasks).then(results => console.log(results))

// a task that might fail
const taskF = time => new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.4 ? resolve(time) : reject(`${time} failed` )
  }, time)
})

myPromiseAllSafe = taskList => {
  const results = [];
  let completed = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise.then(val => {
        results[index] = {status: 'OK', val};
        completed +=1;
        if(completed === taskList.length) {
          resolve(results);
        }
      }).catch(error => {
        results[index] = {status: 'Fail', error};
        completed +=1;
        if(completed === taskList.length) {
          resolve(results);
        }
      })
    })
  })
}

const tasksF = [taskF(1000), taskF(5000), taskF(2500), taskF(3000), taskF(5500), taskF(3100)]
myPromiseAll(tasksF).then(results => console.log(results)).catch(err => console.log(err))
myPromiseAllSafe(tasksF).then(results => console.log(results)).catch(err => console.log(err))

