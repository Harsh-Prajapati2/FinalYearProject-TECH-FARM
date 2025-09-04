import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import './style/ManageSubside.css';

function Manage_subside() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editSubside, setEditSubside] = useState(null);

  const showNotification = (message, isSuccess = true) => {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 16px 24px;
      border-radius: 8px;
      background-color: ${isSuccess ? '#4caf50' : '#f44336'};
      color: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 30000;
      animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 20px;">${isSuccess ? '✓' : '✕'}</span>
        <span>${message}</span>
      </div>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
  };

  const onupdate = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:1137/api/updated_scheme', {
      id: editSubside._id,
      post_title1: e.target.post_title1.value,
      post_description1: e.target.post_description1.value,
      post_description_etc: e.target.post_description_etc.value,
      post_subtitle1: e.target.post_subtitle1.value,
      post_subdescription1: e.target.post_subdescription1.value
    }).then(() => {
      showNotification("Subside scheme updated successfully!");
      closeModal();
      fetchSubsides();
    }).catch(() => {
      showNotification("Error updating subside scheme. Please try again.", false);
    });
  };
  
  
  useEffect(() => {
    fetchSubsides();
  }, []);

  const fetchSubsides = () => {
    Axios.get('http://localhost:1137/api/subside_fetch').then(response => {
      setList(response.data);
    });
  };

  const openEditModal = (id) => {
    Axios.post('http://localhost:1137/api/get_subside_fetch', { id: id }).then(response => {
      setEditSubside(response.data[0]);
      setModalOpen(true);
    });
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditSubside(null);
  };
   
  const postdelete = (id) => {
    const confirmDelete = () => {
      const modalOverlay = document.createElement('div');
      modalOverlay.className = 'modal-overlay';
      modalOverlay.style.zIndex = '30000';

      const confirmBox = document.createElement('div');
      confirmBox.className = 'modal-content';
      confirmBox.style.maxWidth = '400px';
      confirmBox.innerHTML = `
        <div class="modal-header" style="margin-bottom: 16px;">
          <h5>Confirm Delete</h5>
        </div>
        <p style="margin-bottom: 24px;">Are you sure you want to delete this subside scheme? This action cannot be undone.</p>
        <div class="modal-buttons">
          <button class="btn btn-secondary">Cancel</button>
          <button class="btn btn-delete">Delete</button>
        </div>
      `;

      modalOverlay.appendChild(confirmBox);
      document.body.appendChild(modalOverlay);

      return new Promise((resolve) => {
        const [cancelBtn, deleteBtn] = confirmBox.querySelectorAll('button');
        
        cancelBtn.onclick = () => {
          document.body.removeChild(modalOverlay);
          resolve(false);
        };

        deleteBtn.onclick = () => {
          document.body.removeChild(modalOverlay);
          resolve(true);
        };

        modalOverlay.onclick = (e) => {
          if (e.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
            resolve(false);
          }
        };
      });
    };

    confirmDelete().then(confirmed => {
      if (confirmed) {
        Axios.post('http://localhost:1137/api/delete_button', { id: id })
          .then(() => {
            showNotification('Subside scheme deleted successfully!');
            fetchSubsides();
          })
          .catch(() => {
            showNotification('Error during deletion. Please try again.', false);
          });
      }
    });
  };
  

return (
    <div className="main-page-wrapper">
      <main className="main manage-subside-container">
        <section className="section">
          <div className="header-row flex-row-space-between">
            <h2>Manage Subside Schemes</h2>
            <div className="button-count-container">
              <button className="add-subside-btn" onClick={() => setModalOpen('upload')}>
                + Upload Subside Scheme
              </button>
              <span className="scheme-count">
                Total Schemes: {list.length}
              </span>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <table className="subside-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Sub-Title</th>
                    <th>Sub-Description</th>
                    <th>Upload Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((val, index) => (
                    <tr key={val._id}>
                      <td>{index + 1}</td>
                      <td><input type="text" readOnly value={val.post_title} className="input-title" /></td>
                      <td><textarea readOnly rows={4} className="textarea-description" value={val.post_decrisption || ''} /></td>
                      <td><input type="text" readOnly value={val.post_subtitle} className="input-subtitle" /></td>
                      <td><textarea readOnly rows={4} className="textarea-subdescription" value={val.post_subdecrisption || ''} /></td>
                      <td>{val.post_upload_date}</td>
                      <td>
                        <button className="btn btn-edit" onClick={() => openEditModal(val._id)}>
                          Edit
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-delete" onClick={() => postdelete(val._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      {/* Edit Modal */}
      {modalOpen === true && editSubside && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h5>Edit Subside Scheme</h5>
              <button className="close-btn" onClick={closeModal}>&times;</button>
            </div>
            <form className="edit-form" onSubmit={onupdate}>
              <input type="hidden" name="id" value={editSubside._id} />
              <div className="form-group">
                <label>Title:</label>
                <input type="text" name="post_title1" defaultValue={editSubside.post_title} required />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea name="post_description1" defaultValue={editSubside.post_decrisption} required rows={3} />
              </div>
              <div className="form-group">
                <label>Extra Description:</label>
                <textarea name="post_description_etc" defaultValue={editSubside.post_decrisption_etc} rows={2} />
              </div>
              <div className="form-group">
                <label>Sub Title:</label>
                <input type="text" name="post_subtitle1" defaultValue={editSubside.post_subtitle} required />
              </div>
              <div className="form-group">
                <label>Sub Description:</label>
                <textarea name="post_subdescription1" defaultValue={editSubside.post_subdecrisption} required rows={3} />
              </div>
              <div className="modal-buttons">
                <button type="button" onClick={closeModal}>Cancel</button>
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Manage_subside;