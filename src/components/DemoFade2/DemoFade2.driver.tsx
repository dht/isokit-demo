import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DemoFade2, DemoFade2Props } from './DemoFade2';
import { BaseComponentDriver } from 'testing-base';

export class DemoFade2Driver extends BaseComponentDriver {
    private props: Partial<DemoFade2Props> = {};

    constructor() {
        super('DemoFade2');
    }

    when: any = {
        rendered: () => {
            render(<DemoFade2 {...(this.props as DemoFade2Props)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DemoFade2 {...(this.props as DemoFade2Props)} />);
        },
    };

    given: any = {
        props: (props: Partial<DemoFade2Props>) => {
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
