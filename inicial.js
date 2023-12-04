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
            
            default:
                contentElement.innerText = `Conteúdo relacionado a ${contentType} vai aqui.`;
                hideSubmenu();
                break;
        }
    }
    
    function showSubmenu() {
        const submenuElement = document.getElementById('submenu');
        submenuElement.style.display = 'block';
    }
    
    function hideSubmenu() {
        const submenuElement = document.getElementById('submenu');
        submenuElement.style.display = 'none';
    }


    //Parte da coleta de dados para Manutenção
    function showMaintenanceForm() {
        document.getElementById('content').style.display = 'none';
        document.getElementById('maintenanceForm').style.display = 'block';
        document.getElementById('submenu').style.display = 'none';
    }
    
    function submitMaintenanceForm() {
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
        document.getElementById('maintenanceForm').style.display = 'none';
        document.getElementById('submenu').style.display = 'block';
    }
    