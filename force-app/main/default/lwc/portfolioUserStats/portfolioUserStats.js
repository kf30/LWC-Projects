import { LightningElement, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
export default class PortfolioUserStats extends LightningElement {
    trailheadRankImg //= `${PortfolioAssets}/PortfolioAssets/Ranks/Ranger.png`
    @api badges //= '200+'
    @api points //= '50000+'
    @api trails //= '150+'
    @api rank

    renderedCallback(){
        if(this.rank){
            let url = `${PortfolioAssets}/PortfolioAssets/Ranks/${this.rank}.png`
            this.trailheadRankImg=url
        }
    }

}