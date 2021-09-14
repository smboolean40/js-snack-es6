// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// Definisco l'array di biciclette
const biciclette = [
	{
		"nome": "Bianchi",
		"peso": 10
	},
	{
		"nome": "Rossi",
		"peso": 15
	},
	{
		"nome": "Verdi",
		"peso": 9
	}
];

// Attraverso l'array per determinare la bici piu leggera
let biciLeggera = biciclette[0];

for (let i = 1; i < biciclette.length; i++ ) {
	if ( biciclette[i].peso < biciLeggera.peso ) {
		biciLeggera = biciclette[i];
	}
}

// stampo la bici leggera
const {nome, peso} = biciLeggera;

// const nome = biciLeggera.nome;
// const peso = biciLeggera.peso;

console.log(`La bici più leggera è ${nome} e pesa ${peso}kg`);
