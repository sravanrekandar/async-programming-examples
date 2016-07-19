(function(){
  'use strict';
  const COLORS = ['#4A148C', '#7B1FA2', '#9C27B0', '#BA68C8', '#E1BEE7'];
  const OFFSET = 105;
  class Pole{
    constructor(index){
      this.index = index;
      this.color = COLORS[index];
      
      this.timeInterval = Math.floor(Math.random() * 5) + 3;
      this.minHeight = 10;
      this.maxHeight = window.innerHeight - 50;
      this.height = 20;
      this.width = (window.innerWidth / 5) - 20;
      this.expandDirection = 1;
      this.maxTicks = 1000;
      this.ticks = this.maxTicks;
      this.animInterval = null;

      this.dom = this.createDOM();
      this.render();
      this.animate();
    }
    createDOM(){
      const dom = document.createElement('DIV');
      dom.classList.add('pole');
      dom.style.height = this.height;
      dom.style.width = (this.width - 10) + 'px'
      dom.style.left = (this.index * this.width) + 'px';
      dom.style.backgroundColor = this.color;
      dom.innerText = this.index;
      return dom; 
    }
    render(){
      document.getElementById('page-container').appendChild(this.dom);
    }
    animate(){
      this.animInterval = setInterval(() => {
        if(this.height >= this.maxHeight || this.height <= this.minHeight) {
          this.expandDirection = -1 * this.expandDirection;
        }

        this.height += this.expandDirection * 2;
        this.updateHeight();
        if(this.ticks-- <= 0) {
          clearInterval(this.animInterval);
        }
      }, this.timeInterval);
    }
    updateHeight(){
      this.dom.style.height = this.height + 'px';
    }
  }

  // Creating 5 poles
  for(let i = 0; i < 5; i++) {
    new Pole(i)
  }
}());
