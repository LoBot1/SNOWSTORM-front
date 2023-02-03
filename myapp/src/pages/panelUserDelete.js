import '../style/panel.css'
import { useForm } from "react-hook-form";
import { UserDelete } from '../api/UserDelete';



function PanelAdminUserDelete() {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        UserDelete(data);
    }
    return (
        <div className='grpBloc'>
            <form className="bloc" onSubmit={handleSubmit(onSubmit)}>
                <h2>Delete user table</h2>
                <p>firstname</p>
                <input type="texte" id="firstname" name='firstname' {...register("firstname", {required: true})}></input>
                <p>Name</p>
                <input type="texte" id="name" name='name' {...register("name", {required: true})}></input>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default PanelAdminUserDelete;