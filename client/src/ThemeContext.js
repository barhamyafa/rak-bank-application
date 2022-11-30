import { createContext } from "react";
import { connect } from 'react-redux';


export const ThemeContext = createContext();

export function ThemeProvider(props) {

    return <ThemeContext.Provider value={props.them}>{props.children}</ThemeContext.Provider>;
}

const mapStateToProps = (state) => {
    return { theme: state.theme };
};

export default connect(
    mapStateToProps
)(ThemeProvider);
