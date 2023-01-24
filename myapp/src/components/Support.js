import { useForm } from "react-hook-form";
import {SupportPost} from '../api/SupportPost.js';


function Support() {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        SupportPost(data);
    }

    return <form className="formSize" onSubmit={handleSubmit(onSubmit)}>
        <label>Mail</label> <br></br>
        <input size="lg" type="text" placeholder="Mail" {...register("email", {required: true})} /> <br></br>
        <label>Objet</label> <br></br>
        <input size="lg" type="text" placeholder="Objet" {...register("object", {required: true})} /> <br></br>
        <label>Texte</label> <br></br>
        <input size="lg" type="Texte" placeholder="Texte" {...register("text", {required: true})} /> <br></br>
        <label>Image</label> <br></br>
        <input size="lg" type="Texte" placeholder="Image" {...register("img", {required: true})} /> <br></br>
        <input type="submit" />
    </form>
}
export default Support;