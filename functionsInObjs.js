var person = {
    fname : "Divyaranjan",
    lname : "Parida",
    getFullName : function(){
        return this.fname+" "+this.lname;
    },
    address : {
        city : "Indore",
        state : "MP"
    },
    isFromState : function(stateName){
        //console.log(this.address,stateName);
        if (this.address.state.toUpperCase()===stateName.toUpperCase()) {
            return "YES";
        } else {
            return "NO";
        }
    },
}

console.log(person.isFromState("mp"));
console.log(person.getFullName(10));
