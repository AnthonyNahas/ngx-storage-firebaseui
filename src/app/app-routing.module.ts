import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GettingStartedComponent} from './getting-started/getting-started.component';
import {UsageComponent} from './usage/usage.component';


const routes: Routes = [
  // {path: '', redirectTo: 'getting-started', pathMatch: 'full'},
  {path: '', component: UsageComponent},
  {path: 'getting-started', component: GettingStartedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
