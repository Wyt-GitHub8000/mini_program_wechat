// components/w-tabbar-control/w-tabbar-control.js
Component({
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  data: {
    currentIndex:0
  },

  methods: {
    handleItemClick(event){
     const index = event.currentTarget.dataset.index;
     this.setData({
       currentIndex : index
     })
     this.triggerEvent('itemClick',{index,title:this.properties.titles[index]},{})
    }
  }
})
