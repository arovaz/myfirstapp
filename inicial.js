document.getElementById('logoffBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});
function showContent(contentType) {
    document.getElementById('content').innerText = `Conteúdo relacionado a ${contentType} vai aqui.`;
}
