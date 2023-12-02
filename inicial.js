document.getElementById('logoffBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});
function showContent(contentType) {
    document.getElementById('content').innerText = `Conteúdo relacionado a ${contentType} vai aqui.`;
}
function showContent(contentType) {
    const contentElement = document.getElementById('content');
    
    switch (contentType) {
        case 'Locação':
        case 'Manutencao':
        case 'Documentos':
        case 'Compras':
            contentElement.innerHTML = `
                <h2>${contentType}</h2>
                <ol>
                    <li onclick="showSubContent('Novo pedido')">Novo pedido</li>
                    <li onclick="showSubContent('Status de pedido')">Status de pedido</li>
                    <li onclick="showSubContent('Histórico de pedido')">Histórico de pedido</li>
                </ol>`;
            break;
        default:
            contentElement.innerText = `Conteúdo relacionado a ${contentType} vai aqui.`;
            break;
    }
}

function showSubContent(subContentType) {
    const contentElement = document.getElementById('content');
    contentElement.innerHTML = `<p>${subContentType} vai aqui.</p>`;
}
