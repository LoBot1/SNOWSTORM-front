import { useForm } from "react-hook-form";
import { SignUpPost } from "../api/SignUp";

function SignUp() {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        SignUpPost(data);
    }

    return <form className="formSize" onSubmit={handleSubmit(onSubmit)}>
        <p className="white">Prénom</p> <br></br>
        <input size="lg" type="text" placeholder="Prénom" {...register("firstname", {required: true})} /> <br></br>
        <p className="white">Nom</p> <br></br>
        <input size="lg" type="text" placeholder="Nom" {...register("name", {required: true})} /> <br></br>
        <p className="white">Mail</p> <br></br>
        <input size="lg" type="text" placeholder="Mail" {...register("email", {required: true})} /> <br></br>
        <p className="white">Adresse</p> <br></br>
        <input size="lg" type="text" placeholder="Adresse" {...register("adress", {required: true})} /> <br></br>
        <p className="white">Mot de passe</p> <br></br>
        <input size="lg" type="text" placeholder="Mot de passe" {...register("password", {required: true})} /> <br></br>
        <input type="submit" />
    </form> 
}
export default SignUp;