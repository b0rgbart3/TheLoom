import { Component, OnInit, Output, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../models/course.model';
import { MaterialService } from '../../services/material.service';
import { Material } from '../../models/material.model';
import { Section } from '../../models/section.model';




@Component({
 //   moduleId: module.id,
    selector: 'section-comp',
    templateUrl: 'section.component.html',
    styleUrls: ['section.component.css']
})

export class SectionComponent implements OnInit, OnChanges {
    // private _course: Course;
    // private _section: Section;
    title: string;
    content: string;


    @Input() course: Course;
    // set course(course: Course) {
    //     this._course = course;
    //     console.log('course Updated');
    //   }

    // get course(): Course { return this.course; }

    @Input() section: Section;
    // set section(section: Section) {
    //     this._section = section;
    //     this.title = this._section.title;
    //     this.content = this._section.content;
    //     console.log('section updated');
    // }

    // get section(): Section { return this.section; }


    public materials: Material [];
    public materialRefs: Material [];
   // public section: Section;
    // public title: string;
    // public content: string;
    // public description: string;

    constructor(private materialService: MaterialService ) {}


    ngOnInit(): void {

        // this.title = this.course.title;
        // this.description = this.course.description;
        // console.log('sectionNumber: ' + this.section);
        // this.section = this.course.sections[this.sectionNumber];
        // this.materialRefs = this.section.materials;
        this.loadInMaterials();
    }

    ngOnChanges(): void {
        // console.log('changes');
        this.loadInMaterials();
     }

    loadInMaterials(): void {
            this.materials = [];
            if (this.section.materials) {
                this.section.materials.forEach( material => {
                    const id = material;

                    this.materialService.getMaterial(id).subscribe(
                        ( mat ) => { // console.log('found a material ' + j);
                        this.materials.push(mat[0]);

                });


            });

        }
    }

}

