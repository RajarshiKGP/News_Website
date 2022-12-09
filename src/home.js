import React, { useState } from 'react';
import axios from 'axios';
import './home.css';

const Home = () => {
    const [data, setData] = useState([]);
    const fetchData = () => {
        axios.get("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json")
            .then(response => {
                setData(response.data.articles)
            })
    }

    fetchData();

    return (
        <div className="App">
            <div className="card my-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{ marginLeft: "5px", marginRight: "5px", marginBottom: "20px", backgroundColor: "rgb(253, 247, 224)", height: "100%", justifyContent: "center", padding: "10px" }}>
                    {data && data.map((obj, index) => {
                        return (
                            <div className="col-sm-6 mx-5" >
                                <img src={obj.urlToImage} className="card-img-top" alt="image" /><div className="card-body">
                                    <h5 className="card-title">{obj.source.name}</h5>
                                    <p className="card-text">{obj.title}</p>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">More Details</button>
                                    <br />
                                    <br />
                                    <p>~~~{obj.publishedAt}</p>
                                </div>

                                {/* Modal */}
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="staticBackdropLabel">{obj.title}</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <h6>Description: {obj.description}</h6>
                                                <br />
                                                <p>Content: {obj.content}</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <a href={obj.url} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-primary">For More</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;