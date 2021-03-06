import { NgModule } from '@angular/core';
import { DatePipe } from "@angular/common";
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpansionPanelsModule } from 'ng2-expansion-panels';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ProfilePage } from './profile';
import { GuestProfilePage } from './guest-profile/guest-profile';
import { GuestEditProfilePage } from './guest-edit.profile/guest-edit.profile';
import { FormEducation } from './education/form.education';
import { FormAddress } from './address/form.address';
import { AdditionalInfoComponent } from './additional-info/additional-info';
import { FormExperience } from './experience/form.experience';
import { SkillTagsComponent } from './skill-tags/skill-tags';
import { OverflowMenuComponent } from './overflowmenu/menu.overflow.component';
import { ContainerService } from 'sunbird';
import { SettingsPageModule } from '../settings/settings.module';
import { UserSearchComponent } from './user-search/user-search';
import { DirectivesModule } from '../../directives/directives.module';
import { ComponentsModule } from "../../component/components.module";
import { IonicImageLoader } from 'ionic-image-loader';
import { ImagePicker } from './imagepicker/imagepicker';


@NgModule({
  declarations: [
    ProfilePage,
    GuestProfilePage,
    GuestEditProfilePage,
    FormEducation,
    FormAddress,
    AdditionalInfoComponent,
    FormExperience,
    SkillTagsComponent,
    OverflowMenuComponent,
    UserSearchComponent,
    ImagePicker
  ],
  entryComponents: [
    ProfilePage,
    GuestProfilePage,
    GuestEditProfilePage,
    FormEducation,
    FormAddress,
    AdditionalInfoComponent,
    FormExperience,
    SkillTagsComponent,
    OverflowMenuComponent,
    ImagePicker,
    UserSearchComponent
    ],

  imports: [
    IonicPageModule.forChild(ProfilePage),
    SuperTabsModule.forRoot(),
    SettingsPageModule,
    TranslateModule.forChild(),
    IonicImageLoader,
    TagInputModule,
    BrowserAnimationsModule,
    ExpansionPanelsModule,
    DirectivesModule,
    ComponentsModule
  ],
  exports: [
    ProfilePage,
    GuestProfilePage,
    GuestEditProfilePage,
    FormAddress,
    AdditionalInfoComponent,
    FormEducation
  ],
  providers: [
    ContainerService,
    DatePipe,
    InAppBrowser
  ]
})
export class ProfilePageModule { }
