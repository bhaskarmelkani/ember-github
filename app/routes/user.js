import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.findRecord('user', 'bhaskarmelkani');
  }
  , actions: {
    star(repo){
      repo.save();
    }
  }
});
