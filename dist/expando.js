var expando = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"content-expand",rawName:"v-content-expand"}],staticClass:"vue-expando"},[_c('div',{directives:[{name:"content-get-height",rawName:"v-content-get-height"}],staticClass:"vue-expando-transitionWrap vue-expando-content"},[_c('div',{staticClass:"vue-expando-header"},[_c('span',{staticClass:"vue-expando-control",on:{"click":_vm.toggleOpen}},[(_vm.panelIsOpen)?_c('span',[_vm._v("Collapse ")]):_c('span',[_vm._v("Expand")])]),_vm._t("header")],2),_c('div',{staticClass:"vue-expando-body"},[_vm._t("body")],2)])])},staticRenderFns: [],
    data: function data () {
        return {
            panelIsOpen: false,
            bodyHeight: 0,
            baseHeight: 96
        }
    },

    created: function created () {
        this.baseHeight = this.initialHeight || this.baseHeight;
    },

    methods: {
        toggleOpen: function toggleOpen () {
            if (this.panelIsOpen) { // close it
                this.expandEl.style.height = this.baseHeight + 'px';
            } else { // open it
                this.expandEl.style.height = this.bodyHeight + 'px';
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
                // calculated height of body in target element
                vnode.context.bodyHeight = el.clientHeight;
            }
        }
    },

    props: [
        'initialHeight'
    ]
};

export default expando;
