import React from "react";
import { useState } from "react";
import Axios from 'axios';

function Fruit() {


    const current = new Date();
    const upload_date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    var type = 1;
    const [F_title, setname] = useState('');
    const [F_description, setdescription] = useState('');
    const [F_extradescription, setextradescription] = useState('');
    const [F_subtitle, setsubname] = useState('');
    const [F_subdescription, setsubdescription] = useState('');
    const [F_file, setfilename] = useState("");

    const postData = () => {
        var data = new FormData();
        data.append('F_image', F_file);
        data.append('F_title', F_title);
        data.append('F_description', F_description);
        data.append('F_extradescription', F_extradescription);
        data.append('F_subtitle', F_subtitle);
        data.append('F_subdescription', F_subdescription);
        data.append('upload_date', upload_date);
        data.append('type', type);
        // for (var pair of data.entries()) {
        //   console.log(pair[0]+ ', ' + pair[1]+','+ pair[2]); 
        //}

        var config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        };

        Axios.post('http://localhost:1137/api/upload_fruit', data, config).then((response) => {
            if (response.data.message) {
                alert(response.data.message);
                window.location = "/Manage_fruit";
            }
        });
    }



    return (
        <>
            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">
                        <div class="pcoded-inner-content">
                            <div class="main-body">
                                <div class="page-wrapper">
                                    <div class="page-header">
                                        <div class="page-block">
                                            <div class="row align-items-center">
                                                <div class="col-md-12">

                                                    <div class="page-header-title">
                                                        <h5 class="m-b-10">Upload Fruit</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-md-6">

                                                            <div class="form-group">
                                                                <label for="Text" class="form-label form-label-top form-label-auto">Title:&nbsp;</label>
                                                                <input type="text" id="input_8" name="titlename" class="form-control" placeholder="Title Name" data-component="text" aria-labelledby="label_8" size="134.5" required="?" onChange={(e) => setname(e.target.value)} />
                                                            </div>


                                                            <div class="form-group">
                                                                <label class="form-label form-label-top form-label-auto">Description:&nbsp;</label>
                                                                <textarea id="input_4" class="form-control" name="q4_message4" cols="28" rows="6" data-component="textarea" aria-labelledby="label_4" onChange={(e) => setdescription(e.target.value)} />
                                                            </div>
                                                          
                                                            <div class="form-group">
                                                                <label for="Text" class="form-label form-label-top form-label-auto">Subtitle:&nbsp;</label>
                                                                <input type="text" id="input_8" name="titlename" class="form-control" placeholder="Title Name" data-component="text" aria-labelledby="label_8" size="134.5" onChange={(e) => setsubname(e.target.value)} />
                                                            </div>


                                                            <div class="form-group">
                                                                <label class="form-label form-label-top form-label-auto">Subdescription:&nbsp;</label>
                                                                <textarea id="input_4" class="form-control" name="q4_message4" cols="28" rows="6" data-component="textarea" aria-labelledby="label_4" onChange={(e) => setsubdescription(e.target.value)} />
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="form-label form-label-top form-label-auto">Extra-Description:&nbsp;</label>
                                                                <textarea id="input_4" class="form-control" name="q4_message4" cols="28" rows="6" data-component="textarea" aria-labelledby="label_4" onChange={(e) => setextradescription(e.target.value)} />
                                                            </div>
                                                            <div class="form-group" data-type="control_fileupload" id="id_11"><label class="form-label form-label-top form-label-auto" id="label_11" for="input_11"> </label>
                                                                <div id="cid_11" class="form-input-wide">
                                                                    <div data-wrapper-react="true">
                                                                        <div data-wrapper-react="true">
                                                                            <div class="form-label form-label-top form-label-auto">Browse Files:&nbsp;
                                                                                <input type="file" class="form-upload-multiple" multiple onChange={(e) => setfilename(e.target.files[0])} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <button type="submit" class="btn btn-primary" onClick={postData}>Submit</button>


                                                        </div>
                                                        <div class="col-md-6">
                                                            <form>
                                                                <a><img src="./resources/assets/images/fruit.jpg" alt="" class="fruit-pic" /></a>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

} export default Fruit;