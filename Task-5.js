<script type="module">
  const country = prompt("Введіть назву країни:");

  let price;

  switch (country.toLowerCase()) {
    case "китай":
      price = 100;
      break;
    case "чилі":
      price = 250;
      break;
    case "австралія":
      price = 170;
      break;
    case "індія":
      price = 80;
      break;
    case "ямайка":
      price = 120;
      break;
    default:
      price = null;
  }

  if (price === null) {
    alert("У вашій країні доставка недоступна");
  } else {
    alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
  }
</script>
