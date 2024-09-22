
// function delayedPromise(value, delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(value);
//       }, delay);
//     });
//   }
  
// const promises = [
//     delayedPromise('Проміс 1', 1000),
//     delayedPromise('Проміс 2', 2000),
//     delayedPromise('Проміс 3', 1500),
//     delayedPromise('Проміс 4', 2500),
//     delayedPromise('Проміс 5', 500)
//   ];
  
//  Promise.all(promises)
//     .then((results) => {
//       console.log('Усі проміси виконані:');
//       console.log(results);
//     })
//     .catch((error) => {
//       console.error('Помилка в одному з промісів:', error);
//     });
  

function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4000) + 1000; // Випадкова затримка від 1000 до 5000 мс
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  
 const promises = [
    randomDelay('Проміс 1'),
    randomDelay('Проміс 2'),
    randomDelay('Проміс 3'),
    randomDelay('Проміс 4'),
    randomDelay('Проміс 5')
  ];
  
 Promise.race(promises)
    .then((fastestResult) => {
      console.log('Найшвидший проміс вирішений:');
      console.log(fastestResult);
    })
    .catch((error) => {
      console.error('Сталася помилка:', error);
    });
  