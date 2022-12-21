import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appUlternateIf]',
})

export class appUlternateIfDirective implements OnChanges {

    @Input() set appUlternateIf(condition: boolean) {
        if (condition) {
            this.vcRef.createEmbeddedView(this.templateRef)
        } else {
            this.vcRef.clear();
        }
    }

    // @Input() appUlternateIf: boolean = true;

    ngOnChanges() {
        // if (this.appUlternateIf) {
        //     this.vcRef.createEmbeddedView(this.templateRef)
        // } else {
        //     this.vcRef.clear();
        // }
    }
    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}