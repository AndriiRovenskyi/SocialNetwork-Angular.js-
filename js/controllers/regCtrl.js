app.controller('regCtrl',["dataUsers",function(dataUsers, $location){
    
    var vm = this;
    
    vm.addUser=function(){
        dataUsers.regUser(vm.user);
        console.log(users);

    }
    vm.back=function(){
        dataUsers.back();
    }
    
    
}])