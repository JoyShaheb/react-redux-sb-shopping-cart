import LoadingComponent from "./LoadingComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default {
  title: "ECommercer/Components/LoadingComponent",
  component: LoadingComponent,
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

const Template = (args) => <LoadingComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "loading",
};
