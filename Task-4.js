<script type="module">
  const credits = 23580;
  const pricePerDroid = 3000;

  const userInput = prompt("Введіть кількість дроїдів:");
  const quantity = Number(userInput);

  if (userInput === null) {
    console.log("Скасовано користувачем!");
  } else {
    const totalPrice = pricePerDroid * quantity;

    if (totalPrice > credits) {
      console.log("Недостатньо коштів на рахунку!");
    } else {
      const creditsLeft = credits - totalPrice;
      console.log(`Ви купили ${quantity} дроїдів, на рахунку залишилося ${creditsLeft} кредитів.`);
    }
  }
</script>
