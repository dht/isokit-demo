import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DemoHudFull, DemoHudFullProps } from './DemoHudFull';
import { BaseComponentDriver } from 'testing-base';

export class DemoHudFullDriver extends BaseComponentDriver {
    private props: Partial<DemoHudFullProps> = {};

    constructor() {
        super('DemoHudFull');
    }

    when: any = {
        rendered: () => {
            render(<DemoHudFull {...(this.props as DemoHudFullProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DemoHudFull {...(this.props as DemoHudFullProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DemoHudFullProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
