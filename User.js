class User {
    constructor() {
        this.index = null;
        this.email = null
        this.input = null;
    }

    updateCount(count) {
        database.ref('/').update({
            votersCount: count
        });
    }

    update() {
        var votersIndex = "voter" + this.index;
        database.ref(votersIndex).set({
            input: this.input,
            email: this.email,
            answer: []
        });
    }
}