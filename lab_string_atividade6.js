function escreverExtenso()
{
    let data = document.getElementById("data").value.split("-");
    let meses = 
    [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    let dia = parseInt(data[2]);
    let mes = meses[parseInt(data[1]) - 1];
    let ano = data[0];
    let dataExtenso = (dia + " de " + mes + " de " + ano);
    document.getElementById("saida").textContent = dataExtenso;
}
