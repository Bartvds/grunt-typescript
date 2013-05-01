var Simple2;
(function (Simple2) {
    function main() {
        throw new Error('error yo!');
        return "basic";
    }
    Simple2.main = main;
})(Simple2 || (Simple2 = {}));
Simple2.main();
//@ sourceMappingURL=basic.js.map
