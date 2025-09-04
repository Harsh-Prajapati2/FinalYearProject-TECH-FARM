import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Layout and Dashboard
import DashboardLayout from './pages/DashboardLayout';
import Dashboard from './pages/Dashboard';

// Upload Pages
import { default as UploadAgriculture } from './pages/upload_agriculture';
import { default as UploadFruits } from './pages/fruits';
import { default as UploadVegetable } from './pages/upload_vegetable';
import { default as UploadGardening } from './pages/upload_gardening';
import { default as UploadFertilizer } from './pages/upload_fertilizer';
import { default as UploadProduct } from './pages/upload_product';
import { default as UploadEquipment } from './pages/upload_equipment';
import { default as UploadScheme } from './pages/upload_scheme';
import { default as UploadDisease } from './pages/upload_disease';
import { default as UploadSubside } from './pages/upload_subside';

// Management Pages
import { default as ManageAgriculture } from './pages/manage_agriculture';
import { default as ManageFruit } from './pages/manage_fruit';
import { default as ManageVegetable } from './pages/manage_vegetable';
import { default as ManageGardening } from './pages/manage_gardening';
import { default as ManageFertilizer } from './pages/manage_fertilizer';
import { default as ManageDisease } from './pages/manage_disease';
import { default as ManageProduct } from './pages/manage_product';
import { default as ManageEquipment } from './pages/manage_equipment';
import { default as ManageScheme } from './pages/manage_scheme';
import { default as ManageSubside } from './pages/manage_subside';

// Other Pages
import Profile from './pages/profile';
import Payment from './pages/payment';
import Review from './pages/review';
import Support from './pages/support';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Upload Routes */}
            <Route path='/Agriculture' element={<UploadAgriculture />} />
            <Route path='/fruits' element={<UploadFruits />} />
            <Route path='/Vegetable' element={<UploadVegetable />} />
            <Route path='/Gardening' element={<UploadGardening />} />
            <Route path='/Fertilizer' element={<UploadFertilizer />} />
            <Route path='/Product' element={<UploadProduct />} />
            <Route path='/Equipment' element={<UploadEquipment />} />
            <Route path='/Scheme' element={<UploadScheme />} />
            <Route path='/Disease' element={<UploadDisease />} />
            <Route path='/Subside' element={<UploadSubside />} />

            {/* Management Routes */}
            <Route path='/Manage_agriculture' element={<ManageAgriculture />} />
            <Route path='/Manage_fruit' element={<ManageFruit />} />
            <Route path='/Manage_vegetable' element={<ManageVegetable />} />
            <Route path='/Manage_gardening' element={<ManageGardening />} />
            <Route path='/Manage_fertilizer' element={<ManageFertilizer />} />
            <Route path='/Manage_disease' element={<ManageDisease />} />
            <Route path='/Manage_product' element={<ManageProduct />} />
            <Route path='/Manage_equipment' element={<ManageEquipment />} />
            <Route path='/Manage_scheme' element={<ManageScheme />} />
            <Route path='/Manage_subside' element={<ManageSubside />} />

            {/* Other Routes */}
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Payment' element={<Payment />} />
            <Route path='/Review' element={<Review />} />
            <Route path='/Support' element={<Support />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
