import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import landing2 from "../../src/imagesLanding/imgL2.png";
import landing3 from "../../src/imagesLanding/imgL3.jpg";
import landing4 from "../../src/imagesLanding/imgL4.jpg";
import landing5 from "../../src/imagesLanding/imgL5.jpg";
import landing6 from "../../src/imagesLanding/imgL6.jpg";
import landing7 from "../../src/imagesLanding/imgL7.jpg";
import landing8 from "../../src/imagesLanding/imgL8.jpg";
import landing9 from "../../src/imagesLanding/imgL9.jpg";
import landing10 from "../../src/imagesLanding/imgL10.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const [setProducts] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [setTotal] = useState(0);
  const [page] = useState(1);
  const [setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState(-1);

  // Fetch categories and products on component mount
  useEffect(() => {
    getAllCategory();
    getTotal();
    getAllProducts();
  }, []);

  // Fetch all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch total product count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Check if a city is selected
  const isCitySelected = () => {
    return selectedCities.length > 0;
  };

  // Handle city selection/deselection
  const handleCityChange = (city) => {
    if (selectedCities.includes(city)) {
      setSelectedCities(
        selectedCities.filter((selectedCity) => selectedCity !== city)
      );
    } else {
      setSelectedCities([...selectedCities, city]);
    }
  };
  const statesAndCities = [
    {
      state: "Andhra Pradesh",
      cities: [
        { name: "Visakhapatnam", id: 100 },
        { name: "Vijayawada", id: 99 },
        { name: "Tirupati", id: 98 },
      ],
    },
    {
      state: "Arunachal Pradesh",
      cities: [
        { name: "Itanagar", id: 1 },
        { name: "Naharlagun", id: 2 },
      ],
    },
    {
      state: "Assam",
      cities: [
        { name: "Guwahati", id: 3 },
        { name: "Dispur", id: 4 },
        { name: "Silchar", id: 5 },
      ],
    },
    {
      state: "Bihar",
      cities: [
        { name: "Patna", id: 6 },
        { name: "Gaya", id: 7 },
        { name: "Muzaffarpur", id: 8 },
      ],
    },
    {
      state: "Chhattisgarh",
      cities: [
        { name: "Raipur", id: 9 },
        { name: "Bhilai", id: 10 },
        { name: "Bilaspur", id: 11 },
      ],
    },
    {
      state: "Goa",
      cities: [
        { name: "Panaji", id: 12 },
        { name: "Margao", id: 13 },
        { name: "Vasco da Gama", id: 14 },
      ],
    },
    {
      state: "Gujarat",
      cities: [
        { name: "Ahmedabad", id: 15 },
        { name: "Surat", id: 16 },
        { name: "Vadodara", id: 17 },
      ],
    },
    {
      state: "Haryana",
      cities: [
        { name: "Chandigarh", id: 18 },
        { name: "Faridabad", id: 19 },
        { name: "Gurgaon", id: 20 },
      ],
    },
    {
      state: "Himachal Pradesh",
      cities: [
        { name: "Shimla", id: 21 },
        { name: "Manali", id: 22 },
        { name: "Dharamshala", id: 23 },
      ],
    },
    {
      state: "Jharkhand",
      cities: [
        { name: "Ranchi", id: 24 },
        { name: "Jamshedpur", id: 25 },
        { name: "Bokaro", id: 26 },
      ],
    },
    {
      state: "Karnataka",
      cities: [
        { name: "Bangalore", id: 27 },
        { name: "Mysuru", id: 28 },
        { name: "Hubli", id: 29 },
      ],
    },
    {
      state: "Kerala",
      cities: [
        { name: "Thiruvananthapuram", id: 30 },
        { name: "Kochi", id: 31 },
        { name: "Kozhikode", id: 32 },
      ],
    },
    {
      state: "Madhya Pradesh",
      cities: [
        { name: "Bhopal", id: 33 },
        { name: "Indore", id: 34 },
        { name: "Jabalpur", id: 35 },
      ],
    },
    {
      state: "Maharashtra",
      cities: [
        { name: "Mumbai", id: 36 },
        { name: "Pune", id: 37 },
        { name: "Nagpur", id: 38 },
      ],
    },
    {
      state: "Manipur",
      cities: [{ name: "Imphal", id: 39 }],
    },
    {
      state: "Meghalaya",
      cities: [{ name: "Shillong", id: 40 }],
    },
    {
      state: "Mizoram",
      cities: [{ name: "Aizawl", id: 41 }],
    },
    {
      state: "Nagaland",
      cities: [{ name: "Kohima", id: 42 }],
    },
    {
      state: "Odisha",
      cities: [
        { name: "Bhubaneswar", id: 43 },
        { name: "Cuttack", id: 44 },
        { name: "Puri", id: 45 },
      ],
    },
    {
      state: "Punjab",
      cities: [
        { name: "Chandigarh", id: 46 },
        { name: "Ludhiana", id: 47 },
        { name: "Amritsar", id: 48 },
      ],
    },
    {
      state: "Rajasthan",
      cities: [
        { name: "Jaipur", id: 49 },
        { name: "Udaipur", id: 50 },
        { name: "Jodhpur", id: 51 },
      ],
    },
    {
      state: "Sikkim",
      cities: [{ name: "Gangtok", id: 52 }],
    },
    {
      state: "Tamil Nadu",
      cities: [
        { name: "Chennai", id: 53 },
        { name: "Coimbatore", id: 54 },
        { name: "Madurai", id: 55 },
      ],
    },
    {
      state: "Telangana",
      cities: [
        { name: "Hyderabad", id: 56 },
        { name: "Warangal", id: 57 },
      ],
    },
    {
      state: "Tripura",
      cities: [{ name: "Agartala", id: 58 }],
    },
    {
      state: "Uttar Pradesh",
      cities: [
        { name: "Lucknow", id: 59 },
        { name: "Kanpur", id: 60 },
        { name: "Agra", id: 61 },
      ],
    },
    {
      state: "Uttarakhand",
      cities: [
        { name: "Dehradun", id: 62 },
        { anme: "Haridwar", id: 63 },
        { name: "Nainital", id: 64 },
      ],
    },
    {
      state: "West Bengal",
      cities: [
        { name: "Kolkata", id: 65 },
        { name: "Howrah", id: 66 },
        { name: "Durgapur", id: 67 },
      ],
    },
    // Union Territories
    {
      state: "Andaman and Nicobar Islands",
      cities: [{ name: "Port Blair", id: 68 }],
    },
    {
      state: "Chandigarh",
      cities: [{ name: "Chandigarh", id: 69 }],
    },
    {
      state: "Dadra and Nagar Haveli and Daman and Diu",
      cities: [
        { name: "Daman", id: 70 },
        { name: "Diu", id: 71 },
      ],
    },
    {
      state: "Lakshadweep",
      cities: [{ name: "Kavaratti", id: 5 }],
    },
    {
      state: "Delhi",
      cities: [{ name: "New Delhi", id: 10 }],
    },
    {
      state: "Puducherry",
      cities: [{ name: "Puducherry", id: 11 }],
    },
  ];
  console.log(showDropdown);
  return (
    <Layout title={"Hexabells_Doc_App"}>
      <div className="landingpage-img">
        <div className="city-selection-container">
          {/* Dropdown Button */}
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => {
                setShowDropdown((prev) => !prev);
              }}
            >
              Select State
            </button>
            {showDropdown && (
              <div className={`dropdown-content  `}>
                {statesAndCities.map((stateData, index) => (
                  <div key={index} className="state-container">
                    <p>{stateData.state}</p>
                    <div className="city-list">
                      {stateData.cities.map((city, cityIndex) => (
                        <label key={cityIndex}>
                          <input
                            type="checkbox"
                            checked={selected === city.id}
                            onChange={() => {
                              setSelected((prev) =>
                                prev === city.id ? -1 : city.id
                              );
                              handleCityChange(city);
                            }}
                          />
                          {city?.name}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Online Appointment button */}
          <button
            className={`doctor-btn ${isCitySelected() ? "" : "disabled"}`}
            onClick={() => isCitySelected() && navigate("/appointments")}
            disabled={!isCitySelected()}
          >
            Doctors
          </button>
        </div>
        <h1>Comprehensive Medical Care In Delhi</h1>
        <p>
          Dharamshila Narayana Superspeciality Hospital, Delhi combines some of
          the most experienced and skilled superspecialists in the region with
          advanced facilities to provide comprehensive medical care.
        </p>
      </div>
      <div className="d-flex">
        <h3>Why Choose Dharamshila Narayana Superspeciality Hospital, Delhi</h3>
        <h6>World-Class Quality</h6>
        <p>
          Dharamshila Narayana Superspeciality Hospital, Delhi is designed to
          meet the national and international healthcare standards and is
          committed to providing quality medical care and excellent patient
          service.
        </p>

        <h3>Multispeciality Expertise</h3>
        <p>
          The facility brings together an expert team of superspecialist doctors
          who work together with a compassionate nursing staff to provide
          patients accurate diagnosis and medical care.
        </p>
        <h3>State-Of-The-Art Infrastructure</h3>
        <p>
          The hospital has high-end technological infrastructure and medical
          facilities including advanced Operation Theatres, Digital X-Ray, and
          Critical Care Units.
        </p>

        <img src={landing2} width={300} />
      </div>
      <div className="specialities">
        <h1>SOME OF OUR KEY SPECIALITIES ARE:</h1>
        <div>
          <h3>Cardiology & Cardiac Surgery</h3>
          <p>
            At Narayana Health, we have a team of highly qualified and
            experienced cardiologists, interventional cardiologists, and cardiac
            surgeons who provide comprehensive care for a wide range of cardiac
            conditions in people of all ages. Treatment for Cardiac conditions
            offered at Narayana Health ranges from medication, treatment of
            underlying conditions, interventional procedures to both minimally
            invasive and open heart surgery. To provide comprehensive care to
            patients, the team works closely with allied departments at Narayana
            Health to ensure accurate diagnosis are reached and appropriate pre
            and post treatment care is provided.
          </p>
          <img src={landing3} width={300} />
        </div>
        <div>
          <h3>Cardiology & Cardiac Surgery</h3>
          <p>
            At Narayana Health, we have a team of highly qualified and
            experienced cardiologists, interventional cardiologists, and cardiac
            surgeons who provide comprehensive care for a wide range of cardiac
            conditions in people of all ages. Treatment for Cardiac conditions
            offered at Narayana Health ranges from medication, treatment of
            underlying conditions, interventional procedures to both minimally
            invasive and open heart surgery. To provide comprehensive care to
            patients, the team works closely with allied departments at Narayana
            Health to ensure accurate diagnosis are reached and appropriate pre
            and post treatment care is provided.
          </p>
          <img src={landing4} width={300} />
        </div>
        <div>
          <h3>Cardiology & Cardiac Surgery</h3>
          <p>
            At Narayana Health, we have a team of highly qualified and
            experienced cardiologists, interventional cardiologists, and cardiac
            surgeons who provide comprehensive care for a wide range of cardiac
            conditions in people of all ages. Treatment for Cardiac conditions
            offered at Narayana Health ranges from medication, treatment of
            underlying conditions, interventional procedures to both minimally
            invasive and open heart surgery. To provide comprehensive care to
            patients, the team works closely with allied departments at Narayana
            Health to ensure accurate diagnosis are reached and appropriate pre
            and post treatment care is provided.
          </p>
          <img src={landing5} width={300} />
        </div>
        <div>
          <h3>Cardiology & Cardiac Surgery</h3>
          <p>
            At Narayana Health, we have a team of highly qualified and
            experienced cardiologists, interventional cardiologists, and cardiac
            surgeons who provide comprehensive care for a wide range of cardiac
            conditions in people of all ages. Treatment for Cardiac conditions
            offered at Narayana Health ranges from medication, treatment of
            underlying conditions, interventional procedures to both minimally
            invasive and open heart surgery. To provide comprehensive care to
            patients, the team works closely with allied departments at Narayana
            Health to ensure accurate diagnosis are reached and appropriate pre
            and post treatment care is provided.
          </p>
          <img src={landing6} width={300} />
        </div>
        <div>
          <h3>Cardiology & Cardiac Surgery</h3>
          <p>
            At Narayana Health, we have a team of highly qualified and
            experienced cardiologists, interventional cardiologists, and cardiac
            surgeons who provide comprehensive care for a wide range of cardiac
            conditions in people of all ages. Treatment for Cardiac conditions
            offered at Narayana Health ranges from medication, treatment of
            underlying conditions, interventional procedures to both minimally
            invasive and open heart surgery. To provide comprehensive care to
            patients, the team works closely with allied departments at Narayana
            Health to ensure accurate diagnosis are reached and appropriate pre
            and post treatment care is provided.
          </p>
          <img src={landing7} width={300} />
        </div>
        <div>
          <h3>Cardiology & Cardiac Surgery</h3>
          <p>
            At Narayana Health, we have a team of highly qualified and
            experienced cardiologists, interventional cardiologists, and cardiac
            surgeons who provide comprehensive care for a wide range of cardiac
            conditions in people of all ages. Treatment for Cardiac conditions
            offered at Narayana Health ranges from medication, treatment of
            underlying conditions, interventional procedures to both minimally
            invasive and open heart surgery. To provide comprehensive care to
            patients, the team works closely with allied departments at Narayana
            Health to ensure accurate diagnosis are reached and appropriate pre
            and post treatment care is provided.
          </p>
          <img src={landing8} width={300} />
        </div>
        <div>
          <h3>Cardiology & Cardiac Surgery</h3>
          <p>
            At Narayana Health, we have a team of highly qualified and
            experienced cardiologists, interventional cardiologists, and cardiac
            surgeons who provide comprehensive care for a wide range of cardiac
            conditions in people of all ages. Treatment for Cardiac conditions
            offered at Narayana Health ranges from medication, treatment of
            underlying conditions, interventional procedures to both minimally
            invasive and open heart surgery. To provide comprehensive care to
            patients, the team works closely with allied departments at Narayana
            Health to ensure accurate diagnosis are reached and appropriate pre
            and post treatment care is provided.
          </p>
          <img src={landing9} width={300} />
        </div>
        <div>
          <h3>Cardiology & Cardiac Surgery</h3>
          <p>
            At Narayana Health, we have a team of highly qualified and
            experienced cardiologists, interventional cardiologists, and cardiac
            surgeons who provide comprehensive care for a wide range of cardiac
            conditions in people of all ages. Treatment for Cardiac conditions
            offered at Narayana Health ranges from medication, treatment of
            underlying conditions, interventional procedures to both minimally
            invasive and open heart surgery. To provide comprehensive care to
            patients, the team works closely with allied departments at Narayana
            Health to ensure accurate diagnosis are reached and appropriate pre
            and post treatment care is provided.
          </p>
          <img src={landing10} width={300} />
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
