import Route from '@ember/routing/route';
import wait from 'new-rarwe/utils/wait';
//mport RSVP from "rsvp";

export default Route.extend({
    async model() {
        await wait(1500);
        return this.modelFor('bands.band');
    },
    // model: function() {
    //     return this.modelFor('bands.band');
    // },
    // model() {
    //     return RSVP.reject(this.modelFor('bands.band'));
    // },
    resetController(controller) {
        controller.setProperties({
            isAddingSong: false,
            newSongTitle: ''
        });
    },
    actions: {
        didTransition() {
            let band = this.modelFor('bands.band');
            document.title = `${band.name} songs - Rock & Roll`;
        },
    }
});
