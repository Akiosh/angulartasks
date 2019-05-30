import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent, MessagesComponent, PathNotFoundComponent } from './layout';
import { TaskFormComponent } from './tasks';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'messages',
        component: MessagesComponent,
        outlet: 'messages'
    },

    {
        path: 'edit/:taskID',
        component: TaskFormComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PathNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }
