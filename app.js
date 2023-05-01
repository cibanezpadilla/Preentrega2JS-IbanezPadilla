// creo la función constructora
function Producto(id, name, category, price, quantity) {
  this.id = id;
  this.name = name;
  this.category = category;
  this.price = price;
  this.quantity = quantity;
}

// creo cada producto como un objeto
const prod1 = new Producto("001", "Crossover bralette", "bras", 48, 0);
const prod2 = new Producto("002", "Mid rise retro brief", "undies", 17, 0);
const prod3 = new Producto("003", "Mid rise bikini", "undies", 17, 0);
const prod4 = new Producto("004", "Sport bra", "bras", 48, 0);
const prod5 = new Producto("005", "Bodysuit", "bodysuits", 48, 0);
const prod6 = new Producto("006", "Thong", "undies", 16, 0);
const prod7 = new Producto("007", "Triangle bralette", "bras", 48, 0);
const prod8 = new Producto("008", "Cup bra", "bras", 48, 0);

// pusheo productos al array bras
const bras = [];
bras.push(prod1, prod4, prod7, prod8);

// pusheo productos al array undies
const undies = [];
undies.push(prod2, prod3, prod6);

// pusheo productos al array bodysuits
const bodysuits = [];
bodysuits.push(prod5);

// uno todos los arrays de categorias en uno solo con el total de productos
const allProducts = bras.concat(undies, bodysuits);

// declaro el array cart vacío
let cart = [];

// MOSTRAR CATEGORIAS
function showCategory() {
  let chooseCategory = prompt(`
    Choose a product category or 0 to return to the main menu:
    1: Bras
    2: Undies
    3: Bodysuits`);
  if (chooseCategory == 0) {
    menu();
  } else if (chooseCategory == 1) {
    console.log("\nBras:");
    // le hago un forEach para mostrar string de cada producto en consola
    bras.forEach((bra) => {
      console.log(
        `Product ID: ${bra.id}, Name: ${bra.name}, Price: ${bra.price}`
      );
    });
  } else if (chooseCategory == 2) {
    console.log("\nUndies:");
    // le hago un forEach para mostrar string de cada producto en consola
    undies.forEach((undie) => {
      console.log(
        `Product ID: ${undie.id}, Name: ${undie.name}, Price: ${undie.price}`
      );
    });
  } else if (chooseCategory == 3) {
    console.log("\nBodysuits:");
    // le hago un forEach para mostrar string de cada producto en consola
    bodysuits.forEach((bodysuit) => {
      console.log(
        `Product ID: ${bodysuit.id}, Name: ${bodysuit.name}, Price: ${bodysuit.price}`
      );
    });
  } else {
    alert("This is not a valid option");
    showCategory();
  }
}

// MOSTRAR TODOS LOS PRODUCTOS
function showAll() {
  console.log("\nAll products:");
  allProducts.forEach((product) => {
    console.log(
      `Product ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`
    );
  });
}

// BUSCAR UN PRODUCTO
function search() {
  let productSearch = prompt(
    "Enter a keyword of the products you are looking for o 0 to return to the main menu:"
  );
  if (productSearch == 0 || productSearch == "") {
    menu();
  } else {
    const searching = allProducts.some((product) =>
      product.name.toLowerCase().includes(productSearch.toLowerCase())
    );
    if (searching == true) {
      let searched = allProducts.filter((product) =>
        product.name.toLowerCase().includes(productSearch.toLowerCase())
      );

      console.log("\nProducts found:");
      // le hago un forEach para mostrar string de cada producto en consola
      searched.forEach((searchh) => {
        console.log(
          `Product ID: ${searchh.id}, Name: ${searchh.name}, Price: ${searchh.price}`
        );
      });
    } else {
      alert("The product you are looking for is not in the catalogue");
    }
  }
}

// AGREGAR PRODUCTO AL CARRITO
function addToCart() {
  while (true) {
    let selection = prompt(
      `Enter the ID product that you want to add to the cart or 0 to return to the main menu:
        001: crossover bralette, price: $48
        002: mid rise retro brief, price: $17
        003: mid rise bikini, price: $17
        004: sport bra, price: $48
        005: bodysuit, price: $48
        006: thong, price: $16
        007: triangle bralette, price: $48
        008: cup bra, price: $48`
    );
    if (selection == 0) {
      break;
    }
    const searching = allProducts.some((product) => product.id === selection);
    if (searching == true) {
      let selectQuantity = Number(prompt("Enter quantity:"));

      let selectedProd = allProducts.find(
        (product) => product.id === selection
      );
      // le agrego el valor a la propiedad cantidad al producto elegido
      selectedProd.quantity = selectQuantity;
      cart.push(selectedProd);
    } else {
      alert("The product ID you are looking for is not in the catalogue");
      continue;
    }
  }
  console.log("\nThis is your cart");
  // le hago un forEach para mostrar string de cada producto en consola
  cart.forEach((product) => {
    console.log(
      `Product ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`
    );
  });
}

// ELIMINAR UN PRODUCTO DEL CARRITO
function deleteAProduct() {
  let deleting = prompt(
    `Enter the ID product that you want to delete from the cart or 0 to return to the main menu:
        001: Crossover bralette, price: $48
        002: Mid rise retro brief, price: $17
        003: Mid rise bikini, price: $17
        004: Sport bra, price: $48
        005: Bodysuit, price: $48
        006: Thong, price: $16
        007: Triangle bralette, price: $48
        008: Cup bra, price: $48`
  );
  if (deleting == 0) {
    menu();
  }
  const deleted = cart.find((product) => product.id === deleting);
  const index = cart.indexOf(deleted);
  if (index != -1) {
    cart.splice(index, 1);

    console.log("\nThis is your cart");
    // le hago un forEach para mostrar string de cada producto en consola
    cart.forEach((product) => {
      console.log(
        `Product ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`
      );
    });
  } else {
    alert(`Product with ID ${deleting} not found in cart`);
  }
}

// VACIAR CARRITO
function clearCart() {
  let securityPrompt = prompt(`Are you sure you want to empty the entire cart?
  1: Yes
  2: No`);
  if (securityPrompt == 1) {
    cart = [];
    console.log("\nYour cart is empty now");
  } else {
    alert("\nYou can continue with your purchase");
  }
}

// SUMAR TOTAL COMPRA CARRITO
let totalPurchase;

function sumTotalCart() {
  totalPurchase = cart.reduce((accum, product) => {
    return accum + product.price * product.quantity;
  }, 0);
  console.log(`\nYour total purchase is: ${totalPurchase}`);

  // checkout
  while (true) {
    let option = prompt(`Choose a payout option or 0 to return to the main menu:
      1: 3 interest-free installments
      2: 6 interest-free installments
      3: 12 installments with a 50% interest rate`);

    if (option == 0) {
      break;
    } else if (option == 1 || option == 2 || option == 3) {
      switch (option) {
        case "1":
          console.log(
            `\nYou have selected the option 3 interest-free installments\nYour total purchase is $ ${totalPurchase}`
          );
          break;
        case "2":
          console.log(
            `\nYou have selected the option 6 interest-free installments\nYour total purchase is $ ${totalPurchase}`
          );
          break;
        case "3":
          let interest = totalPurchase * 1.5;
          console.log(
            `\nYou have selected the option 12 installments with a 50% interest rate\nYour total purchase is $ ${interest}`
          );
          break;
      }
      break;
    } else {
      alert(`Invalid option. Please choose an option from the list.`);
    }
  }
}

function menu() {
  while (true) {
    let option = prompt(`Choose an option from the list:
                1: Show categories
                2: Show all products
                3: Search a product
                4: Add to cart
                5: Delete a product from the cart
                6: Clear cart
                7: Show total cart price
                0: To exit`);
    if (option == 0) {
      break;
    } else if (option == 1) {
      showCategory();
    } else if (option == 2) {
      showAll();
    } else if (option == 3) {
      search();
    } else if (option == 4) {
      addToCart();
    } else if (option == 5) {
      deleteAProduct();
    } else if (option == 6) {
      clearCart();
    } else if (option == 7) {
      sumTotalCart();
    } else {
      alert("This is not a valid option");
    }
  }
}

menu();
