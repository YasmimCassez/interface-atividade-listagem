class NetflixRequests {
    constructor () {
        this.serverUrl = 'http://10.90.2.119:3333';
        this.routeListarNetflix = '/titulos';
    }
    
    async ListarNetflix () {
        try {
            const response = await fetch(`${this.serverUrl}${this.routeListarNetflix}`);
            if (!response.ok) {
                throw new Error ('Erro ao buscar servidor');
            }
            return await response.json();
        }catch (error) {
            console.error('Erro: ', error);
        }
    }
}

export default new NetflixRequests;