import '../style/panel.css'
import { useForm } from "react-hook-form";
import { ProductDelete } from '../api/ProductDelete';


function PanelAdminProductDelete() {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        ProductDelete(data);
    }
    return (
        <div className='grpBloc'>
            <form className="bloc" onSubmit={handleSubmit(onSubmit)}>
                <h2>Delete Product Table</h2>
                <p>Product name</p>
                <input type="texte" id="name" name='name' {...register("name", {required: true})}></input>
                <input type="submit"/> 
        </form>   
        </div>
    );
}

export default PanelAdminProductDelete;