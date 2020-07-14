describe('Demo freelancer test', function () {

    it('test case1 how it works', function () {
        browser.driver.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.get('https://www.freelancer.in/');

        console.log("helllooooo freelancer");

        browser.manage().window().maximize();

        browser.wait(function() {
            return element(by.css('[href=\'/info/how-it-works\'][data-underline=\'never\']')).isPresent();
         }, 5000);

        element(by.css('[href=\'/info/how-it-works\'][data-underline=\'never\']')).click();

        browser.wait(function() {
            return element(by.css('a[href=\'/job/\']')).isPresent();
         }, 5000);
  
        element(by.css('a[href=\'/job/\']')).click();

        browser.wait(function() {
            return element(by.css('button[data-scroll-target=\'category-1\'] > .PageJob-majorCategory-title')).isPresent();
         }, 5000);

        element(by.css('button[data-scroll-target=\'category-1\'] > .PageJob-majorCategory-title')).click();

        browser.sleep(2000);
        element(by.css('a[title=\'Java Jobs\']')).click();
       
        browser.sleep(10000);


    });

});




