import image from '../images/matrix_v3.png'

function Graph() {
    return ( 
        <div className="container bg-white my-4" >
            <div className="row g-4 justify-content-between">
                <h2 className="col-6">Graph</h2> 
            </div>
            
            <div className="row mt-4 g-4"> 
                <img src={image} alt="" height={900}/> 
            </div> 
        </div>  
    );
}

export default Graph;