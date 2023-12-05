    document.getElementById('logoffBtn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    function showContent(contentType) {
        document.getElementById('content').innerText = `Conteúdo relacionado a ${contentType} vai aqui.`;
        const contentElement = document.getElementById('content');
        const submenuElement = document.getElementById('submenu');
        switch (contentType) {
            case 'NewLocação':
                contentElement.innerText = 'Conteúdo relacionado a Locação vai aqui.';
            break;
            case 'NewManutenção':
                contentElement.innerText = 'Conteúdo relacionado a Nova Manutenção vai aqui.';
                showmanutençãoform();
            break;
            case 'NewDocs':
                contentElement.innerText = 'Conteúdo relacionado a Documentos vai aqui.';
            break;
            case 'NewCompra':
                contentElement.innerText = 'Conteúdo relacionado a Compras vai aqui.';
            break;
            
            default:
                contentElement.innerText = `Conteúdo relacionado a ${contentType} vai aqui.`;
                hideSubmenu();
                break;
        }
    }
    
   
    //Parte da coleta de dados para Manutenção
    function showmanutençãoform() {
        document.getElementById('content').style.display = 'none';
        document.getElementById('manutençãoform').style.display = 'block';
        document.getElementById('submenu').style.display = 'none';
    }
    
    function submitmanutençãoform() {
        // Aqui você pode coletar os valores do formulário e fazer o que for necessário
        const project = document.getElementById('project').value;
        const maintenanceType = document.getElementById('maintenanceType').value;
        const plate = document.getElementById('plate').value;
        const requester = document.getElementById('requester').value;
        const driver = document.getElementById('driver').value;
        const currentKm = document.getElementById('currentKm').value;
        const vehicleLocation = document.getElementById('vehicleLocation').value;
        const maintenanceDate = document.getElementById('maintenanceDate').value;
    
        // Exemplo: exibir os valores no console
        console.log('Projeto:', project);
        console.log('Tipo de Manutenção:', maintenanceType);
        console.log('Placa:', plate);
        console.log('Solicitante:', requester);
        console.log('Condutor:', driver);
        console.log('Km Atual:', currentKm);
        console.log('Local do Veículo:', vehicleLocation);
        console.log('Data para a Manutenção:', maintenanceDate);
    
        // Aqui você pode realizar outras ações, como enviar os dados para um servidor, etc.
    
        // Voltar ao conteúdo principal
        document.getElementById('content').style.display = 'block';
        document.getElementById('manutençãoform').style.display = 'none';
        document.getElementById('submenu').style.display = 'block';
    }
    