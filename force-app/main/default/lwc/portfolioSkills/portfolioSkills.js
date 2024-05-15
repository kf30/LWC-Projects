import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import TECH_SKILLS_FIEID from '@salesforce/schema/Portfolio__c.TechnicalSkills__c';
import SOFT_SKILLS_FIEID from '@salesforce/schema/Portfolio__c.SoftSkills__c';
import SOFTWARE_FIEID from '@salesforce/schema/Portfolio__c.SoftwareTools__c';
import METHODOLOGIES_FIEID from '@salesforce/schema/Portfolio__c.SoftwareDevelopmentMethodologies__c';
export default class PortfolioSkills extends LightningElement {
    techskills=[]
    softskills=[]
    medthodologies=[]
    toolskills=[]
    @api recordId
    @wire(getRecord,{
        recordId:'$recordId',
        fields:[TECH_SKILLS_FIEID, SOFT_SKILLS_FIEID, SOFTWARE_FIEID, METHODOLOGIES_FIEID]
    })skills({data, error}){
        if(data){
            console.log(data)
            this.formatSkills(data)
        }
        if(error){
            console.error(error)
        }
    }

    formatSkills(data){
        const {TechnicalSkills__c, SoftSkills__c, SoftwareTools__c, SoftwareDevelopmentMethodologies__c} = data.fields
        this.techskills = TechnicalSkills__c?TechnicalSkills__c.value.split(','):[]
        this.softskills = SoftSkills__c?SoftSkills__c.value.split(','):[]
        this.medthodologies = SoftwareDevelopmentMethodologies__c?SoftwareDevelopmentMethodologies__c.value.split(','):[]
        this.toolskills = SoftwareTools__c?SoftwareTools__c.value.split(','):[]
    }
}