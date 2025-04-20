function contabilizaPalavras()
{
    let texto = document.getElementById("texto").value.split(' ');
    let palavras = {};
    for(let i = 0; i < texto.length; i++)
    {
        let palavra = texto[i].toLowerCase();
        if(palavra in palavras)
        {
            palavras[palavra]++;
        }
        else
        {
            palavras[palavra] = 1;
        }
    }
    document.getElementById("tabela").innerHTML = "";
    for(let palavra in palavras)
    {
        let linha = document.createElement("tr");

        let conteudoPalavra = document.createElement("td");
        conteudoPalavra.textContent = palavra;

        let conteudoNumero = document.createElement("td");;
        conteudoNumero.textContent = palavras[palavra];

        linha.appendChild(conteudoPalavra);
        linha.appendChild(conteudoNumero);

        document.getElementById("tabela").appendChild(linha);
    }
}
