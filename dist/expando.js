var expando = { template: "<div class=\"vue-expando\" v-content-expand><div class=\"vue-expando-transitionWrap\" v-content-get-height><div class=\"vue-expando-header\"><h4 class=\"vue-expando-title\">{{ title }}</h4><p class=\"vue-expando-subtitle\">{{ subtitle }}</p><span class=\"vue-expando-control\" @click=\"toggleOpen\"><span v-if=\"panelIsOpen\">Collapse </span><span v-else>Expand</span></span></div><div class=\"vue-expando-content\"><slot></slot></div></div></div>",
    data: function data () {
        return {
            panelIsOpen: false,
            contentHeight: 0,
            baseHeight: 104
        }
    },

    computed: {
    },

    methods: {
        toggleOpen: function toggleOpen () {
            if (this.panelIsOpen) { // close it
                this.expandEl.style.height = this.baseHeight + 'px';
            } else { // open it
                this.expandEl.style.height = this.contentHeight + 'px';
            }

            // flip the val
            this.panelIsOpen = !this.panelIsOpen;
        }
    },

    directives: {
        'content-expand': {
            inserted: function inserted (el, binding, vnode) {
                // grab reference to element we want to expand/contract
                vnode.context.expandEl = el;
            }
        },

        'content-get-height': {
            inserted: function inserted (el, binding, vnode) {
                // calculated height of content in target element
                vnode.context.contentHeight = el.clientHeight;
            }
        }
    },

    props: [
        'title',
        'subtitle'
    ]
};

export default expando;
