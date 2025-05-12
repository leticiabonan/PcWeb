let palavraSorteada = "";
let palavraExibida = [];
let tentativasRestantes = 6;
function iniciarJogo()
{
    const palavras = [
        "condescendente", "idiossincrasia", "demasiadamente", "consubstanciar", "arbitrariedade", "especificidade", "posteriormente", "contextualizar", "empreendimento", "entretenimento", "ancestralidade", "transcendental", "arrependimento", "paulatinamente", "relacionamento", "infraestrutura", "imparcialidade", "atenciosamente", "reconhecimento", "periodicamente", "insignificante", "diligentemente", "despretensioso", "impessoalidade", "socioambiental", "espontaneidade", "funcionalidade", "desprendimento", "principalmente", "aplicabilidade", "potencialidade", "licenciosidade", "procrastinador", "prestatividade", "excentricidade", "dissolutamente", "pusilanimidade", "perspicaz", "inerente", "portanto", "leviano", "relevante", "imparcial", "empecilho"
    ];
    const numeroAleatorio = Math.floor(Math.random() * palavras.length);
    palavraSorteada = palavras[numeroAleatorio];
    palavraSorteada = palavraSorteada.split("");
    palavraExibida = Array(palavraSorteada.length).fill("_");
    tentativasRestantes = 6;
    document.getElementById("tentativasRestantes").innerText = "Você ainda pode errar " + tentativasRestantes + " vezes.";
    document.getElementById("palavraExibida").innerText = palavraExibida.join(" ");
    document.getElementById("tentativaLetra").disabled = false;
    document.getElementById("botaoChute").disabled = false;
    document.getElementById("botaoReiniciar").style.display = "none";
    atualizarTela();
}
function jogoForca()
{
    let tentativaLetra = document.getElementById("tentativaLetra").value.toLowerCase();
    let acertou = false;
    for(let i = 0; palavraSorteada.length > i; i++)
    {
        if(palavraSorteada[i] == tentativaLetra)
        {
            acertou = true;
            palavraExibida[i] = tentativaLetra;
        }
    }
    if(!acertou)
    {
        tentativasRestantes--;
    }
    atualizarTela();
    document.getElementById("tentativaLetra").value = "";
    if(palavraExibida.join("") == palavraSorteada.join("") && tentativasRestantes > 0)
    {
        alert("Parabéns! Você ganhou!");
        fimJogo();
    }
    if(tentativasRestantes == 0)
    {
        alert(`Você perdeu! A palavra era: ${palavraSorteada.join("")}`);
        fimJogo();
    }
}
function atualizarTela()
{
    document.getElementById("tentativasRestantes").innerText = "Você ainda pode errar " + tentativasRestantes + " vezes.";
    document.getElementById("palavraExibida").innerText = palavraExibida.join(" ");
}
function fimJogo()
{
    document.getElementById("tentativaLetra").disabled = true;
    document.getElementById("botaoChute").disabled = true;
    document.getElementById("botaoReiniciar").style.display = "inline";
}
