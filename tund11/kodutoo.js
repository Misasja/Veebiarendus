(function(){
    new Vue({
      el: '#todo-list',
      data: {
        items: [],
        todoText: ''
      },
      methods: {
        add: function(){
          this.items.push({
            text: this.todoText
          });
          this.todoText = '';
        },
        'delete': function(ev){
          this.items.remove(ev.targetVM.$data);
        },
        deleteAll: function(){
          this.items = [];
        }
      }
    });
  }).call(this);