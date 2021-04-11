function init() {
    const exemplo = 'Essa variável';

    return function() {
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);

        return function() {
            console.log(`2 - O valor da variável exemplo é: ${exemplo}.`);
            
            return function() {
                console.log(`3 - O valor da variável exemplo é: ${exemplo}.`);
            }
        }
    }
}

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();

/*
1 - O valor da variável exemplo é: Essa variável.
2 - O valor da variável exemplo é: Essa variável.
3 - O valor da variável exemplo é: Essa variável.
*/

// Você poderia ter executado todas as funções assim também:
// init()()()();