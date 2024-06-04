export class Plan {
    basic = 'testgetems+basic@gmail.com';

    startup_300 = 'testgetems+startup@gmail.com';
    startup_700 = 'testgetems+startup700@gmail.com';
    startup_1500 = 'testgetems+startup1500@gmail.com';
    startup_300_300 = 'testgetems+startup300_300@gmail.com';
    startup_700_300 = 'testgetems+startup700_300@gmail.com';
    startup_1500_300 = 'testgetems+startup1500_300@gmail.com';
    startup_reviews_300 = 'testgetems+startup_review_300@gmail.com';

    pro_700 = 'testgetems+pro700@gmail.com';
    pro_1000 = 'testgetems+pro1000@gmail.com';
    pro_1500 = 'testgetems+pro1500@gmail.com';
    pro_700_500 = 'testgetems+pro700_500@gmail.com';
    pro_1000_500 = 'testgetems+pro1000_500@gmail.com';
    pro_1500_500 = 'testgetems+pro1500_500@gmail.com';
    pro_reviews_500 = 'testgetems+pro_review_500@gmail.com';
    pro_reviews_1000 = 'testgetems+pro_review_1000@gmail.com';

    business_2000 = 'testgetems+business_2000@gmail.com';
    business_4000 = 'testgetems+business_4000@gmail.com';
    business_6000 = 'testgetems+business_6000@gmail.com';
    business_2000_1000 = 'testgetems+business_2000_1000@gmail.com';
    business_4000_1000 = 'testgetems+business_4000_1000@gmail.com';
    business_6000_1000 = 'testgetems+business_6000_1000@gmail.com';
    business_reviews_2000 = 'testgetems+business_review_2000@gmail.com';

    Plans = {

        //Basic
        'Basic': this.basic,

        // Startup
        'Startup_ASO_300': this.startup_300,
        'Startup_ASO_700': this.startup_700,
        'Startup_ASO_1500': this.startup_1500,
        'Startup_ASO_300+Reviews_300': this.startup_300_300,
        'Startup_ASO_700+Reviews_300': this.startup_700_300,
        'Startup_ASO_1500+Reviews_300': this.startup_1500_300,
        'Startup_Reviews_300': this.startup_reviews_300,

        // Pro
        'Pro_ASO_700': this.pro_700,
        'Pro_ASO_1000': this.pro_1000,
        'Pro_ASO_1500': this.pro_1500,
        'Pro_ASO_700+Reviews_500': this.pro_700_500,
        'Pro_ASO_1000+Reviews_500': this.pro_1000_500,
        'Pro_ASO_1500+Reviews_500': this.pro_1500_500,
        'Pro_Reviews_500': this.pro_reviews_500,
        'Pro_Reviews_1000': this.pro_reviews_1000,

        // Business
        'Business_ASO_2000': this.business_2000,
        'Business_ASO_4000': this.business_4000,
        'Business_ASO_6000': this.business_6000,
        'Business_ASO_2000+Reviews_1000': this.business_2000_1000,
        'Business_ASO_4000+Reviews_1000': this.business_4000_1000,
        'Business_ASO_6000+Reviews_1000': this.business_6000_1000,
        'Business_Reviews_2000': this.business_reviews_2000,
    }

    withPlan(Tariff) {
        return this.Plans[Tariff]
    }
}
