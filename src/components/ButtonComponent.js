import React from 'react';
import { Button } from '@blueprintjs/core';

export default function ButtonComponent({ onClick, intent, disabled, type, label, className, name }) {
    return (
        <Button
            className="btn btn-primary"
            onClick={onClick}
            intent={intent}
            disabled={disabled}
            type={type}
            name={name || ''}
        >
            {label || ''}
        </Button>
    );
}
