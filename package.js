Package.describe({
    summary: "A Reactive localStorage data source"
});

Package.on_use(function(api) {
    api.add_files('reactive-local.js', ['client']);
});

