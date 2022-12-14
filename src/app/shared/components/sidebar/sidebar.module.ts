import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SidebarComponent],
  imports: [RouterModule.forChild([]), CommonModule, NgbDropdownModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
