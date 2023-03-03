import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule
    ],
    declarations: [
      
    ]
})
export class UserModule { }

