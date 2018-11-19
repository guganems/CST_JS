class Speaker {
    constructor(name, verb) {
        this.name = name
        this.verb = verb || "says";
    }

    get getVerb(){
        return this.verb;
    }

    speak(text) {
        console.log(this.name + " " + this.getVerb + " '" + text + "'")
    }
}
  
class Shouter extends Speaker {
    constructor(name) {
      super(name, "shouts")
    }
    speak(text) {
      super.speak(text.toUpperCase())
    }
}
  
new Shouter("Dr. Loudmouth").speak("hello there")
  