import { LightningElement, wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import MyProfilePic from '@salesforce/resourceUrl/MyProfilePic'
//import PortfolioAssets2 from '@salesforce/resourceUrl/PortfolioAssets2'
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c'
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c'
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.CompanyName__c'
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'
export default class PortfolioBanner extends LightningElement {

    @api recordId //='a0ES4000001ZTrNMAW'
    @api linkedinUrl //= 'https://www.linkedin.com/in/kingsley-fernandes-8636b918a/'
    @api youtubeUrl //="www.youtube.com/@kingsleyfernandes1526"
    @api githubUrl //="https://github.com/kf30"
    @api twitterUrl //="https://www.linkedin.com/in/kingsley-fernandes-8636b918a/'"
    @api trailheadUrl //="https://www.salesforce.com/trailblazer/kfernandes31"
    @api blogUrl //="https://www.salesforce.com/trailblazer/kfernandes31"

    //userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpeg`
    //userPic = `${PortfolioAssets2}/PortfolioAssets2/KingsleyFernandes.jpg`
    userPic = MyProfilePic
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
    blog = `${PortfolioAssets}/PortfolioAssets/Social/blogger.svg`

    
    @wire(getRecord, {recordId:'$recordId', fields:[FULLNAME, COMPANY_LOCATION, COMPANY_NAME, DESIGNATION]})
    portfolioData
    // portfolioHandler({data, error}){
    //     if(data){
    //         console.log(data)
    //     }
    //     if(error){
    //         console.error(error)
    //     }
    // }
    get fullName(){
        return getFieldValue(this.portfolioData.data, FULLNAME)
    }
    get companyLocation(){
        return getFieldValue(this.portfolioData.data, COMPANY_LOCATION)
    }
    get companyName(){
        return getFieldValue(this.portfolioData.data, COMPANY_NAME)
    }
    get designation(){
        return getFieldValue(this.portfolioData.data, DESIGNATION)
    }
}