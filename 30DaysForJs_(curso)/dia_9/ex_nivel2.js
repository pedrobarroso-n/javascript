// primeira questao
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
console.log(products
    .filter(clear => typeof(clear.price) === "number")
    .map(nonames => nonames.price)
    .reduce((acc, cur) => acc + cur)
)

// segunda questao
// ?-----

// terceira questao
const countries = [
    'United States',
    'Canada',
    'Australia',
    'United Kingdom',
    'Japan',
    'Brazil',
    'South Korea',
    'Germany',
    'France',
    'Italy',
    'Mexico',
    'India',
    'Spain',
    'Russia',
    'China',
    'Argentina',
    'South Africa',
    'Sweden',
    'Netherlands',
    'Switzerland'
];
console.log(countries.filter(categorizeCoutries => categorizeCoutries.endsWith('ia')))

// quarta questao
// ?-----
