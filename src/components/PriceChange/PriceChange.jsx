import React from 'react'

import { Chip } from '@mui/material'
import { withStyles } from '@mui/styles';

// direction icons 
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';


// custom chips 
const ArrowUpChip = withStyles({
    root: {

        backgroundColor: '#E2FFE3',
        color: '#07A287',
        fontSize: '1rem',
        fontWeight: '500'
    }
})(Chip);
const ArrowUpIcon = withStyles({
    root: {
        fill: '#07A287'
    }
})(ArrowCircleUpIcon);


const ArrowDownChip = withStyles({
    root: {
        backgroundColor: '#FDADAD',
        color: '#F43C3C',
        fontSize: '1rem',
        fontWeight: '500'
    }
})(Chip);
const ArrowDownIcon = withStyles({
    root: {
        fill: '#F43C3C'
    }
})(ArrowCircleDownIcon);

const PauseChip = withStyles({
    root: {
        backgroundColor: '#AFD2FD',
        color: '#0C77F8',
        fontSize: '1rem',
        fontWeight: '500'

    }
})(Chip);
const PauseIcon = withStyles({
    root: {
        fill: '#0C77F8'
    }
})(PauseCircleIcon);



export default function PriceChange(props) {

    const { text, direction } = props;

    const directionIcon = (direction) => {
        switch (direction) {
            case 'up':
                return (
                    <ArrowUpChip
                        label={text}
                        icon={<ArrowUpIcon />}
                    />
                )
            case 'down':
                return (
                    <ArrowDownChip
                        label={text}
                        icon={<ArrowDownIcon />}
                    />
                )
            case 'pause':
                return (
                    <PauseChip
                        label={text}
                        icon={<PauseIcon />}
                    />
                )
            default:
                return ""
        }
    }

    return directionIcon(direction)
}