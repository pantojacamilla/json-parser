    import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';&#xD;&#xA;    import { ActivatedRoute } from '@angular/router';&#xD;&#xA;    import { ButtonClickService } from '../../button.click.service';&#xD;&#xA;    @Component({&#xD;&#xA;        selector: 'relocate-employment-popover',&#xD;&#xA;        templateUrl: './relocate.employments.popover.html'&#xD;&#xA;    })&#xD;&#xA;    export class RelocateEmploymentsPopoverComponent {&#xD;&#xA;        unitIdParam: string;&#xD;&#xA;        orgNoParam: string;&#xD;&#xA;        submitted = false;&#xD;&#xA;        showPopover: boolean = true;&#xD;&#xA;        @ViewChild('ngCheckRow') ngCheckRow: ElementRef;&#xD;&#xA;        constructor(private route: ActivatedRoute, private buttonClickService: ButtonClickService) {&#xD;&#xA;            this.route.params.subscribe(params => {&#xD;&#xA;                this.orgNoParam = params['orgNoParam'];&#xD;&#xA;                this.unitIdParam = params['unitIdParam'];&#xD;&#xA;            });&#xD;&#xA;        }&#xD;&#xA;        ngOnInit() {&#xD;&#xA;            this.buttonClickService.showRelocatePopOver.subscribe((relocateCLick: boolean) => {&#xD;&#xA;                this.showPopover = relocateCLick;&#xD;&#xA;                if (this.showPopover) {&#xD;&#xA;                    this.relocateForm();&#xD;&#xA;                }&#xD;&#xA;            });&#xD;&#xA;        }&#xD;&#xA;        // Listen to the table rows on list component and if the class '.selected' has been added&#xD;&#xA;        @HostListener('click', ['$event'])&#xD;&#xA;        clickHandler(event: any) {&#xD;&#xA;            if (this.ngCheckRow.nativeElement.classList.contains('selected')) {&#xD;&#xA;                this.relocateForm();&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        //Get tablerowdata and add to popover so that we can display name and post personkeys to backend&#xD;&#xA;        relocateForm() {&#xD;&#xA;        &#xD;&#xA;            //THIS IS THE JQUERY TO BE REPLACED IN THIS FUNCTION&#xD;&#xA;            $("#org-unit table tbody tr.selected").each(function () {&#xD;&#xA;                var tr = $(this);&#xD;&#xA;                var employmentName = tr.data("employment-name");&#xD;&#xA;                var employmentPersonkey = tr.data("employment-personkey");&#xD;&#xA;                var hiddenHtml = $("<input></input>").attr("type", "hidden").attr("name", "EmploymentPersonKeys").val(employmentPersonkey);&#xD;&#xA;                var nameSpan = $("<span></span>").html(employmentName);&#xD;&#xA;                var li = $("<li></li>").append(nameSpan).append(hiddenHtml);&#xD;&#xA;                $("#relocate-employments-popover ul.selected-employments").append(li);&#xD;&#xA;            });&#xD;&#xA;            &#xD;&#xA;        }&#xD;&#xA;        onSubmit() {&#xD;&#xA;                this.submitted = true;&#xD;&#xA;        }&#xD;&#xA;        onCancel() {&#xD;&#xA;            this.showPopover = false;&#xD;&#xA;        }&#xD;&#xA;    }