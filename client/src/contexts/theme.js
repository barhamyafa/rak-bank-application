import { createContext } from 'react';
import { connect } from 'react-redux';
import { toggleDarkTheme } from '../actions/index';

const ThemeContext = createContext();

function ThemeContextProvider({ children, darkThemeEnabled }) {

    return (
        <ThemeContext.Provider value={{ darkThemeEnabled, toggleDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
const mapStateToProps = (state) => {
    return { darkThemeEnabled: state.theme.darkThemeEnabled };
};

export default connect(
    mapStateToProps,
    { toggleDarkTheme }
)(ThemeContextProvider);

export { ThemeContext };
