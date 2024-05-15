import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import portfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import SF_CERT_FIELD from '@salesforce/schema/Portfolio__c.SalesforceCertifications__c'
import OTHER_CERT_FIELD from '@salesforce/schema/Portfolio__c.OtherCertifications__c'
export default class PortfolioCertifications extends LightningElement {
    certLogo = `${portfolioAssets}/PortfolioAssets/cert_logo.png`
    sfCertsList=[]
    otherCertsList=[]
    @api recordId
    @wire(getRecord,{
        recordId:'$recordId',
        fields:[SF_CERT_FIELD, OTHER_CERT_FIELD]
    })
    certHandler({data, error}){
        if(data){
            console.log('Cert data',JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
            console.error('Cert error', error)
        }
    }

    formatData(data){
        const {SalesforceCertifications__c, OtherCertifications__c} = data.fields
        this.sfCertsList = SalesforceCertifications__c?SalesforceCertifications__c.value.split(';').map(item=>{
            return `Salesforce Certified ${item}`
        }):[]
        this.otherCertsList = OtherCertifications__c?OtherCertifications__c.value.split(','):[]
    }
}