import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'

const Button = ({className, href, onClick, children, px, white}) => {
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`

    const spanClasss = "relative z-10"
    return href ? (
        <a href={href} className={classes}>
            <span className={spanClasss}>{children}</span>
            {ButtonSvg()}
        </a> 
    ) : (
        <button className={classes} onClick={onClick}>
            <span className={spanClasss}>{children}</span>
            {ButtonSvg()}
        </button>
    )
}

export default Button;