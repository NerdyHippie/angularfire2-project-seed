import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AuthGuard } from '../global/_guards/auth.guard';

import { AdminComponent }   from './admin.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { UserEditorComponent } from './user-editor/user-editor.component'
import { UserDetailComponent } from './user-detail/user-detail.component'

const AdminRoutes: Routes = [
    {
        path: 'admin'
        ,component: AdminComponent
				,canActivate: [ AuthGuard ]
        ,children: [
						{
								path: ''
								,redirectTo: 'users'
								,pathMatch: 'full'
						},{
                path: 'users'
                ,component: UserManagerComponent
						 		,children: [
									 {
										 path: 'create'
										 ,component: UserEditorComponent
									 },{
										 path: ':id'
										 ,component: UserDetailComponent
									 },{
										 path: 'edit/:id'
										 ,component: UserEditorComponent
									 }
							 	]
           }
        ]
    }
];

export const AdminRouteComponents = [AdminComponent,UserManagerComponent,UserDetailComponent,UserEditorComponent];//,AdminHomeComponent
export const AdminRouting: ModuleWithProviders = RouterModule.forChild(AdminRoutes);
