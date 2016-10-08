angular.module("config", [])
    .constant("GLOBAL_CONFIGURATION", {
        //Application data
        application: {
            environment: "dev",
            language: "es",
            home: "app/home/index"
        }
    });
