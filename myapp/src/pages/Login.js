import { useForm } from "react-hook-form";
import { Loger } from "../api/Loger";

function Login() {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        Loger(data);
    }

    return <form className="formSize" onSubmit={handleSubmit(onSubmit)}>
        <p className="white">Mail</p> <br></br>
        <input size="lg" type="text" placeholder="Mail" {...register("email", {required: true})} /> <br></br>
        <p className="white">Mot de passe</p> <br></br>
        <input size="lg" type="text" placeholder="Mot de passe" {...register("password", {required: true})} /> <br></br>
        <input size="lg" type="hidden" placeholder="Hidden" value="hidden" {...register("non", {required: false})} /> <br></br>
        <input type="submit" /> 
    </form> 
}
export default Login;