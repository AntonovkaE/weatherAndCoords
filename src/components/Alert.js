import React from "react";

export const Alert = ({alert}) => {
    if (!alert) {
        return null
    }
    return (
        <div className={ `alert alert-${alert.type || 'warning' } alert-dismissible` }>
            <strong>{ alert.text }</strong>
            <button type="button" className="btn-close" aria-label="Close"></button>
        </div>
    )
}
