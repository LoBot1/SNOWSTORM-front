import { SignUpPost } from "../api/SignUp";
import '../style/panel.css'
import { useForm } from "react-hook-form";

function PanelAdminUserCreate() {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        SignUpPost(data);
    }
    return (
        <div className='grpBloc'>
            <form className="bloc" onSubmit={handleSubmit(onSubmit)}>
                <h2>create User Table</h2>
                <p>adresse e-mail</p>
                <input type="texte" id="mail" name='mail'  size="25" {...register("email", {required: true})}></input>
                <p>name</p>
                <input type="texte" id="name" name='name'  size="20" {...register("name", {required: true})}></input>
                <p>firstname</p>
                <input type="texte" id="firstname" name='firstname'  size="20" {...register("firstname", {required: true})}></input>
                <p>adresse</p>
                <input type="texte" id="adress" name='adress'  size="20" {...register("adress", {required: true})}></input>
                <p>password</p>
                <input type="texte" id="password" name='password' size="20" {...register("password", {required: true})}></input>
                <input type="submit" />
            </form> 

        </div>
    );
}

export default PanelAdminUserCreate;