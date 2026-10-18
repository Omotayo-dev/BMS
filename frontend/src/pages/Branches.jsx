import { useState } from "react";
function Branches() {

    const [showForm, setShowForm] =  useState(false);
    const [viewingBranch, setViewingBranch] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All")

    //to edit branch
    const [editingBranchId, setEditingBranchId] = useState(null);

//branch state

    const [branches, setBranches] = useState([
  {
    id: 1,
    name: "Ibadan Head Office",
    code: "IBD-001",
    location: "Ibadan, Oyo State",
    manager: "Mr. Wale Dahunsi",
    status: "Active",
  },
  {
    id: 2,
    name: "Abuja Branch",
    code: "ABJ-001",
    location: "Abuja, FCT",
    manager: "Mr. Sola",
    status: "Active",
  },
  {
    id: 3,
    name: "Kano Branch",
    code: "KAN-001",
    location: "Kano, Kano State",
    manager: "Not Assigned",
    status: "Active",
  },
]);

const [formData, setFormData] = useState({
    name:"",
    code: "",
    state: "",
    phone: "",
    address: "",
    manager: "",
    status: "Active",

});

const [errorMessage, setErrorMessage] = useState("");


//Reset form to empty
const resetForm =() => {
    setFormData({
    name: "",
    code: "",
    state: "",
    phone: "",
    address: "",
    manager: "",
    status: "Active",
  });

  setErrorMessage("");
  }

const handleChange = (event) => {
    const {name, value} = event.target;

    setFormData({
        ...formData, [name]: value,

    })

    setErrorMessage("")
    
};

const handleSubmit = (event) => {
  event.preventDefault();

  if (!formData.name.trim() )
  {setErrorMessage("Branch Name is Required")
    return;
  }
  else if (!formData.code.trim()){ setErrorMessage(" Branch Code is required");
    return;
  }else if (!formData.state.trim())
{
    setErrorMessage("Branch   State is required")
    return
  }
  
  
  const enteredCode = formData.code.trim().toUpperCase();
  
  const duplicateCode = branches.some((branch) => 
  (branch.code || "").trim().toUpperCase()=== enteredCode && branch.id !== editingBranchId);
 
  if (duplicateCode) {
    setErrorMessage ("This branch code already Exist. Please enter a different Code");

    return;

  }

  setErrorMessage("");

  if (editingBranchId !== null) {
    // EDIT EXISTING BRANCH
    setBranches(
      branches.map((branch) =>
        branch.id === editingBranchId
          ? {
              ...branch,
              name: formData.name,
              code: formData.code.trim().toUpperCase(),
              location: formData.state,
              manager: formData.manager || "Not Assigned",
              phone: formData.phone,
              address: formData.address,

              status: formData.status,
            }
          : branch
      )
    );
  } else {
    // ADD NEW BRANCH
    const newBranch = {
      id: Date.now(),
      name: formData.name,
      code: formData.code.trim().toUpperCase(),
      location: formData.state,
      phone: formData.phone,
      address: formData.address,
      manager: formData.manager || "Not Assigned",
      status: formData.status,
    };
      console.log("New Branch Code:", newBranch.code)
    setBranches([...branches, newBranch]);
  }

  setFormData({
    name: "",
    code: "",
    state: "",
    phone: "",
    address: "",
    manager: "",
    status: "Active",
  });

  

  setEditingBranchId(null);
  setShowForm(false);
};


const handleDeactivate = (id) => {
  setBranches (
    branches.map((branch) => branch.id === id
  ? {...branch, status: "Inactive"} 
: branch));
};

//handle Reactivate
const handleReactivate = (id) => {
  setBranches(
      branches.map((branch) =>
        branch.id === id
      ? {...branch, status:"Active"} : branch )
  )
}

const handleEdit = (branch)=> {
setFormData({
  name: branch.name,
  code: branch.code,
  state: branch.location,
  phone: branch.phone,
  address: branch.address,
  manager: branch.manager,
  status: branch.status,
})


setEditingBranchId(branch.id);
setShowForm(true);



}

const filteredBranches = branches.filter((branch) => {
  const search = searchTerm.toLowerCase();

  const matchesSearch =
   branch.name.toLowerCase().includes(search) || 
   branch.code.toLowerCase().includes(search) || 
   (branch.location || "").toLowerCase().includes(search) ||
   (branch.manager || "").toLowerCase().includes(search);

   const matchesStatus = statusFilter=== "All" || (branch.status || "").toLowerCase() === statusFilter.toLowerCase();

   return matchesSearch && matchesStatus;
})
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>Branches</h2>
          <p>Manage company branches and their locations.</p>
        </div>

        <button className="primary-button" onClick={() =>
          { resetForm(); 
             setShowForm(!showForm)}}>
          + Add Branch
        </button>
      </div>

      <div className="branch-table-container">

<div className="branch-controls">

{/* Search Box */}

<input type = "text" className="branch-search" placeholder="Search by name, code , location or manager"
              value = {searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
/> 

{/* Status Filter*/ }
<select className="branch-status-filter" value={statusFilter}  onChange={(e) => setStatusFilter(e.target.value)}>

<option value="All"> All Branches</option>
<option value="active"> Active Branches </option>
<option value="inactive"> Inactive Branches </option>

  </select>
</div>

        {showForm && (
  <div className="branch-form-container">
    <h3>{editingBranchId !== null? "Edit Branch" : "Add New Branch"}</h3>

    <form onSubmit={handleSubmit}>

      {errorMessage && (
        <p className="error-message" style={{color:"red"}}>
          {errorMessage}</p>
      )}

      <div className="form-grid">
        <div className="form-group">
          <label>Branch Name</label>
          <input
            type="text"
            name = "name"
            value = {formData.name}
            onChange={handleChange}
            placeholder="e.g. Lagos Branch"
          />
        </div>

        <div className="form-group">
          <label>Branch Code</label>
          <input
            type="text"
            name = "code"
            value = {formData.code}
            onChange={handleChange}
            placeholder="e.g. LOS-001"
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name = "state"
            value = {formData.state}
            onChange={handleChange}
            placeholder="e.g. Lagos"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name = "phone"
            value = {formData.phone}
            onChange={handleChange}
            placeholder="e.g. 08012345678"
          />
        </div>

        <div className="form-group full-width">
          <label>Address</label>
          <input
            type="text"
            name = "address"
            value = {formData.address}
            onChange={handleChange}
            placeholder="Enter branch address"
          />
        </div>

        <div className="form-group">
          <label>Branch Manager</label>
          <input
            type="text"
            name = "manager"
            value = {formData.manager}
            onChange={handleChange}
            placeholder="Enter manager name"
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
          name = "status"
            value = {formData.status}
            onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="cancel-button"
          onClick={() => {
            resetForm();
            setShowForm(false)}
          }
        >
          Cancel
        </button>

        <button type="submit" className="primary-button">
          {editingBranchId !==null? "Update Branch"  : "Save Branch"}
        </button>
      </div>
    </form>
  </div>
)}



        <table className="data-table">
          <thead>
            <tr>
              <th>Branch</th>
              <th>Branch Code</th>
              <th>Location</th>
              <th>Manager</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
  {filteredBranches.map((branch) => (
    <tr key={branch.id}>
      <td>{branch.name}</td>
      <td>{branch.code.toUpperCase()}</td>
      <td>{branch.location}</td>
      <td>{branch.manager}</td>

      <td>
        <span
          className={
            branch.status === "Active"
              ? "status-active"
              : "status-inactive"
          }
        >
          {branch.status}
        </span>
      </td>

      <td>

            <button className="action-button"
          onClick={() => handleEdit(branch)}
          > Edit</button>
          

        <button className="action-button" onClick={()=> setViewingBranch(branch)}>
          View
        </button>
      
          { branch.status === "Active"? (
          <button className="action-button"
          onClick={() => handleDeactivate(branch.id)}
          > Deactivate</button>) :

          (<button className="action-button"
          onClick={() => handleReactivate(branch.id)}
          > Re-Activate</button>)
          }
          </td>

    </tr>
  ))}
</tbody>
        </table>
      </div>
    
 


{viewingBranch && (
  <div className="branch-view-overlay">
    <div className="branch-view-model">
      <h2>BRANCH DETAILS</h2>

      <p> 
        <strong> Branch Name: </strong>  {viewingBranch.name}
      </p>

      <p> 
        <strong> Branch Code: </strong>  {viewingBranch.code}
      </p>

      <p> 
        <strong> State: </strong>    {viewingBranch.location}
      </p>

      <p> 
        <strong> Phone Number: </strong> {viewingBranch.phone || "NOT PROVIDED"}
      </p>

      <p> 
        <strong> Branch Address: </strong>  {viewingBranch.address || "NOT PROVIDED"}
      </p>

      <p> 
        <strong> Branch Manager: </strong> {viewingBranch.manager || "NOT ASSIGNED"}
      </p>

      <p> 
        <strong> Status: </strong> {viewingBranch.status}
      </p>

<button className="action-button" onClick={ ()=> setViewingBranch(null)}>
  Close
</button>


    </div>
  </div>
)}
</div>    );
}

export default Branches;