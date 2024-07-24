import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LLMService from "../services/llms.service.js";

function EditLLM() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [llm, setLLM] = useState({
        name: "",
        organization: "",
        description: "",
        url: "",
        datasheet_url: "https://example.com/",
        date_created: "", 
        modality: "",
        model_analysis: "",
        intended_uses: "",
        prohibited_uses: "",
        quality_control: "",
        access: "",
        monitoring: "",
        feedback: "",
        license: ""
    });

    useEffect(() => {
        const fetchLLM = async () => {
            try {
                const data = await LLMService.getSpecificLLMService(id);
                setLLM(data.model);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchLLM();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLLM(prevLLM => ({
            ...prevLLM,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await LLMService.editLLMService(id, { _id: id, ...llm });
            
            if (res.status === 204) {
                navigate(`/llm/${id}`);
                console.log("Updated successfully");
            } else {
                console.log("Update failed");
            }
        } catch (error) {
            console.error("Error updating LLM:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container my-4">
            <h2>Edit LLM</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={llm.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="organization" className="form-label">Organization:</label>
                    <input type="text" className="form-control" id="organization" name="organization" value={llm.organization} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea className="form-control" id="description" name="description" value={llm.description} onChange={handleChange} rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="url" className="form-label">URL:</label>
                    <input type="url" className="form-control" id="url" name="url" value={llm.url} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="date_created" className="form-label">Date of release:</label>
                    <input type="date" className="form-control" id="date_created" name="date_created" value={llm.date_created} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="modality" className="form-label">Modality:</label>
                    <input type="text" className="form-control" id="modality" name="modality" value={llm.modality} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="model_analysis" className="form-label">Model analysis:</label>
                    <textarea className="form-control" id="model_analysis" name="model_analysis" value={llm.model_analysis} onChange={handleChange} rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="intended_uses" className="form-label">Intended uses:</label>
                    <textarea className="form-control" id="intended_uses" name="intended_uses" value={llm.intended_uses} onChange={handleChange} rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="prohibited_uses" className="form-label">Prohibited uses:</label>
                    <textarea className="form-control" id="prohibited_uses" name="prohibited_uses" value={llm.prohibited_uses} onChange={handleChange} rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="quality_control" className="form-label">Quality control:</label>
                    <input type="text" className="form-control" id="quality_control" name="quality_control" value={llm.quality_control} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="access" className="form-label">Access:</label>
                    <select className="form-select" id="access" name="access" value={llm.access} onChange={handleChange} required>
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                        <option value="limited">Limited</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="monitoring" className="form-label">Monitoring:</label>
                    <input type="text" className="form-control" id="monitoring" name="monitoring" value={llm.monitoring} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="feedback" className="form-label">Feedback:</label>
                    <textarea className="form-control" id="feedback" name="feedback" value={llm.feedback} onChange={handleChange} rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="license" className="form-label">License:</label>
                    <input type="text" className="form-control" id="license" name="license" value={llm.license} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Update LLM</button>
            </form>
        </div>
    );
}

export default EditLLM;