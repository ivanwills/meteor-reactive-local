
// A simple reactive data source on top of localStorage (with cookie fallback)
ReactiveLocal = {

    // deps store the same keys as above but the value
    // is a Deps.Dependency instance like this:
    // { "name": new Deps.Dependency }
    deps: {},

    // Make sure we've created a dependency object for the key
    // and then call the depend() method to create a dependency.
    // Finally, return the value.
    get: function (key) {
        this.ensureDeps(key).depend();
        return $.localStorage(key);
    },

    // Set the value of the key to the new value and then call
    // the changed() method on the dependency object which will
    // trigger any dependent functions to be re-run.
    set: function (key, value) {
        if ( typeof value == 'function' )
            throw "Can't store functions in ReactiveLocal! (Storing key '" + key + "')";
        $.localStorage(key, value);
        this.ensureDeps(key).changed();
    },

    // Make sure we create the Deps.Dependency object for the first
    // time
    ensureDeps: function (key) {
        if (!this.deps[key])
            this.deps[key] = new Deps.Dependency;

        return this.deps[key];
    }
};


// A simple reactive data source on top of sessionStorage (with cookie fallback)
ReactiveSession = {

    // deps store the same keys as above but the value
    // is a Deps.Dependency instance like this:
    // { "name": new Deps.Dependency }
    deps: {},

    // Make sure we've created a dependency object for the key
    // and then call the depend() method to create a dependency.
    // Finally, return the value.
    get: function (key) {
        this.ensureDeps(key).depend();
        return $.sessionStorage(key);
    },

    // Set the value of the key to the new value and then call
    // the changed() method on the dependency object which will
    // trigger any dependent functions to be re-run.
    set: function (key, value) {
        if ( typeof value == 'function' )
            throw "Can't store functions in ReactiveSession! (Storing key '" + key + "')";
        $.sessionStorage(key, value);
        this.ensureDeps(key).changed();
    },

    // Make sure we create the Deps.Dependency object for the first
    // time
    ensureDeps: function (key) {
        if (!this.deps[key])
            this.deps[key] = new Deps.Dependency;

        return this.deps[key];
    }
};
