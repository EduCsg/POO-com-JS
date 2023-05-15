let maquina = {
	material: "Aço Inox",
	equipamentos: ["Motor", "Freio", "Esteira", "Cilindro"],

	vaiMontada: false,
	numeroDeMotores: 1,
};

console.log(maquina); //material: 'Aço Inox', equipamentos: Array(4), vaiMontada: false, numeroDeMotores: 1}
console.log(maquina.material); // Aço Inox
console.log(maquina.equipamentos[2]); // Esteira
console.log(maquina.equipamentos); // ['Motor', 'Freio', 'Esteira', 'Cilindro']

// Printa cada um dos itens no index [i] do array
for (let i = 0; i < maquina.equipamentos.length; i++) {
	console.log(maquina.equipamentos[i]);

	// Motor
	// Freio
	// Esteira
	// Cilindro
}

maquina.vaiMontada
	? console.log("A máquina já vai montada!")
	: console.log("O comprador precisa montar a máquina!");
