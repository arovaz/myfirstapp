    document.getElementById('logoffBtn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    function showContent(contentType) {
        document.getElementById('content').innerText = `Conteúdo relacionado a ${contentType} vai aqui.`;
    }
    function showContent(contentType) {
        var content = document.getElementById('content');
        var sideMenuList = document.getElementById('sideMenuList');
    
        // Atualizar o conteúdo principal
        content.innerText = `Conteúdo relacionado a ${contentType} vai aqui.`;
    
        // Atualizar o menu lateral
        sideMenuList.innerHTML = ""; // Limpar a lista antes de adicionar novos itens
    
        if (contentType === 'Locacao' || contentType === 'Manutencao' || contentType === 'Documentos' || contentType === 'Compras') {
            var links = ['Novo pedido', 'Status de pedido', 'Histórico de pedido'];
    
            // Adicionar links à lista
            links.forEach(function(link) {
                var listItem = document.createElement('li');
                listItem.textContent = link;
                sideMenuList.appendChild(listItem);
            });
    
            // Exibir o menu lateral
            document.getElementById('sideMenu').style.display = 'block';
        } else {
            // Ocultar o menu lateral para outros conteúdos
            document.getElementById('sideMenu').style.display = 'none';
        }
    }
    
    function showSubContent(subContentType) {
        const contentElement = document.getElementById('content');
        contentElement.innerHTML = `<p>${subContentType} vai aqui.</p>`;
    }