import { Meta, Story } from '@storybook/angular';
//#region Components
import { ButtonBaseComponent } from 'src/app/buttons/button-base/button-base.component';
//#endregion
export default {
  component: ButtonBaseComponent,
  title: 'buttons/button-base',
  excludeStories: /.*Data$/,
} as Meta;
const Template: Story = (args) => ({
  props: {
    ...args,
  },
});
export const Default = Template.bind({});
