function limpiar() {
    let opcion = confirm("¿Desea borrar el carro de compras?");
    
    if (opcion) {
        cafe = 0;
        total = 0;
        console.clear();
        console.log("\n\n Ahora el carrito no tiene nada \n\n");
    } else {
        console.log("\n\n No se ha borrado nada \n\n");
    }
    }
    //Funcion donde indica que llevas y el valor total de la compra
    function mostrar() {
    console.log("\n\n Llevas en total " +  cafe + " cafe. \n Tienes " + expreso + " de expreso;" + vainilla + " de vainilla, y " + mokka + " de mokka.\n El total de tu compra hasta el momento es de $" + total + "\n\n");
    }
    //Menu
    let menu,
    menu2,
    total = 0,
    cafe = 0,
    expreso = 0,
    mokka = 0,
    vainilla = 0;
    
    do {
    menu = Number(prompt(
        "- Ingrese el numero, segun lo que desea hacer: \n \n \
            1) Comprar. \n \
            2) Mostrar carrito. \n \
            3) Borrar carrito. \n \
            0) Comprar"
        ));
    
    switch (menu) {
        case 1:
        do {
            menu2 = Number(
            prompt(
                "- Qué café desea:\n\n\
                    1) Vainilla ($3.000) \n \
                    2) Expreso ($2.500) \n \
                    3) Mokka ($4.500) \n \
                    0) Nada mas por ahora"
            )
            );
            switch (menu2) {
            case 1:
                total = total + 3000;
                cafe++;
                vainilla++;
                console.log("\n Añadiste un café de Vainilla al carrito :) \n");
                break;
            case 2:
                total = total + 2500;
                cafe++;
                expreso++;
                console.log("\n Añadiste un café de expreso al carrito :) \n");
                break;
            case 3:
                total = total + 4500;
                cafe++;
                mokka++;
                console.log("\n Añadiste un café Mokka al carrito :) \n");
                break;
            case 0:
                break;
            default:
                console.log("\n Por favor, ingresá un numero válido \n");
                break;
            }
        } while (menu2 != 0);
        break;
    
        case 2:
            mostrar();
        break;
        case 3:
            limpiar();
        break;
        case 0:
        break;
        default:
            console.log("\n Por favor, ingresá un numero válido \n");
        break;
      }
    } while (menu != 0);
    
    console.log(
        "\n\n\n Gracias por tu compra! \n Tu carrito quedó con un total " +
        cafe +
        " cafe. \n Vas a llevar " +
        expreso +
        " de expreso; " +
        vainilla +
        " de vainilla, y " +
        mokka +
        " de mokka.\n El total gastado es de $" +
        total + 
        ".\n CLP");