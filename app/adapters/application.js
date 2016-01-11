import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',
  updateRecord(store, type, snapshot) {
    const url = `${this.host}/user/starred/${snapshot.attr('fullName')}`;
    return this.ajax(url, "PUT", {});
  }
});
