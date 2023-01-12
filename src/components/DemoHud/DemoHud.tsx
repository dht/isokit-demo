import React from 'react';
import { Content, Wrapper } from './DemoHud.style';
import { ModelViewer } from 'isokit';
import { config, items, timeline } from './DemoHud.data';

export type DemoHudProps = {};

export function DemoHud(_props: DemoHudProps) {
    return (
        <Wrapper className='DemoHud-wrapper' data-testid='DemoHud-wrapper'>
            <Content>
                <ModelViewer
                    glbPath='/bag.glb'
                    radius={7}
                    alpha={0.2}
                    beta={1.5}
                    config={config}
                    items={items}
                    timeline={timeline}
                />
            </Content>
        </Wrapper>
    );
}

export default DemoHud;
