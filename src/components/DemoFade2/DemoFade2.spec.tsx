import { DemoFade2Driver } from './DemoFade2.driver';
import Chance from 'chance';

const chance = new Chance();

describe('DemoFade2', () => {
    let driver: DemoFade2Driver;

    beforeAll(() => {
        driver = new DemoFade2Driver();
    });

    it('should render button', () => {
        const label = chance.word();

        const element = driver.given
            .props({
                title: label,
            })
            .when.rendered();

        const wrapperClassName = element.get.wrapperClassName();
        const innerText = element.get.label();

        expect(wrapperClassName).toContain('DemoFade2-wrapper');
        expect(innerText).toBe(label);
    });

    it('should click button', () => {
        const callback = jest.fn();

        driver.given
            .props({
                onClick: callback,
            })
            .when.rendered()
            .when.clicked();

        expect(callback).toHaveBeenCalledTimes(1);
    });
});

describe('DemoFade2 snapshots', () => {
    let driver: DemoFade2Driver;

    beforeAll(() => {
        driver = new DemoFade2Driver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
