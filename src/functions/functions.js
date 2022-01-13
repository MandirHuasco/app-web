import StoreDatos from "./Store";
import Conection from "./Conection";

class Funciones {

    //a_a(a, b, c){

    //}

    jsonvalidate(e){

        console.log(JSON.stringify(e.data) + "EEEEEEEEEEEEE")

        try{
            JSON.parse(e);
        }catch (e) {
            return false;
        }
        return true;
    }


}
export default new Funciones();


















