<template>
    <div class="appSheet appExpansionPanel" v-content-expand>

        <div class="appExpansionPanel-transitionWrap"
            v-content-get-height>

            <div class="appExpansionPanel-header">
                <h4 class="appExpansionPanel-title"> {{ title }} </h4>

                <p class="appExpansionPanel-subtitle"> {{ subtitle }} </p>

                <span class="appExpansionPanel-control"
                    @click="toggleOpen">
                    <span v-if="panelIsOpen"> Collapse </span>
                    <span v-else> Expand </span>
                </span>
            </div>

            <div class="appExpansionPanel-content">
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
    .appExpansionPanel {
        overflow: hidden;
        transition: height 300ms ease;
        height: 104px;
    }

    .appExpansionPanel-transitionWrap {
        padding: 32px;
    }

    .appExpansionPanel-header {
        display: flex;
        align-items: center;
    }

    .appExpansionPanel-title {
        flex: 0 1 256px;
        margin: 0;
    }

    .appExpansionPanel-subtitle {
        flex: 1 1 auto;
        margin: 0;
    }

    .appExpansionPanel-control {
        flex: 0 0 32px;
    }

    .appExpansionPanel-content {
        margin-top: 32px;
    }
</style>
