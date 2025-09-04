import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import './style/ManageProduct.css';

function Manage_product() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [uploadData, setUploadData] = useState({
    title: '',
    description: '',
    extraDescription: '',
    price: '',
    file: null,
  });
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    Axios.get('http://localhost:1137/api/product_fetch').then(response => {
      setList(response.data);
    });
  };

  const openEditModal = (id) => {
    Axios.post('http://localhost:1137/api/get_product_fetch', { id: id }).then(response => {
      setEditProduct(response.data[0]);
      setModalOpen(true);
    });
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditProduct(null);
    setImagePreview(null); // Reset image preview
    setUploadData({
      title: '',
      description: '',
      extraDescription: '',
      price: '',
      file: null,
    });
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
        <p style="margin-bottom: 24px;">Are you sure you want to delete this product? This action cannot be undone.</p>
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

    confirmDelete().then(confirmed => {
      if (confirmed) {
        Axios.post('http://localhost:1137/api/delete_button', { id: id })
          .then(() => {
            showNotification('Product deleted successfully!');
            fetchProducts();
          })
          .catch(() => {
            showNotification('Error during deletion. Please try again.', false);
          });
      }
    });
  };

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
    Axios.post('http://localhost:1137/api/updated_product', {
      id: editProduct._id,
      post_title1: e.target.post_title1.value,
      post_description1: e.target.post_description1.value,
      post_price1: e.target.post_price1.value
    }).then(() => {
      showNotification("Product updated successfully!");
      closeModal();
      fetchProducts();
    }).catch(() => {
      showNotification("Error updating product. Please try again.", false);
    });
  };

  const onUploadChange = e => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setUploadData(prev => ({ ...prev, file: files[0] }));
    } else {
      setUploadData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadData(prev => ({ ...prev, file }));
      
      // Create image preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const postNewProduct = () => {
    const { title, description, extraDescription, price, file } = uploadData;
    if (!title || !description || !price || !file) {
      alert("Please fill all required fields and select a file.");
      return;
    }
    setUploading(true);
    const current = new Date();
    const upload_date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const type = 6;

    let data = new FormData();
    data.append('P_image', file);
    data.append('P_title', title);
    data.append('P_description', description);
    data.append('P_extradescription', extraDescription);
    data.append('P_price', price);
    data.append('upload_date', upload_date);
    data.append('type', type);

    Axios.post('http://localhost:1137/api/upload_product', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(response => {
      if (response.data.message) {
        showNotification("Product uploaded successfully!");
        fetchProducts();
        closeModal();
      }
    }).catch(() => {
      showNotification("Failed to upload product. Please try again.", false);
    }).finally(() => {
      setUploading(false);
    });
  };

  return (
    <div className="main-page-wrapper">
      <main className="main manage-product-container">
        <section className="section">
          <div className="header-row flex-row-space-between">
            <h2>Manage Product</h2>
            <div className="button-count-container">
              <button className="add-product-btn" onClick={() => setModalOpen('upload')}>
                + Upload Product
              </button>
              <span className="product-count">
                Total Products: {list.length}
              </span>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <table className="product-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Upload Date</th>
                    <th>Edit Post</th>
                    <th>Delete Post</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((val, index) => (
                    <tr key={val._id}>
                      <td>{index + 1}</td>
                      <td><input type="text" readOnly value={val.post_title} className="input-title" /></td>
                      <td><textarea readOnly rows={4} className="textarea-description" value={val.post_decrisption || ''} /></td>
                      <td>₹{val.post_price}</td>
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

          {/* Edit Modal */}
          {modalOpen === true && editProduct && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                  <h5>Edit Product</h5>
                  <button className="close-btn" onClick={closeModal}>&times;</button>
                </div>
                <form className="edit-form" onSubmit={onupdate}>
                  <input type="hidden" name="id" value={editProduct._id} />
                  <label>Title:</label>
                  <input type="text" name="post_title1" defaultValue={editProduct.post_title} required />
                  <label>Description:</label>
                  <textarea name="post_description1" defaultValue={editProduct.post_decrisption} required rows={3} />
                  <label>Price:</label>
                  <input type="number" name="post_price1" defaultValue={editProduct.post_price} required />
                  <div className="modal-buttons">
                    <button type="button" onClick={closeModal}>Cancel</button>
                    <button type="submit">Update</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Enhanced Upload Modal */}
          {modalOpen === "upload" && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content upload-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                  <div className="modal-title-section">
                    <h5>Upload New Product</h5>
                    <p className="modal-subtitle">Add a new product to your inventory</p>
                  </div>
                  <button className="close-btn" onClick={closeModal} aria-label="Close modal">
                    &times;
                  </button>
                </div>

                <div className="upload-form-container">
                  <div className="form-grid">
                    {/* Left Column - Form Fields */}
                    <div className="form-fields">
                      <div className="form-group">
                        <label className="form-label required">
                          Product Title
                          <span className="required-asterisk">*</span>
                        </label>
                        <input 
                          type="text" 
                          className="form-input"
                          placeholder="Enter product title" 
                          value={uploadData.title} 
                          onChange={e => setUploadData(prev => ({ ...prev, title: e.target.value }))}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label required">
                          Description
                          <span className="required-asterisk">*</span>
                        </label>
                        <textarea 
                          rows="4" 
                          className="form-textarea"
                          placeholder="Enter product description" 
                          value={uploadData.description} 
                          onChange={e => setUploadData(prev => ({ ...prev, description: e.target.value }))}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Extra Description</label>
                        <textarea 
                          rows="3" 
                          className="form-textarea"
                          placeholder="Additional product details (optional)" 
                          value={uploadData.extraDescription} 
                          onChange={e => setUploadData(prev => ({ ...prev, extraDescription: e.target.value }))}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label required">
                          Price
                          <span className="required-asterisk">*</span>
                        </label>
                        <div className="price-input-container">
                          <span className="currency-symbol">₹</span>
                          <input 
                            type="number" 
                            className="form-input price-input"
                            placeholder="0.00" 
                            value={uploadData.price} 
                            onChange={e => setUploadData(prev => ({ ...prev, price: e.target.value }))}
                            min="0"
                            step="0.01"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Image Upload */}
                    <div className="image-upload-section">
                      <label className="form-label required">
                        Product Image
                        <span className="required-asterisk">*</span>
                      </label>
                      
                      <div className="file-upload-container">
                        {!imagePreview ? (
                          <div className="file-upload-area">
                            <div className="upload-icon">📷</div>
                            <p className="upload-text">Click to upload image</p>
                            <p className="upload-subtext">PNG, JPG, JPEG up to 10MB</p>
                            <input 
                              type="file" 
                              className="file-input"
                              accept="image/*" 
                              onChange={handleFileChange}
                            />
                          </div>
                        ) : (
                          <div className="image-preview-container">
                            <img 
                              src={imagePreview} 
                              alt="Preview" 
                              className="image-preview"
                            />
                            <div className="image-overlay">
                              <button 
                                type="button" 
                                className="change-image-btn"
                                onClick={() => document.querySelector('.file-input').click()}
                              >
                                Change Image
                              </button>
                              <button 
                                type="button" 
                                className="remove-image-btn"
                                onClick={() => {
                                  setImagePreview(null);
                                  setUploadData(prev => ({ ...prev, file: null }));
                                }}
                              >
                                Remove
                              </button>
                            </div>
                            <input 
                              type="file" 
                              className="file-input hidden"
                              accept="image/*" 
                              onChange={handleFileChange}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="form-actions">
                    <button 
                      type="button" 
                      className="btn btn-secondary" 
                      onClick={closeModal}
                      disabled={uploading}
                    >
                      Cancel
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-primary" 
                      onClick={postNewProduct} 
                      disabled={uploading || !uploadData.title || !uploadData.description || !uploadData.price || !uploadData.file}
                    >
                      {uploading ? (
                        <>
                          <span className="loading-spinner"></span>
                          Uploading...
                        </>
                      ) : (
                        <>
                          <span className="upload-icon">⬆</span>
                          Upload Product
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Manage_product;
