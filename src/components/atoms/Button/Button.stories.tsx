
import React, { ComponentProps } from "react";
import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react/types-6-0";
import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <>
    <Button />
  </>
);

export const Contained = Template.bind({});