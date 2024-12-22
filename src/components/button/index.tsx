/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const colorStyle = {
    disable: {
        fontSize: "12px",
        '& .name': {
            color: 'orange'
        }
    },
    black: {
        fontSize: "14px",
        padding: "6px 14px",
    },
    green: {
        fontSize: "16px",
        padding: "8px 20px",
    },
    blue: {
        fontSize: "16px",
        padding: "8px 20px",
    },
    yellow: {
        fontSize: "16px",
        padding: "8px 20px",
    },
    red: {
        fontSize: "16px",
        padding: "8px 20px",
    },
};


const sizeStyles = {
    small: {
        fontSize: "12px",
        padding: "2px 6px",
    },
    medium: {
        fontSize: "14px",
        padding: "6px 14px",
    },
    large: {
        fontSize: "16px",
        padding: "8px 20px",
    },
};

function Button({ disable, ButtonColor, ButtonSize, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disable}
            css={{
                ...colorStyle[ButtonColor],
                ...sizeStyles[ButtonSize]
            }}>


        </button>)
}

interface ButtonProps {
    disable: false,
    ButtonType : 'solid' | 'outline'
    ButtonColor: 'disable' | 'black' | 'green' | 'blue' | 'yellow' | 'red'
    ButtonSize: 'large' | 'medium' | 'small'
    onClick: () => void
}
