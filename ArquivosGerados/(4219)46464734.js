    convertToMultiSelect(item: any): IMultiSelectOption[] {&#xD;&#xA;        debugger;&#xD;&#xA;        let v = item;&#xD;&#xA;        let options = [];&#xD;&#xA;        for (var i = 0; i < item.length; i++) {&#xD;&#xA;      &#xD;&#xA;            options.push({ id: item[i].TransportTypeId, name: item[i].Name})&#xD;&#xA;        }&#xD;&#xA;        return options;&#xD;&#xA;    }