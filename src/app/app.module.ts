import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { JoblistComponent } from './joblist/joblist.component';
import { JobService } from './services/job.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    JoblistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
