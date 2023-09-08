var obj = {

    id: 100,
    print: function () {
        console.log("id", this.id);
        setTimeout(function () { console.log("id after 2sec", this.id); }, 2000);// id will be undefeined 

        setTimeout(function () { console.log("id after 2sec rtyrytryu", obj.id); }, 2000);

        setTimeout( () =>{ console.log("id after 2sec arrow", this.id); }, 2000);
    }
}

obj.print();

