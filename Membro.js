function SalvarDados(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    if (nome === '' || telefone === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if(telefone.length < 10 || telefone.length > 11){
        alert("Por favor, digite um telefone valido!")
        return
    }

    const novoMembro = {
        nome,
        telefone
    };

    let membros = JSON.parse(localStorage.getItem("Membros")) || [];
    membros.push(novoMembro);
    localStorage.setItem("Membros", JSON.stringify(membros));

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';

    ExibirDadosSalvos();
}

function ExibirDadosSalvos() {
    const dadosSalvosDiv = document.getElementById("DadosSalvos");
    const membros = JSON.parse(localStorage.getItem("Membros")) || [];

    if (membros.length === 0) {
        dadosSalvosDiv.innerHTML = "<p>Nenhum membro salvo.</p>";
        return;
    }

    let html = "<h3>Membros Salvos:</h3>";
    membros.forEach((membro, index) => {
        html += `
            <div class="membro">
                <p><strong>${index + 1}.</strong> Nome: ${membro.nome}</p>
            </div>
        `;
    });

    dadosSalvosDiv.innerHTML = html;
}

ExibirDadosSalvos();
