import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");

  const [timeSlots, setTimeSlots] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const addTimeSlot = () => {
    if (startTime.trim() !== "" && endTime.trim() !== "") {
      setTimeSlots([...timeSlots, { startTime, endTime }]);
      setStartTime("");
      setEndTime("");
    }
  };

  const removeTimeSlot = (index) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots.splice(index, 1);
    setTimeSlots(updatedTimeSlots);
  };
  
  const timeSuggestions = [
    "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"
  ];
  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("photo", photo);
      productData.append("category", category);
      // productData.append("timeSlots", timeSlots);
      // productData.append("startTime", startTime);
      // productData.append("endTime", endTime);
      const { data } = axios.post(
        "/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Doctor</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-primary col-md-12 ">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center"
                  
                  >
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="doctor's name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="Doctor's fee"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

      {/* <div className="timeSlots">
      <h2>Time Slot Form</h2>
      <div>
        <label>Start Time:</label>
        <input
          type="text"
          placeholder="Start time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div>
        <label>End Time:</label>
        <input
          type="text"
          placeholder="End time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <div>
        <button onClick={addTimeSlot}>Add Time Slot</button>
      </div>
      <div>
        <label>Time Slots:</label>
        <ul>
          {timeSlots.map((slot, index) => (
            <li key={index}>
              {`Start Time: ${slot.startTime}, End Time: ${slot.endTime}`}
              <button onClick={() => removeTimeSlot(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div> */}
    <div className="timeSlots">
      <h2 className="mb-4">Time Slot Form</h2>

      <div className="mb-3">
        <label className="form-label">Start Time:</label>
        <input
          type="text"
          list="startTimes"
          className="form-control"
          placeholder="Start time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <datalist id="startTimes">
          {timeSuggestions.map((time, index) => (
            <option key={index} value={time} />
          ))}
        </datalist>
      </div>

      <div className="mb-3">
        <label className="form-label">End Time:</label>
        <input
          type="text"
          list="endTimes"
          className="form-control"
          placeholder="End time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <datalist id="endTimes">
          {timeSuggestions.map((time, index) => (
            <option key={index} value={time} />
          ))}
        </datalist>
      </div>

      <div className="mb-3">
        <button className="btn btn-primary" onClick={addTimeSlot}>
          Add Time Slot
        </button>
      </div>

      <div>
        <label className="form-label">Time Slots:</label>
        <ul className="list-group">
          {timeSlots.map((slot, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{`Start Time: ${slot.startTime}, End Time: ${slot.endTime}`}</span>
              <button className="btn btn-danger btn-sm" onClick={() => removeTimeSlot(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>

              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE DOCTOR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
