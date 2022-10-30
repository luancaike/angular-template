import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { LoadingModule } from '@shared/components/loading/loading.module';
import { SidebarModule } from '@shared/components/sidebar/sidebar.module';
import { BreadcrumbModule } from '@shared/components/breadcrumb/breadcrumb.module';
import { ConfirmDialogModule } from '@shared/components/confirm-dialog/confirm-dialog.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      enableHtml: true,
      progressBar: true,
      closeButton: true,
      preventDuplicates: true,
    }),
    HttpClientModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LoadingModule,
    SidebarModule,
    BreadcrumbModule,
    ConfirmDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
