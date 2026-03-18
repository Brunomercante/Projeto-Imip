// Função para trocar de aba
function mostrarSecao(secao) {
    const telaAluno = document.getElementById('secao-aluno');
    const telaProfessor = document.getElementById('secao-professor');

    if (secao === 'aluno') {
        telaAluno.style.display = 'block';
        telaProfessor.style.display = 'none';
    } else {
        telaAluno.style.display = 'none';
        telaProfessor.style.display = 'block';
    }
}

// Função de clique nos jogos
function jogar(nomeJogo) {
    alert("🚀 Carregando " + nomeJogo + "...\nO sistema de IA está gerando sua trilha personalizada!");
}

// Função de desempenho
function verDesempenhoGeral() {
    alert("📊 KPI de Fevereiro/2026\n\nTaxa de Engajamento: 94%\nEvolução na Alfabetização: +15%\n(Dados processados pelo Módulo Pedagógico)");
}