export default function validateSearchForm() {
    let forbiddenSymbols = [`!` ,`@` ,`#` ,`$` ,`%` ,`^` ,`&` ,`*` ,`(` ,`)`];
    const search = document.querySelector(`.searchForm__inputField`);

    search.addEventListener(`input`, function(event) {
        this.setCustomValidity(``);

        for (let symbol of forbiddenSymbols) {
            if ( this.value.includes(symbol, 0) ) {
                this.setCustomValidity(`Please don't enter symbols: !@#$%^&*()`);
            } 
        }
    });
}