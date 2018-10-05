Feed Reader Testing
===============================

# Table of Contents

* [Description](#description)
* [Project Instructions](#project-instructions)
* [Run the Application](#run-the-application)
* [To Complete the Tests](#to-complete-the-tests)
* [Code Dependencies](#code-dependencies)

## Description

* Project created as part of the Udacity Front-End Developer Nanodegree.

## Project Instructions

In this project, I was given a web-based application that reads RSS feeds. The project simulates a common senario in which the original developer of this application already began unit-testing with Jasmine. Unfortunately, they decided to move on to start their own company and I was now left with an application with an incomplete test suite. That's where I came in to complete the task.

## Run the Application

In order to run the application you can:

* Download as .zip file
* Clone or fork this project:

    ```
    $ git clone https://github.com/jalvaradoas39/feed-reader-testing.git
    ```
After that, open the `index.html` and check the test results.


# To Complete the Tests

Some steps were given to write the tests

1. Review the functionality of the application within your browser.
2. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
3. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
4. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
5. Return the `allFeeds` variable to a passing state.
6. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
7. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
8. Write a new test suite named `"The menu"`.
9. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
10. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
11. Write a test suite named `"Initial Entries"`.
12. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
13. Write a test suite named `"New Feed Selection"`.
14. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
15. No test should be dependent on the results of another.
16. Callbacks should be used to ensure that feeds are loaded before they are tested.
17. Implement error handling for undefined variables and out-of-bound array access.
18. When complete - all of your tests should pass. 

## Code Dependencies

* [Project Feed Reader Testing - Starter Code](https://github.com/udacity/frontend-nanodegree-feedreader)
* [jQuery](https://jquery.com/)
* [Normalize.css](https://necolas.github.io/normalize.css/)
* [Handlebars](https://handlebarsjs.com/)
* [Google's JavaScript Loader API](https://www.google.com/jsapi)
* [Jasmine](https://jasmine.github.io/)
* Icon: [Icomoon](https://icomoon.io/)
* Fonts: [Google Fonts](https://fonts.google.com/)

