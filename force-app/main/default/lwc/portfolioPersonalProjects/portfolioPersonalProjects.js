import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
export default class PortfolioPersonalProjects extends LightningElement {

    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
    CurrencyCalculator = `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`
    SurveyApp = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`
    NoteApp = `${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`

    projects = [
        {
            'name':'BMI Calculator',
            'img':this.BMICalculator,
            'link':'https://kingsley-portfolio-dev-ed.my.site.com/bmi-calculator'
        },
        {
            'name':'Alarm Clock App',
            'img':this.AlarmClock,
            'link':'https://kingsley-portfolio-dev-ed.my.site.com/alarm-clock'
        },
        {
            'name':'Currency Calculator App',
            'img':this.CurrencyCalculator,
            'link':'https://kingsley-portfolio-dev-ed.my.site.com/currency-converter'
        },
        {
            'name':'Weather App',
            'img':this.WeatherApp,
            'link':'https://kingsley-portfolio-dev-ed.my.site.com/weather-app'
        },
        {
            'name':'Survey App',
            'img':this.SurveyApp,
            'link':'https://kingsley-portfolio-dev-ed.my.site.com/survey/survey/runtimeApp.app?invitationId=0KiS4000000yBLZ&surveyName=employee_survey&UUID=85f1236d-d4bb-4082-a071-2453e4107343'
        },
        {
            'name':'Note Taking App',
            'img':this.NoteApp,
            'link':'https://kingsley-portfolio-dev-ed.my.site.com/note-taking-app'
        },
    ]
}