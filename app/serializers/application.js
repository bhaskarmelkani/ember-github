import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  keyForAttribute: function(key){
    console.log('keyForAttribute');
    console.log(key);
    return Ember.String.decamelize(key);
  }
});
