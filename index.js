class SortedList {

  
  constructor() {
   
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    
      this.items.push(item);
      this.length = this.items.length ;
      return this.items.sort((a, b) => a - b);
    }
  

  get(pos) {
    if(this.items.indexOf(pos) === -1){
      throw new Error("Something went wrong");
          
      }
      else {
        return this.items[pos];
      }

  }

  max() {
    if(this.items.length === 0){
      throw  new  Error ( 'EmptySortedList' ) ;
  } else {
    return Math.max(...this.items);
  }
     
  }

  min() {
    if(this.items.length === 0){
      throw  new  Error ( 'EmptySortedList' ) ;
  } else {
    return Math.min(...this.items);
  }
  }

  sum() {

    if(this.length === 0){
      return 0 ;
    }else {
      return this.items.reduce((acc,current)=> acc + current)
    
    }
    
   }

    


  avg() {
    if(this.length === 0){
    throw  new  Error ( 'error' )
    }else {
      return avg = this.acc / this.length
    }
}
}

module.exports = SortedList;
