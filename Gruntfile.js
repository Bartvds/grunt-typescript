module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        clean:{
            test:[
                "test/fixtures/**/*.js",
                "test/fixtures/*.js.map",
                "test/fixtures/*.d.ts",
                "test/temp/**/*.*",
                "test/temp"
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
                options:{
                    sourcemap:true
                }
            },
	        "sourcemap-fullpath":{
		        src:"test/fixtures/sourcemap-fullpath.ts",
		        options:{
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
	        sourcemap_dev:{
		        src:"test/sourcemap/sourcemap.ts",
		        dest:"test/sourcemap",
		        options: {
			        base_path: "test/sourcemap/",
			        sourcemap:true
		        }
	        },
	        sourcemap_dev_full:{
		        src:"test/sourcemap/sourcemap-fullpath.ts",
		        dest:"test/sourcemap/fullpath",
		        options: {
			        base_path: "test/sourcemap/",
			        sourcemap:true,
			        sourcemap_fullpath:true
		        }
	        }
        },
        nodeunit:{
            tests:["test/test.js"]
        }
    });

    grunt.loadTasks("tasks");
    grunt.loadNpmTasks("grunt-contrib-nodeunit");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.registerTask("test", ["clean", "typescript", "nodeunit"]);

    grunt.registerTask("default", ["test"]);

    grunt.registerTask("edit_01", ["typescript:sourcemap_dev","typescript:sourcemap_dev_full"]);
};
