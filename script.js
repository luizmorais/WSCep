new Vue({
    el: "#appCEP",
    data: {
        endereco: {
            cep: null,
            logradouro: null,
            uf: null,
            cidade: null,
            numero: null, 
            bairro: null,
            siafi: null, 
            ddd: null, 
            ibge: null, 
            gia: null
        }
    },
    methods: {
        cepAlteradoEvento(){
            axios({
                method: "get",
                url: `https://viacep.com.br/ws/${this.endereco.cep}/json/ `,
                responseType:"application/json"
            }).then(response => {
                var bean = response.data;
                this.endereco.logradouro = bean.logradouro;
                this.endereco.uf = bean.uf;
                this.endereco.cidade = bean.localidade;
                this.endereco.numero = bean.numero;
                this.endereco.bairro = bean.bairro;
                this.endereco.siafi = bean.siafi;
                this.endereco.ddd = bean.ddd;
                this.endereco.ibge = bean.ibge;
                this.endereco.gia = bean.gia;
            });
        }
    }
});