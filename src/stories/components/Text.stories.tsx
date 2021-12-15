import { ComponentMeta, ComponentStory } from "@storybook/react";
import MbText from "../../components/text/Text";

export default {
  title: "Components/Text",
  component: MbText,
  argTypes: {},
} as ComponentMeta<typeof MbText>;

const Template: ComponentStory<typeof MbText> = (args) => (
  <MbText {...args}>
    This is your simple Text. Change the className to get different styles.
  </MbText>
);

export const Text = Template.bind({});
Text.args = {
  className: "big-p",
};
