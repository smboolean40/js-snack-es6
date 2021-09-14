// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

const spliceArray = (arr, a, b) => {
	const arrTmp = [];

	arr.forEach(
		(elm, i) => {
			if ( i >= a && i <= b ) {
				arrTmp.push(elm);
			}
		}
	);

	return arrTmp;
}

// const spliceArray = (arr, a, b) => arr.filter( (elm, i) => i >= a && i <= b );

/**
 * PROGRAMMA PRINCIPALE
 */
const arr = [10, 20, 30, 40, 50, 60, 70];

const newArr = spliceArray(arr, 1, 3); // 20, 30, 40

console.log(newArr);