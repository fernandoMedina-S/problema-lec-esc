import DatabaseImg from "../../assets/Database.png";
import Loading from "../Loading/Loading";

const DataBaseSource = (props) =>{

    return(
        <>
            <div className="db__main-container">
                <Loading labelLoading={props.labelLoading}/>
                <img src={DatabaseImg} className="db__image"></img>
            </div>
        </>
    )
}

export default DataBaseSource;