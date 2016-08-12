# EasyTypeAhead
Easy remote typeahead based on [typeahead.js]'s plug in, helps developers to create an easy
way to set up the remote [examples] with laravel so far.
The Remote kind of the [typeahead.js] prefetch data when the page load and save it 
at the browser storage and request again to the server only if it does not find the seached value, 
wich makes the search way faster. 
The main goal is to implement it with others server side languages.

<!-- section links -->

[typeahead.js]: http://twitter.github.io/typeahead.js/
[examples]: https://twitter.github.io/typeahead.js/examples/

Setting up on Laravel
---------------------

Laravel 5.2.x was the tested version.
The folder structure follows the framework arquitecture.
Link the style and scripts files, implement the controller 
method as the example in the Controller folder and add the 
routes to the routes.php.
At the $(document).ready() place of your application, you
will have to call one of the functions
createTypeAheadId, createTypeAhead
The attributes to the Bloodhound object are passed as data- attributes
at the input tag as is the example in the views folder.

Examples of typeahead.js
--------

For some working examples of typeahead.js, visit the [examples page].

<!-- section links -->

[examples page]: http://twitter.github.io/typeahead.js/examples

Documentation 
-------------

* [jQuery]
* [Typeahead Docs]
* [Bloodhound Docs]

[jQuery]: http://api.jquery.com/
[Typeahead Docs]: https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md
[Bloodhound Docs]: https://github.com/twitter/typeahead.js/blob/master/doc/bloodhound.md


Browser Support
---------------

* Chrome
* Firefox 3.5+
* Safari 4+
* Internet Explorer 8+
* Opera 11+

**NOTE:** typeahead.js is not tested on mobile browsers.

