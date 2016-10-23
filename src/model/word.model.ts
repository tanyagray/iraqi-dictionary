export class Word {
    
    // remote (Firebase)
    type: string;
    subtype: string;
    
    en: string;
    iq: string;
    bz: string;

    frequency_rank: number;

    // local only
    visible: boolean;

    constructor(rawData: any){
        Object.assign(this, rawData);
    }

    /*
    Returns true if this word contains the provided search string
    in any of its language forms.
    */
    public contains(searchString: string) {
        let found = true;

        if( searchString.length > 0 ) {
            found = this.enMatch(searchString) || this.iqMatch(searchString);
        }

        return found;
    }

    /*
    Returns true if a string match is found in the English form
    */
    private enMatch(searchString: string) {
        let found: boolean = ( this.en.indexOf(searchString) != -1 );
        return found;
	}
	
    /*
    Returns true if a string match is found in the Iraqi Arabic form
    */
	private iqMatch(searchString: string) {
        let found: boolean = ( this.iq.indexOf(searchString) != -1 );
        return found;
	}
 
}