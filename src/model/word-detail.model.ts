export class WordDetail {

    // remote (Firebase)
    type: string;
    subtype: string;
    
    variantGroups: any[];

    constructor(rawData: any){
        Object.assign(this, rawData);
    }

}