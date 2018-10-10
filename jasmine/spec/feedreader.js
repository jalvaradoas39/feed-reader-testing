/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         it('should have URL defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });


         it('should have name defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    describe('The menu', function() {
        let menuElem = document.getElementsByTagName('body')[0];

        it('should be hidden by default', function() {
            // upon initial pageload, menu-hidden class set by default
            expect(menuElem.classList.contains('menu-hidden')).toBe(true);
        });


        it('should toggle visibility when clicked', function() {
            // set up our target elements
            let menuIconElem = document.querySelector('.menu-icon-link');

            // use click() to simulate first click on element
            menuIconElem.click();
            // menu-hidden class should be removed on first click
            expect(menuElem.classList.contains('menu-hidden')).toBe(false);

            // use click() to simulate second click on element
            menuIconElem.click();
            // menu-hidden class should be added on second click
            expect(menuElem.classList.contains('menu-hidden')).toBe(true);
        });
    });


    describe('Initial Entries', function() {
        // declare variable
        let entryElems;

        // code to execute before each spec
        beforeEach(function (done) {
            loadFeed(0, function () {
                // get targets
                entryElems = document.querySelectorAll('.feed .entry');
                done();
            });
        });

        it('at least one entry inside feed', function () {
            expect(entryElems.length).toBeGreaterThan(0);
        });
    });


    describe('New Feed Selection', function() {
         // declare variables
         let firstFeed;
         let secondFeed;

         // code to execute before each spec
         beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = document.querySelector('.entry-link').innerHTML;

                // execute second loadFeed after first loadFeed finishes
                loadFeed(1, function() {
                    secondFeed = document.querySelector('.entry-link').innerHTML;
                    done();
                });
            });
         });

        it('loads new feeds', function(done) {
            expect(secondFeed !== firstFeed).toBe(true);
            done();
        });
    });

}());
