function skillsMember(){
    var skills = {
        name: 'John',
        age: 25,
        skills: ['HTML', 'CSS', 'JS', 'React', 'Node'],
        details: function(){
            console.log(`Name is ${this.name} and age is ${this.age} and skills are ${this.skills}`);
        }
    }
    return skills;
}