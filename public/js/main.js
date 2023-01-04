const francois = {
    panier: ['huile', 'pain', 'sucre']
};

const sergio = {
    panier: ['tomates', 'cocaine', 'lait']
};

francois.derober = function (personnage) {
    this.panier.push(personnage.panier[0]);
    this.panier.push(personnage.panier[1]);
    personnage.panier.splice(0, 2);
};

francois.derober(sergio);

console.log(francois.panier); // ['huile', 'pain', 'sucre', 'tomates', 'poulet']
console.log(sergio.panier); // ['lait']