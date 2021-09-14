// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

/**
 * FUNZIONI
 */
const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

// 1. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const squadre = [
	{
		"nome": "Sampdoria",
		"puntiFatti": 0,
		"falliSubiti": 0
	},
	{
		"nome": "Atalanta",
		"puntiFatti": 0,
		"falliSubiti": 0
	},
	{
		"nome": "Salernitana",
		"puntiFatti": 0,
		"falliSubiti": 0
	},
	{
		"nome": "Palermo",
		"puntiFatti": 0,
		"falliSubiti": 0
	}
];

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// 2. ciclo su tutte le squadre
for ( let i = 0; i < squadre.length; i++ ) {
	squadre[i].puntiFatti = getRndInteger(10, 70);
	squadre[i].falliSubiti = getRndInteger(5, 30);
}

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const squadrePunteggio = [];

for ( let i = 0; i < squadre.length; i++ ) {
	const {nome, falliSubiti} = squadre[i];

	// const nuovoOggettoSquadra = {
	// 	nome,
	// 	falliSubiti
	// };
	
	squadrePunteggio.push({
		nome,
		falliSubiti
	});
}

console.log(squadrePunteggio);