let palavraSorteada;
let palavraExibida = [];
let letrasIncorretas = [];
let tentativasRestantes;
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
    letrasIncorretas = [];
    document.getElementById("tentativasRestantes").innerText = "Você ainda pode errar " + tentativasRestantes + " vezes.";
    document.getElementById("palavraExibida").innerText = palavraExibida.join(" ");
    document.getElementById("tentativaLetra").style.display = "inline";
    document.getElementById("botaoChute").style.display = "inline";
    document.getElementById("botaoReiniciar").style.display = "none";
    atualizarTela();
}
function jogoForca()
{
    let tentativaLetra = document.getElementById("tentativaLetra").value.toLowerCase();
    let acertou = false;
    let alertCount = 1;
    if(tentativaLetra.toUpperCase() == tentativaLetra)
    {
        alert("O caractere digitado não é uma letra.");
    }
    else
    {
        for(let i = 0; palavraSorteada.length > i; i++)
        {
            if(palavraSorteada[i] == tentativaLetra)
            {
                acertou = true;
                if(!(palavraExibida[i] == tentativaLetra))
                {
                    palavraExibida[i] = tentativaLetra;
                }
                else if(palavraExibida.includes(tentativaLetra) && alertCount)
                {
                    alert("Essa letra já foi jogada!");
                    alertCount--;
                }
            }
        }
        if(!acertou)
        {
            if(!letrasIncorretas.includes(tentativaLetra))
            {
                tentativasRestantes--;
                letrasIncorretas.push(tentativaLetra);
            }
            else if(letrasIncorretas.includes(tentativaLetra))
            {
                alert("Essa letra já foi jogada!");
            }
        }
        alertCount = 1;
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
}
function atualizarTela()
{
    document.getElementById("tentativasRestantes").innerText = "Você ainda pode errar " + tentativasRestantes + " vezes.";
    document.getElementById("palavraExibida").innerText = palavraExibida.join(" ");
    if(letrasIncorretas.length)
    {
        document.getElementById("letrasIncorretas").innerText = "Letras incorretas: " + letrasIncorretas;
    }
    else 
    {
        document.getElementById("letrasIncorretas").innerText = "";
    }
}
function fimJogo()
{
    document.getElementById("tentativaLetra").style.display = "none";
    document.getElementById("botaoChute").style.display = "none";
    document.getElementById("botaoReiniciar").style.display = "inline";
}
