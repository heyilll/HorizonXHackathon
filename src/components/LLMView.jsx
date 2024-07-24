import LLMService from "../services/llms.service.js";
import { useParams, Link, useNavigate } from "react-router-dom";
import getDayName from "../services/datehelper.js";
import { useState, useEffect } from "react";

function LLMView( ) {
    const { id } = useParams();
    const [model, setModel] = useState([]); 
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => { 
        const fetchModel = async () => {
            const data = await LLMService.getSpecificLLMService(id); 
            setModel(data.model); 
            setLoading(false); 
        }; 

        fetchModel();   
    }, []); 
    
    const handleRemove = async (e) => {
        e.preventDefault();
        try {
            const res = await LLMService.removeLLMService(id);
            console.log(res);

            if (res.status === 204) {
                navigate("/");
                console.log(`Removed successfully`);
            } else {
                console.log("Removal failed");
            }
            } catch (error) {
                console.log(error);
            }
    };

    if (loading) {
        return <div>Loading...</div>;
    }  

    return ( 
        <div className="container my-4 " > 
            <h2>LLM Name: {model.name}</h2>
            <div className="card mt-4">
                <div className="card-body">
                    <dl className="row"> 
                        <dt className="col-sm-3">Company:</dt>
                        <dd className="col-sm-9">{model.organization}</dd>

                        <dt className="col-sm-3">Description:</dt>
                        <dd className="col-sm-9">{model.description}</dd>

                        <dt className="col-sm-3">URL:</dt>
                        <dd className="col-sm-9"><Link to={model.url}>{model.url}</Link></dd>
                        
                        <dt className="col-sm-3">Date of release:</dt>
                        <dd className="col-sm-9">{getDayName(model.date_created)}</dd>

                        <dt className="col-sm-3">Modality:</dt>
                        <dd className="col-sm-9">{model.modality}</dd>

                        <dt className="col-sm-3">Model analysis:</dt>
                        <dd className="col-sm-9">{model.model_analysis}</dd>

                        <dt className="col-sm-3">Intended uses:</dt>
                        <dd className="col-sm-9">{model.intended_uses}</dd>

                        <dt className="col-sm-3">Prohibited uses:</dt>
                        <dd className="col-sm-9">{model.prohibited_uses}</dd>

                        <dt className="col-sm-3">Quality control:</dt>
                        <dd className="col-sm-9">{model.quality_control}</dd>

                        <dt className="col-sm-3">Access:</dt>
                        <dd className="col-sm-9">{model.access}</dd>

                        <dt className="col-sm-3">Monitoring:</dt>
                        <dd className="col-sm-9">{model.monitoring}</dd>

                        <dt className="col-sm-3">Feedback:</dt>
                        <dd className="col-sm-9">{model.feedback}</dd>

                        <dt className="col-sm-3">License:</dt>
                        <dd className="col-sm-9">{model.license}</dd>
                    </dl>
                </div>
            </div>
            <div className=" justify-content-between">
                <Link to={`/edit/${id}`} className=" "><button className="col-3 btn btn-warning">Edit</button></Link>
                <button className="col-3 btn btn-danger float-end" onClick={handleRemove}>Delete</button> 
            </div>
        </div>  
    );
}

export default LLMView;