import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './tasks-routing.module';
import { FormsModule } from '@angular/forms';
import { TasksServicesModule } from './tasks-services.module';
import { TaskListComponent, TaskComponent, TaskFormComponent } from './components';

@NgModule({
    imports: [CommonModule, FormsModule, TaskRoutingModule, TasksServicesModule],
    exports: [],
    declarations: [TaskListComponent, TaskComponent, TaskFormComponent],
    providers: [],
})
export class TasksModule { }
