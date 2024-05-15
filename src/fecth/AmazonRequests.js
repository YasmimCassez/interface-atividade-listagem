class AmazonResquests {
    constructor() {
        this.serverUrl = 'http://10.90.2.119:3333';
        this.routeListarAmazon = '/vendas';
    
    }
    async listarAmazon () {
        try {
            const response = await fetch(`${this.serverUrl}${this.routeListarAmazon}`);
            if (!response.ok) {
                throw new Error ('Erro ao buscar servidor');
            }
            return await response.json();
        }catch (error) {
            console.error('Erro: ', error);
        }
    }
}

export default new AmazonResquests;