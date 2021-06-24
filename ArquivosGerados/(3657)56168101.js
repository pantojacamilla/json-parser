    import { Pipe, PipeTransform } from '@angular/core';&#xD;&#xA;    import { Home } from '../models/IHome.model';&#xD;&#xA;    @Pipe({&#xD;&#xA;        name: 'amenitiesFilter',&#xD;&#xA;        pure: false&#xD;&#xA;    })&#xD;&#xA;    export class AmenitiesFilterPipe implements PipeTransform {&#xD;&#xA;        transform(values: any[], filter: Home): any {&#xD;&#xA;            /* console.log('amenities', values, filter); */&#xD;&#xA;            if (!values || !filter || !filter.amenity) {&#xD;&#xA;                return values;&#xD;&#xA;            }&#xD;&#xA;            return values.filter(item => {&#xD;&#xA;                return item.amenity.indexOf(filter.amenity) !== -1;&#xD;&#xA;            });&#xD;&#xA;        }&#xD;&#xA;    }