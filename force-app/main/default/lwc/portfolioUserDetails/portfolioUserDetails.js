import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {

    @api recordId
    @api objectApiName
    @api resumeUrl
    downloadResume(){
        window.open(this.resumeUrl, '_blank')
    }

    //https://github.com/kf30/kingsley-resume/raw/main/Kingsley_Joshua_Fernandes.pdf
}