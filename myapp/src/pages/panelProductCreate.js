import '../style/panel.css'
import { useForm } from "react-hook-form";
import { ProductCreate } from '../api/ProductCreate';


function PanelAdminProductCreate() {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        ProductCreate(data);
    }
    return (
        <div className='grpBloc'>
            <form className="bloc" onSubmit={handleSubmit(onSubmit)}>
                <h2>Products create</h2>
                <p>product name</p>
                <input type="texte" id="name" name='name'  {...register("name", {required: true})}></input>
                <p>product price</p>
                <input type="texte" id="price" name='price'   {...register("price", {required: true})}></input>
                <p>description</p>
                <input type="texte" id="descritpion" name='description' {...register("description", {required: true})}></input>
                <p>image</p>
                <input type="texte" id="img" name='img'   {...register("img", {required: true})}></input>
                <p>id-stock</p>
                <input type="number" id="stock" name='stock'  {...register("stock", {required: true})}></input>
        <input type="submit"/>
        </form>
        </div>
    );
}

export default PanelAdminProductCreate;