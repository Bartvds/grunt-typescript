var Simple3;
(function (Simple3) {
    function main() {
        throw new Error('error yo!');
        return "fullpath";
    }
    Simple3.main = main;
})(Simple3 || (Simple3 = {}));
Simple3.main();
//@ sourceMappingURL=file:///D:/_Editing/github/grunt-typescript/grunt-typescript/demo/sourcemap/tsc/build/js/fullpath.js.map
