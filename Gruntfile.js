module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        clean:{
            test:[
                "test/fixtures/**/*.js",
                "test/fixtures/sourcemap/*.js.map",
                "test/fixtures/*.d.ts",
                "test/temp/**/*.*",
                "test/temp"
            ],
            demo_sourcemap:[
                "demo/sourcemap/grunt/build/**/*.js",
                "demo/sourcemap/grunt/build/**/*.js.map",
                "demo/sourcemap/tsc/build/**/*.js",
                "demo/sourcemap/tsc/build/**/*.js.map"
            ]
        },
        typescript:{
            simple:{
                src:["test/fixtures/simple.ts"]
            },
            declaration:{
                src:"test/fixtures/declaration.ts",
                options:{
                    declaration:true
                }
            },
            sourcemap:{
                src:"test/fixtures/sourcemap.ts",
                dest:"test/fixtures/sourcemap/",
                options:{
                    base_path: "test/fixtures/",
                    sourcemap:true
                }
            },
            "sourcemap-fullpath":{
                src:"test/fixtures/sourcemap-fullpath.ts",
                dest:"test/fixtures/sourcemap/",
                options:{
                    base_path: "test/fixtures/",
                    sourcemap:true,
                    sourcemap_fullpath:true
                }
            },
            es5:{
                src:"test/fixtures/es5.ts",
                options:{
                    target:"ES5"
                }
            },
            "no-module":{
                src:"test/fixtures/no-module.ts"
            },
            amd:{
                src:"test/fixtures/amd.ts",
                options:{
                    module:"amd"
                }
            },
            commonjs:{
                src:"test/fixtures/commonjs.ts",
                options:{
                    module:"commonjs"
                }
            },
            single:{
                src:"test/fixtures/single/**/*.ts",
                dest: "test/temp/single.js"
            },
            multi:{
                src:"test/fixtures/multi/**/*.ts",
                dest:"test/temp/multi"
            },
            basePath:{
                src:"test/fixtures/multi/**/*.ts",
                dest:"test/temp/basePath",
                options: {
                    base_path: "test/fixtures/multi"
                }
            },
            "utf8-with-bom":{
                src:"test/fixtures/utf8-with-bom.ts"
            },
            "no-output":{
                //存在しないファイル
                src:"text/fixtures/no-output.ts",
                dest:"test/temp/no-output.js"
            },
            comments:{
                src:"test/fixtures/comments.ts",
                options:{
                    comments:true
                }
            },
            demo_sourcemap_basic:{
                src:"demo/sourcemap/grunt/lib/basic.ts",
                dest:"demo/sourcemap/grunt/build/js/",
                options: {
                    base_path: "demo/sourcemap/grunt/lib/",
                    sourcemap:true
                }
            },
            demo_sourcemap_full:{
                src:"demo/sourcemap/grunt/lib/fullpath.ts",
                dest:"demo/sourcemap/grunt/build/js/",
                options: {
                    base_path: "demo/sourcemap/grunt/lib/",
                    sourcemap:true,
                    sourcemap_fullpath:true
                }
            }
        },
        nodeunit:{
            tests:["test/test.js"]
        },
        shell: {
            demo_sourcemap_basic: {
                command: 'tsc --sourcemap -v -out build/js lib/basic.ts',
                options: {
                    stdout: true,
                    stderr: true,
                    execOptions: {
                        cwd: 'demo/sourcemap/tsc/'
                    }
                }
            },
            demo_sourcemap_full: {
                command: 'tsc --sourcemap --fullSourceMapPath -v -out build/js lib/fullpath.ts',
                options: {
                    stdout: true,
                    stderr: true,
                    execOptions: {
                        cwd: 'demo/sourcemap/tsc/'
                    }
                }
            }
        }
    });

    grunt.loadTasks("tasks");
    grunt.loadNpmTasks("grunt-contrib-nodeunit");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-shell");
    grunt.registerTask("test", ["clean", "typescript", "nodeunit"]);

    grunt.registerTask("default", ["clean:test", "test"]);

    grunt.registerTask("demo", ["clean:demo_sourcemap", "typescript:demo_sourcemap_basic","typescript:demo_sourcemap_full", "shell:demo_sourcemap_basic","shell:demo_sourcemap_full"]);

    grunt.registerTask("build", ["demo"]);
};
