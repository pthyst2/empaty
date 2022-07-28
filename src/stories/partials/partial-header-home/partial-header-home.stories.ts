import { moduleMetadata, Meta, Story } from '@storybook/angular';

//#region Solids
import { solidNavHeaderHome } from 'src/app/data/solids/solidNavHeaderHome';
import { solidAppInfo } from 'src/app/data/solids/solidAppInfo';
//#endregion

//#region Mocks
import { mockUser } from 'src/app/data/mocks/mockUser';
//#endregion

//#region Modules
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//#endregion

//#region Components
import { PartialHeaderHomeComponent } from 'src/app/partials/partial-header-home/partial-header-home.component';
import { ButtonBaseComponent } from 'src/app/buttons/button-base/button-base.component';
//#endregion

export default {
  component: PartialHeaderHomeComponent,
  decorators: [
    moduleMetadata({
      declarations: [PartialHeaderHomeComponent, ButtonBaseComponent],
      imports: [CommonModule, RouterModule.forRoot([], { useHash: true })],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '',
        },
      ],
    }),
  ],
  title: 'partials/partial-header-home',
  excludeStories: /.*Data$/,
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  logoUrl: solidAppInfo.logoUrl,
  navs: solidNavHeaderHome,
  user: {},
};
export const LoggedIn = Template.bind({});
LoggedIn.args = {
  logoUrl: solidAppInfo.logoUrl,
  navs: solidNavHeaderHome,
  user: mockUser,
};
