/**
 * Confirmação de exclusão de contato
 * @author João Roque
 */

function confirmar(idcon) {
	let resposta = confirm("Confirma a excluão desde contato ?")
	if (resposta === true) {
		window.location.href = "delete?idcon=" + idcon
	}
}