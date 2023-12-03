    document.getElementById('logoffBtn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    function showContent(contentType) {
        document.getElementById('content').innerText = `Conteúdo relacionado a ${contentType} vai aqui.`;
    }
    function showContent(contentType) {
        const contentElement = document.getElementById('content');
        const submenuElement = document.getElementById('submenu');
        switch (contentType) {
            case 'Locação':
                contentElement.innerText = 'Conteúdo relacionado a Locação vai aqui.';
            showSubmenu();
            break;
            case 'Manutenção':
                contentElement.innerText = 'Conteúdo relacionado a Manutenção vai aqui.';
            showSubmenu();
            break;
            case 'Documentos':
                contentElement.innerText = 'Conteúdo relacionado a Documentos vai aqui.';
            showSubmenu();
            break;
            case 'Compras':
                contentElement.innerText = 'Conteúdo relacionado a Compras vai aqui.';
            showSubmenu();
            break;
            //contentElement.innerHTML = `
            //<h2>${contentType}</h2>
            //<ol>
                //<li onclick="showSubContent('Novo pedido')">Novo pedido</li>
                //<li onclick="showSubContent('Status de pedido')">Status de pedido</li>
                //<li onclick="showSubContent('Histórico de pedido')">Histórico de pedido</li>
            //</ol>`;
            //break;

            default:
                contentElement.innerText = `Conteúdo relacionado a ${contentType} vai aqui.`;
                hideSubmenu();
                break;
        }
    }
    
    //function showSubContent(subContentType) {
        //const contentElement = document.getElementById('content');
        //contentElement.innerHTML = `<p>${subContentType} vai aqui.</p>`;
    //}

    function showSubmenu() {
        const submenuElement = document.getElementById('submenu');
        submenuElement.style.display = 'block';
    }
    
    function hideSubmenu() {
        const submenuElement = document.getElementById('submenu');
        submenuElement.style.display = 'none';
    }