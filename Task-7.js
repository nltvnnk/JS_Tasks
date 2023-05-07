<script type="module">
  function checkStorage(available, ordered) {
    let message;

    if (ordered === 0) {
      message = "У замовленні немає товарів";
    } else if (ordered > available) {
      message = "Ваше замовлення занадто велике, на складі недостатньо товарів!";
    } else {
      message = "Замовлення прийнято, наш менеджер зв'яжеться з Вами.";
    }

    return message;
  }

  const availableQuantity = 10;
  const orderedQuantity = 7;
  const resultMessage = checkStorage(availableQuantity, orderedQuantity);
  alert(resultMessage);
</script>
