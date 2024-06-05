/// <reference types="cypress" />
import {Auth} from "../../Service_new/Classes_library/Auth";

const auth = new Auth();

describe('Keyword Density Counter should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('DC "density counter" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/1336519654/density-counter',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            body: {
                content: "App Store Game of the Year in selected countries.\n 200+ MILLION USERS!\n\nDrive your bike through amazing tracks with jumps and loops \n in this simple and fast-paced physics-based game.\n\nMultiplayer! Challenge your Facebook\n  friends.\n\nTilt your device to lean your bike and touch the screen to accelerate/brake.\nApp Store Game of the Year in selected countries.\n 200+ MILLION USERS!\n\nDrive your bike through amazing tracks with jumps and loops \n in this simple and fast-paced physics-based game.\n\nMultiplayer! Challenge your Facebook\n  friends.\n\nTilt your device to lean your bike and touch the screen to accelerate/brake."
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.keywords).not.be.empty;
                expect(response.body.total_chars).not.be.eq(0);
            })
    });
});
