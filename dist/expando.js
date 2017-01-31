var expando = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"content-expand",rawName:"v-content-expand"}],staticClass:"vue-expando"},[_c('div',{directives:[{name:"content-get-height",rawName:"v-content-get-height"}],staticClass:"vue-expando-transitionWrap"},[_c('div',{staticClass:"vue-expando-header"},[_c('h4',{staticClass:"vue-expando-title"},[_vm._v(_vm._s(_vm.title))]),_c('p',{staticClass:"vue-expando-subtitle"},[_vm._v(_vm._s(_vm.subtitle))]),_c('span',{staticClass:"vue-expando-control",on:{"click":_vm.toggleOpen}},[(_vm.panelIsOpen)?_c('span',[_vm._v("Collapse ")]):_c('span',[_vm._v("Expand")])])]),_c('div',{staticClass:"vue-expando-content"},[_vm._t("default")],2)])])},staticRenderFns: [],
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
