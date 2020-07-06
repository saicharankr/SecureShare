import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ClipboardModule } from 'ngx-clipboard';
import { DocumentUploadPageRoutingModule } from './document-upload-routing.module';
import { DocumentUploadPage } from './document-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ClipboardModule,
    DocumentUploadPageRoutingModule
  ],
  declarations: [DocumentUploadPage]
})
export class DocumentUploadPageModule {}
