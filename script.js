document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const resultText = document.getElementById('resultText');
    const logoRight = document.querySelector('.logo-right');
    const emptyMessage = document.querySelector('.empty-message');

    const criptografar = () => {
        // Exemplo de criptografia simples
        const text = inputText.value;
        if (text) {
            const result = text
                .replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
            resultText.textContent = result;
            showResult();
        }
    };

    const descriptografar = () => {
        // Exemplo de descriptografia simples
        const text = inputText.value;
        if (text) {
            const result = text
                .replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
            resultText.textContent = result;
            showResult();
        }
    };

    const showResult = () => {
        logoRight.classList.add('hidden');
        emptyMessage.classList.add('hidden');
        resultText.classList.remove('hidden');
    };

    const hideResult = () => {
        logoRight.classList.remove('hidden');
        emptyMessage.classList.remove('hidden');
        resultText.classList.add('hidden');
    };

    inputText.addEventListener('input', () => {
        if (inputText.value) {
            hideResult();
        } else {
            logoRight.classList.remove('hidden');
            emptyMessage.classList.remove('hidden');
            resultText.classList.add('hidden');
        }
    });

    // Expondo as funções para os botões
    window.criptografar = criptografar;
    window.descriptografar = descriptografar;
});
