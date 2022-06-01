import Badge from "./Badge";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default {
  title: "ECommercer/Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      options: [
        "bg-dark",
        "bg-primary",
        "bg-secondary",
        "bg-danger",
        "bg-warning",
        "bg-success",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["fs-1", "fs-2", "fs-3", "fs-4", "fs-5", "fs-6"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "bg-dark",
  label: "Badge here",
  size: "fs-6",
  top: "10px",
  right: "10px",
  left: "",
  bottom: "",
  icon: "bi-star-fill",
};
