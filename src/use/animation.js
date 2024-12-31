import { useState, useContext, useEffect } from 'react';
import {ThemeContext} from "../context/ThemeContext";

export function useAnimation() {
    const { type } = useContext(ThemeContext);
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        setAnimation('');
        setTimeout(() => setAnimation('fade-in'), 50);
    }, [type]);

    return {
        animation
    }
}
