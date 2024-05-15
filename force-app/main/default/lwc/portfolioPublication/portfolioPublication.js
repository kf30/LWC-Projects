import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
import IEEEImage from '@salesforce/resourceUrl/IEEEImage'
export default class PortfolioPublication extends LightningElement {
    @api recordId
    ieeeLogo = IEEEImage
    
    publicationList = [
        {
            title:"Design and Implementation of Library Management Robotic System",
            publisher:"IEEE",
            url:"https://ieeexplore.ieee.org/document/9673427/"
        }
    ]
    /*
    publicationList = []
    
    @wire(getRelatedListRecords,{
        parentRecordId:'$recordId',
        relatedListId:'Publications__r',
        fields:['Publication__c.Title__c', 'Publication__c.Publisher__c', 'Publication__c.PublishedDate__c', 
        'Publication__c.PublicationURL__c']
    })publicationHandler({data,error}){
        if(data){
            console.log('publicationHandler data', JSON.stringify(data))
            this.formatData(data)
            //console.log('publicationList', this.publicationList)
        }
        if(error){
            console.error('publicationHandler error', error)
        }
    }

    formatData(data){
        this.publicationList = data.records.map(item=>{
            let id = item.id
            const {Title__c, Publisher__c, PublishedDate__c, PublicationURL__c} =  item.fields
            let title = this.getValue(Title__c)
            let publisher = this.getValue(Publisher__c)
            let publishedDate = this.getValue(PublishedDate__c)
            let publicationURL = this.getValue(PublicationURL__c)
            return {id, title, publisher, publishedDate, publicationURL}
        })
    }

    getValue(data){
        return data && (data.displayValue || data.value)
    }
    */
}