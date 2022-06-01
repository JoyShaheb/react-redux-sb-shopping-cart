// Button.stories.js|jsx|ts|tsx

import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ECommercer/Components/Navbar",
  component: Navbar,
};

const Template = (args) => (
  <Router>
    <Navbar {...args} />
  </Router>
);

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
