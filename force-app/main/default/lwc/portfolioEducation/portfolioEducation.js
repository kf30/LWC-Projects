import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
const COLUMNS = [
     { label: 'Education', fieldName: 'Education' },
     { label: 'Institution Name', fieldName: 'Institution' },
     { label: 'Passing Year', fieldName: 'PassingYear' }
 ]; 
export default class PortfolioEducation extends LightningElement {
    columns = COLUMNS
    tableData =[]
    @api recordId
    @wire(getRelatedListRecords,{
        parentRecordId:'$recordId',
        relatedListId:'Educations__r',
        fields:['Education__c.InstitutionName__c','Education__c.Title__c','Education__c.PassingYear__c'],
        sortBy:['Education__c.PassingYear__c']        
    })
    educationHandler({data,error}){
        if(data){
            console.log('Education Data', JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
            console.error('Education Error', error)
        }
    }

    formatData(data){
        this.tableData = [...data.records].reverse().map(item=>{
            let Id = item.id
            const {InstitutionName__c, Title__c, PassingYear__c} = item.fields
            let Education = Title__c.value
            let Institution = InstitutionName__c.value
            let PassingYear = PassingYear__c.value
            return{
                Id, Education, Institution, PassingYear
            }
        })
        console.log("this.tableData", JSON.stringify(this.tableData))
    }
}