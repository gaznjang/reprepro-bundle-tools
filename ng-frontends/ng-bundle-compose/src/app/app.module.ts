/***********************************************************************
 * Copyright (c) 2018 Landeshauptstadt München
 *           (c) 2018 Christoph Lutz (InterFace AG)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the European Union Public Licence (EUPL),
 * version 1.1 (or any later version).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * European Union Public Licence for more details.
 *
 * You should have received a copy of the European Union Public Licence
 * along with this program. If not, see
 * https://joinup.ec.europa.eu/collection/eupl/eupl-text-11-12
 ***********************************************************************/

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { APP_ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { SharedModule } from "shared";
import { AptReposSearchModule } from "apt-repos-search";
import { BundleAuthModule } from "bundle-auth";
import { WorkflowStatusEditorComponent } from "./workflow-status-editor/workflow-status-editor.component";
import { ManagedBundleCardComponent } from "./workflow-status-editor/managed-bundle-card/managed-bundle-card.component";
import { WorkflowStatusCardComponent } from "./workflow-status-editor/workflow-status-card/workflow-status-card.component";
import { ManagedBundleEditorComponent } from "./managed-bundle-editor/managed-bundle-editor.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { SplitPipe } from "./pipes/split.pipe";

@NgModule({
  declarations: [
    AppComponent,
    WorkflowStatusEditorComponent,
    ManagedBundleCardComponent,
    WorkflowStatusCardComponent,
    ManagedBundleEditorComponent,
    LoginPageComponent,
    SplitPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    AptReposSearchModule,
    BundleAuthModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
