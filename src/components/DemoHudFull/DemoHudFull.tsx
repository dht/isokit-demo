import React from 'react';
import { Wrapper } from './DemoHudFull.style';
import { block } from '@gdi/block-hero-ouywy';

export type DemoHudFullProps = {};

export function DemoHudFull(_props: DemoHudFullProps) {
    const Cmp = block.component;

    console.log('Cmp ->', Cmp);

    return (
        <Wrapper
            className='DemoHudFull-wrapper'
            data-testid='DemoHudFull-wrapper'
        >
            <Cmp />
        </Wrapper>
    );
}

export default DemoHudFull;
