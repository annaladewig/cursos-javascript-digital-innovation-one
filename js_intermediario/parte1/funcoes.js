function getName() {
    return 'Anna Ladewig';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
//Anna Ladewig