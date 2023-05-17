/*
É um objeto criado para tratar de erros

Ele é derivado do objeto Error

Podemos criar nossos próprios erros personalizados

O objeto Error possui as seguintes propriedades:
  - name: nome do erro
  - message: mensagem do erro
  - stack: rastreamento do erro   */

try {
	// Ao dar THROW, automaticamente o código para de ser executado
	// e o erro é lançado
	throw new Error("Deu um problema!");
	// Está sendo lançado um erro com o texto "Deu um problema!"
} catch (e) {
	console.log(e.name); // Error
	console.log(e.message); // Deu um problema!

	console.log(e.stack); /*
  Error: Deu um problema!
    at Object.<anonymous> (c:\Github\js\POO com JS\04. Built-in Objects\19. Error.js:16:8)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47 */
}
