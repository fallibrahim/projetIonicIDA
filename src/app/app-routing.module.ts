import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'infokilo',
    loadChildren: () => import('./infokilo/infokilo.module').then( m => m.InfokiloPageModule)
  },
  {
    path: 'ajout-linge',
    loadChildren: () => import('./ajout-linge/ajout-linge.module').then( m => m.AjoutLingePageModule)
  },
  {
    path: 'linge/:id',
    loadChildren: () => import('./linge/linge.module').then( m => m.LingePageModule)
  },
  {
    path: 'edit-linge/:id',
    loadChildren: () => import('./edit-linge/edit-linge.module').then( m => m.EditLingePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'detail-admin/:id',
    loadChildren: () => import('./detail-admin/detail-admin.module').then( m => m.DetailAdminPageModule)
  },
  {
    path: 'edit-admin/:id',
    loadChildren: () => import('./edit-admin/edit-admin.module').then( m => m.EditAdminPageModule)
  },
  {
    path: 'add-admin',
    loadChildren: () => import('./add-admin/add-admin.module').then( m => m.AddAdminPageModule)
  },
  {
    path: 'employer',
    loadChildren: () => import('./employer/employer.module').then( m => m.EmployerPageModule)
  },
  {
    path: 'edit-employer/:id',
    loadChildren: () => import('./edit-employer/edit-employer.module').then( m => m.EditEmployerPageModule)
  },
  {
    path: 'detail-employer/:id',
    loadChildren: () => import('./detail-employer/detail-employer.module').then( m => m.DetailEmployerPageModule)
  },
  {
    path: 'add-employer',
    loadChildren: () => import('./add-employer/add-employer.module').then( m => m.AddEmployerPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'add-client',
    loadChildren: () => import('./add-client/add-client.module').then( m => m.AddClientPageModule)
  },
  {
    path: 'edit-client/:id',
    loadChildren: () => import('./edit-client/edit-client.module').then( m => m.EditClientPageModule)
  },
  {
    path: 'detail-client/:id',
    loadChildren: () => import('./detail-client/detail-client.module').then( m => m.DetailClientPageModule)
  },
  {
    path: 'demande-depense',
    loadChildren: () => import('./demande-depense/demande-depense.module').then( m => m.DemandeDepensePageModule)
  },
  {
    path: 'add-demande-depense',
    loadChildren: () => import('./add-demande-depense/add-demande-depense.module').then( m => m.AddDemandeDepensePageModule)
  },
  {
    path: 'edit-demande-depense/:id',
    loadChildren: () => import('./edit-demande-depense/edit-demande-depense.module').then( m => m.EditDemandeDepensePageModule)
  },
  {
    path: 'detail-demande-depense/:id',
    loadChildren: () => import('./detail-demande-depense/detail-demande-depense.module').then( m => m.DetailDemandeDepensePageModule)
  },
  {
    path: 'depense',
    loadChildren: () => import('./depense/depense.module').then( m => m.DepensePageModule)
  },
  {
    path: 'add-depense',
    loadChildren: () => import('./add-depense/add-depense.module').then( m => m.AddDepensePageModule)
  },
  {
    path: 'edit-depense/:id',
    loadChildren: () => import('./edit-depense/edit-depense.module').then( m => m.EditDepensePageModule)
  },
  {
    path: 'detail-depense/:id',
    loadChildren: () => import('./detail-depense/detail-depense.module').then( m => m.DetailDepensePageModule)
  },
  {
    path: 'facture',
    loadChildren: () => import('./facture/facture.module').then( m => m.FacturePageModule)
  },
  {
    path: 'detail-facture/:id',
    loadChildren: () => import('./detail-facture/detail-facture.module').then( m => m.DetailFacturePageModule)
  },
  {
    path: 'add-facture',
    loadChildren: () => import('./add-facture/add-facture.module').then( m => m.AddFacturePageModule)
  },
  {
    path: 'edit-facture/:id',
    loadChildren: () => import('./edit-facture/edit-facture.module').then( m => m.EditFacturePageModule)
  },
  {
    path: 'etat-financier',
    loadChildren: () => import('./etat-financier/etat-financier.module').then( m => m.EtatFinancierPageModule)
  },
  {
    path: 'detail-info-kilo/:prixKilo',
    loadChildren: () => import('./detail-info-kilo/detail-info-kilo.module').then( m => m.DetailInfoKiloPageModule)
  },
  {
    path: 'add-info-kilo',
    loadChildren: () => import('./add-info-kilo/add-info-kilo.module').then( m => m.AddInfoKiloPageModule)
  },
  {
    path: 'edit-info-kilo/:prixKilo',
    loadChildren: () => import('./edit-info-kilo/edit-info-kilo.module').then( m => m.EditInfoKiloPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'form-reactif',
    loadChildren: () => import('./form-reactif/form-reactif.module').then( m => m.FormReactifPageModule)
  },
  {
    path: 'validation-personnalise',
    loadChildren: () => import('./validation-personnalise/validation-personnalise.module').then( m => m.ValidationPersonnalisePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
