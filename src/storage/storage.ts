import { observable,toJS, action, values } from 'mobx';

import * as Papa from 'papaparse';


class Storage{
    
    // csv arreglos....
    @observable dbFest: string = '/data/fest-db.csv';
    @observable users: any = [];
    @observable people: any = [];
    @observable cosine: any = [];
    @observable userArray: any =[];
    @observable select: number = 1;
    
}