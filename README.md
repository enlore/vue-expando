# Expando

A very, very simple component for wrapping content for which you'd like to
animate a height transition without resorting to goofy CSS tricks.

## Usage

    // all of this assumes you're using some kind of build process to
    // facilitate single file components

    // import it
    import Expando from 'vue-expando'

    // register it globally for your app
    Vue.component(Expando)

    // or register it locally for a given parent component
    export default {
        // ...
        components: {
            Expando
        },
        //...
    }

    // and use it
    <template>
        <expando title="Main Title"
            subtitle="Subtitle">
            <your-content-occupies-the-singular-slot-in-the
        </expando>
    </template>
