app.controller('logInCtrl', ["dataUsers", function(dataUsers){ 
    var vm = this;

    vm.check=function(){
       dataUsers.checkUser(vm.user); 
    }
    
vm.registration=function(){
   dataUsers.regShow();
};
    
    vm.exit=function(){
        dataUsers.exitUser();
        vm.whoIsNow="";
    }
    vm.whoIsNow=localStorage.getItem('name');
    
}])