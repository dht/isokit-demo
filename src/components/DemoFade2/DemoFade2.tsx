import React from 'react';
import { Content, Wrapper } from './DemoFade2.style';
import { CityFX } from 'isokit';

export type DemoFade2Props = {};

export function DemoFade2(_props: DemoFade2Props) {
    return (
        <Wrapper className='DemoFade2-wrapper' data-testid='DemoFade2-wrapper'>
            <Content>
                <CityFX glbPath='/street.glb' />
            </Content>
        </Wrapper>
    );
}

export default DemoFade2;
