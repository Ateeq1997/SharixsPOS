import React, { useState } from "react";
import "../assets/css/addproduct.css";

const AddProduct = () => {
    const [categories, setCategories] = useState(["Category 1", "Category 2"]);
    const [brands, setBrands] = useState(["Brand 1", "Brand 2"]);
    const [units, setUnits] = useState(["Unit 1", "Unit 2"]);
    const [showPopup, setShowPopup] = useState(false);
    const [newItem, setNewItem] = useState("");
    const [currentType, setCurrentType] = useState("");
  
    const handleAddClick = (type) => {
      setCurrentType(type);
      setShowPopup(true);
    };
  
    const handleSave = () => {
      if (newItem.trim()) {
        if (currentType === "Category") setCategories([...categories, newItem]);
        if (currentType === "Brand") setBrands([...brands, newItem]);
        if (currentType === "Unit") setUnits([...units, newItem]);
      }
      setShowPopup(false);
      setNewItem("");
    };
    const [images, setImages] = useState([]);

    const handleImageUpload = (event) => {
      const files = Array.from(event.target.files);
      setImages([...images, ...files]);
    };
  
    const removeImage = (index) => {
      setImages(images.filter((_, i) => i !== index));
    };
    const [productType, setProductType] = useState("single");
    const [variantAttribute, setVariantAttribute] = useState("");
    const [variants, setVariants] = useState([]);
  
    const addVariant = () => {
      if (variantAttribute) {
        setVariants([...variants, { id: Date.now(), value: variantAttribute }]);
        setVariantAttribute("");
      }
    };
  
    const removeVariant = (id) => {
      setVariants(variants.filter((variant) => variant.id !== id));
    };
  
    const [checkboxes, setCheckboxes] = useState({
      warranties: false,
      manufacturer: false,
      expiry: true,
    });
  
    const [discountType, setDiscountType] = useState("");
    const [quantityAlert, setQuantityAlert] = useState("");
    const [manufacturedDate, setManufacturedDate] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
  
    const toggleCheckbox = (name) => {
      setCheckboxes({ ...checkboxes, [name]: !checkboxes[name] });
    };
  
  return (
    <div className="container">
      <div className="product-form">
        <h2 className="title">New Product</h2>
        <p className="subtitle">Create new product</p>
        
        <div className="form-section">
          <h3 className="section-title">Product Information</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>Store</label>
              <select>
                <option>Choose</option>
                <option>Store 1</option>
                <option>Store 2</option>
              </select>
            </div>
            <div className="form-group">
              <label>Warehouse</label>
              <select>
                <option>Choose</option>
                <option>Warehouse 1</option>
                <option>Warehouse 2</option>
              </select>
            </div>
            <div className="form-group">
              <label>Product Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Slug</label>
              <input type="text" />
            </div>
            <div className="form-group flex">
              <div className="input-group">
                <label>SKU</label>
                <input type="text" />
              </div>
              <button className="btn-generate">Generate Code</button>
            </div>
            <div className="form-group1">
            <label>Category</label>
              <div className="flex">
                <select>
                  {categories.map((cat, index) => (
                    <option key={index}>{cat}</option>
                  ))}
                </select>
                <button className="btn-add" onClick={() => handleAddClick("Category")}>+ Add</button>
              </div>
            </div>
    
            <div className="form-group">
              <label>Sub Category</label>
              <select>
                <option>Choose</option>
                <option>Sub Category 1</option>
                <option>Sub Category 2</option>
              </select>
            </div>
            <div className="form-group">
              <label>Sub Sub Category</label>
              <select>
                <option>Choose</option>
                <option>Sub Sub Category 1</option>
                <option>Sub Sub Category 2</option>
              </select>
            </div>
            <div className="form-group1">
              <label>Brand</label>
              <div className="flex">
                <select>
                  {brands.map((brand, index) => (
                    <option key={index}>{brand}</option>
                  ))}
                </select>
                <button className="btn-add" onClick={() => handleAddClick("Brand")}>+ Add</button>
              </div>
            </div>
            <div className="form-group1">
              <label>Unit</label>
              <div className="flex">
                <select>
                  {units.map((unit, index) => (
                    <option key={index}>{unit}</option>
                  ))}
                </select>
                <button className="btn-add" onClick={() => handleAddClick("Unit")}>+ Add</button>
              </div>
            </div>
            <div className="form-group">
              <label>Selling Type</label>
              <select>
                <option>Choose</option>
                <option>Selling Type 1</option>
                <option>Selling Type 2</option>
              </select>
            </div>
            <div className="form-group">
              <label>Barcode Symbology</label>
              <select>
                <option>Choose</option>
                <option>Barcode 1</option>
                <option>Barcode 2</option>
              </select>
            </div>
            <div className="form-group flex">
              <div className="input-group">
                <label>Item Code</label>
                <input type="text" placeholder="Please Enter Item Code" />
              </div>
              <button className="btn-generate">Generate Code</button>
            </div>
            <div className="form-group">
  <label>Description</label>
  <textarea className="description-box" rows="5" placeholder="Enter product description..."></textarea>
</div>
          </div>
        </div>

        <div className="form-section">
      <h3 className="section-title">⚙️ Pricing & Stocks</h3>
      <div className="form-group">
  <label>Product Type</label>
  <div className="radio-group">
    <div className="radio-option">
      <input
        type="radio"
        name="productType"
        id="single"
        checked={productType === "single"}
        onChange={() => setProductType("single")}
      />
      <label htmlFor="single">Single Product</label>
    </div>
    <div className="radio-option">
      <input
        type="radio"
        name="productType"
        id="variable"
        checked={productType === "variable"}
        onChange={() => setProductType("variable")}
      />
      <label htmlFor="variable">Variable Product</label>
    </div>
  </div>
</div>

      {productType === "single" && (
        <div className="single-product-form">
          <label>Quantity</label>
          <input type="number" />
          <label>Price</label>
          <input type="text" />
          <div className="form-group">
              <label>Tax Type</label>
              <select>
                <option>Choose</option>
                <option>Exclusive</option>
            <option>Inclusive</option>
              </select>
            </div>
            <div className="form-group">
              <label>Discount Type</label>
              <select>
              <option>Choose</option>
            <option>Percentage</option>
            <option>Cash</option>
              </select>
            </div>

          <label>Discount Value</label>
          <input type="number" />
          <label>Quantity Alert</label>
          <input type="number" />
        </div>
      )}
      {productType === "variable" && (
        <div className="variable-product-form">
          <h3>Variant Attributes</h3>
          <input
            type="text"
            placeholder="Enter attribute (e.g., Color, Size)"
            value={variantAttribute}
            onChange={(e) => setVariantAttribute(e.target.value)}
          />
          <button className="btn-add" onClick={addVariant}>+ Add</button>

          <div className="variant-list">
            {variants.map((variant) => (
              <span key={variant.id} className="variant-tag">
                {variant.value} <button onClick={() => removeVariant(variant.id)}>x</button>
              </span>
            ))}
          </div>

          <table className="variations-table">
            <thead>
              <tr>
                <th>Variation</th>
                <th>Variant Value</th>
                <th>SKU</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {variants.map((variant) => (
                <tr key={variant.id}>
                  <td>Color</td>
                  <td>{variant.value}</td>
                  <td><input type="text" placeholder="SKU" /></td>
                  <td>
                    <button>-</button>
                    <input type="number" defaultValue={1} />
                    <button>+</button>
                  </td>
                  <td><input type="number" placeholder="Price" /></td>
                  <td>
                    <button>✔</button>
                    <button>+</button>
                    <button>🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <h3 className="section-title">🖼️ Images</h3>
      <div className="image-upload-section">
        <label className="upload-box">
          <input type="file" multiple onChange={handleImageUpload} hidden />
          <span>+ Add Images</span>
        </label>
        <div className="image-preview">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={URL.createObjectURL(image)} alt="Uploaded" />
              <button className="delete-btn" onClick={() => removeImage(index)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="form-section">
    <h3 className="section-title">Custom Fields</h3>
      <div className="checkbox-group">
        <label>
          <input type="checkbox" checked={checkboxes.warranties} onChange={() => toggleCheckbox("warranties")} />
          Warranties
        </label>
        <label>
          <input type="checkbox" checked={checkboxes.manufacturer} onChange={() => toggleCheckbox("manufacturer")} />
          Manufacturer
        </label>
        <label>
          <input type="checkbox" checked={checkboxes.expiry} onChange={() => toggleCheckbox("expiry")} />
          Expiry
        </label>
      </div>

      <div className="form-group">
        <label>Discount Type</label>
        <select value={discountType} onChange={(e) => setDiscountType(e.target.value)}>
          <option>Choose</option>
          <option>Percentage</option>
          <option>Cash</option>
        </select>
      </div>

      <div className="form-group">
        <label>Quantity Alert</label>
        <input type="number" value={quantityAlert} onChange={(e) => setQuantityAlert(e.target.value)} />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Manufactured Date</label>
          <input type="date" value={manufacturedDate} onChange={(e) => setManufacturedDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
        </div>
      </div>
    </div>
    <div className="form-buttons">
        <button className="cancel-btn">Cancel</button>
        <button className="save-btn">Save Product</button>
      
        <button className="btn-back">Back to Product</button>
      </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add {currentType}</h3>
            <input 
              type="text" 
              placeholder={`Enter ${currentType} Name`} 
              value={newItem} 
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button className="btn-save" onClick={handleSave}>Save</button>
            <button className="btn-close" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default AddProduct;
