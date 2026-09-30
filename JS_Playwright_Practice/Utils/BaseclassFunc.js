import { chromium,webkit,firefox } from "@playwright/test";
export default class BaseClass{

    Constructor(){
        this.browser=null;
        this.context=null;
        this.page=null;
    }


    launchBrowser(browserType){
        case "CHROMIUM":
            this.browser=await chromium.launch
    
    }


}