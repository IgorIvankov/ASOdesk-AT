import 'dayjs';

const dayjs = require('dayjs');

export class Constants {

    // Credentials
    login = 'igor_i+autotest@asodesk.com';
    loginRustore = 'igor_i+rustore@asodesk.com';
    password = '123123asodesk';

    // Test data
    name = 'test-name' // use it every time when input should have name

    // Dates
    prevDaysDate = dayjs().unix() - 200000; //- 10000;
    prevDaysDate_topChart = dayjs().valueOf() -200000;
    toDaysDate = dayjs().unix() - 4780; //
    toDaysDate_topChart = dayjs().valueOf() - 4780;
    monthAgo = dayjs().unix() - 2739405;


    s_monthAgo = dayjs() - 2645729858;
    s_prevDaysDate = dayjs() - 200000; //- 10000;
    s_toDaysDate = dayjs() - 984300;

    // App Store
    AsDeviceTypePhone = 'iphone';
    AsDeviceTypePad = 'ipad';
    AsFavCountryIds = ["ru", "us", "gb", "de", "es", "it", "fr", "ca", "au", "br"];
    AsFavStoreIds = ["429047995", "585027354", "835599320", "447188370"]; //pinterest, googlemaps, tiktok, snapchat
    AsAllCategoryIds = ["36", "3600", "6000", "6001", "6002", "6003", "6004", "6005", "6006", "6007", "6008", "6009", "6010", "6011", "6012", "6013", "6014", "6015", "6016", "6017", "6018", "6020", "6021", "6023", "6024", "6026", "6027", "7001", "7002", "7003", "7004", "7005", "7006", "7009", "7011", "7012", "7013", "7014", "7015", "7016", "7017", "7018", "7019", "10000", "10001", "10002"];
    // exclude: id="0", "6025", "7007", "7008",

    // Google Play
    GpDeviceType = 'googleplay';
    GpFavCountryIds = ["ru", "us", "gb", "de", "es", "it", "fr", "ca", "au", "br"];
    GpFavStoreIds = ["com.pinterest", "com.bpmobile.iscanner.free", "com.zhiliaoapp.musically", "com.snapchat.android"]; //pinterest, pdf scanner, tiktok, snapchat
    // GpFavStoreIds = ["com.pinterest", "com.google.android.googlequicksearchbox", "com.booking", "sinet.startup.inDriver", "com.snapchat.android"]; //pinterest, pdf scanner, tiktok, snapchat
    GpAllCategoryIds = ["ANDROID_WEAR", "ART_AND_DESIGN", "AUTO_AND_VEHICLES", "BEAUTY", "BOOKS_AND_REFERENCE", "BUSINESS", "CATEGORY_ALL", "COMICS", "COMMUNICATION", "DATING", "EDUCATION", "ENTERTAINMENT", "EVENTS", "HEALTH_AND_FITNESS", "HOUSE_AND_HOME", "LIBRARIES_AND_DEMO", "LIFESTYLE", "MAPS_AND_NAVIGATION", "MEDICAL", "MUSIC_AND_AUDIO", "NEWS_AND_MAGAZINES", "PARENTING", "PERSONALIZATION", "PHOTOGRAPHY", "PRODUCTIVITY", "SHOPPING", "SOCIAL", "SPORTS", "TOOLS", "TRAVEL_AND_LOCAL", "VIDEO_PLAYERS", "WEATHER"];
    // exclude "FAMILY", "FAMILY_ACTION", "FAMILY_BRAINGAMES", "FAMILY_CREATE", "FAMILY_EDUCATION", "FAMILY_MUSICVIDEO", "FAMILY_PRETEND", "FINANCE", "FOOD_AND_DRINK", "GAME", "GAME_ACTION", "GAME_ADVENTURE", "GAME_ARCADE", "GAME_BOARD", "GAME_CARD", "GAME_CASINO", "GAME_CASUAL", "GAME_EDUCATIONAL", "GAME_MUSIC", "GAME_PUZZLE", "GAME_RACING", "GAME_ROLE_PLAYING", "GAME_SIMULATION", "GAME_SPORTS", "GAME_STRATEGY", "GAME_TRIVIA", "GAME_WORD",

    // AllCountries = ["bb", "uz", "ch", "es", "lb", "ng", "mx", "eg", "cm", "uy", "th", "my", "bm", "cn", "gb", "il", "ec", "is", "hk", "in", "tw", "si", "nz", "ua", "cz", "do", "kw", "tr", "kr", "rs", "it", "vn", "sk", "sv", "no", "bh", "al", "ca", "kz", "qa", "ph", "pe", "by", "sa", "fr", "ge", "om", "kg", "ke", "hr", "kh", "ve", "ie", "pa", "az", "dz", "gt", "am", "py", "mt", "au", "be", "ae", "at", "hn", "za", "nl", "ru", "cy", "gh", "ar", "sg", "mo", "lk", "dk", "ni", "br", "bg", "pk", "lt", "sn", "cl", "us", "cr", "mg", "ao", "lu", "pt", "fi", "pl", "de", "jp", "co", "ee", "hu", "gr", "ug", "se", "tn", "lv", "ro", "id", "bo"]

    // section for smoke tests
    applications = {
        GP: {'spotify':'com.spotify.music','scanner': 'com.bpmobile.iscanner.free', 'snapchat':'com.snapchat.android', 'pinterest':'com.pinterest'},
        AS: {'spotify':'324684580','tiktok': '835599320', 'snapchat':'447188370', 'flirtme':'1336519654', 'onetwotrip': '811057180'},
        RS: {'tinkoff':'ru.tinkoff.sme-rs'}
    }
}
