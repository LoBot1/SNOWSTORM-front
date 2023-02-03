import '../style/panel.css'
import { useForm } from "react-hook-form";
import { SignUpPost } from "../api/SignUp";
import { ProductCreate } from '../api/ProductCreate';
import { UserDelete } from '../api/UserDelete';
import { ProductDelete } from '../api/ProductDelete';
import { UserUpdate } from '../api/UserUpdate';






function PanelAdmin() {


    return (
        <div className='thebuttons'>
             <div>
                <button className='button'><a href='/panelUserCreate'> <p>Create User</p></a> </button>
             </div>
             <div>
             <button className='button'><a href='/panelUserDelete'><p>Delete User</p></a></button>
             </div>
             <div>
             <button className='button'><a href='/panelProductCreate'><p>Create Product</p></a></button>
             </div>
             <div>
             <button className='button'><a href='/panelProductDelete'><p>Delete Product</p></a></button>
             </div>
        </div>
    );
}

export default PanelAdmin;