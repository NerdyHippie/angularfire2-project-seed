import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AuthGuard } from '../global/_guards/auth.guard';

import { TestComponent }   from './test.component';

const TestRoutes: Routes = [
    {
        path: 'test'
        ,component: TestComponent
				,canActivate: [ AuthGuard ]
        ,children: [
						{
								path: ''
								,redirectTo: 'test'
								,pathMatch: 'full'
						}/*,{
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
           }*/
        ]
    }
];

export const TestRouteComponents = [TestComponent];
export const TestRouting: ModuleWithProviders = RouterModule.forChild(TestRoutes);
