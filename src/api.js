const Shrimpy = require('shrimpy-node');

let api = {
    key : "888e673c94b193cbe8fae5da6f01e01e64dc8b4f729b339d3eefa954002789bf",
    private: "5807e89d7b2eef0fd02547335bb68fead6f7b6b98f25dfc661ef5738e8da006dffdb3ce5a82fedc094505193fd731d6172bb047126153ea5b42afcd621b1a5b6"
}

const publicClient = new Shrimpy.ShrimpyApiClient(api.key);


async function getData() {
    try {
        const supportedExchanges = await publicClient.getTicker('kucoin');
        console.log(supportedExchanges)
    }
    catch (error){
        console.log(error)
    }

    
}


export default getData;