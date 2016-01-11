import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',
  headers: {
    Authorization: "token 6258d72304b8c8e68fc286666109d5e41c6c8978" // replace!
  },

  updateRecord(store, type, snapshot) {
    const url = `${this.host}/user/starred/${snapshot.attr('fullName')}`;
    return this.ajax(url, "PUT", {});
  }
});
