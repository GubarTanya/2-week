import {Component, JSX, JSXElement} from 'solid-js';

const Button: Component<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = ({class: classname = '',value}): JSXElement =>  (
    <button data-container="action-button" class={`button ${classname}`}>{value}</button>
    );

export default Button;
