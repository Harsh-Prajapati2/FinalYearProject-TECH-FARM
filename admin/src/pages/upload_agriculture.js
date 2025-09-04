import React from "react";
import { useState } from "react";
import Axios from 'axios';

function Agriculture() {




  const current = new Date();
  const upload_date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  var type = 0;
  const [A_title, setname] = useState('');
  const [A_description, setdescription] = useState('');
  const [A_extradescription, setextradescription] = useState('');
  const [A_subtitle, setsubname] = useState('');
  const [A_subdescription, setsubdescription] = useState('');
  const [A_file, setfilename] = useState("");

  const postData = () => {
    var data = new FormData();
    data.append('rp_image', A_file);
    data.append('A_title', A_title);
    data.append('A_description', A_description);
    data.append('A_extradescription', A_extradescription);
    data.append('A_subtitle', A_subtitle);
    data.append('A_subdescription', A_subdescription);
    data.append('upload_date', upload_date);
    data.append('type', type);
   

    var config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    };

    Axios.post('http://localhost:1137/api/upload_agriculture', data, config).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
        window.location = "/Manage_agriculture";
      }
    });
  }


  return (
    <div className="aboutmain">
      <div className="card box_main">
        <h5 className="card-title">Upload Agriculture</h5>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="Text" className="form-label form-label-top form-label-auto">Title:&nbsp;</label>
              <input type="text" id="input_8" name="titlename" className="form-control" placeholder="Title Name" data-component="text" aria-labelledby="label_8" size="134.5" required onChange={(e) => setname(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label form-label-top form-label-auto">Description:&nbsp;</label>
              <textarea id="input_4" className="form-control" name="q4_message4" cols="28" rows="6" data-component="textarea" aria-labelledby="label_4" required onChange={(e) => setdescription(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label form-label-top form-label-auto">Extra-Description:&nbsp;</label>
              <textarea id="input_4" className="form-control" name="q4_message4" cols="28" rows="6" data-component="textarea" aria-labelledby="label_4" onChange={(e) => setextradescription(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="Text" className="form-label form-label-top form-label-auto">Subtitle:&nbsp;</label>
              <input type="text" id="input_8" name="titlename" className="form-control" placeholder="Title Name" data-component="text" aria-labelledby="label_8" size="134.5" onChange={(e) => setsubname(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label form-label-top form-label-auto">Subdescription:&nbsp;</label>
              <textarea id="input_4" className="form-control" name="q4_message4" cols="28" rows="6" data-component="textarea" aria-labelledby="label_4" onChange={(e) => setsubdescription(e.target.value)} />
            </div>
            <div className="form-group" data-type="control_fileupload" id="id_11">
              <label className="form-label form-label-top form-label-auto" id="label_11" htmlFor="input_11"> </label>
              <div id="cid_11" className="form-input-wide">
                <div data-wrapper-react="true">
                  <div data-wrapper-react="true">
                    <div className="form-label form-label-top form-label-auto">Browse Files:&nbsp;
                      <input type="file" className="form-upload-multiple" multiple onChange={(e) => setfilename(e.target.files[0])} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={postData}>Submit</button>
          </div>
          <div className="col-md-6">
            <form>
              <div><img src="/resources/assets/images/globalagriculture.jpg" alt="" className="pic" /></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Agriculture;