Package.describe({
    summary: "A Reactive localStorage data source"
});

Package.on_use(function(api) {
    api.use('standard-app-packages', ['client']);
    api.use('jquery-localstorage', ['client']);

    api.add_files('reactive-local.js', ['client']);

    api.export('ReactiveLocal');
    api.export('ReactiveSession');
});

