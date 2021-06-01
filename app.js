class Celula {
    constructor(life, neighbors) {
        this.life = life;
        this.neighbors = neighbors;
    }

    getLife() {
        return this.life;
    }

    getNeighbors() {
        return this.neighbors;
    }

    setLife(life) {
        this.life=life;
    }

    setNeighbors(Neighbors) {
        this.neighbors= Neighbors;
    }

    toString() {
        //muerto
        if(this.life == 0) {
            return '.';
        } else {
            return '*';
        }
    }
};

 

