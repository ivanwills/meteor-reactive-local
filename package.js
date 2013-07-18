Package.describe({
    summary: "A Reactive localStorage data source"
});

Package.on_use(function(api) {
    api.use('jquery-localstorage', ['client']);

    api.add_files('reactive-local.js', ['client']);
});

