  const number = [3, 7, 1, 6];
 function checkNumber() {
return new Promise((resolve, reject) => {
     if (number[1] > 5) {
       resolve("Number too high");
     } else {
      reject("Number too low");
     }
   });
 }

 checkNumber()
   .then((result) => {
     console.log(result);
   })
   .catch((error) => {
     console.log(error);
   });
  