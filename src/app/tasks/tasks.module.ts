import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './tasks-routing.module';
import { FormsModule } from '@angular/forms';
import { TasksServicesModule } from './tasks-services.module';

@NgModule({
    imports: [CommonModule, FormsModule, TaskRoutingModule, TasksServicesModule],
    exports: [],
    declarations: [],
    providers: [],
})
export class TasksModule { }
