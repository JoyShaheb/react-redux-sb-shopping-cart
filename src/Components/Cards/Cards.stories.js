import Cards from "./Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "ECommercer/Components/Cards",
  component: Cards,
};

const Template = (args) => (
  <Router>
    <div className="row">
      <Cards {...args} />
    </div>
  </Router>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Card Title",
  column: "col-3",
  price: 45,
  tag: "something here",
  imgSrc:
    "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4sz9pk6xb1kq436n3izo.png",
  rating: 3.9,
};
