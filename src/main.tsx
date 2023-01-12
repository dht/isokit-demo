import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { DemoFade2Container } from './containers/DemoFade2Container';
import { DemoHudContainer } from './containers/DemoHudContainer';
import { DemoHudFullContainer } from './containers/DemoHudFullContainer';
import './index.scss';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);

    root.render(
        <Router>
            <Routes>
                <Route path='/hud' element={<DemoHudContainer />} />
                <Route path='/hud-full' element={<DemoHudFullContainer />} />
                <Route path='/fade2' element={<DemoFade2Container />} />
            </Routes>
        </Router>
    );
}
