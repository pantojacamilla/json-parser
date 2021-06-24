    import { Component, OnInit, Inject } from '@angular/core';&#xD;&#xA;    import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';&#xD;&#xA;    import { MountingTypeComponent } from './mounting-type/mounting-type.component';&#xD;&#xA;    import 'fabric';&#xD;&#xA;    declare let fabric;&#xD;&#xA;    @Component({&#xD;&#xA;      selector: "app-custom-report",&#xD;&#xA;      templateUrl: "./custom-report.component.html",&#xD;&#xA;      styleUrls: ["./custom-report.component.scss"]&#xD;&#xA;    })&#xD;&#xA;    export class CustomReportComponent implements OnInit {&#xD;&#xA;      private canvas;&#xD;&#xA;      private boundbox;&#xD;&#xA;      private shapes = [];&#xD;&#xA;      private shapeNoModuleZone;&#xD;&#xA;      private shape2;&#xD;&#xA;      private shapex;&#xD;&#xA;      animal: string;&#xD;&#xA;      constructor(public dialog: MatDialog) {&#xD;&#xA;        this.shape2 = new fabric.Rect({&#xD;&#xA;          width: 50,&#xD;&#xA;          height: 100,&#xD;&#xA;          fill: "green",&#xD;&#xA;          left: 335,&#xD;&#xA;          top: 305,&#xD;&#xA;          lockRotation: true,&#xD;&#xA;          hasControls: false,&#xD;&#xA;          perPixelTargetFind: true&#xD;&#xA;        });&#xD;&#xA;        this.shapes.push(this.shape2);&#xD;&#xA;      }&#xD;&#xA;      openDialog(): void {&#xD;&#xA;        let dialogRef = this.dialog.open(MountingTypeComponent, {&#xD;&#xA;         height: '300px',&#xD;&#xA;      width: '235px',&#xD;&#xA;          data: { animal: this.animal }&#xD;&#xA;        });&#xD;&#xA;        dialogRef.afterClosed().subscribe(result => {&#xD;&#xA;          console.log("The dialog was closed");&#xD;&#xA;          this.animal = result;&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;      deleteModule() {&#xD;&#xA;        const activeObject = this.canvas.getActiveObject();&#xD;&#xA;       // console.log(this.canvas.getActiveObject().left);&#xD;&#xA;        if (this.canvas.getActiveObject()) {&#xD;&#xA;          for (let i = 0; i < this.shapes.length; i++) {&#xD;&#xA;            console.log(this.shapes[i].left, this.canvas.getActiveObject().left);&#xD;&#xA;            if (&#xD;&#xA;              this.canvas.getActiveObject().left ===&#xD;&#xA;              this.shapes[i].left&#xD;&#xA;            ) {&#xD;&#xA;              console.log("both are equal");&#xD;&#xA;              this.canvas.remove(this.canvas.getActiveObject());&#xD;&#xA;             this.shapes.splice(i, 1);&#xD;&#xA;             break;&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        console.log(this.shapes);&#xD;&#xA;      }&#xD;&#xA;      addModule() {&#xD;&#xA;        this.shapex = new fabric.Rect({&#xD;&#xA;          width: 50,&#xD;&#xA;          height: 100,&#xD;&#xA;          fill: "green",&#xD;&#xA;          left: 335,&#xD;&#xA;          top: 305,&#xD;&#xA;          lockRotation: true,&#xD;&#xA;          hasControls: false,&#xD;&#xA;          perPixelTargetFind: true&#xD;&#xA;        });&#xD;&#xA;        this.shapes.push(this.shapex);&#xD;&#xA;        console.log(this.shapes);&#xD;&#xA;        for (let i = 0; i < this.shapes.length; i++) {&#xD;&#xA;          this.canvas.add(this.shapes[i]);&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      ngOnInit() {&#xD;&#xA;        this.canvas = new fabric.Canvas("canvas", {});&#xD;&#xA;        console.log(this.canvas);&#xD;&#xA;        this.boundbox = new fabric.Polygon(&#xD;&#xA;          [&#xD;&#xA;            { x: 0, y: -150 },&#xD;&#xA;            { x: 250, y: -150 },&#xD;&#xA;            { x: 250, y: 250 },&#xD;&#xA;            { x: -150, y: 250 },&#xD;&#xA;            { x: -150, y: 50 },&#xD;&#xA;            { x: 0, y: 50 }&#xD;&#xA;          ],&#xD;&#xA;          {&#xD;&#xA;            left: 0,&#xD;&#xA;            top: 0,&#xD;&#xA;            angle: 0,&#xD;&#xA;            fill: "lightgrey",&#xD;&#xA;            selectable: false&#xD;&#xA;          }&#xD;&#xA;        );&#xD;&#xA;        const text = new fabric.Text("No module zone", {&#xD;&#xA;          fontSize: 30,&#xD;&#xA;          fill: "white",&#xD;&#xA;          left: 338,&#xD;&#xA;          top: 115,&#xD;&#xA;          selectable: false&#xD;&#xA;        });&#xD;&#xA;        this.shapeNoModuleZone = new fabric.Rect({&#xD;&#xA;          label: "no module zone",&#xD;&#xA;          width: 200,&#xD;&#xA;          height: 100,&#xD;&#xA;          fill: "red",&#xD;&#xA;          text: "No module zone",&#xD;&#xA;          left: 338,&#xD;&#xA;          top: 95,&#xD;&#xA;          selectable: false&#xD;&#xA;        });&#xD;&#xA;        let group = new fabric.Group([this.shapeNoModuleZone, text], {&#xD;&#xA;          selectable: false&#xD;&#xA;        });&#xD;&#xA;        this.canvas.add(this.boundbox);&#xD;&#xA;        for (let i = 0; i < this.shapes.length; i++) {&#xD;&#xA;          console.log(this.shapes[i]);&#xD;&#xA;          this.canvas.add(this.shapes[i]);&#xD;&#xA;        }&#xD;&#xA;        //   this.canvas.add(this.shapeNoModuleZone);&#xD;&#xA;        this.canvas.add(group);&#xD;&#xA;        this.canvas.centerObject(this.boundbox);&#xD;&#xA;      }&#xD;&#xA;    }