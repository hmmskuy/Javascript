
  // Fungsi async yang mensimulasikan delay selama 2 detik
async function simulateDelay() {
    console.log('Starting delay...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Delay finished');
    return 'Delay finished';
}

simulateDelay().then(result => {
    console.log(result); 
});
