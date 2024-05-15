import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SUPERBADGES from '@salesforce/schema/Portfolio__c.Superbadges__c'
import AWARDS from '@salesforce/schema/Portfolio__c.Awards__c'
import LANGUAGES from '@salesforce/schema/Portfolio__c.Languages__c'
import portfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioOtherDetails extends LightningElement {
    awardsIcon = `${portfolioAssets}/PortfolioAssets/trophy.png`
    superIcon = `${portfolioAssets}/PortfolioAssets/badge.png`
    langIcon = `${portfolioAssets}/PortfolioAssets/language.png`
    awards=[]
    superbadges=[]
    languages=[]
    @api recordId
    @wire(getRecord,{
        recordId:'$recordId',
        fields:[SUPERBADGES, AWARDS, LANGUAGES]
    })otherDetailsHandler({data, error}){
        if(data){
            console.log('otherDetailsHandler data', JSON.stringify(data))
            this.formatData(data)
        }
        if(error){  
            console.error('otherDetailsHandler error', error)
        }
    }

    formatData(data){
        const{Awards__c, Languages__c, Superbadges__c} = data.fields
        this.awards = Awards__c && Awards__c.value?Awards__c.value.split(','):[]
        this.superbadges = Superbadges__c && Superbadges__c.value?Superbadges__c.value.split(';'):[]
        this.languages = Languages__c && Languages__c.value?Languages__c.value.split(','):[]
    }

}