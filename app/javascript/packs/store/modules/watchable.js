import Api from '../../api';
 
const Watchable = {
   namespaced: true ,
   state: {
     featured: null,
     keepWatching: null,
     categories: []
   },
   mutations: {
    setFeatured(state, watchable) {
     state.featured = watchable.data.attributes;
    },
    setKeepWatching(state, watchables) {
     state.keepWatching = watchables.data;
    },
    setCategories(state, categories) {
     state.categories = categories.data;
    }
  },
  actions: {
   getFeatured(context) {
    Api.Watchable.getFeatured()
     .then (response => response.data)
     .then (watchable => {
      context.commit( 'setFeatured' , watchable)
     }).catch(function (error) {
       console.log(error);
     });
  },
  getKeepWatching(context) {
   Api.Watchable.getKeepWatching()
   .then (response => response.data)
   .then (watchables => {
     context.commit( 'setKeepWatching' , watchables)
  }).catch(function (error) {
     console.log(error);
  });
 },
 getCategories(context) {
  Api.Watchable.getCategories()
   .then (response => response.data)
   .then (categories => {
    context.commit( 'setCategories' , categories)
   }).catch(function (error) {
     console.log(error);
   });
  }
 }
};
 
export default Watchable;