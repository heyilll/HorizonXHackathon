import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import accountService from "../services/account.service.js";
import LLMService from "../services/llms.service.js";

function AddLLM() {
    const [llm, setLLM] = useState({
        name: "",
        organization: "",
        description: "",
        date_created: "",
        datasheet_url: "https://example.com/",
        url: "", 
        modality: "",
        model_analysis: "",
        size: "", 
        quality_control: "",
        access: "open",
        license: "",
        intended_uses: "",
        prohibited_uses: "",
        monitoring: "",
        feedback: ""
    });
 
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const data = await accountService.getCurrentUser(); 
            setUser(data); 
        };  

        fetchUser(); 
    }, []); 
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLLM(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await LLMService.addLLMService({
        ...llm,
        created_by: user.id
      });
      console.log(res);

      if (res.status === 201) {
        navigate("/");
        console.log(`Added successfully`);
      } else {
        console.log("Addition failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

    return (
        <>
            {!user && <p>Not logged in</p>}
            {user && (
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="card shadow-lg border-0">
                                <div className="card-body p-5">
                                    <h1 className="text-center mb-4" style={{ color: "#001450" }}>Create Your LLM Entry</h1>
                                    <form onSubmit={handleSubmit} method="post">
                                        <div className="mb-4">
                                            <label htmlFor="name" className="form-label">LLM Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control form-control-lg"
                                                placeholder="Enter your LLM name"
                                                value={llm.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="organization" className="form-label">Organization</label>
                                            <input
                                                type="text"
                                                id="organization"
                                                name="organization"
                                                className="form-control form-control-lg"
                                                placeholder="Enter LLM organization"
                                                value={llm.organization}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="description" className="form-label">LLM Description</label>
                                            <textarea
                                                id="description"
                                                name="description"
                                                className="form-control form-control-lg"
                                                placeholder="Describe your LLM"
                                                value={llm.description}
                                                onChange={handleChange}
                                                rows="4"
                                            ></textarea>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="date_created" className="form-label">Date Created</label>
                                            <input
                                                type="date"
                                                id="date_created"
                                                name="date_created"
                                                className="form-control form-control-lg"
                                                value={llm.date_created}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="url" className="form-label">LLM URL</label>
                                            <input
                                                type="url"
                                                id="url"
                                                name="url"
                                                className="form-control form-control-lg"
                                                placeholder="Your LLM URL"
                                                value={llm.url}
                                                onChange={handleChange} 
                                            ></input>
                                        </div>  
                                        <div className="mb-4">
                                            <label htmlFor="modality" className="form-label">Modality</label>
                                            <input
                                                type="text"
                                                id="modality"
                                                name="modality"
                                                className="form-control form-control-lg"
                                                placeholder="Enter modality"
                                                value={llm.modality}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div> 
                                        <div className="mb-4">
                                            <label htmlFor="access" className="form-label">Access</label>
                                            <select
                                                id="access"
                                                name="access"
                                                className="form-select form-select-lg"
                                                value={llm.access}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="open">Open</option>
                                                <option value="closed">Closed</option>
                                                <option value="limited">Limited</option>
                                            </select>
                                        </div> 
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary btn-lg">
                                                Create LLM
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddLLM;