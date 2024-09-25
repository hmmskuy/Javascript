// Soal 2
async function calculateDivision(dividend, divisor) {
    if (divisor === 0) {
      throw new Error("Pembagi tidak boleh 0");
    }
    return dividend / divisor;
  }
  
  async function runCalculation(dividend, divisor) {
    try {
      const result = await calculateDivision(dividend, divisor);
      console.log(`Hasil: ${result}`);
    } catch (error) {
      console.log(`Kesalahan: ${error.message}`);
    }
  }
  
  // Contoh penggunaan
  runCalculation(10, 2);  // Hasil: 5
  runCalculation(10, 0);  // Kesalahan: Pembagi tidak boleh 0

  // soal 2 clear
  