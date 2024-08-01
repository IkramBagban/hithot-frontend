import { useContext, useMemo } from 'react';
import { ThemeContext } from '../theme/ThemeContext';

const useThemeStyles = <T>(styleCreator: (colors) => T): T => {
    const { colors } = useContext(ThemeContext);
    const styles = useMemo(() => styleCreator(colors), [colors]);
    return styles;
};

export default useThemeStyles;
