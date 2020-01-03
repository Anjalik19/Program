exports.singletonDesign=()=>
{
    let singleton = (function () {
        let instance;
        function createInstance() {
            let object = new Object("hello");
            return object;
        }
        return {
            getInstance: function () {
                if (!instance) {
                    instance = createInstance();
                }
                return instance;
            }
        };
    })();
    function run() {
        let instance1 = singleton.getInstance();
        let instance2 = singleton.getInstance();
        if (instance1 === instance2) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
    run();
}