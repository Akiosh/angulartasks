import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './tasks-routing.module';
import { FormsModule } from '@angular/forms';
import { TasksServicesModule } from './tasks-services.module';
import { TaskListComponent, TaskComponent } from './components';

@NgModule({
    imports: [CommonModule, FormsModule, TaskRoutingModule, TasksServicesModule],
    exports: [],
    declarations: [TaskListComponent, TaskComponent],
    providers: [],
})
export class TasksModule { }
