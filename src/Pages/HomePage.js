import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_All_Products } from "../redux/actions/Actions";
import LoadingComponent from "../Components/LoadingComponent/LoadingComponent";
import Cards from "../Components/Cards/Cards";

const HomePage = () => {
  let products = useSelector((state) => state?.store?.All_Products);
  let dispatch = useDispatch();
  let [isloading, setLoading] = useState();
  let api = process.env.REACT_APP_URL;

  console.log(products);

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setLoading(true);
        dispatch(get_All_Products(res?.data));
      })
      .then(() => setLoading(true))
      .catch((err) => console.log(err));
  }, [api]);

  return (
    <div>
      {isloading ? (
        <div className="container">
          <div className="row gap-3 justify-content-center">
            {products?.map((x) => {
              let { category, description, image, price, rating, id, title } =
                x;
              return (
                <Cards
                  key={id}
                  column="col-2"
                  imgSrc={image}
                  price={price}
                  tag={category}
                  title={title}
                  rating={rating?.rate}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default HomePage;
