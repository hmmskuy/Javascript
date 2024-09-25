// Soal 1
function simulateDelay() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Delay Finished");
    }, 2000); // 2 detik
  });
}

async function runSimulation() {
  const result = await simulateDelay();
  console.log(result);
}

runSimulation();

// soal 1 clear
