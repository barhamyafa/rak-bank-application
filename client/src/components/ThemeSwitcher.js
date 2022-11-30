import { connect } from 'react-redux';
import classnames from 'class-names';

import { toggleDarkTheme } from "../actions/index";

const ThemeSwitcher = ({ darkThemeEnabled, toggleDarkTheme }) => {
    return (
        <div>
            <label className='relative flex justify-between items-center p-2 text-xl'>
                <input type='checkbox' className='absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md'
                    checked={darkThemeEnabled}
                    onChange={toggleDarkTheme}
                />
                <span className={classnames('w-9 h-5 border border-neutral-500 flex items-center flex-shrink-0 ml-4',
                    'bg-transparent rounded-full duration-300 ease-in-out after:w-4 after:h-4',
                    'after:bg-neutralText after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4'
                )}
                />
            </label>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { darkThemeEnabled: state.theme.darkThemeEnabled };
};

export default connect(
    mapStateToProps,
    { toggleDarkTheme }
)(ThemeSwitcher);
