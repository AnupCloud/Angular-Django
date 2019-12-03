import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatSidenavModule, MatToolbarModule, MatIconModule,
  MatCheckboxModule, MatProgressSpinnerModule,MatCardModule, MatSelectModule,
   MatButtonModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule,
    MatTableModule, MatSortModule, MatInputModule,MatFormFieldModule } from '@angular/material';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule, 
    MatProgressSpinnerModule,
    MatMenuModule 
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule, 
    MatProgressSpinnerModule,
    MatMenuModule 
  ],
  
})
export class MaterialModule { }
