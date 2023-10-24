import {Box} from '../Box';

export const Container = ({children}) => {
    return (
        <Box width="1440px" p="207px 112px">
            {children}
        </Box>
    )
}