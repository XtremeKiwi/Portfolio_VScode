const wisdomSpan = document.querySelector("#wisdom-span")
const wisdomContent = document.querySelector(".wisdom-generator-container")

const wisdomData = [
    'Husk at drikke vand!',
    'Chilli beans smager godt, men spis med omtanke',
    'Der er ikke noget der hedder "for meget kaffe"',
    'Man bør ikke spise plastik',
    'En sang bliver altid bedre med mere arpeggio og bas',
    'Duftlys kan altså noget magisk',
    '404 visdom ikke fundet',
    'Console.log er en god ven',
    'Seks stykker frugt om dagen er overdrevet',
    'Hunde > Katte',
    'Humble Bundle har ofte gode tilbud!',
    'For at kende sin kode, skal man kende sig selv -Sun tzu ',
    'Den sejeste muskel i kroppen er sternocleidomastoideus',
    'Hvad er Hippopotomonstrosesquippedaliofobi?',
    'Elevatoren er hurtigere end at tage trappen',
    'Pas på den knald, røde, gummibåd',
    'Har du prøvet at slukke og tænde den igen?',
    'Hvad drikker Møller?',
    'Mor er ikke sur, Mor er skuffet',
    'Det er potentielt en trold der træder på din bro'
];


function wisdomGenerator() {
    const random = Math.floor(Math.random() * wisdomData.length);

    wisdomSpan.textContent = wisdomData[random]
}

document.addEventListener('DOMContentLoaded', wisdomGenerator());
