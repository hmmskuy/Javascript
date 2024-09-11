function printEverySecond() {
    let i = 0;
    let interval = setInterval(() => {
      console.log("Hello World");
      i++;
      if (i === 5) {
        clearInterval(interval);
      }
    }, 1000);
  }
  
  printEverySecond(); 