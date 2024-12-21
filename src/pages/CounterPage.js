import React from "react";
import Counter from "../component/conunter/Counter";
import Layout from "../component/layout/Layout";

const CounterPage = () => {
  return (
    <Layout>
      <div className=" container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 mb-5">
            <Counter />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CounterPage;
