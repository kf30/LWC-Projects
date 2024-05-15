import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetailsAndStatsWrapper extends LightningElement {

    @api recordId //='a0ES4000001ZTrNMAW'
    @api objectApiName //='Portfolio__c'
    @api badges
    @api points
    @api trails
    @api rank
    @api resumeUrl
}