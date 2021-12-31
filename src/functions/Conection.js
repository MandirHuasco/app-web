import StoreDatos from "./Store";

class Conection {
    async a_n(a, b){
        if (b === 'pr'){
            return new Promise( (resolve, reject) =>{
                StoreDatos.c_a('g_b', new WebSocket(a))
                StoreDatos.c_a('g_c', true)
                StoreDatos.a_c[0].g_b.onopen = () => {
                    StoreDatos.c_a('g_d', true)
                    resolve('WebSocket Client Connected. ')
                }
                //console.log(RapidStore.a_c[0].g_b)
                StoreDatos.a_c[0].g_b.onerror = (e)=> {
                    StoreDatos.c_a('g_c', false)
                    reject(e)
                }
                /*
                setTimeout( () =>{

                }, 500)
                */
            })
        }
        if (b === 'lo'){
            return new Promise( (resolve, reject) =>{
                StoreDatos.c_a('g_n', new WebSocket(a))
                StoreDatos.c_a('g_o', true)
                StoreDatos.a_c[0].g_n.onopen = () => {
                    StoreDatos.c_a('g_p', true)
                    resolve('WebSocket Client Connected. ')
                }
                StoreDatos.a_c[0].g_n.onerror = (e)=> {
                    StoreDatos.c_a('g_o', false)
                    reject(e)
                }
                /*
                setTimeout( () =>{

                }, 500)
                */
            })
        }
    }
    a_o(a, b){
        // var a contiene info del error
        if (b ==='pr'){
            setTimeout( () =>{
                console.log('Coneccion perdida, reconectando.')
                this.a_n(StoreDatos.a_c[0].g_a, 'pr').then((b)=>{
                    console.log(b)
                }).catch((e)=>{
                    console.log('Reintentando')
                })
                StoreDatos.a_c[0].g_b.onclose = (e) => {
                    this.a_o(e, 'pr')
                }
            }, 10000)
        }
        if (b ==='lo'){
            setTimeout( () =>{
                console.log('Coneccion perdida, reconectando.')
                this.a_n(StoreDatos.a_c[0].g_m, 'lo').then((b)=>{
                    console.log(b)
                }).catch((e)=>{
                    console.log('Reintentando')
                })
                StoreDatos.a_c[0].g_n.onclose = (e) => {
                    this.a_o(e, 'lo')
                }
            }, 10000)
        }
    }
    async a_q(a, b, c) {
        if (a===1) {
            console.log(a, '443')
            try {
                StoreDatos.a_c[0].g_b.send(JSON.stringify({
                    event 		: 'USER_LOGGIN',
                    payload 	: {
                        user		: StoreDatos.a_c[0].c_a,
                        pass		: StoreDatos.a_c[0].c_b,
                        dni 	    : '',
                    },
                    app			:	'GoTicket',
                    token		:	'349uvjnfun3284n98j8SDF98SDJ9sd2jk8sd82j502kj'
                }))
            } catch (e){
                console.log(e)
            }
            Promise.resolve().then(

                StoreDatos.a_c[0].g_b.onmessage = (e) => {
                    if (e === undefined) return //manejar este envento vacio
                    let xx = JSON.parse(e.data)


                    if( xx.event === 'USER_LOGGIN' && xx.status === true){
                        StoreDatos.b_e(xx.data)
                        StoreDatos.z_a('g_o', true)
                        console.log(StoreDatos.a_z[0].g_o)
                    }
                    if( xx.event === 'USER_LOGGIN' && xx.status === false){
                        StoreDatos.z_a('g_o', false)
                        console.log(StoreDatos.a_z[0].g_o)
                    }
                }
            )
        }
        if (b===1) {
            console.log(b, '443')
            try {
                StoreDatos.a_c[0].g_b.send(JSON.stringify({
                    event 		: 'USER_GET_REPORTS',
                    payload 	: {
                        Id_user		    :   '0',
                        Id_attender		:   'M4',
                        Id_business 	:    1,
                    },
                    app			:	'GoTicket',
                    token		:	'349uvjnfun3284n98j8SDF98SDJ9sd2jk8sd82j502kj'
                }))
            } catch (e){
                console.log(e)
            }
        }
    }
}
export default new Conection();