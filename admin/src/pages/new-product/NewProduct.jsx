import './newProduct.scss';

const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="addProduct-Title">New Product</h1>
      <form className="addProduct-Form">
        <div className="addProduct-Item">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProduct-Item">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProduct-Item">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProduct-Item">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProduct-Button">Create</button>
      </form>
    </div>
  )
}

export default NewProduct
