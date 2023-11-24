/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
gli elementi della lista individualmente con un ciclo while.
*/

//creo la lista della spesa
let userListaSpesa = ["farina", "sale", "lievito di birra", "passata di pomodori", "basilico", "mozzarella", "olio extra vergine d'oliva"];
console.log(userListaSpesa);

//vado a creare la lista aggiungendo i LI ad HTML
const listaUL = document.getElementById("lista_spesa");
