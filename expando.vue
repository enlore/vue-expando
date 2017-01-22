<template>
    <div class="vue-expando" v-content-expand>
        <div class="vue-expando-transitionWrap" v-content-get-height>

            <div class="vue-expando-header">
                <h4 class="vue-expando-title"> {{ title }} </h4>

                <p class="vue-expando-subtitle"> {{ subtitle }} </p>

                <span class="vue-expando-control"
                    @click="toggleOpen">
                    <span v-if="panelIsOpen"> Collapse </span>
                    <span v-else> Expand </span>
                </span>
            </div>

            <div class="vue-expando-content">
                <slot></slot>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                panelIsOpen: false,
                contentHeight: 0,
                baseHeight: 104
            }
        },

        computed: {
        },

        methods: {
            toggleOpen () {
                if (this.panelIsOpen) { // close it
                    this.expandEl.style.height = this.baseHeight + 'px'
                } else { // open it
                    this.expandEl.style.height = this.contentHeight + 'px'
                }

                // flip the val
                this.panelIsOpen = !this.panelIsOpen
            }
        },

        directives: {
            'content-expand': {
                inserted (el, binding, vnode) {
                    // grab reference to element we want to expand/contract
                    vnode.context.expandEl = el
                }
            },

            'content-get-height': {
                inserted (el, binding, vnode) {
                    // calculated height of content in target element
                    vnode.context.contentHeight = el.clientHeight
                }
            }
        },

        props: [
            'title',
            'subtitle'
        ]
    }
</script>

<style scoped>
    .vue-expando {
        overflow: hidden;
        transition: height 300ms ease;
        height: 104px;
    }

    .vue-expando-transitionWrap {
        padding: 32px;
    }

    .vue-expando-header {
        display: flex;
        align-items: center;
    }

    .vue-expando-title {
        flex: 0 1 256px;
        margin: 0;
    }

    .vue-expando-subtitle {
        flex: 1 1 auto;
        margin: 0;
    }

    .vue-expando-control {
        flex: 0 0 32px;
    }

    .vue-expando-content {
        margin-top: 32px;
    }
</style>
