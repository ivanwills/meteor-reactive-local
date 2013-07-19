Name
====

meteor-reactive-local - Session like object that stores data into localStorage

SYNOPSIS
========

    // Set a value into localStorage
    ReactiveLocal.set('mykey', 'myvalue');

    // Retrieve the value back
    ReactiveLocal.get('mykey');

Description
===========

Meteor's Session object is lost as soon as the user exits or reloads a page.
The ReactiveLocal object creates a drop in replacement that persists accross
page loads.

The code is baised on the example of a [reactive data source](http://www.eventedmind.com/posts/meteor-build-a-reactive-data-source).


