function receivesAFunction(callback) {
callback();
};

function returnsANamedFunction() {
return function x() {
}};

function returnsAnAnonymousFunction() {
    return function (){

}};