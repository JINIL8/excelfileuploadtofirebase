import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule , RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

//firebase
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

//component
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
//services
import { AuthguardService } from './services/authguard.service';
import { AuthService } from './services/auth.service';
import { XltfirestoreService } from './services/xltfirestore.service';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
//routes
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    DashboardComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthguardService, AuthService, AngularFireAuth, XltfirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
