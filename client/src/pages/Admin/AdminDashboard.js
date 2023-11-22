import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Admin Dashboard"}>
      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-md-3">
          
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div
              className="card p-4 shadow rounded"
              style={{
                backgroundColor: "rgb(211, 215, 223)",
              }}
            >
              <h3 className="mb-4 text-primary">Admin Dashboard</h3>
              <div>
                <p>
                  <strong>Name:</strong> {auth?.user?.name}
                </p>
                <p>
                  <strong>Email:</strong> {auth?.user?.email}
                </p>
                <p>
                  <strong>Contact:</strong> {auth?.user?.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
