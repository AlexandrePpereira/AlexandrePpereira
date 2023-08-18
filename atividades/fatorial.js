function fatorial(numero){
    if (numero === 0 || numero === 1) {
        return 1
    } else {
        return numero * fatorial (numero - 1);
    }
    }
    const numero = 5;
    const resultado = fatorial(numero);
    console.log(`o fatorial de ${numero} é ${resultado}`);