import React from 'react'

import { Chip } from '@mui/material'

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';


export default function PriceChange(props) {

    const { text, direction } = props;

    const directionIcon = (direction) => {
        console.log(`direction ${direction}`)
        switch (direction) {
            case 'up':
                return <ArrowCircleUpIcon />
            case 'down':
                return <ArrowCircleDownIcon />
            case 'pause':
                return <PauseCircleIcon />
            default:
                return ""
        }
    }

    return (
        <Chip
            label={text}
            icon={directionIcon(direction)}
        />
    )
}