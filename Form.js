class Form {

    constructor() {
        this.input = createInput("Type Your Name");
        this.email = createInput("Type Your Email")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Lets Take A Survey");
        this.question1 = createElement('h3', "Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        this.radio = createRadio('h3');
        this.radio.option('YES');
        this.radio.option('NO');
        this.question2 = createElement('h3', "Q2. Would you be willing to contribute a small amount every month for such a program?");
        this.radio1 = createRadio('h3');
        this.radio1.option('YES');
        this.radio1.option('NO');
        this.question3 = createElement('h3', "Q3. How much per month would you be willing to pay?");
        this.radio2 = createRadio('h3');
        this.radio2.option('100');
        this.radio2.option('500');
        this.radio2.option('1000');
        this.radio2.option('More');
    }


    display() {
        this.input.position(240, 255)
        this.email.position(240, 165)
        this.button.position(300, 700)
        this.greeting.position(200, 105)
        this.text.position(200, 5)
        this.question1.position(100, 360)
        this.radio.position(200, 420)
        this.question2.position(100, 450)
        this.radio1.position(200, 510)
        this.question3.position(100, 540)
        this.radio2.position(200, 600)

        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            votersCount += 1;
            User.index = votersCount;
            User.update();
            User.updateCount(votersCount);
        });

    }
}