//En este archivo vamos a crear un componente Button con styled components que vamos a poder reutilizar en otras partes de mi aplicación



import styled from 'styled-components';


//Creamos el componente button cuyos estilos CSS serçan dinámicos en función de los parámetros que le indiquemos. Por ello, el background color variará en función de lo que yo le pase entre llaves. Si la propiedad variant es primary tendrá el color accentColor y sino será white

const accentColor = 'rgb(29, 161, 242)';

const Button = styled.button`
    align-items: center;
    background-color: ${props => props.variant === 'primary' ? accentColor : 'white' };
    border-radius: 9999px;
    border-style: solid;
    border-width: 1px;
    border-color: ${accentColor};
    color: ${props => (props.variant === 'primary' ? 'white' : accentColor)};
    cursor: pointer;
    display: inline-flex;
    font: inherit;
    font-weight: bold;
    min-height: 36px;
    outline-style: none;
    opacity:${props =>(props.disabled ? 'none' : 'auto')};
    padding: 0 30px;
    pointer-events: ${props =>(props.disables ? 'none' : 'auto')};
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover{
        background-color: ${props => props.variant === 'primary' ? 'rgb(26, 145, 218)' : 'rgba(29, 161, 242, 0.1)'};
    }

`;

export default Button;