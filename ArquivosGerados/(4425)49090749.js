    import React, { Component } from 'react';&#xD;&#xA;    export default class Wrapper extends Component {&#xD;&#xA;        const obj = () => ({&#xD;&#xA;          "one": {&#xD;&#xA;            "title": "one",&#xD;&#xA;            "description": "foo",&#xD;&#xA;          },&#xD;&#xA;          "two": {&#xD;&#xA;            "title": "two",&#xD;&#xA;            "description": "bar",&#xD;&#xA;          },&#xD;&#xA;        });&#xD;&#xA;        renderSingleItem(instance) {&#xD;&#xA;            console.log(instance);&#xD;&#xA;            return (&#xD;&#xA;                <h2 key={instance.title}>&#xD;&#xA;                  {instance.description}&#xD;&#xA;                </h2>&#xD;&#xA;            );&#xD;&#xA;        }&#xD;&#xA;        renderAllItems(data) {&#xD;&#xA;            for (var key in data) {&#xD;&#xA;                if (data.hasOwnProperty(key)) {&#xD;&#xA;                    var instance = data[key];&#xD;&#xA;                    for (var prop in instance) {&#xD;&#xA;                        if (instance.hasOwnProperty(prop)) {&#xD;&#xA;                            return (this.renderSingleItem(instance));&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        render() {&#xD;&#xA;            return (&#xD;&#xA;                <div>&#xD;&#xA;                    {this.renderAllItems(this.obj)}&#xD;&#xA;                </div>&#xD;&#xA;            );&#xD;&#xA;        }&#xD;&#xA;    }