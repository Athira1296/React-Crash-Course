import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = ({children}) => {
    const navigate = useNavigate();

    function onCloseHandler() {
        navigate('..'); // one step back
    }

    return(
        <>
            <div className={classes.backdrop} onClick={onCloseHandler}></div>
            <dialog open className={classes.modal}>{children}</dialog>
        </>
    );
};

export default Modal;