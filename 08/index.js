const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

i = 0;

while (i < usuarios.length) {
    if (usuarios[i].pets.length === 1) {
        console.log(`Sou ${usuarios[i].nome} e tenho 1 pet`);
    } else if (usuarios[i].pets.length > 1) {
        console.log(`Sou ${usuarios[i].nome} e tenho ${usuarios[i].pets.length} pet`);
    } else {
        console.log(`Sou ${usuarios[i].nome} e não tenho pets`);
    }
    i++;
}
