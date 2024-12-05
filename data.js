// Dados da receita em um objeto
const receita = {
    ingredientes: [
        "Minha alma tem o peso da luz",
        "Tem o peso da música",
        "Tem o peso da palavra nunca dita,",
        "Prestes quem sabe a ser dita",
        'Tem o peso de uma lembrança',
        "Tem o peso de uma saudade",
        "Tem o peso de um olhar",
        "Pesa como pesa uma ausência",
        "E a lágrima que não chorou",
        "Tem o imaterial peso de uma solidão",
        "No meio de outros"
    ],
    modoPreparo: [
        "O poema Alma luz traduz a essência humana ao capturar as nuances do sentir e do ser. Ele nos leva a refletir sobre os pesos invisíveis que carregamos na vida, pesos que não possuem massa, mas que definem quem somos. A alma carrega a leveza da luz, mas também a profundidade da música e das palavras não ditas. Essa dualidade reflete a complexidade das emoções humanas, em que lembranças e saudades podem pesar mais do que objetos concretos. Cada olhar, ausência ou lágrima represada se torna um fardo silencioso, mas essencial para a construção do que somos. A solidão no meio de outros nos lembra da desconexão que às vezes sentimos mesmo estando cercados de pessoas. Essa solidão não vem de barreiras físicas, mas daquilo que não conseguimos compartilhar ou expressar. O poema nos mostra que somos feitos de presenças e ausências, de sons e silêncios, de luzes e sombras. O verdadeiro peso da alma talvez seja a soma de tudo o que já fomos, sentimos e deixamos de ser."
    ]

};

// Preenchendo os ingredientes na página
const ingredientesList = document.getElementById("ingredientes");
receita.ingredientes.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientesList.appendChild(li);
});

// Preenchendo o modo de preparo na página
const modoPreparoList = document.getElementById("modo-preparo");
receita.modoPreparo.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    modoPreparoList.appendChild(li);
});
