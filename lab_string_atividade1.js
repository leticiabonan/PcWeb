function inverterFrase()
{
    let frase = document.getElementById("frase").value;
    let fraseInvertida = frase.split('').reverse().join('');
    document.getElementById("saidaFrase").textContent = fraseInvertida;
}
