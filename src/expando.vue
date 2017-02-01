<template>
    <div class="vue-expando" v-content-expand>
        <div class="vue-expando-transitionWrap vue-expando-content" v-content-get-height>

            <div class="vue-expando-header">
                <span class="vue-expando-control"
                    @click="toggleOpen">
                    <span v-if="panelIsOpen"> Collapse </span>
                    <span v-else> Expand </span>
                </span>

                <slot name="header"></slot>

            </div>

            <div class="vue-expando-body">
                <slot name="body"></slot>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                panelIsOpen: false,
                bodyHeight: 0,
                baseHeight: 96
            }
        },

        created () {
            this.baseHeight = this.initialHeight || this.baseHeight
        },

        methods: {
            toggleOpen () {
                if (this.panelIsOpen) { // close it
                    this.expandEl.style.height = this.baseHeight + 'px'
                } else { // open it
                    this.expandEl.style.height = this.bodyHeight + 'px'
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
                    // calculated height of body in target element
                    vnode.context.bodyHeight = el.clientHeight
                }
            }
        },

        props: [
            'initialHeight'
        ]
    }
</script>

<style scoped>
    .vue-expando {
        overflow: hidden;
        transition: height 300ms ease;
        height: 96;
    }

    .vue-expando-content {
        position: relative;
    }

    .vue-expando-control {
        position: absolute;
        top: 8px;
        right: 8px;
    }

    .vue-expando-header {
    }

    .vue-expando-body {
    }
</style>
