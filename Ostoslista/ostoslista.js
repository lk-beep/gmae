var ostoslista = [];

function lisaaTuote() {
    var tuote = document.getElementById('tuote').value;
    var maara = document.getElementById('maara').value;

    if (tuote && maara) {
        ostoslista.push({ tuote: tuote, maara: parseInt(maara) });
        naytalista();
    }
}

function poistaTuote() {
    var tuote = document.getElementById('poistaTuoteNimi').value;
    var index = ostoslista.findIndex(item => item.tuote === tuote);
    if (index !== -1) {
        ostoslista.splice(index, 1);
    } else {
        console.log('Tuote ei löydy listalta');
    }

    naytalista();
}

function naytalista() {
    var lista = document.getElementById('ostoslista');
    lista.innerHTML = '';

    ostoslista.forEach(ostos => {
        var li = document.createElement('li');
        li.textContent = `Tuote: ${ostos.tuote}, Määrä: ${ostos.maara}`;
        lista.appendChild(li);
    });
}

function paivitamaara() {
    var tuote = document.getElementById('paivitaTuote').value;
    var uusiMaara = parseInt(document.getElementById('uusiMaara').value);
    var item = ostoslista.find(item => item.tuote === tuote);

    if (item) {
        item.maara = uusiMaara;
    } else {
        console.log('Tuote ei löydy listalta');
    }
    naytalista();
}
