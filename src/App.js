const fetchRecords = async () => {
  const response = await fetch("http://localhost:5115/api/users");
  const data = await response.json();
  setRecords(data);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (editId) {
    await fetch(`http://localhost:5115/api/users/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setEditId(null);
  } else {
    await fetch("http://localhost:5115/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  }
  setFormData({
    name: "",
    address: "",
    state: "",
    district: "",
    dob: "",
    language: "",
  });
  fetchRecords();
};

const handleDelete = async (id) => {
  await fetch(`http://localhost:5115/api/users/${id}`, { method: "DELETE" });
  fetchRecords();
};
