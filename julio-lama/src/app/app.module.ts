import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';

// Angular's Modules
import { FlexLayoutModule } from '@angular/flex-layout'; // Angular's flex-box
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';

// Website's components
import { AboutMeComponent } from './about-me/about-me.component';
import { MainToolBarComponent } from './main-tool-bar/main-tool-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MenuComponent } from './menu/menu.component';
import { ResumeComponent } from './resume/resume.component';

import { PdfViewerModule} from 'ng2-pdf-viewer';
import {MatExpansionModule} from '@angular/material/expansion';
import {GitHubService} from './service/git-hub.service';
import {GitHubResolverService} from './resolver/git-hub-resolver.service';
import { FooterComponent } from './footer/footer.component'; // PDF tool


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ResumeComponent,
    AboutMeComponent,
    MainToolBarComponent,
    ProjectsComponent,
    ContactMeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    PdfViewerModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
