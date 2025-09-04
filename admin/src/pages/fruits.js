import React, { useEffect, useState } from "react";
import Axios from 'axios';

function Fruits() {
    const [activeTab, setActiveTab] = useState('upload');
    const [list, setList] = useState([]);
    const [rs, setList1] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        Axios.get('http://localhost:1137/api/fruit_fetch')
            .then((response) => {
                setList(response.data);
            });
    }, []);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        const current = new Date();
        const upload_date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        const type = 1;
        
        formData.append('F_image', selectedFile);
        formData.append('F_title', e.target.title.value);
        formData.append('F_description', e.target.description.value);
        formData.append('F_extradescription', e.target.extradescription.value);
        formData.append('F_subtitle', e.target.subtitle.value);
        formData.append('F_subdescription', e.target.subdescription.value);
        formData.append('upload_date', upload_date);
        formData.append('type', type);

        Axios.post('http://localhost:1137/api/upload_fruit', formData)
            .then((response) => {
                alert('Fruit uploaded successfully!');
                fetchFruits(); // Refresh the list
                e.target.reset();
                setSelectedFile(null);
            })
            .catch((error) => {
                alert('Error uploading fruit');
                console.error(error);
            });
    };

    const showDetail = (id) => {
        Axios.post('http://localhost:1137/api/get_fruit_fetch', { id: id })
            .then((response) => {
                setList1(response.data);
            });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = {
            id: document.getElementById('id').value,
            title: document.getElementById('post_title1').value,
            description: document.getElementById('post_description1').value,
            subtitle: document.getElementById('post_subtitle1').value,
            subdescription: document.getElementById('post_subdescription1').value
        };

        Axios.post('http://localhost:1137/api/update_fruit', formData)
            .then(() => {
                alert('Updated successfully!');
                fetchFruits();
                document.querySelector('[data-dismiss="modal"]').click();
            })
            .catch((error) => {
                alert('Error updating fruit');
                console.error(error);
            });
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            Axios.post('http://localhost:1137/api/delete_fruit', { id: id })
                .then(() => {
                    alert('Deleted successfully!');
                    fetchFruits();
                })
                .catch((error) => {
                    alert('Error deleting fruit');
                    console.error(error);
                });
        }
    };

    return (
        <main id="main" className="main">
            <section className="section">
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h5 className="card-title">Manage Fruits</h5>
                                <div className="btn-group">
                                    <button 
                                        className={`btn ${activeTab === 'upload' ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => setActiveTab('upload')}
                                    >
                                        Upload New
                                    </button>
                                    <button 
                                        className={`btn ${activeTab === 'manage' ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => setActiveTab('manage')}
                                    >
                                        Manage Existing
                                    </button>
                                </div>
                            </div>

                            {activeTab === 'upload' && (
                                <div className="upload-section">
                                    <form onSubmit={handleUpload}>
                                        <div className="mb-3">
                                            <label className="form-label">Title</label>
                                            <input type="text" className="form-control" name="title" placeholder="Title Name" required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Description</label>
                                            <textarea className="form-control" name="description" rows="6" required></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Extra Description</label>
                                            <textarea className="form-control" name="extradescription" rows="6" required></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Subtitle</label>
                                            <input type="text" className="form-control" name="subtitle" placeholder="Subtitle" required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Subdescription</label>
                                            <textarea className="form-control" name="subdescription" rows="6" required></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Browse Files</label>
                                            <input type="file" className="form-control form-upload-multiple" onChange={handleFileChange} required />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            )}

                            {activeTab === 'manage' && (
                                <div className="manage-section">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Subtitle</th>
                                                <th scope="col">Subdescription</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {list.map((val, index) => (
                                                <tr key={val._id}>
                                                    <td>{index + 1}</td>
                                                    <td><input type="text" name="sutitle" readOnly value={val.post_title} style={{width:"200px"}}/></td>
                                                    <td><textarea rows="7" readOnly style={{width:"350px"}}>{val.post_decrisption}</textarea></td>
                                                    <td><input type="text" name="sutitle" readOnly value={val.post_subtitle} style={{width:"200px"}}/></td>
                                                    <td><textarea rows="7" readOnly style={{width:"350px"}}>{val.post_subdecrisption}</textarea></td>
                                                    <td>{val.post_upload_date}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-outline-secondary" onClick={() => showDetail(val._id)} data-target="#myModal" data-toggle="modal">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                                            </svg>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-outline-secondary" onClick={() => handleDelete(val._id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Edit Modal */}
            <div className="modal fade" id="editModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Fruit</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {rs.map((val1) => (
                                <form key={val1._id}>
                                    <input type="hidden" id="id" value={val1._id} />
                                    <div className="mb-3">
                                        <label className="form-label">Title</label>
                                        <input type="text" className="form-control" id="post_title1" defaultValue={val1.title} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea className="form-control" id="post_description1" defaultValue={val1.description}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Subtitle</label>
                                        <input type="text" className="form-control" id="post_subtitle1" defaultValue={val1.subtitle} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Subdescription</label>
                                        <textarea className="form-control" id="post_subdescription1" defaultValue={val1.subdescription}></textarea>
                                    </div>
                                </form>
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleUpdate}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Fruits;
