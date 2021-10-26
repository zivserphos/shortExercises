function Cat(num) {
    this.tirdness = 5;
    this.hunger = 5;
    this.lonliness = 5;
    this.happiness = 5;
    
    this.feed = function() {
        this.hunger -=2;
    }

    this.sleep = function(num) {
        if (num>2)
            this.tirdness -=2
        else 
            this.tirdness-=1;
    }

    this.abandon = function(){
        this.lonliness +=2;
    }

    this.status = function() {
        return "TIERDNESS: " + this.tirdness + " , HUNGER: " + this.hunger + " , LONLINESS: " + this.lonliness + " HAPINESS: " + this.happiness; 
    }
}

const cat = new Cat(8)
console.log(cat.status())