import { useForm } from "react-hook-form";
import { SignUpPost } from "../api/SignUp";
import '../style/main.css'

function SignUp() {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        SignUpPost(data);
    }

    return <form className="modal-content" onSubmit={handleSubmit(onSubmit)}>
        <p className="white">Prénom</p> <br></br>
        <input size="lg" type="text"  {...register("firstname", {required: true})}  required/> <br></br>
        <p className="white">Nom</p> <br></br>
        <input size="lg" type="text"  {...register("name", {required: true})} required/> <br></br>
        <p className="white">Mail</p> <br></br>
        <input size="lg" type="text" {...register("email", {required: true})} required/> <br></br>
        <p className="white">Adresse</p> <br></br>
        <input size="lg" type="text"  {...register("adress", {required: true})} required/> <br></br>
        <p className="white">Mot de passe</p> <br></br>
        <input size="lg" type="text"  {...register("password", {required: true})} required/> <br></br>
        <input type="submit" value='Inscription'/>
        <div className="Connexion">
        <h2>Deja Inscris ?</h2>
            <a href="/login"><h2>Cliquer ici pour vous connecter</h2></a>
        </div>
    </form> 
}
export default SignUp;