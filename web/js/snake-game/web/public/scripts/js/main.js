var obj = {
    showContext: function showContext() {
        // this = obj
     setTimeout (() => {
           this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};

obj.showContext();