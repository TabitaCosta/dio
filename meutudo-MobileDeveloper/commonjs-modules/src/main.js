const p = require("./services/products");

async function main() {
    console.log("olá meu nome é system");
    p.getFullName("408", "mousepad")
}

main();