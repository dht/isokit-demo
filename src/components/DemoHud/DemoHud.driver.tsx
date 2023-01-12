import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DemoHud, DemoHudProps } from './DemoHud';
import { BaseComponentDriver } from 'testing-base';

export class DemoHudDriver extends BaseComponentDriver {
    private props: Partial<DemoHudProps> = {};

    constructor() {
        super('DemoHud');
    }

    when: any = {
        rendered: () => {
            render(<DemoHud {...(this.props as DemoHudProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DemoHud {...(this.props as DemoHudProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DemoHudProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
