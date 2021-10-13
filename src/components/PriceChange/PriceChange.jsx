import React from 'react'

import { Chip } from '@mui/material'

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { styled } from '@mui/styles';


const ArrowUpChip = styled(Chip)`color:'#07A287'`;
const ArrowDownChip = styled(Chip)`color:'#F43C3C'`;
const PauseChip = styled(Chip)`color:'#0C77F8'`;

// TODO fix this component, need colors here

export default function PriceChange(props) {

    const { text, direction } = props;

    const directionIcon = (direction) => {
        console.log(`direction ${direction}`)
        switch (direction) {
            case 'up':
                return (
                    <ArrowUpChip
                        label={text}
                        icon={<ArrowCircleUpIcon />}
                    />
                )
            case 'down':
                return (
                    <ArrowDownChip
                        label={text}
                        icon={<ArrowCircleDownIcon />}
                    />
                )
            case 'pause':
                return (
                    <PauseChip
                        label={text}
                        icon={<PauseCircleIcon />}
                    />
                )
            default:
                return ""
        }
    }

    return directionIcon(direction)
}