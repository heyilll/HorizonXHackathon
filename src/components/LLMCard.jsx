import { Link } from "react-router-dom";
import getDayName from "../services/datehelper.js";

function LLMCard({llm}) {
    return ( 
        <div className="col-md-4 mb-4">
            <div className="card hover-effect">
                <div className="card-header"> 
                    <Link to={`/llm/${llm._id}`}  className=" text-black">
                        <h3>{llm.name}</h3>
                    </Link>
                </div>
                <div className="card-body ">
                    <p className="card-text">{llm.description} </p>
                    <h6 className="card-title">Organisation: {llm.organization}</h6>
                    <h6 className="card-text">Modality: {llm.modality}</h6>
                    <h6 className="card-text">Date Created: {getDayName(llm.date_created)}</h6>
                    <h6 className="card-text">Access: {llm.access}</h6>
                </div>
            </div>
        </div>
    );
}

export default LLMCard;