import React from 'react'

import Sortable from 'sortablejs'
import RComponent from '../HOC/r-component'
export default class SortableComponent extends RComponent {
    constructor(props) {
        super(props)
        this.onMount(() => {
            if (this.root) {
                Sortable.create(this.root, {
                    animation: 150,
                    ghostClass: 'blue-background-class',
                    onEnd: (event) => {
                        const { oldIndex, newIndex } = event;
                        if (this.props.onDrop && typeof this.props.onDrop == 'function') {
                            this.props.onDrop({
                                oldIndex, newIndex
                            })
                        }
                    },
                    ...props
                });
            }
        })
    }


    render() {
        const { children, className } = this.props;

        return (
            <div ref={ele => this.root = ele} className={className || ''}>
                {children}
            </div>
        )
    }
}
