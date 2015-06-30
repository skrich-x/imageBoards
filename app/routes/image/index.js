import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return[
        {title: 'Title One',url: "http//lorempixel.com/640/480/animals"},
        {title: 'Title Two',url: "http//lorempixel.com/640/480/animals"}
      ];
  }
});
