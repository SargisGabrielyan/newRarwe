import Route from '@ember/routing/route';
//import wait from 'new-rarwe/utils/wait';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';






export default Route.extend(AuthenticatedRouteMixin, {
    // async model() {
    //     await wait(3000);
    //     return this.store.findAll('band');
    // },
    model() {
        return this.store.findAll('band');
    },
    actions: {
        didTransition() {
            document.title = 'Bands - Rock & Roll';
        },
    }
});