import { LightningElement, api, wire } from 'lwc';
import { getRelatedListRecords} from 'lightning/uiRelatedListApi';
export default class PortfolioWorkExperience extends LightningElement {
    @api recordId
    workExperienceList =[]
    @wire(getRelatedListRecords,{
        parentRecordId:'$recordId',
        relatedListId:'WorkExperience__r',
        fields:[
            'WorkExperience__c.StartDate__c', 'WorkExperience__c.EndDate__c', 'WorkExperience__c.Role__c', 'WorkExperience__c.WorkLocation__c',
            'WorkExperience__c.Description__c', 'WorkExperience__c.IsCurrent__c'
        ]
    })WorkExperienceHandler({data, error}){
        if(data){
            console.log('Work Experience', JSON.stringify(data))
            this.formatExperience(data)
        }
        if(error){
            console.error(error)
        }
    }

    formatExperience(data){
        this.workExperienceList = data.records.map(item=>{
            let id=item.id
            const {StartDate__c, EndDate__c, Role__c, WorkLocation__c, Description__c, IsCurrent__c} = item.fields
            let startDate = this.getValue(StartDate__c)
            let endDate = this.getValue(EndDate__c)
            let role = this.getValue(Role__c)
            let workLocation = this.getValue(WorkLocation__c)
            let description = this.getValue(Description__c)
            let isCurrent = this.getValue(IsCurrent__c)

            return {id, startDate, endDate, role, workLocation, description, isCurrent}
        })
    }

    getValue(data){
        return data && (data.displayValue || data.value)
    }
}