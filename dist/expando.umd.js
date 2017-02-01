(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('Expando', factory) :
	(global.Expando = factory());
}(this, (function () { 'use strict';

var expando = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"content-expand",rawName:"v-content-expand"}],staticClass:"vue-expando",style:({ height: _vm.baseHeight })},[_c('div',{directives:[{name:"content-get-height",rawName:"v-content-get-height"}],staticClass:"vue-expando-transitionWrap vue-expando-content"},[_c('div',{staticClass:"vue-expando-header"},[_c('span',{staticClass:"vue-expando-control",on:{"click":function($event){_vm.toggleOpen();}}},[(_vm.panelIsOpen)?_c('span',[_vm._v("Collapse ")]):_c('span',[_vm._v("Expand")])]),_vm._t("header")],2),_c('div',{staticClass:"vue-expando-body"},[_vm._t("body")],2)])])},staticRenderFns: [],
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

    watch: {
        open: function open (val) {
            this.setOpen(!!val);
        },
    },

    methods: {
        setOpen: function setOpen (open) {
            if (open) {
                this.openPanel();
            } else {
                this.closePanel();
            }
        },

        toggleOpen: function toggleOpen () {
            if (this.panelIsOpen) { // close it
                this.closePanel();
            } else { // open it
                this.openPanel();
            }

            // flip the val
            this.panelIsOpen = !this.panelIsOpen;
        },

        openPanel: function openPanel () {
            this.expandEl.style.height = this.bodyHeight + 'px';
        },

        closePanel: function closePanel () {
            this.expandEl.style.height = this.baseHeight + 'px';
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
        'initialHeight',
        'open'
    ]
};

return expando;

})));
