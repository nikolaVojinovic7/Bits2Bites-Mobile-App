import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ValidationguardGuard } from '../app/guards/validationguard.guard';


const routes: Routes = [
  {
    path: '',
    canActivate:[ValidationguardGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./authentication/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./authentication/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
