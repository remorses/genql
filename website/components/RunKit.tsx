import { Stack } from 'layout-kit-react'
import Embed  from 'react-runkit'

export const RunKit = ({ children, title = '', ...rest }) => {
    return (
        <Stack mx='20px' my='40px' {...rest}>
            <Embed source={String(children).trim()} title={title} />
        </Stack>
    )
}
