const posts = [];
let indexPost = -1;

class Task {
    constructor(id, title, status){
        this.id = id;
        this.title = title;
        this.status = status;
    }
}

class ListTask {
    constructor(){
        this.Task = [];
    }
}

function listPublic() {
    document.getElementById("text").classList.remove("fa-solid fa-plus");
    let showContent = "";
}
