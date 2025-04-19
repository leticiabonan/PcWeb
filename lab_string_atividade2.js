function destacaVogais()
{
    let frase = document.getElementById("frase").value;
    frase = frase.split('');
    for(let i = 0; i < frase.length; i++)
    {
        if(validaVogal(frase[i]))
        {
            frase[i] = "<b>" + frase[i] + "</b>";
        }
    }
    document.getElementById("saidaFrase").innerHTML = frase.join('');
}
function validaVogal(caractere)
{
    let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    return vogais.indexOf(caractere) !== -1;
}
