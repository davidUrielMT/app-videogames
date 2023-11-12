// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { authGuard } from './auth.guard';

// const routes: Routes = [
//   { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
//   { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
//   { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Redirige a la página de inicio de sesión por defecto
//   { path: '**', redirectTo: '/auth/login' },// Manejar rutas no válidas
//   {
//     path: 'main',
//     loadChildren: () => import('./main/main.module').then(m => m.MainModule),
//     canActivate: [authGuard]
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'module-auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)},
  {path: 'module-main', loadChildren: () => import('./main/main.module').then((m) => m.MainModule)},
  {path: '**', pathMatch: 'full', redirectTo: 'module-auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
